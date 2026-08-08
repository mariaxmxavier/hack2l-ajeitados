---
type: DatasetPartition
title: Benign samples - batch 0015
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 2801
record_end: 3000
---

# Benign samples — batch 0015

## Record 002801

**Label:** `benign`

<pre>

Chris said:
&gt; 
&gt; I can tell you what the &#x27;clear&#x27; and &#x27;del&#x27; arguments mean:
&gt; 
&gt; Mh_SequenceUpdate lists/l-k clear cur {} public
&gt; 	This means to clear the &#x27;cur&#x27; sequence for lists/l-k
&gt; 
&gt; Mh_SequenceUpdate lists/l-k del unseen 5400 public
&gt; 	This means to delete message 5400 from the &#x27;unseen&#x27; sequence for lists/l-k
&gt; 
&gt; Can you explain more what you were actually doing as this occurred?  This 
&gt; doesn&#x27;t appear to be background processing.  Is there significance to message 
&gt; 5400?  Is it the one that isn&#x27;t displaying?
&gt; 
&gt; ChrisAfter sending the report I started fiddling with the Ftoc_RescanLine 
stuff and I havn&#x27;t seen it since. I can&#x27;t really tell if it was my 
hacking that removed it, or if it was some transitional magic 
happening since this was the first invocation of that version of 
exmh. I&#x27;ve backed out my stuff now, and&#x27;ll let you know if it happens 
again.
On another thing with the Ftoc_RescanLine stuff. This routine is 
called at times still unclar to me. An inspection of the routine 
suggests that it is used in the transition of a message to/form 
&quot;current&quot; state to re-paint the ftoc line. However, checking the 
msg.tcl code (MSgChange) we find:    if {$msgid != {}} {
        # Allow null msgid from Msg_ShowWhat, which supplies line 
instead
        if {$msgid &lt; 0}  return
    } else {
        # line null too, try using first in folder
        if {[string length $line] == 0} { set line 1 }
        set msgid [Ftoc_MsgNumber [Ftoc_FindMsg $msgid $line]]
    }
    Ftoc_ClearCurrent
    Mh_SetCur $exmh(folder) $msgid
    Ftoc_ShowSequences $exmh(folder)The Ftoc_ClearCurrent calls Ftoc_RescanLIne to clear the &#x27;+&#x27; sign 
_before_ the on-disk transition is made. I hacked this stuff and more 
or less changed the order. It works, but fails on some folder changes.My feeling of this is that we really do not want to have a 
Ftoc_ClearCurrent, but rather just a RescanLine and the caller had 
better know the line or msgid. That routine shoud just put in the &#x27;+&#x27; 
if the line/msg in question happened to be the cur msg. Thoughts?
/Anders
_______________________________________________
Exmh-workers mailing list
Exmh-workers@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-workers

</pre>

## Record 002802

**Label:** `benign`

<pre>
dallas trip i have booked my flights for the dallas trip . as we discussed , i will be flying in on sunday evening . for tuesday , my flight departs at 7 : 22 pm so i should be able to attend the full day &#x27; s session . laura scott will also be attending the meetings . we are departing at the same time on tuesday . let me know if you have any questions . peggy
</pre>

## Record 002803

**Label:** `benign`

<pre>
&gt; er, i understood you until you reached the above. Maybe its my lack of 
&gt; PHP but why would a variable name _need_ to end with [] ?
&gt; 
&gt; With most languages you parse the submitted form data and should come 
&gt; out with either variables or an array / hash, which you then work with 
&gt; and name whatever you like.IIRC, if the query string containsvarname=FIRST&amp;varname=SECONDthen PHP will create a variable called &quot;varname&quot; with result SECOND. 
However, if the query string containsvarname[]=FIRST&amp;varname[]=SECONDthen PHP will create an array with varname[1]==FIRST and varname[2]==SECONDThere are other ways to get the data from the HTTP request, and I guess 
I&#x27;ll do that if it turns out to simplify the script that creates the 
form; but as i understand it that&#x27;s the &quot;official&quot; way to get data from 
a SELECT MULTIPLE using PHP.Dave
_______________________________________________
Webdev mailing list
Webdev@linux.ie
http://www.linux.ie/mailman/listinfo/webdev
</pre>

## Record 002804

**Label:** `benign`

<pre>
I develop software and my pricing is that I charge the first set of
customers that drive the features included quite a bit, then charge the
majority of the customers a small fee, and when I&#x27;ve earned back what I
invested (including my hourly wage) then I release that software for free
and either start working on a newer version (again back to the adding
features step) or on a new product. If you can&#x27;t find someone willing to
pay your costs of development then most likely there really isn&#x27;t a need
for the product you&#x27;re trying to sell and you shouldn&#x27;t develop it. If you
have to resort to free versions with lame ass ads and stuff then that is a
strong indication to get a new project IMO.  :)
&gt; We were sitting here talking about Opera, and the fact that it&#x27;s not
&gt; free anymore (unless you want the scrollypollies), and how that sucked
&gt; and stuff, and someone said something about nagware, and I
&gt; misinterpretted it as snag ware, which mainly means, oh yeh, right, I&#x27;m
&gt; gonna buy this -eyeroll- where&#x27;s someone with a key?  LOL So who is it
&gt; again who&#x27;s on this list who&#x27;s associated with Opera?  Why&#x27;s the free
&gt; one using the same LAME idea netzero, etc useD?  I know what kind of
&gt; costs are involved in creating software like this, and I understand
&gt; everyone needs to eat, but if someone can get netscape for free, and
&gt; opera isn&#x27;t free, then, hmmm...  I imagine this email is going to bring
&gt; some bricks down on my head, but well, go for it, I gots my helmet.  (:
&gt; Cindy P.S. GregB, you there?  (:http://xent.com/mailman/listinfo/fork
</pre>

## Record 002805

**Label:** `benign`

<pre>
long sleeve denim shirts with the enron research logo hello everyone : i believe all of you are new employees since we last ordered the research shirts . they are a blue denim ( tencel ) , button down , long sleeve , shirt with a logo over the left pocket . several of you have been asking for them so i will place an order . please let me know the size shirt you would like . they come in ladies , or mens in small , medium , large , and extra - large . please circle the size you would like . name size tom barkley s m l exl stephen bennett s m l exl rakesh bharati s m l exl lance cunningham s m l exl rabi de s m l exl anita dupont s m l exl shane green s m l exl anguel grigorov s m l exl seksan kiatsupaibul s m l exl sandeep kohli s m l exl jaesoo lew s m l exl martin lin s m l exl kate lucas s m l exl iris mack s m l exl praveen mellacheruvu s m l exl mitra mujica s m l exl wichai narongwanich s m l exl nelson neale s m l exl kenneth parkhill s m l exl chris pernoud s m l exl leann walton s m l exl
</pre>

## Record 002806

**Label:** `benign`

<pre>
cartoons i am currently undertaking research on the visual aspects of cartoons , and would like to get hold of some examples of cartoons published outside the uk . can anyone help by sending me some ? ( i &#x27; m happy to refund postage ) . any style , genre , language - from newspapers , magazines , childrens &#x27; comics . . . thanks in advance to anyone who can help . e-mail for queries = s . goodman @ open . ac . uk snail mail = school of education , open university , walton hall , milton keynes mk7 6aa , england , uk .
</pre>

## Record 002807

**Label:** `benign`

<pre>
fw : here are the slides with data from 10 / 19 / 01 . i will send the slide on financial power and options shortly . please let me know if you need anything else or this modified . - - - - - original message - - - - - from : moorer , torrey sent : monday , october 22 , 2001 4 : 44 pm to : puthigai , savita cc : denny , jennifer subject : re : hi savita , here &#x27; s the powerpoint end . working with excel sheets now . - - - - - original message - - - - - from : puthigai , savita sent : monday , october 22 , 2001 4 : 27 pm to : moorer , torrey subject : fw : - - - - - original message - - - - - from : kitchen , louise sent : monday , october 22 , 2001 4 : 23 pm to : puthigai , savita subject : &gt;
</pre>

## Record 002808

**Label:** `benign`

<pre>
tw bullets 1 / 19 capacity marketing - tw completed two new long - term index - to - index transportation contracts this week . dynegy executed 35 , 000 mmbtu / d for calendar year 2003 from san juan to the california border and calpine signed up for 14 , 000 mmbtu / d under similar terms . in addition , dynegy executed two short term index - to - index contracts ; one month , 13 , 500 mmbtu / d for november 2001 , and 21 , 500 mmbtu / d for november - december 2002 . both short term deals are from san juan to california . hedges have been established on all the contracts to minimize tw &#x27; s price exposure to the market indexes . in addition , bp / amoco purchased two packages of space at max rates on the ignacio to blanco route . they purchased 55 , 000 mmbtu / d for calendar 2002 and 20 , 000 mmbtu / d for 2003 . with the exception of a small package of permian to cal . border in november 2001 , all available firm transportation flowing west has now been soldout on tw through the end of 2003 . exxon / nalco enerflow - attended the exxon presentation to operations this week on the proposed project to inject a drag reducing agent into several segments along tw &#x27; s system . potential benefits include increasing our westward volume capacity by 5 % , enhanced compressor efficiencies , and increased corrosion protection . however , we are still waiting on the final results of the nng cunningham test segment . due to contamination issues on the mainline , we will likely begin by coating the 96 miles of san juan lateral pipe sometime before the second quarter . transcolorado - tc is evaluating outsourcing its entire back office operations ( legal , regulatory , accounting , etc . ) plus its marketing requirements to a third party provider . ets has prepared a draft qualification statement to be submitted by january 24 . transcolorado hopes to complete the transaction by late february . project mckinley ( cal border peak shaving ) - attended the marketing / operations meeting in long beach this week to discuss the potential of injecting natural gas liquids into tw &#x27; s system to increase the btu content of gas going into california . this project has numerous logistic details to be worked not the least of which is where to site the injection point either upstream or downstream of needles . other issues include railroad siding , ngl storage tanks , and possible contamination of downstream facilities . a follow - up meeting is planned for the end of january . enron online - tw marketing representatives attended enron online training this week as we prepare to roll out capacity deals on the east end of tw &#x27; s system . the plan is to begin selling by february 1 three to five packages per day of 5 , 000 - 10 , 000 mmbtu / d . as market demand picks up , we will expand the offerings . el paso field services - the new interconnect with epfs in eddy county , nm is behind schedule . we had previously committed to have tw &#x27; s facilities finished by january 1 , 2001 . on january 18 , epfs notified us that tw has quite a bit of work left to do before gas can flow . ( among other things , the row has not yet been secured from the blm in order for the electric poles to be installed ) .
</pre>

## Record 002809

**Label:** `benign`

<pre>
Hi All,Anyone ever try connecting at 1200bps in Linux? I&#x27;ve got a USR 56K
Faxmodem which is meant to connect to another (same) modem and I have to
connect at this speed due to the (NT) port settings on the remote side,
but the modem handshake always fails at this speed.The modem handshake works at slightly higher speeds (4800bps to
~57600bps) but that is no good for tx/rx&#x27;ing data to the remote server
as it insists at talking at the speed of treacle/1200bps.Note Minicom fails to handshake at 1200bps, but HyperTerm in Windows
worked first time(!?), any ideas?Baud 1200 7 data bits Even ParityI am doing a ATZ3 to reset the modem then I send this init string:AT&amp;F1E1V1Q0X4Y0S32=232&amp;A1&amp;B0&amp;C1&amp;D2&amp;H0&amp;I0&amp;K1&amp;M4&amp;N0&amp;P0&amp;R1&amp;S0&amp;U0&amp;Y1... which is most of the defaults.USR said to set S15=128 (disables v.42)) 
&amp; set S32=98 (disable v.92 &amp; X2)But the S15=128 just makes the handshake lockup instead of just giving
up.btw this is a bank&#x27;s system I am connecting to so reconfiguring their
modems may be difficult.Colin.
-- 
Colin Nevin,
Software Engineer,
Merit Solutions Ltd. (Dublin),
5 Goatstown Cross,
Dublin 14.
------------------------------------------
Printed using 100% recycled electrons.-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002810

**Label:** `benign`

<pre>
Yes, I know, dreadful subject. However, because of customer inistence we
must deploy one project on W2K. This will thus be a WAMP project rather than
a LAMP project. Of course as a highly skilled *ix person I can handle these
Windows toys :-) but can anyone suggest any good educational resources for
using Apache, PHP, Perl and MySQL together on W2K. Anyone had to do the same
and found any particular nasty gotchas (yes, I know about the running
Microsoft software one).Niall_______________________________________________
Webdev mailing list
Webdev@linux.ie
http://www.linux.ie/mailman/listinfo/webdev

</pre>

## Record 002811

**Label:** `benign`

<pre>
It seems to only support PPPoA and not PPPoE. You need one that supports
PPPoE, if you want torun it in routed IP mode. If you are using it as a
bridge, it&#x27;ll probably work, but you&#x27;d be left leaving the computer on,
which would defeat the purpose of getting a router.The best router I&#x27;ve come accross is the Zyxel 643. Eircom supply this,
but if you have alook online you can probably find it cheaper to buy
online from America or the UK.Hope this is useful,
Joe
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002812

**Label:** `benign`

<pre>
survey of narrative for persons with aphasia - - addendum colleagues : this an addendum to a previous message from a friend of mine ( maureen stemmelen ) that asked subscribers to complete a survey . this clarification is in response to some queries some people had regarding the survey . the purpose of the survey was to gather data from normal people in order to design better narrative elicitation tasks for subjects with aphasia . these tasks will be used with american residents only , which explains the cultural bias in the survey . thank you for your participation . the survey is attached to refresh your memory as to what we are talking about ! kirrie ballard &amp; maureen stemmelen ( maurstem @ merle . acns . nwu . edu ) survey the results from this survey will be utilized in a research project designed to examine the language of aphasic speakers . results of this survey will remain confidential . please do not write your name on this form . identifying information today &#x27;s date : your birth date : highest level of education : present or most recent job : male female ( asterisk one ) country of residence : part i in the spaces below , please list five &#x27;s tories &#x27; from which you could recall the general plot , some of the major characters , possibly some details important to the storyline , and provide a short narration of if given some reminders of the story ( such as pictures ) . these &#x27;s tories &#x27; could be such things as children &#x27;s books , fables or fairy tales , adult books , movies , plays , etc . please fill in all of the blanks . 1 . 2 . 3 . 4 . 5 . part ii please asterisk those items that you would be able to talk about in sufficient detail for approximately ten minutes . asterisk all that apply . world war ii watergate your closest friend learning to drive the bombing of japan the challenger disaster vietnam apollo 11 graduating from high school the fall of communism in eastern europe your first job the gulf war kennedy &#x27;s assassination your earliest memories of school woodstock the depression the assassination of dr . martin luther king the current u . s . president your present or most recent job your first date d - day the civil rights movement the cold war your most memorable vacation thank you for your participation .
</pre>

## Record 002813

**Label:** `benign`

<pre>
eol stuff vince - i spoke with tom , and i completely agree and would like to hand all this eol stuff over to you . we need a sun server to take over the task . as it happens martin lin has one in his office he &#x27; s not using and up to the task . his box could serve sas to enron , as well as handle listening in on the eol feedds and maintaining its database . martin &#x27; s box technically belongs to ebs , but i think they are downsizing and wouldn &#x27; t mind giving it up . in this way , you would have complete physical and administrative custody over the data and any work you do with it . i needn &#x27; t be involved , and you can know your work is completely confidential . i &#x27; ll make sas and the eol software available , as well as the necessary ram the server , at no charge . you just need to summon up some sysadmin resources to finish the job . there is a fine unix guy named ben thompson who will support you , i &#x27; m sure . task : 1 ) upgrade ram on martin &#x27; s server 2 ) install newest solaris os on server 3 ) install tibco and gnu software on server 4 ) install sas on server clayton
</pre>

## Record 002814

**Label:** `benign`

<pre>
re : employment law training for managers as this course is on thursday , please let me know if you will be attending so that i may finalize the room detail . if you have any questions , let me know ! regards , grace x 8321 - - - - - original message - - - - - from : fitzpatrick , amy sent : thursday , july 05 , 2001 7 : 51 am to : scholtes , diana ; motley , matt ; swerzbin , mike ; semperger , cara ; williams iii , bill ; o &#x27; neil , murray p . ; belden , tim ; gilbert , scotty ; poston , david ; foster , chris h . ; wolfe , greg ; mainzer , elliot ; perry , todd ; davidson , debra ; fischer , mark ; alonso , tom ; platter , phillip ; mallory , chris ; mays , wayne ; blackburn , jody ; calger , christopher f . ; thomas , jake ; page , jonalan ; heizenrader , tim ; steiner , david ; parquet , david ; mcdonald , michael cc : rodriguez , grace subject : employment law training for managers you are invited to an employment law training for managers on july 12 from 1 : 15 pm to 4 : 30 pm at 2 world trade center ( 2 wtc ) - mezzanine 5 . managers from ebs - portland will also be attending . the training is sponsored by enron &#x27; s fair employment practices department and will help enron &#x27; s managers and supervisors better manage the daily employment decisions and risks . you will gain a better understanding of the laws and regulations that define your individual and organizational accountability . this training will address the complex realms of employment opportunity , unlawful harassment , discrimination , retaliation , as well as aspects of selection , promotion and performance management and corrective discipline . in addition , this training will discuss roles in managing risk - keys to supervisory success - some basic information on privacy obligations and some discussion of key hr policies . please rsvp by emailing or calling grace rodriguez at x 8321 . thanks ! amy
</pre>

## Record 002815

**Label:** `benign`

<pre>
dewbre petroleum vance , the following deal is not on you spreadsheet nor is it on the prebid list that daren maintains : deal # counterparty meter # 137595 dewbre petr . 9662 is this a good deal ? bob
</pre>

## Record 002816

**Label:** `benign`

<pre>
words that are their own op regarding words that are their own opposites i &#x27; ve thought of an example - the word &#x27;s hame &#x27; in aboriginal english and standard australian english . for example , in the paul kelly ( standard australian english ) song , &quot; special treatment &quot; he describes an aboriginal boy who has had his family &#x27;s history hidden from him ( pushed off land , put in chains , children stolen etc etc ) as &quot; i was raised in shame &quot; . this is a negative description - he was made to feel bad about himself . in alice springs aboriginal english , being brought up with shame would be the &#x27; right way &#x27; to be brought up . having &#x27; no shame &#x27; indicates the wrong behaviour in the circumstances , that &#x27;s when you should feel bad about yourself ! this &#x27;s hift &#x27; in meaning is due to the substrate languages having a word that people translate into &#x27;s hame &#x27; in english , when that &#x27;s not exactly what is meant , eg &#x27; apure &#x27; , eastern arrernte , and &#x27; kurnta &#x27; in warlpiri . this has been discussed by jean harkins in the australian journal of linguistics , and in her book &quot; into another world &quot; . so . . . what does it mean to be shameless ? sue morrish , teacher linguist , institute for aboriginal development , alice springs northern territory , australia 0870 .
</pre>

## Record 002817

**Label:** `benign`

<pre>
Once upon a time, Brian wrote :&gt; On Mon, 19 Aug 2002 16:44:30 +0200, Matthias Saou 
&gt; wrote:
&gt; 
&gt; [snipped]
&gt; 
&gt; &gt; Then why bother : The new Red Hat Linux beta &quot;(null)&quot; is now available
&gt; &gt; and should be announced anytime now. It contains rpm 4.1-0.81.
&gt; &gt; 
&gt; &gt; You can grab it from here :
&gt; &gt; ftp://ftp.freshrpms.net/pub/redhat/linux/beta/null/
&gt; 
&gt;     What&#x27;s the official &quot;apt&quot; line for it?  Is it just 7.4 instead of
&gt;     7.3, or did they make this one 8.0?This is a beta, probably of 8.0 although it&#x27;s numbered 7.3.94. As such,
I&#x27;ve set up no apt repository for it, although you may find a few of my
packages recompiled for it under the /pub/freshrpms/null/ directory of my
ftp server.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 002818

**Label:** `benign`

<pre>
revised hurricane forecast new hurricane forecast out of csu renowned hurricane soothsayer dr . william gray and his team at colorado state university have scaled back their forecast for the hurricane season but still expect the season to be more active than average . seven rather than eight hurricanes are expected now and only three of them are expected to be intense rather than the four expected in the group &#x27; s prior forecast on june 7 . in round numbers , the august forecast is for three named storms , two hurricanes , and one intense or major hurricane . &quot; information obtained through july 2000 indicates that the atlantic hurricane season in 2000 is likely to be less active than the four recent very busy years of 1995 , 1996 , 1998 and 1999 . however , total activity is expected to exceed the long term average and is anticipated to be considerably more active than the mean for the recent period of 1970 through 1994 . &quot; we estimate that the 2000 season will have seven hurricanes ( average is 5 . 7 ) , 11 named storms ( average is 9 . 3 ) , 55 named storm days ( average is 47 ) , 30 hurricane days ( average is 24 ) , three intense ( category 3 - 4 - 5 ) hurricanes ( average is 2 . 2 ) , six intense hurricane days ( average is 4 . 7 ) and a hurricane destruction potential ( hdp ) of 90 ( average is 71 ) . collectively , net tropical cyclone activity in year 2000 is expected to be about 130 % of the long term average . the early august forecast update is in close to gray &#x27; s dec . 8 , 1999 ) and april 7 forecasts , but somewhat lower than his recent june 7 update . &quot; the forecast has been lowered slightly [ because ] june - july global circulation conditions have not progressed quite as favorably for hurricane enhancement than as we anticipated in our early june forecast , &quot; gray said .
</pre>

## Record 002819

**Label:** `benign`

<pre>
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1At 10:32 AM -0400 on 9/21/02, Gary Lawrence Murphy wrote:
&gt; Cool --- I wasn&#x27;t aware that the US had lifted it&#x27;s population out
&gt; of poverty! When did this happen? I wonder where the media gets the
&gt; idea that the wealth gap is widening and deepening...All the world loves a smartass...:-).Seriously. Look at he life expectancy and human carrying capacity of
this continent before the Europeans got here. Look at it now. Even
for descendants of the original inhabitants. Even for the descendents
of slaves, who were brought here by force.More stuff, cheaper. That&#x27;s progress.Poverty, of course, is not relative. It&#x27;s absolute. Disparity in
wealth has nothing to do with it.It&#x27;s like saying that groups have rights, when, in truth, only
individuals do. Like group rights, &quot;disparity&quot; in wealth is
statistical sophistry.
Besides, even if you can&#x27;t help the distribution, industrial wealth
is almost always transitory, and so is relative poverty, even when
there are no confiscatory death-taxes. The 20th anniversary Forbes
400 just came out, and only a few tens of people are still there
since 1982, a time which had significantly higher marginal taxes on
wealth, income, and inheritance than we do now. More to the point,
they&#x27;re nowhere near the top.I&#x27;ll take those odds. It is only when neofeudalism reasserts itself,
in the form of government regulation, confiscatory taxes, legislated
monopoly, corporate welfare, &quot;non-profit&quot; neoaristocratic tax dodges,
and legalized labor extortion that we get slowdowns in progress, like
what happened in Fabian-era Britain, or 1970&#x27;s USA.In fact, it is in countries where wealth is the most &quot;unfairly&quot;
distributed, that you get the most improvement in the general --
economic -- welfare. More stuff cheaper, fewer people dying, more
people living longer.I&#x27;ll take those odds as well. People take greater risks when the
returns are higher, improving the lot of us all as a result.Cheers,
RAH-----BEGIN PGP SIGNATURE-----
Version: PGP 7.5iQA/AwUBPYy3ysPxH8jf3ohaEQLqNQCg14YvF8NVYwKiRrghHdisBoNCOn8AoPcR
QUzorXeaLe5h3T1syKl7DFNT
=9kff
-----END PGP SIGNATURE------- 
-----------------
R. A. Hettinga 
The Internet Bearer Underwriting Corporation 
44 Farquhar Street, Boston, MA 02131 USA
&quot;... however it may deserve respect for its usefulness and antiquity,
[predicting the end of the world] has not been found agreeable to
experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27;

</pre>

## Record 002820

**Label:** `benign`

<pre>
united way update at the end of the leadership giving campaign , ews had reached $ 488 , 832 in pledges , which is 38 . 31 % of our campaign goal of $ 1 , 276 , 000 . enron &#x27; s plan calls for leadership givers to represent 60 % of the total pledge goal , so we are short 21 . 69 % or $ 276 , 768 . even more disappointing was the weak 7 . 85 % participation rate by those employees in the leadership level ( i . e . , over $ 90 , 000 in base pay ) . while part of this shortfall was caused by the decision not to conduct a leadership campaign for ebs , most of the other business units / functional groups in ews did not fare too well either . below are the pledge totals and participation rates by functional group : group pledges % participation ea $ 79 , 485 10 . 78 % ebs $ 14 , 555 1 . 31 % eeos $ 32 , 143 18 . 18 % eel $ 6 , 104 14 . 29 % egm $ 74 , 030 11 . 53 % eim $ 62 , 567 21 . 62 % enw $ 77 , 960 3 . 82 % ews bus . analysis $ 25 , 024 12 . 84 % ews bus . dev . $ 13 , 438 75 . 00 % ews hr $ 6 , 985 8 . 33 % ews legal $ 38 , 800 20 . 65 % ews research $ 19 , 080 23 . 40 % ews treasury $ 13 , 661 71 . 43 % ews total $ 488 , 832 7 . 85 % from a corporate perspective , ews is tracking fairly closely to the others . here are the other groups &#x27; totals : ets $ 146 , 466 12 . 92 % corporate $ 359 , 925 10 . 07 % ees $ 131 , 439 6 . 56 % if you have any questions , please call me at ext . 3 - 9053 . eric
</pre>

## Record 002821

**Label:** `benign`

<pre>
On Sat, 20 Jul 2002 18:15:12 +0100
kevin lyda claiming to think:&gt; On Fri, Jul 19, 2002 at 10:19:50PM -0700, Rick Moen wrote:
&gt; &gt; Some people strip down old 486 boxes, take out the hard drive, disable
&gt; &gt; the fans, and run the thing from just a floppy drive or a CDR you&#x27;ve
&gt; &gt; burned for the purpose.  
&gt; 
&gt; what about using a pcmcia card and a compaq flash card?  or doing an
&gt; nfs boot to a server in a noiser part of the house?  (the boiler room
&gt; or something like that)
&gt; 
hmm. there are versions of OpenBSD that run from a 32M compact flash IIRC.and antefacto&#x27;s software ran in 64M.there are CF-&gt;IDE adapters anyway, so get a 256M CF (100â‚¬+), mount it RO,
and use that?/me is also in the market for one of the 60W fanless PSU&#x27;s that antefacto had,
if someone wants to get a few of them.L.
-- 
     dBP   dBBBBb | If you&#x27;re looking at me to be an accountant
              dBP | Then you will look but you will never see
   dBP    dBBBK&#x27;  | If you&#x27;re looking at me to start having babies
  dBP    dB&#x27; db   | Then you can wish because I&#x27;m not here to fool around
 dBBBBP dBBBBP&#x27;   | Belle &amp; Sebastian (Family Tree)-- 
Irish Linux Users&#x27; Group Social Events: social@linux.ie
http://www.linux.ie/mailman/listinfo/social for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002822

**Label:** `benign`

<pre>
japan weekly hello everyone , thursday &#x27; s ( 4 / 6 / 00 ) conference call regarding the weekly japan update will now be held at 6 : 00 p . m . houston time and 8 : 00 a . m . tokyo time due to daylight savings time change . please forward your updates to jope hirl and copy me . the call will be held in conference room 21 c 2 for houston participants . thanks , eddie robles domestic : 1 - 800 - 991 - 9019 intern &#x27; l 847 - 619 - 8039 code : 5764488 #
</pre>

## Record 002823

**Label:** `benign`

<pre>
re : 3 . 408 adjuncts in a language where many speakers confuse &quot; which &quot; and &quot; that &quot; , is it any surprise that there is flexibility regarding &quot; that &quot; and &quot; when &quot; ? can anyone name the first scholar who noted these things ? &lt; grin &gt; eric schiller
</pre>

## Record 002824

**Label:** `benign`

<pre>
 &gt; I don&#x27;t discount any other work like for
 &gt; example Niall&#x27;s work on the B.B.C. but maybe
 &gt; there is general interest in an Irish distro.
 &gt; Anyone?
 
 I&#x27;ll bite.-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002825

**Label:** `benign`

<pre>
&gt;
&gt; GAB&gt; The problem is that politics have gotten so muddied
&gt; GAB&gt; nowadays, that shouting down and unpeaceably disrupting
&gt; GAB&gt; political rallies that you don&#x27;t agree with has become
&gt; GAB&gt; common practice.  The courts have constantly ruled
&gt; GAB&gt; that there are some restrictions on the first amendment.
&gt; GAB&gt; They teach you that your very first year of law school.
&gt;
&gt; I&#x27;ll agree with Owen on this one.  Muddied my ass.  How hard is it to
&gt; chose between a Republocrat or a Demipublican?   Not very.  Shouting
&gt; down has grown to become the answer because the government, over a
&gt; span of years, and with the help of the Courts -has- limited the
&gt; rights we have as citizens under the First Amendment.Wishful thinking. People are just bigger dickheads now. Culture is changing
and it is becoming acceptable to get in peoples face and shout them down
when you disagree with them.  The people that do this are NOT
disenfranchised. They
get their rocks off on being disagreeable assholes. The act of protesting is
more important than the actual issue being protested for most of these
people.&gt; question the policy about terrorism, or drugs, or Iraq, or Bush in
&gt; general, you&#x27;re aiding terrorism.   If you challenge the beliefs of
&gt; the folks attending the various shadowy G8 conferences, you&#x27;re an
&gt; anarchist, and you&#x27;re herded off to a &#x27;designated protest spot&#x27; miles
&gt; away from anything.   Part of the point of speech is to be -heard-.
&gt; I can scream on my soapbox in the forest somewhere, and while thats
&gt; speech, its not effective speech.  People are screaming and shouting
&gt; over the political figures because they cannot be  heard in any other
&gt; way.And where does this end? Shouting down speakers is an obviously stupid
tactic if they are -really- interested in advocating change. Are they such
clueless social morons that they don&#x27;t see this or are they just interested
in stroking their pathetic egos?OBTW, &#x27;clueless social moron syndrom&#x27; does not have political boundaries.Bill

</pre>

## Record 002826

**Label:** `benign`

<pre>
re : presentation dawn , i met david sobotka from koch this morning and we talked about coordinating our presentations . this means there will be changes intended to avoid overlaps . sorry for that . the portions of my presentation will survive ( those about valuation paradigms ) and i shall add a few more pages on accounting treatment of weather derivatives plus more specific examples . david will cover primarily market evolution + plus examples of some standard structures , and we shall both give more interesting examples of specific deals executed by our companies . i shall send you an updated version of my part next week . let me know what the deadline is . vince &quot; dawn scovill &quot; on 03 / 14 / 2000 07 : 53 : 47 am to : &quot; vince j kaminski &quot; cc : subject : re : presentation thanks - - would you like me to include these in the conference book ? or do you anticipate changes ? dawn from : dawn scovill , conference coordinator &quot; powerful new ideas 2000 &quot; dawn @ perfectmeeting . com - - - - - original message - - - - - from : vince j kaminski to : cc : shirley crenshaw ; vince j kaminski ; vince j kaminski sent : monday , march 13 , 2000 1 : 56 pm subject : presentation &gt; &gt; &gt; dawn , &gt; &gt; i am sending you an electronic version of my presentation . &gt; &gt; vince kaminski &gt; &gt; ( see attached file : fplo 400 . ppt ) &gt;
</pre>

## Record 002827

**Label:** `benign`

<pre>
2002 it systems development allocations kevin &amp; tim , please review the attached listing and advise if you agree to the projects and amounts listed as billings that enron north america will receive in 2002 for support of these efforts . i &#x27; m at x 30352 if you have any questions . thanks !
</pre>

## Record 002828

**Label:** `benign`

<pre>
Manoj Kasichainula wrote;
&gt;http://www.snopes.com/quotes/bush.htm
&gt;
&gt;Claim:   President George W. Bush proclaimed, &quot;The problem with
&gt;the French is that they don&#x27;t have a word for entrepreneur.&quot;
&gt;
&gt;Status:   False.&gt;Lloyd Grove of The Washington Post was unable to reach Baroness
&gt;Williams to gain her confirmation of the tale, but he did
&gt;receive a call from Alastair Campbell, Blair&#x27;s director of
&gt;communications and strategy. &quot;I can tell you that the prime
&gt;minister never heard George Bush say that, and he certainly
&gt;never told Shirley Williams that President Bush did say it,&quot;
&gt;Campbell told The Post. &quot;If she put this in a speech, it must
&gt;have been a joke.&quot;So some guy failed to reach the source, but instead got spin doctor to
deny it.  Wot, is he thick enough to expect official confirmation
that, yes, Blair is going around casting aspersions on Bush???It&#x27;s an amusing anecdote, I don&#x27;t know if it&#x27;s true or not, but certainly
nothing here supports the authoritative sounding conclusion &quot;Status: False&quot;.
R
http://xent.com/mailman/listinfo/fork
</pre>

## Record 002829

**Label:** `benign`

<pre>
Working too hard...Someone tell me a joke, or email me a beer or something...TIA,
  Rob.
     .-.                    Robert.Harley@argote.ch                    .-.
    /   \           .-.      Software Development       .-.           /   \
   /     \         /   \       .-.     _     .-.       /   \         /     \
  /       \       /     \     /   \   / \   /   \     /     \       /       \
 /         \     /       \   /     `-&#x27;   `-&#x27;     \   /       \     /         \
            \   /         `-&#x27;       ArgoTech      `-&#x27;         \   /
             `-&#x27;                http://argote.ch/              `-&#x27;
http://xent.com/mailman/listinfo/fork

</pre>

## Record 002830

**Label:** `benign`

<pre>

ZDNet AnchorDesk Daily NewsletterAcer brings P4 power to the people--read the review at ZDNet. 
Download Builder.com&#x27;s &#x27;Remedial XML&#x27; series. 
Need a memory upgrade? Find out with CNET&#x27;s Memory Configurator. 
Tech Update: Put a lid on CRM costs with self-service. 
Check out thousands of IT job listings in ZDNet&#x27;s Career Center. MON JUL 22, 2002Â David CourseyHow Microsoft plans to take over your living room
                MS&#x27;s upcoming Windows XP Media Center Edition does more than add a personal video recorder and a new interface to the OS. It could be the opening salvo in the company&#x27;s bid to control home entertainment. Let me explain.
PLUS: AnchorDesk Radio: How to fight the World Wide Wait Gates tells all... Cheap PCs from Gateway... Sony&#x27;s tiny digicam 
Wanna speed up your dial-up Web surfing? Here&#x27;s how 
Hey thief! You just TRY stealing this notebook
What&#x27;s new in reviews: The latest eMac--and more  Crucial Clicks: More from ZDnet           Networking    An all-purpose WiFi router       Need a router for your wireless network? ZDNet reviewers say the AirPlus DI-614+ offers good speed performance, ease of use, and exceptional security.   Read review      Most Popular Products    Networking 1. Linksys EtherFast wireless AP 2. Linksys EtherFast router 3. Siemens SpeedStream router 4. NetGear HE102 802.11a wireless AP 5. Netgear RP614 More popular networking products             Â SYLVIA CARRÂ Gates tells all... Cheap PCs from Gateway... Sony&#x27;s tiny digicamBill Gates shares his views on the top tech issues in his very own e-mail newsletter. Plus: Gateway entices back-to-school buyers with cheap PCs. And is Sony&#x27;s mini-digital camera a must-have fashion accessory? 
 Â DAVID MORGENSTERNÂ Wanna speed up your  Web surfing? Here&#x27;s howYou dial-up Web surfers are always trying to speed up your connections--which is why you like the Propel service David Coursey recommended. But it&#x27;s not the only way to fight the World Wide Wait. David sums up your suggestions. QuickPoll results: Would you pay $129 to upgrade to OS X 10.2? Â DAVID BERLINDÂ 
Hey thief! You just TRY stealing this notebook
                Lay a hand on David&#x27;s notebook, and it emits an unstoppable, ear-piercing screech. Sound like a good way to prevent notebook theft? David thinks so, too. That&#x27;s why he&#x27;s been using the Caveo Anti-Theft security system.
Â JOHN MORRIS AND JOSH TAYLORÂ 
What&#x27;s new in reviews: The eMac--and more
                After two long years, John is taking leave from Hits and Hype. But never fear, the column lives on with Josh. In their final effort together, the duo runs down the most notable products--such as the new eMac--on ZDNet this week.
Â PRESTON GRALLAÂ 
Lights, camera...My favorite movie screensavers!
                Love the movies? Wish you could be watching one instead of sitting at your PC? Preston&#x27;s got a way to bring Hollywood to your desktop (well, almost): movie screensavers. Here are three of his top picks.
AnchorDesk Home | Previous IssueSign up for more free newsletters from ZDNetThe e-mail address for your subscription isÂ qqqqqqqqqq-zdnet@zzzason.orgUnsubscribeÂ | 
        Â Manage 
        My SubscriptionsÂ |Â FAQÂ | 
        Â Advertise
Home |eBusiness | Security | Networking | Applications | Platforms | Hardware | Careers
        Copyright 2002 CNET Networks, Inc. All rights reserved. ZDNet is a registered service mark of CNET Networks, Inc.          
</pre>

## Record 002831

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;O&quot; == Owen Byrne  writes:    O&gt; From the local paper this morning.  &quot;Canadians eat about seven
    O&gt; times as many doughnuts per capita&quot;... (as Americans) . D&#x27;oh!If we had more variety of franchise food than the
Wendys/KFC/PizzaHut/TacoBell/TimHorton&#x27;s monopoly (they are all Pepsi
under the hood, aren&#x27;t they?), things might be different.  When a New
Yorker has biscotti, we have a timbit, when a Parisienne has a
croissant, we have a timbit ... because that&#x27;s all we can buy.The USA is a nation founded on creative free enterprise entrepreneurs;
Canada is a nation built on monopolies.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
 Business Advantage through Community Software : http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)

</pre>

## Record 002832

**Label:** `benign`

<pre>
bogdan szopa - cv vince : can you give me some background on bogdan ? many thanks . shawn - - - - - - - - - - - - - - - - - - - - - - forwarded by shawn cumberland / enron _ development on 02 / 12 / 2001 08 : 12 am - - - - - - - - - - - - - - - - - - - - - - - - - - - awenda 2000 @ cs . com on 02 / 11 / 2001 11 : 26 : 12 pm to : shawn . cumberland @ enron . com cc : subject : bogdan szopa - cv dear shawn , it was a pleasure talking to you today . i will call you upon my return from europe . in the meantime we will stay in touch via e - mail . enclosed is my curriculum vitae . best regards , bogdan m . szopa - bogdan res . . doc
</pre>

## Record 002833

**Label:** `benign`

<pre>
nels-29 final announcement final announcement north - eastern linguistics society 29th annual meeting october 16-18 , 1998 this year &#x27;s nels conference will be hosted at the university of delaware , in newark , de . complete information , including information on lodging , transportation , and the conference program can be found on the web at the nels-29 website : http : / / sun . ling . udel . edu / nels - 29 / for further information , please contact one of the following members of the nels committee at our conference email address : &lt; nels - 29 @ udel . edu &gt; kenneth allen hyde | univ . of delaware | dept . of linguistics | kenny @ udel . edu |
</pre>

## Record 002834

**Label:** `benign`

<pre>

Interesting ebay item......(and no it wasnt me even though the spellingis
oddly familar)http://cgi.ebay.com/aw-cgi/eBayISAPI.dll?MfcISAPICommand=ViewItem&amp;item=1764085998

</pre>

## Record 002835

**Label:** `benign`

<pre>
good morning , thought you might enjoy a quick note on enron . take care , hans fredrikson 214 / 758 - 2117 ( see attached file : eneo 418 f . doc ) - eneo 418 f . doc
</pre>

## Record 002836

**Label:** `benign`

<pre>
biographies of linguists dear colleagues ! i compile a biographical database about linguists . unfortunately i do n&#x27;t know birth data , full names and countries of he following persons dealing with lexicography and semantics : ( webster ( * robert agricola e . ) [ erhard ] ( germany ) bach e . ) [ emmon ] ( usa ) bellert i . ) [ irena ] ( poland - canada ) be = 08 = b1nak h . ) [ henri ] ( france ? ) bendix e . ) broz = 08 = 96 l . ) ( czechia ? ) wehrle ? ) ( germany ) vint = 08 = d0eler o . ) [ onufrie ] ( rumania ) jones k . s . ) [ k . spark ] ( uk ) dubois j . ) [ jean ] ( france ) zawadowski leon ) ) poland ) josselson h . ) [ harry h . ] ( usa ? ) casalis d . ) casalis j . ) katz j . j . ) [ jerrold j . ] ( usa ) kay m . ) ( uk ) klimonov d . ) ( germany ) cliff n . ) coyaud m . ) [ maurice ] kuchar = 08 = 96 j . ) ( czechia ? ) lagane r . ) ( france ) lounsbury f . g . ) [ floyd g . ] ( usa ) levy n . ) lindekens r . ) leech g . n . ) [ geoffrey n . ] ( uk ) loriche r . ) makris j . ) [ james ] mantchev k . ) masterman m . ) ( uk ) matthiot m . ) [ madeleine ] niobey g . ) parker - rhodes a . f . ) [ arthur frederick ] peltzer k . ) rey - debove j . ) [ josette ] ( france ) reum a . ) [ albrecht ] ross b . ) rudskoger a . ) staal t . f . ) wilks y . ) [ yorick ] ( uk ) = 46lavell j . h . ) [ john h . ] = 46lavell eleanor r . ) = 46oote i . p . ) heller l . g . ) hiz = 08 = 9a h . ) [ henry ] schenkel w . ) ( gemany ) o ~ im h . ) [ haldur ] ( estonia ) edmundson h . p . ) o = 08 = ffhmann s . ) epstein m . n . ) blinkenberg a . ) [ andreas peter damsgaard ] ( 1893 - ? ) morris ch . w . ) [ charles william ] ( b . 1901 - ? ) stern g . ) [ gustav ] ( 1882 - ? ) = 46ilipec j . ) [ josef ] ( = fd . 1915 - ? ) is it possible to learn some more information about these persons ? who can help me ? ursula doleschal&amp;sergej krylov ( ursula . doleschal @ wu-wien . ac . at ) institut f . slawische sprachen , wirtschaftsuniv . wien augasse 9 , 1090 wien , austria tel . : + + 43 - 1-31336 4115 , fax : + + 43 - 1-31336 744
</pre>

## Record 002837

**Label:** `benign`

<pre>
Dan Brickley wrote:
&gt; Except that thanks to the magic of spam, it&#x27;s usually some else&#x27;s localeyeah, physical mail makes more sense for physical locales.&gt; There are better technical solutions to privacy
&gt; protection than sending a copy of the same message to everyone on the
&gt; Internet, so the recipients can&#x27;t be blamed for reading it.Such as?Anything equivalent will be spam, just not email spam.  Dump entry IPs for
an anonymizing network onto a public bulletin board that&#x27;s used for other
purposes -- still spam.  Etc etc.I&#x27;m not arguing against other solutions, I&#x27;m arguing that spam is speech.  
If you let governments ban it, you&#x27;re giving them the power to choose who 
gets to speak.- Lucashttp://xent.com/mailman/listinfo/fork
</pre>

## Record 002838

**Label:** `benign`

<pre>
hong kong journal of applied linguistics the second issue of the second volume of the hong kong journal of applied linguistics is devoted to the topic of language rights . the guest editor is phil benson . the issue contains the following articles : language rights and the medium - of-instruction issue in hong kong by phil benson hong kong children &#x27;s rights to a culturally compatible english education by angel m . y . lin language rights and the hong kong courts by anne cheung &gt; from dialect to grapholect : written cantonese from a folkloristic viewpoint by chin wan - kan two name formation systems in one country : cantonese people &#x27;s attachment to names in hong kong by fu kin - hung and shin kataoka geoff smith , co - editor , geoff smith english centre university of hong kong pokfulam road hong kong phone : ( 852 ) - 2964-5760 fax : ( 852 ) - 2547-3409
</pre>

## Record 002839

**Label:** `benign`

<pre>
henwood stuff and thoughts about valuation did you guys get this ? i was too interested in the conversation to interrupt with comments about risk / return if the decision would be covered in rates , it is the customers &#x27; curves or equivalently the puc &#x27; s curve . i think if i were going to approach valuation in commodities where the assumptions of black / scholes do not apply , i would start with the capm for large industries in an area , use pro formas to translate this to utility curves for the input commodities , and add the utility curves . another issue : the factor that explains why enron is lowest bidder is its role in the market . in the 1930 s , keynes argued that if most market participants with long position were hedgers , futures prices would be higher than spot ; if they were speculators or traders , future prices would be lower than spot . traders must be compensated for holding the risk ; hedgers ( including utilities and consumers ) are willing to pay a premium for the certainty . consequently , enron traders have bigger bid / ask spreads and lower bid prices . just some random thoughts , michael - - - - - original message - - - - - date : 01 / 04 / 2001 10 : 41 am ( thursday ) from : &quot; heather mason &quot; to : hq 3 . em 5 ( michael schilmoeller ) mark your calendar - tuesday january 23 , 2001 downtown houston hyatt hotel henwood will be hosting a comprehensive ercot symposium on tuesday , january 23 , 2001 . a team of henwood regional power market specialists will be presenting the latest analysis and information to assist you in preparing for the new ercot restructured power market , in addition to an anlysis of the issues now playing out in the wscc markets . coffee and registration will begin at 9 : 30 am and the program will run until 3 : 00 pm . lunch and snacks will be provided . agenda topics include : * what will be the critical - success factors for qualified scheduling entities operating in ercot &#x27; s new wholesale &amp; retail markets ? * how will market restructuring impact mid to long - term wholesale prices ? * what is the outlook for new generation ? * what are the impacts of upcoming emission regulations on ercot &#x27; s generation resources ? * what are the new analytical tools available to capture market uncertainty impacts to your supply contracts and generation assets ? * what are the restructuring lessons learned from the california experience and the implications to ercot ? in conjunction with this program , henwood will have a demonstration room available to present its latest software applications and e - business solutions . a nominal $ 75 registration fee is required to reserve a space in the workshop . for more information or to reserve your spot , please contact heather mason at henwood : hmason @ hesinet . com or 916 / 569 - 0985 . about henwood : henwood offers integrated business solutions , strategic consulting , and innovative e - business applications to meet the challenges of the restructured energy markets throughout north america , australia , and europe , serving clients that include eight of the ten top utilities in north america , in addition to energy services providers and power marketers .
</pre>

## Record 002840

**Label:** `benign`

<pre>
re : 6 . 1070 , disc : sex / lang , re : 1023 in the ongoing discussion of the &quot; epicene he &quot; , i think that perhaps we are making some headway on certain issues , but all kinds of new loose ends keep unraveling . what seems clearly established is that the 18th century grammarians of english did not invent this usage , since ( a ) it had existed in english for centuries , and ( b ) it seems to be a linguistic universal or something close to it , not a peculiarity of english however , i do not see why anyone should call me &quot; misandrist &quot; ( or &quot; mysandrist &quot; ) . if it is because my name could easily be taken to be a woman &#x27;s name ( although i happen to be a man ) , that would really be too bad . if it is because of my acceptance of the common view that almost all or perhaps all societies are in some important sense male-dominated , then that too would be inaccurate . i also believe that for several centuries of us and brazilian and so on history white people held black slaves and not vice versa , but that does not mean i hate white people . the whole issue of the sense in which it is true that men have dominated human societies is certainly in some respects a subtle one , and one could certainly argue that this dominance has done us little if any good , but i do not see how one can deny that it is a fact . however , for the purposes at hand , this is not germane . what is relevant is ( a ) the linguistic fact that languages that make any kind of gender or sex distinction in pronouns or verb forms or anything else , as a rule use the male or masculine forms as unmarked forms for persons of either or unknown gender in some constructions ( which may differ from language to language in detail ) , and ( b ) the anthropological fact that all or nearly all human societies make social distinctions based on sex which go beyond reproduction , breast-feeding , and the like , and ( c ) the further anthropological fact that the male roles / activities are routinely perceived as somehow superior , dominant , better , normative , whatever ( regardless of whether they really are , which is a completely different issue ) . so what it all boils down to , again , is that i maintain that it makes no sense whatever to discuss the origin of the epicene he phenomenon in the context of the story of english prescriptive grammar , but only in the context of the way in which perceptions of sex roles have informed the structure of language ( as of any other institution ) . alexis manaster ramer
</pre>

## Record 002841

**Label:** `benign`

<pre>

&gt;&gt;&gt;&gt;&gt; On Thu, 25 Jul 2002, &quot;Stephen&quot; == Stephen Hocking wrote:  Stephen&gt; What I&#x27;d like to do is use an imap capable mailer to
  Stephen&gt; communicate with an imap server that is serving up my MH
  Stephen&gt; folders. Does anyone know of any Imap servers that can do
  Stephen&gt; this?This topic comes up every so often on this list.  The short answer is 
no, there really isn&#x27;t an IMAP server which knows how to do this.The longer answer is, UW-IMAP claims it does, but doesn&#x27;t do a good 
job, and doesn&#x27;t update scan caches, unseen, etc.You may have better luck while on the road using raw mh commands to 
read you e-mail if you have ssh access to your internal environment.
I&#x27;ve been doing this for quite a long time, and, after the learning 
curve of the mh command set (which I still don&#x27;t know completely),
I&#x27;m quite able to access my e-mail and respond to those e-mails which 
require a response.Another option is using mutt as your mail client when you&#x27;re remotely 
accessing e-mail.  Mutt does a decent job of dealing with mh folders, 
though it doesn&#x27;t update scan caches or unseen files either.  But it 
is a decent interface alternative to raw mh, and it&#x27;s quite 
customizable.The real answer to your question is that we need not an IMAP server 
that understands mh folders, but an mh server to which a local client 
could connect to.  In theory, it shouldn&#x27;t be too hard (technically) 
to cobble this together with ssh.  Replace all of exmh&#x27;s calls to mh 
commands with a wrapper which uses ssh to lob these commands over to 
a remote system, and dump the output back into the local exmh client.-- Seeya,
Paul
_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 002842

**Label:** `benign`

<pre>
japanese discourse analysis i have a student working on a project involving text-structuring devices ( metadiscourse markers ) in japanese and english . she has found few references to such work on japanese . is anyone aware of such work ? karl krahnke colorado state university krahnke @ lamar . colostate . edu thanks in advance for any help .
</pre>

## Record 002843

**Label:** `benign`

<pre>
start date : 12 / 31 / 01 ; hourahead hour : 2 ; start date : 12 / 31 / 01 ; hourahead hour : 2 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001123102 . txt # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number .
</pre>

## Record 002844

**Label:** `benign`

<pre>
friday brown bag on derivative pricing hello all : if you think any of your people would be interested in the following - please pass the messages on . thanks ! * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * message one dear everyone , we understand the as members of enron research group , all of us are working on very interesting projects , some of which are ground - breaking , and we all keep a very keen mind on any development of new technology . we also find out , through our own experience , that at this age of information explosion , it becomes more and more difficult to have enough time and energy to keep abreast with most of the exciting stuff taking place in this department , let alone in the industry . it is also our personal experience that many a project we are working on has partially been attempted by other members of this group . as a remedy , we propose that the research group start an informal brown bag lunch group meeting , once every two weeks on friday , for about 50 minutes . it is hoped that it will provide a forum for us to facilitate with new technology and development , as well as with each other  , s work , so that we do not have to reinvent the wheels . we envision the following : in this meeting ( or seminar ) , each one of us will take turns to make presentations to the group . the topics could range from theoretical consideration to practical implementation , be it option pricing , process modelling , insurance issue , or monte carlo simulation , or anything one finds fascinating . the presentation material could be papers you have been reading recently , projects you are working on , some problem that bothers you , or an idea that is fascinating . you choose your own presentation style . it could be everything - you - always - wanted - to - know - but - were - afraid - to - ask , hand waving style , or it can involve nitty - gritty , detailed derivations , anyway a style that suits you and the topic . or it can simply be a dry - run for your presentation at the next risk conference . zimin and alex will take upon the responsibility of organizing the seminar . we hope the seminar will be up and running in two - three weeks . for that purpose your support will be greatly appreciated . please let either zimin or alex know if you are interested in giving a presentation to the group and provide a tentative schedule . surely the rest of the group will be happy to hear your presentation . we encourage everyone to participate this brown bag meeting , either to give a talk or just sit in . zimin lu alex huang message two dear everyone , it looks like the proposed bblop has great support and is to have a great start . vince , grant , , amitava , kevin , clayton and chonawee have promised to give presentations to us . vince will kindly deliver the inaugural presentation next friday ( march 31 ) on new methodology for option pricing ( precise title tba ) . bblop will start at 12 noon and last about 45 to 50 minutes . let &#x27; s make this a new enron tradition ! best regards . zimin , alex
</pre>

## Record 002845

**Label:** `benign`

<pre>
+ 0100 kulbrandstad ) a colleague who does not yet have access to the net , has asked me to post this query : the word leisure in american english may rhyme with seizure or pleasure . can anyone answer the following : 1 . which pronuniciation is more common - / e / or / i / ? 2 . does the individual &#x27;s choice reflect regional patterns , social class , or some other factor ? i would also like to ask the same questions about the presence or absence of / l / in ga : calm , palm , psalm , almond etc . thanks in advance . lars anders kulbrandstad hedmark college , norway lak @ hamarlh . no
</pre>

## Record 002846

**Label:** `benign`

<pre>
&gt;
&gt; Hit or miss, Groundhog Day 2019 is going to be one heck of a show. Book
&gt; early, avoid the rush.Hey, meybee by then, Bush&#x27;s grand plan for a missle defense system will
actually pan out and -work- ...
I&#x27;m not holding my breath, but i&#x27;m not going to panic for something thats
a little under 17 years away, either.
-c&gt;
&gt; --
&gt; Gary Lawrence Murphy  TeleDynamics Communications
&gt; Inc Business Innovations Through Open Source Systems:
&gt; http://www.teledyn.com &quot;Computers are useless.  They can only give you
&gt; answers.&quot;(Pablo Picasso)
&gt;
&gt; http://xent.com/mailman/listinfo/forkhttp://xent.com/mailman/listinfo/fork

</pre>

## Record 002847

**Label:** `benign`

<pre>
&gt; &gt; Maybe.  I batch messages using fetchmail (don&#x27;t ask why), and adding
&gt; &gt; .4 seconds per message for a batch of 50 (not untypical) feels like a
&gt; &gt; real wait to me...
&gt; 
&gt; Yeesh.  Sounds like what you need is something to kick up once and score
&gt; an entire mailbox.
&gt; 
&gt; Wait a second...  So *that&#x27;s* why you wanted -u.
&gt; 
&gt; If you can spare the memory, you might get better performance in this
&gt; case using the pickle store, since it only has to go to disk once (but
&gt; boy, does it ever go to disk!)  I can&#x27;t think of anything obvious to
&gt; speed things up once it&#x27;s all loaded into memory, though.  That&#x27;s
&gt; profiler territory, and profiling is exactly the kind of optimization
&gt; I just said I wasn&#x27;t going to do :)We could have a server mode (someone described this as an SA option).--Guido van Rossum (home page: http://www.python.org/~guido/)

</pre>

## Record 002848

**Label:** `benign`

<pre>
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1I may be dense, but why would anyone want to utilize Habeus?  To me, it looks 
like a potential backdoor to anyone&#x27;s defenses against spam.If I were a spammer, I&#x27;d simply set up a server, send out my spam with the 
Habeus headers and continue till I was reasonably certain I&#x27;d been reported.  
Then I&#x27;d simply reconfigure the server and reconnect to a different IP.  As 
long as no one can establish my connection to the web sites my spam is 
directing people to, I&#x27;m home free.Since I can set up spamassassin to I don&#x27;t &quot;lose&quot; any email, what do I gain 
by making it easier for spam to get through??
- -- 
- ------------------------------------------------------------------------
Robin Lynn Frank---Director of Operations---Paradigm, Omega, LLC
http://paradigm-omega.com              http://paradigm-omega.net
Â© 2002.  All rights reserved.  No duplication/dissemination permitted.
Use of PGP/GPG encrypted mail preferred. No HTML/attachments accepted.
Fingerprint:  08E0 567C 63CC 5642 DB6D  D490 0F98 D7D3 77EA 3714
Key Server:  http://paradigm-omega.com/keymaster.html
- ------------------------------------------------------------------------
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.0.7 (GNU/Linux)iD8DBQE9bRrzD5jX03fqNxQRAjQnAJsE55BZGj0MGZdLTuBTUZqTGeQLwQCfXPzV
qfH+nyAg+m+ZKNvLi2BcJGI=
=YsRI
-----END PGP SIGNATURE-----
-------------------------------------------------------
This sf.net email is sponsored by: Jabber - The world&#x27;s fastest growing 
real-time communications platform! Don&#x27;t just IM. Build it in! 
http://www.jabber.com/osdn/xim
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 002849

**Label:** `benign`

<pre>
new nomination - - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 06 / 13 / 2000 12 : 28 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; jan svajian &quot; on 06 / 13 / 2000 11 : 07 : 59 am to : cc : subject : new nomination see attached . - enron nom change . xls
</pre>

## Record 002850

**Label:** `benign`

<pre>
interview for japan office darren , tanya and i had a telephone interview for yumi . i do not know what kind of position you would offer her . if you intended to let her do the work on quantitative modeling , her knowledge in math seems very sallow . she is working on a math degree on stochastic process , but she can not explain what ito &#x27; lemma is . we also asked questions about volatility of a basket , value at risk , etc . she did not have a clear answer . if you intended to let her to be a junior trader , she might be ok . it seems she has some experience of financial market , but i think you are much more qualified to probe her than i do in this aspect . keep in touch , best regards zimin from : darren delage @ enron on 01 / 12 / 2001 11 : 59 am ze 9 to : &quot; mm 21 yumi &quot; cc : zimin lu / hou / ect @ ect subject : re : next tuesday good afternoon imokawa - san , we would like to invite you to have a brief dialogue with some members of our research team . they would like to ask you to briefly expound on your mathematical studies . if you could please contact them next wednesday at 7 : 50 am ( it should be 4 : 50 pm houston time , tuesday ) . the conversation should take no more than 20 minutes of your time , and will enable us to get a more enhanced understanding of your quantitative abilities . zimin lu , director of research , can be reached at 713 - 853 - 6388 to dial from japan , 0061 - 1 - 713 - 853 - 6388 if you could please send zimin a copy of your resume before the interview , that would be much appreciated . you can call the above number to obtain the appropriate fax number . i will be in touch with you shortly thereafter . sincerely , darren &quot; mm 21 yumi &quot; 01 / 11 / 2001 08 : 35 pm to : cc : subject : thank you darren , thank you for cordinating everything . i understand it takes time , this is only the first week of the year in japan , and i do not like to push you much . normally , i have long meetings every thursday . for other dates , i make best effort to fit the schedule for your convenience , including early morning or late evening . i am looking forward to seeing you sometime soon . sincerely , yumi imokawa
</pre>

## Record 002851

**Label:** `benign`

<pre>
judgment fatigue , summary part ii : stromswold , ross , tang boyland , be asley the following are what i found to be especially informative quotes from four individual respondents who gave specific comments regarding the types of stimuli which tend to induce judgment fatigue . kimberly barskaitiki also sent a long , specific , detailed response with many interesting examples . ( thank you ! ) her response is not included here because it presented fewer strong , testable , theoretical claims . ( i must note here that ross and beasley are quoted without their expressed permission , for which i hereby beseech the authors &#x27; belated dispensations . i post all comments here in only the most charitable light , with the hope of sharing the author &#x27;s experience and information . ) * * * * * * * * * * * * * * &gt; as a graduate student at mit in 1986 , i wrote a paper on the &gt; phenomenon you described for a course i took with merrill garrett . i &gt; dubbed the phenomenon &quot; syntactic satiation &quot; as a nod to work on &gt; semantic satiation ( the widely studied phenomenon that words loose &gt; their &#x27; meaning &#x27; on repeated presentation . e . g . . , repeat the word &gt; &quot; snow &quot; 20 times and it starts sounding funny . and you can&#x27;t come up &gt; with as many semantically associated words like &quot; ice &quot; and &quot; cold &quot; ) . &gt; &gt; the study was n&#x27;t rigorously done and i never attempted to publish the &gt; paper ( which was called &quot; syntactic satiation ) , but what i discovered &gt; was &gt; &gt; 1 ) with repeated judgments , subjects &#x27; judgments got less certain and &gt; reliable ( some subjects explicitly said they were n&#x27;t sure anymore ) . &gt; but even before subjects &#x27; lost confidence in their judgments / made &gt; mistakes , they got much slower in making judgments . &gt; &gt; 2 ) syntactic satiation seems to be relatively specific . for example , &gt; i had my subjects make repeated judgments of wh-questions ( e . g . , &gt; that-t , long distance , island etc . ) and i found that their ability to &gt; judge wh-questiosn was impaired , but not their ability to judge other &gt; stimuli ( e . g . , double object datives ) &gt; &gt; 3 ) satiation did * not * occur when subjects were asked to make &gt; judgments about semantic plausibility ( where implausible &gt; sentences involved violations of animacy restrictions , e . g . , &gt; the juice spilled the child that stained the rug ) &gt; &gt; 4 ) i also did n&#x27;t get any clear evidence of satiation at the &gt; morphological level ( e . g . , asking subjects to judge sentences &gt; with case / tense violations , e . g . , i gave it to he ; she give him a book ) &gt; &gt; 5 ) rate of presentation seemed to be an important factor in inducing &gt; satiation . if subjects are urged to go quickly , they satiate faster . &gt; this goes along with findings in the semantic satiation where whether &gt; semantic priming or satiation occurs seems to depend on rate of &gt; presentation ( at least in part ) . &gt; &gt; 6 ) being forced to make ungraded judgments ( i . e . , good vs . bad with no &gt; intermediate judgments allowed ) also seemed to induce faster satiation &gt; &gt; 7 ) satiation seems to be temporary , although i can&#x27;t say what the &gt; refractory period is . it is probably less than 1 month ( the interval &gt; i retested at ) &gt; &gt; 8 ) i did n&#x27;t detect satiation when i gave subjects mixtures of sentences &gt; to judge ( in my case , datives , passives , wh-questions , and tense / case ) . &gt; &gt; when i did the lit review for the paper , i found a few other studies &gt; that looked at things related to syntactic satiation / syntactic priming . &gt; i will see if i can dig up the paper and find the references for you . &gt; also , william snyder at mit presented a poster ( ? ) at the lsa conference &gt; in 1994 ( ? ) where he looked at this phenomenon . * * * * * * * * * * * * * * &gt; from john robert ( haj ) ross ( fj44 @ jove . acs . unt . edu ) : &gt; . . . the term i remember &gt; being in on the birth of was actually &quot; to scant out &quot; , the term being &gt; proposed by arnold zwicky and me , and doubltless others , in the summer of &gt; 1963 , while we were working at mitre corporation in bedford mass , and &gt; scanting out was a common hazard . * * * * * * * * * * * * * * &gt; from joyce tang boyland : &gt; much of the information i have comes from responses i received to a &gt; query i posted to linguist list about 4 years ago . &gt; . . . one of the refs was for carson schutze &#x27;s ma thesis . the others &gt; i think were only old cognitive psych papers on semantic not syntactic &gt; satiation . i can dig them up if you are still interested . basically &gt; i do n&#x27;t think there has been much actual research on the subject ; &gt; schutze &#x27;s lit review was very thorough but he only mentioned one or two &gt; not very conclusive pieces of research on satiation . i &#x27; m very glad you &gt; are planning to research this experimentally . i used to have stronger &gt; opinions on this than i do now , but i do think that syntactic satiation &gt; does happen . i think that knowing about it ought to have an effect on the &gt; practice of linguistics , and i would also say that it has some implications &gt; for theories of acquisition and of historical language change , which i can &gt; expound on further if you are interested . &gt; &gt; another thought is that there are at least two different things going on in &gt; syntactic and semantic satiation . from the linguist query i posted several &gt; years ago , i gathered that haj ross some time ago coined the phrase &quot; scanting &gt; out &quot; to describe the experience of losing one &#x27;s intuition on what the word &gt; &quot; scant &quot; means and can be used for after thinking about it overtly for too long ; &gt; i think this is a case of excessive meta-linguistic attention interfering with &gt; what one would normally know , like the millipede in the fable being asked how &gt; it could possibly walk and then it could n&#x27;t walk anymore . when i was little i &gt; used to play with saying a word over and over to myself until it became only a &gt; sequence of sounds without meaning ; this might have been a similar phenomenon . &gt; i see this as a sort of evaporating of subconscious associations or constraint s &gt; ( for lack of better terminology ) when under the spotlight of consciousness . &gt; &gt; i think a second process , in syntactic satiation in particular , is similar &gt; to something that &#x27;s being studied in social psychology , which is that the &gt; frequency of your witnessing something may affect how acceptable you think &gt; it is , if you did n&#x27;t have an opinion on it in the first place ( which people &gt; often do n&#x27;t have on linguistic constructions ) . ( having an opinion in the &gt; first place , if i remember correctly , is something that the researcher whom &gt; schutze cites did not control for . my copy of s is in another building at the &gt; moment . ) ( i am reconstructing vague memories very freely here , so i may not &gt; be reflecting the literature faithfully , but these are the lines along which &gt; i am thinking . ) so in this case people won&#x27;t be * losing * all * the &gt; associations or constraints that a word or construction would normally have , &gt; but rather , a * particular * type of use they hear which violates a particular &gt; constraint may become * more * acceptable * . the gross effect of certain uses &gt; becoming more acceptable may appear to be the same as the millipede effect , &gt; since one &#x27;s intuitions are changing , but more careful inspection should show &gt; a different fine structure . &gt; i suppose i might as well add here that the degree to which a construction &gt; is susceptible to satiation effects ( this latter one esp . ) might well be a &gt; measure of its susceptibility to ( or even progress towards ) grammaticalization . * * * * * * * * * * * * * * &gt; from tim beasley ( tbeasley @ ucla . edu ) &gt; a few things cause my intuition to crash and burn . &gt; &gt; the most frustrating and reliable is judging individual items in a list of &gt; sentences , and ranking them from ok to ? to ? * to * . if i start from the ok &gt; side , i will over-accept sentences . if i start from the * side , i will &gt; over-reject sentences . it &#x27;s worst when the sentences proceed stepwise , &gt; changing one lexical or syntactic feature ( especially small ones ) . and when &gt; the person asking me to rank them interacts , asking me if i &#x27; m sure . &gt; &gt; i . e . , i become muddled if , in comparing sentences , i accept one , and then &gt; realize that the second is some sort of extension of or analogical to the &gt; first . if the first is right , then the second _ must _ be right . and then the &gt; third must be ok . er , well , no , but that does n&#x27;t stop me . &gt; &gt; similarly , comparing two quasi-homonymous structures or lexemes in a battery &gt; of sentences designed to elicit the differences between them usually results &gt; in really , really bad results . one such test posted to linguist caused me &gt; to alter my own usage for several weeks . &gt; &gt; lexical items that cause me to stumble regularly : any , all . often there &gt; will be one very blatant reading of a sentence ; if somebody suggests a &gt; second interpretation , my intuition curls up to hibernate for the duration . &gt; in a word : s-c - o-p - e . other problems with scope crop up , too ( negation , &gt; adjectives , etc . ) . [ . . . reference to interference from experience with different languages . . . ] &gt; i &#x27; ve come to assume that the linguistic muddle ( apart from inter-language &gt; problems ) results from attempting to find a coherent , rational meaning for &gt; the sentences . agreement and other such grammatical errors are trivial to &gt; spot , usually . otherwise , if the task succeeds , i assume the sentence must &gt; be ok , unless there is some clear , overwhelming error in word choice , focus , &gt; government , etc . lists of marginal sentences weaken my sense of what a &gt; clear error is as i move my ok / not-ok boundary marker ( my perception of the &gt; norm ) to allow for marginalia and enable me to interpret the next in a &gt; series of increasingly aberrant sentences . &gt; [ . . . another reference to experience with different dialects of english . . . ] &gt; in any case , it takes a leap of humility to realize when i can no longer &gt; judge sentences in my native language . . . . * * * * * * * * * * * * * * end of post - - - bjl
</pre>

## Record 002852

**Label:** `benign`

<pre>
helsinki report dear all i &#x27; ve been through the attached with steve young and mark frevert . would welcome any thoughts / comments . thanks fernley - - - - - - - - - - - - - - - - - - - - - - forwarded by fernley dyson / lon / ect on 31 / 01 / 2000 17 : 02 - - - - - - - - - - - - - - - - - - - - - - - - - - - fernley dyson 31 / 01 / 2000 16 : 36 to : richard causey / corp / enron @ enron cc : subject : helsinki report rick , the attached report is an updated version of the document we discussed on friday of last week . some of the numbers in the exposure analysis are still draft and i expect firm numbers in the next few hours . my aim would be to streamline this report for the presentation to joe sutton , but i would welcome your steer on how you plan to conduct the meeting and whether or not this format is appropriate . regards fernley
</pre>

## Record 002853

**Label:** `benign`

<pre>
speech communication - a publication of the european association for signal processing ( eurasip ) and of the european speech communication association ( esca ) - editor - in - chief : christel sorin , france &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; contents : volume 14 no . 4 ( september 1994 ) r . s waldstein &amp; a . boothroyd speechreading enhancement using a sinusoidal substitute for voice fundamental frequency . s . nakajima automatic synthesis unit generation for english speech synthesis based on multi-layered context oriented clustering . z . s . bond &amp; t . j . moore a note on the acoustic-phonetic characteristics of inadvertently clear speech . y . qian et al pseudo - multi-tap pitch filters in a low bit-rate celp speech coder . e . blaauw the contribution of prosodic boundary markers to the perceptual difference between read and spontaneous speech . &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; &quot; published by elsevier science - north holland freesample @ elsevier . co . uk
</pre>

## Record 002854

**Label:** `benign`

<pre>
finding email addresses : advice there seem to be pretty frequent requests for email addresses on the linguist list . people with unix accounts can use the &quot; finger &quot; command to look up addresses - - if they know the name and affiliation of the person they &#x27; re looking for ( others may have access to some sort of finger utility ) . for example , there was a recent request for the internet address of someone whose bitnet address is escatton @ albnyvms here &#x27;s how i used finger to find his internet address : finger escatton @ albnyvms finger : albnyvms : unknown host finger escatton @ albnyvms . edu finger : albnyvms . edu : unknown host well , albnyvms does n&#x27;t sound very internet-like , so let &#x27;s start guessing : finger scatton @ albany . edu [ albany . edu ] ( there is no account scatton on this node . ) name : ernest scatton title : professor , german and slavic languages + literat address : humanities 246 university at albany 1400 washington av albany ny 12222-0001 phone : + 1 518-442 - 4224 bitnet : escatton @ albnyvms internet : escatton @ cnsvax . albany . edu there it is . if you have less information - - for example , you know the person is somewhere in new york state , but not where exactly - - you can use one of the &quot; white pages &quot; services available . a good starting point is : http : / / home . netscape . com / commun / internet _ white _ pages . html happy hunting !
</pre>

## Record 002855

**Label:** `benign`

<pre>
Gordon Mohr wrote:
&gt; Is this some new &quot;I&#x27;m not spam&quot; signal, to include a 
&gt; valid mailing address?It&#x27;s so you can still converse with him after the internet
implodes due to spam and bankruptcy.- Joe
-- 
The Combatant State is your father and your mother, your only
protector, the totality of your interests. No discipline can
be stern enough for the man who denies that by word or deed.
http://xent.com/mailman/listinfo/fork
</pre>

## Record 002856

**Label:** `benign`

<pre>
Lucas Gonze:
&gt;Spam is *the* tool for dissident news, since the fact that it&#x27;s unsolicited 
&gt;means that recipients can&#x27;t be blamed for being on a mailing list.That depends on how the list is collected, or
even on what the senders say about how the list
is collected. Better to just put it on a website,
and that way it can be surfed anonymously. AND
it doesn&#x27;t clutter my inbox.
_________________________________________________________________
Chat with friends online, try MSN Messenger: http://messenger.msn.comhttp://xent.com/mailman/listinfo/fork
</pre>

## Record 002857

**Label:** `benign`

<pre>
rules , innateness , psychological reality guido vanden wyngaerd ( vol-3 - 395 ) claims that the wh-island constraint is innate . if it is innate , there is really nothing to explain . to vindicate his claim , wyngaerd purports to show that cognitive principles such as analogy make false predictions about how the structure of yes-no questions is acquired : if it were acquired by analogy , one would expect a more or less random distribution over ( 1a ) and ( 1b ) : ( 1 ) a is [ the man who is tall ] _ _ in the room ? b * is [ the man who _ _ tall ] is in the room ? as the reason for this distributional expectation wyngaerd gives this : &gt; given that the main source of evidence on yes-no questions at the child &#x27;s &gt; disposal will overwhelmingly consist of simple sentences of the form &quot; is &gt; the man _ _ in the room &quot; , the child could make the generalisation either &gt; in way : in terms of linear precedence ( &quot; front the first finite verb &quot; , &gt; yielding ( 1b ) ) or in terms of hierarchical structure ( &quot; front the finite verb &gt; which follows the subject &quot; , yielding ( 1a ) ) . the fact that children do not &gt; make mistakes in this respect ( ie do not form ( 1b ) ) clearly shows that &gt; the rule is not one learned by experience , the relevant experience not &gt; being rich enough to determine the nature of the rule and not being &gt; able to explain the absence of mistakes . the above passage proves nothing . it would be interesting , indeed , to hear psycholinguists &#x27; opinions about this kind of conjectural psycholinguistics . meanwhile , let me continue conjecturing , for the sake of argument . that &quot; the relevant experience [ is not ] rich enough to determine the nature of the rule &quot; echoes the well-known &#x27; poverty of stimulus &#x27; argument , which has never been proven . in the case at hand , it is easy to conjecture what sort of data / experience is relevant for a child to infer that yes-no questions are formed in terms of hierarchical structure . consider where-questions : where is [ x ] ? [ x ] is in z . is [ x ] in z ? - - - - - - - - - - - - - - - - - - - - - - = - - - - - - - - - - - - - - - - - - - - - = - - - - - - - - - - - - - - - - - - - - - where is [ x who is y ] ? [ x who is y ] is in z . is [ x who is y ] in z ? in principle , analogy works here quite well : the where-question displays the hierarchy which can be analogically extended to other cases . but i am not concerned with whether or not analogy works in this particular case . what i am concerned with is , objecting to wholesale innatism . notice that this does not make me a _ tabula _ rasa _ proselyte . certainly children possess innate cognitive principles and abilities , but from this it does not follow that human beings are necessarily endowed with a grammar as a mental organ ; nor does it follow that the cognitive principles are linguistic or grammatical in nature . it should be clear from my earlier postings that i do not hold that &quot; children only produce what they hear &quot; . so , i concur with wyngaerd &#x27;s view that &gt; children do not hear &gt; forms like &quot; buyed &quot; , &quot; eated &quot; , or &quot; goed &quot; , yet they all go through a stage &gt; where they produce these forms . this can only be because they make &gt; generalizations ( rules , if you like ) , which go beyond what they hear . i expect wyngaerd to concur with me that forms like &quot; buyed &quot; , &quot; eated &quot; , or &quot; goed &quot; are due to analogy . &gt; as far as the rest of nyman &#x27;s remarks is concerned , i still fail to &gt; see how and why they motivate a distinction between grules and lrules : in his _ knowledge _ of _ grammar _ ( 1986 ) , chomsky speaks of rules as follws : &quot; it might be appropriate to describe the way a sheep dog collects the flock , or the way a spider spins a web , or the way a cockroach walks in terms of rule following , with reference to underlying &quot; competence &quot; consisting of rules of some sort . . . &quot; ( 239 ) . if you think this is analogical to linguistic behavior , you won&#x27;t need recognize the conceptual distinction between social norms-of - language ( l - rules as objects of common knowledge ) and theoretical generalizations as formulated by a linguist ( g - rules ) . g ( rammatical ) rules need not be psychologically real , but if they are supposed to be psychologically valid , this means that g - rules are supposed to describe what the internalized rule must consist in ; no one knows how &quot; brain rules &quot; are represented ( mentalese ? ) . martti nyman department of linguistics , university of helsinki , finland
</pre>

## Record 002858

**Label:** `benign`

<pre>
just saw the ISOs on an internal server here and was tempted.... D.-----Original Message----- From: John P. Looney [mailto:valen@tuatha.org] Sent: Monday, September 02, 2002 3:45 PM To: HAMILTON,DAVID (HP-Ireland,ex2) Cc: &#x27;ilug@linux.ie&#x27; Subject: Re: [ILUG] Redhat 8.0 On Mon, Sep 02, 2002 at 03:22:54PM +0100, HAMILTON,DAVID (HP-Ireland,ex2) mentioned: &gt; Does anyone know when Redhat 8.0 is going to be released? &gt; I have seen some ISO images of it around and I am trying to work out &gt; if it&#x27;s near release. Null, the third beta was out last week. It&#x27;ll be an interesting release. Gnome 2.0, and GCC 3.2 - both very new, large projects. I&#x27;d not be putting it on any production machines for a while... Though many say &quot;RedHat X.0 releases are rubbish&quot; - it&#x27;s worth baring in mind that they jump a release when the underlying archtechture changes, not just the installer, so they are .0 for a reason.Kate-- Irish Linux Users&#x27; Group: ilug@linux.ie http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information. List maintainer: listmaster@linux.ie
</pre>

## Record 002859

**Label:** `benign`

<pre>
start date : 2 / 4 / 02 ; hourahead hour : 24 ; start date : 2 / 4 / 02 ; hourahead hour : 24 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002020424 . txt
</pre>

## Record 002860

**Label:** `benign`

<pre>
&quot; politically correct &quot; : summary on wed , 21 sep 1994 , i posted the following query : &gt; in vol . 5 . 1022 rex a . sprouse wrote &gt; &gt; in terms of the politics of the discussion [ of the term &gt; &quot; informant &quot; ] , i think that in the united states we have seen a &gt; kind of orwellian development with the use of the term &gt; &quot; politically correct &quot; as a pejorative term . &gt; &gt; based on dim personal recollections , my sense of the latter term &gt; is that &quot; politically correct &quot; first surfaced in english in maoist &gt; literature . there it was used with a straight face , since &gt; correctness was viewed as being , like everything else , subject to &gt; constant definition and redefinition by the party . i recall &gt; feeling that this world-view implicit in the phrase was so &gt; contradictory to democratic ideals that only a person who accepted &gt; political authority over truth could possibly use it without &gt; ironic intent . &gt; &gt; does anyone have any more concrete data on the history of this &gt; politically loaded expression ? &gt; i received replies from eight people ; i reproduce them below . i apologize for the long delay in publishing these . mark a . mandel dragon systems , inc . : speech recognition : + 1 617 965-5200 320 nevada st . : newton , mass . 02160 , usa : mark @ dragonsys . com p . s . : this document was dictated with dragondictate v2 . 0 . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = i first heard &quot; pc &quot; ( in the relevant sense ) in one of two ( possibly three places ) : hartford courant , new york times , chicago sun - times . there was a story relating to an incident where a job applicant was being interviewed for a job . he was denied . there was some question as to why - - this is before affirmative action helped explain such matters . he demanded to see all relevant materials . he inquired into the significance of the comment written at the bottom corner of his application &quot; not pc . &quot; he was a conservative . it &quot; came out &quot; that it meant not politically correct . whether there was legal action , i do n&#x27;t know . these are the best of my recollections of the story i read years ago . as for myself , i do n&#x27;t know whether it is pc to deny that pc is pc , or to invert the current meaning , or to deny it makes any sense . until it is cleared up . i will not broach the matter with my superiors . i do n&#x27;t have to , it is a free country : / steven = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = the term seems to have entered common use in anglophone canada first of all as social democrat teasing of the maoists and the stalinists for their pomposity . &quot; correct analysis &quot; could be used in the same way , as in , &quot; you have the correct analysis , comrade , &quot; for &quot; i agree with you . &quot; this could be said only to other socialists , of course ; the totalitarian left never got the joke . &quot; politically correct &quot; was - and in safe company still is - used by the democratic left in self-mockery , as in : &quot; we have politically correct fruit salad tonight , _ no _ california grapes . &quot; the term seems to have become pejorative as it has been taken over by people who are incapable of seeing the comic side of their own ideals . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = but notice that today the american right uses the term as a pejorative term for virtually any notion with any kind of ethical motivation . in so doing , the right derides not maoism , but the ideology of classical liberal democracy society , where redefinition does not occur by the party running a one-party state , but by free and open exchange of ideas , and where ethical concerns ( as well as pragmatic concerns ) are relevant . rex sprouse [ whose comment prompted my original question - - mam ] = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = i imagine the list is going to be inundated with opinions about political correctness for a while now . it should be interesting to see how the linguistics community feels about this issue . i &#x27; m young enough that i was completely unaware of the connection of the term with maoism . i can tell you , however , that it is currently being used on college campuses by certain groups with no ironic intention . nowadays , what is politically correct is anything , particularly language , that is not sexist , racist , heterosexist , lookist , ageist , ableist , etc . the groups fighting these - isms tend to use the term quite straightforwardly to refer to what they believe is the only accepted way to be . it seems to me that the current situation mr . sprouse mentioned has resulted from the near-fascist enforcement tactics of these special interest groups and the mangling of language that pc results in , rather than any historic reasons . benjamin moore japan electronic dictionary research institute ltd . kawasaki , japan ben @ edr5r . edr . co . jp = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = a few years ago when reading krushchev &#x27;s secret speech in which he denounced stalin for the first time ( at the 1956 communist party congress ) , i noticed the use of a term in russian that could be translated as &quot; politically correct . &quot; while denouncing stalin , krushchev maintained a belief in the &quot; politically correct &quot; - - which stalin obviously was n&#x27;t . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = re : mark mandel &#x27;s inquiry about the origins of &quot; politically correct &quot; : ric dolphin &#x27;s not politically correct ( 1992 ) confirms mark &#x27;s belief that the term originated in the thoughts of mao tse tung . dolphin states that its first use in the u . s . was by angela davis in 1971 when she argued that there could be no &quot; opposing argument to an issue which has only one correct side . &quot; then in 1975 , the then-president of the national organization of women said that organization was moving in &quot; the intellectually and politically correct direction . &quot; the 1971 quotation seems to confirm mark &#x27;s view that only those who accept political authority over the quest for truth could use the term with no ironic intent . = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = i first heard &quot; pc / politically correct &quot; in the early 80s used wryly and humorously about themselves by people trying to live lives of some modicum of independence from agribusiness and the consumption of fossil fuel . i was really sorry to see it turned from gentle humor to the grim tool it has become in the hands of demagogues . f . karttunen v = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = dear mark , i do n&#x27;t know where the term &quot; politically correct &quot; first entered english , but the etymology you give would certainly be consistent with my experience . back in the early &#x27; 80s i knew &quot; politically correct &quot; as a term that leftists might use to poke fun at those whose ( putatively leftist ) politics seemed too doctrinaire . later , various writers , commentators , and politicians hostile to the left seized on the term as if it had been used seriously - - in other words , as if there had been leftists ( in the us ) who applied the term to themselves without irony . now , what had been something of an inside leftwing joke has been turned into a weapon brandished against the left . for example , in 1982 , say , a leftist might have blown off steam about some dogmatic person or organization by characterizing her or it as &quot; politically correct . &quot; but now i hear the term used by non-leftists , often to evoke an image of rigid leftist / multi-culturalist / academic types taking over our institutions and seeking to control our minds - - as if such a move were afoot , and as if the left had that much power . at this point , if &quot; politically correct &quot; ever regains an ironic connotation , perhaps it will be as a word that makes fun of the political right . for example , sometimes i hear people call each other &quot; commie &quot; or &quot; pinko &quot; in a manner whose real intent is to make fun of the prejudices of anti-communists . i could imagine that &quot; politically correct &quot; might one day be used similarly . sincerely , seth
</pre>

## Record 002861

**Label:** `benign`

<pre>
* diachronica * moderators &#x27; note in the interests of a balanced exchange of views , we publish the following reply to a posting by sheila embleton , an editor of diachronica . interchanges of this nature , however , are best carried out in forums other than linguist , and this will thus be our last posting on the topic . * * * * * * * * * * * * * * * * * * * * * i am not sure why sheila embleton chose to attack me on linguist but briefly * diachronica * has accepted for publication a paper in which i am attacked personally - - and basically described as an idiot - - on the basis of remarks i made ( or am alleged to have made ) during oral discussion at a conference in ypsilanti last year . i have repeatedly told the author of the paper as well as the editors of * diachronica * that i consider this a rather dubious form of scholarship : i think people should be criticized on the basis of published statements , not oral remarks which cannot be checked for accuracy . moreover , criticizing in print remarks made at a conference during discussions is bound to have a chilling effect on such discussions . * diachronica * chose to disagree , and when i asked for an opportunity to respond to these attacks , i was told that they would not only not accept any rebuttal from me , they would not even consider one by me ( or even a coauthored one by me and others ) , and that furthermore they would not consider any submissions from me whatsoever for a period of at least 2 years . i have no objections to journals which have a policy of not allowing replies or which have a policy of limiting the number of publications by the same person , but in this case no existing policy was cited . as far as i can tell , some of the folks at * diachronica * just decided they do n&#x27;t like me anymore . which still does not mean that they have the right to publish stuff that comes to close to being slanderous or , i think , to refuse people who have been maligned in print the right to reply ( however briefly ) . alexis manaster ramer
</pre>

## Record 002862

**Label:** `benign`

<pre>
re : wellhead adjustments - may , 2001 adjustments have been made to volumes in the avg column on the attached spreadsheet effective 5 / 17 / 01 . bob from : daren j farmer / enron @ enronxgate on 05 / 17 / 2001 11 : 00 am to : robert cotten / hou / ect @ ect cc : george f smith / enron @ enronxgate subject : re : wellhead adjustments - may , 2001 bob , in looking at the trends over the meters , i made a few adjustments ( highlighted in blue ) . please use these changes and enter the deal changes in sitara . let me know if you have any questions . d - - - - - original message - - - - - from : cotten , robert sent : thursday , may 17 , 2001 10 : 38 am to : daren j farmer / hou / ect @ enron subject : wellhead adjustments - may , 2001 importance : high daren , please see the attached file . bob &gt;
</pre>

## Record 002863

**Label:** `benign`

<pre>
query on spanish and binding this is a request for help , in the form of references , suggestions , etc . , on a syntactic problem ( or maybe only an apparent problem ) . i have recently stumbled upon some interesting spanish data which seem to violate binding principles . in particular , my informants have provided examples like juan hablo a pedro de / sobre el and insist that el can can have as its antecedent at least juan , and perhaps also pedro . if the facts are what they seem , binding principle 2 is clearly violated , since we have a pronoun which is not free in the local domain . there are also cases , although not so clear , in which an anaphor seems not to be bound in the local domain . any thoughts on such examples will be greatly appreciated . if there is interest , i will post a summary of responses received . thanks . steve seegmiller seegmiller @ apollo . montclair . edu
</pre>

## Record 002864

**Label:** `benign`

<pre>
pjm customer load reduction pilot program approved message sent from the pjm - customer - info mailing list at pjm - customer - info @ majordomo . pjm . com : august 4 , 2000 norristown , pa : the members committee of pjm interconnection , llc approved a customer load reduction pilot program following approval last week by the federal energy regulatory commission ( ferc ) . the program targets existing on - site generation and load management programs at facilities such as hospitals , hotels , factories , and stores during emergency conditions . after september 30 th , the end of the trial period for the program , the program will be evaluated to determine its success . the evaluation will explore program improvements in order to enhance the program as a way to address potential capacity shortfalls next summer . related procedures for interconnecting generation under 10 mw will be discussed through pjm &#x27; s committee process for additional advisory input and will be refiled for further consideration by the ferc after the stakeholder process . the pilot program was designed through a collaborative fast - track effort of the pjm distributed generation user group . currently , there are 35 participants registered for the program representing a total of 61 . 5 mw . the smallest of these generators represents 200 kw and the largest represents 15 mw . this user group &#x27; s efforts are consistent with the federal energy regulatory commission &#x27; s recent initiative to support interim procedures to assist with the on - going efforts to maintain a reliable electric power system during the summer months . distributed generation benefits the system by either reducing demand or providing additional generating resources . the pilot program is designed to provide additional flexibility during times of peak demand . it is not meant to replace pjm &#x27; s successful generation interconnection process which deals with generation projects applying to become part of regional capacity or to interfere with the active load management ( &quot; alm &quot; ) programs that are in operation . please do not reply to this message . if you have a question for pjm customer relations and training , please send an e - mail to custsvc @ pjm . com . to unsubscribe from this list , send an e - mail to majordomo @ majordomo . pjm . com containing only the following line in the body of the e - mail : unsubscribe pjm - customer - info
</pre>

## Record 002865

**Label:** `benign`

<pre>
query on physical appearance of words content - length : 1535 we are a group of environmental scientists who have been pondering a question . has anyone done research on emotional responses to the * physical appearance * of words or groups of letters ? for example , &#x27; toxic &#x27; , &#x27;d ioxin &#x27; or the &#x27; oxi &#x27; combination . why do people have a fear of &#x27;d ioxin &#x27; but not &#x27; furan &#x27; ( another toxic chemical ) . obviously , some reaction is created by the media , but is there something else involved ? do certain combinations of letters ( e . g . &#x27; oxi &#x27; ) elicit an emotional response ? has anyone done research on this , or know of anyone involved with psycholinguistics or semiotics who might be familiar with this topic ? will summarize for list . thanks for any assistance . joyce lundstrom epidemiologist eti 600 stewart st , # 700 seattle , wa 98101 etilib @ halcyon . com
</pre>

## Record 002866

**Label:** `benign`

<pre>
workshop on corpus - based terminology call for participation workshop on corpus - based terminology bozen / bolzano , february 26-28 , 1998 european academy bozen / bolzano patronage autonome provinz bozen = = = = = = = = = = = = = background = = = = = = = = = = = = = the motivation to organize this workshop is a project currently in the planning phase at the european academy bozen / bolzano . the main goal of the project is to elaborate a comprehensive italian / german terminology in the areas of law and administration for the use in south tyrol by extracting the term pairs from a representative corpus of relevant bilingual texts . a more detailed description can be found here : http : / / www . eurac . edu / fb1 / projects / catex . htm the objective of the workshop is to bring together leading researchers working on corpus-based terminology and to provide a forum of discussion of the state of the art in this area . the main focus will be on computational methods and technologies covering the following topics : t1 : encoding ( multilingual ) text corpora t2 : extraction of data / knowledge from text corpora ( translation equivalents , concept relations , . . . ) t3 : terminological data / knowledge representation = = = = = = = = = = = = = = = = = invited speakers = = = = = = = = = = = = = = = = = khurshid ahmad ( university of surrey , united kingdoms ) susan armstrong ( university of geneva , switzerland ) lynne bowker ( dublin city university school , ireland ) ido dagan ( bar ilan university , israel ) ulrich heid ( university of stuttgart , germany ) david hull ( xerox research centre europe , france ) nancy ide ( vassar college , new york ) christian jacquemin ( iut de nantes , france ) bernardo magnini ( irst , italy ) maria t . pazienza ( university of roma , italy ) jordi vivaldi palatresi ( university pompeu fabra , spain ) = = = = = = = = = = = = = = = = = = = = = = = = preliminary programme = = = = = = = = = = = = = = = = = = = = = = = = the programme consists of talks given by 11 invited speakers and a pannel discussion about the catex project ; there will be plenty of time for discussions . a preliminary programme outline is given below : - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - thursday , february 26 , 1998 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 8 . 30 - 8 . 45 registration 8 . 45 - 9 . 00 opening 9 . 00-10 . 00 general introduction into corpus - based terminology + some on t1 ( lynne bowker ) break 10 . 30-12 . 30 corpus encoding for linguistic research and term detection ( jordi vivaldi palatresi ) working with parallel corpora ( susan armstrong ) lunch 14 . 30-15 . 30 ( extraction of information from text corpora ) ( ulrich heid ) break 16 . 00-18 . 00 pannel discussion : the catex project ( werner aufschnaiter , johann gamper , felix mayer , francesco palermo ) 20 . 00 workshop dinner - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - friday , february 27 , 1998 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 9 . 00-10 . 00 recognition and acquisition : two interrelated activities in corpus - based term extraction ( christian jacquemin ) break 10 . 30-12 . 30 automatic terminology extraction and alignment from a parallel sentence - aligned bilingual corpus ( david hull ) bilingual word alignment and its use for productive lexicon construction ( ido dagan ) lunch 14 . 00-19 . 00 tour : tobogganing at the seiser alm - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - saturday , february 28 , 1998 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 9 . 00-10 . 00 a domain specific terminology extraction system ( maria t . pazienza ) break 10 . 30-12 . 30 from terminologoy extraction to terminology representation ( khurshid ahmad ) use of a lexical knowledge base for information access systems ( bernardo magnini ) lunch 14 . 30-15 . 30 encoding linguistic corpora : encoding schemes and a data architecture for linguistic annotation ( nancy ide ) break 16 . 00 concluding remarks = = = = = = = = = = = = = = = = = = = = = conference address = = = = = = = = = = = = = = = = = = = = = european academy bozen / bolzano weggensteinstr . 12 / a i - 39100 bozen / bolzano phone : + 39 - 471 - 306111 fax : + 39 - 471 - 306199 = = = = = = = = = = = = = = social events = = = = = = = = = = = = = = informal get-together : an informal get-together will be held on wednesday evening , february 25 ( place will be communicated later to the workshop participants ) . workshop dinner : the workshop dinner will take place on thursday evening , february 26 , in a typical restaurant in the city center . tour &quot; tobogganing at the seiser alm &quot; : on friday afternoon , february 27 , we will organize a tour to the seiser alm , one of the most beautiful alpine pastures in south tyrol , where we have the chance of tobogganing . please , do n&#x27;t forget warm clothes and heavy shoes ( we are walking in the snow ! ) . = = = = = = = = = = = = = = = = = = = = = = = = = = registration information = = = = = = = = = = = = = = = = = = = = = = = = = = attending to the workshop ( including coffee breaks ) is free of charge , however , registration is required . only a limited number of participants will be allowed . travel , accommodation , meals and social activities are at the expense of the participant . on request , the accommodation can be organized by the european academy bozen / bolzano . if you are willing to participate , please contact the local organizer . registration deadline : monday , february 23 , 1998 = = = = = = = = = = = = = = = = = = = = = = organizing committee = = = = = = = = = = = = = = = = = = = = = = giovanni b . flores d &#x27; arcais ( university of padova ) bernhard eccher ( university of innsbruck ) johann gamper ( european academy bozen / bolzano ) felix mayer ( european academy bozen / bolzano ) alberto m . mioni ( university of padova ) oskar putzer ( university of innsbruck ) harro stammerjohann ( european academy bozen / bolzano ) oliviero stock ( irst , trento ) = = = = = = = = = = = = = = = = = = = = = local organization = = = = = = = = = = = = = = = = = = = = = johann gamper european academy bozen / bolzano weggensteinstr . 12 / a 39100 bozen , italy phone : + 49 - 471 - 306114 fax : + 49 - 471 - 306199 jgamper @ eurac . edu for more information about the workshop , please contact the local organisation .
</pre>

## Record 002867

**Label:** `benign`

<pre>
On Tue, 3 Sep 2002, Kragen Sitaker wrote:&gt; Of course we&#x27;ve had select() since BSD 4.2 and poll() since System V
&gt; or so, and they work reasonably well for asynchronous I/O up to a
&gt; hundred or so channels, but suck after that; /dev/poll (available in
&gt; Solaris and Linux) is one approach to solving this; Linux has a way to
&gt; do essentially the same thing with real-time signals, and has for
&gt; years; and FreeBSD has kqueue.
&gt;
&gt; More details about these are at
&gt; http://www.citi.umich.edu/projects/linux-scalability/
&gt;
&gt; None of this helps with disk I/O; most programs that need to overlap
&gt; disk I/O with computation, on either proprietary Unixes or Linux, just
&gt; use multiple threads or processes to handle the disk I/O.
&gt;
&gt; POSIX specifies a mechanism for nonblocking disk I/O that most
&gt; proprietary Unixes implement.  The Linux kernel hackers are currently
&gt; rewriting Linux&#x27;s entire I/O subsystem essentially from scratch to
&gt; work asynchronously, because they can easily build efficient
&gt; synchronous I/O primitives from asynchronous ones, but not the other
&gt; way around. So now Linux will support this mechanism too.
&gt;
&gt; It probably doesn&#x27;t need saying for anyone who&#x27;s read Beberg saying
&gt; things like &quot;Memory management is a non-issue for anyone that has any
&gt; idea at all how the hardware functions,&quot; but he&#x27;s totally off-base.
&gt; People should know by now not to take anything he says seriously, but
&gt; apparently some don&#x27;t, so I&#x27;ll rebut.
&gt;
&gt; Not surprisingly, the rebuttal requires many more words than the
&gt; original stupid errors.
&gt;
&gt; In detail, he wrote:
&gt; &gt; Could it be? After 20 years without this feature UNIX finally
&gt; &gt; catches up to Windows and has I/O that doesnt [sic] totally suck for
&gt; &gt; nontrivial apps? No way!
&gt;
&gt; Unix acquired nonblocking I/O in the form of select() about 23 years
&gt; ago, and Solaris has had the particular aio_* calls we are discussing
&gt; for many years.  Very few applications need the aio_* calls ---
&gt; essentially only high-performance RDBMS servers even benefit from them
&gt; at all, and most of those have been faking it fine for a while with
&gt; multiple threads or processes.  This just provides a modicum of extra
&gt; performance.
&gt;
&gt; &gt; OK, so they do it with signals or a flag, which is completely
&gt; &gt; ghetto, but at least they are trying. Keep trying guys, you got the
&gt; &gt; idea, but not the clue.
&gt;
&gt; Readers can judge who lacks the clue here.
&gt;
&gt; &gt; The Windows I/O model does definately [sic] blow the doors off the
&gt; &gt; UNIX one, but then they had select to point at in it&#x27;s [sic]
&gt; &gt; suckiness and anything would have been an improvement. UNIX is just
&gt; &gt; now looking at it&#x27;s [sic] I/O model and adapting to a multiprocess
&gt; &gt; multithreaded world so it&#x27;s gonna be years yet before a posix API
&gt; &gt; comes out of it.
&gt;
&gt; Although I don&#x27;t have a copy of the spec handy, I think the aio_* APIs
&gt; come from the POSIX spec IEEE Std 1003.1-1990, section 6.7.9, which is
&gt; 13 years old, and which I think documented then-current practice.
&gt; They might be even older than that.
&gt;
&gt; Unix has been multiprocess since 1969, and most Unix implementations
&gt; have supported multithreading for a decade or more.
&gt;
&gt; &gt; Bottom line is the &quot;do stuff when something happens&quot; model turned
&gt; &gt; out to be right, and the UNIX &quot;look for something to do and keep
&gt; &gt; looking till you find it no matter how many times you have to look&quot;
&gt; &gt; is not really working so great anymore.
&gt;
&gt; Linux&#x27;s aio_* routines can notify the process of their completion with
&gt; a &quot;signal&quot;, a feature missing in Microsoft Windows; a &quot;signal&quot; causes
&gt; the immediate execution of a &quot;signal handler&quot; in a process.  By
&gt; contrast, the Microsoft Windows mechanisms to do similar things (such
&gt; as completion ports) do not deliver a notification until the process
&gt; polls them.
&gt;
&gt; I don&#x27;t think signals are a better way to do things in this case
&gt; (although I haven&#x27;t written any RDBMSes myself), but you got the
&gt; technical descriptions of the two operating systems exactly backwards.
&gt; Most programs that use Linux real-time signals for asynchronous
&gt; network I/O, in fact, block the signal in question and poll the signal
&gt; queue in a very Windowsish way, using sigtimedwait() or sigwaitinfo().
&gt;
&gt; --
&gt;        Kragen Sitaker     
&gt; Edsger Wybe Dijkstra died in August of 2002.  This is a terrible loss after
&gt; which the world will never be the same.
&gt; http://www.xent.com/pipermail/fork/2002-August/013974.html
&gt;- Adam L. &quot;Duncan&quot; Beberg
  http://www.mithral.com/~beberg/
  beberg@mithral.com

</pre>

## Record 002868

**Label:** `benign`

<pre>

On Thursday, Sep 19, 2002, at 14:51 Europe/London, Bill Kearney wrote:&gt;&gt; From the completely unrelated but funny department...
&gt;
&gt; &quot;Talk like a Pirate Day&quot;.
&gt; http://www.washingtonpost.com/wp-dyn/articles/A5011-2002Sep11.html
&gt;
&gt; Which is today, of course.
&gt;
&gt; That and &#x27;piratecore&#x27; rapping style...
&gt; http://poorman.blogspot.com/2002_09_01_poorman_archive.html#81798893
&gt;
&gt; Anything, just anything, to get us off the geek dating tips topic....
&gt;
&gt; -Bill Kearney
&gt;
Arrr, he be a scurvy dog, that Bill Kearney.

</pre>

## Record 002869

**Label:** `benign`

<pre>
anglicization of composers &#x27; names judging from the return post , i must have sounded like some kind of self-proclaimed expert on composers &#x27; names . let me hasten to say that i &#x27; m not . all the pronunciations i put in that little list came as surprises to me . in all cases but one , they were given to me by native speakers of the composers &#x27; language , while i was visiting the composers &#x27; native country . i do n&#x27;t speak any of those languages and certainly do not claim any expertise . i &#x27; ve just been trusting &quot; competent native speakers &quot; . the one exception , by the way , was when karl haas , on one of his daily &quot; adventures in good music &quot; broadcasts , asserted that pachelbel should be pronounced pach - el - bel . based on karl &#x27;s provenance i was inclined to trust him . but perhaps i &#x27; ve gone overboard taking natives &#x27; pronunciations as gospel . after all , we americans certainly manage to mangle enough of our own words , do n&#x27;t we ? sorry for any consternation i may have caused . i &#x27; ve certainly gotten an education from this . cheers , gordon brown
</pre>

## Record 002870

**Label:** `benign`

<pre>
oracle client upgrade in approximately one month ( 9 / 9 / 2000 ) , we are targeting that a new version of the oracle nt client ( 8 . 1 . 6 ) , borland database engine ( bde ) 5 . 1 . 1 and microsoft data access components ( mdac ) 2 . 5 . to all corp / ena workstations . this software provides the connectivity from your workstation to enron &#x27; s oracle databases and the applications supported by them . we are currently in the process of testing all the applications managed by corp / ena information technology to ensure that they will be compliant with this new software . this change may also effect your own developed ms - access , ms - excel spreadsheets , and / or ms - query documents that retrieve data from enron &#x27; s oracle databases via odbc drivers . as part of the upgrade , all oracle odbc connections will be upgraded to compliant driver versions . if you would like to test your ms - access databases and / or ms - excel spreadsheets under the new software releases , please use one of the workstations at one of the following locations for your testing : general users eb 2230 d eb 2778 b ebo 504 p eb 4857 traders and developers only please eb 2904 e eb 3067 eb 3138 b you may contact your floor support representative for any testing assistance .
</pre>

## Record 002871

**Label:** `benign`

<pre>
vince kaminski &#x27; s bio hello amy : attached please find vince kaminski &#x27; s &quot; bio &quot; . he is working on his presentation . thanks ! shirley
</pre>

## Record 002872

**Label:** `benign`

<pre>

Yannick Gingras wrote:&gt; &gt; What do you mean by &quot;CD-Key or the like&quot; (I presume that &quot;of&quot; was a
&gt; &gt; typo)? And what do you mean by &quot;unbreakable&quot;?
&gt; 
&gt; &quot;of&quot; was a typo
&gt; 
&gt; Unbreakable would mean here that no one, even previously authorised entity, 
&gt; could use the system without paying the periodic subscription fee.
&gt; 
&gt; &gt; You need to be far more explicit about the problem which you wish to
&gt; &gt; solve, and about the constraints involved.
&gt; 
&gt; It could be an online system that work 95% offline but poll frequently an 
&gt; offsite server.  No mass production CDs, maybe mass personalised d/l like Sun 
&gt; JDK.
&gt; 
&gt; Nothing is fixed yet, we are looking at the way a software can be protected 
&gt; from unauthorized utilisation.  
&gt; 
&gt; Is the use of &quot;trusted hardware&quot; really worth it ?Answering that requires fairly complete knowledge of the business
model. But, in all probability: no, it isn&#x27;t usually worth it. So, it
comes down to how difficult you want to make the cracker&#x27;s job.If the product requires occasional authentication, simple copying
won&#x27;t work; the product has to be cracked. In which case, the issue is
whether you&#x27;re actually going to enter into battle with the crackers,
or just make sure that it isn&#x27;t trivial.A lot of it comes down to your customer base. Teenage kids tend to be
more concerned about cost and less concerned about viruses/trojans,
and so more willing to use warez. Fortune-500 corporations are likely
to view matters differently.&gt; Does it really make it more secure ?Yes; software techniques will only get you so far. Actually, the same
is ultimately true for hardware, but cracking hardware is likely to
require resources other than just labour.Almost (?) anything can be reverse engineered. But it may be possible
to ensure that doing so is uneconomical.&gt; Look at the DVDs.IIRC, CSS was cracked by reverse-engineering a software player; and
one where the developers forgot to encrypt the decryption key at that.-- 
Glynn Clements 

</pre>

## Record 002873

**Label:** `benign`

<pre>
follow up to my voice mail as we discussed in rick &#x27; s staff meeting , you can help your 7 / 1 / 00 go - live go more smoothly , whether you are implementing financials and hr or hr only . here is one way . timekeeping , though it seems mundane on the surface , is a focal point of the sap integration . entry and coding of time populates not just payroll , but projects and cost centers , real time . we will now have more flexibility to charge employee and contractor time to the areas they actually work ( where people work on more than one area at a time ) . this will only happen to the extent that the business and cost center owners drive it . this capability is customizable not just by business unit or company , but by cost center within a company . to make this work how you want it to on 7 / 1 , each &quot; organizational unit &quot; ( as i said above , you can drive this in your cost center ( s ) only or across your bu ) needs to be clear on questions such as : 1 . whether or not they want contractors to enter time in sap 2 . whether you want positive timekeeping ( each pay period specifying the cost center or projects one worked on ) or &quot; exceptions &quot; only ( e . g . , vacation , sick time , etc ) 3 . whether an approval process is desired and if so , what it is 4 . whether people will record their own time using the self service capability ehronline ( typically more precise and less handoffs ) or whether they will continue to use a timekeeper ( typically a little more convenient for people who ( a ) rarely have access to a computer or ( b ) work in many different areas and are not willing / able to identify and use cost center numbers or project codes 5 . whether people know the projects and cost center codes they should charge to your leadership in clarifying this within your cost center and / or bu will be instrumental in driviing the level of change you desire , as well as minimizing the noise related to the 7 / 1 go - live . we have been using a variety of methods to communicate and drive much of this change , but the business drive for how much to utilize the tool is determined by you . the deadline for the first sap time entry period is 3 pm houston time on friday , june 30 . despite all our collective efforts , i expect that it will be a few pay periods before we get each individual clear on what level of acitivity is desired from him by his cost center or company . thanks for your help in getting through the transition period . please call me or andrea yowman if you have any questions .
</pre>

## Record 002874

**Label:** `benign`

<pre>
On Wed, Jul 31, 2002 at 02:40:26PM +0100 or so it is rumoured hereabouts, 
Liam Bedford thought:
&gt; On Wed, 31 Jul 2002 14:30:01 +0100
&gt; jac1 claiming to think:
&gt; 
&gt; &gt; hi,
&gt; &gt; i recently had to wipe linux from my pc but forgot to restore the original
&gt; &gt; MBR (NT). Anyone know how i can do this? linux is entirely gone and no boot
&gt; &gt; floppy. formatting the entire disk doesn&#x27;t do it either.
&gt; &gt; 
&gt; boot from dos and fdisk /mbr?
&gt; boot from an NT CD, choose repair, and make it check the mbr
                             ^^^^^^Nice how NT &quot;repair&quot;s a hard disk by removing other OSs.  Could we call it
that on Linux install disks too?Conor 
-- 
Conor Daly Domestic Sysadmin :-)
---------------------
Faenor.cod.ie
  5:37pm  up 69 days,  2:54,  0 users,  load average: 0.08, 0.02, 0.01
Hobbiton.cod.ie
  5:22pm  up 12 days, 0 min,  1 user,  load average: 0.03, 0.03, 0.00-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002875

**Label:** `benign`

<pre>
csdl - 4 preliminary schedule the fourth conference on conceptual structure , discourse , and language ( csdl - 4 ) october 10-12 , 1998 emory university , atlanta , georgia , usa general information : all talks will be held in the geosciences / anthropology building on the emory university campus . please note there will be a discount for early registration ( before june 10 ) . we also strongly encourage you to book your hotel reservations before that time , as a limited block of rooms has been reserved at the emory inn near the campus . detailed information about preregistration , transportation , and accomodations can be found at the conference web site : http : / / www . emory . edu / college / linguistics / csdl / preliminary schedule friday , october 9 7 : 30 pm : pre - conference symposium on primate communication . harold gouzoules , dario maestripieri , and susan savage-rumbaugh will discuss their research at the yerkes regional primate reseach center on vocal and gestural communication engaged in by our nearest primate relatives . saturday , october 10 9 : 00 ron langacker ( uc san diego ) , &quot; what wh means &quot; 9 : 25 liang tao ( ohio u ) , &quot; switch reference and zero anaphora : emergent reference in discourse processing &quot; 9 : 50 mira ariel ( tel aviv u ) , &quot; the cognitive basis of resumptive pronouns &quot; 10 : 15 michael israel ( uc san diego ) , &quot; argument structure and scalar argumentation &quot; 10 : 40 break 11 : 00 david danaher ( u of denver ) , &quot; metonymy in cognition , literature , and phenomenology : a case study &quot; 11 : 25 phyllis wilcox ( u of new mexico ) , &quot; two dogs and a metaphorical chain : an intertropic cognitive phenomenon &quot; 11 : 50 carol lynn moder ( oklahoma state u ) , &quot; metaphors in context : linguistic form and conceptual mapping &quot; 12 : 15 anna papafragou ( univ . college london ) , &quot; metaphor and cognition : evidence from english and modern greek &quot; 12 : 40 poster session and buffet lunch the following posters will be on display and presenters will be available for discussion ; a buffet lunch will be available in the same room . tamer amin ( clark u ) , &quot; the syntax and semantics of heat and temperature : a cognitive linguistics approach to the layperson &#x27;s understanding of scientific terms . john barnden ( u of birmingham ) , &quot; conceptual blending and an implemented system for metaphor - based reasoning &quot; benjamin bergen ( uc berkeley ) , &quot; the experiential foundations of metaphors for society : metaphorical analogy and the personification of society &quot; roberta corrigan ( u of wisconsin - milwaukee ) , &quot; semantic factors influencing the attribution of causality in interpersonal events &quot; lourdes de leon and john haviland ( ciesas &amp; reed college ) , &quot; the emergence of the participant : gesture , verbs , and interaction in early tzotzil &#x27;s peech &#x27; &quot; galina dobrova ( state pedagogical u . of russia ) , &quot; what is more important in the study of language acquisition : form or function ? ( children &#x27;s references to self in perception and production ) &quot; michele emanatian ( five colleges , amherst ) , &quot; metaphor clustering in discourse &quot; sharon hutchins ( emory u ) , &quot; phonesthemes as classifiers within the english root : revisiting manner and path in english and spanish &quot; scott liddell ( gallaudet u ) , &quot; reification in spatial blends &quot; mei - chun liu ( national chiao tung u ) and chu - ren huang ( academia sinica ) , &quot; from nonimals to temporal targets : a lexical invitation for conceptual transfer and discourse participation &quot; paul maglio ( ibm ) and teenie matlock ( uc santa cruz ) , &quot; emergent structure in information space &quot; todd oakley ( case western reserve u ) , &quot; syntactic error as conceptual disintegration &quot; misumi sadler ( u of arizona ) , &quot; grammaticization of the direct object marker &#x27; o &#x27; in japanese : a discourse-based study &quot; kiyoko takahashi ( chulalongkorn u ) , &quot; functions and forms of access path expressions in thai &quot; sarah taub ( gallaudet u ) , &quot; multiple metaphors in single asl signs &quot; longxing wei ( montclair state u ) , &quot; complex lexical structure and interlanguage development &quot; section on discourse and computer mediated communication ( cmc ) : victor balaban ( emory u ) , &quot; self and agency in face - to - face and on - line discourse &quot; sage graham ( georgetown u ) , &quot; &#x27; hello , welcome to my world ! &#x27; : the emergence of conversational style in personal homepages &quot; alexandra jaffe ( u of southern mississippi ) , &quot; virtual greeting cards &quot; diane schallert , ronald benton , melissa dodson , nicole amador , maria lissi , joylynn reed , and fan - ni liu ( u of texas , austin ) , &quot; individual cognition and social construction of discourse in cmc classroom discussions &quot; 2 : 15 theme session - - grammatical constructions : form and function joan bybee ( u of new mexico ) , &quot; constructions as processing units &quot; brian macwhinney ( carnegie mellon u ) , &quot; embodiment , perspective , and argument structure &quot; t . givon ( u of oregon ) , &quot; the grammar of perspective in fiction &quot; 4 : 15 break 4 : 30 regina pustet ( u of munich ) , &quot; copula and time - stability &quot; 4 : 55 patrick juola ( u of oxford ) , &quot; text distortion as a measure of communicative function and complexity &quot; 5 : 20 steven fincke ( uc santa barbara ) , &quot; three levels of core - oblique distinction in bikol &quot; 5 : 45 kristine jensen de lopez ( aarhus u ) , &quot; learning to organize space by use of body part terms , prepositions , and verbs of motion and disposition &quot; 6 : 10 asli ozyurek ( max planck inst . ) , &quot; differences in speech and gesture organization in turkish and english spatial discourse &quot; sunday , october 11 9 : 00 dieter hillert ( uc san diego ) , &quot; access to idiomatic and literal meanings during real - time sentence processing &quot; 9 : 25 michael barlow and suzanne kemmer ( rice u ) , &quot; idioms and blending &quot; 9 : 50 roderick jacobs ( u of hawai &#x27; i ) , &quot; discourse cueing and the idealized reader &quot; 10 : 15 miguel oliveira ( simon fraser u ) , &quot; the function of self - aggrandizement in storytelling &quot; 10 : 40 break 11 : 00 soteria svorou ( san jose state u ) , &quot; regions in language &quot; 11 : 25 barbara malt ( lehigh u ) , steven sloman and silvia gennari ( brown u ) , meiyi shi and yuan wang ( lehigh u ) , &quot; similarity and the linguistic categorization of common objects &quot; 11 : 50 sherman wilcox ( u of new mexico ) , &quot; cognitive iconicity and signed language universals &quot; 12 : 15 michael smith ( oakland u ) , &quot; some aspects of path - like iconicity in german separable verb constructions &quot; 12 : 40 lunch 2 : 00 theme session - - functional and cognitive approaches to the study of first language acquisition eve clark ( stanford u ) , &quot; the uptake of words and semantic relations &quot; nancy budwig ( clark u ) , &quot; perspective , deixis , and the development of voice &quot; michael tomasello ( max planck inst . &amp; emory u ) : &quot; acquiring and constraining verb - argument constructions &quot; 4 : 00 break 4 : 15 satoshi uehara ( tohoku u ) , &quot; subjective predicates in japanese : a cognitive approach &quot; 4 : 40 michel achard ( rice u ) , &quot; conceptual raising &quot; 5 : 05 sally rice ( u of alberta ) and hubert cuyckens ( u of hamburg &amp; antwerp ) , &quot; does ontogeny recapitulate phylogeny in the emergence of infinitival &#x27; to &#x27; ? a developmental and diachronic case study &quot; 5 : 30 break 5 : 45 christopher johnson ( uc berkeley ) , &quot; constructional grounding : on the relation between deictic and existential there - constructions in acquisition &quot; 6 : 10 benjamin bergen and madelaine plauche ( uc berkeley ) , &quot; voila voila : metaphorical extensions of deictic constructions in french &quot; 6 : 35 kevin moore ( uc berkeley ) , &quot; deixis and the &#x27; front / back &#x27; component of temporal metaphors &quot; 7 : 00 conference dinner party monday , october 12 9 : 00 shannon mcewen and sally rice ( u of alberta ) , &quot; &#x27; they all went to go play &#x27; : serial verb constructions in children &#x27;s narratives &quot; 9 : 25 ivo sanchez ( uc santa barbara ) , &quot; prosodic integration in spanish complement clauses &quot; 9 : 50 tom skold and maria wiktorsson ( lund u ) , &quot; compositional and non - compositional aspects of written and spoken texts &quot; 10 : 15 barbara luka ( u of chicago ) and lawrence barsalou ( emory u ) , &quot; syntactic accomodations in discourse and the implicit memory for syntactic structures &quot; 10 : 40 break 11 : 00 ferdinand de haan ( u of new mexico ) , &quot; on the grammaticalization of visual evidentiality &quot; 11 : 25 susan duncan ( u of chicago ) , &quot; evidence from gesture for a conceptual nexus of action and entity &quot; 11 : 50 lunch 1 : 10 theme session - - conceptual blending and metaphor eve sweetser ( uc berkeley ) , &quot; performativity and blended spaces &quot; gilles fauconnier ( uc san diego ) , &quot; the great chain of blending &quot; george lakoff ( uc berkeley ) , title tba 3 : 10 ( conference ends )
</pre>

## Record 002876

**Label:** `benign`

<pre>
fw : txu lone star pipeline standard pooling agreement - - - - - original message - - - - - from : jeffsmirin @ txu . com [ mailto : jeffsmirin @ txu . com ] sent : monday , november 26 , 2001 11 : 31 am to : buss , jd subject : txu lone star pipeline standard pooling agreement here is the standard pooling agreement . i noticed that the last two pages in the file are actually the cover sheet and index , which should actually be at the front of the document . ( see attached file : standard pooling agreement . doc )
</pre>

## Record 002877

**Label:** `benign`

<pre>
On Sat, Jul 27, 2002 at 03:06:15PM +0100, Stephen Shirley wrote:
&gt; Mornin&#x27; all,
&gt; 	I&#x27;m running one of the development snapshots of putty, and i just
&gt; noticed a very handy new feature: builtin proxy support. This means that
&gt; people like me can connect to external hosts using ssh via a http proxy.sort of. Squid, and most other good http proxies won&#x27;t let you connect
to any other destination port other than 443 (by default).  So the sshd 
has to be listening on port 443. PuTTy&#x27;s proxy support is a bit flaky 
right now, the raw connects are a bit flaky aswell, I can&#x27;t get them 
to work with certain revisions of IOS becuase they use different prompts
and success strings, gah! I havnt played with the SOCKS proxy support
much yet, but it&#x27;s there.If you&#x27;re trying to SSH through a http proxy, use netcat :)
PuTTy&#x27;s proxy stuff will take another few weeks to get stable, and
currently it won&#x27;t send keepalives, so if you go afk expect your 
session to get killed by the proxy.  Netcat send keepalives
which prevent this :)# 
# call as http_proxy_tunnel host port
#
function http_proxy_tunnel()
{
	mkfifo in.fifo	( echo CONNECT $1:$2 HTTP/1.1 
          echo HOST: $1:$2
          echo HTTP/1.1
	  echo 
          cat in.fifo ) | nc myproxy 3128 | (read ; read ; nc -lp  &gt; in.fifo )
}
course that assumes you have bash, I use cygwin, but the above should be
doable natively, then again if you have cygwin, use OpenSSH and it&#x27;s
excellently configurable proxycmd :)-- 
colmmacc@redbrick.dcu.ie        PubKey: colmmacc+pgp@redbrick.dcu.ie  
Web:                                 http://devnull.redbrick.dcu.ie/ -- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002878

**Label:** `benign`

<pre>
http://www.cnn.com/2002/WORLD/americas/08/26/peru.mother.reut/index.htmlLIMA, Peru (Reuters) -- Lina Medina&#x27;s parents thought their 5-year-old daughter had a huge abdominal tumor and when shamans in their remote village in Peru&#x27;s Andes could find no cure, her father carried her to hospital. Just over a month later, she gave birth to a boy. Aged 5 years, seven months and 21 days old when her child was born by Caesarean section in May 1939, Medina made medical history, and is still the youngest known mother in the world. At the time, Peru&#x27;s government promised aid that never materialized. Six decades on, Medina lives with her husband in a cramped house in a poor, crime-ridden district of the Peruvian capital known as &quot;Little Chicago.&quot; Now 68, she keeps herself to herself and has long refused requests to rake up the past. Gerardo, the son she delivered while still a child herself, died in 1979 at the age of 40. But a new book, written by an obstetrician who has been interested in her case, has drawn fresh attention to Medina&#x27;s story, and raised the prospect that the Peruvian government may belatedly offer her financial and other assistance. &quot;The government condemned them to live in poverty. In any other country, they would be the objects of special care,&quot; Jose Sandoval, author of &quot;Mother Aged 5,&quot; told Reuters. &quot;We still have time to repair the damage done to her. That&#x27;s my fundamental objective,&quot; he added. &#x27;Totally willing to help&#x27;
Sandoval has raised Medina&#x27;s case with the office of first lady Eliane Karp, and has asked the government to grant her a life pension -- something officials say is possible. &quot;We&#x27;re totally willing to help her,&quot; said spokeswoman Marta Castaneda. But Suni Ramos, of the social action department of Karp&#x27;s office, said that before the government could grant her a pension or any other of the aid it was already planning -- such as kitchen and other household equipment -- it needed to talk to her to discuss what she wanted and needed. It is currently trying to contact Medina and her family. Medina&#x27;s husband, Raul Jurado, told Reuters his wife remained skeptical. &quot;She got no help (in 1939) that I know about,&quot; he said. &quot;She thinks governments never deliver. Maybe today there will be a promise that will never come true.&quot; Jurado said his wife, whose story is a medical textbook classic and whose case is confirmed as true by such bodies as the American College of Obstetricians and Gynecologists, had turned down Reuters&#x27; request for an interview. Medical rarity
No one has ever established who was the father of Medina&#x27;s child, or confirmed she became pregnant after being raped. One of nine children born to country folk in Ticrapo, an Andean village at an altitude of 7,400 feet (2,250 meters) in Peru&#x27;s poorest province, Medina is believed to be the youngest case of precocious puberty in history, Sandoval said. He said she had her first period at 2 1/2, became pregnant aged 4 years and eight months and that when doctors performed the Caesarean to deliver her baby, they found she already had fully mature sexual organs. Her swelling stomach worried her parents. &quot;They thought it was a tumor,&quot; he said. But shamans ruled out village superstitions -- including one in which locals believed a snake grew inside a person until it killed them -- and recommended they take her to hospital in the nearest big town, Pisco. There came the staggering diagnosis that she was pregnant. Her father was jailed temporarily on suspicion of incest -- he was later released for lack of evidence -- and doctors, police and even a film crew set off for her village for preliminary investigations into her case. Sandoval, who based his book on media and other published information, and some interviews with relatives as Medina herself declined to comment, said news of the child mother-to-be drew instant offers of aid, including one worth $5,000 from a U.S. businessman, which was turned down. More offers followed after Medina was transferred to a Lima hospital, where her fully developed 6-pound (2.7 kg) baby was born on May 14, 1939 -- Mother&#x27;s Day. One offer was worth $1,000 a week, plus expenses, for Medina and her baby to be exhibited at the World&#x27;s Fair in New York. Another, from a U.S. business that the family accepted in early June 1939, was for the pair to travel to the United States for scientists to study the case. The offer included setting up a fund to ensure their lifelong financial comfort. But within days, the state trumped all previous offers, decreeing that Medina and her baby were in &quot;moral danger,&quot; and resolving to set up a special commission to protect them. But Sandoval said: &quot;It abandoned the case after six months ...It did absolutely nothing for them.&quot; Happy ending?
Though physically mature, Medina -- who Sandoval said was mentally normal and showed no other unusual medical symptoms -- still behaved like a child, preferring to play with her dolls instead of the new baby, who was fed by a wet nurse. Medina stayed in hospital for 11 months, finally returning to her family after it began legal proceedings that led to a Supreme Court ruling allowing her to live with them again. After taunting from schoolmates, Gerardo -- who was named after one of the doctors who attended Medina and became their mentor -- discovered when he was 10 that the woman he had grown up believing to be his sister was in fact his mother. He died in 1979 from a disease that attacks the body&#x27;s bone marrow, but Sandoval said it was not clear there was any link with his illness and the fact his mother had been so young. Medina married and in 1972 had a second son, 33 years after her first. Her second child now lives in Mexico. She appears to have turned her bizarre story into a taboo subject. &quot;We just want to get on with our lives, that&#x27;s it,&quot; said Jurado, adding he thought &quot;absolutely nothing&quot; of the fact his wife was the world&#x27;s youngest mother. He said the couple&#x27;s main concern now, if the government&#x27;s offer of aid was genuine, was to be granted the value of a property that belonged to Medina and which the then-government expropriated more than two decades ago. That house has now been destroyed and there is a road on the site. He said its value was &quot;more or less $25,000&quot; and settling the property question would conclude a long legal battle to get back a home of their own -- they live now in a modest house, accessed down a dingy alley half blocked by a wooden board, in a tough neighborhood known to locals as a thieves&#x27; paradise. &quot;If the government really wants to help...they should give us the value of our property,&quot; he said. As for Sandoval, he said he was optimistic that Medina&#x27;s story, which he has studied since his student days, would turn out well. &quot;I believe there will be a happy ending,&quot; he said. &quot;As a result of the war, corporations have now been enthroned and an era
of corruption in high places will follow and the money-power of the
country will endeavor to prolong its reign by working upon the
prejudices of the people until the wealth is aggregated in a few hands
and the Republic is destroyed.&quot;
Abraham Lincoln (Nov 21, 1864 in a letter to Col. William F Elkins)[Non-text portions of this message have been removed]
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
4 DVDs Free +s&amp;p Join Now
http://us.click.yahoo.com/pt6YBB/NXiEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002879

**Label:** `benign`

<pre>
02 / 00 natural gas nomination enron methanol nominates the following requirements for the methanol plant for february 2000 : 33 , 000 mmbtu per day egpfc nominates the following requirements for the mtbe plant at morgan &#x27; s point for february 2000 : 10 , 000 mmbtu per day
</pre>

## Record 002880

**Label:** `benign`

<pre>
enrononline executive summary for august 9 , 2001 following please find the daily enrononline executive summary .
</pre>

## Record 002881

**Label:** `benign`

<pre>
cox exploration darren , we had a situation in december that we need your help to resolve . deal # 125836 we have been purchasing gas from cox exploration on pg &amp; e hydorcarbons systems upstream of the processing facility . this purchase agreement terminated 11 / 30 / 99 . i didn &#x27; t path the gas on pgeh , however , i will take responsibility for not adjusting the interconnect ticket at thompsonville . i didn &#x27; t catch this and the deal on the hpl side appeared to be a valid flow issue for kim vaughn . the plant continued to confirm this gas . we have tried working through the pipeline , but they state that they will not know anything until the 15 th . can you contact the producer and ask them to reverify this with the pipeline ? i would like kim to be able to zero confirm and send back to pops so volume management will not allocate up to the producer level . also i just realized that we have a committed reserve purchase agreement at the same meter with tribo production . should there have been an expected volume in this deal ? is it possible that cox exploration sold their interest in this well to tribo . it may turn out that we should have flowed the gas after all .
</pre>

## Record 002882

**Label:** `benign`

<pre>
re : weather course joe , this is the most recent offer from lacima ( weather derivatives course ) . what do you think ? vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 02 / 19 / 2001 07 : 15 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; julie &quot; on 02 / 19 / 2001 03 : 19 : 45 pm please respond to &quot; julie &quot; to : &quot; vincejkaminski &quot; cc : subject : re : weather course vince , enron is fine ( although i think we have to pay for the hyatt anyway ) . ? good discount ( i have a feeling that my idea of a good discount and the weather desk &#x27; s idea is probably different ? ) : ? for the one day , $ 1100 per person . ? if you think that there will be ? around 10 people or more , then we can offer a day rate , regardless of the number of people . ? ? thanks vince ? julie ? ps - of course when i announced that we were cancelling , people started responding that they wished to attend . ? ugh ! ? - - - - - original message - - - - - from : vince . j . kaminski @ enron . com to : julie cc : vince . j . kaminski @ enron . com sent : friday , february 16 , 2001 4 : 05 pm subject : re : weather course julie , enron location makes more sense . no reason to pay for the hotel . also , i think that one day makes more sense . i contacted the weather desk about including other people at the training course . i think that they would be interested if they got a good discount . vince &quot; julie &quot; on 02 / 16 / 2001 09 : 39 : 37 am please respond to &quot; julie &quot; to : ? ? cc : subject : ? re : weather course vince , great . just to let you know , we decided not to wait on the indecisive ones , and postponed the open course . it &#x27; s yours , whatever you want : ? 1 day ( specific to what you feel will be of the most benefit ) , 2 days , hyatt or ? enron , or not at all . i hope this doesn &#x27; t cause problems for you . special deal , for sure . i owe my godfather . julie - - - - - original message - - - - - from : ? vince . j . kaminski @ enron . com to : julie cc : joseph . hrgovcic @ enron . com sent : thursday , february 15 , 2001 3 : 16 ? pm subject : re : weather course julie , that &#x27; s definitely an option . we can ? provide the room . maybe we can cut with you a special deal for enron and ? increase the # of people attending . i am forwarding your message to our ? weather desk . vince joe , what do you think about ? it ? vince &quot; julie &quot; on ? 02 / 15 / 2001 08 : 20 : 24 am please respond to &quot; julie &quot; to : ? &quot; vincejkaminski &quot; cc : subject : ? weather course vince , we just wanted to let you know ? that we only have 3 people signed up for the weather derivatives course ? ( all from enron ) so far . we have a couple more that have expressed strong ? interest , but we are awaiting their final decision . if no one else signs ? up , chris and les thought that you guys could probably get through the ? first day pretty easily , and thus thought it may be an option to teach just ? the 2 nd day material ( pricing ) only at enron ( doing it at the hyatt is an ? option as well but the room might be on the large side ) ? we would ? obviously reimburse you for the day not taught . we can teach both days as ? well , but thought you may want to save some time . i just wanted to give ? you some time to think about it . we will know where we stand on final ? numbers by next ? wednesday . julie
</pre>

## Record 002883

**Label:** `benign`

<pre>
dialog &#x27; 98 dialogue &#x27; 98 international workshop on computational linguistics and its applications kazan ( russia ) , may 31 - june 4 , 1998 * * * * final call for papers * * * * dear colleagues , as you probably know dialogue &#x27; 98 , an international annual workshop on computational linguistics and its applications , will take place this year in may 31 - june 4 , near kazan ( tatarstan , russian federation ) . dialogue &#x27; 98 should become fourth international workshop in row of dialogue &#x27; 95 kazan dialogue &#x27; 96 puschino dialogue &#x27; 97 yasnaya polyana reviving the tradition of the interdisciplinary dialogue seminars which were regular national events in the ussr during 70s - 80s . the workshop is an annual meeting place for a dialogue : a ) between researchers from different fields that are related to computational linguistics ( linguists , computer and cognitive scientists , psychologists , researchers in the artificial intelligence ) ; b ) between researchers from the former ussr and the international community . topics of interest include ( but are not limited to ) : * theoretical and cognitive linguistics * syntax , semantics , pragmatics and their interaction * multilingual natural language processing * systems for natural language processing * text , dialogue and speech act in the computational framework * knowledge representation and processing the number of participants is expected about 100 . every prospective attendee is required to submit a short research summary including relevant recent publications , regular and e-mail address , fax and phone numbers . participants who wish to present their work are additionally required to submit a poster ( 3 - 4 double-spaced pages , 6 - 8 kb ) or a full paper ( not exceeding 12 double - spaced pages , 24 kb ) preferably via e-mail ( in plain ascii or uuencoded winword files ) to the aldress of the program committee . because of some additional organizing difficulties which postponed this letter the commitee decided to add two weeks to the time-table of formation of the workshop &#x27;s program : * * * deadline for submission : march 16 , 1998 * * * notification of acceptance : march 25 , 1998 * * * final paper due : april 15 , 1998 please send submissions in russian or english , papers in russian should be accompanied with a short summary in english ( approximately 100-200 words ) . we plan to organize selected english - to - russian and russian - to - english translation of talks . addresses for all correspondence : e-mail : dialog98 @ bull . nmd . msu . ru snail mail : dialogue &#x27; 98 russian instititue for artificial intelligence p . o . box 111 , moscow , 103001 , russia . in the field of computational linguistics in russia the dialogue workshops became regular annual events which attract leading researchers from the former ussr as well as other countries . we hope that dialogue &#x27; 98 will continue this tradition . program committee : alexander s . narin &#x27; yani , program chair ( russian institute of artificial intelligence ) christian boitet ( grenoble university ) rais . g . bukharajev ( kazan state university ) ilya n . gorelov ( saratov state university ) alexander e . kibrik ( moscow state university ) igor a . mel &#x27; chuk ( montreal university ) sergei nirenburg ( new - mexico state university ) haldur oim ( tartu university ) dmitrij a . pospelov ( computer center of russian academy of sciences ) secretariate : natalya i . laufer , ( russian institute of artificial intelligence ) olga . v . fedorova , ( moscow state university ) in the organizing committee are included : rais . g . bukharajev ( kazan state university ) valeri solovyev ( kazan state university ) djavdet sulejmanov ( kazan state university ) il &#x27;d us hajbullin ( tatarstan academy of scienses ) nail &#x27; zaimov ( kazan state university ) if you have questions about the workshop , please send e-mail letters to the above-mentioned addresses . please , share this information letter with people you think it may concern .
</pre>

## Record 002884

**Label:** `benign`

<pre>
I&#x27;ve been lurking the SA lists since I installed SA on a production
machine a while back. While SA did a surprisingly accurate job on
detecting English language spam, it did not succeed very well on German
language spam, which I keep getting increasing amounts of lately. I&#x27;ve
got a lousy results with out of the box scores, very few spam is acually
cought.What is the strategy with respect to foreign language spam recognition
in SA? I&#x27;ve seen extremely few non-english rules. Is there foreign
language rule development going on? Has anybody done work on German
spam?In any case, I&#x27;ve started spam/nonspam corpi consisting of only German
(and Swiss-German, respectively) messages, to be able to help with
German rules. Anybody willing to contribute to the corpus feel free to
resend/bounce German spam in a sane way to spam@roe.ch . I cannot be
bothered to subscribe to SAsightings just for the odd German spam every
hundred++ messages.. how about a list for foreign language spam
sightings?Has anybody done this before or am I on the edge of duplicating effort
here?I&#x27;ve been thinking on this a bit. I think it would be best if there
would be general provisions for foreign language rules. In the spirit of
the ok_languages option; let users easily enable or disable rules in
certain languages. Like a foreign_rules option which could be used to
control which foreign rulesets are active. Usually people would want to
use checks in all languages which are in the ok_languages list.Is there any development or are there plans along those lines? Are there
other people willing to contribute to effective spam filtering rules in
German language?Any kind of feedback is welcome, even flames ;)Cheers,
Dan
-- 
   Daniel Roethlisberger 
   OpenPGP key id 0x804A06B1 (1024/4096 DSA/ElGamal)
   144D 6A5E 0C88 E5D7 0775 FCFD 3974 0E98 804A 06B1
   &gt;&gt; privacy through technology, not legislation &lt;&lt;
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 002885

**Label:** `benign`

<pre>
organization announcement we are pleased to announce the following organization changes within enron global markets ( egm ) . larry lawyer will be joining egm effective immediately to lead our new finance activities . in this role , he will work with all commodity products , assets , and teams worldwide to lever our existing businesses with this new focus . larry has worked as treasurer and was responsible for 3 rd party financing for ebs for the last year . he has worked for enron for 4 1 / 2 years in various positions in the finance area . he will be reporting to the office of the chairman . eric gonzales will be joining the lng team and will co - head this effort with rick bergsieker . we believe there is significant opportunity in the worldwide lng markets , and eric will direct all merchant activity and focus on the atlantic regions of the world . he will also manage the lng shipping book . eric is located in the london office and also has responsibility for leading the newly formed pool markets origination group reporting to joe gold . rick bergsieker has relocated to dubai , in the uae . he is responsible for all middle east activities and projects , managing the puerto rico assets and will co - head the worldwide lng efforts . rick has over 20 years of lng experience and together , he and eric will form an outstanding leadership team as we expand enron  , s lng activities around the world . they both will report to the office of the chairman . jennifer fraser will come over and develop our market fundamentals group for all products in egm , much like ena natural gas and power fundamentals and intranet pages existing today . previously , jennifer was working in the mid market origination group . heather purcell will be joining this group developing the commercial interface for our intranet page . heather was with azurix , where she worked on the platform interface for their ebusiness initiatives . gary hickerson will be chairing our traders  , roundtable . this new group will be comprised of traders across enron &#x27; s wholesale trading and risk management businesses . this forum will give traders the opportunity to discuss topics important to their individual markets , and to learn and explore other markets in a macro sense . also , we will be forming a cross - commodity trading group . traders who have shown extremely strong and consistent profitability will have the opportunity to join this group and to exploit cross - commodity opportunities with a bias toward structural shifts in markets . this group will not be involved in customer activity and will execute through our principal desks . gary will manage this new group , as well as continuing with his current f / x , rates , equity , and agriculture initiatives . please join us in congratulating everyone on their new positions . organization charts outlining the entire egm organization are available upon request from cathy phillips .
</pre>

## Record 002886

**Label:** `benign`

<pre>
I&#x27;m a new user (or about to be, hopefully) of SA but I&#x27;ve run into some
compilation errors that prevent me from installing.  Rather than picking
through the code, I thought I&#x27;d avoid reinventing the wheel and ask here.
When I run the &#x27;make&#x27;, I get the following:cc: Error: spamd/spamc.c, line 50: In this declaration, &quot;in_addr_t&quot; has no
linka
ge and has a prior declaration in this scope at line number 572 in file
/usr/inc
lude/sys/types.h. (nolinkage)
typedef unsigned long   in_addr_t;      /* base type for internet address
*/
------------------------^
cc: Warning: spamd/spamc.c, line 169: In this statement, the referenced
type of
the pointer value &quot;msg_buf&quot; is &quot;char&quot;, which is not compatible with
&quot;unsigned ch
ar&quot;. (ptrmismatch)
  if((bytes = full_read (in, msg_buf, max_size+1024, max_size+1024)) &gt;
max_size)
-----------------------------^
cc: Warning: spamd/spamc.c, line 174: In this statement, the referenced
type of
the pointer value &quot;header_buf&quot; is &quot;char&quot;, which is not compatible with
&quot;const un
signed char&quot;. (ptrmismatch)
    full_write (out,header_buf,bytes2);
--------------------^There are lots more where they came from.  Any ideas what can be done?
Thanks in advance.================================================================================
Don Newcomer                                            Dickinson College
Associate Director, System and Network Services		P.O. Box 1773
newcomer@dickinson.edu                                  Carlisle, PA  17013
                                                        Phone: (717) 245-1256
                                                          FAX: (717) 245-1690
-------------------------------------------------------
This sf.net email is sponsored by: Jabber - The world&#x27;s fastest growing 
real-time communications platform! Don&#x27;t just IM. Build it in! 
http://www.jabber.com/osdn/xim
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 002887

**Label:** `benign`

<pre>
stylistics joanna thornborrow and shan wareing , patterns in language an introduction to language and literary style patterns in language addresses the real needs of students who may not have an extensive background either in traditional literature or in linguistic theory . this student-friendly textbook uses the principles of linguistic analysis to investigate the aesthetic use of language in literary ( and non-literary ) texts . written in straightforward , accessible language with imaginative examples and a humorous tone , it shows how linguistic knowledge can enhance and enrich the analysis of texts . the authors borrow from traditional stylistics , but focus primarily on the recurring linguistic patterns which are used by writers of poetry , fiction and drama . the authors draw on a wide variety of textual sources to illustrate their observations , making reference to both canonical literature and modern literary texts , as well as to popular fiction , television and the language of advertising . exercises designed to develop the students &#x27; understanding of the material are provided at every stage , and sample answers are also included . interface routledge : 1998 : 280 pp cl : 0 415 14063 3 : # d5081 : $ 65 . 00 pb : 0 415 14064 1 : # d5085 : $ 20 . 99 jonathan culpepper , peter verdonk , and mick short , eds . , exploring the language of drama from text to context focusing on the characterization of speech as a form of action , exploring the language of drama introduces students to the stylistic analysis of drama . here , some of the world &#x27;s leading scholars demonstrate the importance of analyzing the text of drama rather than focusing on performance , presenting their approaches in an engaging and accessible style . the essays employ techniques from language analysis ( specifically discourse analysis , cognitive linguistics and pragmatic ) to explore the language of plays , looking at how different theories and approaches can be used to help us understand characterization in dialogue , the cognitive patterns that support the narrative and discourse of drama , and the basic mechanisms of conversation in dramatic dialogue . each chapter ends in a summary with follow-up exercises , and offers practical advice on how to analyze a play extract and write it up as an assignment . interface routledge : 1998 : 192 pp cl : 0 415 13794 2 : # d5353 : $ 65 . 00 pb : 0 415 13795 0 : # d5357 : $ 20 . 99
</pre>

## Record 002888

**Label:** `benign`

<pre>
re : noms / actual vols for may lst we agree &quot; eileen ponton &quot; on 05 / 02 / 2001 10 : 56 : 36 am to : david avila / lsp / enserch / us @ tu , charlie stone / texas utilities @ tu , melissa jones / texas utilities @ tu , hpl . scheduling @ enron . com , liz . bellamy @ enron . com cc : subject : noms / actual vols for may lst nom mcf mmbtu 47 , 500 43 , 506 44 , 681 nom : 9 : 00 to 14 : 00 30 , 000 ( 5 hours ) 14 : 00 - 4 : 00 60 , 000 ( 10 hours ) 4 : 00 to 9 : 00 40 , 000 ( 5 hours )
</pre>

## Record 002889

**Label:** `benign`

<pre>

Harlan Feinstein wrote:
&gt; Exmh keeps turning the folder indicator blue for one folder, and
&gt; I&#x27;ve read all the messages in the folder.  Driving me nuts.  I&#x27;ve
&gt; packed the folder, I&#x27;ve deleted the .mh_sequences file there,
&gt; keeps doing it.  Help!  
&gt; I would rescan then do &#x27;First Unseen&#x27;, and see what happens .._______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users
</pre>

## Record 002890

**Label:** `benign`

<pre>
On Mon, 2002-10-07 at 08:59, Matthias Saou wrote:
&gt; Once upon a time, Alvie wrote :
&gt; 
&gt; &gt; Thanks, I seem to be having problems with rebuilding transcode from SRC
&gt; &gt; it gets confused from previous errors and gives up.
&gt; 
&gt; Could you give the output of the error?
&gt;This is only the last part of it.I used &#x27;rpmbuild --rebuild --without avifile transcode.0.6.1-fr2.src.rpm&#x27;.
af6_decore.cpp:305: &#x27;WAVEFORMATEX&#x27; is used as a type, but is not defined
as a
   type.
af6_decore.cpp:306: parse error before `if&#x27;
af6_decore.cpp:308: syntax error before `-&gt;&#x27; token
af6_decore.cpp:313: `wvFmt&#x27; was not declared in this scope
af6_decore.cpp:313: `avm_wave_format_name&#x27; was not declared in this
scope
af6_decore.cpp:314: `wvFmt&#x27; was not declared in this scope
af6_decore.cpp:315: `wvFmt&#x27; was not declared in this scope
af6_decore.cpp:316: `wvFmt&#x27; was not declared in this scope
af6_decore.cpp:316: ISO C++ forbids declaration of `fprintf&#x27; with no
type
af6_decore.cpp:316: redefinition of `int fprintf&#x27;
af6_decore.cpp:161: `int fprintf&#x27; previously defined here
af6_decore.cpp:316: initializer list being treated as compound
expression
af6_decore.cpp:317: &#x27;WAVEFORMATEX&#x27; is used as a type, but is not defined
as a
   type.
af6_decore.cpp:318: syntax error before `-&gt;&#x27; token
af6_decore.cpp:321: `fmt&#x27; was not declared in this scope
af6_decore.cpp:321: `avm_wave_format_name&#x27; was not declared in this
scope
af6_decore.cpp:322: `fmt&#x27; was not declared in this scope
af6_decore.cpp:323: `fmt&#x27; was not declared in this scope
af6_decore.cpp:324: `fmt&#x27; was not declared in this scope
af6_decore.cpp:324: ISO C++ forbids declaration of `fprintf&#x27; with no
type
af6_decore.cpp:324: redefinition of `int fprintf&#x27;
af6_decore.cpp:316: `int fprintf&#x27; previously defined here
af6_decore.cpp:324: initializer list being treated as compound
expression
af6_decore.cpp:327: parse error before `if&#x27;
af6_decore.cpp:330: syntax error before `-&gt;&#x27; token
af6_decore.cpp:349: ISO C++ forbids declaration of `samples&#x27; with no
type
af6_decore.cpp:349: conflicting types for `int samples&#x27;
af6_decore.cpp:290: previous declaration as `unsigned int samples&#x27;
af6_decore.cpp:349: `fmt&#x27; was not declared in this scope
af6_decore.cpp:350: ISO C++ forbids declaration of `buffer_size&#x27; with no
type
af6_decore.cpp:350: conflicting types for `int buffer_size&#x27;
af6_decore.cpp:288: previous declaration as `unsigned int buffer_size&#x27;
af6_decore.cpp:350: `fmt&#x27; was not declared in this scope
af6_decore.cpp:351: ISO C++ forbids declaration of `buffer&#x27; with no type
af6_decore.cpp:351: conflicting types for `int buffer&#x27;
af6_decore.cpp:291: previous declaration as `char*buffer&#x27;
af6_decore.cpp:351: invalid conversion from `char*&#x27; to `int&#x27;
af6_decore.cpp:352: parse error before `if&#x27;
af6_decore.cpp:354: syntax error before `-&gt;&#x27; token
af6_decore.cpp:359: ISO C++ forbids declaration of `fflush&#x27; with no type
af6_decore.cpp:359: redefinition of `int fflush&#x27;af6_decore.cpp:288: previous declaration as `unsigned int buffer_size&#x27;
af6_decore.cpp:350: `fmt&#x27; was not declared in this scope
af6_decore.cpp:351: ISO C++ forbids declaration of `buffer&#x27; with no type
af6_decore.cpp:351: conflicting types for `int buffer&#x27;
af6_decore.cpp:291: previous declaration as `char*buffer&#x27;
af6_decore.cpp:351: invalid conversion from `char*&#x27; to `int&#x27;
af6_decore.cpp:352: parse error before `if&#x27;
af6_decore.cpp:354: syntax error before `-&gt;&#x27; token
af6_decore.cpp:359: ISO C++ forbids declaration of `fflush&#x27; with no type
af6_decore.cpp:359: redefinition of `int fflush&#x27;
af6_decore.cpp:208: `int fflush&#x27; previously defined here
af6_decore.cpp:359: invalid conversion from `_IO_FILE*&#x27; to `int&#x27;
af6_decore.cpp:360: `ipipe&#x27; was not declared in this scope
af6_decore.cpp:360: `sync_str&#x27; was not declared in this scope
af6_decore.cpp:360: `sync_str&#x27; was not declared in this scope
af6_decore.cpp:360: ISO C++ forbids declaration of `p_write&#x27; with no
type
af6_decore.cpp:360: redefinition of `int p_write&#x27;
af6_decore.cpp:209: `int p_write&#x27; previously defined here
af6_decore.cpp:360: initializer list being treated as compound
expression
af6_decore.cpp:363: parse error before `while&#x27;
af6_decore.cpp:368: syntax error before `-&gt;&#x27; token
make[3]: *** [af6_decore.lo] Error 1
make[3]: Leaving directory
`/usr/src/redhat/BUILD/transcode-0.6.1/import&#x27;
make[2]: *** [all-recursive] Error 1
make[2]: Leaving directory
`/usr/src/redhat/BUILD/transcode-0.6.1/import&#x27;
&gt; &gt; Using trancode rpm I can&#x27;t get transcode command line args to
&gt; &gt; work.Although it&#x27;s been a while since I used it - maybe I forgot how!
&gt;
This was a dumb mistake on my part. I did&#x27;nt have libdvdcss-devel, the
transcode command line args work fine now, but not so for DVD::RIP.
Thanks for help
Alvie
 
&gt; I&#x27;m encoding a DVD to DivX4 right now on my home computer, and it works
&gt; fine. My current Red Hat 8.0 build of transcode has avifile support
&gt; disabled, that may be your problem? It&#x27;s because gcc 3.2 isn&#x27;t currently
&gt; able to recompile avifile... :-/
&gt; 
&gt; Matthias
&gt; 
&gt; -- 
&gt; Clean custom Red Hat Linux rpm packages : http://freshrpms.net/
&gt; Red Hat Linux release 7.3 (Valhalla) running Linux kernel 2.4.18-10acpi
&gt; Load : 0.09 0.12 0.21
&gt; 
&gt; _______________________________________________
&gt; RPM-List mailing list 
&gt; http://lists.freshrpms.net/mailman/listinfo/rpm-list_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002891

**Label:** `benign`

<pre>
fw : application for open positions within enron dear mr . kaminski : just wanted to let you know that i have submitted my slightly revised resume ( attached ) for the following open positions within enron . i am seeking an opportunity to have a job interview with the right individuals . i know you have been trying to help me . this is a good time for a meeting with someone within these departments . 1 . . credit analyst , spec sr , job # 000010220 , dept : trade credit : tony vasut 2 . . manager , job # 0000102374 , dept : ena consolidated reporting : tony vasut 3 . . director , b 8828 , dept : investments / ventures - broadband services 4 . . compliance manager , job # 0000102317 , dept : due diligence / asset management i shall , therefore , appreciate your guidance on how i can come in for a job interview . as you know , i am really interested in working for enron , hence request for your help . thank you . sincerely , maruti d . more , cfa 1 . . - - - - - original message - - - - - from : more to : vince j kaminski date : monday , february 07 , 2000 10 : 18 pm subject : re : personal dear mr . kaminski : thank you very much for meeting with me again today over lunch . i appreciated the opportunity to catch up with you . please find attached my current resume ( both a short and a long version ) . i have worked as a trader , portfolio risk manager , and a stock analyst . i have traded derivatives , bonds , and stocks , and managed insurance and pension investment portfolios to maximize risk - adjusted returns . let me highlight some of my work experiences . trading and risk management a . . structured , negotiated , and traded otc interests rate swaps , cross - currency swaps , swaptions , and exchange - traded equity index futures and options . made powerpoint presentations to garp and the uoh on credit derivatives . b . . developed investment hedging program utilizing exchanged - traded bond futures and interest rate swaps . c . . traded and managed pension and insurance fixed income portfolios to maximize total return and funding ratios . bonds traded : treasuries , agencies , mbs / cmos , abs , corporate , yankees , and foreign . d . . traded and managed stock mutual portfolios for total return . e . . created a computer program to quantify the attribution of total return for fixed income portfolios relative to market returns . f . . programmed investment compliance rules to monitor the management of domestic and global stock , bond and money market mutual funds . g . . supervised market risks , credit risks , legal risks , and operations risks of derivatives , bonds , money market securities , and equities . policy , reporting and projects a . . developed investment policy guidelines to manage fixed income portfolios . b . . rewrote derivatives policy manual . c . . prepared a 20 - page powerpoint slide presentation on india for the senior management . d . . prepared and presented investment reports to cios , investment committees , and boards of trustees i shall , therefore , appreciate your help in connecting me with the right individual within enron for a job interview to work as a financial trader / risk manager . i can provide excellent references upon request . thank you for the lunch . sincerely , maruti d . more , cfa 713 - 722 - 7199 more @ insync . net - - - - - original message - - - - - from : vince j kaminski to : more date : tuesday , january 25 , 2000 12 : 39 pm subject : re : fw : luncheon meeting : asap hello , i shall be traveling this week . i shall be glad to meet you for lunch next week . please give me a call monday at 713 853 3848 . vince &quot; more &quot; on 01 / 25 / 2000 10 : 27 : 09 am to : vince j kaminski / hou / ect @ ect cc : subject : fw : luncheon meeting : asap dear mr . kaminski : just to bring you up to date . i am no longer with american general . i shall , therefore , appreciate an opportunity to meet with you for lunch at the earliest possible time . i can be reached at 713 - 722 - 7199 . thank you . maruti more 713 - 722 - 7199 - - - - - original message - - - - - from : more to : vince j kaminski date : friday , december 17 , 1999 8 : 55 pm subject : re : luncheon meeting thank you for your response . i was very happy to hear from you . i am also taking next week off and will be back to work on december 27 th . please do call me when you get back . would very much appreciate the opportunity to have a quick lunch with you , if possible . hope everything is going well . have wonderful christmas holidays . regards maruti more 713 - 831 - 6209 ( o ) - - - - - original message - - - - - from : vince j kaminski to : more cc : vince j kaminski date : friday , december 17 , 1999 3 : 35 pm subject : re : luncheon meeting hello , i shall be taking a few days off around xmas . i shall call you at the end of december when i get back to the office . with best holiday wishes , vince &quot; more &quot; on 12 / 01 / 99 09 : 28 : 09 pm to : vince j kaminski / hou / ect @ ect cc : subject : re : luncheon meeting dear mr . kaminski : how are you doing ? i want to find out if we can meet again for a quick lunch . you might know that in maharashtra , india there is now a new chief minister ( ceo of the state government ) . i am proud to say that he and i are from the same town , latur . i would really enjoy talking with you again , at your convenience . i will call you tomorrow to follow up . thank you . sincerely , maruti more - - - - - original message - - - - - from : vince j kaminski to : more cc : vince j kaminski ; vkaminski @ aol . com date : thursday , july 01 , 1999 6 : 16 am subject : re : luncheon meeting dear mr . more , let &#x27; s meet at 11 : 45 in the lobby of the enron building . we can walk to one of the restaurants in the downtown area . vince kaminski ( embedded enron capital &amp; trade resources corp . image moved to file : from : &quot; more &quot; picl 7002 . pcx ) 06 / 30 / 99 10 : 38 pm to : vince j kaminski / hou / ect cc : subject : luncheon meeting dear mr . kaminski : i am looking forward to our luncheon meeting on this friday , july 2 , 1999 at 11 : 30 am . please let me know where we should meet . thank you for taking time out from your busy schedule . sincerely , maruti more tel . : 713 - 831 - 6209 - attl . htm - bio @ home . doc - more @ home . doc - consultant . doc
</pre>

## Record 002892

**Label:** `benign`

<pre>
Chris Haun wrote:
&gt; 
&gt; We would need someone to sit in the studio 24/7 writing down all this info -
&gt; which sometimes isn&#x27;t available, like from earlier album that don&#x27;t have
&gt; serial numbers and barcodes. Then still if only the magic 18 people
&gt; webstream our signal, the price would become quite exponential since we play
&gt; on average 16 songs an hour, we&#x27;d be paying $22.11 everyday to stream to
&gt; those 18 people. So really, it does have to do with the internet tax, but it
&gt; is a few reasons together why we can&#x27;t do it after their kill-date. :(Who is John Galt?(RoUS in the throes of reading Atlas Shrugged again)
-- 
#ken	P-)}Ken Coar, Sanagendamgagwedweinini  http://Golux.Com/coar/
Author, developer, opinionist      http://Apache-Server.Com/&quot;Millennium hand and shrimp!&quot;

</pre>

## Record 002893

**Label:** `benign`

<pre>
Tony L. Svanstrom wrote:&gt;On Sun, 15 Sep 2002 the voices made Marc Perkel write:
&gt;
&gt;&gt;Right now we have one spam status flag indicating that a message is or
&gt;&gt;is not spam. The idea being that the end user perhaps make a rule that
&gt;&gt;would move the spam flagged messages into a spam folder and thus gain
&gt;&gt;some time by presorting messages into to piles.
&gt;&gt;
&gt;
&gt; If you (people) don&#x27;t know enough to filter on the actual score they&#x27;ve got
&gt;the &quot;stars&quot;, which will give them more than enough levers, if they want it.
&gt;
&gt;
&gt;	/Tony
&gt;
Sure - we developers know that - but what I&#x27;m talking about is making it 
easier for END USERS to figure out.-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-devel mailing list
Spamassassin-devel@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-devel

</pre>

## Record 002894

**Label:** `benign`

<pre>
fw : california capacity report for week of 9 / 10 - 9 / 14 transwestern &#x27; s average deliveries to california were 972 mmbtu / d ( 89 % ) , with san juan lateral throughput at 800 mmbtu / d . total east deliveries averaged 423 mmbtu / d . el paso &#x27; s average deliveries to california were 2036 mmbtu / d ( 70 % ) : - pg &amp; etop , capacity of 1140 mmbtu / d , deliveries of 590 mmbtu / d ( 52 % ) - socalehr , capacity 1250 mmbtu / d , deliveries of 922 mmbtu / d ( 74 % ) - socaltop , capacity 539 mmbtu / d , deliveries of 524 mmbtu / d ( 97 % ) friday &#x27; s posted gas daily prices : socal gas , large pkgs 2 . 27 ( - . 115 ) pg &amp; e , large pkgs 2 . 13 ( - . 185 ) tw san juan 1 . 965 tw permian 2 . 145 ( - . 035 ) enron online bases : oct nov - mar apr - oct perm - ca . 085 ( - . 115 ) . 21 ( - . 12 ) . 24 ( - . 07 ) sj - ca . 29 ( - . 03 ) . 32 ( - . 09 ) . 49 ( - . 06 ) sj - waha . 225 ( + . 095 ) . 135 ( + . 035 ) . 285 ( + . 005 ) perm - waha . 02 ( + . 01 ) . 025 ( + . 01 ) . 035 ( - . 005 )
</pre>

## Record 002895

**Label:** `benign`

<pre>
fw : can you check a deal for me bill - mpc looked again and does not show this deal . most of the houston coordinators have responded and they have no discrepancies ( purchase or sale ) on march 14 th . there are 2 who i &#x27; m awaiting responses from still . i &#x27; ll let you know if i find either side . right now , i &#x27; m inclined to think the inc sheet is wrong and there was no deal at that hour . can you or kate check with the trader who &#x27; booked &#x27; the deal at he 3 and let him search his notes and explain why the mw volumes and prices changed that he in the inc sheet when there is no further documentation . . . . . thanks , virginia - - - - - original message - - - - - from : lienemann , sandra [ mailto : slienema @ mtpower . com ] sent : monday , july 09 , 2001 10 : 36 am to : thompson , virginia subject : re : can you check a deal for me virginia , i took a look at the log sheet from the dispatchers and there was zippo in the line ! if your records show 40 mws at he 3 at $ 134 we will just go with your numbers . let me know ! hope you had a great 4 th . i got a couple days off so it was wonderful ! ! ! sandy &gt; - - - - - original message - - - - - &gt; from : thompson , virginia [ smtp : virginia . thompson @ enron . com ] &gt; sent : thursday , july 05 , 2001 3 : 58 pm &gt; to : sandy lienemann montana ( e - mail ) &gt; subject : can you check a deal for me &gt; &gt; dear sandy , &gt; &gt; i hate to ask this , but could you please check mpc &#x27; s numbers for &gt; march 14 , 2001 for an epmi purchase from mpc of 40 mw &#x27; s at he 3 for &gt; $ 134 . we still seem to have this in dispute . &gt; &gt; &gt; thank you , &gt; &gt; virginia
</pre>

## Record 002896

**Label:** `benign`

<pre>
chicago linguistic society announcing the 35th regional meeting of the chicago linguistic society april 22-24 , 1999 university of chicago main session : we invite original , unpublished work on any topic of general linguistic interest . invited speakers : beth levin ( northwestern university ) paul smolensky ( johns hopkins university ) panels : we invite original , unpublished work which addresses one of the panel topics below . language , identity , and the other thursday , april 22 language serves as a means to unite as well as to exclude groups or individuals . this panel will explore the linguistic mechanisms by which this is accomplished in different speech communities . invited speakers : robert greenberg ( university of north carolina , chapel hill ) michael silverstein ( university of chicago ) in conjunction with the university of chicago workshop on theory and data in speech research : chiphon 99 new syntheses : multi - disciplinary approaches to basic units of speech friday , april 23 this panel seeks to synthesize findings from linguistics and other fields which investigate linguistic behavior , to determine whether these can be used as evidence for a unified theory of basic units of speech processing . invited speakers : john ohala ( university of california , berkeley ) joseph perkell ( massachusetts institute of technology ) theory and linguistic diversity saturday , april 24 approximately five thousand languages are spoken throughout the world today . this panel seeks to explore the ways in which linguistic theories attempt to account for such variety . invited speakers : mark baker ( rutgers university ) joan bresnan ( stanford university ) r . m . w . dixon ( australian national university ) please submit ten copies of a one-page 500 word anonymous abstract for a twenty minute paper ( optionally one additional page for data and / or references may be appended ) , along with a 3 by 5 card with : 1 your name 2 affiliation 3 address , phone number , and e-mail address 4 title of the paper 5 an indication for which panel or which particular subdivision of the main session ( eg : phonetics , phonology , syntax , semantics , historical linguistics , etc . ) the paper is intended . the abstract should be as specific as possible and it should clearly indicate the data covered , outline the arguments presented , and include any broader implications of the work . an individual may present at most one single and one co-authored paper . authors must submit a camera-ready copy of the paper at the time of the conference in order to be considered for publication . only a selection of papers presented at cls 35 will be published . this years deadline for receipt of abstracts is february 1 , 1999 . send abstracts to : chicago linguistic society 1010 east 59th st . chicago , il 60637 773 . 702 . 8529 information on e-mail submission and additional guidelines for abstracts may be obtained by visiting our website at http : / / humanities . uchicago . edu / humanities / cls / cls . html , by writing to the above address , or by e-mailing us at cls @ diderot . uchicago . edu .
</pre>

## Record 002897

**Label:** `benign`

<pre>

&gt;&gt;&gt;&gt;&gt; &quot;NS&quot; == Neil Schemenauer  writes:    NS&gt; Writing an IMAP server is a non-trivial task.That&#x27;s what I&#x27;ve been told by everyone I&#x27;ve talked to who&#x27;s actually
tried to write one.
    
    NS&gt; Alternatively, perhaps there could be a separate protocol and
    NS&gt; client that could be used to review additions to the training
    NS&gt; set.  Each day a few random spam and ham messages could be
    NS&gt; grabbed as candidates.  Someone would periodically startup the
    NS&gt; client, review the candidates, reclassify or remove any
    NS&gt; messages they don&#x27;t like and add them to the training set.I think people will be much more motivated to report spam than ham.  I
like the general approach that copies of random messages will be
sequestered for some period of time before they&#x27;re assumed to be ham.
Matched with a simple spam reporting scheme, this could keep the
training up to date with little effort.  I&#x27;ve sketched out an approach
a listserver like Mailman could do along these lines and if I get some
free time I&#x27;ll hack something together.I like the idea of a POP proxy which is classifying messages as
they&#x27;re pulled from the server.  The easiest way for such a beast to
be notified of spam might be to simply save the spam in a special
folder or file that the POP proxy would periodically consult.-Barry

</pre>

## Record 002898

**Label:** `benign`

<pre>
O&#x27;Reilly Open Source Convention
-From the Frontiers of Research to the Heart of the EnterpriseSheraton San Diego Hotel and Marina
July 22-26, 2002 -- San Diego, CA
http://conferences.oreillynet.com/os2002/?CMP=EM4907O&#x27;REILLY CONFERENCE NEWSLETTER UPDATE - 071902e -Conference News - One-Day Pass Offer
 -Conference Highlights - Bruce Sterling on Open Source
 -See &amp; Do - Camping Out at Kid&#x27;s World
 -OSCON Tracks - It&#x27;s not just about Perl, you know.
 -Conference Details - Keynotes&quot;In the tradition of O&#x27;Reilly books, their conferences
get past the fluff and hype of other conferences and
home in directly on the meat of the technology.&quot;
-- Jason Hall from Plug, the Provo area Linux Users Group***CONFERENCE NEWS----------------------------------------------
ONE DAY PASS ADDED TO CONFERENCE
If you can&#x27;t swing the whole conference, but can&#x27;t bear to miss
that one session or keynote presentation, pick up a day pass,
available for July 24, 25, or 26.The cost of the one day pass is $400. Please visit:
http://conferences.oreillynet.com/os2002/?CMP=EM4907
----------------------------------------------Check out this year&#x27;s program for a look into the future of
open source software. Register Today!
http://conferences.oreillynet.com/os2002/?CMP=EM4907***OSCON2002 HIGHLIGHTSBruce Sterling, author, journalist, editor, critic, presents
A Contrarian Position on Open Source, Friday, July 26,
11:30am - 12:15pm in Sea Breeze II.Sterling is the author of several science fiction novels including
Involution Ocean, The Artificial Kid, Schismatrix, Islands in the
Net, and Heavy Weather. He edited the collection Mirrorshades, the
definitive document of the cyberpunk movement, and co-authored
the novel The Difference Engine with William Gibson. He writes a
critical column for Science Fiction Eye and a popular-science
column for The Magazine of Fantasy and Science Fiction.His non-fiction book The Hacker Crackdown describes the law
enforcement and computer-crime activities that led to the start
of the Electronic Frontier Foundation in 1990./==========================================================\
Convention Newsletter Sponsored by InfoWorldInfoWorld&#x27;s Next-Generation Conference
Web Services II:  The Applications, September 18 - 20, 2002You have heard the promise.  Now hear the reality. InfoWorld&#x27;s
editors invite you to take a hard look at how Web Services&#x27;
technology is affecting enterprise applications. Hear both
challenges and success stories from those IT executives who
are embracing Web services and from the leading companies
whose products are fueling this new era of enterprise computing.
Register before July 31 and save $300. Use priority code P062405.www.infoworld.com/nextgen
\==========================================================/***SEE &amp; DO
http://conferences.oreillynet.com/pub/w/15/see_do.html- Camping out at &quot;Kid&#x27;s World&quot;
Back again by popular demand, Kid&#x27;s World is available Monday
through Thursday providing exceptional daycare for your young
ones. Register now to ensure that your children don&#x27;t miss out
on the fun.
http://conferences.oreillynet.com/pub/w/15/kids_world.html***OSCON FEATURED TRACKS
http://conferences.oreillynet.com/pub/w/15/tutorials.html
http://conferences.oreillynet.com/pub/w/15/sessions.html
  -Python, with an emphasis on Zope
  -Apache Web Server, specifically 2.0, modules, configuration,
   and performance tuning
  -Java, featuring Jakarta, Jserv, Ant, and Jboss
  -Operating Systems: Linux, FreeBSD, OpenBSD, OS X
  -Databases, focusing on MySQL, PostgreSQL, Redhat B, SAPDB,
   Berkeley DB
  -Emerging topics, gaming, shared source, government projects***CONFERENCE DETAILS-Keynote SpeakersFreeing Culture
Lawrence Lessig, Stanford Law School
http://conferences.oreillynet.com/cs/os2002/view/e_sess/3027The Free Software Movement: Where All This Started
Richard M. Stallman (representing the Free Software Movement),
Free Software Foundation
http://conferences.oreillynet.com/cs/os2002/view/e_sess/3047Hacking the Genome: Open Source in Bioinformatics
Ewan Birney, European Bioinformatics Institute
http://conferences.oreillynet.com/cs/os2002/view/e_sess/2389Evolution in ActionJim Kent,
UC Santa Cruz Genome Bioinformatics Group
http://conferences.oreillynet.com/cs/os2002/view/e_sess/2586The Changing Relationship Between Business and Developers
Paul Pangaro, Ph.D., Sun Microsystems, Inc., Elaine B.
Coleman, Ph.D., Sun
https://conferences.oreillynet.com/cs/os2002/view/e_sess/3178Challenges of Open Source in Visual Effects
Milton Ngan, Weta Digital Ltd
https://conferences.oreillynet.com/cs/os2002/view/e_sess/3118For more details on our keynote, tutorial, and session
speakers, please visit:
http://conferences.oreillynet.com/os2002/?CMP=EM4907***PLATINUM SPONSORS
Apple Computer
Active State
Sun MicrosystemsFor information regarding exhibition or sponsorship
opportunities the convention, contact Andrew Calvo at
707-827-7176, or andrewc@oreilly.com.---------------------------------------------------------------------
If you want to cancel an O&#x27;Reilly newsletter subscription, go
to http://elists.oreilly.com/ and de-select any newsletters you
no longer wish to receive. For assistance, email help@oreillynet.com
---------------------------------------------------------------------

</pre>

## Record 002899

**Label:** `benign`

<pre>
Once upon a time, Hesty wrote :&gt; I know they&#x27;re all included in the freshrpms alsa-null
&gt; directory.Now that Psyche is released, that directory was erased.&gt; I was worried that with the new mplayer-pre8, these
&gt; packages might break something. Is there any mplayer
&gt; package which includes all the options for -vo and
&gt; -ao? Is that because alsa is not included in RH, hence
&gt; the lack of alsa option for mplayer from freshrpms?
&gt; Or is there some swtiches to enable these options
&gt; during 
&gt; rpm build?For all my recent packages that support --with and --without options, I&#x27;ve
put them in the %description section. See for instance :
http://psyche.freshrpms.net/rpm.html?id=80Where you can see :
Available rpmbuild rebuild options :
--with : alsa
--without : aalib lirc libdv artsThe ogle package has also a --with alsa option, and I&#x27;ve had a bug report
about xine that I apparently unintentionally compiled with ALSA directly
:-/I&#x27;d like to aks this on the rpm-zzzlist : Would a new dependency of 250k, the
alsa-lib package, for many packages (mplayer, ogle, xine) be a problem for
the freshrpms.net packages users? As I really feel like blending ALSA in
now, especially since I&#x27;ve just spent some time recompiling alsa-kernel
package for all the Psyche kernels!!!Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002900

**Label:** `benign`

<pre>
Bill Stoddard wrote:&gt;&gt;GAB&gt; The problem is that politics have gotten so muddied
&gt;&gt;GAB&gt; nowadays, that shouting down and unpeaceably disrupting
&gt;&gt;GAB&gt; political rallies that you don&#x27;t agree with has become
&gt;&gt;GAB&gt; common practice.  The courts have constantly ruled
&gt;&gt;GAB&gt; that there are some restrictions on the first amendment.
&gt;&gt;GAB&gt; They teach you that your very first year of law school.
&gt;&gt;
&gt;&gt;I&#x27;ll agree with Owen on this one.  Muddied my ass.  How hard is it to
&gt;&gt;chose between a Republocrat or a Demipublican?   Not very.  Shouting
&gt;&gt;down has grown to become the answer because the government, over a
&gt;&gt;span of years, and with the help of the Courts -has- limited the
&gt;&gt;rights we have as citizens under the First Amendment.
&gt;&gt;    
&gt;&gt;
&gt;
&gt;Wishful thinking. People are just bigger dickheads now. Culture is changing
&gt;and it is becoming acceptable to get in peoples face and shout them down
&gt;when you disagree with them.  The people that do this are NOT
&gt;disenfranchised. They
&gt;get their rocks off on being disagreeable assholes. The act of protesting is
&gt;more important than the actual issue being protested for most of these
&gt;people.
&gt;  
&gt;
In my experience, this is classic &quot;American&quot; behaviour, and I don&#x27;t 
think its on the increase outside of the US of A.
I am willing to accept the premise that Americans are bigger dickheads 
then they used to be.Owen
</pre>

## Record 002901

**Label:** `benign`

<pre>
I am wondering whether there&#x27;s a way that I can use sitescooper and/or plucker
or some other free utility to convert word documents into something a bit
more palmos friendly?I don&#x27;t have a Windows machine, so it becomes problematic to convert them;
I know that if this were not the case, in Word I could save them as some
other more friendly format.
-- 
Tcl&#x27;2002 Sept 16, 2002, Vancouver, BC http://www.tcl.tk/community/tcl2002/
Larry W. Virden  
Even if explicitly stated to the contrary, nothing in this posting should 
be construed as representing my employer&#x27;s opinions.
-&gt;&lt;-
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Sitescooper-talk mailing list
Sitescooper-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/sitescooper-talk
</pre>

## Record 002902

**Label:** `benign`

<pre>

&gt; Chuck Murcko wrote:
&gt;
&gt; &gt; Heh, ten years ago saying the exact same words was most definitely not
&gt; &gt; &quot;parroting the party line&quot;.
&gt; &gt;
&gt; &gt; It was even less so thirty years ago. My story remains the same, take
&gt; &gt; it or leave it. I&#x27;ve said the same words to white supremacists as to
&gt; &gt; suburban leftist punks as to homeys as to French Irish, etc. etc.:
&gt; &gt;
&gt; &gt; I don&#x27;t have to agree with anything you say. I *am* obligated to
&gt; &gt; defend to the death your right to say it. I don&#x27;t give a rat&#x27;s ass
&gt; &gt; where you say it, even in France. I don&#x27;t care where the political
&gt; &gt; pendulum has swung currently.
&gt; &gt;
&gt; &gt; Chuck
&gt;
&gt;
&gt; I had to laugh at Rumsfield yesterday - when he was heckled by
&gt; protestors, he said something like &quot;They couldn&#x27;t do that in Iraq.&quot;
&gt; Meanwhile, from what I could tell, the protestors were being arrested.
&gt;
&gt; OwenTrying to shoutdown a speaker or being loud and rowdy while someone else is
trying to speak (in the vernacular, &#x27;getting in their face&#x27;) is rude and
disrespectful.  And persistently getting in someones face is assault, a
criminal offense. If these people have something to say, they can say it
with signs or get their own venue.  And here is something else to chew on...
these protesters are NOT interested in changing anyones mind about what
Rumsfield is saying. How likely are you to change someone&#x27;s mind by being
rude and disrespectful to them? Is this how to win friends and influence
people? Either these folks are social misfits who have no understanding of
human interactions (else they would try more constructive means to get their
message across) or they are just out to get their rocks off regardless of
how it affects other people, and that is immoral at best and downright evil
at worst.Bill

</pre>

## Record 002903

**Label:** `benign`

<pre>
cmc / 95 cmc / 95 international conference on cooperative multimodal communication , theory and applications * * * * * * * * * sponsored by the universities of brabant joint research organization ( sobu ) eindhoven , the netherlands , 24-26 may 1995 * * * * * * * * * first announcement and call for papers * * * * * * * * * the eindhoven university of technology , in collaboration with the institute for perception research in eindhoven and the institute for language technology and artificial intelligence in tilburg , will host an international conference on the theory and applications of cooperative multimodal communication to take place in eindhoven , the netherlands , 24-26 may 1995 . the aim of the conference is to bring together scientists involved in research concerning the design , implementation , and application of forms of cooperative human-computer communication where natural language ( typed or spoken ) is used in combination with other modalities , such as visual feedback and direct manipulation . topics of interest * * * * * * * * * the conference will focus on formal , computational , and user aspects of building cooperative multimodal dialogue systems . papers are sought in areas which include , but are not limited to , the following topics : * cooperativity in multimodal dialogue * natural language semantics in a multimodal context * formal and computational models of dialogue context * incremental knowledge representation and dialogue * interacting with visual domain representations * collaborative problem solving * constraint-based approaches to animation and visual modelling * effective use of different interactive modalities * modelling temporal aspects of multimodal communication * type theory and natural language interpretation * knowledge sharing technologies all submitted papers will be refereed by an international programme committee . submission requirements * * * * * * * * * authors are asked to submit an extended abstract of their paper of minimally 4 and maximally 7 pages , including references and keywords , by december 15 , 1994 . only electronical submission will be possible . submitted extended abstracts should be emailed to denk @ kub . nl ; they should preferably be in standard latex format . if , for whatever reason , electronic submission is not possible , please contact the organization committee secretariat ( phone + 31-13 . 66 . 23 . 80 , fax + 13 - 13 . 66 . 29 . 48 ) . important dates * * * * * * * * * submission of extended abstracts 15 december , 1994 notification of acceptance 1 february , 1995 final papers due 15 march , 1995 organization * * * * * * * * * * programme committee : harry bunt ( itk , tilburg ) ( chair ) norman badler ( upenn , philadelphia ) jeroen groenendijk ( uva , amsterdam ) walther von hahn ( hamburg ) dieter huber ( mainz ) hans kamp ( stuttgart ) john lee ( edcaad , edinburgh ) joseph mariani ( limsi , paris ) mark maybury ( mitre , bedford ) paul mckevitt ( university of sheffield ) rob nederpelt ( tue , eindhoven ) kees van overveld ( tue , eindhoven ) ray perrault ( stanford ) donia scott ( brighton ) wolfgang wahlster ( saarbruecken ) bonnie webber ( upenn , philadelphia ) kent wittenburg ( bellcore ) organization committee : robbert - jan beun ( chair ) tijn borghuis harry bunt rob nederpelt marianne wagemans further information * * * * * * * * * * cmc / 95 is scheduled to take place on wednesday , thursday , and friday in 1995 , week 21 . these dates have been chosen in view of the fact that two other , somewhat related conferences will take place elsewhere in europe between monday , may 29 and saturday , june 3 ; one in montpellier , france ( on virtual reality and human-computer interaction ) , and one in hanstholm , denmark ( on spoken dialogue systems ) . it will thus be possible to combine participation in cmc / 95 with that of ( one of ) the other conferences . the participation fee for cmc / 95 is expected to be around dfl 250 , or $ 150 . registration information will be provided in the forthcoming call for participation . further information : for questions concerning the scientific content : harry bunt itk tilburg university p . o . box 90153 , 5000 le tilburg phone + 31 - 13 . 66 . 30 . 60 , fax + 31-13 . 66 . 25 . 37 email : harry . bunt @ kub . nl for questions concerning the organization : robbert - jan beun ipo p . o . box 513 , 5600 mb eindhoven phone + 31 - 40 . 77 . 38 . 73 , fax + 31 - 40 . 77 . 38 . 76 email : rjbeun @ prl . philips . nl for general questions : sobu tilburg university p . o . box 90153 , 5000 le tilburg phone + 31-13 . 66 . 23 . 80 , fax + 13 - 13 . 66 . 29 . 48 . email : denk @ kub . nl
</pre>

## Record 002904

**Label:** `benign`

<pre>
Satelle, StevenX wrote:
&gt; When I was in school they pushed Irish down my throat. I developed a hatred
&gt; for Irish. I did French for 3 years and German for 6 months, I could
&gt; (almost) hold a basic conversation. I am proud of the fact that I don&#x27;t know
&gt; one word of Irish. Well, I&#x27;m hardly a GaeilgÃ³ir, but in general I wouldn&#x27;t consider
either ability or inability in a language something to be proud
of... maybe it&#x27;s just me, but I&#x27;m not proud that I can&#x27;t speak
Italian, no more than I&#x27;m proud that I can speak French or
English.Cheers,
Dave.-- 
       David Neary,
    Marseille, France
  E-Mail: bolsh@gimp.org-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002905

**Label:** `benign`

<pre>
Justin Mason wrote:&gt; What do you all think?  are we ready to go?  anyone run into any trouble
&gt; with the new autoconf code, or found a bug from the merge of that spamcI am now preparing a small patch to configure.in for NetBSD (possibly
also useful for Open- and FreeBSD, don&#x27;t know). Should be ready and
tested in the next half hour.If you think 2.40 is ready, I would suggest to wait just 24 hours more
for possible reports by b2_4_0 users. Not everyone can follow the
development during daytime (at work).
ciao
     Klaus-------------------------------------------------------
This sf.net email is sponsored by: Jabber - The world&#x27;s fastest growing 
real-time communications platform! Don&#x27;t just IM. Build it in! 
http://www.jabber.com/osdn/xim
_______________________________________________
Spamassassin-devel mailing list
Spamassassin-devel@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-devel
</pre>

## Record 002906

**Label:** `benign`

<pre>
fw : commodity futures intraday market price quotes - - - - - original message - - - - - from : kaimal , girish sent : friday , february 01 , 2002 8 : 34 am to : y &#x27; barbo , paul subject : re : commodity futures intraday market price quotes the nymexprices excel sheet is attached . thanks , girish
</pre>

## Record 002907

**Label:** `benign`

<pre>
re : transparently controlling the wholesale trading businesses - an internal approach to internal audit dear mike , thanks for your insight . in the past few months we have established a detailed approach to doorstep which includes interfacing with brm . through my calls the past week , i &#x27; ve been trying to update you so we can determine how best to coordinate the enron europe work , as well as get an understanding of what resources you can supply for this global initiative . my next step is to contact some of the people on the list you gave me to determine their skill set and what locations / commodities they &#x27; d be best to work on . i &#x27; ll send you an updated schedule once i &#x27; ve finalized this . thanks shona mike jordan @ ect 10 / 11 / 2000 09 : 37 am to : shawn kilchrist / na / enron @ enron , shona wilson / na / enron @ enron cc : fernley dyson / lon / ect @ ect , sally beck / hou / ect @ ect subject : transparently controlling the wholesale trading businesses - an internal approach to internal audit shawn / shona we have talked round this issue for some time so i thought i would try to take a brief stab at documenting what my preferred approach is ( we will need to do a great deal of talking before we would circulate widely ) : - aims accountability for internal controls must rest with the commercial support teams and absolutely with the leaders of those teams . a culture of control and operational risk assessment requires extensive on - going communication and a structure of measurement and tracking . any independent process of review such as doorstep and brm should fully leverage the work engaged by staff in the line and indeed should be focused by it all elements of implementing , completing and reviewing internal control should generate defined output we focus independently the review efforts for trading controls and origination controls ( we have defined the control structure for trading offices , agency offices and origination offices and we must police our labelling for each office ) the output from enron &#x27; s perspective is appropriate risk issue lists to be discussed at control / governance meetings ( eg at sally / ted / fernley &#x27; s level and at the audit committee level ) - the important issue here is that every list must be extracted from an agreed database of issues - different lists have different amounts of filtering applied - judgementally by senior / experienced staff the output from aa &#x27; s perspective is their internal controls audit opinion based upon our database and our review and management process of it trading process - monthly routine judgemental self assessment on areas within the trading transaction cycle - rating made by business controller is red , amber , green - with trend indicator of static , improving or declining - see attachment 2 for full listing monthly metrics collected for key standards set for risk management - see attachment 1 ( you will notice that this is a summarised version of attachment 2 - and as a senior controller i would expect the metrics to underpin but not solely drive the judgement within the self assessment ) - shona , this is the work that mike moscoso is leading periodic review meeting between controller and commercial lead to discuss operational risk and areas of concern ( red and amber ) with agreement of action plans for such areas monthly review by controller / senior controller of database where all high ( red ) and medium ( amber ) risk issues are recorded . milestones for action plans revisited , reconfirmed or amended monthly meeting between remote office staff and controllers to identify if the risk rating for any remote offices has changed all new information on issues raised by self assessment , doorstep review or brm completion populated into database database utilised globally to report to various levels of governance and decision on whether original brm and doorstep plans require amendment process - yearly planning checkpoint taken of current operational environment ( say end oct ) proposed new offices for coming year or proposed changes to activity in office , and it development plans for next year prioritisation made for doorstep - which offices require a visit and what depth does report need to go to . note the doorstep review would be an end to end review for entire business unit and therefore is the independent review of the existing self assessment and would leverage the work by focusing the review effort on areas of concern , the actions plans in place and concluding on the &#x27; mitigation of operational risk to an acceptable level &#x27; prioritisation made for brm - which functions , not business units , require external independent review - highly leveraging the above self assessment and doorstep processes ( could aa signoff simply by auditing our own internal governance process ? ) - most likely reviews completed on functions that assessed as concerns across multiple business - such as fx exposure management , cash management , credit exposure management , it change management controls / process where are we now - if we all thought to do this immediately we do not have bottom up operational risk assessment for all businesses - i am suggesting that we demand that all business controllers at the houston offsite do this ? 23 rd oct the above would validate a high level operational risk summary that we as senior controllers could put together for the audit committee - last week oct we agree on a robust tracking process - throw out one of the brm and doorstep databases - november given aa have never historically risk rated their issues we should repopulate the database from scratch - november review doorstep plan to check that our risk rating for business units and remote offices means that we have resource focused correctly - do we need to visit all ? - november review all of the above and blend into risk based approach for brm planning - end november to end december ! ! wow - lets chat about this mike attachment 1 attachment 2 - the areas where a judgement should be proactively made by each business unit controller - business oversight system development project and change management people management - coaching and skills / headcount gaps model review stress testing and business risk identification operational capacity assessment signoff error management control cycle risk management control recognition of risk origination monitoring of trading activities - limit checking , trader mandates specific transaction analysis - dash , cacs etc transaction capture - deal form analysis and risk management system input logistics support - delivery position analysis , incoming and outgoing invoice maintenance , post deal execution contract management portfolio edits - required amendments to previously transacted risk / contracts market risk / position signoff - both transaction specific and portfolio management dpr production and signoff limit excession reporting market risk feeds to grms - review var applicability ( backtesting ? ) credit risk review - liaison with rac over provisioning for credit charges price input checking and verification reserving and income recognition issues weekly executive summary monthly revenue summary documentation documentation generation re - review of contract loading in risk management system affirmation chasing broker information reconciliation trade accounting general ledger account ownership balance sheet to cpr reconciliation accounts receivable maintenance / monitoring accounts payable maintenance / monitoring monthly management accounts by profit centre / business segment inter company / inter entity reconciliation differences legal entity balance sheet analysis for fin ops settlements outgoing invoice generation incoming invoice reconciliation exchange statements reconciliation otc brokerage charges reconciliation and processing nostro reconciliations cash management liaison
</pre>

## Record 002908

**Label:** `benign`

<pre>
desk to desk good afternoon mr . williams your deal number for the swap is 646795 for a price of $ 56 . 15 . kysa m . alport enron north america 503 - 464 - 7486
</pre>

## Record 002909

**Label:** `benign`

<pre>
----------If your day starts with a tee time, then visit our Golf Section. weather.com
http://www.weather.com/RealMedia/ads/click_lx.ads/email.weather.com/email/1524095381/PageSpon/New_Media_twc_email_spon3_text/email_text_01_0713.html/34316434343763383364356332313130?_RM_REDIR_=www.weather.com/outlook/recreation/golf----------SEVERE THUNDERSTORM WARNING NATIONAL WEATHER SERVICE ALBANY NY 518 PM EDT THU AUG 15 2002 THE NATIONAL WEATHER SERVICE IN ALBANY HAS ISSUED A * SEVERE THUNDERSTORM WARNING FOR...   CENTRAL RENSSELAER COUNTY IN EASTERN NEW YORK * UNTIL 545 PM EDT * AT 514 PM EDT...NATIONAL WEATHER SERVICE DOPPLER RADAR INDICATED A   SEVERE THUNDERSTORM NEAR WYNANTSKILL...OR ABOUT 3 MILES EAST OF   TROY...MOVING EAST AT 15 MPH. * THE SEVERE THUNDERSTORM WILL BE NEAR...   AVERILL PARK AND RAYMERTOWN AT 525 PM EDT   GRAFTON AND BERLIN AT 545 PM EDT THIS IS A DANGEROUS STORM. IF YOU ARE IN ITS PATH YOU SHOULD PREPARE FOR DAMAGING WINDS IN EXCESS OF 55 MPH...LARGE HAIL...AND VERY HEAVY RAIN. PEOPLE OUTSIDE SHOULD MOVE TO A SUBSTANTIAL SHELTER NOW. 
</pre>

## Record 002910

**Label:** `benign`

<pre>
start date : 1 / 5 / 02 ; hourahead hour : 1 ; start date : 1 / 5 / 02 ; hourahead hour : 1 ; no ancillary schedules awarded . variances detected . variances detected in load schedule . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002010501 . txt - - - - load schedule - - - - $ $ $ variance found in table tblloads . details : ( hour : 1 / preferred : 36 . 57 / final : 36 . 54 ) trans _ type : final load _ id : pge 2 mkt _ type : 2 trans _ date : 1 / 5 / 02 sc _ id : enrj
</pre>

## Record 002911

**Label:** `benign`

<pre>
questions hi louise . a few questions / issues when you have a moment : 1 . will netco need a copy of infinity for interest rate / fx trading and risk management ? i pitched the question to jeff golden . he thinks the bank will provide this function and the technology , but he wasn &#x27; t 100 % sure . 2 . we have a potential problem with visas . bob hillier is on an ll visa , and many of the development staff are on hlb &#x27; s . once we get a letter from the new entity stating that these people have employment , the transfer process can begin , but it will take at least a week for ll and 2 - 3 weeks for hlb ( this is what i am told ) . if closing happens very quickly after the actual party is chosen , we are going to be squeezed . one solution may be to let all these people continue to work for enron until the visa transfer is complete . otherwise , we will have to send them home without salary or benefits in the meantime . 3 . when you have a moment , i would like to talk to you about two ees people . thanks ! - jay
</pre>

## Record 002912

**Label:** `benign`

<pre>
deixis , demonstration , and deictic belief in multimedia context esslli - workshop on deixis , demonstration and deictic belief in multimedia contexts = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = workshop held in the section &#x27; language and computation &#x27; as part of the &#x27; eleventh european summer school in logic , language and information &#x27; esslli-99 august 9-20 , 1999 , utrecht , the netherlands first call for papers / participation organisers : elisabeth andr &#x27; e ( dfki , univ . of saarbruecken ) massimo poesio ( cogsci / hcrc , univ . of edinburgh ) hannes rieser ( bielefeld univ . &amp; sfb 360 ) questions concerning the workshop may be addressed to any of the organizers . background : deixis has always been at the heart of reference research as widely known literature in semantics and pragmatics ( h . h . clark , s . c . levinson , h . kamp , d . kaplan , w . v . quine ) demonstrates . being fundamental , it is in the common focus of several disciplines : cognitive science , linguistics , philosophical logics , ai , and psychology . until recently , little was known about the role of pointing and demonstration in deixis , especially about the coordination of speech and gesture in deictic contexts . the situation has now changed due to research in linguistics , ethnomethodology , vision , neuro-computation , gesture analysis , psychology , and computer simulation . at present , research is going on at various places , aimed at the integration of deixis information from e . g . the visual and the auditory channel . relevant topics in this new field are e . g . saliency , focus-monitoring , types of gestures and demonstrations , and especially the emergence and structure of composite signals but it also has intimate connections with problems of long standing such as grounding , mutuality or agents &#x27; coordination in discourse . the workshop will integrate different methodologies , experimental paradigms , computer simulation including virtual reality approaches and formal modelling alike . it is addressed to master - students , phd - students and scholars working on philosophical , linguistic or computational aspects of deixis including gesture . the following publications might be of help to students looking for information concerning reference , deixis , gesture recognition and similar topics : clark , h . h . : 1995 , using language . cambridge : cup davis , st . ( ed . ) : 1991 , pragmatics . a reader . new york , oxford : oup . chs ii and iii levinson , st . c . : pragmatics . cambridge : cup . ch . 2 mcneill , d . : 1992 , hand and mind . univ . of chicago press recanati , f . : 1993 , direct reference . from language to thought . oxford uk &amp; cambridge usa : blackwell wachsmuth , i . and froehlich , m . ( eds ) : 1998 , gesture and sign language in human - computer interaction . berlin , heidelberg : springer how the workhsop will be organised : the workshop will consist of ten sessions ( 90 min . each ) of presentation and discussion of contributed papers . it will take place during the esslli - summer school and will be open to all members of the lli - community . submissions : all researchers in the area , but especially ph . d . students and young researchers , are encouraged to submit a two-page abstract ( hard copy or e-mail ( plain ascii or ( la ) tex ) to the following address : pkuehnle @ lili . uni-bielefeld . de ( peter kuehnlein ) the deadline for submission of abstracts is february 15 , 1999 . notification of contributors will be given around april 15 , 1999 . contributors of selected papers will be asked to provide extended abstracts ( six pages ) in latex - format to be edited as esslli - workshop notes . the deadline for submission of extended abstracts is may 31 , 1999 . registration : workshop contributors will be required to register for esslli-99 , but they will be elligible for a reduced registration fee . summary of dates : feb 15 , 99 : deadline for submissions apr 15 , 99 : notification of acceptance may 31 , 99 : deadline for final copy aug 9 , 99 : start of workshop further information : to obtain further information about esslli-99 please visit the esslli-99 home page at http : / / esslli . let . uu . nl / addresses : elisabeth andr &#x27; e ( dfki , univ . of saarbruecken ) : elisabeth . andre @ dfki . de massimo poesio ( cogsci / hcrc , univ . of edinburgh ) : poesio @ cogsci . ed . ac . uk hannes rieser ( bielefeld univ . &amp; sfb 360 ) : rieser @ lili . uni-bielefeld . de
</pre>

## Record 002913

**Label:** `benign`

<pre>
research fellows at cityu , hk ( fwd ) * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * research position department of chinese , translation and linguistics ( ctl ) city university of hong kong hong kong * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * research fellows associated with the department of chinese , translation and linguistics , city university of hong kong are anticipated to be available in the coming academic year . possible research areas include but are not limited to the following : computational linguistics experimental phonetics linguistic theory discourse analysis required background : applicants should have completed their ph . d . in linguistics or related discipline . research experience resulting in international publications is essential . salary : lecturer grades . determination of grade will depend on qualifications and relevant experience . period of appointment : 1 - 3 years . interested applicants should send a cv ( including the names of 3 referees ) along with a letter describing your background and research interests to : professor xu liejiong , head department of chinese , translation and linguistics city university of hong kong 83 tat chee avenue kowloon , hong kong email : ctmwong @ cityu . edu . hk fax : 852-2788 - 9520 note : initial submission by email is encouraged . more information about the city university of hong kong is available from the cityu home page on the world-wide web : http : / / www . cityu . edu . hk
</pre>

## Record 002914

**Label:** `benign`

<pre>
development of a program in &quot; econo - physics &quot; good afternoon professors : i am the administrative coordinator for the enron corp . research group . yannis tzamouranis spoke with vince kaminski about meeting with you to discuss the development of a program for the u of h . i understand from your email that you will be available wednesday , may 24 th . if this is correct , and if professors mccauley and reiter will also be available that date , we would like to schedule a meeting at 4 : 00 pm on the 24 th of may at vince kaminski &#x27; s enron office . if this is not acceptable , please let me know . sincerely , shirley crenshaw administrative coordinator enron corp . research group 713 / 853 - 5290 email : shirley . crenshaw @ enron . comi
</pre>

## Record 002915

**Label:** `benign`

<pre>
start date : 12 / 30 / 01 ; hourahead hour : 22 ; start date : 12 / 30 / 01 ; hourahead hour : 22 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001123022 . txt # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number .
</pre>

## Record 002916

**Label:** `benign`

<pre>
corhshucker daren - - - - the invoices are being paid by us now . . . . james armstrong is taking care of them , so that is who i am forwarding them to . he apparently is paying for them of an account set up for this . he is out of the office , but he called me back and said to keep forwarding him the invoices . let me know if we have any questions , thanks , mark x 33396
</pre>

## Record 002917

**Label:** `benign`

<pre>
sociolinguistics symposium 2000 haa27974 status : r university of the west of england , bristol ( uwe , bristol ) centre for european studies ( ces ) , faculty of languages and european studies ( les ) &amp; school of sociology , faculty of economics and social sciences ( ess ) sociolinguistics symposium 2000 the interface between linguistics and social theory 27-29 april 2000 call for papers the sociolinguistics symposium 2000 is the thirteenth meeting of the sociolinguistics symposium which meets once every two years . this conference will focus primarily on the interface between linguistics and social theory , and it is hoped the meeting will contribute to further cooperation between the two disciplines . the conference welcomes papers from a range of different subject areas such as : language variation and change , language and gender , language and the media , discourse analysis , languages in contact , creole linguistics , intercultural communication , language and migration , social stratification of language , language development and other related topics . keynote speakers professor jack chambers ( toronto ) : leaders and laggers in the diffusion of changes professor david corson ( toronto ) critical realism : an emancipatory social philosophy for sociolinguistics professor pieter muysken ( leiden ) : radical modularity and the possibility of sociolinguistics professor shana poplack ( ottawa ) : the social context of linguistic variation ( working title ) professor ruth wodak ( vienna ) : does sociolinguistics need social theory ? new perspectives in critical discourse analysis provisional titles of colloquia language , nationalism and minority rights multilingualism and migration intercultural communication language contact along the language frontier discourse suggestions for other colloquia are welcome ( see deadline for applications on the back of this page ) . committee professor michael scriven ( dean , les , uwe , bristol ) professor alison assiter ( dean , ess , uwe , bristol ) mr felix bihlmeier ( associate dean ( resources ) , les , uwe , bristol ) dr susan price ( associate dean ( academic affairs ) of les , uwe , bristol ) dr carmen arnaiz ( uwe , bristol ) mrs kate beeching ( uwe , bristol ) mr john bird ( uwe , bristol ) professor jim coleman ( university of portsmouth ) professor nikolas coupland ( university of cardiff ) dr aidan coveney ( university of exeter ) dr helmut daller ( uwe , bristol ) professor roy harris ( university of oxford ) dr stephen may ( university of bristol ) dr tom osborne ( university of bristol ) dr mark sebba ( university of lancaster ) dr sali tagliamonte ( university of york ) dr jeanine treffers - daller ( uwe , bristol ) mr jem thomas ( uwe , bristol ) dr glyn williams ( university of wales at bangor ) deadlines the deadline for proposals of colloquia is : 1 june 1999 . the deadline for submission of abstracts is : 1 september 1999 . abstracts are welcomed for oral presentation ( 20 mins + 10 mins discussion ) or poster presentation . please send 4 hard copies , one of which contains your name and address , as well as an electronic version ( rich text format ) of the abstract to the address given below . for more information more information about the conference programme , the venue and the general organisation of the event can be found either on our website : http : / / www . uwe . ac . uk / facults / les / research / sociling2000 . html or at our addresses / numbers below : jessa karki / jeanine treffers - daller centre for european studies ( ces ) faculty of languages and european studies university of the west of england , bristol frenchay campus , coldharbour lane bristol , bs16 1qy , uk e - mail : jessa . karki @ uwe . ac . uk ( administrative matters ) jeanine . treffers - daller @ uwe . ac . uk ( academic affairs ) tel : + + 44 117 976 3842 , ext 2724 , fax : + + 44 117 976 2626
</pre>

## Record 002918

**Label:** `benign`

<pre>
message forwarded from keyspan louise , this social e - mail is from rich montenes who runs the entire gas control room for keyspan . we worked together diligently on the first year of the brooklyn transaction and i focused on his organization as critical to daily flexibility for enron . we have kept in touch over the last 4 years . as we discussed today , the mpsc ( michigan public service commission ) wanted to &quot; verify &quot; with brooklyn our record . as he stated from below : i will give enron a stunning recommendation to your potential future customer - rest assured ! it &#x27; s an easy thing for me because i &#x27; m very sincere about it . our working relationship with coral is non - existent . nothing like enron from my point of view . i believe aquila may be our competition on this deal with coral being in the outside lane . kevin fox , head of trading at aquila , is an ex - employee of chuck and has been spending a significant amount of time with him . just an fyi . . . laura and the term we were both trying to remember is &quot; stalking - horse &quot; . - - - - - original message - - - - - from : &quot; richard t . montenes &quot; @ enron [ mailto : imceanotes - + 22 richard + 20 t + 2 e + 20 montenes + 22 + 20 + 3 crmontenes + 40 keyspanenergy + 2 ecom + 3 e + 40 enron @ enron . com ] sent : monday , september 10 , 2001 2 : 47 pm to : luce , laura subject : re : how the heck are you . . . laura , always good to hear from you . i &#x27; ve asked bobby several times how you are so i know you &#x27; re well . hope being back in houston agrees with you . as far as a chance of seeing you on thursday / friday - i &#x27; ll be in hershey pa . with our friends at duke ( customer / golf meeting ) . if you find yourself up and about ny some other time please let me know if you have some spare time . i would love to see you . my oldest daughter won the hamilton fellowship at columbia university law school . she started in august . that &#x27; s great but i find she doesn &#x27; t have much time for her old man as she &#x27; s apparently knee deep in work . sound familiar ? the good news is it &#x27; s not costing me anything and i can put up with it to save $ 100 , 000 . 00 + . great news about di - she certainly deserves to be recognized for her talents . she was lucky to have you as a mentor ! i will give enron a stunning recommendation to your potential future customer - rest assured ! it &#x27; s an easy thing for me because i &#x27; m very sincere about it . our working relationship with coral is non - existent . nothing like enron from my point of view . yes - we still have roasted pepper pizza &#x27; s nearby ! stay well and give those 4 going on 10 babies a kiss for me . rich m &quot; luce , laura &quot; wrote : &gt; richie , &gt; &gt; i was pleasantly surprised to see your name cross my desk today . one of &gt; the deals my group is working on contacted you ( i believe ) for a &gt; reference . timing is interesting , i will be in new york this &gt; thursday / friday visiting with chuck on the business we set up in chicago &gt; forget that for now . . . how are you ? &gt; &gt; so how is your daughter in college @ michigan ? how is rich ? bobby said &gt; there may be some changes with gas control between brooklyn and long &gt; island . &gt; &gt; i just moved back to houston ( 10 days and counting ) from chicago . the &gt; boys are now 4 going on 10 and just entered school for the first time . &gt; they are growing so fast and i don &#x27; t like it one bit . they take care of &gt; me as much as i do the reverse . remember di . . . she just moved to &gt; california to ucla to get her mba . after her stint in beijing and &gt; portland , oregon she worked for me again and i really encouraged her to &gt; go to school . before she left , we went out and reminisced on our time &gt; in new york . for both of us , that was one of our best personal &gt; experiences meeting new people , doing something different and you guys &gt; were so great to us . &gt; &gt; chicago was great for me in the same light . i have been lucky to get to &gt; follow through in chicago with a great group of people . the office in &gt; chicago is being run by two of the guys who moved up with me and we have &gt; all been working together for the last 3 years . they are my family and &gt; i have been missing them terribly . &gt; &gt; hope to hear from you soon . i could really go for some roasted pepper &gt; pizza . . . &gt; &gt; laura luce &gt; &gt; . &gt; &gt; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * &gt; this e - mail is the property of enron corp . and / or its relevant affiliate and may contain confidential and privileged material for the sole use of the intended recipient ( s ) . any review , use , distribution or disclosure by others is strictly prohibited . if you are not the intended recipient ( or authorized to receive for the recipient ) , please contact the sender or reply to enron corp . at enron . messaging . administration @ enron . com and delete all copies of the message . this e - mail ( and any attachments hereto ) are not intended to be an offer ( or an acceptance ) and do not create or evidence a binding and enforceable contract between enron corp . ( or any of its affiliates ) and the intended recipient or any other party , and may not be relied on by anyone as the basis of a contract by estoppel or otherwise . thank you . &gt; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 002919

**Label:** `benign`

<pre>
&gt;&gt; I run exmh on my desktops at home and at work with the resulting exmh
&gt;&gt; windows being displayed on both my work and home desktops (gratis SSH
&gt;&gt; X11 forwarding).  In fact, your message was read and replied to (this
&gt;&gt; message) while at work, using an exmh instance running on my home
&gt;&gt; machine.Just to throw in another approach to solving the same problem. I run two copies of exmh, one at work, one at home.  They both
display on a &quot;virtual X server&quot; created by vncserver on the home
box.  I connect to that virtual X server using vncviewer wherever
I happen to be.  The VNC connection is tunneled over ssh and is
carried over the Internet via an IPSEC appliance.That gives me access to both home and work email from either 
place without the complications involved in having two copies of 
exmh working on the same set of folders.It&#x27;s a tad slow viewing work email when I&#x27;m at work ... but not 
so bad that I can&#x27;t stand it.--Hal
_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 002920

**Label:** `benign`

<pre>
fw : response to data request - - - - - original message - - - - - from : kitchen , louise sent : monday , november 19 , 2001 5 : 17 pm to : fallon , jim cc : lavorato , john subject : response to data request
</pre>

## Record 002921

**Label:** `benign`

<pre>
Jets Attempt to Intercept &#x27;Contrail&#x27; By ROBERT BURNS
AP Military Writer WASHINGTON (AP)--The military command responsible for the defense of North
American airspace scrambled fighter jets in response to unverified reports
of an airborne condensation trail, or contrail, moving from the Caribbean to
the United States, defense officials said Thursday. Lt. Col. Michael Humm, a Pentagon spokesman, said the incident happened
Wednesday and that the North American Aerospace Defense Command in Colorado
Springs, Colo., was continuing to investigate. The reported contrail stirred concern because of the possibility that it
could have indicated the presence of an unauthorized jet aircraft in or
approaching American airspace. In the aftermath of the Sept. 11 attacks, the
Pentagon has taken greater precautions to monitor U.S. airspace. A contrail is created by vapor from a jet engine in the presence of cold
air. The jets that were scrambled to attempt to intercept and identify the source
of the contrail found nothing, said Lt. Cmdr. Curtis Jenkins, a NORAD
spokesman. He said NORAD had developed no new information since the initial
report at 4 p.m. EST on Wednesday. NORAD is reviewing data from its tracking
radars in search of evidence, he said. A Pentagon statement said NORAD received unverified reports of ``what
appeared to be a contrail of unknown origin,&#x27;&#x27; originally in the vicinity of
the Turks and Caicos Islands in the Caribbean. ``Initially, it was reported to be heading northwestward toward the United
States,&#x27;&#x27; the statement said. ``Commercial airline pilots later reported the
contrail over Florida and later over Indiana. Thereafter, no other sightings
were reported.&#x27;&#x27; The reported contrail was never verified by visual or radar contact, the
Pentagon statement said. At the Federal Aviation Administration, spokesman Paul Turk said, ``I&#x27;m
aware of the reports.&#x27;&#x27; He referred all questions to NORAD. Jenkins said he was not sure who reported the initial sighting over the
Caribbean. He also was unsure who requested NORAD to launch fighter jets or
from which military bases they were scrambled. ``We don&#x27;t necessarily judge or second-guess when a request comes to us to
investigate&#x27;&#x27; a contrail, he said. Meanwhile, reports of a ball of fire streaking across the sky early Thursday
had people throughout the Northwest flooding radio and television stations
with calls reporting a meteor shower. It was believed that the light came from a Russian rocket body re-entering
the Earth&#x27;s atmosphere about 6:15 a.m. The U.S. Strategic Command in Omaha,
Neb., and the North American Aerospace Defense Command confirmed a Russian
rocket fell back to Earth, but gave no further details. 
AP-NY-11-28-02 1833ESTCopyright 2002, The Associated Press. The information contained in the AP
Online news report may not be published, broadcast or redistributed without
the prior written authority of The Associated Press.
-- 
Terry W. Colvin, Sierra Vista, Arizona (USA) &lt; fortean1@mindspring.com &gt;
     Alternate: &lt; fortean1@msn.com &gt;
Home Page: &lt; http://www.geocities.com/Area51/Stargate/8958/index.html &gt;
Sites: * Fortean Times * Mystic&#x27;s Haven * TLCB *
      U.S. Message Text Formatting (USMTF) Program
------------
Member: Thailand-Laos-Cambodia Brotherhood (TLCB) Mailing List
   TLCB Web Site: &lt; http://www.tlc-brotherhood.org &gt;[Vietnam veterans,
Allies, CIA/NSA, and &quot;steenkeen&quot; contractors are welcome.]To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002922

**Label:** `benign`

<pre>
review of business unit internal controls - - - - - - - - - - - - - - - - - - - - - - forwarded by veronica valdez / hou / ect on 02 / 11 / 2000 04 : 06 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - ted murphy 02 / 11 / 2000 04 : 06 pm sent by : veronica valdez to : rick buy / hou / ect @ ect , richard causey / corp / enron @ enron cc : subject : review of business unit internal controls attached is a document that i am not sure is entirely necessary ; however , depending on the response will indicate the need for implementation .
</pre>

## Record 002923

**Label:** `benign`

<pre>
enron / hpl actuals for october 24 , 2000 teco tap 72 . 922 / hpl gas daily
</pre>

## Record 002924

**Label:** `benign`

<pre>
My ideal mailwall will allow message passthrough in many ways:  - Sender membership on my personal whitelist or any one of 
    many other external whitelists I respect
  - Payment of a small fee (via a website and PayPal link)
  - Demonstration of special per-message effort, either 
    via...
    - a computational challenge (hashcash)
    or
    - other challenge that requires human-level flexibility &amp; 
      followthrough (sender manual whitelisting)
  - Inclusion of a legally-enforceable guarantee that the
    mail is not an unsolicited commercial pitch -- one
    example of this class of guarantee would be a posted
    bond
  - By convincing some analysis software agent of mine that
    I want to see the mail, based on its content and 
    distribution listThere&#x27;s no need to do only one. Some might overlap; the manual
process for passing a message through might require the assertion
of a legally-enforceable guarantee about the messages&#x27; contents.
Passing certain tests once might add an address to the persistent
whitelist.Any slightly determined and legitimate correspondent would be
able to find multiple ways to get their mail read, while spammers
would face a situation where the marginal cost of reaching me
is much, much greater than the expected return. Some economically irrational spammers (and religious/political 
zealots) would get through, but such traffic should be a 
background trickle rather than an annoying torrent.- Gordon
http://xent.com/mailman/listinfo/fork

</pre>

## Record 002925

**Label:** `benign`

<pre>
strategic management society conference our proposal was accepted . dust off your san francisco shoes . rita mcgrath - the designer of our particular panel - will forward details when they are sent to her by sms
</pre>

## Record 002926

**Label:** `benign`

<pre>
call for abstracts for the listserve the 1998 conference of the texas linguistics society title : exploring the boundaries between phonetics &amp; phonology the university of texas at austin march 13-15 , 1998 keynote speakers : abigail cohn , cornell university patricia keating , university of california , los angeles janet pierrehumbert , northwestern university abstracts are invited for 30 minute talks ( with 10 additional minutes for discussion ) on any topic related to the relationship between phonetics and phonology . potential topics include , but are not limited to : theoretical exploration of the interplay between phonetics and phonology encoding phonetic naturalness in phonological theory or representation experimental data ( acoustic or perceptual ) pertaining to phonological patterns and / or sound change phonetic and phonological realizations of specific patterns such as tone and intonation , coarticulation , metathesis , etc . matches and mismatches between phonetic and phonological patterns * especially encouraged * are abstracts dealing with the separation of phonetics and phonology abstracts must be no more than one 8 1 / &quot; 2 by 11 &quot; page , single-spaced , and in at least 12 - point font ( 10 point for examples ) , with one-inch margins on all sides . one additional page with references and diagrams or tableaux may be appended if necessary . all submissions must include the following items : 10 anonymous copies of the abstract 1 3x5 &quot; card with name , affiliation , address , phone number , email address and title of paper deadline for receipt of abstracts is october 17 , 1997 . send abstracts to : tls abstract committee calhoun 501 the university of texas at austin austin , tx 78712 abstracts received after the deadline will not be considered . fax submissions will not be accepted . instructions for email submissions are available upon request . an individual may submit at most one single and one co-authored paper . accepted presenters will be notified by mid - december , 1997 . if presenters wish to have their papers included in the conference proceedings , they must submit a camera-ready copy by may 15 , 1998 . proceedings will be published by the texas linguistic forum . a poster session that will accompany the conference is currently being organized . a call for poster abstracts will be issued soon . preregistration for the conference is $ 15 . 00 ( us ) for students , $ 30 . 00 for nonstudents . for further information , contact tls @ uts . cc . utexas . edu or check out our web page at http : / / uts . cc . utexas . edu / ~ tls / tivoli majors university of texas department of linguistics
</pre>

## Record 002927

**Label:** `benign`

<pre>
chomsky &#x27; 92 article i was about to send the following request to martin haspelmath ( the author of the quoted lines below ) , but on second thought i decided that asking someone in germany where i could get a copy of an unpublished paper by an american scholar was a little odd . so can someone nearby help me ? martin wrote : &gt; . . . and his 1992 paper &quot; a minimalist program for &gt; linguistic theory &quot; , which does n&#x27;t look as if it was &gt; intended for wider circulation , must be around in &gt; thousands of copies by now . i &#x27; ll bite , where can i get a copy ? thanks !
</pre>

## Record 002928

**Label:** `benign`

<pre>
e-mail address does anyone have , or know how i can get , an e-mail address for barney pell ( last seen working on ai at cambridge ) ? thanks !
</pre>

## Record 002929

**Label:** `benign`

<pre>
Looks useful. Hopefully, they&#x27;ll put up some more material soon.	http://ocw.mit.edu/global/all-courses.html
</pre>

## Record 002930

**Label:** `benign`

<pre>

&quot;Craig R.Hughes&quot; said:&gt; Hmm, tricky because we&#x27;ve got Razor1 and Razor2 rolled into one 
&gt; rule.  Probably should break them out as separate rules anyway 
&gt; so they can get different scores, etc.  Not too hard to do, but 
&gt; it&#x27;s nearly 11pm so I&#x27;ll see if I can get to it tomorrow.IMO 2 separate rules is a good idea anyway, razor2 has totally different
hitrates (generally better I think) to razor1.--j.
</pre>

## Record 002931

**Label:** `benign`

<pre>
Yes, it&#x27;s nice to be back in America&#x27;s flaccid state ...Seems like only yesterday we were suffering electile dysfunction ...Maybe if they made the ballot ovals look like little blue pills ...No, seriously ... I&#x27;m here all week ... You were great ...
&#x27;nite everybody

</pre>

## Record 002932

**Label:** `benign`

<pre>
schedule crawler : hourahead failure start date : 1 / 19 / 02 ; hourahead hour : 24 ; hourahead schedule download failed . manual intervention required . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002011924 . txt error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database error : dbcaps 97 data : cannot perform this operation on a closed database ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data ! ! ! unknown database . alias : dbcaps 97 data error : dbcaps 97 data : cannot perform this operation on a closed database
</pre>

## Record 002933

**Label:** `benign`

<pre>
re : louise have a few questions on the list of key personnel you gave to me 1 . there is a &quot; will &quot; listed - sorry but i don &#x27; t see anyone with this last name in my list . 2 . there is a &quot; woulfe &quot; listed - i couldn &#x27; t find this so i presumed this to be &quot; wolf &quot; - am i correct . 3 . also , there were a few people on your list who are analysts or trading assistants - rotation 2 . is it correc that these are people we would deem key , ie . , potential provide incentives to stay in order to ensure the business &#x27; success ? 4 . brad mackay was listed twice - fyi many thanks colette - - - - - original message - - - - - from : louise . kitchen sent : wednesday , january 09 , 2002 4 : 52 pm to : dow , colette cc : louise . kitchen subject : spoke to the deal team - they understand the economics and have gone to speak to bill . this e - mail is the property of enron corp . and / or its relevant affiliate and may contain confidential and privileged material for the sole use of the intended recipient ( s ) . any review , use , distribution or disclosure by others is strictly prohibited . if you are not the intended recipient ( or authorized to receive for the recipient ) , please contact the sender or reply to enron corp . at enron . messaging . administration @ enron . com and delete all copies of the message . this e - mail ( and any attachments hereto ) are not intended to be an offer ( or an acceptance ) and do not create or evidence a binding and enforceable contract between enron corp . ( or any of its affiliates ) and the intended recipient or any other party , and may not be relied on by anyone as the basis of a contract by estoppel or otherwise . thank you . visit our website at http : / / www . ubswarburg . com this message contains confidential information and is intended only for the individual named . if you are not the named addressee you should not disseminate , distribute or copy this e - mail . please notify the sender immediately by e - mail if you have received this e - mail by mistake and delete this e - mail from your system . e - mail transmission cannot be guaranteed to be secure or error - free as information could be intercepted , corrupted , lost , destroyed , arrive late or incomplete , or contain viruses . the sender therefore does not accept liability for any errors or omissions in the contents of this message which arise as a result of e - mail transmission . if verification is required please request a hard - copy version . this message is provided for informational purposes and should not be construed as a solicitation or offer to buy or sell any securities or related financial instruments .
</pre>

## Record 002934

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85514221
Date: Not suppliedThe legendary Clarion Writers&#x27; Workshop -- of which I am an alumnus, class of 
&#x27;92 -- has spun out another satellite branch (Clarion West, in Seattle, has 
been going for some years now). The new workshop, Clarion South, will be held 
in Queensland, Australia, in 2004, so that antipodeans can also attend 
science-fiction bootcamp without travelling to America. Link[1] Discuss[2] (_
Thanks, Pat!_)[1] http://www.clarionsouth.org/
[2] http://www.quicktopic.com/boing/H/fXD4NLwaVDe

</pre>

## Record 002935

**Label:** `benign`

<pre>
my coordinates test message vincent kaminski managing director - research enron corp . 1400 smith street room ebl 962 houston , tx 77002 - 7361 phone : ( 713 ) 853 3848 fax : ( 713 ) 646 2503 e - mail : vkamins @ enron . com
</pre>

## Record 002936

**Label:** `benign`

<pre>
re : thanks eric : michelle and i discussed with cindy / telepathy and confirmed the following details . marvix phone will installed within 5 days , no later than may lst . marvix phone will be a white panasonic model with two lines , speaker phone and voice mail capabilities 750 prefix will not be associated with enron trunks lines marvix phone will go straight to voice mail , can check messages ( message waiting feature ) please call me or michelle at x 57932 if you have any questions . thanks . eric gadd 04 / 18 / 2001 12 : 17 pm to : julie armstrong / corp / enron @ enron cc : subject : re : thanks julie , we &#x27; re going to have to work out some kind of phone coverage capability - - - any ideas ? ? julie armstrong 04 / 18 / 2001 10 : 28 am to : eric gadd / et &amp; s / enron @ enron , michelle lokay / et &amp; s / enron cc : subject : re : thanks please advise if the 750 exchange and set - up is acceptable . - - - - - - - - - - - - - - - - - - - - - - forwarded by julie armstrong / corp / enron on 04 / 18 / 2001 10 : 29 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : cynthia siniard / enron @ enronxgate on 04 / 18 / 2001 10 : 21 am to : julie armstrong / corp / enron @ enron cc : ivan howard / enron @ enronxgate subject : re : thanks julie - we can assign a centrex line ( 713 - 750 - xxxx ) number for him . i will have to order call notes from swb ( monthly charge ) on this for his voicemail . this will work totally different from the lucent phone with it &#x27; s only feature being call notes . please be sure eric understands this . i &#x27; ll let you know the due date this will all be completed . it will probably be another 5 working days to get the order completed by bell . let me know if you have any questions . i apologize for the delay . . . this request did not make it to my group . cindy siniard enron net works , llc enterprise telephony services - eb 2656 e 713 - 853 - 0558 ( office ) 713 - 853 - 9828 ( fax ) 713 - 410 - 8244 ( cell ) - - - - - original message - - - - - from : armstrong , julie sent : wednesday , april 18 , 2001 7 : 59 am to : siniard , cynthia subject : thanks please see the initial request from michelle lokay and my follow - up below . thanks . - - - - - - - - - - - - - - - - - - - - - - forwarded by julie armstrong / corp / enron on 04 / 18 / 2001 07 : 59 am - - - - - - - - - - - - - - - - - - - - - - - - - - - julie armstrong 04 / 06 / 2001 10 : 24 am to : grace e warren / hou / ect cc : subject : thanks grace : it was good to talk to you and thank you for your assistance yesterday . louis porter quickly resolved issue and i learned a feature on the phone system . i have an unique request and wanted to get your expert assistance on the below request . the physical phone will need to be set up in eric gadd &#x27; s office , eb 4162 . the phone should have the features such as voice mail and send calls . charge to co # 1439 , cost # 112442 . if you have any questions , please call me at x 33597 . thanks . - - - - - - - - - - - - - - - - - - - - - - forwarded by julie armstrong / corp / enron on 04 / 06 / 2001 08 : 44 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : michelle lokay / enron @ enronxgate on 04 / 05 / 2001 11 : 14 am to : julie armstrong / corp / enron @ enron cc : subject : mavrix phone per legal &#x27; s recommendation , please order another phone for eric gadd . he is the officer representing mavrix and needs a phone number that is not associated with enron ( no 853 or 345 prefix ) . thanks .
</pre>

## Record 002937

**Label:** `benign`

<pre>
I noticed a drop in checks, and did some tests.  If I move truth up in
my catalog list, a check comes back postive, but if I move fire up in
the list, then I don&#x27;t get the positive check back.  It&#x27;s almost like
it&#x27;s not syncing up with Hubris which is the one my reports are getting
sent to.-=Bobby
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 002938

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;U&quot; == Udhay Shankar N  writes:    U&gt; At 12:32 PM 12/28/00 -0600, Adam Rifkin wrote:
    &gt;&gt; I repeat, IBM 76.8Gb ultra dma/100 hard drive at Fry&#x27;s for
    &gt;&gt; $375...  &quot;home of fast, friendly courteous service! (R)&quot;    U&gt; less than two years later, we have 320 GB for the same price:So then why does my webhost _still_ only give me 200MB?-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
 Business Advantage through Community Software : http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)

</pre>

## Record 002939

**Label:** `benign`

<pre>
i will be out next week imbalances : i would like us to continue to pursue channel / el paso / tenngasco for our payback . they got our cashout number last week , where do they stand . again , i think robert is an ally and i do not want to irritate him but things will not get any better in the future . we need to resolve this imbalance . can we net some of these contracts ? i like mary poorman &#x27; s report ; however i have questions : how can we miss black marlin so completely ? do we agree with this imbalance ? can we net all the chevron and dynegi contracts together for payback to keith once we get the ar issue solved ? where do we stand on the columbia energy resolution ? where do we stand on the ngpl reconcilliation ? duke energy 206 is still a problem . do we need all these amoco contracts they have 8 , that seems like a large number to me , can we net some of them ? are we charging enough for the swing we get at the paper plant on the entex contract ? is there a way to keep tejas in line at southern union this winter ? that meter will really swing then and i do not know how much line pack they have the right to use . can we net the corpus christi gas marketing and all the tejas / coral / gulf energy / shell imbalances down ? how is the reconcillitation going ? can we smash the entex and the reliant contracts together so we can get rid of some of these contracts ? they have 9 , that seems like a lot to me . gulfmark is gone down the road can we check with someone about this contract , it seems like we should be able to net these volumes against some where we are owed ? is this lone star 213 imbalance real , if so how do we resolve ? where did the exxon imbalance come from ? do we need 5 texaco transportation contracts , can we get rid of some ? can we combine the vastar and the southern imbalances ? what is the webb / duval do , can we get rid of it , combine this with midcon , how old is this imbalnce ? mick update the compressor fuel on the p / l but the new numbers do not seem to translate up to the profit calculation ? can we do something about this ? i thought the imbalance report i got this wed was pretty sad . some of the columns did not add and there seemed to be a lot of missing information . can we resolve this ? i am concerned about our capacity positons in the future , we are going to have to work on a better way to check our positions . i had a meeting with tom shelton and our representative to the rrc , james mann , the rrc is concerned about this winter and they have asked us to compile a list of customers we will cut based upon the priority we filed with the rrc several years ago . lauri will have a copy of the priority list . we need to compile this list and get tom and james comfortable with the process . the last thing we need is the rrc hammering on us , when can we get this list ? i think we should be able to get something out of the contract system . jackie morgan is who i would approach .
</pre>

## Record 002940

**Label:** `benign`

<pre>
re : first delivery - wagner oil vance , deal # 446555 has been created and entered in sitara . bob vance l taylor 10 / 19 / 2000 02 : 17 pm to : robert cotten / hou / ect @ ect cc : lisa hesse / hou / ect @ ect , julie meyers / hou / ect @ ect , cynthia hakemack / hou / ect @ ect , susan smith / hou / ect @ ect , donald p reinhardt / hou / ect @ ect , melissa graves / hou / ect @ ect subject : first delivery - wagner oil bob , the following production is now on - line and a ticket should be created and entered into sitara based on the following : counterparty meter volumes price period global no . wagner oil company 9859 300 mmbtu / d 100 % gas daily less $ 0 . 11 10 / 16 - 10 / 31 96049058 fyi , susan will create and submit a committed reserves firm ticket for the remaining term of the deal beginning with the month of november . additionally , this is a producer svcs . deal and should be tracked in the im wellhead portfolio . . . attached to the gathering contract . thanks , vlt x 3 - 6353 - - - - - - - - - - - - - - - - - - - - - - forwarded by vance l taylor / hou / ect on 10 / 19 / 2000 02 : 12 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : esther buckley 10 / 19 / 2000 02 : 04 pm to : molly l carriere / hou / ect @ ect , clem cernosek / hou / ect @ ect , donna consemiu / hou / ect @ ect , robert cook / hou / ect @ ect , howard b camp / hou / ect @ ect , lisa hesse / hou / ect @ ect , nathan l hlavaty / hou / ect @ ect , wayne e lightfoot / hou / ect @ ect , james mckay / hou / ect @ ect , mary m smith / hou / ect @ ect , steve hpl schneider / hou / ect @ ect , melissa graves / hou / ect @ ect , michael walters / hou / ect @ ect , eric wardle / hou / ect @ ect , jill t zivley / hou / ect @ ect , mary jo johnson / hou / ect @ ect , rita wynne / hou / ect @ ect , lauri a allen / hou / ect @ ect , cheryl jones / gpgfin / enron @ enron , reid hansen / gco / enron @ enron , darron c giron / hou / ect @ ect , o &#x27; neal d winfree / hou / ect @ ect , susan smith / hou / ect @ ect , gary bryan / hou / ect @ ect , gary a hanks / hou / ect @ ect , donald p reinhardt / hou / ect @ ect , vance l taylor / hou / ect @ ect , david baumbach / hou / ect @ ect , robert cotten / hou / ect @ ect , brian m riley / hou / ect @ ect , jeffrey a austin / hou / ect @ ect , cynthia hakemack / hou / ect @ ect , dawn c kenne / hou / ect @ ect , lisa csikos / hou / ect @ ect , kristen j hanson / hou / ect @ ect , j r fosdick / gco / enron @ enron , carlos j rodriguez / hou / ect @ ect , stephanie gomes / hou / ect @ ect , pat clynes / corp / enron @ enron , tom acton / corp / enron @ enron , robert walker / hou / ect @ ect , george weissman / hou / ect @ ect , joanne harris / na / enron @ enron , christy sweeney / hou / ect @ ect , earl tisdale / hou / ect @ ect cc : subject : first delivery - wagner oil see attached file
</pre>

## Record 002941

**Label:** `benign`

<pre>
Once upon a time, Peter wrote :&gt; On Fri, Feb 01, 2002 at 05:41:32PM +0200, Harri Haataja wrote:
&gt; &gt; I have a local one for the main and upgrades from somewhere plus my own
&gt; &gt; at $ORKPLACE.
&gt; 
&gt; Olen ajatellut pystyttÃ¤Ã¤ itselleni lokaalin apt-varaston, kun Suomesta ei
&gt; tunnu lÃ¶ytyvÃ¤n julkista peiliÃ¤. Osaisitko avittaa hiukan asiassa, eli 
&gt; kuinka lÃ¤hteÃ¤ liikkeelle? Ensin kannattanee peilata varsinainen RH:n
&gt; rpm:t jostain, vaan millÃ¤ softalla (rsync?) ja mistÃ¤ (funet?) tuo
&gt; kannattaa tehdÃ¤, ajatuksia?Wow, Finnish seems even more complicated than German to me :-)
Could you send an English translation next time? I really didn&#x27;t understand
a thing and I assume I&#x27;m not the only one ;-)Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 002942

**Label:** `benign`

<pre>
On Saturday, September 21, 2002, at 10:59 PM, Joseph S. Barrera III 
wrote:&gt; Better yet, tell me where I should be listening for new music now that
&gt; P2P is dead and I still can&#x27;t pick up KFJC very well.KFJC has a MP3 stream at kfjc.org. I&#x27;d also recommend radioparadise.com.I remember the Suburban Lawns, but I don&#x27;t know what became of them.Apropos of nothing: &quot;Spirited Away&quot; is amazing. Go see it now.-- whump

</pre>

## Record 002943

**Label:** `benign`

<pre>
enron / hpl actuals for october 31 , 2000 teco tap 20 . 000 / enron ; 80 . 000 / hpl gas daily
</pre>

## Record 002944

**Label:** `benign`

<pre>
flight details departure : february 9 th at 9 : 20 a . m . arrives denver 10 : 40 a . m . ( flight # 799 ) return : february 16 th at 4 : 35 p . m . arrives houston 7 : 55 p . m . ( flight # 1098 ) tammie schoppe enron americas - office of the chair assistant to louise kitchen 713 . 853 . 4220 office 713 . 646 . 8562 fax 713 . 253 . 2131 mobile
</pre>

## Record 002945

**Label:** `benign`

<pre>
the article. I&#x27;m afraid I don&#x27;t understand how the transmission prices could have hit $50/tcf.But I&#x27;m also really leery of telling a pipeline company they have to run a pipeline at a higher pressure and that they should forego maintenance. We had a big pipeline explosion up here awhile ago.So maybe the judge has a point. We&#x27;ll see as the appeals work its way out.&gt; -----Original Message----- &gt; From: Geege Schuman [mailto:geege@barrera.org] &gt; Sent: Tuesday, September 24, 2002 5:16 AM &gt; To: johnhall@evergo.net &gt; Subject: RE: liberal defnitions &gt; &gt; from slate&#x27;s &quot;today&#x27;s papers&quot;: The New York Times and Los Angeles Times &gt; both lead with word that &gt; a federal judge ruled yesterday that the nation&#x27;s largest &gt; national gas pipeline company, El Paso, illegally withheld gas &gt; from the market during California&#x27;s energy squeeze in 2000-01. &gt; The judge concluded that El Paso left 21 percent of its capacity &gt; in the state off-line, thus driving up the price of gas and &gt; helping to induce rolling blackouts. &gt; &gt; and this is the product of overregulation? &gt; &gt; -----Original Message----- &gt; From: fork-admin@xent.com [mailto:fork-admin@xent.com]On Behalf Of John &gt; Hall &gt; Sent: Monday, September 23, 2002 11:57 PM &gt; To: FoRK &gt; Subject: liberal defnitions &gt; &gt; &gt; Depends on how much over spending vs. how much (and what type) over &gt; regulation. &gt; &gt; The biggest problem with over regulation is the costs can be invisible. &gt; It also has the ability to single out particular people, while over &gt; spending spreads the damage more evenly. Rent control would be an &gt; example of a regulation solution that is in general worse than spending &gt; tons of money on public housing. &gt; &gt; As for the definition of a liberal being someone who seeks to impose &gt; both, I find no fault in that definition whatsoever. The opinion that &gt; EITHER we are spending too much OR we have too much regulation is pretty &gt; much anathema to liberal politics. &gt; &gt; Finally, those who argue that there are private replacements for much &gt; government regulation are not saying that a state of nature (no private &gt; replacements, no government regulation) is better than government &gt; regulation itself. &gt; &gt; And in my experience people who label themselves &#x27;Green&#x27; (which does not &gt; include everyone who loves trees and thinks smokestacks are ugly) is a &gt; watermelon. &gt; &gt; &gt; &gt; &gt; &gt; -----Original Message----- &gt; &gt; From: fork-admin@xent.com [mailto:fork-admin@xent.com] On Behalf Of &gt; Geege &gt; &gt; Schuman &gt; &gt; &gt; &gt; funny. i read it as green = red, as in accounting, as in fiscally &gt; &gt; irresponsible. which do you think is the worse indictment - &gt; &gt; overregulation &gt; &gt; or overspending? there are many (dickheads) who buy into the &gt; &gt; neo-conservative media&#x27;s (fox&#x27;s) definiton of &quot;liberal&quot; as &quot;one who &gt; seeks &gt; &gt; to &gt; &gt; impose both.&quot; &gt; &gt; &gt;
</pre>

## Record 002946

**Label:** `benign`

<pre>
fw : canada origination hi louise , can you please provide some guidance ? originally what we prepared for you has been an origination schedule each month . as you know , we &#x27; ve since added mpr items . several commercial folks are now requesting that we add in accrual items . are you okay with this ? would you like to see two schedules each month - one with only true originations , then an additional report that includes originations , mpr , and accrual items ? - - - - - original message - - - - - from : carter , carol sent : friday , november 02 , 2001 11 : 15 am to : killen , faith subject : canada origination faith , i have differences with canada on the originations schedule due to accrual income items . i have not included the accrual income on the originations schedule for louise . please advise . please note that the spreadsheet has 4 tabs and the discrepancies are highlighted in pink . thanks . have a great day , carol l . carter 713 - 853 - 1945
</pre>

## Record 002947

**Label:** `benign`

<pre>

http://www.nationalreview.com/hanson/hanson091102.asp
September 11, 2002 8:00 a.m.
The Wages of September 11
There is no going back.September 11 changed our world. Those who deny such a watershed event take a
superficially short-term view, and seem to think all is as before simply
because the sun still rises and sets.This is a colossal misjudgment. The collapse of the towers, the crashing
into the Pentagon, and the murder of 3,000 Americans Â— all seen live in real
time by millions the world over Â— tore off a scab and exposed deep wounds,
which, if and when they heal, will leave ugly scars for decades. The killers
dealt in icons Â— the choice of 911 as the date of death, targeting the
manifest symbols of global capitalism and American military power, and
centering their destruction on the largest Jewish city in the world. Yes,
they got their symbols in spades, but they have no idea that their killing
has instead become emblematic of changes that they could scarcely imagine.Islamic fundamentalism has proved not ascendant, but static, morally
repugnant Â— and the worst plague upon the Arab world since the Crusades. By
lurking in the shadows and killing incrementally through stealth, the
vampirish terrorists garnered bribes and subsidies through threats and
bombs; but pale and wrinkled in the daylight after 9/11, they prove only
ghoulish not fearsome.The more the world knows of al Qaeda and bin Laden, the more it has found
them both vile and yet banal Â— and so is confident and eager to eradicate
them and all they stand for. It is one thing to kill innocents, quite
another to take on the armed might of an aroused United States. Easily
dodging a solo cruise missile in the vastness of Afghanistan may make good
theater and bring about braggadocio; dealing with grim American and British
commandos who have come 7,000 miles for your head prompts abject flight and
an occasional cheap infomercial on the run. And the ultimate consequence of
the attacks of September 11 will not merely be the destruction of al Qaeda,
but also the complete repudiation of the Taliban, the Iranian mullocracy,
the plague of the Pakistani madrassas, and any other would-be fundamentalist
paradise on earth.Foreign relations will not be the same in our generation. Our coalition with
Europe, we learn, was not a partnership, but more mere alphabetic
nomenclature and the mutual back scratching of Euro-American globetrotters Â—
a paper alliance without a mission nearly 15 years after the end of the Cold
War. The truth is that Europe, out of noble purposes, for a decade has
insidiously eroded its collective national sovereignty in order to craft an
antidemocratic EU, a 80,000-person fuzzy bureaucracy whose executive power
is as militarily weak as it is morally ambiguous in its reliance on often
dubious international accords. This sad realization September 11 brutally
exposed, and we all should cry for the beloved continent that has for the
moment completely lost its moral bearings. Indeed, as the months progressed
the problems inherent in &quot;the European way&quot; became all too apparent:
pretentious utopian manifestos in lieu of military resoluteness, abstract
moralizing to excuse dereliction of concrete ethical responsibility, and
constant American ankle-biting even as Europe lives in a make-believe Shire
while we keep back the forces of Mordor from its picturesque borders, with
only a few brave Frodos and Bilbos tagging along. Nothing has proved more
sobering to Americans than the skepticism of these blinkered European
hobbits after September 11.America learned that &quot;moderate&quot; Arab countries are as dangerous as hostile
Islamic nations. After September 11, being a Saudi, Egyptian, or Kuwaiti
means nothing special to an American Â— at least not proof of being any more
friendly or hostile than having Libyan, Syrian, or Lebanese citizenship.
Indeed, our entire postwar policy of propping up autocracies on the triad of
their anticommunism, oil, and arms purchases Â— like NATO Â— belongs to a
pre-9/11 age of Soviet aggrandizement and petroleum monopolies. Now we learn
that broadcasting state-sponsored hatred of Israel and the United States is
just as deadly to our interests as scud missiles Â— and as likely to come
from friends as enemies. Worst-case scenarios like Iran and Afghanistan
offer more long-term hope than &quot;stable regimes&quot; like the Saudis; governments
that hate us have populations that like us Â— and vice versa; the Saudi royal
family, whom 5,000 American troops protect, and the Mubarak autocracy, which
has snagged billions of American dollars, are as afraid of democratic
reformers as they are Islamic fundamentalists. And with good reason: Islamic
governments in Iran and under the Taliban were as hated by the masses as
Arab secular reformers in exile in the West are praised and championed.The post-9/11 domestic calculus is just as confusing. Generals and the
military brass call civilians who seek the liberation of Iraq &quot;chicken
hawks&quot; and worse. Yet such traditional Vietnam-era invective I think rings
hollow after September 11, and sounds more like McClellan&#x27;s shrillness
against his civilian overseers who precipitously wanted an odious slavery
ended than resonant of Patton&#x27;s audacity in charging after murderous Nazis.
More Americans were destroyed at work in a single day than all those
soldiers killed in enemy action since the evacuation of Vietnam nearly 30
years ago. Indeed, most troops who went through the ghastly inferno of
Vietnam are now in or nearing retirement; and, thank God, there is no
generation of Americans in the present military Â— other than a few thousand
brave veterans of the Gulf, Mogadishu, and Panama Â— who have been in
sustained and deadly shooting with heavy casualties. Because American
soldiers and their equipment are as impressive as our own domestic security
is lax, in this gruesome war it may well be more perilous to work high up in
lower Manhattan, fly regularly on a jumbo jet, or handle mail at the
Pentagon or CIA than be at sea on a sub or destroyer.Real concern for the sanctity of life may hinge on employing rather than
rejecting force, inasmuch as our troops are as deadly and protected abroad
as our women, children, aged, and civilians are impotent and vulnerable at
home. It seems to me a more moral gamble to send hundreds of pilots into
harm&#x27;s way than allow a madman to further his plots to blow up or infect
thousands in high-rises.Politics have been turned upside down. In the old days, cynical
conservatives were forced to hold their noses and to practice a sometimes
repellent Realpolitik. In the age of Russian expansionism, they were loathe
to champion democracy when it might usher in a socialist Trojan Horse whose
belly harbored totalitarians disguised as parliamentarians. Thus they were
so often at loggerheads with naÃ¯ve and idealist leftists.No longer. The end of the specter of a deadly and aggressive Soviet
Communism has revived democratic ideology as a force in diplomacy. Champions
of freedom no longer sigh and back opportunistic rightist thugs who promise
open economics, loot their treasuries, and keep out the Russians. Instead,
even reactionaries are now more likely to push for democratic governments in
the Middle East than are dour and skeptical leftists. The latter, if
multiculturalists, often believe that democracy is a value-neutral Western
construct, not necessarily a universal good; if pacifists, they claim
nonintervention, not justice, as their first priority. The Right, not the
Left, now is the greater proponent of global freedom, liberation, and
idealism Â— with obvious domestic ramifications for any Republican president
astute enough to tap that rich vein of popular support.All this and more are the wages of the disaster of September 11 and the
subsequent terrible year Â— and yet it is likely that, for good or evil, we
will see things even more incredible in the twelve months ahead.
</pre>

## Record 002948

**Label:** `benign`

<pre>

Im feeling a bit farklempt having spent the night at Todais with the
family so talk amongst yourself..here Ill give you a topicThe current state of IT can be thought of in terms of the Cold war with
the US and the UUSR being MS and Sun/IBM/OSS (does it matter which side
is which?), Apple as Cuba and the US legal system as the UN.Discuss.

</pre>

## Record 002949

**Label:** `benign`

<pre>
interim report to gary hickerson for ag trading vince , please find attached the interim report on agricultural commodity trading for gary hickerson . your comments are welcome as we would like to send this to gary as soon as possible . regards , kate ext 3 - 9401
</pre>

## Record 002950

**Label:** `benign`

<pre>
re : central power &amp; light no record here and i was here at that time . he may have done it with janet . daren j farmer 03 / 21 / 2001 01 : 21 pm to : gary w lamphier / hou / ect @ ect cc : aimee lannou / hou / ect @ ect subject : central power &amp; light gary , do you have any record of this ? d - - - - - - - - - - - - - - - - - - - - - - forwarded by daren j farmer / hou / ect on 03 / 21 / 2001 01 : 20 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - aimee lannou 03 / 20 / 2001 01 : 38 pm to : daren j farmer / hou / ect @ ect cc : juliann kemp / enron @ enronxgate , rebecca griffin / na / enron @ enron subject : central power &amp; light daren - was there a deal for 5 . 000 at cp &amp; l on feb . 21 ? cp &amp; l shows 5 . 000 , but i have looked in mops and there is not a deal . can you verify whether or not there was a deal for that day ? thanks . aimee - - - - - - - - - - - - - - - - - - - - - - forwarded by aimee lannou / hou / ect on 03 / 20 / 2001 01 : 39 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - rebecca griffin @ enron 03 / 20 / 2001 01 : 18 pm to : aimee lannou / hou / ect @ ect cc : subject : central power &amp; light aimee , i received a call from cp &amp; l about the february 2001 production invoice . they are showing 5 , 000 mmbtu on february 21 for hpl . we are not showing anything for hpl on that day . could you verify if this is correct ? thanks for your help . rebecca
</pre>

## Record 002951

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8171675,1440/
Date: Not suppliedRings around distant stars betray small rocky planets, say astronomers, 
suggesting a census will soon be possible

</pre>

## Record 002952

**Label:** `benign`

<pre>
sacks , harvey , ( edited by emanuel schegloff ) lectures on conversation january 1995 6 x 9 1520 pages 1-55786 - 705 - 4 paperback $ 59 . 95 this project makes available for the first time the entire corpus of lectures by a writer whose thought and method influenced a generation of sociologists and sociolinguists . originally published as two volumes , this comprehensive single-volume edition contains the complete lectures , beginning with the lectures delivered at ucla , from fall 1964 through spring 1968 . sacks explores a great variety of topics , but two key issues emerge : rules of conversational sequencing , and membership categorization devices . the lectures culminate in the extensive and formal explication of turn-taking delivered in fall 1967 . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com sperber , dan and wilson , deirdre relevance : communication and cognition second edition october 1995 6 x 9 320 pages 0-631 - 19878 - 4 paperback $ 19 . 95 this second edition contains the original text , corrected and with new explanatory notes , and a postface outlining developments in relevance theory since the first edition , discussing the more serious criticisms of the theory , and envisaging possible revisions or extensions . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com scollon , ronald and scollon , suzanne wong ( city polytechnic of hong kong , hong kong ) intercultural communication 1994 6 x 9 301 pages 0-631 - 19489 - 4 paperback $ 22 . 95 0-631 - 19488 - 6 hardcover $ 49 . 95 this volume is both an introduction and practical guide to the main concepts and problems of intercultural communication . viewed from within the framework of interactive sociolinguistics associated with tannen , gumperz , and others , this volume focuses in particular on the discourse of westerners and of asians , the discourse of men and women , corporate discourse and the discourse of professional organizations , and inter-generational discourse . it makes use of research in pragmatics , discourse analysis , organizational communications , social psychology , and the ethnography of communication . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com coulmas , florian ( chuo university , tokyo ) the blackwell encyclopedia of writing systems november 1995 640 pages 0-631 - 19446 - 0 hardcover $ 74 . 95 this book draws on historical and paleographic research into fundamental structural options of representing language by means of a graphic code , on psychological investigation into the social conditions and consequences of literacy . entries vary between short explanations of terms and concepts , brief accounts of individual writing systems and longer theoretical articles . the encyclopedia contains an array of visual examples and is supported by a comprehensive bibliography . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com barton , david ( university of lancaster , uk ) literacy : an introduction to the ecology of written language 1994 6 x 9 264 pages 0-631 - 19091 - 0 paperback $ 21 . 95 0-631 - 19089 - 9 hardcover $ 49 . 95 this is the first general introduction to the new emerging field of literacy studies . it brings recent developments together in a coherent manner , by showing how new research has contributed to our understanding of literacy practices in a range of settings . the book explores the competing definitions of literacy in contemporary society , and examines the theories of language and of learning which underpin new views of literacy . the book is intended as an introduction to literacy studies for the student or general reader . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com vincent , nigel ( university of manchester ) language , linguistics and philology : papers from the philological society anniversary symposium , november 1992 december 1995 0-631 - 19068 - 6 paperback this volume brings together a selection of papers from the 1992 philological society anniversary symposium which explore the connections between linguistic thought in britain and europe in the 19th and 20th centuries and current research . the chapters cover semantics , syntax , morphology and phonology . a particular focus is the reception of european and american ideas within linguistics in britain . blackwell publishers : phone : ( 800 ) 216-2522 fax : ( 802 ) 864-7626 email : blkwell @ world . std . com
</pre>

## Record 002953

**Label:** `benign`

<pre>
fw : lousiana pacific deal # 421598 . 1 traders - after speaking with risk and recognizing many inconsistencies in the way that the following deals were done , i have made the following changes that will affect your books : there will be no deals on the st w hourly books . st nw will show only pge purchase deal # 529161 . 1 ( offset by swap between st nw and lt nw ) . all other deals ( 421598 . 1 , 530654 . 1 , 530653 . 1 , 530690 . 1 , 530716 . 1 , and 530689 . 1 ) have been changed to the lt nw book . i hope this will make things easier . virginia - - - - - original message - - - - - from : thompson , virginia sent : wednesday , august 29 , 2001 11 : 25 am to : swerzbin , mike ; williams iii , bill ; allen , thresa a . cc : scholtes , diana ; dunton , heather ; chang , fran ; law , samantha ; alport , kysa subject : lousiana pacific deal # 421598 . 1 all - per an inquiry from lousiana pacific regarding deal # 421598 . 1 ( lt nw ) : structure : 7 mw around the clock , 100 % load factor . buy back at basis or remarket at a 70 % / 30 % split . february 23 , 2001 : load was taken from 7 mw to 4 mw for he 11 - 24 . deal # 421598 . 1 was reduced from a 7 mw to a 4 mw ( d . scholtes ) . we remarketed the 3 mw &#x27; s real time to wwp deal # 530654 . 1 ( source pge ) . we did not enter a deal to keep lp whole . february 24 , 2001 : load was taken from 7 mw to 4 mw for he 1 - 24 . deal # 421598 . 1 was reduced from a 7 mw to a 4 mw ( d . scholtes ) . we remarketed the 3 mw &#x27; s real time to puget for he 1 - 9 deal # 530689 . 1 and to wwp for he 10 - 24 deal # 530716 . 1 . we did not enter a deal to keep lp whole . august 29 , 2001 : virginia set deal # 421598 . 1 back to 7 mw , keeping sale to lp whole , and entered deal # 754187 . 1 to buy back 3 mw of lp energy at 70 % of the price sold real time . ( 70 % / 30 % split according to agreement with lp ) . vt routed original purchase from pge - deal 529161 . 1 ( st nw ) back to lousiana pacific - deal # 421598 . 1 ( lt nw ) and routed the &quot; buy - back &quot; deal # 754187 . 1 ( st w hourly ) to wwp and to puget ( st w hourly ) . i think that this will properly take care of the dispute and make lousiana pacific happy . please let me know if you have any questions or comments . thanks , virginia
</pre>

## Record 002954

**Label:** `benign`

<pre>
manager coaching program d - - fyi . - - - - - - - - - - - - - - - - - - - - - - forwarded by brenda f herod / hou / ect on 03 / 06 / 2000 09 : 23 am - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; vogelfang , jill &quot; on 03 / 04 / 2000 06 : 13 : 08 pm to : &quot; &#x27; bherod @ enron . com &#x27; &quot; cc : &quot; cousino , lisa &quot; , &quot; dawson , dwight &quot; subject : manager coaching program brenda : i want to let you know that we have had a change on our coaching staff and that dwight dawson will continue the coaching work with daren farmer . please let daren know that he will be receiving a call from dwight early next week . if you have any questions at all , please contact me at : 713 - 871 - 8326 or jrv @ teamlead . com take care jill
</pre>

## Record 002955

**Label:** `benign`

<pre>
On Fri, 26 Jul 2002, Ian Andrew Bell wrote:--]Being smart, for example, has made Stephen Hawking famous and
--]respected, but he&#x27;s not particularly rich.Bang, you fell right into the trap of Sematic Siezerdom.RICH is a word of many contexts. You can be RICh in wealth, ie raw money,
you can be Rich in Wisdom, ala Hawkins, You can be rich with freinds, you
can be Rich in emotions........--]all accounts a complete moron.  In fact, spend a weekend in Beverly
--]Hills and you will encounter vast numbers of people who are
--]profoundly stupid driving Rolls Royces and shopping at PRADA.MOney Rich versus Mental Rich....Equality amongst differnt grains...Why do
folks still fall into this trap?--]The working class IS the market and the working class IS where
--]wealth is created.In the current ecomony Wealth is created only in TRANPORT of wealth, that
is in moving the micro welath of the masses to to macro wealth of the few.100 million people making phone calls a day that net you 1$ per call makes
you a 100millionaire per day (minus operating expenses (real costs of
physical value as well as the less physical value of lubricant (taxes,
bribes, payoffs, kickbacks)etc)--]And the people draining the hot tub are the folks in the ruling
--]class -- people like Ken Lay, Dick Cheney, Bernie Ebbers, et al --They were put into the rulign cvlass by the mass consess that THEY are
amrt fellas who can make us feel good about giveing them the power to tell
us how to live our lives (and thus how to feel about ourselves,how to
value our worth, how to feel good about being etc etc etc)--]So, is the lower caste necessarily stupid for saving money or
--]investing in retirement plans?  I don&#x27;t think so.  Are they stupid
--]for buying clothes and automobiles?  I don&#x27;t think so.They are STUPID in allowing, heck forcing, the few to stand guard over the
many and then pay for the service of being servants to them.--]At the granular level, the notion that &quot;most rich people are rich
--]because they&#x27;re smart&quot; is so anecdotal and naive that it&#x27;s not
--]worth arguing about, so I won&#x27;t.  Still, a compelling point worth
--]some clarification.
At the grainular level it is simply that Those who can con enough folks
into giving up thier Choices to a governing body (usualy one they will
control) wind up with the most concentration of Wealth (money) and
Power(over others)Basicaly we have gone back to being serfs, only we demand nicer hovels.
WE demand to have paid for a ruling class lord over us, protect us and
bascialy  build the castle walls stronger to protect us from all enemys of
the  status quo both forgien and domestic.If the constitution were allowed to go up for a vite of confiendnce todayI
bet it would fall down and go boom.. Too much freedom, too many ways that
the INdividual is called on to be thier own guardian...too many demands on
the fraility of human nature...much better to errect protectors, let them
sort it all out, and tell us what we need to do to be happy.
Smart in todays society is having enough Welath, Charm, Will, Power,
Knowing etc to Do What You Want.Stupid is living under others rules.
(to the stupid the smart are &quot;stupid&quot; &quot;look at them, wasting all thier
time  on that tomfollery&quot; &quot;lords a goshen, aint they the queer ones&quot;
&quot;would you  look at that, some folks just dont have the sense to fit in&quot;)
The words Smart and Atupid are the wrong ones here... Lets change them toIndviduals  and Sheepleyea that works better for me.
tomhttp://xent.com/mailman/listinfo/fork

</pre>

## Record 002956

**Label:** `benign`

<pre>
98 - 0432 can you please extend sitara deal # 156657 for 3 / 1 / 00 , if the deal will allow ? it was transported on the 215 k , which was the only one out there for 2 / 00 . it spilled over into march on day 1 for . 423 dec . thanks - jackie - 3 - 9497
</pre>

## Record 002957

**Label:** `benign`

<pre>
lat . amer . indian lit . symposium call for papers 12th international symposium on latin american indian literatures 19-23 june 1995 universidad nacional autonoma de mexico , mexico city topics / presentation time the development of topics may be from the perspective of anthropology , art , astronomy , architecture , bibliography , codices , history , ethnohistory , indigenista literature , linguistics , literary studies , medicine , religion , rock art , etc . , and must be clearly and directly related to indigenous literatures . delivery time shall be 30 minutes followed by 10 minutes for questions . abstracts / deadline to be considered , four copies ( typewritten , double spaced ) of a 150-200 word abstract in english or spanish should be sent to : monica barnes , program chair , 377 rector place , apt . 11j , new york , ny 10280 . please include your name , complete address , phone number , and fax ( if you have one ) on the abstract . 1995 dues of $ 25 . 00 ( $ 5 . 00 for students or retirees ) must be paid to laila / alila or accompany the abstract along with the symposium fee of $ 45 . 00 ( $ 12 . 00 for students or retirees ) . ( if this presents difficulties , contact the program chair . ) please make check payable to laila / alila . the absolute deadline for the receipt of abstracts is jan . 31 , 1995 . since many individuals must have confirmation at an earlier date in order to secure funding from their institutions , each abstract will be evaluated by referees and notification will be mailed to the submitter within six weeks after receipt . excursions : 16-18 june 1995 to teotihuacan , cacaxtla , tlaxcala , and museums in mexico city . publication of selected symposium papers papers will be evaluated by three referees and chosen for quality and development of the topic . for information about laila / alila membership , contact dr . mary h . preuss president , laila / alila the pennsylvania state university , mckeesport university drive mckeesport , pa 15132-7698 e - mail contact : ron anderson united states international university san diego , ca 92131 randerso @ sanac . usiu . edu
</pre>

## Record 002958

**Label:** `benign`

<pre>
offsite it was a great event all around . the accommodations could not have been nicer , the structure was very conducive for making and / or growing relationships and the business meetings were most informative and stimulating . thanks for hosting the event and for your leadership ! sincerely , ed
</pre>

## Record 002959

**Label:** `benign`

<pre>

&quot;Yes, and Eliza and I composed a precocious critique of the Constitution
of the United States of America, too. We argued that it was as good a
scheme for misery as any, since its success in keeping the common people
reasonably happy and proud depended on the strength of the people
themselves - and yet it described no practical machinery which would tend
to make the people, as opposed to their elected representatives, strong.
    We said it was possible that the framers of the Constitution were
blind to the beauty of persons who were without great wealth or powerful
friends or public office, but who were nonetheless genuinely strong.
    We thought it was more likely, though, that the framers had not
noticed that it was natural, and therefore almost inevitable, that human
beings in extraordinary and enduring situations should think of themselves
as composing new families. Eliza and I pointed out that this happened no
less in democracies than in tyrannies, since human beings were the same
the wide world over, and civilized only yesterday.
    Elected representatives, hence, could be expected to become members of
the famous and powerful family of elected representatives - which would,
perfectly naturally, make them wary and squeamish and stingy with respect
to all the other sorts of families which, again, perfectly naturally,
subdivided mankind.
    Eliza and I, thinking as halves of a single genius, proposed that the
Constitution be amended so as to guarantee that every citizen, no matter
how humble or crazy or incompetent or deformed, somehow be given
membership in some family as covertly xenophobic and crafty as the one
their public servants formed.
    Good for Eliza and me!
    Hi ho.&quot;Kurt V
Slapstick
http://xent.com/mailman/listinfo/fork

</pre>

## Record 002960

**Label:** `benign`

<pre>
cash 11 / 27 please keep confidential
</pre>

## Record 002961

**Label:** `benign`

<pre>
spring basketball tournament - - - - - - - - - - - - - - - - - - - - - - forwarded by jamie lynn / et &amp; s / enron on 05 / 03 / 2000 03 : 33 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - jamie lynn 05 / 03 / 2000 02 : 06 pm to : oliver brown / enron _ development @ enron _ development , martin rosetta / enron _ development @ enron _ development , pam newsome / enron _ development @ enron _ development , ryan woods / enron _ development @ enron _ development , mike layne / enron _ development @ enron _ development , fred salinas / enron _ development @ enron _ development , sean long / enron _ development @ enron _ development , kevin ruffcorn / enron _ development @ enron _ development , keith sparks / enron _ development @ enron _ development , aaron mackey / enron _ development @ enron _ development , braedi craig / enron communications @ enron communications , jennifer mcclain / enron communications @ enron communications , john garrett / corp / enron @ enron , darrell schoolcraft / et &amp; s / enron @ enron , stanley horton / corp / enron @ enron , pamela carter / et &amp; s / enron @ enron , brandon whittaker / enron _ development @ enron _ development , chris williams / enron @ gateway , johnny mitchell / et &amp; s / enron @ enron , mike bryant / ots / enron @ enron , rick buy / hou / ect @ ect , bjorn hagelmann / hou / ect @ ect , tom moran / hou / ect @ ect , patrick hickey / enron communications @ enron communications , brant reves / hou / ect @ ect , samantha t davidson / hou / ect @ ect , tangie dykes / et &amp; s / enron @ enron , tara e turk / hou / ect @ ect , dan leff / hou / ees @ ees , mark pratorius / hou / ees @ ees , brad peden / hou / ees @ ees , david blankenship / corp / enron @ enron , milton brown / hr / corp / enron @ enron , ken reeves / hou / ect @ ect , rory juneman / corp / enron @ enron , fred bridgewater / enron _ development @ enron _ development , sandy roberts / corp / enron @ enron , derek anderson / hou / ect @ ect , david o &#x27; dell / hr / corp / enron @ enron cc : ( bcc : jamie lynn / et &amp; s / enron ) subject : spring basketball tournament enron is having a basketball tournament on a may 13 th and you are invited to participate ! on saturday , may 13 th , beginning at 9 : 00 a . m . , the enron basketball association will be sponsoring our spring 2000 basketball tournament for all e . b . a . members . we are planning to limit the size of this tournament to the first eight teams that reply . while we encourage you to form your own teams , please let us know if you do not have enough players and we will make sure that you are placed on a team . we will be having a captain &#x27; s meeting on tuesday , may 9 th , to discuss the rules , prizes , and other details related to the tournament preparation . please have a representative from your team come to this meeting prepared with rosters , a team name , and shirt sizes . lunch will be provided . if you are interested in placing a team in the tournament , or enter as an individual , please contact one of the following by monday , may 8 th . jamie lynn ext . 3 - 9515 rick dietz ext . 3 - 5691 steve kleb ext . 3 - 3959 if you have any questions , please give any of us a call .
</pre>

## Record 002962

**Label:** `benign`

<pre>
start date : 12 / 21 / 01 ; hourahead hour : 7 ; start date : 12 / 21 / 01 ; hourahead hour : 7 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001122107 . txt
</pre>

## Record 002963

**Label:** `benign`

<pre>
ferc meeting this morning - order on el paso capacity allocation fyi , kim . - - - - - - - - - - - - - - - - - - - - - - forwarded by kimberly watson / et &amp; s / enron on 10 / 25 / 2000 09 : 38 am - - - - - - - - - - - - - - - - - - - - - - - - - - - shelley corman 10 / 25 / 2000 09 : 28 am to : tim aron / et &amp; s / enron @ enron , nancy bagot / ots / enron @ enron , john ballentine / fgt / enron @ enron , theresa branney / et &amp; s / enron @ enron , martha benner / et &amp; s / enron @ enron , eric benson / et &amp; s / enron @ enron , donna bily / enron _ development @ enron _ development , lynn blair / et &amp; s / enron @ enron , jack boatman / fgt / enron @ enron , rob bradley / corp / enron @ enron , bob chandler / et &amp; s / enron @ enron , bill cordes / et &amp; s / enron @ enron , shelley corman / et &amp; s / enron @ enron , christi culwell / fgt / enron @ enron , mary darveaux / et &amp; s / enron @ enron , rick dietz / et &amp; s / enron @ enron , dari dornan / et &amp; s / enron @ enron , john dushinske / et &amp; s / enron @ enron , sharon farrell / fgt / enron @ enron , drew fossum / et &amp; s / enron @ enron , john goodpasture / ots / enron @ enron , mary hain / hou / ect @ ect , steven harris / et &amp; s / enron @ enron , joe hartsoe / corp / enron @ enron , glen hass / et &amp; s / enron @ enron , robert hayes / fgt / enron @ enron , rod hayslett / fgt / enron @ enron , bambi heckerman / npng / enron @ enron , theresa hess / et &amp; s / enron @ enron , robert hill / npng / enron @ enron , staci holtzman / fgt / enron @ enron , tamara hopkins / et &amp; s / enron @ enron , stanley horton / corp / enron @ enron , steve hotte / corp / enron @ enron , lee huber / et &amp; s / enron @ enron , martha janousek / et &amp; s / enron @ enron , steven january / et &amp; s / enron @ enron , beth jensen / npng / enron @ enron , anne jolibois / fgt / enron @ enron , steven j kean / na / enron @ enron , jeffrey keeler / corp / enron @ enron , robert kilmer / fgt / enron @ enron , frazier king / fgt / enron @ enron , steve kirk / et &amp; s / enron @ enron , tim kissner / et &amp; s / enron @ enron , laura lantefield / et &amp; s / enron @ enron , linda l lawrence / na / enron @ enron , blair lichtenwalter / fgt / enron @ enron , elizabeth linnell / na / enron @ enron , teb lokey / fgt / enron @ enron , phil lowry / ots / enron @ enron , susan j mara / sfo / ees @ ees , donna martens / et &amp; s / enron @ enron , dorothy mccoppin / fgt / enron @ enron , mike mcgowan / et &amp; s / enron @ enron , rockford meyer / fgt / enron @ enron , mary kay miller / et &amp; s / enron @ enron , michael moran / et &amp; s / enron @ enron , sheila nacey / et &amp; s / enron @ enron , michel nelson / et &amp; s / enron @ enron , ray neppl / npng / enron @ enron , robert neustaedter / enron _ development @ enron _ development , christi l nicolay / hou / ect @ ect , sarah novosel / corp / enron @ enron , ranelle paladino / et &amp; s / enron @ enron , zelda paschal / fgt / enron @ enron , geneva patterson / npng / enron @ enron , maria pavlou / et &amp; s / enron @ enron , eileen peebles / et &amp; s / enron @ enron , keith petersen / et &amp; s / enron @ enron , peggy phillips / fgt / enron @ enron , janet place / npng / enron @ enron , tony pryor / et &amp; s / enron @ enron , colleen raker / et &amp; s / enron @ enron , kathy ringblom / et &amp; s / enron @ enron , cynthia sandherr / corp / enron @ enron , james saunders / fgt / enron @ enron , dave schafer / na / enron @ enron , donna scott / fgt / enron @ enron , susan scott / et &amp; s / enron @ enron , richard shapiro / na / enron @ enron , mike g smith / na / enron @ enron , louis soldano / et &amp; s / enron @ enron , lon stanton / et &amp; s / enron @ enron , james d steffes / na / enron @ enron , james studebaker / fgt / enron @ enron , jim talcott / et &amp; s / enron @ enron , gina taylor / ots / enron @ enron , debbie thompson / fgt / enron @ enron , denis tu / fgt / enron @ enron , michael van norden / corp / enron @ enron , stephen veatch / fgt / enron @ enron , donald vignaroli / et &amp; s / enron @ enron , jody warner / npng / enron @ enron , kimberly watson / et &amp; s / enron @ enron , julia white / et &amp; s / enron @ enron , kim wilkie / et &amp; s / enron @ enron , jane wilson , michele winckowski / et &amp; s / enron @ enron cc : subject : ferc meeting this morning - order on el paso capacity allocation chairman hoecker announced that ferc will hold a special meeting nov . 1 to issue a proposed order detailing possible remedies to the california wholesale market based on two investigations currently underway . only one item was discussed - an order resolving the amoco complaint over el paso &#x27; s capacity allocation . in the order , the commission finds that el paso &#x27; s allocation of delivery point capacity at topock is unjust &amp; unreasonable . the commission directs el paso to assign primary point rights to its shippers using a one - time assignment process outlined in the order . if elections for primary point capacity exceed available space , el paso will pro rate the space and allow shippers to select other primary points in an iterative fashion until all shippers have primary point rights equal to their firm capacity rights . chairman hoecker said this case illustrates the fact that overbooking pipeline capacity is even more problematic that the overbooking of airline capacity .
</pre>

## Record 002964

**Label:** `benign`

<pre>
can we discuss risk offsite on wednesday ? is there anything i can do from here ?
</pre>

## Record 002965

**Label:** `benign`

<pre>
2nd announcement isb2 2nd international symposium on bilingualism 14-17 april , 1999 university of newcastle upon tyne , uk keynote speakers michael clyne ( monash ) francois grosjean ( neuchatel ) monica heller ( oise , toronto ) carol myers scotton ( south carolina ) colloquia 1 . cross - linguistic studies of language acquisition ( marilyn m . vihman : m . vihman @ bangor . ac . uk and ginny mueller gathercole : v . c . gathercole @ bangor . ac . uk ) 2 . bilingual cognitive processing ( david green : ucjtdg @ ucl . ac . uk ) 3 . input in bilingual acquisition ( annick de houwer : vhouwer @ uia . ua . ac . be and elizabeth lanza : elizabeth . lanza @ ilf . uio . no ) 4 . neurolinguistics and acquired communication disorders in bilinguals ( franco fabbro and nick miller : nicholas . miller @ ncl . ac . uk ) 5 . sign bilingualism ( clare gallaway : gallaway @ fs1 . ed . man . ac . uk ) 6 . grammar and codeswitching ( jeanine treffers - daller : j-treffersdaller @ wpg . uwe . ac . uk , ad backus : backus @ ling . ucsd . edu and jacomine nortier : jacomine . nortier @ let . ruu . nl ) 7 . sociolinguistics of bilingual interaction ( ben rampton : ben . rampton @ tvu . ac . uk , mukul saxena : m . saxena @ ucrysj . ac . uk and li wei : li . wei @ ncl . ac . uk ) 8 . trilingualism and trilinguals ( charlotte hoffman : c . hoffman @ mod . lang . salford . ac . uk ) round - table bilingualism and communication disorders : implications for speech &amp; language therapy ( chair : deirdre martin : martinm @ edusrv1 . bham . ac . uk ) invitation to participants submissions are invited for oral or poster presentations , on all aspects of bilingualism . papers which are based on empirical research and which seek to forge new links between established fields ( e . g . linguistics , psychology , speech &amp; language pathology , sociology , and education ) or to develop new sub-fields are particularly welcome . contributors to the colloquia and round-table should contact the organisers informally as indicated above . all submissions will be peer-reviewed , anonymously , and selected on the grounds of originality , clarity , and significance of findings and conclusions . submission of abstracts each submission should include : 1 ) a cover sheet containing ( a ) the author ( s ) name ( s ) ; ( b ) address ( including telephone number , e-mail and fax , if available ) ; ( c ) affiliation ; ( d ) the title of the presentation ; ( e ) the category of the submission ( oral presentation at parallel session or poster presentation ) ; and ( f ) equipment required for presentation ; and 2 ) three copies of an abstract of no more than 500 words . only hard-copies are considered ( no e-mails pleases ) . abstracts should be sent , by 31 august , 1998 , to : mrs gillian cavagan , isb organising committee , department of speech , university of newcastle upon tyne , ne1 7ru , uk , fax : + 44 ( 0 ) 191 222 6518 , from whom further details may also be obatined ( e - mail : gillian . cavagan @ newcastle . ac . uk ) . important dates : 31 january , 1998 : 2nd announcement 30 august , 1998 : deadline for submission of abstract 31 october , 1998 : notice of acceptance 1 january , 1999 : closing date for registration preparations for presentation each oral presentation should not exceed 20 minutes . it will be followed by 5 minutes discussion . while we cannot predict the size of the audience in parallel sessions at this stage , you are asked to prepare at least 50 copies of any materials you wish to hand out in support of your presentation . audio - visual materials will need to be suitable for use in a large lecture theatre . ohp will be available in all rooms . other equipment can be arranged by advanced written request . video tapes should be in pal system . we may ask some of the presenters to submit a full written copy of their paper in advance for sign language translation . instructions on poster presentation will be sent to you at a later date .
</pre>

## Record 002966

**Label:** `benign`

<pre>
reminder ~ alexis de tocqueville breakfast reminder ! the alexis de tocqueville breakfast is just a few days away . please rsvp if you have not already done so . date : tuesday , july 31 time : 7 : 30 - 9 : 00 a . m . location : the center for the retarded , 3550 w . dallas , between waugh dr . and shepherd rsvp : please call or e - mail zulie flores , ext . 3 - 3908 transportation : a bus will depart from the andrews st . side of the enron building at 7 : 20 a . m . please let zulie know if you plan to take the bus . if you prefer to drive , directions to the center are below . leadership campaign enron &#x27; s leadership campaign kicked - off on july 23 and is well underway . as you know , participation by enron &#x27; s executive team is vital to the success of the campaign . to make your contribution , please click on http : / / cr . enron . com / unitedway . thank you for making a difference . we look forward to seeing you next week ! please call kathy mayfield at ext . 3 - 3264 if you have any questions . directions to the center for the retarded , 3550 w . dallas , between waugh dr . and shepherd : from the enron building ? take w . dallas and turn right on marston st . ? follow the signs to parking or you can ? ? take allen parkway from downtown ? turn left on tirrell st . ? turn right on w . dallas ? from w . dallas , turn right on marston st . , which is the entrance to the center ? follow the signs to parking from the galleria area ? take 610 north to the woodway / memorial exit ? exit and turn right on woodway ? woodway turns into memorial - take memorial to the shepherd exit ? exit and turn right on shepherd ? make a left on to allen parkway at the light ? turn right on tirrell st . ? take a right on w . dallas , and then turn right on marston st . , which is the entrance to the center ? follow the signs to parking from north of downtown ? take 45 or 59 south to i - 10 . go west on i - 10 ? take the shepherd / durham exit ? take a left ( south ) on shepherd ? take shepherd to the light at allen parkway / kirby ? make a left on to allen parkway at the light ? turn right on tirrell st . ? take a right on w . dallas , and then turn right on marston st . , which is the entrance to the center ? follow the signs to parking
</pre>

## Record 002967

**Label:** `benign`

<pre>
revised devon and co - owner availabilities for september fyi . . . . . . . . . . . . . . . . . . . . . . beverly - - - - - - - - - - - - - - - - - - - - - - forwarded by beverly beaty / hou / ect on 08 / 30 / 2000 08 : 10 am - - - - - - - - - - - - - - - - - - - - - - - - - - - enron capital &amp; trade resources corp . from : &quot; steve holmes &quot; 08 / 29 / 2000 03 : 57 pm to : cc : subject : revised devon and co - owner availabilities for september beverly , the co - owner volumes have been updated to show a volume for comet petroleum and james d . finley under burnell n . pettus . additionally , devon &#x27; s volume under burnell / n . pettus has also increased slightly . steve - 0900 co - owners volumes to enron . xls - enronavailso 900 revo 2 . xls
</pre>

## Record 002968

**Label:** `benign`

<pre>
learning through language in early childhood painter , clare ( university of new south wales ) ; learning through language in early childhood ; published by cassell as part of the open linguistics series ; hb . : 0 304 70056 8 ; us $ 69 . 95 / 45 . 00 language is a child &#x27;s major tool for learning about the world . through the everyday , taken-for - granted interactions of everyday conversation , a child not only learns the mother tongue , but uses it as a resource for thinking and reasoning . this book presents a rich naturalistic case study of one childs use of language in the pre-school years from two-and - a-half to five , drawing on systemic functional theory to argue that cognitive development is essentially a linguistic process and offering a new description and interpretation of linguistic and cognitive developments during this period . the case study examines the child &#x27;s changing language in terms of its role in interpreting four key domains of experience - - the world of things , the world of events , the world of semiosis ( including the inner world of cognition ) and the construal of cause and effect . it shows how new linguistic possibilities constitute developments in cognitive resources and prepare the child for later learning in school . available for review . email : sales @ cassellexport . demon . co . uk
</pre>

## Record 002969

**Label:** `benign`

<pre>
second call for papers optionality workshop , utrecht please post - second call for papers - second call for papers - the research institute for language and speech ( ots ) , utrecht university , organizes a . . . . . workshop on optionality to be held on september 1 - 2 , 1995 . keynote speakers : jane grimshaw ( rutgers ) tony kroch ( penn ) tanya reinhart ( tel aviv / utrecht ) edwin williams ( princeton ) given a general notion of economy , free word order as well as other optional phenomena are problematic in current linguistic theory . nevertheless , optionality is widely attested in natural language , not only synchronically , but also diachronically and in language acquisition . we would therefore like to invite papers that deal with the theoretical problem of optionality from either of these perspectives . in addition to 4 ( invited ) keynote talks , we have 12 slots for 35 min . papers . please send 5 copies of an anonymous two-page abstract , one camera-ready version and a 3x5 &quot; card with name ( s ) of author ( s ) , title of paper , affiliation , phone number and e-mail address to : workshop on optionality , research institute for language and speech ( ots ) , utrecht university , trans 10 , 3512 jk utrecht , netherlands . we hope to be able to ( partially ) reimburse speakers . the deadline for submissions is may 1 , 1995 . submissions by e-mail or fax will not be accepted . for a more detailed description of the topic of the workshop , please contact neeleman @ let . ruu . nl or weerman @ let . ruu . nl .
</pre>

## Record 002970

**Label:** `benign`

<pre>
On Thu, 1 Aug 2002, CDale wrote:--]Leave it to Tom to put the one w/ his son&#x27;s wanker in the center.Heck, why hide perfection:)- No bias here, nope none whatsoever.Ill have to snap another nudie of him in a few days to show off his
bodymodification (snip snip circ circ). I even had an empty chair
present:)--tomhttp://xent.com/mailman/listinfo/fork

</pre>

## Record 002971

**Label:** `benign`

<pre>
http://news.bbc.co.uk/1/hi/world/europe/2541827.stmWednesday, 4 December, 2002, 08:52 GMT
Bomber targets Dutch Ikea storesPolice in the Netherlands are searching all 10 outlets of the Ikea furniture
chain in the country, after finding bombs in two stores.
The devices were discovered in Amsterdam and Sliedrecht, near the port city
of Rotterdam on Tuesday evening.
The Sliedrecht bomb exploded at a police station, injuring two policeman.
Police have also closed off a motorway section in the central city Utrecht,
near a third IKEA store where a suspicious package was found.
No information about the motive behind the attacks has been released.
&quot;We decided together with the police because of safety reasons that the
company&#x27;s stores in the Netherlands would be closed today,&quot; said Ikea
spokeswoman Helen van Trearum.
&quot;We don&#x27;t want to take any risks. We are taking this very seriously,&quot; she
added.
Ikea - a Swedish-based group - is one of the world&#x27;s largest furniture
retailers, with stores in more than 30 countries.
Meanwhile, the Amsterdam head office of the Dutch news agency ANP was
evacuated on Wednesday, after police warned that a bomb might have been
planted in the building.To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002972

**Label:** `benign`

<pre>
lavorato family we were dealing with mr lavorato prior to yourself and we understand that john was expecting at that time . we have not heard from john for a while now and we hope that the lavoratos are doing fine . regards kenny
</pre>

## Record 002973

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85505975
Date: Not supplied[IMG: http://www.craphound.com/images/electricball.jpg] Stefan sez: &quot;My 
brother&#x27;s friend Sue plays with high voltage. The linked-to page shows the 
gadget she used to photograph high voltage discharges in *water*.&quot; Link[1] 
Discuss[2] (_Thanks, Stefan!_) 
[1] http://community.webshots.com/album/8426665GzkjEytinE
[2] http://www.quicktopic.com/boing/H/uzUstBTSpq7K

</pre>

## Record 002974

**Label:** `benign`

<pre>
re : 5 . 1414 native speaker intuitions i would like to make a few comments on marilyn silva &#x27;s questions about control structures like ( 1 ) johnny asked the teacher to go to the bathroom . ( 2 ) johnny asked to go to the movies . which , at least for some native speakers , are acceptable and allow an interpretation with the matrix subject as the controller . i believe that the interpetation of these sentences is fully explainable in terms of speech act semantics ( no syntax needed here ) . first , it is clear that the person asked is a potential agent and that in the &quot; unmarked &quot; case the empty subject is also supposed to an agent supposed to perform some future action specified by the verb phrase on the infinitive clause . therefore , the first option is object control . in the case of ( 1 ) this preferential interpretation is overridden by other pragmatic factors , such as the relative social status of the participants ( student vs . teacher ) . it is relatively unlikely ( though not excluded ) that the student will ask the teacher to do something . therefore , it is seems reasonable to look for an alternative intepretation . in the case of &#x27; ask &#x27; = a reasonable antecedent of the understood subject is the the potential beneficiary of the request , i . e . the asker . the asker benefits from the potential action performed by the addressee of the request . johnny could certainly categorized as being the beneficiary of the situation &quot; going to the bathroom &quot; . thus it seems plausible to referentially link the empty subject of = the infinitive complement . similarly , for a sentence like ( 3 ) john asked paula to be assigned for the task . which seems to involve control switch , i . e . switch from object control to subject control . in this case the passive construction overtly signals that the empty subject cannot be an agent . therefore , it &#x27;s implausible to assume coreference between the empty subject and the matrix object . but both john and the empty subject are potential beneficiaries . well , not beneficiaries not in the sense of case grammar or theta-role theory but in the sense of speech act semantics . what seems to at work here is a principle of &quot; role identity &quot; , which has been worked out in some more detail in a recent article written by klaus - michael koepcke and myself in folia linguistica 27 . 57-105 . ( &quot; a cognitive approach to obligatory control phenomena in english and german &quot; ) . roles are not understood there in the sense of case grammar but as &quot; pragmatic roles &quot; . we also point out some interesting differences = between control in english and german , for example , that sentences like ( 4 ) der polizist bat , den saal zu verlassen . ( literally : the policeman asked to leave the room ) can only be interpeted as involving an &quot; implicit controller &quot; , i . e . an addresse or a set of addressees , which is not lexicalized . related issues are also discussed in my recent book &quot; kontrollph = e4nomene im englischen und deutschen aus semantisch-pragmatischer perspektive &quot; published by gunter narr verlag , tuebingen . by the way , koepcke and i found that native speaker &#x27;s intuitions in these matters are really very unreliable and that linguists should think of more serious ways of testing what is possible in a language and what is not . klaus panther , university of hamburg , germany
</pre>

## Record 002975

**Label:** `benign`

<pre>
hello!
well in my eyes something like a public contrib repository would be nice (where everyone can at least upload spec files) and a something like a &quot;repository directory&quot; with a collection of available repositorys and their content.i am personally on a dsl dialup connection with 16kb/s upstream cap and that kinda sucks perhaps i am gonna still create a respository for small windowmaker dockapps in the future :).what do you think?thanks,
che_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002976

**Label:** `benign`

<pre>
public affairs organizational announcement i am pleased to announce the following changes in the government and regulatory affairs organization : rick shapiro  ) managing director of government affairs for the americas . rick is currently leading the government and regulatory affairs teams for the us and canada . he will now assume responsibility for north and south america . ricardo charvel ( senior director of government affairs for mexico ) , jose bestard ( vice president of government affairs for south america ) , and joe hillings ( vice president of federal government affairs ) will now report to rick . rick and his team will support enron  , s north american business units as well as the caribbean and southern cone regions . mark schroeder  ) vice president government affairs for europe , asia and africa . mark is currently leading the government and regulatory affairs teams for enron europe . he will now assume the additional responsibility of supporting the apachi and india organizations . jane wilson will now focus her attention on enron india and will report to mark as will our government and regulatory affairs teams serving the apachi region . mike terraso  ) vice president environment , health &amp; safety and chief environmental officer . mike is currently serving as vice president of environment , health and safety for the gas pipeline group . mike has increasingly become involved in environmental issues facing enron  , s businesses around the world . mike will retain his current responsibilities and will assume leadership of the environmental affairs team . john hardy  ) vice president global project finance . john will report directly to me and will continue his current responsibilities representing enron before us and multilateral project finance agencies . please join in me in congratulating these individuals on their responsibilities . attached is a revised organization chart reflecting these changes . attachment :
</pre>

## Record 002977

**Label:** `benign`

<pre>
dinner speaker - may 23 vince : michael crew would like you to be a speaker on wednesday , may 23 rd instead of the 24 th at the rutgers conference . is this ok ? he is preparing the agenda and needs to know as soon as possible . shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 03 / 21 / 2001 02 : 31 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; michael a . crew &quot; on 03 / 21 / 2001 10 : 07 : 52 am to : shirley . crenshaw @ enron . com cc : vkamins @ enron . com , crri @ andromeda . rutgers . edu , kleindorfer @ wharton . upenn . edu subject : dinner speaker - may 23 shirley , this is to follow up today &#x27; s conversation with anita . as mentioned paul kleindorfer invited vince to be our dinner speaker on thursday , may 24 . on reflection given the strong line up for wednesday - fred kahn et al - we would very much like vince to be the speaker on wednesday . this will conclude the day very well giving participants a strong incentive to be there for the wednesday . i gather that this change should be acceptable to vince . we will show vince &#x27; s name as follows : wincety j . kaminski managing director - research enron jeremy will be em ailing you the program with this information immediately . we would like to go to press today . failing that we can go to press tomorrow . we would very much appreciate your confirming this and making any corrections or changes . if you would respond to all of us it would be appreciated . michael michael a . crew professor ii director - center for research in regulated industries editor - journal of regulatory economics rutgers university , graduate school of management 180 university avenue newark , n . j . 07102 - 1897 phone : 973 353 5049 fax : 973 353 1348 http : / / www - rci . rutgers . edu / ~ crri
</pre>

## Record 002978

**Label:** `benign`

<pre>
invitation for you from rice university : the national forum on corporate finance mark , i left you a message regarding the national forum on corporate finance at rice . they would be delighted if you could serve as a panel member at this conference . here are the coordinates of the professor at rice who is in charge . i would appreciate if you could call him and let him know if you can attend . thanks . vince prof . david ikenberry jones graduate school of management rice university 713 - 348 - 5385
</pre>

## Record 002979

**Label:** `benign`

<pre>
joao neves vince , i wanted to follow up with you to see if you had an opportunity to review joao neves &#x27; resume , which i sent ? you last wednesday , and to get your feedback on him . ? please ? let me know if you are interested in ? setting up an interview . ? also , i will be in houston the afternoon of ? friday , 4 / 13 , and would welcome the opportunity to meet with you in person , if your schedule allows . ? ? i look forward to hearing from you . ? regards , ? kate szablya power brokers , llc energy search and recruitment 303 - 716 - 2987 303 - 619 - 7589 cell 303 - 716 - 3426 fax kate @ powerbrokersllc . com www . powerbrokersllc . com ? ?
</pre>

## Record 002980

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; On Wed, 9 Oct 2002, &quot;Jason&quot; == Jason Rennie wrote:  Jason&gt; My sysadmins have told me that the sending mail client
  Jason&gt; is supposed to escape lines begining with &quot;From &quot;.Your sysadmins are wrong.Whatever program that is used to store the mail into the 
braindead &quot;mailbox&quot; file (/var/spool/mail/whatever) is supposed 
to escape a line that begins with From.  That program is called 
the local Mail Delivery Agent (MDA)It would be better if you never, ever, stored your mail in a 
&quot;mailbox&quot; file.If your sysadmins are capable of it, get them to set up the 
receiving Mail Transfer Agent (MTA) to allow the use of procmail 
as the local MDA.  Then use procmail to invoke rcvstore and 
deliver your mail directly into your MH mail folders.Most Linux systems come configured this way, if a user has a
$HOME/.procmail file then mail is delivered using procmail.
--Hal
_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 002981

**Label:** `benign`

<pre>
new pc with two 128 mb of ram shirley , is this an upgrade for maureen ? vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 12 / 18 / 2000 03 : 58 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : felix buitron jr . / enron @ enronxgate on 12 / 18 / 2000 02 : 27 pm to : vince j kaminski / hou / ect @ ect cc : shirley crenshaw / hou / ect @ ect subject : new pc with two 128 mb of ram vince , i have your new pc . i will get with you when i &#x27; m done to schedule a delivery time . i will need your network and notes password to test your apps . thanks , felix
</pre>

## Record 002982

**Label:** `benign`

<pre>
start date : 12 / 30 / 01 ; hourahead hour : 9 ; start date : 12 / 30 / 01 ; hourahead hour : 9 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001123009 . txt # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number .
</pre>

## Record 002983

**Label:** `benign`

<pre>
fw : september gas flows fyi , kim . - - - - - original message - - - - - from : hartfield , rita sent : friday , september 28 , 2001 2 : 25 pm to : alamo , joseph ; allegretti , daniel ; allen , joe ; alvarez , ramon ; arefieva , maria ; barnes , lynnette ; bellas , kirsten ; benson , eric ; binns , darran ; boatman , jack ; bolton , scott ; boston , jerry ; boston , roy ; bradley , rob ; briggs , tom ; buerger , rubena ; cady , rachel ; canovas , guillermo ; cantrell , rebecca w . ; comnes , alan ; cooney , carolyn ; cordes , bill ; corman , shelley ; dasovich , jeff ; decker , larry ; dernehl , ginger ; donoho , lindy ; dowd , stephen ; dressler , jean ; farrell , sharon ; floris , vinio ; frank , robert ; fromer , howard ; fulton , donna ; gomez , julie a . ; gottfredson , bryan ; guerrero , janel ; hamilton , allison ; hardy jr , john ; harris , steven ; hawkins , bernadette ; hayes , robert ; hemstock , robert ; hetrick , nancy ; horton , stanley ; huang , karen ; hueter , barbara a . ; hunter , bevin ; huson , margaret ; ingersoll , richard ; kaufman , paul ; kean , steven j . ; keene , patrick ; kingerski , harry ; kishigami , kikumi ; knight , laurie ; landwehr , susan m . ; lassere , donald ; lawner , leslie ; lawrence , linda l . ; leibman , lara ; leonardo , sam ; levy , alberto ; linnell , elizabeth ; mangskau , david ; maurer , luiz ; mccarty , danny ; mcvicker , maureen ; migden , janine ; miller , terri ; montovano , steve ; moore , bill ; mrha , jean ; nersesian , carin ; neustaedter , robert ; nicolay , christi l . ; noske , linda j . ; novosel , sarah ; ogenyi , gloria ; palmer , germain ; perez , carmen ; perrino , dave ; petrochko , mona l . ; pharms , melinda ; reblitz , scott ; reyna , margo ; rishe , frank ; rizzo , helen ; roan , michael ; robertson , linda ; robinson , marchris ; rodriquez , andy ; rosenberg , david e . ; ryall , jean ; shapiro , richard ; shelk , john ; shortridge , pat ; staines , dan ; steffes , james d . ; stroup , kerry ; sullivan , kathleen ; sullivan , lora ; thome , jennifer ; tiberi , fino ; tu , denis ; twiggs , thane ; walton , steve ; warner , geriann ; watson , kimberly ; yeung , charles ; yoho , lisa subject : september gas flows attached is the september issue of gas flows which addresses natural gas prices &amp; demand and canadian supply . rita hartfield phone : 713 - 853 - 5854 fax : 713 - 646 - 4702 cell : 713 - 504 - 5428 rita . hartfield @ enron . com
</pre>

## Record 002984

**Label:** `benign`

<pre>
summary : buccalization several weeks ago i posted a query asking for instances of &quot; buccalization &quot; , the development of a glottal stop into an oral stop . the reason for the query was that i &#x27; m compiling a catalogue of lenition and fortition types for a textbook , and this was the only type in my catalogue i could n&#x27;t find an example of . i received seven responses . none of them turned up an absolutely ironclad example of a glottal stop developing into an oral stop , though the things that did turn up were nonetheless striking . four languages were cited . maru , a tibeto - burman language , has turned syllable-final zero into [ t ] or [ k ] , depending on the preceding tone . it is possible , but not certain , that this change proceeded via glottal stop . ( robins burling , 1966 , ` the addition of final stops in the history of maru &#x27; , _ language _ 47 : 581-586 ; anatole lyovin , 1968 , ` notes on the addition of final stops in maru &#x27; , _ project on linguistic analysis _ 7 ( berkeley ) . ) mandarin chinese optionally allows syllable-initial zero to be realized as any of several segments , including a glottal stop , a velar nasal , or a velar or uvular voiced continuant . ( yuen - ren chao , _ a grammar of spoken chinese _ , p . 20 . ) there is reason to believe that some of these initial zeros derive from earlier glottal stop . winnebago has undergone the change [ - r ? ] - &gt; [ - t ? - ] between vowels , and , if i understand the reply correctly , the rhotic itself may be epenthetic in origin . american english has its celebrated case of ` no &#x27; &gt; ` nope &#x27; , possibly via glottal stop . the same is true of ` yep &#x27; , if this derives directly from ` yeah &#x27; and is not analogical . ( and i have noted that i myself sometimes have ` welp &#x27; for ` well &#x27; . ) that &#x27;s it . it really does look as if the glottal region is a vast sink from which no segment ever returns . it is not obvious why this should be so , since , as one respondent points out , the development of [ ? ] to [ p ] , [ t ] or [ k ] under the influence of neighboring [ u ] , [ i ] or [ a ] does not seem intrinsically implausible , and indeed it is reported that early european linguists working in southeast asia sometimes misheard and mistranscribed glottal stops in exactly this manner . my thanks to richard coates , lance eccles , james kirchner , bill mahota , john koontz , david solnit and scott delancey for their responses . perhaps i should also have inquired about cases of [ h ] &gt; oral segment , but i did n&#x27;t think of it . any further information in this vein will be gratefully received . larry trask cogs university of sussex brighton bn1 9qh uk larryt @ cogs . susx . ac . uk
</pre>

## Record 002985

**Label:** `benign`

<pre>
self-opposites content - length : 333 jules levin wrote : ) this does n&#x27;t quite qualify , but &#x27; overlook &#x27; means the opposite of &#x27; look ) over &#x27; : &quot; my accountant looked over my records but overlooked a deduction . . . &quot; &quot; the scandal has been blamed on an oversight on the part of the senate oversight committee . &quot; anton sherwood * \ \ * + 1 415 267 0685 * \ \ * dasher @ netcom . com
</pre>

## Record 002986

**Label:** `benign`

<pre>
Wynne, Conor&#x27;s [conor_wynne@maxtor.com] 16 lines of wisdom included:
&gt; Hi ladies,
&gt; 
&gt; I setup a cron job to do a full backup to tape drive there last night, but
&gt; I&#x27;m just wondering how I can verify that it actually ran? 
&gt; I suppose that a mail will be sent to root as I ran crontab -e as root. Is
&gt; that correct or should I be looking elsewhere?
&gt; 
&gt; Thanks to everyone who replies in advance. 
Where does cron log to? (check /etc/syslog.conf) Usually it&#x27;s something like /var/log/cron.log or /var/log/cron Anyways have a look in the logs, make sure your backup ran (so long
as there weren&#x27;t any errors).Typically if there&#x27;s any output from the commands you&#x27;ve run,
they&#x27;re mailed to you.-- 
  Philip Reynolds        
   RFC Networks          tel: 01 8832063
www.rfc-networks.ie      fax: 01 8832041-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002987

**Label:** `benign`

<pre>
re : exploration data as the root of the energy ( oil ) supply chain and consulting john , congratulations on a career move . yes , we were contacted regarding geophysical data gathering / transmission project . we asked our geophysicists for help and are shooting for a meeting on thursday to run our ideas by them . vince from : john bloomer @ enron communications on 10 / 10 / 2000 10 : 20 am to : vince j kaminski / hou / ect @ ect cc : subject : exploration data as the root of the energy ( oil ) supply chain and consulting good morning vince : 1 ) we met with some geophysical data gathering / transmission people last week . i observed that there is an opportunity to get in the early steps of the ( oil exploration ) energy supply chain - we can get at the key data driving oil drilling earlier than anyone else by extending into this area of broadband networking - to build a way to hedge oil and other energy trades . i asked adler or reichardt to present the idea to your team for validation . have they contacted you yet ? 2 ) i &#x27; m converting to consultant - i &#x27; ve had a great year here but need to get back north more often ( family ) . i will be converting to consultant status starting next week . do not hesitate to call me if there is anything i can do for you or your team to help out . john bloomer cell 610 574 3945
</pre>

## Record 002988

**Label:** `benign`

<pre>
Hi,how about applying this to the default apt.conf shipped with the
freshrpms.net apt package?  I found it a bit weird when the behaviour
changed between the old 0.3.x and the new 0.5.x versions so that when
doing a &quot;apt-get upgrade&quot;, it wouldn&#x27;t tell me *which* packages were to
be upgraded, just that it was about to upgrade something...--- apt.conf	2002-09-27 14:58:28.000000000 +0300
+++ apt.conf	2002-10-03 21:38:05.000000000 +0300
@@ -4,6 +4,7 @@
   Get 
   {
      Download-Only &quot;false&quot;;
+     Show-Upgraded &quot;true&quot;;
   };
   
 };-- 
\/ille SkyttÃ¤
ville.skytta at iki.fi
_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002989

**Label:** `benign`

<pre>
controller / back office i &#x27; m meeting with rick causey tomorrow morning ( friday ) , and hopefully sally will be attending as well . i &#x27; ll brief you afterwards on our action plan . cassandra . - - - - - - - - - - - - - - - - - - - - - - forwarded by cassandra schultz / enron _ development on 03 / 09 / 2000 03 : 50 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - joseph p hirl 03 / 08 / 2000 09 : 05 pm to : cassandra schultz / enron _ development @ enron _ development , carol cc : subject : controller / back office how have you progressed with finding us candidates for controller and back office ? the sooner we can get these people on board the better . i sense we are falling a bit behind here in relation to some of the other functions . i can be reached in tokyo at 81 3 5404 3818 or on my mobile at 81 90 4073 6761 . joe
</pre>

## Record 002990

**Label:** `benign`

<pre>
SPAM: This mail is probably spam.  The original message has been altered
SPAM: so you can recognise or block similar unwanted mail in future.
SPAM: See http://spamassassin.org/tag/ for more details.
SPAM: 
SPAM: Content analysis details:   (5.30 hits, 5 required)
SPAM: INVALID_DATE       (1.6 points)  Invalid Date: header (not RFC 2822)
SPAM: REMOVE_SUBJ        (1.7 points)  BODY: List removal information
SPAM: SPAM_PHRASE_05_08  (0.7 points)  BODY: Spam phrases score is 05 to 08 (medium)
SPAM:                    [score: 6]
SPAM: SUPERLONG_LINE     (-2.2 points) BODY: Contains a line &gt;=199 characters long
SPAM: MSG_ID_ADDED_BY_MTA_3 (0.2 points)  &#x27;Message-Id&#x27; was added by a relay (3)
SPAM: MISSING_MIMEOLE    (1.6 points)  Message has X-MSMail-Priority, but no X-MimeOLE
SPAM: MISSING_OUTLOOK_NAME (1.7 points)  Message looks like Outlook, but isn&#x27;t
SPAM: *************************************
*   Reich for Governor Committee    *
*   Newsletter Sign-up Confirmation *
*************************************Thank you for signing up for the Reich Report, the weekly newsletter of the Reich for Governor campaign. You can read our previous newsletter on our website at http://RobertReich.org/gov/Newsletter.asp . If you would like to volunteer for the campaign, please contact our volunteer coordinator, Meg Ansara, at Meg@RobertReich.org or call (617) 547-2206 x132. Our headquarters is located at 625 Mount Auburn Street, near the Star Market in Cambridge.  We are open from 9 am to 9 pm Monday through Thursday, 9 am to 6 pm Friday, 10 am to 6 pm Saturday, and 12 noon to 8 pm on Sundays. We are a bus ride away from Harvard Square (bus #71 or #73) and parking is readily available in the back of the building. We encourage all Reich supporters to come to the headquarters for events, to volunteer for phone banking, or just to see how we operate. We encourage you to forward this e-mail to your friends, family, and colleagues, and ask them to sign up for our newsletter at http://www.robertreich.org/gov/emailpage.asp . Help us start a &#x27;virtual&#x27; campaign!If you do not want to receive future newsletters, please send an e-mail to newsletter@RobertReich.org with &#x27;Remove&#x27; as the subject line. -- Jesse Alan Gordon
Technology Director
Reich for Governor Committee
Jesse@RobertReich.org*************************************
*   Reich for Governor Committee    *
*   P.O. Box 381483                 *
*   Cambridge, MA 02238             *
*   http://www.RobertReich.org      *
*************************************
</pre>

## Record 002991

**Label:** `benign`

<pre>
new hire placement status the following new hire analysts ( commercial side ) have been placed in their first rotation : analyst business unit supervisor alberto crespo commercial transactions chris helfrich niclas egmar enron research ronnie chahal aaron martinsen ees account operations &amp; process julian travis mike spuriell ees account operations &amp; process julian travis john weakly risk management for equity &amp; debt trading bennett kauffman adrian woolcock ees gas structuring debra merril samuel pak - he came in on the support side , but has been given a commercial role with global exploration &amp; production steve harper zeina el - azzi has received an offer from the commercial transactions group , but has not yet accepted because she is waiting on an offer from the middle eastern development group . ben thomason has received three offers ( capital structuring , apache transaction services , and commercial transactions ) - he is making a decision by the end of tomorrow . rahul seksaria - he is interviewing with larry lawyer &#x27; s group in eci tomorrow . the following analysts on the commercial support side have been placed as indicated below : michael benien business analysis &amp; reporting norman levine jody crook gas assets steve venturatos israel estrada global rate services mary solmonson sharon hausinger ees commercial risk management barry vanderhorst jennifer keith ees financial operations patrick hanes christine milliner corporate hr suzanne brown justin o &#x27; malley ees gas commodities david draper adnan patel global counterparty mary gosnell lauren schlesinger ees financial planning matt culver shirley sidler global products scott earnest leah stephens global products kevin sweeney george thomas business analysis &amp; reporting jody pierce shilpa chunchu - interviewing with groups angie zeman - interviewing with groups the following new hire associate has been placed as indicated below : russell dyk mid - markets trading jenn fraser juan cabrales - he has been extended two offers ( panama group and structuring ) . he is to make decision by friday .
</pre>

## Record 002992

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;E&quot; == Eirikur Hallgrimsson  writes:    E&gt; Absolutely, and I&#x27;ve wanted to recapture it.  I don&#x27;t know about this /particular/ mood, but I have used
neuro-conditioning with aiding children in stressful
life-circumstances.Basically, you somehow evoke the state you want, and when you get it,
you do something odd, anything at all will do, but I used a gentle
&quot;vulcan grip&quot; on their shoulder.  Later, when faced with the
uncomfortable situation, you can retrieve /part/ of that earlier more
desireable state by giving them the pinch; it&#x27;s not perfect (like you
get with simpler brains) but it is an inescapable effect.This is probably the neuro-effect that leads to performance-enhancing
superstitions such as Bob Dylan not performing without his favourite
jean jacket: Because it provides the cue to a more relaxed mental
state, he really does play better with it than without it.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
 Business Advantage through Community Software : http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)

</pre>

## Record 002993

**Label:** `benign`

<pre>
On Wed, 24 Jul 2002, Mike Masnick wrote:&gt; Adds to the level of annoyance, and makes it even less likely that I&#x27;ll
&gt; ever use it.Which annoyance? A string like f70539bb32961f3d7dba42a9c51442c1218a9100
somewhere in the message inserted by the system automatically doesn&#x27;t 
change anything. Besides, there are simpler solutions:	http://tmda.net/faq.cgi?req=all#4.10
 
&gt; They don&#x27;t have to.  All they have to do is use some program (which, if
&gt; they don&#x27;t exist already, will certainly be around someday soon) that makes
&gt; every spam they send show the recipient as the &quot;from&quot; address as well.See above.
 
&gt; The adding manually thing doesn&#x27;t seem like much fun.  And, anytime I speakSo is installing the software. But you do it once.&gt; to someone new, it just makes it more unlikely that they will be willing to
&gt; contact me.  Having played around with whitelists in the past, you&#x27;d be	http://tmda.net/faq.cgi?req=all#1.5&gt; amazed at how confused many people get by them as well.  They tend to
&gt; ignore the &quot;please apply&quot; messages.
&gt; 
&gt; As an aside, am I the only person around who simply does not use the
&gt; addressbook feature in email programs?  I never have, and I don&#x27;t see anyI usually don&#x27;t use it. Just to lookup addresses/names of people I forget, 
once in a while.&gt; reason to.  It (along with not opening attachments) has helped me not to
&gt; send out viruses to people.  I generally use my own brain or my inbox as anViruses? Other people&#x27;s problem. Last virus I had was in 1988, or so.&gt; addressbook, and search out the last email I received from someone and hit
&gt; reply...
&gt; 
&gt; &gt;&gt; email.  I could see certain friends of mine getting fairly annoyed
&gt; &gt;&gt; (especially those with multiple email addresses...).
&gt; &gt;
&gt; &gt;What&#x27;s the point of multiple email addresses? They&#x27;re a pain.
&gt; 
&gt; Well, yes.  *I* use one email address, but that doesn&#x27;t mean all my friends
&gt; do.  You would need to convince everyone I know of that.  Most people IMaybe your friends should get used to tagged message delivery, then.&gt; know, at the very least, have a home and work email address.  But plenty
&gt; others have other addresses for various reasons.  Keeping track of all of
&gt; them for a whitelist seems like a pain.  It forces them to remember which
&gt; email addresses are already approved and avoid using others.You have strange friends.
 
&gt; Plus, I know plenty of people who change jobs, and suddenly get a new email
&gt; address from their new job.  Wouldn&#x27;t it suck if, in sending out your newWhy should changing my job change my private address? I don&#x27;t use 
corporate mail for private purposes.&gt; job info, you had to fill out a new application for each friend just to
&gt; tell them about your new job email address?I don&#x27;t think this is a significant problem in practice.http://xent.com/mailman/listinfo/fork

</pre>

## Record 002994

**Label:** `benign`

<pre>
re : killing ena to ena deals in sitara jay , if a deal is killed it poses a problem for us in unify if there are any paths associated with the deal ; therefore , we request the deals be zeroed out . call me if this is a problem . also , we would appreciate further details on why these deals are being killed . in addition , i have copied rita and mark from volume management for their input . regards , tammy x 35375 - - - - - original message - - - - - from : pena , matt sent : thursday , december 13 , 2001 3 : 39 pm to : krishnaswamy , jayant ; pinion , richard ; jaquet , tammy cc : severson , russ ; truong , dat ; aybar , luis ; ma , felicia subject : re : killing ena to ena deals in sitara thanks jay ! tammy / richard : you may want to let the schedulers know , although they may already . - - - - - original message - - - - - from : krishnaswamy , jayant sent : thursday , december 13 , 2001 3 : 38 pm to : pinion , richard ; jaquet , tammy cc : severson , russ ; pena , matt ; truong , dat ; aybar , luis ; ma , felicia subject : killing ena to ena deals in sitara richars / tammy : we will be killing about 2000 deals in sitara tonight . whenever a deal is touched in sitara , it will bridge over to unify . these are desk 2 desk deals , and should have minimal impact on you .
</pre>

## Record 002995

**Label:** `benign`

<pre>
confirmation : arthur andersen 21 st annual energy symposium thank you for your event rsvp . we hope that the process was quick and simple . for any further questions , please contact the event coordinator . your confirmation number is : 49297 you are registered for : arthur andersen 21 st annual energy symposium event date : tuesday , november 28 , 2000 7 : 00 : 00 am westin galleria hotel 5060 west alabama houston , texas 77056 fee information if you register on or before october 31 , the registration fee is $ 950 . 00 . after that date , the registration fee is $ 1 , 200 . 00 . , $ 950 . 00 total amount : $ 950 . 00
</pre>

## Record 002996

**Label:** `benign`

<pre>
hpl deal downloads - - - - - - - - - - - - - - - - - - - - - - forwarded by david baumbach / hou / ect on 02 / 26 / 2001 03 : 17 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : tommy yanowski / enron @ enronxgate on 02 / 26 / 2001 03 : 11 pm to : thomas a martin / hou / ect @ ect , brian redmond / hou / ect @ ect cc : david baumbach / hou / ect @ ect , bob m hall / na / enron @ enron , george weissman / hou / ect @ ect , heather a johnson / enron @ enronxgate subject : hpl deal downloads i &#x27; ve attached two files with hpl deal information . the file named hpl deals with 3 rd parties contain all hplc deals and ena deals on hpl . i plan to send this file to aep by tueday morning unless i hear of any objection . the second file named ena texas offsystem deals contains deals that i &#x27; m not sure if they are a part of the sale or not . i am asking david baumbach to review this file to let me know what needs to be excluded . i will hold off on sending the second file until their is consensus on the content . - tommy
</pre>

## Record 002997

**Label:** `benign`

<pre>
Hi,On Tue, 30 Jul 2002, Gavin McCullagh wrote:&gt; set alternates = &quot;kbeditor@linuxcare.com|coolapps@linuxcare.com&quot;
&gt; set reverse_namePS Make sure not to have a line like this:	send-hook .  &#x27;my_hdr From: Gavin McCullagh &quot;which will only override it and cause pain and suffering.Gavin
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002998

**Label:** `benign`

<pre>
icslp 96 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = iiii ccccc sssss ll pppppp 999999 666666 ii cc cc ss ss ll pp pp 99 99 66 66 ii cc ss ll pp pp 99 99 66 ii cc sssssss ll pppppp 9999999 6666666 ii cc ss ll pp 99 66 66 ii cc cc ss ss ll pp 99 99 66 66 iiii ccccc sssss lllllll pp 999999 666666 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = fourth international conference on spoken language processing * * * * * * october 3 - 6 , 1996 wyndham franklin plaza hotel philadelphia , pa , usa * * * * * * _ _ _ _ _ _ _ _ _ _ icslp 96 organizers _ _ _ _ _ _ _ _ _ _ _ h . timothy bunnell , chair richard a . foulds , vice - chair applied science &amp; engineering laboratories wilmington , de , usa * * * * * * _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ icslp _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ icslp unites researchers , developers , and clinicians for an exchange on a wide variety of topics related to the spoken language processing of humans and machines . conference presentations range from basic acoustic phonetic research to clinically oriented speech training devices to speech-based natural language interfaces for man-machine interaction . icslp 96 will feature technical sessions of both oral and poster format , plenary talks , commercial exhibits , and daily special sessions . in addition , satellite workshops will be held in conjunction with the conference in the areas of interactive voice technology , spoken dialogue , speech databases and speech i / o , and gestures and speech . a new emphasis for icslp 96 will be on the clinical applications of speech technology , including the use of speech technology based applications for persons with disabilities . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ conference update _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 8 / 10 / 95 dates to note : january 15 , 1996 - paper abstracts due for review march 15 , 1996 - acceptance notification may 1 , 1996 - deadline for papers ( camera-ready , 4 pages ) prospective authors are invited to submit papers relevant to spoken language processing in any of the conference technical areas . abstracts of proposed papers must be received by the icslp 96 organizing committee no later than january 15 , 1996 . papers will be selected by the icslp 96 technical program committee and assigned for presentation in poster or oral format . english is the working language for the conference . submission of an abstract implies a commitment to submit a four page , camera-ready version of the paper and to present the paper in either an oral or poster session if the abstract is accepted . participants will be expected to pay their own registration fees , travel , and accommodations for icslp 96 . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ submission of abstracts _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ abstracts must be received by the icslp 96 organizing committee no later than january 15 , 1996 . abstracts may be submitted either by post or by e-mail following these guidelines : + one page , 400 word maximum + technical area ( s ) indicated in order of preference using the codes ( a - x ) below . + title of the proposed paper clearly indicated + preference for paper or poster clearly indicated + if sent by post , submit four ( 4 ) copies of the abstract + if sent by e-mail , use plain text ( ascii ) format only each abstract must also include the following contact information : + author name ( s ) * + postal mailing address + phone number + fax number + e - mail address e - mailed abstracts will be acknowledged by e-mail within 48 hours of submission . if you do not receive e-mail confirmation , we have not received your abstract ! please check the e-mail address and resubmit . please do not e-mail multiple copies for any other reason . * please be sure that the primary contact person is noted if it is someone other than the first author . mail or send abstracts to : icslp 96 applied science &amp; engineering laboratories a . i . dupont institute p . o . box 269 wilmington , de 19899 e - mail : icslp - abstract @ asel . udel . edu _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ technical areas _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ a . production of spoken language b . perception of spoken language c . robust speech modeling and speech enhancement d . speech coding and transmission e . automatic speech recognition f . spoken language processing for special populations g . phonetics and phonology h . spoken discourse analysis / synthesis i . synthesis of spoken language j . applications for people with speech / language / hearing disorders k . databases and standards for speech technology l . prosody of spoken language m . speech analysis and parameterization n . spoken language acquisition / learning o . integrating spoken language and natural language processing p . hardware for speech processing q . neural networks and stochastic modeling of spoken language r . dialects and speaking styles s . instructional technology for spoken language t . speaker / language identification and verification u . human factors and assessment in spoken language applications v . spoken language dialogue and conversation w . gesture and multimodal spoken language processing x . other _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ satellite workshops _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ the following satellite workshops will be held immediately before or after the icslp 96 conference . 1 . ivtta - the 3rd ieee workshop on interactive voice technology for telecommunications applications ( ivtta ) will be held at the at&amp;t learning center , basking ridge , new jersey , from september 30 - october 1 , 1996 . the ivtta workshop brings together applications researchers planning to conduct or who have recently conducted field trials of new applications of speech technologies . due to workshop facility constraints , attendance will be limited primarily to contributors . for further information about the workshop , contact : dr . murray spiegel bellcore 445 south street morristown , nj , usa e-mail : spiegel @ bellcore . com phone : 1-201 - 829-4519 ; fax : 1-201 - 829-5963 submit abstracts ( 400 words , maximum 1 page ) before april 1 , 1996 to : dr . david roe ieee ivtta ` 96 at&amp;t bell laboratories , room 2d-533 murray hill , nj 07974 e-mail : roe @ hogpb . att . com phone : 908 582-2548 ; fax : 908 582-3306 2 . issd-96 the 1996 international symposium on spoken dialogue ( issd-96 ) will be held on october 2 and 3 at the venue of icslp 96 . it is intended to be a forum of interdisciplinary exchange between researchers working on spoken dialogues from various points of view . the first day is devoted to invited lectures followed by sessions of both invited and contributed papers , which will be continued on the second day as special sessions of icslp 96 . papers submitted to icslp 96 ( technical areas h , l , o , u , &amp;v ) may be selected for presentation at the symposium . for further information about the symposium , contact : prof . hiroya fujisaki , chairman , issd-96 dept . of applied electronics science university of tokyo 2641 yamazaki , noda , 278 japan e-mail : fujisaki @ te . noda . sut . ad . jp phone : + 81-471 - 23-4327 ; fax : + 81-471 - 22-9195 3 . cocosda workshop 96 cocosda workshop 96 will be held on monday , october 7 at the wyndham franklin plaza hotel . the international coordinating committee on speech databases and speech i / o systems assessment ( cocosda ) has been established to promote international cooperation in the fundamental areas of spoken language engineering . previous meetings have taken place in banff 1992 , berlin 1993 , yokohama 1994 and madrid 1995 . program and registration information for cocosda 96 will be forthcoming in later announcements . for more information about cocosda , consult the web page at http : / / www . itl . atr . co . jp / cocosda . 4 . workshop on gesture and speech the applied science and engineering laboratories of the university of delaware will host a workshop on multimodal use of gesture and speech october 7 - 8 , 1996 . this workshop will consider the integration of gesture and spoken language in intelligent human / computer interfaces , in advanced assisitve technology for individuals with disabilities , in telemanipulation and robotics systems , and in human conversation . gestures including hand postures , dynamic arm movements , facial expression , and eye gaze will be considered along with more traditional lip shapes and handwriting movements . for further information , contact : dr . lynn messing a . i . dupont institute p . o . box 269 wilmington , de 19899 e-mail : messing @ asel . udel . edu phone : + 1 302 651 6830 ; fax : + 1-302 - 651-6895 _ _ _ _ _ _ _ _ _ _ _ _ _ _ sponsoring and cooperating organizations _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ the acoustical society of america american speech and hearing association ( pending ) the acoustical society of japan canadian acoustical association european speech communication association ieee signal processing society international phonetic association others - contact icslp 96 . _ _ _ _ _ _ _ _ _ _ _ _ _ _ for more information , contact _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ icslp 96 applied science &amp; engineering laboratories a . i . dupont institute p . o . box 269 wilmington , de 19899 phone : + 1 302 651 6830 tdd : + 1 302 651 6834 fax : + 1 302 651 6895 email : icslp96 @ asel . udel . edu www : http : / / www . asel . udel . edu / speech / icslp . html ftp : zeppo . asel . udel . edu : pub / icslp a two-page postscript format copy of the most recent conference announcement and call for papers can also be obtained by anonyomus ftp . connect to host zeppo . asel . udel . edu , cd to directory pub / icslp96 , and get call . ps . z in binary mode . the file must be uncompressed with a unix compatable uncompress program before being printed . this plain text version of the announcement is located in the same directory as file call . txt _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ international advisory board _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ hiroya fujisaki science university of tokyo tokyo , japan jens blauert john ohala ruhr - universitat bochum university of california bochum , germany berkeley , ca , usa anne cutler lawrence rabiner max planck institute for at&amp;t bell labs psycholinguistics murray hill , nj , usa nijmegen , the netherlands gunnar fant katsuhiko shirai royal institute of technology ( kth ) waseda university stockholm , sweden tokyo , japan john laver kenneth stevens humanities research board of massachusetts institute the british academy of technology edinburgh , scotland cambridge , ma , usa joseph mariani yoh &#x27; ichi tohkura limsi-cnrs atr human information orsay , france processing research lab kyoto , japan j . bruce millar victor zue australian national university massachusetts institute canberra , australia of technology cambridge , ma , usa _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
</pre>

## Record 002999

**Label:** `benign`

<pre>

JH&gt; They are legally required to do that.  I got a similar check because an
JH&gt; insurance company didn&#x27;t pay a claim quickly enough.  It might have been
JH&gt; $.02.JH&gt; Although they spent lots more than $.33 to mail you the check, the
JH&gt; alternative seems to be to keep the money.  Do you really want companies
JH&gt; to have a financial incentive to over-bill you &#x27;just a bit&#x27; so they
JH&gt; could keep it?  For a company with millions of customers, $.33/customer
JH&gt; starts adding up.
Christ, you sound worse than me.What I -said- in my post, John, was that instead of having to dole out
stupid refunds, I&#x27;d rather they save the costs incurred, knock off one
of those bullshit surcharges that they inevitably charge for promoting
services like these, and move on.  SOmething tells me, it&#x27;d balance
out.  Problem is, they&#x27;re silly, they don&#x27;t want to do this, and
rather than the legislation coming up with an affective means of
controlling the situation (overcharging) they impose silly
requirements like this.
&gt;&gt; From: fork-admin@xent.com [mailto:fork-admin@xent.com] On Behalf Of
&gt;&gt; bitbitch@magnesium.net&gt;&gt; So I get a check from Pac Bell today (SBC as they&#x27;re called now).
&gt;&gt; Turns out, they went to the trouble of printing out, signing, sealing
&gt;&gt; and stamping a check just to refund me for a whole $0.33.
&gt;&gt; 
&gt;&gt; They easily spent more than this just getting the materials together.
&gt;&gt; Why the hell do companies bother to do this crap?  I mean, isn&#x27;t there
&gt;&gt; a bottom line in terms of cost effectiveness?  I don&#x27;t think I missed
&gt;&gt; the .33, but I sure as hell would have appreciated lower rates in lieu
&gt;&gt; of being returned pennies.
&gt;&gt; 
&gt;&gt; I&#x27;m truly stuck on this though.  I don&#x27;t know whether to frame the
&gt;&gt; check, burn it, or cash it in.  Maybe I should find a way to return to
&gt;&gt; sender, so they have to spend -more- money on giving me my .33 dues.
&gt;&gt; 
&gt;&gt; 
&gt;&gt; Does .33 even buy anything anymore?  Funny bit of it, is I couldn&#x27;t
&gt;&gt; even make a phone call these days.
&gt;&gt; 
&gt;&gt; *boggled*
&gt;&gt; BB.
&gt;&gt; 
&gt;&gt; --
&gt;&gt; Best regards,
&gt;&gt;  bitbitch                          mailto:bitbitch@magnesium.net-- 
Best regards,
 bitbitch                            mailto:bitbitch@magnesium.net

</pre>

## Record 003000

**Label:** `benign`

<pre>
draft [ netco ] press release louise - - the spin for the [ netco ] press announcement ( s ) can take many different directions . as a start , dave and i have taken a stab at writing the attached draft of the press release for the buyer to revise , approve and issue . the release promotes the buyer &#x27; s purchase of [ netco ] and the launch of [ netcoonline ] . please review and let me or dave know if you &#x27; d like to discuss . i have not shown this to enron corp . &#x27; s pr or legal groups yet . thanks . kal
</pre>

