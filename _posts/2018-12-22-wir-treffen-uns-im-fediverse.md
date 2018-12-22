---
layout: post
title: Wir treffen uns im Fediverse!
date: 2018-12-22 19:00:00
tags:
 - socialmedia
 - fediverse
 - mastodon
---

Der Jahreswechsel steht an, und damit zwei Gründe, sich mit Alternativen für die zentralen sozialen Netzwerke zu befassen:

1. Wir brauchen natürlich einen guten Vorsatz für das neue Jahr (oder eher für die ersten paar Wochen des neuen Jahrs)
2. Wir haben vielleicht ein bisschen Urlaub und Zeit
3. Die Bekanntwerdung des [neusten Facebook-Skandals](https://netzpolitik.org/2018/die-ultimative-liste-so-viele-datenskandale-gab-es-2018-bei-facebook/) liegt erst wenige Tage zurück

**Die Facebooks und Twitters können nicht unsere Zukunft sein.** Brauchst Du Gründe? Die Macht, die diese Konzerne konzentrieren, ist gefährlich. Sie gehen bestenfalls schlampig mit unseren Daten um und entziehen sich nahezu jeder Kontrolle. Sie beeinflussen durch intransparente Algorithmen, womit wir uns beschäftigen. Sie werden zum SPOF (Single Point of Failure) für unsere Demokratie.

**Die Zukunft muss quelloffen und dezentral sein.**

Ich habe in den letzten Monaten begonnen, mir einen eigenen Eindruck von zwei dezentralen sozialen Netzwerkdiensten zu verschaffen: [Friendica](https://friendi.ca/) und [Mastodon](https://joinmastodon.org/).

![Screenshot von Mastodon](/media/2018-12-22/mastodon-screenshot.png)

<small>Screenshot des Web User Interface von Mastodon</small>

Beide haben, aus Reiseflughöhe betrachtet, viele Gemeinsamkeiten. Sie basieren auf quelloffener Software. Sie sind dezentrale Dienste mit vielen Servern, die von unterschiedlichsten Betreibern angeboten werden. Und sie kommunizieren sogar miteinander. Zusammen bilden diese und andere Dienste, wie beispielse [Diaspora](https://diasporafoundation.org/), [GNU social](https://www.gnu.org/software/social/) und [Pleroma](https://pleroma.social/), das **Fediverse**.

Grob betrachtet sieht das Fediverse dem System E-Mail ähnlich. Auch hier ist zunächst die Domain das entscheidende Mittel zur Adressierung von Accounts. Über die Domain kann ein Server ausfindig gemacht werden, mit dem man über ein bestimmtes Protokoll sprechen kann. Was bei E-Mail das SMTP-Protokoll ist, heißt im Fediverse [OStatus](https://www.w3.org/community/ostatus/wiki/Main_Page) oder [Activity Pub](https://www.w3.org/TR/activitypub/). So wie es bei E-Mail einzelne Postfächer gibt, gibt es im Fediverse Benutzer-Accounts. Und weil man beim Adressieren eben ein ähnliches Problem hat wie bei E-Mail, entspricht auch das Schema für Benutzernamen im Fediverse dem bekannten Format einer E-Mail-Adresse.

Die Adresse

    sendung@chaos.social

steht für das Benutzerkonto mit dem Namen `sendung` auf dem Server hinter der Domain `chaos.social`. Und weil das Fediverse auf den bestehenden Protokollen des WWW aufsetzt, erreicht man diesen Server über HTTPS, nämlich unter [https://chaos.social](https://chaos.social). Und weil dieser Server (in diesem Fall Mastodon) für jedes Benutzerkonto auch eine öffentliche [Profilseite](https://chaos.social/@sendung) bereit stellt, können wir auch sehen, was der Mensch mit dieser Adresse schreibt, wem er folgt und wer ihm folgt. Ja, das bin ich.

Der Vergleich mit E-Mail eignet sich ganz gut, um das Prinzip der Dezentralität und der Adressierung zu erklären. Wie bei E-Mail ist es prinzipell jedem möglich, einen eigenen E-Mail-Dienst zu betreiben und mit anderen zu kommunizieren. (In der Praxis ist der Aufwand bei E-Mail so groß, dass die meisten von uns das anderen überlassen. Das ändert aber nichts am Prinzip.)

Um die weitere Funktionsweise der Fediverse-Dienste zu beschreiben, muss man eher auf Vergleiche mit Twitter oder Facebook zurückgreifen.

Mastodon kopiert vermutlich **alle wesentlichen Konzepte von Twitter**: Nutzer folgen anderen Nutzern. In ihrer Timeline sehen sie, was die Nutzer veröffentlichen, denen sie folgen. Beiträge, die hier nicht _tweet_ sondern _toot_ heißen, können auch weiter-veröffentlicht werden, was hier nicht _re-tweet_ heißt, sondern _boost_. Es gibt Bemühungen, Threads - also Beiträge und Antworten darauf - im Kontext bzw. isoliert darzustellen. Toots können Hyperlinks, Emoji, Medien wie Bilder, GIF-Animationen, Videos und Audiodateien enthalten.

Auch Hashtags erfüllen im Wesentlichen die Funktion, die wir von Twitter kennen. Und es scheint sogar so, als würde die Suche nach Hashtags auch verteilt ausgeführt, denn das Ergebnis enthält Beiträge von Nutzer*innen vieler Instanzen. Wie das genau funktioniert, habe ich mir bislang nicht angesehen.

Und nicht zuletzt können in Toots Nutzer*innen in Nachrichten adressiert werden. Dazu schreibt man den Nutzernamen, wie bei Twitter, mit einem vorangestellten @-Zeichen, in den Nachrichtentext. Wer mich in einem Beitrag ansprechen möchte, muss also

    @sendung@chaos.social

eingeben.

Das ist prinzipell ein bisschen länger, als wir es von Twitter gewöhnt sind. Doch die Bedienoberflächen der gängisten Fediverse-Anwendungen bieten einige Erleichterungen, damit das Adressieren einfach und fehlerfrei klapp. Und es ist natürlich jedem freigestellt, sich einen eigenen Mastodon-Server (im Jargon: eine eigene Instanz) aufzusetzen und dabei eine sehr kurze Domain und nur einen einzigen Buchstaben als Benutzernamen zu verwenden.

Was aber, wenn man nicht selbst eine Mastodon-Instanz berteiben möchte? Dann wählt man eine der vielen bestehenden aus, etwa über Sites wie https://instances.social/. Da gibt es auch Hilfestellung zu den Kriterien, zum Beispiel die Versionsnummer, die durchschnittliche Uptime und andere. Das wichtigste Kriterium dürfte aber Vertrauen in die Betreiber sein und darin, dass der Dienst auch in ein paar Monaten noch gewissenhaft administeriert wird.

Wer einen richtigen Vertrag eingehen und Geld ausgeben will, findet auch spezialisierte Hosting-Angebote für Mastodon.

Was ist mit **Friendica**? Kurz: Damit habe ich mich bisher weniger beschäftigt. Ich behaupte, dass sich Friendica eher an Facebook anlehnt als an Twitter. Grundsätzlich eignet sich die Plattform sowohl technisch, als auch durch die Gestaltung der Oberfläche, um etwas längere Beiträge zu veröffentlichen.

Bei meinen ersten Versuchen kam mir bei Friendica aber alles mindestens ein bisschen zu kompliziert vor.

Das wiederum wirft ein besonders positives Licht auf Mastodon. Dort spürt man, dass sich jemand Gedanken macht und sich Mühe gibt, Benutzer wertschätzt und will, dass sie Spaß an der Benutzung haben. Was bei einem Open-Source-Projekt, das als One-Man-Show gestartet ist, ja nicht selbstverständlich ist.

Und damit ist Mastodon auch meine klare Empfehlung für den Einstieg ins Fediverse. Ganz besonders natürlich für alle, die jetzt bereits Twitter nutzen.

Nach meinen ersten Erfahrungen bin ich überzeugt, dasss man nur dann wirklich über das Fediverse und seine Chancen sprechen kann, wenn man es selbst nutzt. So fallen mir nun auch Aspekte auf, über die ich mir vorher keine Gedanken gemacht habe.

Ein Beispiel: Bei Mastodon und Co. bilden sich "lokale" Communities heraus, wobei sich lokal hier auf die jeweilige Instanz bezieht. Wer auf dem selben Server residiert, hat sich vor der Registrierung auf die selben Regeln und Werte eingelassen, wie alle anderen auf der Instanz. Dazu kommt, dass in Mastodon (und in Friendica) die Anzeige der lokalen Timeline, also aller Nachrichten aller Nutzer*innen dieser Instanz, in der Navigation prominent angeboten wird. Ein Aspekt, der Twitter und auch Facebook in dieser Form fehlt und Mastodon wie auch Friendica von ihren zentralisierten Vorbildern (bald werden wir sagen: Vorgängern) abhebt.

Zum Schluss noch eine Antwort zu einem Einwand, den ich oft höre, sobald ich Kollegen oder Freunde auf alternativen zu Facebook oder Twitter anspreche: "Was soll ich als einziger in einem sozialen Netzwerk?".

Keine Angst, Du bist nicht allein.

Die Zahl der Mastodon-Instanzen liegt aktuell in den tausenden ([Quelle 1](https://instances.social/list/old), [Quelle 2](https://mnm.social/instances/)). Die Zahl der Nutzerkonten dürfte im siebenstelligen Bereich liegen. Mehr als genug, um jetzt damit anzufangen, Erfahrungen zu sammeln, ein Netzwerk aufzubauen und andere ins Fediverse einzuladen.

Meinen Benutzernamen kennst Du ja schon mal. Ich freue mich auf Dein "Hello World".

Ein paar Links zum Weiterklicken:

- https://besser.demkontinuum.de/2018/12/mastodon-s01e06/ - Eine Podcast-Episode, in der Mastodon detailreich erklärt wird.

- https://mastodon.social/@Gargron - Mastodon-Profil von Eugen Rochko, Entwickler von Mastodon

- https://github.com/tootsuite/mastodon - Mastodon auf Github

- https://www.patreon.com/mastodon - Patreon-Projektseite zu Mastodon

- https://mastodon.social - Die von Eugen Rochko betriebene Mastodon-Instanz ist offen für Registrierungen und ein einfacher Weg, einen Mastodon-Account zu bekommen.