---
type: DatasetPartition
title: Benign samples - batch 0010
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 1801
record_end: 2000
---

# Benign samples — batch 0010

## Record 001801

**Label:** `benign`

<pre>
Once upon a time, &quot;&quot;Angles&quot; wrote :&gt; Any sage advice on the most painless way to upgrade from old limbo (.92)
&gt; to new limbo (.93)?
&gt; 
&gt; Apt for rpm from the 7.3 days barely works on Limbo1, and the package:
&gt; apt-0.5.4cnc6-dwd2.src.rpm will not compile on the Libbo1 box (I was
&gt; going to use that to dist-upgrade to Limbo2).Well, the 7.3 binary should work as long as you install the &quot;rpm404&quot; (IIRC)
compatibility library. The only problem I have with some rpm 4.1 versions
is that it sometimes hangs at the and of operations (-e, -i, -F or -U) and
the only workaround is to kill it, &quot;rm -f /var/lib/rpm/__*&quot; and try again.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 001802

**Label:** `benign`

<pre>
Ok, I got ALSA installed and there is no static inbetween mp3s like
before which is great!  My setup is digital 4.1 but sound is only coming
from front 2 speakers and subwoofer, rear speakers there is no sound. 
Also alsamixer or aumix are unresponsive as well. LanceOn Wed, 2002-08-28 at 18:09, Lance wrote:
&gt; Thanks for this, I&#x27;m going to give them another try.  One question: How
&gt; do I switch between digital out and analog out with ALSA?  With
&gt; emu10k1-tools it&#x27;s easy enough (emu-config -d for digital, emu-config -a
&gt; for analog)  Is there a similar method with ALSA?
&gt; 
&gt; Lance
&gt; 
&gt; On Wed, 2002-08-28 at 12:00, Matthias Saou wrote:
&gt; &gt; Followup to the story :
&gt; &gt; 
&gt; &gt; I&#x27;ve now made a sub-package of alsa-driver called &quot;alsa-kernel&quot; which
&gt; &gt; contains only the kernel modules, and alsa-driver contains everything else
&gt; &gt; from the original package (device entries, include files and docs).
&gt; &gt; 
&gt; &gt; This should allow installation of a single &quot;alsa-driver&quot; package and
&gt; &gt; multiple &quot;alsa-kernel&quot; if you have more than one kernel installed. Right
&gt; &gt; now the dependencies make it mandatory to have kernels installed through
&gt; &gt; rpm... people who install from source can still install the ALSA modules
&gt; &gt; from the source though ;-)
&gt; &gt; 
&gt; &gt; The devices are there now, thank Gordon for reporting the problem (and as I
&gt; &gt; said, you were the only one). Any further comments are very welcome!
&gt; &gt; 
&gt; &gt; Download : http://ftp.freshrpms.net/pub/freshrpms/testing/alsa/
&gt; &gt; New spec : http://freshrpms.net/builds/alsa-driver/alsa-driver.spec
&gt; &gt; 
&gt; &gt; If you aren&#x27;t running kernel-2.4.18-10 for i686, simply --rebuild the
&gt; &gt; alsa-driver source rpm and you&#x27;ll get a package for your running kernel.
&gt; &gt; 
&gt; &gt; Matthias
&gt; &gt; 
&gt; &gt; -- 
&gt; &gt; Clean custom Red Hat Linux rpm packages : http://freshrpms.net/
&gt; &gt; Red Hat Linux release 7.3 (Valhalla) running Linux kernel 2.4.18-10
&gt; &gt; Load : 0.08 0.42 0.84, AC on-line, battery charging: 100% (6:36)
&gt; &gt; 
&gt; &gt; _______________________________________________
&gt; &gt; RPM-List mailing list 
&gt; &gt; http://lists.freshrpms.net/mailman/listinfo/rpm-list
&gt; -- 
&gt; :
&gt; ####[ Linux One Stanza Tip (LOST) ]###########################
&gt; 
&gt; Sub : Finding out files larger than given size       LOST #324
&gt; 
&gt; To find out all files in a dir over a given size, try:
&gt; find /path/to/dir_of_file -type f -size +Nk
&gt; [Where N is a number like 1024 for 1mb, and multiples thereof] 
&gt; 
&gt; ####[Discussions on LIH : 04 Jul 2002]########################
&gt; :
&gt; 
&gt; 
&gt; _______________________________________________
&gt; RPM-List mailing list 
&gt; http://lists.freshrpms.net/mailman/listinfo/rpm-list
-- 
:
####[ Linux One Stanza Tip (LOST) ]###########################Sub : Finding out files larger than given size       LOST #324To find out all files in a dir over a given size, try:
find /path/to/dir_of_file -type f -size +Nk
[Where N is a number like 1024 for 1mb, and multiples thereof] ####[Discussions on LIH : 04 Jul 2002]########################
:
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 001803

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85506002
Date: Not suppliedAfter the talk at UT Austin, I spent Saturday at the Turkey City science 
fiction writers&#x27; workshop at Bruce Sterling&#x27;s place. Turkey City is a venerable 
science fiction workshop that has spawned many good writers and a lexicon of 
science fiction critical terms that is the de facto standard for understanding 
what works and what doesn&#x27;t in a work of science fiction:     Squid on the Mantelpiece     Chekhov said that if there are dueling pistols over the mantelpiece in the 
    first act, they should be fired in the third. In other words, a plot 
    element should be deployed in a timely fashion and with proper dramatic 
    emphasis. However, in SF plotting the MacGuffins are often so overwhelming 
    that they cause conventional plot structures to collapse. It&#x27;s hard to 
    properly dramatize, say, the domestic effects of Dad&#x27;s bank overdraft when 
    a giant writhing kraken is levelling the city. This mismatch between the 
    conventional dramatic proprieties and SF&#x27;s extreme, grotesque, or visionary 
    thematics is known as the &quot;squid on the mantelpiece.&quot;     Card Tricks in the Dark     Elaborately contrived plot which arrives at (a) the punchline of a private 
    joke no reader will get or (b) the display of some bit of learned trivia 
    relevant only to the author. This stunt may be intensely ingenious, and 
    very gratifying to the author, but it serves no visible fictional purpose. 
    (Attr. Tim Powers) I had the cold from hell all weekend and I&#x27;m jetlagged, but I wanted to get 
some links up before I hit the sack. Until tomorrow! Link[1] Discuss[2][1] http://www.sfwa.org/writing/turkeycity.html
[2] http://www.quicktopic.com/boing/H/cgivZf3AAhKkk

</pre>

## Record 001804

**Label:** `benign`

<pre>
interview with enron corp . research group good afternoon mr . ball : the enron corp . research group would like to conduct an informal interview with you at your convenience . please give me some dates and times within the next 2 weeks that you might be available and i will arrange the schedule . the people that will be interviewing you are : vince kaminski managing director stinson gibner vice president grant masson vice president vasant shanbhogue vice president krishna krishnarao director zimin lu director tanya tamarchenko manager alex huang manager each individual interview will last approximately 15 - 20 minutes , so we probably should allow at least 3 hours . if you would prefer to call me with some dates and times - i can check the calendars while we are talking . look forward to hearing from you . thank you . shirley crenshaw administrative coordinator research group 713 / 853 - 5290
</pre>

## Record 001805

**Label:** `benign`

<pre>
hl &amp; p volumes 6 / 00 disregard the prior e - mail . this is the correct spreadsheet for hl &amp; p . - - - - - - - - - - - - - - - - - - - - - - forwarded by aimee lannou / hou / ect on 06 / 19 / 2000 02 : 10 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - aimee lannou 06 / 19 / 2000 01 : 59 pm to : pat clynes / corp / enron @ enron , daren j farmer / hou / ect @ ect , gary a hanks / hou / ect @ ect cc : subject : hl &amp; p volumes 6 / 00
</pre>

## Record 001806

**Label:** `benign`

<pre>
Linux: the film.
http://www.revolution-os.com/  (trailer + first 8 mins online)I wonder if this will ever get to Ireland? Otherwise, I wonder if it would
be possible to get the Trinity Internet Society or somewhere to show it?Justin
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001807

**Label:** `benign`

<pre>
coling / acl workshop on multi - lingual information retrieval coling - acl &#x27; 98 workshop multilingual information management : current levels and future abilities august 16 , 1998 universiti de montrial montrial / canada the coling / acl workshop on multilingual information management is a follow-on to an nsf - sponsored workshop held in conjunction with the first international conference on language resources and evaluation in granada , spain ( may 1998 ) , at which an international panel of invited experts considered these questions in an attempt to identify the most effective future directions of computational linguistics research - - especially in the context of the need to handle multi-lingual and multi-modal information . the follow-on workshop is intended to open the discussion to the computational linguistics community as a whole . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * registration deadline is july 1 ! ! ! ! * * * * to register , consult the coling / acl home page at * * * * http : / / coling-acl 98 . iro . umontreal . ca / mainpage . html * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * workshop description the development of natural language applications which handle multi-lingual and multi-modal information is the next major challenge facing the field of computational linguistics . over the past 50 years , a variety of language-related capabilities has been developed in areas such as machine translation , information retrieval , and speech recognition , together with core capabilities such as information extraction , summarization , parsing , generation , multimedia planning and integration , statistics-based methods , ontologies , lexicon construction and lexical representations , and grammar . the next few years will require the extension of these technologies to encompass multi-lingual and multi-modal information . extending current technologies will require integration of the various capabilities into multi-functional natural language systems . however , there is today no clear vision of how these technologies could or should be assembled into a coherent framework . what would be involved in connecting a speech recognition system to an information retrieval engine , and then using machine translation and summarization software to process the retrieved text ? how can traditional parsing and generation be enhanced with statistical techniques ? what would be the effect of carefully crafted lexicons on traditional information retrieval ? the workshop will be organized as a series of panels reporting on the outcome of discussions in the granada workshop ( a report summarizing the discussions at granada will be available before the coling - acl workshop ) . ample time for discussion will be included . the discussion will focus on the following fundamental questions : 1 . what is the current level of capability in each of the major areas of the field dealing with language and related media of human communication ? 2 . how can ( some of ) these functions be integrated in the near future , and what kind of systems will result ? 3 . what are the major considerations for extending these functions to handle multi-lingual and multi-modal information , particularly in integrated systems of the type envisioned in ( 2 ) ? in particular , we will consider these questions in relation to the following areas : o multi-lingual resources ( lexicons , ontologies , corpora , etc . ) o information retrieval , especially cross-lingual and cross-modal o machine translation o automated ( cross-lingual ) summarization and information extraction o multimedia communication , in conjunction with text o evaluation and assessment techniques for each of these areas o methods and techniques ( both statistics-based and linguistics-based ) o parsing , generation , information acquisition , etc . o speech recognition and synthesis o language and speaker identification and speech translation program committee khalid choukri , european languages resource association charles fillmore , university of california berkeley , usa robert frederking , carnegie mellon university , usa ulrich heid , university of stuttgart , germany eduard hovy , information sciences institute , usa nancy ide , vassar college , usa mun kew leong , national university of singapore joseph mariani , limsi / cnrs , france mark maybury , the mitre corporation , usa sergei nirenburg , new mexico state university , usa akitoshi okumura , nec , japan martha palmer , university of pennsylvania , usa james pustejovsky , brandeis university , usa peter schaueble , eth zurich , switzerland oliviero stock , irst , italy felisa verdejo , uned , spain piek vossen , university of amsterdam , netherlands wolfgang wahlster , dfki , germany antonio zampolli , istituto di linguistica computazionale , italy organizers bob frederking center for machine translation carnegie - mellon university schenley park pittsburgh , pa 15213-3890 tel : ( + 1 412 ) 268-6656 fax : ( + 1 412 ) 268-6298 email : ref @ nl . cs . cmu . edu eduard hovy information sciences institute of the university of southern california 4676 admiralty way marina del rey , ca 90292-6695 tel : ( + 1 310 ) 822-1511 fax : ( + 1 310 ) 823-6714 email : hovy @ isi . edu nancy ide department of computer science vassar college 124 raymond avenue poughkeepsie , new york 12604-0520 usa tel : ( + 1 914 ) 437 5988 fax : ( + 1 914 ) 437 7498 e - mail : ide @ cs . vassar . edu
</pre>

## Record 001808

**Label:** `benign`

<pre>
I don&#x27;t know who said the below.1) Measured in money, you are wrong.  Different ethnic groups achieve at
widely different rates.  Always have.  A lot of research has been done
on that topic, Sowell among others.2) If you exchanged the population of India and America, in a generation
India would look like America.  In Two, America would look like India.3) As Bob said: &#x27;valuable resources&#x27; has notin&#x27; to do with it.  See
Japan, Hong Kong, Singapore, ...
&gt; &gt;
&gt; &gt; I&#x27;m sure that if someone checked the statistics, that the number of
&gt; &gt; &quot;successful&quot; vs. &quot;unsuccessful&quot; (how to define those?) Indian
&gt; &gt; immigrants in the US is statistically similar to the number of
&gt; &gt; successful vs. unsuccessful Scotsmen.  I&#x27;m not going to, though.
&gt; &gt;
&gt; &gt; India is poor because it always was poor.  Unlike other countries
&gt; &gt; in the region (including Ghana, Nigeria, et al) that have emerged
&gt; &gt; from the ashes of Imperialism with strong growth, India is not
&gt; &gt; blessed with a strong base of valuable resources.
&gt; http://xent.com/mailman/listinfo/fork
</pre>

## Record 001809

**Label:** `benign`

<pre>
california order proxy price calculation fyi - - - - - - - - - - - - - - - - - - - - - - forwarded by richard shapiro / na / enron on 04 / 27 / 2001 01 : 07 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; jackie gallagher &quot; on 04 / 27 / 2001 11 : 59 : 30 am to : , , , , , , , , , , , cc : subject : california order proxy price calculation memorandum to : regulatory affairs committee power marketers working group from : joe hartsoe , regulatory affairs committee chair bob reilley , power marketers working group chair julie simon , vice president of policy mark bennett , senior manager of policy erin perrigo , manager of policy date : april 27 , 2001 re : california order proxy price calculation we have had an initial opportunity to review ferc &#x27; s order establishing prospective mitigation and monitoring plan for the california wholesale electric markets and establishing an investigation of public utility rates in wholesale western energy markets , and will provide a more detailed summary early next week . however , questions have arisen as to the calculation of the proxy price when a stage 1 , 2 or 3 emergency is called . in initial discussions with ferc staff , we have determined that the price mitigation will work as follows : for the following day , the iso will publish at 8 a . m . an average of the daily prices published in gas daily for all california delivery points , as well as emissions costs . the emissions costs will be calculated by the iso using the cantor fitzgerald environmental brokerage service . the marginal unit will then be determined via the single price auction in the hour , and the iso will then take the previously submitted and confidential heat rate data and multiply it by the posted average gas price and emissions costs for that hour to determine the market clearing price . the iso will not be calculating an estimated market - clearing price in advance .
</pre>

## Record 001810

**Label:** `benign`

<pre>
ubs warburg / ubs warburg energy llc integration status report as of jan . 29 , all critical milestones are on track to meet legal integration date of 6 feb and commercial integration ( first day of trading ) of 11 feb . please see attached score card for details . mark - status check . xls visit our website at http : / / www . ubswarburg . com this message contains confidential information and is intended only for the individual named . if you are not the named addressee you should not disseminate , distribute or copy this e - mail . please notify the sender immediately by e - mail if you have received this e - mail by mistake and delete this e - mail from your system . e - mail transmission cannot be guaranteed to be secure or error - free as information could be intercepted , corrupted , lost , destroyed , arrive late or incomplete , or contain viruses . the sender therefore does not accept liability for any errors or omissions in the contents of this message which arise as a result of e - mail transmission . if verification is required please request a hard - copy version . this message is provided for informational purposes and should not be construed as a solicitation or offer to buy or sell any securities or related financial instruments .
</pre>

## Record 001811

**Label:** `benign`

<pre>
re : sddp vince , i &#x27; ll send him one of the manuals , and perhaps a paper on sddp . tom vince j kaminski @ ect 07 / 28 / 2000 10 : 53 am to : tom halliburton / corp / enron @ enron cc : vince j kaminski / hou / ect @ ect subject : re : sddp tom , can you send the info regarding sddp to john ? vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 07 / 28 / 2000 10 : 52 am - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski 07 / 19 / 2000 06 : 41 pm to : &quot; o &#x27; brien john &quot; @ enron cc : vince j kaminski / hou / ect @ ect subject : re : sddp john , i shall e - mail the information about sddp from houston . vince &quot; o &#x27; brien john &quot; on 07 / 18 / 2000 01 : 47 : 41 am to : vkamins @ enron . com cc : subject : sddp vincent , you kindly suggested that i email you with regard to some information you have on the sddp system ( i &#x27; m not sure if i &#x27; ve got the abbreviation correct , but it &#x27; s something that is currently used in south america ) . your presentation was very interesting and informative . kind regards , john o &#x27; brien manager , treasury &amp; risk management snowy hydro trading pty ltd level 17 , bligh house 4 bligh street sydney nsw 2000
</pre>

## Record 001812

**Label:** `benign`

<pre>

On Tue, 10 Sep 2002 01:20:56 PDT,
	J C Lawrence  wrote:&gt; On Mon, 09 Sep 2002 15:36:37 -0400 
&gt; Tom Reingold  wrote:
&gt; 
&gt; &gt; At work, I have to use Outlook.  Ick.  I hate it.  
&gt; 
&gt; Ahh.  At work we fire people who use Outlook (Literally true: They get
&gt; escorted to the door, their badge confiscated, and told to return the
&gt; next day to collect their office contents).Why?  What threat does Outlook pose to your organization?&gt; &gt; But it does a few things right.  Like making indices for each folder,
&gt; &gt; and not just by date, but also by sender, message size, subject.  So I
&gt; &gt; can sort by any column instantly.
&gt; 
&gt; Have you looked into using a custom sequences file?More detail please?  I do use sequences, so I&#x27;m familiar with their
use, but how can I make indices with them, and how can I keep them
up to date?&gt; &gt; And mime handling is pretty bad compared with modern mailers.
&gt; 
&gt; The only thing I actually miss in that regard is support for S/MIME.You&#x27;re probably running exmh on a local machine.  I&#x27;m running it on
a very remote machine.  In this scenario, the mime handling is weak._______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 001813

**Label:** `benign`

<pre>
computer hello again , the computer i mentioned earlier will remain at the location eb 3239 d however , it belongs to us , i got with chris and it is not really in his way at this point . fyi - computer # 002813 monitor # 202803 kevin moore
</pre>

## Record 001814

**Label:** `benign`

<pre>
qs : serrano and hualapai i &#x27; m cross-posting this to linguist and endangered-languages - l , so apologies if anyone gets two of these . * * * * * question 1 : serrano language ( in san bernardino , california , united states ) i have been searching without luck for anything regarding the serrano people and especially the serrano language . i &#x27; ve been able to find out that there remains * one * speaker of serrano left , but have had no luck so far in contacting her . you know how that goes : a knows b , who knows c , whose aunt ( d ) is the last speaker . ( these are reliable people , so i feel confident that d speaks serrano ; d &#x27;s sister , who also spoke serrano , died recently . ) i live about a mile from the san manuel indian reservation . the people there are serrano , but most just know they are &quot; indian , &quot; they do n&#x27;t know what &quot; tribe . &quot; at the tribal offices , the woman i spoke to was unaware that there had ever been a serrano language . the information i have so far comes from anthropology / archaeology people and linguists working at the morongo indian reservation ( cahuilla , in banning , california , united states ) . i &#x27; m afraid that serrano will be history within the next couple of years . does anyone know where i might find information on the serrano language or the people who once spoke it ? * * * * * question 2 : hypothetical situation d , above , is the last remaining speaker of serrano . her serrano would be an idiolect , her personal serrano language . suppose i was able to capture all of her knowledge of the language before she dies and write a descriptive grammar which was then used by others to learn serrano , and the language survived . ( would n&#x27;t it be nice if things worked that way ! ) would the original idiolect then be classified as a language ? dialect ? still an idiolect ? if serrano would still be an idiolect , since my understanding of the language would most likely be slightly different than d &#x27;s , would this be * my * ideolect , or * her * idiolect ? * * * * * question 3 : hualapai language ( in peach springs , arizona , united states ) soon , i will be moving to peach springs , arizona , to the hualapai indian reservation . i will be living there for about three months . the hualapai language is still widely used in peach springs ( still a small group of people though ) , and i am going to be doing a very intensive , crash course in hualapai ( two hours per day , every day , with two native speakers , as well as basic communication with other people outside my &quot; learning &quot; time ) . by the end of my stay , i hope to be able to communicate with others , but i &#x27; m pretty sure i won&#x27;t completely master the language in that short amount of time . my &quot; official job &quot; is setting up and fixing the computer network for the school there , but i will also be developing some computer applications in hualapai ( as opposed to an english language interface like we are used to seeing ) . i will also be working with the two native speakers to produce a few books written in hualapai . in addition to these books , i am going to try to translate some public-domain children &#x27;s classics , for example _ the wonderful wizard of oz _ , to help me with learning the language , as well as providing great stories for the kids there . i also plan on writing a journal of my learning of the hualapai language ( adult l2 acquisition study ) . i am a self-taught , amateur linguist - - i . e . , i read a lot and pester people with questions . the only formal education i have is a 10 - week course in ( english ) language acquisition by children . my question is , is there any interest outside the hualapai reservation for the software , books , or journal ? the books will be printed and we will need to know how many copies to print ( i . e . , just for use at the school , or extras for other people , too ) . a new edition of the hualapai grammar has been finished ( the old edition is 8 - 1 / 2 x 11 , 575 pages ; i have n&#x27;t seen the new one yet ) , but not gone to the printers yet , and a dictionary is in the making . the software and journal can be duplicated as needed , but the books can be printed with title vii funds ( government money ) if they are for use at the school only , but we will have to make other funding arrangements if the books are to be sold to people outside the school . is anyone interested ? * * * * * fyi i developed a font for typing in hualapai . it is * not * intended to be a general-purpose , one-size - fits-all font , it is intended to allow rapid typing in hualapai . the font is a times typeface . currently , i have truetype and postsrcipt versions for ibm-pc compatible computers , and in the near future , macintosh versions of truetype and postscript fonts will be available . the sil ( summer institute of linguistics ) and a couple of sites in germany have offered me space on their ftp computers for the font . any other ftp sites would be appreciated . when i get the fonts uploaded , i &#x27; ll post addresses to the lists . the font is &quot; postcard-ware , &quot; i . e . , it is free , but you have to send us a postcard from your hometown . : - ) * * * * * as is usual , i will post summaries of answers to my questions to the list if there is sufficient interest . thanks for wading through this long-winded message . chuck coker cjcoker @ csupomona . edu ccoker @ igc . apc . org
</pre>

## Record 001815

**Label:** `benign`

<pre>
On Sat, Aug 10, 2002 at 12:00:15AM +0200, Paul Linehan wrote:
&gt; I suppose it is - however, nobody knows that
&gt; this message is a response to your one or a 
&gt; follow-up to my own first message. Get a decent mail client, I can tell what it is 
extremely easily. &gt; With a newsgroup structure, this is obvious. 
&gt; 
&gt; This helps the reader eliminate threads which
&gt; are irrelevant to them or whatever.*looks at mutt*-- 
colmmacc@redbrick.dcu.ie        PubKey: colmmacc+pgp@redbrick.dcu.ie  
Web:                                 http://devnull.redbrick.dcu.ie/ -- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001816

**Label:** `benign`

<pre>
&quot; re have this is just a quick note to thank all those who have sent me information concerning &#x27; have / hold &#x27; , etc . in non - ie languages . i am also quite happy to continue receiving information on this subject and will soon be posting a summary of the information i have received so far . i would also like to ask if - especially for those who have already sent me information - in these languages or any others there is a connection between a construction for &#x27; to have / possess &#x27; and perfect aspect / past tense , compulsion or existence , even when the verb &#x27; have &#x27; has not come from &#x27; hold &#x27; . so far , i &#x27; ve received information on the following languages : japanese basque , tamil , chinese hebrew dakota arabic finish austronesian languages and papuan crow brazilian portuguese indo - european * ghebh &#x27; give &#x27; &gt; lat . habeo &#x27; hold &#x27; and references to works on the subject by bernd heine , e . c . traugott , w . welmers and kathleen carey . i &#x27; ll send more exact references later with a final summary of all info ( excepting those who wish to remain anonymous ) next week . thanks again ! john peterson , kiel , germany , e-mail : gor05 @ rz . uni-kiel . d400 . de
</pre>

## Record 001817

**Label:** `benign`

<pre>
re : budget and a lemmons jr . , billy subject : re : budget and a lemmons jr . , billy subject : re : budget and a lemmons jr . , billy subject : budget and a &amp; a allocations so here &#x27; s my question . is there any possibility that we will be not doing the standard bonusses ( which have caused huge problems in the us in the last years ) at the end of this or next year . i need to know whether to budget the bonus numbers / aa allocations for 2002 . if you haven &#x27; t thought of this please do as i really do not think its appropriate to go with the nightmare from last year .
</pre>

## Record 001818

**Label:** `benign`

<pre>
fw : merger agreement - - - - - original message - - - - - from : rieker , paula sent : friday , november 16 , 2001 3 : 13 pm to : williamson , joannie subject : merger agreement joannie - pls . forward to the management committee this afternoon . thank you . paula attached are the following : executive summary of the merger agreement . please do not copy or forward . weblink to the publicy available merger agreement , in full . confidentiality notice the information contained in this email may be confidential and / or privileged . this email is intended to be reviewed by the individual or organization named above . if you are not the indented recipient , you are hereby notified that any review , dissemination or copying of this email or its attachments , if any , or the information contained herein is prohibited . if you receive this email in error , please immediately notify the sender by return email and delete this email from your system . thank you .
</pre>

## Record 001819

**Label:** `benign`

<pre>
april - - - flexible katy gas fyi - - - here is what i show so far for april baseload / term katy flexible purchase gas : oasis meter # 6780 : aquila 10 . 000 duke 20 . 000 richardson 1 . 312 conoco 15 . 000 total 46 . 312 flexible lonestar meter # 67 : duke 47 . 850 ( 50 . 000 - 2 . 150 inflexible ) mitchell 20 . 000 crosstex ( 6 . 200 ) ( baseload sale ) total 61 . 650 flexible thanks , mark x 33396
</pre>

## Record 001820

**Label:** `benign`

<pre>
nytimes . com article : enron paid out &#x27; retention &#x27; bonuses before bankruptcy filing this article from nytimes . com has been sent to you by louise @ enron . com . / - - - - - - - - - - - - - - - - - - - - advertisement - - - - - - - - - - - - - - - - - - - - - - - \ special offer to ny times customers : get free shipping on orders of $ 75 or more at starbucks . com enron paid out &#x27; retention &#x27; bonuses before bankruptcy filing december 6 , 2001 by richard a . oppel jr . and kurt eichenwald just days before enron ( news / quote ) filed for bankruptcy and laid off 4 , 000 people , it paid out $ 55 million in bonuses to about 500 employees , according to several people who had dealings with the company . yesterday evening , an enron spokesman confirmed the bonuses , describing them as &quot; retention incentives &quot; for crucial employees . bankruptcy experts said that the payments were almost certain to be closely scrutinized - and probably challenged - by enron &#x27; s creditors . separately , the labor department said yesterday that it had opened an investigation into how enron managed its employees &#x27; 401 ( k ) retirement plans . those accounts were heavily invested in enron shares , and company rules prohibited many employees from diversifying their holdings . the labor department said that employees had lost up to 90 percent of the value of their accounts . &quot; enron &#x27; s employees have gotten the short end of the stick in the sudden collapse of this company , &quot; said labor secretary elaine l . chao . enron has said that a temporary freeze that kept some employees from shifting retirement investments was long planned and allowed another company to take over the job of administering the plan . enron declined to say how much was paid out in bonuses , who received the money or what the range of payments was . executives of companies entering bankruptcy defend such payments as necessary if there is to be any hope of reorganizing as a going concern . but they often prove to be incendiary . for example , in 1990 , when it was disclosed that drexel burnham lambert had paid key executives some $ 250 million in bonuses before filing for bankruptcy , creditors and the government reacted with outrage . in the end , after court hearings on the issue , the drexel estate sued the employees to get the money back . the payments by enron &quot; are substantially high , and that means it probably does become an issue in the bankruptcy case , &quot; said james feder , a bankruptcy lawyer with feder &amp; mills , a law firm in los angeles . &quot; the question might come up as to whether there was fair consideration given for the amount of these bonuses and whether they were reasonable under the circumstances . &quot; if creditors can convince the court that the employees were overpaid - or that the payments were made to keep money out of creditors &#x27; hands , a much more difficult argument to prove - then the judge can void the payments and order the money returned , said lynn lopucki , a law professor at the university of california at los angeles . to tamp down such disputes , a company typically will file a request , as part of its bankruptcy filing , to make payments to certain employees , and not proceed with the payments until receiving a judge &#x27; s approval , mr . lopucki said . yesterday , mark palmer , an enron spokesman , defended the payments as necessary &quot; in order to protect and maintain the value of the estate . &quot; such payments &quot; are done in every bankruptcy , &quot; he said , adding that the payments were made to employees &quot; at all levels of the organization . &quot; employees who lost their jobs after enron filed for bankruptcy protection on sunday were told they may receive no more than $ 4 , 500 in severance pay . they also were told to petition the bankruptcy court to cash in unused vacation days . in another legal slap at enron , a shareholder lawsuit filed late tuesday accused 29 enron officers and directors of engaging in &quot; massive insider trading &quot; and making &quot; false and misleading &quot; statements about the company &#x27; s financial performance while selling about $ 1 . 1 billion worth of stock over the last three years . an enron spokesman declined to comment on the suit , which was filed by amalgamated bank , which is known to be an activist shareholder . how to advertise - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - for information on advertising in e - mail newsletters or other creative advertising opportunities with the new york times on the web , please contact alyson racer at alyson @ nytimes . com or visit our online media kit at http : / / www . nytimes . com / adinfo for general information about nytimes . com , write to help @ nytimes . com . copyright 2001 the new york times company
</pre>

## Record 001821

**Label:** `benign`

<pre>
eacl &#x27; 99 student cfp we are pleased to announce the first call for student papers for eacl &#x27; 99 ( bergen , norway 8 - - 12 june 1999 ) . the call ( text version below ) can be found at http : / / www . ims . uni-stuttgart . de / eacl99 - student / the conference home page is at http : / / www . hit . uib . no / eacl99 / the student session programme committee jonas kuhn , student chair atro voutilainen , faculty co-chair - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - * * * eacl &#x27; 99 call for student papers * * * student sessions at the 9th conference of the european chapter of the association for computational linguistics eacl &#x27; 99 june 8 - 12 , 1999 university of bergen bergen , norway http : / / www . ims . uni-stuttgart . de / eacl99 - student / - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - purpose : the goal of these sessions is to provide a forum for student members to present work in progress and receive feedback from other members of the computational linguistics community . the sessions will consist of paper presentations by student authors . the accepted papers will be published in a special section of the conference proceedings . note that the existence of the student sessions does not influence the treatment of student-authored papers submitted to the main conference . rather , the aim of the student sessions is to provide a separate track emphasizing students &#x27; work in progress rather than completed work . requirements : papers should describe original , unpublished work in progress that demonstrates insight , creativity , and promise . topics of interest are the same as for the main conference . papers submitted to the main conference cannot be considered for the student sessions . students may , of course , submit different papers to the main conference and the student session , or papers on different aspects of a particular problem or project . note that for papers presenting joint work , all co-authors have to be students . format for submission : the maximum allowable length is 3 pages ( about 1800 words ) , including references . papers should be headed by a title page containing the paper id code ( see below ) , title , a short ( 5 line ) summary , up to three general keywords specifying the subject area ( e . g . , &quot; french syntax , machine translation &quot; ) , the word count ( excluding figures and bibliography ) and a notice of multiple submission , if required . since reviewing will be ` blind &#x27; , the title page of the paper should omit author names and addresses . furthermore , self-references that reveal the authors &#x27; identity ( e . g . , &quot; we previously showed ( smith , 1991 ) . . . &quot; ) should be avoided . instead , use references of the form &quot; smith previously showed ( 1991 ) . . . &quot; care should be taken to avoid obvious giveaways in the bibliography such as listings for unpublished in-house technical reports . papers outside the specified length and / or without an id code are liable to rejection without review . to identify each paper , an id code must be acquired by filing an electronic paper registration form : http : / / www . ltg . ed . ac . uk / eacl99 / register . html on successful completion of this form an id code will be sent to the designated author by e-mail . media of submission : authors may submit their papers electronically or in hard copy . electronic submission is strongly preferred . electronic submissions should be either self-contained latex source , postscript or pdf ( we encourage latex submissions ) . postscript submissions must use a standard font . latex submissions should not refer to any other external files or styles except for the standard styles for tex 3 . 14 and latex 2 . 09 . the bibliography for a latex submission cannot be submitted as separate . bib file ; the actual bibliography entries must be inserted in the submitted latex source file . we strongly recommend the use of acl - standard latex : http : / / www . ltg . ed . ac . uk / eacl99 / style / eaclsub . sty ( plus bibstyle acl . bst ) or word style files ( msword _ template . rtf ) for the preparation of submissions . these styles include a place for the required information such as id code and word count , and allow for a graceful transition to the style required for publication . if you cannot use the acl - standard styles directly , a description of the required format is at http : / / www . ltg . ed . ac . uk / eacl99 / style / substyle . html . if you cannot access this web page , send email to eacl99 @ cogsci . ed . ac . uk with subject substyle for an automatic reply . electronic submissions should be sent to eacl99 - student @ ims . uni-stuttgart . de hard copy submissions should consist of four ( 4 ) paper copies of each paper ( printed on both sides of the page if possible ) should be submitted to the following address : eacl &#x27; 99 student session c / o jonas kuhn ims , univ . stuttgart azenbergstr . 12 70174 stuttgart germany enquiries to the student session committee by email at eacl99 - student @ ims . uni-stuttgart . de . schedule : submissions must be received by 18 january 1999 . late submissions ( those arriving on or after 19 january 1999 ) will not be considered . acknowledgements will be emailed soon after receipt . notification of acceptance will be sent to authors ( by email ) by 10 march 1999 . camera - ready copies of final papers prepared in a double-column format , preferably using a laser printer , must be received at the main programme committee in edinburgh by 19 april 1999 , along with a signed copyright release statement . detailed formatting guidelines will be provided to authors with their acceptance notice . the student paper sessions will take place during the main conference on 9-11 june 1999 . venue and local organisation : the conference will be held in bergen , norway from 8 through 12 june , 1999 . see the conference home page http : / / www . hit . uib . no / eacl99 / for local arrangements information . the local arrangements committee is chaired by koenraad de smedt . the local arrangements committee can be reached at : humanities information technologies university of bergen alligaten 27 5007 bergen norway phone : + 47 5558-8008 fax : + 47 5558-9470 email : eacl99 @ uib . no student session committee : the student session committee is co-chaired by atro voutilainen ( university of helsinki ) and jonas kuhn ( university of stuttgart ) . atro voutilainen jonas kuhn department of general linguistics ims , univ . stuttgart p . o . box 4 azenbergstr . 12 fin-00014 university of helsinki 70174 stuttgart finland germany phone : + 358 9 191 23 507 ( office ) phone : + 49-711 - 121-1354 fax : + 358 9 191 23 598 fax : + 49-711 - 121-1366 email : atro . voutilainen @ helsinki . fi jonas @ ims . uni-stuttgart . de timetable : 1999 18 jan submitted student papers due in stuttgart 10 mar decisions on programme sent to authors 19 apr final versions of papers due in edinburgh 9-11 jun student sessions at conference in bergen
</pre>

## Record 001822

**Label:** `benign`

<pre>

So whats the eariliest  for hitting 7k?http://money.cnn.com/2002/07/19/markets/markets_newyork/index.htm&quot;According to preliminary reports, the Dow fell 390.23 to 8,019.26, to its
lowest level since January 1998. The Nasdaq composite index lost 37.94 to
1,319.01. The Standard &amp; Poor&#x27;s 500 index lost 34.03 to 847.53.The index has fallen more than 1,000 points in the past two weeks and
closed down nine of the last 10 sessions. Both the Nasdaq and S&amp;P are near
their lowest levels since the first half of 1997.
&quot;http://xent.com/mailman/listinfo/fork

</pre>

## Record 001823

**Label:** `benign`

<pre>
developments in discourse analysis ( gls 1995 ) * * * * * * * * * * the georgetown linguistics society presents gls 1995 : developments in discourse analysis february 17-19 , 1995 georgetown university , washington d . c . * * * * * * * * * * * * registration schedule * * friday 11 : 00 a . m . - 5 : 45 p . m . intercultural center ( icc ) galleria . saturday 8 : 30 a . m . - 7 : 30 p . m . icc auditorium main entrance sunday 8 : 30 a . m . - 6 : 00 p . m . icc auditorium main entrance * * event locations * * sessions : intercultural center . rooms will be posted at registration . plenary sessions : intercultural center auditorium . reception : intercultural center galleria . * * conference schedule * * * friday , february 17 * 11 : 00 a . m . registration begins in the intercultural center galleria 2 : 00 - 3 : 30 colloquium : developments in signed language discourse part i ( coordinator : melanie metzger ) * ruth morgan the interplay of place and space in a namibian sign language narrative * kathleen wood negotiating literate identities : life stories of deaf students * susan m . mather adult - deaf toddler discourse will the real author please stand up ? : exploiting the speech of others * richard buttny talking race on campus : reported speech in accounts of race relations at a university campus * akira satoh reported speech in english and japanese : a comparative analysis * joyce tolliver evidentiality and accountability in literary narrative folk , interlocutor , and analytical frameworks * hanny feurer a place for folk linguistics in discourse analysis ? greetings in tibeto - burman languages * christianna i . white similarity and distinctiveness : a vantage analysis of plato &#x27;s gorgias * martin warren how do conversations begin and end ? 3 : 45 - 5 : 15 colloquium : developments in signed language discourse part ii ( coordinator : melanie metzger ) * tina m . neumann figurative language in an american sign language poem : personification and prosopopoeia * scott liddell and melanie metzger spatial mapping in an asl narrative : examining the use of multiple surrogate spaces * elizabeth a . winston spatial mapping in comparative discourse frames in american sign language political , intellectual , institutional identities * anna de fina pronominal choice , identity and solidarity in political discourse * charlotte linde other people &#x27;s stories : third person narrative in individual and group identity * karen tracy the identity work of questioning in intellectual discussion prior discourses and the structure of classroom interaction * mary buchinger bodwell &quot; now what does that mean , &#x27; first draft &#x27; ? &quot; : adult literacy classes and alternative models of editing a text * deborah poole the effects of text on talk in a class-room literacy event * myriam torres why teachers do not engage in co-construction of knowledge : a critical discourse analysis 5 : 30 - 6 : 30 roger shuy getting people to admit their guilt : a case study 6 : 45 - 7 : 45 deborah schiffrin narrative as self - portrait 8 : 00 - 11 : 00 reception , intercultural center galleria * saturday , february 18 * 9 : 30 - 10 : 30 heidi hamilton the aging of a poet : intertextuality and the co - construction of identities in the oppen family letter exchange 10 : 45 - 12 : 45 colloquium : developments in conversation analysis : oh , what , or , pardon ( coordinator : maria egbert ) * paul drew &#x27; what &#x27; ? : a sequential basis for an &#x27; open &#x27; form of repair initiation in conversation ( and some implications for cognitive approaches to interaction ) * maria egbert the relevance of interactants &#x27; eye gaze to the organization of other-initiated repair : the case of german &#x27; bitte ? &#x27; ( &#x27; pardon ? &#x27; ) * anna lindstrom &#x27; or &#x27; - constructed inquiries as a resource for probing the relevance of prior talk in swedish conversation * john heritage &#x27; oh &#x27; - prefaced responses to inquiry privileged views in media discourse * gertraud benke news about news : textual features of news agency copies and their usage in the newsproduction * debra graham racism in the reporting of the o . j . simpson arrest : a critical discourse analysis approach * ian hutchby arguments and asymmetries on talk radio interactional explanations for patterns of variation * scott fabius kiesling using interactional discourse analysis to explain variation * sylvie dubois the coherent network of effects on discourse humorous faces * nancy k . baym humorous performance in a computer-mediated group * diana boxer and florencia cortes - conde teasing that bonds : conversational joking and identity display 12 : 45 - 2 : 45 theme lunch 2 : 45 - 4 : 45 negotiating authority and status * cynthia dickel dunn the language of the tea teacher : shifting indexical ground in a japanese pedagogical context * lena gavruseva &#x27; what is this drivel about garages ? &#x27; : the construction of authoritative self in the cover letter discourse * geoffrey raymond the voice of authority : sequence and turn design in live news broadcasts * hideko nornes abe discourse analysis on distal and direct styles of japanese women &#x27;s speech narrative structures across languages * viola g . miglio tense alternations in medieval prose texts * asli ozyurek how children use connectives to talk about a conversation * marybeth culley rhetorical elaborations of a chiricahua apache comic narrative genre * bethany k . dumas complex narratives in ozark discourse competing discourses and dominance * tony hak &#x27; she has clear delusions &#x27; : the production of a factual account * catherine f . smith democratic discourses * john clark standard and vernacular : persuasive discourse styles in conflict * kathryn remlinger keeping it straight : the socio-linguistic construction of a heterosexual ideology in a campus community 5 : 00 - 7 : 00 colloquium : discourse and conflict ( coordinator : christina kakava ) * faye c . mcnair - knox discourse and conflict in african - american english womantalk : patterns of grammaticalized disapproval in narratives * christina kakava evaluation in personal and vicarious stories : mirror of a greek man &#x27;s self * patricia e . o&#x27;connor &#x27; you can&#x27;t keep a man down &#x27; : positioning in conflict talk and in violent acts * laine berman life stories from the streets : homeless children &#x27;s narratives of violence and the construction of a better world discourse influences on syntactic categories and structures * jennifer arnold the interaction between discourse focus and verbal form in mapudungun * rajesh bhatt information status and word order in hindi * paul hopper discourse and the category &#x27; verb &#x27; in english interactional construction of cognitive understanding * pamela w . jordan and megan moser multi - level coordination in computer-mediated conversation * claudia roncarati repetition and cognition in the information flow : a case-study in brazilian portuguese database * andrea tyler and john bro examining perceptions of text comprehensibility : the effect of order and contextualization cues * robbert - jan beun structure in cooperative dialogue 7 : 15 - 8 : 15 charles goodwin the social life of aphasia saturday evening theme dinner * sunday , february 19 * 9 : 30 - 10 : 30 frederick erickson discourse analysis as a communication chunnel : how feasible is a linkage between continental and anglo - american approaches ? 10 : 45 - 12 : 45 colloquium : frames theory and discourse ( coordinator : janice hornyak ) * janice hornyak personal and professional frames in office discourse * susan hoyle negotiation of footing in play * carolyn kinney the interaction of frames , roles and footings : conversational strategies of co-leaders in a long-term group * yoshiko nakano interplay of expectations in cross-cultural miscommunication : a case study of negotiations between americans and japanese * suwako watanabe framing in group discussion : a comparison between japanese and american students interpreting , challenging , evaluating gender * jennifer curtis contestation of masculine identities in a battering intervention program * keller s . magenau more than feminine : attending to power and social distance dimensions in spoken and written workplace communication * keli yerian professional and gendered identities in the discourse of two public television directors * donna trousdale social languages and privileging : gender and school science discourse discursive enactments of cultural ideologies * isolda carranza stance - making in oral interviews * shari e . kendall religion and experience : constructed dialogue , narrative , and life story in religious testimonies * agnes weiyun he stories as interactional resources : narrative activity in academic counseling encounters * orla morrissey discourse analysis as an evaluation methodology for technology assessment in pre-competitive r and d environments 12 : 45 - 2 : 15 lunch 2 : 15 - 3 : 45 computational approaches to discourse analysis * megan moser and johanna d . moore an approach to the study of discourse cues * yan qu a computational approach for automatically extracting discourse rules * donald lewis theme and eventline in a classical hebrew narrative : a computer-assisted analysis conversational moves * c . antaki , f . diaz , a . collins participants &#x27; orientation to footing : evidence from conversational completion * peter muntigl saving face in argument : an analysis of face-threatening disagreements fine - tuning conversation * hiroko spees how aizuchi &#x27; back channels &#x27; shape and are shaped by the interaction in japanese conversation * toshiko hamaguchi manifestation of shared knowledge in conversation * yrjo engestrom discursive disturbances as bridge between the micro and the macro : evidence from activity-theoretical studies in collaborative work settings 4 : 00 - 5 : 00 deborah tannen academic discourse as discourse 5 : 00 - 5 : 15 ralph fasold closing remarks * * how to contact gls 1995 * * please send registration and requests for information regarding special discounts on airfare , accommodations , and transportation to the georgetown linguistics society : gls 1995 internet : gls @ guvax . georgetown . edu georgetown university bitnet : gls @ guvax . bitnet department of linguistics voice : ( 202 ) 687-6166 479 intercultural center washington , d . c . 20057-1068 regularly updated information is available through the world - wide web georgetown linguistics home page : http : / / www . georgetown . edu / cball / gu _ lx . html * * registration * * on - site registration will begin at 11 : 00 a . m . in the intercultural center ( icc ) galleria on friday , february 17 , 1995 . students $ 30 . 00 non - students $ 40 . 00
</pre>

## Record 001824

**Label:** `benign`

<pre>
4 / 20 americas gas var limit violation attached is the enron americas gas var limit violation for april 20 , 2001 . the head trader for enron americas is responsible for printing out a hard copy of this memo , signing it and returning the hard copy to chris abel who will forward it to rac to obtain the appropriate signatures . however , this is to be considered preliminary until the discretionary var memo has been signed . i will follow up with a final memo at this time . shona wilson director - global risk operations x 39123
</pre>

## Record 001825

**Label:** `benign`

<pre>
Takers galore possibly (me inclusive). Especially when the subject
is more on-topic :-)Gary.On Wed, Aug 14, 2002 at 10:08:03AM +0100, Wynne, Conor wrote:
&gt; All right, can&#x27;t get pissed though as its a week-day. If we were to do
&gt; it in Lucan, that would be another story ;--)
&gt; 
&gt; Do we have many takers? 
&gt; 
&gt; CW
&gt; 
&gt; -------------
&gt; On Wed, Aug 14, 2002 at 09:22:27AM +0100, Wynne, Conor mentioned:
&gt; &gt; When are we going to have a pint? 
&gt; 
&gt;  Tuesday next week. Boars Head, Capel st.
&gt; 
&gt; Kate-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001826

**Label:** `benign`

<pre>
journal of translation and textlinguistics subject : journal longacre , robert e . , journal of translation and textlinguistics , vol . 10 1998 issn : 1055-4513 ; $ 7 . 95 summer institute of linguistics . nicholas a . bailey &quot; what &#x27;s wrong with my word order ? &quot; ethel e . wallis mark &#x27;s goal - oriented plot structure julia irene dieterman participant reference in isthmus mixe narrative discourse c . john collins coherence in james 1 : 19-27 subject : journal dr . pattiya jimreivat for the mks editorial board mon-khmer studies : a journal of southeast asian languages vol . 28 , pb ; issn : 0147-5207 , viii + 228 pp . , 1998 , $ 29 . 00 summer institute of linguistics . this volume is in memoriam of william a . smalley . articles are : - tones and voice quality in modern northern vietnamese : instrumental case studies , by nguyen van loi and jerold a . edmondson - kyansittha and the indic words in myanmar from mon , by nai pan hla - affixes in katu of the lao p . d . r . , by nancy a . costello - an acoustic study of battambang khmer vowels , by ratree wayland - prepositional vs . directional coverbs in vietnamese , by sophana srichampa - some kam - tai loan-words in mon - khmer languages , by qin xiaohang - expressing comparison in the tai languages , by lev n . morev - numeral classifiers in sgaw karen , by suriya ratanakul - diachronic evolution of initial consonants in buyang , by li jingfang and zhou guoyan internet : academic . books @ sil . org available for review http : / / www . sil . org subject : linguistics walter a . cook , s . j . , author ; case grammar applied ; pb . isbn : 1-55671 - 046 - 1 ; xiii + 275 pp . , 1998 , $ 29 . 00 . summer institute of linguistics and the university of texas at arlington . dr . walter cook , s . j . , is one of the promoters of the georgetown university round table on languages and linguistics and author of numerous publications in linguistics . in case grammar theory ( 1989 ) , the author described the case grammar models of fillmore , chafe , anderson , gruber , jackendoff , and some tagmemicists as contrasting models within case grammar theory . in the present volume , intended as a companion volume to the previous one , we find a methodology for case grammar , tested in extended textual analysis including ernest hemingway &#x27;s the old man and the sea . because case grammar lends itself well to displaying the way syntactic features are associated with semantic structures , the author is able to use case grammar as an unusually clear , simple guide for sentence analysis . internet : academic , books @ sil . org available for review http : / / www . sil . org karen ann daley , author ; vietnamese classifiers in narrative texts . pb . isbn : 1-55671 - 021 - 6 ; xii + 214 pp . , 1998 , $ 29 . 00 summer institute of linguistics , and the university of texas at arlington . karen daley leads the reader into what is perhaps the first discourse study of vietnamese classifiers to date . after presenting a summary of classifiers and their function in languages of the world , she challenges the validity of regarding vietnamese classifiers as simply fitting the prototypical pattern of phrase-level numeral classifiers . in vietnamese several of the functions attributed to classifiers imply discourse relations , despite the prevailing assumption that their use is associated with the syntactic relations of phrases . a coherent pattern of classifier use becomes evident when they are observed in the larger syntactic environment of discourse . daley uses discourse measurements of overall frequency , referential distance , and referential persistence and compares them with four criteria from a study of classifiers in white hmong . the results in the present study indicate that the basic function of classifiers in vietnamese discourse is referential - - to mark salience . internet : academic . books @ sil . org available for review http : / / www . sil . org long yaohong and zheng guoqiao , authors , translated from chinese by d . norman geary ; the dong language in guizhou province , china ; pb . isbn : 1-55671 - 051 - 8 ; xvi + 272 pp . , 1998 , $ 29 . 00 . summer institute of linguistics and the university of texas at arlington . the dong people are renowned within china for their beautiful singing and their architectural prowess . their gifts have grown and flourished in the valleys and mountains of guizhou , hunan , and guangxi provinces of southwestern china . in relative obscurity before the establishment of the people &#x27;s republic of china , the 2 . 5 million dong people are fast gaining an international reputation . the dong language is distinctive for its many tones . it is often referred to outside china as kam and occupies a significant position in the kam - tai family of the sino - tibetan phylum . long yaohong and zhong guoqiao are recognized authorities on dong language research . mr . long is a native speaker of dong . he provides an introduction , touching on many aspects of dong history , culture , and language , and a discussion of the grammar . mr . zheng supplies sections on phonology , lexicon , and orthography . the two authors jointly present a chapter on dong dialects . the book as a whole represents the first comprehensive description of the dong language available in english . internet : academic . books @ sil . org available for review http : / / www . sil . org subject : weg ( pakistan ) joan l . g . baart , author ; the sounds and tones of kalam kohistani ; with wordlists and texts ; pb . isbn : 969-8023 - 03 - 8 ; 1997 , xvi + 128 pp . , $ 12 . 00 . summer institute of linguistics and national institute of pakistan studies . this volume starts a new series &quot; studies in languages of northern pakistan , &quot; published jointly by the summer institute of linguistics and the national institute of pakistan studies in islamabad . the series will include studies of the phonology , grammar , lexicon , and oral literature of kalasha , shina , burushaski , and other languages of northern pakistan . kalam kohistani ( in the literature also known as garwi or bashkarik ) belongs to the dardic branch of indo - aryan . the current volume presents a sketch of the sound system and tonal system of this language , based on recent fieldwork . it also makes a wordlist and text data available for further study . internet : academic . books @ sil . org available for review http : / / www . sil . org sincerely , grace fuqua academic publications summer institute of linguistics grace _ fuqua @ sil . org
</pre>

## Record 001827

**Label:** `benign`

<pre>
query : voicing assimilation i know of two languages where voiced fricatives devoice after a voiceless obstruents , even though voiced stops cause the preceding voiceless obstruent to voice instead ( dutch and within certain domains , polish ) . i am wondering if there are other examples .
</pre>

## Record 001828

**Label:** `benign`

<pre>
appel : euralex96 content - length : 8234 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - seventh euralex international congress - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - european association for lexicography university of gothenburg , sweden august 13-18 , 1996 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - congress organizers martin gellerstam jerker j = e4rborg sven - g = f6ran malmgren kerstin nor = e9n lena rogstr = f6m - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - first circular &amp; call for papers time and venue - - - - - - - - - - - - - the congress starts on the evening of tuesday , august 13 , 1996 , and ends on the morning of sunday , august 18 . = 20 the congress will be held in the faculty of arts building ( &quot; humanisten &quot; ) , situated in park surroundings in the southern part of central gothenburg . the plenary sessions will be held at the musicology building just across the park . the bus from landvetter airport ( twenty minutes from the centre of gothenbi ] urg ) stops at korsv = e4gen , a few minutes walk from the faculty building . contact addresses - - - - - - - - - - - - - - - - the following addresses should be used for all information : congress organizers euralex96 university of gothenburg department of swedish section of lexicology 412 98 gothenburg sweden fax : + 46-31773 44 55 ( &quot; att . euralex &quot; ) e - mail : gellerstam @ svenska . gu . se phone : + 46-317734544 ( gellerstam ) + 46-317734467 ( malmgren ) + 46-317734468 ( nor = e9n ) programme - - - - - - - - the euralex congresses bring together scholars , professional lexicographers , publishers and others interested in dictionaries of all types . the programme wil { include a workshop , plenary lectures , parallel sections of individual papers , computer demonstrations , a poster session , and social events for participants and their guests . the opening address will be given by sture alln , former professor of natural language processing at g = f6teborg university and permanent secretary of the swedish academy . topics - - - - - papers are invited on all aspects of lexicography but the principal topics of the congress are : 1 . computational lexicology &amp; lexicography 2 . lexical combinatorics 3 . the dictionary - making process 4 . bilingual lexicography 5 . lexicographical and lexicological projects 6 . terminology and dictionaries for special purposes submission - - - - - - - - - submissions will be refereed by a panel of referees for each major topic ( see above ) , and the programme will be selected by the programme committee . individual presentations should be timed to last 20 minutes , followed by a ten-minute discussion period . there are no restrictions on the language of presentation , but it is not possible to offer interpretation . authors should send five copies of a six - to eight-page double-spaced preliminary version of their paper by october 1 , 1995 to the congress organizers at the address above . the first page should contain the title of the paper , name ( s ) , affiliation ( s ) and complete address ( es of author ( s ) , a 10 - line abstract of the paper , and ( in the top right corner ) the title of the topic panel to which the paper is submitted . authors whose papers are accepted will receive a style guide for the preparation of a camera-ready copy for the proceedings to be published immediately before the congress . important dates - - - - - - - - - - - - - - 1 october 1995 deadline for receipt of abstracts by congress organizers 15 february 1996 despatch of notification of acceptance / rejection 15 april 1996 deadline for receipt of paper for inclusion in the proceedings demonstrations and exhibitions - - - - - - - - - - - - - - - - - - - - - - - - - - - - - computer facilities will be available and presenters are encouraged to offer software demonstrations . there will be an exhibition of dictionaries and other reference books . intending exhibitors should contact the congress organizers . pre - euralex tutorial - - - - - - - - - - - - - - - - - - - there will be a pre - euralex tutorial on special field vocabulary . details will be announced later . referees panel ( the euralex board , the lexiconordica editorial committee and the local organizers ) - - - - - - - - - - - - - b . t . s . atkins , h . bergenholtz , h . b = e9joint , t . fontenelle , m . gellerstam , d . gundersen , r . hartmann , u . heid , j = f3n hilmar j = f3nsson , j . j = e4rborg , f . knowles , s . - g . malmgren , c . marello , w . martin , i . meyer , k . nor = e9n , o . norling - christensen , k . varantola = 20 programme committee - - - - - - - - - - - - - - - - - - henri bejoint ( university of lyon , france ) , ole norling - christensen ( the society for danish language and literature , denmark ) , martin gellerstam ( university of gothenburg , sweden ) . registration - - - - - - - - - - - the registration fee is expected to be sek 2000 ( 275 dollars at the present rate of exchange ) for euralex members and sek 2200 for non-members . the registration fee covers the academic programme , all documentation , including the proceedings , lunches and coffee break refreshments , the congress excursion and all receptions . the congress dinner is not included . the guest fee , payable by guests of the congress participants is sek 800 . it covers the excursion and other other social and cultural events which form part of the programme . the fee for the pre - euralex tutorial is sek 500 . accommodation - - - - - - - - - - - - rooms have been reserved for congress participants in the following hotel c = ategories : first class hotel : single room per night sek 620 tourist class hotel : single room per night sek 400 student rooms : single room per night sek 250 student rooms have bathroom ( shower ) and shared kitchen facilities . the price is calculated on accomodation for five nights . all accomodations are within 15 minutes &#x27; walk from the congress venue . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - to receive the second circular in august 1995 , please complete and return the enclosed form to the congress organizers ( see address above ) before 31 july , 1995 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - preliminary registration form for seventh euralex international congress university of gothenburg , sweden august 13-18 1996 to receive the second circular in august 1995 , please complete and return this form before 31 july , 1995 , to euralex 96 university of gothenburg department of swedish 412 98 gothenburg sweden name . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . address . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . country . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . telefax . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . telephone . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . institution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . please , tick one of the following alternatives o i wish to present a paper at the congress o i wish to present a poster at the congress o i do not intend to present a paper / poster at the congress accommodation preferences o first class hotel o tourist class o student &#x27;s room - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - information about the seventh euralex international congress can also be obtained via www : http : / / logos . svenska . gu . se / euralex . html - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</pre>

## Record 001829

**Label:** `benign`

<pre>
On Wednesday 28 August 2002 16:33 CET Theo Van Dinter wrote:
&gt; On Wed, Aug 28, 2002 at 04:20:52PM +0200, Malte S. Stretz wrote:
&gt; &gt; I get about 3 of these per week. A google for trafficmagnet convinces
&gt; &gt; me that they&#x27;re worth their own rule...
&gt;
&gt; 0 hits here. :(I recently cleaned my spam corpus from them but these are my current 
results:
   OVERALL        SPAM     NONSPAM  NAME
     13929         995       12934  (all messages)
        13          13           0  T_TRAFFICMAGNETI put it into cvs_rules_under_test, let&#x27;s see what the 2.41 GA run thinks 
about it :)Malte-- 
-- Coding is art.
-- 
-------------------------------------------------------
This sf.net email is sponsored by: Jabber - The world&#x27;s fastest growing 
real-time communications platform! Don&#x27;t just IM. Build it in! 
http://www.jabber.com/osdn/xim
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 001830

**Label:** `benign`

<pre>
fw : east power tina rode assistant to dave duran 713 - 853 - 9582 cell 713 - 419 - 6237 - - - - - original message - - - - - from : duran , w . david sent : tuesday , july 24 , 2001 9 : 23 am to : rode , tina subject : fw : east power - - - - - original message - - - - - from : duran , w . david sent : monday , july 23 , 2001 9 : 36 pm to : kitchen , louise subject : east power louise , here are some bullet points for the discussions tomorrow : - east power , including generation investments made about $ 50 million in the first half . the greatest contribution came from ben jacoby , about $ 15 million . by the way , i hired ben along with scott healy to acquire sites in 1998 . - all of the traders and structuring , including bernie aucoin told me that john llodra drove both the cmp and nstar deals . total income $ 8 . 5 million . - i believe delainey was correct in saying that ozzie was the brains behind alamac but heather did the execution . total income for the east $ 7 . 5 million . - most of the rest of the deals were done after i came in . - mid market sales have increased . ( 700 % over the first half of 2000 ) - this group was in meltdown when i came in ( at least on the origination side ) . i would like to get some credit for stopping the bleeding and starting the rebuilding process in a difficult environment .
</pre>

## Record 001831

**Label:** `benign`

<pre>
review of mon - khmer studies 27 review of mon - khmer studies , vol . 27 ( 1997 ) ; mahidol university at salaya , thailand , and summer institute of linguistics , dallas , texas , usa ; us $ 39 . 00 . reviewed by neil h . olsen , neil . olsen @ ci . slc . ut . us volume 27 of mon - khmer studies ( mks ) is dedicated to paul k . benedict on the occasion of his 85th birthday ( 5 july 1997 ) . tragically , dr . benedict died sixteen days later in an automobile accident . robert s . bauer writes a memorial tribute which includes a concise biography . following bauer &#x27;s memorial , he and other mks editors have compiled a bibliography of benedict \ 213s articles , books , and conference papers - - the most current and complete published to date . mks 27 is the third volume in the special series dedicated to recognized experts in the field of southeast asian linguistics . mks 25 was dedicated to the late andre haudricourt and mks 26 to david thomas , one of the founding editors of mks in 1964 . mks 28 will resume the regular format of the journal . although mks is generally a journal devoted to mon - khmer and austroasiatic languages , it welcomes articles on other southeast asian languages and language families . the 28 papers in this volume are more ambitious than previous mks volumes and represent a wide range of linguistic topics which reflect dr . benedict &#x27;s broad , eclectic , and sometimes controversial interests . there are papers on chinese , japanese , tai , sino - tibetan , tibeto - burman , hmong - mien , austronesian , and , of course , austroasiatic . the main purpose of this review is to briefly summarize the various papers so that readers may select those articles which interest them . the first paper is paul k . benedict &#x27;s , &quot; interphyla flow in southeast asia , &quot; which was one of the keynote speeches at the 4th international symposium on languages and linguistics , pan - asiatic linguistics , held in bangkok in january 1966 . benedict warns us that the field of southeast asian linguistics is the bosnia of historical linguistics - - a lovely landscape strewn with land mines ! he playfully formulates a law of historical linguistics : the number of linguistic errors perpetrated is inversely proportional to the median length of the roots involved . the remainder of his paper is devoted to exploring sino - tibetan , mon - khmer , and austro - tai homelands ( with a map and diagram ) , distinguishing between direct and stimulus diffusion in interphyla tone flow , and contrasting affixation patterns among the superstocks . finally , he traces a pair of mon - khmer loan - words , &#x27; tiger &#x27; and &#x27; raptor &#x27; , as they &#x27; invade &#x27; southeast asia . &quot; on the track of austric : part ii , consonant mutation in early austroasiatic &#x27; by la vaughn h . hayes is a data-rich paper continuing ( part i in mks 21 ) his effort to validate wilhem schmidt &#x27;s 1906 hypothesis that austroasiatic and austronesian are genetically related and should be grouped under a new austric superstock . hayes claims that diachronic changes affecting proto - austroasiatic obscure and conceal the linkage between ancient consonants and their modern reflexes . these changes have contributed to the difficulty of establishing the lexical connection between austroasiatic and austronesian . this paper describes and details four plre phonological shifts - - palatalization , spirantization , assibilation , and voicing - - which took place early in the history of the austroasiatic language family causing massive mutations in the consonant system . dipankar moral , in &quot; north - east india as a linguistic area , &quot; delineates seven indian states - - with 220 languages belonging to the indo - european , sino - tibetan , and austroasiatic families - - as a linguistic area distinct from the rest of india . lists of common linguistic characteristics ( phonological , grammatical , and lexical features ) bolster the argument of areal uniqueness . read this paper in conjunction with simon &#x27;s paper noted below . michel ferlus , in &#x27; le maleng bro et le vietnamien , describes the phonology and morphology of maleng bro , a viet - muong language spoken in khammouan , laos . data from maleng sheds light on viet - muong linguistic history , especially the syllable structure and ancient morphology of vietnamese and the development of its tones . david filbeck , in &quot; the protasis - apodosis construction in mal , &quot; gives a structural and functional description of a topic-comment syntactic pattern in mal , a mon - khmer language spoken in northern thailand . sujaritlak deepadung and suriya ratanakul , in &quot; final particles in conversational mal ( thin ) , &quot; discuss status , question , and mood sentence final particles in the ban sakat klang dialect of mal . dai qingxia and liu yan , in &quot; analysis of the tones in the guangka subdialect of deang , &quot; present a synchronic description and analysis of guangka tones . they compare guangka to other deang dialects with and without tones . deang is a mon - khmer language spoken in southwest yunnan , china . this study contributes to further understanding of the development of tone systems in mon - khmer languages . theraphan l . - thongkum , in &quot; the place of lawi , harak , and tariang within bahnaric , &quot; presents the results of field work with mon - khmer languages spoken in sekong province , laos . ethnolinguistic data and word lists are included . lawi is classified as a west bahnaric language , while the place of harak and tariang within bahnaric is unclear at present . natalja m . spatar , in &quot; imperative constructions in cambodian , &quot; notes that the cambodian imperative paradigm consists of four categories : 1st person sg . and pl . , 2nd person , and 3rd person . the center of this paradigm is the 2nd person imperative forms : any imperative marker ( except oj ) can be used in a 2nd person imperative , and only 2nd person imperatives can be used without any marker and without a subject . suwilai premsrirat , in &quot; linguistic contributions to the study of the northern khmer language of thailand in the last two decades , &quot; surveys the linguistic work , major developments , and recent research that has been conducted on khmer ( cambodian ) as spoken in thailand . a 3 - page bibliography is included . sophana srichampa , in &quot; serial verb constructions in vietnamese , &quot; examines a specific verb construction in vietnamese - - a sequence of verbs occurring together with a non-overt subject and / or a non-overt object - - within the framework of government and binding theory . zhou zhizhi and yan qixiang , in their &quot; on the genetic affiliation of vietnamese , &quot; reopen the old debate concerning whether vietnamese is a tai , austroasiatic , or chinese language . they compare 159 basic vocabulary items from vietnamese with thai and zhuang ( tai languages ) and wa , blang , and palaung ( austroasiatic languages ) . focusing on a 40 % cognate rate with wa , they examine phonetic and grammatical similarities between vietnamese and wa and confirm that vietnamese is indeed an austroasiatic language . i . m . simon , in &quot; on first looking into paul k . benedict &#x27;s sino - tibetan , &quot; uses benedict 1972 as a starting point to compare khasi , a mon - khmer language spoken in assam , with tibeto - burman , and with huffman &#x27;s ( 1990 ) mon and kur wordlists . this paper should be read in conjunction with moral &#x27;s paper noted above . david bradley , in &quot; what did they eat ? grain crops of the burmic groups . &quot; follows up on benedict 1972 and 1975 and takes a closer look at the reconstruction of words for various grain crops within the burmic subgroup of sino - tibetan . bradley draws some conclusions about the implications of this reconstruction for the original homeland of the burmic , tibeto - burman , and sino - tibetan groups . james a . matisoff , in &quot; dayang pumi phonology and adumbrations of comparative qiangic , &quot; analyzes pumi &#x27;s complex phonology and tones in great detail . he discusses pumi &#x27;s place in the qiangic family and notes that much internal reconstruction will be necessary before details of the complex initial - and rhyme-correspondences will be figured out . pumi is a tai language spoken in yunnan , china . helen potopova , in &quot; semantic characteristics of the tibetan honorific forms , &quot; focuses on words taking honorific prefixes , the original meanings of which are anatomical terms . in tibetan , the choice to use an honorific form as opposed to a neutral form is determined by social stratification and the situation of the communication act itself . semantic and lexical evidence is presented . george bedell , in &quot; causatives and clause union in lai ( chin ) , &quot; examines causative constructions in lai within a generative framework . lai , also called hakha chin , is spoken in chin state , myanmar ( burma ) . ilia peiros , in &quot; lolo - burmese linguistic archaeology , &quot; discusses what linguistic data suggest about speakers of proto - lolo - burmese ( plb ) . three main issues are discussed : ( 1 ) localization of plb homeland ; ( 2 ) absolute dating for the disintegration of plb homeland ; and ( 3 ) some features of plb cultural reconstruction . peiros proposes that 3800-3600 years ago a highly developed culture flourished in yunnan , connected more with sub - himalayan cultures than southeast asian . there is an appendix of plb cultural lexicon . k . s . nagaraja &#x27;s &quot; kinship terms in konyak naga &quot; is a data paper listing kinship terminology collected for konyak naga , a tibeto - burman language of nagaland state in india . jerold a . edmonson and kenneth j . gregerson , in their &quot; outlying kam - tai : notes on ta mit laha , &quot; offer recent field notes primarily on the phonology of laha , a kadai language spoken in northern vietnam . there is a brief overview of laha ethnolinguistic history along with comparative comments on the rather large shared vocabulary with the tai branch . they conclude that the laha language of ta mit township will prove useful in future work in deciphering the history of outlier kadai languages . wave form and pitch trajectory of two words are illustrated ; a map showing laha groups in vietnam and china is very useful . luo yongxian , in &quot; expanding the proto - tai lexicon - - a supplement to li ( 1977 ) , &quot; examines a sizable number of new cognate sets which substantially expands li &#x27;s seminal 1977 work . using lexical classification , the new cognates sets are arranged by semantic field : nature and environment , agricultural terms , etc . implications of lexical classification for subgrouping in tai langauges are discussed and cognates rates are tabulated . qin xiaohang , in &quot; evolution of the initial consonant clusters pl , kl , ml in the hongshiuhe vernacular of zhuang , &quot; analyzes the historical evolution of the initial consonant clusters pl , kl , ml in the hongshuihe vernacular , a northern dialect of zhuang , a tai language , spoken in guangxi zhuang autonomous region in china . udom warotamasikkhadit , in &quot; fronting and backing topicalization in thai , &quot; observes that , in thai , topicalization can occur at the beginning of , in the middle of , or at the end of a sentence . illustrative sentences are given and it is concluded that topicalization is closely related to emphasis . apiluck tumtavitikul , in &quot; reflection on the x &#x27; category in thai , &quot; questions whether or not there is an intermediate level of x &#x27; category in thai . evidence is presented for the existence of x &#x27; in thai , in particular , n &#x27; and v &#x27; , and most probably a &#x27; and p &#x27; as well , if a similar kind of argumentation is applied . there is a concluding discussion of the implications . martha ratliff , in &quot; hmong - mien demonstratives and pattern persistence , &quot; examines the persistence of a 3 - way , person-oriented demonstrative system in the hmong - mien ( miao - yao ) family . the hmong daw ( white hmong ) demonstrative ko &#x27; that-near you &#x27; is discussed in detail . ratliff comments on the implications of pattern persistence in relation to southeast asia areal types , relexification , and hmong - mien as austro - tai . christiane cormo , in &quot; towards a constructivist approach of the japanese &#x27; passive &#x27; , &quot; recategorizes japanese passive verbs according to the pronominal approach in a constructivist framework . joseph f . kess and tadao miyamoto , in &quot; psycholinguistic aspects of hanji processing in chinese , &quot; explore the psycholinguistic dimensions of logographic hanji character processing and linguistic recognition in chinese . they review the current literature on the subject and attempt to synthesize the conflicting explanations offered by two opposing theoretical models of chinese lexical access , word recognition , and the architecture of the chinese mental lexicon . the final paper in the volume , ernest w . lee &#x27;s , &quot; austronesian for ordinary speakers of austronesian languages &quot; demonstrates the pedagogical technique of introducing the notion of a proto-language and daughter languages to non-linguist austronesian speakers from the solomon islands and vanuatu using roglai ( vietnam ) and maguindanao ( philippines ) cognates . errata for two articles that appeared in mks 26 , and a publications list of the institute of language and culture for rural development at mahidol university complete this issue . soliciting , compiling , and editing articles for inclusion in dedicatory or special issues of journals is difficult in itself ; the editors of mks have done an admirable job on the last three volumes . my only criticism is that in a few papers ( e . g . , ratliff , cormo ) , some works cited are not referenced in the bibliography , making it difficult to follow up on an interesting topic . bibliography benedict , paul k . 1972 sino - tibetan : a conspectus . james a matisoff , contributing ed . cambridge : cambridge university press . benedict , paul k . 1975 austro - thai language and culture . new haven : human relations area files . huffman , franklin e . 1990 burmese mon , thai mon , and nyah kur : a synchronic comparison . mks 16-17 : 31-84 . li , fang - kuei . 1977 a handbook of comparative tai . oceanic linguistics special publications , 15 . honolulu : the university press of hawaii . the author of this review is neil h . olsen , information planner with salt lake city corporation . he earned a m . a . in linguistics from the university of utah in 1994 . olsen has been an adjunct instructor at the english language institute , university of utah . his linguistic interests focus on south bahnaric languages , where he did field work with koho speakers in vietnam ( 1967-68 ) and in north carolina ( 1997 ) . he is currently working on a koho grammar and dictionary .
</pre>

## Record 001832

**Label:** `benign`

<pre>

Shopper Newsletter: AlertsJuly 18, 2002 
From Computers4Sure.com iRiver&#x27;s versatile SlimX just $149 
 From CDW Apple&#x27;s groundbreaking iPod just $399Computers4Sure
 
 
iRiver SlimX iMP-350 
								â€¢ Ultra-slim, 16.7mm in width
								â€¢ Supports MP3/WMA/ASF/CD formats
								â€¢ Rechargeable batteries included
								Â Â Just $149
Sonicblue Rio Riot
								â€¢ Stores over 400 complete albums 
								â€¢ Built-in FM tuner/custom presets
								â€¢ Extra-large, backlit LCD 
								Â Â Just $300
TDK Mojo CD-MP3
								â€¢ Play up to 10 hours of music
								â€¢ 8-minute MP3 skip protection
								â€¢ Supports MP3, Audio CD
							    Â Â Just $125
Sonicblue Rio 600 (32MB)
								â€¢ Customize your music!
								â€¢ 32MB, supports MP3 and WMA
								â€¢ USB, PC/Mac compatible
								Â Â Just $97
 CDW
 
 
Apple iPod 
								â€¢ 5 Gig capacity
								â€¢ 3x optical/2.5 digital zoom
								â€¢ 6.5 oz
								Â Â Just $299
Sonicblue Rio One (32 MB)
								â€¢ Affordable MP3 player!
								â€¢ 32MB, USB, Mac/PC comp.
								â€¢ Upgradeable w/flash memory
								Â Â Just $100 
Imation RipGo
								â€¢ Palm-sized CD-R Drive
								â€¢ Plays CD, WMA, MP3, D-Audio
								â€¢ 6 hours WMA, 3 hours MP3
								Â Â Just $199  The e-mail address for your subscription isÂ qqqqqqqqqq-cnet-newsletters@spamassassin.taint.org
UnsubscribeÂ |
Â Manage My Subscriptions
Â |Â FAQÂ |
Â Advertise        Copyright 2002 CNET Networks, Inc. All rights reserved.          .
</pre>

## Record 001833

**Label:** `benign`

<pre>
december conference preliminary announcement first international workshop on written language processing sydney , australia 7th - 9th december 1998 the aim of this workshop ( iwwlp ) is to bring together researchers from around the world who are interested in the cognitive processes involved in reading . the emphasis will be on the empirical study of orthographic , phonological , semantic and syntactic processing in reading words and sentences . it is hoped that the research reported throughout the workshop will include analyses of a broad range of languages and types of script . papers will be of 20 minutes in length with 10 minutes extra for questions . there may also be poster sessions depending on the number of participants involved . the workshop will take place shortly after the 5th international conference on spoken language processing that will also occur in sydney ( 30th november-4 th december 1998 , see : http : / / trust . anu . edu . au : 80 / icslp98 / ) . there will be an official call for papers for iwwlp at a later date . at this stage , we are wanting to develop a mailing list of interested parties and to determine the approximate number of participants . if there is any chance of you participating , please send an email to m . taft @ unsw . edu . au ( as soon as possible ) saying the following : name : address : email : fax : probability that you will come : would you present a paper ? if yes , oral or poster ? please circulate this notice to any other people whom you think might be interested . contact : marcus taft , school of psychology , university of nsw , sydney nsw 2052 australia fax : + 612-93853641 phone : + 612-93853026 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * marcus taft , ph . d . associate professor school of psychology university of new south wales sydney n . s . w . 2052 australia ph : 61 - 2-9385 3026 fax : 61 - 2-9385 3641
</pre>

## Record 001834

**Label:** `benign`

<pre>
california puc proposed decision attached are notes from a press conference that cpuc president lynch held earlier today . sue mara works in our sf office . as a note , all of these concepts must still be approved tomorrow at a cpuc public meeting with 3 votes . we expect passage . call with any questions . jim - - - - - forwarded by james d steffes / na / enron on 03 / 26 / 2001 02 : 06 pm - - - - - susan j mara 03 / 26 / 2001 01 : 14 pm to : alan comnes / pdx / ect @ ect , angela schwarz / hou / ees @ ees , beverly aden / hou / ees @ ees , bill votaw / hou / ees @ ees , brenda barreda / hou / ees @ ees , carol moffett / hou / ees @ ees , cathy corbin / hou / ees @ ees , chris h foster / hou / ect @ ect , christina liscano / hou / ees @ ees , christopher f calger / pdx / ect @ ect , craig h sutter / hou / ees @ ees , dan leff / hou / ees @ ees , debora whitehead / hou / ees @ ees , dennis benevides / hou / ees @ ees , don black / hou / ees @ ees , douglas huth / hou / ees @ ees , edward sacks / corp / enron @ enron , eric melvin / hou / ees @ ees , erika dupre / hou / ees @ ees , evan hughes / hou / ees @ ees , fran deltoro / hou / ees @ ees , gayle w muench / hou / ees @ ees , ginger dernehl / na / enron @ enron , gordon savage / hou / ees @ ees , harold g buchanan / hou / ees @ ees , harry kingerski / na / enron @ enron , iris waser / hou / ees @ ees , james d steffes / na / enron @ enron , james w lewis / hou / ees @ ees , james wright / western region / the bentley company @ exchange , jeff messina / hou / ees @ ees , jeremy blachman / hou / ees @ ees , jess hewitt / hou / ees @ ees , joe hartsoe / corp / enron @ enron , karen denne / corp / enron @ enron , kathy bass / hou / ees @ ees , kathy dodgen / hou / ees @ ees , ken gustafson / hou / ees @ ees , kevin hughes / hou / ees @ ees , leasa lopez / hou / ees @ ees , leticia botello / hou / ees @ ees , mark s muller / hou / ees @ ees , marsha suggs / hou / ees @ ees , marty sunde / hou / ees @ ees , meredith m eggleston / hou / ees @ ees , michael etringer / hou / ect @ ect , michael mann / hou / ees @ ees , michelle d cisneros / hou / ect @ ect , mpalmer @ enron . com , neil bresnan / hou / ees @ ees , neil hong / hou / ees @ ees , paul kaufman / pdx / ect @ ect , richard l zdunkewicz / hou / ees @ ees , richard leibert / hou / ees @ ees , richard shapiro / na / enron @ enron , rita hennessy / na / enron @ enron , robert badeer / hou / ect @ ect , rosalinda tijerina / hou / ees @ ees , sandra mccubbin / na / enron @ enron , sarah novosel / corp / enron @ enron , scott gahn / hou / ees @ ees , scott stoness / hou / ees @ ees , sharon dick / hou / ees @ ees , skean @ enron . com , susan j mara / na / enron @ enron , tanya leslie / hou / ees @ ees , tasha lair / hou / ees @ ees , ted murphy / hou / ect @ ect , terri greenlee / na / enron @ enron , tim belden / hou / ect @ ect , tony spruiell / hou / ees @ ees , vicki sharp / hou / ees @ ees , vladimir gorny / hou / ect @ ect , wanda curry / hou / ees @ ees , william s bradford / hou / ect @ ect , jubran whalan / hou / ees @ ees , triley @ enron . com , richard b sanders / hou / ect @ ect , robert c williams / enron _ development @ enron _ development , dwatkiss @ bracepatt . com , rcarroll @ bracepatt . com , donna fulton / corp / enron @ enron , gfergus @ brobeck . com , kathryn corbally / corp / enron @ enron , bruno gaillard / eu / enron @ enron , linda robertson / na / enron @ enron , ren ? lazure / western region / the bentley company @ exchange , michael tribolet / corp / enron @ enron , phillip k allen / hou / ect @ ect , christian yoder / hou / ect @ ect , jklauber @ llgm . com , tamara johnson / hou / ees @ ees , mary hain / hou / ect @ ect , greg wolfe / hou / ect @ ect , jeff dasovich / na / enron @ enron , dirk vanulden / western region / the bentley company @ exchange , steve walker / sfo / ees @ ees , james wright / western region / the bentley company @ exchange , mike d smith / hou / ees @ ees , richard shapiro / na / enron @ enron , leslie lawner / na / enron @ enron , robert neustaedter / enron _ development @ enron _ development , steve walton / hou / ect @ ect , psmith 3 @ enron . com , mjackso 7 @ enron . com , janel guerrero / corp / enron @ enron , mark fillinger / sf / ect @ ect , jennifer rudolph / hou / ees @ ees , martin wenzel / sfo / hou / ees @ ees , wgang @ enron . com , joseph alamo / na / enron @ enron , tracy ngo / pdx / ect @ ect , ray alvarez / na / enron @ enron , steve c hall / pdx / ect @ ect , mday @ gmssr . com , sgovenar @ govadv . com cc : subject : cpuc news - - from press conference as we speak lynch started out castigating ferc for the &quot; failure to act &quot; , sellers for high prices forcing ca into this action . has some charts in the press package . talked about how wonderful the govs proposals have been . said net short is 34 % . sellers &quot; have us over a barrell &quot; for those sales . attorney gen continues investigation of the sellers . these are all for going forward costs - - this doesn &#x27; t address the &quot; $ for the hot dog , which is being taken care of in sacramento . &quot; she said these proposals ensure reliability and allow treasurer to issue bonds . continues to castigate ferc throughout the call . wants new appointments to ferc from the states - - &quot; our cries have fallen on deaf ears &quot; lynch announced the following votes for tomorrow : 1 . wood &#x27; s proposal - - modified - - order that the ious to pay the qfs beginning 4 / 1 on a going forward basis only . modified existing formula in section 390 ( legislative change to this section did not pass yet ) . shifts the srac gas index from topoc ( where wood says the prices are being mnipulated ) to malin , where prices have been more stable . 2 . sets the ca procurement adjustment - - orders the ious to pay the dwr for purchases . at one point she said that the order would be for all power for purchased by the state beginning jan 19 ; at another point she said that the payments are for going forward costs . &quot; it &#x27; s time to pay the power bills for california . &quot; cpa calculated based on the &quot; residual &quot; method , rather than the proportional method . payments to dwr made on the proportional method , however . 3 . lynch alternate setting a 3 cents / kwh increase in accordance with ab lx . ( the alj decision said no rate increase . ) makes the 1 cent temp charge permanent ( we believe that this is additive with the 3 cents - 4 cent total ) believe this covers all needs on a going forward basis . according to abx 1 , small customers with 130 % over baseline get no increase , small customers with 200 % increase , get a 9 % increase - - the rest get socked , i guess . adopted turn &#x27; s accounting proposal implying that the rate freeze is not yet over . will look at rate design in a future proceeding . takes ious 30 - 45 days to charge the rates ( although could come earlier ) ; will conduct a rate design proceeding during that time period ( see # 5 ) . 4 . orders an investigation into the utility holding company structure to see if it is best for the public utilities to be outside holding companies . a new proceeding was also identified . 5 . lynch is issuing an assigned comissioner ruling proposing a new rate structure . ( i presume to have rates that increase greatly with more use ) need information from dwr to calculate rates and dwr has not yet provided it . described the need to have a record on this . as mentioned in # 3 above - - would expect this to be comepled with a decision in 30 - 45 days . in one of the above orders , lynch said that she orders the utililities to go after sellers using all legal means for the unjust and unreasonable prices .
</pre>

## Record 001835

**Label:** `benign`

<pre>
On Wed, Jul 31, 2002 at 09:44:08PM -0400, Sven wrote:
&gt; With v2.14 of razor client and using Solaris 9 with sendmail 8.12.5 I have
&gt; managed to get smrazor working (milter) -- sort of ... With light server
&gt; loads, it seems to do fine; however during peak traffic times (or peak
&gt; catalogue server usage???) , the smrazor milter stops and sometime dumps
&gt; core as well.  Does anyone know of a limit in terms of number of
&gt; messages/minute that can be theoretically processed? I have noticed timeouts
&gt; occuring (I set the milter timeout per message to 15 seconds) often in huge
&gt; lumps and the occasional &quot;Could not get valid info from Discovery Servers&quot;)
&gt; ?????15 seconds is more than enough timeout... There&#x27;s no request/minute limit,
and we are not close to hardware limits on any of the servers.Could you send me relevant sections from the log file as well as
your config?-- Vipul Ved Prakash          |   &quot;The future is here, it&#x27;s just not 
Software Design Artist     |    widely distributed.&quot;
http://vipul.net/          |              -- William Gibson-------------------------------------------------------
This sf.net email is sponsored by: Dice - The leading online job board
for high-tech professionals. Search and apply for tech jobs today!
http://seeker.dice.com/seeker.epl?rel_code=31
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 001836

**Label:** `benign`

<pre>
( fwd ) re : cantonese / english bilingual research associate university of newcastle upon tyne department of speech cantonese / english bilingual research associate applications are invited for a 3 - year appointment as research associate from 1st october , 1995 . the successful candidate is expected to work , along with two other ras , on an esrc - funded research project , looking into first language development of british - born cantonese - speaking children . the candidate should be cantonese / english bilingual and preferably hold a higher degree in either speech science or linguistics , although candidates with other qualifications will be considered . the appointee will have major responsibilities for community-based fieldwork , data transcription and analysis . a working knowledge of language profiling procedures , e . g . larsp , is necessary . the starting salary is stlg15 , 556 ( under review ) . two copies of a letter of application and full curriculum vitae , together with names and addresses ( preferably with fac numbers ) of three referees should be sent to dr li wei , department of speech , university of newcastle upon tyne , ne1 7ru by 13th april . informal enquiries may be made to dr li wei on + 44 ( 0 ) 191 222 6760 / 7388 fax : + 44 ( 0 ) 191 222 6518 e - mail : li . wei @ newcastle . ac . uk
</pre>

## Record 001837

**Label:** `benign`

<pre>
Yo Mark,Have you goten the closed source drivers from Nvidia or are you still using
the wans that came with Redbum? http://www.nvidia.com and then somewhere...somwhere-else...Installation is WELL detailed, you should see the NV splash screen, don;t
forget to edit the config files.CW
--------------------------------------
HiI have just installed Red Hat 7.2 on my desktop machine. I am completely new
to Linux and therefore have run into a few problems.The graphic display on my PC doesnt seem to work. My monitor is slightly
miss-aligned and I cannot run any high resolution games ( everything freezes
). In the hardware browser in Gnome it lists my Graphics Card (Riva TNT2),
and shows installed drivers...... maybe the problem lies elswhere.Another problem I have is that I cannot install my ISDN, USB modem ( LASAT
Speed Basic ), however im pretty sure its not supported by Linux, but again
it is featured in the Hardware Browser, without installed drivers.If anybody has any ideas, please let me know cos id like to use Linux more.
Please keep in mind I am new to it though.ThanksMark
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 001838

**Label:** `benign`

<pre>
extending eu gas guidelines to central and eastern europe - cera insight title : extending eu gas guidelines to central and eastern europe url : http : / / www 20 . cera . com / eprofile ? u = 35 &amp; m = 2184 overview : a comprehensive reform of gas legislation in central and eastern europe is bringing the region in line with the european union  , s gas directive . this is true both for the countries expected to enter the union by 2004  ) 05  * czech republic , estonia , hungary , poland , and slovenia - - and for candidates whose entry is not scheduled before the end of the decade - - bulgaria , latvia , lithuania , romania , and slovakia . in cera  , s view current developments regarding the establishment of a legal framework for the internal gas market in eastern and central europe look promising from an investor  , s point of view . the candidate countries presented a review of progress made in the implementation of the eu gas directive during a two - day workshop held by the european commission and the world bank in paris in november . many of these countries have been reforming their energy industries throughout the 1990 s as part of their transition to a market economy . the results have been mixed , particularly in the utility industries . the 1998 gas directive ( adopted in august 2000 ) now offers a compelling incentive for eu candidate countries to transform their gas industries , while providing a road map to guide them . the critical points relevant to harmonization between the european union and candidate countries include the following : * legal framework and regulation . the legal framework is the cornerstone of enlargement and the yardstick of harmonization in europe . as a result , in all candidate countries in 1999  ) 2000 energy laws were either updated or newly established along the principles spelled out in the gas directive . regulatory bodies have been created by law and are operating in every country , although issues of staffing , financial autonomy , and independence from political influence are not uniformly resolved . * third - party access ( tpa ) and long - term take - or - pay contracts . all candidate countries agree that tpa is a key to market competition . therefore , all have adopted it or intend to do so in their new legislation . although the commission favors regulated tpa , the specific approaches to tpa enforcement in the candidate countries remain unclear in some cases . in particular , the implementation of tpa will have to address the issue of long - term take - or - pay contracts with russia that were signed by all major domestic gas companies and somewhat preempt competition . russian gas is for the most part sold to single , traditional state - owned operators that dominate their internal markets . a balance will need to be struck between these incumbent dominant players and the competitive environment . this is made more complicated by their ownership of large volumes of russian gas supplied in kind in exchange for transit rights to west european customers . article 25 of the directive provides for ! a derogation to companies experiencing difficulties stemming from take - or - pay obligations . this derogation would apply to the companies of candidate countries with historical and commercial links with the russian gas industry . furthermore , article 26 allows derogations to those member states with only one major gas supplier , to those with an  +  + emerging gas market status ,  ,  , or to those without a direct gas connection to the grid of another member state . most of the candidate countries would in principle be able to call on one or more of these grounds for derogation when they join the european union . * price cross - subsidies . residential gas tariffs are artificially low and are financed partially through higher rates applied to industrial consumers . in various countries , tariff increases and the phasing out of subsidies have been scheduled , but such decisions remain politically sensitive to enforce . this has recently been emphasized by high gas prices owing to the linkage of imported gas to oil prices . all candidate countries have set legal frameworks that include the phasing out of cross - subsidies as part of sector reform , but the actual implementation will remain politically difficult . as table 1 indicates , price rebalancing is already under way in most countries expected to enter the european union by mid - decade , but the legal framework itself cannot guarantee the pace of reform . the same goes for candidate countries that have only recently introduced eu - complying energy laws and whose entry to the european union is likely to happen in a longer time frame . * unbundling . most countries understand that the unbundling of transmission companies from their supply businesses is the second critical element of liberalization . to date , unbundling the accounts of these two businesses is all that has been adopted by the member states or in the candidate countries . in the future , the commission is likely to press all eu countries for legal separation (  &amp; structural unbundling  8 ) of the businesses , and candidate countries will have to pursue their reform of the gas sector accordingly . table 1 gives an overview of the state of play in candidate countries . as the table shows , the countries belonging to the second group have only very recently undertaken the reform of the gas sector in accordance with the directive , whereas change had been introduced earlier in the countries scheduled for the first wave . * * end * * follow above url for full report . come shoot the rapids with us at ceraweek 2001 , &quot; shooting the rapids : strategies and risks for the energy future &quot; in houston , february 12 - 16 , 2001 ! for more information and to register , please visit http : / / www 20 . cera . com / ceraweek / e - mail category : insight cera knowledge area ( s ) : european gas , to make changes to your cera . com account go to : forgot your username and password ? go to : http : / / www 20 . cera . com / client / forgot this electronic message and attachments , if any , contain information from cambridge energy research associates , inc . ( cera ) which is confidential and may be privileged . unauthorized disclosure , copying , distribution or use of the contents of this message or any attachments , in whole or in part , is strictly prohibited . terms of use : http : / / www 20 . cera . com / tos questions / comments : webmaster @ cera . com copyright 2000 . cambridge energy research associates
</pre>

## Record 001839

**Label:** `benign`

<pre>
  | Date: Wed, 31 Jul 2002 23:11:49 +0800
  | From: Fergal Daly 
  | 
  | 7.3 seems to support Chinese input out of the box, it&#x27;s got
  | miniChinput and some other stuff no documentation.  [ ... ]
  | google is a bit of a dead too.
  | 
  | Can anyone tell me what I should do? I&#x27;ve no idea, but a relevant/useful source of info could
 be the Â«linux-utf8Â» e-list:     http://www.cl.cam.ac.uk/~mgk25/unicode.html
     http://mail.nl.linux.org/linux-utf8/ whilst the list is nominally about UTF-8/Unicode and Linux,
 it often delves into related areas (such as input methods). my (vague!) understanding of the state-of-play is there are
 multiple ways of keyboarding scripts such as &quot;Chinese&quot;, and
 the choice of method is a mixture of personal preference,
 equipment (e.g. your keyboard), and the tool/application
 in question. w.r.t. X11 applications, it seems to boil down to two
 approaches:   one unique to the tool itself (apparently
 `yudit&#x27; is famous for this);  or  else using what&#x27;s called
 an XIM (X Input Method).  WARNING: I am now guessing quite a bit here, based mostly on
           my interpretation of what I&#x27;ve read whilst lurking,
           and watching a few people keyboarding a Japanese
           script years ago!   *** your mileage will vary! *** XIMs generally work as a complex compose frontend.  i.e., you
 build up your character as a series of composes of the root or
 fundamental strokes (&quot;radicals&quot;, I think they are called), and
 then &quot;commit&quot; the composite character to the application.
 ( yes, keyboarding these scripts _is_ quite slow, I believe
  a good typist can only do a few characters a minute!
  and I assume using a qwerty keyboard is very painful. ) some XIMs compose &quot;in place&quot;, others do it on a special line,
 and some seem to do it in a special window (or the root?).
 also, some(/most?) XIMs apparently support a US-ASCII input
 mode as well --- _not_ a general Latin-alphabet input mode,
 which seems to require another TLA, called KBD, and which
 apparently doesn&#x27;t work when an XIM is also being used? ---
 implying you have to switch back and forth between US-ASCII
 input mode (what us English-speakers would call &quot;normal&quot;
 keyboarding/typing), and the other input (e.g., Chinese).
 I&#x27;m not sure, but I have the impression the switch is often
 a toggle, and something like . many apologies if this is completely wrong or too misleading.cheers!
	-blf-p.s.  b.t.w., you almost certainly want to be using a UTF-8
      locale.  if RH 7.3 is the so-called &quot;limbo&quot; release,
      then you may quite possibility be using one by default.--
Â«How many surrealists does it take to    |  Brian Foster    Dublin, Ireland
 change a lightbulb?  Three.  One calms  |  e-mail: blf@utvinternet.ie
 the warthog, and two fill the bathtub   |  mobile: (+353 or 0)86 854 9268
 with brightly-coloured machine tools.Â»  |  http://www.blf.utvinternet.ie    Stop E$$o (ExxonMobile):  Â«Whatever you do, don&#x27;t buy Esso --- they
     don&#x27;t give a damn about global warming.Â»    http://www.stopesso.com
     Supported by Greenpeace, Friends of the Earth, and numerous others...-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001840

**Label:** `benign`

<pre>
social science and conversation analysis , harvey sacks harvey sacks : social science and conversation analysis david silverman , goldsmiths college , london &quot; harvey sacks , as the say , was an original . david silverman provides a thoughtful , lucid account of his penetrating work . i urge anyone concerned with occuring speech to read this book . one &#x27;s sense of how to interpret what is said will be changed . even if one does not adopt the approach , one will have an essential landmark and reference point to inform what one does oneself . &quot; - - dell hymes , university of virginia &quot; david silverman is to be thanked for leading the novice and the expert through the complex , heretofore underground corpus of harvey sacks &#x27;s work . finally , the social science community can study and learn from sacks &#x27;s pathbreaking studies of talk and conversational analysis . the social science community in the field of everyday life studies owes silverman a great debt . &quot; - - norman k . denzin , university of illinois this is the first book-length introduction to the work of harvey sacks , a highly influential sociologist who prior to his tragic death in 1975 developed the theories that came to be known as conversation analysis and ethnomethodology - - theories that have grown to become extremely popular within linguistics , sociology , psychology and anthropology . this volume should be of interest to both students and scholars of conversation analysis and sacks &#x27; work . october 1998 232 pp . 0-19 - 521473 - 0 paper $ 19 . 95 0-19 - 521472 - 2 cloth $ 39 . 95 oxford university press _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ for more information about linguistics titles from oxford : visit the oxford university press usa web site at http : / / www . oup-usa . org or e-mail : linguistics @ oup-usa . org
</pre>

## Record 001841

**Label:** `benign`

<pre>
CNET Investor Dispatch
Quote LookupEnter symbol:Â· Symbol Lookup
Quotes delayed 20+ minutes
â€¢ My Portfolio
â€¢ Broker Reports
â€¢ IPOs
â€¢ Splits
â€¢ Messages
Â 
NXTP
4.42
36.42%
Â 
NXTL
6.53
30.60%
Â 
GENU
2.77
28.84%
Â 
BINX
3.9
25.81%
Â 
CYCL
2.759
23.67%
Â 
ASGN
9.0
-38.48%
Â 
PLUM
3.2
-28.87%
Â 
QFAB
9.92
-28.53%
Â 
SONT
2.16
-26.28%
Â 
RAZFD
3.511
-13.09%
Live tech help NOW!
April&#x27;s tech award
1 million open jobs
News.com: Top CIOs 
ZDNet: PeopleSoftJuly 16, 2002 DJIA8473.11 Â -166.08
 NASDAQ1375.26 Â -7.36
 S&amp;P 500900.94 Â -16.99
 CNETÂ TECH992.91 Â -12.40Techs slump with Intel
With investors selling Intel shares before its post-market close earnings announcement, technology stocks dropped Tuesday.Despite generally upbeat remarks on the economy by Fed Chair Alan Greenspan and news of a profitable quarter from Nextel Communications, CNET&#x27;s Tech index slipped 12.4 points, or 1.25 percent, to 992.91. The tech-laden Nasdaq composite index fell 7.36 points, or 0.53 percent, to 1,375.26.Worse-than-expected earnings from construction machinery maker Caterpillar helped depress broader markets. The Dow Jones industrial average lost 166.0 points, or 1.92 percent, to 8,473.1--for its seventh consecutive losing session. The S&amp;P 500 shed 16.99 points, or 1.85 percent, to 900.94--another multi-year low.
Microsoft reveals media XP details 
Microsoft on Tuesday gave an official name to an upcoming version of Windows XP that aims to make the PC a permanent part of the home entertainment center.
Originally code-named Freestyle, this entertainment version of Windows--which will go by the name Windows XP Media Center Edition--will appear on new PCs and PC hybrids in time for the holidays, the company revealed on Tuesday. With Windows Media Center, consumers will be able to use a TV remote control to catalog songs, videos and pictures, as well as check TV listings.MICROSOFT CORP 51.25 -1.06% Intel layoffs possible
Chipmaker Intel may be on the verge of announcing massive layoffs or other cuts amid a slow market for personal computers, according to reports.
Intel CEO Craig Barrett is scheduled to speak to employees after stock markets close Tuesday, according to The Wall Street Journal. At about the same time, the chipmaker will discuss its second-quarter results on a conference call with analysts.INTEL CORP 18.36 -3.97% Nextel Turns Profitable, Revenues Jump 
Nextel Communications Inc., the nation&#x27;s No. 5 wireless telephone company, on Tuesday said it turned profitable in its second quarter, driven by strong customer demand that translated to a 25 percent revenue increase.
Nextel also said it expected 2002 operating cash flow of at least $3 billion compared with an earlier forecast calling for $2.5 billion.NEXTEL COMMUNIC&#x27;NS&#x27;A&#x27; 6.53 30.6% 
Also from CNET
Real-time stock quotes from CNET News.com Investor.30-day free trial!
Banc of America Securities begins coverage of Power Integrations with a &quot;market performer&quot; rating in tech notes 7/16/02 
Analyst Douglas Lee says the maker of power supply integrated circuits is building a market niche with a more efficient and reliable technology than traditional approaches to converting AC-to-DC power supplies. He also notes Power Integrations is expanding its market with DC-to-DC power supply products, and says the firm&#x27;s growth is based on converting today&#x27;s power supplies to its more efficient technologies. As a result, the company doesn&#x27;t need a boost in end-market demand to grow, Lee says. Although he sees a large, untapped market for Power Integrations and likes its long-term prospects, Lee suggests the stock is fairly valued. He believes shares of POWI are unlikely to rise much in the short term.POWER INTEGRATIONS 18.72 5.23% 
Visit the Brokerage Center
French TV exec says Vivendi tapped him for CFO 
 A French television executive said on Tuesday he had been approached about taking over as finance chief at beleaguered media giant Vivendi Universal -- and acknowledged the job would be a &quot;challenge.&quot;Jacques Espinasse, chief operating officer at French satellite TV consortium TPS, has been cited by the French press as a candidate for the financial hot seat at Vivendi, which is grappling with cash and debt problems in the wake of the sacking earlier this month of chairman Jean-Marie Messier.VIVENDI UNIVERSAL 15.38 -5.06% 
Visit the CEO Wealth MeterDigital photography starter kitThis guide to digital photos will show you the best products to take your images from snap to finish.
        â€¢ Panasonic&#x27;s littlest Lumix
        â€¢ Minolta&quot;s 4-megapixel Dimage F100Most popular products
Digital cameras
        1. Canon PowerShot G2
        2. Canon PowerShot S30
        3. Canon PowerShot S40
        4. Canon PowerShot A40
        5. Sony Cyber Shot DSC-F707
 See all most popular cameras
NEW!
CNET professional e-mail publishing for just $24.95/month.
            FREE for 30 days. Click
            here!
 The e-mail address for your
        subscription isÂ qqqqqqqqqq-zdnet@spamassassin.taint.orgUnsubscribeÂ |Â Manage My SubscriptionsÂ |Â FAQÂ |Â Advertise
Please send any questions, comments, or concerns toÂ dispatchfeedback@news.com.
Price comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          
.
</pre>

## Record 001842

**Label:** `benign`

<pre>
re : simon , i shall bring a floppy to paris . vince &quot; simon turner &quot; on 09 / 29 / 2000 10 : 13 : 47 am please respond to &quot; simon turner &quot; to : cc : subject : re : vince this works . are you attaching your presentation for next week ? ? thanks simon - - - - - original message - - - - - from : vince . j . kaminski @ enron . com to : simon @ localbloke . freeserve . co . uk cc : vince . j . kaminski @ enron . com date : wed 27 september 2000 5 : 04 : pm &gt; test &gt; &gt; vince kaminski &gt; &gt;
</pre>

## Record 001843

**Label:** `benign`

<pre>
re : 3 . 396 chomsky citations i agree with mark durie that it is less curious that chomsky is cited so much than that others before him are cited so little , at least by linguists . for example , two of the most important issues in multilinear phonology , one fairly recent , the other around since the 70 &#x27;s , are many-to - one mapping between tones and vowels and * prosodic licensing * , the notion that elements of one linguistic level must belong to units of a higher level ( usually the next level up ) . both of these notions are explicit principles of tagmemic phonology ( on the first cf . the last two paragraphs of pike &amp; pike 1947 , then read the first line of the introduction to goldsmith &#x27;s 1976 phd thesis for an interesting contrast ; on the second principle , cf . pike 1967 and his discussion of the ` phonemic hierarchy &#x27; ) . one rarely sees pike quoted in this regard ( e . selkirk has long been an exception to this pattern , though ) . geoff pullum &#x27;s nllt column on citation etiquette in linguistics takes up this general problem . this is partially understandable since a lot of tagmemics &#x27; insights take the unappealing form of a disjoint set of ad-hoc commentaries on the last language pike looked at . nevertheless , there is no way to deny that pike is responsible for some brilliant insights into human language . and pike is just one example . there are plenty of others . it is not that anyone needs chomsky to make their work respectable . that is clearly false , whether the individual is saussure or a student . still , if anyone were to seriously doubt that it is chomsky , not saussure , nor bloomfield , nor sapir , nor even jakobson , who ` put linguistics on the map &#x27; of the intellectual disciplines and who has done more to keep it there than anyone else is in need of some psychiatric help . moreover , the fact that chomsky publishes more than any other linguist ( if i am wrong , please correct me - that would be interesting ) does n&#x27;t hurt his citation index . his output is nearly asimovian . his influence on the field can be seen even at the level of university administration : when a department chairperson wants to convince a university administrator that linguistics has natural intellectual ties to many departments , i do not think that they would drop the names of saussure or pike rather than chomsky . it is worth considering the possibility that many of the citations of chomsky &#x27;s work could be due to ignorance - if he said it , or even if we think he did , just cite him and nobody will argue ; why look for the * original * source ? that &#x27;s hard work and laziness too often prevails . but it is also true that , like it or not , the source of many of the most interesting ideas in history on human language came from 20d-219 , mit .
</pre>

## Record 001844

**Label:** `benign`

<pre>
enron europe research group intranet site announced to enron europe with very positive response . hope to catch up with you soon ( probably july ) , anjam x 35383 - - - - - - - - - - - - - - - - - - - - - - forwarded by anjam ahmad / lon / ect on 15 / 06 / 2000 09 : 20 - - - - - - - - - - - - - - - - - - - - - - - - - - - enron europe from : enron europe general announcement 14 / 06 / 2000 18 : 53 please respond to anjam ahmad / lon / ect to : ect europe cc : subject : research group intranet site research group intranet site following the recent lunch presentations , there has been considerable interest from enron europe staff in improving their quantitative skills , helping to maintain our competitive advantage over competitors . we have recently created the research group &#x27; s intranet site which you can find on the enron europe home page under london research group . the site contains an introduction to the group and also information on : derivatives pricing risk management weather derivatives credit risk extensive links database if you have any questions or issues on quantitative analysis ( including hedging and risk management of derivatives ) please don &#x27; t hesitate to get in touch . regards , anjam ahmad research group first floor enron house x 35383
</pre>

## Record 001845

**Label:** `benign`

<pre>
start date : 12 / 25 / 01 ; hourahead hour : 9 ; start date : 12 / 25 / 01 ; hourahead hour : 9 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001122509 . txt
</pre>

## Record 001846

**Label:** `benign`

<pre>
I have a strange problem with one user in a small network using ssh.
Everyone in the network uses ssh and they run an ssh-agent on login. This
works fine for conveniently wandering around the network and to some of our
external boxes - or did, until today. Suddenly, when one user (alfred) tries
to ssh anywhere he&#x27;s asked for a password. He says He changed nothing (don&#x27;t
they all) but I do actually believe him. I used ssh-keygen to make new keys
but that didn&#x27;t help. I created a new user alfio into whose home directory I copied alfred&#x27;s .ssh
directory - alfio can wander around free as a bird without being asked for a
password ever (except of course for the passphrase to load the identiy into
the agent).In case there was something else in Alfred&#x27; environment, I copied .??* from
alfred&#x27;s home directory to alfio&#x27;s, remembering to change ownership
afterwards. Still alfio is as free as a bird.We use only SSH2 with DSA keys. An extract from a ssh -v for alfio is belowdebug1: got SSH2_MSG_SERVICE_ACCEPT
debug1: authentications that can continue: publickey,password
debug1: next auth method to try is publickey
debug1: userauth_pubkey_agent: testing agent key /home/alfio/.ssh/id_dsa
debug1: input_userauth_pk_ok: pkalg ssh-dss blen 434 lastkey 0x80916f0 hint -1
debug1: ssh-userauth2 successful: method publickeyand before starting this ssh attempt, ssh-add -l for alfio said:1024 07:4c:7c:90:0d:28:41:3a:95:c2:81:3d:ba:c4:3d:03 /home/alfio/.ssh/id_dsa (DSA)whereas with alfred the same segment of the debug log wentdebug1: got SSH2_MSG_SERVICE_ACCEPT
debug1: authentications that can continue: publickey,password
debug1: next auth method to try is publickey
debug1: userauth_pubkey_agent: testing agent key /nfshome/alfred/.ssh/id_dsa
debug1: authentications that can continue: publickey,passwordand before starting this ssh attempt, ssh-add -l for alfred said:1024 07:4c:7c:90:0d:28:41:3a:95:c2:81:3d:ba:c4:3d:03 /home/alfred/.ssh/id_dsa (DSA)
This problem is definitely related to alfred as a user - it happens when he
logs in on differing workstations (all NFS mounting the same home
directories) and the other users (including good old alfio) don&#x27;t have any
problems.
Niall-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001847

**Label:** `benign`

<pre>
re : 3 . 387 rules , tone grammar in response to eric schiller &#x27;s comments on modern syntax , i have a few questions and comentaries . as a graduate student myself i find that modern syntax has strayed so far into the theoretical realms of the ivory tower , that i am hesitant to delve into it . every two or three days there is another &quot; universal &quot; proposal that is proposed by someone only to be found untrue by someone else . i do n&#x27;t think the only end goal of grammatical theory is to explain why language functions as it does , for me , explanatory adequacy can be the formulation of rules that facilitate the teaching of language , albeit imperfect rules in a strictly scientific sense ( are we still worried how &quot; scientific we appear ? ) but rules that have some practical application . the notion of economy is a good one , as a student i would certainly appreciate less &quot; model &quot; and more substance ! p . s . i hope i have &#x27; nt stuck my foot in my mouth , it &#x27;s just that i am about to start my doctorate and am faced with the question of my specialization , i like syntax but want to do something more &quot; hands on &quot; like sociallinguistics . . . . brett rosenberg dept . spanish and portuguese univ . of arizona
</pre>

## Record 001848

**Label:** `benign`

<pre>
re : integration meeting louise , kathy has kindly agreed to attend for the 11 : 15 to noon component . her cell phone number is 713 - 824 - 2905 . david - - - - - original message - - - - - from : kitchen , louise sent : friday , december 21 , 2001 4 : 03 pm to : kitchen , louise ; colwell , wes ; hodges , georgeanne ; webb , jay ; meyers , thomas ; hillier , bob ; mcauliffe , bob ; rub , jenny ; hall jr . , robert l . ; donovan , bill ; brackett , debbie r . ; oxley , david ; bradford , william s . cc : muller , mark s . ; golden , jeff ; lavorato , john ; schoppe , tammie ; hillis , kimberly subject : re : integration meeting the meeting has been confirmed . they told me that they want to essentially gain an understanding of what our plan is to get up and running as quickly as possible which does i think differ slightly from integration . have i missed any critical group ? 9 am introduction 9 : 15 am infrastructure rub 9 : 45 am it - development hodges , georgeanne ; webb , jay ; meyers , thomas ; hillier , bob ; mcauliffe , bob ; rub , jenny ; hall jr . , robert l . ; donovan , bill cc : muller , mark s . ; golden , jeff ; lavorato , john ; schoppe , tammie ; hillis , kimberly subject : integration meeting one of our potential buyers will be here at 9 am on thursday . the scope of the meeting is to run through the integration schedule . this is a very broad agenda and will probably be very interactive . i tried to put ops first but it really doesn &#x27; t make sense . this really is a really rough agenda for you guys to decide upon but i wanted to set out the areas they wish to cover . 9 am introduction 9 : 15 am infrastructure rub 10 am it - development &amp; ops webb 11 am mid office intergation overview hall 12 noon accounting , cash etc integration overview colwell / georges / meyers 11 am tour of the building / infrastructure donovan wes - they want to cover bank accounts and cash in detail . some time during the morning they want a tour of the facilities - i am arranging with bill donovan . louise kitchen chief operating officer enron americas tel : 713 853 3488 fax : 713 646 2308
</pre>

## Record 001849

**Label:** `benign`

<pre>
esl curriculum after 20 years as a research scientist , i am starting a new career in esl . i am interested in developing ( or adapting ) a specialized course for foreign medical trainees in american medical schools and hospitals . i &#x27; m also interested in esp courses for students in the sciences . i presently teach &quot; english for international graduate teaching assistants &quot; which is a very practical course to enhance the teaching assistants &#x27; effectiveness in the classrom / lab . i would appreciate anyone sharing course description , syllabus , texts used , comments . . . thanks , gfridland @ utmem1 . utmem . edu
</pre>

## Record 001850

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 18 / 02 ; hourahead hour : 24 ; hourahead schedule download failed . manual intervention required . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002011824 . txt error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database
</pre>

## Record 001851

**Label:** `benign`

<pre>
lrec workshop call for participation a workshop on minimizing the effort for language resource acquisition granada , spain , 26 may , 1998 in conjunction with the first international conference on language resources and evaluation granada , spain , 28-30 , may 1998 an applied nlp system must produce adequate results and must be made deployable within reasonable time . gathering and acquiring language resources to build an application system is very time-consuming , and it is imperative to find ways of speeding up acquisition of high quality , useful static knowledge sources such as a variety of grammars , lexicons , corpora , etc . viability of avoiding masive resource acquisition , if possible , must also be carefully considered . resource acquisition should include methods , based both on sound theoretical principles and practical experience , of deciding , among other things , on the amount of knowledge one * really * needs for a given application . increasing the size of knowledge sources or their number and variety does not necessarily lead to a commensurate improvement of output quality in an application , though a correlation between the two certainly exists , but it definitely needs to much increased costs . no matter how large the acquired resources are and how many of them have been acquired , there will always remain a residue of language processing problems which can be tackled only by foregoing the requirement of full automation and involving expensive semi-automatic or even manual acquisition . it becomes imperative , therefore , to assess when the static knowledge source acquisition is no longer profitable . thus , in a system for interactive authoring and automatic generation of patent claim texts , the lexical knowledge base can be restricted to a lexicon of domain-related verbs marked for subcategorization ( as the nominals are provided interactively by the author ) . the proposed workshop will be devoted to any technological and administrative facet of economy of acquisition effort . the technological issues to be discussed at the conference include , but are not limited to : - minimization of effort in acquiring monolingual and multilingual text corpora ; - minimization of effort in acquiring computational lexicons , including phonological , morphological , syntactic , semantic and other ( including application-specific ) information ; - minimization of effort in acquisition of resources for the support of corpus-based language engineering methods ; - minimization of effort in acquiring grammatical coverage of languages and sublanguages ; - methods of determining levels of reusability of existing language resources ; - balancing the needs of the application and the grain size of language description ; - minimization of effort through balancing automatic and interactive methods of knowledge acquisition ; - evaluation of potential utility of resources to applications ; we particularly encourage reports about actual practical large-scale resource acquisition efforts in which economy of effort has been a conscious choice . organizing committee : svetlana sheremetyeva , nmsu crl , usa ( chair ) eduard hovy , usc isi , usa bernardo magnini , irst , italy sergei nirenburg , nmsu crl , usa victor raskin , purdue university , usa frederique segonde , xerox research centre europe , france leo wanner , university of stuttgart , germany submission of papers papers should not exceed 4000 words or 10 pages . presentations will be selected on the basis of a review of papers and project reports . submission mode each submission should include a title page containing the title , author ( s ) , affiliation ( s ) , submitting author &#x27;s mailing address , telephone number , fax number and e-mail address . the authors may submit three hard copies or submit electronically in postscript form to : svetlana sheremetyeva computing research laboratory new mexico state university , usa box30001 / dept . 3crl / las cruces new mexico 88003-8001 lana @ crl . nmsu . edu receipt of submissions will be acknowledged . important dates thursday , february 19 , 1998 submissions due monday , march , 16 1998 acceptances and rejections friday , april 10 1998 final papers due tuesday , may 26 , 1998 workshop date registration for the workshop will be : 10 , 000 pesetas for those not attending lrec 5 , 000 pesetas for those attending lrec these fees will include a coffee break and the proceedings of the workshop . participation in the workshop will be limited by the venue . requests for participation will be processed on the first come first served basis .
</pre>

## Record 001852

**Label:** `benign`

<pre>
enron methanol ; meter # : 988291 this is a follow up to the note i gave you on monday , 4 / 3 / 00 { preliminary flow data provided by daren } . please override pop &#x27; s daily volume { presently zero } to reflect daily activity you can obtain from gas control . this change is needed asap for economics purposes .
</pre>

## Record 001853

**Label:** `benign`

<pre>
job posting university of tuebingen department of linguistics division of computational linguistics research position for a computational linguist we are advertising a research position in the verbmobil project , which is funded by the german ministry for education and research ( bmbf ) . verbmobil is concerned with the development of a portable speech-to - speech translation system for &quot; face-to - face &quot; - communication . the verbmobil - subproject at the department of computational linguistics in tuebingen is concerned with semantic evaluation and transfer for machine translation between german and english , in particular : - the semantic repraesentation , disambiguation and translation of temporal expressions - the semantic repraesentation , disambiguation and translation of complex words - the computational modelling of these empirical domains , and - and the implementation of a working subsystem of verbmobil in collaboration with other verbmobil sites . candidates should have experience in computational linguistics ( particularly in unification-based formalisms ) or computer science . knowledge of german and experience in machine traslation , nl - syntax / semantics ( particularly in head - driven phrase structure grammar , discourse representation theory and in the semantics of tense and aspect ) , logic , or prolog - programming is highly desirable . the successful candidate will be expected to work both on theoretical issues and practical implementation . the project started in 1993 and will last until december 1996 , with the possibility of extension depending on funding . the successful candidate would be expected to take up the position as soon as possible . the position is at the rank of &quot; wissenschaftlicher mitarbeiter &quot; ( salary on the german payscale of bat iia ; minimum of 65 000 dm per year ) . applications should include cv and an outline of research experience and interests . names and addresses of references would be helpful . applications should be sent by mail or email to the address below . applications received by july 15th , 1995 will receive full consideration . prof . dr . erhard w . hinrichs seminar fuer sprachwissenschaft abt . computerlinguistik eberhard - karls universitaet tuebingen kleine wilhelmstr . 113 d-72074 tuebingen germany hinrichs @ sfs . nphil . uni-tuebingen . de
</pre>

## Record 001854

**Label:** `benign`

<pre>
@ jones : news and information from the jones school @ jones : news and information from the jones school march 13 , 2001 forbes magazine survey alumni association reception - - new york : march 15 conference - - perspectives on women in business : march 16 southwest business plan competition - - march 30 - 31 rice alliance business presentation forum - - march 30 cancelled - - neuhaus lecture : march 19 dean &#x27; s lecture - - ralph eads , executive vice president , el paso corp . : april 11 black leadership conference : april 27 prof . stephen zeff publishes new book on henry rand hatfield , accounting historian rice alliance continues expansion of network , enhances services jones school campaign visit construction site - - - - - - - - - - - - - - - - - - - - - - - announcement - - - - - - - - - - - - - - - - - - - - - - - if those of you in the class of 1996 haven &#x27; t received the forbes magazine survey , please do fill it out when it comes . forbes is looking at return on investment . your names and addresses will not be used for any other purpose beyond this one - page questionnaire and your responses will remain confidential . as you know , rankings are influenced by the percentage of the class which returns the survey . this is true for all rankings . we greatly appreciate your taking your time to do this and thank you for supporting the jones school . - - - - - - - - - - - - - - - - - - - - - - - news - - - - - - - - - - - - - - - - - - - - - - - the jones graduate school alumni association will host a dean &#x27; s reception on thursday , march 15 , in new york city . you and your guest are invited to join gil whitaker , dean and professor of business economics , for cocktails and hors d  , oeuvres from 6 to 8 p . m . on march 15 at the 50 th floor , j . p . morgan chase &amp; co . building , 270 park avenue , new york , ny . please rsvp to deanna sheaffer , director of finance and alumni affairs , at sheaffer @ rice . edu or 713 - 348 - 6222 . managers and business owners will address issues related to women in leadership in the march 16 conference &quot; grace under pressure : perspectives on women in leadership &quot; in herring hall . the conference , sponsored by enron corp . , j . p . morgan chase monika drake , assistant director of career planning , jones school ; marla hutchison , principal , deloitte consulting ; christie patrick , vice president , public affairs , enron corp . ; and bette wickline , director , women  , s business initiative , j . p . morgan chase &amp; co . the march 19 neuhaus lecture featuring c . k . prahalad , harvey c . fruehauf professor of business administration , university of michigan graduate school of business administration , ann arbor , has been cancelled . it will be rescheduled at a later date . the jones school and the rice alliance will welcome aspiring entrepreneurs at the first southwest business plan competition , scheduled for march 30 - 31 , at herring hall . nine teams from schools in the southwest region of the u . s . will compete for the opportunity to enter the international moot corpc competition held each year at the university of texas , austin . http : / / www . alliance . rice . edu / swbpc / the rice alliance hosts the second annual business plan presentation forum from 9 a . m . to 1 : 30 p . m . on saturday , march 31 , duncan hall . the forum is intended to provide presenters with candid and constructive coaching on the components of their business plans . ralph eads , group executive vice president of merchant energy and production for el paso corp . , will speak at the dean &#x27; s lecture series scheduled for 9 : 45 a . m . on wednesday , april 11 at 124 herring hall . http : / / jonesgsm . rice . edu / news / calendar / index . cfm ? eventrecord = 1735 author and financial advisor brooke stevens ; shell oil company chairman steve miller ; former u . s . secretary of energy hazel o &#x27; leary ; and federal reserve board member samuel golden . http : / / jonesgsm . rice . edu / content / content . cfm ? pageid = 60 stephen zeff , the herbert s . autrey professor of accounting and professor of managerial studies , was profiled in the march 1 edition of rice news for the successful release of his book on accounting historian henry rand hatfield , the first first full - time accounting professor in a u . s . university . in its 2001 rankings of the top full - time mba programs in the world , the financial times ranked the jones school among the ten best in four categories : value for money ; employed at three months ; finance ; entrepreneurship . overall , the jones was ranked 35 th of 51 u . s . schools and 54 th among the world &#x27; s best 100 graduate business schools . the rice alliance for technology and entrepreneurship enters its second year determined to enhance services that have promoted the entrepreneurial spirit in the rice community and in houston . the alliance brings together students , faculty , alumni and other rice - associated parties as collaborators , mentors and investors in engineering , science , software , or e - commerce innovations . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - online : - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - visit the construction web cam url for up - to - the - minute live feeds of the new jones school building construction . learn about new and upcoming initiatives and programs at the school , and view artist renderings of the new $ 60 million building , currently under construction . http : / / jonesgsm . rice . edu / campaign / campaign . html @ jones : news and information from the jones school , the jones school e - newsletter , is published monthly by the public relations department of the jesse h . jones graduate school of management . the jones school website http : / / jonesgsm . rice . edu is updated frequently and we encourage you to visit the site regularly to get the latest news and information about new initiatives and programs at the jones school . to submit items to be posted on the jones school website , please e - mail jgsmnews @ rice . edu or call 713 - 348 - 6364 .
</pre>

## Record 001855

**Label:** `benign`

<pre>
On Fri, Jul 19, 2002 at 10:19:50PM -0700, Rick Moen wrote:
&gt; Some people strip down old 486 boxes, take out the hard drive, disable
&gt; the fans, and run the thing from just a floppy drive or a CDR you&#x27;ve
&gt; burned for the purpose.  what about using a pcmcia card and a compaq flash card?  or doing an
nfs boot to a server in a noiser part of the house?  (the boiler room
or something like that)kevin-- 
kevin@suberic.net     that a believer is happier than a skeptic is no more to
fork()&#x27;ed on 37058400    the point than the fact that a drunken man is happier
meatspace place: home       than a sober one. the happiness of credulity is a
http://ie.suberic.net/~kevin   cheap &amp; dangerous quality -- g.b. shaw-- 
Irish Linux Users&#x27; Group Social Events: social@linux.ie
http://www.linux.ie/mailman/listinfo/social for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001856

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85485894
Date: Not suppliedBen Hammersley posts a parable about design specifications, showing the link 
between Roman Chariots and the Space Shuttle. It has the ring of something 
apocraphyl to me, but it&#x27;s a good read, nevertheless.     The U.S. standard railroad gauge (distance between the rails) is 4 feet, 
    8.5 inches. That is an exceedingly odd number. Why was that gauge used? 
    Because that&#x27;s the way they built them in England, and the U.S. railroads 
    were built by English expatriates.     Why did the English build them that way? Because the first rail lines were 
    built by the same people who built the pre-railroad tramways, and that&#x27;s 
    the gauge they used.     Why did &quot;they&quot; use that gauge? Because the people who built the tramways 
    used the same jigs and tools that they used for building wagons, which used 
    that wheel spacing.     So why did the wagons have that particular odd spacing? Well, if they tried 
    to use any other spacing, the wagon wheels would break on some of the old, 
    long distance roads in England, because that was the spacing of the wheel 
    ruts... Snopes says it&#x27;s false[1], but from their notes, it appears that it&#x27;s actually 
largely true, albeit subject to interpretation. Link[2] Discuss[3][1] http://www.snopes.com/history/american/gauge.htm
[2] http://www.benhammersley.com/archives/001404.html#001404
[3] http://www.quicktopic.com/boing/H/ibHLzVeWnweZ

</pre>

## Record 001857

**Label:** `benign`

<pre>
cilca vii how long does it take for this to come out on the list ? ? ? ? ? ? cilca vii septimo congreso internacional de literatura centroamericana in nicaragua march 17 - 19 , 1999 special call for papers although this conference is principally geared toward central american literature , we are making a special call to linguists for research on central american linguistics . we were quite succesful with our special linguistics sessions in the 1995 conference . please submit abstracts ( one page ) and proposals for special sessions no later than november 16 , 1998 to : alberto rey department of modern languages &amp; literatures howard university washington , d . c . 20059 office : ( 202 ) 806 - 4926 fax : ( 202 ) 806 - 4514 you may also email the abstracts to me at : arey @ fac . howard . edu alberto rey , ph . d . arey @ fac . howard . edu / alrey @ erols . com associate professor dept . modern languages &amp; literatures howard university office : ( 202 ) 806-4952 / 6758 washington , dc 20059 fax : ( 202 ) 806-4514
</pre>

## Record 001858

**Label:** `benign`

<pre>

----- Original Message -----
From: &quot;R. A. Hettinga&quot; 
&gt;
&gt;
&gt; &gt; &quot;Free trade and free markets have proven their ability to lift whole
&gt; &gt; societies out of poverty&quot;
&gt; &gt; I&#x27;m not a socio-political/history buff - does anybody have some clear
&gt; &gt; examples?
&gt;
&gt; You&#x27;re probably living in one, or you wouldn&#x27;t be able to post here.
&gt;
When was the whole US society in poverty &amp; was that before free trade &amp; free
markets?
I&#x27;m looking for transitions due to free xyz.

</pre>

## Record 001859

**Label:** `benign`

<pre>
&gt; First you complain about the supposed lack of
&gt; threading in Internet Mail, and then you reply to
&gt; one of the messages in that thread on an unrelated
&gt; topic, messing things up for those of us with
&gt; threading turned on?&gt; Even Outlook Express does threading!
 
&gt; Sigh...
I apologise for wasting your time.I follow this list from home, and thus use
a yahoo account. I haven&#x27;t been able to find
a threading mechanism for this, plus the
fact that the list can start to fill up
my inbox after about a week of no pruning.This is the reason for my initial grumbling. I 
would like to be able to follow what&#x27;s going
on without clogging up my yahoo account.
Anyway, I should have initiated a new thread for my
different request about S.u.S.E. CDs. I won&#x27;t repeat
my error!
Again, my humble apologies.Paul... 
&gt; Nickp.s. accidentally emailed privately - sorry!
___________________________________________________________
Do You Yahoo!? -- Une adresse @yahoo.fr gratuite et en franÃ§ais !
Yahoo! Mail : http://fr.mail.yahoo.com-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001860

**Label:** `benign`

<pre>

BIG 12 OR BUST
Â 
This
weekend you can see the Nebraska Cornhuskers, Utah State, Kansas
State and the University of Louisiana/Monroe - LIVE AND EXCLUSIVELY
ON THE INTERNET! FOXSports.com
presents BIG 12 football! Now you can see your favorite
teams play, even if you can&#x27;t get to a live game or it&#x27;s not
on TV.FOXSports.com has partnered with RealOne to bring Big 12 football
fans LIVE webcasts that put you in the stands - even from home.The best part... you can get ALL of the webcasts and exclusive
Big 12 news, highlights and coverage by becoming a member of
RealOne SuperPass. With SuperPass you get:
All
Big 12 webcasts, highlights and exclusive coverage
Unaired
video footage from FOX Sports and FOX Sports Net
Exclusive
video from channels like NASCAR.com and MLB.com
Plus,
top news content from ABCNews.com and CNN.com
True to your school? Only want certain games? You can get them individually too!
Sign up
now! Click
here.
Want more
details? Click
here.
To unsubscribe from future FOXSports.com emails, click
here.
</pre>

## Record 001861

**Label:** `benign`

<pre>
re : friday brown bag lunch on option pricing vince , thanks for your support . we will continue the friday lunch series , which i think is very useful for us to keep up with the lastest development in various areas . zimin vince j kaminski 01 / 03 / 2001 08 : 29 am to : zimin lu / hou / ect @ ect cc : alex huang / corp / enron @ enron , stinson gibner / hou / ect @ ect , vince j kaminski / hou / ect @ ect subject : friday brown bag lunch on option pricing zimin , i have talked to alex about it . i don &#x27; t think that the additional seminars will crowd out the brown bag lunches . the seminars are really targeted to people who recently joined the group and have very limited , or zero , exposure to energy markets . for most members of the group it should be the piece of cake . brown bag lunches are not that time intensive , except for the speaker . plus , we ran out of days available for lunch meetings . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 01 / 03 / 2001 08 : 27 am - - - - - - - - - - - - - - - - - - - - - - - - - - - alex huang @ enron 01 / 02 / 2001 12 : 15 pm to : vince j kaminski / hou / ect @ ect cc : stinson gibner / hou / ect @ ect subject : friday brown bag lunch on option pricing vince , this is a brief summary of last year &#x27; s friday brown bag lunch option pricing series . we had about 15 lectures , given by the following people : grant , stinston , vasant , krishna , zimin , maureen , clayton , paulo , chonawee , myself , and some outside speakers . we were able to attract some outside audience as well . overall the response is quite encouraging and we have planned to continue it . in light of the presently scheduled seminars on &quot; energy derivatives &quot; , it seems our friday schedule will be too crowded if we have seminars on &quot; energy derivatives &quot; on two fridays and fbblop on other fridays . what &#x27; s your suggestion ? should we discontinue the fbblop ? we also have scheduled january 19 for tom halliburton &#x27; s visitor leon lasdon from ut austin to talk on non - linear programming . should we cancel it ? best , zimin &amp; alex
</pre>

## Record 001862

**Label:** `benign`

<pre>
australian linguistics society final call for papers als-98 australian linguistics society conference als-98 july 3 - 5 , 1998 university of queensland brisbane , queeensland , australia local organizer : john ingram submission deadline : february 28 , 1998 the 1998 annual conference of the australian linguistics society ( als ) will be held at emmanuel college , the university of queensland , 3 - 5 july , just prior to ali-98 ( australian linguistics institute ) . the conference organizers invite submissions on any area of contemporary linguistic research . papers will be given as oral presentations , 25 minutes , plus 5 minutes for questions . abstracts will be reviewed for suitability as conference presentations . selected papers will be published electronically as refereed conference proceedings . * how to submit abstracts abstracts ( approx . 300 words ) may be submitted by mail , e-mail , or fax . submissions must be received by february 28 , 1998 . at the top of the abstract please include your name , affiliation , address , telephone and fax numbers , and e-mail address . email submission of abstracts is preferred to : als98 @ cltr . uq . edu . au otherwise , mail abstracts to : the organizers , als-98 department of english university of queensland brisbane , 4072 , australia fax : + 61 7 3365 2799 * for questions or more information on the conference please check our conference website : http : / / www . cltr . uq . oz . au : 8000 / als98 / or contact john ingram department of english university of queensland brisbane 4072 australia jingram @ lingua . cltr . uq . edu . au fax : + 61 7 3365 2799
</pre>

## Record 001863

**Label:** `benign`

<pre>
Update of /cvsroot/spamassassin/spamassassin/masses/tenpass
In directory usw-pr-cvs1:/tmp/cvs-serv26829/tenpassLog Message:
Directory /cvsroot/spamassassin/spamassassin/masses/tenpass added to the repository
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-commits mailing list
Spamassassin-commits@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-commits
</pre>

## Record 001864

**Label:** `benign`

<pre>
re : resume how did it go with renshi zhang and bill koures ? renshi has two offers already . if you want to persue him , i would recommend moving quickly . regards , marshall brown vice president robert walters associates tel : ( 212 ) 704 - 0596 fax : ( 212 ) 704 - 4312 mailto : marshall . brown @ robertwalters . com http : / / www . robertwalters . com &gt; - - - - - original message - - - - - &gt; from : vince . j . kaminski @ enron . com [ smtp : vince . j . kaminski @ enron . com ] &gt; sent : monday , march 12 , 2001 6 : 36 pm &gt; to : marshall . brown @ robertwalters . com &gt; cc : vince . j . kaminski @ enron . com &gt; subject : re : resume &gt; &gt; &gt; marshall , &gt; &gt; i am catching up with my mail . we would like to talk to this candidate as &gt; well &gt; ( phone interview ) . &gt; &gt; vince &gt; &gt; &gt; &gt; &gt; &gt; marshall brown on 02 / 21 / 2001 12 : 36 : 39 &gt; pm &gt; &gt; to : vince kaminski &gt; cc : &gt; subject : resume &gt; &gt; &gt; vince , &gt; this candidate would be interested in speaking with you . &gt; regards , &gt; &gt; marshall brown &gt; vice president &gt; robert walters associates &gt; tel : ( 212 ) 704 - 0596 &gt; fax : ( 212 ) 704 - 4312 &gt; mailto : marshall . brown @ robertwalters . com &gt; http : / / www . robertwalters . com &gt; &gt; &gt; &gt; &gt; &gt; &gt; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * &gt; caution : electronic mail sent through the internet is not secure and could &gt; be intercepted by a third party . &gt; &gt; this email and any files transmitted with it are confidential and &gt; intended solely for the use of the individual or entity to whom they &gt; are addressed . if you have received this email in error please notify &gt; the system manager . &gt; &gt; this footnote also confirms that this email message has been swept by &gt; mimesweeper for the presence of computer viruses . &gt; &gt; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * &gt; &gt; ( see attached file : kour _ vas . doc ) &gt; &gt; &gt;
</pre>

## Record 001865

**Label:** `benign`

<pre>
summary : vowel deletion between two like consonants quite some time ago , i wrote requesting information concerning instances of proper names where the pronunciation reflects a deletion of a vowel occuring between two like consonants in the spelling of the name . i cited such names as farrer [ fer ] worcester [ wust ^ r ] and leicester [ lest ^ r ] and had hoped to find a whole slew of other names exhibiting this phenomenon . unfortunately , i got no responses which dealt with proper nouns . however , i did get some interesting responses discussing how this occurs in hungarian , arabic , and english outside the realm of proper nouns . thanks to all who responded . sorry i did n&#x27;t post sooner . it &#x27;s just that i had hoped to get something on proper nouns before replying . sincerely , david harris david harris david @ las-inc . com language analysis systems voice : ( 703 ) 834-6200 ext . 242 2214 rock hill road , suite 201 fax : ( 703 ) 834-6230 herndon , va 22070 original query : &gt; i &#x27; ve been thinking about names like worcester , leicester , and &gt; gloucester which , though perhaps viewed by most of my fellow americans &gt; as strange relics of british eccentricity , really do follow a simple &gt; and straightforward phonological process where two like consonantal &gt; continuants separated by a weak vowel ( in this case schwa ) are merged &gt; into one by the deletion of this weak vowel . the same phenomenon &gt; occurs with the name of a school in provo , utah which i attended as an &gt; adolescent : &gt; &gt; farrer junior high school &gt; this is pronounced &quot; fair &quot; ( or &quot; ferr &quot; if your accent makes a &gt; difference between [ er ] and [ eir ] which mine does n&#x27;t ) &gt; &gt; anyway , using a regular expression , i searched the 1990 us census &gt; list of 80 , 000 surnames available on the web in order to find names &gt; in which like consonants were separated by one vowel and came across &gt; a few more from various language groups that may or may not be &gt; examples of this . ( it &#x27;s hard to know when you can&#x27;t have the names &gt; pronounced for you as well as see them written . ) my question , then , &gt; is this : &gt; i would be interested in knowing in what other languages this &gt; phenomenon occurs and with what other sounds . judging from some of &gt; the names i encountered in my search , i suspect that it may occur in &gt; japanese where [ i ] and [ u ] deletion causes two like consonants to be &gt; connected together . also , in languages where word-internal gemination &gt; is phonemic , i &#x27; m curious as to whether simplification occurs as it &gt; does in english or if the gemination retains its full phonological &gt; value . please include as many examples as you can with your comments &gt; and i will post a complete summary to the list . any other &gt; observations about this phenomenon are also welcome . beginning of responses : * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 1 - subject : worcester here is a hungarian example : _ ko2zta1rsasa1g _ / ko / starsasa : g / fast / casual [ ko / stassa : g ] ` republic &#x27; and another lexicalized one : _ azt hiszem _ / ast hisem / &gt; [ asisem ] &gt; [ assem ] ` that - acc believe - i &#x27; i cannot think of examples with non-coronals , but that - i think _ has to do with statistics . symbols : o / = ipa slashed o ( round front mid vowel ) , s = eng sh a = round back low vowel e = ipa epsilon best , peter szigetvari szigetva @ osiris . elte . hu * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 2 - from : russell @ ukraine . corp . mot . com ( dale russell ) to : dharris @ las-inc . com phonological process - - worcester / gloucester / leicester &gt; also , in languages where word-internal gemination is phonemic , i &#x27; m &gt; curious as to whether simplification occurs as it does in english &gt; or if the gemination retains its full phonological value . does such simplification always occur in english ? does &quot; meanness &quot; rhyme exactly with &quot; venus &quot; ? i &#x27; ve heard this example used to argue that english does make at least limited use of the concept of the mora , claiming that both / n / s in &quot; meanness &quot; get pronounced . dale russell russell @ ukraine . corp . mot . com * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 3 - subject : deleted vowel in response to your linguist posting : note that am . eng . speakers often delete the schwa between the / d / &#x27;s , so that &quot; where did he go &quot; becomes &quot; where &#x27;d he go &quot; , and &quot; how did she do that &quot; becomes &quot; how &#x27;d she do that &quot; . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - dan loehr &quot; wherever you go , there you are . &quot; georgetown university loehrd @ gusun . acc . georgetown . edu - buckaroo bonzai http : / / www . geocities . com / athens / 4944 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 4 - from : &quot; robert port &quot; &lt; port @ cs . indiana . edu &gt; deleted vs in eng to : dharris @ las-inc . com first syllable of farrer ? ? content - length : 503 vowel elision x - confirm - reading - to : cpeust @ gwdg . de x - pmrqc : 1 priority : normal look into arabic : the 3rd person singular of the perfect tense of verbs is most commonly formed cacaca ( c being the root consonants ) , e . g . kataba &quot; he wrote &quot; the first person of this verb is katabtu &quot; i wrote &quot; now verbs with two identical consonants behave irregularly : while the 1st person sg . of the verb &quot; to pass &quot; is marartu &quot; i passed &quot; , the 3rd person is marra &quot; he passed &quot; instead of the expected * marara . the same is true for many other semitic languages ( hebrew etc . ) . carsten peust seminar of egyptology and coptology goettingen cpeust @ gwdu20 . gwdg . de or cpeust @ gwdg . de
</pre>

## Record 001866

**Label:** `benign`

<pre>
bu conf . on lang . dev . the 23nd annual boston university conference on language development call for papers november 6 , 7 and 8 , 1998 keynote speaker : peter jusczyk , johns hopkins university plenary speaker : jane grimshaw , rutgers university * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * first and second language acquisition all topics in the field of language acquisition will be fully considered , including : bilingualism literacy &amp; narrative cognition &amp; language neurolinguistics creoles &amp; pidgins pragmatics discourse pre - linguistic development exceptional language signed languages input &amp;interaction sociolinguistics language disorders speech perception &amp; production linguistic theory ( syntax , semantics , phonology , morphology , lexicon ) abstracts submitted must represent original , unpublished research . presentations will be 20 minutes long , plus 10 minutes for questions . please submit : 1 ) six copies of an anonymous , clearly titled 450 - word summary for review ; 2 ) one copy of a 150 - word abstract for use in the conference program book if your abstract is accepted . if your paper is accepted , this abstract will be scanned into the conference handbook . no changes in title or authors will be possible after acceptance . 3 ) for each author , one copy of the information form printed at the bottom of this sheet . please include a self-addressed , stamped postcard for acknowledgment of receipt . notice of acceptance or rejection will be sent by early august . pre - registration materials and preliminary schedule will be available in late august , 1998 . all authors who present papers at the conference will be invited to contribute their papers to the proceedings volumes . those papers will be due in january , 1999 . note : all conference papers will be selected on the basis of abstracts submitted . although each abstract will be evaluated individually , we will attempt to honor requests to schedule accepted papers together in group sessions . deadline : all submissions must be received by may 15 , 1998 . send submissions to : boston university conference on language development 704 commonwealth ave . , suite 101 boston , ma 02215 u . s . a . telephone : ( 617 ) 353-3085 e-mail : langconf @ louis-xiv . bu . edu ( we regret that we cannot accept abstract submissions by fax or e-mail . ) information regarding the conference may be accessed at http : / / web . bu . edu / linguistics / applied / conference . html * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * author information form ( fill out one form completely for each author ) title : topic area : audiovisual requests : full name : affiliation : current address : summer address if different , and dates : current email : summer email : current phone number : summer phone if different : * to accommodate as many papers as possible , we reserve the right to limit each submitter to one first authorship and if circumstances warrant , to limit each submitter to two papers in any authorship status . * please indicate whether , if your paper is not one of the 90 initially selected for presentation , you would be willing to be considered as an alternate . ( if you indicate that you are willing to be considered , this does not commit you to accepting alternate status if it should be offered to you . ) _ _ _ _ _ yes , consider me as an alternate if necessary _ _ _ _ _ no , please do not consider me as an alternate please indicate how you received the 1998 call for papers : _ _ _ _ email / electronic _ _ _ _ surface mail _ _ _ _ word of mouth please indicate how you wish to receive the 1999 call for papers : _ _ _ _ email / electronic _ _ _ surface mail _ _ _ _ both
</pre>

## Record 001867

**Label:** `benign`

<pre>
&gt; 
&gt; Thought this was funny.
&gt; In the slashdot thread about
&gt; EW Dijkstra passing away on
&gt; tuesday, there was:
&gt; 
&gt; GOTO Heaven
&gt;        Re:GOTO Heaven
&gt;        I&#x27;ll bet he gets there by the shortest path.
&gt; 
&gt; Referring to his &quot;Goto considered harmful&quot; etc.
&gt; 
&gt; Sad to see these people go. 3 others I&#x27;ve
&gt; noticed lately were: Richard Stevens, Jim Ellis
&gt; and Jon Postel.
&gt; 
&gt; Pï¿½draig.Interesting. I&#x27;ve always wondered about things &#x27;considered&#x27; to be bad. 
Example the GOTO, most languages support a goto of some sort, so are gotos really bad?Is a loop or a recursive call actually any better than a goto 
or is the goto used as a kind of common enemy of 
programming syntax
to make sure people use loops or recursion?
&lt;&gt;Kind of makes you wonder about things considered to be &#x27;good&#x27;.
For example people bang on about polymorphism, but is there actually any advantage in using an overloaded function based on class inheritance?Hmm.I&#x27;m only laughing on the outside 
My smile is just skin deep 
If you could see inside I&#x27;m really crying 
You might join me for a weep.
&lt;&gt;
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001868

**Label:** `benign`

<pre>
Don Newcomer wrote:
&gt; I&#x27;m a new user (or about to be, hopefully) of SA but I&#x27;ve run into some
&gt; compilation errors that prevent me from installing.  Rather than picking
&gt; through the code, I thought I&#x27;d avoid reinventing the wheel and ask here.
&gt; When I run the &#x27;make&#x27;, I get the following:
&gt; 
&gt; cc: Error: spamd/spamc.c, line 50: In this declaration, &quot;in_addr_t&quot; has no
&gt; linka
&gt; ge and has a prior declaration in this scope at line number 572 in file
&gt; /usr/inc
&gt; lude/sys/types.h. (nolinkage)
&gt; typedef unsigned long   in_addr_t;      /* base type for internet address
&gt; */Don&#x27;t worry about the warnings. To fix the error, edit spamc.c and right 
after the line that says:#define EX__MAX 77Add:#if !defined __osf__
extern char *optarg;
typedef unsigned long   in_addr_t;      /* base type for internet address */
#endif(you&#x27;re adding the two lines that start with #).--Rick-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 001869

**Label:** `benign`

<pre>
I received a spam email that had apparently forged the From header with
my own email address. After reviewing the message I forwarded it with
the rest of a batch of spam ti the database with razor-report. Now of,
course, my own email address is listed int he Razor database. How do I
go about getting it removed.I have seen this ploy (forged From headers) several time since then.
Perhaps the razor-report need to detect this and emit a warning.dave-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 001870

**Label:** `benign`

<pre>
Leave it to Tom to put the one w/ his son&#x27;s wanker in the center. LOL  
Reminds me of when my sister called me about the birth of her first son.  
She goes: &quot;Cindy, he looks just like his dad, but he&#x27;s HUNG!&quot;  LOL ehehe  
Grats, Tom, he&#x27;s gorgeous.  Good thing he doesn&#x27;t look like you.  (:
CindyOn Thu, 1 Aug 2002, Tom wrote:&gt; 
&gt; I gota thank all you kind folk who sent thier well wishes our way. It was
&gt; a bumpy ride but everything is working out and allthe good vibes are a
&gt; tremendous help. Ive saved each one and along with the cards and other
&gt; emails we have been getting we are goign to print them out add them to
&gt; Benjamins baby book.
&gt; 
&gt; Ive had just enough time to Gimp up a pic so folks can see the little
&gt; bloke. Head on over to http://wsmf.blogspot.com/ and have a gander at the
&gt; boy.
&gt; 
&gt; -tom(i cant feedem so I changem)whore
&gt; 
&gt; 
&gt; 
&gt; http://xent.com/mailman/listinfo/fork
&gt; -- 
&quot;My theology, briefly, is that the universe was dictated but not
          signed.&quot;  (Christopher Morley) 
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001871

**Label:** `benign`

<pre>
Ian Andrew Bell writes:
&gt; I think that this and other articles confuse Socialism with 
&gt; Bureaucracy.  Libertarianism as implemented in North America is not 
&gt; exactly the shining pinnacle of economic efficiency.Libertarianism is implemented in North America? Where?!?!?&gt; Just try starting a telephone company in the US or (even worse) 
&gt; Canada.  It can take a year or more to get the blessing of our own 
&gt; &quot;Permit Rajs&quot; at the FCC, PUC, and PTTs (or, in the decidedly more 
&gt; socialist leaning Canada, Industry Canada and the CRTC).Telecom regulations are an example of implemented Libertarianism?And for how screwed up North America&#x27;s telecom industries and
regulators are, they&#x27;re better than much of the rest of the
world, where it doesn&#x27;t just &quot;take a year or more&quot; to get
started: it&#x27;s impossible/illegal. Matters of degree, matter.&gt; Yet, despite all of this intense regulation and paper pushing, as 
&gt; well as regulatory scrutiny by the FTC, SEC, and IRS, the 
&gt; executives of Telecom Companies have managed to bilk the investment 
&gt; community for what looks to be tens of billions of dollars.  They 
&gt; finished their routine with the a quadruple lutz -- laying off 
&gt; hundreds of thousands of workers when it all came crashing down.
&gt; 
&gt; So.. tell me again.. how are we better off?We can lose billions of dollars, and have hundreds of thousands of 
people laid off... and after it all, our diets, health, longevity, 
and freedom to pursue activities of our own choosing are still the 
envy of billions of people. Would you rather be unemployed, broke, and in possession of career
skills which merely match the local average in:  - North America, or 
  - India/Peru/Egypt/Philippines/etc????- Gordon
http://xent.com/mailman/listinfo/fork
</pre>

## Record 001872

**Label:** `benign`

<pre>
Russell Turpin wrote:
&gt;Invite her for an afternoon cruise under the Golden Gate bridge in
&gt;your Stonehorse day sailor.Sounds good.
&gt;Under way, ask her if she&#x27;d like to take the stick.Whoah!  That&#x27;s a rather direct approach!
R. A. Hettinga quoted:
&gt;From: Somebody
&gt;[...] what I did in 1983 was to rent a plane from the Moffett Field
&gt;flying club and take her on an aerial tourSounds great.
&gt;I can&#x27;t recall whether or not I gave her any stick time.Can&#x27;t remember if he&#x27;s in the mile-high club?  Even worse!!!
R

</pre>

## Record 001873

**Label:** `benign`

<pre>
re : conference may 31 on energy derivatives in toronto phelim , i shall be glad to join you for dinner on sunday . i shall be also available for the panel discussion . i would like to thank you one more time for the invitation to speak at the conference . vince phelim boyle on 05 / 12 / 2000 03 : 47 : 59 pm to : vince . j . kaminski @ enron . com , amy aldous , pconcessi @ deloitte . com , ross raymond - cmmrcl ops cc : subject : conference may 31 on energy derivatives in toronto vince thanks again for agreeing to speak at our conference . it is attracting considerable interest . . is it possible for you to send us copies of your slides by may 18 to meet our deadline for preparing the material . ? if you have ? a related paper available that covers some of the same material that would do instead but naturally we would prefer the slides . i would like to mention again the ? ? the pre - conference dinner at 7 pm on sunday may 30 for the speakers we hope very much you can be present i was also hoping you would be available for the last ? session of the day to be panel member the provisional title ? is managing risk in illiquid markets the chair is pat concessi of deloitte and touche the panel last from 3 . 30 until 4 . 30 and we would like panel members should speaker for a few minutes and take questions from the floor . in the meantime if you have any questions please let amy or myself know sincerely phelim p boyle ? - - phelim p boyle director centre for advanced studies in finance , university of waterloo , waterloo , ontario canada n 2 l 3 gl tel ? 519 885 1211 ( 6513 ) fax 519 888 7562 ?
</pre>

## Record 001874

**Label:** `benign`

<pre>
fw : first cut canada data hi savita , attached is the ugly first cut at data for canada . the sheets are a jumble of information , but the jist of it is this : * canada did a lot more activity on their nit term physical products during the peak may - julyo 0 period than they did during the low novo 0 - janol period . ( 3000 trades vs 1550 trades ) . * the only significant product offering difference between the two periods was the gd / d sumas product , which was offered in may - july , but not nov - jan . ( accounts for relatively few trades ) * enron north america did a higher percentage of the trading on canadian gas products in novo 0 - janol than they did during the earlier months . * there are a handful of counterparties such as murphy oil and dynegy marketing which conducted business with canada on eol before and since the nov - jan lull period , but did not do online transactions with us during the three months where our trade volumes and deal counts were lowest . torrey moorer enrononline product control group ( 713 ) 853 - 6218
</pre>

## Record 001875

**Label:** `benign`

<pre>
re : course instructor clare , i regret to inform you that i have to decline your invitation due to prior commitments on the same days . vince kaminski - - - - - original message - - - - - from : clare fitzgerald [ mailto : claref @ marcusevansch . com ] sent : monday , may 07 , 2001 8 : 48 pm to : &#x27; vkamins @ enron . com &#x27; subject : course instructor vince , i am writing in regards to an energy derivatives training course i am developing . i would like to invite you to be an instructor for the course . a preliminary agenda is attached . brett humphreys from risk capital management is teaching on day one , and i was wondering if you would be interested in covering all or part of day two . the topics outlined here can be modified based on your feedback . our training courses are structured for an interactive , classroom - type setting . we limit the audience to 25 people and bring in 2 - 3 instructors to cover the material over the course of two days . i will follow up but please let me know what you think . &gt; thank you , clare fitzgerald director , training courses marcus evans 312 - 540 - 3000 x 6785 - agenda . doc &gt;
</pre>

## Record 001876

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 13 / 02 ; hourahead hour : 6 ; hourahead schedule download failed . manual intervention required .
</pre>

## Record 001877

**Label:** `benign`

<pre>
foreign language culture conference organizer : faculty of foreign languages laboratory of communicative teaching through cultural interaction . kursk state pedagogical university . 33 radischev street , kursk 305004 , russia tel . ( 071 22 ) 2-73 - 61 fax . ( 0712 ) 568461 e-mail : kgpu @ home . sovtest . ru international conference : the voice of the foreign language culture tentatively scheduled for october 12-16 , 1998 at kursk state pedagogical university , russia . goal : defining general approaches taken by russian and foreign methodologists to the problem of communicative pronunciation teaching . foreign language pronunciation , vital for communication , is a complex phenomenon difficult to investigate and not readily yielding to teaching guidance . no wonder , occasionally it will be declared irrelevant and the attention of the methodologists and teachers is concentrated on more learnable items : grammar and vocabulary . indeed , either the intuitive - imitative approach with its attention to the accuracy of pronunciation or the analytic - linguistic approach with its articulatory and contrastive information , or the cognitive approach which gives emphases to grammar , or the natural approach and the silent way with the attention to the supra - segmental structures have not met the needs of communication . however , this kind of neglect of pronunciation teaching is of short duration and it could not be otherwise for evident reasons . it is pronunciation that reflects the national character , culture and spirit of the nation , the social characteristics of the speaker , their aims , motives and emotions . you would not really respond adequately to what is being said without the proper awareness of the implications of the pronunciation system . moreover , even in the recognition of grammar and lexical units we mainly depend on pronunciation parameters . in fact , all speech activities have pronunciation roots . that is why we can not neglect teaching pronunciation if we want to prepare our students for actual communication . in the communicative approach adhered to in this institution , we demand a communicative paradigm of pronunciation teaching . it implies both the communicative aim of teaching and structuring the teaching process in accordance with the natural mechanisms of pronunciation acquisition . there is evidence that communicative approach to teaching pronunciation is gaining universal support . according to m . celces - murcia , d . m . brinton , j . m . goodwin in &quot; teaching pronunciation , &quot; _ cup _ , 1996 . . . teaching supra-segmental features ( rhythm , stress and intonation in a discourse context was the optimal way to organize a short - term pronunciation course . this idea sounds promising for a more fundamental course if we take into account the psychological nature of pronunciation acquisition . the objectives of the conference are as follows : emphasize social importance and necessity of correct pronunciation point out general problems of teaching fl pronunciation develop a communicative syllabus for teaching fl pronunciation and specify the teaching units and the context of teaching definine communicative strategies for pronunciation teaching specify the communicative model for teaching pronunciation and its correlation with natural speech mechanisms define the links of fl culture and pronunciation teaching analyze the communicative model of pronunciation teaching as a component of teacher education outline the linguistic foundation of communicative fl pronunciation teaching identify the links between pronunciation and grammar , vocabulary and pragmatic context . discussion groups on suggested topics : 1 . the social load and the status of pronunciation in multi-cultural society . 2 . pronunciation as an indicator of language proficiency and cultural level . 3 . communicative teaching of pronunciation as a basis for teaching fl speech . 4 . functional and linguistic aspects of pronunciation teaching . 5 . techniques of communicative teaching of fl pronunciation . we would be delighted to discuss the problems and share our experience with those of similar interests . we sincerely hope that the integral efforts of the participants of the conference will result in solving some of the problems and enrich our practical competence . first call for papers . the faculty of foreign languages and the laboratory of communicative fl teaching through cultural interaction at kursk state pedagogical university ( russia ) cordially invite colleagues from asia , africa , america and europe to participate in their international conference . we desire to share achievements , concerns and exchange expertise in teaching english , german and french phonetics and pronunciation . all teachers and methodologists are welcome to attend . papers of 2000 words will be published subsequently in the conference proceedings . final date for acceptance of applications and papers to the above address by 1 july 1998 . kursk , a city lacated 450 km to the south of moscow , is one of the oldest cities in russia with a number of attractions interesting from historical and cultural points of view . accomodation will be provided at the hotel kursk ( 40-60 $ per night ) . participants will also be offered to live in the appartments with russian families and the students &#x27; dormitory . foreign particapants will be met in moscow and accompanied to kursk if required . we look forward to hearing from you . sincerely , nickolay smakhtin dean of the faculty of foreign languages vyacheslav buzhinsky head of the english language department
</pre>

## Record 001878

**Label:** `benign`

<pre>
On Tue, 2002-07-30 at 10:06, Donncha O Caoimh wrote:
&gt; Ar mhaith le einne anseo caint le TG4 faoin LBW?
&gt; 
&gt; Donncha.
&gt; ----8&lt;&gt; TÃ¡ mÃ© ag dÃ©anamh taighde don clÃ¡r teilifÃ­se An Tuath Nua (a bhÃ­onn Ã¡
&gt; chraoladh ar TG4) faoi lÃ¡thair, agus chonaic mÃ© go mbedih an Linux Beer
&gt; Hike ar siÃºl i Doolin i mbliana. Bheadh spÃ©is againn mÃ­r a dhÃ©anamh mar
&gt; gheall ar an Hike ar an gclÃ¡r - an mbeidh tÃº fÃ©in nÃ³ aon duine eile le
&gt; Gaeilge ar an Hike go bhfios duit?
&gt; 
&gt; Go raibh maith agat as do chabhair,
&gt; ----&gt;8Can someone translate this for me? Lost all sense of Irish when moved
over the border about 10 years ago. Not by choice mind you :-(Thanks
-- 
+------------------------------------+---------------------------------+
| Tony Patton                        |                                 |
| MIS Software Developer/*nix        | Tel  : +44 28 7127 6443         |
|   Systems Administrator            | Fax  : +44 28 7126 0520         |
| North West Institute of F &amp; H.E.   | Mob  : +44 7764 905 955         |
| Strand Road                        |                                 |
| Derry                              | ICQ# : 113 069 081              |
| BT48 7BY                           |                                 |
+------------------------------------+---------------------------------+
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001879

**Label:** `benign`

<pre>
Original Message ----- From: &quot;Vipul Ved Prakash&quot; To: &quot;Sven&quot; Cc: Sent: Wednesday, July 31, 2002 10:31 PM Subject: Re: [Razor-users] Smrazor, Milter, and Max connections &gt; On Wed, Jul 31, 2002 at 09:44:08PM -0400, Sven wrote: &gt; &gt; With v2.14 of razor client and using Solaris 9 with sendmail 8.12.5 I have &gt; &gt; managed to get smrazor working (milter) -- sort of ... With light server &gt; &gt; loads, it seems to do fine; however during peak traffic times (or peak &gt; &gt; catalogue server usage???) , the smrazor milter stops and sometime dumps &gt; &gt; core as well. Does anyone know of a limit in terms of number of &gt; &gt; messages/minute that can be theoretically processed? I have noticed timeouts &gt; &gt; occuring (I set the milter timeout per message to 15 seconds) often in huge &gt; &gt; lumps and the occasional &quot;Could not get valid info from Discovery Servers&quot;) &gt; &gt; ????? &gt; &gt; 15 seconds is more than enough timeout... There&#x27;s no request/minute limit, &gt; and we are not close to hardware limits on any of the servers. &gt; &gt; Could you send me relevant sections from the log file as well as &gt; your config? &gt; &gt;&gt;From the maillog: Jul 31 22:52:20 cartman sendmail[21081]: [ID 801593 mail.error] g712pocb021081: Milter (smrazor): timeout before data read Jul 31 22:52:20 cartman sendmail[21081]: [ID 801593 mail.info] g712pocb021081: Milter (smrazor): to error state Jul 31 22:52:22 cartman sendmail[21091]: [ID 801593 mail.error] g712pocb021091: Milter (smrazor): timeout before data read Jul 31 22:52:22 cartman sendmail[21091]: [ID 801593 mail.info] g712pocb021091: Milter (smrazor): to error state&gt;&gt;From razor-agents.log Jul 31 17:35:43.637025 check[21171]: [ 1] razor-check error: nextserver: discover0: bootstrap_discovery: Jul 31 17:35:43.987175 check[21168]: [ 1] razor-check error: nextserver: discover0: bootstrap_discovery: Jul 31 18:36:34.652485 check[8241]: [ 1] razor-check error: nextserver: Could not get valid info from Discovery Servers Jul 31 22:01:09.162201 check[9973]: [ 1] razor-check error: nextserver: Could not get valid info from Discovery Servers&gt;&gt;From smrazor.err [07/31/2002 22:52:22] (1144) Error reading from razor-check (156a78) (21092): timeout [07/31/2002 22:52:42] (1144) Error reading from razor-check (16b948) (21221): timeout [07/31/2002 22:52:42] (1144) Error reading from razor-check (165348) (21227): timeout [07/31/2002 22:57:21] (1144) Error reading from razor-check (16d118) (22911): timeoutrazor-agent.conf # # Razor2 config file # # Autogenerated by Razor-Agents v2.14 # Wed Jul 31 11:38:43 2002 # Created with all default values # # see razor-agent.conf(5) man page #debuglevel = 3 identity = identity ignorelist = 0 listfile_catalogue = servers.catalogue.lst listfile_discovery = servers.discovery.lst listfile_nomination = servers.nomination.lst logfile = /var/log/razor-agent.log min_cf = ac razorhome = /etc/razor razorzone = razor2.cloudmark.com rediscovery_wait = 172800 report_headers = 1 turn_off_discovery = 0 use_engines = 1,2,3,4 whitelist = razor-whitelistRealizing that the above, after looking at it, is pretty much no help, changed debug to 9 and output the results to a text file. It is attached but the crux of the messages resemble: Jul 31 23:11:14.633544 check[5689]: [ 7] Can&#x27;t read file servers.discovery.lst, looking relatve to Jul 31 23:11:14.634218 check[5689]: [ 5] Can&#x27;t read file /servers.discovery.lst: No such file or directory or Jul 31 23:07:19.115412 check[26156]: [ 6] no discovery listfile: servers.discovery.lst Jul 31 23:07:19.115878 check[26156]: [ 5] Finding Discovery Servers via DNS in the razor2.cloudmark.com zone Jul 31 23:07:19.174862 check[26155]: [ 8] Connection established Jul 31 23:07:19.175667 check[26155]: [ 4] 216.52.13.90 &gt;&gt; 29 server greeting: sn=N&amp;srl=30&amp;ep4=7542-10&amp;a=l Jul 31 23:07:19.176887 check[26155]: [ 4] 216.52.13.90 &lt;&lt; 12 Jul 31 23:07:19.177344 check[26155]: [ 6] a=g&amp;pm=csl Jul 31 23:07:19.214020 check[26124]: [ 6] Found 1 Discovery Servers via DNS in the razor2.cloudmark.com zone Jul 31 23:07:19.214729 check[26124]: [ 8] Checking with Razor Discovery Server 216.52.13.90 Jul 31 23:07:19.215383 check[26124]: [ 6] No proper port specified, using 2703 Jul 31 23:07:19.215833 check[26124]: [ 5] Connecting to 216.52.13.90 ...It would appear that even though there is a specified home directory, razor-check cannot read the .lst files and must apparently run discovery at each lookup?????This, btw, is occuring on two separate servers ...Sven------------------------------------------------------- This sf.net email is sponsored by: Dice - The leading online job board for high-tech professionals. Search and apply for tech jobs today! http://seeker.dice.com/seeker.epl?rel_code=31 _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 001880

**Label:** `benign`

<pre>
q 3 comparison hi louise , i have a comparison for the first two weeks of q 3 . it is still so early , of course , that it is hard to say much . we are going to add june to this to make it a little more meaningful . but this is the q 3 stuff alone . thanks ! - - jay
</pre>

## Record 001881

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85524557
Date: Not suppliedSixDegress is a $99 OS X app that data-mines your own hard-drive and tries to 
build links between people, files and folders. Laura Carpenter at the OS X con 
was talking it up yesterday and it looks way cool -- I&#x27;ve just downloaded the 
demo to play with.     * Locate files with similar names or file revisions, anywhere on your 
    system.    * Show all email threads related to any file or person on your desktop.    * View all the files a person has sent you, regardless of where those files 
    are stored on your computer.    * Create dynamic, self-updating projects.    * Find misfiles or attachments quickly without searching desktop folders.    * Navigate and open any message, file or person on your desktop in one 
    click.  Link[1] Discuss[2] (_Thanks, Laura!_)[1] http://www.creo.com/sixdegrees/
[2] http://www.quicktopic.com/boing/H/VRMgpHLfGxpZ

</pre>

## Record 001882

**Label:** `benign`

<pre>
The tech side of homeland defenseÂ Search
	                Â 
	                Â 
News.com
	                All CNETÂ Â Â Â 
	                The Web
                Â Live tech help NOW!
April&#x27;s tech award
1 million open jobs
News.com: Top CIOs 
ZDNet: PeopleSoftJuly 10, 2002The tech side of homeland defenseStudios sue defunct $1 movie site$215 million later, start-up Pluris shuts downApple to expand iMac LCD displayNextCard cuts off credit card customersTapping China&#x27;s brainpowerÂ Vision Series			Read News.com&#x27;s exclusive interviews of 10 top CIOs.
Vision Series home
The tech side of homeland defenseComputer security is becoming an increasingly critical part of President Bush&#x27;s proposal for a Department of Homeland Security, as politicians fret about tech-savvy terrorists--and insist that any new agency must shield the United States from electronic attacks. Meanwhile, the administration says that it&#x27;s open to the idea of a chief privacy officer for the agency.
July 10, 2002, 9:45 AM PT
 | Read Full Story Studios sue defunct $1 movie siteThe movie studio&#x27;s trade association filed suit Tuesday against Film88.com, a would-be Internet video Web site that has allegedly popped up in several incarnations around the world.
Calling the site a &quot;piratical, virtual &#x27;video-on-demand&#x27; business,&quot; the Motion Picture Association of America (MPAA) and its member studios sued the company and an individual allegedly associated with it in a California federal court.
July 10, 2002, 12:00 PM PT
 | Read Full Story $215 million later, start-up Pluris shuts downNetworking start-up Pluris will release a statement Wednesday announcing it has closed its doors due to a lack of funding and ongoing woes in the market it serves, according to a spokeswoman familiar with the company&#x27;s plans.
Pluris, a once promising company, burned through $215 million over the past few years as it attempted to build a high-end router that was intended to outclass similar products from competitors such as Juniper Networks and Cisco Systems.
July 10, 2002, 12:30 PM PT | Read Full Story 
Apple to expand iMac LCD displayApple Computer plans to serve up a new iMac model with a larger flat-panel display during next week&#x27;s Macworld Expo trade show, according to sources.
The upgrade to a 17-inch liquid crystal display (LCD) comes as sales have all but stalled on existing 15-inch flat-panel iMacs. Apple unveiled the original flat-panel iMac, which suspends the monitor from a pivoting arm attached to a hemispherical base, during January&#x27;s Macworld Expo in San Francisco.
July 9, 2002, 3:50 PM PT
 | Read Full Story NextCard cuts off credit card customersFederal regulators on Wednesday deactivated hundreds of thousands of credit cards belonging to former customers of NextCard.
The Federal Deposit Insurance Corporation (FDIC), which had been trying unsuccessfully to sell the 800,000 accounts since taking them over in February, shut them down after they failed certain performance measures over the past three months, said David Barr, an FDIC spokesman. Although NextCard customers will no longer be able to use their cards to make purchase or cash withdrawals, they will continue to be responsible for their outstanding balances.
July 10, 2002, 12:25 PM PT
 | Read Full Story Tapping China&#x27;s brainpowerThe country&#x27;s engineers are ambitious--and finding open arms at U.S. companies.
July 10, 2002, 4:00 AM PT
 | Read Full Story 
From our partners:The WorldCom hearing&#x27;s target: votersBusiness Week
November-nervous lawmakers hogged the stage in a show of outrage and concern, while fact-finding barely made a cameo.
July 10, 2002
 | Read Full Story Can Bush walk his talk?Business Week
He said much that was right in his Wall Street speech. But doubts swirl about his follow-through--and his own business dealings.July 10, 2002
 | Read Full Story 
Also from CNET:Real-time stock quotes from CNET News.com Investor.30-day free trial!
Digicams for summer shutterbugsGoing on vacation, or just headed to the beach? Indulge your summer snapshot habit with one of our picks.
â€¢ 5-megapixel shoot-out
â€¢ Leica Digilux 1: street shooter&quot;s digicamMost popular products
Digital cameras
1. Canon PowerShot G2
2. Canon PowerShot S40
3. Canon PowerShot S30
4. Canon PowerShot A40
5. Nikon Coolpix 995
 See all most popular cameras
Â Tech hurdles ahead for e911
Correspondent Melissa Francis looks at the technology hurdles facing wireless carriers in launching the second phase of the e911 initiative by October.
 Watch Video
Â Â EnterpriseIndia&#x27;s Infosys tops forecast but is waryLiberty Alliance to unveil software specFBI picks new CIOE-BusinessStocks slump on accounting jitterseBay glitch charges sellers doubleBush speech leaves Wall Street doubtingCommunicationsWorldCom scrutiny goes federalComcast shareholders bless AT&amp;T dealU.S. Attorney investigates QwestMediaBanks bail out Vivendi with loansBush security plan may get privacy nodGnutella pioneer Gene Kan diesPersonal TechnologyVerizon dials in for downtown detailsTaiwan&#x27;s Acer sees lax tech reboundChipmaker packs Wi-Fi into handhelds        Â 
The e-mail address for your subscription isÂ qqqqqqqqqq-cnet-newsletters@spamassassin.taint.org
UnsubscribeÂ |Â Manage My SubscriptionsÂ |Â FAQÂ |Â AdvertisePlease send any questions, comments, or concerns toÂ dispatchfeedback@news.com.Price comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          
</pre>

## Record 001883

**Label:** `benign`

<pre>
historical ling announcing le lingue indoeuropee ( edited by anna giacalone ramat and paolo ramat ) , bologna , casa editrice il mulino , 1994 the volume is intended to provide the state of the art on the indoeuropean language family . each chapter is devoted to one subgroup and covers phonological , morphological , syntactic and lexical matters . contents : e . campanile , antichita &#x27; indoeuropee . c . watkins , il protoindo - europeo . b . comrie , la famiglia linguistica indoeuropea : prospettive genetiche e tipologiche . r . lazzeroni , sanscrito . n . sims - williams , le lingue iraniche . w . winter , tocario . s . luraghi , le lingue anatoliche , r . ajello , armeno . h . m . hopenigswald , greco . e . vineis , latino . d . silvestri , le lingue italiche . p . sims - williams , le lingue celtiche . p . ramat , le lingue germaniche . h . andersen , le lingue slave . w . schmalstieg , le lingue baltiche , s . demiraj , albanese . subject index name index available from : casa editrice il mulino , strada maggiore 37 , 40125 bologna ( italy ) phonology &amp; phonetics taylor , paul a . a phonetic model of intonation in english . 1994 . 172 pp . 6x9 book , prepaid us $ 25 . 00 + 3 . 50 p&amp;h . iulc publications , 720 e . atwater ave . , bloomington in 47401-3634 . &lt; iulc @ indiana . edu &gt; phonetics . addresses the problem of relating the acoustic and phonological descriptions of intonation . a multi-level approach and new description systems on the phonological and phonetic levels are proposed . computer algorithms attempt to analyze and synthesize f0 contours using the new systems . experiments and results are presented . socioling the discourse of negotiation - studies of language in the workplace edited by alan firth , denmark isbn : 0-08 - 042400 - 7 hardback viewing negotiations at a micro level of analysis , this book focuses on a wide variety of settings , from industrial meetings to comsumer helplines . * available for discussion * published october 1994 by elsevier science ltd tel : + 44 ( 0 ) 1865 843685
</pre>

## Record 001884

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8613673,159/
Date: 2002-10-06T18:12:47+01:00Security in cyberspace is a different kettle of fish compared to many computer 
systems. Cyberspace entertainment only has to be useful to the majority of its 
users --entertaining. That means it can tolerate a small amount of vandalism 
still remain useful. This is quite unlike a system required for commerce. We 
still have a headache of course, but at least we only need to keep the system 
around 90 percent clean, rather than 99.99 percent. Of course weï¿½ll still 
strive to stamp out corruption, but our system failure threshold is more 
achievable than one might at first assume.

</pre>

## Record 001885

**Label:** `benign`

<pre>
lone star points daren , there were several points on your list that were previously created and the remainder have been created , with the exception explained below . donna and i researched your list and identified the ones that were on system ( which she would create ) and the ones that were off system ( which i would create ) . standard pooling stations and west texas ( line x ) pooling stations had no meters , so they are not set up . the hunt fairway plant ( 17 - 8477 - 01 ) was previously created as ( 178477 ) , i need to know if the ( 01 ) needs to be added . we need to verify hpl - texoma ( 17 - 0973 - 13 ) , it is set up as ( 17097613 ) . is this the same point ? ? ? please let donna and myself know how to proceed with the ones in red . thanks , faye
</pre>

## Record 001886

**Label:** `benign`

<pre>
creating sense * * * second call for papers * * * creating sense : texts and realities organized by the department of english language &amp; literature national university of singapore with cambridge university press and materials development association ( matsda ) 7 - 9 september , 1998 venue : orchard hotel , singapore keynote presenters : david nunan ( university of hong kong ) liz hamp - lyons ( hong kong polytechnic university ) mario rinvolucri ( pilgrims , canterbury ) jane arnold ( university of seville ) our conference web-site : http : / / nusinfo . nus . sg / nusinfo / fass / ell / createsense98 * * * call for papers * * * the conference organisers invite papers , both theoretical and practical , that explore and characterise some of the main ways in which language is used to create &quot; sense &quot; in contemporary life . we encourage papers that present recent developments and address significant theoretical issues in studies of language and discourse , and that explore ideas and applications in the broad domains of language education and media studies . parallel papers will last for 30 minutes , with 10 additional minutes for discussion . * * * call for workshops * * * the organisers invite proposals for 3 - hour afternoon workshop sessions , from intending conference participants ( not only paper presenters ) who are willing to take on the role of workshop leader . the main aim of workshops is to provide participants with opportunities to become actively involved in developing , adapting or evaluating educational materials in language education and media studies , on topics related to the major theoretical issues arising from the conference theme . workshops can be planned for 3 , 6 , or 9 hours . please send abstracts of about 200 words to the programme committee , in accordance with the guidelines that follow . write or ( preferably ) e-mail to : programme committee ( attention : d . allison ) &quot; creating sense &quot; conference department of english language &amp; literature national university of singapore 10 kent ridge crescent singapore 119260 departmental fax : ( 65 ) - 7732981 e - mail : ellconlk @ nus . edu . sg guidelines for submissions : your abstract must specify the category ( paper or workshop ) of the proposed presentation . please submit three anonymous copies of the abstract ( including the title of your paper or workshop ) for review purposes , plus a fourth copy that includes the author &#x27;s name and affiliation . please also include a notecard ( size 3 &quot; by 5 &quot; ) , stating author &#x27;s name , affiliation , title of paper or workshop , contact telephone and fax numbers , e-mail address , and postal address . paper presenters are asked to specify any special requirements for their presentation . ( all rooms will have overhead projectors . ) workshop presenters are asked to specify the intended length of the workshop ( a workshop may run for 3 , 6 or 9 hours ) and to specify any special requirements for their workshop session . deadline for abstracts : 15 may 1998 replies will be sent by end may 1998 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - conference theme - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - the focus of this conference will be on notions of &quot; creating &quot; or &quot; making &quot; sense , both in education and more widely throughout society . &quot; making sense &quot; sounds reassuringly uncontroversial , and it has taken the insights of jerome bruner in the 1960s , and of michael halliday and his associates in recent years , to bring out the richness of meaning that this expression can carry . it is now widely accepted that sense is not simply &quot; there &quot; in the world , waiting to be discovered and documented , but that it is actually created by human beings in societies . the idea that &quot; reality &quot; is &quot; created &quot; in language also implies that there must be more than one reality , and that a number of realities can be articulated and compared . these possibilities carry major implications for language education , social identity and participation - - or , less reassuringly , for educational and social exclusion . the thematic emphasis of this conference on &quot; creating sense &quot; , then , includes the essential notions that any single form of sense can also be questioned and &quot; unmade &quot; , and that alternative kinds of sense can be remade or &quot; re-created &quot; through texts . making , unmaking and remaking meanings are fundamental aspects of social and educational experience , from infancy through primary and secondary school years and beyond , continuing into adulthood and maturity . much education has to do with learning to think , talk and write about things in ways that differ from the initial &quot; commonsense &quot; knowledge or belief that children have already acquired in their communities . to bring this about without undermining what is valid and valued in children &#x27;s lives is an enormously challenging and problematic social and cultural activity . that it is also a necessary one can be argued both in terms of mainstream rationality ( the development of scientific thinking being a prime example here ) and of critical awareness , which includes learning to deconstruct powerful people &#x27;s accounts of how the world is and ought to be , and to propose alternative accounts . full participation in social and political life is only possible when people have learned , as ronald carter has put it , how to &quot; see through language &quot; . these concerns over creating , questioning and re-creating sense are explored in this conference in relation to two domains , those of language education and media studies . in the context of formal education , learners have both to discern meaning in what is offered to them and actively to make &quot; their own &quot; meanings as they interpret and analyse experience from a variety of perspectives which may be proposed to them or discovered by them . all this raises important issues of participation and exclusion relating to learners &#x27; personal and social explorations of language , and the ways in which these two modes of exploration may be related . the conference will pursue these concerns in the broad context of language education as its first domain . the second conference domain is that of media studies , with particular attention to media discourse and reality construction . the conference seeks to bring to light some of the ways in which realities , like stories , are invented , told , represented and mediated through available technologies . diverse experiences and accounts of reality are constructed through the interplay of language and image . these can , for instance , be presented as fantasies , fictional explorations of experience , docu-dramas or documentary coverage of events , among other things . the impact of such accounts on audiences and &quot; the public &quot; depends on many social , cultural and educational factors , but the need for modern citizens to be able to make their own sense of accounts that are offered to them , and also to offer accounts of their own , increasingly appears fundamental to effective social participation as well as to social critique . the conference looks to stimulate debate that is grounded in - - - or informedly set against - - - current theories , practices and findings of teaching and research communities in language and communication studies . another main aim is to suggest guidelines for informed , responsible and reflective practice in the domains of language education and media studies . a theme of particular interest , to be developed especially in workshop mode , is that of materials writing for educational purposes in both conference domains .
</pre>

## Record 001887

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85513605
Date: Not suppliedThe French and the iPod aren&#x27;t getting along -- the iPod outputs more decibels 
through its headphones than are legal in La Belle France. Link[1] Discuss[2] (_
Thanks, Ernie[3]!_)[1] http://translate.google.com/translate?u=http%3A%2F%2Fwww.macgeneration.com%2Fmgnews%2Fdepeche.php%3FaIdDepeche%3D93540&amp;langpair=fr%7Cen&amp;hl=en&amp;ie=ISO-8859-1&amp;prev=%2Flanguage_tools
[2] http://www.quicktopic.com/boing/H/LMHmGmnSwgPG
[3] http://www.psylux.com

</pre>

## Record 001888

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-4,8274140,1717/
Date: 2002-09-26T12:27:22+01:00(Some Ugly Guy)

</pre>

## Record 001889

**Label:** `benign`

<pre>
tromsoe conference on vo and ov conference roster what : &quot; vo and ov &quot; where : university of tromsoe when : 22-23 may , 1998 who : sjef barbiers , leiden university / hil the right-periphery in sov languages : english and dutch michael brody , hungarian academy of science mirror theory and word order hubert haider , university of salzburg ov is more basic than ov alison henry , university of ulster at jordanstown ov phenomena in vo languages - belfast english and ulster irish roland hinterhoelzl , university of southern california licensing movement and stranding in the west germanic ov languages anders holmberg , university of tromsoe ov in finnish thorbjoerg hroarsdottir , university of tromsoe parameter change in icelandic matt pearson , ucla two types of vo languages susan pintzuk , university of york verb - complement word order in old english vaijayanthi sarma , mit a derivational analysis of non-canonical word orders in certain sov languages peter svenonius , university of tromsoe negative object fronting in icelandic tarald taraldsen , university of tromsoe v - movement versus vp - movement in derivations leading to vo order for further information contact peter svenonius , sven @ isl . uit . no
</pre>

## Record 001890

**Label:** `benign`

<pre>
new graph as you know , now that we are nearly done in capturing the dpr numbers in the database , we have been working to present the data in compelling ways . we have started to do this by creating the var limit usage graphs and the sharpe , rovar , and risk - return graphs . i am sorry for the misunderstanding with ted concerning the latter . i had explained what i wanted to produce in an e - mail and during a risk forum luncheon . therefore , shona and i did not expect the reaction we got . i have talked to naveen and rudi since then , and we have changed the graphs to be agreeable to rac . today i worked on the graphs below . they show the p &amp; l decomposition for the month ( rolling 20 business days ) up to 9 / 20 ( one in dollar terms and the other as a percentage of p &amp; l ) . i showed them to shona , and she thought you should see them before naveen , rudi , and ted , because these graphs are very powerful and are likely to be controversial . the graphs show that european gas and uk power released a lot of prudency . half of total p &amp; l for european gas is prudency , and uk power would have had a loss of about $ 20 million ( instead of a gain of $ 27 million ) were it not for prudency . in the case of north american gas , $ 46 million gain in new deals partly offset about $ 106 million in trading losses . please note that these are rough drafts intended to show what we can do . i do not think that there are problems with the data , but i threw these together today , and i have not yet double - checked the accuracy of my aggregating calculations . please launch the attached spreadsheet , and feel free to call or page me with questions or concerns . thank you , eugenio
</pre>

## Record 001891

**Label:** `benign`

<pre>
&gt; It also strikes me that it will not be very long before livestock is
&gt; genetically engineered to be dumber and meatier, and better adapted to
&gt; living in industrial conditions.If we&#x27;re willing to count artificial
selection as genetic engineering, it
has been happening since pre-literate
times, and is called &quot;domestication&quot;.-Dave&gt; &quot;When the truck leaves Arkansas, the invoice leaves via the U.S. mail
&gt; and they both arrive at about the same time,&quot; Collins says. &quot;If our
&gt; receiving clerks could sign onto the network and do an electronic
&gt; handshake with the driver-you&#x27;re over an item on this case, that case
&gt; was damaged-we&#x27;re all in agreement, and then Tyson could send a clean
&gt; invoice about which there is no dispute.&quot;I can see the value to a system which
guaranteed that the truck would show
up with all items as ordered -- but if
there&#x27;s going to be spoilage anyway, I
don&#x27;t see how much value that &quot;clean&quot;
invoice provides -- just think about
the costs of reliable networks versus
reliable protocols on unreliable ones.If the trucks are unreliable, then the
sticky pads seem like the clear winner
for return on IT capital investment.
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001892

**Label:** `benign`

<pre>
14th comparative germanic syntax workshop second announcement call for papers the 14th comparative germanic syntax workshop january 8 - 9 , 1999 , lund , sweden invited speakers : kenneth j . safir , rutgers jan - wouter zwart , groningen deadline for submission of abstracts : august 1 , 1998 the time allotted to each paper is 30 minutes , with an additional 10 minutes for discussion . send 3 copies of an anonymous two-page abstract , plus a camera-ready original with authors name , address , and affiliation , to 14th cgs c / o asa wikstrom institutionen fr nordiska sprk helgonabacken 14 s-223 62 lund sweden enquiries can be addressed to : christer . platzack @ nordlund . lu . se http : / / www . nordlund . lu . se / cgs
</pre>

## Record 001893

**Label:** `benign`

<pre>
if you arrange administrative or clerical temporary employees , this e - mail contains important information for you . as you probably know by now , enron recently entered into a new relationship with corestaff &#x27; s managed services group to manage and administer its temporary staffing program . this new arrangement is designed to improve service and quality as well as increase efficiency in meeting enron &#x27; s temporary employment needs . there are many benefits , including a web - based application which will provide enron &#x27; s temporary staffing users with online ordering , approval and reporting . more details on this system will be coming soon . in order to help the managed services group serve you better in the days ahead , please take a moment now to fill out the profile questions below and forward your reply to joseph marsh at joseph marsh / na / enron . this information will not be used for solicitation , but rather to facilitate a more efficient ordering process . name : business unit : department : phone / e - mail : cost center : number of temporaries currently in use : average / peak number of temporaries used per week : skill sets / positions required : phase i of the program , which starts january 2 , 2001 , encompasses all administrative / clerical temporary employees in the houston area . please note that we anticipate no changes for temporary employees currently on assignment at enron as we make this transition . again , more details on the managed services program and processes will be distributed in the coming weeks . as of january 2 , the managed services account team will be on - site to answer any questions and handle your temporary employee needs . they will be available via e - mail or by calling 713 - 345 - 6899 . please note that the current process for requesting temporary employees will remain in effect through the end of the year . thank you , the enron corp implementation team
</pre>

## Record 001894

**Label:** `benign`

<pre>

&quot;Gordon Mohr&quot; said:&gt; If you plan to spend most of your time in that broke/
&gt; unemployed/unexceptional mode, please, leave North America 
&gt; for Scandinavia. hmm, I might, at least they&#x27;ve got affordable DSL there, and haven&#x27;t
signed a DMCA-like law yet ;)--j.
http://xent.com/mailman/listinfo/fork
</pre>

## Record 001895

**Label:** `benign`

<pre>
start date : 12 / 26 / 01 ; hourahead hour : 12 ; start date : 12 / 26 / 01 ; hourahead hour : 12 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001122612 . txt
</pre>

## Record 001896

**Label:** `benign`

<pre>
Eirikur Hallgrimsson wrote:
&gt; It&#x27;s official, the holidays are here.For which year, 2003 or 2004?- Joe
</pre>

## Record 001897

**Label:** `benign`

<pre>
--- In forteana@y..., &quot;Jayne Ayris&quot;  wrote:
&gt; Think of a letter between A and W. 
Oh, all right, then. I&#x27;ll give it a go.
Hmm. Let&#x27;s See.&quot;L&quot;
 
&gt; Now think of an animal that begins with that letter. &quot;Lynx&quot;
 
&gt; Repeat it out loud as you scroll down. &quot;Lynx&quot;
&quot;Lynx&quot;
&quot;Lynx&quot;
&quot;Lynx&quot;
&quot;Lynx&quot;
 
&gt;  Think of either a man&#x27;s/woman&#x27;s name that begins with
&gt;  the last letter in the animals name &quot;Xena&quot;
 
&gt;  Almost there........ OK.
 
&gt;  Now count out the letters in that name on the fingers
&gt; of the hand you are not using to scroll down. &quot;X&quot;
&quot;E&quot;
&quot;N&quot;
&quot;A&quot;
 
&gt;  Take the hand you counted with and hold it out in
&gt;  front of you at face level 
 
All righty...&gt;  Look at you palm very closely and notice the lines in
&gt;  your hand Lots of lines. Lines and lines and lines and lines.
 
&gt;  Do the lines take the form of the first letter in the
&gt;  persons name? Holy crap, they do! Amazing! Feckin&#x27; &quot;X&quot;s all over the feckin&#x27; place. 
Man that is sooo cool!!11!!!!!!111!!&gt; Of course not....... Au contraire. Look at &#x27;em. XXXXXXXXXXs, Zillions of &#x27;em.I am looking at them this very moment.&gt; Now smack yourself in the head, get a life, and quit
&gt; playing stupid e-mail games!Are you talking to moi? Are you accusing me of being less than 
sapient? Are you suggesting I am life-bereft?Igor, power-up a couple of dozen web-bots - the search-and-destroy 
attack ones with the hard-drive killers. I shall have my revenge in 
this domain or the next.Robin (Not the BAE SYSTEMS spy at all, it turns out) Hill, STEAMY 
BESS, Brough, East Yorkshire.To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 001898

**Label:** `benign`

<pre>
workshop on dialogue and prosody call for papers you are invited to submit an abstract plus title to the esca tutorial and research workshop on dialogue and prosody eindhoven ( the netherlands ) , september 1 - 3 , 1999 http : / / www . tue . nl / ipo / sli / etrw . html introduction the ipo , center for research on user - system interaction in eindhoven ( the netherlands ) , in association with the eindhoven university of technology ( tue ) and the european speech communication association ( esca ) , is pleased to announce a 3 - day workshop on dialogue and prosody , which will take place in the eindhoven area in the week before eurospeech ` 99 . anyone dealing with theoretical , empirical , computational or experimental approaches to the interplay between dialogue and prosody is invited to submit an abstract . we specifically welcome those contributions of which the content is directly relevant for human-computer interaction . motivation now that spoken dialogue systems are becoming more sophisticated , increasing demands are placed on the way these systems deal with prosody , both in the generation of system utterances as in the processing of user utterances . on the one hand , appropriate prosody may facilitate the processing of system utterances by users of a dialogue system . on the other hand , dialogue systems may profit from taking into consideration prosodic information of user utterances at different levels of representation . however , for experts in the area of prosody it is not always easy to link their work to the developments in the domain of dialogue modelling , whereas researchers working in the area of dialogue modelling often are rather naive with respect to prosodic modelling . the goal of the workshop is bringing together researchers from both domains to provide either group with a better view of developments in the other domain and in this way stimulate progress . format the format of the workshop will consist of keynote presentations by experts in the field of dialogue and prosody modelling , combined with oral and poster presentations of accepted papers . all presentations will be plenary . all contributions to the workshop will be published in workshop proceedings , that will consist of 4 - page camera-ready papers . as an additional result of the workshop , the organizers intend to produce a working document that will contain an overview of the state-of - the-art , some open research questions , and position statements regarding the theme of dialogue and prosody . in order to maximize the possibilities for fruitful discussion , the number of participants will be limited to about a hundred . priority wil be given to persons with accepted papers on a first-come first-served basis . topics questions in this domain that could be addressed at the workshop are for instance : - which prosodic features of user utterances help the system to improve performance with respect to asr , speech understanding , and dialogue management ( turn-taking , back-channeling ) ? - how can those features be extracted automatically and be made available at the right time ? - with which prosodic features should system utterances be provided to help the user extract the information conveyed by the system , and to improve the fluency of the interaction ? - to what extent are prosodic characteristics of user utterances in their interactions with dialogue systems different from those in human-human interaction ? - how do we deal with prosodic variability in interactions between humans and machines , for instance due to level of expertise ( novices versus experts ) ? submission procedure researchers working in this domain are invited to email a 400 - words abstract ( plain ascii format ) , together with title , affiliation and keywords to diapro @ ipo . tue . nl if electronic submission is not possible , please send 5 copies of a 1 - page abstract to ipo , center for research on user - system interaction etrw on dialogue and prosody p . o . box 513 nl-5600 mb eindhoven ( the netherlands ) scientific committee gosta bruce ( sweden ) nick campbell ( japan ) carlos gussenhoven ( the netherlands ) julia hirschberg ( usa ) daniel hirst ( france ) merle horne ( sweden ) jill house ( uk ) stephen isard ( uk ) johanna moore ( uk ) elmar noeth ( germany ) anton nijholt ( the netherlands ) mari ostendorf ( usa ) thomas portele ( germany ) stephen pulman ( uk ) angelien sanderman ( the netherlands ) elizabeth shriberg ( usa ) david traum ( usa ) gert veldhuijzen van zanten ( the netherlands ) marilyn walker ( usa ) venue the etrw on dialogue and prosody will take place in the koningshof conference center , which is located in a rural setting in veldhoven , at close distance from eindhoven ( www . koningshof . nl ) . important dates january 15 , 1999 : deadline for submission of title and abstract march 1 , 1999 : notification of acceptance , instruction for authors , information on accommodation july 1 , 1999 : deadline for 4 - page camerady-ready paper , early registration september 1 - 3 , 1999 : etrw on dialogue and prosody further information for further information , please contact marc swerts ( swerts @ ipo . tue . nl ) or jacques terken ( terken @ ipo . tue . nl ) . updated information will also be available at http : / / www . tue . nl / ipo / sli / etrw . html
</pre>

## Record 001899

**Label:** `benign`

<pre>
revised weekend duty i have revised the schedule to more equitably cover the remaining holiday periods . if you have changes or concerns please see me . thx
</pre>

## Record 001900

**Label:** `benign`

<pre>
sum : greek l1 content - length : 1735 a couple of weeks ago i asked the list for references to greek l1 acquisition . i got a number of responses , all pointing to the same few authors : ianthi - maria tsimply ( 1992 ) &quot; funtional categories and maturation : the prefunctional stage of language acquisition . &quot; phd thesis , ulc ursula stephany ( 1985 ) aspekt , tempus , modalitaet . tuebingen : narr _ _ _ _ ( 1995 ) the acquisition of modern greek . in d . i . slobin ( ed ) crosslinguistic study of language acquisition , vol . 4 _ _ _ _ data in childes gaberel drachman dealt with phonologial aspects of greek l1 in the 70 &#x27;s ; papers are presumably published in the ohio working papers and in austrian phonologica during that time . i would like to thank neil smith , bob ingria , heike behrens , dan slobin wim zonneveld , yorgos xydopoulos and harriet jisa for their help . ( the order of my thanks is due to the order the mesages came in : ) susanne dopke ( phd ) linguistics monash university clayton vic 3168 australia ph : 61 - 3-9052298 fax : 61 - 3-9052294
</pre>

## Record 001901

**Label:** `benign`

<pre>
re : model for 04 - 25 - - - - - - - - - - - - - - - - - - - - - - forwarded by kpeterso / epec on 05 / 02 / 2001 08 : 43 am - - - - - - - - - - - - - - - - - - - - - - - - - - - kpeterso 04 / 27 / 2001 10 : 17 am to : bill . williams . iii @ enron . com cc : subject : re : model for 04 - 25 ( document link : kpeterso ) hi bill , when you get a chance can you correct this day ? he 14 sale to ciso / powerx 20 mwh should be @ $ 250 . 00 he 15 sale to ciso / powerx should be a 0 mwh ( cut at top of hour ) he 11 and 12 sale to ciso / powerx 25 mwh &#x27; s should be @ $ 215 . 00 also , do you know what the 25 mwh fc / pv swap deal with aep / aps is . we don &#x27; t show this in our ems . could it be one of enron &#x27; s deals and on the model by mistake ? ? prices are $ 350 . 00 and $ 520 . 00 ? ? ? thanks , kathy
</pre>

## Record 001902

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 21 / 02 ; hourahead hour : 13 ; hourahead schedule download failed . manual intervention required . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002012113 . txt error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database
</pre>

## Record 001903

**Label:** `benign`

<pre>
start date : 12 / 14 / 01 ; hourahead hour : 5 ; start date : 12 / 14 / 01 ; hourahead hour : 5 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001121405 . txt
</pre>

## Record 001904

**Label:** `benign`

<pre>
dependency grammar : corrections , reactions , reformatting apparently i made a few mistakes in the posting about my manuscript on dependency grammar . this is curious , because i apparently got everything right on the earlier posting on the same topic to the dg and hpsg lists . at least two people have informed me that they successfully ftp-ed everything , but at least two others have had problems . the address should be : julius . ling . ohio-state . edu the suffixes . ps . gz on the file-names ( not the address ) indicate that they are compressed , so you need to uncompress them using the command &#x27; gunzip &#x27; . the slashes in the directory address should be &#x27; / &#x27; and not &#x27; \ &#x27; . presumably because of some sort of software error , i cannot read things in my inbox . but i put three of the reactions to my previous posting there before i had grown accustomed to this problem , so i cannot answer these directly , but will now try to do so through the linguist list . to the respondent from finland : you wanted a numerical address . it is : 128 . 146 . 172 . 200 to the respondent from taiwan ( or was it hongkong ? ) . you noted a problem with chapter 7 . the general problem has now been corrected , but there may still be a problem with one or two of the examples . if so , i can send an ascii file , as you suggested , or a paper copy of these examples , if you send me a regular mail address , but in either case you have to write to me again . i am now used to reading my mail and replying if necessary , or at least writing down the essential information , before downloading . nevertheless , i hope the compuserve people solve the problem soon . to the &quot; computer illiterate / dyslexic &quot; ( your own term ) : surely you can find someone there who is able to help you with the ftp procedure . the university you are at must have more than its share of experts in this area . but i can also send you an ascii version of chapter 1 via email , if you write to me again . for the sake of making my files more compatible with the software linguists most often use , andreas kathol has advised me to reformat my manuscript in latex . unfortunately , he does n&#x27;t know where to get a latex software packet for use with pcs ( what i use ) . can anyone help by giving me a site to ftp from ? i am in the process of creating a latex version of the files . dan maxwell 100101 , 2276 @ compuserve . com
</pre>

## Record 001905

**Label:** `benign`

<pre>
audit points i want to make sure that we address all audit points we can during the implementation process for 133 . are there any points related to affiliate books , accrual books , hedging or policies related to that ? i know there was one on the affiliate or hedging policy . please send it to me and ron baker . thanks .
</pre>

## Record 001906

**Label:** `benign`

<pre>
Dan Kohn  writes:&gt; Guys, the Habeas Infringers List (HIL) exists explicitly to deal with
&gt; spammers while we&#x27;re getting judgments against them and especially in
&gt; other countries, where those judgments are harder to get.My concern doesn&#x27;t stem from failing to understand how your business is
intended to work.  My concern is the lack of empirical evidence that it
will reduce the amount of uncaught spam.&gt; Please note that nobody has ever had an incentive before to go after
&gt; regular spammers.  Yes, some attorneys general have prosecuted blatant
&gt; pyramid schemes, and ISPs have won some theft of service suits, but
&gt; the vast majority of spammers go forward with out any legal hassles.
&gt; So, I can&#x27;t understand how Daniel can assert that you can&#x27;t track
&gt; spammers down when it&#x27;s never really been tried.Please don&#x27;t misquote me.  I did not assert that you &quot;can&#x27;t track
spammers&quot;.  Here is what I said:| It will be difficult to find, prosecute, and win money from someone in
| various non-friendly countries where spam originates (China is a good
| example) even if they do officially &quot;respect&quot; copyright law.I understand the incentive that you have to pursue spammers, but that
does not directly translate to less spam being sent to my inbox.  It is
an indirect effect and the magnitude of the effect may not be sufficient
to counteract the ease with which a -20 score on the mark allows spam to
avoid being tagged as spam.&gt; Daniel, it&#x27;s easy enough for you to change the Habeas scores yourself
&gt; on your installation.  If Habeas fails to live up to its promise to
&gt; only license the warrant mark to non-spammers and to place all
&gt; violators on the HIL, then I have no doubt that Justin and Craig will
&gt; quickly remove us from the next release.  But, you&#x27;re trying to kill
&gt; Habeas before it has a chance to show any promise.I think I&#x27;ve worked on SA enough to understand that I can localize a
score.  I&#x27;m just not comfortable with using SpamAssassin as a vehicle
for drumming up your business at the expense of our user base.I think it would make more sense to start Habeas with a less aggressive
score (one which will not give spammers a quick path into everyone&#x27;s
inbox) and after we&#x27;ve seen evidence that the system works, then we can
increase the magnitude of the score.Dan
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 001907

**Label:** `benign`

<pre>
pd : praca dyplomowa v edycja mba ? - - - - - original message - - - - - from : jerzy seremak to : vkaminski @ aol . com sent : tuesday , november 28 , 2000 7 : 49 pm subject : praca dyplpmowa v edycja mba dzie  ? dobry panie doktorze ! ? przesy  am panu ca   ? prac  c dyplomow  ? z finans ? w . cz  c  ~  + pracy zosta  a panu przes  ana w pa  dzierniku . wykresy b  cd  ? kolorowe i uj  cte w pracy . obrona pracy jest zaplanowana w luty br . je  _ eli jest to mo  _ liwe to prosz  c o recenzj  c ? ? z powa  _ aniem ? jerzy seremak v edycja mba wy  _ sza szko  a handlu i finans ? w mi  cdzynarodowych ? w warszawie ? a _ j _ seremak @ pro . onet . pl ? - i - iv rozdzia  pracy - mba . doc - iv - rozdzia  pracy - schemat - mba . doc ? - rozdzia  5 . 1 . tabele . doc - rozdzia  v 5 . 1 . opis . doc ? - rozdzia  v 5 . 2 . , podsumowanie , biografia i spisy . doc - strona tytuowa i spis tre  ~ ci . doc - wstep . doc
</pre>

## Record 001908

**Label:** `benign`

<pre>
re : cv of rodney greene re quantitative positions . vince - would you have any interest in this candidate ? kind regards - amy - - - - - - - - - - - - - - - - - - - - - - forwarded by amy fitzpatrick / lon / ect on 21 / 02 / 2000 09 : 34 - - - - - - - - - - - - - - - - - - - - - - - - - - - bryan seyfried 18 / 02 / 2000 19 : 50 to : amy fitzpatrick / lon / ect @ ect cc : subject : re : cv of rodney greene re quantitative positions . probably a bit to techy for me but maybe a good fit for vince kaminski in houston research . bs amy fitzpatrick 17 / 02 / 2000 12 : 52 to : david port / corp / enron @ enron , david weekes / lon / ect @ ect , steve w young / lon / ect @ ect , bryan seyfried / lon / ect @ ect cc : subject : cv of rodney greene re quantitative positions . any thoughts on this candidate ? kind regards - amy - - - - - - - - - - - - - - - - - - - - - - forwarded by amy fitzpatrick / lon / ect on 17 / 02 / 2000 12 : 52 - - - - - - - - - - - - - - - - - - - - - - - - - - - enron capital &amp; trade resources corp . from : simon bragg 17 / 02 / 2000 12 : 36 to : &quot; &#x27; amy . fitzpatrick @ enron . com &#x27; &quot; cc : subject : cv of rodney greene re quantitative positions . hi amy a colleague of mine interviewed someone last week who is a phd whose background is as a developer within catastrophe risk management . he is looking to move into more of a quantitative role which will utilise his developing skills and also his statistical and theoretical knowledge as well . the issue is that he is based in chicago and i wondered if there would be any interest from your headquarters there . please find attached his details . speak to you soon . regards simon - do 075530 . doc
</pre>

## Record 001909

**Label:** `benign`

<pre>
re : mscf speaker series pierre - philippe ste - marie thanks . kevin kindall and , possibly , kristin gandy from enron will come with me . vince &quot; pierre - philippe ste - marie &quot; on 11 / 01 / 2000 09 : 37 : 13 pm to : cc : &quot; rick bryant &quot; subject : re : mscf speaker series dear mr . kaminski , thank you very much for changing your plane ticket , it was unhoped for . everyhting is now ready for your arrival . we will be at 10 . 30 am on friday at your hotel . if you have not received your schedule yet here is the outline : 10 . 30 on board for school 11 . 00 - 11 . 30 presentation set up . brief brush up with students . 11 . 30 - 14 . 00 presentation and lunch with students 14 . 00 - 14 . 30 meeting with professor chester spatt 15 . 00 - 15 . 30 meeting with coc officer 15 . 30 - 16 . 00 brief tour of the school . ( the four department that sponsor the mscf program ) 16 . 00 back at the hotel to relax . 18 . 30 the group will come at your hotel to go to the restaurant . here is the roster for the evening . - kent garrett : one of the top seed of this year &#x27; s class , versed in mathematic and computer science . will guide and drive you through the day . - ignacio delgado : another top student , master from yale . versed in finance , economics and computer science . - punit rawal : seasonned professional , worked in the financial industry for many years prior to joining the program . - hisamitsu tanaka : another seasonned professional , worked in a major japanese bank for many years as a fx option trader / risk manager . - teresa holden : bright computer scientist , worked in an it group for many years prior to joining the program . - frank quian : brilliant programmer , phd in microbiology form columbia . - rick bryant : director of the mscf program - pierre - philippe ste - marie : president of the speaker series ( that would be me ! ) if there is anything else i can do , please tell me . pierre - philippe ste - marie http : / / pstemarie . homestead . com
</pre>

## Record 001910

**Label:** `benign`

<pre>

Download Dispatch - PC Edition
Downloads
  All
CNET
  The
Web
 
In Utilities:
CloneCD 4.0
In Audio:
Sound Forge 6.0a build 150
Media Jukebox 8.0.32
In Internet:
Accelerate 2K2 3
In Multimedia:
FotoTime FotoAlbum 3.0.2
In Web Authoring:
J-Perk 6.04
TextSOAP 1.5.2
In Business &amp; Finance:
FileMaker Pro 6.0v2
In Games:
Balls of Steel Patch 1.3Most Popular Upgrades:Â 1.
ZoneAlarm Pro 3.0Â 2.
Norton AntiVirus 2002Â 3.
AdSubtract Pro 2.5Â 4.
Microsoft Windows XP - ProfessionalÂ 5.
Nero Burning ROM 5.5Â 6.
Reason 2.0Â 7.
Microsoft Windows XP - Home EditionÂ 8.
QuickBooks Pro 2002 Â 9.
Adobe Photoshop 7.010.
WinZip 8.1
Find a
                   complete list of the 50 most popular software products at
                   CNET
Shopper.com.
  
Summer 2002 software
Test your bandwidth
New jobs, click here!
Inside HP 
Bluetooth: speeds up
July 9, 2002
Rhapsody rulesI never thought Iâ€™d say it, but Iâ€™m changing my tune about subscription music services.When MusicNet and Pressplay launched their monthly subscription services late last year, I was unimpressed. Their music catalogs were limited, the software was clunky, and the copyright protection features seemed unduly restrictive. I wondered how they could ever compete with the seductive (read: free) charms of file sharing. But last week I decided to try out Listen.comâ€™s Rhapsody, a subscription streaming music service that recently managed to secure recordings from all five major labels. And now Iâ€™m rethinking my stance.Rhapsody is not for everyone. If you like to burn your MP3s to CD or download them to a portable player, youâ€™ll want to look elsewhere; Rhapsody allows CD burning only for a small portion of its catalog, and only for an extra charge, and you canâ€™t download MP3s at all. But what Rhapsody does have is music, and lots of it--thousands of albums of all major genres on demand as well as tons of preprogrammed radio stations. I think Listen.com might be onto something with its streaming service. Would you pay 10 bucks a month for a service that has all the music you could ask for, but won&#x27;t allow you to actually download MP3s? Let me know at edit@download.com
Kelly GreenDirector, CNET Download.com
Power Downloader fixes his computer
Sometimes even a superhero has to handle mundane computer
   maintenance. Power Downloader&#x27;s Weekly Picks returns with
   four apps that will save your PC from itself.
Protect your PC
It almost seems like there&#x27;s a new virus in the news every
   week. Of course, you want to protect your PC. But
   how? CNET Software editors walk you through 10 antivirus options.New products from our
sponsors New Window Washer 4.7
What you do online is nobody&#x27;s business. Take control with
   Window Washer. Protect your privacy, clean unwanted files, and
   boost PC performance. Download a free trial version today.
 Magic: The Gathering Online
Have the deadliest strategies all at your control. Experience the most
   competition. There&#x27;s always a game on.
   As your game grows, new challenges await.
All Download Launchpad
titles powered by Download Express--CNET&#x27;s new speedy download
service!
KaZaA remains at the top, our very own CNET CatchUp moves up
   a couple spots to No. 8, and Download Accelerator drops 2
   spots to round out the list at No. 10
 Most Popular TitlesWeek ending July 14 Last  Week 
 Weeks  on Chart 
 Downloads  This
                   Week 1.KaZaA
Media Desktop1
11
2,251,808
2.ICQ
2002a3
251
609,430
3.Morpheus2
63
565,410
4.WinZip4
300
452,540
5.iMesh5
116
353,287
6.BearShare6
74
177,000
7.Ad-aware7
44
156,911
8.CNET CatchUp 1.3110
115
114,250
9.Qtraxmax9
4
110,923
10.Download Accelerator8
135
109,139
           Here are some of the
fastest-rising downloads on our Most Popular list.
           
 
Top Movers
The Rundown 1.
LimeWireAs always, people continue to search for the perfect
      file-swapping client as this P2P tool moves up 3 spots to
      No. 13.2.
QuickTimeMPEG-4 technology, skip protection, and several other features in the latest update move Apple&#x27;s media player up the list 5 spots to No. 29.
       3.
Tony Hawk&#x27;s Pro SkaterOne of the most popular games on
      any platform, this classic provides
      great gameplay as it volleys up the list 13 spots to No. 36.4.
WindowBlindsCustom desktop skins prove popular
      as this utility rises up 4 spots to No. 41.5.
FlashGetThe latest update for this utility, which splits
      up files for faster downloading, makes a showing at No. 45.           Want more? See our Top 50
downloads.
           In Audio
DFX Collection 6.1
       Free to try; $20 to buyFile size:
      Varies by fileMinimum requirements: Windows (all); Winamp, Sonique, Media Jukebox,
                         MusicMatch Jukebox, or RealPlayer/RealOne/RealJukebox
      Give your software music player a little more bounce to the
   ounce with this set of audio enhancement utilities. The
   settings in DFX give you controls for adjusting fidelity,
   ambience, 3D surround, dynamic gain, and bass boost. New
   additions include processing that optimizes your music for
   headphone listening and a flexible skinning system with
   hundreds of customizable skins to choose from. There are
   separate versions of DFX available for Winamp, Sonique, Media
   Jukebox, MusicMatch, and Realmedia audio players.
In Internet
Opera 6.04
 Free to try; $39 to buyFile size:
3.41MBMinimum requirements: Windows 95/98/Me/NT/2000/XP
Surf like a pro with the latest update of this high-performance Web browser. Opera gives you SLL support, tons of
   keyboard shortcuts, the choice of a single- or multiple-document interface, and a lot of other useful features. This
   update includes minor enhancements and bug fixes.      Want to review Opera? Submit your opinion here.
In Multimedia
3D Canvas 5.7
FreeFile size:
6.69MBMinimum requirements: Windows 95/98/Me/2000/XP, DirectX 8.0Bring pixels to life with this intuitive 3D modeling and
   animation tool. 3D Canvas incorporates a drag-and-drop
   approach to 3D modeling and gives you tools to deform,
   sculpt, and paint 3D objects. You can also create animated
   scenes simply by positioning the objects within keyframes.
   Other features let you save your
   animated scenes as AVI files, customize the interface so only
   those items you use most frequently are visible, and more. Best of all, the
   standard version of 3D Canvas is a free product--learn to use
   it, then get the enhanced version for game development and
   rendering photo-realistic images.      Want to review 3D Canvas? Submit your opinion here.
In Utilities
PrintMagic 1.0
Free to try; $24.95 to buyFile size:
592KMinimum requirements: Windows 98/NT/2000/Me/XPMake quick work of your clipboard notations and printing tasks
   with this simple and very handy app. PrintMagic allows you to
   quickly and easily select and print content from almost any
   application using a drag-and-drop interface or its innovative
   Printboard. Plus, the cost savings and productivity
   enhancements provided by PrintMagic are multiplied for any
   organization that uses many computers.      Want to review PrintMagic? Submit your opinion here.
In Games
ChessRally 2.4
Free to try; $20 to buyFile size:
8.58MBMinimum requirements: Windows 95/98/Me/NT/2000/XPPlay chess over the Internet, against the computer, or through
   e-mail with this full-featured game, which offers a
   customizable interface with free downloadable themes. If you
   get stuck, ChessRally even delivers move suggestions. Blue
   has nothing on you.      Want to review ChessRally? Submit your opinion here.Here are some representative responses from last week&#x27;s question on who should take the blame for Web sites not being compatible in every browser:
&quot;Web builders should be doing as much as possible to support the broadest possible usage by their target audience&quot;
A little over half the responses put the onus of compatibility on builders.&quot;There are far less browser makers than there are Web builders and users. So it doesn&#x27;t make sense for users or Web builders to do that job does it?.&quot;
After Web builders, browser manufacturers got the most blame, although this response makes the best argument.&quot;The ordinary users are one group most at fault since they tend to stick to only one browser.&quot;
Few responses said users should take responsibility, as most respondents fall into the Web user category.&quot;As a professional designer, I say proprietary code is downright evil, no matter who it comes from--and no matter what nifty trick it does.&quot;
Quite a number of Web builders wrote in, with many taking responsibility while noting the difficulty of testing in every browser.&quot;Because Web pages are viewed 90 percent of the time by IE it is understandable that the time spent to make a site compatible with the remaining tiny minority has to be justified.&quot;
A few responses quoted server logs, making the point that it&#x27;s not cost efficient to make sites compatible for people who choose a low-market share browser.The e-mail address for your subscription isÂ 
UnsubscribeÂ |
Â Manage My Subscriptions
Â |Â FAQÂ |
Â AdvertisePrice comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          

</pre>

## Record 001911

**Label:** `benign`

<pre>
california update 3 / 21 / 01 executive summary : ? situation &quot; confused &quot; but filing probably postponed until monday ? could be sooner if negotiations completely collapse , or if commercial paper holders file pre - emptively to the qfs ? qfs pressuring legislature for rate hikes , in - state generators negotiating with ferc ? davis &#x27; s proposed cpuc payment to qfs would require legislative approval - - tough to get before friday ? absent rate hikes , bankruptcy filing against edison is still best option for qfs - doubts about gas supply contracts and market value of davis &#x27; price proposals 1 . situation confused , but bankruptcy unlikely before monday the situation in california is described as &quot; confused &quot; due to the flurry of activity by the governor over the last twenty - four hours . it seems likely that this state of confusion will serve to forestall an involuntary bankruptcy filing until next week , when the situation should become clearer . 2 . earlier bankruptcy possible if . . . . sources believe that two events could change this and precipitate an &quot; immediate &quot; filing : 1 ) a breakdown in negotiations between the governor and the qfs and 2 ) a puc order to pay the qfs $ 1 billion , which would be seen as a preference payment and cause the commercial paper holders to file an involuntary bankruptcy . 3 . qfs negotiating with davis , in - state generators talking to ferc sources report that the qfs are currently either meeting with their lawyers are involved in negotiations with the governor &#x27; s people and the legislature . they are reportedly &quot; working on keeley , &quot; since he has actually suggested openly that there needs to be a rate increase . sources report that the in - state merchant generators are occupied today with preparing reports for the ferc . the ferc has made demands that the generators report to them on market conditions , etc . that have governed their reactions . the reports are due tomorrow . sources indicate that ferc has placed these demands to placate the california delegation and to &quot; give the appearance of concern &quot; for the situation in california . note , however , that the ferc did not make similar demands on out - of - state generators . 4 . $ 1 billion payment to qfs requires legislative approval , could trigger filing by commercial paper holders sources report that the governor continues to focus on trying to get a $ 1 billion payment made to the qfs to forestall a bankruptcy filing . he is trying to get the legislature to grant the puc the authority to order this payment . this is in spite of the fact that such a payment would be seen by commercial paper holders as a preference payment , and that the money might have to be returned in the event of a bankruptcy filing . such an order by the puc would likely precipitate an involuntary bankruptcy filing by the commercial paper holders . 5 . why is involuntary bankruptcy still attractive for the qfs ? davis / capuc plan does not incorporate payments on existing debt and requires a less than &quot; market standard &quot; price concession from the qfs ( $ 75 mw 5 yrs , $ 69 mw for ten years ) . current spot market power prices in the west far exceed these values . qfs who are already off - line have no need to worry about &quot; pre - payments &quot; or future payments for power ; they just want payment for the power they have provided . the key weakness in this proposed plan is the inability of the qfs to fix their costs going forward . their biggest cost is natural gas . the natural gas supply contracts are between the utilities and gas providers . it would be up to the utilities to fulfill the terms of the contracts . it does not appear reasonable that a natural gas supplier would enter into a 5 - or 10 - year gas supply contract with pg &amp; e or socal , since in the even of a bankruptcy these contracts could be rejected . the utilities remain a credit risk . unless the price of natural gas is fixed , the qfs cannot enter into 5 - or 10 - year power contracts at these prices . moreover , gas price volatility is expected to increase rather than decrease . some sort of state support is needed to fix the gas supply contracts , and there has been no indication that the state is willing to make this sort of commitment . the state legislature does not seem willing to assume more risk at this point .
</pre>

## Record 001912

**Label:** `benign`

<pre>
txu contract search anthony , daren farmer on the texas desk called me today looking for an active contract that ena has with txu gas distribution ( formerly txu lone star gas ) dated 11 / 1 / 97 . i queried global contracts for that cp and didn &#x27; t find anything , active or not . please research all the txu entities to see if you can find a physical contract with ena with that date . please call daren at x 36905 if you have any questions . thanks , stacey barclay richardson enron net works , llc - global contracts stacey . richardson @ enron . com ( 713 ) 853 - 0569 office ( 713 ) 646 - 2495 fax ( 713 ) 710 - 6084 pager
</pre>

## Record 001913

**Label:** `benign`

<pre>
the installation of the equipment you ordered is completed - - - automatic notification system ( request # : ecth - 4 r 5 mlm ) requested for : vince j kaminski requested by : shirley crenshaw the installation of the equipment ( see below ) has been completed . en 6600 desktop p 3 - 600 10 gb 64 mb 32 x nt 4 . 0 en 6600 128 mb installed in desktop 21 &quot; vl 100 monitor
</pre>

## Record 001914

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/10/01.html#colophon_2
Date: 2002-10-01T00:22:28-05:00_Heather Hamilton_: About[1]. â€œI am that girl.â€[1] http://www.dooce.com/about.html

</pre>

## Record 001915

**Label:** `benign`

<pre>
Foundstone Labs Advisory - 080902-APILAdvisory Name:	Information Leakage in Orinoco and Compaq Access Points
 Release Date:	August 9th, 2002
  Application:	Orinoco Residential Gateway and Compaq WL310
    Platforms:	N/A
     Severity:	The ability to display/modify configuration information
      Vendors:	Orinoco (http://www.orinocowireless.com) and
                  Compaq (http://www.compaq.com)
      Authors:	Marshall Beddoe (marshall.beddoe@foundstone.com)
                  Tony Bettini (tony.bettini@foundstone.com)
CVE Candidate:	CAN-2002-0812
    Reference:	http://www.foundstone.com/advisoriesOverview:An information leakage vulnerability exists in Orinoco and Compaq OEM 
access points, disclosing the unique SNMP community string. As a result,an attacker can query the community string and gain the ability to
change
system configuration including Wired Equivalent Privacy (WEP) keys and 
Domain Name Service (DNS) information.Detailed Description:The Compaq WL310 is an OEM Orinoco Residential Gateway access point.
Both the Compaq and Orinoco access points use a unique identification
number
found on the bottom of the access point for configuration through
their management client. This identification string is used as the
default SNMP read/write community string. The community strings appears
to be unchangable, unique, and not easily guessable. By sending a
specific packet to UDP port 192, the access point will return
information including the firmware version and the unique identification
value. The packet returned includes the value of system.sysName.0, which
in the case of the Compaq WL310 and Orinoco Residential Gateway,
includes
the unique identification value. The identification value can then be
used as the SNMP community string to view and modify the configuration.The probe packet:
&quot;\x01\x00\x00\x00\x70\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;
&quot;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00&quot;Example probe response:
01 01 00 00 00 00 00 00  00 00 00 00 00 00 00 00  | ................
00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  | ................
00 00 00 00 00 60 1d 20  2e 38 00 00 18 19 10 f8  | .....`. .8......
4f 52 69 4e 4f 43 4f 20  52 47 2d 31 31 30 30 20  | ORiNOCO RG-1100
30 33 39 32 61 30 00 00  00 00 00 00 00 00 00 00  | 0392a0..........
02 8f 24 02 52 47 2d 31  31 30 30 20 56 33 2e 38  | ..$.RG-1100 V3.8
33 20 53 4e 2d 30 32 55  54 30 38 32 33 32 33 34  | 3 SN-02UT0823234
32 20 56 00                                       | 2 V.system.sysName.0 = &quot;ORiNOCO RG-1100 0392a0&quot;
Community name: 0392a0Vendor Response:Both vendors were notified of this issue on July 8th, 2002. According
to Orinoco, &quot;The Residential Gateway line has been discontinued.&quot;Solution:Employ packet filtering on inbound requests to deny access to ports
192/udp and 161/udp on the access point.FoundScan has been updated to check for this vulnerability. For more
information on FoundScan, see the Foundstone website:
http://www.foundstone.comDisclaimer:The information contained in this advisory is copyright (c) 2002 
Foundstone, Inc. and is believed to be accurate at the time of 
publishing, but no representation of any warranty is given, 
express, or implied as to its accuracy or completeness. In no 
event shall the author or Foundstone be liable for any direct, 
indirect, incidental, special, exemplary or consequential 
damages resulting from the use or misuse of this information.  
This advisory may be redistributed, provided that no fee is 
assigned and that the advisory is not modified in any way.
</pre>

## Record 001916

**Label:** `benign`

<pre>
Thanks Matthias...After installing those packages Xine now installs
fine.  Guess I shoulda figured that one out...Thanks...
QuaffAPint_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 001917

**Label:** `benign`

<pre>

I wonder if the CEO dig also suggests proprietary software vendors
may in fact be /physiologically/ sociopathic...damn, now I&#x27;ve just been defacto excluded from yet another well-paid
subculture!  it&#x27;s just not my day.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
Business Innovations Through Open Source Systems: http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)http://xent.com/mailman/listinfo/fork

</pre>

## Record 001918

**Label:** `benign`

<pre>
fw : filling vacancies and adding head count this is now the new policy . please email justification to me when hiring replacements . consider all alternatives before automatically re - hiring and also carefully consider the level you need to hire . as you can see any additional hires require multiple sign - offs and will require a face to face meeting with me before proceeding . let me know if you have any questions . tks - bob - - - - - original message - - - - - from : hall , bob m sent : thursday , october 04 , 2001 3 : 04 pm to : reeves , leslie ; superty , robert ; gossett , jeffrey c . ; white , stacey w . ; wynne , rita ; mcclure , mark subject : filling vacancies and adding head count after my recent budgeting experience , i think we need to tighten up our procedures around filling vacancies and adding head count . when filling vacancies , i would like to have each of you review the positions . i think we need to challenge ourselves and the managers to be as conservative as possible . i would like to sign off on all replacements . i promise not to be difficult . when adding personnel over your current budgeted number , besides having the commercial team sign - off on the addition , i am think that it may have to be approved by the coo of americas ( louise ) . i am planning on meeting with her next week to discuss in detail how to keep her in the loop in new hires resulting from business changes ( asset management deals or service arrangements ) let me know what you think . thanks bob
</pre>

## Record 001919

**Label:** `benign`

<pre>
another addition from enron tiger member vince : please add deepa mallik to the list , as well , as she is interested in a summer internship with enron . she said she forwarded her resume to you last week . will gladly resend , if necessary . thanks , donna &gt; - - - - - original message - - - - - &gt; from : fap &gt; sent : friday , february 02 , 2001 2 : 04 pm &gt; to : &#x27; vkamins @ enron . com &#x27; &gt; cc : &#x27; clayton . degiacinto . wgo 2 @ wharton . upenn . edu &#x27; ; &gt; &#x27; hethorne @ wharton . upenn . edu &#x27; ; thomas ; weigelt ; fap &gt; subject : addition from enron tiger member &gt; importance : high &gt; &gt; vince : &gt; &gt; please add clayton degiancinto as an applicant to a summer internship at &gt; enron . he told me that he sent christie patrick his resume two weeks ago . &gt; let me know if you need to have it resent . &gt; &gt; thanks , &gt; donna
</pre>

## Record 001920

**Label:** `benign`

<pre>
comparative method alexis manaster ramer asks about the claim that relatedness and / or subgrouping should be established only based on systematic morphological relationships of the sort likely to be observed in paradigms or declensions . i &#x27; m familiar with this claim only in a much weaker form , that morphological comparisons are more reliable than phonological ones as a basis for establishing linguistic relationships and subgroups . on this basis , for example , robert hetzron in 1976 * proposed a rigorous internal subgrouping for the semitic languages based on affixes in the verb paradigms . hetzron &#x27;s proposal that hebrew , arabic , and aramaic constitute a central semitic group is , i believe , correct ; and it is supported by much more evidence than hetzron adduces , much of it morphological and morpho-syntactic ( e . g . , innovation of novel negative markers , etc . ) . i may be reading too much into these claims of morphological priority in establishing subgrouping , but i have always interpreted them as a reaction to the difficulty of distinguishing convergent from shared phonological development on a principled basis . that is , because it can be difficult to determine whether a particular recurrent sound change in a language group represents shared innovation rather than convergent development , it might be pragmatically safer to rely on morphological innovation . thus , in the case of the semitic languages , such changes as * p to / f / or * g to / jh / ( as in junk ) would , if treated as shared innovation , lead to subgroups that are inconsistent with those deduced by other means . on the other hand , &quot; unusual &quot; changes like the change of proto - semitic glottalic consonants to pharyngealized consonants are much more likely to represent shared innovation , given the typological rarity of pharyngealized consonants . with regard to fritz newmeyer &#x27;s questions about comparative syntactic reconstruction , i do n&#x27;t know of any systematic published counters to jeffers &#x27; ( and others &#x27; ) claims that it is * in principle * impossible . however , i think that a good case can be made that this is an overly pessimistic assessment . the problem , of course , is the appropriate context : we compare phonemes in words and / or morphemes and morphemes in paradigms , but it &#x27;s not clear what the context might be for word orders . presumably discourse context plays a role . i would imagine that if all the languages in a family shared an unusual word order ( vis a vis their dominant types , whatever those might be ) in counterfactuals , we might want to attribute that order to their latest shared ancestor . pragmatically speaking , it &#x27;s a lot easier to find information about the morphological context of particular phonemes than it is to find reliable information about the larger context for sentence and construction types . nonetheless , at least inchoately ( and perhaps it is the inchoateness that jeffers objects to ) , * some * notion of syntactic reconstruction is surely behind claims that proto - indo - european was sov or proto - semitic was svo , and the like . * &quot; two principles of genetic reconstruction &quot; , lingua 38 : 89-104 . alice faber faber @ haskins . yale . edu
</pre>

## Record 001921

**Label:** `benign`

<pre>
fyi : hellenistic greek linguistics resources announcing : hellenistic greek linguistics on the internet [ with apologies for any multiple postings ] i am pleased to announce new resources designed to bring together scholars interested in the study of hellenistic ( including new testament ) greek linguistics . these resources include world wide web pages ( accessible with such programs as lynx , mosaic and netscape ) as well as a mailing list . as well as general discussion , the list ( which is archived on the web pages ) provides a forum for discussing the new reference grammar planned as a complete revision of blass , debrunner and funk &#x27;s standard work . the web pages include bibliographies and a ( newly started ) electronic archive of papers . to browse the web pages , go to the url : http : / / tartarus . uwa . edu . au / hgrk to subscribe to the mailing list , send a request to : jtauber @ tartarus . uwa . edu . au and to send a message to the entire list , write to : greek-grammar @ tartarus . uwa . edu . au please feel free to make enquires to jtauber @ tartarus . uwa . edu . au james k . tauber ( jtauber @ tartarus . uwa . edu . au ) 4th year honours student , centre for linguistics university of western australia , wa 6009 , australia
</pre>

## Record 001922

**Label:** `benign`

<pre>
(pace Giraudoux)To be more precise, I believe that there will be no &quot;war of civilizations&quot;
between the Western and the Muslim, and not because of drum-beating or
war-mongering from some parts, but due to stuff like this:  http://www.lemonde.fr/article/0,5987,3210--286553-,00.html&gt;L&#x27;assemblï¿½e nationale turque a rï¿½alisï¿½ l&#x27;impossible : pour satisfaire
&gt;aux demandes de l&#x27;Union europï¿½enne, le Parlement, lors d&#x27;une session
&gt;qui a durï¿½ plus de seize heures, a, aboli la peine de mort (sauf en
&gt;cas de guerre), ï¿½liminï¿½ les obstacles lï¿½gaux ï¿½ l&#x27;ï¿½ducation et ï¿½ la
&gt;diffusion en langue kurde, levï¿½ certaines restrictions rendant
&gt;l&#x27;organisation de manifestations difficile et mis fin ï¿½ l&#x27;imposition
&gt;de peines pour critiques envers l&#x27;armï¿½e ou d&#x27;autres institutions ï¿½tatiques.i.e., &gt;The Turkish National Assembly achieved the impossible: to satisfy
&gt;European Union demands, the Parlement, during a session lasting more
&gt;than sixteen hours, abolished the death penalty (except in war time),
&gt;eliminated legal obstacles to teaching and spreading of the Kurdish
&gt;language, lifted certain restrictions making it difficult to organise
&gt;protest marches and ended penalties imposed for criticism of the army
&gt;and other state institutions.
This is the way forward, IMO.  Just wait a couple of years until
66 million Muslim Turks are making great strides towards democracy
and prosperity in the E.U. and Syria, Lebanon etc start lining up and
making similar decisions.Of course there are hard-liners who would be right at home on
Rumsfeld&#x27;s staff, but they got out-voted:&gt;La peine de mort s&#x27;est rï¿½vï¿½lï¿½e le sujet le plus ï¿½pineux : les
&gt;ultra-nationalistes ï¿½taient dï¿½terminï¿½s ï¿½ obtenir la pendaison du
&gt;dirigeant du PKK (kurde), Abdullah ï¿½calan, considï¿½rï¿½ par les Turcs
&gt;comme personnellement responsable de la mort de plus de 30 000
&gt;personnes.  ï¿½calan avait ï¿½tï¿½ condamnï¿½ ï¿½ mort en juin 1999, mais le
&gt;gouvernement avait acceptï¿½ d&#x27;attendre le verdict de la Cour europï¿½enne
&gt;des droits de l&#x27;homme avant de l&#x27;exï¿½cuter.  De nombreux nationalistes
&gt;estimaient ï¿½galement que l&#x27;octroi de droits culturels aux Kurdes
&gt;reprï¿½senterait une concession aux revendications des &quot;terroristes&quot;.i.e.,&gt;The death penalty turned out to be the thorniest issue: the
&gt;ultra-nationalists were determined to secure the hanging of the PKK
&gt;leader, Abdullah ï¿½calan, considered by the Turks to be personally
&gt;responsible for the deaths of more than 30,000 people.  ï¿½calan had
&gt;been condemned to death in June 1999, but the government had accepted
&gt;to wait for the verdict of the European Court of Human Rights before
&gt;executing him.  Many nationalists also believed that handing cultural
&gt;rights to the Kurds would constitute a concession to &quot;terrorist&quot;
&gt;demands.
Over &#x27;n out,
  Rob.
     .-.                                                               .-.
    /   \           .-.                                 .-.           /   \
   /     \         /   \       .-.     _     .-.       /   \         /     \
  /       \       /     \     /   \   / \   /   \     /     \       /       \
 /         \     /       \   /     `-&#x27;   `-&#x27;     \   /       \     /         \
            \   /         `-&#x27;                     `-&#x27;         \   /
             `-&#x27;                                               `-&#x27;
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001923

**Label:** `benign`

<pre>
start date : 12 / 28 / 01 ; hourahead hour : 11 ; start date : 12 / 28 / 01 ; hourahead hour : 11 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001122811 . txt
</pre>

## Record 001924

**Label:** `benign`

<pre>
hello again hi darren , did you successfully receive the information i sent to you . i would appreciate a response so that i know your needs . i am sure your schedule is as busy as mine and i am committed to providing dedicated service to all my clients and in return i request your loyalty . please direct your questions and concerns in my direction and let me know in what areas you would like my assistance . please send me your reply so that i may better ascertain your needs . thank you . iona alphonso always in tune with your needs oh , by the way . . . if you know of someone thinking about buying or selling a home , please call me with their name and number - thanks a million ! ! prudential , gary greene realtors 3910 fm 1960 west , suite 100 houston , texas 77068 voice mail : 281 - 857 - 2485 x 535 pager : 281 - 551 - 6549 office : 281 - 444 - 5140 fax : 281 - 444 - 0630 web site : http : / / www . ionaalphonso . com resume : http : / / www . har . com / ionaalphonso gary greene web site : http : / / www . garygreene . com please view my monthly newsletter at http : / / homeownernews . com / c / ionaalphonso
</pre>

## Record 001925

**Label:** `benign`

<pre>
re : model effort in houston mike pls discuss with mark tawney . under the revised egm structure for weather we need to revisit theintended arrangement . thnx paul from : mike a roberts @ ect 10 / 04 / 2001 04 : 59 am to : christian werner / enron _ development @ enron _ development cc : vince j kaminski / hou / ect @ ect , paul quilkey / enron _ development @ enron _ development , mark tawney / enron @ enronxgate subject : model effort in houston christian , our spring / fall window of &quot; &lt; nactivity &quot; is rapidly eluding us . . . we need to get our internal model operational without delay . along these lines , let &#x27; s go ahead and plan your visit to houston as soon as possible , but by all means get you in at least 4 weeks before hurricane season . that would mean the month of may looks good . please inform me what duties you could not perform from here to support the sydney office , we &#x27; ll figure out how to keep that office whole . ( it &#x27; s working without a hitch to have steve bennett in london , but continuing his houston duties ) if the first week in may ( for the whole month ) will work , please respond asap and we &#x27; ll get housing arrangements finalized . looking forward to your visit , - - - mike
</pre>

## Record 001926

**Label:** `benign`

<pre>
re : mark mark frevert ?
</pre>

## Record 001927

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 24 / 02 ; hourahead hour : 9 ; hourahead schedule download failed . manual intervention required .
</pre>

## Record 001928

**Label:** `benign`

<pre>
rumors that ferc may issue rulemaking on stronger affiliate codes of conduct as an fyi , our dc office heard today that ferc may issue a notice of proposed rulemaking ( nopr ) potentially strengthening affiliate codes of conduct in the natural gas industry on june 25 . the range of outcomes could go from anywhere from simply rationalizing 497 ( natural gas code of conduct ) and 889 ( electric code of conduct ) through full divestiture ( although this is highly unlikely ) . if this happens , it is most directly the result of the on - going litigation at ferc surrounding el paso merchant &#x27; s use of capacity into california . as soon as we hear anything additional , we &#x27; ll let you know . jim
</pre>

## Record 001929

**Label:** `benign`

<pre>
eBays trust the feedback?----- Original Message ----- From: &quot;Chip Paswater&quot; To: &quot;Patrick&quot; Cc: Sent: Wednesday, August 14, 2002 9:51 PM Subject: Re: [Razor-users] Re: What&#x27;s wrong with the Razor servers now? &gt; &gt; &gt; It&#x27;s not my desire to second-guess you Vipul (however much my missives &gt; &gt; &gt; may appear otherwise) or question the hard work you and the other &gt; &gt; &gt; developers have put into the system, however it seems that every request &gt; &gt; &gt; for such information has been met with silence. &gt; &gt; &gt; &gt; There are no plans for releasing details about TeS. Before the &gt; &gt; release of Razor2, I&#x27;d pointed out that Razor2 backend (specially &gt; &gt; TeS) will be closed. &gt; &gt; Thanks for the clarification. Guess it&#x27;s time to find something that is &gt; open. &gt; &gt; Good luck.Why do the details of the backend need to be open?I don&#x27;t think that Ebay publishes it&#x27;s proprietary trust backend, why should Razor?------------------------------------------------------- This sf.net email is sponsored by: OSDN - Tired of that same old cell phone? Get a new here for FREE! https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390 _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users ------------------------------------------------------- This sf.net email is sponsored by: OSDN - Tired of that same old cell phone? Get a new here for FREE! https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390 _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 001930

**Label:** `benign`

<pre>
Once upon a time, Ralf wrote :&gt; Matthias Saou  wrote:
&gt; &gt; My main concern is that when rebuilding the recent packages I&#x27;ve made
&gt; &gt; for Psyche on Valhalla, I&#x27;d need to lower the &quot;Release:&quot; tag (to keep
&gt; &gt; an upgrade working), and that would f*ck up my CVS repository which is
&gt; &gt; on my Valhalla box
&gt; 
&gt; Sorry, I don&#x27;t get it. What&#x27;s wrong with a release tag of fr1?Say you have installed synaptic-0.24-fr1 on your Valhalla box (package
rebuilt for Valhalla). Then you upgrade to Psyche using the Red Hat CDs.
Hopefully with the compat libraries the package will still be there
(although I doubt that since C++ is binary incompatible, so this is
probably a bad example), then you &quot;apt-get update&quot; with the new Psyche
repository... and there&#x27;s where the problem will be : It will say that
there are two synaptic-0.24-fr1 packages (one installed, the other
available) with the same version but different dependencies :-/
That&#x27;s why I always keep package versions lower for older distributions.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 001931

**Label:** `benign`

<pre>
Quoting Declan Houlihan (deccy@csn.ul.ie):&gt; We&#x27;re actually investigating switching from Sparc/Solaris to 
&gt; Intel/Linux. I would much prefer to be using Linux at work
&gt; so I&#x27;m pushing for this. It definately doesn&#x27;t help when 
&gt; you&#x27;re given a bog standard Dell box and linux won&#x27;t work
&gt; with the graphics card on it.(1) Quibble:  For values of &quot;work&quot; limited to X11, not console support.(2) Decent substitute graphics cards with well-tested XFree86 support
are cheap.  Swap the problematic one out, and save it for some other
workstation later.  For that matter, somebody with a Win32 system
containing such a card might be ecstatic over the opportunity to swap.(3) Welcome to the Linux world, where we&#x27;ve known for... oh... about
eleven years that you fail to research chipsets before installation at
your peril.-- 
Cheers,   The difference between common sense and paranoia is that common sense
Rick Moen     is thinking everyone is out to get you.  That&#x27;s normal; they are.
rick@linuxmafia.com      Paranoia is thinking they&#x27;re conspiring.  -- J. Kegler-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001932

**Label:** `benign`

<pre>
telephone interview with the houston research group good morning quentin : vince kaminski and the research group would like to conduct a telephone interview with you sometime next week . considering the time difference between houston and australia , it probably makes sense to try and schedule it very early in the morning your time , say 7 : 00 am ? it would be 5 : 00 pm here in houston . how does next wednesday or thursday , ( 8 / 16 or 8 / 17 ) at 7 : 00 am your time sound ? also , please let me know if you want to be reached at home or work . thanks quentin and have a great day ! shirley crenshaw administrative coordinator enron research 713 / 853 - 5290 email : shirley . crenshaw @ enron . com
</pre>

## Record 001933

**Label:** `benign`

<pre>
final list ( as of 9 / 26 / 00 ) i &#x27; m back ! ! ! ! ( smile ) for your information , the following is our final list of participating customers for vail . . . . steve harris * * audrey robertson * * penny barry cathy bulf craig carley tom carlson jeff fawcett kevin hyatt carla johnson elsa johnston lorraine lindberg * * tk lohman * * michelle lokay * * ed meaders christine stokes jane tholt * * tommy thompson * * scott walker customers * * staying over friday and saturday . . . as this list changes , i will keep you informed . thanks in advance , adr
</pre>

## Record 001934

**Label:** `benign`

<pre>
Rick Moen  wrote:
&gt; Don&#x27;t like SuSE&#x27;s product licensing?  Write your own distribution.  You
&gt; can even grab most of what you need _from SuSE_.  All you have to do is 
&gt; heed the licensing terms on the individual pieces.
How unimaginably difficult is this to do?
There are as far as I know, no Linux kernel hackers, nor distros that originate from this fair island right?
Right.Yes it might be very,very difficult and subject to abject failure 
in sticking together a distro.... call it Dolmen Linux (or other), 
no doubt the packaging system would be one of the first places
 such a suggestion would stumble.
Some (like me) favouring a FreeBSD style ports system others favouring
 a Debian style system and others still favouring *rpm style packaging.That said other *LUG have done interesting things like making blackbox.Perhaps making a distro would be ..... umm.... fun.Just a pseudo random thought.
I&#x27;m only laughing on the outside 
My smile is just skin deep 
If you could see inside I&#x27;m really crying 
You might join me for a weep.
&lt;&gt;-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001935

**Label:** `benign`

<pre>
re : natural gas nomination for 07 / 00 i went ahead ahead and accepted the nom , put it in at start of the month pricing on the base ticket and ignored the 9500 limit , because it &#x27; s a good price ! ! daren j farmer 06 / 26 / 2000 05 : 47 pm to : lee l papayoti / hou / ect @ ect cc : subject : natural gas nomination for 07 / 00 sitara # 139066 has a max of 9500 in the flex nom . is this correct ? should the additional 1500 be on a swing ticket or included on the index ticket ? d - - - - - - - - - - - - - - - - - - - - - - forwarded by daren j farmer / hou / ect on 06 / 26 / 2000 05 : 45 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - michael mitcham @ enron 06 / 26 / 2000 05 : 28 pm to : david bush / ecf / enron @ enron , mark diedrich / gpgfin / enron @ enron , paul fox / ecf / enron @ enron , david m johnson / ecf / enron @ enron , robert lee / ecf / enron @ enron , thomas meers / gpgfin / enron @ enron , maritta mullet / gpgfin / enron @ enron , james prentice / gpgfin / enron @ enron , kerry roper / gpgfin / enron @ enron , sally shuler / gpgfin / enron @ enron , daren j farmer / hou / ect @ ect , lee l papayoti / hou / ect @ ect , steven m elliott / hou / ect @ ect , john l nowlan / hou / ect @ ect , fred boas / hou / ect @ ect , gregg lenart / hou / ect @ ect cc : subject : natural gas nomination for 07 / 00 enron methanol nominates the following natural gas requirements for the methanol plant for july 2000 : 36 , 000 mmbtu per day egpfc nominates the following natural gas requirements for the mtbe plant at morgan &#x27; s point for july 2000 : 11 , 000 mmbtu per day
</pre>

## Record 001936

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85481649
Date: Not suppliedJavawalk is a coffee-oriented walking-tour of San Francisco.     Javawalk is a two-hour walk in the city center. We start at Union Square 
    and wind through Chinatown, Jackson Square and North Beach, the city&#x27;s 
    Italian district. While we cover the city&#x27;s coffee roots (much more 
    significant than Seattle&#x27;s!) and coffeehouse culture (think beatnik), we 
    also spend some time on San Francisco&#x27;s history, interesting and arcane 
    trivia and stories the Javagirl has collected from many years of living in 
    the city. Truly, some things could only happen in SF! Javawalk also makes a 
    couple of stops at North Beach cafes for a quick java jolt. Since cool 
    weather prevails here, we need coffee year-round in the city by the Bay. 
    Lucky us!  Link[1] Discuss[2] (_Thanks, Paul!_)[1] http://www.javawalk.com/javawalk.html
[2] http://www.quicktopic.com/boing/H/hgG7TyTTrKj

</pre>

## Record 001937

**Label:** `benign`

<pre>

Internet Services Weekly Newsletter
Reseller Accounts1.Â InfinologyÂ Corp., $592.Â ReadyHosting.com, $4.123.Â Aplus.Net, $79.954.Â OneÂ WorldÂ Hosting, $105.Â SuperbÂ Internet, $5More providersJuly 18, 2002
--Lindsey Turrentine
Senior editor
CNET Software and Internet
 Dear Readers,On the surface, it seems odd that Microsoft and AOL compete with
one another. After all, while Microsoft is a giant software
powerhouse, AOL Time Warner is totally different--a giant media
powerhouse. Nonetheless, they&#x27;re at it again, working like crazy
to dominate the ISP space. While AOL is busy renovating the guts
of upcoming AOL 8.0, which will finally integrate the Netscape
browser, Microsoft is nipping at its competition&#x27;s heels with MSN
8.0. Will Microsoft make enough improvements to finally catch up
with AOL? It just might. Find out more in our MSN 8.0 First
Take. Quick links to Services &amp; Prices from these companies
 
 
 This week in Internet ServicesEver heard of a type of lawsuit known as a cyberSLAPP? We hadn&#x27;t either. A cyberSLAPP case
typically involves &quot;a person who has posted anonymous criticisms
of a corporation or public figure on the Internet,&quot; according to
a coalition of privacy groups who are fighting to stop the
practice. Find out more.
First Take: MSN 8.0 BetaRedmond has been talking up the newest version of MSN for months,
and now, the proof&quot;s in the pudding. Testers have their hands on
the beta of MSN 8.0, and so far, this ISP looks and works better
than past versions. The great No. 8 even has antispam tools and
improved parental controls. But will MSN topple AOL?
First Take: ICQ Lite AlphaOne of our biggest beefs with ICQ has always been its bloated
feature set. Now, the company has released a new lite ICQ that
sucks up far less system memory than the full-fat version--but at
what cost? We take an early look.Looking for a new DSL provider?The DSL Power Search makes it easier to find the perfect
broadband provider for your needs. With our search, you can
identify the DSL providers in your neighborhood, then compare
prices and plans to make sure your new connection meets with your
objectives without breaking your budget.Don&#x27;t type that: Yahoo edits e-mailYahoo&#x27;s filter hunts for words that could activate JavaScript,
then it replaces them.
Scient files for Chapter 11 
The Internet consultancy and former highflier is also selling
certain assets to SBI and Company, a professional services
firm.Online undercover!Unless you observe the proper safety rules, surfing the Net
could land you in hot water. These simple tips can help.
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
CNET Radio
Music Center 
Search  
 Internet Services
	All CNET
	The Web	
	
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

## Record 001938

**Label:** `benign`

<pre>
i though this was all rather interesting, first bit of 9/11 coverage that 
i&#x27;ve liked.http://www.salon.com/mwt/feature/2002/09/11/forbidden_letters/index.htmlChris

</pre>

## Record 001939

**Label:** `benign`

<pre>
Once upon a time, Ralf wrote :&gt; Skipping all RPM build parts except for the actual packing is not
&gt; possibleActually it is (sort of).
To answer partly the original question, this might have been useful once
the %files error was corrected :rpmbuild -bi --short-circuit This will skip all the way to the %install and start from there. Of course,
you need to have already done everything else before, and this will _not_
produce any rpm files, but will at least tell you if everything is now able
to finish successfully.Sure, it&#x27;s not perfect since if the %files error was actually because
entries were missing you&#x27;ll notice it only once the package is really
installed. But for multiple typos in the %files section (like when you&#x27;re
writing a spec file after 2AM ;-)) it can come in handy :-)It&#x27;s also very useful if you need to override some Makefile variables
during install, when the simple cases like &quot;%makeinstall&quot; or &quot;make install
DESTDIR=%{buildroot}&quot; don&#x27;t work. It keeps you from redoing all the
unpacking and building processes.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 001940

**Label:** `benign`

<pre>
URL: http://jeremy.zawodny.com/blog/archives/000222.html
Date: 2002-10-03T22:15:49-08:00The defective yeti isn&#x27;t fond of Culture Jam. I read it a year or so ago and 
joined Adbusters as a result. I liked the book, but more importantly, I liked 
the message. It resonated with me. A lot. Yes,...

</pre>

## Record 001941

**Label:** `benign`

<pre>
discourse textbooks several weeks ago i posted a request for recent introductory texts in discourse analysis . i received a number of replies that probably covered the range of possibilities . the most frequently mentioned was schiffren &#x27;s new book : schiffrin , deborah . ( 1994 ) . approaches to discourse . blackwell . ( 470 p . ) other books that were mentioned were the following . since i have not been able to check some of the information on these books , i am reproducing their citations more or less as they were sent to me and in alphabetical order . i have omitted a few suggestions that were clearly not general and introductory . i thank all of those who responded . you were all gracious and helpful . since this is already long i will not name you here . you know who you are . * * * * * * * * * * * * * * * * * * * de beaugrande , r . ( 1980 ) . text , discourse and process , longman . de beaugrande , r . and dresler . ( 1983 ) . introduction to text linguistics . longman , london chafe , wallace . ( 1994 ) . discourse , consciousness , and time : the flow and displacement of conscious experience in speaking and writing . u . of chicago press . cook , g . 1989 ( ? ) . discourse . oxford : oup . coulthard , malcolm . ( 1977 , 1985 ) . an introduction to discourse analysis . longman . eggins , suzanne . ( 1994 ) . an introduction to systemic-functional linguistics . pinter / st . martin &#x27;s . fairclough . ( 1992 ) . discourse and social change . polity press . hartmann , r . r . k . ( 1980 ) . contrastive textology . comparative discourse analysis in applied linguistics . heidelberg , julius groos verlag . studies in descriptive linguistics . vol . 5 . 125 pages . hatch , e . ( 1992 ) . discourse and language education . cambridge : cup hatim b . and mason i . ( 1990 ) . discourse and the translator . ( longman ) . kamp , h . and reyle , u . ( 1993 ) . from discourse to logic . kluwer . lambrecht , knud . ( 1994 ) . information structure and sentence form . cambridge university press . langford , david . ( 1994 ) . analysing talk : investigating verbal interaction in english . basingstoke : macmillan . ( 190 p . ) mann , william and thompson , sandra . ( 1992 ) . discourse description : diverse linguistic analyses of a fund-raising text . amsterdam : john benjamins . martin , james . ( 1992 ) . english text . benjamins . mccarthy and carter . ( 1994 ) . language as discourse : perspectives for language teachers . longman . mey , jacob . pragmatics . robert e . nofsinger ( 1991 ) : everyday conversation . newbury park : sage . renkema , jan . ( 1993 ) . discourse studies . an introductory textbook . amsterdam etc . : benjamins , ix + 1-224 pp . isbn 90 272 2136 7 stenstoem , a . b . ( 1994 ) . an introduction to spoken interaction . london : longman . raphael salkie mentioned his . . . &quot; basic introduction to text and discourse analysis which will be published by routledge in their workbooks series in april . the book basically covers cohesion and coherence , with some reference to larger textual patterns in the last chapter . &quot; * * * * * * * * * * * * * * karl krahnke krahnke @ holly . colostate . edu
</pre>

## Record 001942

**Label:** `benign`

<pre>
master vs . gtc louise , i am trying to prepare a set of contract templates for newcoonline , which will give us a starting position to show to the new buyer . there is an alternative for the gtc &#x27; s , which i would like to address in advance : a ) master agreements which appear online and can therefore be accepted online for online or offline business . b ) the existing gtc principle ( derived from the long form confirms ) i have spoken to several people in trading and opinions are evenly split . i prefer the simple gtc as it will help us to do more business sooner ( full masters will take longer for companies to review , and they &#x27; re going to want to negotiate the full master , anyway ) . what is your preference ? dave
</pre>

## Record 001943

**Label:** `benign`

<pre>
opm survey as a reminder , today is the deadline for completion of the opm survey . i am including the body of the email sent monday in this regards which includes the reference document and the link to the survey . thanks for your help and hard work in this matter . opm survey email sent earlier : as communicated to you in an email dated september 19 , 2000 , we have developed an easier and more efficient method of handling the operations pricing model hours survey using microsoft access . the new &amp; improved survey is ready for your input for the month of september . what to do : 1 ) attached is a reference document that lets you know the purpose of the opm hours survey , prerequisites to using the tool , helpful hints and contact information . please open and read . 2 ) click on the attached link to access the opm survey . please select &quot; ok &quot; at the warning message that appears and continue on to the database . if you have any questions / comments , please contact suzanne nicholie at ext . 5 - 7341 . the opm team is available to support you while using this new tool . during the next couple of days , one of the opm team members will be contacting each of you to see if you need help or have any questions . we are asking for a quick turn around of the completion of the survey and although it is month end , quarter end and the planning process is near completion , please complete the opm survey using the database by end of day , friday , october 6 . thanks , james scribner
</pre>

## Record 001944

**Label:** `benign`

<pre>
april , 2001 gathering contracts daren , fyi . bob
</pre>

## Record 001945

**Label:** `benign`

<pre>
flash : london summary 18 dec . 2000 as this is the first few days of runing the flash dpr , if you have any questions or thoughts on improvements pls call michael kass ex 32321
</pre>

## Record 001946

**Label:** `benign`

<pre>
summary justice : judges address juries robertshaw , paul ( university of wales ) ; summary justice : judges address juries published by cassell as part of the open lingustics series ; hb . : 0 304 33701 3 ; us $ 75 . 00 / 55 . 00 this is the first study of the practice of judical summing-up to juries and of its &#x27;s urvey of the evidence &#x27; as rhetoric , persuasive language , in the crown court in england and wales . the transcripts of these summings-up can vary from a few to hundreds of pages , and are significant in that they break the flow between advocates &#x27; turn-taking , especially their final speeches , and the deliberation of the jury . in addition to its linguistic and rhetorical concerns , the book considers this practice of summing-up as a legal problem - as unrecognized advocacy - and examines alternatives , such as the us states &#x27; , canadian and scottish models . the scottish model is prescribed for consideration by anglo - welsh judges , with its insistence on parsimonious reference to the disputed narrative , only where relevant to the legal issues on which instruction is being given . available for review . email : sales @ cassellexport . demon . co . uk
</pre>

## Record 001947

**Label:** `benign`

<pre>
ethane election for september 2000 fyi - - - - - - - - - - - - - - - - - - - - - - forwarded by stella l morris / hou / ect on 08 / 25 / 2000 02 : 16 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - jack simunek 08 / 25 / 2000 01 : 33 pm to : lauri a allen / hou / ect @ ect , michael c bilberry / hou / ect @ ect , nathan l hlavaty / hou / ect @ ect , karry kendall / hou / ect @ ect , blanca a lopez / hou / ect @ ect , stella l morris / hou / ect @ ect , steve hpl schneider / hou / ect @ ect , mary m smith / hou / ect @ ect , george weissman / hou / ect @ ect , dick danes / gco / enron @ enron , pat flavin / gco / enron @ enron , gil gomez / gco / enron @ enron cc : subject : ethane election for september 2000 hpl will be kept whole with respect to ethane recoveries from the big cowboy gas being processed at the king ranch gas plant during the month of september . this election will reduct the shrinkage percentage from 20 % of the inlet mmbtu &#x27; s to 15 % of the inlet mmbtu &#x27; s .
</pre>

## Record 001948

**Label:** `benign`

<pre>
&quot;In fact, Caltech says that it actually spun out the same number of
startups in 2001 -- a poor time, needless to say, for new ventures -- as
it did in the boom year of 1999.&quot;  Oookaaaay...
http://www.fulcrummicro.com/press/article_eeTimes_05-08-02.shtmlIconoclast designers choose MIPS
By Anthony Cataldo
May 28, 2002  SAN JOSE, Calif. -- A group of engineers in Calabasas Hills, CA wants to
turn the microprocessor world on its head by doing the unthinkable:
tossing out the clock and letting the signals move about unencumbered.
For those designers, inspired by research conducted at nearby Caltech,
clocks are for wimps.The Fulcrum Microsystems Inc. design team isn&#x27;t the first to propose an
asynchronous processor, but president and chief executive officer Robert
Nunn wants to be the first to take a clockless, fire-breathing processor
mainstream. &quot;We really deal with an asynchronous world,&quot; he said. &quot;We
only make it synchronous for our own convenience.&quot;This is the kind of stuff that many in the processor industry would
consider lunatic fringe, too weird for conservative embedded-systems
designers. But the young processor company and more than a dozen others
like it are anchored in the mainstream courtesy of the MIPS
instruction-set architecture. More and more, MIPS is becoming the choice
for maverick processor design teams seeking a place at the high end by
fielding unorthodox devices. And if Motorola and IBM in the PowerPC camp
aren&#x27;t careful, they could see their performance leadership in the
high-end embedded-processor market snatched away by some of these upstarts.In Austin, Texas, meanwhile, designers at another MIPS house, Intrinsity
Inc., aren&#x27;t prepared to ditch the clock. But they are putting a new
spin on some old tricks such as giving each gate its own clock and then
letting them overlap. Using such sleight of hand, the company hopes to
soon deliver RISC-based processors that run at an eye-popping 2 GHz and
consume just 10 to 15 watts.Fulcrum, Intrinsity and their brethren may once have been written off as
interesting experiments, backed by venture capitalists who overlooked
some of the finer details, like software compatibility. What lends them
respectability is MIPS.Theirs for the asking One reason young processor companies seem to be flocking to the platform
is that its steward, MIPS Technologies Inc., has no qualms about
licensing the instruction-set architecture (ISA), provided that the
licensee agrees to meet a software-compatibility test suite. By
contrast, processor-core rival ARM Ltd. has granted this privilege to
just two of its many licensees, Intel and Motorola. And so far, the two
PowerPC vendors, IBM Corp. and Motorola Inc., have rebuffed most
requests to license that architecture, with the notable exception being
FPGA vendor Xilinx Inc., which has licensed the 405 PowerPC from IBM.The MIPS ISA is also one of the simplest forms of
reduced-instruction-set computing around, which tends to make it
attractive to processor designers interested in extending the
architecture. It was this and the wide availability of tools and
software that drew Intrinsity to MIPS, even though the company is aiming
at PowerPC sockets, as evidenced by its decision to adopt the RapidIO
interface instead of HyperTransport, which has been favored by MIPS vendors.Good fit &quot;It&#x27;s a nice, clean architecture and has an open model that allows us to
add instructions,&quot; said Paul Nixon, chief executive officer of
Intrinsity.  &quot;You also get all the third-party tools that very easily
fit into our base of platforms.&quot;There was a time when this openness was seen as a liability for MIPS. In
the mid-1990s, before MIPS was spun out from Silicon Graphics Inc., the
instruction set lacked a multiply-add instruction, so some MIPS vendors
took it upon themselves to create their own. The problem was that this
broke many of the development tools, causing headaches for compiler
vendors like Green Hills Software Inc.&quot;We went to MIPS and said we have 20 different compiler variants and
it&#x27;s embarrassing,&quot; said Craig Franklin, vice president of engineering
at Green Hills and a respected microprocessor industry veteran. Franklin
also wasn&#x27;t shy about telling MIPS it needed to revamp its embedded
application binary interface. &quot;We went to MIPS and said we&#x27;ve done a
dozen EABIs, let&#x27;s clean up yours,&quot; he said.MIPS took the advice and wasted little time clamping down on
architectural deviations, observers said. But the MIPS camp still has to
live with a legacy of incompatible chips in the field. &quot;To its credit,
MIPS quickly caught on,&quot; said Jim Turley, a microprocessor industry
analyst. &quot;Going forward, MIPS is maintaining good control but they are
still haunted by incompatibility among multiples.&quot;If the biggest risk to the MIPS camp is fragmentation, then the PowerPC
camp has the opposite problem: architectural confinement. Though the
PowerPC architecture carries the cachet of household names Motorola and
IBM, these are essentially the only two companies that provide
PowerPCs. It&#x27;s not for lack of interest. Rather, the companies have been
reluctant to cede control over the architecture. This could wind up
hurting the PowerPC cause, though.&quot;To get a PowerPC license is impossible or very expensive,&quot; Green Hills&#x27;
Franklin said. &quot;Tactically this may have been a mistake. If you&#x27;re a
Japanese company, all things being equal, you&#x27;d rather buy from another
Japanese company.&quot;Analyst Turley, too, thinks the PowerPC camp will only stand to gain by
licensing the architecture. &quot;It&#x27;s all about software compatibility and
tool support. The more you can proliferate the architecture the better
you&#x27;re going to do,&quot; he said. &quot;I don&#x27;t think Motorola and IBM can
address the entire market by themselves.&quot;There&#x27;s a chance that this could change. IBM, for its part, is in the
process of planning an expansion strategy for PowerPC that may involve
more licensing. Though it&#x27;s unlikely the PowerPC camp will ever have the
open licensing model of MIPS Technologies, MIPS processor vendors may
have more than just two competitors to worry about.&quot;We&#x27;re certainly not averse to [licensing],&quot; said Lisa Su, director of
PowerPC products at IBM. &quot;The question is, how much do we do and who do
we license to. There are various ways you could go, whether it&#x27;s a hard
core, soft core or licensing the ISA.&quot;But the fear of architectural fragmentation still looms large. &quot;We know
that if we have different microarchitectures we have to do work on
software compatibility,&quot; Su said. &quot;With MIPS there&#x27;s a degree of
fracturing. That may not always be a big problem, but if you go to other
markets -- like consumer -- it becomes big. Our belief is there is a
happy medium.&quot;Whatever path IBM takes it will act in its own best interest as a chip
provider, not as a company that wants to hawk intellectual
property. This is why the Xilinx licensing deal works for IBM: Big Blue
is not so much interested in the royalties and fees it collects from
Xilinx, but in the dual benefit of widening the appeal of the
architecture and the revenue IBM generates from manufacturing the FPGAs
for Xilinx in its own fabs. &quot;We&#x27;re not trying to make money off of
licensing,&quot; Su said.Manufacturing is probably one of the most powerful weapons that PowerPC
vendors IBM and Motorola wield. Both have gussied up their high-end
lines with copper interconnect and silicon-on-insulator technology,
still rarities among chip makers. This has helped both companies design
relatively low-power embedded processors running at 1 GHz that are
shipping today. IBM did it using 0.13-micron design rules and a
four-stage pipeline; Motorola is using 0.18-micron design rules and a
seven-stage pipe.The companies say there&#x27;s more performance headroom in store. &quot;When we
get to 0.13 micron we&#x27;ll get substantially faster,&quot; said Raj Handa,
PowerPC and PowerQuicc marketing manager at Motorola.Proprietary processes Most MIPS processor vendors, by contrast, rely on mainstream foundries
that haven&#x27;t developed the more-exotic process technologies. And even
though companies like Motorola are shifting more capacity to outside
foundries, they&#x27;re keeping their special process recipes in-house to
juice up their high-performance devices.Lacking this capability, most MIPS processor vendors will have little
choice but to come up with dazzling architectural feats to keep up their
chops at the high end. It should become clear in the next year or so how
some of the newer players measure up.Intrinsity hopes to field its 2-GHz processors by the end of the
year. Fulcrum is shooting for an early 2003 introduction. &quot;We&#x27;re going
to shock the industry in terms of raw performance and speed-vs.-power
performance,&quot; Fulcrum&#x27;s Nunn said. &quot;We really want to change the way the
world designs semiconductors.&quot;http://www.fulcrummicro.com/press/article_fastco_04-02.shtmlThe Pasadena startup machine
By Alison Overholt
April, 2002  There was a time when every dorm room, it seemed, was a startup waiting
to happen. Throughout the 1990s, kids cobbled together business plans
between classes, won funding, and jumped into business. Risk? What risk?
Plunging into a new venture seemed all too easy.Ah, the fickleness of youth. These days, most of the kids are back in
class. Venture capitalists say that they&#x27;re seeing precious few
proposals out of MIT, Stanford, and almost every other university, save
one: the California Institute of Technology.In fact, Caltech says that it actually spun out the same number of
startups in 2001 -- a poor time, needless to say, for new ventures -- as
it did in the boom year of 1999. While startup enthusiasm has faded on
most campuses, Caltech has blossomed into a robust new-company machine.This didn&#x27;t happen by accident. During the past seven years, Caltech&#x27;s
Office of Technology Transfer has carefully developed a strategy for
cultivating commerce. &quot;We focus on nurturing entrepreneurs
scientifically more than other schools do,&quot; says Rich Wolfe, the
office&#x27;s associate director. That is, the university focuses more on the
science itself than on the ensuing commercial opportunity.That&#x27;s what grabbed Uri Cummings and Andrew Lines, two PhD students at
Caltech who founded Fulcrum Microsystems in 2000. &quot;There is a pervasive
philosophy at Caltech that no problem is unsolvable,&quot; Cummings
says. &quot;There&#x27;s a focus on scientific ingenuity that is thrilling to be
around. Caltech has so many entrepreneurs because the school doesn&#x27;t
make it about business or focus on how much money they&#x27;ll get out of
it. Caltech is a catalyst, moving technology from the university out
into industry, and students are thrilled to be a part of it.&quot;Before starting Fulcrum, Cummings and Lines worked for six years with
Caltech computer-science professor Alain Martin on an
asynchronous-circuit design for semiconductor chips. They ventured into
commercialization while still in the throes of their doctoral program.That they could afford to do that points to another, more practical
aspect to Caltech&#x27;s approach. Other universities typically require
entrepreneurs to pay up-front application and licensing fees for the use
of technology patents. But Caltech believes that such payments stifle
entrepreneurship, since young companies usually have little cash to
spare. Instead, the school typically takes equity stakes in startups,
and it defers collection of patent payments until fledgling companies
are financially secure.For Caltech, it&#x27;s a long-term bet. &quot;The reality is that universities
rely far more on their endowments than they could on any fees to be
collected from the initial licensing process,&quot; Wolfe says. &quot;So we seek a
bite of the apple -- and we hope that if one of these entrepreneurs
founds the next Intel, he&#x27;ll not only share the equity but also bestow a
gift on the university in remembrance that we took care of him when he
was just getting started.&quot;Cummings and Lines may be in a position to do just that. Fulcrum has won
about $20 million in venture funding amid the toughest venture market in
recent history. Its founders have hired a credible CEO, Bob Nunn, who
formerly ran Vitesse&#x27;s telecom division, and hired 24 top students from
their alma mater. And they&#x27;ve garnered rave reviews of their chip design
from technology journals.One thing that Cummings and Lines haven&#x27;t done yet: finished their
degrees. Officially, both are now &quot;on leave.&quot; They may not be back.----
aDaM@XeNT.CoM
High-tech startups fail for only three reasons: stupidity, luck, and greed. Tip one for would-be entrepreneurs: Avoid stupid and unlucky people. If
you are stupid or have bad luck, don&#x27;t start a high-tech business.Tip two for would-be entrepreneurs: Do a product that you want to do,
not one that they want you to do.Startup founders generally have only ideas, charisma, and equity to work
with. Ideas and charisma are cheap, but equity is expensive.  To make a
start-up work, the founder has to divvy out parts of the business at
just the right rate to keep everyone happy until the product is a
success. Give away too much of your company too soon to a venture
capitalist, to your co-workers, or even to yourself, and you risk
running out of distributable shares before the product is done. And that
probably means the product won&#x27;t be done. Ever.Tip three for would-be entrepreneurs: Don&#x27;t take venture funding too soon. If you are doing a software product, don&#x27;t take venture money until you
need it to introduce the product.  Don&#x27;t take venture money until you
have used up all of your own money, your mother-in-law&#x27;s money, and
everything you can borrow.Bootstrap. Rent, don&#x27;t buy. Don&#x27;t hire people to do things you can
contract out because contractors don&#x27;t require stock options.As the founder, the man or woman with the grand plan, your function is
to manage the distribution of your own holdings so that you end up with
fewer shares but more wealth.Tip four for would-be entrepreneurs: Invite me to lunch. I&#x27;m a cheap date.  -- Robert X. Cringely, http://www.pbs.org/cringely/pulpit/pulpit20010614.html
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001949

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-4,8260640,1717/
Date: 2002-09-26T02:16:22+01:00(Arizona Republic)

</pre>

## Record 001950

**Label:** `benign`

<pre>
e &amp; p assets louise , donahue requested that i manage the sale of our e &amp; p assets to john thompson . i need to speak to you about these assets and this process . please let me know when you might be available to talk . thanks , don
</pre>

## Record 001951

**Label:** `benign`

<pre>
ee agrmts - urgent attached is a spreadsheet which indicates the employees who have current agrmts and are being considered for a new agrmt . the spreadsheet indicates the contractual committments . i &#x27; ll leave the password on your voice mail .
</pre>

## Record 001952

**Label:** `benign`

<pre>
re : june 00 production - o &#x27; connor &amp; hewitt ltd . - - - - - - - - - - - - - - - - - - - - - - forwarded by david baumbach / hou / ect on 08 / 16 / 2000 02 : 45 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - delma salazar @ enron 08 / 16 / 2000 02 : 30 pm to : david baumbach / hou / ect @ ect cc : subject : re : june 00 production - o &#x27; connor &amp; hewitt ltd . dave : thanks for your help , but i found it - - in unify , it &#x27; s t - c oil . enron capital management from : david baumbach @ ect 08 / 16 / 2000 01 : 36 pm to : delma salazar / na / enron @ enron cc : subject : re : june 00 production - o &#x27; connor &amp; hewitt ltd . according to daren farmer , this is the name . unify should have something for them . if i find out anything different i &#x27; ll let you know . dave delma salazar @ enron 08 / 16 / 2000 12 : 53 pm to : david baumbach / hou / ect @ ect cc : subject : june 00 production - o &#x27; connor &amp; hewitt ltd . dave : this was flashed as o &#x27; connor &amp; hewitt ltd ( 233 , 343 mmbtu , $ 1 , 010 , 836 . 57 ) , but i don &#x27; t see anything coming through in unify - - do you know if maybe they have another name ? thanks !
</pre>

## Record 001953

**Label:** `benign`

<pre>
start date : 1 / 26 / 02 ; hourahead hour : 21 ; start date : 1 / 26 / 02 ; hourahead hour : 21 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002012621 . txt
</pre>

## Record 001954

**Label:** `benign`

<pre>
fw : csfb independent power weekly ; ipps rose 5 % last week ; 7 % private market value discount remains - - - - - original message - - - - - from : stein , neil [ mailto : neil . stein @ csfb . com ] sent : monday , november 19 , 2001 6 : 14 am to : undisclosed - recipients subject : csfb independent power weekly ; ipps rose 5 % last week ; 7 % private market value discount remains &gt; good morning , attached , please find the latest issue of our independent power weekly . summary : 1 . ipps rise 5 . 0 % last week our ipp composite rose 5 . 0 % , outperforming the s &amp; p 500 ( + 1 . 6 % ) and the nasdaq ( + 3 . 8 % ) . aes corp ( aes ) , which was up 22 . 2 % , was the strongest generator in the group followed by reliant resources ( rri ) which rose 11 . 0 % . orion power ( orn ) was the weakest performer , rising 1 . 2 % . 2 . generation oriented utilities fall 2 . 8 % our universe of generation - oriented utilities fell 2 . 8 % , in - line with the uty ( - 2 . 5 % ) . black hills ( bkh ) , cleco ( cnl ) and constellation energy ( ceg ) all rose less than 1 % . allegheny energy was the weakest performer , down 7 . 6 % . 3 . ene / dyn + attractive valuations boost stock prices last week was the 3 rd consecutive week of positive stock price performance for the group . driving stock prices higher , investors continued to grow more comfortable with the enron situation following confirmation of dynegy &#x27; s intention to acquire enron and provide immediate liquidity support by investing $ 1 . 5 billion . further , we believe the group simply remains oversold . the pure play power producers are trading at a 7 % average discount to their private market asset values . 4 . notes from mirant meeting mirant hosted an upbeat analyst meeting last tuesday . mir reiterated that 80 % of its 2002 forecast is supported by earnings from hedged ( generation and natural gas ) and franchise businesses ( distribution ) . mir also provided an in - depth review of how it accounts for its risk management activities . management noted that it could maintain its credit rating without any new equity issuance over the next 12 months . however , it would be eager to access the equity market should conditions improve in the near - term . 5 . power market update last week the us power markets were generally weak across the country owing to mild weather and falling natural gas prices . while the mirant national power index fell 17 . 1 % last week , the natural gas week composite spot price fell 23 . 2 % . spark spreads improved in the northeast and texas , while compressing in california and the southeast . 6 . debt market update credit spreads tightened across the sector last week due to diminished ene concerns and positive stock price performance . regards , neil stein 212 / 325 - 4217 this message is for the named person &#x27; s use only . it may contain sensitive and private proprietary or legally privileged information . no confidentiality or privilege is waived or lost by any mistransmission . if you are not the intended recipient , please immediately delete it and all copies of it from your system , destroy any hard copies of it and notify the sender . you must not , directly or indirectly , use , disclose , distribute , print , or copy any part of this message if you are not the intended recipient . credit suisse group and each legal entity in the credit suisse first boston or credit suisse asset management business units of credit suisse first boston reserve the right to monitor all e - mail communications through its networks . any views expressed in this message are those of the individual sender , except where the message states otherwise and the sender is authorized to state them to be the views of any such entity . unless otherwise stated , any pricing information give ! n ! in this message is indicative on ly , is subject to change and does not constitute an offer to deal at any price quoted . any reference to the terms of executed transactions should be treated as preliminary only and subject to our formal written confirmation .
</pre>

## Record 001955

**Label:** `benign`

<pre>

Malte S. Stretz said:
&gt; 1046 is fixed. But what about
&gt; 1011 (add a notice about IRIX and -m to the docs),
&gt; 1031 (cygwin&#x27;s EXE_EXT),
&gt; 1043 (a cosmetic but rather disturbing one ;-),all now fixed!&gt; 1004 (TO_MALFORMED borken),WONTFIX ;)&gt; 1006 (packaging related)?eh, will leave this for 2.50. ;)OK, if there&#x27;s nothing moderately serious shown up tonight, I&#x27;ll release
it tomorrow AM (GMT).--j.
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk

</pre>

## Record 001956

**Label:** `benign`

<pre>
japanese / korean linguistics the sixth annual japanese / korean linguistics conference august 8-10 , 1995 university of hawaii at manoa center for korean studies auditorium cosponsored by the university of hawaii s department of east asian languages and literatures , department of linguistics , and center for korean studies supported by the korea foundation - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - preliminary conference program [ note : moderators / discussants to be announced later . ] send inquiries to professor john haing ( haig @ uhunix . uhcc . hawaii . edu ) tuesday , august 8 8 : 00 a . m . - 8 : 45 a . m . : registration 8 : 45 a . m . - 9 : 00 a . m . : welcoming remarks and announcements session 1 : phonology a 9 : 00-10 : 30 : aspiration in korean phonology mira oh , yeojoo technical college korean place &amp; manner assimilations in optimality theory hyeonkwan cho , university of minnesota constraints in post - obstruent tensification in korean seok - chae rhee , university of illinois at urbana - champaign 10 : 30-10 : 45 a . m . break session 2 : discourse a 10 : 45-12 : 45 : discourse - pragmatic functions of sentence - initial and sentence - final uses of the quotative particle in japanese makoto hayashi , university of colorado at boulder an expanded concept of speakerhood in japanese discourse dina r . yoshimi , university of hawaii at manoa japanese kedo : discourse function and genre toshihide nakayama and kumiko ichihashi - nakayama , university of california at santa barbara how seeing approaches knowing in korean , japanese , and english : an analysis of pota , miru , and see yong yae park and susan strauss university of california at los angeles 12 : 45 - 2 : 00 lunch 2 : 00 - 3 : 00 : guest speaker un - altaic features of the korean verb samuel e . martin , yale university 3 : 00 - 3 : 15 : break session 3 : historical linguistics a 3 : 15 - 5 : 45 : on the origins of japanese sentence particles ka and zo charles j . quinn , jr . , ohio state university the functions of kakari particle namu in heian narratives : an example from the tale of genji j . paul warnick , ohio state university on the origin of accent register in proto - japanese alexander vovin , miami university word - initial low register in proto - japanese moriyo shimabukuro , university of hawaii at manoa another source of m-b variation in japanese blaine erickson , university of hawaii at manoa wednesday , august 9 session 4 : semantics 8 : 30-11 : 00 : analysis of polysemous verbs keedong lee , yonsei university verb lexicalization patterns in korean young - joo kim , hong - ik university on the primacy of progressive over resultative state : the case of japanese - teiru yasuhiro shirai , university of california at los angeles groups as event - oriented entities eun - joo kwak , brown university topic , focus , and strong readings in korean : information partition by phrase structure and morphology hye - won choi , stanford university 11 : 00-11 : 15 : break 11 : 15-12 : 15 : guest speaker the logic of desirability and conditional reasoning noriko akatsuka , university of california at los angeles 12 : 15 - 1 : 30 : lunch session 5 : discourse b 1 : 30 - 3 : 30 : discourse determiners of referential choice in korean acquisition patricia m . clancy , university of california at santa barbara an inquiry into the discourse managing function of a japanese particle wa : an analysis of two distinctive interpretations of the te-wa construction in japanese setsuko arita , kyushu university a cognitive account of the korean morpheme - se : a marker of semantic givenness susan strauss , university of california at los angeles the discourse functions of - myen clause in korean chang - bong lee , university of pennsylvania 3 : 30 - 3 : 45 : break session 6 : syntax a 3 : 45 - 5 : 45 : case - theoretic account of complementizer deletion hirotaka mitomo , yokohama national university tense in the subject raising construction kaoru ohta , university of washington identifying the antecedent of pro in korean and japanese young - suk lee and lizanne kaiser , yale university two types of synthetic compounds and move - affix in korean chung - kon shi , harvard university 6 : 30 - 9 : 00 : dinner reception ( location to be announced ) thursday , august 10 session 7 : historical linguistics b 8 : 30-10 : 00 : kakarimusubi from a comparative perspective john whitman , cornell university evidence for pre - or proto - historic loans into japanese from a related language of the korean peninsula leon a . serafim , university of hawaii at manoa early chinese loanwords in korean and japanese : reexamining an old problem from a modern perspective marc h . miyake , university of hawaii at manoa 10 : 10-10 : 15 : break session 8 : syntax b 10 : 15-12 : 15 : numeral classifiers as adverbs of quantification yukiko sasaki alam , texas a &amp; m university opacity and subjunctive complements in japanese asako uchibori , university of connecticut npis outside of negation scope daeho chung and hong - keun park university of southern california asymmetry in the quantificational force of - ( n ) un in korean chung - hye han , university of pennsylvania 12 : 15 - 1 : 30 : lunch session 9 : syntax c 1 : 30 - 3 : 00 : argument prominence of sino - korean verbal nouns yunsun jung , harvard university argument structure change in benefactive construction in korean seok - hoon you , university of hawaii at manoa light verb constructions and temporal constructions in japanese hiroto hoshi , soas , university of london 3 : 00 - 3 : 15 : break session 10 : phonology b 3 : 15 - 5 : 15 : perception of japanese pitch accent by koreans and its implications for understanding phonological structures y . sukegawa , s . sato , k . maekawa , and h . choi tohoku university and national language research institute umlaut in kyungsang korean : the optimal domains theoretic account seung - hoon shin , indiana university generalized alignment and prosodic categorization in korean hyunsook kang and borim lee hanyang university and wonkwang university nn : rendaku and licensing paradox keiichiro suzuki , university of arizona 5 : 15 : closing remarks
</pre>

## Record 001957

**Label:** `benign`

<pre>
&gt; ... &gt; At the other extreme, training on half my ham&amp;spam, and scoring aginst &gt; the other half &gt; ... &gt; false positive rate: 0.0100% &gt; false negative rate: 0.3636% &gt; ... &gt; Alas, all 4 of the 0.99 clues there are HTML-related.That begged to try it again but with Tokenize/retain_pure_html_tags false. The random halves getting trained on and scored against are different here, and I repaired the bug that dropped 1 ham and 1 spam on the floor, so this isn&#x27;t exactly a 1-change difference between runs.Ham distribution for all runs: * = 167 items 0.00 9999 ************************************************************ 10.00 0 20.00 0 30.00 0 40.00 0 50.00 0 60.00 0 70.00 0 80.00 0 90.00 1 *Spam distribution for all runs: * = 115 items 0.00 21 * 10.00 0 20.00 0 30.00 1 * 40.00 0 50.00 0 60.00 1 * 70.00 0 80.00 1 * 90.00 6852 ************************************************************ false positive rate: 0.0100% false negative rate: 0.3490%Yay! That may mean that HTML tags aren&#x27;t really needed in my test data provided it&#x27;s trained on enough stuff. Curiously, the sole false positive here is the same as the sole false positive on the half&amp;half run reported in the preceding msg (I assume the Nigerian scam &quot;false positive&quot; just happened to end up in the training data both times):************************************************************************ Data/Ham/Set4/107687.txt prob = 0.999632042904 prob(&#x27;python.&#x27;) = 0.01 prob(&#x27;alteration&#x27;) = 0.01 prob(&#x27;edinburgh&#x27;) = 0.01 prob(&#x27;subject:Python&#x27;) = 0.01 prob(&#x27;header:Errors-To:1&#x27;) = 0.0216278 prob(&#x27;thanks,&#x27;) = 0.0319955 prob(&#x27;help?&#x27;) = 0.041806 prob(&#x27;road,&#x27;) = 0.0462364 prob(&#x27;there,&#x27;) = 0.0722794 prob(&#x27;us.&#x27;) = 0.906609 prob(&#x27;our&#x27;) = 0.919118 prob(&#x27;company,&#x27;) = 0.921852 prob(&#x27;visit&#x27;) = 0.930785 prob(&#x27;sent.&#x27;) = 0.939882 prob(&#x27;e-mail&#x27;) = 0.949765 prob(&#x27;courses&#x27;) = 0.954726 prob(&#x27;received&#x27;) = 0.955209 prob(&#x27;analyst&#x27;) = 0.960756 prob(&#x27;investment&#x27;) = 0.975139 prob(&#x27;regulated&#x27;) = 0.99 prob(&#x27;e-mails&#x27;) = 0.99 prob(&#x27;mills&#x27;) = 0.99Received: from [195.171.5.71] (helo=node401.dmz.standardlife.com) by mail.python.org with esmtp (Exim 3.21 #1) id 15rDsu-00085k-00 for python-list@python.org; Wed, 10 Oct 2001 03:34:32 -0400 Received: from slukdcn4.internal.standardlife.com (slukdcn4.standardlife.com [10.3.2.72]) by node401.dmz.standardlife.com (Pro-8.9.3/Pro-8.9.3) with SMTP id IAA53660for ; Wed, 10 Oct 2001 08:34:00 +0100 Received: from sl079320 ([172.31.88.231]) by slukdcn4.internal.standardlife.com (Lotus SMTP MTA v4.6.6 (890.1 7-16-1999)) with SMTP id 80256AE1.00294B60; Wed, 10 Oct 2001 08:31:02 +0100 Message-ID: &lt;007e01c1515d$bb255940$e7581fac@sl079320.internal.standardlife.com&gt; From: &quot;Vickie Mills&quot; To: Subject: Training Courses in Python in UK Date: Wed, 10 Oct 2001 08:32:30 +0100 MIME-Version: 1.0 Content-Type: text/plain; charset=&quot;iso-8859-1&quot; Content-Transfer-Encoding: 7bit X-Priority: 3 X-MSMail-Priority: Normal X-Mailer: Microsoft Outlook Express 4.72.3155.0 X-MimeOLE: Produced By Microsoft MimeOLE V4.72.3155.0 Sender: python-list-admin@python.org Errors-To: python-list-admin@python.org X-BeenThere: python-list@python.org X-Mailman-Version: 2.0.6 (101270) Precedence: bulk List-Help: List-Post: List-Subscribe: , List-Id: General discussion list for the Python programming language List-Unsubscribe: , List-Archive: Hi there,I am looking for you recommendations on training courses available in the UK on Python. Can you help?Thanks,Vickie Mills IS Training AnalystTel: 0131 245 1127 Fax: 0131 245 1550 E-mail: vickie_mills@standardlife.comFor more information on Standard Life, visit our website http://www.standardlife.com/ The Standard Life Assurance Company, Standard Life House, 30 Lothian Road, Edinburgh EH1 2DH, is registered in Scotland (No SZ4) and regulated by the Personal Investment Authority. Tel: 0131 225 2552 - calls may be recorded or monitored. This confidential e-mail is for the addressee only. If received in error, do not retain/copy/disclose it without our consent and please return it to us. We virus scan all e-mails but are not responsible for any damage caused by a virus or alteration by a third party after it is sent. ************************************************************************The top 30 discriminators are more interesting now: &#x27;income&#x27; 629 0.99 &#x27;http0:python&#x27; 643 0.01 &#x27;header:MiME-Version:1&#x27; 672 0.99 &#x27;http1:remove&#x27; 693 0.99 &#x27;content-type:text/html&#x27; 711 0.982345 &#x27;string&#x27; 714 0.01 &#x27;http&gt;1:jpg&#x27; 776 0.99 &#x27;object&#x27; 813 0.01 &#x27;python,&#x27; 852 0.01 &#x27;python.&#x27; 882 0.01 &#x27;language&#x27; 883 0.01 &#x27;&gt;&gt;&gt;&#x27; 907 0.01 &#x27;header:Return-Path:2&#x27; 907 0.99 &#x27;unsubscribe&#x27; 975 0.99 &#x27;header:Received:7&#x27; 1113 0.99 &#x27;def&#x27; 1142 0.01 &#x27;http&gt;1:gif&#x27; 1168 0.99 &#x27;module&#x27; 1169 0.01 &#x27;import&#x27; 1332 0.01 &#x27;header:Received:8&#x27; 1342 0.99 &#x27;header:Errors-To:1&#x27; 1377 0.0216278 &#x27;header:In-Reply-To:1&#x27; 1402 0.01 &#x27;wrote&#x27; 1753 0.01 &#x27;Â &#x27; 2067 0.99 &#x27;subject:Python&#x27; 2140 0.01 &#x27;header:User-Agent:1&#x27; 2322 0.01 &#x27;header:X-Complaints-To:1&#x27; 4351 0.01 &#x27;wrote:&#x27; 4370 0.01 &#x27;python&#x27; 4972 0.01 &#x27;header:Organization:1&#x27; 6921 0.01There are still two HTML clues remaining there (&quot;Â &quot; and &quot;content-type:text/html&quot;). Anthony&#x27;s trick accounts for almost a third of these. &quot;Python&quot; appears in 5 of them (&#x27;http0:python&#x27; means that &#x27;python&#x27; was found in the 1st field of an embedded http:// URL). Sticking a .gif or a .jpg in a URL both score as 0.99 spam clues. Note the damning pattern of capitalization in &#x27;header:MiME-Version:1&#x27;! This counting is case-sensitive, and nobody ever would have guessed that MiME is more damning than SUBJECT or DATE. Why would spam be likely to end up with two instances of Return-Path in the headers?
</pre>

## Record 001958

**Label:** `benign`

<pre>
phonetics texts dear linguists , last month i posted a query on phonetics texts suitable for a 10 - week undergraduate course . i received many helpful responses from : chuck coker , yoshi asano , marc picard , charles read , darlene lacharite , nigel love , geoffrey nathan , steve seegmiller , don churma , frances ingemann , peter ladefoged , hal edwards , and one linguist who preferred not to be listed . thanks to all of you ! the book most often recommended is peter ladefoged &#x27;s , but others are also recommended in cases where the course is focused on the description of english only . geoff nathan pointed out that there are hypertext programs with examples stored as sound files that go with ladefoged &#x27;s text ; the edwards text has accompanying workbook , instructor &#x27;s manual and lab tapes . marc picard very kindly sent me the bibliography he gives to students in his class . i hope he does not mind that i have added to it the items referred to in the other replies i received to create the enclosed summary bibliography . call numbers are from marc &#x27;s list , and are those from libraries in montreal , for those of you lucky enough to live there . again , my thanks to all who replied ! susan meredith burt here is the combined list of references : abercrombie , david ( 1967 ) elements of general phonetics . edinburgh university press . ( vanier 3 , pe 1135 a2 1967b ) bolinger , dwight ( 1986 ) intonation and its parts : melody in spoken english . stanford university press . ( webster 4 , pe 1139 . 5 b65 1986 ) bronstein , arthur ( 1960 ) the pronunciation of american english : an introduction to phonetics . new york : appleton - century - crofts . ( vanier 3 , pe 1137 b77 1960 ) catford , j . c . ( date ? ) a practical introduction to phonetics . oxford u . p . clark , john , and colin yallop ( 1990 ) an introduction to phonetics and phonology . oxford : basil blackwell . ( webster 4 , p 217 c62 , 1990 ) cruttenden , alan ( 1994 ) gimson &#x27;s pronunciation of english . london : edward arnold . crystal , david . 1991 . a dictionary of linguistics and phonetics , 3rd ed . cambridge , ma : blackwell . denes , peter , and elliott pinson ( 1963 ) the speech chain . bell telephone laboratories . ( webster 4 &amp; vanier 3 , qp 306 d45 1963 ) edwards , harold t . 1992 . applied phonetics : the sounds of american english san diego , ca : singular publishing group . fromkin , victoria , and robert rodman . 1993 . an introduction to language , 5th ed . orlando , fl : harcourt brace jovanovich . jones , daniel , a . c . gimson , and susan ramsaran ( 1988 ) english pronouncing dictionary . london : j . m . dent &amp; sons . ( webster reference , pe 1137 j55 1988 ) kent , ray &amp; charles read ( 1992 ) . the acoustic analysis of speech . singular publishing . ladefoged , peter ( 1993 ) a course in phonetics . fort worth : harcourt brace jovanovich . ( webster 4 &amp; vanier 3 , p 221 l2 1982 , 1975 ) laver , john ( 1994 ) principles of phonetics . cambridge : university press . ( mcgill p221 l293 1993 ) longman dictionary of american english . 1983 . white plains , ny : longman . mackay , ian . ( date ? ) the science of speech production . austin , texas : pro - ed . o&#x27;connor , j . d . ( 1980 ) phonetics . penguin books . picard , marc ( 1994 ) the comparative phonetics of english and french . montreal : concordia university . ( bookstore ) pullum , geoffrey k . , and william a . ladusaw ( 1986 ) phonetic symbol guide . university of chicago press . ( webster 4 , p 221 p85 1986 ) rogers , henry ( 1991 ) theoretical and practical phonetics . mississauga : copp clark pitman . ( mcgill p221 r64 1991 ) wells , j . c . ( 1990 ) longman pronunciation dictionary . harlow : longman . ( webster reference , pe 1137 w45 1990 ) i should point out that no one knew of a book particularly designed for 10 weeks - - how to make a course fit that time period seems to be a pedagogical problem left up to the instructor .
</pre>

## Record 001959

**Label:** `benign`

<pre>

how&#x27;s about the String Joke?A piece of string and his friend walks into a bar.  The barman says
&quot;sorry, we don&#x27;t serve string here&quot;.  String &amp; friend walk out
(grumbling).  String asks friend &quot;listen, could you tatter my ends and
tie me up?&quot;  Friend obliges, and they return; barman says &quot;aren&#x27;t you
that piece of string I threw out?&quot;  &quot;No, I&#x27;m a frayed knot.&quot;--j.
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001960

**Label:** `benign`

<pre>
book : nlp : using prolog an introduction to natural language processing through prolog clive matthews lecturer in linguistics at the university of east anglia . paper 0-582 - 06622 - 0 320 pages july 1998 learning about language series longman - - - - - - - - - - - - - - - - - - - - - - - - research into natural language processing - the use of computers to process language - has developed over the last couple of decades into one of the most vigorous and interesting areas of current work on language and communication . this book introduces the subject through the discussion and development of various computer programs which illustrate some of the basic concepts and techniques in the field . the programming language used is prolog , which is especially well-suited for natural language processing and those with little or no background in computing . following the general introduction , the first section of the book presents prolog , and the following chapters illustrate how various natural language processing programs may be written using this programming language . since it is assumed that the reader has no previous experience in programming , great care is taken to provide a simple yet comprehensive introduction to prolog . due to the &#x27; user friendly &#x27; nature of prolog , simple yet effective programs may be written from an early stage . the reader is gradually introduced to various techniques for syntactic processing , ranging from finite state network recognisors to chart parsers . an integral element of the book is the comprehensive set of exercises included in each chapter as a means of cementing the reader &#x27;s understanding of each topic . suggested answers are also provided . an introduction to natural language processing through prolog is an excellent introduction to the subject for students of linguistics and computer science , and will be especially useful for those with no background in the subject . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - further information on the books published in this series , and the table of contents for this title can be viewed at the longman linguistics on-line catalogue at : http : / / www . awl-he . com / linguistics for a complete listing of our world-wide offices , please click below : http : / / www . awl-he . com / offices
</pre>

## Record 001961

**Label:** `benign`

<pre>
use Perl Daily NewsletterIn this issue:
    * Apress Publishes &#x27;Writing Perl Modules for CPAN&#x27;
    * Lessig&#x27;s &#x27;Freeing Culture&#x27; Keynote Online+--------------------------------------------------------------------+
| Apress Publishes &#x27;Writing Perl Modules for CPAN&#x27;                   |
|   posted by pudge on Tuesday August 13, @09:50 (books)             |
|   http://use.perl.org/article.pl?sid=02/08/13/1354231              |
+--------------------------------------------------------------------+[0]samtregar writes &quot;My new book, [1]Writing Perl Modules for CPAN, is
now available. If you ever wanted to learn to write modules and release
them on CPAN, now is the time. For experienced module makers, the book
offers advanced training in XS, Inline::C and CGI::Application. You can
[2]read the first chapter online for free. The book is shipping now from
[3]Amazon, [4]BN and others.&quot;Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/08/13/1354231Links:
    0. mailto:sam@tregar.com
    1. http://apress.com/book/bookDisplay.html?bID=14
    2. http://apress.com/book/supplementDownload.html?bID=14&amp;sID=617
    3. http://www.amazon.com/exec/obidos/ASIN/159059018X
    4. http://search.barnesandnoble.com/bookSearch/isbnInquiry.asp?isbn=159059018X&amp;pdf=Y
+--------------------------------------------------------------------+
| Lessig&#x27;s &#x27;Freeing Culture&#x27; Keynote Online                          |
|   posted by KM on Tuesday August 13, @11:27 (links)                |
|   http://use.perl.org/article.pl?sid=02/08/13/1527257              |
+--------------------------------------------------------------------+[0]Ask writes &quot;Leonard Lin put up [1]Lawrence Lessig&#x27;s Freeing Culture
keynote from OSCON. It&#x27;s excellent. It&#x27;s great. It&#x27;s the slides with
audio in flash. So download that flash player already and click the url.
I also [2]mirrored it at perl.org. You still here? See it already, you
*will* be entertained. Near the end of the keynote Lessig asked how many
had donated to the EFF. Many hands went up. We felt great. &#x27;Yeah, we&#x27;re
helping!&#x27; Then he asked how many had donated more than they spend on
their broadband connection... I don&#x27;t think I was alone in feeling a bit
busted. :-)&quot;Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/08/13/1527257Links:
    0. http://www.askbjoernhansen.com/
    1. http://randomfoo.net/oscon/2002/lessig/
    2. http://www.perl.org/tpc/2002/lessig/Copyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.

</pre>

## Record 001962

**Label:** `benign`

<pre>
re : yes . mike was the senior azurix guy on the deal . he was on the conf calls a lot . he spent a lot of time in ca throughout that deal . chris calger 503 - 464 - 3735 - - - - - original message - - - - - from : kitchen , louise sent : tuesday , july 24 , 2001 3 : 10 pm to : calger , christopher f . subject : cast your mind back . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . did you work with mike wood from azurix on pastoria ? louise kitchen chief operating officer enron americas tel : 713 853 3488 fax : 713 646 2308
</pre>

## Record 001963

**Label:** `benign`

<pre>
maintenance work at meters 584 &amp; 6040 per my conversation today with lorraine ibrom @ pg &amp; e ( el paso ) , she has informed me that some maintenance work is being done on the yeary ( sp ? ) 20 in . line . this will affect meters 6040 pg &amp; e riverside and 584 pg &amp; e agua dulce , beginning at 11 : 59 p . m . on january 8 , 2001 and ending at 9 : 00 a . m . on january 12 , 2001 . she has informed me that for this time period there should be no nominations at these points . thanks .
</pre>

## Record 001964

**Label:** `benign`

<pre>
important re : 6 . 68 sum : american dialect society correction to the annoucements about american dialect socisty list ) or you may join by writing to : ) ) ads - l @ uga . cc . uga . edu ) ) and send the message : sub ads-l do not send this message to this address . that is the address of the list itself ; sending &quot; sub ads-l &quot; to it will simply explode that message out to all the members of the list , without subscribing the sender at all . the subscribe message should be sent &quot; listserv @ uga . cc . uga . edu &quot; . ads - l is an unmoderated group ; subscription requests will not be intercepted , and we can do without dozens of them shooting through to each member . ) ) the ads has also its own server : ) ) listserv @ uga . bitnet ) ) or ) ) listserv @ uga . cc . uga . edu this is of course where any administrative requests should be sent . jesse t sheidlower editor random house reference ( jester @ panix . com ) ( 212 ) 572-4917
</pre>

## Record 001965

**Label:** `benign`

<pre>
house warming bash @ stacy &#x27; s party @ stacy &#x27; s saturday aug 18 th ! ! ! ! ! ! festivities begin around 7 : 00 p . m . 13848 s . w . 159 th ter . in tigard there will be food , and beverages for everyone ( including a keg ) don &#x27; t be shy ! directions off of hwy . 217 take the scholls ferry exit , go west head down scholls ferry about 1 - 1 / 2 miles , go left on borrows ( if you have reached the murray hill shopping center , you have gone too far ) follow borrows rd . about 1 mile , go left on 160 th after the 3 rd stop sign turn left on tuscany go right on 159 th ter . , green house on left if there is anyone i am forgetting please feel free to pass the word . . . stacy runswick ( 503 ) 807 - 7861 cell
</pre>

## Record 001966

**Label:** `benign`

<pre>
&lt;!--
 body      { BACKGROUND-IMAGE: url(http://images.lockergnome.com/images/issue/top-right.gif); color: #990000 }
 a:link    { COLOR: #000000; TEXT-DECORATION: underline; font-weight: normal }
 a:visited { COLOR: #C84200; TEXT-DECORATION: underline; font-weight: normal }
 a:active  { COLOR: GRAY; text-decoration: none }
 a:hover   { color: GRAY; TEXT-DECORATION: none }
 p.title   { BACKGROUND: #FFCC99; BORDER-BOTTOM: #FF9966 4px solid; BORDER-LEFT: #FFEEDD 4px solid; BORDER-RIGHT: #FF9966 4px solid; BORDER-TOP: #FFEEDD 4px solid; COLOR: #990000; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 14pt; FONT-WEIGHT: normal }
 p.sidebar { BACKGROUND: #FFEEDD; TEXT-ALIGN: center; BORDER-BOTTOM: #FFCC99 3px solid; BORDER-LEFT: #FFFFFF 3px solid; BORDER-RIGHT: #FFCC99 3px solid; BORDER-TOP: #FFFFFF 3px solid; COLOR: #990000; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 10pt; FONT-WEIGHT: bold } 
 .url      { font-size: 8pt; font-family: Verdana, Tahoma, Arial }
--&gt;
20020711 Lockergnome Windows Daily
Â  07.11.2002 GnomeREPORT GET HIGH-SPEED ACCESS: Verizon Online DSL is an affordable, high-speed Internet connection. Click here to see if Verizon Online DSL is available in your area. 
I&#x27;m not a banker, and I&#x27;m not a credit expert - but these people
speak from personal and professional experience. Draw your own
conclusions. Lockergnomie Sang Vo writes: &quot;Though you may have
zero liability for a fraudulent transaction, the paperwork and red
tape to work through if someone empties out all your funds can
leave you hurting for a while. There are many credit cards that
now offer zero liability for fraudulent transactions. So, contact
your credit card provider / bank to see if you can have such a
plan added to your card or if you can apply for one that does.&quot;
And Russ Coover continues: &quot;If you purchase something with a
credit card, and you later decide to dispute the purchase (for a
reason such as the product was faulty and the merchant refuses to
replace it or, perhaps the product was never delivered), you can
legally dispute the charge with your credit card company. However,
if you use a debit card to make that purchase, you have no right
to dispute the charge.&quot;Jeff Morgan has a different interpretation of the regulation in
question (E): &quot;In 12 CFR II, Section 205.6, it&#x27;s saying that if
you give your financial institution timely notice of the theft of
your card or PIN code (two business days), you are liable for no
more than $50, otherwise you may be liable for up to $500.&quot; And
Tim Miller extends the translation: &quot;If someone puts a false
charge on a credit card, the worse that will happen is your
liability for $50, with the possibility that your next charge
might not go through because the thief used all of your available
balance.  If a false charge goes against your debit card and wipes
out your bank balance, however, outstanding checks can bounce.
 Your bank may be able to get you all of your money back, but the
payees of those bounced checks might sock you with $20-25
insufficient fund fees - and they are under no obligation to waive
those fees.  If you have  5 checks outstanding, you could be out
over $100.&quot;Frank Reyes was apparently lucky: &quot;Someone recently obtained my
debit card number through a local grocery store. I was told by the
checker at the grocery store that the card readers would only
accept Visa cards not ATM cards. I was very suspicious, and used
my debit card instead. Apparently, the store&#x27;s computer had been
hacked, and my debit card number and name (among several
others)were forwarded to an unscrupulous individual. I was
reviewing my checking account online two days later, and noticed
an unauthorized charge against my account ($60.00). I contacted
the vendor that had charged my account and informed them of the
fraudulent charge. The vendor stopped the shipment, provided the
shipping address to my bank, and credited my account within 5 days
after I informed them (The delay in the fund reversal was due to
the 4th of July weekend). The only negative aspect is the fact
that I had to request a new debit card, which has yet to arrive.&quot;Further thoughts from Lockergnomie James Simbro: &quot;I&#x27;m not totally
sure on this, but I&#x27;ve been warned against using a debit card for
online purchases.  Yes, you may not be liable for any of the
false charges on a debit card (in the end), but in the meantime
(during your dispute) the money will be withheld from your account
and you will not have access to it. However with a credit card,
you are not responsible for funds that are in dispute. The
scenario I was given, was imagine if somebody falsely used your
debit card and cleaned out your checking account?  The money is
gone! False charges on a credit card are not &quot;real money&quot; until
somebody has to pay them.  I would guess that each bank has
different policies for debit card fraud. I might just have to call
mine and see what I&#x27;d face.&quot; In short, be careful - no matter what
you use or where you choose to use your plastic.
See You in August,Â Â Â Â Â Â Â Â Â Â Â Â Â Â Chris PirilloÂ Â Â Â Â Â Â 
Â GnomeDOWNLOADS
CYG v20020115 [3.2M] W9x/2k/XP FREEhttp://www.geocities.com/HoloGuides/CyG/{Manage your collections} It seems like everyone collects
something. In fact, just the other day I decided to start
collecting dust. It&#x27;s much easier than collecting stamps. If you
do collect stamps, though, this organizer will help you keep track
of them all. Or you can use it to keep track of your Star Wars
trading card collection, or your coin collection, or your [insert
collection here] collection. It works for everything, get it? It&#x27;s
also great for managing your MP3 lists, including ID3 tag editing.
&quot;CYG is founded on an object-oriented database approach, and
carefully programmed with one goal in mind: universal usage.&quot;
DriverManager v1.0 [557k] 2k/XP FREEhttp://www.l5sg.com/DriverManager.html{Drive your drivers} Everyone else step outside while I have a
talk with the power geeks. If you&#x27;re running on NT, 2000, or XP
and need to know what drivers you have running on your system,
this program can show you. That&#x27;s not too shabby, but of course,
you can also change or even get rid of certain drivers if you
desire. And that&#x27;s, um, even more not too shabby. And that Refresh
button is there to make sure you&#x27;re seeing everything exactly how
you want it. &quot;DriverManager is a tool designed to allow System
Administrators, Power Users and Driver Developers an easy means to
view, modify or remove drivers and their information.&quot;Recommend It!
Â GnomeCLICKS
Â GnomeSYSTEM
Transloaderhttp://www.transloader.com/&quot;This site makes it easy to transfer files to your Web server.
Mostly it is useful for sites like FlamingText.com and
ImageBot.com to send generated images to another server (such as
your Web or FTP server). This is particularly useful for WebTV
users who can&#x27;t save images on their own machine. Although we have
no pre-set limits (okay, it&#x27;s 2.4 GB), the transfers that you do
through Transloader.com must be completed in five minutes. This
server is capable of transferring over 1 Gig per minute; if you
are talking to a slow server, your job may not complete in time.
Other transloaders sometimes suffer from overloading (too many
people using them), which is why I wrote this one. Hopefully, this
will never happen to us, but in any case, check these others out,
they have some nice services...&quot;Recommend It!
Â GnomeWILDCARDFull PDF Books
Poor Richard&#x27;s Web
Internet Promotions
E-Mail Publishing
Web Site Makeover
Websites Made Easy
Online Communities
Home Networking
Internet Recruiting
Online BrandingTo Share or Not to Share
Scribbled by Lee SmithI think that online file sharing is dependent on the file that is
being shared. If the song is a current release or recent, then I
do not believe in it. I can&#x27;t consider it stealing because you
can&#x27;t steal from someone who willingly puts the file up for
downloading. Those who did put the file online most likely feel
that it is also not stealing, since they purchased the CD.
However, I do not agree with RIAA or recording companies who are
attempting to make their CDs &quot;rip proof&quot; either. I do not feel
they have the right to dictate what songs I can listen to or when
or in what order. I like to rip specific songs from CDs then make
my own CD, which either goes down to my entertainment system or to
my truck. The master CD is saved and rarely played (&quot;why&quot; is
explained later in this message). I prefer making my own CDs for
my truck because if my truck were to be broken into and my CDs
stolen, it would be much easier to replace a self-burned CD than a
master. Sometimes, masters cannot be replaced without a large
expense, if at all.If the song is outdated, an oldie (so to speak), and is not
available anywhere, then yes, I do believe in it. Or, if the song
being sought is wanted to rejuvenate one&#x27;s collection, then yes, I
do believe in that, too. Case in point: as a kid, I collected a
lot of 45s and record albums. I have more than 4,000 records in my
collection. Many were played so much that they are not playable
anymore and, even though I did take care of them, due to the cheap
stereos and record players in the 60s, they are &#x27;shot.&#x27; I want to
relive some of my younger days through music, but attempting to
convert those records (to digital) is next to impossible for me.
So, in this instance, no, I do not think it is illegal to seek out
digitalized copies of the old songs that I already have records of
(albums and/or 45s). If, however, the song(s) that I am seeking
are available on CD, then I will be very quick to purchase that CD
from Tower Records, The Warehouse, or any other reputable dealer.For those that are impossible to find &quot;digitals&quot; for, then, one
day, perhaps I will reach a point with technology (and money)
where I can transfer those platters to WAV and they will sound as
good as when they were originally recorded. I have been lucky
enough to find some on CD thanks to the Internet; I was quick to
purchase the disc, usually from the original artists themselves.
Some of the music that I have, sadly, will never be heard again. I
blame RIAA and the recording industry for that, too. Neither seem
to care about the &quot;lost&quot; songs when digitally remastered CDs are
released.Submit Your Thoughts | Recommend It!
CHRIS TEACHES THE BASICS: If you&#x27;ve got friends or family who want to learn more about their PC, from a guy who makes things nice and easy, check out the VHS release of Computer Basics in the GnomeStore. Chris teams with TechTV cohort, Kate Botello, to lead novices on a journey through their computer. From basic interactions, to installing apps, to using the Internet and e-mail, Chris and Kate have all the basics covered. Help out a friend and  get them a copy today.    Â GnomeFAVORITE
Pixel Decorhttp://www.pixeldecor.com/{Patterns for your screen} *yawn* Your desktop is more boring than
I don&#x27;t know what. Unfortunately, I, personally, can&#x27;t help you
out. Don&#x27;t fret, though, cause Jen is here to provide you with
some truly amazing desktop images, icons, and even calendars.
She&#x27;s got a very unique and creative style that you may enjoy. Oh,
and did I mention she was a professional designer? That&#x27;s right;
now you know it&#x27;s all good. The best part? All these images are
FREE. The &quot;Buzzz&quot; tile is especially awesome (and this endorsement
is even coming from the guy who hates creepy-crawlies of all
kinds).
Recommend It!
Â GnomeTIPHelp Yourself
Microsoft Office Tips
PC Productivity Tips
Cool Internet Tips
Windows 2000 Tips
Windows XP Tips
Top 50 Fun Sites
Must-Know Terms
Top 50 Useful Sites
Top 75 Tech SitesWho can save you from making a small oversight with your digital
video camera purchase? Lockergnomie Frank Kenna: &quot;I see that
you&#x27;re thinking of getting a DV camera. I got one about a month
ago, and I made one mistake: I didn&#x27;t get one with A/V INPUTS.
Mine has A/V outputs, which are great for getting your digital
stuff out onto VHS, etc. But without the inputs, there&#x27;s no way to
get VHS or old 8mm footage into the camera. With inputs, not only
can you get your old 8mm &amp; VHS stuff onto DV tapes, but you can
use the camera as a pass-through device and get the old stuff
directly onto your computer for editing purposes. I wish someone
had made clear the advantages and importance of inputs when I
bought my DV camcorder. The reviews and magazines I read barely
mentioned this feature - and nobody stressed its importance. But
if you&#x27;re going to be doing any editing, it is critical (if you
want to work on any of your old stuff). Don&#x27;t make the same
mistake I did - make SURE you get this feature. It doesn&#x27;t seem to
impact the price of the cameras; some offer it and some don&#x27;t.&quot;
This advice came not a moment too soon for me. Thank you for
helping us, Frank!
Recommend It!http://www.lockergnome.com/issues/daily/20020711.html
Your subscribed e-mail address is: [qqqqqqqqqq-lg@spamassassin.taint.org] - To unsubscribe or change your delivery address, please visit the subscription management page. For further information, please refer to the GnomeCREDITS in the sidebar.LOOK OVER HEREÂ Download Our Tip FilesÂ Latest Windows Daily
Â Latest Digital Media
Â Latest Tech Specialist
Â Latest Penguin Shell
Â Latest Apple Core
Â Latest Web Weekly
Â Latest Bits &amp; Bytes
Â Latest Audio ShowÂ Low Price Search
Â $99 Tech ConferenceÂ The GnomeSTORE
Â Tell a Friend About Us!
Â Suggest a Feature
Â Advertise With Us
Â High-Tech Job Search
Â Chat With Gnomies
Â Watch The Webcams
Â Computer Power UserÂ Read Past Issues
Â Download X-Setup
Â About Lockergnome
Â Our Privacy Policy
Â View More Options
Â Our XML / RSS Feed
Â Syndicate Our Tips
Â Link To Lockergnome
Â Get Chris&#x27;s BookÂ General Feedback
Â E-mail the Editor
Â The Editor&#x27;s Blog
Â MP3 SOFTWARE
Havas MP3 Pro
Magix MP3 Maker
Ejay MP3
Audiostation 5.0
Jack The MP3 Ripper
Pearson MP3 Maker
Steinberg My MP3
MusicMatch Jukebox 7.0
Hip Hop E-jay Record
MP3-Wolf
MP3 Maker Gold
The MP3 Wizard
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
Question: which group is 250,000+ strong and always looking for stuff to make their personal and professional lives run smoother? 
Â HAPPY FUN STUFF
And now, we see the story of the ugly shoe unfold before our very eyes. This footwear was outcast from the group weeks ago, and has been very depressed ever since. Pity my shoe.The Lone Shoe
Â 
CLICK HERE TO ZOOMÂ 
BYTE ME NOWÂ©2002, Lockergnome LLC. ISSN: 1095-3965. All Rights Reserved. Please read our Terms of Service. Our Web site is hosted by DigitalDaze. Domain registered at DNS Central.I can&#x27;t seem to find time to procrastinate...
</pre>

## Record 001967

**Label:** `benign`

<pre>

I paid for CuteFTP on my Windows box.  Well worth the money despite there 
being free alternatives, no regrets whatsoever.Now that Mozilla isn&#x27;t taking X down twice a day I&#x27;m unlikely to pay for 
Opera, but if that hadn&#x27;t happened around the same time I made the switch 
to 100% unix I would have been happy to.- Lucas
http://xent.com/mailman/listinfo/fork
</pre>

## Record 001968

**Label:** `benign`

<pre>
re : technical training at the houston energy expo ! vince : looks like an excellent value overall if they cover the same topics in these classes as in the enron internal classes . the website says that registering for one of the classes automatically registers you to the expo . i would like to recommend them to my team . did someone from our group already register for this ? thanks krishna . vince j kaminski 02 / 12 / 2001 01 : 50 pm to : pinnamaneni krishnarao / hou / ect @ ect cc : subject : technical training at the houston energy expo ! krishna , please , take a look . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 02 / 12 / 2001 01 : 50 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - lana moore on 02 / 07 / 2001 10 : 53 : 05 am to : nesa members cc : subject : technical training at the houston energy expo ! technical training in conjunction with the houston energy expo march 20 - 21 , 2001 hyatt regency hotel - downtown we are offering : fundamentals of electricity basics of risk management natural gas - wellhead to burnertip there are only 25 spots in each class , so sign up today ! go to www . nesanet . org , in educational programs each class is listed with details and a registration form . member price is $ 545 per person . non - member price is $ 745 per person . if you have any questions , please give me a call ! ! lana moore ( 713 ) 856 - 6525
</pre>

## Record 001969

**Label:** `benign`

<pre>
From: fork-admin@xent.com [mailto:fork-admin@xent.com] On Behalf Of R. A. &gt; Hettinga &gt; Subject: The Disappearing Alliance &gt; &gt; http://www.techcentralstation.com/1051/printer.jsp?CID=1051-100802B &gt; &gt; &gt; &gt; The Disappearing Alliance &gt; By Dale Franks 10/08/2002&gt; Obviously, in such a &gt; political atmosphere, the opportunities for conflict will inevitably &gt; increase.Given current trends, particularly in demographics, such conflict won&#x27;t be military. Europe wouldn&#x27;t stand a chance now and things are getting worse in a hurry. They are SOL.Not to mention that when push comes to shove they wouldn&#x27;t stand united.&gt; &gt; That thought is frightening enough. Even more frightening, however, is the &gt; thought that such a conflict might be averted by our own acceptance of the &gt; new ideology of transnational progressivism.Now that is a scary thought. ]
</pre>

## Record 001970

**Label:** `benign`

<pre>
bullets sold 35 , 000 mmbtu this week to richardson products at an average price of $ 3 . 10 compared to tw index price through july 18 th of $ 2 . 77 . reliant &#x27; s negotiated rate deal from san juan to east of thoreau totals $ 32 , 000 through july 17 th . it backhauls deals from pg &amp; e topock to the west of thoreau area totals $ 190 , 000 through july 17 th .
</pre>

## Record 001971

**Label:** `benign`

<pre>
re : integration meeting you want thomas myers . i am thomas meyers pge . &gt; &gt; &gt; &quot; kitchen , louise &quot; 12 / 26 / 01 08 : 09 am &gt; &gt; &gt; we will have a networked pc in the room - so choose if you want handouts or a powerpoint . kim will forward details of the room today . thanks louise &gt; - - - - - original message - - - - - &gt; from : kitchen , louise &gt; sent : friday , december 21 , 2001 4 : 03 pm &gt; to : kitchen , louise ; colwell , wes ; hodges , georgeanne ; webb , jay ; &gt; meyers , thomas ; hillier , bob ; mcauliffe , bob ; rub , jenny ; hall jr . , &gt; robert l . ; donovan , bill ; brackett , debbie r . ; oxley , david ; bradford , &gt; william s . &gt; cc : muller , mark s . ; golden , jeff ; lavorato , john ; schoppe , tammie ; &gt; hillis , kimberly &gt; subject : re : integration meeting &gt; &gt; the meeting has been confirmed . &gt; &gt; they told me that they want to essentially gain an understanding of &gt; what our plan is to get up and running as quickly as possible which &gt; does i think differ slightly from integration . &gt; &gt; have i missed any critical group ? &gt; &gt; &gt; 9 am introduction &gt; 9 : 15 am infrastructure &gt; rub &gt; 9 : 45 am it - development hodges , georgeanne ; webb , jay ; meyers , &gt; thomas ; hillier , bob ; mcauliffe , bob ; rub , jenny ; hall jr . , robert l . ; &gt; donovan , bill &gt; cc : muller , mark s . ; golden , jeff ; lavorato , john ; schoppe , &gt; tammie ; hillis , kimberly &gt; subject : integration meeting &gt; &gt; one of our potential buyers will be here at 9 am on thursday . &gt; the scope of the meeting is to run through the integration schedule . &gt; this is a very broad agenda and will probably be very interactive . &gt; i tried to put ops first but it really doesn &#x27; t make sense . &gt; &gt; this really is a really rough agenda for you guys to decide upon &gt; but i wanted to set out the areas they wish to cover . &gt; &gt; 9 am introduction &gt; 9 : 15 am infrastructure &gt; rub &gt; 10 am it - development &amp; ops &gt; webb &gt; 11 am mid office intergation overview &gt; hall &gt; 12 noon accounting , cash etc integration overview &gt; colwell / georges / meyers &gt; &gt; 11 am tour of the building / infrastructure &gt; donovan &gt; &gt; wes - they want to cover bank accounts and cash in detail . &gt; &gt; some time during the morning they want a tour of the facilities &gt; - i am arranging with bill donovan . &gt; &gt; &gt; louise kitchen &gt; chief operating officer &gt; enron americas &gt; tel : 713 853 3488 &gt; fax : 713 646 2308 &gt; this e - mail is the property of enron corp . and / or its relevant affiliate and may contain confidential and privileged material for the sole use of the intended recipient ( s ) . any review , use , distribution or disclosure by others is strictly prohibited . if you are not the intended recipient ( or authorized to receive for the recipient ) , please contact the sender or reply to enron corp . at enron . messaging . administration @ enron . com and delete all copies of the message . this e - mail ( and any attachments hereto ) are not intended to be an offer ( or an acceptance ) and do not create or evidence a binding and enforceable contract between enron corp . ( or any of its affiliates ) and the intended recipient or any other party , and may not be relied on by anyone as the basis of a contract by estoppel or otherwise . thank you .
</pre>

## Record 001972

**Label:** `benign`

<pre>
re : var article les , the revised version of the var article looks fine . vince
</pre>

## Record 001973

**Label:** `benign`

<pre>
entex apr 3 noms - - - - - - - - - - - - - - - - - - - - - - forwarded by tom acton / corp / enron on 04 / 02 / 2001 11 : 45 am - - - - - - - - - - - - - - - - - - - - - - - - - - - ronald _ s _ fancher @ reliantenergy . com on 04 / 02 / 2001 11 : 32 : 33 am to : tom . acton @ enron . com , liz . bellamy @ enron . com cc : subject : apr 3 noms this is a multipart message in mime format . - - = _ mixed 005 acf 2486256 a 22 _ = content - type : multipart / alternative ; boundary = &quot; = _ alternative 005 acf 2486256 a 22 _ = &quot; - - = _ alternative 005 acf 2486256 a 22 _ = content - type : text / plain ; charset = &quot; us - ascii &quot; - - = _ alternative 005 acf 2486256 a 22 _ = content - type : text / html ; charset = &quot; us - ascii &quot; - - = _ alternative 005 acf 2486256 a 22 _ = - - - - = _ mixed 005 acf 2486256 a 22 _ = content - type : application / x - ms - excel ; name = &quot; hpl - apr . xls &quot; content - disposition : attachment ; filename = &quot; hpl - apr . xls &quot; content - transfer - encoding : binary - hpl - apr . xls
</pre>

## Record 001974

**Label:** `benign`

<pre>
We were sitting here talking about Opera, and the fact that it&#x27;s not free 
anymore (unless you want the scrollypollies),  and how that sucked and 
stuff, and someone said something about  nagware, and I misinterpretted it 
as snag ware, which mainly means, oh  yeh, right, I&#x27;m gonna buy this 
-eyeroll- where&#x27;s someone with a key?  LOL  So who is it again who&#x27;s on 
this list who&#x27;s associated with Opera?  Why&#x27;s the free one using the same 
LAME idea netzero, etc useD?   I know what kind of  costs are involved in 
creating software like this, and I understand everyone needs to eat, but 
if someone can get netscape for free, and opera isn&#x27;t free, then, hmmm...  
I imagine this email is going to bring some bricks down on my head, but 
well, go for it, I gots my helmet.  (:
Cindy
P.S. GregB, you there?  (:-- 
&quot;I don&#x27;t take no stocks in mathematics, anyway&quot; --Huckleberry Finnhttp://xent.com/mailman/listinfo/fork
</pre>

## Record 001975

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-4,8276089,215/
Date: 2002-09-26T13:42:55+01:00*Money:* Further evidence of a slowdown in the housing market emerged today as 
figures revealed a 15% drop in the total value of mortgages approved during 
August.

</pre>

## Record 001976

**Label:** `benign`

<pre>
real time - stca activity for 6 / 12 here are those changes . i &#x27; ll leave re - sending the file to your discretion .
</pre>

## Record 001977

**Label:** `benign`

<pre>
re : mg metals : additional areas to look at dear richard , thanks for your message - i just met lloyd fleming who is setting up meetings for me and getting me some of the information requested . houston research has started on this process , but i believe that i will take over from here - i am in houston in 10 days time and will also discuss initial findings with them . regards , anjam hmad london research x 35383 richard sage 30 / 06 / 2000 09 : 50 to : anjam ahmad / lon / ect @ ect cc : subject : mg metals : additional areas to look at phil redman will come to see you to capture appropriate tasks on the overall project plan and identify dependencies . i hope lloyd has kept you up to date so far . i have added you to the address list for daily updates affecting the support functions . - - - - - - - - - - - - - - - - - - - - - - forwarded by richard sage / lon / ect on 30 / 06 / 2000 09 : 50 - - - - - - - - - - - - - - - - - - - - - - - - - - - enron europe from : anjam ahmad 30 / 06 / 2000 09 : 46 to : lloyd fleming / lon / ect @ ect , richard sage / lon / ect @ ect cc : vince j kaminski / hou / ect @ ect , stinson gibner / hou / ect @ ect , bjorn hagelmann / hou / ect @ ect , dale surbey / lon / ect @ ect , tanya tamarchenko / hou / ect @ ect subject : mg metals : additional areas to look at dear lloyd &amp; richard , i have been discussing with eric gadd about two particular areas of concern that will affect the london research group . i believe there are a number of issues to address to ensure that the integration goes smoothly from a risk management and quantitative analysis perspective , and i have put together a ( by no means exhaustive ) list : - i ) seamless transfer of front and middle office systems from an exotic options linking perspective ( e . g . their spreadsheets link to different option pricing add - ins ) ii ) development of volatility curves and factor analysis to ensure that we can capture metals risk in our var system ( we will require historical data for this ) . i am sure bjorn will be looking to the research group to assist in this matter . iii ) ensure that mg staff on quant and risk side become familiar with our methods and systems and vice versa these tasks will involve a significant degree of cross - communication with relevant contacts within mg metals , and so i look forward to starting on the process as soon as possible - i hope to play a full part from a quantitative research and risk management perspective to ensure that everything goes smoothly in this exciting new development , so please do not hesitate to involve me . best regards , anjam ahmad research x 35383
</pre>

## Record 001978

**Label:** `benign`

<pre>
http://www.hughes-family.org/bugzilla/show_bug.cgi?id=1008jm@jmason.org changed:           What    |Removed                     |Added
----------------------------------------------------------------------------
             Status|NEW                         |RESOLVED
         Resolution|                            |INVALID------- Additional Comments From jm@jmason.org  2002-09-21 16:36 -------
Hi David --I&#x27;m afraid this bug-tracking system is only used for the open-source
SpamAssassin (the UNIX one ;).   You need to talk to somebody
at deersoft.com instead.------- You are receiving this mail because: -------
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

## Record 001979

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-2,8418828,215/
Date: 2002-10-01T04:33:56+01:00*Media:* The race is on for the most coveted job in BBC News after Rod Liddle 
says he is stepping down as editor of the Today programme.

</pre>

## Record 001980

**Label:** `benign`

<pre>

&gt; I&#x27;m sure if you call their customer service 
&gt; number they can unsubscribe you.   I took me 4 
&gt; tries, took me 5.&gt; so make sure you get a confirmation number.  Does that help? I had 5 of those. Lovely company...Max
http://xent.com/mailman/listinfo/fork

</pre>

## Record 001981

**Label:** `benign`

<pre>
transport hey are you in the office today ? ( thursday feb 7 ) . you mentioned extending our a - o deal out longer and i wanted to talk to you about it . so call me . thanks , terri
</pre>

## Record 001982

**Label:** `benign`

<pre>
query repetitions i am writing for a graduate student who is not on the list . please send any answers directly to him . his address is at the end of the message . he &#x27;s interested in speakers &#x27; noncorrective repetitions ( including paraphrases ) of their interlocutors &#x27; utterances and utterance fragments , especially in educational contexts . if you know of any work on this subject or if have any hypotheses , please write to marinus stephan at stephan . 15 @ postbox . acs . ohio-state . edu . michael newman asst . professor of educational linguistics dept . of educational theory &amp; practice the ohio state university
</pre>

## Record 001983

**Label:** `benign`

<pre>
Just wondering if anyone has implemented one before, and any suggestions 
etc.Yes i am googling, but would like some experienced opinion if available ;)Gavin
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 001984

**Label:** `benign`

<pre>
3 . 543 please respond : linguistics cd - rom , mispased idioms since there is notably little work on encyclopedias ( as the text type of for example the encyclopedia britannica , the brockhaus and the larousse , not so much as an idea ) , i am looking for those bits and pieces . i am especially interested in structural and user-oriented aspects of the matter ( what are prototypical questions asked by a prototypical encyclopedia user ? are these questions supported by the text structure of encyclopedias and encyclopedia entries ? ) . i am also interested in comparisons with respect to encyclopedia concepts and encyclopedia projects and in approaches to bring the encyclopedia idea up to the state of the art in information technology ( especially hypertext , . . . ) . are there research activities going on in this field ? do you know of any more up-to - date bibliographies or papers ? please tell me ! christoph blaesi fakultaet fuer linguistik und literaturwissenschaft universitaet bielefeld postfach 100 131 d-4800 bielefeld 1 germany
</pre>

## Record 001985

**Label:** `benign`

<pre>
meter 0074 liz or stacey - there is flow at meter 74 on 9 / 14 ( 499 dth ) . the deal for this meter ( 400289 ) did not start until 9 / 15 . could one of you extend the deal for this ? i would be greatly appreciated . aimee
</pre>

## Record 001986

**Label:** `benign`

<pre>
first issue of language and linguistics we are pleased to announce the publication of the first issue of the new journal language and linguistics . the journal will appear twice a year in morocco . issue 1 , 1998 : studies in comparative linguistics table des matires / contents moha ennaji introduction frederick newmeyer preposition stranding : parametric variation and pragmatics fatima sadiqi the syntactic nature and position of object clitics in berber mohamed khalil ennassiri is arabic a v2 language ? andrzej zaborski personal pronoun systems and their origin in some languages of ethiopia fouad brigui les rapports associatifs saussuriens : paradigmes ou syntagmes ? moubarak hanoune la pause en arabe et categories syntaxiques ( in arabic ) &quot; languages and linguistics &quot; is a new world forum for the study of natural languages , with a special focus on the languages in use in africa and the middle east . the journal brings together research from english , french and arabic traditions , publishing significant work on phonology , morphology , syntax , lexis and semantics , sociolinguistics , pragmatics , discourse analysis , applied linguistics , language acquisition , computational linguistics and variation and comparative studies . contributions are in english , arabic and french . for further contact , please write to : professor moha ennaji , editor e-mail : estry @ fesnet . net . ma fax : + 212 46 08 44 university of fes faculte des lettres 1 bp 50 fes morocco for more information about the new journal , please consult : http : / / www . fesnet . net . ma / lang-ling
</pre>

## Record 001987

**Label:** `benign`

<pre>
monthly manangement lunch please clear your calendars for lunch on wednesday , march 8 th from 11 : 30 - 1 : 00 . this will be a lunch for the management team only ( meaning no brenda ) . i will take suggestions until monday and then i will be making reservations . if you have any questions , please call ! thank you ! yvette x 3 . 5953
</pre>

## Record 001988

**Label:** `benign`

<pre>
enron / hpl actuals for august 24 , 2000 teco tap 30 . 000 / enron ; 92 . 500 / hpl gas daily ls hpl lsk ic 20 . 000 / enron
</pre>

## Record 001989

**Label:** `benign`

<pre>
cleburne gas please plan on attending a meeting regarding cleburne gas on thursday march 8 at 2 : 00 - 3 : 00 pm in conference room 3143 a . thanks , tina
</pre>

## Record 001990

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-3,8256507,1717/
Date: 2002-09-25T23:11:07+01:00[IMG: http://www.newsisfree.com/Images/fark/msnbc2.gif ([MSNBC])]

</pre>

## Record 001991

**Label:** `benign`

<pre>
On Thu, 2002-08-15 at 17:53, Jesse wrote:
&gt; 
&gt; On Thu, Aug 15, 2002 at 05:46:55PM -0400, Luis Villa wrote:
&gt; &gt; FWIW, slummerville actually has the internet- not just broadband, but
&gt; &gt; actual broadband competition, which I gather is rare. I had ADSL and two
&gt; &gt; cable options when I moved in.
&gt; 
&gt; 
&gt; Did you actually attempt to order the DSL? Large chunks of somerville have
&gt; advertised DSL service that can&#x27;t actually be obtained. Excuses vary, from
&gt; &quot;no available copper&quot; to &quot;full DSLAM&quot;, but the folks I know who&#x27;ve wanted
&gt; DSL around here have all failed, ending up either with ATTBB, RCN or an
&gt; honest-to-god T1.No. My past experiences with DSL have generally been miserable so I went
with at&amp;t digital cable[1] + cable modem. Still, even the hypothetical
option was a lot better than what I had in the theoretically
tech-friendly Triangle in NC.
Luis[1]sports junkie
http://xent.com/mailman/listinfo/fork
</pre>

## Record 001992

**Label:** `benign`

<pre>

Hi all,
I&#x27;m looking for the disks for SUSE 8. Does anybody
have them for a reasonable price?
I&#x27;m available to collect at the time of your
convenience anywhere in the East/Greater
Dublin area!
TIA.
Paul...
___________________________________________________________
Do You Yahoo!? -- Une adresse @yahoo.fr gratuite et en franÃ§ais !
Yahoo! Mail : http://fr.mail.yahoo.com-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 001993

**Label:** `benign`

<pre>
org chart please take a look at the org chart for gas and let me know if it &#x27; s okay . i had to shrink the text to make it fit . i think it &#x27; s hard to read . tammie schoppe enron americas - office of the chair assistant to louise kitchen 713 . 853 . 4220 office 713 . 646 . 8562 fax 713 . 253 . 2131 mobile
</pre>

## Record 001994

**Label:** `benign`

<pre>
URL: http://jeremy.zawodny.com/blog/archives/000200.html
Date: 2002-09-29T10:59:19-08:00Strangely, I managed to get up before 9am (on a Sunday!) without the aid of an 
alarm clock. Not sure how that happened. I had some breakfast (muffin with 
jelly and peanut butter, and strawberry drink) while catching up on...

</pre>

## Record 001995

**Label:** `benign`

<pre>
change in scada server to nahou - scada 2 the name of the scada server has been changed from ecthou _ scadal to nahou - scada 2 . if you have a personal excel spreadsheet that obtains data from the scada server using netdde , you will have to edit the spreadsheet . change the old name to the new name . if you have any questions or need assistance , please call 34200 . - dave stadnick
</pre>

## Record 001996

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85516085
Date: Not suppliedWe did a great panel on DRM and the Digital Hub yesterday here at OSXCon with 
Tim O&#x27;Reilly, Victor Nemachek (from El Gato, makers of the EyeTV digital TV 
recorder for the Mac), Dan Gillmor, and JD Lasica, who&#x27;s working on a book on 
fair use and copyfights. Glenn &quot;802.11b Networking News&quot; Fleishman took great 
notes through the talk:     Dan: Tim, you&#x27;re a &quot;content or copyright holderï¿½talk about these issues.&quot;     Obscurity can be a tool. Something like 100K books published in the US. 
    Most books are forgotten after publication. Ravening copying theft is 
    wrong: most aren&#x27;t pirated. Publishers puts book that someone sweated over 
    for years on shelves for three months, doesn&#x27;t sell, that&#x27;s it, and the 
    author has no rights. Publishers keeps rights til out of print, etc.     Oblivion is fate of most books: &quot;Piracy would be the best thing for those 
    books.&quot; People wouldn&#x27;t pirate them in general, because people generally 
    like to respect the rights of creators. &quot;Piracy is a marginal act; it takes 
    away some of the cream.&quot;     Publishing won&#x27;t go away, but it will change the idea of who is a 
    publisher. Early on in the Web, the idea was that everyone could be a 
    publisher. The way in which Web sites interact with publishers is often 
    very much like the way that book publishers try to get placement and 
    position in bookstores.     Publishing is aggregation. People will re-emerge as publishers. Will 
    Hollywood be the publishers of the future or will someone else?     Users are voting by their use of programs like Kazaa. Eventually, media 
    companies will adopt. But if the changes are hardcoded into law, then we&#x27;re 
    stuck for a long time with &quot;some mistakes.&quot;  Link[1] Discuss[2] (_via Dan Gillmor&#x27;s eJournal[3]_)[1] http://blog.glennf.com/gmblog/archives/00000254.htm
[2] http://www.quicktopic.com/boing/H/K3FKZ6jSJe2Px
[3] http://www.siliconvalley.com/mld/siliconvalley/business/columnists/dan_gillmor/ejournal/

</pre>

## Record 001997

**Label:** `benign`

<pre>
re : frank , we have already done a number of things to help reduce aep &#x27; s exposure to enron , none of which were required contractually . we made a margin payment of $ 50 , 000 , 000 . we arranged ring - trades with allegheny which reduced your exposure by over $ 90 , 000 , 000 . we have proposed a number of assignments which would reduce your exposure to enron incrementally . conversely , pursuant to our contracts aep has failed to pay a $ 1 , 311 , 625 . 46 swap settlement that was due on 11 / 8 / 01 . additionally , a margin call which was due to enron on 11 / 8 / 01 in the amount of $ 19 , 250 , 000 and remains unpaid . additionally , aep has failed to continue to trade with enron which was not our understanding of the agreement . enron maintains its investment grade credit rating and is receiving $ 1 . 5 billion of additional funded equity capital from dynegy as announced on friday . we are more than happy to continue helping you to reduce exposures in mutually agreeable manners but do not agree to the below list of requests . we need you to address these above issues before we can progress on these exposure reductions . regards , bill - - - - - original message - - - - - from : ksbrownl @ aep . com @ enron on behalf of fhilton @ aep . com sent : tuesday , november 13 , 2001 12 : 19 pm to : wbradfo @ ect . enron . com subject : per our conversation on november 12 , 2001 , aep has reassessed it &#x27; s risk tolerance for enron corporation . in light of the current status , we propose the following things to be done to allow for normal trading and other business activity to commence : a fully executed master set off agreement ( msa ) with an adequate assurance provision and no mac clauses . an agreement that allows for same day margining cash collateral or letter of credit to bring exposure down to zero work towards executing an eei agreement hpl post closing settlement payment must be paid as agreed by both parties settlement of all payments due and past due these are the critical issues we feel must be addressed to get things back to normal . we appreciate all that has been done thusfar in working to mitigate our exposure , however , we now feel that more should be done to protect what we have at risk . i look forward to your reply , should you have any questions , comments or otherwise , please give me a call . best regards , frank hilton managing director , chief credit officer
</pre>

## Record 001998

**Label:** `benign`

<pre>
use Perl Daily Headline MailerSpouses afternoon at YAPC::Europe
    posted by ziggy on Wednesday August 14, @19:44 (news)
    http://use.perl.org/article.pl?sid=02/08/14/2351255
Copyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.

</pre>

## Record 001999

**Label:** `benign`

<pre>
maths course dear vince , ? further to our telephone conversation , that you very much for agreeing to participate in the financial mathematics training course . as discussed i would be delighted if you could present the following sessions : ? practical techniques to price exotic energy options ? evaluating methodologies for pricing exotics ? ? ? assessing the pros and cons of a partial differential equation ? ? ? applying multi - factor models to price exotic energy derivatives ? ? ? building trees for pricing and hedging exotics pricing ? ? ? asian options ? ? ? bermudan and american style options ? ? ? spread and spark spread options ? ? ? multi - commodity options practical example : ? ? ? pricing swing options ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? using monte carlo techniques to value swing options practical example : ? ? ? pricing a multi - commodity option ? analysing approaches to weather derivatives valuation ? understanding the mechanics of weather derivatives ? ? ? heating and cooling degree day swaps ? ? ? precipitation contracts applying probablistic approaches to pricing weather derivatives ? ? ? stochastics ? ? ? monte carlo techniques using historical methodologies and black - scholes for pricing weather derivatives valusing long term transactions practical example ? please could you let me know by the close of business on thursday if you would like to make any changes to the bullet points . i have printed out your biography below and please could you also let me know if you would like to make any changes to it . ? vince kaminski , enron capital &amp; trade resources vince kaminski is vice president and head of research at enron risk management and trading , a unit of enron capital &amp; trade resources . mr kaminksi joined enron in 1992 . previously he was vice president in the research department at salomon brothers . ? thanks again vince and i ? look forward to speaking to you on friday . ? best regards , ? vicky
</pre>

## Record 002000

**Label:** `benign`

<pre>
letter to nesbitt john , the outline of a message to nesbitt . dale , thanks for your message . in our phone conversation before the meeting you mentioned another contractual arrangement under which we could work with your company employees on a case - study . the cost of a weekly project would be $ 12 , 000 that would be applied to the purchase price should we go ahead and decide to acquire the software . this project would allow us to evaluate the model and come up with an estimate of the manpower necessary to support the model internally . please , let me know more about this option . vince
</pre>

