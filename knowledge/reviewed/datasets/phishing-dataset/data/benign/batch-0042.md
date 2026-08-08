---
type: DatasetPartition
title: Benign samples - batch 0042
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 8201
record_end: 8400
---

# Benign samples — batch 0042

## Record 008201

**Label:** `benign`

<pre>
proj . x analytics diligence paul , vince and i spent some time thinking about the diligence process for the trading analytics . there is a limited amount that can be accomplished in a two day time period . i think a reasonable start would be the following : 1 . obtain an audited history of the trading strategies which have been implemented in order to verify profitability , and p / l volatility of each . 2 . review needed working capital and risk capital requirements and compare these to projections for trading income . 3 . review current level of access to electronic markets and verify that a change of ownership would not have adverse consequences , i . e . are there guarantees of continued access using the current systems ? 4 . review feasibility of entry into proposed new markets ? it is far from clear that there will be any synergy with most commodity markets given the current limited &quot; electronic &quot; liquidity . 5 . review , at least qualitatively , the current trading strategies being used . try to develop some estimate of how fast the profitability of these strategies will disappear as other &#x27; s implement similar trading models . what is the trade off between trade quantity and slippage . 6 . review the methodology used to generate new trading strategies which will be needed to replace the current models as they become unprofitable and outdated . 7 . try to determine if there will be any value in transfer of trading technology to enron &#x27; s other markets , given the illiquidity of these markets as compared to the financial equity markets . if there were a sufficiently long time horizon for our analysis , we would probably want to run their system on a test set of data . let me know if you have other suggestions . - - stinson
</pre>

## Record 008202

**Label:** `benign`

<pre>
re : nj alliance michael lassle is in charge of our lighting best - practices . he is the person mr . eaton should contact . michael is in houston and his number is ( 713 ) 853 - 5023 . osman vince j kaminski @ ect 02 / 17 / 2000 07 : 55 am to : &quot; william eaton &quot; cc : osman sezgen / hou / ees @ ees subject : re : nj alliance bill , i forwarded your message to my associate , osman sezgen , who supports our energy services group . he will e - mail you the name of a contact at enron . vince kaminski &quot; william eaton &quot; on 02 / 16 / 2000 08 : 25 : 02 pm to : shelm @ globalcloud . net cc : steing @ conedsolutions . com , robert . blake @ conectiv . com , marianne . abdul @ conectiv . com , bekmank @ conedenergy . com , david l fairley / hou / ect @ ect , robinsonm @ conedenergy . com , nwilson @ delmarva . com , hudsonw @ detroitedison . com , cndavis @ duke - energy . com , hbburnham @ duke - energy . com , jhickman @ duke - energy . com , paul . skurdahl @ engageenergy . com , james mackey / hou / ect @ ect , vince j kaminski / hou / ect @ ect , mrollhei @ enron . com , hnmorris @ metromediaenergy . com , npalmer @ execpc . com , chibbard @ noresco . com , mhuang @ usgen . com , bshay @ powerdirect . com , cmidura @ pseg . com , ghallam @ energy . twc . com subject : nj alliance aesp members and utility affiliates , we are looking for a good fit with one of the utilities intent on doing business in the nj , ct , pa , ny territory . our qualifications and company profile may be previewed at our web site , www . lightsourceonline . com . email contact information in response to this message . thanks , bill eaton - attl . htm
</pre>

## Record 008203

**Label:** `benign`

<pre>
For the past 2 days, nothing that I&#x27;m reporting seems to be in the
database.  If I report something, and the check the response is coming
back as none spam.  Is anyone else seeing this?
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008204

**Label:** `benign`

<pre>
going romance going romance 1995 please note that in the call for papers for going romance 1995 the e-mail adress is not correct . the correct address is : going . romance @ let . uva . nl excuse us for the confusion . the organising committee .
</pre>

## Record 008205

**Label:** `benign`

<pre>
Of course we&#x27;ve had select() since BSD 4.2 and poll() since System V
or so, and they work reasonably well for asynchronous I/O up to a
hundred or so channels, but suck after that; /dev/poll (available in
Solaris and Linux) is one approach to solving this; Linux has a way to
do essentially the same thing with real-time signals, and has for
years; and FreeBSD has kqueue.More details about these are at
http://www.citi.umich.edu/projects/linux-scalability/None of this helps with disk I/O; most programs that need to overlap
disk I/O with computation, on either proprietary Unixes or Linux, just
use multiple threads or processes to handle the disk I/O.POSIX specifies a mechanism for nonblocking disk I/O that most
proprietary Unixes implement.  The Linux kernel hackers are currently
rewriting Linux&#x27;s entire I/O subsystem essentially from scratch to
work asynchronously, because they can easily build efficient
synchronous I/O primitives from asynchronous ones, but not the other
way around. So now Linux will support this mechanism too.It probably doesn&#x27;t need saying for anyone who&#x27;s read Beberg saying
things like &quot;Memory management is a non-issue for anyone that has any
idea at all how the hardware functions,&quot; but he&#x27;s totally off-base.
People should know by now not to take anything he says seriously, but
apparently some don&#x27;t, so I&#x27;ll rebut.Not surprisingly, the rebuttal requires many more words than the
original stupid errors.In detail, he wrote:
&gt; Could it be? After 20 years without this feature UNIX finally
&gt; catches up to Windows and has I/O that doesnt [sic] totally suck for
&gt; nontrivial apps? No way!Unix acquired nonblocking I/O in the form of select() about 23 years
ago, and Solaris has had the particular aio_* calls we are discussing
for many years.  Very few applications need the aio_* calls ---
essentially only high-performance RDBMS servers even benefit from them
at all, and most of those have been faking it fine for a while with
multiple threads or processes.  This just provides a modicum of extra
performance.&gt; OK, so they do it with signals or a flag, which is completely
&gt; ghetto, but at least they are trying. Keep trying guys, you got the
&gt; idea, but not the clue.Readers can judge who lacks the clue here.&gt; The Windows I/O model does definately [sic] blow the doors off the
&gt; UNIX one, but then they had select to point at in it&#x27;s [sic]
&gt; suckiness and anything would have been an improvement. UNIX is just
&gt; now looking at it&#x27;s [sic] I/O model and adapting to a multiprocess
&gt; multithreaded world so it&#x27;s gonna be years yet before a posix API
&gt; comes out of it.Although I don&#x27;t have a copy of the spec handy, I think the aio_* APIs
come from the POSIX spec IEEE Std 1003.1-1990, section 6.7.9, which is
13 years old, and which I think documented then-current practice.
They might be even older than that.Unix has been multiprocess since 1969, and most Unix implementations
have supported multithreading for a decade or more.&gt; Bottom line is the &quot;do stuff when something happens&quot; model turned
&gt; out to be right, and the UNIX &quot;look for something to do and keep
&gt; looking till you find it no matter how many times you have to look&quot;
&gt; is not really working so great anymore.Linux&#x27;s aio_* routines can notify the process of their completion with
a &quot;signal&quot;, a feature missing in Microsoft Windows; a &quot;signal&quot; causes
the immediate execution of a &quot;signal handler&quot; in a process.  By
contrast, the Microsoft Windows mechanisms to do similar things (such
as completion ports) do not deliver a notification until the process
polls them.I don&#x27;t think signals are a better way to do things in this case
(although I haven&#x27;t written any RDBMSes myself), but you got the
technical descriptions of the two operating systems exactly backwards.
Most programs that use Linux real-time signals for asynchronous
network I/O, in fact, block the signal in question and poll the signal
queue in a very Windowsish way, using sigtimedwait() or sigwaitinfo().-- 
       Kragen Sitaker     
Edsger Wybe Dijkstra died in August of 2002.  This is a terrible loss after 
which the world will never be the same.
http://www.xent.com/pipermail/fork/2002-August/013974.html
</pre>

## Record 008206

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-5,8535468,215/
Date: 2002-10-04T02:38:57+01:00*Media:* BBC and Sky-backed service will be launched at the end of this month 
with 30 free channels.

</pre>

## Record 008207

**Label:** `benign`

<pre>
meter 984132 for 1 / 16 / 99 - - - - - - - - - - - - - - - - - - - - - - forwarded by gary w lamphier / hou / ect on 08 / 22 / 2000 02 : 51 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : sherlyn schumack 08 / 22 / 2000 02 : 07 pm to : jackie young / hou / ect @ ect , karen lindley / corp / enron @ enron cc : gary w lamphier / hou / ect @ ect subject : meter 984132 for 1 / 16 / 99 here is the issue for 1 / 16 / 99 at meter 984132 . 20 , 000 mmbtu were confirmed for adonis in pops . 10 , 000 mmbtu on day 5 and day 16 . day 16 is not valid for deal 51862 ( track id 6155 ) , which is where 10 , 000 was confirmed . the actual sale to adonis was 10 , 000 which was invoiced and paid by adonis . we are trying to clear the feedback error report . my question is why was 10 , 000 confirmed on 1 / 16 / 99 if the date is not valid for the deal ? when karen allocates the actual 10 , 000 it is prorating 5 , 000 for each day that is confirmed ( the 5 th and 16 th ) . should the whole 10 , 000 be allocated to the 5 th or should 5 , 000 be allocated to each day ? if 5 , 000 should be allocated to each day , the 16 th needs to be added to the deal .
</pre>

## Record 008208

**Label:** `benign`

<pre>
re : hpl meter # 980074 bammel hpl d / p to transco daren - what happened in feb . was that transco had allocated a different amount other than our measurement . i had been working with fred on getting some allocations resolved for several different months . transco told us they would not go back and reallocate due to the statute of limitations ( 6 months ) . february had a significant amount not allocated . we just need a deal set up so we can write these volumes off . let me know if you have any more questions . aim clem cernosek 12 / 12 / 2000 01 : 09 pm to : aimee lannou / hou / ect @ ect cc : subject : re : hpl meter # 980074 bammel hpl d / p to transco please response . thanks , clem - - - - - - - - - - - - - - - - - - - - - - forwarded by clem cernosek / hou / ect on 12 / 12 / 2000 01 : 13 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - daren j farmer 12 / 12 / 2000 12 : 35 pm to : clem cernosek / hou / ect @ ect cc : subject : re : hpl meter # 980074 bammel hpl d / p to transco what was going on in feb ? d clem cernosek 12 / 11 / 2000 04 : 27 pm to : daren j farmer / hou / ect @ ect cc : aimee lannou / hou / ect @ ect subject : hpl meter # 980074 bammel hpl d / p to transco daren during the period of 1 / 1 / 99 to 9 / 30 / 2000 , the above meter has recorded flow on the following days : days mmbtus 11 / 12 / 99 ( 58 ) 12 / 23 / 99 ( 133 ) 2 / 1 / 00 ( 463 ) 2 / 2 / 00 ( 463 ) 2 / 3 / 00 ( 463 ) 2 / 4 / 00 ( 463 ) 2 / 5 / 00 ( 463 ) 2 / 6 / 00 ( 463 ) 2 / 7 / 00 ( 463 ) 2 / 8 / 00 ( 463 ) 2 / 9 / 00 ( 463 ) 2 / 10 / 00 ( 463 ) 2 / 11 / 00 ( 463 ) 2 / 12 / 00 ( 463 ) 2 / 13 / 00 ( 463 ) 2 / 14 / 00 ( 463 ) 2 / 15 / 00 ( 464 ) 2 / 16 / 00 ( 463 ) 2 / 17 / 00 ( 463 ) 2 / 18 / 00 ( 463 ) 2 / 19 / 00 ( 463 ) 2 / 20 / 00 ( 463 ) 2 / 21 / 00 ( 463 ) 2 / 22 / 00 ( 463 ) 2 / 23 / 00 ( 463 ) 2 / 24 / 00 ( 463 ) 2 / 25 / 00 ( 463 ) 2 / 26 / 00 ( 463 ) 2 / 27 / 00 ( 463 ) 2 / 28 / 00 ( 463 ) 2 / 29 / 00 ( 464 ) 6 / 28 / 00 78 9 / 14 / 00 499 ( 13 , 043 ) currently , these volumes are being booked to hpl strangers gas contract . logistics needs approval to writeoff these volumes to unaccounted for gas . if you have any questions , please contact aimee lannou @ x - 30506 . thanks , clem ps : approval to writeoff the volumes to unaccounted for gas
</pre>

## Record 008209

**Label:** `benign`

<pre>
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1I send mail detected by Razor as spam to the spamtrap, which again reports it 
as spam. Before I added the procmail rule to revoke (as my real life account) 
Bugtraq messages that were flagged as spam, I manually revoked them as the 
spamtrap (which keeps the last 32 messages sent to it). Thus the spamtrap 
both reported as spam and revoked the same message. What happens to its trust 
rating?Btw, what does &quot;TeS&quot; stand for?cmeclax
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.0.7 (GNU/Linux)iD8DBQE9U0iD3/k1hdmG9jMRArnxAKCpw8ZpBWFo3+h7Y2mscN4WER6HEwCfauH9
54LgdFZN2QQONm7awjHKN1c=
=yKwF
-----END PGP SIGNATURE-----
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008210

**Label:** `benign`

<pre>
Mark Twomey joked:
&gt;  &gt;erm... it runs Solaris x86 as standard...
&gt;
&gt; It runs Solaris 8 x86 as standard.
&gt; (I was joking Al)And will run Solaris 9 when Sun catch up with the x86 drivers and kernel.Although don&#x27;t hold your breath for the free DVD. It will never come.(Spot the person who applied for the free Solaris 9 DVD, only to be told
three months later it is no longer available.)FWIW Solaris and Linux seem to be getting closer all the time. I can no
longer see any specific reason why one is better than the other. Expect Red
Hat Solaris 11 any time now... - Matthew__________________________________________________
Do You Yahoo!?
Everything you&#x27;ll ever need on one web page
from News and Sport to Email and Music Charts
http://uk.my.yahoo.com
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008211

**Label:** `benign`

<pre>
germanic linguistics &amp; philology the web site of the society for germanic philology ( sgp ) has moved to the following address : www . germanic . ohio-state . edu / sgp / the sgp embraces all areas of and approaches to germanic linguistics and philology , from formal syntax and phonology through historical linguistics to textual editing and includes scholars interested in all germanic languages , from modern german , netherlandic and yiddish to old english , scandinavian and gothic . the web site features information about the sgp , its membership , its goals and administration . in addition , the full text of the biannual newsletter of the society is available , and visitors to the site will find editorial information about the society &#x27;s journal , the american journal of germanic linguistics and literature ( ajgll ) . a first call for papers has been posted for the fourth annual germanic linguistics conference , to be held at ohio state in april 1998 . gregor hens department of germanic languages &amp; literatures the ohio state university www . germanic . ohio-state . edu / faculty / gh /
</pre>

## Record 008212

**Label:** `benign`

<pre>
Well, thanks everyone for the explanations. I still disagree with the 
reasoning, but it seems this is one of those philosophical questions 
that I&#x27;m on the losing end of :)The checkinstall utility that someone mentioned seems useful, but I 
don&#x27;t really have the time to figure it out right now. After searching 
the web some more, I found out that Mandrake&#x27;s version of rpm is 
patched to support what I wanted. So I guess I&#x27;ll look into that when 
I get a chance.On Thu, Aug 15, 2002 at 05:14:47PM +0200, Ralf Ertzinger wrote:
&gt; Do nothing in the %build section, and copy the existing binaries
&gt; in %install.As far as I can tell, this could be useful for my situation too. It&#x27;s 
not a complete solution since I can&#x27;t really distribute the SRPMS with 
full certainty that they work, but at least I can make RPMS for local 
use by tarring up the buildroot directory and then using the above 
technique. All I really want is to get dependency tracking for 
everything installed on my system (including software from cvs). This 
just makes it a little bit faster.gary_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008213

**Label:** `benign`

<pre>
wharton event - junel 0 - insead vince , bryan has been unable to find anyone suitable to attend this symposium on saturday , so has suggested i attend , which i am happy to do . my only reservation is that my knowledge of this area is very limited , so it is likely i would just be an observer , rather than a participant . anyway just so that i am adequately prepared could you briefly describe our current relationship with this project , and also suggest any reading , like a magazine or paper , that would quickly aid my understanding of the topics to be discussed . many thanks , ben - - - - - - - - - - - - - - - - - - - - - - forwarded by benjamin parsons / lon / ect on 08 / 06 / 2000 08 : 36 - - - - - - - - - - - - - - - - - - - - - - - - - - - bryan seyfried 06 / 06 / 2000 16 : 46 to : benjamin parsons / lon / ect @ ect cc : subject : wharton event - junel 0 - insead - - - - - - - - - - - - - - - - - - - - - - forwarded by bryan seyfried / lon / ect on 06 / 06 / 2000 16 : 48 - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski 05 / 06 / 2000 15 : 13 to : bryan seyfried / lon / ect @ ect cc : vince j kaminski / hou / ect @ ect subject : wharton event - junel 0 - insead bryan , i shall call you later today when i have a chance to read the message from ben . i wanted to ask you for a favor ( on a very short notice ) . we are talking to the wharton school about setting up a relationship with them and getting involved in one or more research projects with them . one of the potential topics is emerging technologies . the wharton offers a symposium in paris on june 10 on high tech acquisitions and it would make a lot of sense if you ( or somebody from london you could identify ) could attend and help us to evaluate the usefulness of this project . i am enclosing the message from the person in wharton running this program . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 06 / 05 / 2000 09 : 08 am - - - - - - - - - - - - - - - - - - - - - - - - - - - tomczyk @ wharton . upenn . edu ( michael tomczyk ) on 05 / 18 / 2000 10 : 56 : 08 am to : vkamins @ enron . com cc : thomas . piazze @ wharton . upenn . edu subject : wharton event - junel 0 - insead vincent , it was truly a pleasure getting to know you in our meeting yesterday , and i look forward to the prospect of exchanging views in the future on a variety of topics pertaining to emerging technologies . per our discussion , i &#x27; ve enclosed three files that include an invitation , agenda and rsvp form for the june 10 symposium on high tech acquisitions at insead . if you or the individual ( s ) who will be attending have any questions , please email : phanish puranam at : phanis 20 @ wharton . upenn . edu or you can call him at 215 - 898 - 1231 . this initiative will be expanded during the coming year and i believe that enron &#x27; s involvement will give the company access to some of the early research in progress as it unfolds , and of course , if you become involved as a partner in the emerging technologies program you would have opportunities to help guide the direction of the research which is one of the partnership &quot; benefits . &quot; our next upcoming events are scheduled for : friday , september 8 &quot; what next on the internet ? &quot; this is a faculty update day with industry partners also invited . we will co - sponsor this with wharton &#x27; s major e - business initiative . major issues addresses include &quot; new economics of the web &quot; and &quot; internet , anywhere . &quot; friday , october 20 &quot; first mover advantage , shakeouts &amp; survival strategies &quot; designed by the et core group and presented in collaboration with the e - commerce forum . as i indicated during our discussion , participation in the emerging technologies management research program is by invitation and on behalf of our core faculty , i am pleased to extend an invitation for enron to join the program . to assist in your decision , we recommend having a representative attend the symposium in paris on june 10 to &quot; test drive &quot; the program . i &#x27; ll send you a formal invitation which you are free to accept at your convenience , should you agree that enron &#x27; s participation in the et program would be of value . please call or email if you have any comments or questions . best regards , michael - insead workshop invitation lett - insead workshop agendal . doc - rsvp form . doc michael s . tomczyk managing director emerging technologies management research program 1400 sh - dh / 6371 the wharton school philadelphia , pa 19104 - 6371 tel 215 - 573 - 7722 fax 215 - 573 - 2129
</pre>

## Record 008214

**Label:** `benign`

<pre>
&gt; For my part, I&#x27;d rather people didn&#x27;t use FoRK as a place in which to dump an 
&gt; expression of their political beliefs.I&#x27;ll second that, although with emphasis
upon /dump/, rather than on /political/.I don&#x27;t mind if people advocate nuking
gay baby whales for jesus, if they can
make a good, original, argument for it.I do mind if someone should attempt to
further the notion that 1+1=2, merely
by cut-and-pasting a few pages of W&amp;R.&quot;New bits&quot; are not a temporal property;
we create them when we add context or
clarification to the old bits of others&#x27;
thoughts.-Dave::::::::::::&gt;     ... being rude and disrespectful is not the way to influence 
&gt; politicians, but the standard way of using lobbyists and
&gt; writing checks is beyond many of us.The standard way has some extreme precedents:&gt; Q: When was the Roman empire sold, and who bought it?
&gt;
&gt; A: On March 28th, 193 AD, the Roman empire was auctioned off by the
&gt; Praetorian guards to the wealthy senator Didius Julianus for the price
&gt; of 6250 drachms per soldier.
(as found in ,
quoting Gibbon)Now, an economist might argue that selling
offices is the most efficient way to fill
them (what would Coase say?), but wouldn&#x27;t
that convince everyone (but the supporters
of plutocracy) that efficiency is not the
primary virtue of politics?

</pre>

## Record 008215

**Label:** `benign`

<pre>
fw : pluto flow line transaction louise , this was sent out this past friday and had been reviewed by all appropriate parties ( i . e , legal , mariner etc . ) . mrha - - - - - original message - - - - - from : miller , kevin sent : friday , november 09 , 2001 11 : 17 am to : stephen p . noe ( e - mail ) cc : mrha , jean ; hodge , jeffrey t . ; druzbik , lisa ; melendrez , jesus ; keel , allan ; seade , jerry subject : pluto flow line transaction importance : high steve , per our discussion this morning , attached herewith is the letter outlining a transaction structure and schedule . an original will be sent to you this afternoon by courier . thanks . . . kevin
</pre>

## Record 008216

**Label:** `benign`

<pre>
hpl noms . for jan . 20 - 22 , 2001 ( see attached file : hplnol 20 . xls ) - hplnol 20 . xls
</pre>

## Record 008217

**Label:** `benign`

<pre>
global risk management operations weekly operating report tammie , attached is the global risk management operations update for louise &#x27; s weekly report , week ending february 8 . if you have any questions , please let me know . thanks , brian
</pre>

## Record 008218

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/215,5,215/
Date: 2002-10-03T04:21:02+01:00*World latest:* The ethnic Greek and Turkish leaders of Cyprus will hold 
crucial talks today in an effort to reunite the island.

</pre>

## Record 008219

**Label:** `benign`

<pre>
Bill:
&gt; I&#x27;ve decided that I ought to put some of my writing samples on-line for
&gt; potential employers to mock. And I don&#x27;t want to pay for it. There are still
&gt; a couple dozen places to do this, do any of you have preferences?
&gt;
Getting your own domain needn&#x27;t be expensive, looks more professional, and
you&#x27;re not going to suddenly lose your site with little or no notice (yes,
I&#x27;m still smarting from bastard Geocities). I registered mine through
http://www.easyspace.com/ - works out about a pound a week for registration
and 30Mb hosting. It&#x27;s a valuable service, there&#x27;s no reason not to expect
to pay.TimC------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
Looking for a more powerful website? Try GeoCities for $8.95 per month.
Register your domain name (http://your-name.com). More storage! No ads!
http://geocities.yahoo.com/ps/info
http://us.click.yahoo.com/aHOo4D/KJoEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008220

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/215,11,215/
Date: 2002-10-01T12:41:57+01:00*Live online:* The Observer&#x27;s *Tracy McVeigh* and experts *Tim Brighouse* and *
Ann Hodgson* will be here on Thursday at 3pm to discuss the government&#x27;s 
record. Post your questions now.

</pre>

## Record 008221

**Label:** `benign`

<pre>
analyst &amp; associate program - summer interns i want to take a moment to thank each of you for having a summer analyst or associate work on your team . i also want to remind everyone what a high stakes activity this is for enron . based on your recommendation , we will make offers at the end of the summer to those interns who perform , and who you endorse as a potential future member of your team . those interns who have had a good experience and accept our offer will be the lowest risk hires we make - from any source . we will have effectively interviewed and watched them work for 2 - 3 months . they also have the potential to be the most effective advocates and talent scouts we have , when they return to campus . on the flip side , those who don &#x27; t have meaningful assignments , or have bad experiences during the summer can severely hurt our efforts . thank you again for being part of this very important activity . if you have any questions , or if areas of concern arise during the summer , please contact ted bland ( x 35275 ) , traci warner ( x 33242 ) or me ( x 36671 ) . we appreciate your contributions to this important effort for enron . billy
</pre>

## Record 008222

**Label:** `benign`

<pre>
cdnow order confirmation dear daren , thank you for shopping at cdnow . this email is to confirm your order number 30320418 . to check the status of this order or to make any changes , click or copy / paste this link into your web browser : http : / / cdnow . com / myorder / otid = 30320418 you can also access your order history directly from our homepage . you have ordered the following item : cory morrow : man that i &#x27; ve been ( cd ) this will ship via u . s . postal service . the shipping address for this order is : daren farmer 2747 meadowtree ln spring , tx 77388 your order total is $ 15 . 48 . please note , at cdnow , we will accept the return of any unopened item , except vinyl recordings , within 30 days of delivery for a full refund of the purchase price ( minus shipping and handling ) . what ever happened to a - ha ? ralph macchio ? catch up with old friends and see our list of the top &#x27; 80 s one hit wonders when you visit &quot; it came from the &#x27; 80 s : then and now . &quot; your trip down memory lane begins here : please do not reply to this email . if you have questions about your order that are not addressed in your online order history , please visit our contact cdnow page using this link : http : / / cdnow . com / service this order is worth 130 fast forward rewards ( tm ) program points . these &quot; points pending &quot; will appear in your membership summary as &quot; points earned &quot; after your order has shipped . thanks again for shopping at cdnow . sincerely , cdnow customer service never miss a beat . cdnow , inc . http : / / cdnow . com aol keyword : cdnow 1757978
</pre>

## Record 008223

**Label:** `benign`

<pre>
Chuck Murcko wrote:
&gt; &gt; The usual crud.  Why do morons ranting and beating their chests in the
&gt; &gt; National Review (or similar rags) merit FoRKing?
&gt; Probably because we have this pesky 1st Amendment thing here.  [...]It must be so great in the US.  The rest of us live in caves and have
no such thing as free speech.
 
BTW, I wasn&#x27;t aware that the 1st Amendment mandated that crap must be FoRKed.
&gt; You can just ignore it if you wish.I will, thanks.
&gt; But I must feel obligated to defend to the death your right to do so.ï¿½Je dï¿½sapprouve ce que vous dites, mais je dï¿½fendrai jusqu&#x27;ï¿½ ma mort votre
droit de le direï¿½
- Arouet Le Jeune, dit ï¿½Voltaireï¿½ (1694-1778).
R

</pre>

## Record 008224

**Label:** `benign`

<pre>
ena legal expenditures in order to provide better oversight and control of ena legal expenditures on large transactions , please continue to follow the procedures set forth below for transactions where outside legal fees and expenses are expected to exceed $ 25 , 000 . 00 . the purpose of these procedures is to ( i ) improve communication with counsel ( inside and outside ) on issues , fees and services and ( ii ) send price signals on legal costs ( with respect to specific transactions ) on a timely basis to the business units . every effort should be made to continue to provide high quality legal work that has become standard at ena . 1 . a written estimate of proposed fees and expenses and a written description of the services shall be provided by our outside counsel . the responsible business unit and the general counsel shall review and approve such written estimate before our outside counsel is directed to provide substantial professional services . 2 . our outside counsel shall be instructed to promptly submit a revised written estimate if such outside counsel determines that legal fees and expenses for such transaction will exceed the previous written estimate by $ 25 , 000 . 00 . such revised written estimate shall be reviewed and approved by the responsible business unit and the general counsel or his / her designee before our outside counsel is directed to provide substantial additional professional services . 3 . in order to accurately track such expenses so that the expenses can be properly allocated to the various business units , a work order number should be obtained for each transaction . thank you for your cooperation . if you have any questions or any other suggestions for controlling expenses , please call me at extension 36544 .
</pre>

## Record 008225

**Label:** `benign`

<pre>
hdparm -d1 /dev/hdc says Operation not Permitted.
DVD playback is very jumpy.
Does someone have any ideas on what I can do yo get DMA transfers?
Thanks Alvie
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008226

**Label:** `benign`

<pre>
caida &#x27; metrics &#x27; wg meeting , 2 mar 00 hi vince , i ( and possibly stinson as well ) will be attending this initial meeting looks like kick - off type of meeting . i will try to attend to drill into what they can offer and what we have committed . make sure that we get from the arrangement n john griebling &amp; jim irvine &#x27; s perspective and ours . i &#x27; ll fire off additional information as i get them . ravi . - - - - - forwarded by ravi thuraisingham / enron communications on 02 / 23 / 00 10 : 51 am - - - - - nevil @ ipn . caida . org 02 / 22 / 00 12 : 16 pm to : members @ caida . org cc : nevil @ caida . org , ( bcc : ravi thuraisingham / enron communications ) subject : caida &#x27; metrics &#x27; wg meeting , 2 mar 00 hello caida members : update on the caida working groups . . a . &#x27; metrics @ caida . org &#x27; mailing list b . wg charters , meeting on 2 mar 00 a . &#x27; metrics @ caida . oeg &#x27; mailing list i &#x27; ve set up a single mailing list with this name , for discussions on wg topics , passive measurements , etc . to start with it &#x27; s a moderated list ( i . e . you have to be a member of the list to post to it , you join by sending email to nevil @ caida . org asking to be added to the &#x27; metrics &#x27; list ) , with the following initial set of members : sue moon , brett watson , hans - werner braun , matt mathis , ian graham , tony mcgregor , john cleary , joerg micheel , kevin thompson , jambi gambar , daniel mcrobb , david moore , sean mccreary rene hatem , shankar rao , cindy bickerstaff , jeff sedayao , steve feldman , bill woodcock two questions for caida members : i . who else would you suggest be invited to join the list ? ii . should the list continue to be moderated , or should it be changed into an open list ? b . &#x27; working group &#x27; developments following the caida members &#x27; meeting on 8 feb 00 i &#x27; ve attempted to define exactly what problem we could consider getting an ietf working group started on . my summary of the existing ietf wgs with interests in metrics is given below ( appendix b ) , but it seems unlikely that we could get a new ietf wg started . i believe that we should instead run a single caida working group on &#x27; network metrics , &#x27; rather than the two proposed earlier . my draft of its charter is appended below . it focuses on producing educational material about network measurement , and on developing new metrics - these were the two areas of greatest interest amongst the caida members . the wg co - chairs are sue moon ( sprintlabs ) and brett watson ( mfn / abovenet ) you are invited to attend the first wg meeting . the agenda is as follows . . agenda for caida wg meeting on : thursday 2 mar 00 - - - - - - - - - - - - - - - - - 10 am - 4 pm , abovenet , downtown sjc ( see below for details ) - - - - - - - - - - - - - - - - - - - - - - - - 1 . review wg charter - is it reasonable as set out in the draft ? - what should be removed or added ? 2 . work through revised charter in detail - identify the work required for each part - determine who &#x27; s willing to work on it - attempt to determine delivery times 3 . discussion of new metrics - first attempt at making a list of metrics to be considered 4 . anything else ? location : abovenet is located in the knight - ridder building , attached to the fairmont hotel complex . the address is 50 w . san fernando st . san jose , ca 95113 rsvp : to help us with organising the meeting , please send email to nevil @ caida . org telling us how many will attend from your organisation . cheers , nevil nevil brownlee visiting researcher phone : ( 619 ) 822 0893 caida , san diego caida network metrics working group : draft charter , tue 23 feb 00 goals : 1 education + faq on what does &#x27; measuring the internet actually mean ? &#x27; - why measure anyway ? - what can be measured ? how ? where ? by whom ? - active vs passive , end - to - end vs provider network only , application vs transport layer - rating schemes : provider &#x27; net performance &#x27; pages , internet &#x27; weather map &#x27; s , keynote , etc . publish as caida web pages , or maybe as an info rfc + survey paper on metrics and internet measurement - current measurement efforts ( surveyor , ripe test traffic , amp , iperf , at &amp; t , keynote , skitter , . . . ) - current tools publish as caida web pages 2 service metrics + define new metrics - taxonomy of current metrics ( ippm , rtfm , itu , . . ) - summary of metrics used for current services - gather information / ideas about new / emerging services , especially diffserv - based ones - make list of new metrics , either to improve measurement of existing services or to support new ones [ list of &#x27; metrics &#x27; questions ( appendix a ) goes here ] + organise experimental implementation / testing of tools for new metrics + make recommendations on implementation - define core set of &#x27; really useful &#x27; metrics - recommend that caida implement these as a &#x27; service measurement toolkit &#x27; + publish new metric definitions through ippm or rtfm + produce document &quot; measurement requirements for hardware / software vendors . &quot; publish on caida web pages appendix a : questions from the earlier draft caida wg charters a . what types of network - and transport - layer metrics are being used by isps in engineering and operating their networks ? by customers for verifying service guarantees ? b . what new services are being ( or are likely to be ) offered , e . g . diffserv ? is there a need for higher - layer metrics to better monitor and manage these services ? c . will these new differentiated transport - and application - layer services need new metrics ? d . how can the service metrics be measured in a multi - isp environment ? e . how can customers verify these measurements ? f . what requirements would service measurement introduce for equipment vendors ? g . how relevant are specific techniques ( e . g . which flow ) and points of measurement to specific users ( isp , customer , etc . ) requirements ? h . how do these metrics relate to network behavior as perceived by users ? how do they correlate with performance ? appendix b : background on the ietf working groups * rtfm wg : realtime traffic flow measurement rtfm is concerned with passive measurements of two - way traffic flows , specified in terms of their end - point attributes . its primary goal was to produce an improved traffic flow measurement model considering at least the following needs : a . wider range of measurable quantities , e . g . those relating to ipv 6 , and to class of service b . simpler ways to specify flows of interest c . better ways to control access to measured flow data d . strong focus on data reduction capabilities e . efficient hardware implementation * ippm wg : ip performance measurement the ippm wg charter is to develop a set of standard metrics that can be applied to the quality , performance , and reliability of internet data delivery services . these metrics will be designed such that they can be performed by network operators , end users , or independent testing groups . it is important that the metrics not represent a value judgement ( i . e . define &quot; good &quot; and &quot; bad &quot; ) , but rather provide unbiased quantitative measures of performance . rfcs framework for ip performance metrics ( rfc 2330 ) metrics : connectivity ( rfc 2678 ) , one - way delay ( rfc 2679 ) , one - way packet loss ( rfc 2680 ) round - trip delay ( rfc 2681 ) i - ds bulk transfer capacity ( 2 x ) instantaneous packet delay variation one - way loss patterns * other wgs the rmonmib wg is thinking about &#x27; application performance measurement . &#x27; this is clearly a hard problem ( e . g . does this just mean response - time measurement , can it be done by passive means , how should the measurements be presented , etc . ) . in short - rtfm provides a good distributed measuring system for traffic volumes - ippm has concentrated on transport - layer behaviour of the current , best - effort internet . - rmonmib is beginning to consider application - layer measurement
</pre>

## Record 008227

**Label:** `benign`

<pre>

&gt; (and no it wasnt me even though the spellingis
&gt; oddly familar)Not that this is news to FoRKs, but:&gt; ... randomising letters in the middle of words [has] little or no
&gt; effect on the ability of skilled readers to understand the text. This
&gt; is easy to denmtrasote. In a pubiltacion of New Scnieitst you could
&gt; ramdinose all the letetrs, keipeng the first two and last two the same,
&gt; and reibadailty would hadrly be aftcfeed. My ansaylis did not come
&gt; to much beucase the thoery at the time was for shape and senqeuce
&gt; retigcionon.  Saberi&#x27;s work sugsegts we may have some pofrweul palrlael
&gt; prsooscers at work. The resaon for this is suerly that idnetiyfing
&gt; coentnt by paarllel prseocsing speeds up regnicoiton. We only need
&gt; the first and last two letetrs to spot chganes in meniang.-Dave

</pre>

## Record 008228

**Label:** `benign`

<pre>
shanghaihua speakers wanted content - length : 967 i am looking for speakers of shanghaihua who would be willing to answer a short questionnaire about the uses of shanghaihua and putonghua in shanghai . please contact me at awilliam @ reed . edu thanks for any assistance , ashley williams
</pre>

## Record 008229

**Label:** `benign`

<pre>
fw : enron transaction good sign ! see below for wire transfer instructions . - - - - - original message - - - - - from : zisman , stuart sent : monday , april 30 , 2001 3 : 45 pm to : miller , don ; vos , theresa subject : fw : enron transaction fyi - - - - - forwarded by stuart zisman / hou / ect on 04 / 30 / 2001 03 : 43 pm - - - - - &quot; clark , patricia j . &quot; 04 / 30 / 2001 03 : 44 pm to : &quot; &#x27; stuart . zisman @ enron . com &#x27; &quot; cc : subject : fw : enron transaction stuart - - i don &#x27; t know who at enron was looking for this information but here it is . - - - - - original message - - - - - from : kendle , daniel s . sent : monday , april 30 , 2001 4 : 28 pm to : clark , patricia j . subject : enron transaction pat , on thursday , may 3 rd , enron will receive two wire transfers from supply . they will be in the amount of $ 600 , 000 , 000 and $ 447 , 700 , 445 . the wires will be coming from pnc bank , allegheny energy supply company account number 1008969371 . i believe someone in enron &#x27; s treasury department was looking for this information . please let me know if you need any further additional information . dan daniel s . kendle treasury analyst hagerstown corporate headquarters p 301 . 790 . 6278 f 301 . 790 . 6109 mailto : dkendle @ alleghenyenergy . com
</pre>

## Record 008230

**Label:** `benign`

<pre>
4 / 9 / 01 notification memo enron gas trading daily loss limit - ( $ 61 . 00 million ) loss - ( $ 206 . 83 million ) * note : the dpr is currently preliminary and is subject to change which may cause a restatement of this memo
</pre>

## Record 008231

**Label:** `benign`

<pre>
enron in action 01 . 08 . 01 please notice the updated format . simply click on the titles for detailed information . in anticipation of black history month and to celebrate mlk day , come enjoy the alley theatre &#x27; s exclusive presentation of &quot; barbara jordan : texas treasure &quot; for enron employees ! this one woman , one - act performance demonstrates the legacy of a great texas orator and public official and is part of enron &#x27; s extensive collaboration with the alley theatre on barbara jordan &#x27; s life . pack a lunch and come join us from 11 : 30 a . m . - 12 : 30 p . m . at the 2 allen center forum on friday , january 12 th . space is limited , so rsvp via e - mail to jessica nunez . join the enron running club at the compaq houston marathon and houston cellular 5 k benefiting over 40 charitable organizations scheduled for sunday , january 14 th . if you are interested in running , please contact cindy richardson at 713 - 853 - 4770 . for more information run to : http : / / home . enron . com : 84 / erc / index . html . join the enron running club at the american general fine arts 5 k benefiting the museum of fine arts , houston scheduled for saturday , january 27 th . if you are interested in running , please contact cindy richardson at 713 - 853 - 4770 . if you would like to volunteer , please contact kelly lombardi at 713 - 345 - 8491 . for more information run to : http : / / home . enron . com : 84 / erc / index . html . enron is the title sponsor of the holocaust museum houston &#x27; s human race , a 5 k walk / run through downtown which brings together the city &#x27; s ethnic and cultural groups to learn more about each other and to celebrate houston &#x27; s rich cultural heritage . the linda and ken lay family is also a sponsor and there are many volunteer needs to be filled ! ! ! volunteer opportunities include : sign - up booths enron building lobby jan . 10 &amp; jan . 17 11 am - lpm packet stuffing holocaust museum houston - 5401 caroline street jan . 27 2 pm - 5 pm pre - race registration holocaust museum houston - - 5401 caroline street feb . 1 - 3 9 am - lpm , 1 pm - 5 pm or 5 pm - 7 pm . data entry holocaust museum houston - 5401 caroline street jan . 15 through feb . 6 9 am - lpm and lpm - 5 pm weekdays or noon - 5 pm weekends race day registration &amp; check in park shops mall - 1200 mckinney feb . 4 11 am - 5 pm race course timers &amp; water stops park shops mall - 1200 mckinney feb . 4 noon - 5 pm finish line festival park shops mall - 1200 mckinney feb . 4 lpm - 5 pm if you want to volunteer or need additional information please contact jessica nunez asap via email with your selected duty and time . thank you for supporting this event with your volunteer efforts ! the texas scholar program is in search of volunteers from the business community to speak to 8 th grade students at edison middle school on january 30 th &amp; 31 st . training will be available on january 17 th and 23 rd , at 9 : 30 am - 10 : 45 am in two allen center , ste . 700 boardroom . if this is something you might be interested in , please contact jessica nunez via e - mail to sign up for training and speaking times . take advantage of this opportunity to help students be successful in the future workplace . the volunteer income tax assistance program offers free tax help to the community , particularly those with low and limited income , individuals with disabilities , non - english speaking and elderly taxpayers . vita is seeking volunteers to help out with the upcoming tax season . training starts in january , and all students , professionals , or anyone seeking new skills are invited to help out . for more information , call 800 - 829 - 1040 or write to taxed . houston @ irs . gov . the enron running club is looking for volunteers to assist at the compaq houston marathon and houston cellular 5 k on sunday , january 14 th . please contact kelly lombardi at 713 - 345 - 8491 , to find out more information . have news to share ? to post news or events in enron in action , please e - mail your information to greg grissom ( ext . 58741 ) no later than 12 : 00 noon the thursday prior to the next monday  , s mailing .
</pre>

## Record 008232

**Label:** `benign`

<pre>
fwd : hello from charles shen at williams co . mr . shen : vince kaminski and the research group would like to bring you in for an interview this friday , if possible . please forward me a copy of your resume , as soon as possible , and i will have our hr dept . contact you . thank you . shirley crenshaw administrative coordinator enron research dept . 713 / 853 - 5290
</pre>

## Record 008233

**Label:** `benign`

<pre>
isfc &#x27; 99 isfc99 - - the 26th systemic functional institute and congress department of english language &amp; literature national university of singapore institute : 22-24 july 1999 congress : 26-30 july 1999 theme : linguistics and education on entering the 21st century the institute the three day institute preceding the congress offers courses in the theory and practice of systemic functional linguistics ( sfl ) by leading figures within the field . for those who are not familiar with the model , the courses can provide the necessary background for the congress which is to follow . the major themes that will be treated at the institute include grammar , discourse , sociolinguistics , education , literature , information technology and computational methods . the congress the congress will bring together systemic functional linguists and those interested in finding out more about the ever increasing range of applications of sfl . with the 26th international systemic functional congress ( isfc99 ) being held in singapore , we extend a specially warm welcome to australian and asian participants . in addition we hope that many from europe , north america and other parts will be able to join us here in what should be a very special occasion , with a list of plenary speakers that includes michael halliday , ruqaiya hasan , hu zhuanglin , jim martin , fran christie and michael o &#x27; toole . the congress theme is linguistics and education on entering the 21st century . we welcome contributions from any of the growing number of theoretical and practical fields of sfl including extensions to other semiotic systems , and applications of sfl to education . while we expect the majority of papers and workshops to be located within a sfl framework , we welcome other contributions including those that offer an alternative perspective . call for offers of papers and workshops if you would like to offer a paper or a workshop , please send your proposal of one page ( a4 or us legal or email equivalent ) email , fax or hardcopy to the address below by 31st december 1998 . if you need a letter of acceptance for funding purposes , please inform us by marking your proposal &quot; urgent &quot; . papers should be designed to fit into a 40 minute slot which includes the time for questions and discussion . the workshops are three hours long . the workshops offer the opportunity for discussion , learning and improving skills such as developing theoretical knowledge and text analysis and demonstration of software and so forth . partial funding partial funding to attend the institute and congress will be considered in exceptional circumstances how to receive the second circular the second circular will contain details of the programme for the institute and congress , a list of the costs and the registration forms . it is essential that you write , fax or email us in order to receive a copy . the message need only be : &quot; request for second circular &quot; . also if you would like copies of the isfc99 poster , please let us know and we will forward the required number to you . address for correspondence and secretariat email : ellsfc99 @ nus . edu . sg post : isfc99 department of english language and literature national university of singapore 10 kent ridge crescent singapore 119260 fax : ( 65 ) 773 2981 website : further information will be posted on the website : http : / / www . fas . nus . edu . sg / ell / systemic / isfc-99 . html location of the institute and congress both the institute and congress will be held at the regional language centre ( relc ) , international hotel in the centre of singapore . this centre offers first rate conference facilities including accommodation , breakfasts and lunches ( and coffee breaks ) . more information about the facilities and what to do in singapore will be provided in the second circular . institute and congress organisers joseph foley , kay o&#x27;halloran , lionel wee , lisa lim , benny lee and vincent ooi and joyce james ( relc ) . any enquiries related to academic matters may be directed to : joe foley ellfoley @ nus . edu . sg kay o&#x27;halloran ellkoh @ leonis . nus . edu . sg
</pre>

## Record 008234

**Label:** `benign`

<pre>
conf : alasa 95 - second and final call for papers content - length : 4000 8th international biennial conference of the african languages association of southern africa alasa 95 university of stellenbosch stellenbosch south africa 12 - 14 july 1995 second and final call for papers conference theme : contemporary issues in african linguistics and literature proposals are awaited for oral presentations ( 20 mins plus 10 mins discussion ) reflecting on * african linguistics ( all subdivisions , incl lang planning ) * african literature * language teaching in african languages requirements : an extended summary of the proposal of two ( 2 ) typed pages with enough detail for proper adjudication to be received before or on 5 april 1995 . only a limited number of slots are available on the programme ; selection of papers will be based solely on merit . keynote speakers : prof a kimenyi california state university prof a irele ohio state university dr rrk hartmann dictionary research centre , exeter , uk prof i okpewho binghamton university , ny optional pre-conference seminars : four optional two-day seminars of approximately 12 hours duration each will be held on monday 10 july and tuesday 11 july . the following seminars will be presented : seminar # 1 : topics in african literature seminar # 2 : issues in bantu tonology seminar # 3 : second - language learning and teaching seminar # 4 : compiling dictionaries enrolment procedure for pre-conference seminars and conference activities : enrolment must take place before or on 31 may 1995 . only enrolled ( paid-up ) participants will be allowed to register ( free ) upon arrival . all conference material will be supplied upon registration . enrolment fee : full conference participation ( excluding seminars ) : r200 participation in seminars ( only one allowed ) : r100 accomodation accomodation is available in student residences at r80 per night sharing ( r100 per night single ) inclusive bed and breakfast . accomodation is also available in hotels and guest houses . important dates : 5 april 1995 : proposals due 20 april 1995 : notification of papers accepted or rejected 13 may 1995 : camera-ready abstracts ( shortened versions ) of accepted papers due 31 may 1995 : final date for enrolment for detail information and enrolment forms contact the organizer : alasa 95 dept of african languages university of stellenbosch po box x5018 stellenbosch 7599 south africa tel : ( 0 ) 21-808 2106 fax : ( 0 ) 21-887 6763 e - mail : alasa95 @ maties . sun . ac . za prof justus c roux department of african languages departement afrikatale university of stellenbosch universiteit van stellenbosch stellenbosch 7599 stellenbosch 7599 south africa suid - afrika e - mail / e - pos : jcr @ maties . sun . ac . za tel : ( 021 ) 808 - 2017 fax / faks : ( 021 ) 808 - 4336
</pre>

## Record 008235

**Label:** `benign`

<pre>
toc glot international 3 - 6 ( helen dry on the history of linguist ! ) table of contents of glot international , vol . 3 , issue 6 with a guest column by helen dry on the history of the linguist list ! editors : lisa l . s . cheng and rint sybesma &lt; mail to : glot @ rullet . leidenuniv . nl &gt; &lt; http : / / www . hag . nl / glot . htm &gt; state - of-the - article floating quantifiers : handle with care by jonathan david bobaljik &quot; the claim that since ( 1a ) and ( 1b ) &quot; mean &quot; the same , they must be transformationally related relies on the tacit assumption that there would be no other way for the two sentences to mean the same . the brief discussion of adverbial quantification above is intended to show not that this assumption is false , but that the question is still open . &quot; guest column / goodies the linguist list a personal history by helen dry &quot; behind the scenes , linguist editorial work is partly editing an academic journal and partly a mix of librarianship , amateur electronics and keeping up with 10 , 000 pen pals . &quot; dissertations on pitch accent phenomena in standard japanese by yuko yoshida ( soas , 1995 ) , reviewed by nancy ritter book reviews the infinite economy of complementation or : the return of the new england linguistic society by marcel den dikken review of the syntax of nonfinite complementation . an economy approach by zeljko boskovic ( mit press 1997 ) . verbal morphology , case marking and telicity by toshiyuki ogihara review of aspect and predication : the semantics of argument structure by gillian c . ramchand ( clarendon / oxford , 1997 ) the number of death a linguistic mystery in eight installments by chris sidney tappan chapter 5 : where is the evidence ? rint sybesma holland academic graphics po box 53292 2505 ag the hague the netherlands fax : + 31 70 448 0177
</pre>

## Record 008236

**Label:** `benign`

<pre>
re : update on confirmlogic kathryn has done a good job of keeping me in the loop on this . in addition , kim has consistently provided useful , objective feedback , as shown in the memo attached below . we will produce a stable code with the changes kim and her team have requested before the package is released outside the building . i have also asked kathryn to perform more testing within the cl team before asking kim and her team ( or any other clients ) to play with the changes . performing significant changes overnight , and then showing the code to clients the next morning is wonderfully responsive , but a little too risky . the high - level demo scheduled for thursday will show code that is already frozen and hardened . all the best , tom - - - - - original message - - - - - from : beck , sally sent : wednesday , april 18 , 2001 9 : 00 am to : gros , thomas d . subject : update on confirmlogic i assume that kathryn has communicated this to you . i have only read kim &#x27; s e - mail - i will talk with her later today . - - sally - - - - - - - - - - - - - - - - - - - - - - forwarded by sally beck / hou / ect on 04 / 18 / 2001 08 : 58 am - - - - - - - - - - - - - - - - - - - - - - - - - - - kim s theriot 04 / 17 / 2001 10 : 58 pm to : leslie reeves / hou / ect @ ect cc : sally beck / hou / ect @ ect subject : update on confirmlogic i wanted to give you a quick update on confirmlogic . . . . testing was done last week on the confirmlogic module . on thursday , we discussed with kathryn cordes and the confirmlogic it team the items that we had found that were &quot; show stoppers &quot; as far as releasing the product for beta testing . some of the major items found were the inability to properly handle basis swaps for gas and inability to display meaningful index references for power ( they were pulling in a code rather than a description of the index ) . the team worked on the &quot; fixes &quot; and migrated the code last night . today during testing , they found that the new code had actually caused problems with the fixed price and volume information , which was working previously . i talked to kathryn and she said that the were rebuilding the code . she said that someone had tested the fix last night and everything worked fine . we plan more testing in the morning . they are doing a high - level demo this thursday for beta customers just to introduce the module . they were planning on having more extensive beta demos for each client starting next week but realize that those may have to postponed further . we have told them that we would not sign off for beta testing until we were comfortable that the items that we identified were working . we need consistent , stable days of testing before i will feel comfortable . overall , we like the &quot; new &quot; streamlined version of the screens and feel that it will be a good product if they can work out the data display issues . call with any questions . kim theriot
</pre>

## Record 008237

**Label:** `benign`

<pre>
re : shirley , i will take half day off tomorrow morning , on friday , in addition to today &#x27; s afternoon . tanya
</pre>

## Record 008238

**Label:** `benign`

<pre>
congratulations on a well - deserved recognition . i always look up to you as someone who can get things done in the friendliest manner possible . vasant
</pre>

## Record 008239

**Label:** `benign`

<pre>
enron actuals for december 5 , 2000 teco tap 110 . 000 / hpl iferc ; 12 . 500 / enron ls hpl lsk ic 40 . 000 / enron
</pre>

## Record 008240

**Label:** `benign`

<pre>
re : conn . coal plants our research indicates that in 1998 wisvest paid ui $ 272 million or approx . $ 245 / kw for these two plants . with a couple of years &#x27; depreciation , $ 250 / kw ( as kevin outlined below ) would still give these guys a bit of a gain . don - - - original message - - - - - from : presto , kevin m . sent : wednesday , september 26 , 2001 9 : 38 pm to : miller , don ( asset mktg ) ; robinson , mitch ; davis , mark dana ; llodra , john ; broderick , paul j . cc : lavorato , john ; kitchen , louise ; duran , w . david subject : conn . coal plants as most of you know , nrg &#x27; s proposed purchase of two coal plants in conneticut ( ui &#x27; s territory ) was recently cancelled due to regulatory issues at ferc . the purchase and sale transaction between wisvest and nrg was originally entered into almost two years ago . the proposed purchase price of $ 350 million for 1000 mw of coal was a &quot; bargain price &quot; at the time due to environmental risks that are specific to the state of ct . over the past 2 - 3 years , the state of conneticut has threatened to have these coal plants shut down due to pollution issues and wisvest was concerned enough about this risk that they &quot; puked &quot; the plants to nrg for $ 350 / kw in early 2000 . at a minimum , it is expected that $ 100 - 150 / kw of scr and / or scrubbers will be required at these facilities to appease the ct regulatory bodies . my strong view is that , as a practical matter , the plants cannot be shut down or the lights would go out in ct . the area where the plants are located is quite possibly the most congested area in the entire eastern interconnect . the load pocket is significantly short mw and transmission import capability is inadequate to serve the load in this area . in a true &quot; locational marginal price &quot; environment , the prices would likely be similar to zone j in new york currently , pricing in nepool is generally socialized with congestion costs spread equally to all loads , regardless of who causes the congestion . in the recently proposed &quot; single ne rto &quot; model , it is about 80 % certain that the pjm &quot; locational marginal price &quot; market model will be implemented sometime between mid - 2003 and mid - 2004 . at that point in time , consumers in the congested areas of nepool ( in - city boston and ct ) will be exposed to higher energy prices , while consumers in maine , new hampshire , and rhode island should see lower prices . given the facts above , coupled with traditional asset companies too long to show good bids for incremental assets , i think ews should pursue discussions with wisvest immediately and attempt to buy these coal plants at what could be extremely favorable economics relative to our forward curve in nepool and our bullish view for relative pricing at the asset &quot; node &quot; . if we could buy these plants for approx $ 250 / kw with $ 150 / kw of environmental upgrades , the resulting &quot; all - in &quot; ( depr , fixed &amp; variable o &amp; m , fuel costs , nox , so 2 , capital reserve , interest ) 7 x 24 plant cost would be approx . $ 34 - 36 / mwh . this is lower than our energy only socialized nepool curve . additional upside is derived from positive basis , icap , ancillary services , emissions allowances , and long term requirements sales to lse &#x27; s . lavo and louise - this could be the &quot; alberta ppa &quot; for 2002 . lots of &quot; hair &quot; but lots of upside . any thoughts ?
</pre>

## Record 008241

**Label:** `benign`

<pre>
re : gtv ii i agree with your statements on phase ii . i &#x27; ll start working on the priorities and requirements . also , what is the status of colleen ? geof louise kitchen 03 / 19 / 2001 11 : 14 am to : zhiyong wei / enron @ enronxgate @ enron cc : stephen stock / enron @ enronxgate @ enron , geoff storey / hou / ect @ ect , colleen sullivan / hou / ect @ ect , beth perlman / enron @ enronxgate @ enron , philippe a bibi / enron @ enronxgate @ enron subject : re : gtv ii comments : zhiyong wei to be added to signature lists . timeline to include production dates - ie include uat and production roll - out dates . dependencies - where there are dependencies on other groups ( any interaction required with any group outside of zheiyong &#x27; s ) , these need to be highlighted and a representative from that group needs to sign off on that portion of the timeline ( a representative can not be below director level in the organiztion ) . there are clearly many people rolling off early in this project who can be utilized for phase ii - i would suggest the specfication for phase ii is completed in the very near future as the majority of the work in this is done in the very short term by the developers and it moves to the test team . please re - issue today . louise from : zhiyong wei / enron @ enronxgate on 03 / 16 / 2001 12 : 34 pm to : louise kitchen / hou / ect @ ect cc : stephen stock / enron @ enronxgate , geoff storey / hou / ect @ ect , colleen sullivan / hou / ect @ ect , beth perlman / enron @ enronxgate , philippe a bibi / enron @ enronxgate subject : re : gtv ii louise , attached please find the inception document requested . i would greatly appreciated your comments . i will be consulting colleen and geoff for any necessary revision . i will be requesting signatures on wednesday afternoon , march 21 . thanks zhiyong - - - - - original message - - - - - from : schoppe , tammie on behalf of kitchen , louise sent : tuesday , march 13 , 2001 4 : 24 pm to : wei , zhiyong cc : stock , stephen ; storey , geoff ; sullivan , colleen ; perlman , beth ; bibi , philippe a . subject : gtv ii i understand we have now finalized 90 % requirements on the gtv ii . please could we pull together the format inception document this week for signature on your meeting next week with geof and colleen . document to include all requirements , dependencies and timelines . i would suggest whoever is writing this spend some time with geof this week . please circulate to draft all listed above including me . thanks , louise
</pre>

## Record 008242

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85485739
Date: Not suppliedFor UK#400,000, a bioresearcher will map your personal genome for you. As 
geneticists discover more markers for congenital diseases, you can compare them 
to your genome and learn what you&#x27;re in for in your lifetime -- heart disease, 
cancer, baldness, compulsive hand-washing... Link[1] Discuss[2] (_Thanks, Alan!
_)[1] http://timesofindia.indiatimes.com/cms.dll/articleshow?artid=23099123
[2] http://www.quicktopic.com/boing/H/86aYt8PFwKE6

</pre>

## Record 008243

**Label:** `benign`

<pre>
teco &#x27; s indian spring plant - - - - - - - - - - - - - - - - - - - - - - forwarded by mary poorman / na / enron on 11 / 08 / 2000 04 : 20 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - clem cernosek @ ect 11 / 03 / 2000 02 : 28 pm to : sherlyn schumack / hou / ect @ ect , lauri a allen / hou / ect @ ect , jack simunek / hou / ect @ ect , karry kendall / hou / ect @ ect , mary poorman / na / enron @ enron , howard b camp / hou / ect @ ect , katherine herrera / corp / enron @ enron , megan parker / corp / enron @ enron , jennifer d pattison / hou / ect @ ect cc : rita wynne / hou / ect @ ect , pat clynes / corp / enron @ enron subject : teco &#x27; s indian spring plant a meeting was held on november 1 , 2000 at 3 pm in eb 3270 to resolve exxon &#x27; s residue volume issue at teco &#x27; s indian spring plant . exxon &#x27; s issue is that the residue volumes that hpl is recording for exxon &#x27; s account for transportation do not equal to the wellhead volumes produced and delivered to pge . items that were identified so that exxon &#x27; s issue could be resolved : 1 . hpl is responsible for any ua 4 loss / gain and fuel consumed on pge &#x27; s line attributable to exxon &#x27; s big sandy production . 2 . if exxon &#x27; s production exceeds 500 mcf / d , hpl must on a monthly basis elect to process or not process the exxon big sandy gas . if hpl elects to process , then teco buys the products from hpl . 3 . if exxon &#x27; s production flows between 100 mcf / d and 499 mcf / d , then teco can process and makeup the shrinkage to hpl with their own gas volumes . 4 . if exxon &#x27; s production is less than 100 mcf / d , then hpl must terminate the processing agreement . if hpl does not terminate and volume continue to flow at less that 100 mcf / d than hpl loses the shrinkage and must pay to teco an additional $ 500 per month . solution : 1 . hpl will schedule and record the gain / loss volumes at hpl meter # 986884 that is attributable to ua 4 and fuel on the pge line . 2 . hpl will schedule and record the sale volumes of pvr to teco at hpl meter # 986884 . 3 . the scheduling of the volumes for items 1 and 2 will allow for offset volumes to be record as adjustments to exxon &#x27; s transport volumes . 4 . the hpl logistics dept . ( mary poorman ) will inform assets group ( jack simunek ) when and if the volumes nominated for exxon fall below 100 mcf / d . if any of the above does not reflect what was discussed or agreed to , please let me know at x - 36650 . thanks , clem
</pre>

## Record 008244

**Label:** `benign`

<pre>
re : larence snowden slight interest ; could see as a fit in risk or strucuturing . egm has no immediate openings in either but i am always open to the possibility of going long people in those areas . he was supposed to get back to me if he had interest in egm - have not heard from him yet . - - - - - original message - - - - - from : beck , sally sent : tuesday , march 06 , 2001 2 : 07 pm to : brent a price / hou / ect @ enron ; beth apollo / hou / ect @ enron ; brenda f herod / hou / ect @ enronxgate subject : larence snowden any feedback or interest ? please let me know . - - sally - - - - - - - - - - - - - - - - - - - - - - forwarded by sally beck / hou / ect on 03 / 06 / 2001 02 : 08 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - larence snowden @ enron communications 03 / 05 / 2001 08 : 19 am to : sally beck / hou / ect @ ect cc : subject : thanks just a word of thanks for setting up the interviews last week . i was thoroughly impressed with the groups and saw several areas which i would like to explore further . i will be following up with beth apollo , brenda herod and brent price to explore opportunities in their areas . again , thanks for your kind gesture and even more so , thanks for meeting me at the suggestion of liz taylor . regards , larence b . snowden enron broadband services - structuring ( 713 ) 853 - 5132
</pre>

## Record 008245

**Label:** `benign`

<pre>
installation of new programs phillip , how can i install new programs on my laptop , without the administrator &#x27; s privileges ? one example : when i travel i use aol to get access to my mail and to communicate with the office . windows 2000 does not allow me to install it . also , i have my private statistical software i often use when i work at night during business trips . i would like to load it as well . vince
</pre>

## Record 008246

**Label:** `benign`

<pre>
mg memo i am sending you an updated version of the mg var memo , following the discussion grant and i had with bjorn thursday evening . please , let me know if you think more changes are required . vince
</pre>

## Record 008247

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85518715
Date: Not suppliedNYT op-ed piece about this newfangled OS called Linux and how it is developed 
using something called the &quot;open source&quot; method. This is the paper to go to for 
breaking news, folks. Link[1] Discuss[2] _(Thanks, Dave!)_[1] http://www.nytimes.com/2002/09/18/opinion/18WED2.html
[2] http://www.quicktopic.com/16/H/VgggkvaadJKnu

</pre>

## Record 008248

**Label:** `benign`

<pre>
start date : 12 / 25 / 01 ; hourahead hour : 18 ; start date : 12 / 25 / 01 ; hourahead hour : 18 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001122518 . txt
</pre>

## Record 008249

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85490332
Date: Not suppliedJust a reminder: I&#x27;m speaking at the University of Texas at Austin at 7PM this 
Friday -- giving a talk on Hollywood&#x27;s legislative agenda, sponsored by 
EFF-Austin, ACTLab, and ACLU-Texas. Love to see you there! Link[1] Discuss[2][1] http://effaustin.org/cory.html
[2] http://www.quicktopic.com/boing/H/DQswgUPGs5Y

</pre>

## Record 008250

**Label:** `benign`

<pre>
fw : confirmation - - - - - original message - - - - - from : lohman , tk sent : thursday , march 14 , 2002 8 : 53 am to : schoolcraft , darrell ; moore , jan ; moseley , debbie ; ward , linda ; mulligan , amy ; strohmeyer , vincent cc : watson , kimberly subject : confirmation
</pre>

## Record 008251

**Label:** `benign`

<pre>
california power 1 / 19 / 00 executive summary : sb - 7 x gives dept . of water and resources given legislative authority to undertake short - term power purchases with no price cap through feb . 2 nd new legislation ( ab - 1 x and sb - 6 x ) would seek ( 1 ) long - term contracts with 5 . 5 cent cap and ( 2 ) creation of california power and conservation financing authority the long - term contracts proposed in ab - 1 x are likely to be subject to significant amendment and renegotiation prior to the feb . 2 nd expiration of sb - 7 x . the authority proposed in sb - 6 x would have bond issuance powers to finance new generation capacity and conservation measures negotiations under way on using bond authority for a utility bailout - - utilities and state government split over debt obligations of utility parents state borrowing plans and power purchases create credit risks for state treasury ; socal edison misses more payments bush administration opposes price caps , but is supporting state efforts to split pg we believe he then could be willing to guarantee or issue bonds to deal with the rest . as one very senior california political leader explained , getting the utility holding companies to eat a substantial part of the debt they owe themselves is the key to solving the back debt problem without provoking widespread public outrage about a &quot; bailout &quot; of private price - gouging companies with taxpayer money . since 75 % of californians currently blame the utilities and the puc for this crisis ( and only 10 % blame davis ) , this is a crucial political stance for the governor . but , of course , absorbing anything like $ 6 billion in debt would be quite a shock to the seemingly healthy holding company and power - generating branches of the two utilities , and they began spreading the word that they were quite willing to accept bankruptcy . thus by mid - week , both sides had pushed themselves toward a resolution in federal bankruptcy court that would be a worst case solution for all sides : the country &#x27; s economy would suffer from the resulting credit shock , the governor &#x27; s political future would suffer from the electricity rate increases almost certain to be mandated by a bankruptcy judge , while most private sector legal authorities believe the utilities corporate holding structure would ultimately be breached during bankruptcy procedures and they would end up having to absorb some significant amount of the debt in the end . in addition , they would most likely face a state government determined to use state powers of condemnation to enter the power business in a major way . senator burton &#x27; s sb 6 x legislation will strengthen those powers dramatically to make this point quite explicit . it would set up a &quot; california power and conservation financing authority , &quot; with the power to issue bonds and invoke eminent domain . it would finance new power plants , and &quot; consider the feasibility and public interest of the state acquiring , operating , and maintaining transmission facilities currently owned by investor - owned and municipal utilities . &quot; as we write this , all sides are trying to construct a path back down from the bankruptcy ledge to safe ground , and there is no question the tone has shifted in the last 24 hours from macho confrontation to &quot; maybe we &#x27; ve run this thing out as far as we can . &quot; but as we have noted , the chance for miscalculation is still quite high . there is no solution agreed to at this time , the stand - off over how much debt the state government will absorb versus the utilities &#x27; holding company is continuing , and the technical fact of default still makes it possible for some bank to trigger bankruptcy by demanding immediate accelerated payment . 5 . default update - thursday socal edison - $ 215 million default to california power exchange . after edison failed to make a $ 215 m electricity payment yesterday , the california power authority began seizing long - term contacts and reselling them to recoup some of the money owed to generators . pg &amp; e said it expects its trading privileges at the cal . power authority to be suspended today , leaving them with only its generation from nuclear and hydroelectric sources . while the ongoing wave of defaults has severely restricted pg &amp; e &#x27; s and socal &#x27; s ability to buy power , the department of water and resources will be able to pick up some of the slack , at least in the very short - term . the state itself may be getting into risky credit territory . the proposed california public power authority would borrow in the neighborhood of $ 1 . 3 billion from the state general fund in advance of this year &#x27; s expected fiscal surplus , with the loan to be repaid by the authority from expected future revenues . with near - bankrupt utilities and a freeze on rate hikes , it is unclear where the revenues would come from . the amount borrowed and terms of repayment will be no doubt examined very carefully by the bond rating agencies . 5 . bush policies as we reported on wednesday , the bush administration continues to demonstrate little interest in getting involved in the california crisis . president - elect bush surprised state leaders yesterday with his comments , which essentially said that excessive environmental regulation was the root of the current supply shortage . bush and his top officials appear to be unanimously opposed to long - term price caps . however , there is one issue of considerable importance to the administration , according to a source close to a top bush economic advisor . there is significant concern that pg &amp; e &#x27; s credit problems could cause gas suppliers to stop shipments of gas through pg &amp; e &#x27; s pipeline . the risk would be that the pipeline could &quot; go dry &quot; , causing significant and possibly dangerous disruptions in california residences and businesses . to prevent this problem , bush is working with davis on a proposal to split pg &amp; e into separate gas and electric companies . the gas company would be solvent , but the electric company would go immediately into ch . 11 following significant defaults .
</pre>

## Record 008252

**Label:** `benign`

<pre>
gt symposium on qcf , april 7 please share the following announcement with your associates . georgia institute of technology symposium on quantitative and computational finance friday , april 7 th , 2000 auditorium of marc bldg . on the georgia tech campus sponsored by the dupree college of management , the college of engineering school of industrial and systems engineering , and the college of sciences school of mathematics . program : 12 : 30 - 12 : 40 welcome michael thomas , provost of georgia tech 12 : 40 - 12 : 45 introduction of the first speaker 12 : 45 - 1 : 30 walter j . muller iii , bank of america &quot; interest rate models for pricing fixed income securities &quot; 1 : 30 - 1 : 40 q &amp; a and introduction of the second speaker 1 : 40 - 2 : 25 steven l . allen , chase manhattan bank &quot; management of market risk - - what can we learn from the experiences of 1997 and 1998 ? &quot; 2 : 25 - 2 : 45 break 2 : 45 - 2 : 50 introduction of the third speaker 2 : 50 - 3 : 35 billy thornton , invesco capital management &quot; optimal portfolio construction and risk control &quot; 3 : 35 - 3 : 45 q &amp; a and introduction of the fourth speaker 3 : 45 - 4 : 30 ron dembo , algorithmics , inc . &quot; measuring the risk of a large financial institution &quot; 4 : 30 - 4 : 40 q &amp; a and introduction of the fifth speaker 4 : 40 - 5 : 25 alexander eydeland , southern company energy marketing l . p . &quot; energy derivatives &quot; 5 : 25 - 5 : 40 closing / extra time 5 : 45 - 6 : 30 reception short biographies of the speakers are given below . registration : there is no charge for attendance at the symposium . however , space is limited , so we do encourage you to let us know that you will be attending . please send the following information before wednesday , april 5 , 2000 . conference : &quot; qcf &quot; first name : last name : company / institution : department : address : city : state / province : zip / postal code : phone : fax : email : to robert kertz e - mail : kertz @ math . gatech . edu fax : 404 - 894 - 4409 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * lodging : you can make your own hotel arrangements with one of the many hotels in town . some hotels close by tech &#x27; s campus are : holiday inn express ( 404 - 881 - 0881 ) , days inn , 683 peachtree street ( 404 - 874 - 9200 ) , renaissance hotel , w . peachtree street ( 404 - 881 - 6000 ) , marriott courtyard , 1132 techwood drive ( 404 - 607 - 1112 ) , and regency suites , 975 west peachtree street ( 404 - 876 - 5003 ) . in all cases , ask about the georgia tech rate . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * location : the conference will be held in the first floor auditorium of the manufacturing research center ( marc bldg . ) , 813 ferst drive , on the georgia tech campus in atlanta , georgia . map : a map of campus can be found on the web at http : / / gtalumni . org . the conference is in the manufacturing research center ( # 126 on the map ) , which is the rectangular building directly north of the groseclose building ( # 56 on the map ) and the instructional center ( # 55 on the map ) . directions : ( additonal directions can be found at the website associated with the marc building ) by marta : take the north - south marta train ( $ 1 . 50 ) to the north avenue exit . the station is on the northeast corner of west peachtree and north avenue . walk west along north avenue past the varsity and over the expressway . after the football stadium , take the steps up and enter the campus . walk diagonally across the campus and ask some students where to find the manufacturing research center . by car , if you are entering atlanta from i - 20 or while traveling north on i - 75 or i - 85 : i - 75 and i - 85 merge in atlanta to form i - 75 / 85 . ( if you are on i - 20 , go north on i - 75 / 85 in the center of atlanta . ) exit the expressway at exit 100 which is the spring street and west peachtree street exit . turn left at the second light onto west peachtree street . turn left at the first light onto north avenue . travel west on north avenue and follow the signs to the &quot; center for the arts &quot; . these signs will ask you to turn right onto tech parkway which is the second traffic light along the gt campus , then turn right at the first light , and then you are forced to turn either right or left onto ferst drive . now go to the parking directions section below . by car , if you are entering atlanta while traveling south on i - 75 or i - 85 : i - 75 and i - 85 merge in atlanta to form i - 75 / 85 . exit the expressway at exit 100 which is the north avenue exit . turn right at the top of the ramp onto north avenue . travel west on north avenue and follow the signs to the &quot; center for the arts . &quot; these signs will ask you to turn right onto tech parkway which is the second traffic light along the gt campus , then turn right at the first light , and then you are forced to turn either right or left onto ferst drive . now go to the parking directions section below . parking directions : turn right onto ferst street , then turn left into the student center driveway which is the second driveway on your left . there is a fee of $ 4 . walk north past the instructional center to the manufacturing research center . for further information , please contact professor robert kertz by email at kertz @ math . gatech , edu , by fax at 404 - 894 - 4409 , by phone at 404 - 894 - 4311 or by regular mail at professor robert kertz school of mathematics georgia institute of technology atlanta , ga 30332 - 0160 . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * biographies of speakers steven l . allen managing director , market risk management for derivatives chase manhattan bank , new york steve allen is a managing director in the market risk management group of the chase manhattan bank , heading the derivatives product team . he began his career in 1967 with chase , where his assignments included deputy director of management science and manager of modeling and systems for the asset - liability committee . from 1981 through 1991 , he was director of research for chase &#x27; s trading activities , in charge of the development of models and analytics . his risk management career began in 1991 with the north american division of union bank of switzerland , where he was market risk manager for fixed income products . he took his current position in 1995 with chemical bank , rejoining chase by benefit of merger . steve studied mathematics as an undergraduate at columbia college and as a graduate student at new york university &#x27; s courant institute . he currently teaches risk management in the masters program in mathematics in finance at courant . he is co - author of &quot; valuing fixed income investments and derivative securities &quot; . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ron s . dembo president and chief executive officer algorithmics , inc . toronto ron dembo is president and chief executive officer of algorithmics , inc . , a leading provider of innovative enterprise - wide financial risk management software , which he founded in 1989 . before founding algorithmics , he created and managed a group at goldman sachs responsible for fixed income optimization modeling . prior to that , he held several positions in academia . from 1976 to 1986 , he served as an assistant and associate professor of operations research in computer science at yale university , and as a visiting professor for operations research at the massachusetts institute of technology . dr . dembo obtained a ph . d . in operations research from the university of waterloo , ontario ( 1975 ) . he has written and published over 50 technical papers on finance and mathematical optimization and holds two patents for portfolio replication . his latest book on risk , &quot; seeing tomorrow : weighing financial risk in everyday life , which he co - authored with andrew freeman , was published in may 1998 by wiley in the u . s . in october of 1998 , dr . dembo was honored with ernst model review ; and price verification . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * billy thornton director of quantitative research invesco capital management 1360 peachtree street atlanta , ga 30309 billy thornton is a partner at invesco and director in the quantitative research group . billy began his career in 1979 as a management consultant at andersen consulting , before joining bellsouth as a regulatory economic analyst in 1981 . billy next moved into academia as a finance professor teaching corporate finance for the undergraduate , graduate and executive programs at goizueta school of business , emory university . while a professor at emory , he spent a year as a visiting scholar at the federal reserve bank of atlanta researching special projects . continuing to teach corporate finance , billy joined clark atlanta university in 1995 . during this time , he also worked as a consultant with watson wyatt worldwide performing asset allocation consulting , and executive education and training . billy joined invesco in 1998 to head invesco &#x27; s department of quantitative research . his team of analysts performs statistical modeling , researches investment strategies , and sets risk management controls . billy earned a b . s . in mathematics from clark atlanta university in 1977 and an m . s . in statistics from carnegie - mellon university in 1979 . he graduated from harvard university , earning a ph . d in financial economics in 1989 jointly from the harvard business school and harvard department of economics , and also receiving his m . s . in business economics in 1987 . billy was a member of both leadership atlanta , class of 1994 , and leadership georgia , class of 1996 .
</pre>

## Record 008253

**Label:** `benign`

<pre>
prc committee meeting april 3 , 2001 you have been selected to serve on the 2001 vp performance review committee . this selection is based on your performance and recognizing that you possess the behaviors we are trying to underline , encourage and reward through our prc process . in serving on the committee we &#x27; d like to underscore the important role you will play not only with respect to the vp prc , but also in setting the standards and guidance for prc &#x27; s across enron . the prc is the foundation on which our talent is managed and rewarded . therefore , it is critical that you give it your full attention , prepare appropriately , and serve as champions for the process from an overall enron perspective . a meeting of the prc committee is scheduled for april 3 , 2001 , in the enron building 50 th floor boardroom to discuss mid - year 2001 prc . tele - conference / video conference will be provided where appropriate . an agenda for the meeting is attached for your review and information . please contact gina corteselli ( 713 - 345 - 3377 ) or jackie martin ( 713 - 345 - 3563 ) to confirm your participation . regards , dave
</pre>

## Record 008254

**Label:** `benign`

<pre>
tw weekly 11 - 17 - 00 please see the attached file , and call if you have any questions ( ( 281 ) 647 - 0769 ) .
</pre>

## Record 008255

**Label:** `benign`

<pre>
i &#x27; ve done it . . . . vince , thanks for this . the original sender of this resume , brian , works for me ! say , do you have any hot leads on any good hands - on electrical engineers interested in designing sensors ? cheers , scott - - - - - - - - - - - - - - - - - - - - - - forwarded by scott tholan / corp / enron on 01 / 30 / 2001 06 : 14 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski @ ect 01 / 30 / 2001 05 : 45 pm to : scott tholan / corp / enron @ enron cc : subject : i &#x27; ve done it . . . . scott , please , take a look at this resume . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 01 / 30 / 2001 05 : 46 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : paula corey @ enron communications on 01 / 30 / 2001 01 : 03 pm to : vince j kaminski / hou / ect @ ect cc : subject : i &#x27; ve done it . . . . vince - here you go . . . this has been reformatted - - - - - forwarded by paula corey / enron communications on 01 / 30 / 01 01 : 03 pm - - - - - brian mihura @ enron 01 / 30 / 01 11 : 52 am to : paula corey / enron communications @ enron communications cc : subject : i &#x27; ve done it . . . . here is matt &#x27; s resume as a msword doc .
</pre>

## Record 008256

**Label:** `benign`

<pre>
year end 2000 performance feedback note : you will receive this message each time you are selected as a reviewer . you have been selected to participate in the year end 2000 performance management process by providing meaningful feedback on specific employee ( s ) . your feedback plays an important role in the process , and your participation is critical to the success of enron &#x27; s performance management goals . to complete requests for feedback , access pep at http : / / pep . corp . enron . com and select perform review under performance review services . you may begin providing feedback immediately and are requested to have all feedback forms completed by friday , november 17 , 2000 . if you have any questions regarding pep or your responsibility in the process , please contact the pep help desk at : houston : 1 . 713 . 853 . 4777 , option 4 london : 44 . 207 . 783 . 4040 , option 4 email : perfmgmt @ enron . com thank you for your participation in this important process . the following is a cumulative list of employee feedback requests with a status of &quot; open . &quot; once you have submitted or declined an employee &#x27; s request for feedback , their name will no longer appear on this list . review group : enron feedback due date : nov 17 , 2000 employee name supervisor name date selected - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - andrews , naveen c rudi c zipter oct 31 , 2000 baxter , ashley david davies nov 02 , 2000 crenshaw , shirley j wincenty j kaminski oct 26 , 2000 kindall , kevin vasant shanbhogue oct 30 , 2000 lamas vieira pinto , rodrigo david port oct 31 , 2000 supatgiat , chonawee peyton s gibner oct 27 , 2000 tamarchenko , tanya v vasant shanbhogue oct 26 , 2000 villarreal , norma e sheila h walton oct 26 , 2000 walton , sheila h david oxley oct 27 , 2000 yaman , sevil vasant shanbhogue oct 27 , 2000 yuan , ding richard l carson oct 31 , 2000
</pre>

## Record 008257

**Label:** `benign`

<pre>
benefits for terminated employees hi all , i just got off the phone with the benefits center and they are informing people that it could take up to 90 days for them to send &quot; termination packages &quot; out to these employees and then you can send in your forms and it will take another 30 days to get a check , specifically talking about the cash balance plan money . this all happens after they get a notice that you are terminated which they usually process on the lst . . . . come on , what is up with this ? ? ? it could very well take up to 5 months for people to get a check in their hands ? that is not right . since all of you have a lot more clout than me or any of the terminated employees , i &#x27; m hoping that someone will take this up with human resources or whomever to get this form downloadable or something to speed up this process . thanks . sabra dinari
</pre>

## Record 008258

**Label:** `benign`

<pre>
the written poem : semiotic conventions from old to modern english huisman , rosemary ( university of sydney ) ; the written poem : semiotic conventions from old to modern english ; available from cassell ; hb . : 0 304 33999 7 ; us $ 75 . 00 / 45 . 00 this book defines a focus of interest : contemporary poetry and its historical construction as a &#x27;s een object &#x27; , and uses current literary and social theory to facilitate its study . thus the book contains matter of relevance to practising poets , to those engaged in literary studies and to those with a sociolinguistic interest in the english language , especially in relation to technical and social changes in language technology and literacy . part one discusses the use of graphic , that is visual , conventions in contemporary poetry in english . how do we recognize &#x27; a poem &#x27; ( including apparent contraventions , such as the &#x27; prose-poem &#x27; ) ? once a poem has been recognized , what are the interpretative conventions brought into play for reading it ? and especially , how has the spatial arrangement on the page become &#x27; meaningful &#x27; in its own right for much contemporary poetry ? the last question , of the semiosis of the &#x27;s een poem &#x27; , is discussed at length , with numerous examples from individual poems . for a consistent descriptive vocabulary for &#x27;d iscourse &#x27; and &#x27; genre &#x27; , a model of language and social context , derived from the work of the linguist m . a . k . halliday and the sociologist basil bernstein , where relevant , is explained and used . part two explores questions which have been brought to the fore in part one . what is the origin of the line as the primary generic sign of poetry ? how does the potential for seen , rather than spoken , meaning emerge ? it particularly focuses on changes in manuscript conventions from old to middle english poetry , on the comparitvely late significance of print for poetic discourse , on the change , in an increasingly literate understanding of &#x27; literature &#x27; , from a social to a personal understanding of poetic meaning from the late eighteenth century through the nineteenth century . if what has been regarded as an object , &#x27; the poem &#x27; , is an outcome of the social processes of textual interpretation and production , so too is what has been regarded as &#x27; the subject &#x27; , that through which meaning is authorized . available for review . email : sales @ cassellexport . demon . co . uk
</pre>

## Record 008259

**Label:** `benign`

<pre>
- - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 01 / 27 / 2000 04 : 16 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - troy _ a _ benoit @ reliantenergy . com on 01 / 27 / 2000 03 : 53 : 02 pm to : ami chokshi / corp / enron @ enron cc : subject : ( see attached file : egmnom - feb . xls ) - egmnom - feb . xls
</pre>

## Record 008260

**Label:** `benign`

<pre>
project vitro review meeting please mark your calendars for the following meeting : date : april 20 , 2001 location : eb 3321 time : 10 : 00 am subject : vitro project attendees : brian redmond louise kitchen max yzaguirre ( via conference call ) bob virgo keith dodson mike coleman steve irvin marc sabine stephen stein peggy banczak john lavorato if you are unable to attend or have any questions , please give me a call . thank you , lillian x 37271
</pre>

## Record 008261

**Label:** `benign`

<pre>
neon for march 7 here is next week &#x27; s neon lesson . let me know if we can help in any other way . thanks ! becky - experiencing god week 3 . doc
</pre>

## Record 008262

**Label:** `benign`

<pre>
ocean star brown bag - may 17 th , 2001 nesa / hea member &#x27; s : attached is the offshore energy center brown bag flyer . the oec consists of the ocean star , a retired offshore jack - up rig and a museum in galveston , tx . this brown bag also includes happy hour ! ! hope to see you there . date : may 17 th , 2001 time : 11 : 30 am to 5 pm &gt; please call me or tracy cummins at ( 713 ) 856 - 6525 with any questions . thanks , lana moore director of education - oecol . doc
</pre>

## Record 008263

**Label:** `benign`

<pre>
risk position - eugenio perez hi sally i wondered if you could help me ? attached is a specification we used locally for the australian risk management positions . could you review and perhaps add any comments with a view to creating the spec for the enron japan position ? please revert asap . thanks phil
</pre>

## Record 008264

**Label:** `benign`

<pre>
books on pragmatics john benjamins publishing would like to call your attention to the following new titles in the field of pragmatics : handbook of pragmatics manual &amp; annual supplements jef verschueren , jan - ola ostman , jan blommaert &amp; chris bulcaen ( university of antwerp / university of helsinki ) manual 1994 . xiv , 658 pp . us / canada : hb : 1-55619 - 503 - 6 price : usd 160 . 00 rest of the world : hb : 90 272 5081 2 price : nlg 320 , - - supplement 1995 . 336 pp . + binder us / canada : 1-55619 - 511 - 7 price : usd 97 . 00 rest of the world : 90 272 2157 x price : 194 , - - supplement 1996 . vi , 268 pp . us / canada : 1 55619 512 5 price : usd 79 . 00 rest of the world : 90 272 2158 8 price : nlg 158 , - - supplement 1997 . ca . 320 pp . us / canada : 1 55619 527 3 price : usd 89 . 00 rest of the world : 90 272 2173 1 price : nlg 178 , - - the handbook of pragmatics aims to provide easy access for scholars with widely divergent backgrounds but with convergent interests in the use and functioning of language to the different topics , traditions and methods which together make up the field of pragmatics , broadly conceived as &quot; the cognitive , social and cultural study of language and communication &quot; . the handbook of pragmatics will be an annually updated state-of - the-art publication . the main body of the handbook will be produced in loose-leaf format in a handsome 3 - ring binder and will be accompanied by a bound manual , which will contain all necessary background information and user guidelines . this manual will be the first installment of the handbook . within the subsequent five years , the loose-leaf handbook will form the basis of the handbook proper giving an overview of the sub-fields , traditions , methodologies and concepts of pragmatics . after this phase , the handbook will continue to be expanded , topics will be dealt with in depth and updated annually . the project is thus a unique work of reference that guarantees to be always a state-of - the-art source book for researchers . current issues in relevance theory villy rouchota and andreas h . jucker ( eds ) 1998 . xii , 368 pp . pragmatics &amp; beyond ns 58 us / canada : hb : 1 55619 821 3 price : usd 75 . 00 rest of the world : hb : 90 272 5072 3 price : nlg 150 , - - the eleven original papers collected in this volume address themselves to some of the central issues in the relevance theoretic research programme since the 1995 publication of the second edition of sperber and wilson &#x27;s relevance . communication and cognition . several papers investigate the distinction between conceptual and procedural meaning in order to account for the semantics of discourse connectives , for the role of intonation in utterance interpretation , and for focus phenomena . other papers explore the role of the relevance theoretic notion of metarepresentation in utterance interpretation and prove its usefulness in the study of both linguistic topics such as epistemic modality and conditional clauses , and in the reanalysis of literary issues such as verbal humour . some of the central pragmatic issues dealt with are the interpretation of semantically underdetermined linguistic forms , the role and nature of pragmatic inference , the distinction between truth-conditional and non-truth - conditional meaning and the separation between explicitly and implicitly communicated meaning . the theory &#x27;s application to sociolinguistic topics is assessed and developed in an inspired account of phatic communication ; and the theory &#x27;s usefulness in accounting for certain types of &quot; grammatical &quot; constraints is explored in relation to certain restrictions in the interpretation of indefinite descriptions . contributions by : richard breheny ; carmen curco ; victoria escandell - vidal ; thorstein fretheim ; corinne iten ; manuel leonetti ; eun - ju noh ; anna papafragou ; villy rouchota and andreas h . jucker ; michiko takeuchi ; vladimir zegarac . bernadette martinez - keck tel : ( 215 ) 836-1200 publicity / marketing fax : ( 215 ) 836-1204 john benjamins north america e-mail : bernie @ benjamins . com po box 27519 philadelphia pa 19118-0519 check out the john benjamins web site : http : / / www . benjamins . com
</pre>

## Record 008265

**Label:** `benign`

<pre>
&quot; 100 best companies survey &quot; enron is the . . . v most innovative company in america - five consecutive years v number one energy / commodity house - 2000 v top company for quality of management - 2000 v second best company for employee talent - 2000 and the v number one best place to work in america - 2001 wouldn  , t this be great ! yesterday , 250 of fortune  , s &quot; 100 best companies to work for in america &quot; surveys were mailed to randomly selected u . s . - based employees . please check your home mailbox to see if you were selected to participate in the survey . enron  , s goal is to be in the top 10 on fortune  , s list , up from our current rank of no . 24 on this prestigious list . the feedback you provide in the survey is a key element in the evaluation process . your honest and open responses , as well as written comments about your personal enron experiences , will help enron achieve this goal . thanks for all you do everyday to make enron the best place to work .
</pre>

## Record 008266

**Label:** `benign`

<pre>
book - split update 4 / 25 / 2000 as we are nearing the deadline for the book - split project , i want to give you a status update . book - split completed separate cash &amp; term books have been setup in enpower and global databases for every country pablo pissanetzky has written code to successfully transfer over 99 % of the deals into their proper regional books two dozen deals ( mainly annuities ) have been modified in production to transfer according to pablo &#x27; s code all deals requiring manual intervention on go live date have been identified initial position report has been developed and tested for accuracy uncompleted communication to commercial of positions ( wed . april 26 ) presentation of the position report which allows commercial to view monthly peak / off - peak volumes by region ( wed . april 26 ) pcs by deal for each portfolio separate dprs and associated reports for the pool and bilateral portfolios modifications necessary for the settlements invoicing system transmission we are making progress on this effort although you have not seen any hard evidence . zhiyong wei is the it director in houston who is responsible for enpower development . we are working with pablo and zhiyong on several possibilities . as we have previously discussed , there is not the current capability to value the spreads as options , but we are testing the other scenarios . buy / resale this deal type has been disabled we are waiting for zhiyong &#x27; s response as to its future functionality if any transmission pablo tested in the stage environment today after receiving minor assistance from zhiyong ability to book transmission deal without annuity leg ability to liquidate demand charge daily reflects long and short positions at the appropriate regions ( as forwards not options ) does not value the forward spread between the regional curves ( still testing ) variable cost treatment is still being tested forwards if deep in the money , we could enter intra - desk / inter - desk deals to reflect positions and p &amp; l much time and it development resources have been spent to make use of the transmission functionality . after speaking with zhiyong , there evidently was a big push last year for the mtm of transmission . the latest version has been in the test environment for some time , but no one is currently testing it . it will take some attention to test it properly and will not be complete by the book - split deadline . as we established in our last meeting , the mtm of transmission is a separate project from the book - split . due to the complexity and amount of data involved in the book - split project itself , it is advisable that we incorporate the transmission second . further testing of the transmission will continue this week and by the end of the week we should have a decision on the most effective way to currently book transmission . please call or come by if you have any questions , todd hall
</pre>

## Record 008267

**Label:** `benign`

<pre>
languaging 99 : a conference across literature , linguistics , &amp; writing update : languaging 99 announcing the linguistics plenary speaker : donna jo napoli swarthmore college also , call for last-minute papers : languaging 99 : a conference across literature , linguistics , and writing university of north texas , denton , texas 4 - 6 march 1999 ( see our previous linguist posting for more details ) submission &quot; deadline &quot; : email : beginning of november 1998 linglit @ unt . edu for more information : see our previous linguist post , or to go http : / / www . unt . edu / languaging
</pre>

## Record 008268

**Label:** `benign`

<pre>
re : 8 . 1082 , sum : english adjectives editor &#x27;s note : we received the following correction to 8 . 1082 , english adjectives . &gt; &gt; dear linguists , &gt; &gt; about a week ago i posted the following query . &gt; &gt; &gt; i am working on english adjectives . are the following sentences &gt; &gt; acceptable ? if acceptable , please mark them with a check . &gt; &gt; if not acceptable , please mark them with a cross . if uncertain &gt; &gt; or dubious , please mark them with a question mark . any &gt; &gt; comment is welcome . &gt; &gt; &gt; &gt; ( 1 ) john was careful to lock the door . + &gt; &gt; ( 2 ) john was greedy to keep all the money to himself . + &gt; &gt; ( 3 ) john was worthy to be praised by them all . &gt; &gt; ( 4 ) the place is convenient to visit . &gt; &gt; ( 5 ) john is jealous that she succeeded . &gt; &gt; ( 6 ) john was bored to hear her endless talk . &gt; + &gt; ( 7 ) john was confused to be told to do so many things at once . ? &gt; &gt; ( 8 ) john was hurt to be insulted . &gt; &gt; ( 9 ) i am eager that they should win . &gt; &gt; ( 10 ) john was incredulous that mary put it into practice . &gt; &gt; ( 11 ) mary is keen that we should go . &gt; &gt; ( 12 ) it was heroic of them to oppose the invader + &gt; &gt; ( 13 ) john was irresponsible to sabotage his duties . &gt; &gt; ( 14 ) it is significant that they worked as volunteers . &gt; &gt; ( 15 ) it is sufficient to give him some money . + &gt; ( 16 ) it is not suitable to dress casual at a wedding reception . &gt; sorry , some problems with signs ! + means not acceptable , nothing means acceptable . best , rod .
</pre>

## Record 008269

**Label:** `benign`

<pre>
Clearly, it is US/NATO = Sun/IBM/OSS, USSR = MS&quot;Where we want you to go in our 5 year plan?&quot;sdwTom wrote:&gt;Im feeling a bit farklempt having spent the night at Todais with the
&gt;family so talk amongst yourself..here Ill give you a topic
&gt;
&gt;The current state of IT can be thought of in terms of the Cold war with
&gt;the US and the UUSR being MS and Sun/IBM/OSS (does it matter which side
&gt;is which?), Apple as Cuba and the US legal system as the UN.
&gt;
&gt;Discuss.
&gt;  
&gt;-- 
sdw@lig.net http://sdw.st
Stephen D. Williams 43392 Wayside Cir,Ashburn,VA 20147-4622
703-724-0118W 703-995-0407Fax Dec2001
</pre>

## Record 008270

**Label:** `benign`

<pre>
referral mr . kaminski , i have attached a resume below i thought you might find of interest , it is from a business school acquaintance of mine , denis suvorov . denis is a highly intelligent ph . d . candidate at my former school and is currently looking for opportunities within a research / modelling framework . he has significant academic experience working on asset pricing models and after speaking with pavel zadorozhny about his background and objectives , he recommended i forward a copy of his credentials to you . i hope this is suitable and would be of interest to you . thanks , matthew frank
</pre>

## Record 008271

**Label:** `benign`

<pre>
icla call for papers 4th international cognitive linguistics conference july 17 - july 21 , 1995 , albuquerque , new mexico * aims and scope the international cognitive linguistics conference offers a forum for research within the perspective of cognitive linguistics . this perspective subsumes a number of concerns and broadly compatible theoretical approaches that share a common basis : the idea that language is an integral part of cognition which reflects the interaction of cultural , psychological , communicative , and functional considerations , and which can only be understood in the context of a realistic view of conceptualization and mental processing . topics of interest for cognitive linguistics include the structural characteristics of natural language categorization ( such as prototypicality , metaphor , mental imagery , and cognitive models ) , the functional principles of linguistic organization ( such as iconicity and naturalness ) , the conceptual interface between syntax and semantics , the experiential and pragmatic background of language-in - use , and the relationship between language and thought . in addition , topics of special interest for the 1995 conference include cross-linguistic studies and cognitive linguistic approaches to signed language research . * conference site the 1995 conference will take place on the campus of the university of new mexico ( unm ) in albuquerque . albuquerque lies between the foothills of the sandia mountains ( with peaks of more than 10 , 000 feet ) and the west mesa ( which is dotted with the cinder cones of long-extinct volcanoes ) ; dividing the city is the winding rio grande valley , famous for its bosque nature preserve . at an altitude of roughly 5000 feet , the university campus enjoys warm summer days and cool nights . excursions to nearby pueblos , santa fe , and the sandia mountains are being planned . also taking place at unm during the summer of 1995 is the linguistic society of america &#x27;s biennial linguistic institute . under the direction of joan bybee , li-95 will run for six weeks from late june to early august and will include over 50 courses taught by visiting faculty as well as special lectures . the conceptual structure for li-95 applies cross-linguistic comparison and a functional orientation to the major areas of linguistics and the language emphases of the university of new mexico program : signed languages , spanish , and native american languages . several other conferences are planned to precede and follow the 1995 icla conference . * submission of abstracts authors are requested to submit four copies of a one-page abstract in hardcopy format to the address below . abstracts must be received before november 30 , 1994 . authors will be notified of acceptance or rejection by february 1 , 1995 . sherman wilcox / icla95 department of linguistics university of new mexico albuquerque , nm 87131
</pre>

## Record 008272

**Label:** `benign`

<pre>
promotion sally , i am so excited for you and your promotion . i have had the privilege to see the impact you have made on this organization , and i am very glad to see you get the rewards you well deserve . you simply amaze me , and i have such a tremendous amount of respect for you and your contributions and values . congratulations ! ! ! brenda
</pre>

## Record 008273

**Label:** `benign`

<pre>
germanic linguistics annual conference-5 , 1999 germanic linguistics annual conference-5 ( glac - 5 ) will take place at the university of texas at austin , april 16-18 , 1999 . we invite colleagues at all levels ( faculty and graduate students ) to submit abstracts for 30 - minute papers on any linguistic or philological aspect of any historic or modern germanic language or dialect , including english ( to 1500 ) and the extraterritorial varieties . papers from a range of linguistic subfields , including phonetics , phonology , morphology , syntax , semantics , sociolinguistics , language acquisition , contact , and change , as well as differing theoretical approaches , are especially welcome . please send to the address below a one-page , 12 - point font abstract that is headed only by the title of your paper , as well as a separate 3 &quot; x 5 &quot; index card with your name , institutional affiliation , mailing address , phone / fax numbers , e-mail address , and the title of your paper . submissions must be received by january 2 , 1999 . notifications of acceptance will be sent out by february 1 , 1999 . glac - 5 department of germanic studies e . p . schoch 3 . 102 university of texas at austin austin , texas 78712 for more information , e-mail prof . mark l . louden ( louden @ mail . utexas . edu ) or prof . mark r . v . southern ( m . southern @ mail . utexas . edu ) . as of october 1 , 1998 , you may also consult the glac - 5 website via the ut germanic studies departmental website at www . utexas . edu / depts / german / main . html .
</pre>

## Record 008274

**Label:** `benign`

<pre>
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1At 11:15 AM -0400 on 9/22/02, Geege Schuman wrote:
&gt; Most of them seem to have Ivy League educations, or are Ivy League
&gt; dropouts suggesting to me that they weren&#x27;t exactly poor to start
&gt; with.Actually, if I remember correctly from discussion of the list&#x27;s
composition in Forbes about five or six years ago, the *best* way to
get on the Forbes 400 is to have *no* college at all. Can you say
&quot;Bootstraps&quot;, boys and girls? I knew you could...[Given that an undergraduate liberal arts degree from a state school,
like, say, mine, :-), is nothing but stuff they should have taught
you in a government-run &quot;high&quot; school, you&#x27;ll probably get more of
*those* on the Forbes 400 as well as time goes on. If we ever get
around to having a good old fashioned government-collapsing
transfer-payment depression (an economic version of this summer&#x27;s
government-forest conflagration, caused by the same kind of
innumeracy that not clear-cutting enough forests did out west this
summer :-)) that should motivate more than a few erst-slackers out
there, including me, :-), to learn to actually feed themselves.]
The *next* category on the Forbes 400 list is someone with a
&quot;terminal&quot; professional degree, like an MBA, PhD, MD, etc., from the
best school possible.Why? Because, as of about 1950, the *best* way to get into Harvard,
for instance, is to be *smart*, not rich. Don&#x27;t take my word for it,
ask their admissions office. Look at the admissions stats over the
years for proof.Meritocracy, American Style, was *invented* at the Ivy League after
World War II. Even Stanford got the hint, :-), and, of course,
Chicago taught them all how, right? :-). Practically *nobody* who
goes to a top-20 American institution of higher learning can actually
afford to go there these days. Unless, of course, their parents, who
couldn&#x27;t afford to go there themselves, got terminal degrees in the
last 40 years or so. And their kids *still* had to get the grades,
and &quot;biased&quot; (by intelligence :-)), test scores, to get in.
The bizarre irony is that almost all of those people with &quot;terminal&quot;
degrees, until they actually *own* something and *hire* people, or
learn to *make* something for a living all day on a profit and loss
basis, persist in the practically insane belief, like life after
death, that economics is some kind of zero sum game, that dumb people
who don&#x27;t work hard for it make all the money, and, if someone *is*
smart, works hard, and is rich, then they stole their wealth somehow.BTW, none of you guys out there holding the short end of this
rhetorical stick can blame *me* for the fact that I&#x27;m using it to
beat you severely all over your collective head and shoulders. You
were, apparently, too dumb to grab the right end. *I* went to
Missouri, and *I* don&#x27;t have a degree in anything actually useful,
much less a &quot;terminal&quot; one, which means *I*&#x27;m broker than anyone on
this list -- it&#x27;s just that *you*, of all people, lots with
educations far surpassing my own, should just plain know better. The
facts speak for themselves, if you just open your eyes and *look*.
There are no epicycles, the universe does not orbit the earth, and
economics is not a zero-sum game. The cost of anything, including
ignorance and destitution, is the forgone alternative, in this case,
intelligence and effort.[I will, however, admit to being educated *waay* past my level of
competence, and, by the way *you* discuss economics, so have you,
apparently.]BTW, if we ever actually *had* free markets in this country,
*including* the abolition of redistributive income and death taxes,
all those smart people in the Forbes 400 would have *more* money, and
there would be *more* self-made people on that list. In addition,
most of the people who *inherited* money on the list would have
*much* less of it, not even relatively speaking. Finally, practically
all of that &quot;new&quot; money would have come from economic efficiency and
not &quot;stolen&quot; from someone else, investment bubbles or not.That efficiency is called &quot;progress&quot;, for those of you in The
People&#x27;s Republics of Berkeley or Cambridge. It means more and better
stuff, cheaper, over time -- a terrible, petit-bourgeois concept
apparently not worthy of teaching by the educational elite, or you&#x27;d
know about it by now. In economic terms, it&#x27;s also called an increase
in general welfare, and, no, Virginia, I&#x27;m not talking about
extorting money from someone who works, and giving it to someone who
doesn&#x27;t in order to keep them from working and they can think of some
politician as Santa Claus come election time...
In short, then, economics is not a zero sum game, property is not
theft, the rich don&#x27;t get rich off the backs of the poor, and
redistributionist labor &quot;theory&quot; of value happy horseshit is just
that: horseshit, happy or otherwise.To believe otherwise, is -- quite literally, given the time Marx
wrote Capital and the Manifesto -- romantic nonsense.Cheers,
RAH-----BEGIN PGP SIGNATURE-----
Version: PGP 7.5iQA/AwUBPY511cPxH8jf3ohaEQLAsgCfZhsQMSvUy6GqJ5wgL52DwZKpIhMAnRuR
YYboc+IcylP5TlKL58jpwEfu
=z877
-----END PGP SIGNATURE------- 
-----------------
R. A. Hettinga 
The Internet Bearer Underwriting Corporation 
44 Farquhar Street, Boston, MA 02131 USA
&quot;... however it may deserve respect for its usefulness and antiquity,
[predicting the end of the world] has not been found agreeable to
experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27;

</pre>

## Record 008275

**Label:** `benign`

<pre>
Hi.John Hinsley  wrote:&gt; Querying the rpm database for OpenGL gets me nowhere fast. Can anyone
&gt; point me in the right direction? What, in RedHat, provides OpenGL?The X server itself does (or does not, depending on your driver). There
is a software fallback called Mesa compiled in the X server, which
is used as a fallback. So, if you have installed X, you have OpenGL.
Try the glxinfo command to see the capabilities provided by your
X system.-- 
R!_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008276

**Label:** `benign`

<pre>
pricing needed citgo refinery - corpus ship channel nov 01 - 10 , 000 / d dec 01 - 10 , 000 / d and a nov - dec 01 need el paso / valero numbers like to see crosstex numbers from banquette / tejas sterling chemical - tx city dec 01 - 7 , 000 / d el paso / valero hpl - preferred delivery to balance internal systems tejas i spoke with dan burns at el paso yesterday . he notionally gave me a $ 0 . 04 rate from exxon clear lake or comparable source . seems a bit high . hpl quoted us $ 0 . 025 from katy on the marathon refinery rfp last week but they wanted $ 0 . 25 for swing transport . gary talked to exxon and tejas about sourcing gas into crosstex ( was cc transmission ) at banquette . exxon apparently sells their equity gas at the tailgate of king ranch because of recent changes or elimination of their tejas transportation agreement / s . lets discuss , mk
</pre>

## Record 008277

**Label:** `benign`

<pre>
On Sun, Oct 06, 2002 at 11:10:05PM +0100, Declan de Lacy Murphy wrote:
&gt; I am planning to get i-stream solo and share it across a small network
&gt; (wireless), but I don&#x27;t want to have to pay eircom for a router and having a
&gt; noisy pc running constantly isn&#x27;t really an option because at home
&gt; inevitably someone will unplug it.
&gt; 
&gt; I have been looking at a number of products and although I read the thread
&gt; about eircom needing pppoe last august I am still not sure if the one that I
&gt; am interested in will do the job. It is a hawking technology ar 710
&gt;  http://www.hawkingtech.com/products/ar710.htm ) and if it does the job it
&gt; will actually be cheaper than the modem eircom is selling.
&gt; 
&gt; I would really appreciate if someone could look at the spec on the hawking
&gt; web page and give me an opinion.
&gt; 
&gt; Thanks in advance
&gt; 
&gt; Declan
&gt; I got the DSL-W 906E from http://www.dsl-warehouse.co.uk.Though it&#x27;s not at all the best one around I have to say it does the job
and a bit. Some of the features can be a pain to get working (ie. pptp in
pppoe mode - can&#x27;t figure it out). The documentation is not the best, but
the guys from http://www.dsl-warehouse.co.uk will help you ouit. They
also have a message board.The command line interface is quite powerful, but absolutely not
userfriendly.All in all it&#x27;s a cheap desent performer, that I am happy enough with.
Got this one including a microfilter (not needed) for 140euro including
shipping. Better than any deal from Eircom.-Tor
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008278

**Label:** `benign`

<pre>
Once upon a time, Ben wrote :&gt; I use a mostly Red Hat 8.0 system, but prefer to configure and build my 
&gt; kernel by hand.  I&#x27;d like to humbly offer a tweak to alsa-driver.spec 
&gt; that helps it build cleanly under such circumstances.  I recognize that 
&gt; freshrpms.net packages are designed with standard Red Hat in mind, 
&gt; including a standard kernel RPM.  However, I hope that Matthias will 
&gt; consider the tweak small enough to justify its incorporation.Well, I don&#x27;t really find it consistent at all to use an rpm package built
against something that wasn&#x27;t installed through rpm :-/What I&#x27;d recommend in your case : You should keep at least one original Red
Hat Linux kernel (you do just in case, right? ;-)) and install the matching
alsa-kernel package as you&#x27;ll need at least one because of the
dependencies. Then for your custom built kernel, simply &quot;./configure
--with-cards=all &amp;&amp; make &amp;&amp; make install DESTDIR=/tmp/alsa-driver&quot; from the
alsa-driver sources then as root copy all the modules under
/tmp/alsa-driver/lib/modules/ to your modules dir and run &quot;depmod -a&quot;.Of course you can even make it much faster by not compiling all un-needed
drivers, as I guess that&#x27;s one of the reasons one would rebuild his own
kernel.I find this the easiest and cleanest way to get around the problem. It&#x27;s
what I&#x27;ve done and what I&#x27;ll keep doing on my laptop where I&#x27;m running a
kernel recompiled with ACPI.Matthias-- 
Clean custom Red Hat Linux rpm packages : http://freshrpms.net/
Red Hat Linux release 7.3 (Valhalla) running Linux kernel 2.4.18-10acpi
Load : 0.00 0.02 0.00_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008279

**Label:** `benign`

<pre>
management committee listing i plan to distribute at the beginning of each month . please let me know if you have any changes . note : greg whalley will be located at eb 3324 and liz taylor at eb 3322 until september 24 . thanks , joannie 3 - 1769
</pre>

## Record 008280

**Label:** `benign`

<pre>
On Fri, Feb 01, 2002 at 05:41:32PM +0200, Harri Haataja wrote:
&gt; I have a local one for the main and upgrades from somewhere plus my own
&gt; at $ORKPLACE.Olen ajatellut pystyttÃ¤Ã¤ itselleni lokaalin apt-varaston, kun Suomesta ei 
tunnu lÃ¶ytyvÃ¤n julkista peiliÃ¤. Osaisitko avittaa hiukan asiassa, eli 
kuinka lÃ¤hteÃ¤ liikkeelle? Ensin kannattanee peilata varsinainen RH:n rpm:t 
jostain, vaan millÃ¤ softalla (rsync?) ja mistÃ¤ (funet?) tuo kannattaa 
tehdÃ¤, ajatuksia?-- 
Peter
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008281

**Label:** `benign`

<pre>
start date : 1 / 10 / 02 ; hourahead hour : 3 ; start date : 1 / 10 / 02 ; hourahead hour : 3 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002011003 . txt
</pre>

## Record 008282

**Label:** `benign`

<pre>
re : dave samuels louise thanks for the note about dave . i do not know dave but will probably pay him a visit in boston to see what we might do with them . acitivity out of their northeast office has primarily been on the nat gas side , but with their recent acquistion of central hudson &#x27; s generation assets in ny they have been getting more active in power . i have been meaning to swing by and introduce myself on one of my trips to houston , and will be sure to do so on the next trip . regards john louise kitchen @ ect 04 / 27 / 2001 08 : 33 am to : john llodra / corp / enron @ enron cc : subject : dave samuels just in case you meet him - there is a guy who left enron yesterday to join dynegy in boston . dave has been with enron since 1996 ( i think ) , joining as an associate and leaving as a vp . dave wanted to relocate back to the north east . i &#x27; ve worked with dave for about 4 years and he a very straightforward guy , i have no idea how much we do with dynegy but dave may be a good contact for you . regards louise
</pre>

## Record 008283

**Label:** `benign`

<pre>
Short version:
T-Mobile Broadband is in the process of wiring every starbucks in the area
(T1 backhauled to some ~local POP + 802.11) as part of what I&#x27;m told is a
national rollout. The Diesel is close enough to the Elm St starbucks for me
to get reasonable net throughout most of the cafe. The rumor is that they&#x27;ll be announcing that they&#x27;ve got boston covered on
the 21st.  I&#x27;ve heard from at least one source that they&#x27;re actually going
to announce a much wider national rollout at that time.  It&#x27;s not cheap [1], but
for soemone like me who&#x27;s running a ~virtual corporation, it&#x27;s well worth it.[1] https://accounts.tmobilebroadband.com/net_offers_promos.htmOn Thu, Aug 15, 2002 at 04:51:07PM -0400, Luis Villa wrote:
&gt; On Thu, 2002-08-15 at 16:38, Jesse wrote:
&gt; &gt; Strata just walked up to me in a cafe in Somerville, MA and
&gt; &gt; asked me how I was getting net here. And _then_ we figured out 
&gt; &gt; that we have shared context.
&gt; 
&gt; The obvious followup is &#x27;there&#x27;s a cafe in somerville with net access?&#x27;
&gt; Luis [19 Pitman St.]
&gt; http://xent.com/mailman/listinfo/fork
&gt; -- 
jesse reed vincent -- root@eruditorum.org -- jesse@fsck.com 
70EBAC90: 2A07 FC22 7DB4 42C1 9D71 0108 41A3 3FB3 70EB AC90autoconf is your friend until it mysteriously stops working, at which 
point it is a snarling wolverine attached to your genitals by its teeth
 (that said, it&#x27;s better than most of the alternatives)  -- Nathan Mehl
http://xent.com/mailman/listinfo/fork
</pre>

## Record 008284

**Label:** `benign`

<pre>
german text corpora / noun taxonomy dear linguists , i am looking for german text corpora , particularly corpora that contain parsed ( or at least partially parsed ) sentences . i am also looking for databases containing information about synonymy and hyponymy relations between german nouns or other information which could be usefull to build a classification taxonomy for german nouns . thank you for help . andreas wagner
</pre>

## Record 008285

**Label:** `benign`

<pre>
3 : 30 pm trade counts trade date na gas na power total trade cnt 11 / 26 / 2001 2093 655 3547 11 / 25 / 2001 14 22 36 11 / 24 / 2001 48 16 64 11 / 23 / 2001 17 38 376 11 / 22 / 2001 27 8 318 11 / 21 / 2001 2326 712 3540 11 / 20 / 2001 3393 689 4810 11 / 19 / 2001 3604 1047 5533 11 / 18 / 2001 54 15 69 11 / 17 / 2001 24 28 52 11 / 16 / 2001 2626 909 4791 11 / 15 / 2001 2838 1092 5136 11 / 14 / 2001 2553 865 5209 11 / 13 / 2001 2312 930 4791 11 / 12 / 2001 2609 833 4762 11 / 11 / 2001 26 10 37 11 / 10 / 2001 13 17 30 11 / 9 / 2001 1834 782 3654 11 / 8 / 2001 2376 937 4379 11 / 7 / 2001 3497 1542 6034 11 / 6 / 2001 3783 1547 6222 11 / 5 / 2001 3960 1581 6444 11 / 4 / 2001 25 10 36 11 / 3 / 2001 26 32 58 11 / 2 / 2001 3780 1199 5836 11 / 1 / 2001 3973 1493 6539 regional breakdown :
</pre>

## Record 008286

**Label:** `benign`

<pre>

[I&#x27;m sure somebody will tell me about the original source; it&#x27;s in a
number of places on the web. -gkm]Forwarded-by: Colin Burgess The Beer Scooter How many times have you woken up in the morning after a hard night
drinking and thought &#x27;How on earth did I get home? As hard as you
try, you cannot piece together your return journey from the pub to
your house. The answer to this puzzle is that you used a Beer
Scooter.The Beer Scooter is a mythical form of transport, owned and leased
to the drunk by Bacchus the Roman god of wine. Bacchus has branched
out since the decrease in the worship of the Roman Pantheon and
has bought a large batch of these magical devices. The Beer Scooter
works in the following fashion:-The passenger reaches a certain level of drunkenness and the
&quot;slurring gland&quot; begins to give off a pheromone. Bacchus or one of
his many sub-contractors detects this pheromone and sends down a
winged Beer Scooter. The scooter scoops up the passenger and deposits
them in their bedroom via the Trans-Dimensional Portal. This is
not cheap to run, so a large portion of the passenger&#x27;s in-pocket
cash is taken as payment.This answers the second question after a night out &#x27;How did I spend
so much money?&#x27;Unfortunately, Beer Scooters have a poor safety record and are
thought to be responsible for over 90% of all UDI (Unidentified
Drinking Injuries).  An undocumented feature of the beer scooter
is the destruction of time segments during the trip. The nature of
Trans-Dimensional Portals dictates that time will be lost, seemingly
unaccounted for.This answers a third question after a night out &#x27;What the hell
happened?&#x27;With good intentions, Bacchus opted for the REMIT (Removal of
Embarrassing Moments In Time) add on, that automatically removes,
in descending order, those parts in time regretted most. Unfortunately
one person&#x27;s REMIT is not necessarily the REMIT of another and
quite often lost time is regained in discussions over a period of
time. Independent studies have also shown that Beer Goggles often
cause the scooter&#x27;s navigation system to malfunction thus sending
the passenger to the wrong bedroom, often with horrific consequences.
With recent models including a GPS, Bacchus made an investment in
a scooter drive-thru chain specialising in half eaten kebabs and
pizza crusts.Another question answered!! For the family man, Beer Scooters come
equipped with flowers picked from other people&#x27;s garden and
Thump-A-Lot boots (Patent Pending). These boots are designed in
such a way that no matter how quietly you tip-toe up the stairs,
you are sure to wake up your other half. Special anti-gravity
springs ensure that you bump into every wall in the house and the
CTSGS (Coffee Table Seeking Guidance System) explains the bruised
shins. The final add-on Bacchus saw fit to invest in for some
scooters is the TAS (Tobacco Absorption System). This explains how
one person can apparently get through 260 Marlboro Lights in a
single night.PS: Don&#x27;t forget the on-board heater, which allows you to comfortably
get home from the pub in sub-zero temperatures, wearing just a
T-shirt.

</pre>

## Record 008287

**Label:** `benign`

<pre>
The following was personal correspondence between two people.  I can&#x27;t
fathom how Razor thinks it is spam:&gt;
&gt; We are struggling with the decisions related to wether or not to
&gt; go ahead with our plans to purchase an OCR and forms
&gt; scanning solution.
&gt;
&gt; An outside consultant mentioned that he had heard that not to
&gt; long ago you folks were considering implementing OCR
&gt; technology to reduce data entry costs and improve efficiency.
&gt; If you could let us know if you did move foreward with any
&gt; plans in that direction it would be of great help to us. May I ask
&gt; what initialy prompted you to consider OCR? Did you decide it
&gt; could help your compamy? What software did you go with?
&gt; Would you recomend we take a look at it?
&gt; At present we are still planning to continue our research until
&gt; we decide which OCR system best suits our needs, then
&gt; implement it quickly.
&gt;
&gt; If you are just starting to consider this
&gt; technology feel free to stay in touch. We will let you know what
&gt; we decide on and if it works for us.
&gt;
&gt; If you cannot advise on this please forward this E-mail to the
&gt; proper individual in your company who might be able to help with
&gt; this.
&gt; Thanks,
&gt; Jay
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 008288

**Label:** `benign`

<pre>
linux - - hit or miss ? network world fusion focus : phil hochmuth on linux today &#x27; s focus : will linux be a hit or miss on the corporate desktop ? 03 / 15 / 00 dear wincenty kaminski , today &#x27; s focus : will linux be a hit or miss on the corporate desktop ? by phil hochmuth so far this year , the buzz about linux in enterprise networks has focused on servers and embedded systems , with the growth of linux severs being most heralded . according to idc , a research firm based in framingham , mass . , linux was the fastest - growing server operating system last year , with a 93 % growth rate over the year before . linux was the second most - shipped operating system in 1999 after windows nt , capturing 24 % of new licenses shipped . as for the embedded market , linux has emerged as an ideal platform for network appliances , because the system can be modified to handle specialized , dedicated tasks very well . companies such as cobalt networks , picazo and progressive systems have announced linux - based appliances , ranging from web servers to pbxs to firewalls . but what of the open source hacker  , s dream of  &amp; linux on every desktop ?  8 sure , linux on the desktop has become more accessible than ever , with colorful , shrink - wrapped boxes of caldera , red hat and corel linux now available at places like compusa . however , analysts have said that linux  , s growth in the enterprise will be limited to the macro and micro areas of network servers and embedded operating systems . according to idc , linux currently runs on only 4 % of u . s . desktops . the hold microsoft windows has on the desktop market will remain strong , analysts say , despite such factors as microsoft  , s antitrust problems and the surging popularity of linux . even some linux executives are skeptical of their product  , s desktop future . recently , suse ceo roland dyroff downplayed linux  , s future on desktops . dyroff said ,  &amp; given the lack of applications available , we really can &#x27; t claim it as being competitive on the desktop yet .  8 a recent survey by survey . com gives more hope for linux desktops . according to the survey of 1 , 640 enterprise network managers , open source operating systems are used on 10 % of desktops , with the number jumping to a surprising 23 % of enterprise desktops by 2002 . despite the mix of numbers being thrown around , two important factors that will determine the success of linux as an enterprise client desktop are : a standardized , easy - to - use graphical user interface ( gui ) and available applications . one company that is working to make linux more user friendly is palo alto - based eazel , which is designing a next - generation file management system and user interface to run on top of the linux kernel . according to eazel  , s web site , the company  , s goal is to bring linux to the masses and  &amp; do it in a way that appeals to today &#x27; s linux users and to mere mortals .  8 the company was founded by a group of former apple executives , and is allied with the gnome project , which has been doing extensive linux desktop environment development for several years . eazel is due to have a product out by the middle of this year . with an intuitive , icon - based file management environment , eazel is hoping its user interface will be an improvement over the two current linux guis , gnome and kde , and will help standardized the look and feel of linux for  &amp; regular  8 users . for enterprise mangers who have already embraced linux on the server side , this development will be worth keeping an eye on . on the applications side , several office productivity suites have been available for some time , such as sun  , s staroffice suite and koffice for the kde desktop . corel has also ported its office products , such as wordperfect , over to linux to complement its own distribution of the operating system . while there have been recent rumors ( started by linux care vice president arthur tyde ) that microsoft is working on a port of ms office to linux , microsoft officials deny this . while linux may never supplant windows as the industry - standard desktop , there should be plenty of opportunity for linux pcs in enterprise nets in the future . to contact phil hochmuth : - - - - - - - - - - - - - - - - - - - - - - - - - phil hochmuth is a writer and researcher for network world , and a former systems integrator . you can reach him at mailto : phochmut @ nww . com . for related links - - click here for network world &#x27; s home page : http : / / www . nwfusion . com staroffice software from sun http : / / www . sun . com / staroffice corel linux os http : / / www . corel . com / freedom / freedom . htm eazel http : / / www . eazel . com gnome - - the gnu network object model environment http : / / www . gnome . org koffice - - the integrated office suite for kde , the k desktop environment http : / / koffice . kde . org / cobalt networks , inc . http : / / www . cobaltnetworks . com progressive systems http : / / www . progressive - systems . com picazo http : / / www . picazo . com other linux - related articles from network world : active directory upgrade requires strong game plan , network world , 03 / 13 / 00 subscription services to subscribe or unsubscribe to any network world e - mail newsletters , go to : to change your email address , go to : subscription questions ? contact customer service by replying to this message . other questions / comments have editorial comments ? write jeff caruso , newsletter editor , at : mailto : jcaruso @ nww . com for advertising information , write jamie kalbach , account executive , at : mailto : jkalbach @ nww . com network world fusion is part of idg . net , the idg online network . it all starts here : http : / / www . idg . com copyright network world , inc . , 2000
</pre>

## Record 008289

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;SM&quot; == Skip Montanaro  writes:  Jeremy&gt; Put another way, I&#x27;d be interested to hear why you don&#x27;t
  Jeremy&gt; want to use ZODB.  SM&gt; Disclaimer: I&#x27;m not saying I don&#x27;t want to use ZODB.  I&#x27;m
  SM&gt; offering some reasons why it might not be everyone&#x27;s obvious
  SM&gt; choice.But you&#x27;re not saying you do want to use ZODB, so you&#x27;re still part of
the problem .  SM&gt; For most of us who have *any* experience with ZODB it&#x27;s probably
  SM&gt; all indirect via Zope, so there are probably some inaccurate
  SM&gt; perceptions about it.  These thoughts that have come to my mind
  SM&gt; at one time or another:  SM&gt; * How could a database from a company (Zope) whose sole business
  SM&gt;       is not databases be more reliable than a database from
  SM&gt;       organizations whose sole raison d&#x27;etre is databases
  SM&gt;       (Sleepycat, Postgres, MySQL, ...)?I don&#x27;t think I could argue that ZODB is more reliable that
BerkeleyDB.  It&#x27;s true that we have fewer database experts and expend
fewer resources working on database reliability.  On the other hand,
Barry is nearly finished with a BerkeleyDB-based storage for ZODB.ZODB is an object persistence tool that uses a database behind it.
You can use our FileStorage or you can use someone else&#x27;s database,
although BerkeleyDB is the best we can offer at the moment.  (It would
be really cool to do a Postgres storage...)  SM&gt; * Dealing with Zope&#x27;s monolithic system is frustrating to people
  SM&gt;       (like me) who are used to having files reside in
  SM&gt;       filesystems.  Some of that frustration probably carries
  SM&gt;       over to ZODB, though it&#x27;s almost certainly not ZODB&#x27;s
  SM&gt;       problem.
This sounds like a Zope complaint that doesn&#x27;t have anything to do
with ZODB, but maybe I misunderstand you.  You don&#x27;t have to store
your code in the database, although that will be mostly possible in
ZODB4.Seriously, ZODB stores object pickles in a database.  The storage
layer is free to manage those pickles however it likes.  FileStorage
uses a single file.  Toby Dickenson&#x27;s DirectoryStorage represents each
pickle as a separate file.  SM&gt; * It seems to grow without bound, else why do I need to pack my
  SM&gt;       Data.fs file every now and then?It grows without bound unless you pack it.  Why is that a problem? 
BerkeleyDB log files grow without bound, too.  Databases require some
tending.  One possibility with FileStorage is to add an explicit
pack() call to update training operation.  We&#x27;d need to think
carefully about the performance impact.  SM&gt; Also, there is the issue of availability.  While it&#x27;s just an
  SM&gt; extra install, its use requires more than the usual Python
  SM&gt; install.  Having it in the core distribution would provide
  SM&gt; stronger assurances that it runs wherever Python runs (e.g.,
  SM&gt; does it run on MacOS 8 or 9, both of which I believe Jack still
  SM&gt; supports with his Mac installer?).I think we&#x27;d want a spambayes installer that packaged up spambayes,
python, and zodb.Jeremy
_______________________________________________
Spambayes mailing list
Spambayes@python.org
http://mail.python.org/mailman/listinfo/spambayes

</pre>

## Record 008290

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8412058,1717/
Date: 2002-09-30T23:25:22+01:00[IMG: http://www.newsisfree.com/Images/fark/local6.gif ([Local6])]

</pre>

## Record 008291

**Label:** `benign`

<pre>
enron / hpl nom for october 28 , 2000 ( see attached file : hplnl 028 . xls ) - hplnl 028 . xls
</pre>

## Record 008292

**Label:** `benign`

<pre>
e-mail citation summary about a week ago i posted a query asking how to cite e-mail messages . i &#x27;d like to thank the following people for their prompt and informative responses : david stampe joseph tomei meg gam bert peters alfred rosa bparker ( only e-mail address given ) f . gladney marty jacobsen elizabeth m . bergman dorine houston susan fagyal debra hardison several style manuals were recommended . the latest editions of the mla , apa and chicago all make reference to electronic sources . xai li and nancy b . crane &#x27;s book electronic style was recommended by several people . the publisher ( ? ) allyn &amp; bacon is also making a style guide available . three electronic guides were also recommended ; the faq file of the group &quot; alt . usage . english &quot; available from &quot; misreal @ scripps . edu &quot; , a file on the tesl - l mailing list and a previous posting to linguist list vol 6-210 mon 13 feb 1995 . i have a copy of this last source which i am willing to forward to anyone interested ( note this message also explains how to get the tesl list ) . besides giving me references , many of those responding cautioned me to get the permission of my sources before citing them . there are at least two reasons for this ; first many people respond to queries off the top of their heads without double checking their facts and second while willing to respond to one query many people may not want to set themselves as a source to be consulted by anyone doing research on the subject in question . in most situations , i have come to the conclusion that personal e-mail should be cited as personal communications , which is enough to indicate that the information is not original to the author without making any promises that the source will act as a reference . ( co - incidentally this is the solution suggested by about half of my respondents ) . however a posting to a list ( like this summary ) which is available to anyone and which can be accessed without contacting the author directly should be cited according to the style guide of your choice or in such a way that it can be easily found . heather anderson hmanders @ indiana . edu
</pre>

## Record 008293

**Label:** `benign`

<pre>
url for iulc publications on www the publications list of the indiana university linguistics club is now available on-line as a world wide web page . it can be reached at the following url : http : / / ezinfo . ucs . indiana . edu / ~ iulc / there are two sections : summary of new titles and the publications list . important note : orders * cannot * be placed through www at this time . prepaid orders ( money order or check drawn on a u . s . bank ) are accepted by regular mail . thank you .
</pre>

## Record 008294

**Label:** `benign`

<pre>
&lt;!--
 body      { BACKGROUND-IMAGE: url(http://images.lockergnome.com/images/issue/top-right.gif); color: #331F30 }
 a:link    { COLOR: #331F30; TEXT-DECORATION: underline; font-weight: normal }
 a:visited { COLOR: #331F30; TEXT-DECORATION: underline; font-weight: normal }
 a:active  { COLOR: GRAY; text-decoration: none }
 a:hover   { color: GRAY; TEXT-DECORATION: none }
 p.title   { BACKGROUND: #C69EBF; BORDER-BOTTOM: #4F2F4A 4px solid; BORDER-LEFT: #E7D5E4 4px solid; BORDER-RIGHT: #4F2F4A 4px solid; BORDER-TOP: #E7D5E4 4px solid; COLOR: #331F30; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 14pt; FONT-WEIGHT: normal }
 p.sidebar { BACKGROUND: #E7D5E4; BORDER-BOTTOM: #C69EBF 3px solid; BORDER-LEFT: #FFFFFF 3px solid; BORDER-RIGHT: #C69EBF 3px solid; BORDER-TOP: #FFFFFF 3px solid; COLOR: #331F30; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 10pt; FONT-WEIGHT: bold; TEXT-ALIGN: center } 
 .url      { font-size: 8pt; font-family: Verdana, Tahoma, Arial }
--&gt;
20020715 Lockergnome Tech SpecialistÂ  07.15.2002 GnomeREPORT 
Hackers and crackers respect only one thing: strong security. 
Keep the bad guys
out of your PC or network with the advanced technology that&#x27;s trusted by millions: 
ZoneAlarm Pro 3.0. This best-in-class personal firewall stops hackers cold, defends
your online privacy,and sets up in minutes. 
Click here to download now!   As if there weren&#x27;t enough hypocrisy and misinformation 
being spewed by marketing and sales departments. This time, 
a startling revelation that Microsoft refuses 
to use their own ISA Server to protect themselves from the 
very things the product is meant to stop - worms and 
intrusion. Nimda was turned loose within Microsoft and 
they&#x27;ve chosen NetScreen&#x27;s 500 series security appliance to 
cure what ills them. I find this staggeringly hilarious, to 
say the least. The move is tantamount to Intel deploying 
desktops based on AMD processors!Ok, so a hardware solution might be better than a 
software defense in many cases. I suppose we can&#x27;t entirely 
blame Microsoft for opting to go that route. Probably a wise 
decision, in fact - admit defeat and move on. However, why 
is Nimda spreading within the corporate walls to the point 
that they felt the needed to make such a leap in the first 
place? After all, patches were released months ago, so IIS 
is impervious to attack now. Still considering the 
deployment of IIS as your web server platform of choice? 
Things that make you go hmmmm...
See You in August,Â Â Â Â Â Â Â Â Â Â Â Â Â Â Randy NielandÂ Â Â Â Â Â Â Â GnomeNETWORK
SQL Server Install Leaves Passwords Behind
http://www.microsoft.com/technet/security/bulletin/MS02-035.asp
During the installation of SQL Server 7.0 or 2000, 
various bits of configuration information are stored in a 
setup.iss file, including account passwords that have been 
captured in order to configure the services. Prior to 
certain service packs, these passwords are stored as clear 
text, which is problematic because the file is left on the 
hard drive after the installation process is completed. 
Peruse the details of the bulletin to be sure you&#x27;ve cleaned 
up any relevant bits and pieces applicable to your 
environment.
SQL Server Cumulative Patch
http://www.microsoft.com/technet/security/bulletin/MS02-034.asp
A new roll-up patch is available for SQL Server that takes 
care of all previous security issues, plus a trio of new 
items. Two buffer overrun vulnerabilities exist that could 
allow an attacker to gain control over the server, and a 
different privilege elevation flaw can be exploited due to 
improper permissions within the registry. All three are 
spackled over by the latest cumulative patch described 
further in this bulletin.
Â GnomeSYSTEM
Win2K Memory Allocation Adjustments
Unearthed by Wayne Clarkhttp://searchwin2000.techtarget.com/tip/0,289483,sid1_gci835208,00.html
Most Windows 2000 servers tune themselves fairly well and 
do not need further tweaking. In those cases, it&#x27;s best to 
just leave things alone unless you specifically identify a 
problem somewhere. Serdar Yegulalp has an excellent 
explanation of one particular situation where memory pools 
can be exhausted and crash the server. Before you go diving 
into the registry to play with the knobs and buttons, be 
certain you know what you&#x27;re messing with or you could just 
make things worse. Backups, backups, backups.
Â GnomeALERTZ
Today&#x27;s Top 5 kbAlertzQ325582 - FIX: Output Data Overwritten When Input Data Is Larger than Destination Field (Q325582)
Q305356 - Windows XP Prompts You to Re-activate After You Restore Your Computer (Q305356)
Q304622 - CAPS LOCK Key Behavior with 16-Bit VDM Is Incorrect for French MultiLanguage Versions of Windows (Q304622)
Q235063 - Error C00D0035 Using Windows Media Player (Q235063)
Q277843 - FIX: Restore of Log in Standby Mode May Cause 9004 Error Message if the Original Database has Shrink Enabled (Q277843)GET WINDOWS XP TIPS: Months after the release of Windows XP Professional and Home editions, people are still learning the nuances of Microsoft&#x27;s newest operating system. Whether you&#x27;ve been using it for a while or are planning to upgrade to the new OS soon, this ebook is right up your alley. 
GET YOUR COPY 
of Lockergnome&#x27;s Top 50 Windows XP tips now!    
Recommend It!
Â GnomeASSISTANT
Sorting IP Addresses Via Script
http://www.i386.com/Default.asp?page=docs/scripting-ip2long.htm&amp;category=admin&amp;id=1046
Documentation is everything. If you have a handle on your 
network configuration, it&#x27;s much easier to manage. IP 
addresses are one bit of information that must be properly 
tracked, but often it&#x27;s a manual effort to enter and sort 
data. Using the script techniques provided in this brief 
article, you can convert an address to a 32-bit number, 
perform the sort, then convert back to the standard dotted 
decimal format. An Excel sample spreadsheet is also provided 
to get you started.
Â GnomeSTUFF
Broadband Sharing Crackdown
http://news.com.com/2100-1033-942323.html
Those of us with wireless networking equipment might be 
tempted to allow the neighbors to share the wealth, but be 
careful. Broadband companies are catching on and putting a 
stop to the practice. What&#x27;s concerning to me is that I 
don&#x27;t share my wireless network, but I do use quite a few 
different machines at any given time. If someone is snooping 
around and seeing a lot of different sessions and gets 
curious, might I be subject to a teeth-kicking?Virtual Sketching
Discovered by Dianahttp://members.bellatlantic.net/~vze2mfh8/
I believe I still have an old Etch-A-Sketch in a box 
somewhere. Maybe I should dig it back out and webify the 
thing just for grins. Check out this example of novelty web 
programming, assuming y&#x27;all don&#x27;t kill the site. If it&#x27;s 
down, check back later. Using a web form, you can enter the 
moves you&#x27;d like to see represented on the pad, which is 
viewed through a live webcam. I&#x27;d love to see someone craft 
the Lockergnome logo. Impress me...
Recommend It!http://www.lockergnome.com/issues/techspecialist/20020715.html
Your subscribed e-mail address is: [qqqqqqqqqq-lg@spamassassin.taint.org] - To unsubscribe or change your delivery address, please visit the subscription management page. For further information, please refer to the GnomeCREDITS in the sidebar.LOOK OVER HEREÂ Download Tip eBooksÂ Latest Windows Daily
Â Latest Digital Media
Â Latest Tech Specialist
Â Latest Penguin Shell
Â Latest Apple Core
Â Latest Web Weekly
Â Latest Bits &amp; Bytes
Â Latest Audio ShowÂ Low Price Search
Â Our Tech ConferenceÂ Microsoft Office Tips
Â PC Productivity Tips
Â Cool Internet Tips
Â Windows 2000 Tips
Â Windows XP TipsÂ Tell a Friend About Us!
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
Â Get Chris&#x27;s Book
Â E-mail a Suggestion
Â Your Rant / Rave
Â General Feedback
Â The Editor&#x27;s Blog
Â E-mail the Editor
Â SOUND SYSTEMS
Yamaha RX-V1200
Sony DAVC900
Harman Kardon	AVR520
Denon	AVR5803
Pioneer VSXD811S
Pioneer Elite	VSX49TX
Sony HTDDW840
Yamaha HTR5560
BOSE LS122BK
Sony DAVC450Â GNOMESPECIALS
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
Â 
CLICK HERE TO ZOOMÂ 
LOOK IT UPÂ 
BYTE ME NOWÂ©2002, Lockergnome LLC. ISSN: 1095-3965. All Rights Reserved. Please read our Terms of Service. Our Web site is hosted by DigitalDaze. Domain registered at DNS Central.
</pre>

## Record 008295

**Label:** `benign`

<pre>
[branching the thread, here]    I found another Ximian repository- I don&#x27;t know if it works yet...rpm     http://gstreamer.net/releases/redhat/ redhat-73-i386 deps
rpm-src http://gstreamer.net/releases/redhat/ redhat-73-i386 depsrpm     http://gstreamer.net/releases/redhat/ redhat-73-i386 deps ximian
rpm-src http://gstreamer.net/releases/redhat/ redhat-73-i386 deps ximianrpm     http://gstreamer.net/releases/redhat/ redhat-73-i386 deps gnomehide
rpm-src http://gstreamer.net/releases/redhat/ redhat-73-i386 deps gnomehide    These guys are EXTREMELY apt-friendly.  Unlike most multimedia projects, they seem to prefer RPM/Apt over the older methods.  Isn&#x27;t that cool?    Hey- how would I have known to &quot;apt-get install gnome-session&quot; to kick all this off?------------------------------------------------------------------------
Brian FahrlÃ¤nder              Linux Zealot, Conservative, and Technomad
Evansville, IN                    My Voyage: http://www.CounterMoon.com
ICQ  5119262
------------------------------------------------------------------------
I don&#x27;t want to hear news from Isreal until the news contains the words
&quot;Bullet&quot;, &quot;Brain&quot;, and &quot;Arafat&quot;._______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008296

**Label:** `benign`

<pre>
re : elpaso / tw eddy poi 78093 - drn the drn number assigned is : 291037 . sorry i left that off the first notice . kb karen brostad 01 / 19 / 2001 08 : 26 am to : linda trevino / et &amp; s / enron @ enron , perry frazier / et &amp; s / enron @ enron , james moore / et &amp; s / enron @ enron , john buchanan / et &amp; s / enron @ enron , dennis lee / et &amp; s / enron @ enron , darrell schoolcraft / et &amp; s / enron @ enron , gary spraggins / et &amp; s / enron @ enron , linda ward / et &amp; s / enron @ enron , beverly miller / et &amp; s / enron @ enron , cynthia rivers / et &amp; s / enron @ enron , sigrid macpherson / gpgfin / enron @ enron , terry kowalke / et &amp; s / enron @ enron , albert hernandez / et &amp; s / enron @ enron , dale eldridge / et &amp; s / enron @ enron , amy mulligan / et &amp; s / enron @ enron , vernon mercaldo / et &amp; s / enron @ enron , donald vignaroli / et &amp; s / enron @ enron , bret fritch / et &amp; s / enron @ enron , gale ramsaran / et &amp; s / enron @ enron , michelle lokay / et &amp; s / enron @ enron , tammy jaquet / et &amp; s / enron @ enron , mary draemer / et &amp; s / enron @ enron , james studebaker / fgt / enron @ enron , lorraine lindberg / et &amp; s / enron @ enron , jeffery fawcett / et &amp; s / enron @ enron , martha cormier / et &amp; s / enron @ enron cc : subject : elpaso / tw eddy poi 78093 please be advised the following point has been set up on transwestern pipeline . name : el paso / tw eddy rec type : pdc direction receipt to tw location sec 17 , tl 9 s , r 31 e , eddy co , nm added to templates : all reciepts firm alt receipts east of thoreau receipts effective date 1 / 1 / 9 / 01 . michele ( cormier ) please add to oba for el paso field services . thanks karen brostad
</pre>

## Record 008297

**Label:** `benign`

<pre>
URL: http://www.askbjoernhansen.com/archives/2002/09/12.html
Date: 2002-09-12T23:03:40-08:00If you&#x27;ve been in Los Angeles for long enough to read this sentence, chances 
are you&#x27;ve spent more time stuck in traffic than you would care to consider. 
That annoying fact of Southern California life is only going to become more 
annoying and more of a factor with time, which is the point of &quot;Car Trek,&quot; 
tonight&#x27;s edition of &quot;By the Year 2000&quot; at 7:30 on KCET (Channel 28) [which] 
also looks at the phenomena of &quot;carcooning&quot; in which...

</pre>

## Record 008298

**Label:** `benign`

<pre>
monitor your monitor is ready , please make out a check to enron for $ 10 . you can pick it up in the it office . let me know if you need any help , chip
</pre>

## Record 008299

**Label:** `benign`

<pre>
re : managing energy price risk - 2 nd edition janette , thanks . vince kaminski enron corp . 1400 smith street , room 1962 houston , tx 77251 - 1188 phone : ( 713 ) 853 3848 fax : ( 713 ) 646 2599 e - mail : vkamins @ enron . com vince &quot; janette jagernauth &quot; on 01 / 06 / 2000 05 : 49 : 27 am please respond to &quot; janette jagernauth &quot; to : vince j kaminski / hou / ect @ ect cc : subject : managing energy price risk - 2 nd edition dear mr kaminski , i do hope that you had a pleasant christmas and new year , like ourselves at risk . i am currently producing the author cards which you discussed with my manager , paula soutinho , and would like to know where you would like them delivered to . i have ordered a quantity of 200 which i hope is to your satisfaction . if you have any queries please do not hesitate in contacting either myself or paula , kind regards janette jagernauth marketing assistant - risk books - attl . htm
</pre>

## Record 008300

**Label:** `benign`

<pre>
arabic linguistics socitey program the arabic linguistics society together with the university of illinois at champaign - urbana announce the twelfth annual symposium on arabic linguistics march 6 - 8 , 1998 friday , march 6 morning session 8 : 30 - 8 : 45 registration 8 : 45 - 9 : 00 welcoming remarks 9 : 00 - 9 : 30 hypocoristic formation in ammani - jordanian arabic bushra zawaydeh and stuart davis , indiana university 9 : 30 - 10 : 00 an acoustic - articulatory study of uvularization khalil iskarous , university of illinois 10 : 00-10 : 30 the phonology of emphasis and timbre in moroccan arabic mostafa shoul , mohammed i university 10 : 30-11 : 00 the spreading effect of emphatic consonants on long vowels in modern standard arabic ahmed alioua , universit cadi ayyad 11 : 00-11 : 15 coffee 11 : 15-12 : 15 modes of interrogation guest speaker : joseph aoun university of southern california afternoon session 2 : 00 - 2 : 30 checking and licensing inside dp in arabic m . a . mohammad , university of florida 2 : 30 - 3 : 00 dialect variation in arabic : the case of tetuani arabic and spanish arabic jamal ouhalla , university of london 3 : 00 - 3 : 15 coffee 3 : 15 - 3 : 45 free relatives in lebanese arabic lina choueiri , university of southern california 3 : 45 - 4 : 15 principled concordance peter hallman , ucla 4 : 15 - 4 : 45 arabic morphological causatives : numeration and local economy mark letourneau , weber state university 4 : 45 - 5 : 15 correspondence in arabic morphology ali idrissi , king abdulaziz university 6 : 00 reception , colonial room saturday , march 7 morning session 9 : 00 - 9 : 30 ( 8 ) and ( 9 ) as ternary and binary variables in damascus arabic jamil daher , new york university 9 : 30 - 10 : 00 avoidance behavior in writing arabic : an exploratory study of l1 linguistic insecurity kirk belnap , byu 10 : 00-10 : 30 contact between arabic and arabic : distancing frames in reported speech niloofar haeri , johns hopkins university 10 : 30-11 : 00 code alternations among arabic speakers in america kamel a . elsaadany , university of illinois at urbana - champaign 11 : 00-11 : 15 coffee 11 : 15-12 : 15 traditional arabic grammar and modern functional linguistics : unity in diversity guest speaker : ahmed moutaouakil mohammed v university afternoon session 2 : 00 - 2 : 30 relative clauses in moroccan arabic : a discourse perspective ahmed fakhri , west virginia university 2 : 30 - 3 : 00 on inna , anna , et alia david testen , university of chicago 3 : 00 - 3 : 30 on some phonetic and orthographic phenomenon as attested in an 11th - century judeo - arabic work maria angeles gallego , emory university 3 : 30 - 3 : 45 coffee 3 : 45 - 4 : 15 computational tool for developing morpho - phonological models for arabic george anton kiraz , bell laboratories 4 : 15 - 4 : 45 arabic stem morpho - tactics via finite - state intersection kenneth r . beesley , xerox research centre europe 4 : 45 - 5 : 15 testing lexical differences in regional standard arabics dilworth b . parkinson , brigham young university , and zeinab ibrahim , the american university in cairo sunday , march 8 morning session 9 : 00 - 9 : 30 acquisition of binding in l1 arabic naomi bolotin , university of kansas 9 : 30 - 10 : 00 do we need control theory ? ibtissam kortobi , university of southern california 10 : 00-10 : 30 secondary predication in the syntax of arabic wafaa batran wahba , mansura university 10 : 30-10 : 45 coffee 10 : 45-11 : 15 the construct state in arabic moha ennaji , university of fes 11 : 15-11 : 45 the syntax of small clauses in moroccan arabic fatima sadiqi , university of fes registration form name address city / state zip country affiliation email address amount enclosed : preregistration ( deadline : feb . 16 , 1998 ) $ 15 als 1998 membership dues : at the door $ 20 students $ 10 faculty &amp; students , university of illinois free faculty $ 15 checks , drawn on us banks , or international money orders should be made payable to the arabic linguistics society and sent with registration forms to : tessa hauglid , 759 west 1800 north , west bountiful , ut 84087 , usa ( email : tessa . hauglid @ m . cc . utah . edu ) . the symposium will be held at the illini union , 1401 west green st . , urbana , illinois . the hotel offers symposium participants reduced rates : $ 60 single , $ 68 double . reservations may be made by contacting the hotel directly at ( 217 ) 333-3030 . the lincoln lodge , within a short walking distance of the illini at 403 west university avenue , is also offering a special rate of $ 48 . 89 for symposium participants . reservations may be made by calling ( 217 ) 367-1111 . at both hotels , mention the arabic linguistics society to obtain conference rates . airlines which fly into champaign include : american , usair , united , and twa . for further information regarding arrangements at the university , contact elabbas benmamoun : tel . ( 217 ) 333-7129 ; fax ( 217 ) 333-3466 ; email benmamou @ lees . cogsci . uiuc . edu . check out the als website at http : / / lees . cogsci . uiuc . edu : 80 / linguistics / arabic / index . html . arabic linguistics society 759 west 1800 north west bountiful , ut 84087 usa
</pre>

## Record 008301

**Label:** `benign`

<pre>
enron interview of james valverde hi molly ! has this been scheduled yet ? the recruiter is asking for a copy of the itinerary for his client and directions to the enron bldg . i thought i would send both at the same time . let me know . thanks ! shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 01 / 30 / 2001 08 : 03 am - - - - - - - - - - - - - - - - - - - - - - - - - - - shirley crenshaw 01 / 29 / 2001 10 : 26 am to : molly magee / hou / ect @ ect cc : subject : enron interview of james valverde molly : vince arranged the times for this interview with a recruiting firm - it will be thursday , february 1 from 1 : 00 pm - 5 : 00 pm . i am enclosing an interview request form for him and i have scheduled vince , krishna , and stinson . if these times need to be changed to accommodate the others , please let me know . his resume is also attached . thanks ! shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 01 / 29 / 2001 09 : 50 am - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski 01 / 26 / 2001 05 : 09 pm to : shirley crenshaw / hou / ect @ ect cc : vince j kaminski / hou / ect @ ect subject : re : fwd : re : enron - resume interview of james valverde shirley , we want to invite him for an interview , thu , 1 - 5 . interviews with kp , sg , vk , gk , br , molly , cs , dan rack . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 01 / 26 / 2001 05 : 10 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - johan dahl on 01 / 26 / 2001 05 : 04 : 50 pm to : vince . j . kaminski @ enron . com cc : subject : re : fwd : re : enron - resume interview of james valverde vince , james valverde is confirmed for a face - to - face interview with you on thursday february lst at 1 . 00 pm to 5 . 00 pm . ? when you have an interview itinerary , please share it with me so james know who he is interviewing with . ? please also tell me where you want him to show up , what floor , suite etc . ? i am assuming you are in the building on 1400 smith st . , right ? we have not discussed yet the details regarding what key skills and qualifications you are looking for in a candidate , other than that they are bright and talented . could you please share , via email or over the phone , what you are looking for in candidate for your organization . ? if you want me to put a search together , i can only do it by knowing what you want . ? thank you . if there is anything else i can do for you before the interview on thursday , please let me know . respectfully , johan at 04 : 39 pm 1 / 26 / 01 - 0600 , you wrote : johan , please , confirm the interview on thursday next week , 1 - 5 . vince johan dahl on 01 / 24 / 2001 12 : 04 : 42 pm to : ? ? vince . j . kaminski @ enron . com cc : subject : ? fwd : re : enron - resume interview of james valverde johan c . dahl director energy staffing group management recruiters of portland , inc . phone : 503 - 290 - 1153 phone : 800 - 979 - 8701 fax : 503 - 282 - 4380 e - mail : jdahl @ mrportland . com web : www . mrportland . com / html / energy . htm
</pre>

## Record 008302

**Label:** `benign`

<pre>
ets security requests recently , corp information risk management has sent out several messages regarding the correct method to obtain security . the topics you may have seen include srrs decommissioning , and announcements of the http : / / itcentral . enron . com website , as well as the erequest system . these messages are intended for enron corporate / north america users only . at this time , they do not apply to ets employees . ets is working with the corp information risk management group to incorporate our security access methods with theirs . until the process is complete , ets employees should contact the following groups for security issues / requests : houston : ets solution center at 713 - 345 - 4745 , or ets solution center ( mailbox name ) omaha : omaha help desk at 402 - 398 - 7454 , or omaha helpdesk ( mailbox name ) when the security preparations are complete , you will be able to access the erequest system from the solution center page on the ets website ( http : / / www . ets . enron . com ) . you might want to save this site on your favorites , and watch for future announcements from the ets solution center mailbox . ets solution center / omaha help desk
</pre>

## Record 008303

**Label:** `benign`

<pre>
continental power curve validation april 2000 attached is the april 2000 curve validation and profit report for continental power . if there are any questions or queries please let me know . appologies for this being late this month as i have been out of the office . regards james
</pre>

## Record 008304

**Label:** `benign`

<pre>
Shan Ryan suggested:
&gt; IMHO stopping spammers is a great idea but I&#x27;d rather
&gt; have to hit d or delete rather than have my messages
&gt; bounced by someone else&#x27;s ISP.You could also change your e-mail to a more responsible provider. If Eircom
are not up to scratch, then use somebody else and make sure you let Eircom
know why you think they are so useless. You can still keep your old e-mail
address if you have to.To suggest that ISP&#x27;s should not protect themselves against incompotent
configurations would effectively be a vote in support of SPAM.- Matthew
__________________________________________________
Do You Yahoo!?
Everything you&#x27;ll ever need on one web page
from News and Sport to Email and Music Charts
http://uk.my.yahoo.com
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008305

**Label:** `benign`

<pre>
I&#x27;m getting an error page from sourceforge.net when I try to go to
www.spamassassin.org. Just FYI. 
-- 
Larry Rosenman                     http://www.lerctr.org/~ler
Phone: +1 972-414-9812                 E-Mail: ler@lerctr.org
US Mail: 1905 Steamboat Springs Drive, Garland, TX 75044-6749-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 008306

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;O&quot; == Owen Byrne  writes:    O&gt; Well, IMNHO, its because companies do not reward knowledge
    O&gt; sharers. When time comes for evaluation, there isn&#x27;t a line on
    O&gt; the page saying &quot;Helped others to succeed with their projects.&quot;And yet, in my experience, it still happens, but always &quot;unofficially&quot;
and &quot;off the record&quot;.  It&#x27;s as if we believe that &quot;the gods&quot; will
punish us if we are seen to have behaved in a human fashion while on
company time, either by being caught red-handed, or having the
paper-trail finger us later.  Yet even CEOs will &quot;pull strings&quot; to
make things happen, and, also in my experience, those are the moments
when things actually do happen.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
Business Innovations Through Open Source Systems: http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)http://xent.com/mailman/listinfo/fork

</pre>

## Record 008307

**Label:** `benign`

<pre>

Jesus Climent said:&gt; d output: Bareword found where operator expected at (eval 11) line 95,
&gt; near &quot;25FREEMEGS_URL_uri_test&quot;  (Missing operator before
&gt; FREEMEGS_URL_uri_test?) Bareword found whe&gt; Is that a bug or is a fault in my system?looks like there&#x27;s an out-of-date copy of the rules files, on your system.
that rules is called &quot;FREEMEGS_URL&quot; nowadays.--j.
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 008308

**Label:** `benign`

<pre>
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

## Record 008309

**Label:** `benign`

<pre>
re : beaumont methanol - meter 1428 - october 2000 i &#x27; m think i left out a detail - the 54 , 000 mmbtu for the three days oct 21 to 23 to beaumont methanol needs to be all priced at the base deal , not on the swing ticket . from : lee l papayoti on 11 / 14 / 2000 03 : 45 pm to : anita luong / hou / ect @ ect , buddy majorwitz / hou / ect @ ect , daren j farmer / hou / ect @ ect cc : gary a hanks / hou / ect @ ect , james mckay / hou / ect @ ect subject : beaumont methanol - meter 1428 - october 2000 ladies and gents : on sat oct 21 , hpl meter # 1428 had a malfunction , and started flowing at a very high rate , way over the nominated rate of 18 , 000 / d ( gas control will confirm this ) . since sat - sun - mon are all one gas day from a gas daily perspective , i told gas control to try to balance on sun after the meter was fixed , by cutting back to a lower flow rate . so we will need to do a special allocation for the three days october 21 - 23 , saturday through monday . the three day total for the meter is 59 , 067 mmbtu . beaumont methanol nominated 54 , 000 mmbtu ( i . e . 18 , 000 / d for 3 days ) . we should allocate a total of 54 , 000 mmbtu to beaumont methanol for the three days , and the 5 , 067 mmbtu excess will be purchased by brandywine - under sitara # 484934 priced at gas daily hsc midpoint . please call with questions . thanks lee 3 . 5923 - - - - - - - - - - - - - - - - - - - - - - forwarded by lee l papayoti / hou / ect on 11 / 13 / 2000 04 : 02 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : buddy majorwitz 11 / 13 / 2000 03 : 53 pm to : lee l papayoti / hou / ect @ ect cc : subject : beaumont methanol - meter 1428 - october 2000 lee , here is the volume allocation as supplied by anita luong and my calculation worksheet for the captioned meter . give me a call if you have any questions . buddy x - 31933
</pre>

## Record 008310

**Label:** `benign`

<pre>
corporate security message an old scam has surfaced recently with renewed vigor . the nigerian - 419 fraud letter , so called because it violates section 419 of nigerian law , is sent in many variations , by surface and airmail as well as by fax and email . generally the form it takes is to ask the unsuspecting victim to provide their bank account information in return for a promise to deposit a very large sum of money into that account under some pretext . employees should be advised that any information given will be used to further promote the scam through the emptying out of bank accounts , counterfeit and forged checks being written against the accounts , and for other illegal purposes . if you receive what you believe to be one of these letters , forward it to mike hicks ( michael . hicks @ enron . com ) . corporate security maintains a file on them , and works with the us secret service to reduce the number of letters received by our employees . for more information on these letters , please email or call mike at ( 713 ) 853 - 6198 .
</pre>

## Record 008311

**Label:** `benign`

<pre>
fw : netco benefit rate projections john , the more i look at these comparisons , the more i &#x27; m convinced we have to agree an interim subsidy to let folks down gently and / or a salary adjustment . i think we will lose a very high number of people from this transaction if we don &#x27; t make some accommodation here . i &#x27; ll call you later today to discuss . i also need to touch base with you on your salary comment . i need to clarify what you mean by salary freeze . i understood you were ok with us promoting a few people ( 50 or so ) in next 4 / 6 weeks ( so long as we run list passed you first ) and in this regard i would expect to adjust their salaries . we have traditionally raised commercial support salaries ( below vp ) in line with cola ( based on performance but typically around 3 - 4 . 5 % of payroll ) each january and there certainly will be some expectations we will have to deal with . regards david - - - - - original message - - - - - from : jarrett , anthony sent : monday , january 07 , 2002 8 : 22 am to : davies , neil ; slone , jeanie cc : oxley , david ; rahaim , christian ; fitzpatrick , amy ; cash , michelle subject : netco benefit rate projections attached below is an excel workbook containing benefits projections for 2002 . the first tab contains enron rates including flex dollars , the 2 nd tab is citigroup rates conservative estimate , and the 3 rd tab is citigroup rates maxing out the life and ad jarrett , anthony cc : davies , neil ; cash , michelle subject : fw : netco - benefits comparison i sent him back a reply saying , as a minimum , if we see &quot; hardship &quot; for the less than $ 100 k base people , we will want to raise their salaries 3 - 5 % . david - - - - - original message - - - - - from : donnelly , john l [ hr ] [ mailto : john . l . donnelly @ ssmb . com ] sent : friday , january 04 , 2002 4 : 48 pm to : oxley , david subject : re : netco - benefits comparison we have this issue in every deal we do , the benefit coverage is good overall , but employees pay more for the coverage . it &#x27; s income based which mitigates impact to lower paid and we find higher paid focus on total comp and not benefits . benefits are the one thing we keep the same for all of citigroup and we don &#x27; t want to do anything with subsidy or anything else . happy to discuss futher how we market overall comp . and ben . philosphy to deal with the benefits . - - - - - original message - - - - - from : oxley , david [ mailto : david . oxley @ enron . com ] sent : friday , january 04 , 2002 2 : 46 pm to : donnelly , john l [ hr ] cc : cash , michelle ; rahaim , christian subject : fw : netco - benefits comparison &gt; &gt; john , i am worried about comparison between your and our benefits costs . perhaps you could review and let me know if you agree we have a problem . my recommendation is that we consider a subsidy or payrise for our people who may otherwise suffer a hardship in meeting the additional costs of your medical / dental premiums . david &gt; - - - - - original message - - - - - &gt; from : jarrett , anthony &gt; sent : friday , january 04 , 2002 1 : 35 pm &gt; to : oxley , david &gt; cc : davies , neil ; slone , jeanie ; fitzpatrick , amy ; rahaim , christian &gt; subject : re : netco - benefits comparison &gt; &gt; your correct on the costs . i will be in a meeting most of the afternoon today , but i should be able to have you a spreadsheet on monday showing some different scenarios on how netco employees paychecks would be affected paying for their own benefits based on their salary range and coverage tier ( employee only , employee spouse , employee slone , jeanie ; fitzpatrick , amy ; rahaim , christian &gt; subject : re : netco - benefits comparison &gt; &gt; tony , &gt; &gt; i &#x27; m not sure if i read this correctly but seems to me medical costs are significantly higher under citi groups arrangements . i &#x27; ve asked neil and jeanie to work with you to illustrate if they are . i may need to get them to subsidise for first 12 months the difference , if i can prove some hardship . &gt; - - - - - original message - - - - - &gt; from : jarrett , anthony &gt; sent : wednesday , january 02 , 2002 5 : 45 pm &gt; to : oxley , david ; davies , neil ; slone , jeanie ; fitzpatrick , amy ; wheeler , terrie ; schultea , kathryn ; rahaim , christian ; oquinn , kari ; clyatt , julie ; philpott , charles &gt; cc : joyce , mary ; barrow , cynthia ; jones , robert w . - hr exec ; cash , michelle &gt; subject : netco - benefits comparison &gt; &gt; david , below is an initial draft of our current benefit plans compared to ssmb &#x27; s plans . the main difference is employee &#x27; s for ssmb pay for benefits out of pocket instead of having flexdollars cover a portion of the cost . &gt; &gt; &gt; &gt; &gt; &gt; thanks , tony &gt; &gt; &gt; this e - mail is the property of enron corp . and / or its relevant affiliate and may contain confidential and privileged material for the sole use of the intended recipient ( s ) . any review , use , distribution or disclosure by others is strictly prohibited . if you are not the intended recipient ( or authorized to receive for the recipient ) , please contact the sender or reply to enron corp . at enron . messaging . administration @ enron . com and delete all copies of the message . this e - mail ( and any attachments hereto ) are not intended to be an offer ( or an acceptance ) and do not create or evidence a binding and enforceable contract between enron corp . ( or any of its affiliates ) and the intended recipient or any other party , and may not be relied on by anyone as the basis of a contract by estoppel or otherwise . thank you .
</pre>

## Record 008312

**Label:** `benign`

<pre>
re : mitch robinson is out no - he cant be on my team even if you changed his mind chris calger 503 - 464 - 3735 - - - - - original message - - - - - from : kitchen , louise sent : thursday , january 24 , 2002 9 : 08 am to : calger , christopher f . ; presto , kevin m . ; oxley , david ; whalley , greg subject : re : mitch robinson is out any point in talking to him ? - - - - - - - - - - - - - - - - - - - - - - - - - - sent from my blackberry wireless handheld - - - - - original message - - - - - from : calger , christopher f . to : presto , kevin m . ; kitchen , louise ; oxley , david ; whalley , greg sent : thu jan 24 11 : 02 : 40 2002 subject : mitch robinson is out got him what he asked for . he said done . he flaked . does not want to work for a &quot; trading company &quot; . chris calger 503 - 464 - 3735
</pre>

## Record 008313

**Label:** `benign`

<pre>
nesa &#x27; s nymex brown bag &gt; hope to see you there ! happy holidays ! lana moore director of education nesa ( 713 ) 856 - 6525
</pre>

## Record 008314

**Label:** `benign`

<pre>
efl positions the following positions are available through the united states information agency : efl fellows english language teacher education program eastern / central europe , russia , ukraine who ? experienced efl / esl teacher trainers / educators and teachers of english for specific purposes , holding at least a master of arts degree in the field where ? albania , croatia , the czech republic , hungary , kazakhstan , latvia , lithuania , macedonia , poland , romania , russia , slovakia , slovenia , ukraine when ? late august , 1995 through late july , 1996 what ? efl fellows undertake a range of projects aimed at enhancing the quality of english language education throughout the region . some of their accomplishments since 1991 include : - organizing successful seminars to develop master teachers in slovenia ; - facilitating the organization of a nation-wide tesol affiliate in russia ; - organizing local teachers to develop efl materials for use in elementary and secondary school classrooms throughout latvia ; - sponsoring a variety of courses and lectures for in-service teachers at america house in kiev , ukraine , as featured on the front page of a major ukrainian daily ; - helping to develop and deliver model training programs for teachers in requalification programs in lithuania ; - assisting in the establishment of a nationwide assessment program for testing the language skills of teachers entering requalification programs in estonia . the efl fellow program is sponsored and administered by the u . s . information agency ( usia ) . for further details and application forms , write , fax , or e-mail the appropriate address below , or visit the usia booth in the employment clearinghouse at the tesol long beach conference center . for information concerning briefings on the efl fellow program at the convention , see the convention daily . the required interview may take place by appointment at usia in washington dc , through a prearranged teleconference with usia , or march 29 , 30 , 31 and the morning of april 1 at the employment clearinghouse at tesol . efl fellow program e-mail : fellows @ usia . gov applicant information fax : 202 / 401-1250 e / alp , room 304 phone : 202 / 401-6016 301 - 4th street , s . w . washington , dc 20547
</pre>

## Record 008315

**Label:** `benign`

<pre>
On Wed, 9 Oct 2002, Brian Fahrlander wrote:&gt; On Wed, 9 Oct 2002 09:15:03 -0400 (EDT), Samuel Checker  wrote:
&gt;
&gt; &gt; I&#x27;ve been testing Razor, invoked from sendmail/procmail and so far it
&gt; &gt; seems pretty copacetic. Last night&#x27;s spam to the list provided a good test
&gt; &gt; - the spam itself as well as several of the responses were flagged, as
&gt; &gt; other list members reported.
&gt; &gt;
&gt;
&gt;     Are you using Spamassassin on the input side?  I&#x27;ve just changed my sendmail installation and am looking for the &#x27;proper&#x27; way to pass it through there, systemwide, before accepting it and sending it to the users.  It&#x27;s kinda problematic to set up procmail scripts for every user, when the user&#x27;s home directories are NFS mounted....and the source is on my own machine, on which I try new things. (And it&#x27;s the only machine with the drivespace...)
&gt;I&#x27;ve not used Spamassassin on the KISS principle. I just have procmail
adding an X-header and optionally modifying the Subject if razor-check
comes back positive.-- 
sc-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008316

**Label:** `benign`

<pre>
From: Donald Eastlake 3rd 
July 16, 2002
By Yonder Blessed Moon, Sleuths Decode Life and Art
By LEON JAROFFOn its way back from the Pacific island of Tinian, where it had
delivered the uranium core for the atomic bomb that destroyed Hiroshima,
the heavy cruiser Indianapolis was torpedoed by the Japanese submarine
I-58 and sent to the bottom of the Philippine Sea. It was one of the
worst disasters in American naval history; only 317 of its nearly 1,200
crew members survived.Now experts at Southwest Texas State University have given that tragic
story a startling new twist.It was the moon, they say, that sank the Indianapolis. Or anyway, they
write in the July issue of Sky &amp; Telescope, it was the moon that made
the sinking possible.Using astronomical computer programs, records and weather reports, as
well as the known coordinates and running speeds of the ship and the
submarine that sank it, the authors determined that when the I-58
surfaced, it was perfectly aligned, west to east, with the cruiser. And,
they said, a three-quarter moon had just emerged from behind the clouds.Looking across the moonlit water, an I-58 crewman spotted the ship
silhouetted against the sky, 10.3 miles away. Half an hour later, six
torpedoes sent it to the bottom.&quot;It was sheer chance,&quot; said Dr. Donald Olson, an astronomer. &quot;Without
that alignment with the moon, the lookouts would not have spotted the
cruiser, especially at that distance.&quot;With Russell Doescher, a physics lecturer, Dr. Olson conducts a
university honors course called &quot;Astronomy in Art, History and
Literature.&quot; In the last 15 years, he has pinpointed the time and place
of the rendering of art masterpieces, given new interpretations of
astronomical references in Chaucer and revealed the decisive role of the
moon in military and other encounters.Two years ago, for example, Dr. Olson turned his attention to the bright
star in van Gogh&#x27;s &quot;White House at Night.&quot; He and some students went to
Auvers, France, where van Gogh created his final works, and searched
until they found the house, largely unchanged. Sifting through letters
from van Gogh to his brother, Dr. Olson found that the painting was
completed in June 1890.Noting the orientation of the house in the painting, he determined where
van Gogh had set his easel and what section of the sky he had portrayed,
and from the lighting and shadows, he established that the house had
been illuminated by the setting sun. His computer analysis then
identified the &quot;star.&quot; It was Venus, which in early evening in mid-June
had occupied that part of the sky.A final check of local weather records pinpointed the actual date van
Gogh had composed the painting, June 16, the only clear day in the
middle of the month that year.Dr. Olson has also turned his attention to Shakespeare, intrigued by the
opening of &quot;Hamlet,&quot; when guards on the ramparts of Elsinor refer to the
&quot;star that&#x27;s westward from the pole had made his course to illume that
part of heaven where now it burns.&quot; From the guards&#x27; description, the
season and the time, other astronomers had suggested several bright
stars as possibilities, but Dr. Olson&#x27;s calculations placed it in the
constellation Cassiopeia, which lacks any notably luminous stars.Pondering this problem on a trip with his wife, Dr. Olson was suddenly
inspired. He was aware that in 1572, a supernova, called Tycho&#x27;s star,
for the Danish astronomer Tycho Brahe, suddenly flamed in Cassiopeia,
creating a worldwide sensation. Shakespeare, 8 at the time, would
certainly have recalled the event, and his memory was probably refreshed
by the description of the supernova in a history book that was the
source of some of his best-known plays.Dr. Olson has no doubt that the star that glared above Elsinor that
night was Tycho&#x27;s, and he has an impressive record of other
astronomy-based sleuthing.Aware that the photographer Ansel Adams often neglected to date his
negatives, Dr. Olson set out to find when Adams had shot his classic
&quot;Moon and Half Dome.&quot; At Yosemite, Dr. Olson and his students found
Adams&#x27;s vantage point, studied the location, phase and features of the
moon in the photograph, plus the shadows on the Dome, snow on the peak
and other clues, and then announced that the picture had been taken at
4:14 p.m., Dec. 28, 1960.Then, Dr. Olson calculated that the setting would be virtually identical
at 4:05 p.m. on Dec. 13, 1994. On that day Adams&#x27;s daughter-in-law
visited Yosemite and was photographed holding a print of &quot;Moon and the
Half Dome&quot; in the foreground of an eerily similar view of the actual
moon and the Half Dome.Analyzing Chaucer&#x27;s works, Dr. Olson has confirmed that a particularly
rapid movement of the moon described in &quot;The Merchant&#x27;s Tale&quot; occurred
in April 1389. And in &quot;The Franklin&#x27;s Tale,&quot; Chaucer&#x27;s description of
the heavenly alignment that caused an exceptionally high tide on the
Brittany coast, convinced Dr. Olson that Chaucer was an advanced amateur
astronomer.Then there was Paul Revere. On his way to saddle up for his famous ride,
how did he manage to row undetected past a British warship on a moonlit
night in Boston Harbor? Dr. Olson&#x27;s computer program revealed that,
while the moon was nearly full that night, it was unusually close to the
southern horizon and did not illuminate Revere&#x27;s boat.Dr. Olson&#x27;s proudest achievement was explaining &quot;the tide that failed&quot;
in the bloody Marine Corps landing at Tarawa atoll on Nov. 20, 1943.
Planners had expected a tide to provide a water depth of five feet over
a reef some 600 yards from shore, allowing larger landing craft, with
drafts of at least four feet, to pass.But that day and the next, in the words of some observers, &quot;the ocean
just sat there,&quot; providing neither low tide nor high tide and leaving a
mean depth of three feet over the reef. The craft grounded on the edge
of the reef, and many marines were killed or injured as they waded 600
yards to the shore, rifles over their heads, in the face of machine-gun
fire from the Japanese.Asked by a former marine about the tidal phenomenon, Dr. Olson spent six
months researching and mastering tidal theory and discovered that the
military planners were aware that they had to contend with a &quot;neap&quot;
tide. This phenomenon occurs twice a month when the moon is near its
first or last quarter, because the countering tug of the sun causes
water levels to deviate less.But that day, the moon was also almost at its farthest point from earth
and exerted even less pull, leaving the waters relatively undisturbed
and the marines in trouble.&quot;I&#x27;m not in the least blaming the planners,&quot; Dr. Olson said, explaining
that the techniques used in accurately determining tides hadn&#x27;t been
applied to the waters at Tarawa.Indeed, he modestly claims, by using his computer program, &quot;We can
calculate the tides in any port in the world on any day in history.&quot;Yet Dr. Olson&#x27;s greatest satisfaction seems to stem from his
interdisciplinary approach to astronomical sleuthing. &quot;I have thought
about van Gogh, about Shakespeare and Chaucer,&quot; he says, &quot;and that has
made my life as a scientist much richer.&quot;
http://xent.com/mailman/listinfo/fork

</pre>

## Record 008317

**Label:** `benign`

<pre>

On Tuesday, August 20, 2002, at 07:23  AM, Justin Mason wrote:&gt;&gt; The compensate rule USER_AGENT should go or at least score 
&gt;&gt; very low; with
&gt;&gt; it, a spammer just has to include a header like
&gt;
&gt; BTW, the scores are irrelevant right now (unless the test is 
&gt; going to have
&gt; a non-GA&#x27;d score).  The GA should reduce &quot;easy&quot; ones, and if it 
&gt; doesn&#x27;t,
&gt; after the GA run is the time to comment.  Don&#x27;t pay any 
&gt; attention to them!
&gt; ;)Remember that the GA is going to be considering combinatorial 
uses of the rules, so rules which look dodgy on their own might 
be gems for the GA -- perhaps something with a S/O ratio of .5 
actually occurs often in combination with some other rule, and 
in those situations, helps to distinguish spam vs nonspam.C-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 008318

**Label:** `benign`

<pre>
regarding natsource to all i recieved this message from kerri thompson in confirms . please make a note . &quot; since i do not have any summarys from natsource from monday and tuesday , there is no way for me to know if i am missing any trades . please relay this to the traders to ensure all deals are put in . it could be days before i receive any summarys and missing confirms . &quot; thanks , kerri kysa m . alport enron north america ( o ) 503 - 464 - 7486 ( c ) 503 - 706 - 5308
</pre>

## Record 008319

**Label:** `benign`

<pre>
On Tue, 27 Aug 2002 the voices made Matt Sergeant write:&gt; I&#x27;ve got 6C115 (I think) the current developer release (though not the same
&gt; as gold). The only difference AFAIK is the path to a single helpfile, which we don&#x27;t use
anyways, right? *G*
	/Tony
PS I also have a problem with that stupid helpprogram crasching whenever I
search for &quot;windows&quot;; not sure if that&#x27;s a feature or not. =)
-- 
# Per scientiam ad libertatem! // Through knowledge towards freedom! #
# Genom kunskap mot frihet! =*= (c) 1999-2002 tony@svanstrom.com =*= #     perl -e&#x27;print$_{$_} for sort%_=`lynx -dump svanstrom.com/t`&#x27;-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 008320

**Label:** `benign`

<pre>
gisb ir meeting notes gisb ir meeting - 11 - 13 &amp; 14 , 2001 summary : finalized the transactional information ( ft , it , and capacity release ) . this information will be access via the upload of a request for download of posted datasets . majority of the two days was spent developing the data dictionary for the new producer imbalance statement . the producer imbalance statement is not a mandatory dataset . exxon was the only producer present . detailed notes : informational reporting where should the reporting be located in the gisb books for the it &amp; ft reporting ? ? in cap release books ? general book ? it &amp; ft into noms and cap release into cap release ? create a new book called reports ? if we create a new book , we will have to do an executive summary . should reside in capacity release book since the upload request for a download of posted dataset is the request document . update the upload of a request for download of posted datasets to include code values and technical implementation to support the request for transaction information it , ft , and capacity release datasets . ? add &quot; ? withdrawals , or and transactional reports &quot; to technical implementation . ? add code value , &quot; transaction information firm &quot; ? add code value , &quot; transaction information interruptible &quot; ? add code value , &quot; transaction information - capacity release &quot; update the response to upload of a request for download of posted datasets to include code values to support the request for transaction information it , ft , and capacity release datasets . ? add code value , &quot; transaction information firm &quot; ? add code value , &quot; transaction information interruptible &quot; ? add code value , &quot; transaction information - capacity release &quot; executive summary for capacity release , under the capacity release process / datasets / edi transaction section modified with the below : ? add the it &amp; ft reporting datasets under the mandatory datasets in alphabetical order ? page 4 of executive summary - add new section describing the dataset . title : transactional information - transactional information consisting of reports from a tsp provider detailing information for new or amended transportation service or capacity release transaction . these reports are requested through the use of a upload of a request for download of posted datasets and response to upload of a request for download of posted datasets . ? business process and practices , under overview o first paragraph &quot; capacity release reports consists of the following datasets : ? . the transactional information - interruptible , the transactional information - firm , and transactional information - capacity release voting : ? put together a rec form and data dictionaries and bring back next meeting and vote . producer imbalance statement exxonmobil work paper - in progress ? not a mandatory document ? one account per point . ? modify contact person data to preparer contact person data ? cumulative imbalance changed to ending imbalance quantity ? current month entitlement - quantity of gas each interest owner is entitled to take of the total production deliveries ? current month imbalance changed to current month quantity ? interest owner data - the entity with ownership interest in the gas . ? interest owner - hold for resolution r 97058 b for the condition ? interest owner name - hold for resolution of r 97058 b . ? interest owner proprietary code - hold for resolution of r 97058 b . ? prior period adjustment - changed usage from condition to mandatory . condition = default is zero . ( in order words if a prior period is not present , send a zero . ) ? production delivery - quantity of gas delivered to a location for a interest owner based on location operator &#x27; s allocation statement . ? interest owner decimal changed interest owner percentage - percentage of gas owned by the interest owner . usage - mandatory . ? add - transportation service provider data group - at detail level . ? add - transportation service provider data element = a code value that uniquely identifies the tsp . mandatory . ? add - transportation service provide name . mandatory . ? grand total all tsp &#x27; s = the total of all production deliveries made to all tsps from a given location . mandatory . ? total tsp = the total of all production deliveries made to a specified tsp from a given location . detail . mandatory . ? ending imbalance qty = cumulative imbalance for an interest owner delivered to a tsp . # 20 ? current month entitlement - a quantity of gas each interest owner is entitled to take of the grand total - all tsp for a given tsp . # 16 ? interest owner percentage - percentage of the gas owned by the interest owner dedicated to specified tsp . ? add discussion to the tibp the definition of ppi . ppi is related to interest owner percentage . ppi is the portion of the production interest dedicated to a tsp . ? field - # 6 we don &#x27; t currently support this location information in any other gisb documents . it is derivable from the location . ? county - # 6 we don &#x27; t currently support this location information in any other ? gisb documents . it is derivable from the location . ? state - # 6 we don &#x27; t currently support this location information in any other gisb documents . it is derivable from the location . ? move location data to header level . ? location operator - party recognized as the operator of record for the location . ? location operator - proprietary code - hold for r 97058 b ? move statement basis data to header . if one line time is adjusted or estimated , it impacts the whole allocation . ? statement recipient id * - hold for r 97058 ? cumulative ending imbalance qty ( new ) - # 26 cumulative imbalance qty for the current period for an interest owner delivered to all tsps . mandatory . detail . ? cumulative imbalance qty ( new ) # 24 cumulative imbalance qty for the current period for an interest owner . mandatory . detail . tammy lee - jaquet 713 - 853 - 5375 tammy . jaquet @ enron . com
</pre>

## Record 008321

**Label:** `benign`

<pre>
On Tue, Aug 13, 2002 at 12:48:18AM +0100, wintermute wrote:
&gt; How unimaginably difficult is this to do?
&gt; There are as far as I know, no Linux kernel hackers, nor distros that originate from this fair island right?
&gt; Right.i think there&#x27;s a mailing list on linux.ie for this.also, there&#x27;s niall&#x27;s work on the bbc.  no, not that bbc, the bootable
business card.kevin-- 
kevin@suberic.net     that a believer is happier than a skeptic is no more to
fork()&#x27;ed on 37058400    the point than the fact that a drunken man is happier
meatspace place: home       than a sober one. the happiness of credulity is a
http://ie.suberic.net/~kevin   cheap &amp; dangerous quality -- g.b. shaw-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008322

**Label:** `benign`

<pre>
benzene forward curve &amp; hedge calculator new market we are trying to develop in benzene swaps - possibly hedging with financial naphtha and physical toluene . rgds , anjam - - - - - - - - - - - - - - - - - - - - - - forwarded by anjam ahmad / lon / ect on 14 / 03 / 2000 10 : 35 - - - - - - - - - - - - - - - - - - - - - - - - - - - anjam ahmad 14 / 03 / 2000 10 : 34 to : robert brewis / lon / ect @ ect , stuart bland / lon / ect @ ect cc : dale surbey / lon / ect @ ect , hrvoje paver / lon / ect @ ect , stinson gibner / hou / ect @ ect , tracy wallace / lon / ect @ ect subject : benzene forward curve &amp; hedge calculator dear all , attached is the spreadsheet &quot; benzenecurves . xls &quot; ( also available in s : \ research \ globalproducts ) that will hopefully allow you to derive a mid - curve for benzene based upon our existing naphtha curve produced by tracy . the previous hedge ratio analysis is still part of the new spreadsheet . for clarity a graph of the curve based on 1996 through 2000 data is depicted below : i can also provide confidence bands on the regression model , if this can assist in deciding the bid - offer spread for the forward curve , but this is slightly more involved - let me know you &#x27; d like this . regards , anjam x 35383 attachment :
</pre>

## Record 008323

**Label:** `benign`

<pre>
limit order usage today external orders submitted : 812 external orders filled : 215 as a comparison , the numbers for yesterday were : external orders submitted : 116 external orders filled : 13 here is a list of counterparties that posted prices which became the web prices and were traded : aep energy services , inc . allegheny energy supply company , llc american electric power service corporation american municipal power - ohio inc . aquila energy marketing corporation aquila risk management corporation astra power , llc bnp paribas bp corporation north america inc . bp energy company cleco marketing and trading , llc cms marketing , services and trading company calpine energy services , l . p . cargill energy , a division of cargill , incorporate cargill - alliant , llc cinergy marketing &amp; trading , llc cinergy services , inc . colonial energy inc . conagra energy services , inc . conectiv energy supply , inc . conoco inc . consolidated edison solutions , inc . constellation power source , inc . cook inlet energy supply l . l . c . coral energy canada inc . coral energy holding l . p . coral energy resources , l . p . cross timbers energy services , inc . dte energy trading , inc . duke energy trading and marketing , l . l . c . dynegy canada inc . dynegy marketing and trade dynegy power marketing , inc . el paso merchant energy , l . p . enron energy services , inc . entergy - koch trading , lp firstenergy services corp . hq energy services ( u . s . ) inc . hess energy trading company llc j . aron &amp; company kinder morgan texas pipeline , l . p . louis dreyfus corporation marathon oil company mieco inc . mirant americas energy marketing , l . p . njr energy services company nrg power marketing inc . nexen marketing nicor gas company northern indiana public service company oneok energy marketing and trading company , l . p . occidental energy marketing , inc . pg &amp; e energy trading - power , l . p . pg &amp; e energy trading - gas corporation pseg energy resources &amp; trade llc pancanadian energy services inc . petrocom energy group , ltd . power merchants group , llc prior energy corporation reliant energy services , inc . sempra energy trading corp . smith barney aaa energy fund l . p . txu energy trading company tenaska marketing ventures texaco natural gas inc . texla energy management inc . the new power company tractebel energy marketing , inc . transalta energy marketing corp . transcanada energy marketing usa , inc . usgt / aquila , l . p . virginia electric and power company western gas resources , inc . williams energy marketing &amp; trading company xcel energy inc . e prime , inc .
</pre>

## Record 008324

**Label:** `benign`

<pre>
re : thursday visit frank , we are located at 1400 smith . any cab driver can identify the enron building . when you arrive , please , call me at 3 - 3848 from the reception to be admitted into the building . alternative phone numbers : 3 - 5290 ( my assistant shirley crenshaw ) . you can also try to call me on my cell phone : 713 898 9960 . the research group meeting starts at 11 : 30 and lasts till 1 : 00 . can you make a presentation about your research projects ? what audio / video equipment do you need ? what sandwich would you like to have for lunch ? we shall make a hotel reservation for you thursday night . vince &quot; francis x . diebold &quot; on 12 / 18 / 2000 07 : 02 : 46 am to : vince kaminski cc : bmierts @ enron . com subject : thursday visit hi vince , looking forward to seeing you thursday . ? i arrive at houston - bush on usair 1769 at 10 : 55 am . ? please let me know where to go . ? i also want to verify that you have booked me a hotel ? for thurs night . ? many thanks , and see you soon , frank - - francis x . diebold wp carey professor department of economics university of pennsylvania 3718 locust walk philadelphia , pa 19104 - 6297 fdiebold @ sas . upenn . edu http : / / www . ssc . upenn . edu / ~ diebold ( 215 ) 898 - 1507 ? telephone ( 215 ) 573 - 4217 ? fax ?
</pre>

## Record 008325

**Label:** `benign`

<pre>
proposal for a morphological database of classical greek i am writing to seek input on a proposal that we tentatively plan to submit to the neh at the end of the summer . the idea is fairly simple : we want to use the morphological parser that we have been developing for the past eight years or so to generate morphological analyses of every unique string in the thesaurus linguae graecae ( tlg ) , the database of greek texts available on cd rom from uc irvine . the tlg is large - - 42 million words at present and a new version is due out later this year with 57 million words . greek is a highly inflected language - - not as bad as georgian and some others , but a verb can , with prefixes , have millions of different forms . the tlg corpus extends over a thousand years and includes virtually all literary greek , and thus would support diachronic as well as synchronic linguistic analysis . i would like to know if there is anything we could do that would make this work on greek useful for the linguistics community in general ? classicists need this database , but it would be very exciting if it could stimulate additional work . the working summary of the project follows . the proposal outline is fairly succinct ( c . 7 pages ) but it is full of greek and does not lend itself readily to transliteration . if you would like to see a copy , please send me your us mail address and we will send one to you . casual reactions to just this summary are , however , more than welcome . note : reactions need not be positive . if this does not seem a worthwhile thing to pursue , i would love to know why . thanks ! gregory crane department of classics boylston 319 harvard university cambridge ma 02138 crane @ ikaros . harvard . edu a linguistic database of classical greek this project will extend an existing parser for classical greek , expanding its database of stems to cover the majority of all words attested in the literary record , and will use this database to create a morphologically parsed database of more than 1 , 000 , 000 unique strings available in the tlg : in the end , we will publish the database of analyzed strings , the databases of stems and endings which drive the parser and the parser itself . the resulting databases are an essential piece of scholarly infrastructure that will ( 1 ) revolutionize current searching techniques for the tlg and other greek databases , ( 2 ) make it possible to apply more sophisticated retrieval / text analysis to greek texts , and ( 3 ) provide a basic but crucial lookup tool that will aid non-specialists in other fields ( e . g . , philosophy , political science , religion ) who seek to work directly with the greek database . note : this document is a sketch for a possible proposal to be submitted to the neh at the end of august 1992 . it is , in effect , a proposal for a proposal and is thus open to revision on any and all points .
</pre>

## Record 008326

**Label:** `benign`

<pre>
final cp name change / merger list 7 / 00 this is the final list of counterparty name change and mergers for 7 / 00 . the changes will be made in the global counterparty system as follows : name changes - the current legal name and erms shortname will be overlayed on monday , 7 / 24 , in the afternoon . we want to update the system before bid week begins on tuesday . if anyone has a problem with the erms shortnames being changed on monday , please notify us immediately . mergers / business changes - the old record will be inactivated on 8 / 1 / 00 . marilyn colbert 3 6517 cheryl johnson 3 3103
</pre>

## Record 008327

**Label:** `benign`

<pre>
On Tue, 30 Jul 2002 22:22:24 +0200, &quot;Manfred Grobosch&quot;  wrote:&gt; I would like to install RPM itself. I have tried to get the information by
&gt; visiting www.rpm.org   and the related links they give
&gt; but they all seems to assume that RPM already is installed.
&gt; I have a firewall based on linux-2.2.20 (Smoothwall) for private use.
&gt; I would like to install the RPM package/program but there is no information
&gt; how to do this from scratch.
&gt; Found this site and hopefully some have the knowledge.    Well, if you have a Windows, SCO, or AIX box, (generally anything BUT Redhat Linux) that&#x27;d be the site I&#x27;d send you to, to get it installed.  I&#x27;ve been there for the same reason, under SCO.  Maybe you missed something?    What OS are you running, anyway?  
------------------------------------------------------------------------
Brian FahrlÃ¤nder              Linux Zealot, Conservative, and Technomad
Evansville, IN                    My Voyage: http://www.CounterMoon.com
ICQ  5119262
------------------------------------------------------------------------
I don&#x27;t want to hear news from Isreal until the news contains the words
&quot;Bullet&quot;, &quot;Brain&quot;, and &quot;Arafat&quot;._______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008328

**Label:** `benign`

<pre>
Hello folks!
I&#x27;m new to Linux, so here goes...
I&#x27;ve been trying to get connected to the outside world through my modem.
I&#x27;ve got Debian with kernel 2.4.18.
I&#x27;ve got this Win-Modem(yes, I know) and managed to locate a proper driver
for it.
Minicom is very much able to dial out.
But there seems to be a problem with my PPPD installation.
When I type &#x27;ppp&#x27; in the minicom terminal, all I get (after the initial info
of my dynamic IP, etc) is a ~ and then the NO CARRIER signal.
Then I looked into calling pppd directly using chat.
I used this command:  pppd call Provider (where Provider is some script
somewhere).
It dials, it connects, it sends my username &amp; password, and when connection
is established, it gives the SIGHUP signal and exits.
This is confirmed when me friend and I tried to connect through a serial
port using pppd to connect ttyS0.  I ran pppd waiting for a connection, me
friend tried connecting and as soon as he did, pppd exited.Some expert help would be greatly appreciated as I&#x27;m sick and tired of
having to reboot, get into Windoze to hook up to the net and then back to
Linux, mounting this drive to get that file, etc.  It&#x27;d be nice never have
to go back to Windoze(except for games, that is).Thanks a million.
Carlos-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008329

**Label:** `benign`

<pre>
rofr capacity susan , per our conversation today , transwestern pipeline and pg &amp; e trading can wait until after the upcoming holidays to discuss pg &amp; e &#x27; s right of first refusal on the 61 , 000 mmbtu per day that is currently posted . in fact , section 13 ( h ) of transwestern &#x27; s fts - 1 rate schedule indicates that transwestern could wait until july 31 , 2002 to notify pg &amp; e trading as to the terms of the best offer . pg &amp; e trading would then have two weeks to notify transwestern of its desire to match . i , however , suggest that we begin discussions of the outcome of the posting sometime in january . i hope that your holiday season is everything you are hoping it will be . merry christmas and happy new year ! best regards , paul
</pre>

## Record 008330

**Label:** `benign`

<pre>
completed reviews kathy &amp; dave , could you please forward the number of completed evaluations that you have received to date or a percentage number of completed reviews so that i may forward to sally ? thanks for your help , hgm
</pre>

## Record 008331

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/09/24.html#stark_raving_sane
Date: 2002-09-24T22:05:32-05:00_Sam Ruby_: Stark raving mad[1].     This post was entered in Radio, extracted using a batch file via some 
    UserTalk, parsed using Perl, cleaned up by tidy and a C program of my own 
    design, transferred to intertwingly using scp, and then ssh triggers 
    unpacking on the destination site, where a shell script takes over: invokes 
    indexing using Jakarta&#x27;s Lucene, and then a python script pings weblogs.com 
    and blo.gs. Tom Stoppard (_Rosencrantz and Guildenstern are Dead_):     Guildenstern: â€œA man talking sense to himself is no madder than a man 
    talking nonsense not to himself.â€
    Rosencrantz: â€œOr just as mad.â€
    Guildenstern: â€œOr just as mad.â€
    Rosencrantz: â€œAnd he does both.â€
    Guildenstern: â€œSo there you are.â€
    Rosencrantz: â€œStark raving sane.â€ [1] http://www.intertwingly.net/blog/844.html

</pre>

## Record 008332

**Label:** `benign`

<pre>
anjam and kirstee , as i have suspected the position as of 6 / 30 vs 7 / 19 makes the difference . the first table first column is my var number with 6 / 30 position and gold &amp; silver prices , the second column is your var with 7 / 19 position and dummy gold &amp; silver prices . the second table first column is my var with 7 / 19 position and 6 / 30 gold &amp; silver prices , the second column is as before . i would ask you to plug the gold and silver prices and see what kind of numbers you get in order to verify we are on the same page . please refer to modelvar 2000 . xls that i have sent you for gold &amp; silver prices and volatilities . thank you , cantekin table 1 table 2
</pre>

## Record 008333

**Label:** `benign`

<pre>
start date : 2 / 1 / 02 ; hourahead hour : 16 ; start date : 2 / 1 / 02 ; hourahead hour : 16 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002020116 . txt
</pre>

## Record 008334

**Label:** `benign`

<pre>
ena it louise , i need to bring this to close . i am going to decompose beth &#x27; s group into a number of smaller units , leaving the most important areas in ena , namely gas / power front and back office . i am going to leave anthony running ees , but need someone who can work well with anthony on developing the strategy for the new longer term solutions , as well as what he is trying to achieve in the short term . the final candidates are steve stock , everett plant , and as possible late entry john paskin ( although he doesn &#x27; t know this yet and i have him tagged to run corporate systems ) . from a collaboration perspective i am leaning towards stocky . we have all spoken with everett and are impressed with his &#x27; gloss &#x27; . i &#x27; m just not sure he is the right person to give the &#x27; crown jewels &#x27; to , my gut tells me he is good at managing up , but may not be the best collaborative team member ( and i need that ) . let mk know what you think thanks oh , and thanks for the baseball the other night , we had fun . mark pickering chief technology officer enron net works , llc _ _ _ _ _
</pre>

## Record 008335

**Label:** `benign`

<pre>
re : ( no subject ) jana , next week would work for me . i am flying to san antonio from florida . i shall be back on sunday . what about friday or saturday next week ? vince jlpnymex @ aol . com on 04 / 04 / 2000 09 : 59 : 01 am to : vince . j . kaminski @ enron . com cc : subject : re : ( no subject ) vince , nice to hear from you . we will miss you on thursday evening . would you still like to join us for a movie sometime ? jana
</pre>

## Record 008336

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85490092
Date: Not suppliedBrian sez: Vocera Communications has developed what is essentially a Star Trek: 
TNG-style lapel communicator device that uses WiFi to transmit voice across 
networks.     The Vocera Communications System consists of Vocera Server Software, 
    residing on a customer premise server, and Vocera Communications Badges, 
    which operate over a wireless LAN (802.11b). The badge - which weighs less 
    than 2 ounces - includes a microphone and speaker, LCD readout to display 
    text messages, and an 802.11b wireless radio. It can be clipped to a shirt 
    pocket or collar, or worn on a lanyard.  Link[1] Discuss[2] (_Thanks, Brian[3]!_)[1] http://www.vocera.com/news/press9.shtm
[2] http://www.quicktopic.com/boing/H/F4SLvqGh6XW
[3] http://brian.carnell.com

</pre>

## Record 008337

**Label:** `benign`

<pre>
re : jcc kevin , thanks for the heads - up . i &#x27; m doing face - time with a customer on wednesday , but i &#x27; m in all day tomorrow , thursday and friday ( i &#x27; ve a got a deadline to meet this pm ) . when would it be convenient to meet , and could we do it early in the morning so as to be able to conference ansguman srivastav ( enron india ) into the meeting ? regards , marc kevin kindall @ enron 10 / 30 / 2000 10 : 55 am to : marc de la roche / hou / ect @ ect cc : vince j kaminski / hou / ect @ ect , stinson gibner / hou / ect @ ect subject : jcc good morning . i apologize for the response delay . i &#x27; ve gone back through the analysis that i did back in april , and have thrown around some ideas with vince and stinson . the issue may be summarized as follows . the hedge relationship was derived using jcc and prompt brent , and is valid for jcc and prompt brent . no problems here . however , it will not be valid for points far out on the forward curve . intuitively , this hedge relationship will approach one as we move far out on the curve , but since there is no data , i can not statistically determine this . one can imagine a term structure of heding ratios that start at 0 . 67 and move to 1 . 0 , so that the back end of the curves would move together , but how fast it converges to one is anyone &#x27; s guess . if there is a way of determining the historical jcc forward curve , then the hedge relationships may be estimated . however , i have been unable to determine a rigorous approach to building the jcc curve . i can explain this far better in person , and would like to talk as soon as possible at your convenience . - kevin kindall
</pre>

## Record 008338

**Label:** `benign`

<pre>
SEARCHSECURITY | Security and Industry News
July 23, 2002=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
FROM OUR SPONSOR:- FREE Security Webcast from Microsoft and NetIQ 
http://searchSecurity.com/r/0,,4619,00.htm?FreeSecurityWebcast =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=IN THIS ISSUE | Today&#x27;s Highlights1. THE TOP STORIES 
- PHP flaw could crash, burn Web servers
- Quick Takes: Major vendors throw support at SAML
- NetBugtraq founder&#x27;s security tips
- ROI calculators: Honest projection or fuzzy math?2. IMPORTANT ANNOUNCEMENTS AND LINKS
- New poll: Will heuristics ever fully replace signature-based
antivirus protection?
- Infosec Know IT All Daily Trivia: Tuesday, July 23, 2002
- Network Security Tip: Firewall best practices 
- Best Web Links: Risk analysis
- The Missing Link: Scot has cyber tomb with a view
 
____________________________________________________________________
*********************** SPONSORED BY: NetIQ **********************FREE Security Webcast from Microsoft and NetIQ 
Is your enterprise secure? Learn how to combat hackers during the
free 8/20/02 Webcast, &quot;Computer Crime Forensics,&quot; Part II of the
&quot;Defending the Enterprise&quot; series. Tune in as security experts from
the FBI, Shell, Microsoft and NetIQ show you how to dig deep to trace
the steps of a hacker and preserve valuable evidence if you&#x27;re ever
compromised. They&#x27;ll also cover how to safeguard and harden your
Windows network during a live Q&amp;A session. Discover expert
countermeasures to secure and protect your enterprise. Register now! 
http://searchSecurity.com/r/0,,4619,00.htm?FreeSecurityWebcast ____________________________________________________________________
LEAD STORYPHP FLAW COULD CRASH, BURN WEB SERVERS | News: SearchSecurity
A security vulnerability in the popular PHP scripting language could
allow an attacker to crash a Web server or run arbitrary code on a
system. Only particular versions of PHP are impacted, and users are
urged to upgrade or patch immediately. 
http://www.searchsecurity.com/originalContent/0,289142,sid14_gci840432,00.html  MORE ON THIS TOPIC
&gt;&gt; Read the SearchSecurity news exclusive, &quot;Open-source security:
It&#x27;s all in the scrutiny:&quot;
http://searchsecurity.techtarget.com/originalContent/0,289142,sid14_gci811614,00.html &gt;&gt; Visit our Best Web Links on vulnerabilities:
http://searchsecurity.techtarget.com/bestWebLinks/0,289521,sid14_tax281934,00.html &gt;&gt; Click here for Top 10 Articles of the Week:
http://searchsecurity.techtarget.com/originalContent/0,289142,sid14_gci816475,00.html    
____________________________________________________________________
********************************************************************
OTHER STORIES
In addition to the headlines below, others are available on our news
page.
 &gt;&gt; Full Stories: http://searchsecurity.techtarget.com/news/
 
QUICK TAKES: MAJOR VENDORS THROW SUPPORT AT SAML | News:
SearchSecurity
RSA Security and CRM vendor ePeople announce support for the Security
Assertion Markup Language (SAML) specification, leading off this
edition of Quick Takes. Also included are items from Red Siren and
Veridian, ISS and St. Bernard Software, WatchGuard and Sigaba. 
http://www.searchsecurity.com/originalContent/0,289142,sid14_gci840356,00.html NETBUGTRAQ FOUNDER&#x27;S SECURITY TIPS | News: SearchWindowsManageability
What&#x27;s wrong with Windows security? How can you right those wrongs?
Security expert Russ Cooper offers his insights and tips. 
http://searchwindowsmanageability.techtarget.com/originalContent/0,289142,sid33_gci839660,00.html  ROI CALCULATORS: HONEST PROJECTION OR FUZZY MATH? | News:
SearchEBusiness
Corporate budget watchdogs are breathing down your neck, wanting you
to justify every technology expense. So do ROI calculators accurately
forecast a project&#x27;s likely returns or merely encourage you to open
up your wallet and spend?
http://searchebusiness.techtarget.com/originalContent/0,289142,sid19_gci839773,00.html =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
ADDITIONAL SECURITY HEADLINES
All headlines, including those below, are available on our news page.
 &gt;&gt; Full Stories: http://searchsecurity.techtarget.com/news/- WHAT DOES THE FUTURE HOLD FOR PGP?
- GAO FAULTS U.S. CYBER-SECURITY EFFORTS
- FIREWALL SAFEGUARDS WEB-ENABLED APPS
- SECURITY FLAWS IN PINGTEL PHONE____________________________________________________________________
IMPORTANT FEATURES AND LINKS:=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
TAKE OUR POLL | SearchSecurity reader surveyWill heuristics ever fully replace signature-based antivirus
protection?http://searchsecurity.techtarget.com/poll PREVIOUS POLL RESULTSWhat is the weakest security link in your organization?
People (138 votes) 92%
Technology (6 votes) 4%
Don&#x27;t know (6 votes) 4%
Total votes: 150=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
INFOSEC KNOW IT ALL DAILY TRIVIA | Tuesday, July 23, 2002 This type of IDS involves a wrapper or a scanner that looks for
specific events. When it sees the event, it correlates it and decides
whether or not it&#x27;s an acceptable event.
a. anomaly detection
b. signature-based
c. blind barricade
d. profile detection&gt;&gt; Check your answer:
http://searchsecurity.techtarget.com/tip/1,289483,sid14_gci840086,00.html &gt;&gt; Visit our Featured Topic on intrusion detection:
http://searchsecurity.techtarget.com/featuredTopic/0,290042,sid14_gci779273,00.html =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
FIREWALL BEST PRACTICES | Network Security TipFirewalls are not the end-all, be-all solution to information
security. They are, however, a necessary component of an effective
information security infrastructure. The following list is a set of
best practices, in no particular order, that you should consider to
ensure that your firewall is configured for optimal performance and
effectiveness...
http://searchsecurity.techtarget.com/tip/1,289483,sid14_gci838215,00.html  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
RISK ANALYSIS | Best Web LinksKnowing where your company&#x27;s security weaknesses are allow you to
prioritize and better allocate your resources. Learn more about risk
analysis from the resources we&#x27;ve collected here.
http://searchsecurity.techtarget.com/bestWebLinks/0,289521,sid14_tax281906,00.html  
 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
THE MISSING LINK | Scot has cyber tomb with a viewSometimes an epitaph just can&#x27;t be the last word. Billy Kemp was a
great Scot who died a couple of years ago at the young age of 52. He
was a councilman, husband, father and pillar of his community. His
family couldn&#x27;t possibly post all that on a tombstone. But they did
manage to fit http://www.billykemp.org.uk/ on there. Yep, Kemp&#x27;s
tombstone doubles as a billboard for his Web site, created
posthumously by his son as a tribute to his father&#x27;s life. The grave
site has gotten more than 33,000 hits, perhaps more visits than the
gravesite!SOURCE: vnunet
http://www.vnunet.com/News/1133759 
 
&gt;&gt; Have you missed a Missing Link? Peruse our archive: 
http://searchsecurity.techtarget.com/bestWebLinks/0,289521,sid14_tax292200,00.html____________________________________________________________________
********************** SEARCHSECURITY CONTACTS *********************CATHY GAGNE, Site Editor (mailto:cgagne@techtarget.com)
   &gt;&gt; Send in your original articles and best practices.
____________________________________________________________________CRYSTAL FERRARO, Assistant Editor (mailto:cferraro@techtarget.com)
   &gt;&gt; Send in your favorite Web sites.
____________________________________________________________________MIKE MIMOSO, News Editor (mailto:mmimoso@techtarget.com)
   &gt;&gt; Send in your news, product announcements and article ideas.
____________________________________________________________________ED HURLEY, Assistant News Editor (mailto:ehurley@techtarget.com)
   &gt;&gt; Send in your news, product announcements and article ideas.
____________________________________________________________________GABRIELLE DERUSSY (mailto:gderussy@techtarget.com)
   &gt;&gt; Sponsor this or any other TechTarget newsletter.
________________________________________________________________________________________________________________________________________
********************* ABOUT THIS NEWSLETTER ************************Created by TechTarget (http://www.techtarget.com)
 TechTarget - The Most Targeted IT Media
 Copyright 2002, All Rights Reserved.
Unsubscribe from &#x27;Daily News&#x27;
 - Simply Reply to this Email with REMOVE within the Body or Subject
&gt;  or
 - Go to: http://searchSecurity.techtarget.com/register
 - Log in to edit your profile.
 - Click on the link to Edit email subscriptions.
 - Uncheck the box next to the newsletter you wish 
   to unsubscribe from.
 - When finished, click &quot;Save Changes to My Profile.&quot;
</pre>

## Record 008339

**Label:** `benign`

<pre>
bennington / lamar power ua 4 data call me with any questions . gary h
</pre>

## Record 008340

**Label:** `benign`

<pre>
Message----- From: Crispin Cowan [mailto:crispin@wirex.com] Sent: Wednesday, September 04, 2002 7:30 PM To: Ben Mord Cc: Webappsec Securityfocus.Com; SECPROG Securityfocus Subject: Re: use of base image / delta image for automated recovery from attacks Ben Mord wrote:&gt;&gt; -----Original Message----- &gt;&gt; *From:* Crispin Cowan [mailto:crispin@wirex.com] &gt;&gt; *Sent:* Wednesday, September 04, 2002 5:46 PM &gt;&gt; *To:* Ben Mord &gt;&gt; *Cc:* Webappsec Securityfocus.Com; SECPROG Securityfocus &gt;&gt; *Subject:* Re: use of base image / delta image for automated &gt;&gt; recovery from attacks &gt;&gt; &gt;&gt; Ben Mord wrote: &gt;&gt; &gt;&gt; My proposed solution to the first two problems you mention is to be &gt;&gt; less ambitious. The idea is that you *never* commit - instead, you &gt;&gt; simply revert to base state on reboot.&gt;Ah. In that case, you can use something considerably less powerful than &gt;VMWare. All you need is a machine configured to boot from CD-ROM and use &gt;a RAM disk for scratch space. Numerous Linux distros are available that &gt;let you boot a stateless but functional system from CD-ROM.But RAM is expensive, and the directory structures of many systems (e.g. Windows) are not sufficiently organized and standardized to make this combination of bootable CDs and RAM drives practical. Even if you are fortunate enough to be using Linux (or another FHS-compliant *nix), you still can&#x27;t fit a lot on a CD. Its not unusual today to have gigabytes of static multimedia content on the web server. This particular problem can be alleviated somewhat by using DVDs, but this is a temporary solution at best which will become outdated quickly as our data requirements grow and hard drives become cheaper.&gt;&gt; Obviously, you can&#x27;t do this with partitions that accrue important &gt;&gt; state, e.g. a partition that stores database table data.&gt;... but if you *do* want some state to persist, then you need a &gt;mountable writable partition. To protect it, you need some kind of &gt;access control management to decide who can do what to the writable &gt;partition, blah blah blah ... and before you know it, the security &gt;problem starts to look just like it does for conventional servers.Right. This is why you would consolidate all state of any long-term significance on just a couple partitions, and why you would not put static application code on these changeable partitions. Fortunately, most large client/server application physical architectures do this anyhow, because these are two fundamentally different kinds of state with two very different sets of administrative, security, RAID, and backup requirements. People also tend to do this anyhow because layered logical architectures are popular with the GUI at one end, business logic in the middle, and persistence services at the other. This logical architecture maps naturally to a physical architecture that has a static web server, a static application server, and a database server that has static and changeable partitions. (I use the word static versus changeable instead of writeable versus unwritable because the &quot;unchangeable&quot; partitions might be written to for temporary swap space. Who knows what Windows does internally?)My point is that there should be a market out there for a hardware RAID device that can split designated partitions into a permanent base image partition and a temporary delta image partition, that has some simple but solid security measures to prevent the unauthorized remote modification of base images, and that can be configured to clear the delta image when the server is rebooted. If some vendor wished to implement this, they could then market this as a mechanism to help frustrate broad classes of attack that rely on the permanent modification of system or application files via buffer overflows, platform and middleware bugs, etc. The prevention of unauthorized modification of application data, of course, would not be addressed by this particular product. But there are many other techniques out there to defend application data. But those techniques all assume that your system itself has not been compromised at a lower level, which is where this product could help.I would have to think that these features would be relatively easy for a hardware RAID vendor to implement. (I&#x27;m just guessing, of course, with no knowledge of how hardware RAID works internally.) If anyone knows of such a product, I&#x27;d love to hear about it.Ben
</pre>

## Record 008341

**Label:** `benign`

<pre>
belden new cell phone tim belden has a new cell phone number , 503 / 701 - 7278 . please disregard the email he sent earlier this week . merry christmas ! mollie
</pre>

## Record 008342

**Label:** `benign`

<pre>
mt and translation theory workshop workshop on machine translation and translation theory dear colleagues , we ( that is ulrike schwall as a representative of the european association for machine translation and i as a person who is especially interested in combining machine translation with translation theory ) are planning a small workshop in the temporal neighbourhood of coling 92 at nantes . it will take place on july 22nd at 2 pm . at a place to be announced as soon as we know the approximate number of participants . christian boitet told me that we could have a room at the iud . the program will be the following : * 2 - 3 papers ( about 30 minutes each ) by experts in the fields of translation theory and / or mt ; * very short ( max . 5 minutes ) presentations by the participants of what they are doing in the field ( s ) and in which respect they are interested in the combination of mt with translation theory ; * discussion of perspectives and future activities . as uli has just moved to munich and i have n&#x27;t yet got e-mail in my new position at the university of hildesheim , we ask you to use the e-mail account , fax or mailing address of the secretary of the kit group of the tu berlin ( with which i am still cooperating ) in order to signal your interest and for further information . cordula lippke technical university of berlin kit-fast sekr . 5-12 franklinstr . 28-29 d - w-1000 berlin 10 e-mail : lippke @ cs . tu-berlin . de or : lippke @ db0tui11 . bitnet fax : + 49-30 - 314-24929
</pre>

## Record 008343

**Label:** `benign`

<pre>
&quot; syntax and the comparative method concerning syntax and the comparative method : if i understand it correctly , amr @ ares . cs . wayne . edu ( no name ) apparently believes that under certain circumstances one can indeed use syntax as part of the comparative method and cites among other things , the case of a neuter plural in classical greek and old iranian used with a verb in the singular and its possible implications for a similar structure in the proto - language . while i do in theory believe that a particular construction can indeed survive the ravages of time and give us clues to the syntax of earlier levels , this must always be the last criterium we apply and can almost never be used as a sort of proof - unless of course , ( i believe scott de lancey mentioned it , but i &#x27; m not sure ) we can show that , for example , all ergative case endings ( i believe the example was tibeto - burman ) can be traced back to a common form and the morphology , when reconstructed from the &#x27;d aughter &#x27; languages , conclusively points , in this case , to an ergative &#x27; mother &#x27; language . otherwise , john cowan seems to have summed it up best , citing robbin burling &#x27;s book : man &#x27;s many voices . . . just as every language at one point or another borrows lexemes from another langauge , there are literally thousands of examples of langauges borrowing syntactic constructions from other languages , whether substrats or not - even english has a good share of these borrowings . we cannot forget that an extremely large portion of the world &#x27;s population is by necessity bi - or tri-lingual , many of whom cannot even read their own native language , not to mention the other ( s ) or have any kind of linguistic training or sensiti - vity and would therefore pay much attention as to what language a particular construction comes from . there are also the famous &#x27; sprachbunds &#x27; , such as the balkan area and to a certain extent south asia , where through everyday necessity , a large part of the population speaks at least two langauges , as was shown in the case of the village along the maharastra - mysore boundary , ( mentioned by john cowan above ) where one can translate word-for - word from one language into another , although the languages are not - strictly speaking - related . in this case , though , it does n&#x27;t even seem to make sense to speak of language families . in my opinion , the only possible connection is that of language contact or sprachbund . maybe that is part of the problem - what are &#x27; related &#x27; languages , anyway ? we must also remember that this process has undoubtedly been going on ever since people could speak . it would n&#x27;t be difficult to propose , going back to our starting point , a theoretical language contact area for greek and iranian . for example , georgian , at least the modern language , only uses the plural verb for humans . although objects can appear in the plural , the verb appears in the singular . as there have always been greek &#x27; colonies &#x27; throughout the region , one could just as well assume a kind of sprachbund for the whole region at that time , which would be even easier as we know so little about the pre-historic era in that region , making it difficult to disprove . even today , there are certain &#x27; areal &#x27; characteristics such as evidential perfects , and many languages are , or have been at one point , split ergative in the region stretching from nepal to the caucusus , etc . seen in this light , then , we can&#x27;t really speak of the &#x27; oddity &#x27; of the construction with a neutral plural taking a verb in the singular , which , by the way , in my opinion at least , does have a certain semantic justification and is by no means &#x27; odd &#x27; . concerning indo - aryan , the comparative method applied to syntax would certainly give us the ( wrong ) conclusion that vedic sanskrit was a split-ergative language , as all modern indo - aryan languages except standard oriya and begali ( and assamese ? ) are either ergative or split - ergative languages , and many dialects of these three langauges are also split-ergative languages . as there are several hundred ia &#x27; langauges &#x27; , would n&#x27;t we be forced to assume that this goes back to the parent language ? but there is also a problem here with the traditional method . we have ( to a large extent ) cognate endings for the ergative case . so why is n&#x27;t vedic a split-ergative language ? because we have gone back too far . split ergativity is part of the &#x27; parent &#x27; language , but this is presumably to be found in middle indic . for a language family about which we know next to nothing , then , this would certainly lead to tremendous errors . so , it seems to me that , although there are indeed useful insights to be gained by looking at the syntax , it should , as i stated earlier , always be the last criterium , if used at all , in arguing for a kind of genetic relationship . when we have no written history of the peoples of the area , very little in the way of documented sound changes , etc . , we simply cannot say anything yet about the syntactic structure of the proto-language . that will undoubtedly come about in the course of time , but it is just one of many features , none of which alone can &#x27; prove &#x27; anything , except perhaps contact . if there are enough of the &#x27; unlikely &#x27; correspondences ( i . e . &#x27; ist / sind &#x27; and &#x27; est / sunt &#x27; ) , then one can speak with relative security of a genetic relationship , whatever that exactly means . john peterson , kiel , germany
</pre>

## Record 008344

**Label:** `benign`

<pre>
6 . 136 language and species just a brief remark a propos of bemji wald &#x27;s comment on chomsky &#x27;s comment on whether apes can be shown to command &#x27; reflexivization &#x27; ; in particular the question of whether recognizing your image in a mirror as &#x27;s elf &#x27; would be a sign of that ability . if it &#x27;s of interest , cats have a very peculiar relationship with mirrors . in my experience , most cats do not recognize images in mirrors , or tv , etc . as three-dimensional at all , and simply disregard them . but there are smart cats who do recogtnize their own images as cats in mirrors : but almost invariably as &#x27; non-self &#x27; . the typical reaction of a cat seeing itself in a mirror , if it &#x27;s a &#x27; recognizer &#x27; , is to bristle and hiss and go into defense-mode , or sometimes attack-mode . this of course raises what i like to call the dr doolittle problem : since we can&#x27;t talk to animals we have to anthropomorphise and try to guess by analogy what they might be doing , but have no sense of what it feels like to be doing whatever . but in any case reflexivity is a bad example , because in general most animals do not have , in nature , any opportunity to see themselves ; animals that do confront mirror - like objects a lot ( say surface predators that hunt under water like herons , some cats , raccoons ) probably must deliberately as it were disregard the image they see , because they have to concentrate on refraction and what &#x27;s below the surface . roger lass department of linguistics university of cape town
</pre>

## Record 008345

**Label:** `benign`

<pre>
judging at eisteddfodau i would like information on award-giving at eisteddfodau , particularly from someone who has taken part in a number of them . please respond directly to me : ormsby @ servidor . unam . mx diolch am fawr . * * * * * + + + + + * * * * * harold ormsby l . centro de investigaciones y estudios superiores en antropologia social ( ciesas ) mexico ormsby @ servidor . unam . mx
</pre>

## Record 008346

**Label:** `benign`

<pre>
2 nd revision to sea robin volumes ( sea robin p / l ) - - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 06 / 09 / 2000 01 : 24 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; steve holmes &quot; on 06 / 09 / 2000 10 : 54 : 04 am to : , cc : subject : 2 nd revision to sea robin volumes ( sea robin p / l ) let me try this one more time . . . the attached changes are to those meters where a pvr is taken out for processing . effective 6 / 12 / 00 , the sea robin plant will be shut down for repairs and will not be operational again until 6 / 15 / 00 . the attached 12 changes are to be effective 6 / 12 / 00 anc continuing until further notice . sorry for any confusion the previous e - mail may have caused . steve - ei 305 reveffo 61200 . xls - ei 330 areveffo 61200 . xls - ei 330 breveffo 61200 . xls - ei 330 creveffo 61200 . xls - ei 333 reveffo 61200 . xls - ei 337 reveffo 61200 . xls - smi 23 reveffo 61200 . xls - smi 41 reveffo 61200 . xls - smil 28 reveffo 61200 . xls - wc 560 reveffo 61200 . xls - wc 580 reveffo 61200 . xls - gbl 28 reveffo 61200 . xls
</pre>

## Record 008347

**Label:** `benign`

<pre>
enron / hpl actuals for november 2 , 2000 teco tap 30 . 000 / enron ; 45 . 000 / hpl gas daily
</pre>

## Record 008348

**Label:** `benign`

<pre>
re : alex &#x27; s article vince , did you make any more corrections after stinson ? he sent me the file , i removed the comments , and have put it on the page . sam vince j kaminski @ ect 06 / 26 / 2000 10 : 35 am to : william smith / corp / enron @ enron cc : vince j kaminski / hou / ect @ ect subject : re : alex &#x27; s article sam , stinson &#x27; s corrections are in red . mine are in magenta . remove all redundant comments . vince enron north america corp . from : william smith @ enron 06 / 26 / 2000 08 : 52 am to : vince j kaminski / hou / ect @ ect cc : subject : alex &#x27; s article vince , was alex &#x27; s article okay to include in the newsletter ? i &#x27; d like to use it today unless you believe otherwise . sam
</pre>

## Record 008349

**Label:** `benign`

<pre>
Once upon a time, MichÃ¨l wrote :&gt; Has anyone made a working source RPM for dvd::rip for Red Hat 8.0?I don&#x27;t think I&#x27;ve tried yet, but if I did, I probably moved on to another
package after having bumped into one of the problems you mention.If anyone sends me a patch to my spec file and eventually needed patches
etc., I&#x27;d be more than glad to make a new build available.Matthias-- 
Clean custom Red Hat Linux rpm packages : http://freshrpms.net/
Red Hat Linux release 7.3 (Valhalla) running Linux kernel 2.4.18-10acpi
Load : 0.13 0.09 0.09_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008350

**Label:** `benign`

<pre>
website
</pre>

## Record 008351

**Label:** `benign`

<pre>
software license ms . geman , i am just following up to see if you had received my previous message forwarded below and whether you have a response so that we can move forward with this contract ? thank you , karla feldman - - - - - forwarded by karla feldman / hou / ect on 08 / 08 / 2000 09 : 23 am - - - - - karla feldman 07 / 28 / 2000 01 : 41 pm to : geman @ dauphine . fr cc : subject : software license dear ms . geman , i met with vince kaminski yesterday regarding picking back up with the license agreement we were working on back in march . he relayed some additional requirements which need to be added to the agreement , which include the following : 1 . the price agreed upon is $ 90 , 000 . 2 . d - g will provide system support . 3 . no later than 12 months of execution of the agreement , d - g will provide the source code to enron . in the meantime , the source code is to be in escrow . additionally , the source code would be released sooner than the 12 months if any of the following conditions occur : ( i ) d - g goes out of business ; ( ii ) d - g is unable to provide effective technical support ; or ( iii ) if d - g agrees to release it sooner . before i have our attorney add these things to the agreement , we need to discuss the escrow situation . vince mentioned that you had suggested that your attorney keep the software in escrow . is your attorney a u . s . attorney ? it seems like i may have recalled that way back in march you might have said you had a friend or relative that was an attorney . is that the same person ? does this attorney work for a large firm , small firm , or solo practitioner ? basically , if you could just provides some additional information about your attorney , i would appreciate it . we normally would use an escrow company to put the software in escrow . we have dealt with a company here in the u . s . called dsi technology . i will check into that pending your answer regarding your attorney . once we decide what we want to do regarding placing the software in escrow , we will red - line the agreement to reflect such changes and e - mail it back to you for your review . i look forward to hearing from you . karla feldman enron corp . contract administration ( 713 ) 646 - 7554
</pre>

## Record 008352

**Label:** `benign`

<pre>
re : meter 984229 - roos common point - trade zone 18 vance , the issue is that the 4229 meter has been terminated in the system , per cheryl jones , effective 2 / 00 . therefore , any purchases at that point , for 02 / 00 forward , are ua 4 and are probably having a negative impact on your accrual . i think perhaps this deal should be backed up to a wellhead level ? there have not been any measured volumes at 4229 since its termination , so , i don &#x27; t know where exactly the term calpine deal is , physically . your assistance in clearing this up is greatly appreciated . mary
</pre>

## Record 008353

**Label:** `benign`

<pre>

Over on Arstechnica (www.arstechnica.com) I saw mention of a Wired article
that goes into the many wonderfull ways Apple is showing its love and
respect for its users.http://www.wired.com/news/mac/0,2125,55395,00.htmlThere is a good rundown of all the whys and whatfores over at
http://arstechnica.com/reviews/02q3/macosx-10.2/macosx-10.2-5.html&quot;True to form, industrious third party developers saw that they could gain
a competitive advantage by supporting this more capable user interface in
their applications. Apple&#x27;s private menu extras APIs were reverse
engineered and leveraged to great effect. The architecture was so popular
that an application for managing predefined sets of menu extras (third
party or otherwise) was in development.All of that changed with the release of Jaguar--but not because the
private APIs had changed. If they had, third party developers would have
updated their applications to work with the new APIs, as they have
resigned themselves to doing by choosing to use private APIs in the first
place.But what actually happened in Jaguar was that Apple added code to forcibly
exclude all non-Apple menu extras. Other parts of the API did not change.
But when a menu extra is loaded, it is compared to a hard-coded list of
&quot;known&quot; menu extras from Apple. If the menu extra is not on that list, it
is not allowed to load.It&#x27;s easy to laugh at Steve Ballmer&#x27;s sweat-soaked gyrations as he chants
&quot;developers, developers, developers!&quot;, but Microsoft clearly understands
something that Apple is still struggling with. It is in a platform
vendor&#x27;s best interest to encourage development for its platform. In
Apple&#x27;s case, this doesn&#x27;t mean that they have to bend over backwards to
make every single system service and UI element &quot;pluggable&quot; via public
APIs. That&#x27;s clearly a lot of work, and not something that needs to be the
number one priority for an OS in its infancy. And in the meantime, if
third party developers want to sell into a market that requires the
desired functionality to be added in &quot;unsupported&quot; ways, then they must be
prepared for the maintenance consequences of their decisions.But for Apple to go out of its way--to actually expend developer
effort--to stop these third party developers, while still failing to
provide a supported alternative, is incredibly foolish. &quot;
</pre>

## Record 008354

**Label:** `benign`

<pre>
summary : basic order ( and remarks on typology ) last week i asked for references to discussions of a problem that comes up in linguistic typology : when there are conflicting or ambiguous criteria for deciding whether a particular language is a particular &#x27; type &#x27; with respect to some feature ( word order , clause alignment , or whatever ) , how does one decide how to assign that language ? i would like to thank the following for their helpful replies : george huttar , yehuda falk , dan everett , larry trask , jon aske , mike maxwell , mark newson , bill croft , georgia green , ingo plag , randy harris , and andrew carstairs - mccarthy . i was quite surprised at the small amount of published attention that there is to this problem . i was pointed to short discussions ( no more than a couple pages ) in some of the major works devoted to typology : the seminal greenberg paper , comrie &#x27;s &#x27; language universals and linguistic typology &#x27; , croft &#x27;s &#x27; typology and universals &#x27; , and hawkins &#x27; &#x27; word order universals &#x27; . it was also suggested that i look at doris payne &#x27;s &#x27; the pragmatics of word order &#x27; and to papers on yagua by payne and dan everett and on tzotzil by judith aissen . what prompted my query was a reading of johanna nichols &#x27; linguistic diversity in space and time , which i found extremely impressive . but all through it i had an uneasy feeling caused by her pigeon-holeing languages as &#x27; svo &#x27; , &#x27; head-marking &#x27; , &#x27; active-stative &#x27; , or whatever . since so many languages are * not * transparently one particular &#x27; type &#x27; on the surface , i wondered what the basis for these type-characterizations was . there is no general answer given to this question for an obvious reason : neither nichols or anyone else could have profound first-hand knowledge of more than a small handful of the 174 languages in the data base . i suspect that in most cases nichols could not know what criteria were applied to type a language in the sources she consulted , because many sources are insufficiently explicit on that point or take as self-evident some categorization that another would take as controversial or simply wrong . ( consider , for example , her typing french as vso . ) there were , to be sure , cases where nichols threw out some language from the sample of some particular feature because of its obvious ambiguous status with respect to that feature . but doing so could have created more problems than it solved . as both aske and croft pointed out in their postings to me , if a language is &#x27; inconsistent &#x27; with respect to a particular feature , that too is typological data ; data moreover that could be highly relevant to conclusions about stability and diversity over time . in a sample of 174 languages , misassignment of several languages within a category with a 3 - way division could lead to rather different conclusions . likewise , so would postulating a different set of categories or having categories specifically for &#x27; mixed &#x27; types . this is beginning to sound like a critique of nichols , but i do n&#x27;t mean it to be . rather , it is more a commentary on the shaky art of typological pigeon-holeing that underlies not just conclusions about language prehistory , but also much functionalist theorizing and - - increasingly - - generative theorizing as well . there is also the question of sample * size * . typologists strive , quite reasonably , to correct for genetic and areal biases in their samples ( the most heroic effort along these lines that i know of is dryer &#x27;s work ) . but how confident can we be of any attempt to eliminate bias from the sample , given nichols &#x27; conclusions that influences can extend half-way around the globe ? and does n&#x27;t that present a challenge to purported explanations of the relative frequency of some typological feature , which are common in the functionalist literature and increasingly so in the generative ? so much could be the result of historical accident on the one hand and contact and descent on the other , rather than the product of &#x27; external &#x27; functional forces or the design of ug . the smaller the sample of languages where mutual influence or common descent is not a possibility , the more likely that some implicational typological relation is artifactual . and the more reason we have to think that there are a lot of typologically possible but - - purely by chance - - nonexisting languages . fritz newmeyer fjn @ u . washington . edu ps : with respect to the last point , alan bell has shown that if some feature appears in 1 % of the world &#x27;s languages ( say , 40-50 languages ) , it will show up only about 50 % of the time in a random sample of 75 languages . you &#x27;d need a sample of over 200 languages before it could be counted on to show up 90 % of the time . and we are assuming here , utterly counterfactually , that there are no genetic relations or areal influences between languages .
</pre>

## Record 008355

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/10/06.html#business_card_design
Date: 2002-10-06T23:28:00-05:00_Michael Barrish_: Poem[1]. â€œHere are the 15 most popular Oblivio search 
strings since October 1. I consider it a poem.â€[1] http://oblivio.com/road/02100601.shtml

</pre>

## Record 008356

**Label:** `benign`

<pre>
re : fed ex from iris molly , yes , march 1 would work . vince enron north america corp . from : molly magee 01 / 16 / 2001 03 : 36 pm to : vince j kaminski / hou / ect @ ect cc : subject : fed ex from iris just checking to be sure you &#x27; re okay with a march 1 start date for iris ? molly - - - - - - - - - - - - - - - - - - - - - - forwarded by molly magee / hou / ect on 01 / 16 / 2001 03 : 35 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron capital &amp; trade resources corp . from : &quot; iris mack &quot; 01 / 16 / 2001 03 : 13 pm to : molly . magee @ enron . com , vince . j . kaminski @ enron . com cc : subject : fed ex from iris hi , thanks for the fed ex with the offer letter , and other pertinent information about enron . i have signed the letter and returned it to you , along with a couple of other forms . you should receive these documents via fed ex on tomorrow morning . because i have to tie up a few loose ends here in california , i won &#x27; t be able to start until march lst . i hope that is okay . thanks so much . regards , iris get your free download of msn explorer at http : / / explorer . msn . com
</pre>

## Record 008357

**Label:** `benign`

<pre>
URL: http://scriptingnews.userland.com/backissues/2002/09/25#When:5:24:45AM
Date: Wed, 25 Sep 2002 12:24:45 GMTJohn Robb[1]: &quot;Yesterday, AT&amp;T upgraded my cable box to a digital system.&quot;[1] http://jrobb.userland.com/2002/09/25.html#a2595

</pre>

## Record 008358

**Label:** `benign`

<pre>
wellesley list geynille : here is the list of the women who attended the presentation at wellesley along with their e - mail addresses . laura
</pre>

## Record 008359

**Label:** `benign`

<pre>
On Wed, 2002-08-14 at 05:23, Matthias Saou wrote:
&gt; Once upon a time, Chris wrote :
&gt; 
&gt; &gt; To bring things back on topic, I was practicing my &quot;rpmbuild&#x27;n skillz&quot;
&gt; &gt; and made an rpm with some simple software tools to drive my DVD+RW
&gt; &gt; burner. No GUI frontend, but it works just fine from the command line. I
&gt; &gt; even used it to burn a bootable DVD version of Red Hat 7.3.
&gt; &gt; 
&gt; &gt; ftp://people.redhat.com/ckloiber/dvd+rw-tools-0.1.src.rpm
&gt; 
&gt; Nice! :-)
&gt; What about the &quot;dvdrecord&quot; package that&#x27;s already included in 7.3? It
&gt; doesn&#x27;t do what this one does? I&#x27;m asking this because I&#x27;ve got a friend
&gt; with an iMac running YellowDog Linux (basically Red Hat Linux for PPC), and
&gt; it&#x27;s one of the newer versions with a DVD burner. I&#x27;d be very interested in
&gt; using his drive to burn DVDs full of 2-CDs movies or full of &quot;files for
&gt; xmame&quot; ;-)No, the 7.3 dvdrtools works with DVD-R and DVD-RW, this package works
with DVD+R and DVD+RW. (Confused yet?) Unfortuantely these tools don&#x27;t
have a gui frontend, but since the workhorse is a wrapper for mkisofs,
that shouldn&#x27;t be too hard for someone who knows how to do those things.&gt; Also, a bootable DVD of Red Hat Linux 7.3 would be great as I&#x27;ve still not
&gt; burned the CDs even once for myself since I always install through the
&gt; network (and haven&#x27;t found an easy way of purchasing an english boxed set
&gt; here in Spain...).Well that was an image I put together of just the first three disks of
the distro. Make it bootable too. Fun, but slower than a network
install.-- 
Chris Kloiber_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008360

**Label:** `benign`

<pre>
english only ? english only ? this is a reaction to the message by jack aubert . i can understand what you mean but i am not so sure whether you compare things with each other that actually should / can be compared . &gt; however , this is not what &quot; bi-lingualism &quot; &gt; really means in the u . s . it means making it easier for non - english speakers &gt; to get through life without having to learn to speak english in the u . s . , the ( mistaken ) idea that english is the national language makes its easier for the people to take it for granted that one can very well get through life without having to learn any other language . since language learning also entails getting to know a different culture , most people miss the opportunity to learn about other ways of living , eating , etc . &gt; national plural mono-lingualism is a curse ! for everything you say about this , you did not mention one single argument that it should be english that can be the national language and not spanish . what would you say about this if the number of citizens speaking spanish fluently outnumbers the amount of people who speak english fluently ? after all , the u . s . just tops off a continent where the great majority speaks spanish . why should they speak english at all , in that country to the north of latin - america ? &gt; history has not saddled us with this curse , as it has done to &gt; belgium , . . . most &quot; ethnic &quot; conflicts ( there are &gt; counter-examples like the hutus and tutsis and the two flavors of irish ) &gt; trace back to language . basque and catalan separatism is based on language . &gt; canada may end up breaking into two states , each with its own disgruntled &gt; linguistic minority . basque and catalan separatism is not based on language . why do we never hear anything about galician separatism on the iberian peninsula ? galician is a language very different from spanish ( and not so different from portuguese ) . the name of the region is galicia and is part of spain . galician is a language much older than spanish itself : it was used for poetry and by the kings in ancient times . still , we do not hear a lot about galician separatism . neither do we hear anything about leonese separatism , aragonese separatism , andalusian separatism , simply because it does not exist . separatism on the peninsula has nothing to do with language . it has everything to do with historic rights of old kingdoms . the comparison with belgium might not be such a good one . the northern part of belgium used to be dutch , this is the reason these people speak dutch . in the u . s . , there is no regional division of groups of native-speakers as there is in belgium ( and like there is in catalunya and euzkadi too ) . it is much more probable that separatism between dutch - speaking belgians and french - speaking belgians be encouraged , because it is easy to say : o . k . , since the flemish live in the north and the walloons in the south , why do n&#x27;t we split up the country ( and if they would , what can i hold against it ? ) . in the u . s . , this is not a very likely situation since the spanish - speaking citizens live all over the country . there is also a big historical difference : a mexican family living in chicago will never be able to say &quot; jee , we and all our neighbours and all the people in chicago , illinois , michigan , indiana , etc . , we used to belong to another country , a country where spanishwas the language . this soil where we were born and which we owe with thousands of &quot; compatriots &quot; used to belong to a spanish - speaking country . &quot; and what if canada breaks up ? as long as they do it in peace . . . . . really , i think you use the wrong arguments here . i mean , do i use arguments like : look what china has done to tibet : by invading the country they have destroyed a very important cultural and religious heritage , the tibetans are forced to learn chinese , the tibetan culture will be lost soon . so please allow spanish in the u . s . ? no , i do n&#x27;t use this argument either because you cannot compare a cat with a bird . &gt; allowing ( for example ) native spanish speakers living in the &gt; u . s . to avoid learning english as young as possible and as well as possible &gt; . . . . . . . . . . . . . . etc . allowing millions and millions of people in a modern , industrialized country like the u . s . to avoid learning any other language but their own greatly surprises me . really , from a practical point of view , and trying to agree with jack aubert , i would like to conclude with this . yes , of course plural mono-linguism is a problem . but does it make sense to expect that the half of the population of a country that has worse access to good education is going to make the step of learning two languages well ? as has been investigated in minority regions in europe , it has been proved that people can only learn a language well when they know their own language well . this is the reason the frisian language got reintroduced in the schools in frisia again in the seventies . frisia is a region in the north of holland where people speak frisian and dutch . most schools in the cities have dutch as a main language and frisian as a second language but in the country-side , at least the first three years , mathematics and everything is being taught in frisian and dutch is a second language . there is no separatism in frisia . in fact , the frisians are among the dutch to speak dutch best since a lot of other dutch only speak their local dialect and are ununderstandable for someone who comes from another region . since ( children of ) spanish speakers in the u . s . cannot go to a spanish school to learn their mother tongue thoroughly , they will never be able to learn english really well . it seems more realistic to expect that the ones who already speak their mother-tongue well and who have , generally speaking , better access to better education would learn spanish . let them become bilingual ( and maybe monolingual spanish in the end ? ? ) * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * jelly julia de jong * + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + atw , o . k . i . h . jatstraat 26 * + dept . of general linguistics + 9712 ek groningen * + university of groningen + the netherlands * + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - | e - mail : julia @ let . rug . nl | | http : / / www . let . rug . nl / linguistics / jellydejong . html |
</pre>

## Record 008361

**Label:** `benign`

<pre>
start date : 12 / 14 / 01 ; hourahead hour : 23 ; start date : 12 / 14 / 01 ; hourahead hour : 23 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001121423 . txt
</pre>

## Record 008362

**Label:** `benign`

<pre>
rider please see the attached memo . regards , rob
</pre>

## Record 008363

**Label:** `benign`

<pre>
sum : singapore english content - length : 4261 a couple of weeks ago , i asked the following question : ) many people would not regard s &#x27; pore english as a &quot; native &quot; english . ) however , there are many speakers here who grew up speaking ) english , ) ie acquiring english as their first language ; though certainly it may be a ) somewhat different variety from the english spoken in britain or ) america . ) in this respect , what is the currently accepted way of classifying ) singapore english ? in particular , is it possible to say that it is not a ) native language given that some people have it as their first ) language ? three respondants believed that singapore english should be regarded as &quot; native &quot; if it is the first language learned ; while three others suggested &quot; native &quot; has other connotations or suggested other terms for the english of singapore . thus anthea fraser gupta said : i strongly feel that the term &quot; native language &quot; should be used to refer to the language ( s ) an individual first learns , and that any other definition , based on race , on ancestral language use , or geographical origin , is untenable . debbie ziegeler agreed with this view : most people i believe would classify a first language as a native language ( = mother tongue ) , and i think this is what anthea gupta had in mind when she said that english in singapore now has native speakers , and that approximately 20 % of singapore &#x27;s incoming schoolchildren have english as a native language and ms . faridah hudson said : i believe that any language that is learned by a child as its first language should be considered as the native language . granted that singapore english is not as well studied as british or american english , it is still a form of english . on the other hand , wen - chao li claims suggests that &quot; native &quot; does not just refer to the linguistic experience of the individual : i think the word &quot; native &quot; here refers not to whether or not people speak the variety as a native language , but is just a convenient label used to distinguish the english of britain and the us , where the language originated ( &quot; native &quot; in this sense ) , from the english of places like singapore , india , and many countries in africa , where although english is widely spoken as a native language , it is a language that had transplanted another in the last 200 years , a language that was introduced rather than one that &#x27;s been culturally and historically &quot; native &quot; . mario cal varela suggested the use of the term &quot; localized forms of english &quot; for new varieties such as that of singapore : the expression &quot; localized forms of english &quot; is often used . . . to refer to varieties of english that have developed peculiar characteristics ( nativized features ) because of being used in cultural settings different from the so-called native englishes . and rodrik wade prefers &quot; new englishes &quot; : a term that was popularised , if not introduced by platt , weber and ho ( 1984 ) for se and other similar varieties of english is &#x27; new englishes &#x27; . i have used this term when writing about south african black english although as yet this variety has few l1 speakers . i would like to thank all these respondants , as well as alan firth and benny lee for their useful references and umberto for his questions about the pronunciation involved . special thanks to my mentor david deterding for introducing me to the list and for helping me out with this summary . kia - sheng chew national technological university singapore 91a26936217f @ nievax . nie . ac . sg
</pre>

## Record 008364

**Label:** `benign`

<pre>
re : 5 . 1462 comparative method geoffrey pullum writes : ) i wonder if it would not be a good idea to hear something - - ) from the defenders of wide-ranging and large-time - depth comparison , ) preferably - - concerning what would count as evidence against a genetic ) relationship ? well , what is known about how various hypotheses of relationship were rejected in the past ? at one time , it was believed that tai was part of sino - tibetan ; nobody believes this now . on what basis did those learned in the art shift their paradigms ( to mix a few metaphors ) ? i know very little about either language family , but the resemblances between them ( tones , monosyllabicity , the great tone split ) are seductive . i think it would be instructive to hear , from someone who knows the history , just how these faux amis came to be disregarded . john cowan sharing account ( lojbab @ access . digex . net ) for now e &#x27; osai ko sarji la lojban .
</pre>

## Record 008365

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8597652,215/
Date: 2002-10-06T02:28:03+01:00*World latest: *Osama bin Laden is alive and regularly meeting Mullah Omar, the 
fugitive leader of the Taliban, according to a telephone call intercepted by 
American spy satellites.

</pre>

## Record 008366

**Label:** `benign`

<pre>
semantics yeom , jae - il ; a presuppositional analysis of specific indefinites : common grounds as structured information states ; 0-8153 - 3175 - 4 , cloth ; pages , $ 65 ; garland publishing ; outstanding dissertations in linguistics a specific indefinite presupposes that someone has in mind an individual who has the property denoted by its descriptive content . having an individual in mind means that the agent knows who the referent is , and thus it affects the information state of the agent , but not the others . the asymmetric information , shared by all participants in a conversation , cannot be represented when the common ground has only one information state . thus a common ground must have multiple information states , each for each participant in a conversation . the information state of the agent who has an individual in mind must be differentiated from the others &#x27; by being structured into sub-information - states so that each sub-information - state associates the specific indefinite with a different unique individual . it then conveys the information that the agent has some individual in mind , but that it is not known yet who it is . this analysis thus requires a new dynamic semantics which is partially representational and partially denotational . this leads to a new analysis of proper names . specific indefinites tend to have widest scope , which is explained by claiming that specific indefinites trigger presuppositions . presuppositions are assumed to have various scopes with respect to operators in a sentence , and the strongest reading is preferred on rational and economic basis . it is shown that stronger readings roughly correspond to wider scopes . this book will be of interest to scholars who work on indefinite nps , presuppositions , anaphora in belief contexts , and dynamic semantics in general . e - mail : info @ garland . com
</pre>

## Record 008367

**Label:** `benign`

<pre>
http://www.guardian.co.uk/climatechange/story/0,12374,806695,00.htmlWeevil pest warms to life in south-west LondonJames Meek, science correspondent
Tuesday October 8, 2002
The GuardianThey&#x27;re chomping in Chelsea, Fulham and Pimlico, but despite their fancy
taste in London addresses they are neither posh nor particularly fussy: they
are vine weevils and they want to eat your plants.
Two species of vine weevil previously unable to survive Britain&#x27;s cold
winters have been discovered in south-west London, and one has also been
detected in Surrey, Cardiff and Edinburgh.
&quot;This is probably the most serious new garden pest in recent memory,&quot; said
Max Barclay, the curator of beetles at the Natural History Museum in London
who discovered the creatures in the UK.
The black vine weevil has long been native to Britain, causing enormous
damage to glossy leaved plants such as laurels. But the two new species,
otiorhynchus armadillo and otiorhynchus salicicola, not previously known
north of Switzerland, are now prevalent in south London. &quot;It&#x27;s very likely
these weevils have been introduced to Britain through imported ornamental
plants from Italy,&quot; said Dr Barclay. &quot;It looks like they&#x27;re here to stay.&quot;
He found otiorhynchus armadillo on the window of a Chelsea department store
in 1998, but as the shop sold imported house plants, he assumed it was a
migrant. It has now quietly become the most common species of vine weevil in
south-west London. The second invader is not so numerous, but has
established itself firmly in the same area.
Apart from laurels, vine weevils attack bay, viburnum, ornamental ivy, and
grape vines. An early sign of trouble is that notches appear in leaves. The
soil-dwelling larvae bite the roots off below the surface.
One possible explanation for the invaders&#x27; successful colonisation of
Britain is global warming. Earlier springs and milder winters are already a
fact.
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
Sell a Home with Ease!
http://us.click.yahoo.com/SrPZMC/kTmEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008368

**Label:** `benign`

<pre>
start date : 1 / 24 / 02 ; hourahead hour : 20 ; start date : 1 / 24 / 02 ; hourahead hour : 20 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002012420 . txt
</pre>

## Record 008369

**Label:** `benign`

<pre>
re : meeting thanks bob , but i will not be attending as this time does not work for me . i will try to send an alternate . thanks , demetrios &gt; - - - - - - - - - - &gt; from : harshbarger , robert [ smtp : bharsh @ puget . com ] &gt; sent : 2001 , june , 13 9 : 39 am &gt; to : &#x27; dempsey , jerry &#x27; ; ellingson , mons ; fotiou , demetrios ; grow , lisa ; &gt; holden - baker , susan ; smith , chris ; tilghman , carmine ; underwood , john ; &gt; williams , bill &gt; cc : &#x27; hackney , mark &#x27; &gt; subject : meeting &gt; &gt; based on what i &#x27; ve seen so far , looks like june 27 th . &gt; &gt; based on that , i have tentatively booked a room 9 : 30 a . m . to 3 : 30 p . m . at &gt; the pdx conference center , portland , or . if you haven &#x27; t been there &gt; before , &gt; there &#x27; s diagram / map at : &gt; &gt; http : / / portlandairportpdx . com / web _ pop / confer . htm &gt; &gt; some of the items for an agenda : &gt; * elimination of preschedule flag &gt; * time table times refer to prevailing time of the sink / load control &gt; area &gt; * preschedule items &gt; * real - time items &gt; &gt; there are more specific items , i just haven &#x27; t had enough coffee yet . a &gt; real &gt; agenda out next week . &gt; &gt; robert harshbarger &gt; puget sound energy &gt; oasis trading manager &gt; 425 . 882 . 4643 ( desk ) &gt; 206 . 604 . 3251 ( cell ) &gt;
</pre>

## Record 008370

**Label:** `benign`

<pre>
re : equistar deal tickets here is the information you requested . - - - - - - - - - - - - - - - - - - - - - - forwarded by tina valadez / hou / ect on 04 / 07 / 2000 02 : 23 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : kyle r lilly 04 / 07 / 2000 11 : 39 am to : tina valadez / hou / ect @ ect cc : subject : re : equistar deal tickets it looks good to me . tina valadez 04 / 07 / 2000 08 : 29 am to : kyle r lilly / hou / ect @ ect cc : subject : re : equistar deal tickets i need to have these tickets set up so the excess volumes will be priced correctly in unify . currently unify is adding all excess volume for each day and pricing the first 10 , 000 at a certain price and anything over 10 , 000 at a different price . for example meter 1553 may have 5000 on the first , meter 1384 may have 5000 , and meter 1552 may have 5000 . unify currently prices the first 10 , 000 at a certain price , and 5000 at a different price . this is incorrect because none of the meters exceeded 10 , 000 , each meter should be priced at the first tier level . robert needs to set up one additional sale ticket and one additional buyback ticket , but he will not schedule gas to these tickets . anita luong will move the volumes to the correct ticket when she allocates the volumes each month . equistar receives manual invoices each month because they need to see the sale and the buyback on the same invoice , and they also need to have each meter invoiced separately . i need to have these tickets set up to clean up my unify draft invoices . thanks , tina valadez - - - - - - - - - - - - - - - - - - - - - - forwarded by tina valadez / hou / ect on 04 / 07 / 2000 08 : 13 am - - - - - - - - - - - - - - - - - - - - - - - - - - - tina valadez 04 / 06 / 2000 01 : 01 pm to : julie meyers / hou / ect @ ect cc : daren j farmer / hou / ect @ ect , robert e lloyd / hou / ect @ ect subject : re : equistar deal tickets are you still available to assist robert with entering the new deal tickets for equistar ? after talking with bryan hull and anita luong , kyle and i decided we only need 1 additional sale ticket and 1 additional buyback ticket set up . - - - - - - - - - - - - - - - - - - - - - - forwarded by tina valadez / hou / ect on 04 / 06 / 2000 12 : 56 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : robert e lloyd on 04 / 06 / 2000 12 : 40 pm to : tina valadez / hou / ect @ ect cc : subject : re : equistar deal tickets you &#x27; ll may want to run this idea by daren farmer . i don &#x27; t normally add tickets into sitara . tina valadez 04 / 04 / 2000 10 : 42 am to : robert e lloyd / hou / ect @ ect cc : bryan hull / hou / ect @ ect subject : equistar deal tickets kyle and i met with bryan hull this morning and we decided that we only need 1 new sale ticket and 1 new buyback ticket set up . the time period for both tickets should be july 1999 - forward . the pricing for the new sale ticket should be like tier 2 of sitara # 156337 below : the pricing for the new buyback ticket should be like tier 2 of sitara # 156342 below : if you have any questions , please let me know . thanks , tina valadez 3 - 7548
</pre>

## Record 008371

**Label:** `benign`

<pre>
You might be better asking this on the spamassassin-talk list.  The folks 
there will almost definitely have an answer for this.On Thu, 5 Sep 2002, David Rees wrote:&gt; This is my first time running Razor, heard a lot of good things about it so
&gt; I thought I&#x27;d give it a shot.  I also run SpamAssassin so I&#x27;d like to
&gt; integrate the two.
&gt; 
&gt; I&#x27;m not sure if this problem is with SpamAssassin or Razor, so I though I&#x27;d
&gt; shoot the message here first
&gt; 
&gt; With a freshly installed SpamAssassin 2.41 and Razor 2.14 I&#x27;m seeing these
&gt; messages spit out from spamd:
&gt; 
&gt; razor2 check skipped: No such file or directory Can&#x27;t call method &quot;log&quot; on
&gt; unblessed reference at /usr/lib/perl5/site_perl/5.6.0/Razor2/Client/Agent.pm
&gt; line 211,  line 75.
&gt; 
&gt; Any ideas?  razor seems to run correctly over the command line.
&gt; 
&gt; Thanks,
&gt; -Dave
&gt; 
&gt; 
&gt; -------------------------------------------------------
&gt; This sf.net email is sponsored by: OSDN - Tired of that same old
&gt; cell phone?  Get a new here for FREE!
&gt; https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
&gt; _______________________________________________
&gt; Razor-users mailing list
&gt; Razor-users@lists.sourceforge.net
&gt; https://lists.sourceforge.net/lists/listinfo/razor-users
&gt; -------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008372

**Label:** `benign`

<pre>
crm system sally , i gather that mary has taken extended leave . can you advise who might know anything about this system ? thanks , richard - - - - - - - - - - - - - - - - - - - - - - forwarded by richard sage / lon / ect on 03 / 04 / 2001 23 : 22 - - - - - - - - - - - - - - - - - - - - - - - - - - - richard sage 19 / 03 / 2001 15 : 59 to : mary solmonson / enron @ enronxgate cc : subject : crm system mary , are you around - your voicemail message has said you were out for the day , for weeks . we have a need for a crm system , but not a very complicated one , and i thought that the one that tony mends demonstrated a couple of years ago might fit the bill . he tells me that it is in your area of responsibilities ! thanks , richard
</pre>

## Record 008373

**Label:** `benign`

<pre>
Hello,
I&#x27;ve got a small problem but still annoying. I upgraded from RH 7.1 to 
RH 7.3 and everything looks ok except that the time is ahead by one 
hour. I&#x27;ve been looking the man files for hwclock and options but it 
simply doesn&#x27;t work, it gives the following error from he shell as well 
as from the startup while loading the kernel:  hwclock: ioctl() to 
/dev/rtc to turn on update interrupts failed unexpectedly, errno=25: 
Inappropriate ioctl for device.
.... my solution at the time is to enter the setup of the PC and reduce 
the time by one hour (awful!)
Regards,
Felipe
PRL, DCU-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008374

**Label:** `benign`

<pre>
start date : 1 / 30 / 02 ; hourahead hour : 9 ; start date : 1 / 30 / 02 ; hourahead hour : 9 ; no ancillary schedules awarded . variances detected . variances detected in energy import / export schedule . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002013009 . txt - - - - energy import / export schedule - - - - + + + hour 9 - bad data from iso . trans _ type : final sc _ id : ectstca mkt _ type : 2 trans _ date : 1 / 30 / 02 tie _ point : malin _ 5 _ rndmtn interchg _ id : enrj _ ciso _ 3000 engy _ type : firm
</pre>

## Record 008375

**Label:** `benign`

<pre>
delainey and i started initial discussions reguarding ees and the customers and products they plan to market . these were initial discussions . dave is writing something up to send to me . before i agree on anything i will talk to all of you . some of the meeting that are happening may be a little premature . john
</pre>

## Record 008376

**Label:** `benign`

<pre>
Howdy all, I have a friend with the problem outlined below, suggestions anyone?
&quot;I have a dell inspirion 2650 laptop, with a P4 1.6GHz proc., an Nvidia Geforce II graphics card (8Mb) and am trying  to 
install redhat 7.3 .
The installation goes nicely until the Xwindows setup. My graphics card IS detected but not the monitor. I have  
randomly chosen various LCD laptop display monitors but none seem to work, problem is that when i test a  particular 
monitor the screen doesn&#x27;t default back to the nice clear picture  i have become acustomed to but  remains fuzzy and 
flashy so it is impossible to test another monitor type. rebooting allows me to run in text mode  where i try to configure X 
again with Xconfigurator but i run into the same problem again.Very annoying...&quot;Ta very, R----------------------------------------
Richard Eibrand,
School of Computing
Dublin Institute of Technology
Kevin Street, Dublin 8
IrelandOffice : 	+353 1 402 4682
Mobile : 	+353 87 618 1793
Email  : 	richard.eibrand@dit.ie, 
         	reibrand@maths.kst.dit.ie -- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008377

**Label:** `benign`

<pre>
new albany &amp; duke john , the dash is in progress . stuart had a great meeting with duke on friday and it appears that there is a deal to be had . looks like we could possibly sign by friday . stuart wants to meet with you and presto on monday ( he has a call into kim to set a time ) . thanks , don
</pre>

## Record 008378

**Label:** `benign`

<pre>
re : noms / actual flow for 3 / 29 / 01 we agree with the nomination . &quot; eileen ponton &quot; on 03 / 30 / 2001 10 : 05 : 40 am to : david avila / lsp / enserch / us @ tu , charlie stone / texas utilities @ tu , melissa jones / texas utilities @ tu , hpl . scheduling @ enron . com , liz . bellamy @ enron . com cc : subject : noms / actual flow for 3 / 29 / 01 nom mcf mmbtu 24 , 583 24 , 999 25 , 674 btu = 1 . 027
</pre>

## Record 008379

**Label:** `benign`

<pre>
giuseppe paleologo molly , giuseppe is finishing his ph . d . at stanford and worked for us last summer . we would like to make him an offer to bring him as a manager . vince would like to offer $ 110 k base plus a $ 20 k signing bonus and whatever would be the appropriate relocation package ( he is single . ) . he is leaving on monday for europe , so it would be preferable if we can get an offer letter in his hands by friday or saturday . i have verbally given him this offer already , but told him that you would be the expert regarding what is covered in the relocation part . he should be sending me his current address by email which i will forward to you a . s . a . p . thanks , stinson x 34748 p . s . regarding jinbaek . we would be happy to pay his air ticket . - - - - - - - - - - - - - - - - - - - - - - forwarded by stinson gibner / hou / ect on 04 / 25 / 2001 03 : 26 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - giuseppe andrea paleologo @ stanford . edu on 04 / 23 / 2001 07 : 33 : 29 pm please respond to gappy @ stanford . edu sent by : gappy @ stanford . edu to : stinson . gibner @ enron . com cc : subject : re : from stinson stinso , nice to hear from you . things are going well here . the only annoyance comes from the ins . i applied for curricular practical training , and it will take about three months to have the work permit . receiving an h - 1 takes understably much longer . other than this , i would like to know how are things in the research group and ebs . i will leave for italy next monday and will stay there two weeks . i hope to hear from you before my departure . giuseppe stinson . gibner @ enron . com wrote : &gt; &gt; giuseppe , &gt; &gt; how are you ? is your thesis still on schedule ? i hope things are going &gt; well . i will try and give you a call in the next day or two to see how &gt; things are going and to bring you up to date on what &#x27; s going on here at &gt; enron . look forward to talking with you . &gt; &gt; - - stinson - - giuseppe a . paleologo email : gappy @ stanford . edu office phone : ( 650 ) 725 - 0541
</pre>

## Record 008380

**Label:** `benign`

<pre>
can SA say &quot;Listed in Razor2&quot; when using Razor2? I get a lot of reports that are misreports to Razor1 not Razor2.If this is Razor2, then revocation will fix the problem. cheers, vipul.On Wed, Aug 14, 2002 at 11:56:26AM +0100, Justin Mason wrote: &gt; &gt; As the proud new owner of a free antarc.tk domain ;), I got a confirmation &gt; mail, which fell into Razor. &gt; &gt; Looks like the fuzzy matching will hit on all confirmation mails until &gt; it&#x27;s whitelisted. &gt; &gt; just fyi, &gt; &gt; --j. &gt; &gt; ------- Forwarded Message &gt; &gt; Date: Wed, 14 Aug 2002 11:37:35 -0000 &gt; From: support@dot.tk (Dot TK registration center) &gt; To: xxxxxx@xxxxx.xxx &gt; Subject: *****SPAM***** Please confirm your free registration &gt; &gt; SPAM: -------------------- Start SpamAssassin results ---------------------- &gt; SPAM: This mail is probably spam. The original message has been altered &gt; SPAM: so you can recognise or block similar unwanted mail in future. &gt; SPAM: See http://spamassassin.org/tag/ for more details. &gt; SPAM: &gt; SPAM: Content analysis details: (7.5 hits, 7 required) &gt; SPAM: SEE_FOR_YOURSELF (2.8 points) BODY: See for yourself &gt; SPAM: SPAM_PHRASE_13_21 (1.5 points) BODY: Contains phrases frequently found in spam &gt; SPAM: RAZOR_CHECK (3.0 points) Listed in Razor, see http://razor.sourceforge.net/ &gt; SPAM: MSG_ID_ADDED_BY_MTA_3 (0.2 points) &#x27;Message-Id&#x27; was added by a relay (3) &gt; SPAM: &gt; SPAM: -------------------- End of SpamAssassin results --------------------- &gt; &gt; &gt; Malo ni! &gt; and thank you (faka fetai) &gt; for registering with Dot TK! &gt; &gt; Your e-mail address : xxxxxxx@xxxxx.xxx &gt; password: xxxxxxxxx &gt; &gt; confirmation code: xxxxxxx &gt; (please note: this is not your password) &gt; &gt; As you know we like to keep things simple, so all you need &gt; to do to activate your Dot TK address is... &gt; &gt; 1. Go to http://my.dot.tk/cgi-bin/confirm.taloha?tk=xxxxxx &gt; &gt; 2. And enter your confirmation code &gt; &gt; If you have received this email, but did not join us @ Dot TK, &gt; then somebody tried to register using your e-mail address. &gt; &gt; You can simply ignore this message... But why not come on in, &gt; and see for yourself if your own -free- domain name is still &gt; available at http://www.dot.tk &gt; &gt; Any questions? Please visit our feedback page at &gt; http://www.dot.tk/cgi-bin/response.taloha &gt; Hope to see you soon at Dot TK. &gt; &gt; Dot TK -- Dividing Domains Differently. &gt; &gt; &gt; &gt; ------- End of Forwarded Message &gt; &gt; &gt; &gt; ------------------------------------------------------- &gt; This sf.net email is sponsored by: Dice - The leading online job board &gt; for high-tech professionals. Search and apply for tech jobs today! &gt; http://seeker.dice.com/seeker.epl?rel_code=31 &gt; _______________________________________________ &gt; Razor-users mailing list &gt; Razor-users@lists.sourceforge.net &gt; https://lists.sourceforge.net/lists/listinfo/razor-users-- Vipul Ved Prakash | &quot;The future is here, it&#x27;s just not Software Design Artist | widely distributed.&quot; http://vipul.net/ | -- William Gibson
</pre>

## Record 008381

**Label:** `benign`

<pre>
&gt; Anyone know what Quaoar means or stands for? Can&#x27;t find it in the
&gt; dictionary. Scrabble players should be happy!
&gt;
http://www.angelfire.com/journal/cathbodua/Gods/Qgods.htmlQuaoar Their only god who &#x27;came down from heaven; and, after reducing chaos
to order, out the world on the back of seven giants. He then created the
lower animals,&#x27; and then mankind. Los Angeles County Indians, California ------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
Home Selling? Try Us!
http://us.click.yahoo.com/QrPZMC/iTmEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008382

**Label:** `benign`

<pre>
second language teaching : reading , writing &amp; discourse 22-25 june 1999 conference on second language teaching : reading , writing and discourse venue : hong kong university of science and technology ( 22-23 june 1999 ) guangdong university of foreign studies ( 24-25 june 1999 ) plenary speakers : professor ann johns ( san diego state university ) , professor kensaku yoshida ( sophia university , tokyo ) abstracts to be received by 22 december 1998 early bird registration by 15 march 1999 registration by 29 may 1999 for further information , please visit our conference web-site : http : / / lc . ust . hk / ~ centre / 99conf . html
</pre>

## Record 008383

**Label:** `benign`

<pre>
On Sun, 11 Aug 2002 bitbitch@magnesium.net wrote:&gt; You mean like on mac keyboards :-)    Or laptops (which are as damnYeah, I was thinking of the G4 keyboard when I wrote this. Otherwise lousy
feel and key placement, though. (That&#x27;s why I&#x27;m holding on to my IBM Model
M Space Saver. Once I get an PS2 to USB converter, I expect it will
outlive several generations of computer hardware).Very good for sticking in USB fobs into, though. CRTs/LCD panels are even 
better for that, though.&gt; near close to keyboard/usb connection as one can get, without the real
&gt; thing)I think laptops are largely useless because of the battery and the 
keyboard issue.http://xent.com/mailman/listinfo/fork

</pre>

## Record 008384

**Label:** `benign`

<pre>
John P. Looney wrote:
&gt; On Tue, Aug 13, 2002 at 09:53:55AM +0100, Damian O&#x27; Sullivan mentioned:
&gt; 
&gt;&gt;&gt; Curiously, when I go into the boot prom, an use
&gt;&gt;&gt; &quot;set_params&quot; I can tell it to mount /dev/hda2 as root. But 
&gt;&gt;&gt;then it uses the PROM copy of the kernel (dodgy 2.2.16 
&gt;&gt;&gt;kernel), which doesn&#x27;t know ext3, so wants to fsck up my disk.
&gt;&gt;
&gt;&gt;Boot prom on a cobalt? Is this an old mips based one? How did you get to it?serial I would guess&gt; 
&gt;  This is actually a raq3. Though, I do have an old raq2 that Liam was
&gt; helping me get netbsd on (about all you&#x27;ll get on a 16MB machine these
&gt; days).
&gt; 
&gt;  Anyway, I wussed out, and copied hda1:/ to hda2:/boot and set the bootfs
&gt; to be hda2. It worked, though it&#x27;s mounting an ext3fs as ext2. But I&#x27;m
&gt; getting there.
&gt; http://list.cobalt.com/pipermail/cobalt-developers/2001-February/026056.htmlPÃ¡draig.
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008385

**Label:** `benign`

<pre>
multilinguality workshop ecai98 second multilinguality in the lexicon workshop august 25th 1998 a workshop held as part of the 13th biennial european conference on artificial intelligence ( ecai-98 ) august 23rd - 28th , 1998 , brighton , uk organising committee : lynne cahill ( university of sussex ) susan armstrong ( issco ) pierette bouillon ( issco ) roger evans ( itri , university of brighton ) web site : http : / / www . cogs . susx . ac . uk / ecai98 / tw / w13 . html the 1st multilinguality in the lexicon workshop took place in april 1996 as part of the aisb workshop series at sussex , and brought together researchers with a wide range of experiences in multilingual lexicon development . this second mll workshop will follow up on some of the work presented there , as well as introducing other work on multilinguality in the lexicon . the workshop will run for one day as part of ecai-98 in brighton , uk . there will be two blocks of three papers , each followed by a led discussion session . programme : 9 . 30 pierrette bouillon &amp; federica busa ` a verb like &quot; attendre &quot; : the point of view of &quot; generative lexicon &quot; &#x27; 10 . 15 helge dyvik ` translations as semantic mirrors &#x27; 11 . 00 coffee 11 . 30 evelyne viegas ` multilinguality and genericity in syntagmatic relations &#x27; 12 . 15 discussion 1 . 00 lunch 2 . 00 manfred stede ` particles : particularly problematic for multilingual nlp &#x27; 2 . 45 lynne cahill ` automatic extension of a hierarchical multilingual lexicon &#x27; 3 . 30 tea 4 . 00 john bateman &amp; serge sharoff ` multilingual grammars and multilingual lexicons for multilingual text generation &#x27; 4 . 45 discussion 5 . 30 close further information : to obtain further information about ecai-98 and the workshop please visit the ecai-98 web site at http : / / www . cogs . susx . ac . uk / ecai98 /
</pre>

## Record 008386

**Label:** `benign`

<pre>
Martin Adamson wrote:&gt;&gt;And we know how unbiased MEMRI is, don&#x27;t we....
&gt;&gt;
&gt; 
&gt; Oh, of course, you&#x27;re right, any information not coming from a source that 
&gt; fits your pre-conceived world view can simply be dismissed out of hand.
&gt; 
&gt; Martin
&gt; For goddess&#x27; sake Martin that seems to be exactly what you&#x27;re doing.  You 
started your reply to Tim&#x27;s posting of the Guardian article by suggesting that 
it was factually inaccurate.  Did you actually read it or did you just assume 
that if the Grauniad writes about a Muslim extremist they must be making him out 
as an all round nice guy?Stewart
-- 
Stewart Smith
Scottish Microelectronics Centre, University of Edinburgh.
http://www.ee.ed.ac.uk/~sxs/
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
4 DVDs Free +s&amp;p Join Now
http://us.click.yahoo.com/pt6YBB/NXiEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008387

**Label:** `benign`

<pre>
storage model security stinson , i have added a time bomb and security file check to the model . we are ready to release it to brad , and improve the model from his feed back . zimin
</pre>

## Record 008388

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/10/02.html#cast_not_the_first_stone
Date: 2002-10-02T09:30:52-05:00First Blood is Spilled at Record Industry Hearings[1]. â€œIn a shocking 
statement made by Back Street Boy, Kevin Richardson, he testified that they 
have NEVER received a royalty check, and that they only took a large advance 
after their third hit album in a row failed to earn them a penny in 
royalties.â€[1] http://www.musicdish.com/mag/?id=6675

</pre>

## Record 008389

**Label:** `benign`

<pre>
re : annual report var disclosures - open items i spoke to greg adams on the eog commodity affiliate positions . he has never supplied var on these . we have no information on these . you need to ask whoever supplies you the quarterly numbers to supply you with the non - quarter end months . jill enron global finance from : jill erwin 01 / 25 / 2000 05 : 23 pm to : georgeanne hodges / hou / ect @ ect cc : steve ross / hou / ect @ ect , jeff nogid / hou / ect @ ect , eugenio perez / hou / ect @ ect , tony harris / hou / ect @ ect , jan johnson / gpgfin / enron @ enron , bob shults / hou / ect @ ect , sally beck @ ect , jennifer stevenson / aa / corp / enron @ enron , derek claybrook / aa / corp / enron @ enron , faith killen / hou / ect @ ect subject : re : annual report var disclosures - open items see colored notes below . from : georgeanne hodges 01 / 25 / 2000 03 : 25 pm to : jill erwin / hou / ect @ ect , steve ross / hou / ect @ ect , jeff nogid / hou / ect @ ect , eugenio perez / hou / ect @ ect , tony harris / hou / ect @ ect cc : jan johnson / gpgfin / enron @ enron , bob shults / hou / ect @ ect , sally beck @ ect , jennifer stevenson / aa / corp / enron @ enron , derek claybrook / aa / corp / enron @ enron , faith killen / hou / ect @ ect subject : annual report var disclosures - open items this is part ii of the open items on var , addressing ecm , pge &amp; affiliate books from my review of eugenio &#x27; s consolidated var spreadsheet , the following listed items are those that are open that we need information from you on . corp . is looking to type the first draft of the annual report ( to be discussed with the audit committee ) this friday , so we need your help with this information as soon as possible . if you will not be able to have all of the information to eugenio by thursday night , please let me know . we may be able to give you some additional time to gather some of the smaller pieces . if you need to forward this on to others , please do so . aa if you know of any other issues of completeness that i have not addressed , please let eugenio and i know ! * have aa and jan johnson concluded that we only need to include the puts on the enron stock ? if so we need all twelve months of comparable data as applicable . steve ross sent to eugenio on monday ( yesterday ) . let him know if he needs to re - send it . * are the swaps shown on the ecm fn 3 schedule for the phantom stock plan the puts that we have been talking about ? if not do these swaps need to be included in var and the non - trading portion of fn 3 ? i haven &#x27; t seen them before . these are new puts . i checked with jan . she said to include the positions as non - trading equity . the trades were both done in november by gary hickerson &#x27; s group . be sure he hasn &#x27; t included them in his numbers . we &#x27; ll get the var for november and december to you on wednesday . ( steve , this is yours ) . * what is yosemite ? is it a trs that i need to include in var and fn 3 ? internally we call it a swap but in the legal document it is called an agreement . it &#x27; s actually more of a guarantee . i talked to jan about it and we don &#x27; t think it goes in fn 3 . * for non - trading i \ r and f \ x , we are still missing all non - quarter end months . jeff , this ones yours . we need to send the information to research and have them run the var monthly in 2000 also . * pge - january , february and march var is missing on eugenio &#x27; s schedule . i don &#x27; t have a clue what pge &#x27; s information is . i only know about rhythms which is in a separate section . you &#x27; ll have to ask pge . * what month was the eog sale effective ? we need commodity affiliate for all of the non - quarter end months prior to the sale . the sale took place august 16 . i have never even heard of any eog commodity affiliate position . i was told greg adams handled these at one point . i &#x27; ll ask him tomorrow .
</pre>

## Record 008390

**Label:** `benign`

<pre>
re : erc financing with regards to the existing deal , the setup costs and timeline was primarily the result of working out the kinks on legal / accounting structures to find a deal structure both sides could live with . i would hope costs would be lower on future additions . having said that , though , the underlying inventory items would have to be evaluated by the lenders for residual value and liquidity . to the degree the underlying asset would support less than book value upon a quick liquidation , the put / call price protection embeds more enron risk in the financing . in the current environment , i am less than confident i could sell the unsecured enron piece shortly . jim , can you stay point on this exercise for the ercs and other items . thanks . - - - - - - - - - - - - - - - - - - - - - - - - - - sent from my blackberry wireless handheld ( www . blackberry . net )
</pre>

## Record 008391

**Label:** `benign`

<pre>
qs : language attitude studies ( german ) can anybody who has done ( or knows about ) current research on language attitudes in a &#x27;s tandard / non-standard variety setting &#x27; please contact me . i have just started a thesis on &#x27; attitudes towards &quot; hochdeutsch &quot; in southern germany &#x27; and i would like to find out more about recent ( 1990 + ) research on language attitude studies , especially in the german - speaking area . thank you anne hof ( german dept . , university of manchester ) mflugah @ fs1 . art . man . ac . uk
</pre>

## Record 008392

**Label:** `benign`

<pre>
research and development charges to gpg janice : here is the memo i spoke to you about concerning the charges that need to be reversed . if you have any questions , please call me . shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 08 / 16 / 2000 09 : 54 am - - - - - - - - - - - - - - - - - - - - - - - - - - - kimberly watson @ enron 06 / 15 / 2000 03 : 26 pm to : kent miller / et &amp; s / enron @ enron , martha janousek / et &amp; s / enron @ enron , elaine concklin / et &amp; s / enron @ enron , vera apodaca / et &amp; s / enron @ enron , rod hayslett / fgt / enron @ enron , vince j kaminski / hou / ect @ ect , pinnamaneni krishnarao / hou / ect @ ect , shirley crenshaw / hou / ect @ ect cc : subject : research and development charges to gpg vince , krishna and i met to discuss the research and development cross charges to gpg for january through june . these charges are based upon a budgeted amount of allocating three resources to the gpg group ( two resources for revenue management and one resource for gpg marketing ) . we have utilized the r &amp; d group some during the first half of the year , but not to the full extent of three resources . vince and krishna have agreed to reverse out some of the charges that were budgeted january through june . we will revisit this issue again toward the end of the year to determine if any adjustments are necessary for july through december . the budgeted amount january through june has been distributed between the nng and tw as follows : research and development budget ( $ 000 ) nng tw et &amp; s january $ 46 . 7 $ 46 . 7 february $ 26 . 1 $ 20 . 4 $ 46 . 5 march $ 35 . 9 $ 10 . 2 $ 46 . 1 april $ 34 . 8 $ 10 . 2 $ 45 . 0 may $ 36 . 4 $ 8 . 8 $ 45 . 2 june $ 36 . 4 $ 8 . 8 $ 45 . 2 $ 274 . 7 out of the $ 274 . 7 budgeted for the first half of the year , $ 199 . 7 is to be reversed back to the research and development department . this reversal will occur in july . vince , vera apodaca ( ext . x 35980 ) will be our contact to help facilitate the reversal of these charges . elaine , the remaining $ 75 . 0 ( $ 274 . 7 - $ 199 . 7 ) is to be allocated with $ 50 . 0 going to the revenue management work order and $ 25 . 0 remaining in o &amp; m . if anyone has any questions or needs additional information , please don &#x27; t hesitate to call me ( x 33098 ) . thanks , kim .
</pre>

## Record 008393

**Label:** `benign`

<pre>
meter 8022 - bad scada feedback to sitara beginning on january 14 th at meter 988022 ( united salt ) , the bav feed into pops shows excessive flow ( over 200 m / day beginning the 15 th ) . o &#x27; neal brought this to my attention this evening . this issue will blow out our ua 4 number , and probably our p &amp; l . i phoned lee in gas control to make sure a tech was sent out to check calibration and scada feed . i would like to have better estimates from the 14 th through the 19 th asap so that we can make corrections to all pertinent numbers . thank you , mary
</pre>

## Record 008394

**Label:** `benign`

<pre>
    Date:        Thu, 12 Sep 2002 23:26:33 -0500
    From:        Hal DeVore 
    Message-ID:  &lt;23204.1031891193@dimebox&gt;  | 1) Right click on the folder label in the folder listThat (the way I have it configured, and it sounds as if the way Tony does
too) just does a move (rather than select as target without moving).Of course, if you can manage to get no messages currently selected, then
it works fine.  | 2) In the main window, the &quot;+&quot; key puts you into a &quot;change 
  |    folder&quot; mode (the first time you use it after starting exmh),
  |    hit a second + and you go to &quot;set a target&quot; mode.  Type a few
  |    characters of the folder name and hit space for autocomplete.This works, but is not nice if you&#x27;re not using the keyboard, but just
the mouse.Tony: I agree - a nice way to link in one click would be good, and should
be easy to add, though currently adding mouse bindings (something like
shift right click would be a good choice) is much harder than adding
key bindings.But note there&#x27;s no need to &quot;undo&quot; - the way I generally use link, if
the desired destination folder isn&#x27;t the current selected target, is
to right click on the target, which selects it and moves the message,
(and because I have the &quot;automatic move to the next message on move or
link option set) select the message again, and then &quot;Link&quot;.Exmh only permits one uncomitted action to be selected for a message at a
time, that is, one of delete, move, or link.   Selecting any of those
implicitly undoes any previous choice from the three (so you cannot
achieve a &quot;move&quot; by doing a link, then delete, then commit, it needs to
be link, commit, delete, commit).  (xmh was just the same there incidentally).  | How&#x27;s spring shaping up &quot;down under&quot;?No meaningful comment from me, I&#x27;m not there at the minute.   But I&#x27;m told
that where I&#x27;m from it is cold, wet, and miserable, though has been better
during the day (sunny days, cold nights) for the past few.    In any case,
all of that is a good enough reason to stay away...kre_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 008395

**Label:** `benign`

<pre>
peoples energy board of directors on april 4 , 2001 , peoples energy will hold their board of directors meeting in houston . i have been engaged with their executive team in their planning process and the schedule is as follows : 8 : 00 am to 10 : 00 am board of directors meeting - peoples energy production office , houston 10 : 30 am to 11 : 30 am enron - tour of trading floor , enron bio , etc . 12 : 00 pm to 5 : 00 pm various activities ( golf , art museum , etc ) 6 : 30 pm - evening enron field , astros vs . milwaukee , enron suite - enron hosting i am requesting introductions ( if available ) and attendance on the trading floor from each of you , dave , and jeff skilling . dave and jeff were requested by peoples due to their prior involvement with this account . as we transition your involvement , i would like to use this event as an opportunity to ease the departure of dave and provide an informal format to engage our new team . those in attendance will include : ceo , peoples energy - dick terry president and coo , peoples energy - tom patrick executive vice president , peoples energy - bill morrow ( signatory and key relationship for enron current transactions ) ceo &amp; chairman of the board , chicago board options exchange - bill brodsky chairman , jb capital management , llc - jim boris chairman , president and ceo , azteca foods - arthur velasquez managing partner of washington , pitman and mckeever , llc - lester mckeever professor , university of chicago - pastora san juan cafferty chairman of the board , evanston northwestern healthcare - homer livingston retired vice chairman , centel corp . - bill mitchell non - executive chairman , alleghany asset management - richard toft various other pec executives please let me know if your schedules accommodate this request . if you have questions , please contact me at 312 / 541 - 1225 . laura luce
</pre>

## Record 008396

**Label:** `benign`

<pre>
fulbright announcement : please post / disseminate to lists fulbright announcement : please post / disseminate to lists subject fulbright scholar program competition for 1996-97 : fulbright chairs in western europe and canada action : submissions due may 1 , 1995 info : dr . karen adams or ms . margo cunniffe council for international exchange of scholars 3007 tilden street , n . w . , suite 5m washington , dc 20008-3009 telephone : 202-686 - 6245 or 202 / 686-6242 fax : 202-362 - 3442 internet : we1 @ ciesnet . cies . org * * * * * * * * * * * * * * * * * * * * award descriptions : 1 . italy : venice chair department of philosophy and theory of sciences , university of venice . three months , between 2 / 97 and 6 / 97 . specialty : philosophy of language or theoretical linguistics . assignment : grantee will teach on both graduate and undergraduate levels and is to offer an advanced class in either contemporary theoretical linguistics ( theory of syntax and the syntax of logical form ) or contemporary philosophy of language ( theory of meaning , semantics of natural language , theory of predication , language and ontology ) . lecturing in english . 2 . italy : naples chair department of modern philology , university of naples . three months , between 3 / 1 / 97 and 5 / / 31 / 97 . specialty : american literature , american cultural studies , american language , or general linguistics . assignment : lecturing in english . occasional guest lectures at other cultural institutions in naples and elsewhere in italy .
</pre>

## Record 008397

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-5,8296986,1717/
Date: 2002-09-27T02:45:52+01:00(Some Guy)

</pre>

## Record 008398

**Label:** `benign`

<pre>
&gt;
&gt; Sorry, Shrub, your political newspeak is falling on deaf ears. Oh, 
&gt; sorry, maybe I should self-censor my thoughts to avoid being put in a 
&gt; &#x27;re-education camp&#x27; by Ashcrofts gestappo? Gads, maybe someone on FoRK 
&gt; has joined your T.I.P.S. program and became an official citizen spy?
&gt;
&gt;
&gt; In disgust,
&gt; Elias
Well the message was clear to me - the US wants to start an arms race to 
jack up their world arms sales monopoly.Owen
</pre>

## Record 008399

**Label:** `benign`

<pre>
URL: http://www.mozillazine.org/weblogs/hyatt/#85471617
Date: Not suppliedA lot of people seem to be missing the point of Phoenix, as evidenced by the 
responses on Mozilla News[1] and MozillaZine[2]. Let me emphasize something 
here: if you think Mozilla&#x27;s current UI is acceptable, then you are clearly not 
the target audience for Phoenix.Here is a quiz to test whether or not Phoenix is the right browser for you.
- The link toolbar is: 
- critical to my day-to-day use 
- vital when using Bugzilla! Doesn&#x27;t everybody use Bugzilla?
-  link what?- The sidebar is 
- indispensable since i run at 1600x1200 resolution 
- not cool enough, since i can&#x27;t float and dock all my panels and have 
splitters between all panels and see web page progress for individual HTML 
panels and check my email entirely from within sidebar and... 
- a waste of real estate- Form auto-fill 
- is not useful for me unless I can fill out 20 pages of personal information 
first 
- should just happen automatically- Downloads 
- should take place in a tree view with progress meters in the columns! 
- should be clearly visible and understandable.- Toolbars should 
- be dockable to all four corners of the screen, be able to float outside the 
window, be fully customizable such that I can make my own custom commands, be 
able to edit existing buttons&#x27; commands, be able to create my own toolbars, be 
able to put toolbars on the same line, and be able to edit the submenus and 
context menus of items (including the items on the menu bar) and browse my file 
system and cook me dinner and wash my car and walk my dog and do my taxes and 
mow my lawn and... 
- be customizable within reason- Composer should 
- always come with my browser. I want composer options all over my UI. 
Everywhere! 
- not be part of a Web browser.- Mail should 
- be part of my browser program. Aren&#x27;t they the same app? There is a 
difference? 
- be a separate application.
Now to those people who want the full-blown functionality of the Mozilla trunk, 
you can still get that with Phoenix. The idea is to relegate more features to 
the &quot;optional add-on&quot; category. If you want the link toolbar or the sidebar or 
mouse gestures or any other features, you can download and install them 
yourself. I expect Phoenix will have a little add-in manager that will 
facilitate this process. There is currently an expectation on the part of an 
alarming number of people that every feature implemented by anyone should 
automatically be part of the default Mozilla install/download. Why? A layered approach scales better. You can then have a browser that can become 
as complex as you want to make it, but the choice is left in your hands. The 
geek features aren&#x27;t inflicted on you by default.Finally, remember that Phoenix&#x27;s UI is not controlled by Netscape. This is an 
opportunity for some of the core Mozilla Navigator developers to build the 
browser that they have always wanted to build, without having to compromise the 
user interface to satisfy the various conflicting pressures exerted by factions 
within Netscape.[1] http://www.mozillanews.org
[2] http://www.mozillazine.org

</pre>

## Record 008400

**Label:** `benign`

<pre>
is the supply rebound beginning ? an update on cera &#x27; s outlook for us gas productive capacity - cera conference call notification title : is the supply rebound beginning ? an update on cera &#x27; s outlook for us gas productive capacity url : http : / / www 20 . cera . com / eprofile ? u = 35 netscape navigator 3 . 02 or higher ; or sun hot java ( tm ) close all desktop applications and disable your screen saver . to ensure computer compatibility , complete the internet instructions before the day of the call . a message will appear telling you that your meeting is not ready to start . however , it also informs you about any action that you may need to take to prepare your computer to participate . technical assistance if you experience difficulties during the call , you may signal for technical assistance by pressing * 0 ( star , zero ) on your telephone keypad , once connected to the audio portion of the conference . for more information , please contact katya ashe via e - mail at kashe @ cera . com or via telephone at ( 617 ) 441 - 2659 . a recording of this call will be available until may 10 , 2001 . to access this recording , please call + 1 888 - 203 - 1112 ( within the united states ) or + 1 719 - 457 - 0820 ( outside the united states ) . please use confirmation number 574828 to access the call . * * end * * e - mail category : conference call notification cera knowledge area ( s ) : north american gas , cera &#x27; s spring 2001 roundtable event dates and agendas are now available at http : / / www 20 . cera . com / event to make changes to your cera . com profile go to : forgot your username and password ? go to : http : / / www 20 . cera . com / client / forgot this electronic message and attachments , if any , contain information from cambridge energy research associates , inc . ( cera ) which is confidential and may be privileged . unauthorized disclosure , copying , distribution or use of the contents of this message or any attachments , in whole or in part , is strictly prohibited . terms of use : http : / / www 20 . cera . com / tos questions / comments : webmaster @ cera . com copyright 2001 . cambridge energy research associates
</pre>

