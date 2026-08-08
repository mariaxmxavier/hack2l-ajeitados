---
type: DatasetPartition
title: Benign samples - batch 0052
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 10201
record_end: 10400
---

# Benign samples — batch 0052

## Record 010201

**Label:** `benign`

<pre>
First, thanks for all the rpms, and especially ogle (which comes very close to 
working perfectly on my Cyrix 333 box!).Now, I desperately need some games, especially TuxKart and FlightGear, but I 
forever get stuck on a dependency: everything needs OpenGL. Querying the rpm 
database for OpenGL gets me nowhere fast. Can anyone point me in the right 
direction? What, in RedHat, provides OpenGL?Sorry for the question, but I&#x27;ve just switched from SuSE and I&#x27;m used to being 
able to tell YaST to sort out the dependencies........CheersJohn_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 010202

**Label:** `benign`

<pre>
hpl nom for december 5 , 2000 ( see attached file : hplnl 205 . xls ) - hplnl 205 . xls
</pre>

## Record 010203

**Label:** `benign`

<pre>

Luiz Felipe Ceglia said:&gt; 	:0fw
&gt; 	| /usr/bin/spamassassin -c 
&gt; 			/etc/mail/spamassassin/rulesare you using exactly that -- with the line break -- or is it like this:  :0fw
  | /usr/bin/spamassassin -c /etc/mail/spamassassin/rulesall on one line?  it should be the latter.--j.
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 010204

**Label:** `benign`

<pre>
On Tue, 27 Aug 2002, David Neary wrote:&gt; &gt; Actually the following would be in some way sensible:
&gt; &gt; echo -e &quot;`echo &quot;$enc&quot; | sed &#x27;s/%\([0-9a-fA-F]\{2,2\}\)/\\\x\1/g&#x27;`&quot;
&gt; 
&gt; Why {2,2}? Why not {2}?no idea.the above was something along the lines i was attempting, once i 
realised it was a straight swap. but i couldnt get awk&#x27;s gensub to 
insert the \x for %&#x27;s and =&#x27;s.anyway, in the end i found something on the internet and adapted it:function decode_url (str,    hextab,i,c,c1,c2,len,code) {        # hex to dec lookup table
        hextab [&quot;0&quot;] = 0;       hextab [&quot;8&quot;] = 8;
        hextab [&quot;1&quot;] = 1;       hextab [&quot;9&quot;] = 9;
        hextab [&quot;2&quot;] = 2;       hextab [&quot;A&quot;] = 10;
        hextab [&quot;3&quot;] = 3;       hextab [&quot;B&quot;] = 11;
        hextab [&quot;4&quot;] = 4;       hextab [&quot;C&quot;] = 12;
        hextab [&quot;5&quot;] = 5;       hextab [&quot;D&quot;] = 13;
        hextab [&quot;6&quot;] = 6;       hextab [&quot;E&quot;] = 14;
        hextab [&quot;7&quot;] = 7;       hextab [&quot;F&quot;] = 15;        decoded = &quot;&quot;;
        i   = 1;
        len = length (str);
        while ( i &lt;= len ) {
                c = substr (str, i, 1);
                # check for usual start of URI hex encoding chars
                if ( c == &quot;%&quot; || c == &quot;=&quot; ) {
                        if ( i+2 &lt;= len ) {
                                # valid hex encoding?
                                c1 = toupper(substr(str, i+1, 1));
                                c2 = toupper(substr(str, i+2, 1));
                                if ( !(hextab [c1] == &quot;&quot; &amp;&amp; hextab [c2] == &quot;&quot;) ) {
                                        code = 0 + hextab [c1] * 16 + hextab [c2] + 0
                                        c = sprintf (&quot;%c&quot;, code)
                                        i = i + 2
                                }
                        }
                # + is space apparently
                } else if ( c == &quot;+&quot; ) {
                        c = &quot; &quot;
                }
                decoded = decoded c;
                ++i;
        }
        return decoded
}&gt; Cheers,
&gt; Dave.&gt; PS the late reply is because the footer on the original mail (If
&gt; you received this mail in error yadda yadda) got caught in my
&gt; spam filter, and ended up in my junkmail directory.he he...might not have been the footer - check my headers. :)regards,
-- 
Paul Jakma	paul@clubi.ie	paul@jakma.org	Key ID: 64A2FF6A
	warning: do not ever send email to spam@dishone.st
Fortune:
One nuclear bomb can ruin your whole day.
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 010205

**Label:** `benign`

<pre>
entex revised estimates for 4 / 00 the attached spreadsheet has the revised estimates for entex citygate loads for april . if you need me to get with pops / unify to correct or change the estimates please give me a call . thanks gary
</pre>

## Record 010206

**Label:** `benign`

<pre>
URL: http://www.aaronsw.com/weblog/000637
Date: 2002-10-05T21:15:55-06:00I guess it&#x27;s time to reveal the incredibly kind invitation I received[1]. As 
many of you may have found out or guessed, I will be attending oral argument 
for the Eldred case[2] before the Supreme Court. I&#x27;m incredibly excited, as you might imagine. Visiting the Supreme Court would 
be quite enough, but seeing such an important case...Dayenu! When Lessig asked 
me if I was free that day to come, I laughed because I couldn&#x27;t (and still 
can&#x27;t) think of anything I&#x27;d rather do than attend. I am eternally grateful to 
Lessig for the chance to attend. On the other hand, I&#x27;m sort of embarassed to 
have the opportunity, when there are surely others who deserve it far more than 
me. Luckily, it seems that such deserving others will be able to get seats by 
camping in line with us. So, I&#x27;ll be arriving in D.C. on Tuesday, attending an 
Eldred/Duke/EPIC/Bookmobile superparty, and then camping in line with Seth 
Schoen[3], Lisa Rein, Jace Cooke but unfortunately not Cory Doctorow. If you&#x27;d 
like to come with us, let me know. I was hoping I&#x27;d be able to take notes and post them to my weblog for those who 
couldn&#x27;t make it, but as I read in today&#x27;s Times, only lawyers and those with 
official press credentials are allowed to take notes![4] I think this is 
outrageous, but hopefully I will be able to remember enough to provide an 
interesting account. In a related irony, today was &quot;Disney Day&quot; at Borders[5], where they played 
Disney rock songs with the volume turned up too loud, disturbing my usual habit 
of reading a book there. However, I did manage to skim through _The Practice of 
Programming_. In an unrelated note, if you haven&#x27;t been electrocuted by a Model T spark plug, 
I highly recommend it.[1] http://www.aaronsw.com/weblog/000609
[2] http://eldred.cc/
[3] http://vitanuova.loyalty.org/2002-10-02.html
[4] http://www.nytimes.com/2002/10/05/opinion/05AMAR.html
[5] http://www.bordersstores.com/events/event_detail.jsp?SEID=15127444

</pre>

## Record 010207

**Label:** `benign`

<pre>

&gt; Well, just to take this thread off topic - does anyone know what&#x27;s
&gt; involved in serving streaming video? I assume that
&gt;  the only practical alternatives are MS and Real, and that it&#x27;s likely
&gt; to cost some $$$ for the software.A quick Google search turns up:http://developer.apple.com/darwin/projects/streaming/index.html
Darwin streaming media serverhttp://mpeg4ip.sourceforge.net/index.php
MPEG4IP: Open Source, Open Standards, Open StreamingMPEG4IP provides an end-to-end system to explore MPEG-4 multimedia. The
package includes many existing open source packages and the &quot;glue&quot; to
integrate them together. This is a tool for streaming video and audio that
is standards-oriented and free from proprietary protocols and extensions.Provided are an MPEG-4 AAC audio encoder, an MP3 encoder, two MPEG-4 video
encoders, an MP4 file creator and hinter, an IETF standards-based streaming
server, and an MPEG-4 player that can both stream and playback from local
file.Our development is focused on the Linux platform, and has been ported to
Windows, Solaris, FreeBSD, BSD/OS and Mac OS X, but it should be relatively
straight-forward to use on other platforms. Many of the included packages
are multi-platform already.
Both sound interesting, and low $$.- Jimhttp://xent.com/mailman/listinfo/fork

</pre>

## Record 010208

**Label:** `benign`

<pre>
Gianni Ponzi wrote:
&gt; I have a prob when trying to install Linux (tried RedHat, Suse) on my
&gt; laptop. I can start the install but after about 2min, the whole pc just
&gt; dies.Can you disable DMA and see if this makes a difference?Nick-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010209

**Label:** `benign`

<pre>
fw : socal rls / peaking tariff fyi , kim . - - - - - original message - - - - - from : hass , glen sent : thu 8 / 2 / 2001 3 : 42 pm to : harris , steven ; fossum , drew ; miller , mary kay ; watson , kimberly cc : subject : socal rls / peaking tariff in the cpuc &#x27; s meeting today , the commission approved the proposed rls / peaking tariff which provides for a bypass peaking rate when customers bypass their system except for peaking service . it appears they approved the june 19 th proposed decision which establishes a cost based rate made up of four components - - customer charge , public purpose program charge , reservation charge and a volumetric interstate transition cost surcharge . as soon as the order is published i &#x27; ll review the final order and advise if this is still true or if any changes were made . socal will have 10 days from the order to file an advice letter with conforming tariff sheets . gh
</pre>

## Record 010210

**Label:** `benign`

<pre>
re : for what ever reason , in the system , he is coded in the executive committee job group . your reports only include job groups of md down to managers . ranabir is coded wrong because he is not an executive committee member and this is why he is not in any of your reports . i will get with is hr rep and get this corrected . if you would like , in the meantime , i can run the report information on him . thanks , tarsie broussard ews compensation ext . 57476 - - - - - original message - - - - - from : kitchen , louise sent : thursday , april 12 , 2001 2 : 36 pm to : broussard , tharsilla cc : oxley , david subject : re : but he is not in any of my files - why not ? from : tharsilla broussard / enron @ enronxgate on 04 / 12 / 2001 02 : 34 pm to : louise kitchen / hou / ect @ ect , david oxley / enron @ enronxgate cc : subject : re : yes , ranabir dutt is in system reporting in the ena treasury oxley , david subject : re : also apparently there is a gentleman called ranabir dutt who is a vp in enron americas . can you check into this for me ? thanks &gt; louise kitchen 04 / 12 / 2001 01 : 59 pm to : tharsilla broussard / enron @ enronxgate cc : david oxley / enron @ enronxgate subject : kerrigan - please produce a redraft for joe deffner with an increase in salary to $ 125 , 000 per annum . ( brian joined in september 1998 and has never had a pay rise ) please produce a draft contract for timothy proffitt which includes a base of $ 125 , 000 , cash of $ 50 , 000 and stock of $ 100 , 000 . thanks louise
</pre>

## Record 010211

**Label:** `benign`

<pre>
query : chinese grammatical markers i &#x27; m interested in any information regarding the diachronic development of the following grammatical markers in various chinese languages ( apologies for the email-mutilated transcriptions ) : ( 1 ) mandarin : [ de ] ( the &quot; genitive &quot; / &quot; relative &quot; marker ) ( 2 ) mandarin : [ ge ] ( the general numeral classifier ) ( 3 ) shanghainese : [ ge ] ( the &quot; genitive &quot; / &quot; relative &quot; marker ) ( 4 ) hokkien : [ e ] ( a ) ( the &quot; genitive &quot; / &quot; relative &quot; marker ) ( b ) ( the general numeral classifier ) ( 5 ) teochew : [ kai ] ( a ) ( the &quot; genitive &quot; / &quot; relative &quot; marker ) ( b ) ( the general numeral classifier ) ( 6 ) cantonese : [ ge ] ( the &quot; genitive &quot; / &quot; relative &quot; marker ) [ go ] ( the general numeral classifier ) [ dik ] ( the ligature ) more specifically : question 1 : which of the above markers are historically / etymologically related to which others , ie . deriving from a diachronically reconstructable common source ? ( eg . are mandarin [ de ] and cantonese [ dik ] diachronically related ? , etc . etc . ) question 2 : ( specific to hokkien and teochew ) most native speakers of hokkien and teochew , who are also speakers of mandarin , are of the opinion that there are two distinct markers exhibiting accidental homophony : a &quot; genitive &quot; / &quot; relative &quot; [ e ] / [ kai ] corresponding to mandarin [ de ] , and a &quot; classifier &quot; [ e ] / [ kai ] corresponding to mandarin [ ge ] . question 2a : is it demonstrably the case that [ e ] and [ kai ] are the respective products of diachronic coalescence of distinct forms at some earlier stage of the language ? question 2b : are there any valid synchronic arguments for positing two distinct lexical items , ie . two [ e ] &#x27;s in hokkien , and two [ kai ] &#x27;s in teochew ? ( i consider the choice of characters conventionally used to represent these markers as irrelevant . ) note : i am a general linguist , not a sinologist , and i do n&#x27;t read or speak chinese . i would greatly appreciate either your own views on the above questions , or references to published works addressing these questions . however , if the references happen to be in chinese , i would be extremely grateful if you could provide a synopsis of their contents . thanks , david gil national university of singapore ellgild @ nusvm . bitnet
</pre>

## Record 010212

**Label:** `benign`

<pre>
    
 Hello,
   
         I just installed redhat 7.2 and I think I have everything 
working properly.  Anyway I want to install mplayer because I heard it 
can play quicktime movs.  I apt-get source mplayer and dl&#x27;d it to 
/usr/src.          I tried to just rpm --rebuild mplayer-20020106-fr1.src.rpm, 
then I get ; mplayer-20020106-fr1.src.rpm: No such file or directory.         Any help or a link to some document would be appreciated, Thanks
-rob
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 010213

**Label:** `benign`

<pre>
sum : imperatives without you subjects content - length : 3573 summary of responses to my query on imperatives without you subjects my original query asked for references and suggestions concerning apparent imperatives with indefinite noun phrase subjects like : do n&#x27;t anybody move . all the band members leave the room now . all in favor say &quot; aye . &quot; many thanks to all the respondents : suzanne kemmer , susan fischer , bob frank , jussi karlgren , steven schaufele , larry horn , arnold zwicky , alan huffman , christer platzack , marie egan , michael flier , bruce nevin , kripka sundar , and rosta , kimberly weiss , bruce downing , anton sherwood , bernard comrie , inger rosengren , chase wrenn , peter coopmans horn , fischer and flier suggested checking the subject status of anybody , all etc by looking at tags , where it seems that the under - lying you reappears , whereas tags with anybody and all sound bad . do n&#x27;t anybody move , will you / * will they ? all in favor say &quot; aye , &quot; won&#x27;t you / * won&#x27;t they ? this correlates with the fact that the indefinites can be understood as specifying the reference of you such that anybody equates with &#x27; any one of you &#x27; , all with &#x27; all of you &#x27; and so on . in a similar vein , rosta , sundar , schaufele and comrie suggest that anybody and all are the lexical realization of a pragmatic addressee you and a presupposed agent you . weiss , nevin and sherwood analyze the examples as containing a vocative anybody and all with a corresponding regular 2nd person imperative . huffman and wrenn see these apparent imperatives as subjunctive sentences , so that the occurrence of anybody and all does n&#x27;t require any special comment . egan and karlgren point out the existence of 1st and 3rd person imperatives in greek and german . thus in german : gehen wir ins kino roughly &#x27; let &#x27;s go to the movies &#x27; contains 1st person plural wir &#x27; we &#x27; with imperative gehen . this too would suggest that imperatives with 3rd person subjects present no anomaly . these respondents and others mentioned above cited the references below . downing , bruce . 1969 . vocatives and 3rd - person imperatives in english . papers in linguistics 1 , 3 : 570-92 . zwicky , arnold . 1987 . rev . of davis . the english imperative . linguistics 25 , 4 : 805-810 . zwicky , a . 1988 . on the subject of bare imperatives in english . on language % stockwell festschrift % , ed . by duncan - rose et al . croom helm . beukema , f . &amp; p . coopmans . 1989 . a gb perspective on the imperative in english . journal of linguistics 25 : 417-36 . zanuttini . 1991 . u of pennsylvania dissertation . platzack , chr . &amp; i . rosengren . 1994 . on the subject of imperatives . sprache &amp; pragmatics . to appear . takahashi , hide . to appear . language sciences . thank you to all who responded . once i &#x27; ve had a look at the various references , i may offer a further comment to linguist . best wishes , neal norrick tb0nrn1 @ mvs . cso . niu . edu
</pre>

## Record 010214

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-3,8719499,1440/
Date: Not suppliedSufferers fail to produce effective amounts of key bacteria-killing molecules - 
the discovery raises hopes of new treatments for millions

</pre>

## Record 010215

**Label:** `benign`

<pre>
This MSDN mail thing reminds me of how I&#x27;ve documented this feature of
SpamAssassin here so that our users understand it.I define &quot;Solicited Commercial Email&quot; vs &quot;Unsolicited Commercial Email&quot; -
the latter being SPAM. As SpamAssassin basically looks for &quot;Commercial
Email&quot;, both get hit, and that&#x27;s something they must understand.Our SA documentation further tells users to filter off their SCE before
applying a SA rule - gets rid of 100% of the problem as the users know who
is sending them SCE.-- 
CheersJason Haar
Information Security Manager, Trimble Navigation Ltd.
Phone: +64 3 9635 377 Fax: +64 3 9635 417
PGP Fingerprint: 7A2E 0407 C9A6 CAF6 2B9F 8422 C063 5EBB FE1D 66D1
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk

</pre>

## Record 010216

**Label:** `benign`

<pre>
URL: http://www.livejournal.com/talkread.bml?journal=jwz&amp;itemid=60761
Date: Not suppliedhttp://www.livejournal.com/talkread.bml?journal=jwz&amp;itemid=60761

</pre>

## Record 010217

**Label:** `benign`

<pre>
caiso atc final comp hel 1 01 / 18 / 2002 full day url
</pre>

## Record 010218

**Label:** `benign`

<pre>
re : ( no subject ) great , please , let me know . there are several good films playing currently . vince jlpnymex @ aol . com on 04 / 04 / 2000 10 : 09 : 28 am to : vince . j . kaminski @ enron . com cc : subject : re : ( no subject ) vince , i will check with david and get back with you . i still want to hear about your california trip . jana
</pre>

## Record 010219

**Label:** `benign`

<pre>
re : pg &amp; e texas contract 5098 - 695 for 2 / 00 this issue still has not been resolved , and it is effecting the pg &amp; e contract 5095 - 037 , hplc transport contract ta 99 - 027 , several deals on the interconnect report , and causing payment issues for katherine herrera to panenergy marketing . i have sent several emails , faxed the daily &#x27; s and left voice messages , but have not received any updates to this issue . - - - - - - - - - - - - - - - - - - - - - - forwarded by sherlyn schumack / hou / ect on 05 / 22 / 2000 09 : 27 am - - - - - - - - - - - - - - - - - - - - - - - - - - - stacey neuweiler 03 / 22 / 2000 12 : 43 pm to : sherlyn schumack / hou / ect @ ect cc : subject : re : pg &amp; e texas contract 5098 - 695 for 2 / 00 sherlyn - i am looking into this with lorraine to figure this out . we did not nominate this for the days you are referring to , but lorraine says she flowed this gas even though i cut the volume . i will let you know when this is resolved . thanks .
</pre>

## Record 010220

**Label:** `benign`

<pre>
sending customer information from envision during our envision training session the question came up as to whether or not we can send documents to our customers from envision via email . after working with sylvia thomas , the answer is yes and no . yes , we can get documents form envision to the customer easily . no we can &#x27; t do it through email . sylvia and her team , however , are going to look into the possibility of being able to send information from envision securely through email . in the meantime , you can fax information directly from envision to your customer . directions are attached . if you have any questions or problems , feel free to call . dennis p . lee ets gas logistics ( 713 ) 853 - 1715 dennis . lee @ enron . com
</pre>

## Record 010221

**Label:** `benign`

<pre>
thanks again vince , i thank you again for all your help . ? i will continue to search for job opportunities at enron , and hopefully be able to find a match for me . how is your son doing ? is he still interested in computers ? there is a promising future for high - tech guys . regards ? carla di castro marketing mfr group , inc . one riverway , ste 1900 houston , tx 77056 - 1951 phone ( 713 ) 353 - 8180 office ( 713 ) 622 - 1120
</pre>

## Record 010222

**Label:** `benign`

<pre>
threatened sudan languages ii . threatened sudan languages : response &gt; from roger blench , cambridge i would like to thank the many people who responded to my posting on threatened languages of kordofan . it seems there is a large unsatisfied need out there to work with real speakers in situ , which is very encouraging for individuals such as myself who often feel marooned in the arid wastes of theory . i am attempting to set up a direct email address for those who have expressed interest and we will attempt to sort and answer all the queries with more detailed information as soon as possible . i append to this a few reflections occasioned by the response which you can ignore . 1 . of all the countries mailed the one major nation from which there was absolutely no response was england . this is disappointing , but not at all surprising . i had always suspected that both anthropology and field linguistics in england were closely bound up with the empire and that now the empire has gone , inward-looking has become the rule . anthropology i have had to largely discard now that the seminar rooms are awash with post-modernist chitchat , while linguistics seems bent on disappearing up its own theoretical orifices . 2 . the evident desire to go out and work with informants in context in order to actually assist communities ( as opposed to the parade of taxi-driver informants who have provided much of the &quot; african &quot; language material these last few years , especially in north america ) makes one ask why field linguistics has such a low prestige and why the making of dictionaries and the preparation of reference grammars is a barely acceptable activity ( as measured by the difficulty in getting these published ) . 3 . i posted a message about sudan , but every african country has threatened languages that require immediate attention . my work on the language atlas of nigeria ( finally published recently ) has made me aware of at least 50 languages in nigeria that are close to extinction . why , for example , is it easier to hold conferences and make up committees on threatened languages than to actually pay somebody to go out and do some basic work ? thank you again for the encouraging response . roger blench
</pre>

## Record 010223

**Label:** `benign`

<pre>
hub destructions - rough draft in progress please see attached , would love feedback .
</pre>

## Record 010224

**Label:** `benign`

<pre>
coal initiative john &amp; louise - to follow up on our previous meeting regarding the coal initiative , i &#x27; ve attached a brief description of the approach going forward , including some first - cut proforma results . our goal over the next month is to more fully vet the cost and operations numbers in the attached and to nail down probable sites . in mid - april , after we &#x27; ve more fully vetted the costs , we &#x27; ll route our detailed proforma . after reviewing , let me know if you have questions or want to discuss further . mitch
</pre>

## Record 010225

**Label:** `benign`

<pre>
URL: http://scriptingnews.userland.com/backissues/2002/09/23#When:9:19:32AM
Date: Mon, 23 Sep 2002 16:19:32 GMTShelley Powers raises[1] some interesting questions re whether RDF has a place 
in syndication. She says that RDF is trying to build a persistent database (aka 
the Semantic Web) and RSS is trying to flow news that has a short lifespan. I 
had not heard this point before. It&#x27;s worth thinking about. [1] http://weblog.burningbird.net/archives/000541.php

</pre>

## Record 010226

**Label:** `benign`

<pre>
vp candidate greg shea i would like to pursue an offer to mr . shea prior to the next executive committee meeting on may 7 , 2001 . please forward your comments or questions by tuesday , may 1 , 2001 so that i can extend the offer by wednesday , may 2 , 2001 . you will find attached the recommendation letter and his resume . regards , john lavorato tammie schoppe on behalf of john lavorato .
</pre>

## Record 010227

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8381145,215/
Date: 2002-09-30T03:04:58+01:00*Arts:* Fourth art raid on philanthropist&#x27;s home once targeted by the IRA and 
Dublin gangster Martin Cahill.

</pre>

## Record 010228

**Label:** `benign`

<pre>
It&#x27;s official, the holidays are here.  I got HTML mail from one of the 
little catalogs I&#x27;ve been known to purchase from....basically the front 
page of their first holiday catalog. Must have been released simultaneously with mailing for a delivery target 
of just after Labor Day.Ick.Eirikur

</pre>

## Record 010229

**Label:** `benign`

<pre>
Tom  writes:&gt; MACROgenetic activites have decades on decades of testing...
&gt; MICROgentic  activities DO NOT.An interesting idea I heard of was to use gene maps &amp; genetic info
about animals to guide the breeding process - essentially shortening
the iteration time with genetic information, but not touching any
genes themselves.-- 
Karl Anderson      kra@monkey.org           http://www.monkey.org/~kra/
http://xent.com/mailman/listinfo/fork

</pre>

## Record 010230

**Label:** `benign`

<pre>
re : tanya &#x27; s vacation shirley , i am going to take 5 vacation days in march , 3 / 13 / 00 - 3 / 17 / 00 . these are the days that i did not use in 1999 and vince approved that i take them this year . tanya .
</pre>

## Record 010231

**Label:** `benign`

<pre>
enron update following our announcement of an additional of $ 1 billion credit line , standard &amp; poor &#x27; s ( s &amp; p ) today downgraded enron &#x27; s long - term credit rating one notch from bbb + to bbb and short - term rating from a 2 to a 3 . we expected this , because it is not unusual to be downgraded after using assets to secure credit . this is still above investment grade . the ratings of our pipelines northern natural gas and transwestern have also been lowered from a - to bbb . in s &amp; p &#x27; s words , &quot; their ratings [ are now ] in line with those of the parent company to reflect s &amp; p &#x27; s view that enron &#x27; s pipeline assets have become more strategic to the company . &quot; s &amp; p also said , &quot; [ we continue ] to believe that enron &#x27; s liquidity position is adequate to see the company through the current period of uncertainty , and that the company is working to provide itself with an even greater liquidity cushion through additional bank lines and pending asset sales . &quot; as i &#x27; ve said before , building on our liquidity position through additional credit lines maintains our counterparties &#x27; confidence and strengthens our core businesses . it &#x27; s important for you to know that our gas and power numbers - which account for more than 95 percent of our trading activity - indicate that our customer base is not withdrawing , closing out positions , or reducing transaction levels as a result of credit concerns . in fact , enrononline trading volumes are currently experiencing above - normal activity . we will continue to update you as new developments arise . thank you .
</pre>

## Record 010232

**Label:** `benign`

<pre>
machine translation summit vi mt summit vi : &quot; machine translation : past , present , future &quot; catamaran resort hotel san diego , 29 october-1 november 1997 http : / / www . isi . edu / natural-language / mtsummit . html a once - in-a - lifetime opportunity : no serious mt - ite can afford to miss mt summit vi in san diego next october . hosted by the association for machine translation in the americas ( amta ) on behalf of the international association for machine translation ( iamt ) , this year &#x27;s summit coincides with the 50th anniversary of machine translation . the celebration will be truly memorable . amta and its cooperating host institution , the information sciences institute / university of southern california , take great pleasure in inviting you to join us in commemorating this event . schedule : the following schedule gives an overview of the events that have been planned : tuesday , 28 october : 12 - hour excursion to ensenada ; all-day workshops on interlinguas / standards wednesday , 29 october : 3 - hour tutorials in morning and afternoon ; registration ; opening of exhibits / reception , 6 : 30 p . m . thursday , 30 october : plenary and parallel sessions , 9 : 00 a . m . - 5 : 30 p . m . ; exhibits , 10 : 30 - 5 : 30 p . m . ; boat cruise , 6 : 00 - 7 : 30 p . m . ; beach luau , 7 : 30 p . m . friday , 31 october : plenary and parallel sessions , 9 : 00 a . m . - 5 : 30 p . m . ; exhibits , 10 : 30 - 5 : 30 p . m . ; banquet , boat leaves at 6 : 30 p . m . saturday , 1 november : plenary and parallel sessions , 9 : 00a . m . - 5 : 30 p . m . ; exhibits , 10 : 30 - 3 : 00 p . m . the program : a rich menu of invited talks , submitted papers , and theater-style system presentations , together with a panel that will reunite early mt pioneers , will give special meaning to the conference &#x27;s theme , &quot; machine translation : past , present , and future . &quot; in a format combining both plenary and parallel sessions , the three - day program , including all day saturday , covers the trajectory of mt across the decades from the perspective of researchers , developers , and users . the session topics , to be addressed by experts from around the world , include : early mt history current state of mt mt r&amp;d around the world the shape of commercial mt systems production mt the market perspective what do users need ? whither mt ? parallel to these main topics will be a second track of sessions that will include submitted papers and live system presentations in a theater-style setting . all sessions will be audiotaped , and copies of the tapes will be available for purchase on-site shortly after each session ends . tutorials and workshops on wednesday , 29 october , participants are offered a selection of four 3 - hour tutorials : morning , 9-12 a . m . &quot; a gentle introduction to mt : theory and current practice &quot; - eduard hovy &quot; making mt work for you &quot; - marjorie leo &#x27; n afternoon , 2 - 5 p . m . &quot; mt evaluation : old , new , and recycled &quot; - john white &quot; postediting mt : strategies and methods &quot; - karin spalink in addition , two workshops-one on the subject of interlinguas and the other on standardization-are being offered on tuesday , 28 october , outside the framework of the conference for attendees who wish to come a day earlier . there will be a nominal charge . those interested should contact the organizers directly . steve helmreich ( shelmrei @ crl . nmsu . edu ) is coordinating the workshop on interlinguas , and alan melby ( melbya @ byu . edu ) is responsible for the one on standards . exhibits : in addition to the theater-style system presentations in the regular program , throughout the conference mt developers will also be showcasing their latest breakthroughs in the exhibit hall . exhibits coordinator kim belvin ( kbelvin @ ucsd . edu ) has put out a call for exhibitors and is expecting a record-breaking array of products and systems . this will be &quot; one-stop shopping &quot; at its best for all mt - ites , whether their interest is in purchasing or licensing mt systems or in viewing , understanding , and comparing them . there will also be tabletop exhibit space , available at a lower fee , for publishers and nonprofit research groups . anyone interested in exhibiting should contact kim at the e-mail address above as soon as possible because booths will be assigned on a first-come , first-served basis and there may not be enough room for all who want to exhibit . related events : because of the celebratory nature of this year &#x27;s summit , a number of other exciting activities will be rounding out the rest of the conference schedule . an all-day excursion to ensenada , a major mexican seaport and tourist center , is planned for tuesday , 28 october . this spectacular 50 - mile ride down the baja california coast will include a stop at rosarito beach ; a typical mexican lunch at a restaurant with breathtaking views ; a tour of ensenada followed by time for shopping , wine-tasting , museum-going , or strolling ; and an elegant gourmet dinner by the ocean at sunset-all this for us $ 65 . 00 . tutorials and registration will take place all day wednesday , 29 october , and the conference proper will open with the 50th anniversary reception at 6 : 30 p . m . in the exhibit area . the reception is complimentary , sponsored in part by logos corporation . box lunches will be available during the three days of the conference . tickets for the three lunches may be purchased for a total of us $ 18 . 00 . on the morning of thursday , 30 october , there will be a welcome breakfast for participants &#x27; spouses or other traveling companions , at which time they will be given suggestions of various things to do in the san diego area . thursday evening will be a double-header . at 6 : 00 p . m . the hotel &#x27;s magnificently detailed triple-deck sternwheeler , the &quot; wm . d . evans , &quot; will take participants and their companions on a complimentary cruise of mission bay , sponsored in part by systran software . during the cruise the entertainment will include drawings for our exciting mt - oriented raffle ( see separate story ) , to be emceed by bill fry . on disembarkation at 7 : 30 p . m . there will be a hawaiian luau on the beach ( us $ 20 . 00 per person ) . finally , the banquet ( us $ 50 . 00 per person ) will be held on friday , 31 october , on the top floor of the bahia hotel , a sister property of the catamaran , also on mission bay . this site was chosen for its spectacular nighttime views stretching to mexico in the south and la jolla in the north . transportation will be provided on the &quot; bahia belle , &quot; the hotel &#x27;s smaller sternwheeler . later in the evening the &quot; bahia belle &quot; opens to the public with a live band and dancing ; those returning from the banquet may choose to remain on board at no extra cost and continue to cruise around the bay . site and accommodations : the catamaran resort hotel is a tropical paradise wedged between its own beach on mission bay and the public boardwalk and pacific ocean just a few steps away . its conference center is perfect for mt summit vi , with bright airy rooms open to terraces , gardens , patios , and the beach on the bay . the hotel has a pool , jacuzzi , fitness center , and business center . bicycles , skates , and various types of boats are available for rent . the immediate vicinity offers many shops and restaurants as well as grocery stores and carry-outs . hotel parking passes are available at a special conference rate of us $ 10 for three nights . the guest rooms are luxuriously appointed , all with doors opening onto either a terrace or a balcony . the special conference rates are us $ 99 . 00 for an interior garden view and us $ 109 . 00 for a view of the bay or ocean . rooms in the tower have kitchenettes and sweeping views . participants should make their reservations directly with the catamaran - in the u . s . : + 1 800 / 288-0770 ; from canada : 800 / 233 - 8172 ; from elsewhere : + 1 619 / 488-1081 ; fax : + 1 619 / 488-1619 . neither space nor rates can be guaranteed after 28 september , so make your reservation early ! get there for less ! conventions in america , the summit &#x27;s official travel agency , offers discounts on american airlines and alamo rent a car and lowest available fares on any airline . call + 1 800 / 929-4242 in the united states and canada or + 1 619 / 453-3686 from elsewhere ; fax + 1 619 / 453-7976 ; or e-mail flycia @ scitravel . com . be sure to mention group # 547 . additional information : complete registration packets were mailed at the beginning of june to members of aamt , amta , and eamt , including the preliminary program flier , hotel registration form , and assorted other fliers . if you are not a member of one of the regional associations , you may obtain this packet by contacting the mt summit vi registrar : phone / fax : + 1 703 / 716-0912 ; e-mail : amta @ clark . net . you may also register on-line at this website . coordinates : general chair muriel vasconcellos president , iamt phone : + 1 619 / 272-3360 fax : + 1 619 / 272-3361 e - mail : murielvasconcellos @ compuserve . com program chair winfield scott bennett logos corporation phone : + 1 201 / 398-8710 x 104 fax : + 1 201 / 398-6102 e - mail : wsben @ ibm . net local arrangements chair laurie gerber systran software phone : + 1 619 / 459-6700 x 119 fax : + 1 619 / 459-8487 e - mail : lgerber @ systransoft . com exhibits coordinator kim belvin phone : + 1 619 / 481-8446 fax : + 1 619 / 350-8613 e - mail : kbelvin @ ucsd . edu registrar deborah becker amta / iamt focal point phone / fax : + 703 / 716-0912 e - mail : amta @ clark . net
</pre>

## Record 010233

**Label:** `benign`

<pre>
searching documents relating to metals integration we are uploading the contents of s : \ mg to the folder labelled s mg dump at the end of each day . so to have your information included in this livelink database simply put the file into s : \ mg if you have any images which you would like to put through optical character recognition ( so that one can search on the text in diagrams ) please contact camilla bydal . enjoy ! richard
</pre>

## Record 010234

**Label:** `benign`

<pre>
basic course in neurolinguistics first circular december 1998 the department of linguistics at the university of oslo and the nordic neurolinguistic network are pleased to announce that a nordic research course , sponsored by the nordic academy for advanced study ( norfa ) : basic course in neurolinguistics will be held at sanner hotell , granavollen 3 - 5 , 2750 gran , norway , june 11-15 , 1999 . the course will consist of three components : ( i ) survey lectures by dr . susan edwards ( department of linguistic science , university of reading ) , dr . heidi hamilton ( department of linguistics , georgetown university ) , dr . matti laine ( department of psychology , turku university ) , professor bruce murdoch ( department of speech pathology and audiology , university of brisbane ) ; ( ii ) seminars with individual presentations by the students and post-paper discussions ; ( iii ) discussion sessions towards the end of a topic area , focusing on the methodological and theoretical issues shared by the papers presented . criteria for student selection in addition to those defined by norfa ( with regard to country of origin , etc . ) are : ( a ) the participants should have a strong background in one or several of the following disciplines or related areas : linguistics , psychology , neurology , cognitive science , phonetics , logopaedics and / or special education . ( b ) the topic of the course ( neurolinguistics ) should occupy a significant position in the phd or post-doctorate studies or study plans of the participants . the number of student participants will be restricted to 20 . pre - course requirements in addition to the general norfa requirements : ( a ) the applicants should send , together with their application , a 3 - 5 page long abstract of their work ( planned or ongoing ) in the topic area of the course . ( b ) a list of required pre-reading material will be sent to the participants in advance of the course . norfa will cover the cost of tuition , board and lodging during the course , and travel expences ( cheapest mode of travel ) for students from the nordic countries . for further details contact the responsible organiser . application procedure : send a free-form application to inger moen ( below ) by march 1 , 1999 . please enclose a brief cv and a 3 - 5 page long abstract of your work ( planned or ongoing ) in the topic area of the course . those accepted will be notified by april 1 . responsible organiser : professor inger moen , department of linguistics , university of oslo , p . o . box 1102 , blindern , n-0317 oslo , norway , phone + 47 22 85 42 64 , fax + 47 22 85 69 19 , e - mail inger . moen @ ilf . uio . no . web site : http : / / www . hf . uio . no / ilf / neurolingcourse99
</pre>

## Record 010235

**Label:** `benign`

<pre>
nsf division director for sber - - announcement i encourage qualified readers of linguist to give serious consideration to the following announcement soliciting applications for the position of division director for social , behavioral and economic research at the national science foundation , and to pass the announcement on to others who may be interested . this is a genuinely open search . applications and nominations should be addressed as indicated in the announcement , and not sent to linguist or to me . paul chapin , nsf * * * * * * * * * * * * * * * * * * * * * * * * * * december 1 , 1994 dear colleague : i am seeking your assistance in identifying potential candidates for the position of division director for social , behavioral and economic research . dr . allan kornberg , who has been division director since september 1993 under an intergovernmental personnel act ( ipa ) assignment , will be returning to duke university at the end of his two-year assignment . the successor appointment may be in the senior executive service ( ses ) or as an intergovernmental personnel act ( ipa ) assignment . a position announcement is enclosed . this announcement may also be accessed electronically under vacancy announcements on nsf &#x27;s science and technology information system ( stis ) . the division director for social , behavioral and economic research ( sber ) manages one of the largest research divisions in the foundation . the division has a staff of 50 employees and a budget of over $ 80 million . the sber division is responsible for supporting disciplinary and interdisciplinary research and other activities through programs organized into five clusters : anthropological and geographic sciences ; cognitive , psychological , and language sciences ; economic , decision , and management sciences ; social and political sciences ; and science , technology , and society . i look forward to any help you may be able to offer in this search for candidates with outstanding scientific and administrative qualifications . i am especially interested in identifying women , members of minority groups and disabled individuals for consideration . please send nominations , including self-nominations , with curriculum vitae , to my acting executive officer , ms . margaret l . windus , no later than february 1 , 1995 . thank you for your assistance . sincerely yours , cora b . marrett assistant director = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = national science foundation arlington , va 22230 announcement number ep 95 - 3 director , division of social , behavioral and economic research directorate for social , behavioral and economic sciences nsf &#x27;s directorate for social , behavioral and economic sciences is seeking qualified candidates for the position of director , division of social , behavioral and economic research . nsf is inviting nominations ( including self-nominations ) of persons who are interested in either a two-to - three year senior executive service ( ses ) appointment or an intergovernmental personnel act ( ipa ) assignment . internal and external applicants are encouraged to apply . a statement of duties of the position and a list of qualification requirements are included on the reverse side of this announcement . the announcement may also be accessed electronically under vacancy announcements on nsf &#x27;s science and technology information system ( stis ) . o ses limited term appointment the ses covers managerial positions above grade 15 in the federal service . ses limited term appointees are federal employees and may serve for a period of up to three years . they are eligible for federal benefits ( i . e . , health benefits , life insurance coverage , social security , retirement , thrift savings plan , annual and sick leave ) . o ipa assignment initial assignments under the ipa may be made for a period of up to two years . individuals eligible for an ipa assignment with a federal agency include employees of state and local government agencies or institutions of higher education , indian tribal governments , and other eligible organizations in instances where such assignments would be of mutual benefit to the organizations involved . the individual remains an employee of the home institution and cost sharing arrangements are generally negotiated between nsf and the home institution . please submit nominations ( including self-nominations ) , along with a curriculum vitae to : ms . margaret l . windus acting executive officer , directorate for social , behavioral and economic sciences national science foundation 4201 wilson boulevard , suite 905 arlington , va 22230 phone : 703-306 - 1741 fax : 703-306 - 0495 internet : mwindus @ nsf . gov the closing date for receipt of applications is february 1 , 1995 . statement of duties : manages the nsf division responsible for funding research in the areas of social , behavioral and economic sciences . assesses research needs and trends , presents plans for future development , determines funding requirements , prepares and justifies budget estimates , balances program needs , allocates resources , oversees the evaluation of proposals and recommendations for awards and declinations , supervises staff , and represents nsf to relevant external groups . qualification requirements executive / managerial essential 1 . demonstrated ability to achieve organizational objectives through the supervision and management of subordinates . includes knowledge and ability relating to the recruitment , selection , supervision and development of professional and support staff involved in diverse endeavors . 2 . knowledge of and ability to plan multidisciplinary research programs in the social , behavioral and / or economic sciences ; to present and advocate program plans or recommendations to peer groups or higher level decision-making groups ; and to allocate resources within broad budgetary limitations . 3 . ability to coordinate effectively with representatives of scientific and engineering communities , both nationally and internationally , including industrial and / or academic researchers and the administrators of research and educational institutions . 4 . demonstrated ability , at the decision-making level , to prepare long-range and annual plans , conduct periodic reviews to determine progress and , if necessary , initiate remedial action . desirable 1 . skill in changing and balancing complex and diverse program demands with available resources , in response to major advances or needs in scientific research and technological developments . 2 . demonstrated ability to exercise sound professional judgment in recommending the initiation of research in the social , behavioral and economic sciences . 3 . skill in the management or administration of a large-scale research activity including implementation of resource allocation plans . professional / technical essential 1 . ph . d . or equivalent professional experience or a combination of education and equivalent experience in anthropology , economics , geography , linguistics , political science , psychology , sociology , or other social or behavioral science . 2 . substantial research contributions and strong evidence of scholarship in a social , behavioral , or economic science field , as evidenced in publications , or innovative leadership in research administration . 3 . demonstrated knowledge of relevant academic community and recognized professional standing in the scientific community as evidenced by publications and / or professional awards . desirable 1 . demonstrated broad knowledge of diverse fields of the social , behavioral and economic sciences . 2 . knowledge of grant and contract administration , fiscal management , and budget preparation with experience in scientific research support . nsf is an equal opportunity employer committed to employing a highly qualified staff that reflects the diversity of our nation .
</pre>

## Record 010236

**Label:** `benign`

<pre>
use Perl Daily NewsletterIn this issue:
    * Subscribe to The Perl Review+--------------------------------------------------------------------+
| Subscribe to The Perl Review                                       |
|   posted by pudge on Tuesday September 17, @08:00 (links)          |
|   http://use.perl.org/article.pl?sid=02/09/17/121210               |
+--------------------------------------------------------------------+[0]barryp writes &quot;You can now pledge a subscription to [1]The Perl Review.
The plan is to produce four print magazines per year. Cost: $12/year
(US); $20/year (international). Let&#x27;s all make this happen by signing
up!&quot; The web site says that they&#x27;ll attempt to go print if they get
enough subscription pledges.Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/17/121210Links:
    0. mailto:paul.barry@itcarlow.ie
    1. http://www.theperlreview.com/Copyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.

</pre>

## Record 010237

**Label:** `benign`

<pre>
revised stwhoulry pma 08 - 31 - 01 kate : per our discussion , i have taken out the three items you questioned about and added the additional items in my prior email ( bpa etc ) we agreed on . i have attached the revised pma file for your reference . i &#x27; ll continue to work with settlments to find out what happened to the three questionable items and update you and bill on that . other than that , the total pma for whourly taken today will be - $ 54 , 135 , 26 . let me know if you have any questions . - fran
</pre>

## Record 010238

**Label:** `benign`

<pre>
ancient vocal tract simulation in work following up the work of laitman , lieberman et al on reconstruction of what vocal tracts of hominids and early humans must have been like , i believe some mechanical simulators of the output of these were made . i would be interested in details of this , but more in whether anyone has tried to do a computer simulation of the phonetic range of vocal tracts that differ from those of modern humans e . g . in having a higher larynx . on a related question , i saw a letter to scientific american a year or so ago saying some of the origins of language work was based on a fallacy : that mammals other than humans can breathe and swallow at the same time . &gt; from my reading this does seem to underly some of the major work , so i &#x27;d like to have some confirmation that it is wrong or someone to point me to where the debate is going on , if there is a debate . from my point of view ( ignorance of anatomy / physiology and biological anthropology ) it would seem to be a question that could be fairly easily resolved empirically . patrick mcconvell , anthropology , northrn territory university , po box 40146 , nt 0811 , australia
</pre>

## Record 010239

**Label:** `benign`

<pre>
fw : a positive note about enron . move over carly fiorina . . . : - ) - - - - - original message - - - - - from : jaffry , adil sent : thursday , october 04 , 2001 9 : 32 am to : jafry , rahil subject : fw : a positive note about enron . fyi . . . from cbs . marketwatch . com , online at : attacks highlight enron &#x27; s value by lisa sanders 3 : 02 am et oct 4 , 2001 houston ( cbs . mw ) - - in the wake of the sept . 11 terrorist attacks , one of the few places to buy or sell jet fuel was an online market maintained by enron . the attacks highlighted the houston company &#x27; s strength as a manager of risk during periods of heightened uncertainty . through its trading centers , the company gives customers a way to hedge against volatility in oil , natural gas , and electricity markets , as well as other commodities . although the company lost one employee aboard one of the hijacked planes and closed its operations on the day of the attacks , its trading activity resumed the next day . by coming back online so fast , &quot; we made the decision to provide some stability in the market , &quot; said vance meyer , an enron spokesman . &quot; the customers really appreciated the fact that we were there , providing a place for them to maintain and adjust their positions in the market . &quot; in a financial sense , enron ( ene ) didn &#x27; t suffer , meyer said . but employees at the enron building in downtown houston were badly shaken . nick humber , who worked for enron &#x27; s wind energy business , died aboard a los angeles bound flight that crashed into the world trade center . &quot; we have offices in washington and new york , and people who had friends that died or were affected in some way , &quot; meyer said &quot; we also had traders who were on the phone with people in the world trade center when the planes hit . &quot; the decision to temporarily halt commodity trading on the new york mercantile exchange in the wake of the attacks &quot; may have increased volatility , a boon to the group , &quot; said bob christensen , analyst at fac / equities . companies that can defray volatility by helping customers manage their energy costs should be seeing a lot of business , he said . managing risk is what enron does best , market players say . and that strength should help the company going forward as u . s . businesses try to recover from the impact of september 11 . through its enrononline platform , the company buys and sells commodities at volumes totaling about $ 3 billion a day , meyer said . &quot; the world at large has become more risk averse , and enron , which is in the business of risk mitigation , should benefit from that , &quot; said glen hilton , senior analyst and portfolio manager for the montgomery new power fund , which has a stake in enron . &quot; with energy risk and prices potentially going up , they &#x27; ll be the first number on many cfos &#x27; speed dial . &quot; other companies do what enron does , but it &#x27; s the best positioned to succeed because of its status as the leader in natural gas and power trading , measured in terms of volume . duke energy ( duk ) is the next - largest competitor , but it has one - third of enron &#x27; s volume . high profile departure that &#x27; s a good place to be for a company whose stock price has been on the skids since last year , though it grew 151 percent on the top line in 2000 . other problems notwithstanding , including its money - losing broadband business and its failure to sell the oregon utility portland general electric , enron &#x27; s largest black eye came in mid - august when jeffrey skilling , chief executive since february , resigned abruptly . john hammerschmidt , senior portfolio manager of the turner new energy and power technology fund , said he &quot; freaked out &quot; when skilling left and managers immediately divested the turner large - cap portfolios of enron holdings . despite its status as a growth player , turner had re - entered the stock in june after a long absence because of valuation . at the time , enron was trading in the mid to high $ 40 s . &quot; this is a premier company and a premier industry , &quot; he said , adding that he believed then that the market had priced rumors into the stock . one of the rumors was that enron was about to take a big loss from being long on power when power prices were collapsing , hammerschmidt said . that has not materialized . whatever the problems were , hammerschmidt said , he felt them to be manageable . when skilling walked out , hammerschmidt began to believe some of the rumors might be true . &quot; in our experience , when somebody in power leaves for no reason , there &#x27; s uncertainty and uncertainty makes growth guys real nervous , &quot; he said . management continuity now he &#x27; s looking to get back in . enron , he said , works in both down and up markets . &quot; enron &#x27; s earnings are more solid today than they &#x27; ve ever been . . . and they &#x27; re valuable because we &#x27; re becoming a digital economy , &quot; he said . &quot; we need high - quality power , and local power plants have trouble providing reliability . enron is focused on guaranteeing people quality power in times of stress on the system . &quot; of course there &#x27; s still the issue about trusting management . after skilling left , enron promoted greg whalley to president and chief operating officer and mark frevert to vice chairman . &quot; you cannot expect ( whalley and frevert ) to articulate the enron vision the way jeffrey did , &quot; christensen said . &quot; they may grow into it . &quot; on the upside , skilling predecessor ken lay , who wall street credits with building enron into a powerhouse , is back at the helm , and he has promised to remain at the post until a solid succession plan is in place . &quot; we have a great deal of confidence in mr . ken lay as he was the original architect of ene &#x27; s ( and for that matter the entire industry &#x27; s ) tremendous transformation for the past decade , &quot; merrill lynch stated in a research report the day after skilling left enron . what &#x27; s more : &quot; ken lay has promised more transparency at enron , more insight into how the company makes money , which will help , &quot; hilton said . &quot; trying to forecast enron &#x27; s earnings is difficult . &quot; christensen said that a &quot; lack of data and clarity in regard &quot; to enron &#x27; s wholesale operations has been an issue in the past . enron has promised to provide more information when it reports its third - quarter results on october 16 . ultimately , only time will assuage investors &#x27; concerns . but with the prospects that enron has , the stock is a deal right now , hammerschmidt said . &quot; i don &#x27; t know what gets people back , but buy enron at $ 25 , and in a year , you &#x27; re making money , &quot; he said . &quot; i can see the stock getting back to $ 50 in a blink . &quot;
</pre>

## Record 010240

**Label:** `benign`

<pre>
my november real estate news update hi there , november is here and it is time to give thanks . as the year is drawing to a close there is much to be thankful for . thank you for your business and your continued support of my business with referrals and support . once again , i am having a drawing for a free turkey for your thanksgiving dinner . write , phone , or e - mail me with your entry by november 18 th , 2000 . your chances of winning are excellent . my new newsletter is now available from the hyperlinks below . please check it out and i can answer any questions you might have . this month &#x27; s issue includes topics such as : . to stretch or not to stretch , that is the question . pre - approval versus pre - qualification , is there a difference . . should i take my home off the market during the holidays . is your neighborhood kid - friendly . steel forges new role in home building here is a link to my &quot; november real estate update &quot; http : / / homeownernews . com / 24 / ionaalphonso aol users : click here i hope you enjoy the newsletter . i would welcome your comments . sincerely , iona alphonso always in tune with your needs oh , by the way . . . if you know of someone thinking about buying or selling a home , please call me with their name and number - thanks a million ! ! prudential , gary greene realtors 3910 fm 1960 west , suite 100 houston , texas 77068 voice mail : 281 - 857 - 2485 x 535 pager : 281 - 551 - 6549 office : 281 - 444 - 5140 fax : 281 - 444 - 0630 web site : http : / / www . ionaalphonso . com resume : http : / / www . har . com / ionaalphonso gary greene web site : http : / / www . garygreene . com please view my monthly newsletter at http : / / homeownernews . com / c / ionaalphonso
</pre>

## Record 010241

**Label:** `benign`

<pre>
revised schedule wed . 1 / 2 thur . 1 / 3 fri . 1 / 4 allen , phillip in out out arnold , john in in in belden , tim in in in black , don in in in calger , chris in in in davis , dana in in in duran , dave in ? ? grigsby , mike in in in lagrasta , fred in in in luce , laura in in in martin , tom in in in milnthorp , rob out in in neal , scott in in in presto , kevin in out out redmond , brian in out out shively , hunter in in in sturm , fletch in in in tycholiz , barry in in in vickers , frank out ? ? zufferli , john in in in tammie schoppe enron americas - office of the chair assistant to louise kitchen 713 . 853 . 4220 office 713 . 646 . 8562 fax 713 . 253 . 2131 mobile
</pre>

## Record 010242

**Label:** `benign`

<pre>
request for discourse list dear linguists i &#x27;d like to know if there are any listservs on discourse anlysis text linguistics and pragmatics . thanks gul durmusoglu
</pre>

## Record 010243

**Label:** `benign`

<pre>
I have about 60G of data which I need to copy from one disk to another.
However, I&#x27;m not sure how I should best copy it. The problem is the bulk of
the data is images and most of these image have two directory entries i.e.
there is a hard link to each file. If I copy them using cp -a or my usual
favourite of find .|cpio -pmd other_dir it&#x27;s going to copy each file twice,
which is not what I want. dump / restore would take care of this if the
source filesystem wasn&#x27;t reiserfs :-( Any suggestions ?
Niall-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010244

**Label:** `benign`

<pre>
replacing our people who have left louise - - is it appropriate to replace the people who have left ( steve walton and susan scott lindberg ) with other people that can do the work ? jim
</pre>

## Record 010245

**Label:** `benign`

<pre>
There is an &quot;Update all scan caches&quot; menu entry that rescans your
folders similar to the short scripts folks have shared around.  It
runs in the background.&gt;&gt;&gt;Rick Baartman said:
 &gt; &gt; &gt; On Mon, 9 Sep 2002, Rick Baartman wrote:
 &gt; &gt; Thanks Tom and Jacob. The above works, but without the double quotes: 
i.e.
      
 &gt; &gt; 
 &gt; &gt; sh -c &#x27;for f in `folders -recurse -fast` ; do sortm +&quot;$f&quot; ; done&#x27;
 &gt; &gt; 
 &gt; But there is a problem with making changes outside of exmh: the 
.xmhcache fi
     les 
 &gt; don&#x27;t get updated. This is dangerous; I have to remember to re-scan each 
fol
     der 
 &gt; I enter. Is there a safeguard for this?
 &gt; 
 &gt; --
 &gt; rick
 &gt; 
 &gt; 
 &gt; 
 &gt; 
 &gt; _______________________________________________
 &gt; Exmh-users mailing list
 &gt; Exmh-users@redhat.com
 &gt; https://listman.redhat.com/mailman/listinfo/exmh-users--
Brent Welch
Software Architect, Panasas Inc
Pioneering the World&#x27;s Most Scalable and Agile Storage Network
www.panasas.com
welch@panasas.com
_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 010246

**Label:** `benign`

<pre>
Laurent Papier wrote:&gt;On Tue, 8 Oct 2002 16:24:06 +0200
&gt;Matthias Saou  wrote:
&gt;
&gt;  
&gt;
&gt;&gt;Once upon a time, Roi wrote :
&gt;&gt;
&gt;&gt;    
&gt;&gt;
&gt;&gt;&gt;mplayer works with dga (if i am root) and works with x11
&gt;&gt;&gt;and always worked with sdl (but not now with redhat 8)
&gt;&gt;&gt;now it gives black screen window and play the music of the movie.
&gt;&gt;&gt;      
&gt;&gt;&gt;
&gt;&gt;Strange, because as I said in an earlier post, it works for me. Maybe
&gt;&gt;you&#x27;re missing the SDL_image or something? :-/
&gt;&gt;    
&gt;&gt;
&gt;
&gt;It also works nicely for me.
&gt;
&gt;Laurent
&gt;  
&gt;[roi@roi roi]$ rpm -qa | grep -i sdl
SDL_image-devel-1.2.2-3
xmame-SDL-0.60.1-fr2
SDL_mixer-1.2.4-5
SDL-1.2.4-5
SDL-devel-1.2.4-5
SDL_mixer-devel-1.2.4-5
SDL_net-1.2.4-3
SDL_net-devel-1.2.4-3
SDL_image-1.2.2-3Seems I got all packages I need.
It worked on redhat 7.3 I did upgrade not reinstall so packages
shouldn&#x27;t make a problem.Roi
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 010247

**Label:** `benign`

<pre>
enrononline forms alliances with houstonstreet and true quote news : enrononline forms alliances with houstonstreet and true quote time : 2 : 30 pm ( cst ) jul 12 , 2000 houstonstreet exchange has branched out into realms of the top energy e - commerce platforms today by signing an agreement to post the north american electricity and natural gas prices of enrononline . the prices will be posted automatically on houstonstreet . com and traders will be able to act on the enrononline prices via either platform . the addition of enrononline pricing will correspond with the launch of houstonstreet &#x27; s natural gas platform in september , the companies said . enron also signed an agreement today to post its gas and power prices simultaneously on true quote . com . enrononline has conducted commodity transactions worth more than $ 90 billion in 2000 . it posts two - way prices for more than 800 products in global energy and commodities markets .
</pre>

## Record 010248

**Label:** `benign`

<pre>
linguist / phonetic request for information dear linguist , this is a request for information regarding the kinds of pronunciation that are possible for a person who has no tongue , for the purpose of the editing of a novel set in 11th - 12th - century spain . a man has had his tongue removed at the root , so that he may not speak what he has seen . what sounds would he be able to make , after the wound has healed , but before he has practised much ? at the moment he uses a lot of sibilants , which i would imagine to be impossible , except for some kind of sshhing sound . with my limited knowledge , i &#x27;d have thought he &#x27;d have been limited to labials and fricatives - m , p , b , f , v , w . and h ? what about vowels ? the words he presently attempts to articulate are listed below . tongueless approximations forthese would be most gratefully received . take velaz ammar muwardis what happened why more where yes galleenus care jehane eliane i am so sorry do n&#x27;t think historic pronunciation of the spanish / moorish need to be taken account of . could you please reply to seaboyer @ epas . utoronto . ca many thanks , jude seaboyer
</pre>

## Record 010249

**Label:** `benign`

<pre>
ive just gotton myself a modem (no its not a winmodem, yes im sure) it dials
the internet grant using the RedHat PPP Dialer... and i can ping the server
i dial into but i cant get any furthur than that server? any ideas?
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 010250

**Label:** `benign`

<pre>
project inga recap / follow up recap : the california project &#x27; s ( &quot; ace &quot; ) fundamental position , coal generation in gas - on - margin market , is attractive on the fundamentals . ace &#x27; s economics through a range of scenarios ( forward srac rates ) also appears attractive . however , due to the uncertainty in the california market , the deal team needs to resolve issues 1 . and 2 . ( at minimum ) before returning for final approval : timing risk : price and execute a 30 - 40 day call on &quot; deal purchase &quot; to keep competition at bay and buy time to work through market and partner risks . market risk : approach so cal edison and cdwr to structure and close a deal that enables ace to sell directly to cdwr ( or other credit worthy counter party for term , or at least until so cal edison starts honouring its qf contract with ace on a current pay basis . partner risk : approach constellation , co - managing partner in ace , to price / structure buyout of their interest in ace or a swap of pennsylvania for california project positions . follow up : the following actions have been taken : timing risk : greg blair initiated discussions last night with the seller &#x27; s advisor , chase , to purchase an option to close in late april . we expect to hear back from ahlstrom ( seller ) today or friday . deal team will notify office of chairman when we discover ahlstrom &#x27; s bottom line on option premium , expiration date and strike price . market risk &amp; partner risk : greg blair and terry donovan put messages into millenium ( ace manager ) and constellation to get things moving on cdwr / edison deal and to see if we can structure a deal to get control of ace . substantive progress on either front will be reported . regards , mike j miller
</pre>

## Record 010251

**Label:** `benign`

<pre>
On 0020 +0100 %{!Sat, Aug 10, 2002 at 12:11:50PM +0100}, FRLinux wrote:
&gt; Hello,
&gt; 
&gt; I have been using 2.4.19 since a couple of days on a Mandrake 8.2 with
&gt; standard RPMs for cdrecord and it didn&#x27;t give any hard locks on it at
&gt; all, i&#x27;ve already burnt a couple of CDs.
Thanks for that.  I&#x27;d sort of suspected that if it was a widespread
problem it would have already been fixed.  Starting to look more likely
it is a mistake/misconfiguration on my part, though I still don&#x27;t know
where to look for the mistake/misconfiguration.
m-- 
Michael Conry   Ph.:+353-1-7161987, Web: http://www.acronymchile.com
Key fingerprint = 5508 B563 6791 5C84 A947  CB01 997B 3598 09DE 502C-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010252

**Label:** `benign`

<pre>
On Thu, Sep 05, 2002 at 06:16:57PM -0500, Mike Burger wrote:
&gt; You might be better asking this on the spamassassin-talk list.  The folks 
&gt; there will almost definitely have an answer for this.Thanks, I just posted a similar message there.-Dave
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 010253

**Label:** `benign`

<pre>
columbia details louise , these are some of the details selden and i have talked about . also , i &#x27; ll be sending the contact list to e / o involved from enron on the day ( mark , you , ian , and myself ) . selden also made a few points that i &#x27; ll discuss with you tomorrow . he also suggested that you and he talk tomorrow pm . fyi - i &#x27; m taking in the fed - ex shipment now . also , we got the enrononline folders - you were right ( again ) . torrey has finished his analysis and we can discuss those with you whenever you have time . - r 3 - 3206 contact : professor larry selden cell : 917 . 331 . 9743 location : columbia university graduate school warren hall 1125 amsterdam avenue , room 203 , ( meeting room : 207 ) new york , ny 10027 college phone : 212 . 854 . 7020 schedule for the day ( 04 / 02 / 01 ) : ? 08 : 15 - 08 : 45 - professor selden sets stage ? 08 : 45 - 09 : 45 - louise presents enrononline ? 09 : 45 - 09 : 55 - break ? 09 : 55 - 10 : 05 - enrononline demo . ? 10 : 05 - 10 : 25 - students prepare questions ? 10 : 25 - 11 : 25 - lk , mk , and rj field questions other contacts : ian richardson ( w : 713 . 345 . 8988 ; cell : 281 . 541 . 9849 ; pager : 713 . 327 . 0724 ) mark koenig ( w : 713 . 853 . 5981 ) louise kitchen ( w : 713 . 853 . 3488 ; cell : + 44 . 7778 . 757 . 656 ) rahil jafry ( w : 713 . 853 . 3206 ; cell : 281 . 704 . 1060 )
</pre>

## Record 010254

**Label:** `benign`

<pre>
nomination for purchase and sale as we discusssed , we nominate 5 , 000 mmbtu / d from hpl into eastrans for 2 / 3 / 2000 , and 5 , 000 mmbtu / d ( the first gas delivered ) from fuels cotton valley into hpl for 2 / 3 / 2000 .
</pre>

## Record 010255

**Label:** `benign`

<pre>
re : 3 . 402 queries : language - speakers , syntax , texts about &quot; who speaks languages &quot; : on the one hand i &#x27; m just as frustrated as most linguists with the question &quot; how many languages do you speak &quot; , but on the other hand i think it &#x27;s vastly incorrect to say &quot; linguists are concerned only with formalized grammars and symbol systems &quot; . the fact that some of us * are n&#x27;t * concerned primarily with these issues is why the recent discussion on rules is for us so baffling . there are still some of us who are concerned with very good description of languages and language . not that writing grammars or dictionaries will get us grad students jobs . . . but there are a good number of us who are both fluent in contemporary theory and comfortable with large amounts of detailed language data . sometimes we speak one or more of the languages we &#x27; re studying ; often we learn * about * the languages such that we end up with a very different kind of working knowledge than the native speaker has . many of us for whom careful data-gathering and analysis is a high priority can readily translate bits of the languages we work on , but would n&#x27;t be much good in a conversation . i really feel that the two tasks are different - - i would n&#x27;t make a very good simultaneous interpreter , and someone who would probably can&#x27;t tell you the structural things that i can about the language in question . perhaps this is obvious to the more experienced linguists out there . . . but it &#x27;s been rattling around in my head after a couple of conferences where i met ( 1 ) great theoreticians who control very little data ( 2 ) great descrip - tivists who care very little about recent theoretical developments and ( 3 ) a healthy number of people , especially grad students , who cared about both . it seems those in the latter category are trying to be both collectors of raw data and statisticians , in the analogy that &#x27;s been offered . any thoughts on this ? kathleen hubbard u . c . berkeley
</pre>

## Record 010256

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-2,8415146,1717/
Date: 2002-10-01T01:27:10+01:00(canada.com)

</pre>

## Record 010257

**Label:** `benign`

<pre>
icgi-98 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - call for participation fourth international colloquium on grammatical inference ( icgi-98 ) http : / / www . cs . iastate . edu / ~ icgi98 / icgi98 . html program co - chairs : vasant honavar and giora slutzki iowa state university july 12-14 , 1998 iowa state university ames , iowa , usa . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - cosponsored by international institute of theoretical and applied physics iowa state university and in cooperation with american association for artificial intelligence ieee systems , man , and cybernetics society acl special interest group on natural language learning - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - grammatical inference , variously refered to as automata induction , grammar induction , and automatic language acquisition , refers to the process of learning of grammars and languages from data . machine learning of grammars finds a variety of applications in syntactic pattern recognition , adaptive intelligent agents , diagnosis , computational biology , systems modelling , prediction , natural language acquisition , data mining and knowledge discovery . traditionally , grammatical inference has been studied by researchers in several research communities including : information theory , formal languages , automata theory , language acquisition , computational linguistics , machine learning , pattern recognition , computational learning theory , neural networks , etc . perhaps one of the first attempts to bring together researchers working on grammatical inference for an interdisciplinary exchange of research results took place under the aegis of the first colloquium on grammatical inference held at the university of essex in united kingdom in april 1993 . this was followed by the ( second ) international colloquium on grammatical inference , held at alicante in spain , the proceedings of which were published by springer - verlag as volume 862 of the lectures notes in artificial intelligence , and the third international colloquium on grammatical inference , held at montpellier in france , the proceedings of which were published by springer - verlag as volume 1147 of the lecture notes in artificial intelligence . following the success of these events and the workshop on automata induction , grammatical inference , and language acquisition , held in conjunction with the international conference on machine learning at nashville in united states in july 1997 , the fourth international colloquium on grammatical inference will be held from july 12 through july 14 , 1998 , at iowa state university in united states . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - the conference seeks to provide a forum for presentation and discussion of original research papers on all aspects of grammatical inference including , but not limited to : * different models of grammar induction : e . g . , learning from examples , learning using examples and queries , incremental versus non-incremental learning , distribution-free models of learning , learning under various distributional assumptions ( e . g . , simple distributions ) , impossibility results , complexity results , characterizations of representational and search biases of grammar induction algorithms . * algorithms for induction of different classes of languages and automata : e . g . , regular , context-free , and context-sensitive languages , interesting subsets of the above under additional syntactic constraints , tree and graph grammars , picture grammars , multi-dimensional grammars , attributed grammars , parameterized models , etc . * theoretical and experimental analysis of different approaches to grammar induction including artificial neural networks , statistical methods , symbolic methods , information-theoretic approaches , minimum description length , and complexity-theoretic approaches , heuristic methods , etc . * broader perspectives on grammar induction - - e . g . , acquisition of grammar in conjunction with language semantics , semantic constraints on grammars , language acquisition by situated agents and robots , acquisition of language constructs that describe objects and events in space and time , developmental and evolutionary constraints on language acquisition , etc . * demonstrated or potential applications of grammar induction in natural language acquisition , computational biology , structural pattern recognition , information retrieval , text processing , adaptive intelligent agents , systems modelling and control , and other domains . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - invited papers 1 . j . feldman , international computer science institute and university of california , berkeley , ca , usa . topic : natural language acquisition ( exact title to be announced ) . 2 . a . brazma , european bioinformatics institute , cambridge . topic : pattern discovery in biosequences . ( exact title to be announced ) . list of accepted papers 1 . stochastic regular tree language inference , rafael c . carrasco , jose oncina and jorge calera 2 . the data driven approach applied to the ostia algorithm , jose oncina 3 . approximate learning of random subsequential transducers , antonio castellanos 4 . how considering incompatible state mergings may reduce the dfa induction search tree , francois coste and jacques nicolas 5 . learning regular grammars to model musical style : comparing different coding schemes , p . p . cruz - alcazar and e . vidal - ruiz 6 . using symbol clustering to improve probabilistic automaton inference , pierre dupont and lin chase 7 . learning a subclass of context - free languages j . emerald , k . subramanian , and d . thomas 8 . learning a determinisitic finite automaton with a recurrent neural network , l firoiu , t oates , and p r cohen 9 . learning feature - based phrase - structure rules with the grammar inference tool , b . geistert 10 . learning stochastic finite automata from experts , colin de la higuera . 11 . a stochastic search approach to grammar induction hugues juille and jordan pollack 12 . grammar model and grammar induction in the system nl page , keselj 13 . results of the abbadingo one dfa learning competition and a new evidence driven state merging algorithm k . j . lang , b . a . pearlmutter and r . price 14 . transducer - learning experiments on language understanding pics and e . vidal 15 . learning k-variable pattern languages efficiently stochastically finite on average from positive data peter rossmanith and thomas zeugmann 16 . locally threshold testable languages in strict sense : application to the inference problem , jose ruiz , salvador espana , and pedro garcia 17 . grammatical inference in document recognition , saidi , tayeb - bey 18 . learning a subclass of linear languages from positive structural information , jose sempere and g . nagaraja 19 . why meaning helps learning syntax , isabelle tellier 20 . a performance evaluation of automatic survey classifiers , viechnicki 21 . applying grammatical inference by learning a language model for oral dialogue jacques chodorowski and laurent miclet 22 . a polynomial time incremental algorithm for learning dfa , r . parekh , c . nichitu , v . honavar - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - conference format and proceedings the conference will include oral and possibly poster presentations of accepted papers , a small number of tutorials and invited talks . all accepted papers will appear in the conference proceedings to be published by springer - verlag as a volume in the lecture notes in artificial intelligence which is part of the springer - verlag lecture notes in computer science series . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - financial support limited financial support might be available , subject to the availability of funds , for : * scientists ( especially junior researchers ) from developing countries , especially for those who can find other sources of support for extended visit at a us institution * graduate students and postdocs from us institutions additional details will be posted as they become available . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - registration information early registration deadline : may 21 , 1998 . presenting authors of accepted papers should register by may 11 , 1998 . registration fees : the conference registration includes the conference proceedings and the banquet ( on monday , july 13 , 1998 ) . * author / conference attendee o by may 21 , 1998 : us $ 200 o after may 21 , 1998 : us $ 250 * full - time student o by may 21 , 1998 : us $ 100 o after may 21 , 1998 : us $ 150 * airport shuttle : us $ 15 ( one way ) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - program committee technical program chairs : vasant honavar and giora slutzki , iowa state university , usa . technical program committee : r . berwick , mit , usa a . brazma , european bioinformatics institute , cambridge , uk . m . brent , johns hopkins university , usa c . cardie , cornell university , usa w . daelemans , tilburg university , netherlands d . dowe , monash university , australia p . dupont , university jean monnet at st . etienne , france . d . estival , university of melbourne , australia j . feldman , international computer science institute , berkeley , usa l . giles , nec research institute , princeton , usa j . gregor , university of tennessee , usa c . de la higuera , university jean monnet at st . etienne , france a . itai , technion , israel t . knuutila , university of turku , finland j . koza , stanford university , usa k . lang , nec research institute , princeton , usa . m . li , university of waterloo , canada e . makinen , university of tampere , finland l . miclet , enssat , lannion , france . g . nagaraja , indian institute of technology , bombay , india h . ney , university of technology , aachen , germany j . nicolas , irisa , france r . parekh , allstate research and planning center , menlo park , usa l . pitt , university of illinois at urbana - champaign , usa d . powers , flinders university , australia l . reeker , national science foundation , usa y . sakakibara , tokyo denki university , japan . c . samuelsson , lucent technologies , usa a . sharma , university of new south wales , australia . e . vidal , u . politecnica de valencia , spain - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - local arrangements committee dale grosvenor , iowa state university , usa . k . balakrishnan , iowa state university , usa . r . bhatt , iowa state university , usa j . yang , iowa state university , usa . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - further details are available at : http : / / www . cs . iastate . edu / ~ icgi98 / icgi98 . html
</pre>

## Record 010258

**Label:** `benign`

<pre>
URL: http://scriptingnews.userland.com/backissues/2002/09/23#When:8:47:06AM
Date: Mon, 23 Sep 2002 15:47:06 GMTNews.Com: Google search gets newsier[1].[1] http://rss.com.com/2100-1023-958927.html?type=ptâˆ‚=rss&amp;tag=feed&amp;subj=news

</pre>

## Record 010259

**Label:** `benign`

<pre>
On Fri, 23 Aug 2002, Robert Harley wrote:--]Next time I hear a joke, I promise not to laugh until I have checked
--]out primary sources for confirmation in triplicate, OK?
Oh please. Walking sideways like that is bad for your shoes.Though it is kinda cute when you get all reasonomaticbang banghave a nice day.http://xent.com/mailman/listinfo/fork
</pre>

## Record 010260

**Label:** `benign`

<pre>
ou logistics dear team members : here is the itinerary for next week : those requiring overnight stays , we will be staying at the montford inn : 322 w . tonhawa norman , ok 73069 405 / 321 - 2200 i have made the following reservations : sunday night : jody , justin , lexi , patrick monday night : sally , james , lexi monday , october 30 interviewers : sally beck , james scribner , tana cashion , patrick maloy , jody crook , justin o &#x27; malley sally &amp; james : your interviews will begin at 9 am . we will meet you on campus . patrick , tana , jody , and justin : we will meet in the breakfast area of the montford inn at 7 : 45 to proceed to campus . * * as the candidates are interviewed , i will be asking for your comments immediately after you have completed the evaluation form . this will be necessary for notifying the students asap if they are needed for a round 2 interview . when possible , we will conduct round 2 interviews later in the day on monday . tuesday , october 31 interviewers : sally beck , james scribner , tana cashion , greg nickel greg : your interview schedule will begin at 9 am . please meet us at the career services ( in the union building ) once you arrive sally , james , and tana : we will meet in the breakfast area of the montford inn at 7 : 45 to proceed to campus . no interviews will be scheduled after noon on tuesday . for those candidates unable to schedule a round 2 , we will conduct those interviews via telephone if necessary .
</pre>

## Record 010261

**Label:** `benign`

<pre>
bob , i want to thank you for your response time in getting cody a draft of the amendment for them to look at this morning . cody will be out of their current obligation for this gas on february 11 th , i will firm this date up here in the next couple of days . cody has requested that we strike the gas daily price for gas brought on any day other than the lst day of the month . this language is mentioned in article 2 . contract price . 2 . 1 price . i have called darren farmer on the texas desk and explained my situation to him . he passed on to me that this is not a problem since i will know the date and volume this package will start flowing to hplc . please e - mail a copy after these changes for approval to be sent overnight to cody . thanks !
</pre>

## Record 010262

**Label:** `benign`

<pre>
hi all,
I installed gentoo 1.2 with gnome2 but when right click on the desktop 
and  under disks i get not options, What file(s) do i have to edit to 
get this option enabled.
Any ideas ?.
regards,
Nils
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010263

**Label:** `benign`

<pre>
re : booty hey dude , how about booty ? he could be developed , he has the raw talent but needs to get consistent and confident . sounds like good news for your dogs . i hope my tigers keep up the improvements . smith
</pre>

## Record 010264

**Label:** `benign`

<pre>
re : allegheny energy 1935 act filing the short news is that things are fine with application . i spoke with anthony wilson of allegheny who &#x27; s been working with the sec staff to get the order issued . he expects to have the order either today or early next week . starting monday , you can reach me at joanne . rutkowski @ bakerbotts . com i &#x27; ll be back to you asap with other contact info . best joanne
</pre>

## Record 010265

**Label:** `benign`

<pre>
So, last night around 5:30AM I&#x27;m woken up by a loud *craaack*, followed by
one of the most dreaded sounds a homeowner ever hears: vast quantities of
water spilling onto the floor. The water is coming from the bathroom, the
toilet specifically. Turns out the water cistern on the top of the toilet
had cracked down the side, and was spilling out all the water.So, after shutting off the water and mopping up, I was left to ponder what
are the odds of having mechanical failure of a large rectangular porcelain
bowl, in the absence of any visible stressors (like someone striking it with
a sledgehammer)? We hadn&#x27;t done anything unusual to the toilet in the recent
past -- just normal use. I&#x27;ve *never* heard of this happening to anyone I
know. The guts, yeah, they fail all the time. But the storage bowl -- never.Geesh.- Jimhttp://xent.com/mailman/listinfo/fork
</pre>

## Record 010266

**Label:** `benign`

<pre>
books and articles on cd-rom this text is also available in german ( see below ) dear linguist readers throughout the last years the working conditions of many scientists have been profoundly changed through the introduction of modern data processing technology . almost every workplace is being equipped with a computer which , after hours or even days of patiently getting acquainted with the working procedure of these tools , constitutes an enormous advantage . this advantage especially shows in the ever more efficient saving , processing , and transferring of data . thus , as early as today , most of the manuscripts of books , articles , diplomas , and master &#x27;s theses are being processed through word processing programmes and are eventually available as a computer file . besides word processing , both newer , more rapid processors and more efficient programmes also make possible an ever higher integration of images , image sequences and sound recordings into a written text . accordingly , a phonetic transcription of an experiment can contain , in addition to the text , not only a recording of the language but also photographs of the articulating organs , such as mouth and upper jaw . that allows the experiment to be followed much more easily and also to be conducted by other scientists from a different view point . in addition to saving how the research work is done , it is also possible to save the subject of the research on any kind of storage media . in order to archive the amount of data resulting from this particular combination of text , sound and images , the compact disc ( cd ) has come more and more into fashion as the perfect storage medium . today , many publications are already available on cd . besides the possibility of a multi-media presentation of knowledge , the cd has one more advantage : because of the low production costs of a cd and its huge storage capacity , more publications of scientists can be made available than is currently possible in journals and books . at this point , the possibility emerges for young scientists as well as for renowned ones to publish their works that have up to now tended to disappear in some drawer because of either the publishing costs or a &quot; not-a - chance &quot; notion . with this as a background , i would like to begin a survey to determine to what extent the linguists of all fields might have interest in the following questions : 1 . ) is multi-media technology commonly accepted ? do linguists prefer traditional print media , or is there any interest in accepting knowledge from the computer screen ? 2 . ) is there any interest in publishing works which contain not only text but also images and sound ? what ideas are there on how to publish these scientific works ? 3 . ) who has experience using cds in the field of linguistics ? this survey is intended to serve as a basis for developing a concept for a new enterprise in the media services sector , which should provide next year &#x27;s young linguistically oriented post-graduate students a platform from which to work independently . i would like to thank you in advance for your answers and ideas . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ liebe linguist leser , in den letzten jahren hat sich die arbeitswelt vieler wissenschaftler durch die einfuehrung moderner techniken der datenverarbeitung grundlegend geaendert . fast jeder arbeitsplatz ist mit einem computer ausgestattet , der nach einigen geduldigen stunden und tagen des kennenlernens der wirkungsweise dieser geraete , einen enormen arbeitsvorteil darstellt . dieser vorteil besteht insbesondere in der mehr und mehr komfortableren erfassung , verarbeitung und weitergabe von daten . so werden die meisten niederschriften von buechern , artikeln , diplom - und magisterarbeiten bereits heute durch textverarbeitungsprogramme bearbeitet und liegen letztendlich als eine datei vor . neue und schnellere rechner sowie leistungsfaehigere programme machen neben der bearbeitung von text auch mehr und mehr eine integration von bildern , bildsequenzen und tonaufnahmen in eine niederschrift moeglich . so kann z . b . eine phonetische niederschrift ueber ein lautsprachliches experiment neben den schriftlichen ausfuehrungen auch die sprachaufnahmen enthalten , aber auch bildaufnahmen der artikulierenden organe , wie mund und unterkiefer ; damit ist dieses experiment besser nachvollziehbar und koennte unter anderen gesichtspunkten von dritten wissenschaftlern ebenfalls durchgefuehrt werden . es ist also moeglich , in vielen faellen neben den ausfuehrungen einer untersuchung , auch den untersuchungsgegenstand auf einen datentraeger zu speichern . um diese mengen an daten , die durch die kombination von text , bild und ton entstehen , zu archivieren , bewaehrt sich immer mehr die cd als speichermedium . viele veroeffentlichungen erscheinen schon heute auf cd . neben der moeglichkeit einer multi - media darstellung von wissen , hat die cd aber noch einen weiteren vorteil : aufgrund der niedrigen herstellungskosten einer cd und der riesigen menge an speicherplatz wird es moeglich , publikationen von mehr wissenschaftlern zu veroeffentlichen , als es mit herkoemmlichen journalen und buechern moeglich ist . hier ergibt sich fuer junge wissenschaftler , aber auch fuer renommierte die moeglichkeit , ihre niederschriften an die oeffentlichkeit zu bringen , die bisher , bedingt durch preis und ` chancenlosigkeit &#x27; , eher in der schublade verschwanden . mit diesem hintergrund versehen , wuerde ich gern eine umfrage starten , inwieweit linguisten aller gebiete ein interesse an folgenden themen zeigen : 1 . ) gibt es eine allgemeine akzeptanz der multi - media technik . greifen linguisten lieber auf traditionell gedruckte literatur zurueck , oder besteht auch ein interesse an der wissensaufnahme durch den bildschirm . 2 . ) interessiert sich jemand fuer eine veroeffentlichung eigener arbeiten , die neben text auch bild und ton enthalten . welche vorstellungen gibt es ueber eine solche art und weise der publikation von wissenschaftlichen arbeiten . 3 . ) wer hat schon erfahrungen in der sprachwissenschaftlichen anwendung von cd &#x27;s gesammelt ? diese umfrage steht in dienst einer konzeptentwicklung fuer ein neues unternehmen im medien - dienstleistungsbereich , das fuer jungen , sprachwissenschaftlich orientierten studenten nach abschluss des studiums im naechsten jahr die basis fuer eine eigenstaendige arbeiten bilden soll . bereits im voraus bedanke ich mich fuer ihre antworten und anregungen . ingolf franke zeughausstrasse 31 d-54292 trier germany tel . ( 0651 ) 1 35 10 e-mail : fran2801 @ pcmail . uni-trier . de
</pre>

## Record 010267

**Label:** `benign`

<pre>
On Wed, Jul 31, 2002 at 12:04:44PM +0100, Alan Horkan wrote:
&gt; does Spanish still count as a foreign language in America?
&gt; :)yep, that&#x27;s what i learned as it seemed more useful then the other
choice: french.  and that&#x27;s what seems to count as &quot;internationalisation&quot;:
support of spanish.&gt; Watch out for the political indoctrination at these irish language
&gt; schools, when i was teenager they had use marching saluting the flag
&gt; singing the national anthem and the college anthem.  Presumably they treat
&gt; adult learners with a little more dignity and dont send them home for a
&gt; minor outburst of English in emotional circustances despite having better
&gt; Irish than half of the other people there.if i go to a class, i&#x27;m there to learn.  if they throw in anthems or
politics, i&#x27;ll take what i can learn from that and i&#x27;ll take in a new
perspective, but i&#x27;ll only do that with my critical thinking cap on.
just like i do when i watch mass media.  and yes, from the one irish
course i took in dublin, they do the national anthem.  which is fine
really - i started off each day in school in america with the pledge of
allegience (with the under god bit in it which annoyed my dad to no end).
if that sort of thing didn&#x27;t stick at the age of five, i severely doubt
it will stick now.&gt; Just to mention open source software agus gaeilge, OpenOffice could do
&gt; with having an Irish ispell dictionary converted to work with it.
&gt; Abiword already has irish spell checking and a few of the interface
&gt; strings translated (was about 85% about 18 months ago but it has drifted
&gt; to some horribly small percentage).and see, that would be my retort to any overly zealous irish speaker.
there&#x27;s a huge opportunity for a fully irish computing environment in
free software.  and yet i don&#x27;t see much action from official irish
organisations.  the reason mandrake and some others have the irish
support they have is because of individuals like donnacha.kevin-- 
kevin@suberic.net     that a believer is happier than a skeptic is no more to
fork()&#x27;ed on 37058400    the point than the fact that a drunken man is happier
meatspace place: home       than a sober one. the happiness of credulity is a
http://ie.suberic.net/~kevin   cheap &amp; dangerous quality -- g.b. shaw-- 
Irish Linux Users&#x27; Group Social Events: social@linux.ie
http://www.linux.ie/mailman/listinfo/social for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010268

**Label:** `benign`

<pre>
&gt; Ouch ;-)  Although I&#x27;m not ready to give up razor just yet, I&#x27;d like to
&gt; see a pyzor check in SA.  I don&#x27;t think it even needs to be written in
&gt; perl.  SA is actually calling razor-check and razor-report as well as
&gt; dccproc for those checks so it should be nothing more than duplication
&gt; of coding to add pyzor.I don&#x27;t know from Pyzor, but I&#x27;ve always thought that the way services like
Razor and DCC could be truly useful is if there were a bunch of different
ones. We can assign them scores based on how trustworthy each one is, and
when a message is listed in multiple services you can pretty much trust that
it&#x27;s spam.--
Michael Moncur  mgm at starlingtech.com  http://www.starlingtech.com/
&quot;Mustard&#x27;s no good without roast beef.&quot; --Chico Marx-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk

</pre>

## Record 010269

**Label:** `benign`

<pre>
On Thu, 19 Sep 2002, Bill Stoddard wrote:--]Good points all but they don&#x27;t apply in this case.  Someone is speaking and
--]a group of selfish bastards only interested in getting their rocks off are
--]trying to shout him down (they are doing it because &#x27;it&#x27;s good for the
--]soul&#x27;. Kind like Chuckie Manson doing the stuff he did cause &#x27;it was good
--]for his soul&#x27;). Unprincipled and evil. It&#x27;s got nothing to do with throwing
--]tea in the harbor or the DoI.
History is written by the victors. If the rabble can put forth there ideas
they will be tempered in the pages of yore as &quot;strong willed voices
decrying the obvious injustices of the day&quot;Once again, look at the Chicago 7, a loud and rude a crowd of selfish
pricks as you were want to find in the day. History of course colors them
with times great blur filter. The jagged bits that , at the time, were
called rude and obnoxious are now seen as a stab of justive doing in the
sideof the ill pathed goverment.

</pre>

## Record 010270

**Label:** `benign`

<pre>
budget review ii hi louise , are you ok with us coming to see you on thursday afternoon with the revised numbers . if not let me know when you need them by . thanks mark pickering chief technology officer enron net works , llc _ _ _ _ _
</pre>

## Record 010271

**Label:** `benign`

<pre>
draft announcement i &#x27; m not one for announcements , but the word appears to be out to varying degrees , so here is my first cut at clarifying the situation . prmary distribution would be enron europe , but your thoughts on content and distribution would be welcome . thanks fernley &quot; many of you will be aware of some recent and forthcoming appointments within commercial support in enron europe . enron &#x27; s rapid growth and the ability of our people to use their skills in different roles make this a dynamic process , but i have taken this opportunity to summarise changes at a senior level in our tax , accounting and transaction support groups . peter hutton has joined us as vice president , head of us tax , reporting to rod sayers . peter was previously a partner in arthur anderson and will be transitioning in to his new role over the next few months . jim sandt will be taking up a senior role with the tax department in houston early in the new year . melissa allen is to join us shortly as vice president , head of financial operations and transaction support , reporting to me . melissa needs no introduction to many of you , as she has worked with enron europe as a senior manager in arthur anderson for the past 18 months . beth apollo will be returning to houston in the early part of next year to take up a senior role in enron north america &#x27; s energy operations group . phillip lord is transitioning in to his new houston - based role as chief accounting officer for enron broadband services . buddy aiken and stephen wood will be taking on the lead roles in transaction support and financial operations respectively , reporting to melissa allen . i am sure you will join me in welcoming peter and melissa to enron , in congratulating jim , beth , phillip , buddy and stephen , and wishing them all well in their new roles &quot;
</pre>

## Record 010272

**Label:** `benign`

<pre>
HeySince I upgraded to redhat8 mplayer -vo sdl isnt working for me
It gives me black screen and I only hear sound.can anyone help me with this ?btw,
also the source rpm specified that I can do --without libdv
but it didn&#x27;t work, worked for lirc and arts.Thanks,
Roi
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 010273

**Label:** `benign`

<pre>
On 28 Aug 2002, Daniel Quinlan wrote:&gt; Dan Kohn  writes:
&gt; 
&gt; &gt; Daniel, it&#x27;s easy enough for you to change the Habeas scores yourself
&gt; &gt; on your installation.  If Habeas fails to live up to its promise to
&gt; &gt; only license the warrant mark to non-spammers and to place all
&gt; &gt; violators on the HIL, then I have no doubt that Justin and Craig will
&gt; &gt; quickly remove us from the next release.  But, you&#x27;re trying to kill
&gt; &gt; Habeas before it has a chance to show any promise.
&gt; 
&gt; I think I&#x27;ve worked on SA enough to understand that I can localize a
&gt; score.  I&#x27;m just not comfortable with using SpamAssassin as a vehicle
&gt; for drumming up your business at the expense of our user base.I have to agree here.  If Habeas is going to die just because SA does not
support it, that&#x27;s a serious problem with the business model; but that is
nobody&#x27;s problem but Habeas&#x27;s.A possible solution is for Habeas&#x27;s business model to include some kind of
incentive for users of SA to give it the benefit of the doubt.  I have yet
to think of an incentive that fits the bill ...On Thu, 29 Aug 2002, Justin Mason wrote:&gt; I don&#x27;t see a problem supporting it in SpamAssassin -- but I see Dan&#x27;s
&gt; points.
&gt; 
&gt;   - high score: as far as I can see, that&#x27;s because SpamAssassin is
&gt;     assigning such high scores to legit newsletters these days, and the
&gt;     Habeas mark has to bring it down below that. :(   IMO we have to fix
&gt;     the high-scorers anyway -- no spam ever *needs* to score over 5 in our
&gt;     scoring system, 5 == tagged anyway.This is off the topic of the rest of this discussion, but amavisd (in all
its incarnations) and MIMEDefang and several other MTA plugins all reject
at SMTP time messages that scores higher than some threshold (often 10).  
If some new release were to start scoring all spam no higher than 5.1,
there&#x27;d better be _zero_ FPs, because all those filters would drop their
thresholds to 5.On Thu, 29 Aug 2002, Michael Moncur wrote:&gt; But I agree that there needs to be more focus on eliminating rules that
&gt; frequently hit on newsletters. If any newsletters actually use the Habeas
&gt; mark, that will be one way to help.Newsletters won&#x27;t use the mark.  Habeas is priced way too high -- a factor
of at least 20 over what the market will bear, IMO -- on a per-message
basis for most typical mailing lists (Lockergnome, say) to afford it.On Thu, 29 Aug 2002, Harold Hallikainen wrote:&gt; Habeus has come up with a very clever way to use existing law to battle
&gt; spam. It seems that at some point they could drop the licensing fee to
&gt; $1 or less and make all their income off suing the spammers for
&gt; copyright infringement.Sorry, that just can&#x27;t work.If the Habeas mark actually becomes both widespread enough in non-spam,
and effectively-enforced enough to be absent from spam, such that, e.g.,
SA could assign a positive score to messages that do NOT have it, then
spammers are out of business and Habeas has no one to sue.  There&#x27;s nobody
left to charge except the people who want (or are forced against their
will because their mail won&#x27;t get through otherwise) to use the mark.Conversely, if there are enough spammers forging the mark for Habeas to
make all its income suing them, then the mark is useless for the purpose
for which it was designed.Either way it seems to me that, after maybe a couple of lawsuits against
real spammers and a lot of cease-and-desist letters to clueless Mom&amp;Pops,
then either (a) they&#x27;re out of business, (b) they have to sell the rights
to use the mark to increasingly questionable senders, or (c) they&#x27;ve both
created and monopolized a market for &quot;internet postage stamps&quot; that
everybody has to pay them for.The latter would be quite a coup if they [*] could pull it off -- they do
absolutely nothing useful, unless you consider threatening people with
lawsuits useful, yet still collect a fee either directly or indirectly
from everyone on the internet -- effectively we&#x27;ll be paying them for the
privilege of policing their trademark for them.  I don&#x27;t believe they&#x27;ll
ever get that far, but I don&#x27;t particularly want to help them make it.[*] And I use the term &quot;they&quot; loosely, because the whole company could 
consist of one lawyer if it really got to that point.-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 010274

**Label:** `benign`

<pre>
phonetics &amp; phonology from oxford university press introducing phonetics and phonology mike davenport and s . j . hannahs , both at university of durham this book provides a basic introduction to the fundamental concepts on phonetics and phonology , the foundation of most courses in linguistics . the reader is introduced first to articulatory and acoustic phonetics , and then follows a smooth progression in sections on phonology . the book highlights throughout the links between the two subjects and each chapter ends with a set of exercises and suggestions for further reading . the primary source of data is from both general american and received pronunciation . ( an arnold publication ) december 1998 208 pp . ; 38 linecuts 0-340 - 66217 - 4 paper $ 19 . 95 0-340 - 66218 - 2 cloth $ 70 . 00 oxford university press _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ for more information about linguistics titles from oxford : visit the oxford university press usa web site at http : / / www . oup-usa . org or e-mail : linguistics @ oup-usa . org
</pre>

## Record 010275

**Label:** `benign`

<pre>
teaching job of french and german in korea french and french teacher in korea ; the language research center of chonnam national university is looking for one german and one french instructor . we require the teacher to hold ph . d . or ma in tesl / tefl , language acquisition , curriculum and materials development , bilingual education , call , or related fields , and preferably a native speaker of french and german who are fluent in english . we require the teachers to : 1 . teach 630 hours a year ( 3 hours a day , 15 hours a week ) 2 . carry out research and publish one evaluated paper a year 3 . develop teaching materials 4 . attend one / two teachers &#x27; meeting and have one / two office hours each week 5 . participate program administration we provide the teachers with : 1 . housing on or off campus ( sometimes shared ) 2 . yearly payment of 15 , 600 , 000 won ( us $ 19 , 000 ) 3 . 24 , 000 won ( us $ 30 ) for one additional teaching hour over requirement 4 . health insurance for about 20 , 000 won ( us $ 25 ) per month 5 . travel allowance of 400 , 000 won ( us $ 500 ) on first arrival 6 . travel allowance for presenting papers at academic conventions 7 . under current korean national tax laws , teachers from some countries are not required to pay income tax for two years . 8 . assistant professorship and additional monthly payment of $ 125 to those who have doctoral degrees in language acquisition and two year teaching experience we require the following documents : 1 . curriculum vitae with a copy of recent picture 2 . a copy of diploma for m . a . degree in esl / efl 3 . two letters of recommendation applications are accepted on an on-going basis . contract may begin at any sessions and are usually signed for one year . please send or fax a detailed curriculum vitae , a copy of all diplomas , a copy of graduate transcripts and two letters of recommendation to : gyonggu shin , ph . d . , director language research center chonnam national university kwangju 500-757 , korea phone : 82-62 - 520-7920 fax : 82-62 - 526-5521 email : gshin @ rs6 . chonnam . ac . kr
</pre>

## Record 010276

**Label:** `benign`

<pre>
On Fri, 6 Sep 2002, Russell Turpin wrote:
--]want more kids, we have to convince people who are
--]in their twenties to become parents.
--]Hey give me a break, I was working on finding the right mate. Once I did,
boomsky theres a puppy and if you would kindly not put on So much preasure
there culd well be another.
3 is a magic number...yes it is , its a magic number

</pre>

## Record 010277

**Label:** `benign`

<pre>
syntax / syntax - semantics interface potsdam , eric ; syntactic issues in the english imperative ; 0-8153 - 3129 - 0 , cloth ; pages , $ 97 ; garland publishing ; outstanding dissertations in linguistics this book investigates long-standing problems in the syntactic analysis of the english imperative . most earlier works within the generative tradition have claimed that the syntax of imperatives idiosyncratically and irreducibly differs from that of other english clauses . this work argues that , on the contrary , the imperative has a largely regular syntax which is fully compatible with current formal grammars of english . the putative differences reside primarily in three domainsthe behavior of the auxiliary verbs &quot; have &quot; and &quot; be , &quot; the options for subjects , and the word order in negative and emphatic clauses . this study addresses each of these controversial domains in turn and argues that the behavior of the imperative is unexceptional in each case . the work is unique in attempting to assimilate the syntax of the english imperative to better-established analyses of english originally developed for other areas of the language . in defending this thesis , the work analyzes word order , constituent structure , and semantic restrictions in the imperative . analyses of two core phenomena in english syntax , adverb placement and vp ellipsis , are also defended . this in-depth investigation of syntactic and semantic aspects of the modern english imperative will be of interest to scholars of syntactic theory , english linguistics , and english grammar . e - mail : info @ garland . com
</pre>

## Record 010278

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8613665,159/
Date: 2002-10-06T18:12:55+01:00In the first of a two-part series of interviews from the GDC Europe, we talk 
with Mark Cerny about game preproduction, Jonty Barnes about camera control, 
and Jason Kingsley about ratings and censorship.

</pre>

## Record 010279

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8167824,1440/
Date: Not suppliedIt will be the only US state where medical researchers can use public funds to 
create embryos and extract stem cells

</pre>

## Record 010280

**Label:** `benign`

<pre>
On Wed, 18 Sep 2002, R. A. Hettinga wrote:
--]I know it&#x27;s not the popular choice for a lot of people, but I&#x27;d
--]suggest, um, church. :-). Like Woody Allen said, 90% of life is
--]showing up, right?
--]I think another venue for finding people is the workplace. As a contractor
I have had the opertunity to meet lots of eligables over the course of my
wandering workhistory.My wife was my Task Order Manager years ago, thats  how we met. Her joke
is that she is still my Task Order Manager but now I dont get paid:)-By starting up your own companies or working in sterile thinklabs you are
cutting yourself off from one heck of a fertile ground for linkages....the
common office.I like the shurch idea as well. Other ideas...Book circles, geocaching groups, heck Rhorho your still young enough to
hit the campus mixers...and I mean the social stuff not the techtech
events.
Above all, ask yourself whats important to you..Life, you either life it or you waste it.
-tom

</pre>

## Record 010281

**Label:** `benign`

<pre>
re : meter # : 1266 ; july 2000 activity / allocation exception fyi - - - - - - - - - - - - - - - - - - - - - - forwarded by robert e lloyd / hou / ect on 08 / 09 / 2000 03 : 52 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : lee l papayoti on 08 / 09 / 2000 03 : 33 pm to : robert e lloyd / hou / ect @ ect cc : subject : re : meter # : 1266 ; july 2000 activity / allocation exception i &#x27; ll get you a price tomorrow when i meet with him . . . from : robert e lloyd 08 / 09 / 2000 12 : 50 pm to : lee l papayoti / hou / ect @ ect cc : daren j farmer / hou / ect @ ect , pat clynes / corp / enron @ enron , rita wynne / hou / ect @ ect , howard b camp / hou / ect @ ect subject : meter # : 1266 ; july 2000 activity / allocation exception i spoke with bob dorcheus , brandywine about this issue and he suggest you and he get together and agree on a price because the gas flowed into the plant . this gas flowed without a nomination . - - - - - - - - - - - - - - - - - - - - - - forwarded by robert e lloyd / hou / ect on 08 / 09 / 2000 12 : 47 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : gary a hanks 08 / 09 / 2000 11 : 27 am to : robert e lloyd / hou / ect @ ect cc : earl tisdale / hou / ect @ ect , pat clynes / corp / enron @ enron , rita wynne / hou / ect @ ect , howard b camp / hou / ect @ ect subject : meter # : 1266 ; july 2000 activity / allocation exception the volumes on meter # 1266 for 7 / 1 / 00 and 7 / 31 / 00 are valid gas flow . 7 / 1 / 00 volumes are carry over from june activity ( meter was shut in a little after 9 : 00 am on 7 / 1 / 00 ) . 7 / 31 / 00 volumes were caused by the plant bringing on the meter before 9 : 00 am on 8 / 1 / 00 . if you have any questions please call . 36449 . thanks gary h - - - - - - - - - - - - - - - - - - - - - - forwarded by gary a hanks / hou / ect on 08 / 09 / 2000 11 : 18 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : robert e lloyd 08 / 09 / 2000 11 : 17 am to : gary a hanks / hou / ect @ ect , earl tisdale / hou / ect @ ect cc : pat clynes / corp / enron @ enron , rita wynne / hou / ect @ ect , howard b camp / hou / ect @ ect subject : meter # : 1266 ; july 2000 activity / allocation exception please verify the volume on meter # : 1266 for july lst &amp; 31 st are valid gas flow . brandywine did not nominate any activity at this meter for july 2000 .
</pre>

## Record 010282

**Label:** `benign`

<pre>
request submitted : access request for steve . moen @ enron . com you have received this email because you are listed as a security approver . please click approval to review and act upon this request . request id : 000000000007593 request create date : 11 / 16 / 00 11 : 21 : 54 am requested for : steve . moen @ enron . com resource name : eol us backoffice stack manager resource type : applications
</pre>

## Record 010283

**Label:** `benign`

<pre>
I&#x27;m talking specifically about the last ~24 hours where it seems 
like things have not been working.  People who&#x27;ve been using the 
Outlook plugin have been telling me they&#x27;ve been seeing really 
bad performance, which I&#x27;ve been attributing to the problems 
which have been discussed here and on sa-talk.  I&#x27;m not saying 
it&#x27;s completely not working, or that it has no chance of being 
fixed 15 minutes from now, just that it&#x27;s not currently working, 
and there have been a number of &quot;hiccup&quot; periods in the last 
couple months.  Plus, it&#x27;s hard to deny that we don&#x27;t know yet 
if the trust network is going to work or not -- it only just got 
switched on, and that changeover seems to have corresponded with 
people noticing things have stopped working right.COn Thursday, August 8, 2002, at 01:44  PM, Jordan Ritter wrote:&gt; On Thu, Aug 08, 2002 at 01:36:15PM -0700, Craig R.Hughes wrote:
&gt;
&gt; # Razor2 seems to have been a long time in coming, [...] and doesn&#x27;t
&gt; # currently work.
&gt;
&gt; Quite a strong statement, Craig, one which over 30,000 active users a
&gt; day would strongly disagree with.
&gt;
&gt;
&gt; --jordan
&gt;-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 010284

**Label:** `benign`

<pre>
Hello all,
I&#x27;m trying to get wins name resolution across subnets working and reckon the
first step is to be 
able to do a nmblookup without using the -B (broadcast address flag). Does
anyone know how 
samba can be configured to do broadcasts to subnets other than just the
local subnet. 
I don&#x27;t think this has anything to do with the remote announce parameter.Thanks
Bryan
&quot;And the smoke of their torment ascendeth up for ever and ever: and they
have no rest day nor night, 
who worship the beast and his image, and whosoever receiveth the mark of his
name.&quot;
(Revelation 14:11)-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010285

**Label:** `benign`

<pre>
Has anyone considered the fact that these occurrances appear to
be increasing. I&#x27;m aware that maybe more publicity surrounding
some and certain agencies have been granted more funding, but 
I&#x27;d like to see some data which shows if these are increasing
or not. Why? Well, it seems to me if we were going to get hit, the one
that does it may have been part of a larger swarm or cluster
which has over the years increased the distance between the
rocks. Like the Schumaker Levy-9, which had multiple rocks
all impacting at different times, others may have this same
type of design and could be in different stages of increasing
distance from one another. Also to consider is if SL-9 was
on course for earth, would we get hit by all rocks or only
one because the earth is a much smaller target than Jupiter?So, my theory is that if these near earth rocks are increasing
so does our chance of discovering the last three were part of
a swarm of 15 of which 10, 11 and 12 may hit.On 24-Jul-2002, bitbitch@magnesium.net wrote:
&gt; &gt;
&gt; &gt; Hit or miss, Groundhog Day 2019 is going to be one heck of a show. Book
&gt; &gt; early, avoid the rush.
&gt; 
&gt; Hey, meybee by then, Bush&#x27;s grand plan for a missle defense system will
&gt; actually pan out and -work- ...
&gt; I&#x27;m not holding my breath, but i&#x27;m not going to panic for something thats
&gt; a little under 17 years away, either.
&gt; -c
&gt; 
&gt; &gt;
&gt; &gt; --
&gt; &gt; Gary Lawrence Murphy  TeleDynamics Communications
&gt; &gt; Inc Business Innovations Through Open Source Systems:
&gt; &gt; http://www.teledyn.com &quot;Computers are useless.  They can only give you
&gt; &gt; answers.&quot;(Pablo Picasso)
&gt; &gt;
&gt; &gt; http://xent.com/mailman/listinfo/fork
&gt; 
&gt; 
&gt; 
&gt; http://xent.com/mailman/listinfo/fork
http://xent.com/mailman/listinfo/fork

</pre>

## Record 010286

**Label:** `benign`

<pre>
fw : first pass at netco who can i work with to get the first names of the individuals listed for gas trading , as well as the split between structuring / fundamentals / trading ? ( i see some of the latter in the name column , is that the entire group ? it would be helpful to have them grouped separately . ) in a lot of cases there are several listing for some names , and they appear to be it people . we &#x27; re building a plan based on title , so that &#x27; s why i need this info . thanks ! - - - - - original message - - - - - from : kitchen , louise sent : monday , december 03 , 2001 5 : 43 pm to : killen , faith subject : first pass at netco louise kitchen chief operating officer enron americas tel : 713 853 3488 fax : 713 646 2308
</pre>

## Record 010287

**Label:** `benign`

<pre>
fw : commercialization of back office competitor - aquilla fyi . aquilla &#x27; s plan is described below . i talked with martin chavez at kiodex and he confirmed as well . i think the bigger issue is that other enterprises are starting to try to build businesses around their systems and operations . i think we have a good head start with commoditylogic and kiodex but we have to run even faster now . gp - - - - - original message - - - - - from : richter , brad sent : wednesday , august 29 , 2001 10 : 25 am to : piper , greg subject : fw : commercialization of back office competitor fyi - - - - - original message - - - - - from : pacheco , leonardo sent : wednesday , august 29 , 2001 9 : 21 am to : richter , brad subject : re : commercialization of back office competitor brad , you are right , aquila &#x27; s riskl 80 is similar to kiodex &#x27; s offering . it is a web - based reporting and valuation tool ( no software downloads are needed ) . the difference is that riskl 80 focuses on reporting and valuation . in other words , riskl 80 does not offer pricing calculators as does kiodex &#x27; s . it seems to me that kiodex &#x27; s risk workbench is a more robust solution because it provides decision tools to price opportunities before transacting while riskl 80 is &quot; after the fact &quot; reporting and transacting . it looks to me that when commodity logic launches its risk valuation modules it will become more of a direct competitor to riskl 80 . in its initial phase , riskl 80 is offering services to the gas market only . soon , they will offer the tools for the power markets . riskl 80 &#x27; s products : otc trade preview - details of transactions as entered into system daily / monthly futures and forwards reports - position exposures and daily pal &#x27; s based on mark - to - market accounting options valuation report - measures exposures due to options plus volatility calculations ( i . e . greeks ) daily / monthly total position summary - total picture of risk exposure in the portfolio riskl 80 &#x27; s target market : similar to commodity logic &#x27; s market . they will target medium to small shops that do not have the technology , staff , or resources to run sophisticated reporting and valuation in - house . let me know if you have any questions . leonardo - - - - - original message - - - - - from : richter , brad sent : tuesday , august 28 , 2001 3 : 45 pm to : pacheco , leonardo subject : fw : commercialization of back office competitor see below . could you take 10 minutes and go to the riskl 80 site and give me a brief download on what they &#x27; re offering ? it seems like a &quot; kiodex - lite &quot; product ( talk to brandon is you don &#x27; t know kiodex ) but i want to make sure we &#x27; re not in the same space . thanks , brad - - - - - original message - - - - - from : piper , greg sent : tuesday , august 28 , 2001 3 : 10 pm to : richter , brad ; webb , jay ; gros , thomas d . ; beck , sally ; pickering , mark subject : fw : commercialization of back office competitor your opinions on this ? gp - - - - - original message - - - - - from : kitchen , louise sent : tuesday , august 28 , 2001 3 : 09 pm to : piper , greg ; whalley , greg ; beck , sally subject : commercialization of back office competitor monday august 27 , 10 : 58 am eastern time press release source : aquila , inc . aquila launches cost - effective energy risk management service kansas city , mo . - - ( business wire ) - - aug . 27 , 2001 - - aquila , inc . ( nyse : ila - news ) , one of the largest north american wholesalers of natural gas and electricity and risk management organizations , today launched riskl 80 ( sm ) , a product that provides clients with full - service management of their commodity transactions , delivered to them daily , weekly or monthly via the web . riskl 80 will be marketed to utilities , municipalities , energy aggregators and small energy marketers , as well as large industrial firms . these clients typically are low - volume traders that use spreadsheets to manage their energy transactions . the product was designed to meet the deal capture and portfolio valuation needs of clients who do not wish to purchase or build an expensive , enterprise - wide risk management software system . using a password - protected web - interface , clients send aquila their transactions or trades , which are then processed through the company &#x27; s proprietary system . the client then receives daily , weekly or monthly risk analysis and deal pricing reports . ` ` what we are doing is making it possible for these clients to have access to a highly sophisticated trading organization , its skills and most important , its collective knowledge , &#x27; &#x27; said jennifer fisher , aquila vice president and head of the radius group . aquila &#x27; s radius group jointly developed riskl 80 with sungard trading and risk systems , a leading energy risk management software firm . a key component of the riskl 80 package is its use of sungard &#x27; s epsilon software for risk analysis and client reporting . riskl 80 will initially handle only natural gas transactions . power transaction capabilities will be added in the near future . data available to clients includes detailed portfolio valuation , evening over - the - counter trade previews , mark - to - market income reports , total position reports as well as forward curves , deal capture and value - at - risk calculations . additional information is available at www . aquila . com , or www . riskl 80 . com based in kansas city , aquila is one of the top wholesalers of electricity and natural gas in north america and is an innovative provider of risk management products and services . the company also owns and controls a diverse portfolio of merchant assets , including power plants , gas storage , pipeline , and processing facilities , and other complementary merchant infrastructure facilities . outside north america , aquila provides wholesale energy services in the united kingdom , scandinavia and germany . aquila is 80 percent owned by utilicorp united ( nyse : ucu - news ) , a multinational energy company based in kansas city with more than 4 million customers . it operates in the united states , canada , new zealand and australia . louise kitchen chief operating officer enron americas tel : 713 853 3488 fax : 713 646 2308
</pre>

## Record 010288

**Label:** `benign`

<pre>
expense report receipts not received employee name : jerry farmer report name : daren farmer report date : 9 / 7 / 01 report id : 82 c 5 aabda 37 bl 1 d 5 b 43 e submitted on : 9 / 7 / 01 receipts for this expense report have not yet been received . if receipts have been mailed , please disregard this message .
</pre>

## Record 010289

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8412855,1440/
Date: Not suppliedThe modified form of vitamin D could be an effective new treatment for 
osteoporosis, says a US team

</pre>

## Record 010290

**Label:** `benign`

<pre>
re : equistar fyi . . . only ! this activity has been rescheduled and reallocated . from : lee l papayoti on 01 / 27 / 2000 11 : 17 am to : robert e lloyd / hou / ect @ ect cc : stella l morris / hou / ect @ ect , daren j farmer / hou / ect @ ect , kenneth seaman / hou / ect @ ect subject : equistar equistar has requested a scheduling / nomination change retroactive to january 1 . at the start of the month , janice nominated a small volume to meter # 1165 ( or maybe it was to # 1266 ) , dupont victoria . equistar wants that volume to go to meter # 1552 instead , for the whole month of jan . any questions - call me at 3 . 5923 thanks lee
</pre>

## Record 010291

**Label:** `benign`

<pre>
summary : in other words dear netters , i have posted several queries a few months ago . about ten members of the linguist list answered me by e-mails . i must show great thanks especially to prof . welchsler , prof . jewett , prof . edwards ( who sent me examples of iow from london - lund corpus ) , prof . patrikis , prof . spackman , prof . macrakis , prof . alvarez - caccamo , prof . harris , prof . huettner , and dr . georgia green ( who introduced me &quot; two types of convention in indirect speech acts &quot; by j . l . morgan , contained in the volume : _ syntax and semantics , vol . 9 : pragmatics _ edited by peter cole ( 1978 , new york : academic press ) . the following are my own summary . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * in this summary , i propose the hearer &#x27;s implicature / implication - interpretation process ( prof . alvarez - caccamo &#x27;s suggestion ) , which constrains on the use of in other words ( iow ) in english . i would distinguish between speaker &#x27;s intended implicature and hearer &#x27;s interpreted implicature . thus , speaker a may have the intention to implicate x , but hearer b may very well fail to recognize such impli - cature or else may interpret some other . even if b correctly interprets a &#x27;s intention , b &#x27;s interpretation depends largely upon the context and / or background assumption . the use of iow is such a case . a dictionary edited by ball ( 1986 ) calls such usage &quot; inferential function &quot; , though he uses the term rather informally in the dictionary . i will follow his terminology just for the sake of convenience . the inferential use of iow frequently occurs between the two people &#x27;s dialogue . ( 1 ) a : i &#x27; m afraid there is n&#x27;t much i can help you with . b : _ in other words _ , you do n&#x27;t want to be bothered . although the interpretation process of ( 1 ) is very close to what is called &quot; conventional &quot; use , i . e . it might be processed spontaneously , without any inferential process in the hearer &#x27;s mind , b guesses a &#x27;s real intent , which is not directly inferred from a &#x27;s utterance , but indirect - ly from a &#x27;s implicature . in order for b to necessitate iow , b exploits his / her background assumption / encyclopedic knowledge , implicating that a is busy now , or a does n&#x27;t feel at ease with b . let the implicature just explained be c , then a sequential flow of consciousness / inferential process such as a $ @ &quot; * ( jc $ @ &quot; * ( jb emerges . iow is a visible index of the hearer &#x27;s implicature-interpretation process . speaker / hearer &#x27;s background assumption varies between common sense and the knowledge which is only valid between the speaker and hearer . ( 2 ) a : i love schubert &#x27;s late piano sonatas . b : _ in other words _ , you do n&#x27;t like the beethoven sonatas ? iow in ( 2b ) is derived by the use of a restricted set of background assumption in which b has already admired the beethoven sonatas . b assumes that a is also an admirer of beethoven , but contrary to b &#x27;s assumption a declares an admiration for schubert . so , b feels criticism in a &#x27;s words . b &#x27;s background assumption becomes an old information , conflates a &#x27;s new information and enables iow to create a = b . &quot; non - conventional &quot; , rather complicated use of iow is the following . ( 3 ) a : i &#x27; m going to kill you . b : _ in other words _ , you &#x27;d like it if i moved my car . for example , b &#x27;s car stands in the way of a &#x27;s car , so that a gets infuriated at b . the situation like the above gets a to utter such harsh words ; kill you . a &#x27;s real intent , in this case implicature / implication , is &quot; i &#x27; m going to kill you if you do n&#x27;t move your car &quot; , or simply &quot; move your car &quot; , which is labelled as c again . b , beginning with iow , paraphrases c by b &#x27;s own words . again in order for b to use iow , h / she must infer that a assumes / implicates c . background assumption mitigates b &#x27;s processing effort . if not , b processes too much effort and cannot interpret a &#x27;s words . b &#x27;s job here is to process the flow of the dialogue like a $ @ &quot; * ( jc $ @ ! a ( jb . b &#x27;s failure to process / infer the flow of the dialogue sometimes occurs . ( 1 &#x27; ) a : i &#x27; m afraid there is n&#x27;t much i can help you with . b &#x27; : ? _ in other words _ , you need to be helped . in the context where a really needs help , s / he does n&#x27;t bother to say that s / he can&#x27;t help b &#x27; . if a &#x27;s hands are full of the parcels and he visibly needs help , so that s / he says s / he can&#x27;t help b &#x27; , there is a possibility of b &#x27; saying it is you who need to be helped . however , this is a very insulting comment , because b &#x27; actually implies that if you can&#x27;t help me , you are not a capable person . so , you are the one who needs help . another completely misled example of inference is the following . ( 4 ) a : sorry , i can&#x27;t help you now , because i &#x27; m busy . b : * _ in other words _ , you &#x27; re busy . unacceptability of b comes from a &#x27;s words _ because i &#x27; m busy _ , where a has already spoken out his own implicature c . mere repetition cannot be allowed in iow &#x27;s case . if something extra can be implied in b &#x27;s response , type of ( 4 ) is ok . ( 5 ) a : sorry , i can&#x27;t help you now . b : _ in other words _ , you can&#x27;t . ( - ) &#x27; you really can&#x27;t . &#x27; ) in summary , an utterance &quot; a . in other words , b &quot; has an inferential process / hearer &#x27;s interpretive process &quot; a $ @ &quot; * ( jc ; in other words c $ @ ! a ( jb &quot; . iow can be campared with &#x27;s o &#x27; and &#x27; then , &#x27; etc . the following results are the above contributors &#x27; reactions . ( * ) means that there are some who judge a sentence acceptable and others unacceptable . &#x27; so &#x27; : $ @ ! ! ( j ( 6 ) a . there was $ 5 in his wallet . { _ so _ / ( * ) _ in other words _ } he had n&#x27;t spent all the money . b . she &#x27;s your teacher . { _ so _ / ( * ) _ in other words _ } you must respect her . $ @ ! ! ( j ( 7 ) playing the french horn . a : anyway , the horn makes funny noises . { _ so _ / ( * ) _ in other words _ } it &#x27;s a treacherous instrument , is n&#x27;t it ? it &#x27;s something that is very hard for you to control . why is that ? too much spit , or what ? b : i &#x27; m glad you &#x27; ve used that term . because it &#x27;s not difficult . it is treacherous . so are the players , of course . but that &#x27;s another story . $ @ ! ! ( j ( 8 ) tom ate condemned meat . { _ so _ / * _ in other words _ } he felt ill . $ @ ! ! ( j ( 9 ) bill insulted mary . { _ so _ / _ in other words _ } she left . in contrast with resultative &#x27;s o &#x27;s &#x27; in ( 6 ) and ( 7 ) , two &#x27;s o &#x27;s &#x27; in ( 8 ) and ( 9 ) are sequential . in the case of iow , one is ok and the other is out . ( 9 ) can be interpreted that bill &#x27;s insulting mary always leads to her leaving ( here ) , so that iow is permitted . iow in ( 8 ) is n&#x27;t ok because eating condemned meat always equals to his feeling ill , in which case iow in such situation is redundant / meaningless / uninformative . &#x27; then &#x27; : $ @ ! ! ( j ( 10 ) an insurance man visits a girl he knows . he has brought her a policy application for signature . they talked about her husband . girl : i &#x27; m expecting robert home soon . insurance salesman : oh ! why ? is he in trouble ? g : no . he &#x27;s thinking of setting up in business on his own . is : oh , good for him . g : you think it &#x27;s a good idea ? is : yes , why not ? g : small businesses are going bust all over the place . is : so , there are millions of people on the dole right now who thought they were safe and secure working for someone else . { _ so _ / _ in other words _ / ( * ) _ then _ } , now &#x27;s the time to have a go . there &#x27;s nothing else to lose anyway . g : think so ? is : yes . &#x27; in that case &#x27; : $ @ ! ! ( j ( 11 ) a : i &#x27; m afraid there is n&#x27;t much i can help you with . b : { _ in that case _ / ( * ) _ in other words _ } i shall have to ask someone else . &#x27; that is &#x27; : $ @ ! ! ( j ( 12 ) they took refreshments , { _ that is _ / * _ in other words _ } , sand - witches , coffee , beer , fruit juice , and chocolate . ball ( 1986 ) explains that &#x27; that is &#x27; is open-ended and iow is closed - ended . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * if you have further comments on my analyisis of iow above , please do n&#x27;t hesitate to e-mail me . thanks very much for all the help you have given . sincerely , hiroaki tanaka associate professor , tokushima university , japan . e-mail : gca01363 @ niftyserve . or . jp
</pre>

## Record 010292

**Label:** `benign`

<pre>
project doorstep - - - - - - - - - - - - - - - - - - - - - - forwarded by veronica valdez / hou / ect on 03 / 10 / 2000 11 : 08 am - - - - - - - - - - - - - - - - - - - - - - - - - - - dawn rodriguez @ enron 03 / 10 / 2000 10 : 49 am to : ted murphy / hou / ect @ ect , veronica valdez / hou / ect @ ect cc : subject : project doorstep please find attached the presentations for ba , sao paulo , sydney and singapore . note : bill bradford , scott earnest , and rudi zipter may have additional changes to the sydney and singapore presentations . thank you dawn
</pre>

## Record 010293

**Label:** `benign`

<pre>
ews mid - year final prc mtg . distribution list to : mark frevert ; greg whalley ; john lavorato ; louise kitchen ; mike mcconnell ; jeff shankman ; philippe bibi ; greg piper ; jeff mcmahon ; ray bowen ; rebecca mcdonald ; jim hughes ; david oxley ; robert w . jones ; wes colwell ; mark haedicke ; vince kaminski ; phillip allen ; tim belden ; chris calger ; joe deffner ; tim detmering ; dave duran ; joe kishkell ; rob milnthorp ; brian redmond ; gary hickerson ; george mcclellan ; sally beck ; brian stanley ; keith dodson ; cc : niki daw ; liz taylor ; kim hillis ; tammy schoppe ; cathy phillips ; jennifer burns ; peggy mccurley ; tina spiller ; sue ford ; marsha schiller ; loretta brelsford ; connie blackwood ; julie clyatt ; lisa costello ; shirley tijerina ; janette elbertson ; shirley crenshaw ; ina rangel ; deborah davidson ; mollie gustafson ; megan angelos ; susan fallon ; tina rode ; g . g . garcia ; manuela cappelletto ; lillian carroll ; judy zoch ; angie collins ; patti thompson ; nicola blancke ; barbara hooks ; bc : sheila knudsen ; carol coats ;
</pre>

## Record 010294

**Label:** `benign`

<pre>
el paso outage el paso was to begin meter maintenance sunday at its itwwinrk interconnect ( apache county , az ) that will last through tuesday . the point will be shut in during this time with zero volumes scheduled .
</pre>

## Record 010295

**Label:** `benign`

<pre>
re : cornhusker tenaska iv has been operating without a &quot; gas agency agreement &quot; since that portion of the transition agreement expired on august 31 . we met with sandy and the texas gas desk on september 28 to firm up commercial terms ( which i think we generally accomplished for all matters other than the price that would be charged by the desk ) . should we be concerned with the amount of time this is taking ? that is , is there any risk we face ( bank - wise or otherwise ) during the period of time before this agreement is inked and taken through the bank consent process ? rh - - - - - - - - - - - - - - - - - - - - - - forwarded by garrick hill / hou / ect on 10 / 17 / 2000 02 : 39 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : sandi m braband on 10 / 17 / 2000 02 : 30 pm to : john griffith / corp / enron @ enron cc : garrick hill / hou / ect @ ect , daren j farmer / hou / ect @ ect subject : re : cornhusker john , i have a draft that i have been working on revising - - got pulled off to work on triple lutz again and may not have anything to distribute until late next week - - i will be out of the office on triple lutz the rest of today and tomorrow and then out of town until the 25 th - - i will try to get something to you to look at before i go but can make no guarantees - - sandi john griffith @ enron 10 / 17 / 2000 08 : 17 am to : sandi m braband / hou / ect @ ect cc : subject : cornhusker sandi , what is going on with cornhusker ? have we made any progress on the agreement ? please let me know where we stand . thanks . john
</pre>

## Record 010296

**Label:** `benign`

<pre>
passport signup &gt; here you go , take care . steven wakefield el paso energy helpdesk phone : 713 - 420 - 5109 fax : 713 - 420 - 5354 this email and any files transmitted with it from el paso energy corporation are confidential and intended solely for the use of the individual or entity to whom they are addressed . if you have received this email in error please notify the sender . - passport _ energy _ services _ signup . doc
</pre>

## Record 010297

**Label:** `benign`

<pre>
re : hoop it up try 713 - 839 - 0573 ( home ) , but more likely : 713 - 557 - 4869 ( cell ) , and just to be clear o &#x27; neal and i are the &quot; assault &quot; part of the team , not the &quot; aggie &quot; part .
</pre>

## Record 010298

**Label:** `benign`

<pre>
please note my new email address effective today , please send future correspondence to me at : staceykn @ yahoo . com . thanks .
</pre>

## Record 010299

**Label:** `benign`

<pre>
prepositions workshop workshop on prepositions organized by hubert cuyckens and guenter radden , englisches seminar , universitaet hamburg friday , june 26 , 1998 14 . 00 - 14 . 15 welcoming address 14 . 15 - 14 . 40 dagmar haumann , paedagogische hochschule erfurt the projections of temporal prepositions 14 . 40 - 15 . 05 stefan schierholz , universitat gottingen regierte praepositionen des deutschen 15 . 05 - 15 . 30 niina ning zhang , zas , berlin locative prepositions in chinese 15 . 30 - 15 . 45 discussion of section papers 16 . 15 - 16 . 40 britta mondorf , universitaet paderborn the effect of prepositional complements on the choice of synthetic or analytic comparatives and superlatives 16 . 40 - 17 . 05 gunter rohdenburg , universitaet paderborn grammatische variation im englischen : zur variablen verwendung von prepositionen 17 . 05 - 17 . 30 priska - monika hottenroth , universitaet hamburg lexical subordination und die rolle der praepostionen im franzoesischen 17 . 30 - 17 . 45 discussion of section papers 18 . 00 - 18 . 25 annette leimllmann , universitaet hamburg getting across 18 . 25 - 18 . 50 hubert cuyckens , universitaet hamburg &amp; antwerpen the preposition to : prepositional and infinitival uses 18 . 50 - 19 . 15 frank brisard and dominiek sandra , antwerp university spatial prepositions and their functional implications 19 . 15 - 19 . 40 birgitta meex , antwerp university die uebertragenen bedeutungen der praeposition ueber 19 . 40 - 20 . 00 discussion of section papers saturday , june 27 , 1998 9 . 00 - 9 . 25 claudio di meola , universitaet koeln praepositionaler rektionswechsel im deutschen unter dem gesichtspunkt der grammatikalisierung 9 . 25 - 9 . 50 kristine jensen de lpez and chris sinha , aarhus university the grammatical and psychological status of zapotec body-part terms : a developmental and cognitive linguistic study 9 . 50 - 10 . 15 tania kuteva , universitaet koeln be + loc . preposition + main verb auxiliation in the languages of europe 10 . 15 - 10 . 40 mechtild reh , universitaet hamburg the story of the southern lwoo preposition * kuom 11 . 40 - 11 . 00 discussion of section papers 11 . 15 - 11 . 40 guenter radden and elisabeth mathis , universitaet hamburg prepositional construal of similarity 11 . 40 - 12 . 05 olaf jaekel , universitaet hamburg prepositions from an onomasiological perspective : the logic of mental containment 12 . 05 - 12 . 30 ren dirven , universitaet duisburg about aboutness 12 . 30 - 12 . 55 elena bellavia , universitaet giessen das lehren der polysemie der praepositionen in deutsch als fremdsprache 12 . 55 - 13 . 15 discussion of section papers * * * * * * * * * * * * * * * * * * * * * * * * * * * dr . hubert cuyckens universitaet hamburg englisches seminar von - melle - park 6 d-20146 hamburg tel : + 49-40 - 4123-4853 / - 5972 fax : + 49-40 - 4123-4856 * * * * * * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 010300

**Label:** `benign`

<pre>
re : tw unsubscribed capacity i migrated the new web pages to www . hottap . enron . com and have tested them , everything looks okay . please let me know if you have any questions . thanks jeff - - - - - original message - - - - - from : huo , jeff sent : fri 2 / 8 / 2002 1 : 57 pm to : lokay , michelle ; frazier , perry cc : hermanek , patty ; kuehl , toby ; lindberg , lorraine subject : re : tw unsubscribed capacity we will migrate these new changes to production ( www . hottap . enron . com ) on next monday night , and i will send a confirmation email out when it is done . please let me know if you have any questions or concerns . thanks jeff - - - - - original message - - - - - from : lokay , michelle sent : friday , february 08 , 2002 1 : 41 pm to : huo , jeff ; frazier , perry cc : hermanek , patty ; kuehl , toby ; lindberg , lorraine subject : re : tw unsubscribed capacity this looks good from the commercial side . i am assuming that when a customer uses the &quot; view printable page , &quot; that printout header cannot be frozen . otherwise , this is what we are looking for as far as viewing this spreadsheet on line . when the formatting issues are resolved , i recommend we move this to production . thanks . - - - - - original message - - - - - from : huo , jeff sent : friday , february 08 , 2002 8 : 39 am to : kuehl , toby ; frazier , perry ; lokay , michelle cc : hermanek , patty subject : re : tw unsubscribed capacity i added an extra &quot; printable page &quot; button on the page so that the entire page can be printed out . michelle , please let me know if you still have problems to get to the tw unsubscribed capacity page . sorry about the delay . thanks . jeff x 39290 - - - - - original message - - - - - from : kuehl , toby sent : thursday , february 07 , 2002 10 : 09 am to : frazier , perry ; huo , jeff subject : re : tw unsubscribed capacity importance : high i have an issue with this format . when you print it the header nor disclaimer no longer shows up . we have run into this issue before , and that is why we have not put it in frames . we may need to look at another format to cover the on - line users and the customers that print this report . this has been an on going issue on - line when you scroll down you lose the header . the printing customers won &#x27; t think to highly of this format . my suggestion is lets try look at another format that will cover both sides ( printing and viewing ) . jeff / perry , we may have to get together and discuss this issue . toby - - - - - original message - - - - - from : frazier , perry sent : thursday , february 07 , 2002 9 : 56 am to : kuehl , toby subject : fw : tw unsubscribed capacity call me to discuss . perry 3 - 0667 - - - - - original message - - - - - from : huo , jeff sent : wednesday , february 06 , 2002 4 : 07 pm to : frazier , perry cc : stacy , don subject : tw unsubscribed capacity please go to our testing site to view the modified tw unsubscribed capacity web page and see if this is what you guys want . i removed the borders because the table header and records page are in the different frames , it is very hard to adjust them exactly straight into the same columns . thanks ! jeff
</pre>

## Record 010301

**Label:** `benign`

<pre>
ena / eops recruiting business plan attached is a draft of a recruiting business plan submitted to kathleen for ena / eops . this information will be integrated into the global business plan for eops . let me know if you have questions . thanks . ar / 33202 - - - - - - - - - - - - - - - - - - - - - - forwarded by alexus rhone / corp / enron on 02 / 17 / 2000 10 : 04 am - - - - - - - - - - - - - - - - - - - - - - - - - - - alexus rhone 01 / 28 / 2000 04 : 27 pm to : fenninger @ pdq . net cc : alexus rhone / corp / enron @ enron subject : ena / eops recruiting business plan kathleen , attached is the business plan for ena / eops . i &#x27; m scheduled to attend several staff meetings next week . kim , norma and i are still trying to schedule a meeting to discuss how we will address the overall hr needs of eops . let me know if you have any questions . thanks . ar / 33202
</pre>

## Record 010302

**Label:** `benign`

<pre>
re : 5 . 1254 typological classification for what it is worth , i disagree with martin haspelmath ( and agree with fritz newmeyer ) about the problem of defining the concepts with which typological work operates . but we need to make sure that this does not become a political thing : i do n&#x27;t see any difference on this point between the work of typologists / functionalists as compared to that of formalists . everybody who tries to compare two or more languages has these problems . for ex . , in reference to the basic word order question , i noticed a long time ago that some languages which were claimed to have ovs as basic actually rarely had both o and s at the same time in the same sentence , so i argued that maybe the term &quot; basic &quot; should not be applied there in the way in which it applies to english svo patterns . there are many many examples where we compare incomparables and do not compare comparables because our concepts are vague and our terminologies are ambiguous . i have , for example , published some papers documenting the confusions surrounding the term &#x27; topic &#x27; in the typological literature . there seems to be a lot of confusion likewise about the concepts of &#x27; ergative &#x27; and &#x27; passive &#x27; . and it seems to me that typological categories such as &#x27; configurational &#x27; ( or non ) , &#x27; pro-drop &#x27; ( or non ) , and so on , are just as poorly defined and just as liable to lead to all kinds of confusion .
</pre>

## Record 010303

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;E&quot; == Elias Sinderson  writes:    E&gt; ... The strength to weight ratio of a spider is so high
    E&gt; that Spiderman is able to throw a bus several city blocks with
    E&gt; little effort. His endurance is similarly enhanced as well.Could this be as simple as a modified molecular structure where the
humanoid cells are in fact exo-skeletally structured with more atoms
per cubic angstrom to achieve the distance-squared tensile strength
enhancements we find when we introduce smaller metal atoms between the
lattice packed grid of iron atoms to create steel?  This &#x27;steel-effect&#x27; might give bone structure and tendons dramatically
(several orders of magnitude) more tensile strength without the need
to significantly increase the weight (like magnesium-alloy or
carbon-fiber weight compared to iron, Spidey could even be way under
weight).  Only increasing tensile strength could accommodate the
mobility and leverage feats since bones are actually formed from
bubbles of organic material hydrolically assisted, tensile strength
cross-sectionally would give his frame the strength to withstand the
muscular enhancement.    E&gt; As for the spidey senses, well they&#x27;re really great, but AFAIK
    E&gt; not really well explained in the comic series. If the same close-packing gap-filling arachne-molecular structure
modification occurs in neural tissues, and there&#x27;d be no reason to
think that these would grow differently from bones and tendons, then
what we are seeing in spidey sense is no more than the heightened
cerebral functions due to shorter/faster/stronger synapses throughout
the entire nervous system.  Since we know dogs and cats measure human emotions by smell, clearly
hearing the heartbeats, and other subtle clues within their normal
sensory ranges (but seem mystical to us) ...  for Peter Parker,
everything from air currents on his facial-hairs to extremely subtle
hormone smells might coallesce into a general gestalt of Spidey-Sense;
don&#x27;t forget that he&#x27;d acquired this ability in adolescence and thus
would lack any cultural or even pathological basis to explain the
heightened awareness to himself in anything but mystical terms. We
know from issue #1 that his collision-avoidance reflex response time
was far swifter than his cognitive awareness since he &#x27;found&#x27; himself
already stuck to the tree when the bicycle was already past and hence
his disorientation (&quot;You ok, Mister?&quot;) as if it was a hallucination.Hmmm ... it may even be physio-psychologically interesting to examine
if Peter Parker&#x27;s personal quandries arose _because_ his physiological
&#x27;Spidey&#x27; infrastructure had been advanced whereas his psychological
perception of his self had not, ie, &quot;Peter&quot; was not &quot;Spiderman&quot; but
just the &quot;driver of the bus&quot;.  Only, unlike ourselves, he found his
self driving a body-vehicle not evolutionarily matched to his
cognitive time-scales.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
 Business Advantage through Community Software : http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)

</pre>

## Record 010304

**Label:** `benign`

<pre>
re : uk portfolios and books setup in risktrac david and vince , in my e - mail below i pointed out to a inconsistency in the portfolio hierarchy for uk positions in risktrac that i found out , namely : some books ( for example elsb 1 and elsb 2 ) belong to uk - gas portfolio and to uk - power portfolio . i wanted to clarify this in order to reconcile positions in risktrac and in the spreadsheet . tanya . tanya tamarchenko 01 / 03 / 2001 02 : 09 pm to : naveen andrews / corp / enron @ enron , matthew adams / corp / enron @ enron cc : rabi de / na / enron @ enron , jaesoo lew / na / enron @ enron , vince j kaminski / hou / ect @ ect subject : re : uk portfolios and books setup in risktrac naveen and matthew , i started looking systematically through uk positions and corresponding var numbers in the risckrac . i found a few inconsistencies so far . 1 . the portfolio elsb 1 - nbp has a book elsb 1 under it . the sum of delta positions for this book is 239 , 021 , 655 , the sum of gamma positions is - 211 , 031 , 450 . var for the portfolio elsb 1 - nbp is zero . the same refers to a few other portfolios , for example elsb 2 - nbp , elsb 3 - nbp , e 2 xxl - nbp . 2 . the portfolio elsbp 1 - ppp also has the book elsb 1 under it . this book contains the positions on pppwdl through pppwd 6 and pppwel through pppwe 4 . the same refers to the other books , for example elsb 2 . this looks messy . can someone in rac go over all the portfolios , all the corresponding books and curves in risktrac and make sure they are set up properly ? thank you , tanya .
</pre>

## Record 010305

**Label:** `benign`

<pre>
grepping summary thanks to all who responded to my request for grepping under a dos environment with the following syntax : &lt; grep - r &lt; fn1 &gt; &lt; fn2 &gt; fn3 &gt; &lt; where fn1 is the file with the set of strings to be grepped &gt; &lt; fn2 is the data-base &gt; &lt; fn3 is the output . &gt; with the suggestions and help that i have got , i have literally &quot; grepped &quot; all about grep . thanks a lot i got a whole lot of answers which i am summarising below : 1 . the first was to use perl script to write my own grep : for both unix and dos , perl is a language that will easily allow to create a small program that will do what you ask . more information about perl , including free downloads for many environments , can be gotten from the perl language home page , http : / / www . perl . com / perl / index . html . 2 . the second suggestion was similar in nature : use awk and lex tools for the job . 3 . under unix environment three types of grep were proposed : a . egrep egrep - f fn1 fn2 &gt; fn3 where fn1 is a file containing the search patterns ( one per line ) . if you only want to search for literal strings ( no special characters ) then you can use fgrep instead of egrep . do &#x27; man grep &#x27; for more details , b . fgrep fgrep - f patt-file - name &lt; database-to - search &gt; results-file will work , assuming patt-file - name is a file of _ strings _ ( regular expressions containing metacharacters are not allowed by fgrep . ) say man fgrep to get the details . one hitch however it will only match strings , not regular expressions . c . sgrep the sgrep utility ( not standard unix ) permits complex ( and nested ) patterns to be searched for . 4 . under dos the gnu tools are now available under dos ; gnu has only one grep and lets you do this ( according to the manual ) with grep - f f1 f2 &gt; f3 this works and i have used it with success . thanks to andreas mengel incidentally egrep , sgrep and fgrep versions for dos exist and can be found at : ftp . rediris . es / mirror / simtelnet / gnu / gnuish / grep15 . zip thanks to susana sotelo docio 5 . another suggestion was to use sed sed - n - f &lt; file &gt; permits many patterns to be searched for ( with some problems when multiple matches occur on a line . 6 . another solution under dos was to grep for a large number of strings at once in a ` regular expression &#x27; . a second alternative was to batch-file the operation , which i am using at present as a solution , but wanted something more functional . 7 . a commercial solution was also proposed : mks ( mortice - kern ) in canada makes a commercial set of unix apps and commands for use in dos and windows environments , including ksh , awk , grep , gres . their grep syntax is : grep - f pattfile file &gt; output _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ many thanks to : martin wynne &lt; eiamjw @ comp . lancs . ac . uk &gt; will dowling &lt; willd @ spectranet . ca &gt; kevin bretonnel cohen &lt; kevin @ cmhcsys . com &gt; mark liberman &lt; myl @ unagi . cis . upenn . edu &gt; john e . koontz koontz @ boulder . nist . gov peter hamer &lt; p . g . hamer @ nortel . co . uk &gt; stuart luppescu &lt; s-luppescu @ uchicago . edu &gt; stephen p spackman &lt; stephen @ softguard . com &gt; d . lee &lt; d . lee @ lancaster . ac . uk &gt; chris culy &lt; cculy @ blue . weeg . uiowa . edu &gt; david palmer &lt; palmer @ linus . mitre . org &gt; shravan vasishth &lt; vasishth @ ling . ohio-state . edu &gt; susana sotelo doc &#x27; io &quot; &lt; fesdocio @ usc . es &gt; andreas mengel &lt; mengel @ babylon . kgw . tu-berlin . de &gt; for their prompt and helpful replies to my query .
</pre>

## Record 010306

**Label:** `benign`

<pre>
Update of /cvsroot/spamassassin/spamassassin/masses
In directory usw-pr-cvs1:/tmp/cvs-serv440/massesModified Files:
      Tag: b2_4_0
	mass-check 
Log Message:
Fixes, additions to mass-checkIndex: mass-check
===================================================================
RCS file: /cvsroot/spamassassin/spamassassin/masses/mass-check,v
retrieving revision 1.67
retrieving revision 1.67.2.1
diff -b -w -u -d -r1.67 -r1.67.2.1
--- mass-check	20 Aug 2002 12:29:32 -0000	1.67
+++ mass-check	22 Aug 2002 18:13:30 -0000	1.67.2.1
@@ -96,6 +96,7 @@
 
 print &quot;# mass-check results from $who\@$where, on $when\n&quot;;
 print &quot;# M:SA version &quot;.$spamtest-&gt;Version().&quot;\n&quot;;
+print &#x27;# CVS tag: $Name$&#x27;,&quot;\n&quot;;
 $iter-&gt;set_function (\&amp;wanted);
 $iter-&gt;run (@ARGV);
 exit;
@@ -132,6 +133,8 @@
   my $tests = $status-&gt;get_names_of_tests_hit();
 
   $tests = join(&#x27;,&#x27;, sort(split(/,/, $tests)));
+
+  $id =~ s/\s/_/g;
 
   printf &quot;%s %2d %s %s\n&quot;,
 		    ($yorn ? &#x27;Y&#x27; : &#x27;.&#x27;),-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-commits mailing list
Spamassassin-commits@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-commits
</pre>

## Record 010307

**Label:** `benign`

<pre>
2001 gain calculation louise , per your request . let me know if you have any questions . also , i need to clarify a point on new albany gain / loss . thanks , don
</pre>

## Record 010308

**Label:** `benign`

<pre>
i read it as green = red, as in accounting, as in fiscally irresponsible. which do you think is the worse indictment - overregulation or overspending? there are many (dickheads) who buy into the neo-conservative media&#x27;s (fox&#x27;s) definiton of &quot;liberal&quot; as &quot;one who seeks to impose both.&quot;hannity and glove.best quote, wish i could remember who said it: &quot;we tend to describe our own party by its ideals and our opponents&#x27; party by its reality.&quot;geege-----Original Message----- From: fork-admin@xent.com [mailto:fork-admin@xent.com]On Behalf Of Bill Humphries Sent: Monday, September 23, 2002 10:00 PM To: fork@spamassassin.taint.org Subject: Re: Goodbye Global Warming On Monday, September 23, 2002, at 03:25 PM, R. A. Hettinga wrote:&gt; Green = Red. Capitalist = Nazi. Information content of the above statements === 0.Meanwhile, the angels of light (tm) are having a great knock-down drag-out with the eldrich kings of .NET on XML-DEV.-- whump ---- Bill Humphries http://www.whump.com/moreLikeThis/
</pre>

## Record 010309

**Label:** `benign`

<pre>
1997 international congress of linguists does anybody know dates / place for the 1997 international congress of linguists ?
</pre>

## Record 010310

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8390121,1717/
Date: 2002-09-30T11:09:21+01:00[IMG: http://www.newsisfree.com/Images/fark/yahoonews.gif ([Yahoo])]

</pre>

## Record 010311

**Label:** `benign`

<pre>
las vegas cogeneration ii , l . l . c . - tolling agreement confidentiality obligation please forward this e - mail to other persons within your respective groups who may have access to the tolling agreement or whose responsibilities may cause them to deal with las vegas cogeneration ii , l . l . c . &#x27; s business operations . thanks . as you may be aware , on friday , may 4 , 2001 , las vegas cogeneration ii , l . l . c . ( &quot; lvc ii &quot; ) executed a capacity and ancillary services sale and tolling services agreement ( &quot; tolling agreement &quot; ) with allegheny energy supply company , llc ( &quot; allegheny &quot; ) . lvc ii is an affiliate of ena and of jedi ii . due to the nature of the services to be performed under the tolling agreement , lvc ii will have access to information , including pricing , dispatch information and outage schedules , that allegheny deems extremely sensitive . accordingly , the tolling agreement requires lvc ii and allegheny to keep all information relating to the tolling agreement in strict confidence . ena provides certain administrative services to lvc ii pursuant to an administrative services agreement . furthermore , as equity holders in lvc ii , ena and jedi ii have access to information from lvc ii as a matter of course . in the course of providing services to or on behalf of lvc ii , or in connection with management of ena &#x27; s or jedi ii &#x27; s equity positions in lvc ii , you may obtain information regarding the tolling agreement and / or operational information regarding lvc ii . all such information must be treated as confidential and privileged information , and is not to be disclosed to any person or used for any purpose other than in furtherance of your provision of services to lvc ii . in particular , no information regarding the tolling agreement or any information regarding the operations of lvc ii are to be made available to or disclosed to any person involved in the power marketing or trading operations of any enron affiliate . under certain limited circumstances this information can be disclosed to third parties . however , it is vital that you first confirm the appropriateness of making such disclosures with dale rasmussen , karen jones or sheila tweed of ena &#x27; s legal department prior to making any such disclosures . thank you for your cooperation .
</pre>

## Record 010312

**Label:** `benign`

<pre>
start date : 1 / 5 / 02 ; hourahead hour : 7 ; start date : 1 / 5 / 02 ; hourahead hour : 7 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002010507 . txt
</pre>

## Record 010313

**Label:** `benign`

<pre>
re : new color printer goodmorning lyn , please inform me on the status of the color printer for the 19 th floor . we need this printer a . s . a . p . this printer should be placed where the black and white printer is located on the same counter . co . 0011 r . c . 100038 let me know ! merry christmas kevin moore - - - - - - - - - - - - - - - - - - - - - - forwarded by kevin g moore / hou / ect on 12 / 22 / 99 06 : 23 am - - - - - - - - - - - - - - - - - - - - - - - - - - - kevin g moore 12 / 14 / 99 09 : 21 am to : lyn malina / hou / ect @ ect cc : subject : re : new color printer - - - - - - - - - - - - - - - - - - - - - - forwarded by kevin g moore / hou / ect on 12 / 14 / 99 09 : 17 am - - - - - - - - - - - - - - - - - - - - - - - - - - - kevin g moore 12 / 14 / 99 08 : 13 am to : vince j kaminski / hou / ect @ ect , mike a roberts / hou / ect @ ect cc : subject : re : new color printer yes ! right away , please also let me know the e . t . a . thanks , lyn kevin moore
</pre>

## Record 010314

**Label:** `benign`

<pre>
gurt 1995 ( long posting ) georgetown university round table on languages and linguistics 1995 pre - sessions and conference : march 6-11 , 1995 &quot; linguistics and the education of second language teachers : ethnolinguistic , psycholinguistic , and sociolinguistic aspects &quot; main conference opening session : wednesday , march 8 , 1995 , 7 : 30 p . m . , georgetown campus , gaston hall ( registration required ) opening remarks : james e . alatis , dean emeritus , school of languages and linguistics chair , georgetown university round table 1995 dedication of conference to charles a . ferguson acceptance by shirley brice heath honored guest : eugene garcia , director , obemla , u . s . department of education speaker : steve krashen , university of southern california the cause - effect confusion and the time issue in education opening reception to follow in icc galleria admission to all sessions by badge only ; registration materials and badges will not be mailed but may be picked up at registration center in intercultural center ( icc ) , exact location to be posted ; registration materials for march 8 evening session available in gaston hall foyer from 6 : 30 p . m . all pre-sessions on march 6 , 7 , and 8 and main sessions on march 9 , 10 , and 11 will be held in intercultural center ( rooms to be posted ) . detailed program with abstracts included in registration packets . thursday , march 9 , 1995 intercultural center plenary speakers : kathleen bailey , monterey institute of international studies what teachers say about teaching bessie dendrinos , university of athens , greece foreign language textbook discourse and pedagogization of the learner invited speakers : david r . andrews , georgetown university standard versus non-standard : the intersection of sociolinguistics and language teaching elsaid badawi , american university in cairo the use of arabic in egyptian t . v . commercials : a language simulator for the training of teachers of arabic as a foreign language kenneth chastain , university of virginia knowledge , language , and communication virginia p . collier , george mason university language acquisition for school : academic , cognitive , sociocultural , and linguistic processes joann crandall , university of maryland baltimore county reinventing schools : the role of the applied linguist nadine o&#x27;connor di vito , university of chicago using native speech to formulate past tense rules in french adam jaworski , university of wales , college of cardiff language awareness in applied linguistics students : evidence from linguistic and cultural heritage essays donna lardiere , georgetown university an update on transfer and transferability donald j . loritz , georgetown university unlearning learnability yuling pan , georgetown university addressee , setting , and verbal behavior : how relevant are they in foreign language teaching ? guy spielmann , georgetown university multidisciplinary integrated language education ( mile ) and second / foreign language teaching g . richard tucker , carnegie mellon university developing a research component within a teacher education program andrea tyler , georgetown university patterns of lexis : how much can repetition tell us about discourse coherence ? bill vanpatten , university of illinois , urbana - champaign is psycholinguistics relevant to language teaching ? shelley wong , university of maryland , college park curriculum transformation : a psycholinguistic course for prospective teachers of esol k 12 elizabeth zsiga , georgetown university phonology and phonetics in the education of second language teachers : the representation of some variable rules of english friday , march 10 , 1995 intercultural center plenary speakers : leslie m . beebe , teachers college , columbia university polite fictions : instrumental rudeness as pragmatic competence joan morley , university of michigan maximizing learning invited speakers : vincent j . cangiano , el houcine haichour , stephanie j . stauffer , georgetown university taming the electronic lion , or how to shape a language learning environment out of the chaos called the internet jeff connor - linton , georgetown university late night thoughts on complexity , linguistics , and language teaching barbara a . craig , georgetown university boundary discourse and the authority of knowledge in the second language classroom madeline e . ehrman , u . s . department of state , fsi personality , language learning aptitude , and program structure aviva freedman , carleton university , ottawa &quot; situating &quot; learning to write for the l2 teacher william c . hannas , georgetown university teaching chinese teachers what constitutes &quot; chinese &quot; susan huss - lederman , georgetown university &quot; wait wait wait wait ! &quot; a sociolinguistic analysis of repetition in the speech of adult beginning esl learners using instructional software kurt r . jankowsky , georgetown university on the need to unlearn in the foreign language learning process ronald p . leow , georgetown university teacher education and psycholinguistics : making teachers psycholinguists steven j . loughrin - sacco , boise state university research internships : involving undergraduate foreign language secondary education majors in ethnographic research anne pakir , national university of singapore beginning at the end : &quot; bilingual education for all &quot; in singapore and teacher perception sophia c . papaefthymiou - lytra , university of athens , greece culture and the teaching of foreign languages : a case study teresa pica , university of pennsylvania teaching language and teaching language learners : the expanding role and expectations of language teachers in communicative content-based classrooms peter schmitter , martin - luther - universit t halle - wittenberg , germany structural or cognitive semantics as a topic in the linguistic education of second language teachers ? charles w . stansfield , second language testing , inc . considerations in the writing of sopi prompts monique y . wong , hellenic american union , greece using simulation to develop negotiation strategies in a foreign language saturday , march 11 , 1995 intercultural center plenary speakers : marianne celce - murcia , university of california , los angeles the elaboration of sociolinguistic competence : implications for teacher education diane larsen - freeman , school for international training on the changing role of linguistics in the education of second language teachers : past , present , and future invited speakers : catherine n . ball , georgetown university providing comprehensible input in a dead foreign language : two text-based strategies isolda e . carranza , georgetown university multi - level analysis of two-way bilingual classroom discourse anna uhl chamot , georgetown university learning strategies of elementary foreign language immersion students mary el - kadi , old dominion university discourse analysis of classroom interaction and the training of esl teachers elaine k . horwitz , university of texas at austin foreign language anxiety and foreign language teachers : what can teacher educators do ? christina kakava , mary washington college directness and indirectness in professor student interaction : the intersection of contextual and cultural constraints david nunan , university of hong kong systemic - functional linguistics and the education of second language teachers : a case study linju ogasawara , japanese ministry of education ( ret . ) native cultural interference in japanese english usage john j . staczek , georgetown university metalinguistic talk in mature l2 adult-learner classroom discourse stephanie j . stauffer , georgetown university reap what you sow : in - service training for language teachers for computer-mediated communication steven sternfeld , university of utah from hirsch &#x27;s dystopia to hakuta &#x27;s utopia : a call for multilingual alliance weiping wu , center for applied linguistics education of second language teachers : the link between linguistic theory and teaching practice dolly j . young , university of tennessee language anxiety in sl acquisition : using a wider angle of focus raffaella zanuttini , georgetown university dialectal variation as an insight into the structure of language gen - yuan zhuang , hangzhou university , prc what they hear is not what they read : speech perception and the training of english teachers in china * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * other georgetown conferences : * georgetown linguistics society , gls 1995 , developments in discourse analysis , february 17-19 , 1995 . plenary speakers : frederick erickson , charles goodwin , heidi hamilton , deborah schiffrin , roger shuy , and deborah tannen . contact : gls 1995 , g . u . dept . of linguistics , icc 479 , washington , dc 20057-1068 ; gls @ guvax . georgetown . edu ; gls @ guvax . bitnet ; tel : 202 / 687-6166 . * international linguistics association , ila , discourse and text analysis , march 10-12 , 1995 . contact : ruth brend , 3363 burbank dr . , ann arbor , mi 48105 ; ruth . brend @ um . cc . umich . edu ; tel : 313 / 665-2787 ; fax : ( 313 ) 665-9743 ; email : ruth . brend @ um . cc . umich . edu * 9th annual symposium on arabic linguistics , march 10-12 , 1995 . contact g . u . arabic department , icc 463 , washington , dc 20057-1082 ; solernoe @ guvax . georgetown . edu ; tel : 202 / 687 - 5743 . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * pre-conference sessions : march 6 - 8 , 1995 the pre-conference sessions will be held in the intercultural center of georgetown university . please contact the individual organizers for more information on the content of the sessions only . to register , see registration form or contact gurt coordinator . monday , march 6 , 1995 spanish linguistics i organizers : dr . hector campos , mr . eric holt , and ms . norma catalan g . u . department of spanish washington , dc 20057-0989 ( 202 ) 687-6134 hcampos @ guvax . georgetown . edu issues in slavic linguistics organizer : dr . david r . andrews g . u . department of russian washington , dc 20057-0990 ( 202 ) 687-6108 / 6147 andrewsd @ guvax . georgetown . edu african linguistics vi organizer : rev . solomon sara , s . j . , ph . d . g . u . department of linguistics washington , dc 20057-1068 ( 202 ) 687-5956 ssara @ guvax . georgetown . edu discourse and agency : responsibility and deception organizer : dr . patricia e . o&#x27;connor g . u . department of english washington , dc 20057-1048 ( 202 ) 687-7622 ; fax : 687-5445 oconnorpe @ guvax . georgetown . edu tuesday , march 7 , 1995 spanish linguistics ii organizers : dr . hector campos , mr . eric holt , and ms . norma catalan g . u . department of spanish washington , dc 20057-0989 ( 202 ) 687-6134 hcampos @ guvax . georgetown . edu teaching and learning spoken arabic organizer : dr . margaret nydell g . u . department of arabic washington , dc 20057-1082 ( 202 ) 687-5743 history of linguistics organizer : dr . kurt r . jankowsky g . u . department of german washington , dc 20057-0994 ( 202 ) 687-5812 innovative audio and looking at multimedia ( two sessions ) organizer : jackie m . tanner , director g . u . language learning technology washington , dc 20057-0987 ( 202 ) 687-5766 jtanner @ guvax . georgetown . edu issues in foreign language program direction i organizer : dr . ronald p . leow g . u . spanish dept . washington , dc 20057-0909 ( 202 ) 687-6134 rleow @ guvax . georgetown . edu wednesday , march 8 , 1995 computer - mediated discourse analysis organizer : dr . susan herring program in linguistics university of texas arlington , tx 76019 ( 817 ) 273-3133 susan @ utafll . uta . edu celebration of bilingual immersion programs organizer : prof . dorothy b . goodman friends of international education p . o . box 4800 washington , dc 20008 ( 202 ) 363-8510 issues in foreign language program direction ii organizer : dr . ronald p . leow g . u . department of spanish washington , dc 20057-0989 ( 202 ) 687-6134 rleow @ guvax . georgetown . edu * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * tutorials ( for connor - linton and spielmann tutorials , maximum of 20 participants ; no participant limit for krashen workshop ) : monday , march 6 &quot; criterion - referenced curriculum and test development for language teachers and administrators &quot; presenter : dr . jeff connor - linton , g . u . dept of linguistics , ( 202 ) 687-5956 tuesday , march 7 &quot; language acquisition and language education : a review of research and theory and current issues &quot; presenter : dr . steve krashen , school of education , university of southern california , los angeles , ca 90089-0031 wednesday , march 8 authentic documents in the language class : theoretical perspectives and didactic applications presenter : dr . guy spielmann , g . u . department of french , ( 202 ) 687-5717 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * for registration , hotel and other information , please contact carolyn a . straehle , coordinator * gurt 1995 * georgetown university school of languages and linguistics * 303 intercultural center * washington , dc 20057-1067 * e-mail : gurt @ guvax . bitnet or gurt @ guvax . georgetown . edu * voice : 202 / 687-5726 * fax : 202 / 687-5712 * * * * * * * to obtain gurt &#x27; 95 information from the world wide web , use the following address : url : http : / / www . georgetown . edu / conferences / gurt95 / gurt95 . html * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * for inexpensive student accommodations , contact : washington student center at the washington international ayh - hostel 1009 11th street , nw washington , dc 20001 tel : ( 202 ) 737-2333 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 010315

**Label:** `benign`

<pre>
unify performance issues are priority number one most of you are aware that unify experienced some major performance issues as we tried to close out the month of july . not to go into any details but there seemed to be a lot of smaller issues which when combined caused the issues we saw on monday and to a lesser degree on tuesday . almost all of the issues relate to the quirkiness of the current version of sybase which is used for unify &#x27; s database . jeff johnson and his team are putting together a plan that will address most of these issues and hopefully result in acceptable performance as we go through next bidweek and try to close for august . the short term tactical plans include the following : enhancing certain programs which seem to have become resource hogs as the amount of data grows . test and hopefully migrate to the latest version of sybase which will address some of the issues . this may also require some hardware changes as to where we store certain data . we will also need some user help in stress testing prior to moving to production . addressing with the users billing transactions that have never been finaled . i have been told that we still have transactions going back to jan of 99 that have not been finaled or closed out . this puts quite a load on the pma and accrual process since it has to go back to those open transactions to see what if any action should be taken with these transactions . once these changes have been implemented and hopefully bought us a little time to absorb the tremendous growth we &#x27; ve been seeing via eol then we will focus on delivering more intermediate and longer term solutions . these include the following : rewriting most of the code and moving to a 3 tier environment which will be much more scalable . moving off of sybase and on to microsoft sql server or oracle . it will be easier to move microsoft sql server but we have to be sure it is the right solution in the long term . jeff will be following up with some of you to go over a much more detailed plan . needless to say that this is his groups highest priority and his best people are working on these efforts . this will slow down major enhancement efforts such as enhancing the gas applications to handle hourly trades and nominations . we will keep you informed as we start to roll out the tactical solutions . in the mean time feel free to contact me at x - 36858 or jeff at x - 39694 if you have any questions or require additional detail . thanks ! - tommy
</pre>

## Record 010316

**Label:** `benign`

<pre>
spanish evaluator us-pa - pittsburgh machine translation evaluator ( spanish ) , cmu ( part-time ) spanish evaluator , machine translation applications the catalyst project at the center for machine translation , carnegie mellon university , is seeking a talented and energetic individual for the position of spanish evaluator . catalyst is a large-scale mt application for commercial document delivery in the domain of heavy machinery . the spanish evaluator is responsible for the following tasks : * review spanish output of machine translation system * evaluate the quality of the text based on cmt &#x27;s evaluation criteria * troubleshoot the system by providing an error analysis * working with developers to identify the most important areas for improvement the successful applicant must have the following qualifications : * native or near-native fluency in spanish and english * experience communicating and working productively within a group * experience in human translation of technical documents to spanish the following skills are also desirable : * coursework in linguistics or computational linguistics * experience with machine translation software or other types of language processing software * fluency in one or more of french , german , portuguese , russian , italian part - time position , salary negotiable . contact : eric nyberg phone : ( 412 ) 268-7281 center for machine translation fax : ( 412 ) 268-6298 carnegie mellon university email : ehn + @ cs . cmu . edu pittsburgh , pa 15213 usa resumes and cover letters may be submitted via email , in ascii or postscript form . materials may also be submitted by fax , but email is preferred .
</pre>

## Record 010317

**Label:** `benign`

<pre>
start date : 1 / 12 / 02 ; hourahead hour : 14 ; start date : 1 / 12 / 02 ; hourahead hour : 14 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002011214 . txt
</pre>

## Record 010318

**Label:** `benign`

<pre>
re : 6 . 39 have ) of it seems to me that the use of have + simple past is rapidly increasing in the u . s . it &#x27;s showing up now in newspapers and on television , and , perhaps most tellingly , in the speech of acquaintances who i am sure did not have it a few years ago . my first thought was that this had something to do with the have ) of reanalysis , but i have now heard too many instances of emphatic &quot; have &quot; to believe this . examples such as &quot; even if he had went earlier , . . . &quot; abound . i find these examples easy to spot because i still wince whenever i hear one .
</pre>

## Record 010319

**Label:** `benign`

<pre>
workbook in &#x27; 95 i &#x27; m teaching a unit called descripptive linguistics : morphology and syntax . its one of those 2nd / 3rd yr level units that covers classic a structuralist techniques for analysing and describing languages , introduces students to some of the theoretical and conceptual problems that arise in language description , and exposes students to some of the main types of morphological and syntactic phenomena in languages of the world . its thus mainly descriptive , but with a secondary typological bent , and i &#x27; m sure in this respect it is similar to linguistics units on offer at many universities . as a text i &#x27; m using ( bits of ) the new crowley , lynch , siegel , piau book &#x27; design of language &#x27; which is being published by longman in jan &#x27; 95 . as support material for this unit , i &#x27; m putting together a collection of language data problems as a workbook . in the past i &#x27; ve either concocted my own , or plundered the usual sources ( langacker , stockwell , demers &amp; farmer , etc etc ) but i &#x27; m a bit tired of these and i &#x27; m on the lookout for fresh material . many of you who have been involved in both teaching and language description have probably , like me , developed language data problems for use in assignments and tutorials , etc . 20 so i &#x27; m writing to seek contributions from anyone who &#x27;d like to pool such data . i &#x27; ll happily accept problems in phonology , but i &#x27; m particularly interested in morphology , morphosyntax and syntax . i &#x27;d like the workbook to have an australian / asian / pacific regional bias , but not so strong as to stifle typological diversity , so i &#x27; ll welcome useful material from any language anywhere . contributors will be acknowledged in the text ( as in sample below ) and will receive a free electronic copy of the completed workbook . i &#x27;d like any contributions before mid - jan , and the completed workbook will be posted to you at the end of feb . my immediate intention is to create a student resource manuscript for &#x27; 95 , but if subsequent publication seems desirable , i &#x27; ll recontact contributors to seek their permission . if you are interested , here &#x27;s a list of topics as a prompt , and a few guidelines . 20 / 80 grammatical categories , noun class / gender , tam distinctions , polarity , transitivity , causatives , voice , pre - / suf - / in - / simul - / supra-fixes , replacive / zero / subtractive morphs , compounding , redup , morphotactics , inflection / derivation , conditioned allomorphy , abstractness in morphophonemics , clitics , case distinctions , concord , word order , adpositions , verb serialisation , co-ordination , subordination , complements , relativisation , problems that highlight the adequacy / inadequacy of insertion / movement rules , etc etc 80 provide the language name , and a short language description ( as in sample below ) . 80 data emaile to nreid @ metz . une . udu . au as an attached document , keyed in times 12 and iparoman 12 fonts , will simplify my job , but good data scrawled in blood on paperbark will do if it &#x27;s legible . 80 if you use an established orthography instead of ipa , provide a key to the orthography ( as in sample below ) . sample format ( a dangerous exercise within eudora - please allow for its limitations ) problem 1 ngan &#x27; giwumirri [ contributed by : nicholas reid ] description : 20 ngan &#x27; giwumirri is spoken by about 20 people in the daly river region 300 kms southwest of darwin in the northern territory of australia . it is a non - pamanyungan language with an elaborate noun class system and complex polysynthetic verbal morphology . 20 question : 20 the ngan &#x27; giwumirri data below illustrates the morphological marking of membership in two noun classes . describe the semantics of these two noun classes , and their morphology , noting any allomorphy that you find . can you argue convincingly for an &#x27; underlying form &#x27; for either class marker . [ useful info : ngan &#x27; giwumirri has a four vowel inventory ; / i / high front , / e / low front . / a / low back , / u / high back . orthographic &#x27; ty , &#x27; &#x27;s y &#x27; and &#x27; ny &#x27; represent palatal stop , fricative , and nasal respectively , / rr / and / r / represent a trill and continuant ] . 20 1 daba arm 16 damadi chest 2 adany shark 17 depi head 3 afiti insect 18 deme hand 4 eferri bluetongue 19 dapurr bum 5 detyirri navel 20 afu 20 whip snake 6 engete kingfisher 21 afunyi mosquito 7 detyerri ear 22 defirr foot 8 awiny bream 23 dagarri leg 9 afilpurr carpet snake 24 epelen rifle fish 10 denintyi knee 25 desyi nose 11 dederri back 26 aminyirr peewee 12 awuntyerr finch 27 amu fly 13 emengginy goanna 28 datyamu cheek 14 data shoulder 29 detyeny tongue 15 akaka nightjar owl 30 elele curlew end sample format many thanks nick reid note , direct address : nreid @ metz . une . edu . au
</pre>

## Record 010320

**Label:** `benign`

<pre>
hello guys vince and stinson , just got a copy of the attached paper and thought it may have some interest for you guys . on another note , i am putting together a workshop in the spring on the new economy and business education and will be seeking out some enron network people to join in the discussion ( 2 - hours on friday march 2 nd ) . i &#x27; ll let you know more as we work through the details . the idea is to &quot; brainstorm &quot; about the new world you guys work in every day and its implications for what we should be doing . hope this is interesting to you and that you &#x27; ll want to spend the day with us . take care and enjoy the weekend . john - risk . pdf john d . martin carr p . collins chair in finance finance department baylor university po box 98004 waco , tx 76798 254 - 710 - 4473 ( office ) 254 - 710 - 1092 ( fax ) j _ martin @ baylor . edu web : http : / / hsb . baylor . edu / html / martinj / home . html
</pre>

## Record 010321

**Label:** `benign`

<pre>
nesa / hea &#x27; s 5 th annual sporting clays information here &#x27; s the information , registration form and sponsorship pledge form for our upcoming sporting clays tournament on august 14 th ! please let me know if you have trouble with the attachments , or feel free to visit our website at www . nesanet . org and click on industry networking , then upcoming events . have a great day and remember to register by august 1 to be entered into both private door prize drawings ! &gt; &gt; teresa a . knight vice president , membership teresa . knight @ nesanet . org ( 713 ) 856 - 6525 fax ( 713 ) 856 - 6199 - sporting clays . pdf - clays pledge form . pdf
</pre>

## Record 010322

**Label:** `benign`

<pre>
No problems installing OpenOffice 653??? and 1.0. Had some issues with bz2&#x27;s
being corrupted but fixed when downloaded again. I am downloading the src of 1.01 at the mo to se if it will work any faster
compiled for my architecture. Regards,
CW------------
Hi All,Just wondering if anyone has ever installed StarOffice
6.0 (or Open Office), and if any have experienced any
problems with the install freezing ?I&#x27;m using RedHat 7.3 kernel 2.4.18-3, and glibc 2.2.5
?I might try downloading OpenOffice instead if it is
unresolved!!!!Cheers all,Colin
__________________________________________________
Do You Yahoo!?
Everything you&#x27;ll ever need on one web page
from News and Sport to Email and Music Charts
http://uk.my.yahoo.com-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 010323

**Label:** `benign`

<pre>
team rahal louise , i have looked at this opportunity and am of the opinion that the expense of $ 7 million will not provide cost effective advertising or dealmaking benefits for origination particularly or ews generally . i will advise m 3 management ( the marketing consultant for team rahal ) that we will not be participating . dave
</pre>

## Record 010324

**Label:** `benign`

<pre>
re : under attack if you don &#x27; t have powerpoint installed , go to http : / / office . microsoft . com / downloads / 2000 / ppview 97 . aspx and download the powerpoint viewer . then you should be able to view the link at again , if you are squeemish . . . don &#x27; t bother looking at the slides . it shows people falling from the wtc . - ram . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ? easy unsubscribe click here : http : / / topica . com / u / ? a 84 vnf . a 9 ivhm ? or send an email to : brcc . yf - unsubscribe @ topica . com ? this email was sent to : dfarmer @ enron . com ? ? t o p i c a - - register now to manage your mail ! ? http : / / www . topica . com / partner / tago 2 / register ? = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
</pre>

## Record 010325

**Label:** `benign`

<pre>

----- Original Message -----
From: &gt; the parties -are- screaming and shouting over
&gt; political figures because they cannot be heard (to those figures) in
&gt; any other way.
The right to speak is not the same as the right to be heard by the audience
of the speakers choice.Disruptive protests might be a means to create awareness - but that&#x27;s a
pretty lame way to do it. If it truly is the only way, then I&#x27;m all for it,
but disruption for the sake of showing how committed the protesters are is
pretty weak.
</pre>

## Record 010326

**Label:** `benign`

<pre>
wire request louise , theresa vos will ask you to authorize a wire request for $ 100 , 000 for the roseville . this payment is required to keep the agreement with the muni alive which protects $ 5 mm - $ 15 mm of value for the creditors . a plan for monetization of this and other west positions is being pursued ( we have $ 1 . 1 mm coming in this month for erc sales ) . i recommend we fund this $ 100 , 000 payment . chris calger 503 - 464 - 3735
</pre>

## Record 010327

**Label:** `benign`

<pre>
9th intl congress of linguists istituto di glottologia universit degli studi via festa del perdono 7 , 20122 milano ix international congress of linguists milan , 8-10 october 1998 milan , april 1998 s e c o n d c i r c u l a r dear colleague , on the occasion of the 50th anniversary of its foundation and of the centenary of vitt pisani &#x27;s birth , the &quot; sodalizio glottologico milanese &quot; , with the support of the &quot; istituto lombardo accademia di scienze e lettere &quot; , and of the catholic and the state universities of milan is organizing the 9th international congress of linguists which will take place on october 8th , 9th , 10th , 1998 . we remind you that the topic is : 50 years of linguistic researches : its problems , results , and prospects for the third millenium . there will be 5 official reports and some other shorter speeches . meetings will take place at the state university - via festa del perdono 7 , at the &quot; istituto lombardo &quot; - via borgonuovo 25 , and at the c atholic university - largo gemelli 1 , according to the following schedule : october 8th 1998 , 9 . 00 a . m . , state university - room 211 g . bolognesi , opening of activities , welcome message , and introductive speech . e . coseriu , la linguistica europea dopo saussure discussion communications room 211 and room 113 october 8th , 1998 , 15 p . m . , state university - room 211 r . arena , titolo da definire discussion communications room 211 and room 113 october 9th , 1998 , 9 . 00 a . m . , istituto lombardo r . gusmani , recenti progressi nel campo delle lingue anatoliche del i millennio a . c . discussion communications october 9th , 1998 , 15 p . m . , istituto lombardo c . hannick , systeme et fonction du slavon ecclesiastique comme langue crite supranationale au moyen age et dans les temps modernes . discussion communications october 10th , 1998 , 9 . 00 a . m . , catholic university , room pio xi p . ramat , nuovi approcci metodologici ? discussion communications room pio xi and room san paolo close of the congress the application fee of l . 100 . 000 , refundable as susbsistance money , can be paid either at the opening of the congress or into the postal account n . 11507209 invoiced to dr . roberto giacomelli . here enclosed you will find a list of hotels and hostels for your accomodation and some useful information . best regards . yours sincerely the president giancarlo bolognesi % ud
</pre>

## Record 010328

**Label:** `benign`

<pre>
playgroup pictures from houston cow parade = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ? easy unsubscribe click here : http : / / topica . com / u / ? a 84 vnf . a 9 ivhm or send an email to : brcc . yf - unsubscribe @ topica . com ? this email was sent to : dfarmer @ enron . com ? t o p i c a - - register now to manage your mail ! http : / / www . topica . com / partner / tago 2 / register = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
</pre>

## Record 010329

**Label:** `benign`

<pre>
On Fri, Jul 19, 2002 at 11:47:39PM +0100, Niall O Broin wrote:
&gt; &gt; I know this is not strictly a &#x27;Linux&#x27; issue but any help would be appreciated
&gt; Microsoft has very much made this a Linux issue - it has attempted to imply
&gt; that any company using GPL software must make everything it owns public and
&gt; it must be true - that nice man from Microsoft wouldn&#x27;t lie, would he ?but that&#x27;s just stupid.  microsoft s/w covers a subset of applications
that are under the gpl.  there are gpl word processors, there&#x27;s a
microsoft wp; there are various language compilers and interpreters under
the gpl, microsoft has their visual compilers.  and so on.  and just
like the gpl apps, the microsoft apps are distributed under a license.
that license says lots of things, and there are various licenses used by
microsoft, but in a nutshell they all pretty much say: you can&#x27;t copy,
distribute or modify their s/w; you can&#x27;t sell it multiple times.so does anyone think that applies to their wp documents or their visual
c++ code?kevin-- 
kevin@suberic.net     that a believer is happier than a skeptic is no more to
fork()&#x27;ed on 37058400    the point than the fact that a drunken man is happier
meatspace place: home       than a sober one. the happiness of credulity is a
http://ie.suberic.net/~kevin   cheap &amp; dangerous quality -- g.b. shaw-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010330

**Label:** `benign`

<pre>
corpus software i &#x27; m about to computerize a sociolinguistic corpus of spoken french and english . i would be grateful to anybody who could give me some information about concording and text retrival softwares . i &#x27; m using a macintosh micro-computer . thanks . . . louise charbonneau - lloyd
</pre>

## Record 010331

**Label:** `benign`

<pre>
On 09 September 2002, Tim Peters said:
&gt; &gt; Would people be interested in the script?  I&#x27;d be happy to extricate
&gt; &gt; it from my local modules and check it into CVS.
&gt; 
&gt; Sure!  I think it&#x27;s relevant, but maybe for another purpose.  Paul Svensson
&gt; is thinking harder about real people  than the rest of us, and he may
&gt; be able to get use out of approaches that identify closely related spam.
&gt; For example, some amount of spam is going to end up in the ham training data
&gt; in real life use, and any sort of similarity score to a piece of known spam
&gt; may be an aid in finding and purging it.OTOH, look into DCC (Distributed Checksum Clearinghouse,
http://www.rhyolite.com/anti-spam/dcc/), which uses fuzzy checksums.
It&#x27;s quite likely that DCC&#x27;s checksumming scheme is better than
something any of us would throw together for personal use (no offense,
Skip!).  But I have no personal experience of it.        Greg
-- 
Greg Ward                          http://www.gerg.ca/
If it can&#x27;t be expressed in figures, it is not science--it is opinion.

</pre>

## Record 010332

**Label:** `benign`

<pre>
they best way to manage your day gas problem would be to find counterparties that you are long last day prompt swaps ( that are expiring now ) , and take them off throughout the day . for example , if a counterparty wants to reduce settlement risk , you can have a futures broker help manage match swaps counterparties and do an offsetting futures position , from which you can get long futures .
</pre>

## Record 010333

**Label:** `benign`

<pre>
  Can you send more details about the error?
  and also do a &#x27;razor-report -v&#x27; to make sure 2.x is being called.  -chadOn 11/08/02 21:09 -0500, Mike Burger wrote:
) Ok...I need to amend this.
) 
) I don&#x27;t get the error when I check the spam...just when I go to report it.
) 
) On Sun, 11 Aug 2002, Mike Burger wrote:
) 
) &gt; I did...unfortunately, now I get this:
) &gt; 
) &gt; Died at /usr/bin/razor-check line 32,  line 1.
) &gt; 
) &gt; Did I need to remove and reinstall, or something.  I just did a make 
) &gt; install over the existing installation.
) &gt; 
) &gt; On Sun, 11 Aug 2002, Vipul Ved Prakash wrote:
) &gt; 
) &gt; &gt; On Sun, Aug 11, 2002 at 07:39:41AM -0500, Mike Burger wrote:
) &gt; &gt; &gt; 
) &gt; &gt; &gt; Any ideas what might have changed, here? I&#x27;m running razor-agents-2.12, 
) &gt; &gt; &gt; and razor-agents-sdk-2.0.3.
) &gt; &gt; 
) &gt; &gt; Mike, 
) &gt; &gt; 
) &gt; &gt; Please upgrade to 2.14 as many bugs were fixed between the two releases, and 
) &gt; &gt; see if your problem persists.
) &gt; &gt; 
) &gt; &gt; cheers,
) &gt; &gt; vipul.
) &gt; &gt; 
) &gt; &gt; 
) &gt; 
) &gt; 
) &gt; 
) &gt; -------------------------------------------------------
) &gt; This sf.net email is sponsored by:ThinkGeek
) &gt; Welcome to geek heaven.
) &gt; http://thinkgeek.com/sf
) &gt; _______________________________________________
) &gt; Razor-users mailing list
) &gt; Razor-users@lists.sourceforge.net
) &gt; https://lists.sourceforge.net/lists/listinfo/razor-users
) &gt; 
) 
) 
) 
) -------------------------------------------------------
) This sf.net email is sponsored by:ThinkGeek
) Welcome to geek heaven.
) http://thinkgeek.com/sf
) _______________________________________________
) Razor-users mailing list
) Razor-users@lists.sourceforge.net
) https://lists.sourceforge.net/lists/listinfo/razor-users
-------------------------------------------------------
This sf.net email is sponsored by: Dice - The leading online job board
for high-tech professionals. Search and apply for tech jobs today!
http://seeker.dice.com/seeker.epl?rel_code=31
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 010334

**Label:** `benign`

<pre>
re : hello shijie , thanks for your message . my assistant will call you to discuss the timing of the visit . vince shijie deng on 06 / 29 / 2000 12 : 00 : 37 am to : vkamins @ enron . com cc : subject : hello hi vince , how are you . it was really a pleasure meeting you and talking to you at the toronto energy derivative conference . thank you for speaking with me about the possibility of visiting your research group . it will be great if i could have such opportunity whenever you see your schedule fits . i am very much open for the last week of july and early august . i &#x27; m looking forward to hearing from you soon . best , shijie shi - jie deng assistant professor school of isye georgia institute of technology office phone : ( 404 ) 894 - 6519 e - mail : deng @ isye . gatech . edu home page : http : / / www . isye . gatech . edu / ~ deng
</pre>

## Record 010335

**Label:** `benign`

<pre>
bls call for papers call for papers the berkeley linguistics society is pleased to announce its twenty - fifth annual meeting , to be held february 13-15 , 1998 . the conference will consist of a general session and a parasession on saturday and sunday , followed by a special session on monday . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * general session : the general session will cover all areas of general linguistic interest . invited speakers carol fowler , haskins laboratories , univ . of connecticut , yale univ . stephen levinson , max planck institut fr psycholinguistik , nijmegen bjrn lindblom , univ . of stockholm and univ . of texas , austin alec marantz , massachusetts institute of technology * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * parasession : loan word phenomena the parasession invites papers on loan word phenomena from various theoretical , historical , sociolinguistic , and typological perspectives , as well as descriptive works and field reports . areas of interest include stratification of the lexicon and loan word &#x27;s ubgrammars &#x27; , re-lexification , the role of orthography , markedness effects , second-language acquisition , child language , bilingualism and code-switching , etc . invited speakers ellen broselow , state university of new york , stony brook garland cannon , texas a&amp;m university junko ito &amp; armin mester , university of california , santa cruz * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * special session : issues in caucasian , dravidian and turkic linguistics the special session will feature research on caucasian , dravidian and turkic languages . papers addressing both diachronic and synchronic issues are welcome . potential topics include theoretical and descriptive accounts of structural features , writing systems and transcription problems , language reform , and the reconstruction of the respective proto - languages , including the question of altaic linguistic unity . invited speakers johanna nichols , university of california , berkeley k . p . mohanan , national university of singapore ( turkic specialist tba ) * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * we encourage proposals from diverse theoretical frameworks and welcome papers from related disciplines , such as anthropology , cognitive science , computer science , literature , philosophy , and psychology . papers presented at the conference will be published in the society &#x27;s proceedings , and authors who present papers agree to provide camera-ready copy ( not to exceed 12 pages ) by may 15 , 1999 . presentations will be allotted 20 minutes with 10 minutes for questions . we ask that you make your abstract as specific as possible , including a statement of your topic or problem , your approach , and your conclusions . please send 10 copies of an anonymous one-page ( 8 1 / 2 &quot; x 11 &quot; , unreduced ) abstract . a second page , or reverse side of the single page , may be used for data and references only . along with the abstract send a 3 &quot; x5 &quot; card listing : ( 1 ) paper title , ( 2 ) session ( general , parasession , or special ) , ( 3 ) for general session abstracts only , subfield , viz . , discourse analysis , historical linguistics , morphology , philosophy and methodology of linguistics , phonetics , phonology , pragmatics , psycholinguistics , semantics , sociolinguistics , or syntax , ( 4 ) name ( s ) of author ( s ) , ( 5 ) affiliation ( s ) of author ( s ) , ( 6 ) address to which notification of acceptance or rejection should be mailed ( in november 1998 ) , ( 7 ) author &#x27;s office and home phone numbers , ( 8 ) author &#x27;s e-mail address , if available . an author may submit at most one single and one joint abstract . in case of joint authorship , one address should be designated for communication with bls . send abstracts to : bls 25 abstracts committee , 1203 dwinelle hall , university of california , berkeley , ca 94720 . abstracts must be received by 4 : 00 p . m . , november 2 , 1998 . we may be contacted by e-mail at bls @ socrates . berkeley . edu . electronic abstract submission : via e-mail . only those abstracts written in english ascii will be accepted . please do not send attachments . electronic submissions may be sent to bls @ socrates . berkeley . edu . more information on e-mail submission and additional guidelines for abstracts can be found at our web site http : / / faust . linguistics . berkeley . edu / bls / . we will not accept faxed abstracts . registration fees : before february 5 , 1999 ; $ 15 for students , $ 30 for non-students ; after february 7 , 1997 ; $ 20 for students , $ 35 for non-students .
</pre>

## Record 010336

**Label:** `benign`

<pre>
re : fw : king ranch balancing . xls saxet is flowing about 5200 ish .
</pre>

## Record 010337

**Label:** `benign`

<pre>

Forwarded-by: Rob Windsor 
Forwarded-by: &quot;Shirley Baer&quot;
Forwarded-by: cjw59068
Forwarded-by: Joe &amp; Allie GreenoughThere were four buddies golfing and the first guy said, &quot;I had to
promise my wife that I would paint the whole outside of the house
just to go golfing.&quot;The second guy said, &quot;I promised my wife that I would remodel the
kitchen for her.&quot;The third guy said, &quot;You guys have it easy! I promised my wife that
I would build her a new deck.&quot; They continued to play the hole.
Then the first guy said to the fourth guy, &quot;What did you have to
promise your wife?&quot;The fourth guy replied, &quot;I didn&#x27;t promise anything.&quot; All the guys
were shocked, &quot;How did you do it?!&quot; He replied, &quot;It&#x27;s simple. I
set the alarm clock for 5:30. Then I poked my wife and asked, &#x27;Golf
course or intercourse?&#x27; And she said, &#x27;Wear your sweater.&#x27;&quot;

</pre>

## Record 010338

**Label:** `benign`

<pre>
clean fuels - gpg business segment dwight and i are working to develop an updated valuation for the mtbe and methanol business segments . we would appreciate assistance from your group in assessing the market over the next 3 - 4 years . with the octane shortage this summer , and the strong gas and oil price environment , mtbe prices are well above budgeted levels . how will political / environmental issues affect mtbe prices over the next few years . methanol prices are also now very favorable , but it would seem that north american methanol producers will be disadvantaged if gas prices in na remain higher than the rest of the world . your thoughts on these and any other factors affecting prices would be most helpful . both dwight and i are available to meet with you or a member of your group as soon as convenient . thanks , sorry we missed you today . jng
</pre>

## Record 010339

**Label:** `benign`

<pre>
start date : 1 / 7 / 02 ; hourahead hour : 24 ; start date : 1 / 7 / 02 ; hourahead hour : 24 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002010724 . txt
</pre>

## Record 010340

**Label:** `benign`

<pre>
salford seminars content - length : 2116 university of salford , uk european studies research institute ( esri ) centre for language and linguistics seminar programme 1995 the following seminars have been planned : wednesday 22 february ` what &#x27;s the use of dictionaries ? &#x27; reinhard hartmann , essex monday 27 february ` first steps in learning french : a study of ( 5 . 30pm ) progression in the secondary school &#x27; ros mitchell , southampton wednesday 8 march ` the nature of translation &#x27; stephen thomas , salford wednesday 15 march ` the variational approach in translation &#x27; myriam carr , salford wednesday 22 march ` the unit of translation &#x27; michel ballard , artois wednesday 10 may ` pragmatic factors in syntactic change : a r&amp;g college spanish case study &#x27; christopher pountain , cambridge wednesday 17 may ` proper nouns , generics , and the count-mass r&amp;g college distinction &#x27; christopher lyons , salford seminars will take place at 4 . 30 in room g21 , crescent house , university of salford unless otherwise indicated . for further information , contact charlotte hoffmann , associate director , centre of language and linguistics , esri . tel : + 44 161 745 5990
</pre>

## Record 010341

**Label:** `benign`

<pre>
aep benefit meetings aep will be in houston conducting benefit meetings . these meetings are designed to give an overview of their medical , dental , savings and retirement plans . if you cannot attend the meeting you are assigned to , please feel free to attend one of the others listed . date time location attendees feb . 7 , 2001 1 : 00 pm - 3 : 00 pm hyatt regency , cottonwood rm last name a - e 3 : 00 pm - 5 : 00 pm hyatt regency , cottonwood rm last name f - l feb . 8 , 2001 9 : 00 am - 11 : 00 am eb 5 c 2 last name m - s 1 : 00 pm - 3 : 00 pm 2 ac , 12 th floor , forum room last name t - z
</pre>

## Record 010342

**Label:** `benign`

<pre>
fw : cms opportunity fyi - lets talk about this today . - - - - - original message - - - - - from : gregory . felton @ cgiusa . com @ enron sent : monday , march 26 , 2001 10 : 30 am to : jafry , rahil subject : cms opportunity jafry , here is the actual presentation requirements as per the rfp . we can deviate from the form , but must address their stated requirements . i think we should structure the enron portion as follows : i . enw overview ii . products and services iii . engagement approach let me know what you think . we need to pull this together today . i &#x27; ve also attached the material steve sent me previously . thanks , greg office : ( 713 ) 868 - 5537 xl 148 mobile : ( 281 ) 787 - 9760 email : gregory . felton @ cgiusa . com - cms panhandle pipe line - rfpl . doc
</pre>

## Record 010343

**Label:** `benign`

<pre>
tw deal analysis - basis differential michelle , the changes for tw deal analysis to use latest basis differential based on receipt point area is in production . thanks , mei - ling
</pre>

## Record 010344

**Label:** `benign`

<pre>
names sheila , i am attaching the list of people who are top retention priority . the list is in the spreadsheet and the names are in the highlighted cell ( red background ) . i am also attaching the resume you asked for . vince
</pre>

## Record 010345

**Label:** `benign`

<pre>
http://www.hughes-family.org/bugzilla/show_bug.cgi?id=1053           Summary: IMG tag based rules
           Product: Spamassassin
           Version: unspecified
          Platform: Other
        OS/Version: other
            Status: NEW
          Severity: enhancement
          Priority: P2
         Component: Eval Tests
        AssignedTo: spamassassin-devel@example.sourceforge.net
        ReportedBy: matt@nightrealms.com
Inspired by complaints about all-image or mostly-image spam that&#x27;s
getting by SA, I&#x27;ve cooked up three sets of rules that analyze the use
of IMG tags in HTML: one that looks at the total area of all of the
images in the message (T_HTML_IMAGE_AREA*), one that looks at the
total number of images in the message (T_HTML_NUM_IMGS*), and one that
looks at the longest total run of consecutive images
(T_HTML_CONSEC_IMG*).===============The total area of all images is rather easy to compute: inside of
HTML::html_tests(), if an IMG tag has both the width and height
properties, then multiply them together and add the result to the
running total.OVERALL%   SPAM% NONSPAM%     S/O    RANK   SCORE  NAME
  15113     4797    10316    0.32    0.00    0.00  (all messages)
100.000   31.741   68.259    0.32    0.00    0.00  (all messages as %)
  0.635    2.001    0.000    1.00    0.81    0.01  T_HTML_IMAGE_AREA14
  0.417    1.313    0.000    1.00    0.78    0.01  T_HTML_IMAGE_AREA15
  0.331    1.042    0.000    1.00    0.76    0.01  T_HTML_IMAGE_AREA07
  0.245    0.771    0.000    1.00    0.74    0.01  T_HTML_IMAGE_AREA10
  0.238    0.750    0.000    1.00    0.74    0.01  T_HTML_IMAGE_AREA02
  0.225    0.709    0.000    1.00    0.74    0.01  T_HTML_IMAGE_AREA16
  0.126    0.396    0.000    1.00    0.70    0.01  T_HTML_IMAGE_AREA18
  0.119    0.375    0.000    1.00    0.70    0.01  T_HTML_IMAGE_AREA19
  0.119    0.375    0.000    1.00    0.70    0.01  T_HTML_IMAGE_AREA17
  1.125    3.523    0.010    1.00    0.68    0.01  T_HTML_IMAGE_AREA12
  0.741    2.314    0.010    1.00    0.65    0.01  T_HTML_IMAGE_AREA13
  1.542    4.732    0.058    0.99    0.58    0.01  T_HTML_IMAGE_AREA11
  0.139    0.417    0.010    0.98    0.54    0.01  T_HTML_IMAGE_AREA08
  0.483    1.397    0.058    0.96    0.50    0.01  T_HTML_IMAGE_AREA03
  0.192    0.500    0.048    0.91    0.44    0.01  T_HTML_IMAGE_AREA06
  0.820    1.834    0.349    0.84    0.39    0.01  T_HTML_IMAGE_AREA04
  0.946    2.022    0.446    0.82    0.38    0.01  T_HTML_IMAGE_AREA01
  0.569    0.896    0.417    0.68    0.32    0.01  T_HTML_IMAGE_AREA05
  6.498    0.500    9.287    0.05    0.02    0.01  T_HTML_IMAGE_AREA09Spam % of all rules with S/0 &gt; 0.90: 20.615%=============================The total number of IMG tags is really easy to do.  0.648    2.043    0.000    1.00    0.81    0.01  T_HTML_NUM_IMGS08
  0.609    1.918    0.000    1.00    0.80    0.01  T_HTML_NUM_IMGS09
  0.490    1.543    0.000    1.00    0.79    0.01  T_HTML_NUM_IMGS10
  0.119    0.375    0.000    1.00    0.70    0.01  T_HTML_NUM_IMGS14
  0.986    3.064    0.019    0.99    0.63    0.01  T_HTML_NUM_IMGS06
  2.303    7.150    0.048    0.99    0.62    0.01  T_HTML_NUM_IMGS11
  0.033    0.104    0.000    1.00    0.61    0.01  T_HTML_NUM_IMGS17
  0.787    2.439    0.019    0.99    0.61    0.01  T_HTML_NUM_IMGS12
  0.344    1.063    0.010    0.99    0.60    0.01  T_HTML_NUM_IMGS13
  0.020    0.063    0.000    1.00    0.58    0.01  T_HTML_NUM_IMGS20
  0.020    0.063    0.000    1.00    0.58    0.01  T_HTML_NUM_IMGS16
  0.860    2.627    0.039    0.99    0.57    0.01  T_HTML_NUM_IMGS05
  0.754    2.293    0.039    0.98    0.56    0.01  T_HTML_NUM_IMGS07
  0.013    0.042    0.000    1.00    0.55    0.01  T_HTML_NUM_IMGS18
  0.887    2.627    0.078    0.97    0.52    0.01  T_HTML_NUM_IMGS04
  1.356    3.711    0.262    0.93    0.47    0.01  T_HTML_NUM_IMGS03
  0.046    0.125    0.010    0.93    0.46    0.01  T_HTML_NUM_IMGS15
  6.061   10.256    4.110    0.71    0.34    0.01  T_HTML_NUM_IMGS01
  0.040    0.063    0.029    0.68    0.32    0.01  T_HTML_NUM_IMGS19
  6.233    4.753    6.921    0.41    0.22    0.01  T_HTML_NUM_IMGS02Spam % of all rules with S/O &gt; 0.90: 31.25%=========================I figured that spam that is made up of only images is going to only
have IMG tags interspersed with table, paragraph and linebreak tags,
and some whitespace, so there would be a lot of IMG tags with no plain
text (non-whitespace) between them.  So I defined consecutive IMG tags
to be ones with no text between them, and looked at the longest run of
consecutive IMGs within a message.This one seems to do pretty good, because in my non-spam corpus
there&#x27;s only a handful of messages with IMG runs larger than two.  0.450    1.418    0.000    1.00    0.78    0.01  T_HTML_CONSEC_IMGS06
  0.232    0.730    0.000    1.00    0.74    0.01  T_HTML_CONSEC_IMGS08
  0.205    0.646    0.000    1.00    0.73    0.01  T_HTML_CONSEC_IMGS11
  1.813    5.691    0.010    1.00    0.71    0.01  T_HTML_CONSEC_IMGS02
  1.019    3.189    0.010    1.00    0.67    0.01  T_HTML_CONSEC_IMGS03
  0.768    2.397    0.010    1.00    0.66    0.01  T_HTML_CONSEC_IMGS05
  0.053    0.167    0.000    1.00    0.64    0.01  T_HTML_CONSEC_IMGS12
  1.006    3.127    0.019    0.99    0.63    0.01  T_HTML_CONSEC_IMGS04
  0.483    1.501    0.010    0.99    0.62    0.01  T_HTML_CONSEC_IMGS07
  0.020    0.063    0.000    1.00    0.58    0.01  T_HTML_CONSEC_IMGS13
  0.020    0.063    0.000    1.00    0.58    0.01  T_HTML_CONSEC_IMGS15
  1.032    3.148    0.048    0.98    0.57    0.01  T_HTML_CONSEC_IMGS10
  0.199    0.605    0.010    0.98    0.57    0.01  T_HTML_CONSEC_IMGS09
  0.013    0.042    0.000    1.00    0.55    0.01  T_HTML_CONSEC_IMGS17
  0.013    0.042    0.000    1.00    0.55    0.01  T_HTML_CONSEC_IMGS19
  0.007    0.021    0.000    1.00    0.51    0.01  T_HTML_CONSEC_IMGS14
  7.080    7.484    6.892    0.52    0.26    0.01  T_HTML_CONSEC_IMGS01
  0.000    0.000    0.000    0.00    0.00    0.01  T_HTML_CONSEC_IMGS16
  0.000    0.000    0.000    0.00    0.00    0.01  T_HTML_CONSEC_IMGS18Spam % of all rules with S/O &gt; 0.90: 22.85%==========================Next I&#x27;m going to see if there&#x27;s any meta rules I can make that will
reduce the FP rate for low S/O rules.------- You are receiving this mail because: -------
You are the assignee for the bug, or are watching the assignee.
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-devel mailing list
Spamassassin-devel@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-devel

</pre>

## Record 010346

**Label:** `benign`

<pre>

John Reilly  a Ã©crit:&gt; &gt; Newsgroups are great for threading of discussions,
&gt; &gt; working offline and I feel that they work
&gt; &gt; much better for this sort of technical discussion
&gt; &gt; than a mailing list. 
&gt; I suppose its all down to personal preference, but I
&gt; disagree strongly.
I suppose it is - however, nobody knows that
this message is a response to your one or a 
follow-up to my own first message. With a newsgroup structure, this is obvious. This helps the reader eliminate threads which
are irrelevant to them or whatever.
Paul...___________________________________________________________
Do You Yahoo!? -- Une adresse @yahoo.fr gratuite et en franÃ§ais !
Yahoo! Mail : http://fr.mail.yahoo.com-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 010347

**Label:** `benign`

<pre>
a practical matter, I doubt the value sold in such situations ever adds up to the value lost. And the non-pecuiary since of violation, loss, and trouble has to get in there somewhere if we are really picky.I don&#x27;t think considering marginal utility of dollars has value in this situation. We aren&#x27;t debating whether the thief is better off -- he is.I&#x27;m not a lawyer either. I played one on TV once but I didn&#x27;t play a very good one and they canceled it after the first episode ...The situtation I described came from my recollection of Epstein&#x27;s &#x27;Takings&#x27;. He was specifically rejecting the idea of absolute property right found in Liberation theology and was using the idea -- that in an emergency where my life depends upon it I&#x27;m entitled to violate your property rights and (more) you are forbidden from using unreasonable force to defend them (particularly if you aren&#x27;t around).Maybe I did get it all wrong, but that particular recollection is relatively strong precisely because it gave a good reason why my libertarian theology needed to be modified.He was also analyzing what the common law had come up with, which might not be the statuatory law in a particular jurisdiction.&gt; -----Original Message----- &gt; From: fork-admin@xent.com [mailto:fork-admin@xent.com] On Behalf Of &gt; Russell Turpin &gt; Sent: Monday, August 12, 2002 2:15 PM &gt; To: fork@spamassassin.taint.org &gt; Subject: RE: David Friedman: Mail Me the Money! &gt; &gt; John Hall: &gt; &gt;The case against theft also acknowledges that the value to the thief is &gt; &gt;often far less than the value to the victim. Stealing my $1,000 stereo &gt; and &gt; &gt;then fencing it for $50 does not result in &#x27;no loss&#x27; to the economy &gt; &gt;overall. .. &gt; &gt; That depends on the value placed on it by the fellow &gt; who buys it from the pawn shop. And if you take &gt; into account the marginal utility of dollars, the &gt; thief may value his lucre more than his victim. &gt; &gt; &gt;On the flip side of this, common law allows a breach of property law in &gt; &gt;precisely the type of scenarios where a net social gain is recorded but &gt; &gt;the owner&#x27;s availability to make a contract was problematic. Breaking &gt; into &gt; &gt;your isolated cabin because I&#x27;m starving, for example, is permissible if &gt; I &gt; &gt;later offer restitution for the damage I caused and the food I ate. &gt; &gt; I am not a lawyer, but I think this is an incorrect &gt; analysis of what the law allows in emergencies. I &gt; can break into your cabin, take your rifle, grab a &gt; box of your ammo, and shoot the bear that is mauling &gt; a poor hiker, without having committed the crimes of &gt; breaking and entering, theft, hunting out of season, &gt; and killing an endangered species, whether or not I &gt; later offer to pay for your window and ammunition. &gt; The law simply puts a higher priority on saving &gt; human life in emergency than on these other things. &gt; &gt; Now yes, you can turn around and sue me for &gt; recompense. But that is a civil issue, not a &gt; criminal one. Crime requires mens rea. And when I &gt; shot the bear, I wasn&#x27;t thinking about who owned &gt; the bullet. &gt; &gt; &gt; &gt; _________________________________________________________________ &gt; MSN Photos is the easiest way to share and print your photos: &gt; http://photos.msn.com/support/worldwide.aspx &gt; &gt; http://xent.com/mailman/listinfo/forkhttp://xent.com/mailman/listinfo/fork
</pre>

## Record 010348

**Label:** `benign`

<pre>
applied linguistics , teaching foreign language universidad de las americas , puebla de p a r t a m e n t o d e l e n g u a s fourth regional symposium on applied linguistics 21-22 may 1999 call for papers the m . a . program in applied linguistics of the department of languages of the university of the americas / la universidad de las americas invites all those interested to participate in the fourth regional symposium on applied linguistics , with special emphasis on the acquisition and teaching of foreign languages . the objective of the symposium is to provide an opportunity for academic discussion , in-depth reflexion , and development of a richer knowledge of the different modalities implicated in the processes of the acquisition and teaching of a foreign language . presentations are welcomed in english , spanish , french , and other languages on all topics within the scope of applied linguistics . in order to cover all dimensions of the problems related to the acquisition and teaching of foreign languages , the symposium organizers propose to structure the forum around sub-themes to guide the selection of presentations and plenaries . due to existence of multiple components involved in the acquisition processs and of modern approaches to the teaching of foreign languages , the following theme was chosen for 1999 : socio - cultural issues . nevertheless , note that presentations on all topics related to applied linguistics are considered as well . we welcome workshops and talks of a more theoretical nature as well as presentations aimed at classroom practices . registration and participation in the fourth regional symposium on applied linguistics where ? when ? the symposium will take place in the auditorium of la universidad de las americas - puebla , situated on the grounds of the former hacienda santa catarina martir , san andres cholula , puebla , on friday and saturday , 21-22 may 1999 . fees ? for those who wish to participate in the activities , the fees are $ 100 . 00 and $ 40 . 00 for full-time students ( note that some form of student identification is required . ) . forms of payment : cash is preferred on the first day of the symposium at registration . how ? for those who wish to attend only as participants , please inform us in advance of your intention . we accept reservations from november , 1998 . please telephone caty orozco or liliana ajuria at + 52 ( 22 ) 29-31 - 05 . for those who wish to give a presentation , please send an abstract of 250 words , indicating at the top right hand corner if it is for a workshop ( 60 mins . ) or a talk ( 30 mins . ) . here are the guidelines : 1 . send three ( 3 ) copies of an abstract of not longer than 250 words , typed , double-spaced . include a title for the abstract . 2 . give the name and academic title of each presenter . 3 . at the top left-hand corner of one of the abstracts , give the name and complete address of the main presenter . include the telephone number , fax number , and e-mail address of the main author . do not include this information on two of the abstracts . deadlines ? the abstracts must be received by the 15 of march , 1999 . regular mail , e-mail ( locastro @ mail . udlap . mx ) or faxed abstracts ( + 52 ( 22 ) 29-31 - 01 ) are acceptable . notification of acceptance to present a paper or workshop will be send out the 15 of april . presenters do not have to pay the registration fee . note that , if the guidelines are not followed as specified above , there is a risk that the abstract will not be accepted . organizing committee of the fourth regional symposium on applied linguistics departamento de lenguas , universidad de las americas ex . hacienda sta catarina martir 72820 san andres , cholula , puebla , mexico telephone : ( 22 ) 29 31 05 fax : ( 22 ) 29 31 01 virginia locastro ( 22 ) 29 31 85 locastro @ mail . udlap . mx lydia giles ( 22 ) 29 31 19 lgiles @ mail . udlap . mx magdalena mejia ( 22 ) 29 31 35 mmejia @ mail . udlap . mx symposium themes 1998 political - economis issues 1999 socio - cultural issues 2000 psychological issues 2001 technological and educational issues virginia locastro , ph . d . , ( lancaster university ) departamento de lenguas universidad de las americas 72820 puebla , mexico tel : + 52 ( 22 ) 29-31 - 05 + 52 ( 22 ) 29-31 - 85 direct fax : + 52 ( 22 ) 29-31 - 01 e-mail : locastro @ mail . pue . udlap . mx
</pre>

## Record 010349

**Label:** `benign`

<pre>
&lt;!--
 body      { BACKGROUND-IMAGE: 
url(http://www.lockergnome.com/images/issue/top-right.gif); 
scrollbar-3dlight-color: #DADADA; scrollbar-arrow-color: #17514B; 
scrollbar-base-color: #007C7A; scrollbar-darkshadow-color: #808080; 
scrollbar-face-color: #C0C0C0; scrollbar-highlight-color: #DADADA; 
scrollbar-shadow-color: #808080 }
 a:link    { COLOR: RED; TEXT-DECORATION: underline }
 a:visited { COLOR: #FF8080; TEXT-DECORATION: underline }
 a:active  { color: #000000; TEXT-DECORATION: none }
 a:hover   { color: #820000; TEXT-DECORATION: none }
 p.title   { BACKGROUND: #C0C0C0; BORDER-BOTTOM: #808080 4px solid; BORDER-LEFT: #DADADA 4px solid; BORDER-RIGHT: #808080 4px solid; BORDER-TOP: #DADADA 4px 
solid; COLOR: #000000; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, 
Arial; FONT-SIZE: 14pt; FONT-WEIGHT: normal }
 p.news    { BACKGROUND: #C0C0C0; BORDER-BOTTOM: #808080 4px solid; BORDER-LEFT: #DADADA 4px solid; BORDER-RIGHT: #808080 4px solid; BORDER-TOP: #DADADA 4px 
solid; COLOR: #000000; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, 
Arial; FONT-SIZE: 18pt; FONT-WEIGHT: normal }
 p.sidebar { BACKGROUND: #DADADA; BORDER-BOTTOM: #C0C0C0 3px solid; BORDER-LEFT: #FFFFFF 3px solid; BORDER-RIGHT: #C0C0C0 3px solid; BORDER-TOP: #FFFFFF 3px 
solid; COLOR: #000000; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, 
Arial; FONT-SIZE: 10pt; FONT-WEIGHT: bold; TEXT-ALIGN: center }
 .link     { BACKGROUND: #DADADA; BORDER-BOTTOM: #C0C0C0 3px solid; BORDER-LEFT: #FFFFFF 3px solid; BORDER-RIGHT: #C0C0C0 3px solid; BORDER-TOP: #FFFFFF 3px 
solid; COLOR: #808080; font-size: 9pt; font-family: Verdana; font-weight: bold; 
padding: 3px; width: 100% }
 .url      { font-size: 8pt; font-family: Verdana, Tahoma, Arial }
 .fixed    { font-family: courier, courier new; font-size: 10px }
--&gt;
20020709 Lockergnome Penguin ShellÂ  07.09.2002 PenguinREPORT
CAREER SERVICES FROM LOCKERGNOME AND DICE.COM: We&#x27;ve teamed up with
Dice.com to bring you a full service I.T. career enhancement solution.
Whether you are looking for your
dream 
job
or trying to
hire 
talented people,
the full-featured career resource center is the place to start. Find your
IT talent 
solution
today!I don&#x27;t usually spend much time explaining metaphors. They are, after all, 
metaphorical. They can be filled with whatever symbolism you choose. Written 
well, we all come to some similar understanding of their meaning. But, I&#x27;ll 
depart today, contrary to my normal practice, to take a few minutes explaining a 
recent metaphor.I&#x27;m a Linux guy through and through. As a user, I see myself as right about at 
the average on the curve. For love of the language and open source attitude, 
though, you&#x27;d be hard-pressed to find anyone with quite the same level of 
enthusiasm. Put simply, there&#x27;s very little about the Linux and broader open 
source worlds that I don&#x27;t like or believe in.Take, for example, the practice of recursive acronyms. GNU (&quot;Gnu&#x27;s Not Unix&quot;), 
HURD (&quot;Herd of Unix-Replacing Daemons&quot;), WINE (&quot;Wine Is Not an Emulator&quot;), even 
PHP (&quot;PHP Hypertext Processor&quot;) - all carry on the tradition of recursion in the 
Unix/Linux world. Goofy as it sounds, I love this stuff.So it is that I set out to create a recursive metaphor last week. It could only 
have happened on or about the 4th of July. In fact, it happened in the edition 
of the 3rd. I wrote a piece about how we Americans spend more time over the 
course of a year talking about what&#x27;s wrong with our system than what&#x27;s 
right. I wrote it knowing full well that many of the responses I&#x27;d get would be 
a) from readers outside the US and b) in sharp disagreement to my comments or 
those of citizens of other countries. You&#x27;re following me, right? People would 
disagree with an article that said we spend much time disagreeing. This, of 
course, would prove my point in a somewhat metaphorical way - the perfect 
recursive metaphor. The point was to be made yet more perfectly by the eventual 
inclusion in Penguin Shell of the comments of someone from outside the US 
disagreeing with my take our argumentativeness as Americans. Ideally, they would 
be comments that disagreed with our collective American perception of being 
disagreeable. They would, of course, point out things about which citizens of 
other countries can disagree with Americans on. By exercising the right to 
disagree, we&#x27;d subtly agree that we have that right. Yet another level of 
recursion and a final layer of metaphor.The response to both my own and Johan Sauviller&#x27;s comments was overwhelming. In 
the main, I believe both were appreciated. Many commented on the balance of the 
two pieces. Some readers were surprised, I think, to see a dissenting opinion 
published so quickly, if at all. Overall, the ability to express honestly held 
opinions, to agree and to disagree on a global level closed the circle on the 
metaphor in a perfect way.Things have, however, gotten a bit more ugly in the past few days. I&#x27;m not sure 
whether some were slow in getting to the July 3rd issue, or whether it&#x27;s just 
been stewing since then. Take, for instance, these comments by a reader who will 
remain mercifully nameless:
We get enough
America bashing from our left-wing whacko extremist press and schools here
in the USA that we don&#x27;t wish to hear some (insert favorite adjective here)
from Belgium whining too!
Followed by:
... please don&#x27;t let Tony single-handedly tarnish the fine reputation
of Lockergnome. I&#x27;m sure there are other articulate Linux experts out there who 
would be able to replace him.
... and, in a later note on the topic ...
Censorship is to be encouraged in a
free-market society whenever and wherever it doesn&#x27;t come from the
government.
Clearly, the metaphor just whizzed right over the heads of some.
Chris 
has been great about allowing all his authors plenty of room in the editorial 
piece at the beginning of each newsletter. This particular piece is no 
exception. He&#x27;s shown a quiet confidence in the face of some very shrill 
comments. While we all generally stay focused on technical issues, Chris has 
shown unwavering support for the notion that we geeks are, in the end, humans 
with opinions and thoughts to share. I think it&#x27;s one of the things that makes 
the Lockergnome newsletters stand out from the pack - the personal touch.So, despite the irrationality of some of this week&#x27;s comments, I&#x27;ll continue to 
occasionally throw in a personal aside with the technical stuff.Just watch out. Recursive metaphors are only funny until someone puts an eye 
out.
Tony
Steidler-DennisonÂ Â Â Â Â Â Â Â GnomeTWEAK
Lockergnome readers, SAVE 50% on the Computing Encyclopedia!
Are you looking for the ultimate computing resource? Discover the
Computing Encyclopedia from Smart Computing.  Regular price $59,
SPECIAL OFFER for Lockergnome readers,
get 
your set TODAY, ONLY $29.95!Win Apps in Linux?Yesterday, I mentioned an interesting review of two products for Linux by CodeWeavers - CrossOver 
Office and CrossOver Plugin. You&#x27;ve probably heard of both by now, as they&#x27;ve 
garnered quite a bit of publicity both in and out of the Linux world. You&#x27;ll 
recall that I promised to try to secure copies for review this week. With the 
help of a friendly sales rep at CodeWeavers, I was able to accomplish that task 
this morning. True to the second half of the promise, we&#x27;ll spend the next few 
days looking at these two products and how they might impact your Linux use. 
Let&#x27;s take them in chronological order, starting today with CrossOver Plugin.A bit of background is in order. CodeWeavers is, in their own words, &quot; ... the 
leading corporate backer of the Wine Project. Wine has been, for the past several years, an 
ongoing project to port Windows applications to Linux. It&#x27;s a tough goal, but 
it&#x27;s also one that&#x27;s been undertaken by others in the past year or so. Though the progress has been 
slow, the Wine project has managed to stay at the front of this development 
realm.
CrossOver 
Plugin marks a change in the philosophy of the Wine Project. Prior to its 
release, Wine had taken a &quot;full system&quot; approach. Running Windows applications 
in Wine required the installation of a sizeable daemon and no small amount of 
configuration work. CrossOver Plugin has moved Wine away from the system-wide 
approach to one that&#x27;s much more modular. Rather than executing at system 
startup, Wine is called as-needed, with the virtual Windows path to the called 
program. When the program is closed, so is Wine. CrossOver Plugin has focused on creating Linux functionality with one related set of Windows 
applications: browser plugins.The results stand as a clear indication that the change in philosophy is a 
success. Off the top, CrossOver Plugin bundles QuickTime 5, Windows Media Player 6.2, Shockwave 8.5, Flash 6, and RealPlayer 8 into a Linux-accesible browser 
plugin package. Throw in more esoteric apps like IPix, Trillian, Authorware Web 
Player 6 and eFax Messenger 2, and you&#x27;ve got virtually every need plugin need 
covered.But this package doesn&#x27;t stop there. Included in the CrossOver Plugin package 
are viewers for Word, Excel and Powerpoint, as well as several 
Microsoft-oriented fonts. Honestly, I was stunned at the range of applications 
offered by the CodeWeavers developers.Having had some experience with Wine, I was a bit leery about the install 
process and about the ability to get all these great applications to work with 
my RedHat setup. I&#x27;ve never been completely successful with Wine, but I hoped 
for the best when I started the CrossOver Plugin installation. I really did want these apps to work.The installation was quite easy. By running the install-crossover.sh script from the command line, I was able to install the installers for both CrossOver Plugin and CrossOver Office, which we&#x27;ll talk about tomorrow. I started the plugin 
installs with QuickTime, a tool I&#x27;ve admittedly missed in Linux. In the 
background, CrossOver Plugin had already created a virtual C:\ drive on my 
machine. I clicked on the QuickTime install and immediately saw a familiar sight - the Vise installer in its Windows format. CrossOver Plugin first checked for 
feedback from the Windows binary, opened a virtual Windows window, then stepped 
out while the Vise installer took care of the rest. Though the install failed 
four times, it appeared to be a server failure rather than a failure of the 
CrossOver program. I kept &quot;retry&quot;ing and, with some persistence, managed to get 
a full QuickTime 5 install downloaded from the Apple servers. Quite literally, 
the install looked and performed exactly as I&#x27;ve seem many times in Windows. 
When the install was completed, CrossOver again checked for the Windows binary, 
located the appropriate .dll files in the virtual C:\ drive and dropped the 
plugins into the /home/tony/.netscape/plugins and /home/tony/.mozilla/plugins 
directories.The process was so smooth that I had to check the plugin listings in these 
browsers - &quot;Help&quot;, &quot;About Plugins.&quot; Sure enough, the CrossOver QuickTime plugin 
was listed. Quickly, I ran out to the Apple site and opened the &quot;Men In Black 
II&quot; movie trailer. QuickTime performed flawlessly.I followed with the Windows Media Player, Shockwave, Flash, IPix, and eFax 
Messenger installs. Of those, the only ones that weren&#x27;t self-contained in the 
CrossOver install were IPix and eFax. Even at that, the installer pointed me to 
the Windows download then found the .exe file when the download was done. Within a half-hour, I had all installed and tested.Then, just for grins, I installed RealPlayer 8 via CrossOver. This was despite 
the recommendation in the installer screen to use the Linux version. It went as 
smoothly as the others with one caveat - the player played media files at a much faster speed than that in Windows. Fast enough to make me laugh, in fact, 
reminded of Dave and Alvin the Chipmunk. Ah well, six out of seven is pretty 
strong given my previous troubles with Wine.I also installed a few fonts - Arial, Times New Roman, Trebuchet, and Veranda. 
In every case, the install was quick and absolutely painless.Wine has always held great promise. At times, it&#x27;s been painful to watch the 
tedious pace of development, only because that promise was so alluring. With the backing of CodeWeavers and a fundamental change in the approach to development, 
Wine has finally realized the goal of integrating Windows applications 
seamlessly into the stable Linux environment. The results are so strong that, if I didn&#x27;t know better, I&#x27;d swear that a few of these plugins actually run better 
in Linux than in their native Windows. Honestly, I didn&#x27;t realize how much I 
missed them until I started using them in Linux today.Tomorrow holds a few surpirses, with a look at CodeWeavers&#x27; CrossOver Office 
package.
Recommend It!
Send us a 
GnomeTWEAKÂ GnomeCORE
Kernel Configuration - Part IXWe&#x27;re nine parts into the kernel configuration series, with quite a bit yet to 
go. If you haven&#x27;t been following along, we&#x27;re breaking out the configuration 
screens one at a time in an attempt to shed some light on the purpose and 
function of each. With that knowledge, you should be able to make a clear 
decision as to how to configure each section.Today, it&#x27;s the Parallel Port support section. This is pretty simple. If you 
need parallel port support - such as for a printer - select this option either 
as a driver built into the kernel or as a loadable module.Most will use the PC-style hardware option in conjuction with a Windows printer. But that&#x27;s not all the parallel port can be used for. As an example, the builds 
I did with the telescope company required parallel port support, as the 
telescope cameras were attached to this port.Be aware - this kernel configuration option only makes a driver available for 
the parallel port. The computer&#x27;s BIOS sets the mode for the port - ECP, EPP, or Auto. On the majority of modern computers, the Auto mode is the default and will work just fine. However, if you have problems communicating with your printer 
following a kernel recompile, try changing the mode of your printer in the 
BIOS.Tomorrow, it&#x27;s Plug and Play configuration.
Recommend It!
Send us a GnomeCORE 
tipÂ GnomeFILE
Netics 2.0http://www.citi.umich.edu/u/marius/netics/&quot;Netics is an extensible network statistics collector. It puts the network 
interface in promiscuous mode and reads the data stream (after it strips off the appropriate protocol headers), then displays the results at specified intervals, either in a &quot;progress bar&quot; mode or as raw statistics. Currently, it supports 2 
statistics, both involving entropy: LZW compressability and Ueli Maurer&#x27;s 
universal statistical test. Maurer&#x27;s test is a very good and comprehensive 
measure of entropy, but requires a large amount of data. The LZW statistic 
requires much less data.&quot;
Recommend It!
Send us a GnomeFILE 
suggestionÂ GnomeVOICE
Helping Hand
Scribbled by Karl Steenblik&quot;Dear Linux community at Lockergnome.&quot;I am the web master for largest health care camp in the State of Utah. 
No not Cancer camp it is the Diabetic camp.&quot;The Foundation for Children and Youth with Diabetes serves about 900
diabetic children a year and their families.  We have education, family
support, diet planning and most important is camp.  The place where kids
can learn about how to better manage their disease.&quot;We are a totally non profit camp that puts all money from fees into our
camp.  We pay no salaries to Physicians, Dietitians, Social Workers,
Nurses and educators that make our camp possible.  Yes even me the lowly
web master donates his time and web space at ATT to the cause.&quot;ATT recently decided to pull access to our photo page due to a password
protection.  We give out a password to all parents so that they can see
photos of camp while the sessions are happening.  We do not however what
the creeps of the web to have access to photos of our kids.&quot;We are looking for someone in the state to help our camp by donating web
space.  Now it may not be your organization, but I know Linux people and
Lockergnome and I think someone there may know someone who would be able
to help us.&quot;You can still have access to the public part of our site that ATT has not
shut down at www.fcyd-inc.org.&quot;Please I have the parents of 120 diabetic kids wanting to see photos of
their children.  They are all e-mailing me and I have no one to turn to.&quot;Hoping to hear from someone soon.&quot;Karl R Steenblik
Webmaster FCYD camp
Salt Lake City.
Help Karl.Recommend It!
Speak your 
GnomeVOICEÂ GnomeCLICK
Mobilix.org
http://mobilix.org/Mobilix.org is a full site related to using Linux on mobile devices, including 
PDAs and laptops. It includes information for subsctibing to the linux-laptop 
mailing list, information on Linux-powered wearable computers, WAP enabled 
access, and Linux on cell phones. Mobilix looks to be a great resource for all 
kinds of tips, tricks and useful information for taking your Linux on the 
road.
Recommend It!
Suggest a 
GnomeCLICKhttp://www.lockergnome.com/issues/penguinshell/20020709.html
Your subscribed e-mail address is: [qqqqqqqqqq-lg@spamassassin.taint.org] - To unsubscribe or 
change your delivery address, please 
visit the subscription 
management
page. Use of the Gnome moniker by Penguin Shell does not imply endorsement of 
the Gnome Desktop Environment. Penguin 
Shell is an equal-opportunity desktop employer. For further information, please 
refer to the GnomeCREDITS in the 
sidebar.LOOK OVER HEREÂ Download Tip eBooksÂ Latest Windows 
Daily
Â Latest Digital
Media
Â Latest Tech 
Specialist
Â Latest Penguin 
Shell
Â Latest Apple Core
Â Latest Web 
Weekly
Â Latest Bits &amp; Bytes
Â Latest Audio ShowÂ Low Price Search
Â Our Tech ConferenceÂ Microsoft Office Tips
Â PC 
Productivity Tips
Â Cool 
Internet Tips
Â Windows 2000 Tips
Â Windows XP TipsÂ Tell a Friend About 
Us!
Â Advertise With 
Us
Â High-Tech Job 
Search
Â Chat With Gnomies
Â Watch The Webcams
Â Computer Power UserÂ Read Past Issues
Â Download X-Setup
Â About Lockergnome
Â Our Privacy 
Policy
Â View More 
Options
Â Our XML / RSS 
Feed
Â Syndicate Our 
Tips
Â Link To 
Lockergnome
Â Get Chris&#x27;s Book
Â Win a Digital Camera
Â General Feedback
Â Chris&#x27;s Blog
Â E-mail the Editor
Â GNOMESPECIALS
Â Manage Your Workgroup
Â Form Pilot
Â Say the Time 5.0
Â Boomer - Stream Now
Â Create Web/CD catalog
Â Easy Web Editor
Â Kleptomania
Â Tag&amp;Rename
Â Pretty Good Solitaire
Â Visualize Color Combos
Â FirstStop WebSearch
Â Ecobuilder
Â Book Collector
Get Listed Here
Question: which group is 250,000+ strong and always looking for stuff to make their personal and professional lives run smoother? Â 
CLICK HERE TO ZOOMÂ 
LOOK IT UPÂ 
BYTE ME NOWÂ©2002, Lockergnome LLC. ISSN: 1095-3965. All Rights Reserved. Please read our Terms of Service. Our Web site is hosted by DigitalDaze. Domain registered at DNS Central.

</pre>

## Record 010350

**Label:** `benign`

<pre>
syntax bhat , d . n . s . the adjectival category . criteria for differentiation and indentification . john benjamins 1994 xi , 285 pp . linguistics cloth : us : 1 55619 376 9 / eur : 90 272 3027 7 us $ 65 . 00 / hfl . xx , - - semantics continuity in linguistic semantics c . fuchs and b . victorri ( eds . ) until recently , most linguistic theories as well as theories of cognition have avoided use of the notion of continuity . however , several linguistic trends , sharing a preoccupation with semantico-cognitive problems ( e . g . cognitive grammars , &#x27; psychomechanics &#x27; , &#x27; enuciative theories &#x27; ) , are trying to go beyond the constraints imposed by discrete approaches . at the same time , mathematical ( e . g . differential geometry and dynamical systems ) and computer science tools ( e . g . connectionism ) have been proposed that can be used for modeling of continuous linguistic phenomena . the first part of the book is devoted to linguistic issues , the second part deals with modeling issues . contributions by : a . culioli ; c . fuchs ; c . harris ; d . kayser ; r . langacker ; g . leech ; p . le goffic ; j . petitot ; j . picoche ; v . prince ; j - m . salanskis ; h . seiler ; r . thom ; d . touretzky &amp; b . victorri . lingvisticae investigationes supplementa , 19 1995 . iv , 251 pp . + index hb 1-55619 - 259 - 2 $ 64 . 00 process , image , and meaning wolfgang wildgen university of bremen in the sense of this work , the development of a &quot; realistic &quot; model of meaning has to account for the ecological basis of meaning in perception , action , and interaction , and is realistic in the sense of &quot; scientific realism &quot; , i . e . it is based on the paradigm of dynamical systems theory . in this work , wildgen proceeds from the positing of a semantic model of sentences within recent proposals to a realistic model elaborating on the consequences of the theory . this includes discussions of valence , basic prediction , multi-stability and the application of chaos theory . pragmatics and beyond new series , 31 xii , 280 pp . hb 1-55619 - 299 - 1 $ 67 . 00 ling theory the reality of linguistic rules susan d . lima , roberta l . corrigan and gregory k . iverson university of wisconsin - milwaukee this volume presents a selection of the best papers from the 21st annual university of wisconsin - milwaukee linguistics symposium . researchers from linguistics , psychology , computer science , and philosophy , using many different methods and focusing on many different facts of language , addressed the question of the existence of linguistic rules . are such rules best seen as convenient tools for the description of languages , or are rules actually invoked by individual language users ? studies in language companion series , 26 1994 . xxiii , 466 pp . + index hb 1-55619 - 378 - 5 $ 115 . 00 pagliuca , william ( ed . ) : perspectives on grammaticalization . john benjamins 1994 xx , 287 pp . + index ling . theory cloth : us : 1 55619 563 x / eur : 90 272 3612 7 us $ 79 . 00 / hfl . 150 , - - the recent resurgence of interest in the evolution of grammatical form and meaning from lexical material has reinvigorated historical analysis and theory and led to advances in the understanding of the relation between diachrony and universals . the richness and potential of some of the leading approaches to grammaticalization are here illustrated in thirteen selected papers from a symposium held at the university of wisconsin , milwaukee in april 1990 . this is the second of two volumes deriving from the same symposium ; the first volume , explanation in historical linguistics , edited by garry w . davis and gregory k . iverson , was published by john benjamins in 1992 . contributions by : w . pagliuca , j . l . bybee , k . carey , u . claudi , d . cyr , r . epstein , j . haiman , b . heine , p . j . hopper , p . kilroe , t . ohori , j . c . paolillo , j . rubba , d . i . slobin . dissertations goad , h . on the configuration of height features ( 1993 ) halmari , h . a government approach to finnish - english intrasentential code - switching ( 1994 ) for more information , please contact us by e-mail gsil @ scf . usc . edu , or by fax : 213-740 - 9306 department of linguistics , university of southern california , los angeles , ca 90089-1693 u . s . a . a complete list of available dissertations can be accessed through the linguist listserv
</pre>

## Record 010351

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-6,8355996,215/
Date: 2002-09-28T23:38:59+01:00*Dan Rookwood* and *Lawrence Booth* on how Europe and the United States ended 
all-square to set up a tense final day.

</pre>

## Record 010352

**Label:** `benign`

<pre>
position announcement / instructor position announcement instructor / linguistics the linguistics program at the university of southern maine has an opening for a part-time instructor to teach two sections of an undergraduate course titled &quot; analyzing language &quot; , beginning fall 1997 . this is a &quot; core &quot; course and meets a &quot; skills of analysis &quot; requirement for the usm core program . we are looking for candidates with excellent teaching skills and a broad command of linguistic theory . abd phd candidates are especially encouraged to apply . the two sections meet for 2 1 / 2 hours each at 4 and 7pm on wednesday evenings in portland . in future semesters course schedules can be arranged to accommodate the instructor &#x27;s schedule . salary will be in the range $ 1749 - $ 2100 per course , depending upon experience . travel time from boston to portland is about 2 hours by car . if you are interested in this position ( or know someone who may be ) please contact prof . wayne cowart at ( 207 ) 780 4477 ; fax ( 207 ) 780 5561 ; cowart @ usm . maine . edu . candidates should contact us by phone or e-mail first then submit a letter , cv , and a letter of reference from someone familiar with the candidate &#x27;s teaching experience . mailing address : linguistics program , university of southern maine , p . o . box 9300 , 96 falmouth st . , portland , me 04104-9300 . the university of southern maine is an equal opportunity employer . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = wayne cowart / assoc . prof . of linguistics / director , usm core curriculum university of southern maine 96 falmouth st . portland , me 04103 usm linguistics webpage : http : / / www . usm . maine . edu / ~ lin e - mail : cowart @ usm . maine . edu phone : ( 207 ) 780-4477 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
</pre>

## Record 010353

**Label:** `benign`

<pre>
use Perl Daily Headline MailerPerl &quot;Meetup&quot;
    posted by ziggy on Thursday September 05, @19:12 (news)
    http://use.perl.org/article.pl?sid=02/09/05/2316234
Copyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.
</pre>

## Record 010354

**Label:** `benign`

<pre>
french grad student conference appel de communications les etudiants gradues du departement d &#x27; etudes francaises de l &#x27; universite de western ontario vous invitent a participer a leur colloque annuel interdisciplinaire qui aura lieu les 3 et 4 avril 1998 sur le theme : la langue de l &#x27; autre . les propositions sont attendues sans restriction de domaine d &#x27; etude . voici quelques suggestions sur le sujet : - langue de l autre et alterite - langue de l &#x27; autre et communication - langue de l &#x27; autre et appropriation - langue de l &#x27; autre et culture - langue de l &#x27; autre et francophonie - langue de l &#x27; autre et ecriture de soi - langue de l &#x27; autre et censure - langue de l &#x27; autre et intertextualite - langue de l &#x27; autre et interpretation - langue de l &#x27; autre et marginalite . . . les propositions devront \ 234tre soumises en francais avant le 10 fevrier 1998 , et ne devront pas depasser 250 mots . par courriel : cberoud @ bosshog . arts . uwo . ca remmanve @ julian . uwo . ca par telecopieur : 519-661 - 3470 http : / / www . uwo . ca / french / recherche / langueautre . html ou a l &#x27; adresse suivante : colloque etudiant &quot; la langue de l &#x27; autre &quot; carole beroud / emmanuelle ravel department of french university college university of western ontario london , ontario n6a 3k7 jeff tennant vice - directeur / vice - chair departement de francais / department of french the university of western ontario london , ontario n6a 3k7 canada tel : ( 519 ) 661-2111 xt 5688 ( 519 ) 661-2163 ( messages ) fax : ( 519 ) 661-3470 jtennant @ julian . uwo . ca http : / / www . uwo . ca / french /
</pre>

## Record 010355

**Label:** `benign`

<pre>
this summer &#x27; s houston visits richard has agreed to pay for matt &#x27; s visit , so here &#x27; s the schedule so far : kirstee all of july , all of september . ( kirstee &#x27; s personal commitments mean she needs to be in the uk for august . ) ben all of october . ( no crossover with kirstee , ensures var / credit cover in london office . ) steve 2 - 3 weeks in july , first 3 weeks of september . ( no crossover with matt , ensures power cover in london office . ) matt a couple of weeks in august . ( preferably the hottest ones . ) anjam to be arranged at anjam and houston &#x27; s mutual convenience . - - - - - - - - - - - - - - - - - - - - - - forwarded by steven leppard / lon / ect on 04 / 28 / 2000 04 : 19 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - steven leppard 04 / 28 / 2000 10 : 15 am to : vince j kaminski / hou / ect @ ect , dale surbey / lon / ect @ ect cc : anjam ahmad / lon / ect @ ect , benjamin parsons / lon / ect @ ect , kirstee hewitt / lon / ect @ ect , matthew d williams / lon / ect @ ect , steven leppard / lon / ect @ ect subject : this summer &#x27; s houston visits vince , dale here are our proposals for houston visits from our group : kirstee all of july , all of september . ( kirstee &#x27; s personal commitments mean she needs to be in the uk for august . ) ben all of october . ( no crossover with kirstee , ensures var / credit cover in london office . ) steve 2 - 3 weeks in july , first 3 weeks of september . anjam to be arranged at anjam and houston &#x27; s mutual convenience . matt not a permanent research group member . i &#x27; m asking richard &#x27; s group to pay for his visit , probably in august . steve
</pre>

## Record 010356

**Label:** `benign`

<pre>

&quot;Michael Moncur&quot; said:&gt; My corpus is about 50% spamtrap spam at any given time. Let me know if I
&gt; should leave that out next time, I do keep it separate. My spamtraps are
&gt; pretty clean of viruses and bounce messages most of the time.IMO spamtrap data that&#x27;s well-cleaned and monitored is fine.To my mind there&#x27;s 3 types of spamtraps:  1. old user addresses, recycled into spamtraps when the user closes
    the account  2. old user addresses, recycled into spamtraps several months after the
    user closes the account, scanned for newsletters, unsubscribed
    from them etc.  3. real spamtrap addresses to trap website crawlers.The latter 2 are the most effective, but #1 is a real PITA; it takes lots
of maintainance to avoid ham getting in there.  Some of my spamtrap data
had a few 1&#x27;s contributed by ISPs, and I hadn&#x27;t spent enough time sifting
for legit mail that was slipping through.  So I felt better leaving
them out for this run, apart from what I&#x27;d hand-cleaned.--j.
</pre>

## Record 010357

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 21 / 02 ; hourahead hour : 15 ; hourahead schedule download failed . manual intervention required . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002012115 . txt error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database
</pre>

## Record 010358

**Label:** `benign`

<pre>
On Sun, 1 Sep 2002, Mr. FoRK wrote:&gt; &gt; 6.  Hardware is getting so fast that I&#x27;m not sure if the performance
&gt; &gt; difference between Java and C/C++ are relevant any more.
&gt;
&gt; When out-of-the-box parsing &amp; transform of XML in java is 25x slower than
&gt; C++ on the same hardware then it does matter.Yea, and that on top of the 100x of all the parsing engines over just
bigendian&#x27;ing it and passing the data (5x+++) in the raw. Then it REALLY
matters.- Adam L. &quot;Duncan&quot; Beberg
  http://www.mithral.com/~beberg/
  beberg@mithral.com

</pre>

## Record 010359

**Label:** `benign`

<pre>
&gt; (Please feel free to forward this message to other possibly-interested
&gt; parties.)Some caveats (in decending order of concern):1. These messages could end up being falsely (or incorrectly) reported
   to Razor, DCC, Pyzor, etc.  Certain RBLs too.  I don&#x27;t think the
   results for these distributed tests can be trusted in any way,
   shape, or form when running over a public corpus.2. These messages could also be submitted (more than once) to projects
   like SpamAssassin that rely on filtering results submission for GA
   tuning and development.3. Spammers could adopt elements of the good messages to throw off
   filters.  And, of course, there&#x27;s always progression in technology
   (by both spammers and non-spammers).The second problem could be alleviated somewhat by adding a Nilsimsa
signature (or similar) to the mass-check file (the results format used
by SpamAssassin) and giving the message files unique names (MD5 or
SHA-1 of each file).The third problem doesn&#x27;t really worry me.These problems (and perhaps others I have not identified) are unique
to spam filtering.  Compression corpuses and other performance-related
corpuses have their own set of problems, of course.In other words, I don&#x27;t think there&#x27;s any replacement for having
multiple independent corpuses.  Finding better ways to distribute
testing and collate results seems like a more viable long-term solution
(and I&#x27;m glad we&#x27;re working on exactly that for SpamAssassin).  If
you&#x27;re going to seriously work on filter development, building a corpus
of 10000-50000 messages (half spam/half non-spam) is not really that
much work.  If you don&#x27;t get enough spam, creating multi-technique
spamtraps (web, usenet, replying to spam) is pretty easy.  And who
doesn&#x27;t get thousands of non-spam every week?  ;-)Dan

</pre>

## Record 010360

**Label:** `benign`

<pre>
[a cheeky letter to the editors of the Economist follows, along with the 
article I was commenting on... Rohit]In your article about Chinese attempts to censor Google last week (&quot;The 
Search Goes On&quot;, Sept. 19th), the followup correctly noted that the most 
subversive aspect of Google&#x27;s service is not its card catalog, which 
merely points surfers in the right direction, but the entire library. By 
maintaining what amounts to a live backup of the entire World Wide Web, 
if you can get to Google&#x27;s cache, you can read anything you&#x27;d like.The techniques Chinese Internet Service Providers are using to enforce 
these rules, however, all depend on the fact that traffic to and from 
Google, or indeed almost all public websites, is unencrypted. Almost all 
Web browsers, however, include support for Secure Sockets Layer (SSL) 
encryption for securing credit card numbers and the like. Upgrading to 
SSL makes it effectively impossible for a &#x27;man-in-the-middle&#x27; to meddle; 
censorship would have to be imposed on each individual computer in 
China. The only choice left is to either ban the entire site (range of 
IP addresses), but not the kind of selective filtering reported on in 
the article.Of course, the additional computing power to encrypt all this traffic 
costs real money. If the United States is so concerned about the free 
flow of information, why shouldn&#x27;t the Broadcasting Board of Governors 
sponsor an encrypted interface to Google, or for that matter, the rest 
of the Web?To date, public diplomacy efforts have focused on public-sector 
programming for the Voice of America, Radio Sawa, and the like. Just 
imagine if the US government got into the business of subsidizing secure 
access to private-sector media instead. Nothing illustrates the freedom 
of the press as much as the wacky excess of the press itself -- and most 
of it is already salted away at Google and the Internet Archive project.On second thought, I can hardly imagine this Administration *promoting* 
the use of encryption to uphold privacy rights. Never mind...Best,
   Rohit Khare===========================================================The search goes on
China backtracks on banning Googleâ€”up to a pointSep 19th 2002 | BEIJING
 From The Economist print editionIN CHINESE, the nickname for Google, an American Internet search engine, 
is gougou, meaning â€œdoggyâ€. For the country&#x27;s fast-growing population of 
Internet users (46m, according to an official estimate), it is proving 
an elusive creature. Earlier this month, the Chinese authorities blocked 
access to Google from Internet service providers in Chinaâ€”apparently 
because the search engine helped Chinese users to get access to 
forbidden sites. Now, after an outcry from those users, access has been 
restored.An unusual climbdown by China&#x27;s zealous Internet censors? Hardly. More 
sophisticated controls have now been imposed that make it difficult to 
use Google to search for material deemed offensive to the government. 
Access is still blocked to the cached versions of web pages taken by 
Google as it trawls the Internet. These once provided a handy way for 
Chinese users to see material stored on blocked websites.After the blocking of Google on August 31st, many Chinese Internet users 
posted messages on bulletin boards in China protesting against the move. 
Their anger was again aroused last week when some Chinese Internet 
providers began rerouting users trying to reach the blocked Google site 
to far less powerful search engines in China.Duncan Clark, the head of a Beijing-based technology consultancy firm, 
BDA (China) Ltd, says China is trying a new tactic in its efforts to 
censor the Internet. Until recently, it had focused on blocking 
individual sites, including all pages stored on them. Now it seems to be 
filtering data transmitted to or from foreign websites to search for key 
words that might indicate undesirable content. For example earlier this 
week when using Eastnet, a Beijing-based Internet provider, a search on 
Google for Falun Gongâ€”a quasi-Buddhist exercise sect outlawed in Chinaâ€”
usually aborted before all the results had time to appear. Such a search 
also rendered Google impossible to use for several minutes.

</pre>

## Record 010361

**Label:** `benign`

<pre>
transition items i have a few questions regarding the transition . access programmers - the contractors will be managed by the end - users they are supporting from now on . the budget dollars for them are in cc 103849 - $ 50 k per month . do you want each department to continue paying their invoices against these budget dollars in 103849 or through their own cost centers ? do we transfer budget dollars ? close the cost center ? equipment - we have 1 flat screen and several large monitors . should we just return all equipment to surplus or offer to others ? space - will commoditylogic be moving and assuming the space that will be vacated on 3 / 12 ? fax machine will be disconnected / returned . digital scanner will be surplused . there are two printers that can be surplused unless someone else ( cl ? ) wants / needs them . turkeylegs and tarzan . i currently charge 50 % of my time to cl and 50 % to my cost center - 103850 . should i continue this or charge all my time to cl and close my cost center ? since marvia is also be redeployed , there is no one else in my cost center . let me know if you want to sit down and discuss or you can just provide quick answers here or in voice mail .
</pre>

## Record 010362

**Label:** `benign`

<pre>
reminder iwcs * * * r e m i n d e r * * * international workshop on computational semantics december 19-21 , 1994 , tilburg , the netherlands the institute for language technology and artificial intelligence will host a workshop on computational semantics that will take place in tilburg , the netherlands , from 19 - 21 december 1994 . the aim of the workshop is to bring together researchers involved in all aspects of computational semantics of natural language . hotel - rooms can be booked through the iwcs secretariat ( see the form below ) , but , if one intends to , it is advisable to do so shortly , taking into account the upcoming holidays . preliminary schedule ( tilburg university , room az9 ) monday december 19 09 . 00-09 . 45 hrs registration at the hall of building b 09 . 45-10 . 00 hrs opening by harry bunt ( itk , tilburg ) 10 . 00-10 . 40 hrs allan ramsay ( ireland ) &quot; the co - operative lexicon &quot; 10 . 40-10 . 55 hrs coffee 10 . 55-11 . 35 hrs chris fox ( uk ) &quot; discourse representation , type theory and property theory &quot; 11 . 35-12 . 15 hrs rene ahn ( the netherlands ) &quot; dynamic knowledge states in type theory &quot; 12 . 15-13 . 45 hrs lunch 13 . 45-14 . 25 hrs henk zeevat ( the netherlands ) &quot; questions and exhaustivity in update semantics &quot; 14 . 25-15 . 05 hrs rodger kibble ( scotland ) &quot; dynamics of epistemic modality and anaphora &quot; 15 . 05-15 . 45 hrs matthew stone ( usa ) &quot; the reference argument of epistemic ` must &#x27; &quot; 15 . 45-16 . 00 hrs tea 16 . 00-16 . 40 hrs leon verschuur ( the netherlands ) &quot; agreement and dynamic semantics in hpsg &quot; 16 . 40-17 . 20 hrs jonathan ginzberg ( scotland ) &quot; an update semantics for dialogue &quot; 17 . 20 hrs drinks tuesday december 20 09 . 00-09 . 40 hrs tim fernando ( germany ) &quot; what is a drs ? &quot; 09 . 40-10 . 20 hrs n . asher , m . aurnague , m . bras , p . sablayrolles and l . vieu ( france ) &quot; computing the spatiotemporal structure of discourse &quot; 10 . 20-10 . 35 hrs coffee 10 . 35-11 . 15 hrs jose coch and raphael david ( france ) &quot; causality and multisentential text &quot; 11 . 15-11 . 55 hrs claire gardent and joke dorrepaal ( the netherlands ) &quot; reversible discourse processing &quot; 11 . 55-12 . 35 hrs henriette de swart and arie molendijk ( the netherlands ) &quot; negation in narrative discourse &quot; 12 . 35-13 . 45 hrs lunch 13 . 45-14 . 25 hrs nissim francez and jonathan berg ( israel ) &quot; mdrt : a multi - agent extension of drt &quot; 14 . 25-15 . 05 hrs massimo poesio ( scotland ) &quot; ambiguity , underspecification and discourse interpretation &quot; 15 . 05-15 . 45 hrs j . bos e . mastenbroek , s . mcglashan , s . millies and m . pinkal ( germany ) &quot; a compositional drs - based formalism for nlp applications &quot; 15 . 45-16 . 00 hrs tea 16 . 00-16 . 40 hrs stephen pulman ( uk ) &quot; a computational theory of context dependence &quot; 16 . 40-17 . 40 hrs discussion wednesday december 21 09 . 00-09 . 40 hrs tsutomu fujinami ( uk ) &quot; a transitional approach to semantics : encoding situation - theoretic objects into the pi-calculus &quot; 09 . 40-10 . 20 hrs ariel cohen ( usa ) &quot; reasoning with generics &quot; 10 . 20-10 . 35 hrs coffee 10 . 35-11 . 15 hrs daniel marcu and graeme hirst ( canada ) &quot; an implemented formalism for computing linguistic presuppostions and existential commitments &quot; 11 . 15-12 . 05 hrs gosse bouma ( the netherlands ) &quot; calculated flexibility &quot; 12 . 05-13 . 45 hrs lunch registration form international workshop on computational semantics 19-21 december 1994 tilburg , the netherlands name : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . affiliation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . address : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . city , state , zip code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . country : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . telephone : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . fax : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . email address : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . registration fee before november 1 , 1994 dfl . 275 , 00 after november 1 , 1994 dfl . 325 , 00 method of payment : 0 bank transfer transfer the registration fee in dutch guilders to : * abn / amro bank account number 45 50 46 042 ; tilburg university , warandelaan 2 , 5037 gc tilburg please mention code 951 . 55 , computational semantics , and your name . please calculate transfer charges , as we must receive the full registration fee . any shortfall in fees will have to be paid upon arrival . 0 postal money order make the fee ( in dutch guilders ) payable to : * tilburg university , warandelaan 2 , 5037 gc tilburg please mention code 951 . 55 , computational semantics and your name . please calculate transfer charges , as we must receive the full registration fee . any shortfall in fees will have to be paid upon arrival . 0 visa card if you pay by credit card please fax us the following information : card number : . . . . . . . . . . . . . . . . . . . . . . . . . expiration date : . . . . . . . . . . . . . . . . . . . . . . . . . name as it appears on card : . . . . . . . . . . . . . . . . . . . . . . . . . i authorize tilburg university to charge my account for the total fee of . . . . . . . . . . ( signature ) hotel reservation do you want us to make hotel reservations for you ? ( the price of a single room will be approximately dfl . 135 , 00 per person per night , breakfast included . ) yes / no if your answer to the previous question was yes , please fill in the date of your arrival and departure . date of arrival : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . date of departure : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . send this registration form to : marja klijn institute for language technology and artificial intelligence ( itk ) tilburg university p . o . box 90153 5000 le tilburg the netherlands tel . : + 31 13 663113 fax : + 31 13 662537 email : computational . semantics @ kub . nl gerrit rentier ( ma ) institute for language technology and artificial intelligence tilburg university , po box 90153 , 5000 le tilburg , the netherlands phone : ( + 31 ) ( 0 ) 13 662970 fax : ( + 31 ) ( 0 ) 13 662537 email : rentier @ kub . nl
</pre>

## Record 010363

**Label:** `benign`

<pre>

CNET Shopper Newsletter: PDA Edition
 Shopper
											All CNET
											The Web
										Â 
									1
Cyber Shot DSC-F707
2
Canon PowerShot S40
3
Palm m515
4
Nikon Coolpix 995
5
Canon PowerShot G2
Â 
		All most popular
 Sony CLIE PEG-T665C
											â€¢ 66MHz processor
											â€¢ Transflective LCD
											â€¢ 16MB of RAM
											â€¢ MP3 playback
											â€¢ Strong infrared port
											â€¢ Just $354Accessorize this PDA:
Sony Mini Keyboard 
Sony AC AdapterSony Memory Stick Module
Sony Carrying Case
Looking to upgrade your PDA&#x27;s memory? No matter what type of handheld you use, CNET&#x27;s Memory Confiturator makes finding the perfect memory upgrade easier than ever. You&#x27;re just a few clicks away from maximizing your PDA&#x27;s potential!
										Check out CNET&#x27;s new Memory ConfiguratorPalm m130
								â€¢ Free shipping available 
								â€¢ 8MB, Palm OS v4.1
								â€¢ 65,000-color screen
								Â Â Just $210 Palm m515
								â€¢ Fusion of style and power
								â€¢ 16MB, Palm OS v4.1
								â€¢ MultiMediaCard slot
								Â Â Just $312Palm i705
								â€¢ 8MB, USB, rechargeable
								â€¢ Wireless Internet access
								â€¢ Always-on e-mail
								Â Â Just $299Sony CLIE PEG-T615C
								â€¢ 16MB, USB, rechargeable
								â€¢ 16-bit color display
								â€¢ Palm OS 4.1
								Â Â Just $251 Toshiba Pocket PC e310
								â€¢ Powerful mobile productivity
								â€¢ 3.5-inch TFT display/65K colors
								â€¢ Plays MP3/video files
								Â Â Just $329 Compaq iPaq H3835
								â€¢ Free shipping available
								â€¢ 64MB, brilliant TFT screen
								â€¢ 206MHz Intel processor
								Â Â Just $425Sony CLIE PEG-NR70V
								â€¢ Built-in digital camera/MP3 
								â€¢ Built-in keyboard/color display
								â€¢ 16MB, Palm OS 4.1
								Â Â Just $517Compaq iPaq H3870 
								â€¢ Incl. MS Pocket PC 2002
								â€¢ 64MB, integrated Bluetooth
								â€¢ 206MHz, 64K color, USB
								Â Â Just $539 Did you know that ChannelOnline empowers you to compare 
detailed product specifications feature-for-feature? Select the items you wish to compare from your customer-
specific catalog of more than 250,000 SKUs. The product 
comparison highlights differences between the products 
in red, allowing your sales reps and customers to easily 
identify the main differences between each product selected. 
This comparison can then be e-mailed to your customers to 
assist them in making a more informed buying decision.Sign up now to gain access to the most complete, accurate, 
and timely product data available. 
 
Tell me more about ChannelOnline.
Tech Trends
Hardware
Software
Shopping
Downloads
News
Investing
Electronics
Web Building
Help &amp; How-Tos
Internet
Games
Message Boards
CNET TV &amp; Radio
Music CenterThe e-mail address for your subscription isÂ qqqqqqqqqq-cnet-newsletters@spamassassin.taint.org
UnsubscribeÂ |
Â Manage My Subscriptions
Â |Â FAQÂ |
Â AdvertisePrice comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          
</pre>

## Record 010364

**Label:** `benign`

<pre>
vince , i &#x27; ll have him e - mail you a cv . i &#x27; d be happy to speak at the power risk conference . frank professor frank a . wolak email : wolak @ zia . stanford . edu department of economics phone : 650 - 723 - 3944 ( office ) stanford university fax : 650 - 725 - 5702 stanford , ca 94305 - 6072 phone : 650 - 856 - 0109 ( home ) world - wide web page : http : / / www . stanford . edu / ~ wolak cell phone : 650 - 814 - 0107
</pre>

## Record 010365

**Label:** `benign`

<pre>
temporary slack - cera alert here is cera &#x27; s latest near term analysis . - - - - - - - - - - - - - - - - - - - - - - forwarded by lorna brennan / et &amp; s / enron on 10 / 27 / 2000 02 : 40 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - webmaster @ cera . com on 10 / 26 / 2000 06 : 05 : 45 pm to : lorna . brennan @ enron . com cc : subject : temporary slack - cera alert cera alert : sent thu , october 26 , 2000 title : temporary slack author : n . american gas team e - mail category : alert product line : north american gas , url : http : / / www . cera . com / cfm / track / eprofile . cfm ? u = 5526 &amp; m = 1402 , alternative url : warm weather and strong storage injections have temporarily shifted the focus in the gas market away from a potential supply shortage this winter toward a growing sense that supplies might just prove adequate . the result has been a steady and steep decline in the november nymex price from $ 5 . 63 per mmbtu on october 12 into the $ 4 . 60 s as of october 25 . cash prices have followed suit , falling from the mid - $ 5 . 50 s to the $ 4 . 60 s at the henry hub , and gas is now pricing below residual fuel oil in the gulf coast and especially on the east coast . although gas storage inventories will begin the winter at levels higher than expected , in cera  , s view adequate supply for the winter is not yet assured , and the market remains subject to a quick return to prices well above $ 5 . 00 with the first cold snap . storage injections of 71 billion cubic feet ( bcf ) for the week ended october 20 accompanied by broad - based and continuing warm weather have driven the shift in market psychology . last week  , s injection rate was 26 . 5 bcf , or approximately 3 . 8 bcf per day , above the previous five - year average for those seven days and 58 bcf above the 13 bcf of injections recorded last year for the week ending october 22 . with warm weather this week and the return of more normal temperatures expected next week , cera now expects storage to reach a maximum level of 2 , 784 bcf on october 31 - - still an all - time low entering the winter , by 26 bcf ( see table 1 ) . is this inventory level &quot; enough &quot; ? not yet . storage inventories this winter under 15 - year normal weather conditions would fall to approximately 780 bcf , 22 bcf above the previous all - time low . this end - of - march minimum implies total withdrawals in the united states this winter of 2 . 0 trillion cubic feet ( tcf ) , 128 bcf above last year  , s withdrawals . but holding withdrawals this winter down to 2 . 0 tcf in the face of a return to normal weather - - and the demand rebound of 3 . 0 bcf per day it would bring - - will be difficult . although the beginning of a us supply rebound and growing imports will add approximately 1 . 0 bcf per day to supplies this winter , holding withdrawals down requires both of the following : * industrial markets - - mainly ammonia and methanol producers - - that are now shut down because of high gas prices must remain shut down . these markets represent approximately 0 . 5 bcf per day of demand that could return , should gas prices moderate relative to ammonia and methanol . * the nearly 1 . 5 bcf per day of switchable load now burning residual fuel oil must remain off of gas . in cera  , s view , for gas prices to fall below resid on a sustained basis , particularly as power loads increase this winter , it must become apparent that winter demand can be met , the current resid load can return to gas , and storage inventories can be held reasonably near the previous record low . that low , 758 bcf , occurred in march 1996 and was accompanied by a february average price of $ 4 . 41 and a march average of $ 3 . 00 at the henry hub . that spring , however , us productive capability was nearly 4 . 0 bcf per day greater than it is today , winter power generation demand was lower , and there were about 4 . 5 million fewer residential and commercial gas customers in the united states . market fundamentals in cera  , s view still support gas prices above those of resid , which as of this writing is pricing in the $ 4 . 75 - $ 5 . 00 per mmbtu range . warm weather throughout november and into december could reverse this relationship , but a warm october alone is insufficient , and any cold weather within the next few weeks will quickly tighten the slack that has temporarily come into the market . cera  , s price outlook for november - - an average of $ 5 . 50 at the henry hub - - stands for now . * * end * * follow url for pdf version of this alert with associated table . cera &#x27; s autumn 2000 roundtable event dates and agendas are now available at http : / / www . cera . com / event account changes to edit your personal account information , including your e - mail address , etc . go to : http : / / eprofile . cera . com / cfm / edit / account . cfm this electronic message and attachments , if any , contain information from cambridge energy research associates , inc . ( cera ) which is confidential and may be privileged . unauthorized disclosure , copying , distribution or use of the contents of this message or any attachments , in whole or in part , is strictly prohibited . terms of use : http : / / www . cera . com / tos . html questions / comments : webmaster @ cera . com copyright 2000 . cambridge energy research associates
</pre>

## Record 010366

**Label:** `benign`

<pre>
dale nesbitt greg , dale nesbitt is a consultant who develops pricing models ( spot and fwd ) prices for e - commerce sites . he will be in houston in the beginning of july . any interest in meeting him ? vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 06 / 28 / 2000 05 : 24 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - vkaminski @ aol . com on 06 / 11 / 2000 03 : 17 : 23 pm to : vkamins @ enron . com cc : subject : dale nesbitt o : cc : subject : re : follow up vince : thanks for your help in this matter . i dont want to be a bother to you . i know you are doing your best to put this together as a go between . as you might suspect , i am in a hurry to put together the right hearing at enron because marketpoint is just now being completed - - u . s . and world oil and gas and north american electricity . we have just signed up our first web provider ( e - acumen . com ) , who is preparing to vend our north american electric generation data base over their website . i believe we are an integral part of their offering . it wont be long before marketpoint needs the capitalization to meet our growing customer needs professionally and quickly , particularly when we sign up one or more vertical portals to vend or offer fundamental forward projections from our models . i a loath to do so without the capitalization and staffing we need . also , i am loath to do so without the market reach that a partner like enron could render instantly available . i also would be eager during my next trip to houston to continue the discussion with you regarding how marketpoint might benefit enron directly . i plan to be there the last week in june . thanks again for all your help and support . dale
</pre>

## Record 010367

**Label:** `benign`

<pre>

&gt; They weren&#x27;t partitioned in any particular scheme - I think I&#x27;ll write a
&gt; reshuffler and move them all around, just in case (fwiw, I&#x27;m using MH 
&gt; style folders with numbered files - means you can just use MH tools to 
&gt; manipulate the sets.)Freak show. Obviously there _was_ some sort of patterns to the data:Training on Data/Ham/Set1 &amp; Data/Spam/Set1 ... 1798 hams &amp; 1546 spams
      0.779   0.582
      0.834   0.840
      0.945   0.452
      0.667   1.164
Training on Data/Ham/Set2 &amp; Data/Spam/Set2 ... 1798 hams &amp; 1547 spams
      1.112   0.776
      0.834   0.969
      0.779   0.646
      0.667   1.100
Training on Data/Ham/Set3 &amp; Data/Spam/Set3 ... 1798 hams &amp; 1548 spams
      1.168   0.582
      1.001   0.646
      0.834   0.582
      0.667   0.453
Training on Data/Ham/Set4 &amp; Data/Spam/Set4 ... 1798 hams &amp; 1547 spams
      0.779   0.712
      0.779   0.582
      0.556   0.840
      0.779   0.970
Training on Data/Ham/Set5 &amp; Data/Spam/Set5 ... 1798 hams &amp; 1546 spams
      0.612   0.517
      0.779   0.517
      0.723   0.711
      0.667   0.582
total false pos 144 1.60177975528
total false neg 101 1.30592190328(before the shuffle, I was seeing:
total false pos 273 3.03501945525
total false neg 367 4.74282760403
)For sake of comparision, here&#x27;s what I see for partitioned into 2 sets:Training on Data/Ham/Set1 &amp; Data/Spam/Set1 ... 4492 hams &amp; 3872 spams
      0.490   0.776
Training on Data/Ham/Set2 &amp; Data/Spam/Set2 ... 4493 hams &amp; 3868 spams
      0.401   0.491
total false pos 40 0.445186421814
total false neg 49 0.633074935401more later...Anthony

</pre>

## Record 010368

**Label:** `benign`

<pre>
eol wti maket maker simulation model stinson , i add the total p / l due to contract rollover . when the number of trades is large and the spread is not too small , the model prints a lot of money , dominated by those trade earning the half of bo spread . i also wrote an explaination about the model on the front page . i think we are ready to deliever the model v . 1 . the next step is to incorporate the intra - day market movement by using high and low prices into the pricing . i will call you on monday . happy thanksgivings ! zimin
</pre>

## Record 010369

**Label:** `benign`

<pre>
managing director and vice president elections the managing director prc committee met this week to elect individuals to managing director and vice president positions . these employees are recognized as outstanding contributors to the organization , whose individual efforts have been instrumental in the continued success and growth of the company . we are pleased to announce the election of the following new managing directors and vice presidents . please join us in congratulating these individuals on their new appointments . managing director  ) commercial phillip k . allen , ena ( ews ) west gas trading - houston franklin r . bay , ebs entertainment on demand - houston timothy n . belden , ena ( ews )  ) west power trading - portland michael r . brown , eel  ) executive - london christopher f . calger , ena ( ews ) west power origination - portland joseph m . deffner , ena ( ews ) treasury &amp; funding - houston timothy j . detmering , ena ( ews ) corporate development - houston william d . duran , ena ( ews ) generation investments - houston robert s . gahn , ees commodity structuring - houston kevin c . garland , ebs broadband ventures - houston ben f . glisan , jr . , corporate  ) global equity markets - houston robert e . hayes , ets comm marketing - houston phillip r . milnthorp , ena ( ews ) canada origination &amp; trading - calgary managing director  ) commercial support sally w . beck , enw ( ews ) energy operations management - houston fernley dyson , eel finance &amp; support services - london vice president  ) commercial gregory adams , ees mmc management - houston robert bayley , eel - uk origination  ) london jack d . boatman , ets market development  ) houston rhenn cherry , ees assets / labor  ) houston niamh clarke , egm ( ews ) liquids trading  ) london peter crilly , eel - uk origination  ) london derek j . davies , ena ( ews ) canada origination  ) calgary mark d . davis , jr . , ena ( ews ) east power trading  ) houston charles delacey , corporate finance  ) houston paul devries , ena ( ews ) canada origination  ) toronto christopher h . foster , ena ( ews ) west power trading  ) portland jeffrey f . golden , ees corporate development  ) houston michael d . grigsby , ena west gas trading group - houston troy a . henry , ees bundled sales - heavy industrial  ) houston rogers herndon , ena ( ews ) east power trading  ) houston james w . lewis , ees underwriting  ) houston christopher mahoney , egm ( ews ) liquids trading  ) london andrew marsden , ebs broadband ventures  ) london john mcclain , ebs broadband wholesale origination  ) houston kevin j . mcgowan , egm ( ews ) american coal  ) houston albert e . mcmichael , jr . , ena ( ews ) gas commodity structuring  ) houston ermes i . melinchon , central america origination  ) houston steven r . meyers , ees consumption  ) houston lloyd d . miller , ena ( ews ) portfolio management  ) houston michael a . miller , wind development / execution - general administration  ) houston marcello romano , ebs eel - broadband trading  ) london david a . samuels , enw ( ews ) enrononline - houston per a . sekse , egm ( ews ) global risk markets  ) new york edward s . smida , ebs video on demand  ) houston mark tawney , egm ( ews ) weather trading  ) houston jon thomsen , ebs business development  ) latin america / canada  ) portland barry l . tycholiz , ena ( ews ) west gas origination - houston frank w . vickers , ena ( ews ) east gas origination  ) houston amit walia , corporate , corporate development  ) houston william white , ebs global bandwidth risk mgmt  ) houston jonathan whitehead , eel ea trading  ) japan mark whitt , ena ( ews ) west gas origination  ) denver john a . zufferli , ena ( ews ) canada power trading - calgary vice president  ) commercial support beth apollo , eel financial operations executive  ) london marla barnard , ebs human resources  ) houston karen l . denne , corporate , public relations  ) houston georganne m . hodges , ena ( ews ) trading , origination &amp; power plant accounting  ) houston phillip lord , eel transaction support  ) london peggy mahoney , ees marketing  ) communication  ) houston steven montovano , corporate , government &amp; regulatory affairs  ) dublin laura scott , ena ( ews ) canada accounting  ) calgary richard c . sherman , ena ( ews ) transaction support  ) houston gregory w . stubblefield , ees financial planning &amp; reporting  ) houston dennis d . vegas , calme international public relations  ) houston vice president  ) specialized technical sami arap sobrinho , esa ( ews ) legal  ) houston merat bagha , ebs sales engineering  ) houston justin boyd , eel legal  ) london mary nell browning , ebs legal  ) london jonathan chapman , eel legal  ) london robert d . eickenroht , corporate , legal  ) houston mark evans , eel legal  ) london david forster , enw ( ews ) enrononline  ) houston janine juggins , eel tax  ) london peter c . keohane , ena ( ews ) canada legal  ) calgary pinnamaneni v . krishnarao , ena ( ews ) research group  ) houston travis c . mccullough , ena ( ews ) finance origination , mergers / acquisitions  ) houston michael popkin , esa ( ews ) sa - risk management / network integration  ) houston elizabeth a . sager , ena ( ews ) physical trading  ) houston richard b . sanders , ena ( ews ) litigation  ) houston john w . schwartzenburg , eecc legal  ) houston michael d . smith , ees legal  ) houston marcus vonbock und polach , eel legal  ) london jay c . webb , enw ( ews ) enrononline systems  ) houston vice president  ) technical donald r . hawkins , ets quality management  ) houston john r . keller , ets engineering &amp; construction  ) houston
</pre>

## Record 010370

**Label:** `benign`

<pre>
you must have arrived . . . . if you &#x27; re being mentioned in the economist ( in the first article ) . - r enron is the topic of the estrategy brief . good critique of houston .
</pre>

## Record 010371

**Label:** `benign`

<pre>
start date : 1 / 5 / 02 ; hourahead hour : 11 ; start date : 1 / 5 / 02 ; hourahead hour : 11 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002010511 . txt
</pre>

## Record 010372

**Label:** `benign`

<pre>
&gt; So Eugen, how many of your homo friends have -had- 3k lovers?
&gt; 
&gt; In fact, thats a general question for FoRK proper.Uh, zero.  I&#x27;m sort of offended at having to take this question seriously,
like being black and having to actually explain that black people don&#x27;t
all sing and dance.  I&#x27;d guess that gay men compared to straight men have
a linearly greater number of sexual partners on the order of 1.5-2X.  But
then again, it not a monolithic or homogeneous community.  Who knows?3K is utter shite.- Lucas

</pre>

## Record 010373

**Label:** `benign`

<pre>

Theo Van Dinter said:&gt; &gt;         nonspam-theo.log
&gt; 
&gt; Hmmm.  I did re-run mass-check and resubmit...  I sort the log by score,
&gt; so the timestamp is at the end:ah, OK.  didn&#x27;t see that.--j.
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-devel mailing list
Spamassassin-devel@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-devel
</pre>

## Record 010374

**Label:** `benign`

<pre>
Well, I&#x27;ve used the check-the-modify-time cache trick for files in
many places (not just exmh) so some part of me certainly thinks it
is effective.  However, it occurred to me that if we do checkpoint
state, then aren&#x27;t we modifying the sequences file for the current
folder on every message read?  Perhaps we look at the sequences file
more than once per message view?  Just idle speculation - we can
stick in some time calls to find out how expensive things are.Someone asked about increasing the time resolution in the exmh log.
We could make that conditional on some support available in 8.3 -
Tcl has had &quot;clock seconds&quot; (like gettimeofday) and &quot;clock clicks&quot;
(high resolution timer) for some time.  But in 8.3 we&#x27;ve calibrated
clock clicks values to microseconds.  It is still only useful for
relative times, but each call to Exmh_Log could emit the microsecond
delta since the last log record.  Of course, we are measuring all
the overhead of taking the log record, etc.  I&#x27;ll try it out.&gt;&gt;&gt;Chris Garrigues said:
 &gt; &gt; From:  Brent Welch 
 &gt; &gt; Date:  Wed, 28 Aug 2002 10:32:42 -0700
 &gt; &gt;
 &gt; &gt; 
 &gt; &gt; &gt;&gt;&gt;Robert Elz said:
 &gt; &gt;  &gt; Mh_Sequence also goes and rereads the files (.mh_sequences and the
 &gt; &gt;  &gt; context file) but I&#x27;m not sure how frequently that one is called.
 &gt; &gt; 
 &gt; &gt; In some places I maintain caches of files by checking their modify
 &gt; time,
 &gt; &gt; but the sequence files are soo small that by the time you stat them to
 &gt; &gt; check their date stamp, you could just read them again.
 &gt; 
 &gt; Do you really think this is true?  I added a modify time check thinking
 &gt; that 
 &gt; it would make an improvement since we were reading it a *lot* more times
 &gt; in 
 &gt; the new code because we&#x27;re trying to use the sequences.
 &gt; 
 &gt; On the other hand, the sequences files are probably being read out of
 &gt; cache 
 &gt; when that happens anyway.
 &gt; 
 &gt; Even with a small file, I&#x27;d think that the time taken to do a 
 &gt; [file mtime $filename] would be worth it.  My code is in proc
 &gt; MhReadSeqs.
 &gt; 
 &gt; Chris
 &gt; 
 &gt; -- 
 &gt; Chris Garrigues                 http://www.DeepEddy.Com/~cwg/
 &gt; virCIO                          http://www.virCIO.Com
 &gt; 716 Congress, Suite 200
 &gt; Austin, TX  78701		+1 512 374 0500
 &gt; 
 &gt;   World War III:  The Wrong-Doers Vs. the Evil-Doers.
 &gt; 
 &gt; --
Brent Welch
Software Architect, Panasas Inc
Pioneering the World&#x27;s Most Scalable and Agile Storage Network
www.panasas.com
welch@panasas.com_______________________________________________
Exmh-workers mailing list
Exmh-workers@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-workers
</pre>

## Record 010375

**Label:** `benign`

<pre>
review : cook : case grammar applied walter a . cook . s . j . ( 1998 ) &quot; case grammar applied &quot; a publication of the summer institute of linguistics and the university of texas at arlington , 1998 , 271 pages reviewed by tania avgustinova , university of saarland . synopsis the book is intended as a companion volume to &quot; case grammar theory &quot; ( 1989 ) by the same author , and is devoted to the application of the model developed in this earlier publication to english text analysis . this in particular means that the main stress of the present work is on methodological issues , which are presented on an extended textual analysis of hamingway &#x27;s &quot; the old man and the sea &quot; . the actual goal of the discussed monograph is twofold : for the grammar - to present a method for sentence semantics which describes the meaning underlying each simple sentence ; for the lexicon - to present a method for further defining each sense of each verb / predicate in terms of semantic classes ( case-frame - based typology ) . each clause in its underlying structure is reduced to a kernel sentence which is defined as a simple complete active-voice affirmative statement . all texts are reduced to a sequence of kernel sentences the model used is the case grammar matrix model . it presents a clear predicate-argument structure , builds a lexicon which distinguishes various verb senses , and not only describes arguments occurring in the text , but through covert roles , describes implicit arguments . this model is supplemented by the use of conceptual graphs , following sowa ( 1984 ) . each verb type has a generalised conceptual graph to indicate the predicate-argument structure ; and each example in the text contains the canonical graph of that sentence using the verb and nouns as concepts , and case labels as the verb-to - noun relations . the book is organised in the following way . chapter 1 ( pp . 1-54 ) presents the case grammar matrix model in summary form and introduces conceptual graph representation . the next four chapters treat verbs / predicates in four distinguished semantic domains . chapter 2 ( pp . 55-90 ) deals with the basic domain that includes all state , process , and action verbs which use only the agent and object cases . chapter 3 ( pp . 91-126 ) deals with the experiential domain , the domain of sensation , emotion , cognition , and communication . it involves state , process , and action verbs which include an experiencer case in their descriptions . chapter 4 ( pp . 127-42 ) deals with the benefactive domain , the domain of possession and transfer of property , and describes state , process , and action verbs that include a benefactive case . chapter 5 ( pp . 143-82 ) deals with the locative domain , the domain of physical location and movement , and describes state , process , and action verbs that include a locative case . chapter 6 ( pp . 182-220 ) deals with other elements involved in the logical representation of sentences , including tense , aspect , modals , performatives , and negatives , showing how these elements may be included in the logical structure , and ending with a sample sentence parse using case grammar . chapter 7 ( pp . 221-46 ) summarises the analysis of more than 500 examples in chapters 2 through 5 and demonstrates the verbal hierarchy expressed by the twelve cells of the case grammar matrix , organised by verbal domain , verb type , and argument structure . each of the verb types is described together with its conceptual graph , its frequency of occurrence , its subtype , and its defining characteristics . the appendix to the text contains an alphabetical lexicon , listing all of the verbs / predicates in the examples together with their case frames ( pp . 247-52 ) , and a case lexicon , with the verbs sorted by case frame together with references for each verb to the pages where the use of the verb is exemplified ( pp . 253-60 ) . finally , there is a list of references ( pp . 261 - 6 ) , and an index ( pp . 267-71 ) . critical evaluation case grammar ( cg ) works with labelled predicate-argument structure , and thus , in its core , belongs to the dependency grammar paradigm . cg develops a semantic valence system that describes the logical form of a sentence in terms of a central predicate ( usually and typically a lexical verb , but also a predicate adjective , a predicate noun , or a predicate adverb ) and a series of case-labelled arguments ( nominal , adverbial ) required by the meaning of that predicate . so , the type of case considered in the book is &#x27; governed case &#x27; , and in fact , nothing is said about the way cg model would treat &#x27; concordial case &#x27; - cf . , e . g . , blake ( 1994 ) for a detailed discussion of these notions . there is no case concord in english and , hence , the challenges posited by &#x27; concordial case &#x27; are trivially out of the scope of the presented analysis ( which is based exclusively on english data ) . the ambition of the proponents of cg is to develop a semantic interpretation system that is universal across languages , and not tied to the syntax of any particular sentence . on the basis of the presented extensive data analysis it is claimed that the five case labels used in the work ( i . e . agent , object , experiencer , benefactive , and locative ) are necessary and sufficient for the description of all the verbs / predicates in the language ( in this case english ) . the possibility of creating different lists of cases is left open , whereby full translatability is theoretically expected between any consistent list of cases and the one employed in the cg matrix model . both the predicate and its arguments are viewed as concepts ( i . e . the conceptual universe is made up of verbs which describe states or events , and nouns which describe things ) , while the case role labels indicate relations ( which arguments bear to their predicates ) . cg is written in conceptual graph format by placing the concepts ( predicates , arguments ) in boxes and relations ( case roles ) in circles . the arrows in the notation point away from the predicate which is the source of the case relations . an advantage of such an approach is the possibility of defining the default position of the lexical predicate in its case frame , i . e . with respect to the arguments it governs . in the discussed book , a fairly credible ontology of predicators is achieved by hierarchically sorting them according to domain as basic , experiential , benefactive , locative , ( and possibly ) time , and within each domain as state , process , action . further sub-classification of the predicates is based on the number or the position of the arguments . the resulting hierarchical taxonomy is similar to a thesaurus in which all entities are organised into semantic domains . the organisation of the semantic domains is worked out in detail and with precision . the question of case inventory is central to cg , as well as to any theory working with the notion of case . also methodologically , a clear distinction must be made between essential cases , which are required by the meaning of the predicate , and modal case , which are mainly adverbial adjuncts . only essential cases can be used for describing predicates . despite of the lack of universal agreement on the number of case role labels or the way in which they are defined , the author gives a clear step-by step method , accompanied by various concrete tests , how to simplify in practice the case assignment . thus , the labelling is deferred until three basic questions are answered : how many arguments are required by the verb ? what verb type - state , process , or action - is in the structure ? to what semantic domain does the verb belong ? then , the naming of the arguments can be simplified by a set of principles , in combination with a set of tactics for the formation of case frames . within case frames , cases are listed left-to - right according to a subject choice hierarchy ( agent - experiencer - benefactive - object - locative ) which is merely a generalisation covering the unmarked choice . marked choices which violate the subject choice hierarchy are indicated in the lexicon by changing the order of cases in the case frame . possible variations involve &quot; equatives &quot; ( in copular constructions ) , regarded in this model as double - object frames in the basic domain , and rank shifts in the subject choice hierarchy . in the lexicon , predicators are classified according to case frames . the case frame is understood as a configuration of one to three cases that are required by the meaning of the verb ( or more generally , the predicate ) . let us remind , however , that , in lexical semantics research , cases are known where the frame would contain up to five slots . a famous example is the verb &#x27; to rent &#x27; ( russian : arendovat &#x27; - cf . apresjan ( 1974 ) p . 134 ) involving the following arguments : ( 1 ) who , ( 2 ) what , ( 3 ) from whom , ( 4 ) for how much , ( 5 ) for how long . special attention is devoted to the possibility of lexicon organisation in terms of derivations intended both to represent linguistic generalisations and to simplify the lexicon ( sections 1 . 13 - 1 . 15 ) . however , the method followed in the work is listing each item separately and supplementing the lexicon with redundancy rules that relate these lexical entries to each other . also , each sense of each predicate is treated as a separate item with its own case frame . in order to set the guidelines for applied cg textual analysis , a concise introduction to the principles of lexical decomposition and to the interpretation of covert case roles is given . lexical decomposition is understood as the process of analysing predicates as consisting of more basic atomic predicates . with some sentences this is unavoidable for determining the actual predicate-argument structure . covert case roles , which are required by the meaning of the predicate , are sometimes ( as in the case of partially covert ( deletable ) case roles ) or always ( as in the case of totally covert ( coreferential and lexicalised ) case roles ) missing in the surface structure . since the cg analysis advocated for in this book maintains the obligatory object hypothesis , covert roles assume greater importance . in all cases where the object role can be sometimes deleted , or can be coreferential with another role , or can be lexicalised into the predicate , a deeper analysis is needed to find the obligatory object . certainly , the lexicalisation of the manifestation of propositional , essential roles is of primary interest in the context of revealing the central predicate in a sentence . the assumption that a predicate , even with covert ( hidden ) case role , has to be defined in terms of its full complement of case roles requires a clear distinction between deletable , coreferential and lexicalised roles . the author offers in this respect not only theoretical background but also concrete tests , procedures and instructions to guide and facilitate practical analysis . two methodological principles are postulated ensuring that all conceptual relations flow from the central verb , and that deletable roles are included in case descriptions . a major asset of the book is , with no doubt , the extensive textual analysis performed with precision , consistency and conformity to the postulated principles and theoretical assumptions . the limits of the approach are realistically recognised by the author , and are stated explicitly in the appropriate places throughout the presentation . the reader will find a well-developed and detailed ontology of predicates , which covers not only verbs but also predicative adjectives , predicative nouns and predicative adverbs . the most important linguistic phenomena are considered in a systematic and easy-to - follow way . this makes the book a valuable guide to a practical sentence analysis , as well as a useful reference material for research purposes and computer applications . references apresjan , jurij d . 1974 : leksicheskaja semantika . sinonimicheskie sredstva jazyka . moskva : nauka blake , barry j . 1994 : case . cambridge textbooks in linguistics . cook , walter a . , s . j . 1989 : case grammar theory . washington , d . c . : georgetown university press . sowa , john f . 1984 : conceptual graphs : information processing in mind and machine . reading , mass . : addison - wesley . = = = = = = = = = = = = = = = tania avgustinova , ph . d . computational linguistics , university of saarland postfach 151150 , 66041 saarbruecken , germany tania @ coli . uni-sb . de , http : / / www . coli . uni-sb . de / ~ tania / ( + 49 ) ( 681 ) 302 . 4504 ( phone ) ( + 49 ) ( 681 ) 302 4115 ( secretary ) ( + 49 ) ( 681 ) 302 . 4700 ( fax )
</pre>

## Record 010376

**Label:** `benign`

<pre>

CNET Handhelds Newsletter
Downloads
 All CNET
 The Web
Â  
Top-selling handhelds:Toshiba Pocket PC e310
Palm m515
Handspring Treo 90
Compaq iPaq H3835
Palm Vx
Handspring Treo 270
Sony CLIE PEG-NR70V
Sony CLIE PEG-T615C
Palm m130
Toshiba Pocket PC e740Find the latest prices for these and other handhelds on
				CNET Shopper.com.
			Handspring Eyemodule2
Though it&#x27;s a little expensive, the Eyemodule2 is a well-designed camera attachment that offers acceptable image quality
Check latest pricesStart-up nears launch for Hiptop handheldStart-up shrinks PC to palm size
Most popular Palm downloadsMost popular Pocket PC downloads
Top 5 handheldsEditors&#x27; Choice handheldsNewsProduct reviewsWireless handheldsSoftwareDownloadsJuly 9, 2002
  
When reviewing the Toshiba Pocket PC e740, I spent a lot of time trying to understand its XScale processor. A benchmark provided by Intel seems to indicate that it performs certain operations faster than previous Pocket PCs, but in hands-on use we didn&#x27;t find any significant difference in performance. I&#x27;m still not certain whether I should attribute performance limitation to the operating system (which hasn&#x27;t been optimized for the new chips), applications (which likewise haven&#x27;t be optimized), or simply that the new chip isn&#x27;t that much better than the old StrongARM. But regardless, the e740 is an exceptional Pocket PC and one I don&#x27;t hesitate to recommend to those looking for a high-powered PDA. 
					Colin Duwe
					Associate Editor
					CNET Electronics
              		In Palm OS:Â Most	Popular Titles
Week ending June 111Noah Lite English dictionary2DopeWars (Palm)
3Blocks
4Palm Desktop5SketcherAll popular Palm OS downloads
In Pocket PC:Â Most Popular TitlesWeek ending June 111SimCity20002TV Remote Controller3GigaBar4ActiveSync
5Syntact Gamebox (Pocket PC)
All popular PocketPC downloads
Must-have Palm OS games: Newly updated
We&#x27;ve listened to reader suggestions, tested the latest games to be released, and now we&#x27;re ready to present our current list of favorite games for your Palm.
							Read the full story
Toshiba Pocket PC e740
Powered by Intel&#x27;s new 400MHz XScale processor and boasting integrated Wi-Fi connectivity, Toshiba&#x27;s new PDA is an impressive mobile machine. We got hands on with it to test the new chips and its myriad features. See how it did.
							Read the review Â |Â 
							Check latest price
More handhelds reviews &amp; features 
Uninstall Hack 1.59
File size: 36.6K
									License: Free to try; $7.00 to buy
									Uninstall Hack is designed to help keep your Palm device running smoothly by monitoring application installations and removing all traces of an
application during the uninstall process. Uninstall Hack also removes
leftover files from applications removed using the standard Palm OS delete
tool, leaving your Palm device clean and trouble-free.
									
Quik Budget 3.2
All Palm OS editors&#x27; picksPictPocket 2.0
File size: 1.09MB 
									License: Free to try; $16.95 to buy
									Take your pictures with you on your Pocket PC. PictPocket allows you to
view and edit several types of digital image files including MPEG-1 and MPEG-2 video, BMP, 2BP, JPG, JPE, JPEG, GIF, and many more, making this a truly mobile multimedia solution.
		All Windows CE/PocketPC editors&#x27; picks
Live Tech Help. Submit your question now.
CNET News.com: Top CIOs on the future of IT.
Find a job you love. Over 1 million postings
ZDNet: This IT director has had enough of Microsoft
May Editors&quot; Choice Award: Pioneer&quot;s Home Theater System HTS - 910DV
The e-mail address for your subscription isÂ qqqqqqqqqq-cnet-newsletters@spamassassin.taint.org
UnsubscribeÂ |
Â Manage My Subscriptions
Â |Â FAQÂ |
Â AdvertisePrice comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          
</pre>

## Record 010377

**Label:** `benign`

<pre>
eastrans nomination change effective 9 / 13 / 00 deliveries to eastrans continue to be 30 , 000 mmbtu / dy the redeliveries will be : 8500 from fuels cotton valley 21500 to pg &amp; e
</pre>

## Record 010378

**Label:** `benign`

<pre>
TimH:&gt;Its possibly a different Shauna Lowery: The one I&#x27;m talking about is 
&gt;about 7 foot tall and presents &quot;Animal Hospital&quot; or something like 
&gt;that.
Ahhh, I&#x27;m getting my Lowry&#x27;s(sp) mixed upI was thinking of Lowry Turner of DIY SOSabout 3 feet shorterDaveTo unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 010379

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-3,8688970,215/
Date: 2002-10-09T03:15:21+01:00PM calls for major arms deal to save Stormont.

</pre>

## Record 010380

**Label:** `benign`

<pre>
california update 6 / 21 / 01 executive summary ? dwr contracts being negotiated ? california legislature comment on plan b long term contracts sources report that the state &#x27; s lawyers are currently examining how to break the recently negotiated long term power contracts . assemblyman fred keeley has directed his staff to go through and look for any loopholes and sources also believe that the state is looking for ways to &quot; hold the generators to the contracts they want to keep , but break those contracts that they want to break . &quot; sources gathered the following information on plan b through private interviews with california legislatures sen . john burton and assembly speaker robert hertzberg . speaker robert hertzberg : ? speaker hertzberg has spent most of his time lately on the budget , but continues to make efforts related to the plan b . hertzberg is very aware how unlikely it is that he will succeed in putting any plan through the legislature , particularly the senate . ( he believes it will be possible to put a plan b through the assembly ) . ? hertzberg is personally committed to at least attempting to put a plan b through the legislature . this is because he is close to business and wants to see socal saved . he &quot; wants a win under his belt before he leaves the senate next year &quot; so that he can take that win into whatever he does next . davis has laid the burden of bailing out socal on hertzberg . hertzberg is determined to put a piece of legislation on the floor . however , he does not , at this time , know when this will happen , nor does he know what the share of the dedicated rate component will be for businesses and ratepayers , which remains a key sticking point . ? when asked about plan b &#x27; s chances of passing the senate , hertzberg responded that , &quot; miracles can happen . &quot; ? hertzberg defended his idea of setting aside a trust as part of plan b for the generators to litigate over . he stated that his bankruptcy attorney believes that it will work , despite what goode ( the governor &#x27; s attorney ) has said . sen . john burton : ? burton is aware that hertzberg is trying to put together plan b legislation and when asked about hertzberg &#x27; s efforts , burton stated that in the senate &quot; plan b has no republican votes , and there are , at a minimum , 6 democrats that will vote against it . &quot; burton said that for a plan b bailout to pass the senate , it would have to have three elements : ? businesses would pay the entire dedicated rate component . ? the edison parent company would have to give the state $ 1 b . ? all creditors would have to take a 30 % haircut . ? burton wants senator bowen to hold hearings on the plan b that will run for at least 3 days , then have a &quot; long caucus . &quot; at that point the senate will either &quot; hold an up - or - down vote on whatever comes from the assembly or add amendments [ stating the three provisions above ] . &quot; burton wants &quot; all senators to know exactly what they &#x27; re voting for or against . &quot; ? burton stated that he would &quot; bet against &quot; a plan b passing . &quot; this is not gonna happen , &quot; he stated . burton believes that a bailout deal would be bad for the democratic party .
</pre>

## Record 010381

**Label:** `benign`

<pre>
cgsw10 program announcing cgsw10 the 10th comparative germanic syntax workshop , organised jointly by the catholic university of brussels , and the p . j . meertens institute for dialectology ( amsterdam ) will take place in brussels on january 17-19 , 1995 . the program tuesday january 17 18 : 00 : registration and reception at conference venue : vrijheidslaan 17 , b-1080 brussels ( metro simonis ) wednesday , january 18 10 : 00 - 10 : 30 : coffee and formal opening 10 : 30 - 11 : 00 : t . taraldsen ( tromso ) case , subject-orientation and agreement in icelandic and faroese 11 : 00 - 11 : 30 : j . zwarts ( utrecht ) simple and complex prepositions and p - stranding in dutch 11 : 30 - 12 : 00 : coffee 12 : 00 - 12 : 30 : h . bennis ( leiden ) , f . beukema ( leiden ) &amp; m . den dikken ( vu , amsterdam ) getting verb movement 12 : 30 - 14 : 00 : lunch 14 : 00 - 14 : 30 : s . barbiers ( leiden ) an antisymmetric analysis of pp extraposition 14 : 30 - 15 : 00 : t . hoekstra ( leiden ) &amp; j . rooryck ( leiden ) dynamic and stative have 15 : 00 - 15 : 30 : e . haeberli ( geneve ) morphological case , pro and word order 15 : 30 - 16 : 00 : coffee 16 : 00 - 16 : 30 : e . - p . kester ( utrecht ) adjectival inflection and licensing conditions on null nouns 16 : 30 - 17 : 00 : e . hoekstra ( meertens , amsterdam ) &amp; m . den dikken ( vu , amsterdam ) parasitic participles thursday , january 19 10 : 00 - 10 : 30 : j . bobaljik ( mit ) the morphological determination of germanic syntax 10 : 30 - 11 : 00 : d . buering ( koeln ) &amp; k . hartmann ( frankfurt ) extraposition , qr , and association with focus 11 : 00 - 11 : 30 : coffee 11 : 30 - 12 : 00 : e . groat ( harvard ) overt and null expletives in germanic 12 : 00 - 12 : 30 : s . menuzzi ( leiden ) on double object constructions in icelandic 12 : 30 - 14 : 00 : lunch 14 : 00 - 14 : 30 : m . everaert ( utrecht ) binding and the inert / active distinction 14 : 30 - 15 : 00 : a . henry ( ulster ) v2 phenomena in belfast english 15 : 00 - 15 : 30 : coffee 15 : 30 - 16 : 00 : f . weerman ( utrecht ) morphological case and null case 16 : 00 - 16 : 30 : j . - w . zwart ( groningen ) the composition of auxiliaries and the placement of participles in dutch travel and hotel information : a file with travel and hotel information will be sent to you upon simple request ( e-mail or coupon below ) . registration and conference lunches : advance registration : $ 20 / bef 700 ( $ 10 / bef 350 for students ) on - site registration : $ 30 / bef 1 , 000 ( $ 20 / bef 700 for students ) advance registration can be made by sending in the coupon below , and by forwarding the required amount into postal account # 000-0536088 - 66 of ku brussel , vrijheidslaan 17 , b-1080 brussels . please mention that you are registering for cgsw10 ; do not forget to add bank charges to the above amounts . the deadline for advance registration is january 9 , 1995 . there are a number of restaurants in the immediate vicinity of the university ; however , given any sizable number of conference participants , this may lead to substantive overcrowding and consequent delays . for this reason , the organisers will arrange for a caterer to provide two lunches on the university premises . since it is vital that we should know in advance how many lunches to order , you must book your lunch in advance by sending in the coupon below . for the lunches , no advance payment is required . cut here - - - - - - name : address : e - mail : 0 i will register on-site 0 i have transferred the registration fee in the amount of 0 bef 1 , 000 0 bef 750 ( student rate ) to postal account # 000-0536088 - 66 . 0 i want to order a conference lunch for wednesday january 18 at bef 400 0 i want to order a conference lunch for thursday january 19 at bef 400 0 please send me hotel and travel information mail , fax , or e-mail this coupon to : ku brussel cgsw10 ( g . vanden wyngaerd ) vrijheidslaan 17 b-1080 brussel belgium tel + 32 2 412 4349 fax + 32 2 412 4200 email : haaam08 @ cc1 . kuleuven . ac . be
</pre>

## Record 010382

**Label:** `benign`

<pre>
third utrecht biannual phonology workshop workshop announcement and call for abstracts third utrecht biannual phonology workshop rene kager &amp; wim zonneveld utrecht institute of linguistics : ots organisers 11-13 june 1998 theme : typology and language acquisition invited speakers : bruce hayes ( ucla ) and joe pater ( ubc ) deadline for abstracts : 1 march 1998 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = it is a standard assumption that the striking structural resemblances between human languages are explained from the common starting point : u . g . the study of the striking resemblances ( and range of differences ) is called ` typology &#x27; . the direct study of the common starting point is that of ` first language acquisition &#x27; . since the introduction of so-called ` constraint-based theories &#x27; , the field of typology and language acquisition is a candidate for a redefinition of its contents and its goals . questions that can be raised inlcude the following : - what is the nature of the common starting point ? is it an unstructured pool of constraints , where the process of language acquisition consists of providing structure ? is it highly structured ( is there a common completely ` unmarked &#x27; , but structured ) point of departure ) , where language acquisition consists of adding markedness ? - is the learning task larger ( although not necessarily more difficult ) than previously imagined ? - to what extent is learning guided by factors of markedness that have an extralinguistic source , e . g . , production and / or perception factors ? - is the methodological process of excluding impossible languages different in constraint-based theories , and if so , how ? - is it possible to imagine combined theories of constraints and traditional parameters , both in the area of ( adult ) typology and language acquisition ? = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = abstracts are requested to have a length of 800 words ( references incl . ) . they will be judged according to the following priority scale : - integration of acquisitional and typology issues - acquisitional issues - typological issues any queries : rene . kager @ let . ruu . nl wim . zonneveld @ let . ruu . nl trans 10 3512 jk utrecht the netherlands fax : 31-30 - 2536000
</pre>

## Record 010383

**Label:** `benign`

<pre>
epe lending - 7 / 26 we &#x27; re going short again - 50 mw - in a lending agreement with el paso for thursday . as we &#x27; ve done the past three days , please reduce the purchase from el paso ( 702181 ) to $ 4 after purchasing elsewhere in the market ( adjust price accordingly if you buy from el paso ) . then sell back to el paso at a zero price . details are as follows . . . . . 702181 - stwbom buys epe pv / hlh 25 mw @ $ 69 702184 - stwbom sells stsw pv / hlh 25 mw @ $ 69 702194 - stsw buys epe pv / hlh 25 mw @ $ 69 if this makes no sense , ask bill or me or a colleague of superior intelligence for clarification . thanks , kate
</pre>

## Record 010384

**Label:** `benign`

<pre>
fw : fyi - - - - - original message - - - - - from : shankman , jeffrey a . sent : monday , november 05 , 2001 6 : 11 pm to : mcconnell , mike ; bowen jr . , raymond ; delainey , david w . cc : lawyer , larry subject : we are asking barclays for 7 days to work out the so 2 inventory , which they are taking to their credit committee tomorrow . we will have a response by noon our time . i &#x27; ll update everyone then . jeff
</pre>

## Record 010385

**Label:** `benign`

<pre>

    Damn, this thing is slick.  Someone seems to have done a very complete QA test on it; yesterday I installed it for the first time on an old Celeron box.  Sure, parts of it were slow, but compared to my more modern machine, everything is.  It was good; a beautiful interface that legions of &#x27;sheep&#x27; can look at and say &quot;Cool; I can understand this&quot; and leave their shackles behind.  :)    I was struck by the massive amount of applications, both KDE and Gnome, intuitively seperated NOT by the Gnome/KDE names, but by their **meanings** instead.  It&#x27;s obvious that someone spent a lot of time improving the usability and graphics to make it more &#x27;international&#x27;; the web browser graphic, for example, has a &#x27;world&#x27; icon with a mouse wrapped around it. Office-apps have familiar pens, paper, and/or calculators involved.    This is a Linux that I can plop down in front of almost anyone, and they can figure it out.    At some point I&#x27;d miss the character of KDE/Gnome, and I&#x27;ll probably &#x27;hotrod&#x27; the graphics setup with my own themes, etc.  But for the wide release, this one&#x27;s IT.  If you get a chance, try this; I think you&#x27;ll be surprisingly pleased.
  
------------------------------------------------------------------------
Brian FahrlÃ¤nder              Linux Zealot, Conservative, and Technomad
Evansville, IN                    My Voyage: http://www.CounterMoon.com
ICQ  5119262
------------------------------------------------------------------------
Just machines, to make big decisions- programmed by fellas with
compassion and vision.  We&#x27;ll be clean when that work is done;
Eternally free and eternally young.  Linux._______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 010386

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85483339
Date: Not suppliedTonight on the Style Network&#x27;s TV show &quot;Area,&quot; my house will be featured 
undergoing a Hawaiiana makeover. Watch it and meet Carla, my daughter, and me. 
It&#x27;ll play Monday at 9:30 pm ET. (If someone can tape it for me, I&#x27;d appreciate 
it, because my cable service doesn&#x27;t get the Style channel. I&#x27;ll send you a new 
T-shirt iron on of a girl and her pet slug. Email mark@well.com.) Link[1] 
Discuss[2][1] http://www.stylenetwork.com/Shows/Area/
[2] http://www.quicktopic.com/16/H/FtMUhwVP3JS6E

</pre>

## Record 010387

**Label:** `benign`

<pre>
position manager for 8 / 1 / 01 it appears that there is a 10 mw transmission schedule missing on peak from pac system border to mid c . this has us out 320 mw at mid c for 8 / 1 / 01 . thanks - ryan
</pre>

## Record 010388

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8613672,159/
Date: 2002-10-06T18:12:48+01:00For those new to the product, Virtools is a production environment (such as 
Director) designed to allow the rapid creation of 3D-interactive 
applications.The second version of Virtools clearly builds upon previous 
releases, keeping a similar look while adding a host of new features that 
greatly improve the final package.

</pre>

## Record 010389

**Label:** `benign`

<pre>
Yannick Gingras wrote:
&gt; Is the use of &quot;trusted hardware&quot; really worth it ?  Does it really make it 
&gt; more secure ?  Look at the DVDs.DVDs don&#x27;t use trusted hardware. As for whether it is worth it, that 
depends entirely on what its worth to secure your software.Cheers,Ben.-- 
http://www.apache-ssl.org/ben.html       http://www.thebunker.net/&quot;There is no limit to what a man can do or how far he can go if he
doesn&#x27;t mind who gets the credit.&quot; - Robert Woodruff

</pre>

## Record 010390

**Label:** `benign`

<pre>
aol instant messenger reconfirmation thank you for registering for the aol instant messenger ( sm ) service ! your registration for screen name dfarmer 770 has been received . you are now one step away from being able to : * communicate instantly - - it &#x27; s fast , easy , fun and free ! * create your own buddy list ( r ) feature - - see when your friends and family are online . * meet new friends in our chat rooms or by searching our member directory . * follow your stocks and news headlines , exchange files and images and much , much more . please reply to this message within 48 hours to complete the registration process . simply click on reply and type &#x27; ok &#x27; as the text of your message so that we can confirm that your e - mail address is valid . confirming your registration is very important - - it ensures that using screen name dfarmer 770 you can use all current and future features of the aim ( sm ) service as well as the following great aol web products : * aol calendar ( sm ) ( aim . aol . com / redirects / aimemail / calendar . html ) * aol hometown ( sm ) ( aim . aol . com / redirects / aimemail / hometown . html ) * my aol . com ( aim . aol . com / redirects / aimemail / myaol . html ) 0 * aol . com ( sm ) personal finance web center ( aim . aol . com / redirects / aimemail / finance . html ) as a security precaution you will not be able to obtain or change your password or update your e - mail address until you confirm your registration . upon confirmation you will receive a welcome message with valuable links to faqs and other helpful information . download the aol instant messenger ( tm ) software from the aol . com ( sm ) web site ( aim . aol . com / redirects / aimemail / download . html ) , if you have not already done so . to use the aim service when you are away from your computer , click here for information about our quick buddy service . again , thank you for registering for the aol instant messenger service ! you received this one - time - only e - mail because you successfully registered for the aim service .
</pre>

## Record 010391

**Label:** `benign`

<pre>
enron in action 8 . 21 . 00 this is the last week of the &quot; who wants to help millions ? &quot; united way 2000 campaign . we are close to the goal , but need your help to reach the top ! if you have not made your contribution , please click here http : / / unitedway . enron . com chairman &#x27; s award nominate your hero today ! the chairman &#x27; s award is an employee - driven program , developed to recognize employees who are outstanding examples of enron &#x27; s core values . if you know someone who deserves to be honored for their practices of respect , integrity , communication and excellence , click here http : / / home . enron . com / . nominations are open now through october 1 . singles soiree join the houston symphony at sambuca , located at 909 texas avenue , for a preview party and find out more about the 2000 - 2001 classical encounters for singles season . the free event will take place on august 23 rd from 6 - 8 p . m . space is limited and reservations are required . call 713 - 238 - 1477 for reservations and more information and to reserve your place ! operation sellout rice owls vs . houston cougars ! discounted tickets for the september 2 football game are now available for enron employees through the signature shop on - line . the game will be held at rice stadium at 7 : 00 p . m . tickets will remain on sale through 3 : 00 p . m . on august 24 for $ 13 per ticket and can be purchased in sets of two or four . to purchase your tickets , click here . for any questions , contact greg grissom at 713 - 345 - 8741 . radio music a free night of comedy ! enron employees have been invited to enjoy a free performance on any thursday theatre at 8 : 30 p . m . or saturday at 10 : 30 p . m . during the month of september . seating is limited and reservations are required . when you call , give your name , the number of people in your party and the date you wish to attend . just mention that you are with enron and your entire party is admitted free ! for reservations , call 713 - 522 - 7722 . wild @ work join jeffrey glassberg , ph . d . , president of the north american butterfly association for lunch , this thursday , brown bag august 24 at 11 : 30 in 3 acl 7 cl . dr . glassberg will discuss butterfly watching , which is on its way toward becoming a more popular activity than bird watching . he will also inform us of activities at the naba butterfly park , a spectacular native plant garden on 100 acres fronting the rio grande river in southernmost texas . please rsvp to teresa nava , 713 - 646 - 7668 . united way sign up now ! mark your calendar for a day of volunteer activity at depelchin children &#x27; s center day of caring and ripley house on september 15 to support united way and make the world a better place . for more information , click here http : / / home . enron . com / cr . to sign up , contact jessica nunez at 713 - 853 - 1918 . energize houston the energize houston golf tournament benefiting the texas children &#x27; s hospital bone marrow transplant unit golf tournament through his grace foundation is scheduled for monday , october 9 th . you can help by volunteering your time to help at the tournament . if interested , please contact jim coffey at 713 - 853 - 5346 or lisa lunz at 713 - 853 - 5634 . for information regarding playing in the tournament go to www . energizehouston . com . 2000 american the american heart walk is a national walking event to increase awareness of the importance of walking as a heart walk heart - healthy exercise and to raise funds to continue the american heart association &#x27; s fight against heart disease and stroke . the event will be held on october 14 at sam houston park . if you would like to participate , please sign up now by calling diana barrero at 713 - 610 - 5093 . hearing screening hear ye ! hear ye ! it &#x27; s time to get your hearing checked ! extra day added ! the screening will be held on tuesday , august 22 nd and wednesday august 23 rd . register now ! cost : $ 10 enron employees &amp; spouses , $ 25 contractors . payment can be made by check or money order to enron corp . ( no cash can be accepted ) . call the health center at 713 . 853 . 6100 to schedule an appointment . the 400 - member enron cycling team raised over $ 500 , 000 for multiple sclerosis through the 2000 msl 50 bike tour from houston to austin .
</pre>

## Record 010392

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;t&quot; == tomwhore   writes:    t&gt; The first pewp...man they prep you for it but northing really
    t&gt; can...Wowzer that stuff is road tar.First kid, eh? ;)No, there&#x27;s no prep for it.  No prep for the fifth either.  If you have
any parenting guidance books, burn them now.Congratulations; kudos and regards to the mum.  It don&#x27;t matter how it
happened so long as everyone&#x27;s ok.Starting today, that&#x27;s three lives that will never be the same.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
Business Innovations Through Open Source Systems: http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)http://xent.com/mailman/listinfo/fork

</pre>

## Record 010393

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8357893,215/
Date: 2002-09-29T00:40:02+01:00It wasn&#x27;t just the lack of wellies that made this protest different - it was 
the mix of the marchers, writes *Euan Ferguson*.

</pre>

## Record 010394

**Label:** `benign`

<pre>
workshop on language change in japan and east asia call for papers workshop on language change in japan and east asia university of sheffield , uk 21st - 23rd may 1999 deadline : all submissions must be received by january 10 , 1999 . this workshop aims to provide a forum for presenting research on language change in japanese and other east asian languages ( chinese , korean ) , putting language change in the individual languages into a broader east asian context . we especially encourage presentations which investigate more than one language . potential topics include , but are not limited to : emergence of vernacular vs classical language , historical phonology , japanese - korean - altaic relationship , historical syntax , neologism , loanwords , english influence , standardisation and the fate of dialects or minority languages , role of kanji , etc . abstracts submitted must represent original , unpublished research . presentations will be 20 minutes long , plus 10 minutes for questions and discussion . please submit : 1 ) a clearly titled 1 page abstract for review . examples and references may be given on a second page . if your paper is accepted , this abstract will be included in the conference handbook . no changes in the title or the authors &#x27; names will be possible after acceptance . 2 ) for each author , one copy of the information form printed at the bottom of this message . please include a self-addressed , stamped postcard for acknowledgment of receipt . notice of acceptance or rejection will be sent by march , 1999 . pre - registration materials and a preliminary programme schedule will also be available in march , 1999 . it is anticipated that a volume based on papers presented at the workshop will be published . send submissions to : workshop on language change in japan and east asia school of east asian studies university of sheffield floor 5 , arts tower western bank sheffield s10 2tn telephone : + 44-114 - 222-8400 fax : + 44-114 - 222-8432 e - mail : t . e . mcauley @ sheffield . ac . uk email submission of abstracts is encouraged . author information form ( one to be filled out completely for each author ) title : topic area : audio - visual equipment requests : full name : affiliation : contact address : email address : contact telephone number :
</pre>

## Record 010395

**Label:** `benign`

<pre>
update on issuance of the dpr the dpr for 11 / 30 / 01 is now complete and has been published to the erv . for the last few days , the production of the dpr has been put on hold due to the increased activity around terminations . positions and var for the dpr will start to be produced for trading day 12 / 10 / 01 and we are planning to produce a full dpr ( inclusive of p &amp; l ) on a weekly basis . please call if you have any questions . best regards shona wilson director , global risk operations x 39123
</pre>

## Record 010396

**Label:** `benign`

<pre>
lexical semantics in context : corpus , inference and discourse esslli-98 workshop on lexical semantics in context : corpus , inference and discourse august 17 - 21 , 1998 a workshop held as part of the 10th european summer school in logic , language and information ( esslli-98 ) august 17 - 28 , 1998 , saarbruecken , germany * * second call for papers * * organizers : johan bos ( saarbruecken ) and paul buitelaar ( brandeis university ) the workshop aims at bringing together research in two complementary fields of semantic analysis that are still too far apart . in order to achieve both a broad and a deep understanding of any given text document , a system needs both advanced acquisition of corpus specific lexical semantic knowledge and powerful inference mechanisms that utilize that knowledge in discourse analysis . given the still relatively limited results within both areas there has been little impetus to combine them . corpus - based extraction of lexical semantic knowledge has only recently become a more feasible task , because of the growing availibility of on-line text documents ; robust corpus processing technologies , such as broad coverage part-of - speech tagging and shallow parsing ; and readily available statistical methods . the various approaches to discourse analysis , originating in such diverse fields as formal semantics , psychology and ai , are in the process of converging into a unified approach to the analysis and representation of the cohesive structure of natural language documents . the intersection between these two fields lies in the application of lexical semantic knowledge to such problems in discourse analysis as anaphora resolution and discourse segmentation . in fact , the benefit will be mutual , because knowledge of discourse structure is helpful to lexical knowledge extraction as well . in summary , large scale domain specific lexical semantic knowledge acquisition can assist in analyzing discourse structures , which in turn can assist in acquiring even more accurate lexical semantic representations for the relevant terms in the domain . further information : to obtain further information please visit the workshop home page at http : / / www . cs . brandeis . edu / ~ paulb / esslli98 . html
</pre>

## Record 010397

**Label:** `benign`

<pre>
the new peoplefinder is here ! ! your participation is required . we provide the tool - the new peoplefinder , you provide the data - ehronline . join us in launching the new peoplefinder . view your information in the new http : / / peoplefinder . enron . com . does your data need updating ? go to http : / / ehronline . enron . com to update your information today . enter changes today in ehronline , view updates tomorrow in peoplefinder ! do your part to make the new peoplefinder an accurate and useful communication tool .
</pre>

## Record 010398

**Label:** `benign`

<pre>
&quot; de dag . proceedings of the workshop on definites &quot; &quot; de dag . proceedings of the workshop on definites &quot; edited by paul dekker , jaap van der does , helen de hoop * * * this collection of original papers on definites presents current research from the netherlands . definiteness , one of the central topics in linguistic research , remains an intriguing subject with many issues unresolved . many of the papers in this collection do not only contribute to the characterization of definites in one particular area of language or logic : they also shed light on issues of the interfaces between semantics , pragmatics , syntax and processing . a quick reminder of the semantic characteristics of ( in ) definites is added to the introduction by jaap van der does . paul dekker &#x27;s paper studies the semantics and pragmatics of the referential interpretation of definites and the specific interpretation of indefinites , using notions of information from dynamic semantic theory . differences in syntactic behaviour ( in particular with respect to scrambling ) between definites and indefinites are studied in relation to their semantic properties by helen de hoop . edith kaan shows that the processing mechanism is not only driven by structure but also sensitive to the ( in ) definiteness of the np involved . a new version of van der sandt &#x27;s presuppositions-as - anaphors theory is presented by emiel krahmer and kees van deemter , dealing particularly well with partial match phenomena between anaphoric and antecedent nps . manuela pinto focuses on the syntactic licensing and interpretation of definite inverted subjects in italian . an extension of the study of ( in ) definites to the domain of temporal measuring nouns is provided by henk verkuyl . in the last paper of the volume , yoad winter presents an analysis of unary distributivity to account for the seemingly polyadic effects in sentences with multiple occurrences of plural definites . * * * copy &#x27;s of &quot; de dag . proceedings of the workshop on definites &quot; cost dfl . 20 , - for members of lot and dfl . 25 , - for others , and are available from the utrecht institute of linguistics ots . if you would like to order a copy , please send an e-mail ( with your name and ( e-mail ) address ) to uil-ots @ let . ruu . nl .
</pre>

## Record 010399

**Label:** `benign`

<pre>
query : international congress of linguists does anyone have information about the next international congress of linguists in paris in 1997 ? who is the contact person ( email address ) ? thank you , dieter stein anglistik iii universitaetsstr . 1 40225 duesseldorf germany stein @ mail . rz . uni-duesseldorf . de
</pre>

## Record 010400

**Label:** `benign`

<pre>
On Wed, 25 Sep 2002, Gordon Mohr wrote:
&gt; In contrast, take a look at this article by Simon J. Wilkie of
&gt; Caltech:Wow, that Wilkie article is the single best explanation I&#x27;ve seen.The open question is whether any analysis before the fact warned the
politicians, or whether the politicians were forewarned and went ahead.  
What did they know and when did they know it?
</pre>

