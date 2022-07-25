function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  let parts = dateString.split("T");
  return `${parts['0']} ${parts['1'].substr(0, 5)}`;
}

function loadMastodonComments(evt) {
  console.debug(evt);
  document.getElementById("load-comments").innerHTML = `Loading <svg class="spinner" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
</svg>`;

  let host = evt.target.dataset["host"];
  let id = evt.target.dataset["id"];
  let url = `https://${host}/api/v1/statuses/${id}/context`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data['descendants'] && Array.isArray(data['descendants']) && data['descendants'].length > 0) {
          document.getElementById('mastodon-comments-list').innerHTML = "";

          data['descendants'].forEach(function(reply) {
            // Beautify display name
            let display_name = escapeHtml(reply.account.display_name);
            reply.account.emojis.forEach(emoji => {
              display_name = display_name.replace(`:${emoji.shortcode}:`,
                `<img src="${escapeHtml(emoji.static_url)}" alt="Emoji ${emoji.shortcode}" height="20" width="20">`);
            });

            mastodonComment =
              `<div class="mastodon-comment rounded-lg p-8 pb-8 mt-4 mb-4 bg-slate-100 dark:bg-slate-800" id="${reply.url}">
                  <div class="flex space-x-4">
                    <div class="shrink-0">
                      <img class="h-16 w-16 m-0 rounded" src="${escapeHtml(reply.account.avatar_static)}" alt="Avatar of user ${display_name}" />
                    </div>
                    <div>
                      <a href="${reply.account.url}" target="_blank" rel="noopener noreferrer nofollow">${(display_name ? "<strong>"+display_name+"</strong>" : "<strong>"+reply.account.acct.split("@")[0]+"</strong>")} &ndash; ${escapeHtml(reply.account.acct)}</a><br/>
                      <small><a class="date" href="${reply.url}" target="_blank" rel="noopener noreferrer nofollow">${formatDate(reply.created_at)} 🔗</a></small>
                    </div>
                  </div>
                  <div class="prose dark:prose-invert mt-4 leading-6">${reply.content}</div>
                </div>`;

            document.getElementById('mastodon-comments-list').appendChild(DOMPurify.sanitize(mastodonComment, {'RETURN_DOM_FRAGMENT': true}));
          });
      } else {
        document.getElementById('mastodon-comments-list').innerHTML = "<p>Not comments found</p>";
      }
    });
}

document.getElementById("load-comments").addEventListener("click", loadMastodonComments);
