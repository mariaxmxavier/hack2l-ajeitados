---
type: DatasetPartition
title: Benign samples - batch 0043
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 8401
record_end: 8600
---

# Benign samples — batch 0043

## Record 008401

**Label:** `benign`

<pre>
Quoting Niall O Broin :&gt; I&#x27;m installing warm standby disks on a number of boxes. These disks will be
&gt; the same size (sometimes bigger) than the main disk. The idea is that every
&gt; night I&#x27;ll rsync the partitions on the main disk to the standby disk so
&gt; that
&gt; in the case of disaster, the first port of call, before the tapes, is the
&gt; standby disk. (We did consider running Linux md RAID on the disks but RAID
&gt; gives you no protection against slips of the finger)Do I get beaten round the head for saying &quot;floppy&quot;?
Assuming the machines are networked, let each one send a copy of its kernel to
the others.  If the drives are open-the-box-and-switch-cables, then you can
start dd&#x27;ing a floppy before you start.  If the drives are in drawers, then this
might slow you down by all of 60 seconds.Alternatively, you could use netboot.  No, I&#x27;m serious.  Set the boot sequence
to first hard disk then network.  Do NOT make any partition on the standby
active.  Have a look at the etherboot package.  One of the things it contains is
a pascal-ish language for writing boot menus.  You can write a one-liner that
basically says &quot;boot /dev/hda1&quot; (or whatever, there&#x27;s example code).  IIRC, the
resulting &quot;bootable image&quot; is a whopping 4K.  The downside is you&#x27;ll need a
bootp and tftp server somewhere....hth,
Ronan.
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008402

**Label:** `benign`

<pre>
fw : questions - - - - - original message - - - - - from : belden , tim sent : wednesday , january 09 , 2002 11 : 04 am to : lavorato , john subject : questions
</pre>

## Record 008403

**Label:** `benign`

<pre>
hi i was just wondering if anyone experiening difficulty with eircom mail
sever.I was trying to send mail from mozilla mail but it keeps coming up
with this error:
sorry,that domain isnt in my list of allows rcpthosts(#5.7.1)
please check the message recipients and try again.What is this all about.
I am using mail2.eircom.net as my smtp and my pop, i can recieve mail but
i cannot send mail. is there any other open relay that i  can use.
nils
Also i was just browsing the web and came across this
http://www.microsoft.com/ireland/security/info2.htm
Its a seminar on
security and reliable
maybe ilug should go along and hold a seminar on the same day right
across the hall from this!
nils
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008404

**Label:** `benign`

<pre>

 Ar an 20Ãº lÃ¡ de mÃ­ 7, scrÃ­obh kevin lyda : &gt; On Sat, Jul 20, 2002 at 08:24:47PM +0100, Aidan Kehoe wrote:
 &gt; &gt;  Ar an 20Ãº lÃ¡ de mÃ­ 7, scrÃ­obh kevin lyda :
 &gt; &gt;  &gt; actaully i think soft links were invented because you can&#x27;t hard link
 &gt; &gt;  &gt; directories. 
 &gt; &gt; But you could hard link directories, back when soft links were
 &gt; &gt; being invented, AFAIK. 
 &gt; 
 &gt; that was before my time.  all unix systems i&#x27;ve used didn&#x27;t allow hard
 &gt; links to directories, or if they did they were restricted to root.
 &gt; the reason why is because you could cause infinite loops in the kernel -
 &gt; usually a bad place for infinite loops.Yeah, thanks. I have been subscribed for more than a week, despite any
naÃ¯vetÃ© I may be showing to you :-) .  &gt; &gt;  &gt; apparently some systems limited soft links to the same device but
 &gt; &gt;  &gt; gave up after a while.  
 &gt; &gt; Why?
 &gt; 
 &gt; to make them consistent with hard links.So, they&#x27;re the same as hard links, with the disadvantage that they
break on deletion or moving, and they may take up slightly more disk
space. Hmm. &gt; &gt; A better way of doing it would be a) have global unique filesystem
 &gt; &gt; identifiers for every FS created (such that the chance of two of them
 &gt; &gt; clashing is miniscule; 64 bits creatively used would do it, I&#x27;d say),
 &gt; &gt; and b) implement the target info for the soft link as a {FSID, inode}
 &gt; &gt; pair; the OS can work out if the thing linked to is now on a different
 &gt; &gt; mount point, or has been moved. (HFS fans, is that what&#x27;s done? Or are
 &gt; &gt; aliases implemented differently?)
 &gt; 
 &gt; let&#x27;s call these super-soft-links.  ln -ss
 &gt; 
 &gt;     % ln -ss foo bar
 &gt;     % ls -i foo
 &gt;     111 foo
 &gt;     % mv floyd foo
 &gt;     % ls -i foo
 &gt;     222 foo
 &gt; 
 &gt; and now bar no longer points to foo.True. But &quot;cat floyd &gt; foo; rm floyd&quot; preserves it. Much of a muchness
... &gt; the fs would need to maintain a table of links going the other direction.
 &gt; so when the move command unlinks foo in the first example, it could
 &gt; check the table and mark that bar is now disconnected.  the same would
 &gt; be true for the second example - and even more important since bar points
 &gt; to floyd if no table is consulted.
 &gt; 
 &gt; and this all fails to handle nfs mounted file systems or filesystems
 &gt; that have dynamic inodes (the fat fs&#x27;s and reiser lacks inodes i think).Hokay. -- 
I&#x27;m not a pheasant plucker / I&#x27;m a pheasant plucker&#x27;s son.
I&#x27;m just a&#x27;plucking pheasants / &#x27;Til the pheasant plucker comes.-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008405

**Label:** `benign`

<pre>
re : ut / enron mba excellence 2001 scholarship winners announced ! rick and sally i told the scholarship winners that within the next few weeks , we would like to meet with them for lunch or dinner before the semester is over . so since we are on the subject , do you have plans to be in austin any time soon ? i will coordinate the students around your schedule . also , if you think there are others that should join the smaller luncheon / dinner , let me know . i thought about asking traci warner and billy lemmons since they are new to the aa program . karen sally beck 03 / 29 / 2001 01 : 34 pm to : karen marshall / hou / ect @ ect cc : subject : re : ut / enron mba excellence 2001 scholarship winners announced ! are we going to do anything for the students before fall semester ? the dinner with dean may and others from the university is great in the fall . but last year , we had thought about just a small lunch with the students and a few from enron . this can be simple and we don &#x27; t have to coordinate around the schedule of any ut faculty or staff . but it does allow enron to have a more immediate follow up with the scholarship recepients to celebrate their being chosen . - - sally from : karen marshall on 03 / 28 / 2001 08 : 12 pm to : sally beck / hou / ect @ ect , richard causey / corp / enron @ enron , gene humphrey / enron @ enronxgate , wanda curry / hou / ees @ ees , brent a price / enron @ enronxgate , charlene jackson / corp / enron @ enron , christie patrick / hou / ect @ ect , loftus fitzwater / na / enron @ enron , roger ondreko / enron @ enronxgate , andrea v reed / enron @ enronxgate cc : kristin gandy / na / enron @ enron , gwynn gorsuch / na / enron @ enron , elyse kalmans / corp / enron @ enron , laura schwartz / corp / enron @ enron , bert frazier / enron @ enronxgate , billy lemmons / corp / enron @ enron , eloy . garcia @ bus . utexas . edu subject : ut / enron mba excellence 2001 scholarship winners announced ! i am pleased to announce the recipients of the 2001 university of texas enron mba excellence scholarships : christopher cashman soopang tang holland brown each student will receive $ 10 , 000 in scholarship money based on their essays , interviews and on how they exemplified the vision , values and beliefs of enron . i have already notified the winners , so please join me in congratulating each one on a job well done . special thanks to everyone who participated in the selection of the winners . stay tuned for details on the date and time for the scholarship awards dinner slated for early next semester ! e - mail : christopher . cashman @ mbao 2 . bus . utexas . edu phone : 512 - 836 - 6489 e - mail : soopang . tang @ mbao 2 . bus . utexas . edu phone : 512 - 708 - 0161 e - mail : holland . brown @ mbao 2 . bus . utexas . edu phone : 512 - 440 - 1142 fyi . . . all of the candidates that interviewed were outstanding according to the scholarship interview team ( sally beck , andrea reed , roger ondreko and loftus fitzwater ) . i will be sending each of them a letter to thank them for their participation and encourage them to consider enron when interviewing for full time opportunities next semester . thank you , karen marshall
</pre>

## Record 008406

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/10/03.html#microsoft_redesign
Date: 2002-10-03T14:42:29-05:00_Jeffrey Zeldman_: Party like it&#x27;s 1997[1]. â€œMicrosoft has redesigned. 
Its new layout uses font tags and other deprecated junk straight out of the 
mid-1990s. ... When a W3C member company that helped create XHTML and CSS 
ignores or misuses those web standards on its corporate site, you have to 
wonder who didn&#x27;t get the memo.â€ The new design also fails even the most basic accessibility tests[2]; the home 
page contains 80 instances of images without ALT text. This is the same basic 
failing for which the Sydney Organizing Committee for the Olympic Games was 
successfully sued in 2000[3]. Here is what microsoft.com looks like in a text-only browser[4]. (To better 
understand the experience, take a piece of paper and cover your entire monitor 
except for the top line, then scroll the window slowly so you can only read one 
line at a time.) While nothing is technically locked out (all the links are 
regular links, nothing requires Javascript to function properly), all the 
un-ALT-enhanced images (which are mostly spacer images and images-as-bullets) 
add so much clutter to the page that it&#x27;s very difficult to navigate. Meanwhile, I don&#x27;t want to imagine what it would sound like through a screen 
reader. Want to find the search box? That&#x27;s â€œ1pttrans dot gif 1pttrans 
dot gif search for 1pttrans dot gif 1pttrans dot gif form edit box 1pttrans dot 
gif submit button go 1pttrans dot gif link advanced search 1pttrans dot gif 
...â€ And I hope you weren&#x27;t looking for Microsoft&#x27;s accessibility home 
page[5]; it&#x27;s the 76th link on the page (out of 76).[1] http://www.zeldman.com/daily/0902b.html#prince
[2] http://bobby.watchfire.com/bobby/bobbyServlet?advanced=true&amp;URL=http%3A%2F%2Fwww.microsoft.com%2F&amp;gl=wcag1-a&amp;Text=text&amp;line=line&amp;an_errs=an_errs&amp;stealth=Bobby%2F3.3&amp;output=Submit
[3] http://www.contenu.nu/socog.html
[4] http://diveintomark.org/public/microsoft_lynx_output.txt
[5] http://www.microsoft.com/enable/

</pre>

## Record 008407

**Label:** `benign`

<pre>
chris hose corrected resume daren , i found a mispelling on the resume i sent you earlier . here is a revised version . thanks , chris h . get your private , free email at http : / / www . hotmail . com - chris hose management resume . doc
</pre>

## Record 008408

**Label:** `benign`

<pre>
re : sitara positions , end of month feedback from unify robert superty @ ect 11 / 16 / 2000 09 : 02 am to : randall l gay / hou / ect @ ect , edward terry / hou / ect @ ect , victor lamadrid / hou / ect @ ect , tricia spence / hou / ect @ ect , george smith / hou / ect @ ect , beverly beaty / hou / ect @ ect , pat clynes / corp / enron @ enron , patti sullivan / hou / ect @ ect , donna greif / hou / ect @ ect , richard pinion / hou / ect @ ect cc : dave nommensen / hou / ect @ ect , matt pena / na / enron @ enron , bob m hall / na / enron @ enron subject : re : sitara positions , end of month feedback from unify please take note of dave &#x27; s very important message regarding sitara positions . we absolutely cannot afford to go through this again and need to do everything possible to help limit the exposure . with prices where they are and winter weather upon us we will most likely have a very challenging bid week . that being said i want each of you to make sure we adhere to the &quot; daily clean &quot; process . you should pull all the necessary reports each day and keep after the schedulers to make sure they are up to date . if you wish , donna and richard can make these available each day and distribute to the group . we don &#x27; t have much time so this needs to happen immediately . donna , please provide me with a daily summary of all the desks for the remainder of the month . let me know if you have any questions or concerns , thanks - bob from : dave nommensen 11 / 16 / 2000 08 : 31 am to : robert superty / hou / ect @ ect , randall l gay / hou / ect @ ect , george smith / hou / ect @ ect , edward terry / hou / ect @ ect , victor lamadrid / hou / ect @ ect , tricia spence / hou / ect @ ect , beverly beaty / hou / ect @ ect , pat clynes / corp / enron @ enron , patti sullivan / hou / ect @ ect , carlos j rodriguez / hou / ect @ ect , kevin heal / cal / ect @ ect , anita k patton / hou / ect @ ect cc : matt pena / na / enron @ enron , donna greif / hou / ect @ ect , richard pinion / hou / ect @ ect , kathryn bussell / hou / ect @ ect , jeff johnson / corp / enron @ enron , bob m hall / na / enron @ enron , jayant krishnaswamy / hou / ect @ ect , scott mills / hou / ect @ ect , tommy j yanowski / hou / ect @ ect , richard burchfield / hou / ect @ ect subject : sitara positions , end of month feedback from unify bob , et al , as i am sure you recall , we had a problem with sitara positions earlier in the month and had to cease trading early and revert to cpr for positions . although i have not gotten very far in my transition off of unify and onto sitara and tds , we do see some potential for this happening again towards the end of this month and the beginning of next month . the problem with managing positions is a combination of sheer deal counts , along with updates to those deals . a large portion of these updates come to sitara via the unify bridge back process . it would be ideal if we could continue to have the unify data &quot; cleaned / scrubbed &quot; week to week and try to avoid having the bulk of the month being updated / bridged in the final week / days of the month . i know this is the goal of logistics , but i just want to help reinforce that goal due to the performance impact it can have on the gas trading systems . perhaps a few extra pair of eyes on the pipeline exception summary and the bridge back pipeline summary in unify this month would help . another area that causes these transaction counts to increase is the need to have 2 months &quot; active &quot; at a time . in other words , when november is over and we are in the first week or two of december , sitara continues to maintain positions for november . this november data degrades the ability to update december positions in a timely manner . we may find ourselves having to remove the november deals from the sitara positions sooner than we have in the past . i will be trying to work with the sitara team in the coming days / weeks to implement some combination of quick fixes , as well as look into the long term changes necessary to support our increased trading business . please let me know if you have any questions or comments in this area . thanks , d . n .
</pre>

## Record 008409

**Label:** `benign`

<pre>

In a message dated 9/24/2002 11:24:58 AM, jamesr@best.com writes:&gt;This situation wouldn&#x27;t have happened in the first place if California
&gt;didn&#x27;t have economically insane regulations.  They created a regulatory
&gt;climate that facilitated this.  So yes, it is the product of
&gt;over-regulation.
&gt;Which is to say, if you reduce the argument to absurdity, that law causes 
crime. (Yes, I agree that badly written law can make life so frustrating that people 
have little choice but to subvery it if they want to get anything done. This 
is also true of corporate policies, and all other attempts to regulate 
conduct by rules. Rules just don&#x27;t work well when situations are fluid or 
ambiguous. But I don&#x27;t think that the misbehavior of energy companies in 
California can properly be called well-intentioned lawbreaking by parties who 
were trying to do the right thing but could do so only by falling afoul of 
some technicality.)If you want to get to root causes, we should probably go to the slaying of 
Abel by Cain. Perhaps we can figure out what went wrong then, and roll our 
learning forward through history and create a FoRKtopia.Nonpartisanly, which is to say casting stones on all houses, whether 
bicameral or unicameral, built on sand or on rock, to the left of them or to 
the right of them, of glass or brick or twig or straw, Tom

</pre>

## Record 008410

**Label:** `benign`

<pre>

    Guido&gt; Takers?  How is ESR&#x27;s bogofilter packaged?  SpamAssassin?  The
    Guido&gt; Perl Bayes filter advertised on slashdot?Dunno about the other tools, but SpamAssassin is a breeze to incorporate
into a procmail environment.  Lots of people use it in many other ways.  For
performance reasons, many people run a spamd process and then invoke a small
C program called spamc which shoots the message over to spamd and passes the
result back out.  I think spambayes in incremental mode is probably fast
enough to not require such tricks (though I would consider changing the
pickle to an anydbm file).Basic procmail usage goes something like this:    :0fw
    | spamassassin -P    :0
    * ^X-Spam-Status: Yes
    $SPAMWhich just says, &quot;Run spamassassin -P reinjecting its output into the
processing stream.  If the resulting mail has a header which begins
&quot;X-Spam-Status: Yes&quot;, toss it into the folder indicated by the variable
$SPAM.SpamAssassin also adds other headers as well, which give you more detail
about how its tests fared.  I&#x27;d like to see spambayes operate in at least
this way: do its thing then return a message to stdout with a modified set
of headers which further processing downstream can key on.Skip
</pre>

## Record 008411

**Label:** `benign`

<pre>
On Wed, 2 Oct 2002 10:53:24 +0200, Matthias Saou  wrote:&gt; &gt;     Anyway, I have returned to Redhat 7.3 on my root filesystem (saved my
&gt; &gt;     home directories, music and games on other partitions) and while I
&gt; &gt;     have the 8.0 stuff in the list, everything I want to upgrade requires
&gt; &gt;     200+ RPMs.   Yeah, but I try to &#x27;take it easy&#x27; on your server.  The golden rule of the internet: when you find a free resource, don&#x27;t piss&#x27;em off!  :)  I really appreciate your work; you get done the things I wish I could, and I respect that.&gt; Anyway, although I&#x27;d easily recommend upgrading 7.x to 7.3 using apt, I
&gt; wouldn&#x27;t for 7.x to 8.0 as they are C++ binary incompatible... and apt is
&gt; entirely written in C++ and dynamically linked :-/    OK, I&#x27;ll search for the ISOs on the  one remaining site that isn&#x27;t hammered.  :)
 
&gt; Still, that doesn&#x27;t explain a core dump :-(    Sure: this is a linking issue, right?  Right now I&#x27;m still pure-vanilla.  I have the stock version of rpm/rpmlib/popt/etc and the recommended version of apt that you gave me.  No, wait...there&#x27;s no new code getting loaded.  I don&#x27;t know, either.  It&#x27;s been a long day.&gt; &gt;     What&#x27;s the inside secret here, or do I just start searching mirrors
&gt; &gt;     for the ISO and get over it?
&gt; 
&gt; Why &quot;search&quot;? There&#x27;s more than enough to choose from here :
&gt; http://freshrpms.net/mirrors/psyche.html   The hunt continues- with a new field!  (Actually I checked there yesterday, but it&#x27;s worth another shot.)    Thanks!
  
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

## Record 008412

**Label:** `benign`

<pre>
&lt;!--
 body      { BACKGROUND-IMAGE: url(http://images.lockergnome.com/images/issue/top-right.gif); color: #14367A }
 a:link    { COLOR: #2E64DC; TEXT-DECORATION: underline; font-weight: normal }
 a:visited { COLOR: #000000; TEXT-DECORATION: underline; font-weight: normal }
 a:active  { COLOR: GRAY; text-decoration: none }
 a:hover   { color: GRAY; TEXT-DECORATION: none }
 p.title   { BACKGROUND: #2E64DC; BORDER-BOTTOM: #14367A 4px solid; BORDER-LEFT: #94B2EE 4px solid; BORDER-RIGHT: #14367A 4px solid; BORDER-TOP: #94B2EE 4px solid; COLOR: #FFFFFF; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 14pt; FONT-WEIGHT: normal }
 p.sidebar { BACKGROUND: #94B2EE; BORDER-BOTTOM: #2E64DC 3px solid; BORDER-LEFT: #FFFFFF 3px solid; BORDER-RIGHT: #2E64DC 3px solid; BORDER-TOP: #FFFFFF 3px solid; COLOR: #14367A; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 10pt; FONT-WEIGHT: bold; TEXT-ALIGN: center }
 .url      { font-size: 8pt; font-family: Verdana, Tahoma, Arial }
--&gt;
20020716 Lockergnome Apple Core
Â  07.16.2002 GnomeREPORT 
Content Management Is Key: Need a reason your boss should be sending you to Gnomedex? Some of the leading experts on content management solutions (those things we affectionately call blogs) will be sharing the future of blogging and how you can adapt it to both the way you do business and the way you communicate in general. Join Evan Williams and Doc Searls as they share pearls of wisdom on blogging, Linux and other open source applications that are changing our lives. If that&#x27;s not enough incentive, remind the boss that THE Internet security guru, Steve Gibson, will be sharing his wisdom as well. 
Register for Gnomedex today!   Of the comments I received on AppleScript, every single one suggested I 
start with the basics, for that reason,  I&#x27;m going to take things 
step-by-step,  following my own learning process and progressing to 
gradually more difficult concepts. Despite having experience in 
programming, using a variety of languages, I initially found AppleScript 
to be quite intimidating -- mostly because something about the Script 
Editor seems less than intuitive. If you&#x27;ve already been dabbling in 
scripting, the first few columns on the subject will definitely be 
targeted at novices, but I want to everyone to have the chance to get 
up to speed.I&#x27;m off to the 
Shareware Industry Conference for the remainder of the week, 
where it&#x27;s looking like the selection of stuff for Mac users will be very 
bleak. I believe the organization is targeted more toward the Windows 
community in general and any shareware developer with enough cash to get 
there is probably going to be in New York for MacWorld. I&#x27;ll be missing 
out on the Web cast of Steve Jobs speech, which is scheduled to take place 
while I&#x27;m in the car, but at least I&#x27;ll be able to catch the details at 
other Mac sites when I get to St. Louis. Internet access for the trip is 
being provided by Crosspaths.net, which is one of the few dialup services 
I&#x27;ve found that can be configured to relay my Lockergnome mail so that I 
can still function on the road. I tested the service on my iBook this 
evening just to be sure.With some luck, I may be able to get Internet access from the highway, via 
my Kyocera 6035, and see what Jobs had to say before I get to St. Louis. 
Unfortunately, there&#x27;s no support for OS X yet with the 6035, so I can&#x27;t 
use the unlimited nights and weekends to dial the Web from my laptop. A 
landline will probably be more sensible anyway. Check my blog for some 
updates on the trip, Lori&#x27;s attending too and I&#x27;m sure she&#x27;ll be taking 
lots of photos, as usual.See You in August,Â Â Â Â Â Â Â Â Â Â Â Â Â Â Jake LudingtonÂ Â Â Â Â Â Â Â GnomeDOWNLOADS
Same-X v2.0 [1.73MB] OSX 10.1.1 FREE
http://www.thumpbunny.com/Seven themes, two board sizes and your choice of difficulty levels, makes 
this a game for the entertainment addict in all of us. The object is to 
clear the board of all icons, removing them in matching clusters of two 
or greater at a time. Clearing the screen awards bonus points and scoring 
awards clearing of larger clusters. Nothing gets killed, there&#x27;s no 
swearing, but you&#x27;ll find yourself addicted to the mindless fun anyway -- 
not to mention you can feel safe sharing this with kids.
Â GnomeNETWORK
Samba Sharing Package v1.5 [8.3MB] OS X FREE
http://xamba.sourceforge.net/ssp/It remains to be seen whether 10.2 will render this type of application 
unnecessary, but for those out there without the cash to spend on DAVE, 
for small office or home networking of Mac/PC mixed environments, this 
is the only real alternative. Installation and configuration is almost 
painless, making it easy for your Windows machine to see apps on your 
Mac with little difficulty. The interface, like most OS X GUI apps, is 
quite easy to navigate, including user management, connection 
management, and share configuration into a convenient Prefernce pane.Â GnomeSCRIPT
Technically speaking, you could do most of your script writing in a text editing 
application like TextEdit, but ultimately you&#x27;ve got to compile it in the Script 
Editor, so you might as well start there. The Script Editor is located in the 
AppleScript subfolder of your Applications folder. Opening the application for 
the first time reveals a small window divided in to two sections, Description 
and the actual scripting pane, separated by a group of buttons.Ignore the buttons for the moment and concentrate on the two text panes. The 
Description pane is where you label your script, so you can remember later what 
it does. This is also the place you denote the key combination that will invoke 
your script. If you choose to save your script as an executable application, the 
information in the description will show up in the start up screen.The second pane is where the magic happens. In this pane you will be telling 
applications to do specific tasks when your script runs. The format for scripting 
is fairly linear. You either start your script at the top most level drilling 
down, until you actually reach the application or object you want to manipulate 
with your script, or you take the reverse approach manipulating things from the 
bottom up. Telling the &quot;Applications&quot; folder to tell its &quot;Jake&quot; subfolder to tell 
the application &quot;Jake&#x27;s Media Player,&quot; located in that folder to do something 
could also be written by telling the script to access &quot;Jake&#x27;s Media Player&quot; 
located in the &quot;Jake&quot; subfolder of the &quot;Applications folder,  The upcoming example 
will make this a bit more clear.Buy One Inkjet Cartridge - GET TWO FREE!! 
Buy 1 Get 2 FREE on Most Epson, Canon, and Apple
Cartridges. Wholesale Pricing on Lexmark Cartridges.
Free Shipping on orders $25 or more!! U.S. Shipping Only.
Click Here For a Complete List of Cartridges.   
Â GnomeFAVORITE
Glitschka.com
http://www.glitschka.comFlash animations,  downloadable icons, artistic doodles, and details about 
the artist himself are available from this site. You&#x27;re guaranteed to find 
something entertaining here, and if you need a logo designed, Von Robert 
Glitschka might even take you on as a client. The portfolio is extensive, 
including stock images and even some icons by the artist&#x27;s seven year old 
daughter. A must read is the anatomy of an illustration section, which lays 
down artistic opinion, straight from Glitschka&#x27;s mouth on how to make a 
funny creation. This is by no means a Mac only site, the entertainment is 
accessible by everyone and icons are available in both Mac and PC versions.
Â GnomeTIPTraditionally, Mac OS has always placed a link to various disks in use on the 
desktop, which can be convenient, but is no longer necessary with the Finder 
only a Command+Tab away in the Dock. My personal desktop is usually cluttered 
with files I&#x27;ve downloaded from the Internet, so I can never find anything 
when my desktop is in plain sight, the Finder is the only way I stay organized. 
For desktop slobs like me, or for neat freaks who want nothing on the desktop, 
OS X includes three handy options for keeping disks in their place. Open the 
Finder Preferences window and uncheck the three checkboxes under Show these 
items on the Desktop. You&#x27;ll have more space for other icons to clutter the 
desktop or in the case of you clean folk, you&#x27;ll have nothing at all.Tip by Jake
http://www.lockergnome.com/issues/applecore/20020716.html
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
Â Windows XP Tips
Â Top 50 Fun Sites
Â Must-Know Tech Terms
Â Top 50 Useful Sites
Â Top 75 Tech Sites
Â Top 50 PenguinCORE
Â Top 50 PenguinTWEAKSÂ Tell a Friend About Us!
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
Â E-mail the Editors
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
Â 
CLICK HERE TO ZOOMÂ 
LOOK IT UPÂ 
BYTE ME NOWÂ©2002, Lockergnome LLC. ISSN: 1095-3965. All Rights Reserved. Please read our Terms of Service. Our Web site is hosted by DigitalDaze. Domain registered at DNS Central.
</pre>

## Record 008413

**Label:** `benign`

<pre>
URL: http://scriptingnews.userland.com/backissues/2002/09/25#When:6:25:23AM
Date: Wed, 25 Sep 2002 13:25:23 GMTJon Hanna, on the RSS-DEV list, says[1] that RSS, was &quot;not designed to be of 
any particular use to bloggers, aggregators, or metadata providers.&quot; This is 
not true. Half of RSS 0.91 was scriptingNews format[2], which was totally 
designed to model a weblog in XML. [1] http://groups.yahoo.com/group/rss-dev/message/4023
[2] http://my.userland.com/stories/storyReader$11

</pre>

## Record 008414

**Label:** `benign`

<pre>
cmp dash attached is the proposed dash for the central maine power full requirements opportunity . we expect to update our pricing next tuesday and potentially close that same day ( 9 / 11 / 01 ) . please review the dash and let myself or john llodra know if you have any questions . thanks - jim
</pre>

## Record 008415

**Label:** `benign`

<pre>
tw commercial weekly 8 - 24 - 2001 please see attached . palu 713 - 853 - 1480
</pre>

## Record 008416

**Label:** `benign`

<pre>
the solution presentation , text , &amp; budget vincent : attached are the three documents i used in the presentation : the power point slides , the budget , and the written description . if you have any questions , you can e - mail me or call at 972 - 727 - 0999 , or my cell phone at 214 - 213 - 2205 . thanks for the support , and i look forward to working with you . mak - the text portion of the final solution presentation . zip
</pre>

## Record 008417

**Label:** `benign`

<pre>
re : genderless content - length : 719 you wrote : ) most of the genderless languages are sov and their morphology is ) &quot; agglutinative &quot; , in traditional typological terms . ) the realisation of gender tends to be tied closely to the realisation of ) morphological case in the world &#x27;s languages ) e-mail : ortmann @ ling . uni-duesseldorf . de i agree that most genderless languages tend to be agglutinative , but not sov . the austro - asiatic and austronesian languages , for example , contain many examples of non - sov languages which are also genderless . many examples can also be found in africa and the native american languages , which though agglutinative are not sov . paul kekai manansala
</pre>

## Record 008418

**Label:** `benign`

<pre>
Once upon a time, Thomas wrote :&gt; I wanted to find out who tried recompiling a working apt rpm for (null)
&gt; or psyche.  I would like to get good GStreamer packages done by monday
&gt; when it&#x27;s released.I have a working apt 0.5.4cnc7 package for Red Hat Linux 8.0. It will be
available at the same second the distribution will, and so will a complete
apt repository already including quite a few of my packages updated for Red
Hat Linux 8.0.I didn&#x27;t want to say all this before Monday, but as the new release already
leaked from many places, and official statements made about it, it
shouldn&#x27;t be a big deal :-/I&#x27;ll keep you all posted on Monday! They&#x27;ll even be a big apt-related
surprise! ;-))))Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008419

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;E&quot; == Eirikur Hallgrimsson  writes:    E&gt; You just can&#x27;t tell important things from a picture and a few
    E&gt; words.  It&#x27;s not how we are built.  There&#x27;s no geek code for
    E&gt; the heart and soul.Nor is there a Turing Test, even for someone with whom you&#x27;ve spent 11
years, boom, bust and boom again, and 3 children (trust me) There is
no magic litmus test other than the totally empirical: &quot;Try it and
see&quot;&quot;String bags full of oranges
 And matters of the heart,
 People laugh at /anything/
 And things just fall apart.&quot;
 - michael leunigThe only real test, the only /sensible/ test, is to look back and
realize your relationship has lasted 50 years and see no reason to
believe it couldn&#x27;t last another 50.  In the absense of 50 years of
actual (ahem) hands-on experiential data, a photo and a few words are
as good as any, provided you are prepared for the dynamics of it.Love is a verb.  Sex is a /shared/ pursuit.  There is no
&#x27;relation-ship&#x27;, there is only the crew.  sail away!-- 
Gary Lawrence Murphy - garym@teledyn.com - TeleDynamics Communications
 - blog: http://www.auracom.com/~teledyn - biz: http://teledyn.com/ -
  &quot;Computers are useless. They can only give you answers.&quot; (Picasso)

</pre>

## Record 008420

**Label:** `benign`

<pre>
book announcement : classics reissued indiana university linguistics club publications : two classics reissued phonology wilbur , ronnie . the phonology of reduplication . since the appearance of this work in 1973 , it has had continual theoretical significance . wilbur documents cases of under - and over-application of rules to reduplicative forms and the problems they present for rule ordering . she foreshadows current work in optimality theory by rejecting rule ordering and developing a notion akin to reduplicative base - reduplicant identity . this work played an important role in the rule ordering debates of the 1970s , in the development of reduplication theory within prosodic morphology during the 1980s , and currently provides insights to the emerging correspondence theory . copies are * limited * . special reissue price : $ 6 . 50 humor tiersma , peter m . language-based humor in the marx brothers films tiersma &#x27;s popular essay is an excellent introduction to linguistic analysis of humor . using lexical semantics and pragmatics , he gives a sound , yet lively , analysis of specific examples . great resource for introductory linguistics courses , and a good read . price : $ 4 . 00 iulc publications , 720 e . atwater ave . , bloomington , in 47401 . prepaid orders by u . s . check or money order . postage &amp; handling for one or both : add $ 3 . 50 ( us orders ) , $ 5 . 00 ( can ) , $ 5 . 50 ( other ) . &lt; iulc @ indiana . edu &gt; http : / / ezinfo . ucs . indiana . edu / ~ iulc /
</pre>

## Record 008421

**Label:** `benign`

<pre>
new books in syntax &amp; morphology syntax &amp; morphology spontaneous spoken language : syntax and discourse jim miller , university of edinburgh , and regina weinert , university of sheffield the authors examine the types of clauses used by people when they are speaking off the cuff . they also analyze the devices speakers use when organizing larger chunks of language , such as conversations . using data from english , german , and russian , they develop a systematic analysis of spoken english and highlight cross-language properties . they argue that there are major and systematic differences between spoken and written language , and conclude by exploring the implications of their findings for typology , first-language acquisition , and education . may 1998 472 pp . ; 1 linecut 0-19 - 823656 - 5 $ 115 . 00 oxford university press coordination janne bondi johannessen , university of oslo ( oxford studies in comparative syntax ) johannessen focuses on coordination , i . e . structures with conjunctions such as and , but , and or . these are important words in their constructions because they have many properties in common with categories like verbs and prepositions . she has analyzed thirty-three languages and has found many striking similarities , presenting the first study of coordination from a cross-linguistic perspective . her theory of syntactic coordination aims to be general and universal , and is broadly compatible with chomsky &#x27;s minimalist framework . june 1998 304 pp . 0-19 - 823772 - 3 paper $ 35 . 00 0-19 - 823709 - x cloth $ 85 . 00 oxford university press _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ for more information about linguistics titles from oxford university press : visit the oxford university press usa web site at http : / / www . oup-usa . org or e-mail : linguistics @ oup-usa . org
</pre>

## Record 008422

**Label:** `benign`

<pre>
swear to god you have to be so carefull with dell machines and linux. My laptop is the only dell that I&#x27;ve had so far that you could do a quick clean install of linux on. Every machine recently seems to have some cheapo piece of hardware (eth card, modem, sound, graphics ) that is incompatable/unsupported. I don&#x27;t know how long I&#x27;ve spent banging my head off the wall with some crap dell machine that the secretary/store manager/windoze admin of whatever company I&#x27;ve been in has ordered. Ok everything is budget basement these days but they&#x27;re getting the components cheaper as well. If you do buy from dell be damned carefull what you order cause the default config cheapo machines are allways a pain in the hole. --B-----Original Message----- From: deccy@csn.ul.ie [mailto:deccy@csn.ul.ie] Sent: 01 August 2002 23:19 To: ilug@linux.ie Subject: [ILUG] Dell GX260 V Redhat 7.3 Hi, We just got some new Dell GX260 machines here are work and I&#x27;m supposed to be putting Linux on them. I tried installing RedHat 7.3. It just didn&#x27;t want to know about the graphics card. I&#x27;s an onboard Intel DVMT chip. No dedicated memory, it takes it from the onboard RAM.I was wondering if anybody had gotton these machines and had any luck getting this graphics card working?When this graphics card didn&#x27;t work, I installed a PCI Diamond Stealth 64 VRAM card. Xconfigurator auto-detected this and my 21&quot; SUN monitor no problem but whenever it tries to test the configuration it fails and the screen is left with a blue background and all of the text is blue. Does anybody have any idea what the problem is or how to fix it? Cheers, deccy.-- --------------------------------------- Declan Houlihan deccy@csn.ul.ie http://deccy.csn.ul.ie/ ----------------------------------------- Irish Linux Users&#x27; Group: ilug@linux.ie http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information. List maintainer: listmaster@linux.ie-- Irish Linux Users&#x27; Group: ilug@linux.ie http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information. List maintainer: listmaster@linux.ie
</pre>

## Record 008423

**Label:** `benign`

<pre>
Gary Lawrence Murphy:
&gt;Back before they had such clever software, I used to hunt spammers like 
&gt;swamp-rats ..Good for you! You did the world a favor. Personally,
I wouldn&#x27;t know where to hide the bodies. But if
the government didn&#x27;t have this -- um, fussiness --
about shooting vermin, the spam problem would
disappear rather quickly.
_________________________________________________________________
Chat with friends online, try MSN Messenger: http://messenger.msn.comhttp://xent.com/mailman/listinfo/fork

</pre>

## Record 008424

**Label:** `benign`

<pre>
This article from NYTimes.com 
has been sent to you by khare@alumni.caltech.edu.
Axelrod, eh? &quot;the E.coli of social psychology&quot;? Nice to see our old friend still going strong -- Prisoner&#x27;s Dilemma is old enough to qualify for AARP membership!Regarding experimental design, it is interesting that 1) they used an all-female panel and 2) they included a mix of ages, from 20-60 and 3) they used humans, confederates, computers as well as imitations. The last two paragraphs are a rare sign of editorialized humor by an NY Times bylined writer. Even still, note the very large fig leaf -- the CEO joke is introduced in an on-the-record quote. Not that we&#x27;re talking about anything nearly as colorful as the Economist :-)RKkhare@alumni.caltech.edu
Why We&#x27;re So Nice: We&#x27;re Wired to CooperateJuly 23, 2002
By NATALIE ANGIER 
 What feels as good as chocolate on the tongue or money in
the bank but won&#x27;t make you fat or risk a subpoena from the
Securities and Exchange Commission? Hard as it may be to believe in these days of infectious
greed and sabers unsheathed, scientists have discovered
that the small, brave act of cooperating with another
person, of choosing trust over cynicism, generosity over
selfishness, makes the brain light up with quiet joy. Studying neural activity in young women who were playing a
classic laboratory game called the Prisoner&#x27;s Dilemma, in
which participants can select from a number of greedy or
cooperative strategies as they pursue financial gain,
researchers found that when the women chose mutualism over
&quot;me-ism,&quot; the mental circuitry normally associated with
reward-seeking behavior swelled to life. And the longer the women engaged in a cooperative strategy,
the more strongly flowed the blood to the pathways of
pleasure. The researchers, performing their work at Emory University
in Atlanta, used magnetic resonance imaging to take what
might be called portraits of the brain on hugs. &quot;The results were really surprising to us,&quot; said Dr.
Gregory S. Berns, a psychiatrist and an author on the new
report, which appears in the current issue of the journal
Neuron. &quot;We went in expecting the opposite.&quot; The researchers had thought that the biggest response would
occur in cases where one person cooperated and the other
defected, when the cooperator might feel that she was being
treated unjustly. Instead, the brightest signals arose in cooperative
alliances and in those neighborhoods of the brain already
known to respond to desserts, pictures of pretty faces,
money, cocaine and any number of licit or illicit delights.
&quot;It&#x27;s reassuring,&quot; Dr. Berns said. &quot;In some ways, it says
that we&#x27;re wired to cooperate with each other.&quot; The study is among the first to use M.R.I. technology to
examine social interactions in real time, as opposed to
taking brain images while subjects stared at static
pictures or thought-prescribed thoughts. It is also a novel approach to exploring an ancient
conundrum, why are humans so, well, nice? Why are they
willing to cooperate with people whom they barely know and
to do good deeds and to play fair a surprisingly high
percentage of the time? Scientists have no trouble explaining the evolution of
competitive behavior. But the depth and breadth of human
altruism, the willingness to forgo immediate personal gain
for the long-term common good, far exceeds behaviors seen
even in other large-brained highly social species like
chimpanzees and dolphins, and it has as such been difficult
to understand. &quot;I&#x27;ve pointed out to my students how impressive it is that
you can take a group of young men and women of prime
reproductive age, have them come into a classroom, sit down
and be perfectly comfortable and civil to each other,&quot; said
Dr. Peter J. Richerson, a professor of environmental
science and policy at the University of California at Davis
and an influential theorist in the field of cultural
evolution. &quot;If you put 50 male and 50 female chimpanzees
that don&#x27;t know each other into a lecture hall, it would be
a social explosion.&quot; Dr. Ernst Fehr of the University of Zurich and colleagues
recently presented findings on the importance of punishment
in maintaining cooperative behavior among humans and the
willingness of people to punish those who commit crimes or
violate norms, even when the chastisers take risks and gain
nothing themselves while serving as ad hoc police. In her survey of the management of so-called commons in
small-scale communities where villagers have the right, for
example, to graze livestock on commonly held land, Dr.
Elinor Ostrom of Indiana University found that all
communities have some form of monitoring to gird against
cheating or using more than a fair share of the resource. In laboratory games that mimic small-scale commons, Dr.
Richerson said, 20 to 30 percent have to be coerced by a
threat of punishment to cooperate. Fear alone is not highly likely to inspire cooperative
behavior to the degree observed among humans. If research
like Dr. Fehr&#x27;s shows the stick side of the equation, the
newest findings present the neural carrot - people
cooperate because it feels good to do it. In the new findings, the researchers studied 36 women from
20 to 60 years old, many of them students at Emory and
inspired to participate by the promise of monetary rewards.
The scientists chose an all-female sample because so few
brain-imaging studies have looked at only women. Most have
been limited to men or to a mixture of men and women. But there is a vast body of non- imaging data that rely on
using the Prisoner&#x27;s Dilemma. &quot;It&#x27;s a simple and elegant model for reciprocity,&quot; said Dr.
James K. Rilling, an author on the Neuron paper who is at
Princeton. &quot;It&#x27;s been referred to as the E. coli of social
psychology.&quot; &gt;&gt;From past results, the researchers said, one can assume
that neuro- imaging studies of men playing the game would
be similar to their new findings with women. The basic structure of the trial had two women meet each
other briefly ahead of time. One was placed in the scanner
while the other remained outside the scanning room. The two
interacted by computer, playing about 20 rounds of the
game. In every round, each player pressed a button to
indicate whether she would &quot;cooperate&quot; or &quot;defect.&quot; Her
answer would be shown on-screen to the other player. The monetary awards were apportioned after each round. If
one player defected and the other cooperated, the defector
earned $3 and the cooperator nothing. If both chose to
cooperate, each earned $2. If both opted to defect, each
earned $1. Hence, mutual cooperation from start to finish was a far
more profitable strategy, at $40 a woman, than complete
mutual defection, which gave each $20. The risk that a woman took each time she became greedy for
a little bit more was that the cooperative strategy would
fall apart and that both would emerge the poorer. In some cases, both women were allowed to pursue any
strategy that they chose. In other cases, the non- scanned
woman would be a &quot;confederate&quot; with the researchers,
instructed, unbeknown to the scanned subject, to defect
after three consecutive rounds of cooperation, the better
to keep things less rarefied and pretty and more lifelike
and gritty. In still other experiments, the woman in the scanner played
a computer and knew that her partner was a machine. In
other tests, women played a computer but thought that it
was a human. The researchers found that as a rule the freely
strategizing women cooperated. Even occasional episodes of
defection, whether from free strategizers or confederates,
were not necessarily fatal to an alliance. &quot;The social bond could be reattained easily if the defector
chose to cooperate in the next couple of rounds,&quot; another
author of the report, Dr. Clinton D. Kilts, said, &quot;although
the one who had originally been `betrayed&#x27; might be wary
from then on.&quot; As a result of the episodic defections, the average
per-experiment take for the participants was in the $30&#x27;s.
&quot;Some pairs, though, got locked into mutual defection,&quot; Dr.
Rilling said. Analyzing the scans, the researchers found that in rounds
of cooperation, two broad areas of the brain were
activated, both rich in neurons able to respond to
dopamine, the brain chemical famed for its role in
addictive behaviors. One is the anteroventral striatum in the middle of the
brain right above the spinal cord. Experiments with rats
have shown that when electrodes are placed in the striatum,
the animals will repeatedly press a bar to stimulate the
electrodes, apparently receiving such pleasurable feedback
that they will starve to death rather than stop pressing
the bar. Another region activated during cooperation was the
orbitofrontal cortex in the region right above the eyes. In
addition to being part of the reward-processing system, Dr.
Rilling said, it is also involved in impulse control. &quot;Every round, you&#x27;re confronted with the possibility of
getting an extra dollar by defecting,&quot; he said. &quot;The choice
to cooperate requires impulse control.&quot; Significantly, the reward circuitry of the women was
considerably less responsive when they knew that they were
playing against a computer. The thought of a human bond,
but not mere monetary gain, was the source of contentment
on display. In concert with the imaging results, the women, when asked
afterward for summaries of how they felt during the games,
often described feeling good when they cooperated and
expressed positive feelings of camaraderie toward their
playing partners. Assuming that the urge to cooperate is to some extent
innate among humans and reinforced by the brain&#x27;s feel-good
circuitry, the question of why it arose remains unclear.
Anthropologists have speculated that it took teamwork for
humanity&#x27;s ancestors to hunt large game or gather difficult
plant foods or rear difficult children. So the capacity to
cooperate conferred a survival advantage on our forebears. Yet as with any other trait, the willingness to abide by
the golden rule and to be a good citizen and not cheat and
steal from one&#x27;s neighbors is not uniformly distributed. &quot;If we put some C.E.O.&#x27;s in here, I&#x27;d like to see how they
respond,&quot; Dr. Kilts said. &quot;Maybe they wouldn&#x27;t find a
positive social interaction rewarding at all.&quot; A Prisoner&#x27;s Dilemma indeed.
http://www.nytimes.com/2002/07/23/health/psychology/23COOP.html?ex=1028415440&amp;ei=1&amp;en=2face896773fa4eaHOW TO ADVERTISE
---------------------------------
For information on advertising in e-mail newsletters 
or other creative advertising opportunities with The 
New York Times on the Web, please contact
onlinesales@nytimes.com or visit our online media 
kit at http://www.nytimes.com/adinfoFor general information about NYTimes.com, write to 
help@nytimes.com.  Copyright 2002 The New York Times Company
http://xent.com/mailman/listinfo/fork

</pre>

## Record 008425

**Label:** `benign`

<pre>

Hmmm.  Rumsfeld and Cheney are in
the white house, the president says
he&#x27;s not a crook (and no, you can&#x27;t
have those tapes), and the market is
melting down.Anyone want to go to Andy Capps for
a beer?  I hear they have this new
game called &quot;Pong&quot;...Have a nice day,
-DaveAnyone seen Elvis lately?http://xent.com/mailman/listinfo/fork

</pre>

## Record 008426

**Label:** `benign`

<pre>
fw : recent deal ( re : ecf ) fyi - - - - - original message - - - - - from : goodpasture , john sent : wednesday , may 02 , 2001 9 : 46 am to : bilberry , michael ; hilgert , chris cc : mrha , jean subject : recent deal congratulations on closing the deal with formosa , teppco , et al . it sounds like it was a very complex negotiation with a number of different players . clean fuels is certainly pleased with the new long term storage arrangement with formosa . we will begin working with them to better define the operating parameters ( timing , pressures , volumes , etc ) so we can develop the specific facility plans and cost estimates as necessary . you had also mentioned that you might be willing to share the management presentation that was put together for this deal ? that would be very interesting reading and i would appreciate a copy if possible . thanks again , john goodpasture
</pre>

## Record 008427

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-5,8305902,1717/
Date: 2002-09-27T09:52:31+01:00(Stuff.co.nz)

</pre>

## Record 008428

**Label:** `benign`

<pre>
calls : workshop on american indigenous languages ( wail ) workshop on american indigenous languages santa barbara , ca may 9-10 , 1998 the linguistics department at the university or california , santa barbara issues a call for papers to be presented at its first annual workshop on american indigenous languages ( wail ) . the workshop will be a forum for the discussion of theoretical and descriptive linguistic studies of indigenous languages of the americas . the workshop will take place on saturday and sunday may 9-10 , 1998 on the campus of the university of california , santa barbara . our invited speakers will be nicola bessel , wallace chafe , and marianne mithun . dr . bessell has worked extensively on the phonetics / phonology interface in coeur d &#x27; alene salish . dr . chafe &#x27;s current research involves documentation of the seneca and caddo languages . he is also writing a popular book on the importance of native american languages . dr . mithun has just completed a book on the languages of north america for the green series put out by cambridge university press . anonymous abstracts are invited for talks on any topic in linguistics . talks will be 20 minutes , followed by 10 minutes for discussion . individuals may submit abstracts for one single and one co-authored paper . abstracts should be one page with a 500 word limit . a separate page for data and references may be included , if necessary . abstracts may be submitted in hardcopy or by email . the deadline for receipt of abstracts is february 22 , 1998 . for hardcopy submittal , please send four copies of your anonymous one-page abstract . in the envelope , include a 3x5 card with the following information : a . name b . affiliation c . mailing address d . phone number e . e-mail address f . title of your paper hardcopy abstracts should be mailed to : workshop on american indigenous languages department of linguistics university of california , santa barbara santa barbara , ca 93106 email submissions are encouraged . to submit an abstract by email , the information that would be included on the 3x5 card should be in the body of the email message , with the anonymous abstract sent as an attachment . email abstracts should be sent to : wail @ humanitas . ucsb . edu deadline for receipt of abstracts : february 22 , 1998 notification of acceptance will be by email in mid - march . general information santa barbara is situated on the pacific ocean near the santa ynez mountains . the ucsb campus is located near the santa barbara airport , and is approximately 90 miles north of lax airport in los angeles . shuttle buses run from lax to santa barbara several times each day . information about hotel accomodations will be provided on request . crash space for participants may be available with graduate students in the ucsb linguistics department for those who arrange early . wail is co-sponsored by the ucsb linguistics department and the department &#x27;s native american indian languages ( nail ) study group , which has been meeting regularly in santa barbara since 1990 , providing a forum for the discussion of issues relating to native american language and culture . for further information contact the conference coordinator at wail @ humanitas . ucsb . edu or ( 805 ) 893-3776 .
</pre>

## Record 008429

**Label:** `benign`

<pre>
hello vince , nie bardzo wiem czy pisac po polsku czy po angielsku : ) co u ciebie slychac ? u mnie troche zmian jak ze juz nie pracuje w scem , a przenioslem sie do mieco ( a small marubeni backed energy - america trading company ) . bardzo rozne od scem . najbardzij przypomina mi scem na poczatku z joe , jak bylo 20 - 30 osob . sa i minusy i plusy . troche structure i research ale przede wszystkim weather . trrovhe latam miedzy east i west bo sa officy w obydwu miejscach . california jest ok w zimie : ) . na bardziej personalnym froncie ; pamietasz dinner na ktory poszlismy kiedys na conferencji w ny z catherine ( she used to work for williams - works for morgan stanley now ) , we are dating ( for a while ) . it is a good story how we met . so we owe you dinner : ) jak bylem w atlancie to pracowala dla mnie christa grey . bedzie teraz konczyla grad school in international relations ( with eastern european slant ) , i zastanawia sie czy sa jakies mozliwosci polaczenia tego co robila ze &quot; wschodem &quot; . co robila to bylo przede wszystkim vb implementations modeli , ( roznego rodzaju ) , web based data collections , basic research , teraz jest w gas structuring etc . she speaks russian and was in ukraine / poland few times on peace corp assingments . she is very bright and dedicated . myslalem zeby ja zwabic do californii ale ten eastern european pociag jest u niej silniejszy niz u mnie : ) . i have here resume , wiec jak bys myslal ze jest jakis fit i will foreward it to you . troche tak mieszanka pisze , przepraszam bede chyba w houston w pazdzierniku to moze bysmy sie mogli spotkac . latwiej pewnie by bylo w ny ( mieszkam po nj stronie ( rent jest inny niz w atlancie : ) ( 201 ) 222 - 0435 ) , wiec daj mi znac jakbys mial czas i ochote . thanks roman
</pre>

## Record 008430

**Label:** `benign`

<pre>
books : pragmatics now available : proceedings of the university of herfordshire relevance theory workshop . edited by marjolein groefsema isbn 0-952 - 9901 - 0 - 5 this volume contains fifteen of the papers that were presented at the university of hertfordshire rt workshop , which was held in hatfield peverel from 27-29 october 1995 . the aim of the workshop was to bring together researchers working within the framework of relevance theory to dicuss their research and exchange ideas . the papers presented in this volume reflect the wide range of topics that are currently being studied from a relevance theoretical perspective , while some of the papers critically assess aspects of relevance theory . table of contents : a pragmaticization process affecting norwegian negatives with scalar expressions . thorstein fretheim relevance , referring expression , and the givenness hierarchy . jeanette gundel and ann mulkern relevance and the peircean conception of truth . william downes the awsome efficiency of what is false . gloria origgi and adriano palma conceptual and procedural encoding : criteria for the identification of linguistically encoded procedural information . steve nicolle concepts and word meaning . marjolein groefsema relevance and the manipulation of the incongruous : some explorations on verbal humour . carmen curco relevance theory and augmentative and alternative communication . john clibbens ellipsis and inference kaja borthen , thorstein fretheim and randi alice nilsen representation and relevance in human reasoning . simon handley and edward buck the relevance of face calibration koenraad kuiper relevance theory and extraposed relative clauses . yael ziv the relevance of relevance theory to syntactic phenomena : relevance theory and the extraction from relative clauses . tali rubovitz issues in developmental &quot; theory of mind &quot; research from the point of view of relevance theory . szabolcs kiss &quot; if you would like to burn your mouth feel free &quot; : a relevance - theoretic account of conditionals used to children . susan foster - cohen and erika konrad price including p &amp; p : uk 10 . 00 pounds sterling europe 11 . 00 pounds sterling rest of the world 13 . 00 pounds sterling to order : please send a cheque , made out to peter thomas , or an international money order to the address below . unfortunately , there are no facilities to handle credit cards . peter thomas and associates &#x27; the sticks &#x27; , cardfields lane hatfield peverel , chelmsford cm3 2nr uk _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ dr marjolein groefsema dept . of linguistics email : m . groefsema @ herts . ac . uk university of hertfordshire tel . + 1707 285699 ( direct line ) watford campus aldenham herts . wd2 8at uk
</pre>

## Record 008431

**Label:** `benign`

<pre>
Once upon a time, Joshua wrote :&gt; Just a thought, would it be possible to generalize this ALSA 
&gt; stuff to make building a kernel with *any* custom/optional/updated
&gt; modules an easy thing? I think some scripts or at least step-by-step
&gt; instructions would be great. 
&gt; 
&gt; For example, to build a kernel RPM with ALSA do:
&gt; 1. get the kernel source
&gt; 2. get the ALSA source
&gt; 3. run the custom-kernel.sh script
&gt; ...
&gt; 
&gt; Or a kernel RPM with the lastest wireless LAN drivers:
&gt; 1. get the kernel source
&gt; 2. get the CVS driver source
&gt; 3. run the custom-kernel.sh script
&gt; ...
&gt; 
&gt; etc.This wouldn&#x27;t be worth the effort involved IMHO, and would probably end up
in relative breakage of a few systems if not carefully tested.
Your first example is a good one, because I really think it&#x27;s even easier
currently :
1. Leave your current kernel as-is
2. Get the &quot;alsa-driver&quot; source rpm
3. Rebuild and install resulting packagesDrivers that are written to be easily compiled as modules (like ltmodem,
NVidia, ALSA etc.) can easily be repackaged separately as rpms and ported
as easily for various kernel rpms from the source rpm.Also, what you describe is sort of the opposite of what rpm packaging is in
my mind. I see it more as a &quot;one size fits all&quot; achievement in the general
case. And kernel isn&#x27;t an exception (although there are packages optimized
for various processors) since they all come with just about all the modules
you&#x27;ll ever need. Make that &quot;one size fits many&quot; then if you want ;-)Last but not least : The kernel is something I&#x27;m trying to keep away from
in my packaging since I really don&#x27;t want to see newbies screwing up their
systems because of packages on my website... same goes for GNOME, KDE and
other major bits of the distribution since I also want people who happily
use my packages to be able to upgrade to the next Red Hat Linux release
without having their system turned into another Ximian mess.MatthiasPS: Yes Chris, I&#x27;m worried about not giving you too much work! Less in fact
since you can easily answer &quot;freshrpms.net!&quot; to people asking how to play
DVDs, right? ;-))))-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008432

**Label:** `benign`

<pre>
position announcement the department of near eastern studies of the university of michigan is inviting applications for a tenure-track appointment in arabic language and culture . an assistant professor level is authorized , but senior candidates may be considered . applicants must hold the ph . d . degree and be able to teach both undergraduate and graduate courses in arabic language and linguistics and also teach courses that treat language as a social and cultural phenomenon ( for example , how language is used in the construction of nationalism , ethnicity , gender , and political rhetoric ) . applicants should specifically identify their research interests within language-and - culture studies and describe the lecture courses they can and wish to teach . the department of near eastern studies has strengths in both classical and modern arabic language and literature , in islamic religion , and in the history of the middle east . we seek a colleague who will complement the present staff and who will broaden our curricular offerings in language and culture . applicants should send a curriculum vitae , including bibliography , we well as no more than three samples of their scholarly research . named referees need not send their letters at the time of application . send application to chair , arabic language and culture search committee , department of near eastern studies , 3074 frieze building , university of michigan , ann arbor , mi 48109-1285 . we shall begin processing applications as soon as possible after january 1 , 1995 . the university of michigan is an affirmative action , equal opportunity employer .
</pre>

## Record 008433

**Label:** `benign`

<pre>
agreement attached are my comments based on my meeting with robert jones / hr . laura
</pre>

## Record 008434

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-2,8443954,1440/
Date: Not suppliedHundreds of US transfusion patients are set to receive red blood cells cleaned 
with compounds that inactivate viruses and bacteria

</pre>

## Record 008435

**Label:** `benign`

<pre>
re : manual wires - mary , the rate &amp; currency business requirement is to be able to get a next day fx wire done through 5 : 00 pm in unify . this unify systems transaction would then interface to accountsfpayable and then to treasury via the related systems processes . . as discussed on the phone , please call laurel or myself if more informationis needed . sheila - - - - - - - - - - - - - - - - - - - - - - forwarded by sheila glover / hou / ect on 09 / 11 / 2000 12 : 59 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron global finance from : mary perkins 09 / 11 / 2000 12 : 44 pm to : sheila glover / hou / ect @ ect cc : brent a price / hou / ect @ ect , sally beck / hou / ect @ ect , laurel adams / hou / ect @ ect , theresa t brogan / hou / ect @ ect , sam round / hou / ect @ ect subject : re : manual wires - sign off sheila changes to the manual list for north america need to be authorized by wes and sally . we are specifically limiting the number of signers . i think that what we need to do is immediately address the issues that are causing your wires to miss the standard process . we did not have the issue prior to sap . please outline your processing requirements and we can work together with ap and sap to fix the underlying issue . thanks for the help . mary from : sheila glover 09 / 11 / 2000 10 : 54 am to : mary perkins / hou / ect @ ect cc : brent a price / hou / ect @ ect , sally beck / hou / ect @ ect , laurel adams / hou / ect @ ect , theresa t brogan / hou / ect @ ect subject : manual wires - sign off mary , i want my name and theresa brogan &#x27; s added to the authorized approvers on manual wires . thanks , sheila - - - - - - - - - - - - - - - - - - - - - - forwarded by sheila glover / hou / ect on 09 / 11 / 2000 10 : 52 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : sheila glover 09 / 08 / 2000 10 : 09 am to : mary perkins / hou / ect @ ect , larry dallman / gpgfin / enron @ enron , wes colwell / hou / ect @ ect cc : frieda schutza / gpgfin / enron @ enron , carolyn centilli / corp / enron @ enron , laurel adams / hou / ect @ ect , brent a price / hou / ect @ ect , sally beck / hou / ect @ ect subject : manual wires mary , larry and wes , we just received a faxed copy of the manual wire and same day payment memo which was sent by betty tauzier on 8 / 28 / 00 . rate &amp; currency trades fx which is settled the following day and requires next day payments for fx . currently we are severely hampered because our infomation is required into unify by 2 : 30 for an accounts payable run at 4 : 00 for next day payments . we are still trading after these cut - offs and tying out the day &#x27; s activity with trading . therefore , we currently have to rely on manual wires to make payments to our counterparties on the value date . we need to get timeframes which mirror our business requirements . i would like to get the accounts payable run for our companies , 842 and 967 , moved to after 5 : 00 pm . information is not due to the bank until next day . 8 : 00 am london time . please let laurel and me know what changes can be done to our processing flows . thanks . sheila
</pre>

## Record 008436

**Label:** `benign`

<pre>
eastrans nom - 5 / 24 / 2000 this is to nom 32 , 500 mmbtu into eastrans for 5 / 24 . 5 / 23 volume was reduced to 7 , 800 mmbtu with all redeliveries coming from fuels cotton valley . duke only - for 5 / 24 , the redeliveries will be 25 , 000 mmbtu per day at carthage into enron &#x27; s cartwheel agreement and 7 , 800 from fuels cotton valley . sales at the tailgate will be 4 , 250 mmbtu / d for 5 / 24 . for 5 / 23 , the sales will be 7 , 020 mmbtu / d .
</pre>

## Record 008437

**Label:** `benign`

<pre>
URL: http://boingboing.net/#85513221
Date: Not suppliedThe Joint Hearing of the Senate Committee and Senate Select Committee on the 
Entertainment Industry is underway in LA, investigating artists&#x27; claims that 
the labels engage in unfair and corrupt business-practices. The first day&#x27;s 
findings at the hearings are really quite remarkable:     By contract, artists are prohibited from showing royalty statements to 
    third parties. Normally this would not include their mangers, lawyers, 
    consultants, or others who could aid them in getting paid, but apparently 
    this is not necessarily the case. Senator Kevin Murray, leading the 
    initiative for artists&#x27; rights, claimed the that Cary Sherman, Chief 
    Counsel for the RIAA himself, said to him in an interview, that RIAA 
    members (the major labels) would sue any artist that broke ranks and shared 
    information with the Committee. This claim was rejected by Sherman but 
    supported by others in the room. Don Henley, among them, outwardly dared 
    his record company to sue him for bringing royalty statements to the 
    hearing. He presented his most recent royalty statement for &quot;Hell Freezes 
    Over,&quot; which showed the panel that even though his contract called for a no 
    more than a 10% &quot;reserve&quot; on sales of records shipped, Universal Music had 
    held back more than that for eleven pay periods (roughly under three years) 
    and that, even though his contract calls for no free goods in Europe, they 
    had deducted $87,000 in free goods charges to Europe.  Link[1] Discuss[2] (_Thanks, Paul!_)[1] http://www.musicdish.com/mag/?id=6675
[2] http://www.quicktopic.com/boing/H/jU9jRkFhUcp

</pre>

## Record 008438

**Label:** `benign`

<pre>
hello all : please send an email to : ibuyit @ enron . com stating that you are approver of invoices as requested in the email below . thanks ! shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 04 / 17 / 2001 07 : 44 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : ibuyit / enron @ enronxgate on 04 / 16 / 2001 05 : 20 pm to : dl - ibuyit payables - all @ / o = enron / ou = na / cn = recipients / cn = dl - ibuyitpayables - all @ ex @ enronxgate cc : john gill / eu / enron @ enron , erin abdelnour / enron @ enronxgate , shelley robbins / enron @ enronxgate , sally mcadams / enron @ enronxgate , joe cuccia / enron @ enronxgate , judy knepshield / enron _ development @ enron _ development subject : thank you for identifying yourself as a future ibuyit payables user ! the ibuyit project team wants to make sure that your receive the information , tools , and support that you need to successfully transition to the new system on may lst . ibuyit payables training for houston - based coders overview sessions will be held this week , monday through thursday , at the doubletree hotel , nautile room , at 9 : 00 am and 2 : 00 pm . these one - hour sessions will provide you with a demonstration of the system and an opportunity to ask questions about the new system . no registration is necessary . hands - on classroom training will begin next week . these sessions will provide you with the opportunity to complete real - life exercises in the system . please contact the isc registrar to register . ibuyit payables training for field - based coders don &#x27; t worry ! we have not forgotten about you ! on - line materials will be available beginning next week via the integrated solution center document library at . materials will include an overview of the system and step - by - step instructions . you will receive an e - mail with links to these materials next week . ibuyit payables approvers we need your help to identify future ibuyit approvers . please encourage the people that approve your invoices to identify themselves as future ibuyit users by sending an email with their name , e - mail address , and whether they code or approve invoices to &gt; . on - line materials for approvers will be available beginning next week via the integrated solution center document library at . materials will include an overview of the system and step - by - step instructions . identified approvers will receive an e - mail with links to these materials next week . questions ? send an e - mail to &gt;
</pre>

## Record 008439

**Label:** `benign`

<pre>
coling-acl &#x27; 98 , last call for participation coling-acl &#x27; 98 last call for participation - - - - - - - - - - - - - - - - - - - - - - - - - - - avoid the line-ups and hassle of on-site registration ! pre - register for coling-acl &#x27; 98 before you come to montreal via the online registration form available on the conference web site : http : / / coling-acl 98 . iro . umontreal . ca detailed instructions are provided on the registration form . we look forward to seeing you in montreal ! the coling-acl &#x27; 98 organizing committe
</pre>

## Record 008440

**Label:** `benign`

<pre>
uk linguists : invitation i am forwarding the following message on behalf of the people who are responsible for inspecting teaching in all our linguistics departments . please circulate to colleagues who do n&#x27;t subscribe to linguist . xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx &quot; 18 november 1994 1995-96 higher education quality assessment programme as you may be aware , the higher education funding council for england ( hefce ) is required under the terms of the further and higher education act 1992 to secure that provision is made for assessing the quality of education in institutions for whose activities they provide financial support . the council has welcomed this obligation and sees assessment of education as a vitally important part of its work . assessments are carried out within specific subject areas and assessors , who are experts in their fields , visit institutions to judge the quality of the student learning experience that they observe . one of the eight subjects to be covered in the 1995-96 programme is linguistics . other subjects which are included and which could be linked in assessment with linguistics are german &amp; related languages , french , russian &amp; eastern european languages , italian , and iberian . the subject specialist assessors must have industrial , commercial or professional experience in their subject , coupled with a broad knowledge of higher education : it is unlikely that anyone at a junior level will have sufficient authority . the minimum commitment will be to take part in four assessments visits between april 1995 and september 1996 ( a total commitment of 20 days of which just 14 will require an absence from the workplace ) . each specialist assessor will be paid a per diem rate of l150 including vat , and travel and subsistence costs will be met by the council . full training will , of course , be received by assessors aimed at developing their assessment skills . this focuses particular attention on role and use of self-assessments , and on the conduct of assessment activities , including the protocol to be observed when carrying out assessment visits . further particulars on the role of subject specialist assessors can be found in circular 33 / 94 which has been sent to all he institutions in england , scotland and northern ireland . if any members of your association would be interested in becoming assessors , or even simply in finding out more about the role of an assessor without committing themselves , there is an informal meeting on 5 december in london and two others on 6 and 12 december in birmingham at which they would be most welcome . in which case , please contact shirley cook on 0272 317461 as soon as possible . &quot; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx please do not send inquiries etc to me - i &#x27; m just the postman ! dick hudson dept of phonetics and linguistics , university college london , gower street , london wc1e 6bt uclyrah @ ucl . ac . uk
</pre>

## Record 008441

**Label:** `benign`

<pre>
confirmation of your order this is an automatic confirmation of the order you have placed using it central . request number : ecth - 4 r 5 mlm order for : vince j kaminski 1 x ( standard desktop $ 1262 ) 1 x ( standard 21 &quot; monitor $ 739 ) enron it purchasing
</pre>

## Record 008442

**Label:** `benign`

<pre>
tw transportation contract # 25374 michelle , please ammend contract # 25374 to include the month of february 2001 . thanks , andrew pacheco
</pre>

## Record 008443

**Label:** `benign`

<pre>
envision meeting structures and way forwards sally as discussed beth / brent you may be interested in how the original idea has moved on - progress ? ! mike - - - - - - - - - - - - - - - - - - - - - - forwarded by mike jordan / lon / ect on 04 / 04 / 2001 16 : 16 - - - - - - - - - - - - - - - - - - - - - - - - - - - steve whitaker 30 / 03 / 2001 12 : 33 to : diccon vokins / eu / enron @ enron , stephen lally / eu / enron @ enron , andrew cornfield / lon / ect @ ect , anna mcandrew / eu / enron @ enron , ian sloman / lon / ect @ ect , gail hill / lon / ect @ ect , raewyn perkins / lon / ect @ ect , rod sayers / lon / ect @ ect , mike jordan / lon / ect @ ect , stephen wood / lon / ect @ ect , paul bromley / eu / enron @ enron , melissa allen / lon / ect @ ect , buddy aiken / lon / ect @ ect , richard sage / lon / ect @ ect , james sandt / lon / ect @ ect , peter hutton / eu / enron @ enron , graham dunbar / lon / ect @ ect cc : fernley dyson / lon / ect @ ect , mark pickering / lon / ect @ ect , mike jordan / lon / ect @ ect , phil yoxall / lon / ect @ ect , james new / lon / ect @ ect , ect london strategic initiatives subject : envision meeting structures and way forwards at the last envision project meeting the following presentation was given and agreed in principal as the way we will take things forwards . whilst the names within each area have to be confirmed and agreed i thought that it would be useful to circulate this as many of you will be impacted . i will be communicating this further over the next few days , but if you have any immediate questions please feel free to contact me . regards steve ( 35266 )
</pre>

## Record 008444

**Label:** `benign`

<pre>
re : 3 . 396 chomsky citations i think that the large number of chomsky citations in linguistics is unfortunately due largely to the authoritarian nature of the chomsky - spawned linguistics that gets done : theory is simply not acceptable until it has received the imprimatur of chomsky , by his penning an essay or book which incorporates a student &#x27;s or accolyte &#x27;s idea . this is not so much an impugnment of chomsky : i personally think he is a great linguist ( and political observer ) ; it is rather an impugnment of the chomsky disciples . i gather that the ship of modern ( generative ) linguistics is so terribly tossed in the gales of ( what counts as ) science that every hand looks to the captain for guidance . and so , too often , the captain wears a halo . i think that chomsky would be cited less if linguistics was either more of a science than it is or at least more than its practitioners seem to believe .
</pre>

## Record 008445

**Label:** `benign`

<pre>
URL: http://diveintomark.org/archives/2002/10/03.html#when_an_engineer_flaps_his_wings
Date: 2002-10-03T01:31:51-05:00Remember that saying from chaos theory about how when a butterfly flap its 
wings, it can cause a hurricane a month later halfway around the world? As 
several people have already noted, Google has made some major changes in their 
most recent update. The weblogging community was hit hard (for instance, I used 
to be the #1 &quot;mark&quot;[1]; I am now #6). The changes appear to be the result of an 
attempt to stop two phenomena: explicitly selling ads based on PageRank[2], and 
Google bombing[3]. Specifically, Google is now apparently cross-checking link text with the linked 
site, and discounting or ignoring links whose text does not appear in the 
linked site. This all but kills off Google bombing. Searching for &quot;go to hell&quot;
[4] no longer takes you to microsoft.com[5]; searching for &quot;talentless hack&quot;[6] 
no longer finds ohmessylife.com[7], although it finds a lot of people who were 
previously participating in the Google bombing. No definitive word yet on 
whether Google is actively penalizing such sites. Unfortunately, the algorithm tweaks necessary to stop these two techniques have 
caused a wide range of collateral damage, apparently coming down hardest on 
medium-to-large sites that had previously been doing everything right (as far 
as page structure, link structure, accessibility, and general honest hard work 
putting together a usable and useful site). The Webmasterworld forums are alive 
with complaints and speculation: - New update, pagerank death?[8] 
- September 2002 Google Update Discussion - part 1[9] 
- Let&#x27;s find out what happened - Sept 2002 Update - pt. 2[10] (Side note: amongst the confusion, it has been suggested that Google is no 
longer indexing ALT text in images. I can confirm that this is absolutely 
false. Searching diveintomark.org for &quot;gimli&quot;[11] finds my entry of July 29[12]
, where &quot;Gimli&quot; is mentioned only in the ALT text of an image.) Regardless, Google&#x27;s search results in general appear to be significantly 
degraded in many key areas. The forums are full of people complaining that spam 
sites, doorway pages, and obvious cloaking attempts, which Google used to be so 
good at filtering out, are now popping up in top spots with disturbing 
frequency. Nobody in the forums wants to talk about which keywords they&#x27;re 
tracking, so I tried to find my own concrete example of crap search results. It 
didn&#x27;t take long. - Searching for reservation hotel[13] brings up an empty sub-page[14] of a 
hotel reservation company in Italy[15] as the first result. This seems 
unhelpful, and unlikely to be relevant to the average US-based consumer (and 
Google absolutely knows I&#x27;m in the US based on my IP address). 
- Searching for news observer nc[16] (the News &amp; Observer is a Raleigh, NC 
newspaper) does find The News &amp; Observer[17], but it also finds an Internet 
betting spam page[18] at #7 and a non-existent page[19] at #9. 
- Searching for eminem[20] gives us two generic portal pages, a non-existent 
site, and a site that redirects to a site that continuously redirects to itself 
(I am not making this up). And this is just on the first page. Good thing I 
didn&#x27;t care that much about Eminem to begin with, because Google just isn&#x27;t 
that helpful. Many people in the Webmasterworld forums are now suggesting that AllTheWeb.com
[21] has better search results overall. Just as a single comparison, their 
results for &quot;eminem&quot;[22] do appear to be much more relevant. Is this the 
beginning of the end of Google&#x27;s reign?[1]  http://www.google.com/search?q=mark
[2]  http://www.pradnetwork.com/affiliate.htm
[3]  http://uber.nu/2001/04/06/
[4]  http://www.google.com/search?q=%22go+to+hell%22
[5]  http://www.microsoft.com/
[6]  http://www.google.com/search?q=talentless+hack
[7]  http://www.ohmessylife.com/
[8]  http://www.webmasterworld.com/forum3/5646.htm
[9]  http://www.webmasterworld.com/forum3/5688.htm
[10] http://www.webmasterworld.com/forum3/5723.htm
[11] http://www.google.com/search?q=gimli+site%3Adiveintomark.org
[12] http://diveintomark.org/archives/2002/07/29.html
[13] http://www.google.com/search?q=reservation+hotel
[14] http://www.venere.it/home/italy.html
[15] http://www.venere.it/
[16] http://www.google.com/search?q=news+observer+nc
[17] http://www.news-observer.com/
[18] http://www.linkslsgolfworld.com/king-arthur-knight-of-the-round-table.htm
[19] http://www.nando.net/nt/nao/
[20] http://www.google.com/search?q=eminem
[21] http://www.alltheweb.com/
[22] http://www.alltheweb.com/search?query=eminem

</pre>

## Record 008446

**Label:** `benign`

<pre>
On Wednesday 28 August 2002 04:38 pm, Daniel Quinlan wrote:
&gt; Matthew Cline  writes:
&gt; &gt; There must be *some* way of tracking a spammer down, since they are
&gt; &gt; planning on making money from the spam.  What a court would consider
&gt; &gt; evidence of being the spammer is another question.&gt; Haha!!!&gt; Just a few notes:&gt;  - It will be difficult to find, prosecute, and win money from someone
&gt;    in various non-friendly countries where spam originates (China is a
&gt;    good example) even if they do officially &quot;respect&quot; copyright law.SA (and other filters) could be configured to ignore the SWE mark if it 
appears to come from/through China.&gt;  - Spammers do not always remember to include contact information!  I
&gt;    don&#x27;t understand it either, but nobody said they were bright.  Also,
&gt;    some spam is non-commercial or sent by a third-party (for example,
&gt;    &quot;pump and dump&quot; stock scams), so contact information is not strictly
&gt;    required for the spammer to get their way.SA could also be configured so that SWE marks are ignored in messages that 
look like third-party spam (like stock scams).  Of course, this would still 
mean that &quot;The U.N. is going to invade America!&quot; spams with SWE would get 
through.  Probably also need to ignore SWE in messages that look like 
Nigerian scams.-- 
Give a man a match, and he&#x27;ll be warm for a minute, but set him on
fire, and he&#x27;ll be warm for the rest of his life.ICQ: 132152059 | Advanced SPAM filtering software: http://spamassassin.org
-------------------------------------------------------
This sf.net email is sponsored by: Jabber - The world&#x27;s fastest growing 
real-time communications platform! Don&#x27;t just IM. Build it in! 
http://www.jabber.com/osdn/xim
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk
</pre>

## Record 008447

**Label:** `benign`

<pre>
origination to be granted to edem louise , we have been pre - paying the positions to some of our customers . some of them have been selling swaps to get rid financially of the pemex fixed price contract , and then re - purchasing the swaps . in some cases they are asking to get pre - paid , so we call treasury and calculate the npv with the discoutn rate they give us ( usually enron &#x27; s cost of funds ) . however , i have been able to increase the discount rate in various cases , so that we offer a better alternative to the customer , than their own cost of funds . it has worked and i think we can increase our margins by keep on doing that . questions : can we get credit for the origination on top of enron &#x27; s treasury rate ? if so , with whom should i speak to get it granted to edem ? best regards .
</pre>

## Record 008448

**Label:** `benign`

<pre>
sempra ( daily firm ) shipper : sempra energy trading corp . contract : 27491 daily firm term : 02 / 01 / 01 thru 02 / 28 / 01 rec . pt / volume : poi 56498 ( bloomfield compressor ) 10 , 000 dth / d rec . pt / volume poi 58646 ( west texas pool ) 5 , 000 dth / d del . pt / volume poi 10487 ( socal needles ) 15 , 000 dth / d
</pre>

## Record 008449

**Label:** `benign`

<pre>
I need to setup a VPN between a few sites. From what I&#x27;ve read, the the
choices come down (on the Linux side) to IPsec (using FreeSWAN) or CIPE.
It seems that FreeSWAN is &#x27;better&#x27;, being an implementation of IPsec which
is a standard. However, CIPE does the job as well for Linux clients and is
somewhat simpler to setup. The problem is that it&#x27;s not a pure Linux situation - a couple of the sites
run OS-X. I&#x27;m pretty sure that I&#x27;ll be able to find an implementation of
IPsec for OS-X, but I think CIPE is Linux only.So, the question is for those of you have have implemented BOTH - is there a
significant difference in setup time and hassle between CIPE and FreeSWAN ?
If CIPE is going to be much easier than dealing with FreeSWAN (and whatever
on the OS-X sites) then I&#x27;ll simply get a Linux box for each of the remote
sites - with the low price of hardware, it doesn&#x27;t take much more complexity
in software to make buying hardware to use simpler software economic.Niall-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008450

**Label:** `benign`

<pre>
icl 1995 , seoul : 3rd and final announcement , and program 1995 international conference on linguistics marking the 20 anniversary of the foundation of the linguistic society of korea july 3 - 7 , 1995 paiknam music hall , hanyang university seoul , korea organized by the linguistic society of korea invited speakers jeanette k . gundel ( usa , university of minnesota ) roland r . hausser ( germany , universit = 84t n = 81rnberg - erlangen ) paul kiparsky ( usa , stanford university ) ivan sag ( usa , stanford university ) joseph p . stemberger ( usa , university of minnesota ) dong - whee yang ( korea ) program schedule monday , july 3 , 1995 09 : 00 - registration 10 : 00 - opening ceremony 10 : 50 - break 11 : 00 - session 1 : kiparsky 1 12 : 20 - lunch 13 : 20 - session 2 : hausser 1 14 : 40 - break 14 : 50 - session 3 : sag 1 16 : 10 - break 16 : 20 - session 4 : yang 1 tuesday , july 4 , 1995 09 : 30 - session 5 : sag 2 10 : 50 - break 11 : 00 - session 6 : yang 2 12 : 20 - lunch 13 : 20 - session 7 : stemberger 1 14 : 40 - break 14 : 50 - session 8 : kiparsky 2 16 : 10 - break 16 : 20 - session 9 : gundel 1 wednesday , july 5 , 1995 09 : 30 - session 10 : hausser 2 10 : 50 - break 11 : 00 - session 11 : gundel 2 12 : 20 - lunch 13 : 20 - session 12 : stemberger 2 14 : 40 - break 14 : 50 - paper presentation 1 16 : 10 - break 16 : 20 - paper presentation 2 thursday , july 6 , 1995 09 : 30 - session 13 : yang 3 10 : 50 - break 11 : 00 - session 14 : hausser 3 12 : 20 - lunch 13 : 20 - session 15 : kiparsky 3 14 : 40 - break 14 : 50 - panel discussion on korean linguistics 16 : 10 - break 16 : 20 - panel discussion on korean linguistics ( continued ) friday , july 7 , 1995 09 : 30 - session 16 : gundel 3 10 : 50 - break 11 : 00 - session 17 : stemberger 3 12 : 20 - lunch 13 : 20 - session 18 : sag 3 14 : 40 - break 14 : 50 - paper presentation 3 16 : 10 - break 16 : 20 - paper presentation 4 18 : 00 - reception lecture titles jeanette k . gundel 1 . cognitive status and linguistic form . i . reference and the givenness hierarchy 2 . cognitive status and linguistic form . ii . a cross - linguistic study of referring expressions 3 . cognitive status and linguistic form . iii . syntax and topic - comment structure roland r . hausser database semantics for the interpretation of natural language 1 . slim theory of language : building a robot that can communicate in natural language 2 . theoretical foundations : comparing different types of semantics , their syntax and their complexity 3 . computational implementation : semantic and pragmatic interpretation of natural language in an extended database paul kiparsky 1 . variation and optimality theory : quantitative effects of categorial constraints 2 . markedness and linguistic hierarchies 3 . exploring typological space : harmony systems ivan sag 1 . head - driven phrase structure grammar : a tutorial overview of current theory 2 . issues in french and universal grammar 3 . extraction without transformations or traces joseph p . stemberger optimality theory and phonological development 1 . basic issues of optimality theory 2 . syllables and feet in phonological development 3 . segmental development dong - whee yang 1 . recent developments in the minimalist program : the attract - f theory 2 . motivations and prospects of the attract - f theory 3 . the korean case structure in the attract - f theory panel discussion on korean linguistics subject linguistics in north korea : its background and current trend paper presentation : kwang chung ( korea univ . ) ha - soo kim ( yonsei univ . ) min - su kim ( korea univ . ) hyon - sook shin ( sang myung women &#x27;s univ . ) jae - kee shim ( seoul national univ . ) registration anyone who wants to participate in the conference is suggested to send a registration form containing one &#x27;s name in full , affiliation , address , phone number ( office / home ) , one &#x27; s status ( regular member , student , or non-member ) . if the reader has korean name , namely in &quot; hangeul &quot; , he or she is required to include his or her korean name . on - site registration is also possible . = 20 tae - ok kim president , professor of english and linguistics the linguistic society of korea dept . of english , sogang university young - seok kim secretary general , professor of english and linguistics the linguistic society of korea dept . of english , sogang university the linguistic society of korea phone : + 82 2 706 5526 c / o department of english fax : + 82 2 705 8291 sogang university email : ktaeok @ ccs . sogang . ac . kr seoul , 121-742 , south korea
</pre>

## Record 008451

**Label:** `benign`

<pre>
tammy , attached is the spreadsheet i promised with those employees who are left to be placed on the 5 th floor . i have excluded those texas groups going to aep and included the new wellhead logistics group . if for any reason this changes after sally beck has the opportunity to review it , i will advise you asap . also , i believe sally may be interested in finding an office for beth apollo , vp close to her on the 5 th floor . please call if you have any questions . thanks ! heather choate , x 33278
</pre>

## Record 008452

**Label:** `benign`

<pre>

BlogStart: **Cypherpunks**: Tax havens and offshore islands are not quite as &#x27;&#x27;free&#x27;&#x27;
-- at least in terms of personal liberties -- as people might think.  R.
A. Hettinga tells some stories about &#x27;&#x27;Triumph, the Fabulous
Crotch-Sniffing Caymanian Customs Wonder Dog, ... and (the Cayman-born
expat&#x27;s kid) who was literally exiled from the island when the island
constabulary &quot;discovered&quot; a marijuana seed or three in his summer-break
rental car a few years back.&#x27;&#x27;I guess it&#x27;s back to the oil rigs then ;)BlogEnd: 
LinkText: tells some stories------- Forwarded MessageDate:    Sun, 11 Aug 2002 12:31:56 -0400
From:    &quot;R. A. Hettinga&quot; 
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1At 3:36 PM +1000 8/11/02, David Hillary wrote:
&gt; I think that tax havens such as the Cayman Islands should be ranked
&gt; among the freest in the world. No taxes on business or individuals
&gt; for a start. Great environment for banking and commerce. Good
&gt; protection of property rights. Small non-interventionist
&gt; government.Clearly you&#x27;ve never met &quot;Triumph&quot;, the Fabulous Crotch-Sniffing
Caymanian Customs Wonder Dog at extreme close range, or heard the
story about the expat&#x27;s college age kid, actually born on Cayman, who
was literally exiled from the island when the island constabulary
&quot;discovered&quot; a marijuana seed or three in his summer-break rental car
a few years back.I mean, his old man was some senior cheese at Global Crossing at the
time, but this was back when they could do no wrong. If that&#x27;s what
they did to *his* kid, imagine what some poor former
junk-bond-hustler might have to deal with someday for, say, the odd
unauthorized Cuban nightlife excursion. A discretely folded twenty
keeps the stamp off your passport on the ground in Havana, and a
bottle of Maker&#x27;s Mark goes a long way towards some interesting
nocturnal diversion when you get there and all, but still, you can&#x27;t
help thinking that Uncle&#x27;s going to come a-knockin&#x27;, and that Cayman
van&#x27;s going to stop rockin&#x27; some day, and when it does, it ain&#x27;t
gonna be pretty.
Closer to home, conceptually at least, a couple of cryptogeeken were
hustled off and strip-searched, on the spot, when they landed on
Grand Cayman for the Financial Cryptography conference there a couple
of years ago. Like lots of cypherpunks, these guys were active
shooters in the Bay Area, and they had stopped in Jamaica, Mon, for a
few days on the way to Grand Cayman. Because they, and their stuff,
reeked on both counts, they were given complementary colorectal
examinations and an entertaining game of 20 questions, or two,
courtesy of the Caymanian Federales, after the obligatory fun and
games with a then-snarling Crotch-Sniffing Caymanian Wonder Dog.
Heck, I had to completely unpack *all* my stuff for a nice, well-fed
Caymanian customs lady just to get *out* of the country when I left.
Besides, tax havens are being increasingly constrained as to their
activities these days, because they cost the larger nation-states too
much in the way of &quot;escaped&quot; &quot;revenue&quot;, or at least the perception of
same in the local &quot;free&quot; press. Obviously, if your money &quot;there&quot;
isn&#x27;t exchangeable into your money &quot;here&quot;, it kind of defeats the
purpose of keeping your money &quot;there&quot; in the first place, giving
folks like FinCEN lots of leverage when financial treaties come up
for renegotiation due to changes in technology, like on-line
credit-card and securities clearing, or the odd governmental or
quango re-org, like they are wont to do increasingly in the EU, and
the US.As a result, the veil of secrecy went in Switzerland quite a while
ago. The recent holocaust deposit thing was just the bride and groom
on that particular wedding-cake, and, as goes Switzerland, so goes
Luxembourg, and of course Lichtenstein, which itself is usually
accessible only through Switzerland. Finally, of course, the Caymans
themselves will cough up depositor lists whenever Uncle comes calling
about one thing or another on an increasingly longer list of fishing
pretexts.At this point, the &quot;legal&quot;, state-backed pecuniary privacy pickings
are kind of thin on the ground. I mean, I&#x27;m not sure I&#x27;d like to keep
my money in, say, Vanuatu. Would you? Remember, this is a place where
a bandana hanging on a string across an otherwise public road will
close it down until the local erst-cannibal hunter-gatherer turned
statutorily-permanent landowner figures out just what his new or
imagined property rights are this afternoon.
The point is, any cypherpunk worth his salt will tell you that only
solution to financial or any other, privacy, is to make private
transactions on the net, cheaper, and more secure, than &quot;transparent&quot;
transactions currently are in meatspace. Then things get *real*
interesting, and financial privacy -- and considerably more personal
freedom -- will just be the icing on the wedding cake. Bride and
groom action figures sold separately, of course.Cheers,
RAH
(Who went to FC2K at the Grand Cayman Marriott in February that year.
Nice place, I liked Anguilla better though, at least at the time, and
I haven&#x27;t been back to either since. The beaches are certainly better
in Anguilla, and the &quot;private&quot; banking system there is probably just
as porous as Cayman&#x27;s is, by this point. If I were to pick up and
move Somewhere Free outside Your Friendly Neighborhood Unipolar
Superpower, New Zealand is somewhere near the top of my list, and
Chile would be next, though things change quickly out there in
ballistic-missile flyover country. In that vein, who knows, maybe
we&#x27;re in for some kind of latter-day Peloponnesian irony, and
*Russia* will end up the freest place on earth someday. Stranger
things have happened in the last couple of decades, yes?)-----BEGIN PGP SIGNATURE-----
Version: PGP 7.5iQA/AwUBPVYS48PxH8jf3ohaEQKwtgCgw/XSwzauabEP/8jDvUVk/rgFdroAn0xf
Owk90GoK+X5Pv+bGoKXCwzBK
=1w9d
-----END PGP SIGNATURE------- 
-----------------
R. A. Hettinga 
The Internet Bearer Underwriting Corporation 
44 Farquhar Street, Boston, MA 02131 USA
&quot;... however it may deserve respect for its usefulness and antiquity,
[predicting the end of the world] has not been found agreeable to
experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27;
</pre>

## Record 008453

**Label:** `benign`

<pre>
URL: http://www.mozillazine.org/weblogs/hyatt/#85399441
Date: Not suppliedTony Davis wrote in his blog:_All Mozilla did is steal Netscape&#x27;s thunder. _True, but if Netscape had actually bothered to put valuable additions into its 
product, then that wouldn&#x27;t have happened. Similarly, if Netscape hadn&#x27;t taken 
away valuable features from Mozilla, then maybe people would actually want to 
use Netscape over Mozilla.

</pre>

## Record 008454

**Label:** `benign`

<pre>
ernest scatton hi . does anybody have an internet address of ernest scatton ? the bitnet address that i have ( escatton @ albnyvms . bitnet or equivalently escatton @ albnyvms ) is out of reach for my node . please send the answer to my personal address : bertinet @ sns . it thanks for your help . pier marco bertinetto scuola normale superiore , pisa
</pre>

## Record 008455

**Label:** `benign`

<pre>
Ryanair in partnership with Primary Insurance
offer excellent value travel insurance from
Â£7.00GBP/9.00 Euro per person for 31 day cover.Annual travel insurance* from Â£45.00GBP/63.00 Euro,
includes 24 days winter sports cover !Our travel insurance provides a high standard of cover.Summary of Cover
	
Medical Expenses up to Â£2 million
Personal Liability  up to Â£2 million
Personal Effects &amp; Baggage up to Â£750
Personal Accident Maximum Benefit Â£15,000
Hospital Benefit up to Â£300
Cancellation up to Â£500
Curtailment up to Â£500
Travel Delay up to Â£60
Missed Departure up to Â£300
Personal Money up to Â£500
Legal Expenses up to Â£5000
Holiday Abandonment up to Â£500All figures in Sterling poundsTo book your Primary travel insurance policy
click http://www.primarytrade.co.uk/internetsales/ryanair/or call Ryanair Direct Reservations now on:0871 246 0002 (UK)	0818 304 304 (IRELAND)Primary Insurance also offer excellent rates onGolf Insurance from Â£15.00GBP/19.00 Euro
per passenger for 31 day coverSki insurance from Â£35.00GBP/45.00 Euro
per passenger for 31 day coverCover is only available to habitual residents of the UK and Ireland.*only available through the web.
====================================================================E-MAIL DISCLAIMERThis e-mail and any files and attachments transmitted with it
are confidential and may be legally privileged. They are intended
solely for the use of the intended recipient.  Any views and
opinions expressed are those of the individual author/sender
and are not necessarily shared or endorsed by Ryanair Holdings plc
or any associated or related company. In particular e-mail
transmissions are not binding for the purposes of forming
a contract to sell airline seats, directly or via promotions,
and do not form a contractual obligation of any type.
Such contracts can only be formed in writing by post or fax,
duly signed by a senior company executive, subject to approval
by the Board of Directors.The content of this e-mail or any file or attachment transmitted
with it may have been changed or altered without the consent
of the author.  If you are not the intended recipient of this e-mail,
you are hereby notified that any review, dissemination, disclosure,
alteration, printing, circulation or transmission of, or any
action taken or omitted in reliance on this e-mail or any file
or attachment transmitted with it is prohibited and may be unlawful.If you have received this e-mail in error
please notify Ryanair Holdings plc by emailing postmaster@ryanair.ie
or contact Ryanair Holdings plc, Dublin Airport, Co Dublin, Ireland.=====================================================================E-MAIL DISCLAIMERThis e-mail and any files and attachments transmitted with it 
are confidential and may be legally privileged. They are intended 
solely for the use of the intended recipient.  Any views and 
opinions expressed are those of the individual author/sender 
and are not necessarily shared or endorsed by Ryanair Holdings plc 
or any associated or related company. In particular e-mail 
transmissions are not binding for the purposes of forming 
a contract to sell airline seats, directly or via promotions, 
and do not form a contractual obligation of any type.   
Such contracts can only be formed in writing by post or fax, 
duly signed by a senior company executive, subject to approval 
by the Board of Directors.The content of this e-mail or any file or attachment transmitted 
with it may have been changed or altered without the consent 
of the author.  If you are not the intended recipient of this e-mail, 
you are hereby notified that any review, dissemination, disclosure, 
alteration, printing, circulation or transmission of, or any 
action taken or omitted in reliance on this e-mail or any file 
or attachment transmitted with it is prohibited and may be unlawful.If you have received this e-mail in error 
please notify Ryanair Holdings plc by emailing postmaster@ryanair.ie
or contact Ryanair Holdings plc, Dublin Airport, Co Dublin, Ireland.  
---
You are currently subscribed to customers as: zzz-ryanair@spamassassin.taint.org
To unsubscribe send a blank email to leave-customers-949326K@mail.ryanairmail.com

</pre>

## Record 008456

**Label:** `benign`

<pre>

In a message dated 9/23/2002 6:30:31 PM, khare@alumni.caltech.edu writes:&gt; why you&#x27;re writing with a double of scotch :-)because, obviously, after the inevitable second double, you won&#x27;t remember 
anything you say unless you write it down :-)Tom

</pre>

## Record 008457

**Label:** `benign`

<pre>

    &gt;&gt; Dunno about the other tools, but SpamAssassin is a breeze ...
    &gt;&gt; SpamAssassin also adds other headers as well, which give you more
    &gt;&gt; detail ...    Guido&gt; Do you feel capable of writing such a tool?  It doesn&#x27;t look too
    Guido&gt; hard.Sure, but at the moment I have to stop reading email for a few hours and do
some real work. ;-) I&#x27;ll see if I can modify GBayes.py suitably over the
weekend.Skip

</pre>

## Record 008458

**Label:** `benign`

<pre>
enside draft good afternoon ! attached , please find the combined interview notes for the first draft of the article for the enside newsletter . read and review your sections - they are divided by color . vince , please check &#x27; everything &#x27; for content and accuracy . feel free to make corrections and delete anything as you see fit . please make changes and then send back to me . i need it by wednesday , april 4 , if possible . call me if you have any questions ! kathie grabstald ews public relations x 3 - 9610 p . s . i am looking forward to the photo shoot on friday , march 30 at 2 : 30 pm . i will meet you all in front of the building at the big e !
</pre>

## Record 008459

**Label:** `benign`

<pre>
re : new global counterparty change request system thanks very much for your comments . i too applaud the groups &#x27; efforts on the new request system ! this is the kind of improvement in our processes that we should all be seeking on a regular basis . it &#x27; s nice to know this one hit the mark and adds value to our customers &#x27; processes as well . kim s theriot 03 / 03 / 2000 09 : 55 am to : mary solmonson / hou / ect @ ect cc : bernice rodriguez / hou / ect @ ect , samuel schott / hou / ect @ ect , mary g gosnell / hou / ect @ ect subject : new global counterparty change request system just wanted to drop you a note to let you know how pleased we are with the new global counterparty change request system . i had the opportunity to use it yesterday . it is very easy to use and very user friendly ! also it is very efficient , since we no longer have to remember who handles what party of the alphabet . we love the fact that we can work on a request and save it as a draft before finalizing it . also like the ability to view our own request so that we can view the status . overall , your group has done a great job on this project ! kim theriot
</pre>

## Record 008460

**Label:** `benign`

<pre>
On Thursday 18 July 2002 14:49, Ray Kelly wrote:
&gt; one basic option that I know of is Squidalyser, http://ababa.org/
&gt; This doesn&#x27;t do everything that you want but I&#x27;ve found
&gt; it useful myself on a number of fronts
&gt; Now it won&#x27;t hive off things that have been downloaded but
&gt; it your cache is so tuned and you&#x27;ve got the dick space you
&gt; can keep some rather large objects in that.dick space?
large objects?This is ILUG right?-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008461

**Label:** `benign`

<pre>
re : entelligence postings i have opened the specialist position and it will be posted on our site tomorrow morning . the requisition number is 0000103595 . as an note , avril forster is shown in the system as being in organization unit : eel - enron direct . i have forwarded the clerk position to gretchen jennings for posting as she is the recruiter for the administration positions . linda ext . 30637 mary solmonson 04 / 25 / 2000 04 : 06 pm to : alexus rhone / corp / enron @ enron , linda vargo / hou / ect @ ect cc : avril forster / corp / enron @ enron , sally beck / hou / ect @ ect subject : entelligence postings vp approval for out of budget additions are in process - verbal approval received today . please post both internally and externally . - - - - - - - - - - - - - - - - - - - - - - forwarded by mary solmonson / hou / ect on 04 / 25 / 2000 04 : 03 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - avril forster @ enron 04 / 25 / 2000 03 : 25 pm to : mary solmonson / hou / ect @ ect cc : subject : entelligence postings hi mary , here are the 2 posting forms with your name as dept . manager approver , sally &#x27; s name as vp approver and myself as requester to be forwarded to linda vargo for posting . linda suggested posting the positions internally for 5 days and then posting them externally . although it would be great to get people on board from within the company , i think we should just get the postings out everywhere asap . also , linda required the following questions to be answered : internal or external posting ? to be posted both internally and externally are these positions already budgeted ? no , they will have to come from out of budget relocations costs to be provided ? relocation costs will be provided for specialist and above positions but not for clerk , senior clerk positions . the same also applies for agency fees , ( yes to specialist and above , and no to clerk / senior clerk ) . here are the postings to be approved by sally . thanks , avril
</pre>

## Record 008462

**Label:** `benign`

<pre>
renewal notice for your domain name ( s ) dear register . com subscriber , the domain name ( s ) listed below will expire on : wed , aug 08 , 2001 . register . com offers the following renewal features : 1 - quick renew , the easy renewal feature you can use at any time or 2 - saferenew ( tm ) , our automatic renewal service . the domain names below may be enrolled in this feature . see below for more information . in order to protect your online identity , it is recommended that you renew your domain name ( s ) now using our easy quick renew feature . click on the link ( s ) below or copy and paste the appropriate link ( which may be broken into two lines ) into the address or location field of your web browser for each domain name you would like to renew : expiration date : wed , aug 08 , 2001 mousemillions . com mousemaniacs . com the domains above are enrolled in saferenew automatic renewal service . this means that upon expiration , we will automatically renew these domain name ( s ) and charge the credit card on file for the domain name ( s ) for one additional year of registration at $ 34 . 99 per name . this service will ensure that these domain names are secured in the registry for one additional year from the current expiration date . to verify that your billing and credit card information is current , please log into domain manager at http : / / mydomain . register . com and click on the billing contact link . if you do not wish to use register . com &#x27; s saferenew automatic renewal service , you may either renew your name ( s ) now through quick renew , or visit the following url to log in to disable the service : questions ? for more information on renewing your domain name ( s ) through register . com , please visit : http : / / www . register . com / faq / renewal . cgi to contact a customer support representative online , please visit : or call : toll free in the u . s . and canada : ( 877 ) 209 - 1434 outside the u . s . and canada : + 1 ( 212 ) 798 - 9277 all domain name registrations and renewals are subject to the terms and conditions of our services agreement , which can be found at : thank you for using register . com , the first step on the web ( tm ) . customer support register . com , inc . http : / / www . register . com - copy and pasting instructions - highlight the url with your cursor . once you have highlighted the url , hit ctrl + c ( for mac &quot; open apple &quot; + c ) to copy the highlighted area . open an internet browser window and click in the address or location field . hit ctrl + v ( for mac &quot; open apple &quot; + v ) to paste the url into the address field . if necessary , repeat this process with the second line of the url . please be sure to delete spaces if there are any in the url - otherwise you will not be able to connect to the proper page . once you have entered and looked over the url , hit the &#x27; enter &#x27; or &#x27; return &#x27; key on your keyboard . the web page displayed will allow you to renew your domain name ( s ) . notification id : 1221927
</pre>

## Record 008463

**Label:** `benign`

<pre>
vince kaminski &#x27; s discussion notes for the enterprise wide risk management meeting , january 21 attached please find the discussion notes for the offsite meeting on friday , february 4 th . if you have any questions or comments , please let me know . vince kaminski ( by shirley crenshaw ) 3 - 3848
</pre>

## Record 008464

**Label:** `benign`

<pre>
re : proposals for tutorials &amp; workshops * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ * * | _ _ | / \ | | | \ | | | / / _ \ / _ \ * * | | / _ \ | | | \ | | | ( _ ) | ( _ ) | * * | | / _ _ _ \ | | _ _ _ | | \ | \ _ _ , | \ _ _ , | * * | _ / _ / \ _ \ _ _ _ _ _ | _ | \ _ | / _ / / _ / * * * * * * taln &#x27; 99 * * traitement automatique du langage naturel * * * * institut d &#x27; etudes scientifiques de cargese ( corse ) * * du 12 au 17 juillet 1999 . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ( see english version below ) taln &#x27; 99 workshops &amp; tutoriels appel a propositions cargese ( corse ) du 12 au 17 juillet 1999 nous avons le plaisir de vous annoncer que la sixieme edition de la conference sur le traitement automatique des langues naturelles ( taln &#x27; 99 ) se tiendra a l &#x27; institut d &#x27; etudes scientifiques de cargese , corse . le succes croissant du colloque taln a conduit les organisateurs a proposer que taln &#x27; 99 soit desormais une manifestation etalee sur une semaine , qui inclura des tutoriels et accueillera des ateliers thematiques ( workshops ) . la date du colloque est arretee a la semaine du 12-17 juillet . les langues officielles pour les communications et tutoriels sont le frangais et l &#x27; anglais . ateliers thematiques ( workshops ) les ateliers se derouleront en parallele sur la base de 4 seances de 1h30 reparties sur 4 jours . ceux qui souhaitent organiser un atelier sont pries de faire parvenir au comite d &#x27; organisation , par courrier electronique de preference , une courte proposition decrivant le theme de l &#x27; atelier , la pertinence de son regroupement avec taln , et un comite de programme envisage . le responsable d &#x27; un workshop est charge de l &#x27; appel a candidature et de la coordination de son comite de programme . les communications seront incluses dans les actes . tutoriels les tutoriels se derouleront en parallele sur la base de 4 seances de 2h reparties sur 4 jours . ceux qui souhaitent proposer un tutoriel sont pries de faire parvenir au comite d &#x27; organisation , par courrier electronique de preference , une courte proposition decrivant le sujet et le contenu du cours , la pertinence pour taln et les renseignements d &#x27; usage sur le ou les enseignants envisage ( s ) . un resume du cours pourra etre inclus dans les actes . date limite de depot des candidatures : 20 septembre 98 notification : fin septembre 98 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - we are pleased to announce that the sixth conference on natural language processing ( taln99 ) will be held at the institute for scientific studies at carghse , corsica , france . as the previous editions of taln have been increasingly successful , taln99 will last a whole week , and will include both workshops and tutorials . the date for the conference is set to the third week of july ( july 12-17 ) . the official languages for the conference are french and english . workshops workshops will be held in parallel , on the basis of four sessions of one hour and a half , distributed across four days . if you would like to organize a workshop , please send to the organizing committee , preferably via email , a short proposal describing the topic of the workshop , its relevance with respect to the main conference , and the program committee you consider . call for papers , and program committee coordination are left to workshop organizers . accepted papers will be included in the proceedings . tutorials tutorials will be held in parallel , on the basis of four sessions of two hours , distributed across four days . if you would like to propose a tutorial , please send to the organising committee , preferably via email , a short proposal describing the topic and the content of the tutorial , its relevance for the conference , and usual data about the teacher ( s ) . a summary of the tutorial will be included in the proceedings . deadline for submission : 20 september 98 notification : end of september 98 comite d &#x27; organisation / organizing committee anne abeille pascal amsili ( president / chair ) laurence danlos sylvain kahane marie - helene candito patrick caudal lionel clement manuela leahu laurent roussarie et les autres membres de l &#x27; equipe talana and the other members of the talana team * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * taln &#x27; 99 * * mailto : taln99 @ talana . linguist . jussieu . fr * * http : / / talana . linguist . jussieu . fr / taln99 * * talana - ufrl - universite de paris 7 * * case 7003 - 2 , pl . jussieu tel . : ( 33 ) 1 44 27 53 70 * * 75251 paris cedex 05 - france fax : ( 33 ) 1 44 27 79 19 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * - - - - - - end of forwarded message
</pre>

## Record 008465

**Label:** `benign`

<pre>
re : weather and energy price data mulong , we shall send you natural gas henry hub prices right away . please look at the last winter and the winter of 95 / 96 . we shall prepare for you the electricity price information ( cinergy , cobb and palo verde ) but you have to approach ft ( the publishers of megawatts daily , a newsletter that produces the price index we recommend using ) and request the permision to use the data . we are not allowed to distribute this information . please , explain that this is for academic research and that we can produce the time series for you , conditional on the permission from the publishers of megawatts daily . vince kaminski mulong wang on 04 / 15 / 2001 03 : 43 : 26 am to : vkamins @ ect . enron . com cc : richard macminn subject : weather and energy price data dear dr . kaminski : i am a phd candidate under the supervision of drs . richard macminn and patrick brockett . i am now working on my dissertation which is focused on the weather derivatives and credit derivatives . could you kindly please offer me some real weather data information about the price peak or plummet because of the weather conditions ? the past winter of 2000 was very cold nationwide , and there may be a significant price jump for natural gas or electricity . could you please offer me some energy price data during that time period ? your kind assistance will be highly appreciated and have a great day ! mulong
</pre>

## Record 008466

**Label:** `benign`

<pre>
http://www.informationwave.net/news/20020819riaa.php
  IWT Bans RIAA From Accessing Its NetworkAugust 19, 2002Information Wave Technologies has announced it will actively deny the
Recording Industry Association of America (RIAA) from accessing the
contents of its network. Earlier this year, the RIAA announced its new plan
to access computers without owner&#x27;s consent for the sake of protecting its
assets. Information Wave believes this policy puts its customers at risk of
unintentional damage, corporate espionage, and invasion of privacy to say
the least.Due to the nature of this matter and RIAA&#x27;s previous history, we feel the
RIAA will abuse software vulnerabilities in a client&#x27;s browser after the
browser accesses its site, potentially allowing the RIAA to access and/or
tamper with your data. Starting at midnight on August 19, 2002, Information
Wave customers will no longer be able to reach the RIAA&#x27;s web site.
Information Wave will also actively seek out attempts by the RIAA to thwart
this policy and apply additional filters to protect our customers&#x27; data.Information Wave will also deploy peer-to-peer clients on the Gnutella
network from its security research and development network (honeynet) which
will offer files with popular song titles derived from the Billboard Top
100 maintained by VNU eMedia. No copyright violations will take place,
these files will merely have arbitrary sizes similar to the length of a 3
to 4 minute MP3 audio file encoded at 128kbps. Clients which connect to our
peer-to-peer clients, and then afterwards attempt to illegally access the
network will be immediately blacklisted from Information Wave&#x27;s network.
The data collected will be actively maintained and distributed from our
network operations site.The placement of this policy is not intended to hamper the RIAA&#x27;s piracy
elimination agenda or advocate Internet piracy, but to ensure the safety of
our customers&#x27; data attached to our network from hackers or corporate
espionage hidden by the veil of RIAA copyright enforcement.If you have questions, comments, or concerns regarding this policy, please
e-mail riaa@informationwave.net.
-- 
-----------------
R. A. Hettinga 
The Internet Bearer Underwriting Corporation 
44 Farquhar Street, Boston, MA 02131 USA
&quot;... however it may deserve respect for its usefulness and antiquity,
[predicting the end of the world] has not been found agreeable to
experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27;
http://xent.com/mailman/listinfo/fork
</pre>

## Record 008467

**Label:** `benign`

<pre>
summary : french creole apres for progressive the original question concerned the use of apres in french creoles for the progressive rather than the perfect which would be expected on typological grounds . the enormous response precludes listing all who answered . it would seem that the moral of the story is that one should n&#x27;t assume what is normal in any given case . in this instance , it was simply incorrect to assume that standard french en train de was normal ; in fact , it would appear that standard french has innovated in this respect . according to respondants , the apres construction for the progressive is found in many vernacular french &#x27;s including canadian , swiss and cajun . one would assume that the vernacular is the source of the creole progressive . the semantics of apres is only strange on the assumption that the form means &quot; after . &quot; it does appear that the vernacular progressive preserves the original sense of a - pres , which in fact conforms to expectations based on cross-linguistic study . in standard french , the corresponding expression is aupres . many respondents drew my attention to the &quot; after ving &quot; construction of english dialect . h . rogers at uoft informs me that the construction is a perfect and not a progressive ; i have since confirmed this analysis . in addition to welsh , scots gaelic has an &quot; after ving &quot; perfect that is the likely source of the construction . apparently the preposition in scots gaelic ( air ) now means &quot; on &quot; outside of the progressive construction ( an deigh &quot; after &quot; ) . thanks again to all who responded . it was an interesting exercise .
</pre>

## Record 008468

**Label:** `benign`

<pre>

&gt; I just had to jump in here as Carbonara is one of my favourites to make and 
&gt; ask 
&gt; what the hell are you supposed to use instead of cream? Isn&#x27;t it just basically a mixture of beaten egg and bacon (or pancetta, 
really)? You mix in the raw egg to the cooked pasta and the heat of the pasta 
cooks the egg. That&#x27;s my understanding.Martin------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
4 DVDs Free +s&amp;p Join Now
http://us.click.yahoo.com/pt6YBB/NXiEAA/mG3HAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008469

**Label:** `benign`

<pre>
start date : 2 / 5 / 02 ; hourahead hour : 4 ; start date : 2 / 5 / 02 ; hourahead hour : 4 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002020504 . txt ! ! ! general sql error . couldn &#x27; t update ; currently locked by user &#x27; admin &#x27; on machine &#x27; ecthou - bps 3 &#x27; . table - - - - energy import / export schedule - - - - * * * final schedule not found for preferred schedule . details : trans _ type : final sc _ id : ectstnw mkt _ type : 2 trans _ date : 2 / 5 / 02 tie _ point : malin _ 5 _ rndmtn interchg _ id : enrj _ ciso _ 3000 engy _ type : firm
</pre>

## Record 008470

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8613675,159/
Date: 2002-10-06T18:12:45+01:00This feature, excerpted from Wolfgang Engel&#x27;s ShaderX book from Wordware 
Publishing, presents a simple shader trick that performs a good per pixel 
approximation of a non-integer power function. The technique works for input 
values between 0 and 1 and supports large exponents. The presented shader does 
not require any texture look-up and is scalable, making it possible to spend 
more instructions in order to decrease the error or to reach greater exponents.

</pre>

## Record 008471

**Label:** `benign`

<pre>
joe h . vince , mark tawney called and said that he needs to make a salary adjustment for joe hrgovcic . it appears that he has an outside offer . i told him that we would support this , within reason , and that you would be the person to ultimately o . k . this request on the research side . he is also interested in moving joe out of research and formally onto the weather desk . again , i told him that it would have to be discussed with you on your return next week . stinson
</pre>

## Record 008472

**Label:** `benign`

<pre>
At 10:12 AM -0700 8/13/02, Patrick wrote:
&gt;On Tue, 13 Aug 2002, Justin Shore wrote:
&gt;
&gt;&gt;  I&#x27;m assuming I need to strip the SpamAssassinReport.txt attachments
&gt;&gt;  from my spam mailbox before I run the mailbox through razor-report,
&gt;&gt;  correct?  Does anyone know of an easy way to do this?
&gt;
&gt;man spamassassinWhoops.  Sorry &#x27;bout that.  Didn&#x27;t think to check spamassassin&#x27;s man page.
-- --
Justin Shore, ES-SS ES-SSR      Pittsburg State University
Network &amp; Systems Manager       Kelce 157Q
Office of Information Systems   Pittsburg, KS 66762
Voice: (620) 235-4606           Fax: (620) 235-4545
http://www.pittstate.edu/ois/Warning:  This message has been quadruple Rot13&#x27;ed for your protection.
-------------------------------------------------------
This sf.net email is sponsored by: Dice - The leading online job board
for high-tech professionals. Search and apply for tech jobs today!
http://seeker.dice.com/seeker.epl?rel_code=31
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008473

**Label:** `benign`

<pre>
re : stinson gibner richard we actually need to duplicate his ena workstation as he will be reporting at both locations p
</pre>

## Record 008474

**Label:** `benign`

<pre>
i didn &#x27; t think i was finished negotiating we should discuss this asap . - - - - - - - - - - - - - - - - - - - - - - forwarded by lorraine lindberg / et &amp; s / enron on 08 / 10 / 2000 03 : 21 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; richard riehm &quot; on 08 / 10 / 2000 02 : 07 : 55 pm please respond to to : cc : subject : i didn &#x27; t think i was finished negotiating lorraine , i wanted to send you an e - mail about our negotiations regarding tw / vv interconnect . i don &#x27; t want you to feel like i am trying to renegotiate something you think we agreed to last week . when we were talking last week about concessions i was seeking from tw in lieu of underperfomance at the vv interconnect , i gave the example of reducing our alternate delivery rate on the jack rabbit agreement , but i wanted to talk to you further about it . we agreed that you would call me this week to talk about it . it was my intention that the negotiations were not over yet , but that we need to talk further . quite simply , a discounted rate on an alternate delivery point for an agreement where i don &#x27; t have a lot of volume does not do much for burlington . the lack of tw &#x27; s ability to accept nominated volumes from val verde as mutually agreed to in the ipoa is a big and expensive issue to burlington . it significantly limits our ability to operate the plant efficiently , honor nominations of third party shippers on the system and it is causing br to nominate extra volume into the epng system which is constrained . all of these factors cost burlington a significant amount of money . some of the concession i am seeking include : the same discounted rate to make alternate deliveries into epng as tw at blanco on agreement 25597 . the same discounted rate for alternate receipts north of the laplatta compressor station which in contrary to the language on agreement 25597 . i realize that br would be alternate firm , but the agreement would be higher in the queue than interruptible . alternatively , what about terminating 25597 retroactively back to august 1 . the agreement expires at the end of the year and i really don &#x27; t need the way it is currently structured . i have an it agreement for $ . 03 with all of the flexibility that i am looking for on 25597 . i have not sold this idea to my boss or anyone else in management . we have had a conceptual meeting about this issue . it was agreed that our first option was not to ask tw to spend a bunch of money to bring you into contract compliance . instead we wanted to work with you to find some common ground . the bottom line is that you have to give me something to take to my management . please call me to discuss this . i really do want to keep these negotiation up beat . i think past negotiations have not gone as well as you or i would have liked . i really look forward to talking to you and working something out that is agreeable to both companies . richard riehm v : 713 . 624 . 9074 f : 713 . 624 . 9630 email : rriehm @ br - inc . com
</pre>

## Record 008475

**Label:** `benign`

<pre>
start date : 12 / 12 / 01 ; hourahead hour : 24 ; start date : 12 / 12 / 01 ; hourahead hour : 24 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001121224 . txt
</pre>

## Record 008476

**Label:** `benign`

<pre>
middlo office slide for board presentation - version 2 fyi - information for limit extension approval of board - general context for previous continental power discussions . clearly we have &#x27; summarised &#x27; issues where possible . call if you need any details mike - - - - - - - - - - - - - - - - - - - - - - forwarded by mike jordan / lon / ect on 25 / 07 / 2000 20 : 39 - - - - - - - - - - - - - - - - - - - - - - - - - - - james new 25 / 07 / 2000 19 : 12 to : markus urban / lon / ect @ ect , joe gold / lon / ect @ ect cc : mike jordan / lon / ect @ ect , gregor baumerich / lon / ect @ ect , paul mead / lon / ect @ ect subject : middlo office slide for board presentation - version 2 second iteration with a couple of minor changes ! - - - - - - - - - - - - - - - - - - - - - - forwarded by james new / lon / ect on 25 / 07 / 2000 19 : 12 - - - - - - - - - - - - - - - - - - - - - - - - - - - james new 25 / 07 / 2000 19 : 02 to : markus urban / lon / ect @ ect , joe gold / lon / ect @ ect cc : mike jordan / lon / ect @ ect , gregor baumerich / lon / ect @ ect , paul mead / lon / ect @ ect subject : middlo office slide for board presentation joe / markus , attached is the middle office slide which outlines our planned initiatives to support the continental power business as requested . please give me a call if you have any queries . james
</pre>

## Record 008477

**Label:** `benign`

<pre>
start date : 12 / 17 / 01 ; hourahead hour : 13 ; start date : 12 / 17 / 01 ; hourahead hour : 13 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001121713 . txt
</pre>

## Record 008478

**Label:** `benign`

<pre>
the native tongue call for papers university of paris 7 - denis diderot 19-21 march 1999 international conference the native tongue / la langue maternelle deadline for receipt of abstracts : 30 may 1998 invited speakers : henri meschonnic , regine robin , rachel ertel , stella baruk , charles melman , morris halle , antoine culioli , claire blanche - benveniste abstracts are invited for 30 - minute talks on any sociolinguistic , psycholinguistic or psychoanalytic aspect of the relationship of speakers to the mother tongue , whether in a multicultural-multilingual setting or in a context of language substitution , language attrition , language loss or language revival . the role of language in the structuring of the self will also be considered . papers may be presented in french or in english authors are asked to send : * four ( 4 ) copies of an anonymous abstract * one additional camera-ready copy with the author &#x27;s name and affiliation ( to be published in the hand-book if the paper is accepted for presentation ) . abstracts should be no more than one page ( a4 or letter size ) in length , with an additional page for references if necessary . please include one more page containing : * the title of the paper * the name and affiliation of the author ( s ) , * the primary author &#x27;s postal address , e-mail address , telephone number , and fax number . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - new : we have decided to accept electronic submissions provided you use word 5 or 6 for mac or pc - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - papers presented at the conference will be published in the form of a special issue of a major french journal ( negociations are underway ) and presentation implies consent to such publication . all abstracts should be sent to : marina yaguello / cyril veken ufr d &#x27; etudes anglophones , universite paris vii 10 , rue charles v 75004 paris , france requests for information ( e mail only ) should be addressed to maya @ paris7 . jussieu . fr &lt; marina yaguello &gt; or veken @ paris7 . jussieu . fr &lt; cyril veken &gt; our web site is now open and will be updated regularly http : / / www . charlesv . cicrp . jussieu . fr / charlesv / colloc _ chv / maternel . html schedule : submission of abstracts : 30 may 1998 notification of acceptance : 30 september 1998 final camera ready copy due : 1 february 1999
</pre>

## Record 008479

**Label:** `benign`

<pre>
&gt; This is a common problem with some build files that think you&#x27;re cross
&gt; compiling, and when you really are, this is in fact a feature :-/
&gt; 
&gt; The workaround is to pass an extra argument to configure as follows :
&gt; 
&gt; %configure --program-prefix=%{?_program_prefix:%{_program_prefix}}Merci. It worked nicely.Pat_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008480

**Label:** `benign`

<pre>
Justin MacCarthy wrote:
&gt; I think I&#x27;ll ask this question again, as I sent on friday afternoon.  :-) Mailman ;-)Trust me, you do *not* want to running your own mailing lists
on your own software.You&#x27;ll wind up crying in a dark room looking for something
high-voltage to stick your fingers into.Regards,Vin
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008481

**Label:** `benign`

<pre>
amlap - 97 call for abstracts * * * please post * * * please post * * * please post * * * please post * * * amlap - 97 conference &quot; architectures and mechanisms for language processing &quot; http : / / www . cogsci . ed . ac . uk / ~ amlap / final call for paper / poster abstracts call for participation 11-13 september 1997 apex hotel edinburgh , scotland * * * * * invited speakers * * * * * kay bock ( university of illinois ) - - - - - paul smolensky ( johns hopkins university ) - - - - - lorraine k . tyler ( birkbeck college ) * * * * * sponsors * * * * * human communication research centre universities of edinburgh and glasgow centre for cognitive science university of edinburgh we are calling for submissions for the 3rd conference on architectures and mechanisms for language processing ( amlap - 97 ) , which will be held in edinburgh , from thursday , september 11 until saturday , september 13 , 1997 . the aim of this conference is to bring psychological , computational and theoretical perspectives concerning the cognitive architectures and mechanisms which underly any aspect of human language processing . submissions which integrate experimental findings , formal and computational models of psychological processes are especially encouraged . deadline for submissions is 20 june 1997 . e - mail submissions ( in plain text ) are greatly preferred . please send a 400 word abstract to amlap @ cogsci . ed . ac . uk , or if necessary , by post to matt crocker , amlap , centre for cognitive science , university of edinburgh , 2 buccleuch place , edinburgh , eh8 9lw , or by fax to + 44 131 650 4587 . summaries of data and references can be additional to the main abstract . please indicate if you would rather give a 30 minute talk or a poster presentation , or either . abstracts will be considered by the programme committee : gerry altmann , martin corley , barbara hemforth , gerard kempen , paola merlo , wayne murray , suzanne stevenson , patrick sturt and the conference chairs . notification of acceptance will be sent by 18 july . it is our intention that selected contributions will be published either in the special issue of a journal or as an edited book . conference chairs : matt crocker ( hcrc , edinburgh ) martin pickering ( hcrc , glasgow ) for further details , see : http : / / www . cogsci . ed . ac . uk / ~ amlap / * * * registration &amp; accommodation * * * registration the conference will be held at the apex hotel in the heart of edinburgh &#x27;s old town . registrations fees are shown below and include attendance of the conference , lunch on the 12th and 13th , all coffee breaks , and a copy of all abstracts being presented . | by 15 aug | after 15 aug - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - regular : | 65 . 00 | 80 . 00 student : | 35 . 00 | 50 . 00 to register , please send your payment ( as outlined below ) , and a cover letter stating that you wish to register for the amlap - 97 conference , and include your full name , affiliation , address , phone , fax , and e-mail . students must also include proof of student status . this should be sent to : amlap - 97 human communication research centre 2 buccleuch place edinburgh , eh8 9lw united kingdom payment : 1 . cheques should be drawn on a british bank in pounds sterling , and made payable to &quot; the university of edinburgh &quot; . 2 . direct transfers should be sent to : edinburgh university account - 00919680 bank of scotland 32a chambers street edinburgh sort code 80-02 - 24 transfers must mention amlap a / c 265000 g40183 3 we are able to accept payment from a variety of credit cards ( visa , mastercard , switch , and delta ) . payments made by credit card will incur an additional charge of 2 % of the total amount due . if you wish to pay by credit card please complete the following form , and send it to us by post ( we need a real signature ) : - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - name : address to which the card is registered : card type : ( visa , mc , switch , delta ) : card number : valid from : expiry date : amount due : administration charge ( 2 % ) : total amount to be charged to card : signature : date : - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - accommodation 1 accommodation is available at the apex hotel , the conference venue . this is one of edinburgh &#x27;s top hotels , and we have arranged a special conference rate of # 55 single / per night , # 60 double / per night , b&amp;b . to book a room contact the hotel directly , and mention the amlap conference : the apex hotel 31-35 grassmarket edinburgh , eh1 2hs scotland phone : + 44 131 300 3456 fax : + 44 131 220 5345 2 finally , there are numerous b&amp;bs in edinburgh , for those seeking less expensive accommodation . please check the web page first for details if possible . a further call for participation and announcement of the programme will appear in a subsequent announcement . also keep an eye on our web page at the url given below , it should be up and running soon . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - http : / / www . cogsci . ed . ac . uk / ~ amlap / email : amlap @ cogsci . ed . ac . uk
</pre>

## Record 008482

**Label:** `benign`

<pre>
celtic languages learning conference content - length : 3830 the 1995 conference of the north american association for celtic language teachers : saturday , 25 march 1995 krieder hall san rafael building glendale community college 1500 n . verdugo road glendale , ca 91208 glendale is a suburb of l . a . and the college is accessible north from the 134 fwy or west of the 2 fwy . it &#x27;s about 45 minutes from lax . note that there is free parking behind the college near the corner of verdugo and mountain avenue . the proposed schedule reads as follows : 9 : 30am sign in , 10 : 00-12 presentations , 12 - 1pm lunch ( various restaurants are across the street from campus ; the cafeteria will be closed as this will be during spring break ) , 1 - 3 presentations , 4pm closing , 6pm executive committee meeting . naaclt &#x27; 95 will prove to be a day full of thought provoking presentations and an excellent opportunity to meet with other celtic language teachers . the program presently stands as follows : student motivation through journal writing in modern irish roslyn blyn ( university of pennsylvania ) dialects , speech communities and applied linguistics : a realistic approach to the teaching of irish in non-irish speaking areas james j . duran ( loyola marymount university ) teacher certification and less commonly taught languages thomas w . ihde ( bergen community college ) medieval welsh in the mid-pacific : the worksheet as interactive kathryn klingebiel ( university of hawaii - manoa ) computing in irish john t . mccranie ( san francisco state university ) the world wide web for welsh : the world &#x27; s largest welsh classroom mark nodine and briony williams irish language oral assessment test beth ellyn o&#x27;mullan ( rutgers university ) , liam guidry and breanda / n mac liam ( brookdale community college ) celtic &quot; mini-courses &quot; zev bar - lev ( san diego state university ) call with methodical explanations gearo / id o / ne / ill and annette mcelligott ( university of limerick ) marketing a second language : the case of the scottish gaelic learning revival in ontario kara smith ( university of western ontario ) video in the irish language classroom nancy stenson ( university of minnesota ) the conference pre-registration fees are : naaclt member $ 10 , non - member $ 15 , membership &amp; conference $ 25 ( $ 20 for students ) . ( normal membership fee is $ 15 / yr , $ 10 / yr for students ) . after 1 march 1995 the conference fees will increase by $ 5 . all concerns should be addressed to john t . mccranie at the department of computer science , san francisco state university , 1600 holloway avenue , san francisco , ca 94132 or jtm @ futon . sfsu . edu . here are some local hotels . there are several near hollywood - burbank airport ( about 17 minutes away ) , among them ramada inn , 2900 north san fernanado road , burbank 818-843 - 5955 ; holiday inn , 150 e angeleno ave , burbank 818-841 - 4770 ; and travelodge , 112 n . hollywood way , burbank 818-845 - 2408 . a little closer ( about 10 minutes away ) and with fewer frills are astro motel , 326 e . colorado blvd , glendale 818-246 - 7401 ; econo lodge , 1437 e . colorado blvd , glendale 818-246 - 8367 ; and best western , 123 w colorado blvd , glendale , 818-247 - 0111 .
</pre>

## Record 008483

**Label:** `benign`

<pre>
re : clustering for power jaesoo , as we discussed last week on wednesday meeting can you , please , implement clustering for power curves by geographical region . this involves the following : 1 . deciding together with risk control how many geographical regions we want to use and which enron &#x27; s curves belong to each region . 2 . deciding together with risk control how to choose core curves for each region . this decision can be maid based on the a ) position size ; b ) statistical analysis . there might be other considerations . 3 . doing regression analysis for each curve versus the corresponding core curve . winston , can is it possible to run var for the clustering results obtained by jaesoo with clustering done by sas ? should we wait for the stage re - fresh and what is the status on this ? tanya .
</pre>

## Record 008484

**Label:** `benign`

<pre>
Hi all,
I&#x27;ve run into a fairly intractable (for me) problem, and was wondering
if anybody could give me pointers on how to deal with it.I am running Debian Woody on a Pentium III IDE based system.
I have a Ricoh 7083a ide cd rewriter, which I use using cdrecord and the
scsi over ide kernel modules.  I was running kernel 2.4.18 until
probably last weekend when I noticed 2.4.19 was out.  Downloaded patch
and installed new kernel with no real problems.  This morning I went to
burn a CDROM, and the system locked hard.  Rebooting into 2.4.18 allowed
cdburning to work fine.This problem is very reproducible (on my system at least).
the cdrecord command I was using was
    cdrecord -v speed=4 blank=fast dev=0,1,0 -data bak.iso
The blanking appears to go ok, but when it tries to write data, it just
locks up the entire system (can&#x27;t ping it from outside even).  AFAICS,
the system just stops.  Hard reset is only way back in, and when it does
reboot, I cannot see anything useful in any logfiles (/var/log/messages
/var/log/kern.log /var/log/syslog, at any rate).
cdrecord -scanbus works fine and reports the two pseudo-scsi devices (my
cdr drive and my cdrw).
The same lock occurs even if there is no blanking.I tried upgrading to 2.4.20-pre1-ac1 (on assumption that if there was a
kernel issue it might have been fixed in these patches), but it gives
the same error.  I also downloaded and compiled the source for
cdrecord 1.1.10, and installed it instead of the debian package (i was
wondering if maybe there was some compile option the packager had used
which maybe would cause the problem), and still the problem persisted.Anyway, I&#x27;m completely stumped.  Google searching has not done me much
good, and I&#x27;m a little bit lost.  What I&#x27;d like to know is
a)  How to fix the problem ;-)
b)  Is this likely to be an application or kernel problem?  The severity
    of the crash would make me suspect it is a kernel problem, but I&#x27;m
    not very knowledgeable on these things.
c)  Should I post a description of this to the kernel mailing list? If
    this is an appropriate course of action, are there any tips (beyond
    the guidelines on kernel.org)?Like I said, I&#x27;m lost on this one, so any info is very gratefully
received.
mick
-- 
Michael Conry   Ph.:+353-1-7161987, Web: http://www.acronymchile.com
Key fingerprint = 5508 B563 6791 5C84 A947  CB01 997B 3598 09DE 502C-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008485

**Label:** `benign`

<pre>
re : sitara release ( re : changes in global due to consent to assignment ) changing counterparty names on sitara deal tickets has absolutely no impact to any downstream processes . i hope the following will give more clarification . let me know if you have any questions or need more detail ! thanks , dg 3 - 9517 sitara / unify - process * scenario - counterparty name changes on sitara deal ticket after deal had been pathed , scheduled &amp; bridged back from unify . * impact - zero impact to logistics &amp; volume management , absolutely harmless . settlements has process in place to eliminate issues . * process - counterparty a in sitara changes to counterparty b . ctprty a was on original path sent to pipeline . the new name ( ctprty b ) does bridge over to unify . ctprty a remains at the path level in unify ( gui display does not change ) ctprty b is now displayed at the deal level in unify . the field is now highlighted to indicate a change occurred . ( gui display changes only at high level , not on path ) the scheduler has choice to repath ( if necessary ) , or not re - path if re - pathing occurs , the new counterparty name will be displaced on new path unify pushes back the deal number &amp; meter to sitara ( not ctprty info ) balancing works on deal number &amp; meter only ( not ctprty info ) the confirmation desk utilizes the information in sitara ( where all information is correct ) volume management utilizes the information in unify for pipeline tie - out . ( all information sent to pipeline is correct at the path level and will match up perfectly ) settlements utilizes information in unify . settlements recognizes that changed ctprty names changes contracts , which would create two notification entries if invoice did happen to go out to wrong ctprty , re - draft would occur . ( note : there was an issues discovered on reports which it is correcting now ) autonoms &quot; tom &#x27; s words of warning &quot; - previously there was an issue when counterparty name changes took place after deals were pathed and nominated . basically it would change a key on an edi path ( duns number ) not affecting any other of the information already nominated to the pipeline . if the scheduler re - nominated , data at the pipeline would get doubled up and the scheduler would have no way to correct the problem . in most cases , the schedulers would have to get the pipeline to manually cut the original nominated volume . this is not an issue with unify ( as explained above ) . ( dave - feel free to chime in if i left anything out . ) from : donna greif 04 / 05 / 2000 01 : 18 pm to : kathryn bussell / hou / ect @ ect , robert cotten / hou / ect @ ect , mark mcclure / hou / ect @ ect , gary l payne / hou / ect , richard pinion / hou / ect @ ect , robert superty / hou / ect @ ect , george smith / hou / ect @ ect , katherine l kelly / hou / ect @ ect , randall l gay / hou / ect @ ect , daren j farmer / hou / ect @ ect , edward terry / hou / ect @ ect cc : dave nommensen / hou / ect @ ect , diane e niestrath / hou / ect @ ect , carrie hollomon / hou / ect @ ect , bryce baxter / hou / ect @ ect , kathryn cordes / hou / ect @ ect , dana daigle / corp / enron @ enron , elizabeth l hernandez / hou / ect @ ect , julie meyers / hou / ect @ ect , b scott palmer / hou / ect @ ect , stephanie sever / hou / ect @ ect , dianne j swiber / hou / ect @ ect , peggy hedstrom / cal / ect @ ect , dianne seib / cal / ect @ ect , sylvia a campos / hou / ect @ ect , linda s bryan / hou / ect @ ect , faye ellis / hou / ect @ ect , donna consemiu / hou / ect @ ect , scott mills / hou / ect @ ect , russ severson / hou / ect @ ect , martha stevens / hou / ect @ ect , karie hastings / hou / ect @ ect , regina perkins / hou / ect @ ect , imelda frayre / hou / ect @ ect , william e kasemervisz / hou / ect @ ect , hunaid engineer / hou / ect @ ect , steven gullion / hou / ect @ ect , larrissa sharma / hou / ect @ ect , thomas engel / hou / ect @ ect subject : re : sitara release ( re : changes in global due to consent to assignment ) fyi . . . . this change went in for the deal validation group . it gives them the ability to change counterparties names after bridge back . impact to logistics - unify if a counterparty name change takes place to deals that have been bridge backed , it could cause problems on edi pipes as that new counterparty name will flow over to unify and repathing should eventually take place . one problem may be with the imbalance data sets , which are not in production yet . . . . . . ( edi imbalance qtys would not match up to paths ) this may also cause an issue with the scheduled quantities ( especially where nominations were sent for entire month ) can &#x27; t remember the rules on this one , but i think unify does have some safe guards ( idiot proofs ) to force re - pathing . unify does have the ability to over - ride duns numbers , yet would still cause an additional step for edi the scheduler would need to think through in order to get a clean quick response . what are ( if any ) impacts to vol mgt if counterparty name changes take place ? ( prior periods ? re - pathing ? ) i have a call into diane and dave both . after speaking w / them , hopefully i can get a clear understanding of the true impact . i am sure we &#x27; ll need to put some processes and procedures together for deal validation to follow when these type of changes are needed . will keep you posted . thanks , dg from : thomas engel 04 / 05 / 2000 09 : 44 am to : kathryn cordes / hou / ect @ ect , dana daigle / corp / enron @ enron , elizabeth l hernandez / hou / ect @ ect , julie meyers / hou / ect @ ect , b scott palmer / hou / ect @ ect , stephanie sever / hou / ect @ ect , dianne j swiber / hou / ect @ ect , peggy hedstrom / cal / ect @ ect , dianne seib / cal / ect @ ect cc : sylvia a campos / hou / ect @ ect , linda s bryan / hou / ect @ ect , faye ellis / hou / ect @ ect , donna consemiu / hou / ect @ ect , scott mills / hou / ect @ ect , russ severson / hou / ect @ ect , martha stevens / hou / ect @ ect , karie hastings / hou / ect @ ect , regina perkins / hou / ect @ ect , imelda frayre / hou / ect @ ect , william e kasemervisz / hou / ect @ ect , hunaid engineer / hou / ect @ ect , steven gullion / hou / ect @ ect , larrissa sharma / hou / ect @ ect , donna greif / hou / ect @ ect subject : sitara release ( re : changes in global due to consent to assignment ) regarding the ability to change counterparties on deals in sitara with confirmed volumes - tom &#x27; s words of caution : if someone calls you and wants to change a counterparty - we created the ability for you to invalidate the deal - and then change the counterparty - however - i did add a warning message : &quot; warning - changing counterparty on deal with confirmed volumes - make sure pipeline allows this change . &quot; some pipelines do not allow us to change counterparties after there is feedback - i assume for the same reasons we had this rule - it used to blow up our old scheduling systems ( pre - unify ) . some pipelines will require a new deal and we will have to zero out the old deal . before you make the change - make sure the logistics person is aware - just in case it causes problems with their pipeline . sorry - i don &#x27; t know which pipes these are - you will have to ask the unify team . there is one rule still in place - you can change from ena - im east to ena - im market east - but not from ena - im texas to hplc - im hplc - when changing business units - they must be the same legal entity . &quot; warning - not the same legal entity &quot; also - beware of making contract and counterparty changes to service deals ( transport capacity , storage , cash out ) . once the deal is invalidated - there are no rules . don &#x27; t forget - the items were locked down for a reason . if you invalidate a service deal - and change the previously locked down data that was validated - and someone used these deals in unify - it is highly likely that the unify deals and paths created using these deals will get corrupted . always check with someone from unify to make sure no one used these deals for anything in unify . - - - - - - - - - - - - - - - - - - - - - - forwarded by thomas engel / hou / ect on 04 / 05 / 2000 09 : 47 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : scott mills on 04 / 04 / 2000 07 : 38 pm to : kathryn cordes / hou / ect @ ect , dana daigle / corp / enron @ enron , elizabeth l hernandez / hou / ect @ ect , julie meyers / hou / ect @ ect , b scott palmer / hou / ect @ ect , stephanie sever / hou / ect @ ect , dianne j swiber / hou / ect @ ect cc : steve jackson / hou / ect @ ect , thomas engel / hou / ect @ ect , sylvia a campos / hou / ect @ ect , linda s bryan / hou / ect @ ect , faye ellis / hou / ect @ ect , donna consemiu / hou / ect @ ect subject : sitara release ( re : changes in global due to consent to assignment ) with the release that was put out tuesday evening , deal validation should be able to change the counterparty on deals where the volume is something other than expected ( e . g . confirmed , nominated , scheduled , etc . ) . in addition , this release will also capture &quot; near - time &quot; the contract changes that are made in global . this means that need for server bounces will not be necessary . new / changes to contracts will show up without having to get out of deal manager . new counterparties , and new / changes to facilities will require getting out of all active sitara apps ( except for launch pad ) . once out of all apps , start a new app - the respective information that you are looking for will appear . i mention &quot; near - time &quot; because we are constrained by the amount of time it takes for the change in global data to trigger an alert for sitara who then updates its information srm ( x 33548 ) cyndie balfour - flanagan @ enron 04 / 04 / 2000 03 : 41 pm to : connie sutton / hou / ect @ ect , linda s bryan / hou / ect @ ect , kathryn cordes / hou / ect @ ect , scott mills / hou / ect @ ect , richard elwood / hou / ect @ ect , dave nommensen / hou / ect @ ect , kenneth m harmon / hou / ect @ ect , dana daigle / corp / enron @ enron , kathryn cordes / hou / ect @ ect , elizabeth l hernandez / hou / ect @ ect , julie meyers / hou / ect @ ect , b scott palmer / hou / ect @ ect , stephanie sever / hou / ect @ ect , dianne j swiber / hou / ect @ ect , gayle horn / corp / enron @ enron , brant reves / hou / ect @ ect , russell diamond / hou / ect @ ect , debbie r brackett / hou / ect @ ect , steve jackson / hou / ect @ ect cc : subject : changes in global due to consent to assignment the following changes will be made in the global contracts database due to receipt of executed consent to assignment for the following contracts : current counterparty name contract type contract # &#x27; new &#x27; counterparty name ces - commonwealth energy services gisb 96029892 commonwealth energy services ces - samuel gary jr . &amp; associates , inc gisb 96029302 samuel gary jr . &amp; associates ces - south jersey gas company gisb 96029143 south jersey gas company cp name change and contract type correction ( contract type different than that provided by ces ) per ces ces - southwest gas corporation 1 / 1 / 98 gisb 96029146 per contract file ces - southwest gas corporation 04 / 14 / 93 master purchase / sale interruptible ( will edit global # 96029146 ) &amp; ces - southwest gas corporation 12 / 01 / 94 master sale firm ( created new global record to accommodate this k , # 96037402 ) please note that southwest gas corporation has consented to the assignment of both of these contracts .
</pre>

## Record 008486

**Label:** `benign`

<pre>
&gt; I thought perhaps I should just do   lilo -b /dev/hdb -r /mnt  but I think
&gt; that -b is analogous to the boot keyword in lilo.conf. Or will this just
&gt; work automagically ?  i.e. boot = /dev/hda tells lilo what numbers to poke
&gt; where, and it figures out where the disk is from the -r ?That won&#x27;t work like you want.  You&#x27;ll end up with a boot loader
on the backup disk that contains the &#x27;physical&#x27; location of
the /boot/map file on the main disk.  That won&#x27;t necessarily
be the same as the backup disk.I can&#x27;t think of a right way to do his with LILO.  I&#x27;ve got
a similar seup on my home machine (rsync to a backup disk
every night), but I&#x27;ll be pulling out the RH install CDs to
get LILO sorted if I have to do a disk swap.GRUB should be able to handle this no problem, since it
doesn&#x27;t record sector numbers like LILO does.  Not much help
for you though...Later,
Kenn-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008487

**Label:** `benign`

<pre>
On Wednesday 11 September 2002 16:19 CET Justin Mason wrote:
&gt; Malte S. Stretz said:
&gt;[...]
&gt; &gt; I think we should even add new (GA&#x27;d) rules to 2.4x (and/or remove old
&gt; &gt; ones) and tag a new 2.50 only if we have a bunch of features worth a
&gt; &gt; &quot;dangerous&quot; big update. I&#x27;d say: Yes, you should expect 2.42 and also
&gt; &gt; 2.43+ (but update to 2.41 now).
&gt;
&gt; I would think adding new rules to, or removing broken rules from, 2.4x
&gt; would require some discussion first.  but new GA&#x27;d scores are definitely
&gt; worth putting in, as the ones there are too wild.I think my mail wasn&#x27;t very clear ;-) My point was that we should continue 
releasing new rules and removing broken ones (all based on discussions on 
this list of course) in the 2.4 branch instead of creating a new 2.5 branch 
everytime we have a bunch of new rules.A new branch should be openend only if (big) new features are introduced 
(eg. Bayes) or the interface has changed (spam_level_char=x). As the rules 
are under fluent development, the user has to update quite regularly. But 
currently he couldn&#x27;t be shure if the new release will break anything in 
his setup (like -F going away). So if we say &quot;the branches are stable to 
the outside and just improved under the surface but you have to watch out 
when you update to a new minor version number&quot;, users and sysadmins could 
be less reluctant to update.All just IMHO :o)
MalteP.S.: I&#x27;ll be away from my box and my mail account for one week, starting 
tomorrow. So happy coding for the next week :-)-- 
--- Coding is art.
-- 
</pre>

## Record 008488

**Label:** `benign`

<pre>
wellheads shoreline has sent in a nom change for the 11 th gas day , to take meter 6722 from 24 to 14 . please let me know if you want the change .
</pre>

## Record 008489

**Label:** `benign`

<pre>
On Fri, 04 Oct 2002 01:14:28 +0200
Vincent  wrote:# Hello,
# 
# I&#x27;m looking for the package k3b for the redhat 8.0, Does anyone know
# 
# where to get it ? I tried to compile but it did an error message:I&#x27;ve been working on a .src.rpm for it.  Their rpm and spec file is
very dirty, so I&quot;m cleaning it up.  I think I have all the build-req&#x27;s
and the install req&#x27;s sorted out, but I need more testers.http://geek.j2solutions.net/rpms/k3b/Please try it.-- 
Jesse Keating
j2Solutions.net
Mondo DevTeam (www.mondorescue.org)Was I helpful?  Let others know:
 http://svcs.affero.net/rm.php?r=jkeating_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008490

**Label:** `benign`

<pre>
aep - hpl transitions list - updated sally - please see the attached list as opposed to the one attached in bob &#x27; s earlier memo . this one is the latest and greatest . thanks !
</pre>

## Record 008491

**Label:** `benign`

<pre>
I build a lot of rpms but I&#x27;m to stupid/busy to &quot;apt-ize&quot; what I have. I wish
it was apt enabled because I have several boxen and apt would help even with
rpms that I build. Did I mention forgetful too?http://www.dudex.net/rpms
che (che666@uni.de) wrote*:
&gt;
&gt;hello!
&gt;well in my eyes something like a public contrib repository would be nice
(where everyone can at least upload spec files) and a something like a
&quot;repository directory&quot; with a collection of available repositorys and their
content.
&gt;
&gt;i am personally on a dsl dialup connection with 16kb/s upstream cap and that
kinda sucks perhaps i am gonna still create a respository for small
windowmaker dockapps in the future :).
&gt;
&gt;what do you think?
&gt;
&gt;thanks,
&gt;che
&gt;
&gt;_______________________________________________
&gt;RPM-List mailing list 
&gt;--
That&#x27;s &quot;angle&quot; as in geometry._______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008492

**Label:** `benign`

<pre>
read the links. what must it be like, she wondered, to devote ones life to pointing out neighbors&#x27; mistakes, mishaps, inconsistencies and frailties?gloating is definitely underrated in the good book - eh, john?bring it on, gg-----Original Message----- From: fork-admin@xent.com [mailto:fork-admin@xent.com]On Behalf Of John Hall Sent: Saturday, October 05, 2002 11:56 PM To: FoRK Subject: Our friends the Palestinians, Our servants in government. Hijacker High (8/30) Dalal Mughrabi was a Palestinian woman who participated in a 1978 bus hijacking in which 36 Israelis and an American nature photographer, Gail Ruban, were killed. Mughrabi has a Palestinian high school named after her, and it&#x27;s apparently starting to show signs of wear. Fortunately, the United States Agency for International Development has stepped in with money to help renovate it.http://reason.com/brickbats/bb-april.shtmlLinks to:http://www.cnsnews.com/ViewForeignBureaus.asp?Page=\ForeignBureaus\archi ve\200208\FOR20020807e.htmlPraeterea censeo Palestininem esse delendam.
</pre>

## Record 008493

**Label:** `benign`

<pre>
nomination change on tejas pipeline effective 7 / 14 / 00 fyi . . . . . . . . . . . . bev - - - - - - - - - - - - - - - - - - - - - - forwarded by beverly beaty / hou / ect on 07 / 13 / 2000 08 : 04 am - - - - - - - - - - - - - - - - - - - - - - - - - - - enron capital &amp; trade resources corp . from : &quot; cynthia cantrell &quot; 07 / 13 / 2000 07 : 47 am to : cc : subject : nomination change on tejas pipeline effective 7 / 14 / 00 attached is a revised nomination for the haynes 21 on tejas to be effective 7 / 14 / 00 . if you have any questions or need additional informaiton , please feel free to call me at ( 405 ) 552 - 4611 . thank you , cynthia cantrell - enronhaynes 21071400 . xls
</pre>

## Record 008494

**Label:** `benign`

<pre>
fw : producer one update louise , i think what i really wanted to convey is the following : 1 . john grass originally headed up the wellhead desk and outsourcing efforts for the producer segment . i wanted him to do that because of the logistics overlap between purchasing wellhead gas and offering outsourcing services . 2 . when the volume of the wellhead desk started to increase and based on my frustation with the lack of &quot; contract focus &quot; with ocean energy , andex , and other producer outsourcing deals being pursued , i asked kevin miller to manage producer outsourcing and john grass to manage only the wellhead desk . 3 . based on kevin miller &#x27; s memo ( attached below ) , the wellhead desk reporting into hunter , i have been questioning the value of a separate outsourcing effort independent of the wellhead desk . regards , mrha - - - - - original message - - - - - from : miller , kevin sent : friday , october 12 , 2001 4 : 46 pm to : mrha , jean subject : producer one update jean , per your request , attached herewith is the rather lengthy producer one update / thanks . . . kevin
</pre>

## Record 008495

**Label:** `benign`

<pre>
Quoting Nick Murtagh (nickm@go2.ie):&gt; The same one as provided on www.sapdb.org? 
&gt; Which is released under the GPL/LGPL?I honestly don&#x27;t know.  I made that list a long time ago, and certainly
didn&#x27;t re-research it before posting it today.  So, I offer three
candidate explanations:1.  I muffed that part, the first time, and was talking through my hat.
2.  SAP had a proprietary version licensed to SuSE at the time.
3.  SAP still have one licensed to SuSE today.I&#x27;m not sure which applies.  #1 is certainly a good possibility.
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008496

**Label:** `benign`

<pre>
q : incorporation in mandarin ? having recently arrived in taiwan to take up a teaching position and , as a result , started getting involved with mandarin chinese , i have very recently noticed that in this language , compound verbs can be ` interrupted &#x27; , if i may so put it , by locative phrases . witness the following exs . : ba yizi banjin fantingli lai obj . marker chair move-come - in - dining room - come ` bring the chairs into the dining room &#x27; ta paohui jya qule he run-return - home - go-asp . marker ` he has run back home &#x27; ba zheiben shu nahui xuexiao qu obj . marker this-class . book carry-return - school - go ` take this book back to the school &#x27; i &#x27; m wondering ( in order not to reinvent the wheel ) if anybody has looked into the possibility of analyzing such constructions as examples of incorporation ? if not , can anybody offer me a good reason why not ? if there &#x27;s enough interest i &#x27; ll post a summary . best , steven - steven schaufele , ph . d . asst . prof . of linguistics english department soochow university waishuanghsi campus taipei 11102 taiwan , roc ( 886 ) ( 02 ) 881-9471 ext . 6504 fax : ( 886 ) ( 02 ) 883-5158 fcosw5 @ mbm1 . scu . edu . tw
</pre>

## Record 008497

**Label:** `benign`

<pre>
review massaro 1998 massaro , d . w . ( 1998 ) . perceiving talking faces : from speech perception to a behavioral principle ( mit press , cambridge , mass . ) . 552 pp . , 212 illus . , 1 cd-rom . $ 55 . 00 . reviewed byl noel nguyen , laboratory for psycholinguistics , fpse , university of geneva , switzerland ( nnguyen @ fapse . unige . ch ) . 1 synopsis 1 . 1 general outline this book is concerned with how multiple sources of information are processed in speech perception and , more generally , in pattern recognition . it is based upon an important research programme conducted by massaro and his colleagues over the last two decades . the book focuses on the perception of so-called bimodal speech , addressing a wide range of issues about the way in which visual information ( as provided by the speaker &#x27;s face ) and auditory information are combined with each other by the perceptual system . the scope of the book is much larger , however , as massaro &#x27;s purpose here is to describe and defend a new psychological law relevant to a wide variety of domains . in contrast to already well-established laws of the same kind ( e . g . weber &#x27;s law of perception ) , which are all unidimensional , the new principle is multidimensional , in that it describes how several factors impact behaviour . this principle is embodied in a computational model of pattern recognition , the fuzzy logical model of perception ( flmp ) , whose latest version is presented and discussed in detail . the flmp is systematically contrasted with alternative computational models , using a broad perceptual database as benchmark throughout the book . in a separate part , the book also deals with methods for synthesizing talking faces in experiments on bimodal speech perception , and introduces baldi , the talking face developed by massaro and his coworkers . the book is accompanied by a cd-rom which contains a series of demonstrations relating to many of the topics dealt with . the book is divided into four main sections . section 1 , &quot; perceiving talking faces &quot; , focuses on the perception of speech by ear and eye . massaro reviews the most significant empirical findings in that domain , discusses the main methodological issues , and presents a general classification of the existing computational models of bimodal speech perception . central to this section is the idea that speech perception obeys a general behavioural principle of integration between different sources of information . section 2 , &quot; broadening the domain &quot; , aims at assessing how well this principle holds up across broad individual and situational variability . the author demonstrates that inter-individual variations in how bimodal speech is perceived , depending on the listener &#x27;s age or native language for instance , can be accounted for within the flmp framework . using examples taken from different perceptual and cognitive situations , massaro also defends the idea that the flmp adequately describes information processing irrespective of these situational differences . section 3 , &quot; broadening the framework &quot; , opens with a presentation of an extended and more explicit version of the flmp , designed in particular to account for the dynamics of speech processing . the section also includes a detailed analysis of the methodological issues involved in assessing quantitative predictions in psychology , along with a discussion of the critiques expressed by other investigators about the flmp over the years . finally , section 4 , &quot; creating talking faces &quot; , is specifically dedicated to the synthesis of visual speech . 1 . 2 the new behavioural principle although many readers may already be familiar with massaro &#x27;s fuzzy logical model of perception , i shall here assume the contrary , and proceed to present a brief outline of the model . a central assumption of the flmp is that pattern recognition involves a common set of processes regardless of the specific nature of the patterns . speech is not seen as being associated with a dedicated processing module , as in the motor theory of speech perception ( liberman , 1996 ) for instance . on the contrary , the sensory information is assumed to be processed in the same way whether our brain is busy recognizing speech sounds , letters , or manual gestures , to take but a few examples . in any of these cases , the flmp postulates that mapping a stimulus into a unique perceptual category entails going through three main stages of processing , the feature evaluation stage , the feature integration stage , and the decision stage . the evaluation stage consists of converting the available sources of information into a set of properties referred to as features . each feature is given a continuous ( fuzzy truth ) value , and represents the degree to which the stimulus corresponds to each of a set of internal prototypical patterns , along a particular perceptual dimension . thus , one important visual feature in the perception of cv syllables is the degree of opening of the lips . the model therefore assumes that the internal prototypes available to the perceptual system will specify that the lips are open at the onset of the syllable for / da / , closed for / ba / , etc . in a second stage , the features are integrated with each other , so as to determine the overall degree of match of the sensory input with each of the prototypes ( e . g . each of the syllables known to the receiver ) . in the third and final stage , a decision is taken , on the basis of the relative goodness of match of the input with each prototype . the flmp makes a number of specific assumptions at each stage in this process . first , it hypothesizes that all of the available sources of information are simultaneously brought into play in pattern recognition . thus , visible speech and auditory speech are both assumed to have an influence on how bimodal speech is perceived . second , different sources of information are assumed to be evaluated independently of each other . this means for example that visible speech does not have any effect on how auditory speech is converted into a set of features , the two sources of information being combined at a later stage of processing only . the model also makes specific assumptions about how sources of information are integrated with each other ( multiplicative rule ) , and about how decisions are taken ( relative goodness rule ) . a major prediction of the model is that &quot; the influence of one source of information is greatest when the other source is neutral or ambiguous &quot; ( 19 ) . this prediction is best illustrated by an experiment whose results served as a database for testing models of pattern recognition on several occasions in the book ( chapters 2 and 11 ) . in this experiment , synthetic auditory stimuli ranging on a continuum between / ba / and / da / were crossed with visual stimuli also varying between / ba / and / da / . the bimodal stimuli were presented to subjects in a forced-choice identification task , along with each of the unimodal stimuli . ( this expanded factorial design is shown by massaro to be the most appropriate experimental design for determining how two sources of information are combined with each other in pattern recognition . ) for the bimodal stimuli , the main results are typically depicted as a two-factor plot , with the proportion of / da / responses on the ordinate , the levels of the auditory source of information on the abscissa , and a different curve for each of the levels of the visual source of information . when represented in that way , the results clearly show a statistical interaction between the two sources of information . specifically , the influence of one source of information proves to be larger in the middle , ambiguous range of the other source . this interaction graphically takes the shape of an american football , which is for this reason presented throughout the book as the hallmark of the the fuzzy logical model of perception . in summary , massaro proposes a universal principle of perceptual cognitive performance to explain pattern recognition . according to this principle , &quot; people are influenced by multiple sources of information in a diverse set of situations . in many cases , these sources of information are ambiguous and any particular source alone does not usually specify the appropriate interpretation . the perceiver appears to evaluate the multiple sources of information in parallel for the degree to which each supports various interpretations , integrate them together to derive the overall support for each interpretation , assess the support of each alternative based on all of the alternatives , and select the most appropriate response . &quot; ( p . 291 ) . 2 critical evaluation 2 . 1 general evaluation this book is clearly a major contribution to the study of speech perception and , more generally , to cognitive psychology . it is admirably clear and is written in quite an elegant manner . i do not doubt that the book will be read with great interest by research scientists from many different fields . this work is the result of an ambitious intellectual endeavour aimed at introducing a new behavioural law , which is placed by massaro on an equal footing with weber &#x27;s law of perception , or the power law of learning . speech scientists are presented with an extensive series of experiments on the perception of bimodal speech . whatever stance they take in that domain , they should find quite challenging massaro &#x27;s view that speech perception constitutes but one aspect of a much more general form of cognitive processing , namely pattern recognition . computer scientists working in the field of speech technology should be particularly interested in the book &#x27;s final section about the synthesis of visual speech . regardless of their background , readers should also find the book worth using as a tutorial on the experimental methods available for investigating speech perception . a great variety of experimental paradigms and tasks are discussed at length by massaro , who also extensively discusses the methods for assessing computational models of pattern recognition and , in particular , for fitting these models to observed results . in that respect , using the results of the experiment described above as a reference database was quite a good initiative in my view , as this allows the reader more easily to understand massaro &#x27;s point as new issues are raised , without having again to go through the details of the experimental design each time . the book should also prove an invaluable resource for teaching . care was taken to select prototypical results , as well as to set this work in its historical context . a number of rather fascinating anecdotes and historical references are given , going from mcgurk &#x27;s personal account of the discovery of the mcgurk effect , to an audio-visual rendition of the introduction to george miller &#x27;s seminal article on the ubiquitousness of the number 7 plus or minus 2 , with miller &#x27;s face texture-mapped onto baldi &#x27;s wire-frame head . the cd-rom that accompanies the book enables the reader directly to experience the psychological illusions associated with the perception of bimodal speech , and constitutes as such a most useful research and teaching tool . on the negative side , massaro &#x27;s use of the / ba / - / da / experiment as a leading strand throughout obviously results in the book being focused on the perception of non-sense syllables . although the interaction of visible speech and audible speech in word recognition is mentioned on a number of occasions ( e . g . pp 21-23 and pp . 181-182 ) , the book contains few suggestions as to how we perceive isolated words , let alone connected speech . i also was surprised by the fact that little place was devoted to presenting other current theories and models of speech perception . although models such as trace are mentioned on several occasions in the book , i think it is fair to say that the flmp is still given the lion &#x27;s share . the book also has some minor defects such as the absence of a list of figures , and the fact that some of the cd-rom bands ( 1 . 4 , 1 . 5 and 1 . 6 ) are referred to incorrectly in the text . the list of the cd-rom selections should have pointed to the pages where each band is referred to . in another domain , it would have been quite interesting to have the perceptual database used in the book made available on the cd-rom . although this would have probably required a substantial amount of additional work , i should also have found it useful to be provided with an interactive version of the main computational models discussed in the book ( flmp , the race model , the single channel model , etc . ) . the flmp model can be downloaded from massaro &#x27;s laboratory web site at santa cruz ( http : / / mambo . ucsc . edu ) , but it is currently distributed in fortran code which has to be modified and recompiled for each new set of data , an operation which is probably out of reach of many students in psychology or linguistics . 2 . 2 specific comments i am not familiar with all of the areas dealt with in this book , and will not hide the fact that this review is biased towards my own interests , namely the production and perception of auditory speech . the following comments more specifically concentrate on two issues relating to this area of research , the role of features in speech processing and the time course of speech processing . 2 . 2 . 1 features most useful are the extensive comments made by massaro about the status of features in his model ( see in particular chapter 2 and chapter 10 ) . i long have found it difficult to determine how close these features were to classical phonetic features . the book makes it clear to me that there is no direct relation between the former and the latter . as indicated above , the flmp postulates that there are three main stages of processing in pattern recognition : the feature evaluation stage , the feature integration stage , and the decision stage . specific assumptions are made in the model about how features are integrated with each other , and how a decision is taken depending on the outcome of this integration . from a set of feature values , therefore , the model will predict the probability of occurrence of each possible response ( e . g . &quot; ba &quot; and &quot; da &quot; ) . however , attention should be paid to the fact that these feature values are in no way derived from the stimulus . they are actually determined in an posteriori manner , from the subjects &#x27; observed responses , using an algorithm ( stepit ) which allows the deviation between these responses and the predicted ones to be minimal . features are seen in the model as * free parameters * , whose values are set on the basis of the actual performance of the subject in the pattern recognition task , so as to make the model perform at its best , i . e . to maximize its goodness of fit . according to massaro , &quot; [ the model is ] * predicting * the exact * form * of the results , but * postdicting * the actual quantitative * values * that make up the overall predictions &quot; ( p . 294 , his emphasis ) . in other words , the stimulus is on no occasion explicitly mapped onto the internal features of the flmp model . in that respect , features as defined in the flmp look markedly different from phonetic features . let us take for example the opposition between / ba / and / da / , on which much emphasis is put in the book . acoustically , / b / and / d / are said to differ from each other according to the feature grave-acute , / b / being classified as grave and / d / as acute . as is the case with flmp features , grave and acute can be viewed as target values referring to prototypical stops . however , the grave-acute feature is explicitly defined in acoustical terms ( e . g . slope of the short-term spectrum at the release of the stop , see stevens &amp; blumstein , 1978 ) . on the contrary , the exact nature of the flmp features remains undetermined , their values being subject to one main constraint which is to make the model account for the subjects &#x27; responses as accurately as possible . thus , the acoustic structure of the stimulus is not directly taken into consideration in the estimation of the feature values . in the experiments using audible speech , flmp features do lend themselves to an acoustic interpretation . in the / ba / - / da / experiment for example , the prototypes for / ba / and / da / are assumed to include one auditory feature , namely the variations in frequency of the second ( f2 ) and third ( f3 ) formants at the onset of the vowel ( slightly falling f2-f3 for / da / , rising f2-f3 for / ba / ) . however , this interpretation stems from the fact that f2 and f3 onset frequencies were precisely the acoustic parameters manipulated by the experimenters to synthesize the auditory continuum between / ba / and / da / . in other words , the acoustic significance of the flmp features is derived from the way in which the experiment has been designed . the model does rely on a particular system of acoustic features ( see for example stevens &amp; blumstein , 1978 , for an alternative system ) , but this system is embodied in the experimental design , and is as such external to the model itself . in practice , therefore , the issue of how speech sounds are mapped onto features is not addressed in the model . why this is so is not clear to me . on several occasions , massaro suggests that determining in advance how a given individual will convert a given stimulus into a set of feature values is simply out of our reach . this stimulus-to - feature mapping shows a variability which is said to be analogous to the variability of the weather : there are just too many previous contributions and influences to allow quantitative prediction ( 135 ) . a fundamental distinction is in fact established in the flmp between the intake of * information * , i . e . the stimulus-to - feature mapping , and * information processing * , i . e . how features are combined with each other and mapped into a response ( cf . p . 135 ) . while the flmp predicts that the information will be processed in the same way from one individual to the other , regardless of whether it relates to speech sounds , facial movements , manual gestures , etc . , it is assumed that the way in which this information is extracted from the stimulus is on the contrary subject to too many sources of variations to be accurately characterized ahead of time . in my understanding , this means that the so-called evaluation stage cannot be accounted for by the model , or at least not with much accuracy . however , at least on one occasion massaro does suggest that this limitation is not consubstantial with every model of perception and pattern recognition , and could be circumvented in some way . according to him , one could indeed &quot; easily hypothesize functions relating the feature values to the stimulus levels , [ although ] that would represent a * model of information * in addition to one of information processing &quot; ( 294 , my emphasis ) . this suggests that building such a model of information is feasible . whether there is a possibility of the flmp being completed with a model of this kind , i . e . an explicit stimulus-to - feature mapping stage , is an issue which remains to be addressed . 2 . 2 . 2 the time course of speech processing time plays quite a central role in different ways in the book . first , massaro shows how the flmp can be explicitly formalized to account for the dynamics of perceptual processing ( chap . 9 ) . this formalization is presented in reply to criticisms expressed by a number of investigators ( e . g . mcclelland , 1991 ) , who have pointed out that the flmp accurately characterizes the asymptotic outcome of the perceptual system ( e . g . the probability for a particular response to occur ) , but has little to say about the time course of processing . the dynamic version of the flmp is intended to address these reactions . in this version , the stimulus-to - feature mapping is assumed to take a certain amount of time . during this interval , the information about the stimulus gradually accumulates , and becomes increasingly accurate . it is assumed that accuracy increases as a negatively accelerated function of processing time , so that more information is gleaned early than late in the processing of the stimulus . one further assumption is that &quot; integration of the separate features [ is ] updated continuously as the featural information is being evaluated . similarly , decision [ can ] occur at any time after the stimulus presentation &quot; ( 259 ) . thus , there is a partial temporal overlap between the different stages of processing , in the sense that one process can begin before a previous process is finished ( see also figure 2 . 1 , p . 41 ) . these assumptions about the time course of information processing are supported by a number of experiments concerned with the effect of backward masking in the recognition of pure tones , and in the recognition of letters . speech obviously raises a number of specific issues in that domain , however . unlike written words , speech is a temporal phenomenon , it is continuous ( i . e . there are no systematic acoustic boundaries between phonemes , syllables , or words ) and , furthermore , time per se serves as a source of information in speech , as pointed out by massaro ( e . g . vowel duration is a major cue to the voicing of the following obstruent , to take but one example ) . somewhat regrettably , few indications are given about how the model could be assessed in the speech domain ( see remarks p . 194 and p . 263 ) . in addition to discussing the dynamics of processing , massaro examines how the temporal relations between sources of information are dealt with in pattern recognition . chapter 3 focuses on our sensitivity to temporal asynchronies between visible and audible speech . in the experiments reported in this chapter , bimodal cv syllables with various degrees of onset asynchrony between the auditory synthetic speech and the visible synthetic speech were presented to subjects in a forced-choice identification task . the results show that integration between the two sources of information still occurs when these sources of information are made asynchronous , provided that the time shift does not exceed a certain duration . one major challenge for phoneticians and psycholinguists alike is to characterize the relationship between what could be called the * external * dynamics of speech , i . e . the temporal organization of the speech signal , and the * internal * time course of speech processing . both play a role in the perception of speech , and it is most difficult to tell apart their respective influences on the listener &#x27;s behaviour ( samuel , 1996 ) . for example , in a gating study investigating the role of vowel duration as a cue to the voicing of the post-vocalic stop in cvc syllables , warren and marslen - wilson ( 1988 ) found that the proportion of voiced-coda responses increased as the listeners were presented with increasingly long portions of the initial cv sequence . one obvious interpretation is that longer vowels were perceived as being associated with voiced coda rather than voiceless ones . in keeping with massaro &#x27;s dynamical flmp , however , it may also be assumed that evaluating the information provided by the vowel takes time , and that the evidence pointing to a voiced coda gradually accumulates as more processing time is made available to the listener , all other things being equal . thus , the above finding raises the issue of how to differentiate the effect of vowel duration per se on the listener &#x27;s response , from that of the internal dynamics of processing . although this issue is not directly addressed in the book , there is no doubt that the flmp would constitute a most appropriate framework for further investigations in this domain . 2 . 3 general conclusion this book provides us with quite an extensive review of the work carried out by the author and others on the use of multiple cues in speech perception and , more generally , pattern recognition . it is aimed at a very large audience , and constitutes a most useful tool both for teaching and research purposes . i do not doubt that it will soon become a major reference for researchers in phonetics , psycholinguistics , and cognitive psychology . 4 bibliography liberman , a . m . ( 1996 ) . speech : a special code ( mit press , cambridge , mass . ) . mcclelland , j . l . ( 1991 ) . &quot; stochastic interactive processes and the effect of context on perception &quot; , cognitive psychology 23 , 1-44 . samuel , a . g . ( 1996 ) . &quot; the role of time during lexical access &quot; , journal of the acoustical society of america 100 , 4 / 2 , 2572 . stevens , k . n . , and blumstein , s . e . ( 1978 ) . &quot; invariant cues for place of articulation in stop consonants &quot; , journal of the acoustical society of america 64 , 1358-1368 . warren , p . , and marslen - wilson , w . ( 1988 ) . &quot; cues to lexical choice - discriminating place and voice &quot; , perception and psychophysics 43 , 21-30 . 5 biographical details the reviewer is a lecturer in the laboratory for psycholinguistics , fpse , university of geneva , switzerland . his current research covers a variety of topics ranging from the dynamics of articulatory movements in speech production to the phonetic bases of word recognition . thanks are due to uli frauenfelder for helpful comments . a latex version of this document is available upon request ( nnguyen @ fapse . unige . ch ) .
</pre>

## Record 008498

**Label:** `benign`

<pre>
At 12:32 PM 12/28/00 -0600, Adam Rifkin wrote:&gt;I repeat, IBM 76.8Gb ultra dma/100 hard drive at Fry&#x27;s for $375...
&gt;&quot;home of fast, friendly courteous service! (R)&quot;
&gt;
&gt;I kid you not.  That&#x27;s a half a cent a Megabyte for storage.
&gt;Not El Cheapo storage but top of the line storage.less than two years later, we have 320 GB for the same price:http://www.shareholder.com/maxtor/news/20020909-89588.cfmMaxtor Driving Capacity-Centric Enterprise Apps With &quot;Super-Sized&quot; ATA DrivesMaxtor Continues its Leadership in the Market it Pioneered with a New 
Category of High-Density ATA DrivesMILPITAS, Calif., September 9, 2002-Maxtor Corporation (NYSE: MXO), a worldwide leader in hard disk drives and 
data storage solutions, today announced Maxtor MaXLineTM, its newest 
generation of ATA drives designed specifically for rapidly emerging 
enterprise storage applications including near-line, media storage and 
network storage. The MaXLine family features two critical differentiators: 
huge capacities up to 320 GB for corporate archiving and media recording; 
and unique manufacturing and quality for 24/7 operations with mean time to 
failure (MTTF) rates exceeding one million hours.The MaXLine family is designed to bring hard disk drives into &quot;near-line&quot; 
archive applications. By adding a layer of MaXLine drives to archive 
architectures, companies can instantly recover time-critical data including 
executive e-mail, transaction data and accounting data that may need to be 
recovered on demand.These new drives are designed to solve another enterprise problem with the 
storage of video, media and audio conference call files. Even compressed, 
these files take up tremendous amounts of high-cost server space. Priced 
starting around $299.95 to $399.95 MSRP, Maxtor&#x27;s MaXLine family offers 
high capacity drives for enterprise applications at price points between 
traditional ATA and SCSI drives.For system OEMs and white box builders, MaXLine offers high-density, 
easy-to-integrate storage for use in entry-level and mid-size server 
environments.&quot;The demand for instant recall of archived data is expanding as companies 
are meeting their obligations to quickly access executive e-mails, 
financial documents and transaction records,&quot; said Mike Dooley, senior 
director of marketing for the Desktop Products Group at Maxtor. &quot;Users may 
not need to access information in these applications on a daily basis, but 
when they do need access, it must be instant. Recent advances in ATA 
technology and our manufacturing processes allow us to build upon our 
legacy of experience and provide our customers with a family of premium ATA 
hard drives that can be integrated into a variety of systems for these 
enterprise applications.&quot;The MaXLine family includes the 5400-RPM MaXLine II, designed for 
capacities up to 320 GB and the 7200-RPM MaXLine Plus II, designed for 
capacities up to 250 GB. At these capacities, MaXLine offers higher storage 
density than many tape and optical solutions. These drives have also been 
tested and are projected to meet enterprise reliability requirements, 
already exceeded by prior drives employing the same robust Maxtor designs, 
which exceed MTTF of over one million hours. These drives will also carry a 
three-year warranty.The MaXLine II and MaXLine Plus II feature the Maxtor Fast DriveTM 
UltraATA/133 interface for data transfer speeds up to 133 MB per second. 
The MaXLine II and MaXLine Plus II will be available with next-generation 
serial ATA interface for higher performance. At 150 MB per second maximum 
data transfer rate, serial ATA improves hard drive performance to keep pace 
with the rapidly increasing performance requirements of data intensive 
environments and enterprise applications.With a point-to-point connection architecture, and rich command set for 
managing hard drive activity and data flow along the interface, serial ATA 
advances the performance and efficiency of the drive to system interface. 
The interface&#x27;s reduced pin count allows for simpler cabling which in turn 
allows better airflow within a system and further benefits the user with 
increased design flexibility and hot plug capability.&quot;Maxtor&#x27;s MaXLine family of drives provide a solution for storing data that 
has previously been too expensive to keep on disk,&quot; said Dave Reinsel, 
analyst at IDC. &quot;The ATA drives offer a great value, low cost per GB and 
when integrated into storage systems and file servers offer a compelling 
cost-effective alternative to tape libraries and optical drives, which have 
been the traditional solutions used for near-line applications.&quot;Availability
Limited qualification units of the parallel ATA versions of Maxtor MaXLine 
II and MaXLine Plus II are now available; with volume units available in 
the fourth quarter. Qualification units of the MaXLine II and MaXLine Plus 
II with serial ATA will be available later this month with volume shipments 
scheduled to begin in the first quarter of 2003.About Maxtor
Maxtor Corporation (www.maxtor.com) is one of the world&#x27;s leading suppliers 
of information storage solutions. The company has an expansive line of 
storage products for desktop computers, storage systems, high-performance 
servers and consumer electronics. Maxtor has a reputation as a proven 
market leader built by consistently providing high-quality products and 
service and support for its customers. Maxtor and its products can be found 
at www.maxtor.com or by calling toll-free (800) 2-MAXTOR. Maxtor is traded 
on the NYSE under the MXO symbol.Note: Maxtor, MaXLine and the Maxtor logo are registered trademarks of 
Maxtor Corporation. Fast Drive is a trademark of Maxtor Corporation. All 
other trademarks are properties of their respective owners.GB means 1 billion bytes. Total accessible capacity varies depending on 
operating environment.This announcement relating to Maxtor may contain forward-looking statements 
concerning future technology, products incorporating that technology, and 
Maxtor&#x27;s execution. These statements are based on current expectations and 
are subject to risks and uncertainties which could materially affect the 
company&#x27;s results, including, but not limited to, market demand for hard 
disk drives, the company&#x27;s ability to execute future production ramps and 
utilize manufacturing assets efficiently, pricing, competition, and the 
significant uncertainty of market acceptance of new products.  These and 
other risk factors are contained in documents that the company files with 
the SEC, including the Form 10-K for fiscal 2001 and its recent 10-Qs.Copyright Â© 2001, Maxtor Corporation Â®. Privacy Policy.-- 
((Udhay Shankar N)) ((udhay @ pobox.com)) ((www.digeratus.com))

</pre>

## Record 008499

**Label:** `benign`

<pre>
start date : 1 / 14 / 02 ; hourahead hour : 12 ; start date : 1 / 14 / 02 ; hourahead hour : 12 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002011412 . txt
</pre>

## Record 008500

**Label:** `benign`

<pre>
new and recent titles in syntax &amp; morphology sentential negation in french paul rowlett , university of salford this is the first full-length study of sentential negation phenomena in french . paul rowlett assesses , from a generative perspective , the respective contribution made to the expression of clausal polarity by ne , pas , and elements such as jamais and personne . his conclusions have far-reaching implications , leading to the controversial hypothesis that , despite widespread belief , french is not a negative concord language . september 1998 256 pp . 0-19 - 512591 - 6 paper $ 29 . 95 0-19 - 511924 - x cloth $ 75 . 00 oxford university press _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ for more information about linguistics titles from oxford : visit the oxford university press usa web site at http : / / www . oup-usa . org or e-mail : linguistics @ oup-usa . org
</pre>

## Record 008501

**Label:** `benign`

<pre>
eol data , july 5 , 2001 eol deals from : 7 / 1 / 2001 to : 7 / 5 / 2001 enpower deals from : 7 / 1 / 2001 to : 7 / 5 / 2001 desk total mwh total deals desk total mwh total deals epmi long term california 446 , 400 39 epmi long term california 598 , 400 11 epmi long term northwest 135 , 600 14 epmi long term northwest 1 , 162 , 200 28 epmi long term southwest 604 , 200 57 epmi long term southwest 491 , 000 23 epmi short term california 140 , 120 202 epmi short term california 138 , 400 45 epmi short term northwest 69 , 600 113 epmi short term northwest 50 , 720 49 epmi short term southwest 74 , 200 60 epmi short term southwest 232 , 400 73 grand total 1 , 470 , 120 485 grand total 2 , 673 , 120 229 eol deals from : 7 / 5 / 2001 to : 7 / 5 / 2001 enpower from : 7 / 5 / 2001 to : 7 / 5 / 2001 desk total mwh total deals desk total mwh total deals epmi long term california 144 , 000 14 epmi long term california 465 , 200 4 epmi long term northwest 45 , 600 5 epmi long term northwest 1 , 160 10 epmi long term southwest 389 , 200 36 epmi long term southwest 419 , 585 35 epmi short term california 95 , 216 94 epmi short term california 37 , 216 23 epmi short term northwest 52 , 800 59 epmi short term northwest 23 , 912 41 epmi short term southwest 10 , 800 22 epmi short term southwest 37 , 176 26 grand total 737 , 616 230 grand total 984 , 249 139 ice volumes from : 7 / 5 / 2001 to : 7 / 5 / 2001 delivery point epmi mwh total mw price mid c ( op , bal month ) 12 , 800 6 , 400 $ 50 . 50 mid c ( p , next day ) 1 , 600 0 $ 79 . 00 palo ( p , next day ) 800 0 $ 91 . 75 palo ( p , augol ) 43 , 200 0 $ 98 . 13 palo ( p , sepol ) 9 , 600 9 , 600 $ 84 . 00 sp - 15 ( p , next day ) 1 , 600 0 $ 81 . 00 sp - 15 ( p , bal month ) 24 , 000 0 $ 87 . 17 sp - 15 ( p , augol ) 21 , 600 0 $ 87 . 50 grand total 115 , 200 16 , 000 $ 659 . 05
</pre>

## Record 008502

**Label:** `benign`

<pre>
mhaith le einne anseo caint le TG4 faoin LBW?Donncha. ---------- Forwarded Message ----------Subject: Linux Beer Hike Date: Tue, 30 Jul 2002 10:00:56 +0100 From: Diarmaid Mac Mathuna To: donncha.ocaoimh@tradesignals.comA Dhonncha, a chara,TÃ¡ mÃ© ag dÃ©anamh taighde don clÃ¡r teilifÃ­se An Tuath Nua (a bhÃ­onn Ã¡ chraoladh ar TG4) faoi lÃ¡thair, agus chonaic mÃ© go mbedih an Linux Beer Hike ar siÃºl i Doolin i mbliana. Bheadh spÃ©is againn mÃ­r a dhÃ©anamh mar gheall ar an Hike ar an gclÃ¡r - an mbeidh tÃº fÃ©in nÃ³ aon duine eile le Gaeilge ar an Hike go bhfios duit?Go raibh maith agat as do chabhair,SlÃ¡n,Diarmaid_________________________ Diarmaid Mac MathÃºnaAgtel 37-39 Fitzwilliam Square, Dublin 2 37-39 PlÃ¡s Mhic Liam, Baile Ãtha Cliath 2Phone / FÃ³n: (01) 605 3737 / (086) 880 4187 Fax / Facs: (01) 676 6137e-mail / r-phost: diarmaid.mac@agtel.ie web / idirlÃ­on: www.agtel.ie--------------------------------------------------------- Irish Linux Users&#x27; Group: ilug@linux.ie http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information. List maintainer: listmaster@linux.ie
</pre>

## Record 008503

**Label:** `benign`

<pre>
fw : crosstex energy , driscoll ranch # 1 &amp; # 3 , meters 9858 reinhardt , donald p . ; riley , brian ; smith , susan ; walker , robert ; weissman , george subject : crosstex energy , driscoll ranch # 1 , meter 9858 , may , 2001 per section 2 . 2 of the gpa , crosstex has elected to sell this gas ( approximately 10 , 000 / d ) baseload for the month of may , 2001 at if hsc - $ 0 . 10 . thanks . jab
</pre>

## Record 008504

**Label:** `benign`

<pre>

----- Original Message ----- 
From: &quot;John Hall&quot; &gt; A Green once said that if the Spotted Owl hadn&#x27;t existed they
&gt; would have had to invent it.  
A Republican once said &quot;I am not a crook&quot;.

</pre>

## Record 008505

**Label:** `benign`

<pre>
re : cover design / copy for energy derivatives publication fiona , to answer your questions : 1 . we approved chapter 3 for publication . 2 . my current affiliation is enron n . a . grant left the company but my advice it to leave his bio as is ( it reflects his employment status when he was working on the chapter ) . i don &#x27; t think we should update the bio and advertise his new employer . 3 . ad material is fine . vinnce
</pre>

## Record 008506

**Label:** `benign`

<pre>
use Perl Daily NewsletterIn this issue:
    * Perl CMS Systems
    * 1998 Perl Conference CD Online
    * Bricolage 1.4.0 Escapes!+--------------------------------------------------------------------+
| Perl CMS Systems                                                   |
|   posted by ziggy on Tuesday September 03, @05:00 (tools)          |
|   http://use.perl.org/article.pl?sid=02/09/02/1827239              |
+--------------------------------------------------------------------+KLB writes &quot;[0]Krow, one of the authors of [1]Slash, has written up a
[2]review on [3]Linux.com of two other Perl CMS systems, the E2 and LJ
engines. Makes for interesting reading.&quot;Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/02/1827239Links:
    0. http://krow.net/~
    1. http://slashcode.com/
    2. http://newsforge.com/article.pl?sid=02/08/28/0013255&amp;mode=thread&amp;tid=49
    3. http://linux.com/
+--------------------------------------------------------------------+
| 1998 Perl Conference CD Online                                     |
|   posted by gnat on Tuesday September 03, @19:34 (news)            |
|   http://use.perl.org/article.pl?sid=02/09/03/2334251              |
+--------------------------------------------------------------------+[0]gnat writes &quot;[1]The 1998 Perl Conference CD is online on perl.org.
Enjoy the blast from the past (was [2]this Damian&#x27;s first public
appearance?)&quot; (thanks to Daniel Berger for packratting the CD!)Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/03/2334251Links:
    0. mailto:gnat@oreilly.com
    1. http://www.perl.org/tpc/1998/
    2. http://www.perl.org/tpc/1998/User_Applications/Declarative%20Command-line%20Inter/
+--------------------------------------------------------------------+
| Bricolage 1.4.0 Escapes!                                           |
|   posted by chip on Tuesday September 03, @19:57 (tools)           |
|   http://use.perl.org/article.pl?sid=02/09/04/002204               |
+--------------------------------------------------------------------+[0]Theory writes &quot;Bricolage 1.4.0 has finally escaped the shackles of its
CVS repository! ... Bricolage is a full-featured, enterprise-class
content management and publishing system. It offers a browser-based
interface for ease-of use, a full-fledged templating system with complete
programming language support for flexibility, and many other features
(see below). It operates in an Apache/mod_perl environment, and uses the
PostgreSQL RDBMS for its repository.&quot;This story continues at:
    http://use.perl.org/article.pl?sid=02/09/04/002204Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/04/002204Links:
    0. http://bricolage.cc/Copyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.
</pre>

## Record 008507

**Label:** `benign`

<pre>
At 17:34 31/07/02 +0100, Liam Bedford wrote:
&gt;fdisk /mbr will restore a dos MBR.. it&#x27;ll leave the partitions alone.
Will clear the Partition table entries in the MBR if it does not end with 
valid Boot signature.Regards Ger-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008508

**Label:** `benign`

<pre>
start date : 1 / 8 / 02 ; hourahead hour : 3 ; start date : 1 / 8 / 02 ; hourahead hour : 3 ; no ancillary schedules awarded . variances detected . variances detected in load schedule . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002010803 . txt - - - - load schedule - - - - $ $ $ variance found in table tblloads . details : ( hour : 3 / preferred : 119 . 37 / final : 119 . 34 ) trans _ type : final load _ id : sdgl mkt _ type : 2 trans _ date : 1 / 8 / 02 sc _ id : enrj
</pre>

## Record 008509

**Label:** `benign`

<pre>
shut - in of meter 989842 meter 0989842 tri - c resources gov . daniel was shut in at approximately 12 : 00 pm on friday april 13 . the producer was shut in due to high hydrocarbon dew point . if you have any questions please call me at 3 . 6449 . thanks gary hanks
</pre>

## Record 008510

**Label:** `benign`

<pre>
feedback error - 1 / 00 could one of you please extend deal # 151203 for meter 1595 ? this deal expired 12 / 31 / 99 . thanks . aimee - - - - - - - - - - - - - - - - - - - - - - forwarded by aimee lannou / hou / ect on 03 / 06 / 2000 02 : 45 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : karen lindley @ enron 03 / 06 / 2000 09 : 58 am to : aimee lannou / hou / ect @ ect cc : subject : feedback error - 1 / 00 aimee , there is a feedback error on swing meter 981595 , deal number 151203 for january 2000 . pops and mops systems match , however in checking in sitara , the deal number attached expired 12 / 31 / 99 . i am not sure you are the correct person to address this with , if not , please let me know . if you can fix this problem , please do so and let me know . thanks and let me know if you need any addtional data as well . karen x 58381
</pre>

## Record 008511

**Label:** `benign`

<pre>
acl-99 call for theme proposals call for theme proposals acl-99 conference : the 37th annual meeting of the association for computational linguistics university of maryland june 22 - - 27 1999 the association for computational linguistics would like to encourage the submission of papers on substantial , original , and unpublished research on all aspects of computational linguistics . a particular aim for the 1999 conference is a broadening of both the thematic coverage and geographical origin of submissions ; to this end , we are experimenting with a new format . some proportion of the conference will be given over to special sessions , somewhat like a special issue of a journal , organised around themes proposed by members of the nlp community . our aim is to incorporate some of the intensity and excitement of the traditional post-conference workshops , without replacing those workshops - - - we expect , as has become traditional , that there will also be a set of post-conference workshops that will remain separate from the main meeting . this call invites proposals for thematic sessions in accordance with the considerations below ; a final call for papers will be sent out in early november . what is a thematic session ? we are soliciting proposals for themes that will provide 4 - - 8 high quality papers , typically forming one or two sessions in the main conference . proposers of accepted themes , who will become the chairs of those sessions , will have similar responsibilities to those of workshop organisers in terms of arranging reviewing and the delivery of camera ready copy ; however , the papers will be scheduled as part of the main sessions and will be published as part of the main conference proceedings . in terms of subject area coverage , we expect thematic sessions will be closer to workshop topic areas in focus . format of theme proposals please specify the following : - chair details : name , address , email , telephone number , fax - title - summary : at most one page describing the proposed subject area , citing evidence that there is sufficient interest in the area to generate enough high quality submissions to populate up to a half-day &#x27;s worth of presentations . - proposed review committee : each paper submitted should be reviewed by at least three people . as part of your proposal , you should suggest a potential review committee of around 12 people who will be asked to serve on the committee if the proposal is accepted . your list should demonstrate the spread of interest in the area in the community , encouraging both international participation and the participation of a broad range of researchers , including both senior members of the community and graduate students . theme proposals should be submitted to the email address provided below . informal enquiries as to what might work as a theme can also be directed to this address in advance of the submission date . possible themes might be topics like : nlp and data mining ; word segmentation in asian languages ; reconciling functional and formal approaches to syntax ; approaches to concept to speech . we provide these examples only as indications of the variety of topic areas that will be considered . important dates this call issued : september 14 , 1998 theme submissions deadline : october 12 , 1998 notification of selected themes : october 26 , 1998 call for papers : early november 1998 paper submissions deadline : january 25 , 1999 notification of acceptance : march 22 , 1999 camera ready papers due : may 3 , 1999 general submission questions chairs for the acl-99 program are ken church and robert dale . all queries regarding the program should be sent to acl99 @ mri . mq . edu . au ; this forwards to both authors . submission format theme proposals should be of approximately two pages in length , ideally submitted in ascii by email to acl99 @ mri . mq . edu . au with the subject : &quot; acl99 theme proposal &quot; . more complicated formats such as standalone latex ( not requiring additional style files ) , postscript , and word will be accepted if they print on the first try . hardcopy proposals should be faxed or mailed to * both * of the chairs , clearly labeled &quot; acl99 theme proposal &quot; . proposals should be received by 5pm gmt on october 12th 1998 . ken church ( co - chair ) robert dale ( chair ) at&amp;t labs - research microsoft research institute 180 park ave , office d235 school of mpce po box 971 macquarie university florham park , nj 07932-0971 , usa sydney nsw 2109 , australia kwc @ research . att . com robert . dale @ mq . edu . au tel : + 1 973-360 - 8620 tel : + 61 2 9850 6331 fax : + 1 973-360 - 8077 fax : + 61 2 9850 9529
</pre>

## Record 008512

**Label:** `benign`

<pre>
jireem @ utxvms . cc . utexas . edu does anyone have a term for the experience of looking at a printed word long enough or saying it out loud enough times so that it loses all semantic associations and becomes an absurd sequence of letters or sound ? either an accepted term or a more personal working term will do . respond to me directly and i &#x27; ll summarize to the list . thanks , michael erard dept . of english ut - austin jireem @ utxsvs . cc . utexas . edu
</pre>

## Record 008513

**Label:** `benign`

<pre>
offer to rakish ( sp ? ) vince , norma called and said that rakish had requested stock options instead of a signing bonus . she suggested giving $ 30 k worth of options which would vest over a 3 year period , and i told her that i am sure this would be fine with you . it should cost us less than the offered cash bonus of $ 20 k . - - stinson
</pre>

## Record 008514

**Label:** `benign`

<pre>
meters after talking to both vance taylor and julie meyers , only 5 of the 13 deals are committed reserve deals . if they are not committed reserve they &#x27; re not in the im wellhead portfolio . the plan if everyone agrees , is to go ahead and move the 5 and re - path to them to the gathering and leave the other 13 on the 215 contract . here is a list of the ones to move and leave . move to im wellhead re - path gathering 984056 # 94120 cologne production company 986480 # 114514 cokinos natural gas company 986534 already repathed 986614 # 130917 prize energy resorces lp 986855 # 94120 cologne production company stay on hplc and 215 contract 986347 # 234218 duke energy trading 986751 # 229726 conerstone gas gathering co . inc . 986888 # 126166 amoco trading comp . # 95610 amoco trading comp . 986899 # 104382 highland energy company 989602 # 229316 wagner &amp; brown ltd 989603 # 229467 vintage gas inc . 989676 # 151669 cokinos natural gas company 989711 # 229316 wagner &amp; brown ltd .
</pre>

## Record 008515

**Label:** `benign`

<pre>
re : prc meeting agenda recap i think i &#x27; m unclear on some points . the accomplishments by 6 / 19 is for directors and above - to sally . individual groups under sally will probably set their deadlines prior to the smaller prc &#x27; s . i did not understand that promotions are to be discussed prior to the meeting with sally nor did i understand that the employee had to be in their role for 1 year . i thought the promotion discussion would be an agenda item of prc . additionally , i understood the mid - year promotion listing would not be as extensive as year - end , maintaining the year - end as the primary promotion time . can you clarify ? thanks . enron north america corp . from : hector mcloughlin 05 / 31 / 2000 06 : 07 pm to : sally beck / hou / ect @ ect , kristin albrecht / hou / ect @ ect , sheila glover / hou / ect @ ect , brenda f herod / hou / ect @ ect , michael e moscoso / hou / ect @ ect , eugenio perez / hou / ect @ ect , scott pleus / enron communications @ enron communications , brent a price / hou / ect , susan harrison / hou / ect @ ect , stephen p schwarz / hou / ect @ ect , mary solmonson / hou / ect @ ect , sheri thomas / hou / ect @ ect , robert superty / hou / ect @ ect , peggy hedstrom / cal / ect @ ect , shona wilson / na / enron @ enron , steve jackson / hou / ect @ ect , jefferson d sorenson / hou / ect @ ect cc : norma villarreal / hou / ect @ ect subject : prc meeting agenda recap please distribute the recap of the meeting to your managers . thanks , hgm
</pre>

## Record 008516

**Label:** `benign`

<pre>
I&#x27;ve been testing Razor, invoked from sendmail/procmail and so far it
seems pretty copacetic. Last night&#x27;s spam to the list provided a good test
- the spam itself as well as several of the responses were flagged, as
other list members reported.This morning I piped the messages out from pine, being careful to use the
RAW mode, to razor-check -d. None of the messages come back as spam, even
the spam. Since folks revoked the false positives, I understand why they
would not come up, but not the spam itself, unless that also was revoked.Is this spam just a bad one to test against, or is there some setting in
pine or razor that I am missing?-- 
sc-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008517

**Label:** `benign`

<pre>
hsr and the top 50 customers tomorrow re : the hsr waiting period issue : we can proceed with our plans , but all correspondence will be handled through the ubs call center in connecticut . i plan to start doing this tommorrow morning , assuming we get the connecticut fax and phone numbers tonight . detailed changes : - fax number will be in connecticut , and will roll to here . - connecticut call center person will answer any help desk calls , which will then be transferred here . - connecticut call center will send pa faxes in accordance with instructions from here . - cover letter will have ubs letterhead , but will be unsigned and will specify connecticut numbers - splash page will be modified to show connecticut numbers - once we reach closing date , the numbers will be permanently forwarded to here . - all future correspondence ( and the bulk mailings ) will specify the houston number the concern is that during the waiting period , we need for ubs people to represent ubs interests on all official correspondence with customers . please call me if you have any concerns . i plan to put out the revised splash page and start the top 50 marketing efforts at about 10 : 00 am tomorrow morning . dave
</pre>

## Record 008518

**Label:** `benign`

<pre>
notice to subscribers moderators &#x27; note : as some of you have noted , we have fallen behind in posting messages this summer . the reason is that we are extremely shorthanded right now . as you know , none of our student editors is paid during the summer , so if they want to go to the lsa institute ( ljuba and anna ) , take a &quot; real &quot; 9 - 5 : 00 job ( ron ) , or even get married ( ann ) , all we can say is : a ) godspeed b ) boy , do we now realize how much work you were doing all year ! we have n&#x27;t edited without help since the list was 1000 subscribers . now it &#x27;s 6500 ; and we find that we simply can&#x27;t keep up in the time we have to give to linguist . ( unfortunately , our universities expect us to teach , write , run academic programs , and otherwise pretend we &#x27; re professors . editing linguist is strictly extra-curricular . ) all this is said , not in order to complain , but simply to ask for your patience with the inevitable slowdown . at this point , we do n&#x27;t see anything we can do about it . however , in a few weeks , things should improve . ann ( bride of 2 weeks ! ) is helping out now when she can ; and the others will help out again when they get settled . also , software that will make the editing faster should be in place by the end of summer . but , of course , the real solution would be paid editors in the summer , i . e . , grad students on fellowship and enrolled in summer school . thus , we want to thank - - most heartily - - those of you who have contributed to the linguist development fund that makes possible fellowships for student editors . after told you in april that we were $ 5000 short of the $ 8000 we need to retain ljuba and ann , you responded most generously . we received about 200 contributions ranging from $ 5 to $ 500 and coming from all parts of the globe . we are extremely grateful for contributions of all sizes - - and for the many encouraging notes we received as well . the list of 1995 contributors below includes grad students , professors , departments , universities , and commercial and non-commercial publishers . please take a minute to read through it , as we would like to make sure that supporters are recognized - - particularly organizations and publishers , who contribute more as a service to the discipline than for commercial benefits . unfortunately , we are still short of our goal . if you &#x27; ve been thinking of contributing but have n&#x27;t gotten around to it yet , we &#x27;d very much appreciate your help . please send your contributions to : linguist editorial support fund c / o english dept . eastern michigan u . ypsilanti , mi 48197 usa and , once again , our most sincere thanks to the individuals and institutions listed below . - helen &amp; anthony - - - - - - - - - - 1995 contributors - - - - - - - - valued supporters : anonymous ( 3 ) barbara abbott maher awad yukiko sasaki alam robert beard elabbas benmamoun robert chandler linda coleman alan cienki donna cromer stanley dubinsky bethany dumas susan fischer frank gladney john grinstead yukio hirose alice horning shin ja hwang frances ingemann margaret jackman james jenkins brian joseph martin jung carolyn kirkpatrick yuriko kite ernest mccarus scott mcginnis deborah mandelbaum jeff marck susan pintzuk terence potter mel resnick burton rosner catherine rudin janine scanarelli makoto shimizu beth simon patrons ( $ 50 or more ) : anonymous australia national university ( for pacific linguistics press ) michael bernstein ( for cascadilla press ) garland bills claude boisson e . wayles browne tucker childs bernard comrie julia falk james harris carolyn herrarte richard hudson roderick jacobs karen jensen ( w / matching funds from microsoft ) james kirchner tadao miyamato katsuhiko momoi daniel radzinski alexis manaster ramer barbara pearson joe salmons &amp; monica macaulay ucla yutaka sato ernest scatton karen stanley karl teeter theo vennemann mainstays ( $ 100 or more ) : anonymous victoria fromkin arnold zwicky university of helsinki ? elsevier science ltd . globalink : the translation co . holland academic graphics indiana university linguistics club publications linguistics dept . , academica sinica john benjamins , inc . kluwer academic publishing lawrence erlbaum macquarie dictionary the mit press ( book dept . ) the mit press ( journals dept . ) the mit working papers in linguistics summer institute of linguistics
</pre>

## Record 008519

**Label:** `benign`

<pre>
conference on maintenance and loss of minority languages third international conference on maintenance and loss of minority languages koningshof conference center , veldhoven , the netherlands november 26 - november 27 , 1998 programme the conference will consist of three sections . the first section addresses the sociological and social-psychological explanatory context in which language shift processes take place . the second section deals with language attrition from a psycholinguistic perspective , and the third is fully devoted to the building of an integrated explanatory framework for processes of language shift and loss . in memory of willem fase , one of the initiators of the first and second conference on maintenance and loss of minority languages , who died in 1997 , a new forum called the willem fase lecture has been set up . this plenary lecture forum will be granted to a promising scholar , to be selected from the abstracts submitted . thursday , november 26 , 1998 08 . 30-09 . 30 registration at koningshof conference center , veldhoven , the netherlands tea / coffee 09 . 30-10 . 00 conference opening section i : language shift from a sociological and social-psychological perspective 10 . 00-11 . 00 plenary session : lesley milroy 11 . 00-12 . 00 plenary session : richard bourhis 12 . 00-13 . 00 lunch 13 . 00-13 . 45 parallel sessions of free papers 13 . 45-14 . 30 parallel sessions 14 . 30-15 . 15 parallel sessions 15 . 15-16 . 00 tea / coffee section ii : language loss from a psycholinguistic perspective 16 . 00-17 . 00 plenary session : kees de bot 17 . 00-17 . 45 parallel sessions 17 . 45-18 . 30 parallel sessions 19 . 00-20 . 30 dinner friday , november 27 , 1998 section ii continued : language loss from a psycholinguistic perspective 08 . 30-09 . 30 plenary session : joel walters 09 . 30-10 . 15 parallel sessions 10 . 15-10 . 45 tea / coffee 10 . 45-11 . 30 plenary session : willem fase lecture 11 . 30-12 . 30 concluding remarks on section i and ii by joshua fishman 12 . 30-13 . 30 lunch section iii : towards an integrated explanatory framework for processes of language shift and loss 13 . 30-15 . 30 preparatory workshops 15 . 30-16 . 00 tea / coffee 16 . 00-17 . 30 round table chaired by michael clyne general information conference secretariat tilburg university research group on language and minorities c / o heleen strating - keurentjes p . o . box 90153 nl-5000 le tilburg the netherlands tel : + 31 13 4662588 fax : + 31 13 4663110 e - mail : language . loss . 98 @ kub . nl organizing committee - dr . ton ammerlaan , arnhem school of business - madeleine hulsen , university of nijmegen - dr . jetske klatter - folmer , institute for the deaf / tilburg university - heleen strating - keurentjes , tilburg university - piet van avermaet , university of leuven - dr . kutlay yagmur , tilburg university scientific committee - prof . kees de bot , university of nijmegen - prof . michael clyne , monash university , melbourne - prof . joshua fishman , stanford university , california / yeshiva university , new york - prof . koen jaspaert , university of leuven - dr . sjaak kroon , tilburg university location the conference will be held at koningshof conference center , veldhoven , the netherlands . this modern conference center is situated in forested areas , only fifteen minutes from the city of eindhoven and eindhoven airport . all rooms have a shower , toilet , television and telephone . koningshof offers a wide range of indoor and outdoor sports and leisure facilities , including a swimming pool , sauna , fitness club and squash court . registration and fees for registration , all participants ( including authors of submitted abstracts of papers ) are requested to mail the attached registration form before august 1 , 1998 . the registration fees are : dfl 410 conference programme and full board , before july 1 , 1998 . dfl 460 conference programme and full board , after july 1 , 1998 . dfl 235 conference programme , before july 1 , 1998 . dfl 285 conference programme , after july 1 , 1998 . please add an additional dfl 10 to cover international transfer charges if subscribing from abroad . the fee for the programme covers the conference fee , lunches on thursday and friday , tea / coffee during breaks , and the foreseen conference publication . the fee for full board additionally covers a single-room accommodation for one night including breakfast at koningshof conference center on thursday / friday as well as dinner on thursday . you will receive confirmation of registration , and the final programme at the end of august , 1998 . those who arrive earlier or wish to stay longer must take care of further accommodations themselves . they can contact the conference secretariat . payment of fees all payments should reach us either before july 1 , 1998 or ultimately by august 1 , 1998 ( see registration and fees ) . fees should be paid in dutch guilders to : kub / flw , account number 2386602 , mentioning &#x27; code 1 . 8210 . w334 &#x27; . cancellations the conference secretariat should be notified of cancellations in writing . if cancellations are received before august 1 , 1998 all fees , minus a cancellation charge of 25 % will be refunded . if cancelled after august 1 , but before september 1 , 1998 the cancellation charge will be 50 % . no refunds will be made for cancellations received later than september 1 , 1998 . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ registration form third international conference on maintenance and loss of minority languages , koningshof conference center , veldhoven , the netherlands , november 26 - november 27 , 1998 . please fill out completely and return to the conference secretariat before july 1 , or ultimately before august 1 , 1998 . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ o male / o female name , initials : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . first name : . . . . . . . . . . . . . . . . . . . . . . . . . . . . institution : . . . . . . . . . . . . . . . . . . . . . . . . . . . . mailing address : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . country : . . . . . . . . . . . . . . . . tel . / fax : . . . . . . . . . . . . . . . . . . . . . . . e - mail : . . . . . . . . . . . . . . . . . . . . . . . . please register me for : o conference programme and full board , before july 1 , 1998 . dfl 410 o conference programme and full board , after july 1 , 1998 . dfl 460 o conference programme , before july 1 , 1998 . dfl 235 o conference programme , after july 1 , 1998 . dfl 285 i hereby confirm that the fees have been remitted to the kub / flw account ( see payment of fees ) . special requests or requirements : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . place / date : signature : piet van avermaet centre for language and migration department of linguistics katholieke universiteit leuven blijde inkomststraat 7 , 3000 leuven tel : 32 + 16 + 325365 fax : 32 + 16 + 325360 e-mail : piet . vanavermaet @ arts . kuleuven . ac . be
</pre>

## Record 008520

**Label:** `benign`

<pre>
On Sat, 27 Jul 2002, kevin lyda wrote:&gt; On Sat, Jul 27, 2002 at 11:58:10AM -0700, Paul O&#x27;Neil wrote:
&gt; &gt; If I want to use tcpd for ftp and only one user will ever ftp but I dont
&gt; &gt; know what IP that user is because its dialup DHCP how do I setup tcpd for
&gt; &gt; that user?
&gt;
You could at the very least setup tcp wrappers and limit it to the dialup
domain name./etc/hosts.allowin.ftpd: .domain.name-kirk
&gt; please don&#x27;t reply to messages to send a new topic to ilug.  those of
&gt; us using threaded mail clients find that really annoying.
&gt;
&gt; tcpd is host based filtering/auth.  so if the ip is dynamic, you can&#x27;t
&gt; really use it.  however ftp supports user based auth - actually it kind
&gt; of requires a user, so just set up an account for that person.
&gt;
&gt; kevin
&gt;
&gt;
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008521

**Label:** `benign`

<pre>
Gary Lawrence Murphy writes:
&gt; 20,000 years ago, one of them the size of Mt Everest just ever so
&gt; slightly grazed us and left a scar 400km long in the side of South
&gt; America before it scooted out into space.  First nations people would
&gt; have been there then, and it would have seriously ruined their day.Do you have any further information about this incident that
would me find more details on the web?- Gordon
http://xent.com/mailman/listinfo/fork

</pre>

## Record 008522

**Label:** `benign`

<pre>
hpl meter # 986240 el campo / shanghai commonpoint daren : during the period of 9 / 1 / 99 to 9 / 30 / 99 , the above meter has recorded flow on the following days with no deals attached : days mmbtus 9 / 1 / 99 0 9 / 2 / 99 29 9 / 3 / 99 4 9 / 4 / 99 4 9 / 5 / 99 4 9 / 6 / 99 40 9 / 7 / 99 27 9 / 8 / 99 0 9 / 9 / 99 30 9 / 10 / 99 69 9 / 11 / 99 71 9 / 12 / 99 79 9 / 13 / 99 68 9 / 14 / 99 73 9 / 15 / 99 97 9 / 16 / 99 99 9 / 17 / 99 93 9 / 18 / 99 96 9 / 19 / 99 89 9 / 20 / 99 57 9 / 21 / 99 108 9 / 22 / 99 123 9 / 23 / 99 111 9 / 24 / 99 95 9 / 25 / 99 102 9 / 26 / 99 80 9 / 27 / 99 78 9 / 28 / 99 113 9 / 29 / 99 194 9 / 30 / 99 131 2 , 164 currently , these volumes are being booked under the hpl strangers gas contract . logistics needs either a deal to record these volumes which have flowed into hpl &#x27; s pipeline or logistics needs approval to writeoff these volumes to unaccounted for gas . ( please print , sign , and return original to clem cernosek ) . there was no deal at this meter the previous month or the later month . deal / dealticket # / customer ( seller / buyer ) or approval to writeoff the volumes to unaccounted for gas loss thanks , clem
</pre>

## Record 008523

**Label:** `benign`

<pre>
fw : good job - - - - - original message - - - - - from : belden , tim sent : monday , june 25 , 2001 9 : 08 am to : wolfe , greg subject : re : good job it &#x27; s great to see when the team works together and gets things done . messages like this make me feel good about my job and this group . - - - - - original message - - - - - from : wolfe , greg sent : monday , june 18 , 2001 1 : 56 pm to : belden , tim subject : fw : good job - - - - - original message - - - - - from : gang , lisa sent : monday , june 18 , 2001 10 : 09 am to : wolfe , greg cc : portland shift ; williams iii , bill subject : good job i wanted to commend the real time group for their efforts . for the past 6 month , i &#x27; ve noticed a dramatic difference in the accuracy of deal entry in enpower . accordingly , by the end of the day when i have to route , it has made my job that much easier . in the past it would take hours to figure out what deals were entered incorrectly . now it is very rare that our position manager is off and this makes everyone &#x27; s lives better ! keep up the great work guys ! ! ! ! lisa
</pre>

## Record 008524

**Label:** `benign`

<pre>
weather delta demonstration meeting the weather delta demonstration will be held wednesday , november 8 th from 10 : 00 - 11 : 30 am in ebl 9 c 2 . please let me know if this is ok with everyone . shirley - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 11 / 03 / 2000 10 : 06 am - - - - - - - - - - - - - - - - - - - - - - - - - - - alex huang @ enron 11 / 02 / 2000 01 : 06 pm to : shirley crenshaw / hou / ect @ ect cc : subject : re : weatherdelta demonstration scheduling shirley , can you schedule a meeting for the following people ? vince j kaminski , joseph hrgovcic , vasant shanbhogue , lance cunningham , sevil yaman , stinson gibner and i . the preferred time is the week after next week . thanks a lot . alex - - - - - - - - - - - - - - - - - - - - - - forwarded by alex huang / corp / enron on 11 / 02 / 2000 01 : 04 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski @ ect 11 / 01 / 2000 05 : 27 pm to : alex huang / corp / enron @ enron cc : vince j kaminski / hou / ect @ ect subject : re : weatherdelta demonstration scheduling alex , i agree . let them make up the data . please , ask shirley to determine convenient date and time . vince
</pre>

## Record 008525

**Label:** `benign`

<pre>
On Mon, 2 Sep 2002, Adam L. Beberg wrote:&gt; Battery pack, huh what???
&gt; 
&gt; You dont use batteries for a 1/4 mile run, you use capacitors. MANY timesActually, you use both.&gt; the energy density, and you can get the energy out fast enough. Note thatNo, even best supercapacitors are a long way to go from reasonably good 
electrochemical energy sources. But you can recharge and discharge them 
very quickly, and they take lots more of cycles than the best battery. 
Ideal for absorbing the braking energy and turn them into smoking tires 
few moments or minutes afterwards.&gt; the battery packs are fully swapped out for recharging after each run
&gt; anyway, just like a gas dragster is refueled, so this wouldnt be cheating.
&gt; 200 MPH should be no problem.I don&#x27;t see any reason why EVs shouldn&#x27;t dominate dragster runs. The
traction is the limiting factor, not motor power. You can basically put
the motors into wheelhubs mounted on a composite frame, and dump juice
into them until they melt, which will be some 100 sec downstream. Plenty
of time to smoke anything.Of course, it doesn&#x27;t roar, and spew smokage, so it won&#x27;t happen.

</pre>

## Record 008526

**Label:** `benign`

<pre>
nesa / hea &#x27; s 24 th annual meeting saddle up for nesa / hea &#x27; s 24 th annual meeting &quot; deep in the heart of texas &quot; september 9 - 11 , 2001 hyatt regency hill country resort san antonio , texas advance registration deadline august 17 , 2001 sign up today to save $ 100 . 00 attached below for your review is the annual meeting brochure . you will need adobe acrobat to view the brochure , which you can download from our web site at www . nesanet . org . if you have problems with the attached file please , contact nesa / hea headquarters at ( 713 ) 856 - 6525 and we will be happy to forward the brochure via fax or mail . lodging rate at the hyatt regency hill country resort is $ 201 . 00 single / double . the hyatt has a limited block of rooms available for nesa / hea members and guests - call ( 210 ) 647 - 1234 to make your reservation today ! be sure to mention that you are a delegate of nesa / hea &#x27; s annual meeting to receive discounted rates . cash prizes will be awarded to the winners of nesa / hea &#x27; s 18 - hole scramble golf tournament ! $ 100 per person for the first place team , $ 75 per person for the second place team and $ 50 per person for the third place team . additionally , $ 100 per person for competition holes ( closest - to - the - pin and longest drive for men and women ) will be awarded . the tournament will take place on monday , september 10 on the links at the hyatt regency hill country resort . airport shuttles can be arranged through worldtrans at hyatt hill country resort . cost is $ 20 . 00 per person each way . for additional information please call ( 210 ) 520 - 4083 . we hope that you take this opportunity to meet with your colleagues and customers in this relaxing yet professional environment to exchange ideas on matter of importance covering a broad spectrum of subjects . the annual meeting agenda includes timely issues presented by knowledgeable industry leaders who will discuss formidable and thought provoking issues affecting the industry today . attached below in an excel &#x27; 97 worksheet is the advance delegate registration list to date - join these delegates in september at nesa / hea &#x27; s annual meeting ! &gt; &gt; to unsubscribe from the nesa / hea member email blast list please respond to this email with the word unsubscribe typed into the subject field . this will preclude you from receiving any email blasts in the future , but hard copies of the material will be sent to your attention .
</pre>

## Record 008527

**Label:** `benign`

<pre>

... nor what color your passport?More American exceptionalism:
&gt; &quot;The United States is the only country in the world to tax its citizens
&gt; on a worldwide basis, irrespective of whether they spend time in the
&gt; country or whether they have assets there,&quot; said Philip Marcovici,
&gt; a Zurich-based lawyer with international law firm Baker and Mackenzie.and perhaps even irrespective of their
current citizenship:&gt; Under current expatriation law, there are wealth thresholds based on
&gt; net worth which lead to a presumption that a person giving up U.S.
&gt; citizenship is doing so for tax reasons.
&gt;
&gt; Individuals who have given up their citizenship and who have earned
&gt; $100,000 in any one of the 10 years before expatriation, or who have a
&gt; net worth exceeding $500,000, would automatically be deemed a so-called
&gt; &quot;taxpatriate.&quot; Those persons would be subject to ordinary income tax
&gt; on U.S. source income for 10 years. They would also be subject to
&gt; U.S. estate and gift tax during the 10-year period.I suppose it could be much worse;
there could be some twee affinity
program for US citizenship, and a
bank of phone people who only get
paid well if they manage to keep
one from cancelling membership...-Dave:::::::&gt; Last month, Congress proposed a new exit tax on all citizens who give up
&gt; their U.S. status. If the proposal becomes law, individuals will be taxed
&gt; as if they had either sold everything or died. This would give rise to
&gt; immediate exposure to capital gains tax.To be fair, would this mean that they&#x27;d
also immediately pay out the difference
for anyone whose tax basis was greater
than current estate value?:::::::
&gt; ... Australian cities overall scored particularly highly in the
&gt; [Economist Intelligence Unit] survey [of desirability for expats],
&gt; with all five the country&#x27;s urban centres surveyed ranked near the
&gt; top of the table.
&gt; 
&gt; Europe was also well represented among the top 10 places. 
&gt; 
&gt; The top US city, Honolulu, ranked 21st, with Boston, at 28th, the
&gt; highest ranked city on the US mainland. Canada, in contrast, sneaked
&gt; three cities into the top ten.
&gt; 
&gt; The UK cities of London, 44th, and Manchester, 50th, gained only a
&gt; mid-table rating, with Port Moresby in Papua New Guinea bottom of
&gt; the list.

</pre>

## Record 008528

**Label:** `benign`

<pre>
transwestern ios posting rich - please immediately post the attached information announcing transwestern &#x27; s ios to be held on august 10 th . the posting can come down on the 10 th . thanks .
</pre>

## Record 008529

**Label:** `benign`

<pre>
fw : bnycp litigation analysis : privileged and confidential here are the most recent memos . a second e - mail will provide another memo . angela d . davis enron north america corp . 1400 smith street , eb 3817 houston , texas 77019 tel : ( 713 ) 345 - 8347 fax : ( 713 ) 646 - 3393 e - mail : angela . davis @ enron . com - - - - - original message - - - - - from : brownfeld , gail sent : wednesday , july 11 , 2001 9 : 23 am to : marks , david ; keeney , william cc : haedicke , mark e . ; schuler , lance ; davis , angela subject : bnycp litigation analysis : privileged and confidential attached are the memoranda prepared by outside counsel assessing the bnycp litigation . to avoid as much confusion as possible , i suggest reading the andrews &amp; kurth memo first , the bernstein memo second and the risk matrix last . in a nutshell , all agree that this is a very fact intensive case and that there has been little factual discovery to date . it is also agreed that we have been denied the benefit of some of the evidence available as a result of the confidentiality obligations in place . accordingly , much of the analysis provided is really counsel &#x27; s &quot; best guess &quot; based on the information available . that being said , there seems to be a general agreement that , based on the facts currently available and the &quot; quick and dirty &quot; analysis that we have been able to do , the exposure ranges from approximately $ 20 to $ 50 million . interest and attorney fees could also prove significant . i am available to discuss this further if you think that would be helpful . thanks for your patience .
</pre>

## Record 008530

**Label:** `benign`

<pre>
memo from steve schneider please review the attached memo from steve schneider :
</pre>

## Record 008531

**Label:** `benign`

<pre>
fw : summary of bloomberg powermatch &#x27; s european proposal louise , i took a meeting with this guy from bloomberg at whalley &#x27; s request . attached is bloomberg &#x27; s idea to set up a power trading company / platform in europe . they would want us to commit trades in exchange for equity . i am not interested in the equity , but i told them i would distribute the idea to the proper people . it is also being floated around the london office . if you want , you can respond to this guy directly or i can take care of it . kevin garland - - - - - original message - - - - - from : andrew hausman , bloomberg / new york [ mailto : ahausman @ bloomberg . net ] sent : friday , august 03 , 2001 1 : 32 pm to : garland , kevin subject : summary of bloomberg powermatch &#x27; s european proposal kevin , i have also sent a hardcopy of the attached letter . andrew hausman
</pre>

## Record 008532

**Label:** `benign`

<pre>
more details on kern river expansion williams to expand kern river by 124 , 500 dth / d kern river gas transmission , a subsidiary of williams , said it planned on filing an application yesterday with ferc to add 124 , 500 dth / d of additional firm transportation capacity to its 922 - mile pipeline system . the company said the california expansion project will not only provide additional natural gas capacity from wyoming to markets in california , but also will provide an opportunity for williams to offer significantly reduced rates for firm transportation based on the recent approval by ferc of kern river &#x27; s extended term rate program . &quot; a combination of rapid growth and the development of new gas - fired power generation facilities in california is fueling expansion of the system , &quot; said kirk morgan , director of business development for kern river and northwest pipeline . the project includes construction of three new compressor stations , an additional compressor at an existing facility in wyoming , restaging a compressor in utah , and upgrading two meter stations . kern river said the $ 80 million project is targeted to be complete by may 1 , 2002 . the company said demand for firm transportation on kern river was driven by several factors : the diversion of canadian gas supplies to markets in the midwest from the pacific region ; increased production in the rocky mountain basin ; strong economic growth in kern river &#x27; s market areas ; and increased demand from gas - fired electric generation facilities . williams said it anticipates holding an open season later this year to determine the level of market interest in a second expansion of the kern river pipeline . &quot; the demand for competitively priced transportation to markets in nevada and california continues to grow . at the same time , gas producers in the rocky mountain basin are stepping up production . an expansion on kern river in 2003 could help bring that production to market , &quot; said morgan .
</pre>

## Record 008533

**Label:** `benign`

<pre>
re : digitals many thanks . gillian .
</pre>

## Record 008534

**Label:** `benign`

<pre>
santa clara yesterday we sold to santa clara ( silicon valley ) : 50 mw 7 x 24 np - 15 $ 64 1 / 1 / 02 - 12 / 31 / 06 1 . 5 mmmwhrs low price , but good credit good contract
</pre>

## Record 008535

**Label:** `benign`

<pre>
brownsville peaker data hey guys , further to our meeting , here ( courtesy of john t ) are the addresses to view the peaker data for our upcoming testing : a . o : \ _ dropbox \ peakerdata \ peakersl 999 . htm b . o : \ _ dropbox \ peakerdata \ peakers 2000 . htm at the present time , these pages display on microsoft internet explorer only . type in the above urls in the address area of your ie . the pages refresh automatically once every minute . cheers , - - scott
</pre>

## Record 008536

**Label:** `benign`

<pre>
Once upon a time, Harri wrote :&gt; Title page has a login screen and I can&#x27;t seem to get the apt indexes
&gt; anymore. Is it just me or is something going on there?You can&#x27;t get the file index from here either?
http://apt.nixia.no/apt/files/During the past few days, I&#x27;ve experienced connection problems with that
site from time to time, but for me right now it&#x27;s working.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 008537

**Label:** `benign`

<pre>
re : june 2001 blue dolphin darren , thank you for such a prompt response . when looking in the volume management , i saw volume scheduled in ena and ena upstream . i actualized in ena and i heard that blue dolphin will go to upstream starting july production month . could you confirm which entity for the month of june ? thanks ! antoinette - - - - - original message - - - - - from : farmer , daren j . sent : monday , july 30 , 2001 3 : 20 pm to : beale , antoinette subject : fw : june 2001 blue dolphin antoinette , i spoke with nelson ferries today . we are responsible for the transport fees on blue dolphin for june . i have pathed the volumes in unify . please look into this and let me know if you have any questions . additionally , i input the purchase and sale deals that were not in the system . can you please inform the appropriate person in settlements to handle those deals ? thanks . d - - - - - original message - - - - - from : smith , george f . sent : friday , july 27 , 2001 2 : 15 pm to : farmer , daren j . subject : fw : june 2001 blue dolphin darren , you may want to give antoinette a call &gt; - - - - - original message - - - - - from : beale , antoinette sent : friday , july 27 , 2001 2 : 04 pm to : smith , george f . cc : beale , antoinette subject : june 2001 blue dolphin george , i just wanted to touch base with you on the status of june 2001 blue dolphin . you stated on tuesday that enron was not responsible for june . could you update me on any information you have acquired ? thanks ! antoinette
</pre>

## Record 008538

**Label:** `benign`

<pre>
Jobs touts OS X, iPods, iMacÂ Search
	                Â 
	                Â 
News.com
	                All CNETÂ Â Â Â 
	                The Web
                Â Live tech help NOW!
April&#x27;s tech award
1 million open jobs
News.com: Top CIOs 
ZDNet: PeopleSoftJuly 17, 2002Jobs touts OS X, iPods, iMacScient files for Chapter 11 Yahoo Mail puts words in your mouthUnisys splits Intel server line Microsoft sweetens Mac Office offer New chip may portend ATI comebackÂ PerspectivesWhy free downloads help, not hurt
Recording artist Janis Ian argues that file swapping could actually help the industry, and its musicians.
Read Full Story
Jobs touts OS X, iPods, iMacNEW YORK--Apple Computer CEO Steve Jobs on Wednesday defended the company&#x27;s switch to the Mac OS X operating system and unveiled new iPod digital-audio players and a new flat-panel iMac.
Jobs used his keynote speech at the Macworld trade show here to make a flurry of other announcements as well, such as details about new syncing software, the next update to OS X and the end of free iTools.The most dramatic announcement focused on iPod. The new players include ones built specifically for computers that use Microsoft&#x27;s Windows operating system.July 17, 2002, 8:30 AM PT
 | Read Full Story Scient files for Chapter 11 Internet consulting firm Scient has filed for Chapter 11 bankruptcy and agreed to sell certain assets to a professional services firm.
The deal calls for Salt Lake City-based SBI to hire some of Scient&#x27;s employees and to provide up to $4.9 million in financing, pending completion of the asset acquisition.Scient has been struggling for some time now. Once a dot-com darling, the company recently approved a 1-for-20 reverse stock split.
The company and SBI said they expect the bankruptcy court to approve the deal, adding that financing &quot;will allow Scient to continue to deliver services to its clients without interruption until court approval of SBI&#x27;s acquisition is received.&quot;
July 17, 2002, 8:30 AM PT
 | Read Full Story Yahoo Mail puts words in your mouthWhat does Yahoo Mail have against mocha?
That&#x27;s what users of the company&#x27;s free e-mail service may be wondering if they try to send a message using the word &quot;mocha&quot; and discover that while in transit, &quot;mocha&quot; mysteriously changes to &quot;espresso.&quot;To protect users from malicious code, Yahoo uses an automated filter to swap out a handful of words such as &quot;mocha&quot; that pertain to Web code known as JavaScript.
The reason is that e-mail sent in a form known as &quot;Web enhanced&quot; can contain JavaScript instructions that can run programs on the recipient&#x27;s PC. JavaScript is a Web language that can issue commands such as telling the browser to open up other windows or to prompt a service to change a password, for example.
July 17, 2002, 4:00 AM PT | Read Full Story 
Unisys splits Intel server line Unisys, a specialist in high-end servers, is coming out with a new lower-cost line of Intel-based servers as it gears up to promote the Itanium 2 chip.
Unisys&#x27; new Aries servers accommodate as many as 16 Itanium 2 or Xeon processors and cost between $75,000 and $300,000, said Mark Fevertson, Unisys&#x27; vice president of server marketing. It joins the Orion line, which can use up to 32 Xeon or Itanium 2 processors and has been on sale for about two years at a cost between $140,000 and $700,000.
July 17, 2002, 10:40 AM PT
 | Read Full Story Microsoft sweetens Mac Office offer With sales of its Office suite for Mac OS X falling short of projections, Microsoft plans on Wednesday to announce a rebate for those who buy the software bundle when they pick up a new Mac.
The promotion, which runs through Sept. 30, entails a $50 mail-in rebate for people buying a new Mac and upgrading to Office v. X, and $100 for those buying a Mac and the full version of the software. Microsoft is also offering two new pieces of downloadable software: one that lets Palm handhelds synchronize directly with Office v. X and another that lets the Macintosh view programs running on a Windows PC or server.July 17, 2002, 3:00 AM PT
 | Read Full Story New chip may portend ATI comebackATI, once the leader in graphics chips, will launch its comeback bid this week with a new chip that experts say could put the company back in front in terms of performance.
The Markham, Ontario-based company on Thursday will unveil the details of the Radeon 9700, a desktop graphics chip based on a new architecture that will provide greater realism when it comes to 3D images, according to sources.The fastest versions of the new chips will offer considerably higher performance than Nvidia&#x27;s current GeForce4 roster, giving ATI the edge with gamers as well as PC makers, analysts said. And even after Nvidia--which began to chip away at ATI&#x27;s leading spot in graphics in 1999--comes out with its GeForce 5 in a few months, the competition between the two will remain close.
July 17, 2002, 4:00 AM PT
 | Read Full Story 
From our partners:Truth is in the iMac of the beholderBusiness Week
It&#x27;s silly of Apple to try to squelch Internet rumors about its next moves. Jobs &amp; Co. should rejoice that fans care enough to gossip.
July 17, 2002
 | Read Full Story eBags carries it offBusiness Week
The dot-com boom&#x27;s big spenders couldn&#x27;t buy success, but this online luggage vendor survived by making frugality its watchword.July 17, 2002
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
Â Jobs presents iMac&#x27;s new face
In his Macworld 2002 keynote, Apple CEO Steve Jobs shows off a new 17-inch flat-panel iMac.
 Watch Video
Â Â EnterpriseCA replaces four board members HP ousts workers for e-mail abuseGroup offers computer security standardE-BusinessVC-backed companies fusing forces Markets edge up on Intel newsuBid to charge listing fees to sellersCommunicationsTellabs warns of &quot;murky&quot; sales future Banks seek freeze on WorldCom funds Motorola&#x27;s net loss worst everMediaNet watchdog blasts China Web rules Yahoo strikes listing deal with CityFeet Eleven vie for .org namePersonal TechnologyApple to charge for iTools services Apple meets lowered expectations Moxi moves into cable boxes         Â 
The e-mail address for your subscription isÂ qqqqqqqqqq-cnet-newsletters@spamassassin.taint.org
UnsubscribeÂ |Â Manage My SubscriptionsÂ |Â FAQÂ |Â AdvertisePlease send any questions, comments, or concerns toÂ dispatchfeedback@news.com.Price comparisons |
Product reviews |
Tech news |
Downloads |
All CNET services        Copyright 2002 CNET Networks, Inc. All rights reserved.          
</pre>

## Record 008539

**Label:** `benign`

<pre>
re : full version darrell , thanks a lot . i really appreciate it . the text is below our usual standards but we are completely swamped with work here . vince darrell duffie on 08 / 15 / 2000 04 : 54 : 23 pm please respond to darrell duffie to : vince . j . kaminski @ enron . com cc : subject : re : full version i &#x27; ll have a look ! i haven &#x27; t much time , but can certainly get you a quick reaction , at least ! best , darrell &gt; x - lotus - fromdomain : ect &gt; from : &quot; vince j kaminski &quot; &gt; to : duffie @ stanford . edu &gt; date : thu , 10 aug 2000 14 : 04 : 47 - 0500 &gt; subject : full version &gt; mime - version : 1 . 0 &gt; content - disposition : inline &gt; x - uidl : 9 fef 7462 afa 5 d 4 ee 6 co 4 c 9 co 2 df 71 b 25 &gt; x - keywords : &gt; &gt; &gt; &gt; darrell , &gt; &gt; grant just alerted me that i sent you only part of the text . &gt; &gt; here is the full chapter with an aged version of gran &#x27; t part . &gt; what i sent you represents an update of his contribution . &gt; &gt; sorry for that . &gt; &gt; vince &gt; &gt; ( see attached file : volo 720 . doc ) darrell duffie mail gsb stanford ca 94305 - 5015 usa phone 650 723 1976 fax 650 725 7979 email duffie @ stanford . edu web http : / / www . stanford . edu / ~ duffie /
</pre>

## Record 008540

**Label:** `benign`

<pre>
URL: e59c6ca5938fc27a6995e30fc10b6482
Date: Not suppliedIt came out a while ago, but Ben Hammersley reviewed AmphetaDesk and a few 
other free aggregators in his Guardian article, Working the web: Newsreaders[1]
. In more timely news, OSDir[2], a repository of &quot;stable, open source apps&quot;, 
has reviewed AmphetaDesk[3] and labels it an &#x27;OSDir.com preferred&#x27; app. They 
also give you the ability to rate AmphetaDesk[4] on a scale of 1-10. You can 
see the current rating here[5].[1] http://www.guardian.co.uk/online/story/0,3605,781838,00.html
[2] http://www.osdir.com/
[3] http://osdir.com/modules.php?op=modload&amp;name=News&amp;file=article&amp;sid=34&amp;mode=thread&amp;order=0&amp;thold=0
[4] http://osdir.com/modules.php?op=modload&amp;name=Downloads&amp;file=index&amp;req=ratedownload&amp;lid=28&amp;ttitle=%3Ch3%3EShow%20Your%20Support%20for%20Amphetadesk%3C/h3%3E
    %3Ch3%3EShow%20Your%20Support%20for%20Amphetadesk%3C/h3%3E&quot;
[5] http://osdir.com/modules.php?op=modload&amp;name=Downloads&amp;file=index&amp;req=viewdownloaddetails&amp;lid=28&amp;ttitle=AmphetaDesk
    AmphetaDesk&quot;

</pre>

## Record 008541

**Label:** `benign`

<pre>
summary of &#x27; bubbler &#x27; a few months ago i posted an inquiry on the linguist listing on the distribution of the word &quot; bubbler &quot; as a synonym for drinking fountain . thanks to all who responded , which are too many to list . the dictionary of american regional english has also extensively investigated this word and it was my goal to gain more specific information than that supplied by dare ( for example , the regional distribution within wisconsin . ) here is a summary of my findings : in wisconsin , bubbler is used throughout the eastern half of the state , particularly along the coast of lake michigan and becomes less prominent the further west one travels . the &quot; stronghold &quot; of bubbler appears to be in milwaukee and its suburbs . milwaukee is also thought to be the geographic origin of bubbler , coined by the kohler company in the early 1900 &#x27;s . my university ( uw - whitewater ) appears to be in conflict over what to call drinking fountains . in one of our residence halls there is a sign asking residents to not use the drinking fountain as a garbage disposal . the word &#x27;d rinking &#x27; is crossed out , and &#x27; water &#x27; is put in its place . then &#x27; water &#x27; and &#x27; fountain &#x27; are crossed out , and &#x27; bubbler &#x27; is put in their place . it goes to show you that people can be very loyal to their colloquialisms ! my research provided no evidence for the term &#x27;s use in minnesota or illinois , but i did find the word in use along the western part of michigan &#x27;s upper peninsula ( which borders wisconsin &#x27;s bubbler-using region . ) if bubbler is used anywhere else in the midwest , its existence escaped my research . in fact , i found no evidence of the word &#x27;s use within the u . s . west of the mississippi or south of the ohio river . the other region that uses the term includes the state of rhode island ( where it is used exclusively by many speakers ) , far eastern connecticut , and southeastern massachusetts - including the boston area . i had people from this region respond with amusement because they did n&#x27;t know the word was used anywhere outside of their area . lastly , and much to my surprise , bubbler is used in southeastern australia - predominately in new south wales ( including sydney and canberra ) and in portions of the provinces bordering new south wales . the information on australia is only based on a few responses , but there were some , especially in sydney , who used bubbler exclusively while growing up . there were some from parts of australia who had never heard the term before , so it does appear that it is also regionally distributed in australia . there were some who distinguished bubblers from drinking fountains . some only called outside fountains , bubblers , while others vice versa . one only called non-refridgerating fountains , bubblers . drinking fountain seems to be the generic term that everyone is familiar with , whether they use it or not . other synonymns are : water fountain , water cooler , fountain , and water bubbler . for what its worth , the only accounts i had of the term &#x27; water bubbler &#x27; were among african americans from milwaukee ( but this only included three people . ) just plain &#x27; fountain &#x27; seemed to be the word of choice in northwestern wisconsin , while drinking fountain and water fountain were used pretty interchangeably everywhere else . as for its use in literature , the only printed documentation of bubbler i could find ( under the given definition ) was a 1985 milwaukee journal article which was about the word &#x27;s usage in milwaukee . i realize that some of my findings are inconsistent with dare - i believe this is because my research was not nearly as thorough as dare , and did n&#x27;t take into account historical usage , only current usage . thanks again to those who responded . your avid bubbler user , sean christensen internet : seanc @ iclnet93 . iclnet . org university of wisconsin - whitewater
</pre>

## Record 008542

**Label:** `benign`

<pre>
Once upon a time, Brian wrote :&gt; 
&gt;     More information on that slick &quot;gstreamer-universe&quot; thing.
&gt; 
&gt;     Go to this page: http://gstreamer.net/releases/redhat
&gt; 
&gt;     They seem to have declared a a package called &quot;gstreamer-universe&quot; as
&gt;     a collection of files.  This is brilliant; what we need to do is get
&gt;     someone with a Gnome2-universe and we&#x27;ll be set, aye?  :)
&gt; 
&gt;     Isn&#x27;t that a cool idea?This is called &quot;pseudo-packages&quot; or &quot;meta-packages&quot; and Debian has been
using them for ages. I think Mandrake also makes these kind of empty
packages.Anyway, their use has been discussed here a while back, and personally
although I do agree that they can be useful at times, I don&#x27;t really like
them. For me it&#x27;s more of an ugly &quot;hack&quot; than anything else, and I&#x27;d
approve completely a system that would enable to install/remove entire
categories of software... but not if achieved by building empty packages.Also, you can trivially do &quot;apt-get install &quot;, but removing
all that it installed is a bit less trivial, and could be implemented in a
trivial and clean fashion if using some functionality meant to do this.Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008543

**Label:** `benign`

<pre>
LOL!  They&#x27;re not doomed at all.  Thousands of men wear cb2000s to work 
every day (along with other chastity devices).    They are not just 
decorations.  You will not get a woody or have an orgasm until your 
keyholder allows you to.  Anyhow, I know better than to have this 
type of conversation with a &#x27;nilla, but these men wear these happily, and 
consensually.  (:  There is little power struggle in the lifestyles of the 
people who use these.  There is power exchange instead.  Lots of 
variations on the definition, but this one&#x27;s from Gloria Brame&#x27;s site:Power exchange: the consensual transfer of power by the submissive to the 
dominant. The exchange takes place when the returned energy from the 
dominant empowers the submissive. Anyhow, there are tons of informative sites out there for anyone who cares 
to read them, but I assure you, the chastity device business is doing very 
well, and it is illegal to force someone to wear one.  It&#x27;s not coercion, 
it is creative sensuality.  (:
CindyOn Thu, 5 Sep 2002, Eirikur Hallgrimsson wrote:&gt; On Wednesday 04 September 2002 10:59 pm, CDale wrote:
&gt; &gt; Someone needs to tell the mayor about this:
&gt; &gt; http://www.cb-2000.com/
&gt; 
&gt; &quot;Chastity&quot; technologies were doomed from the start, and I&#x27;ll add chemical 
&gt; ones to the trash heap.  (Yeah, Cindy, these are decorative toys for the 
&gt; subculture, but....)  
&gt; 
&gt; Generally,someone is attempting to preserve a relationship with this 
&gt; nonsense, when quite plainly the the relationship is in a state where 
&gt; preserving it is of little value.  Hardware is of no real use save for 
&gt; playing the power-struggle game.   I don&#x27;t want to see the future of this.
&gt; &quot;Invisible Fence&quot; for your mate.   &quot;Must wear&quot; location transponders and 
&gt; endocrine monitors.   More movies like &quot;Minority Report.&quot;
&gt; 
&gt; It seems so automatic for people to reach for coercive solutions.   So 
&gt; surprizing given the low absolute effectiveness of coercion in the absense 
&gt; of overwhelming force advantage.
&gt; 
&gt; Eirikur
&gt; 
&gt; 
&gt; -- 
&quot;I don&#x27;t take no stocks in mathematics, anyway&quot; --Huckleberry Finn

</pre>

## Record 008544

**Label:** `benign`

<pre>
start date : 12 / 30 / 01 ; hourahead hour : 6 ; start date : 12 / 30 / 01 ; hourahead hour : 6 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001123006 . txt # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number . # # # cannot locate a preferred or revised _ preferred schedule that matches the final individual interchange schedule . unable to assign deal number .
</pre>

## Record 008545

**Label:** `benign`

<pre>
armenian ling * * * second and last call for papers * * * sixth international conference on armenian linguistics - paris , july 5 - 9 , 1999 the sixth international conference on armenian linguistics will be held in paris , july 5 - 9 , under the auspices of the institut national des langues et civilisations orientales ( inalco ) papers will not be restricted in terms of topic or theoretical approach . workshops will be organized according to paper proposals . deadline for submission of proposals : 30 september 1998 proposals for presentations should be sent to : anaid donabedian , 57 , bd jourdan , 75014 paris , france fax + 33 1 44 15 10 61 e-mail : donabed @ ext . jussieu . fr submissions sent by fax or email are welcome , if followed by copy by post . proposals should include : 1 . participation form ; see the form below . 2 . an anonymous abstract ( three copies ) indicating clearly the author &#x27;s theoretical assumptions and , methodology , and showing how the research represents original work in the field of armenian linguistics or linguistics generally . the abstract should include a brief bibliography . ( total 1 - 2 page a4 ; languages : french , english , armenian ) the conference may provide financial support for transportation and / or room and board fees for participants who reside permanently in armenia or other eastern bloc countries , whose papers are accepted for presentation . participants from other countries who have no institutional backing may also apply for support . preference will be given partly to young scholars . the fee for participating in the conference will be 500 ff ( roughly us $ 100 ) ( students : 150 ff ) comfortable lodging ( shower , wc , telephone ) at reasonable rates ( 150-200 fft ) will be available at the cite internationale universitaire de paris . good hotel accomodation will be proposed at 500-600f per night near the palais royal and the conference area . application form : surname : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . name : . . . . . . . . . . . . . . . . . . . . . . . . . . . . title : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . affiliation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . address : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . tel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . fax . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e - mail . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . title of paper / presentation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . key words ( 4 words maximum ) : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . i request financial assistance : yes / no anaid donabedian - demopoulos section d &#x27; armenien - inalco 2 , rue de lille 75343 paris cedex 07 donabed @ ext . jussieu . fr attention , je suis provisoirement detachee au cnrs ( cams , umr 17 ) ; veuillez utiliser de preference mon adresse personnelle : 57 bd jourdan 75014 paris tel : 01 44 16 11 10 fax : 01 44 16 10 61 ou l &#x27; adresse electronique donabed @ ext . jussieu . fr
</pre>

## Record 008546

**Label:** `benign`

<pre>
Thu, 25 Jul 2002 18:33:15 -0700 skrev du:&gt;  Not sure what you&#x27;re asking.
  
I just want to be sure, that forwarding an email to my own spamtrap address
which performs a razor-report on the entire received email is not waste of
time, because the contents of the forwarded email is not recognized as equal
to the email originally received. The forwarded email has a new set of
headerlines, which should be discarded and instead the headerlines of the
original message are in the body of this new message and should be recognized
as such and treated properly.An ordinary Forward Unquoted in Agent is subject to character set conversions
and does not depict the received spam in its original form.I hope this clarifies my concerns.- JÃ¸rgen-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 008547

**Label:** `benign`

<pre>
Hello,Has anyone made a working source RPM for dvd::rip for Red Hat 8.0?
Matthias has a spec file on the site for 0.46, and there are a couple of
spec files lying around on the dvd::rip website, including one I patched
a while ago, but it appears that the Makefile automatically generated is
trying to install the Perl libraries into the system&#x27;s, and also at the
moment dvd::rip needs to be called with PERLIO=stdio as it seems to not
work with PerlIO on RH8&#x27;s Perl.Not too sure what the cleanest way to fix this is - anyone working on
this?Thanks,-- 
MichÃ¨l Alexandre Salim
Web:		http://salimma.freeshell.org
GPG/PGP key:	http://salimma.freeshell.org/files/crypto/publickey.asc__________________________________________________
Do You Yahoo!?
Everything you&#x27;ll ever need on one web page
from News and Sport to Email and Music Charts
http://uk.my.yahoo.com_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 008548

**Label:** `benign`

<pre>
draft press release : duke acquires new albany peaker attached is a draft press release regarding duke &#x27; s purchase of our new albany facility . duke expects to release late in the day on thursday , june 28 . they will be meeting with the employees on friday . it is not much different than cinergy &#x27; s or aes &#x27; s releases when they purchased peakers . please forward all comments to me at your earliest convenience . while i am out of the office , i am accessing e - mail and voice mail or you can page me at 877 - 576 - 8750 . thanks . eric - release na draft 1 . doc
</pre>

## Record 008549

**Label:** `benign`

<pre>
re : planning for your energy finance class presentation wed . , 10 / 11 ehud , i am flying back in the evening and dinner would be difficult . i shall be glad to join you for lunch , shirley , as i understand gave you my requirements for the av . my flight arrives at 8 : 30 a . m . i can meet you at your office in the morning and we can talk about the conference and other issues . vince &quot; ehud i . ronn &quot; on 10 / 09 / 2000 09 : 23 : 55 am to : vkamins @ enron . com cc : subject : planning for your energy finance class presentation wed . , 10 / 11 vince , good morning . further to your forthcoming visit this wed . , i write to clarify last - minute details : 1 . your eta / etd . will you be available to join us for lunch and / or dinner ? 2 . your av requirements , if any . should you need either , we have an overhead projector as well as laptop capability ( either your laptop , or we can with advance notice reserve a laptop if you bring floppies ) . btw , any developments re jeff skilling &#x27; s 2 / 22 conference keynote ? best , ehud ehud i . ronn jack s . josey professor in energy studies department of finance mccombs school of business university of texas at austin austin , tx . 78712 - 1179 voice : ( 512 ) 471 - 5853 fax : ( 512 ) 471 - 5073 internet : eronn @ mail . utexas . edu
</pre>

## Record 008550

**Label:** `benign`

<pre>
new app in enpower - schedule extraction fyi , let me know what you think . thresa - - - - - - - - - - - - - - - - - - - - - - forwarded by thresa a allen / hou / ect on 04 / 17 / 2001 11 : 04 am - - - - - - - - - - - - - - - - - - - - - - - - - - - from : thresa a allen 04 / 06 / 2001 10 : 39 am to : bill williams iii / pdx / ect @ ect cc : rebecca m grace / hou / ect @ ect subject : new app in enpower - schedule extraction fyi , you may find this report of value when reviewing the trade done by your hourly team . if you have any question please feel free to call rebecca grace @ 713 853 - 9771 or myself @ 713 853 - 6598 . thanks thresa - - - - - - - - - - - - - - - - - - - - - - forwarded by thresa a allen / hou / ect on 04 / 06 / 2001 10 : 26 am - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : rebecca m grace 04 / 05 / 2001 03 : 32 pm to : thresa a allen / hou / ect @ ect , stacey w white / hou / ect @ ect , corry bentley / hou / ect @ ect , narsimha misra / na / enron @ enron , kayne coulter / hou / ect @ ect cc : duong luu / enron @ enronxgate , guido govers / enron @ enronxgate , michael jacobson / corp / enron @ enron , virginia thompson / pdx / ect @ ect subject : new app in enpower - schedule extraction please forward this message to all members of your group and to anyone else who might benefit from this program . enpower it has done an outstanding job in creating this application . it is invaluable to me in verifying that all my deals are in enpower correctly and the delivery point is balanced . it should be very helpful to be sure that a desk , delivery point and / or region is balanced . please take a look and come by my desk for a demo if you would like . ps - thanks you casey , jp , gerald and jason for helping me to test this application . rebecca to open : to run : 1 ) enter the criteria into the filter at the top , paying close attention to whether you want physical or financial deals , and whether you want to &quot; include desk - to - desk &quot; deals . the more filter criteria you add the fast the extract will run . 2 ) hit extract to export : the middle section of the application displays all the records or strips that were extracted . this may be quickly saved to a text file to analyze in excel , by choosing file . . . save . . . from the menu . to summarize and subtotal : the subtotal area at the bottom of the screen , groups and subtotals the records based on the fields that are dragged into the gray area right below the filter ( shown here in blue ) . at the very bottom of the subtotal area is a grand total for all records extracted .
</pre>

## Record 008551

**Label:** `benign`

<pre>
consciousness john benjamins publishing would like to call your attention to the following title in the field of consciousness : language structure , discourse and the access to consciousness maxim i . stamenov , ( ed . ) 1997 xii , 340 pp . advances in consciousness research , 12 us / canada : cloth : 1 55619 192 8 price : us $ 49 . 95 rest of the world : cloth : 90 272 5132 0 price : nlg 100 john benjamins publishing web site : http : / / www . benjamins . com for further information via e-mail : service @ benjamins . com the focus of this collective volume is on the mutual determination of language structure , discourse patterns and the accessibility to consciousness of mental contents of different types of organization and complexity . the contributions address the following problems , among others : the history of the interpretation of &#x27; conscious &#x27; and &#x27; unconscious &#x27; mind in the theoretical discourse of modern linguistics ; the determination of the structure of access of grammatical and lexical information to consciousness ; the development of cognitive complexity and control in ontogeny ; the pathologies of consciousness access in discourse comprehension and production the cognitive contextual prerequisites for the representation of meaning in consciousness ; the relationships between language structure and qualia in the phenomenology of experience ; the dialogical structure of intentionality and meaning representation , etc . contributions by : r . de beaugrande ; p . butchvarov ; s . chapman &amp; h . ulatowska ; t . van dijk ; d . hillert ; r . langacker ; i . markova ; m . stamenov ; p . zelazo &amp; d . frye . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - bernadette martinez - keck tel : ( 215 ) 836-1200 publicity / marketing fax : ( 215 ) 836-1204 john benjamins north america e-mail : bernie @ benjamins . com po box 27519 philadelphia pa 19118-0519 check out the john benjamins web site : http : / / www . benjamins . com
</pre>

## Record 008552

**Label:** `benign`

<pre>
california update 7 / 26 / 01 p . 2 here is the latest . . . . . . senator burton spoke with the speaker last night and urged him not to convene an assembly session during the scheduled recess , since the senate is not going to interrupt their vacation . burton &#x27; s request , in conjunction with the speaker &#x27; s trouble in getting enough of his members to return on their own dime ( he didn &#x27; t want the assembly to pay for people to fly back from european vacations for 48 hours - and few members were willing to pay for it themselves ) , means there will probably not be a hearing on hertzberg &#x27; s edison bailout plan tomorrow . since hertzberg plan is different from the bill the senate passed , burton wants hertzberg to include the senate in discussions on a solution that can get passed in both houses . since it is not expected to be any hearing on any bills / edison bailout before both houses return from the summer recess on august 20 th - we look for negotiations to occur on extending the mou &#x27; s aug 15 th deadline .
</pre>

## Record 008553

**Label:** `benign`

<pre>
re : ( no subject ) candice , maureen was sick for the last few days . when she comes back , i shall ask her to start the process regarding a formal offer for you . vince cedkao @ aol . com on 01 / 24 / 2001 11 : 00 : 52 am to : vkamins @ enron . com cc : shirley . crenshaw @ enron . com , cedkao @ aol . com subject : ( no subject ) dear dr . kaminski , i would like to thank you and your colleagues , dr . gibner and ms . raymond - castaneda , for taking the time to talk with me . i enjoyed the visit very much and will be looking forward to the opportunity of working as a summer intern at enron . you mentioned that you will call me this week . in the event i &#x27; m not at home , please leave a message at my home phone number ( 713 ) 647 - 7161 or email me at my houston email address cedkao @ aol . com . sincerely , candice kao
</pre>

## Record 008554

**Label:** `benign`

<pre>
ss 198 j revision effective 6 / 21 / 00 - - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 06 / 20 / 2000 10 : 01 am - - - - - - - - - - - - - - - - - - - - - - - - - - - &quot; steve holmes &quot; on 06 / 20 / 2000 09 : 13 : 31 am to : , cc : subject : ss 198 j revision effective 6 / 21 / 00 please see the attached revision to be effective 6 / 21 / 00 . thanks , steve - ssl 98 jreveffo 62100 . xls
</pre>

## Record 008555

**Label:** `benign`

<pre>
hpl other alternatives here are a few alternatives to handling lal echterhoff &#x27; s situation : ( 1 ) we give cash difference in black - scholes value between one year and three year options calculated as of the termination date of 5 / 31 / 01 . the analysis isn &#x27; t very pretty : the total difference for all affected shares ( 165 , 000 ) is only $ 1652 . these options are so far in the money that the time value is de minimus . ( 2 ) we could have them cancel their old options and purchase on the open market some options with longer terms . the lowest strike price available for january 04 leaps is $ 30 and the term still isn &#x27; t quite long enough - most affected options have a strike price between $ 15 and $ 20 . this alternative would need tax , accounting , and sec research and would cost about $ 4 mm in total . ( 3 ) we could just purchase january 04 leaps with a strike price of $ 50 and not ask them to cancel their old options - this would cost aobut $ 2 . 2 mm . still a problem with term not syncing with their old options , but it would give them the opportunity to &quot; double - dip &quot; in value if the stock ran up between now and may 31 , 2002 . * * * * * * * * * * * * * * * if you would like me to do any further due diligence on any of the three above , let me know . i still recommend the previously drafted email to lal reiterating that the plan provisions prevail . morally , it may not be correct , but it would take an exorbitant amount of &quot; feel - good &quot; and money to get any further improvements in our ranking as the best place to work ; everyone knows what enron is when they come here and we &#x27; re very open about it . we are efficiently darwinistic , not feel - good - anything - you - want . i don &#x27; t think we should apologize to those who don &#x27; t read their agreements or plan documents or the fine print ( the caveats were there ) . i do feel bad that this happened , and we should make sure the right people sign - off on this sort of thing in the future . regards , aaron
</pre>

## Record 008556

**Label:** `benign`

<pre>
6th dgfs - summer school : ` language typology in mainz 6th dgfs - summer school 1998 : &quot; language typology &quot; from august , 31 - september , 11 1998 at the johannes gutenberg - university mainz organizers : walter bisang / bernhard hiegl the 6th summer school of the german linguistic society ( dgfs ) will take place at the johannes gutenberg - university of mainz from august , 31 to september , 11 1998 . 1 . contents - 14 courses of 2 hours a day from monday to friday - plenary lectures and discussions every day - distinguished guest speakers participation will be certified . courses : courses entitled in german will be held in german ; courses entitled in english will be held in english - auer , peter ( hamburg ) : sprachtypologie und phonologie ( language typology and phonology ) - bisang , walter ( mainz ) : grammatikalisierung ( grammaticalization ) - cinque , guglielmo ( venice ) : the syntax and typology of adverbs and tense / mood / modality / aspect - comrie , bernard ( leipzig ) : typology of reference tracking - corbett , greville ( surrey ) : typology of gender systems and number systems - croft , william ( manchester ) : typology and cognition - foley , william ( sidney ) : comparative grammar of papuan languages - haspelmath , martin ( bamberg ) : morphologische typologie ( morphological typology ) - kornfilt , jaklin ( syracuse ) : theoretical perspectives in syntactic change - lehmann , christian ( bielefeld ) : typologie des yukatekischen ( typology of yucatec ) - plank , frans and lahiri , aditi ( konstanz ) : co - variation of phonology , morphology , and syntax ? the prospects for holistic typology - siewierska , anna ( lancaster ) : word order typology : synchrony and diachrony - stassen , leon ( nijmegen ) : typology as a reductionist method - stolz , thomas ( bremen ) : sprachliche konvergenz : areale und typologie ( linguistic convergence : areals and typology ) plenary lectures : - lehmann , christian ( bielefeld ) : sprachdokumentation : ein programm ( language documentation-a programme ) - foley , william ( sidney ) : the problem of precategoriality and symmetrical voice languages in the philippines - cinque , guglielmo ( venice ) : the universal structure of the clause : adverb phrases and tam heads - lahiri , aditi ( konstanz ) : grammaticalisation in germanic - stolz , thomas ( bremen ) : komitative - global und areal ( comitatives - globally and areally ) - siewierska , anna ( lancaster ) : agreement markers vs . bound pronouns - kornfilt , jaklin ( syracuse ) : remarks on types of agreement and case : a study in the historical morphosyntax of turkic languages - comrie , bernard ( leipzig ) : typology and the history of language - stassen , leon ( nijmegen ) : black and white languages : parameter clusters from a typological and areal perspective guest speakers : - haider , hubert ( salzburg ) : sprachvergleich in der formalen linguistik ( language comparison in formal linguistics ) - johanson , lars ( mainz ) : aspekt ( aspect ) - ramat , paolo ( pavia ) : sprachliche kategorien und kategorisierungen - van der auwera , johan ( antwerpen ) : areality in language typology ( with special reference to the problem of standard average european languages ) for a detailed schedule of the summer school please look at our homepage . however , it has been determined that the courses will be assigned to three timeblocks . the planned assignments to the individual blocks look like follows : 10 : 45 - 12 : 15 auer , corbett , comrie , siewierska , haspelmath 13 : 45 - 15 : 15 cinque , croft , foley , stolz 15 : 30 - 17 : 00 bisang , kornfilt , lehmann , plank / lahiri , stassen 2 . costs students / persons without income : non-member : dm 280 / 350 * dgfs - member : dm 252 / 315 * university employees / persons with income : non-member : dm 560 / 650 * dgfs - member : dm 504 / 585 * participants from ` countries with low salaries have to pay half of the students fees . * = participants fee after june , 30 1998 . 3 . accomodation there are accomodation possibilities on campus at very reasonable prices ( approximately 100 beds ) : 1 bed in a double room : approx . dm 170 , - for 2 weeks + deposit of dm 50 , - - the assignment follows after application in chronological order of requests . mediation of hotel rooms is also possible . 4 . application / information johannes gutenberg - universitat mainz institut fur allgemeine und vergleichende sprachwissenschaft fb 14 . 20 dgfs - summer school bernhard hiegl d-55099 mainz , germany phone / fax : + + 49 ( 0 ) 6131 / 39-3980 e-mail : lingtyp @ mail . uni-mainz . de homepage : http : / / www . uni-mainz . de / ~ lingtyp ( latest information and course descriptions here ! ) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</pre>

## Record 008557

**Label:** `benign`

<pre>
re : hilcorp old ocean volume well - i have officially not heard from hilcorp after numerous voice and email messages . please plan to have the gas rerouted back down the valley line for the dec 1 forward . call if you have any questions - daren j farmer 11 / 21 / 2000 10 : 08 am to : mary jo johnson / hou / ect @ ect cc : subject : re : hilcorp old ocean volume thanks for the info . i appreciated the call the other day . it really helps me out to recieve info early like that . d from : mary jo johnson 11 / 20 / 2000 03 : 38 pm to : daren j farmer / hou / ect @ ect , james mckay / hou / ect @ ect , gary a hanks / hou / ect @ ect cc : jill t zivley / hou / ect @ ect subject : hilcorp old ocean volume according to gary hanks , we would like to have the gas on the valley line anyway - - - - - - - - - - - - - - - - - - - - - - forwarded by mary jo johnson / hou / ect on 11 / 20 / 2000 03 : 26 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - to : jill t zivley / hou / ect @ ect cc : edward d gottlob / hou / ect @ ect , lauri a allen / hou / ect @ ect subject : re : producer service group ? i can not believe you are sending emails form hawaii ! ! ! ! you are crazy . i took care of camden for the month - it is now 330 and hilcorp has not responded . i spoke with jerry bubert several times today - emailed mike lannou and left messages , and had him paged , and copied hildebrand ( the president ) . if we don &#x27; t hear by 4 pm , we are supposed to bypass the gas . . . . . . . . . . .
</pre>

## Record 008558

**Label:** `benign`

<pre>
tuesday interview rachel , i would like very much to interview howard but i am in philadelphia on tuesday . vince
</pre>

## Record 008559

**Label:** `benign`

<pre>
enron / hpl actuals for october 20 - 22 , 2000 october 20 , 2000 teco tap 0 / enron ; 75 . 000 / hpl gas daily october 21 , 2000 teco tap 0 / enron ; 84 . 375 / hpl gas daily october 22 , 2000 teco tap 0 / enron ; 115 . 625 / hpl gas daily
</pre>

## Record 008560

**Label:** `benign`

<pre>
re : fyi i would be interested in your views but i don &#x27; t see paul as a star right now . what are your views on his next steps within the company . but on the broader front we may want to look at a legal review of the popemeister &#x27; s non - poach provisions of his old agreement . john louise kitchen 04 / 05 / 2001 21 : 26 to : andy zipper / corp / enron cc : john sherriff / lon / ect @ ect subject : fyi paul goddard is looking at a move back to calgary - gues who he is talking to ? ? ? the pope just so you know
</pre>

## Record 008561

**Label:** `benign`

<pre>
monday 22 nd oct louise , do you have half an hour or so free in your diary on 22 / 10 a . m . so that i can see you whilst in houston ? david
</pre>

## Record 008562

**Label:** `benign`

<pre>
fw : today &#x27; s direct access decision here is a copy of the cpuc &#x27; s decision on sept 20 - - - - - original message - - - - - from : comnes , alan sent : thursday , september 20 , 2001 2 : 30 pm to : dasovich , jeff ; mara , susan ; hall , steve c . ( legal ) ; savage , gordon ; swain , steve ; curry , wanda subject : today &#x27; s direct access decision scanned
</pre>

## Record 008563

**Label:** `benign`

<pre>
access to research project tracking database kevin kindall brought to my attention that a number of new members in the group may need to get access to the research projects tracking database in lotus notes . access can be requested through use of the secutity resource request form accessed from lotus notes . just submit the form requesting that you be added as a user of the research group &#x27; s research projects tracking database . thanks , - - stinson
</pre>

## Record 008564

**Label:** `benign`

<pre>
estimated costs in cgs physical sow louise , i got your note regarding the estimated costs in cgs physical statement of work . according to my knowledge , the indirect expense includes overheads of hr , corp , accounting , tax , legal , infrastructure , etc . the estimated indirect expense of the project for ea is $ 281 , 415 . there are direct expenses associated with steve stock &#x27; s and beth perlman &#x27; s cost centers . the estimated direct expense of the project for ea is $ 184 , 107 . the estimated cost center &amp; indirect expense for ea is the sum of those two types of expenses and is equal to $ 465 , 522 that is presented in the document . therefore , i am afraid that my estimated project costs presented in the document do include all corporate and cost center overheads . would you please let me know if i missed anything else ? thanks zhiyong
</pre>

## Record 008565

**Label:** `benign`

<pre>
on language and separatism on linguist vol-6 - 955 , jelly julia ( julia @ let . rug . nl ) says : &quot; basque and catalan separatism is not based on language . why do we never hear &quot; anything about galician separatism on the iberian peninsula ? galician is a &quot; language very different from spanish ( and not so different from portuguese ) . &quot; the name of the region is galicia and is part of spain . galician is a language &quot; much older than spanish itself : it was used for poetry and by the kings in &quot; ancient times . still , we do not hear a lot about galician separatism . neither &quot; do we hear anything about leonese separatism , aragonese separatism , andalusian &quot; separatism , simply because it does not exist . separatism on the peninsula has &quot; nothing to do with language . it has everything to do with historic rights of &quot; old kingdoms . galician separatism exists . it just simply does n&#x27;t reach the news because galician separatists ( a minority ) have n&#x27;t killed people , even though they &#x27; ve tried to on a couple of occasions . on the contrary , galician separatists ( and federalists ) have been killed by the spanish army and police ( during franco &#x27;s uprising and regime ) . there are galician separatists in the jails of the spanish kingdom . the spiral of stret and institutional violence is benefitial to the western democratic states . separatism in the iberian peninsula , as elsewhere , has to do with the way peoples view ( or are led to view ) their own identity in opposition to other identities . language is most often , if not always , an issue . as for galiza , to the extent that the spanish state is able to keep the lid on the language issue by taming the language of galiza ( portuguese ) and turning it into a domestic &quot; galician &quot; , no problem - - galiza won&#x27;t reach the news . galiza , as many other minorized cultures of the world , is caught between two states : spain and portugal . what the kingdom of spain and , particularly , its representatives in galiza ( the majority of the local political and intellectual elites ) can&#x27;t cope with is the fact that another state &#x27;s language , portuguese , is spoken ( and written as such , by a small fraction of the elites ) within spanish territory . legislative , administrative , and judicial measures have been taken to silence some intellectuals , writers , and teachers who support , with rational arguments , the view that &quot; galician &quot; is just a set of regional and social varieties of portuguese , and therefore it should be written with the portuguese orthography . these acts of actual repression , discrimination and censorship by the mechanisms of the spanish state do n&#x27;t reach the news either . the situation of the &quot; language question &quot; in galiza nowadays is the furthest one could imagine from a civilized , technical and political debate on how to articulate and reconcile galician identity / ies with galiza &#x27;s language . it is discouraging and worrisome to see how the term &quot; reintegrationist &quot; , which refers to those who seek the effective recognition of galician as a part of its natural linguistic domain , portuguese , is being thrown around as an insult in public and academic discourse . i should clarify that the separatist / reintegrationist lines intersect each other . that is , there are galician separatists or nationalists who are reintegrationists and use the portuguese orthography , and then there are other separatists and nationalists who are very happy with the institutionally-supported view of galician as a &quot; separate language &quot; to be written , however , with a spanish - based orthography . in the meantime , galician portuguese is being learned less and less as a first language . but that &#x27;s not the real issue . celso alvarez - caccamo lxalvarz @ udc . es
</pre>

## Record 008566

**Label:** `benign`

<pre>

What are you trying to sell???? What is the Value???Example...Does Pratchett sell paper bound by glue or does he sell stories?Question...When I buy a book have I purchased the story? When I sell the
book does any of that revenue go to mr Pratchett?What if I read the book and  give it to someone, who then reads it
and gives it  to someone who then reads it and gives it to
someones....(bookcrossing.com though with  more succesfull passings). Does
each reader send Mr Pratchett money?Have Used Bookstores, Recorstores etc destroyed the system of book/record
economy?AS to the resident sourpuss, in germany bitter may be better but here its
just plain stinkin thinkin.
-tom

</pre>

## Record 008567

**Label:** `benign`

<pre>
On 10/2/02 12:00 PM, &quot;Mr. FoRK&quot;  wrote:
&gt; What about a situation where you don&#x27;t directly ask/talk to the bot, but
&gt; they listen in and advise/correct/interject/etc?
&gt; example: two people discussing trips, etc. may trigger a weather bot to
&gt; mention what the forecast says - without directly being asked.My guess is it&#x27;s more insidious than that, it&#x27;s going to be ActiveSpam.&quot;Oh, you&#x27;re going to Seattle? I can get you airline tickets for less&quot;Yuck
-- 
peregrine   \PEH-ruh-grun or PEH-ruh-green\   (adjective)
     : having a tendency to wander
</pre>

## Record 008568

**Label:** `benign`

<pre>
At 7:44 PM -0400 on 9/23/02, Geege Schuman wrote:
&gt; First, misattribution.My apologies. Rave on...Cheers,
RAH
&quot;Where all the children are above average...&quot;
-- 
-----------------
R. A. Hettinga 
The Internet Bearer Underwriting Corporation 
44 Farquhar Street, Boston, MA 02131 USA
&quot;... however it may deserve respect for its usefulness and antiquity,
[predicting the end of the world] has not been found agreeable to
experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27;

</pre>

## Record 008569

**Label:** `benign`

<pre>
conference on the mental lexicon conference announcement first international conference on the mental lexicon edmonton , canada , september 3 - 5 , 1998 the conference will be held in the campus of the university of alberta . the program of the conference ( including all platform and poster sessions ) and other information are available at the conference website : http : / / www . ualberta . ca / ~ linguis / lexiconf . html _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ roberto g . de almeida roberto @ gpu . srv . ualberta . ca department of linguistics university of alberta phones ( 403 ) 492-0805 ( office ) edmonton , alberta ( 403 ) 492-5952 ( lab ) canada t6g 2e7 fax ( 403 ) 492-0806 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
</pre>

## Record 008570

**Label:** `benign`

<pre>
gtv weekly status update please find below the weekly status update for the gas trading vision project and the attached file for the updated project timelines . gtv status meeting attendees : zhiyong wei , russ severson , jeremy wong , geoff storey , jay krish , mike swaim , george grant , bill fortney , chuck ames . accomplishments : ? incorporating physical deal positions in tds : o changes for the view aggregation have been completed . o expandable total in cash position has been completed . ? single point of deal entry for term deals : o released to production . ? gas daily deals : o revisions for changes to portcalc application to create gdi calc in erms are in user test . o the development for the curve shift reports has been completed . o change cpr portcalc to value outer month positions is in test . ? live feeds for gas daily / intra - month curves : o released to production . ? saving different views in tds : o completed and is currently in test . ? capability for desk roll - ups on an ad hoc basis ( phase 2 ) : o new process for roll - up aggregators has been completed . ? option grid ( phase 2 ) : o released to production . ? gas daily options ( phase 2 ) : o released to production . ? basis options ( phase 2 ) : o development of deal entry type for basis options has been completed in tagg . o development of loading correlation curves has been completed . ? transport deal capture &amp; valuation ( phase 2 ) : o creation of new deal entry type &amp; database changes has been completed . plans for the week ending 6 / 29 / 01 : ? continue it development of phase i items . o optimize the position manager &#x27; s performance . ? continue it development of phase ii issues . o change portcalc to value spread options . o option reports ( pl reports ) . o change to tagg / erms translator for transport deal capture . issues : none notes ? position roll - up process hangs sometimes in the production environment . this bug has been fixed in the parallel environment . the developer is now applying the fix to the production code . ? the performance of loading curve to the position manager has been improved in the parallel environment . the same change will be applied to the production code . ? we need to look into the current way of computing curve shift for gas daily options because it creates a large second order amount . thanks zhiyong
</pre>

## Record 008571

**Label:** `benign`

<pre>
re : weekly update on mg aquisition and assimilation sally - i will gladly include you on the distribution of the weekly status on the mg acquisition and integration and instruct esther gerratt to add your name to the list . i concur that brent &#x27; s return to houston will create a potential information gap that even the best of weekly reports won &#x27; t fill . i think we may have an opportunity to keep your information level high and address my need to assess mg &#x27; s remote offices . if brent were to linger in london for a few more months , we could lay out a program to assess mg &#x27; s 24 offices around the world and benchmark their compliance with risk policies + procedures . brent &#x27; s background and recent experience with doorstep give him strong credentials for doing the job . i haven &#x27; t discussed this with mg &#x27; s management , but it seems to be the right kind of activity for a new owner to undertake . what are your thoughts ? enron capital &amp; trade resources corp . from : sally beck 13 / 06 / 2000 19 : 57 to : eric gadd / lon / ect @ ect cc : brent a price / hou / ect @ ect subject : weekly update on mg aquisition and assimilation i have heard through the grapevine that you produce a weekly status report on the mg aquisition and assimilation . would you please include me on that distribution list effective this week ? i believe that it is assumed that fernley dyson will have day - to - day responsibility for this business once the aquisition is completed . however , in my role over global risk management operations , i find myself fielding questions regarding our assessment of operations and any issues surrounding assimilation . brent price , who reports to me and is on temporary assignment in the london office , has been keeping me updated on progress to date . his return soon to houston , however , will create a potential information gap that the weekly status report may help to fill . thanks in advance to your attention to this .
</pre>

## Record 008572

**Label:** `benign`

<pre>
fw : &quot; red , white and blue out &quot; - - - - - original message - - - - - from : carter , rhonda [ mailto : rcarter @ cooperinst . org ] sent : friday , september 14 , 2001 12 : 33 pm to : &#x27; al _ abbott @ compuserve . com &#x27; ; &#x27; mabner @ sprintmail . com &#x27; ; &#x27; aggiebob @ hotmail . com &#x27; ; &#x27; adamsck @ flash . net &#x27; ; &#x27; gadams @ promus . com &#x27; ; &#x27; pjadell @ yahoo . com &#x27; ; &#x27; bob @ cybersitebuilders . com &#x27; ; &#x27; worml 998 @ hotmail . com &#x27; ; &#x27; janie . beth @ prodigy . net &#x27; ; &#x27; gakin @ mccarthy . com &#x27; ; &#x27; vja @ flash . net &#x27; ; &#x27; locke . alder @ gte . net &#x27; ; &#x27; calexaol @ 7 - 11 . com &#x27; ; &#x27; erika @ publish . no . irs . gov &#x27; ; &#x27; ali @ buz . net &#x27; ; &#x27; brada @ ticnet . com &#x27; ; &#x27; svallen @ aol . com &#x27; ; &#x27; jand 30 @ aol . com &#x27; ; &#x27; allan @ stratsolgroup . com &#x27; ; &#x27; chuck _ anderson @ oxy . com &#x27; ; &#x27; mdqsga 96 @ aol . com &#x27; ; &#x27; brian _ anhalt @ bigfoot . com &#x27; ; &#x27; aranda @ nbstx . com &#x27; ; &#x27; aggiemom @ archer . cx &#x27; ; &#x27; jard @ nortelnetworks . com &#x27; ; &#x27; abarch @ airmail . net &#x27; ; &#x27; narguello @ yahoo . com &#x27; ; &#x27; jarmstrong @ tqtx . com &#x27; ; &#x27; mikie @ aggie . zzn . com &#x27; ; &#x27; ag 85 @ home . com &#x27; ; &#x27; kmarnold @ home . com &#x27; ; &#x27; hollya @ cyber - designs . com &#x27; ; &#x27; hughashburn @ netscape . net &#x27; ; &#x27; bob @ cybersitebuilders . com &#x27; ; &#x27; olinatkinson @ dellnet . com &#x27; ; &#x27; papaayres @ aol . com &#x27; ; &#x27; abackof 68 @ aol . com &#x27; ; &#x27; badgett @ ti . com &#x27; ; &#x27; kbailie @ nortel . com &#x27; ; &#x27; wjbaird @ mapsco . com &#x27; ; &#x27; jbaker @ ecomtrading . com &#x27; ; &#x27; tim . banigan @ nortelnetworks . com &#x27; ; &#x27; atbarlow @ mail . smu . edu &#x27; ; &#x27; arnonvic @ aol . com &#x27; ; &#x27; john _ laurabarr @ email . msn . com &#x27; ; &#x27; jillmbarrow @ hotmail . com &#x27; ; &#x27; b - barton @ ti . com &#x27; ; &#x27; tbates @ why . net &#x27; ; &#x27; normabautista @ worldnet . att . net &#x27; ; &#x27; baweja @ aol . com &#x27; ; &#x27; gbaxley @ nt . com &#x27; ; &#x27; dabayers @ juno . com &#x27; ; &#x27; jbeard @ halff . com &#x27; ; &#x27; bearden . e @ grainger . com &#x27; ; &#x27; tbeaslel @ tuelectric . com &#x27; ; &#x27; kayebeatty @ aol . com &#x27; ; &#x27; triciabeaudreau @ hotmail . com &#x27; ; &#x27; abeckley @ executrain - dal . com &#x27; ; &#x27; scott . r . bellamy @ marshmc . com &#x27; ; &#x27; chiaggie @ aol . com &#x27; ; &#x27; dbenefield @ merit . com &#x27; ; &#x27; bryan @ dalmac . com &#x27; ; &#x27; bennie @ flash . net &#x27; ; &#x27; bergerd @ earthlink . net &#x27; ; &#x27; ted . e . bernard @ ac . com &#x27; ; &#x27; sberry @ nortel . com &#x27; ; &#x27; jody . bingham @ ps . net &#x27; ; &#x27; bobird @ att . com &#x27; ; &#x27; keithbird @ yahoo . com &#x27; ; &#x27; mbish @ nortel . com &#x27; ; &#x27; dawn . bitar @ ps . net &#x27; ; &#x27; bittners @ swbell . net &#x27; ; &#x27; akbjerke @ postoffice . swbell . net &#x27; ; &#x27; michael . blahitka @ intervoice - brite . com &#x27; ; &#x27; blairsl @ juno . com &#x27; ; &#x27; bnlblake @ flash . net &#x27; ; &#x27; gbock 2 @ excite . com &#x27; ; &#x27; bobb 761 @ worldnet . att . net &#x27; ; &#x27; jbond @ genuity . com &#x27; ; &#x27; bonsai 2 @ flash . net &#x27; ; &#x27; bonerhk @ earthlink . net &#x27; ; &#x27; warrenlb @ aol . com &#x27; ; &#x27; dbb @ sa - inc . com &#x27; ; &#x27; lynnbottlinger @ hotmail . com &#x27; ; &#x27; dkboughton @ home . com &#x27; ; &#x27; mbouma @ pgbpike . com &#x27; ; &#x27; bowden _ rap @ msn . com &#x27; ; &#x27; jfbowen @ swbell . net &#x27; ; &#x27; cbowersl @ airmail . net &#x27; ; &#x27; scott . bowers @ eds . com &#x27; ; &#x27; mbag 92 @ aol . com &#x27; ; &#x27; lorna @ . com &#x27; ; &#x27; sheryl . bradley @ eds . com &#x27; ; &#x27; andybradshaw @ home . com &#x27; ; &#x27; bramlett @ home . com &#x27; ; &#x27; mwbranch @ aol . com &#x27; ; &#x27; tbrandish @ bigfoot . com &#x27; ; &#x27; kbrannon @ flash . net &#x27; ; &#x27; bebe - tx @ mindspring . com &#x27; ; &#x27; devere @ flash . net &#x27; ; &#x27; lgbrennan @ earthlink . net &#x27; ; &#x27; nicole @ dalmac . com &#x27; ; &#x27; tmbreeze @ gte . net &#x27; ; &#x27; gwb 2 @ flash . net &#x27; ; &#x27; john @ smithsummers . com &#x27; ; &#x27; bmbrinkl @ aol . com &#x27; ; &#x27; nateb 7899 @ aol . com &#x27; ; &#x27; melissabrooks @ mindspring . com &#x27; ; &#x27; rhbrooks @ vartec . net &#x27; ; &#x27; bbrooks @ sbair . com &#x27; ; &#x27; dbrosey @ airmail . net &#x27; ; &#x27; bbrown @ micron . com &#x27; ; &#x27; klbo 2 @ cs . com &#x27; ; &#x27; erich . browne @ central . sun . com &#x27; ; &#x27; deniseb @ ticnet . com &#x27; ; &#x27; jbrozovi @ usa . alcatel . com &#x27; ; &#x27; bruckm @ airmail . net &#x27; ; &#x27; bbruton @ scan - direct . com &#x27; ; &#x27; david . a . bryant @ bigfoot . com &#x27; ; &#x27; ccb @ nortelnetworks . com &#x27; ; &#x27; jnkbull @ netzero . com &#x27; ; &#x27; burchta 330 @ aol . com &#x27; ; &#x27; drburdenjr @ aol . com &#x27; ; &#x27; jburnett @ foxsports . net &#x27; ; &#x27; haleburr @ aol . com &#x27; ; &#x27; burrow @ nortel . ca &#x27; ; &#x27; rbl 419 @ aol . com &#x27; ; &#x27; mikebusch @ mail . com &#x27; ; &#x27; cbyrum @ goodmanfamily . com &#x27; ; &#x27; calkfamf @ home . com &#x27; ; &#x27; kcameron @ yahoo - inc . com &#x27; ; &#x27; jsmiley @ pisd . edu &#x27; ; &#x27; jajasoup @ aol . com &#x27; ; &#x27; laurie . canning @ ericsson . com &#x27; ; &#x27; jjcantwell @ worldnet . att . net &#x27; ; &#x27; djcarr @ texas . net &#x27; ; &#x27; richardjcarroll @ yahoo . com &#x27; ; &#x27; drviv @ yahoo . com &#x27; ; &#x27; rob @ startech . org &#x27; ; &#x27; tcarson 98 @ yahoo . com &#x27; ; &#x27; brandacarter @ microlabs . com &#x27; ; &#x27; lee _ carter @ seha . com &#x27; ; &#x27; dcarter 768 @ aol . com &#x27; ; carter , rhonda ; &#x27; todd . carter @ fnc . fujitsu . com &#x27; ; &#x27; cwc 68 @ swbell . net &#x27; ; &#x27; jcash @ firstam . com &#x27; ; &#x27; tcastellanos @ usa . net &#x27; ; &#x27; wcaudi @ concentric . net &#x27; ; &#x27; cavanaug @ gustafson . com &#x27; ; &#x27; cschamberlin @ mindspring . com &#x27; ; &#x27; ebeth @ airmail . net &#x27; ; &#x27; cookie _ chambers @ pagenet . com &#x27; ; &#x27; jchamp 5626 @ aol . com &#x27; ; &#x27; sherriel @ flash . net &#x27; ; &#x27; smchamp @ dhc . net &#x27; ; &#x27; svchandl @ garlandisd . net &#x27; ; &#x27; fectac @ aol . com &#x27; ; &#x27; chris . chastain @ ey . com &#x27; ; &#x27; ccchatham @ aol . com &#x27; ; &#x27; kevin . chilcoat @ fritolay . com &#x27; ; &#x27; mattc @ dallas . net &#x27; ; &#x27; jchoc @ msn . com &#x27; ; &#x27; shannon @ thechristianfamily . com &#x27; ; &#x27; christian @ medicine . tamu . edu &#x27; ; &#x27; jcipolla @ hotmail . com &#x27; ; &#x27; dclark @ dhc . net &#x27; ; &#x27; sclark @ dhc . net &#x27; ; &#x27; mclary @ elux . com &#x27; ; &#x27; brad @ bigl 2 sports . com &#x27; ; &#x27; clemmons @ home . com &#x27; ; &#x27; beth 2047 @ aol . com &#x27; ; &#x27; acoble @ cisco . com &#x27; ; &#x27; jjcoburn @ aol . com &#x27; ; &#x27; dbclaw @ hotmail . com &#x27; ; &#x27; matt _ cole @ yahoo . com &#x27; ; &#x27; cac 75442 @ aol . com &#x27; ; &#x27; jcoll 75442 @ aol . com &#x27; ; &#x27; jorubycol @ aol . com &#x27; ; &#x27; collins 587 @ hotmail . com &#x27; ; &#x27; condoaggie @ aol . com &#x27; ; &#x27; swcbox @ aol . com &#x27; ; &#x27; crcandmac @ aol . com &#x27; ; &#x27; crcook @ gte . net &#x27; ; &#x27; martha _ cook @ publicis - usa . com &#x27; ; &#x27; mustrdsd @ flash . net &#x27; ; &#x27; acooper 401 @ aol . com &#x27; ; &#x27; jcooper 95 @ yahoo . com &#x27; ; &#x27; karen . m . cope @ dal . frb . org &#x27; ; &#x27; kellyandamy @ sprintmail . com &#x27; ; &#x27; vc 4445 @ earthlink . com &#x27; ; &#x27; brendyc @ aol . com &#x27; ; &#x27; kdcornell @ compuserve . com &#x27; ; &#x27; sc 93 @ hotmail . com &#x27; ; &#x27; bcorrell @ aol . com &#x27; ; &#x27; mcortino @ swbell . net &#x27; ; &#x27; cowan 95 @ aol . com &#x27; ; &#x27; coxl 997 @ yahoo . com &#x27; ; &#x27; monarch @ usa . net &#x27; ; &#x27; jason _ cox @ hotmail . com &#x27; ; &#x27; lacoyne @ flashcom . net &#x27; ; &#x27; garycl 2345 @ aol . com &#x27; ; &#x27; julesag 95 @ flash . net &#x27; ; &#x27; crawfordsl @ cdm . com &#x27; ; &#x27; phantom 495 @ aol . com &#x27; ; &#x27; ccriswel @ pisd . edu &#x27; ; &#x27; sec @ inetinc . com &#x27; ; &#x27; holly . a . cromack @ ac . com &#x27; ; &#x27; kcudlipp @ arimail . net &#x27; ; &#x27; mrculp @ home . com &#x27; ; &#x27; cathy . cupps @ eds . com &#x27; ; &#x27; curranc @ diamtech . com &#x27; ; &#x27; andyc @ gwmail . plano . gov &#x27; ; &#x27; lindsay _ daigle @ yahoo . com &#x27; ; &#x27; ag 93 whoop @ hotmail . com &#x27; ; &#x27; dtddtd 444 @ aol . com &#x27; ; &#x27; edaniel @ flash . net &#x27; ; &#x27; tamidarby @ home . com &#x27; ; &#x27; cagladan @ usa . net &#x27; ; &#x27; smitadas @ ix . netcom . com &#x27; ; &#x27; cgwd 94 @ aol . com &#x27; ; &#x27; kay . daugherty 3 @ gte . net &#x27; ; &#x27; bob _ daughrity @ cabp . com &#x27; ; &#x27; aggiel 984 @ juno . com &#x27; ; &#x27; jdd . rad @ gte . net &#x27; ; &#x27; riverl @ flash . net &#x27; ; &#x27; rogercdavis @ home . com &#x27; ; &#x27; stefaniedavis @ yahoo . com &#x27; ; &#x27; bamadavis @ aol . com &#x27; ; &#x27; dawsonsix @ aol . com &#x27; ; &#x27; heather @ icsi . net &#x27; ; &#x27; stephanie _ s _ day @ compusa . com &#x27; ; &#x27; cdelarios @ home . com &#x27; ; &#x27; cdeangulo @ msn . com &#x27; ; &#x27; ldeardurff @ mckinneyisd . net &#x27; ; &#x27; mdeardurff 62 @ msn . com &#x27; ; &#x27; victor . de . hoyos @ fritolay . com &#x27; ; &#x27; mrichmnd @ ix . netcom . com &#x27; ; &#x27; kelly 95 ag @ aol . com &#x27; ; &#x27; ivan 53 @ aol . com &#x27; ; &#x27; bdempsey @ dnaent . com &#x27; ; &#x27; macdeth @ swbell . net &#x27; ; &#x27; allandl @ airmail . net &#x27; ; &#x27; deweesw @ ttc . com &#x27; ; &#x27; tgd @ ffhm . com &#x27; ; &#x27; to _ ronda @ airmail . net &#x27; ; &#x27; jmditrapani @ nextlink . com &#x27; ; &#x27; ledlugos @ aol . com &#x27; ; &#x27; dlugosch @ home . com &#x27; ; &#x27; melvausa @ netscape . net &#x27; ; &#x27; aol 93775 @ dlemail . itg . ti . com &#x27; ; &#x27; chas 41 @ airmail . net &#x27; ; &#x27; mdorsett @ uni - bell . org &#x27; ; &#x27; m - mdouglas @ worldnet . att . net &#x27; ; &#x27; dovers @ sprintmail . com &#x27; ; &#x27; lorip @ rsn . hp . com &#x27; ; &#x27; michelle . drawert @ gte . net &#x27; ; &#x27; tisdalel @ flash . net &#x27; ; &#x27; sdrotma @ pisd . edu &#x27; ; &#x27; ndsouza @ unt . edu &#x27; ; &#x27; gary . dubois @ pizzahut . com &#x27; ; &#x27; madudko @ aol . com &#x27; ; &#x27; fduewall @ wmcobb . com &#x27; ; &#x27; jduffy @ cisco . com &#x27; ; &#x27; dduffy @ mis - world . com &#x27; ; &#x27; blakey @ flash . net &#x27; ; &#x27; greg _ dupree @ bigfoot . com &#x27; ; &#x27; michael . duran @ ps . net &#x27; ; &#x27; g - durham @ ti . coin &#x27; ; &#x27; crma @ flash . net &#x27; ; &#x27; travisdye @ home . com &#x27; ; &#x27; earnshaw @ flash . net &#x27; ; &#x27; mechols @ fastlane . net &#x27; ; &#x27; jason . eggl @ indsys . ge . com &#x27; ; &#x27; reicher @ tell . net &#x27; ; &#x27; eiland @ ti . com &#x27; ; &#x27; tome @ gwmail . plano . gov &#x27; ; &#x27; s _ elliott @ hotmail . com &#x27; ; &#x27; lellis @ ch 2 m . com &#x27; ; &#x27; tedcarles @ earthlink . net &#x27; ; &#x27; stephen . elmendorf @ teradyne . com &#x27; ; &#x27; bembrey @ ccgmail . com &#x27; ; &#x27; rempey @ waymark . net &#x27; ; &#x27; mengels @ airmail . net &#x27; ; &#x27; mentrop @ yahoo . com &#x27; ; &#x27; jepps @ intecom . com &#x27; ; &#x27; donerb @ home . com &#x27; ; &#x27; lucy _ vsi @ ix . netcom . com &#x27; ; &#x27; mike @ estesfinancial . com &#x27; ; &#x27; setch @ onebox . com &#x27; ; &#x27; kathyeudy @ yahoo . com &#x27; ; &#x27; pevers @ home . com &#x27; ; &#x27; kewing @ airmail . net &#x27; ; &#x27; deon . b . fair @ ac . com &#x27; ; &#x27; lisalynn 98 @ hotmail . com &#x27; ; &#x27; drjuiceplus @ home . com &#x27; ; &#x27; sfaseler @ lg . com &#x27; ; &#x27; rfeldman @ ascend . com &#x27; ; &#x27; j . felkner @ worldnet . att . net &#x27; ; &#x27; jferguso @ mony . com &#x27; ; &#x27; roger . ferguson @ fluor . com &#x27; ; &#x27; jtferrarol @ home . com &#x27; ; &#x27; tfiedler @ flash . net &#x27; ; &#x27; ififfick @ hharchitects . com &#x27; ; &#x27; davidfinley 82 @ yahoo . com &#x27; ; &#x27; duke . fisher @ wcom . com &#x27; ; &#x27; j _ fishero @ yahoo . com &#x27; ; &#x27; dfitzgerald @ mesquiteisd . org &#x27; ; &#x27; lpfitz @ wt . net &#x27; ; &#x27; 102372 . 2423 @ compuserve . com &#x27; ; &#x27; fleck @ concentric . net &#x27; ; &#x27; jannet @ dallas . net &#x27; ; &#x27; fleitman @ msn . com &#x27; ; &#x27; samf @ dallas . net &#x27; ; &#x27; rjflorio @ worldnet . att . net &#x27; ; &#x27; gulfview @ gateway . net &#x27; ; &#x27; d - forbes @ rtis . ray . com &#x27; ; &#x27; bgfort @ earthlink . net &#x27; ; &#x27; clfoster @ airmail . net &#x27; ; &#x27; r . foster @ prelude . com &#x27; ; &#x27; gfoyt @ hdrinc . com &#x27; ; &#x27; sfrancis @ everdream . com &#x27; ; &#x27; halgodal @ flash . net &#x27; ; &#x27; hedgehogracing @ msn . com &#x27; ; &#x27; steve . french @ aggies . org &#x27; ; &#x27; jfreytag @ airmail . net &#x27; ; &#x27; blakef @ msn . com &#x27; ; &#x27; michael . froman @ octel . com &#x27; ; &#x27; afruhling @ metasolv . com &#x27; ; &#x27; fuentes @ noval . net &#x27; ; &#x27; hiroko @ rsn . hp . com &#x27; ; &#x27; fulkfamily @ home . com &#x27; ; &#x27; ron . fuqua @ usa . alcatel . com &#x27; ; &#x27; debra . galarde @ eds . com &#x27; ; &#x27; txhoss @ ix . netcom . com &#x27; ; &#x27; jared . galloway @ fnc . fujitsu . com &#x27; ; &#x27; aubree . garrett @ fnc . fujitsu . com &#x27; ; &#x27; toniandmikeg @ home . com &#x27; ; &#x27; cwgary @ ont . com &#x27; ; &#x27; 2 ags @ flash . net &#x27; ; &#x27; sgaster @ kpmg . com &#x27; ; &#x27; zgoner @ airmail . net &#x27; ; &#x27; dgedeon @ vectrix . com &#x27; ; &#x27; tara . gedeon @ brannforbes . com &#x27; ; &#x27; jcjones @ rsn . hp . com &#x27; ; &#x27; tageo @ mindspring . com &#x27; ; &#x27; tgeorge @ flash . net &#x27; ; &#x27; teresagill @ email . com &#x27; ; &#x27; rglover @ halff . com &#x27; ; &#x27; dfglynnl @ msn . com &#x27; ; &#x27; mgolaboff @ eqrworld . com &#x27; ; &#x27; judie _ good @ yahoo . com &#x27; ; &#x27; gorski @ aggies . com &#x27; ; &#x27; algough @ yahoo . com &#x27; ; &#x27; neilgould @ usa . net &#x27; ; &#x27; sallsgraham @ hotmail . com &#x27; ; &#x27; pgranier @ portal . com &#x27; ; &#x27; begrant @ flash . net &#x27; ; &#x27; rgrantham @ worldnet . att . net &#x27; ; &#x27; tgravett @ wans . net &#x27; ; &#x27; chris _ greer @ hp . com &#x27; ; &#x27; hgreer @ alldata . net &#x27; ; &#x27; chrisg @ micrografx . com &#x27; ; &#x27; donindfw @ ix . netcom . com &#x27; ; &#x27; dan @ productcentre . com &#x27; ; &#x27; jgroce @ lasercomm - inc . com &#x27; ; &#x27; juggernaut @ connect . net &#x27; ; &#x27; katie _ gruebel @ hotmail . com &#x27; ; &#x27; amynurse @ hotmail . com &#x27; ; &#x27; bag 2 @ airmail . net &#x27; ; &#x27; kenneth _ guest @ hp . com &#x27; ; &#x27; jgump @ mail . arco . com &#x27; ; &#x27; wylie . gunter @ eds . com &#x27; ; &#x27; tim . gutschlag @ fnc . fujitsu . com &#x27; ; &#x27; guzmans @ home . com &#x27; ; &#x27; cherihaby @ home . com &#x27; ; &#x27; julie _ halloran @ yahoo . com &#x27; ; &#x27; chaltom @ conedrive . textron . com &#x27; ; &#x27; hamelb 21 @ ont . com &#x27; ; &#x27; talana 99 @ hotmail . com &#x27; ; &#x27; greg . hanks @ hanksbrokerage . com &#x27; ; &#x27; rharbin @ aris . com &#x27; ; &#x27; carrie . l . hardy @ fritolay . com &#x27; ; &#x27; scott _ harkins @ msn . com &#x27; ; &#x27; jharper @ flash . net &#x27; ; &#x27; jharrington @ sagetelecom . net &#x27; ; &#x27; roynteri @ mail . com &#x27; ; &#x27; steveharrod @ msn . com &#x27; ; &#x27; hartfield @ ti . com &#x27; ; &#x27; terry . k . hartzog @ us . arthurandersen . com &#x27; ; &#x27; kharvey @ pcrrent . com &#x27; ; &#x27; marji . j . harvey @ mail . sprint . com &#x27; ; &#x27; b - haskettl @ ti . com &#x27; ; &#x27; kelly _ hayes @ harwoodmarketing . com &#x27; ; &#x27; mhaye @ amkor . com &#x27; ; &#x27; alanh @ alliancearch . com &#x27; ; &#x27; mheath @ nextlink . com &#x27; ; &#x27; mheffner @ home . com &#x27; ; &#x27; jets @ ti . com &#x27; ; &#x27; glenn @ hc - cpa . com &#x27; ; &#x27; toddmel @ texoma . net &#x27; ; &#x27; kimberly . henderson @ ey . com &#x27; ; &#x27; dah 85 @ mindspring . com &#x27; ; &#x27; shenley @ flash . net &#x27; ; &#x27; rahennessy @ earthlink . com &#x27; ; &#x27; jherblin @ onramp . net &#x27; ; &#x27; carynlynn @ msn . com &#x27; ; &#x27; nascar @ mikeh . net &#x27; ; &#x27; travis @ herringangus . com &#x27; ; &#x27; anandted @ msn . com &#x27; ; &#x27; dherron @ pisd . edu &#x27; ; &#x27; mitchherzog @ yahoo . com &#x27; ; &#x27; sc _ hester @ hotmail . com &#x27; ; &#x27; jheye @ psp . com &#x27; ; &#x27; mhickox @ fiskrob . com &#x27; ; &#x27; lori @ efficient . com &#x27; ; &#x27; phinojos @ micro . honeywell . com &#x27; ; &#x27; d . hirt @ dialogic . com &#x27; ; &#x27; danetami @ airmail . net &#x27; ; &#x27; randyhobert @ msn . com &#x27; ; &#x27; blakekimhodge @ yahoo . com &#x27; ; &#x27; will @ . com &#x27; ; &#x27; choldrid @ airmail . net &#x27; ; &#x27; jnh @ ti . com &#x27; ; &#x27; tholman @ gte . net &#x27; ; &#x27; sholmeso 0 @ msn . com &#x27; ; &#x27; jholstea @ jpi . com &#x27; ; &#x27; sholton @ ticnet . com &#x27; ; &#x27; holyoak @ flash . net &#x27; ; &#x27; phorton @ usa . alcatel . com &#x27; ; &#x27; scott @ horton . net &#x27; ; &#x27; thowes @ mail . arco . com &#x27; ; &#x27; chad @ tice . com &#x27; ; &#x27; hugghins @ gte . net &#x27; ; &#x27; jhummel @ memc . com &#x27; ; &#x27; markhunt @ bigfoot . com &#x27; ; &#x27; thehurd @ hex . net &#x27; ; &#x27; b - hutcheson @ ti . com &#x27; ; &#x27; j . r . iacoponelli @ mciworld . com &#x27; ; &#x27; billirish @ hotmail . com &#x27; ; &#x27; czjkjj @ msn . com &#x27; ; &#x27; pat . jackson @ fnc . fujitsu . com &#x27; ; &#x27; sjackson @ opsos . net &#x27; ; &#x27; ararat @ flash . net &#x27; ; &#x27; stevejames @ home . com &#x27; ; &#x27; chellejanow @ hotmail . com &#x27; ; &#x27; asmith _ scuba @ yahoo . com &#x27; ; &#x27; bjehu @ yahoo . com &#x27; ; &#x27; ashlea _ jenkins @ hotmail . com &#x27; ; &#x27; cjenson @ flash . net &#x27; ; &#x27; mljideas @ home . com &#x27; ; &#x27; slj @ waymark . net &#x27; ; &#x27; rjolly _ 1 @ yahoo . com &#x27; ; &#x27; bsjones 50 @ hotmail . com &#x27; ; &#x27; craig - charlottejones @ worldnet . att . net &#x27; ; &#x27; danny @ lanyx . com &#x27; ; &#x27; mattjones @ ccgmail . com &#x27; ; &#x27; wjones @ clearsail . net &#x27; ; &#x27; sjordan 3 @ compuserve . com &#x27; ; &#x27; ryanjust @ hotmail . com &#x27; ; &#x27; chip @ cscfinancial . com &#x27; ; &#x27; lkcbsl @ home . com &#x27; ; &#x27; makall 5 @ flash . net &#x27; ; &#x27; twk @ msg . ti . com &#x27; ; &#x27; mkaplan @ augustmail . com &#x27; ; &#x27; ckarlik @ swbell . net &#x27; ; &#x27; shafia 30 @ hotmail . com &#x27; ; &#x27; mlkawas @ hotmail . com &#x27; ; &#x27; chipk @ nortel . com &#x27; ; &#x27; markkelley _ wurzburg @ yahoo . com &#x27; ; &#x27; mkelly 2575 @ juno . com &#x27; ; &#x27; danken 8765 @ home . com &#x27; ; &#x27; wolfcamp @ hotmail . com &#x27; ; &#x27; mjkereluk @ msn . com &#x27; ; &#x27; ckerley @ apclink . com &#x27; ; &#x27; lkerr @ evl . net &#x27; ; &#x27; r . kessel @ ssss . com &#x27; ; &#x27; dkessler @ waymark . net &#x27; ; &#x27; mkessner @ hotmail . com &#x27; ; &#x27; troykey @ peoplepc . com &#x27; ; &#x27; akilpatrick @ kurion . com &#x27; ; &#x27; kings 2 @ flash . net &#x27; ; &#x27; kingsr @ home . com &#x27; ; &#x27; jkingston @ ti . com &#x27; ; &#x27; skirchner @ worldnet . att . net &#x27; ; &#x27; chuck @ digitalpilot . com &#x27; ; &#x27; michael . kleppe @ ericsson . com &#x27; ; &#x27; jklouda @ flash . net &#x27; ; &#x27; dennis _ kniery @ hp . com &#x27; ; &#x27; sschulz @ mail . smu . edu &#x27; ; &#x27; lakohler @ raytheon . com &#x27; ; &#x27; james . kornegay @ eds . com &#x27; ; &#x27; knrkrause @ aol . com &#x27; ; &#x27; kckuddes @ altavista . com &#x27; ; &#x27; sakula @ flash . net &#x27; ; &#x27; skutchin @ leaelliott . com &#x27; ; &#x27; bladdusaw @ ti . com &#x27; ; &#x27; 103745 . 342 @ compuserve . com &#x27; ; &#x27; mellake @ yahoo . com &#x27; ; &#x27; paul . lake @ ps . net &#x27; ; &#x27; slakie @ texas . net &#x27; ; &#x27; jplane @ gte . net &#x27; ; &#x27; mlangloys @ aol . com &#x27; ; &#x27; rlanicek @ home . com &#x27; ; &#x27; barrett . lankford @ painewebber . com &#x27; ; &#x27; mlara @ pisd . edu &#x27; ; &#x27; gsl @ msn . com &#x27; ; &#x27; mikepl @ bnr . ca &#x27; ; &#x27; klavergne @ earthling . net &#x27; ; &#x27; winner @ sportsstandings . com &#x27; ; &#x27; mlecrone @ aol . com &#x27; ; &#x27; banglee @ ti . com &#x27; ; &#x27; coyote 97 @ swbell . net &#x27; ; &#x27; robertlee @ poboxes . com &#x27; ; &#x27; j . lemmons @ worldnet . att . net &#x27; ; &#x27; lesliel @ airmail . net &#x27; ; &#x27; lerich @ flash . net &#x27; ; &#x27; rlessmann @ home . com &#x27; ; &#x27; elethe @ gte . net &#x27; ; &#x27; mikelew @ nortelnetworks . com &#x27; ; &#x27; lewisr 691 @ home . com &#x27; ; &#x27; laliefer @ aol . com &#x27; ; &#x27; hkl 5320 @ dcccd . edu &#x27; ; &#x27; gmlz @ msg . ti . com &#x27; ; &#x27; blightsey @ systemdesk . com &#x27; ; &#x27; 74464 . 2612 @ compuserve . com &#x27; ; &#x27; jlind 2402 @ aol . com &#x27; ; &#x27; dlindstrom @ icidallas . com &#x27; ; &#x27; glinebaugh @ prodigy . net &#x27; ; &#x27; eflinhoff @ aol . com &#x27; ; &#x27; the . lisewskys @ prodigy . net &#x27; ; &#x27; mlish @ kennedywilson . com &#x27; ; &#x27; heidident @ aol . com &#x27; ; &#x27; katie 96 ag @ yahoo . com &#x27; ; &#x27; john _ london @ acs - inc . com &#x27; ; &#x27; ro 219 @ aol . com &#x27; ; &#x27; balott @ aol . com &#x27; ; &#x27; wadel @ swbell . net &#x27; ; &#x27; tglovell @ onramp . net &#x27; ; &#x27; tlovell @ ticnet . com &#x27; ; &#x27; rmlowry 4 @ yahoo . com &#x27; ; &#x27; mploya @ ti . com &#x27; ; &#x27; aggie 97 @ hotmail . com &#x27; ; &#x27; jlugo @ rhaaia . com &#x27; ; &#x27; klukshin @ kpmg . com &#x27; ; &#x27; dluna @ raltron . com &#x27; ; &#x27; ped @ nortel . ca &#x27; ; &#x27; clyons @ metasolv . com &#x27; ; &#x27; paulandkarin @ msn . com &#x27; ; &#x27; rlyttons @ aol . com &#x27; ; &#x27; emaas 94 @ yahoo . com &#x27; ; &#x27; spam . bait @ worldnet . att . net &#x27; ; &#x27; neardal @ airmail . net &#x27; ; &#x27; mmachesney @ aol . com &#x27; ; &#x27; netaces @ airmail . net &#x27; ; &#x27; richard . maddox @ mci . com &#x27; ; &#x27; betty . magee @ homesbybetty . com &#x27; ; &#x27; jmagrude @ jpi . com &#x27; ; &#x27; pxm @ msg . ti . com &#x27; ; &#x27; tracemajor @ hotmail . com &#x27; ; &#x27; mmalakoff @ aol . com &#x27; ; &#x27; judy . j . manning @ fritolay . com &#x27; ; &#x27; norris @ mantooth . com &#x27; ; &#x27; marchand _ darryl @ msn . com &#x27; ; &#x27; nrm 2000 @ hotmail . com &#x27; ; &#x27; mike . marino @ usoncology . com &#x27; ; &#x27; branonmarsh @ hotmail . com &#x27; ; &#x27; rmartin @ coserv . net &#x27; ; &#x27; dmason @ highpointtravel . com &#x27; ; &#x27; seanab @ gte . net &#x27; ; &#x27; debm 394 @ aol . com &#x27; ; &#x27; mathews - amy @ yahoo . com &#x27; ; &#x27; ags 84 @ aol . com &#x27; ; &#x27; equestlnm @ excite . com &#x27; ; &#x27; mjmattson @ home . com &#x27; ; &#x27; bmatulal @ airmail . net &#x27; ; &#x27; ilvjesus @ flash . net &#x27; ; &#x27; kmay 4001 @ aol . com &#x27; ; &#x27; cmayber @ pisd . edu &#x27; ; &#x27; jasonmayes @ earthlink . net &#x27; ; &#x27; jimbobq 88 @ aol . com &#x27; ; &#x27; mccaff @ anet - dfw . com &#x27; ; &#x27; bmccainl 62 @ aol . com &#x27; ; &#x27; almac @ wans . net &#x27; ; &#x27; mike . mcdonald @ ey . com &#x27; ; &#x27; dhm @ mcdowelllabel . com &#x27; ; &#x27; tmcevoy @ wordware . com &#x27; ; &#x27; trisheeey @ hotmail . com &#x27; ; &#x27; bmcgrego @ metrogroup . com &#x27; ; &#x27; rmckee @ ti . com &#x27; ; &#x27; jim _ mcmahan @ ctxmort . com &#x27; ; &#x27; bmcmillan @ motion - dynamics . com &#x27; ; &#x27; pmeggs @ aol . com &#x27; ; &#x27; mendezn @ nortelnetworks . com &#x27; ; &#x27; jenabug @ flash . net &#x27; ; &#x27; m _ mentzer @ hotmail . com &#x27; ; &#x27; sandymergen @ hotmail . com &#x27; ; &#x27; smerrill @ flash . net &#x27; ; &#x27; tiffany _ merrill @ yahoo . com &#x27; ; &#x27; jmersiovsky @ metasolv . com &#x27; ; &#x27; emetting @ hntb . com &#x27; ; &#x27; sue _ middleton @ juno . com &#x27; ; &#x27; jbm 326 @ aol . com &#x27; ; &#x27; barbmiller @ qualtx . com &#x27; ; &#x27; michael _ c . _ miller @ ac . com &#x27; ; &#x27; miller @ dallas . net &#x27; ; &#x27; hdjemills @ earthlink . net &#x27; ; &#x27; jmills @ dallas . net &#x27; ; &#x27; dminaldi @ contactdallas . com &#x27; ; &#x27; rminney @ entercon . com &#x27; ; &#x27; mlm @ ti . com &#x27; ; &#x27; jenmizar @ yahoo . com &#x27; ; &#x27; moonaggie @ cs . com &#x27; ; &#x27; jason @ aggies . org &#x27; ; &#x27; pipkins @ gateway . net &#x27; ; &#x27; danny . morris @ mciworld . com &#x27; ; &#x27; jcipolla @ hotmail . com &#x27; ; &#x27; cmorse @ waymark . net &#x27; ; &#x27; aggietx @ swbell . net &#x27; ; &#x27; m _ muecke @ hotmail . com &#x27; ; &#x27; jeff . mundt @ wcom . com &#x27; ; &#x27; amurphy 96 @ hotmail . com &#x27; ; &#x27; jmurphy 4 @ hotmail . com &#x27; ; &#x27; dannym @ churchrealty . com &#x27; ; &#x27; cmyers @ mycon . com &#x27; ; &#x27; greg @ lsil . com &#x27; ; &#x27; jnlzaza @ earthlink . net &#x27; ; &#x27; erinsneedham @ hotmail . com &#x27; ; &#x27; tpneeley @ worldnet . att . net &#x27; ; &#x27; jnelson @ source . com &#x27; ; &#x27; jnerwich @ mindspring . com &#x27; ; &#x27; goonet @ hotmail . com &#x27; ; &#x27; rpnew @ aol . com &#x27; ; &#x27; jeff . newton @ fritolay . com &#x27; ; &#x27; chrisgnichols @ yahoo . com &#x27; ; &#x27; r . niedenfuehr @ worldnet . att . net &#x27; ; &#x27; nielsonc @ sprynet . com &#x27; ; &#x27; rniesen @ ti . com &#x27; ; &#x27; jnobll @ jcpenney . com &#x27; ; &#x27; timcathy @ flash . net &#x27; ; &#x27; merkicpa @ gte . net &#x27; ; &#x27; rnorris @ joefunkconstr . com &#x27; ; &#x27; aggiel @ airmail . net &#x27; ; &#x27; cnorton @ brierley . com &#x27; ; &#x27; janicen @ architeriors . com &#x27; ; &#x27; nnowik @ mhagroup . com &#x27; ; &#x27; toconnor @ varo . com &#x27; ; &#x27; melody . oliver @ eds . com &#x27; ; &#x27; s - oliverl @ ti . com &#x27; ; &#x27; adrienneolsen @ hotmail . com &#x27; ; &#x27; roneal @ ins - inc . com &#x27; ; &#x27; tfonofrio @ aol . com &#x27; ; &#x27; b - orem @ rtis . ray . com &#x27; ; &#x27; jetpilot @ sprintmail . com &#x27; ; &#x27; orr @ caprock . net &#x27; ; &#x27; kwunsch @ ci . garland . tx . us &#x27; ; &#x27; jott @ rsn . hp . com &#x27; ; &#x27; tamc 66 @ aol . com &#x27; ; &#x27; atm 97 @ aol . com &#x27; ; &#x27; powen 94 @ yahoo . com &#x27; ; &#x27; yohanp @ netscape . net &#x27; ; &#x27; palitza @ att . net &#x27; ; &#x27; dpalmer @ pisd . edu &#x27; ; &#x27; cparker @ garlandpower - light . org &#x27; ; &#x27; wanda . parker @ wjpenterprises . com &#x27; ; &#x27; tamu 97 @ airmail . net &#x27; ; &#x27; jpatoskie @ home . com &#x27; ; &#x27; judy . peacock @ worldnet . att . net &#x27; ; &#x27; david . a . pearl @ travelers . com &#x27; ; &#x27; katie @ lifelinehomehealth . com &#x27; ; &#x27; ppedison @ aol . com &#x27; ; &#x27; lpeichel @ nortelnetworks . com &#x27; ; &#x27; mpell @ uswebcks . com &#x27; ; &#x27; dannyp 83 @ gte . net &#x27; ; &#x27; david _ perry @ 3 com . com &#x27; ; &#x27; picardl 999 @ hotmail . com &#x27; ; &#x27; friscoattorney @ aol . com &#x27; ; &#x27; dphillips @ pfsoutsourcing . com &#x27; ; &#x27; cpierce @ lee - eng . com &#x27; ; &#x27; kurtpifer @ hotmail . com &#x27; ; &#x27; stephen _ pilcher @ yahoo . com &#x27; ; &#x27; wpindar 3 @ email . msn . com &#x27; ; &#x27; pingenot @ gte . net &#x27; ; &#x27; pinzon @ nortel . com &#x27; ; &#x27; mwpiper @ onramp . net &#x27; ; &#x27; dpitts @ acm . org &#x27; ; &#x27; ppjp @ airmail . net &#x27; ; &#x27; mplumer @ synhrgy . com &#x27; ; &#x27; randy @ pogueinc . com &#x27; ; &#x27; jerrypoin @ home . com &#x27; ; &#x27; tony . pollacia @ fritolay . com &#x27; ; &#x27; tammypon @ hmhs . com &#x27; ; &#x27; kent @ webdelight . net &#x27; ; &#x27; cporter @ nortelnetworks . com &#x27; ; &#x27; sporter @ texas . net &#x27; ; &#x27; porterfields @ prodigy . net &#x27; ; &#x27; texas _ anm @ yahoo . com &#x27; ; &#x27; poteet @ dmans . com &#x27; ; &#x27; billpowello 4 @ home . com &#x27; ; &#x27; ammy 5 @ aol . com &#x27; ; &#x27; joshp @ thisco . com &#x27; ; &#x27; marykpowl @ syscodallas . com &#x27; ; &#x27; prater 2 @ earthlink . net &#x27; ; &#x27; dprattl @ home . com &#x27; ; &#x27; d - presley @ tamu . edu &#x27; ; &#x27; musicgrl 68 @ aol . com &#x27; ; &#x27; pauld @ homemail . com &#x27; ; &#x27; kpruitt @ gasequipment . com &#x27; ; &#x27; pprzada @ aol . com &#x27; ; &#x27; beckyp @ bmisystems . com &#x27; ; &#x27; impurdy @ 5 pillars . com &#x27; ; &#x27; mrpyatt @ airmail . net &#x27; ; &#x27; jlqjr @ gte . net &#x27; ; &#x27; scradford @ aol . com &#x27; ; &#x27; melissa _ ragan @ richards . com &#x27; ; &#x27; eric . ragle @ cisco - eagle . com &#x27; ; &#x27; maheswaran _ rajasekharan @ i 2 . com &#x27; ; &#x27; kikiaggie @ webcombo . net &#x27; ; &#x27; mramsey @ unitedad . com &#x27; ; &#x27; michael . rasmussen @ ps . net &#x27; ; &#x27; j - read @ tamu . edu &#x27; ; &#x27; jlreadpa @ aol . com &#x27; ; &#x27; reasor @ rsn . hp . com &#x27; ; &#x27; reck @ gateway . net &#x27; ; &#x27; cindy . redman @ eds . com &#x27; ; &#x27; dreed @ is . arco . com &#x27; ; &#x27; reedl 00 @ msn . com &#x27; ; &#x27; tdreed @ airmail . net &#x27; ; &#x27; solutionhr @ aol . com &#x27; ; &#x27; jreeves @ agave . com &#x27; ; &#x27; cremmele @ aol . com &#x27; ; &#x27; rrestivo @ eversoft . com &#x27; ; &#x27; erice 8 @ aol . com &#x27; ; &#x27; sanrice @ aol . com &#x27; ; &#x27; ct _ richard @ hotmail . com &#x27; ; &#x27; mrichard @ arcmail . com &#x27; ; &#x27; krichards @ acsdallas . com &#x27; ; &#x27; paula . g . richmond @ fritolay . com &#x27; ; &#x27; jrickman @ hppclaw . com &#x27; ; &#x27; tlrigby @ home . com &#x27; ; &#x27; kcriggs @ yahoo . com &#x27; ; &#x27; mrightm @ mail . arco . com &#x27; ; &#x27; jriha @ businessobjects . com &#x27; ; &#x27; rrinker @ wtd . net &#x27; ; &#x27; rippees @ swbell . net &#x27; ; &#x27; rippel @ utdallas . edu &#x27; ; &#x27; writchie @ ci . irving . tx . us &#x27; ; &#x27; bradyroberts @ hotmail . com &#x27; ; &#x27; laserbaker @ worldnet . att . net &#x27; ; &#x27; frobert @ aol . com &#x27; ; &#x27; krisaggi @ aol . com &#x27; ; &#x27; ker @ ti . com &#x27; ; &#x27; roco @ nortel . com &#x27; ; &#x27; kjroeker @ airmail . net &#x27; ; &#x27; jimroseo 3 @ home . com &#x27; ; &#x27; suzanne _ ross @ campbellsoup . com &#x27; ; &#x27; jim _ rountree @ logiclsales . com &#x27; ; &#x27; eddie . rueffer @ mci . com &#x27; ; &#x27; srupprecht @ chubb . com &#x27; ; &#x27; jennyr @ wtd . net &#x27; ; &#x27; kimed @ hotmail . com &#x27; ; &#x27; jryan @ uswebcks . com &#x27; ; &#x27; emsalazar 25 @ hotmail . com &#x27; ; &#x27; k - salazarl @ ti . com &#x27; ; &#x27; jlsales @ waymark . net &#x27; ; &#x27; msanchez @ mckinneytexas . org &#x27; ; &#x27; steven . sarkissian @ painwebber . com &#x27; ; &#x27; danna @ nortelnetworks . com &#x27; ; &#x27; tsawyers @ aol . com &#x27; ; &#x27; scheumack @ juno . com &#x27; ; &#x27; dschmidt @ camozzi - usa . com &#x27; ; &#x27; pschmidt @ connect . net &#x27; ; &#x27; tammyms @ yahoo . com &#x27; ; &#x27; nathan . schockmel @ usa . alcatel . com &#x27; ; &#x27; kschoenhals @ metasolv . com &#x27; ; &#x27; schuelerjs @ aol . com &#x27; ; &#x27; diana _ p _ seal @ email . mobil . com &#x27; ; &#x27; pkemper @ 3 dfx . com &#x27; ; &#x27; sherri . seeger @ wylieisd . net &#x27; ; &#x27; maseeley @ avaya . com &#x27; ; &#x27; tseely @ attglobal . net &#x27; ; &#x27; rshackelford @ home . com &#x27; ; &#x27; shannons @ websurfer . net &#x27; ; &#x27; jtshannon @ ticnet . com &#x27; ; &#x27; loren . sharkey @ brinker . com &#x27; ; &#x27; rehan @ computer . org &#x27; ; &#x27; gryffynn @ aol . com &#x27; ; &#x27; xosloren @ ti . com &#x27; ; &#x27; roger . shellenberger @ exscol . exch . eds . com &#x27; ; &#x27; kshelton @ amfm . com &#x27; ; &#x27; samleannshields @ aol . com &#x27; ; &#x27; sbshin @ evl . net &#x27; ; &#x27; alsikes @ pbsj . com &#x27; ; &#x27; glenn _ silva @ gmaccm . com &#x27; ; &#x27; frank . silva @ industrialrisk . com &#x27; ; &#x27; simmonds @ marykay . com &#x27; ; &#x27; atmrick @ aol . com &#x27; ; &#x27; isivin @ aol . com &#x27; ; &#x27; rskaggs @ hksinc . com &#x27; ; &#x27; bskalberg @ aol . com &#x27; ; &#x27; todd @ nkn . net &#x27; ; &#x27; dsmart @ dttus . com &#x27; ; &#x27; amy . l . smith @ eds . com &#x27; ; &#x27; egsmith @ home . com &#x27; ; &#x27; john _ charles _ smith @ compuserve . com &#x27; ; &#x27; john - h - smith @ raytheon . com &#x27; ; &#x27; ksmith @ kma - rjfs . com &#x27; ; &#x27; shanda @ wans . net &#x27; ; &#x27; michael . smith @ usa . alcatel . com &#x27; ; &#x27; rjsmith @ minutemaid . com &#x27; ; &#x27; rsmith @ metasolv . com &#x27; ; &#x27; dick _ smith @ pagenet . com &#x27; ; &#x27; agent _ maroon @ hotmail . com &#x27; ; &#x27; enviropure @ home . com &#x27; ; &#x27; unclewil @ home . com &#x27; ; &#x27; jsmitherman @ cinemark . com &#x27; ; &#x27; jim _ snow @ millipore . com &#x27; ; &#x27; gpsparks @ hotmail . com &#x27; ; &#x27; tspo 92891 @ aol . com &#x27; ; &#x27; dspencer @ dbssystems . com &#x27; ; &#x27; lspielel @ txu . com &#x27; ; &#x27; txagl 987 @ aol . com &#x27; ; &#x27; g - stanford @ raytheon . com &#x27; ; &#x27; petgeoguru @ hotmail . com &#x27; ; &#x27; jstara @ arcmail . com &#x27; ; &#x27; kgstavin @ garlandisd . net &#x27; ; &#x27; tbstebbins @ aol . com &#x27; ; &#x27; jsteck @ ti . com &#x27; ; &#x27; steffler @ mindspring . com &#x27; ; &#x27; gsteglich @ home . com &#x27; ; &#x27; shane @ computer . org &#x27; ; &#x27; sastephen @ home . com &#x27; ; &#x27; dereks @ us . ibm . com &#x27; ; &#x27; tsteudtner @ aol . com &#x27; ; &#x27; jill . stevens @ risd . org &#x27; ; &#x27; jnelwyn @ aol . com &#x27; ; &#x27; dons @ gwmail . plano . gov &#x27; ; &#x27; mstewart 70 @ aol . com &#x27; ; &#x27; pstewart 86 @ hotmail . com &#x27; ; &#x27; rastewartl 2 @ hotmail . com &#x27; ; &#x27; msticken @ airmail . net &#x27; ; &#x27; cstockmoe @ yahoo . com &#x27; ; &#x27; k - stokes @ tamu . edu &#x27; ; &#x27; michael _ stone @ nt . com &#x27; ; &#x27; mcstrietzel @ home . com &#x27; ; &#x27; staceys @ omassociates . com &#x27; ; &#x27; sstroth @ glitsch . com &#x27; ; &#x27; h - r . strozewski @ worldnet . att . net &#x27; ; &#x27; astryker @ swbell . net &#x27; ; &#x27; macecs @ hotmail . com &#x27; ; &#x27; smsturgeon @ kpmg . com &#x27; ; &#x27; sullivan 22 @ home . com &#x27; ; &#x27; normas @ airmail . net &#x27; ; &#x27; wswanson @ cyberramp . net &#x27; ; &#x27; rtank 20 @ aol . com &#x27; ; &#x27; matt _ tanner @ txu . com &#x27; ; &#x27; ftargac @ hotmail . com &#x27; ; &#x27; taylorgr @ nortel . com &#x27; ; &#x27; taylorl @ airmail . net &#x27; ; &#x27; aggierob @ hotmail . com &#x27; ; &#x27; teresa . taylor @ st . com &#x27; ; &#x27; ticaw @ hotmail . com &#x27; ; &#x27; wst @ flash . net &#x27; ; &#x27; caceett @ hotmail . com &#x27; ; &#x27; punt 3442 @ aol . com &#x27; ; &#x27; chris . t @ prodigy . net &#x27; ; &#x27; denise . thatcher @ eds . com &#x27; ; &#x27; mjthed @ earthlink . net &#x27; ; &#x27; brandon . theis @ eds . com &#x27; ; &#x27; steve _ thelen @ cushwake . com &#x27; ; &#x27; arthur . thomas @ ace - ina . com &#x27; ; &#x27; tthomas @ cooperinst . org &#x27; ; &#x27; dthomps 2 @ pisd . edu &#x27; ; &#x27; nthompson @ swst . com &#x27; ; &#x27; psthompson @ mindspring . com &#x27; ; &#x27; rthompso @ kofax . com &#x27; ; &#x27; tierney _ thompson @ winston - school . org &#x27; ; &#x27; b - tinker @ ti . com &#x27; ; &#x27; tipp @ airmail . net &#x27; ; &#x27; atokarz @ usa . alcatel . com &#x27; ; &#x27; bevtoney @ aol . com &#x27; ; &#x27; kstowery @ mindspring . com &#x27; ; &#x27; patrick . traubert @ tripointglobal . com &#x27; ; &#x27; heidigigem 96 @ yahoo . com &#x27; ; &#x27; tiffanytrox @ yahoo . com &#x27; ; &#x27; dddtruitt @ juno . com &#x27; ; &#x27; tschetter @ worldnet . att . net &#x27; ; &#x27; 9 mtucker @ home . com &#x27; ; &#x27; oxymomloree @ aol . com &#x27; ; &#x27; cturner @ entest . net &#x27; ; &#x27; aisdal @ aol . com &#x27; ; &#x27; rachturney @ yahoo . com &#x27; ; &#x27; gulteig @ starrunner . net &#x27; ; &#x27; gutay @ airmail . net &#x27; ; &#x27; hutay @ yahoo . com &#x27; ; &#x27; valls @ earthlink . net &#x27; ; &#x27; hvanpelt @ msn . net &#x27; ; &#x27; dwv @ vanderburg . org &#x27; ; &#x27; timv @ cheerful . com &#x27; ; &#x27; r - cvaughn @ juno . com &#x27; ; &#x27; annette . vela @ homecomings . com &#x27; ; &#x27; jvetkoetter @ pipeline . com &#x27; ; &#x27; diane _ vetter @ hotmail . com &#x27; ; &#x27; vicem @ hdvest . com &#x27; ; &#x27; jennifer @ vilches . org &#x27; ; &#x27; pvilches @ home . com &#x27; ; &#x27; spvill @ flash . net &#x27; ; &#x27; ssv @ attglobal . net &#x27; ; &#x27; kristi . l . vitek @ fritolay . com &#x27; ; &#x27; voltin @ airmail . net &#x27; ; &#x27; wagso 0 @ yahoo . com &#x27; ; &#x27; walessc @ nortelnetworks . com &#x27; ; &#x27; bwalker @ fmtinv . com &#x27; ; &#x27; brian . walker @ exchange - point . com &#x27; ; &#x27; deanwalker @ computer . org &#x27; ; &#x27; ken . walker @ mscsoftware . com &#x27; ; &#x27; shannon . wallace @ usa . net &#x27; ; &#x27; b _ wallace @ prodigy . net &#x27; ; &#x27; wwallenl @ airmail . net &#x27; ; &#x27; mkwalle @ yahoo . com &#x27; ; &#x27; twaller @ excite . com &#x27; ; &#x27; drwaller @ hotmail . com &#x27; ; &#x27; maxwalters @ worldnet . att . net &#x27; ; &#x27; kwalzel @ cisco . com &#x27; ; &#x27; julie . warden @ mhmr . state . tx . us &#x27; ; &#x27; warner @ ont . com &#x27; ; &#x27; watersco @ flash . net &#x27; ; &#x27; julie . watkins @ eds . com &#x27; ; &#x27; apwo 397 @ juno . com &#x27; ; &#x27; patricia . watsono 2 @ ey . com &#x27; ; &#x27; jwebb @ dalsemi . com &#x27; ; &#x27; jkwebb 41 @ gateway . net &#x27; ; &#x27; debbiew @ mciworld . com &#x27; ; &#x27; robin - w @ juno . com &#x27; ; &#x27; sally _ welch @ excite . com &#x27; ; &#x27; twelch @ nortelnetworks . com &#x27; ; &#x27; awaller @ csc . com &#x27; ; &#x27; gregwemhoener @ home . com &#x27; ; &#x27; susanwempe @ hotmail . com &#x27; ; &#x27; jwest 78 @ aol . com &#x27; ; &#x27; mike . west @ usa . alcatel . com &#x27; ; &#x27; joannwest @ earthlink . net &#x27; ; &#x27; mweynand @ flash . net &#x27; ; &#x27; weynandken @ johndeere . com &#x27; ; &#x27; mweynand @ flash . net &#x27; ; &#x27; mmw @ airmail . net &#x27; ; &#x27; ewheal @ jcpenney . com &#x27; ; &#x27; swhite @ tx . pathnet . net &#x27; ; &#x27; txag 93 sw @ flash . net &#x27; ; &#x27; chris @ iex . com &#x27; ; &#x27; wiegard @ nortel . com &#x27; ; &#x27; cindyw @ pobox . com &#x27; ; &#x27; jbouldin @ teleteam . com &#x27; ; &#x27; mike @ paragon - tx . com &#x27; ; &#x27; rtwilkinsn @ aol . com &#x27; ; &#x27; jerriw @ arn . net &#x27; ; &#x27; joeaggie 93 @ msn . com &#x27; ; &#x27; kristilw @ swbell . net &#x27; ; &#x27; a 50 @ flash . net &#x27; ; &#x27; rkwbdw 580 @ cs . com &#x27; ; &#x27; kswccw @ swbell . net &#x27; ; &#x27; designpath @ sprynet . com &#x27; ; &#x27; drw 58 ag @ aol . com &#x27; ; &#x27; wilsonaggies @ home . com &#x27; ; &#x27; normabautista @ worldnet . att . net &#x27; ; &#x27; skisheri @ aol . com &#x27; ; &#x27; emajo . wilson @ gte . net &#x27; ; &#x27; jenkonquin @ aol . com &#x27; ; &#x27; wvicw @ aol . com &#x27; ; &#x27; teresa . wood @ st . com &#x27; ; &#x27; lwood 963 @ flash . net &#x27; ; &#x27; tcwoolley @ writeme . com &#x27; ; &#x27; sworsham @ supermovers . com &#x27; ; &#x27; brad _ worth @ csicontrols . com &#x27; ; &#x27; wrightson . family @ gte . net &#x27; ; &#x27; dwu @ tqtx . com &#x27; ; &#x27; dlwylie @ swbell . net &#x27; ; &#x27; christa . yakel @ sap - ag . de &#x27; ; &#x27; yarbrough _ james @ hotmail . com &#x27; ; &#x27; suzan @ guyyork . com &#x27; ; &#x27; karen _ znoj @ merck . com &#x27; subject : &quot; red , white and blue out &quot; subject : the osu game and aggie spirit this just in ags ! if you are going to the osu game on sept 22 , a red , white &amp; blue out is being planned , just like the maroon out games for the osu game . ags , what better statement can we aggies make , than to celebrate the love and support for our country &#x27; s freedom , and our patriotic nature , than this way : imagine . . . the fightin &#x27; texas aggie band playing &quot; the star spangled banner , &quot; playing military drills as they walk around the stadium , and we celebrate our love for our country , and our support for all the heroes , alive and deceased . color assignments are as follows : 3 rd deck : red 2 nd deck : white lst deck : blue pass the word on . . . . we have 1 1 / 2 weeks ! ! the spirit of america , and the aggie spirit is still alive . god bless america , the free nation . pass it on .
</pre>

## Record 008573

**Label:** `benign`

<pre>
On Fri, Jul 26, 2002 at 03:56:22PM +0100 or so it is rumoured hereabouts, 
Wynne, Conor thought:
&gt; Surely it would be faster to save you conf files, install it on the box
&gt; again, copy back you confs and voila.
&gt; All you car about are the confs as the boite has no DATA right?
 
Yeah, but then I&#x27;d have to remember _exactly_ which confs I&#x27;d modified and
they&#x27;re not all in /etc either...&gt; Thats what I would do, but you sysadmins have to make life as difficult &amp;
&gt; complicated as possible ;--)Yup...  In this case, I had two issues.  1. I mirrored the disk to give to
someone else to work on but the box he has available has only a P1 or P2
processor.  2. My celeron box has been crashing the backup software so I
wanted to try out the backup in a different box to make sure it&#x27;s hardware
related.  Again, it&#x27;s also an interesting exercise...
 
&gt; Have you thought about mirroring the system drives? Might save you serious
&gt; hassle down the line. Oh, I&#x27;m doing that too.  This is going to Africa so I&#x27;m aiming for as
robust as possible with belt, braces and probably an all-in-one jumpsuit!
I&#x27;ll be mirroring the disk but that is worth only so much (eg. lightning
strike taking out the disk(s) or system compromise)  I&#x27;m also going for a
backup to CDR with an automated restore http://www.mondorescue.org .  The
admin out there wouldn&#x27;t be able to build the system again if the mobo got
fried and the replacement was the wrong arch but an i386 compatible
install will mean just dropping in the HD and booting (ish)...Conor
-- 
Conor Daly Domestic Sysadmin :-)
---------------------
Faenor.cod.ie
  2:32pm  up 64 days, 23:49,  0 users,  load average: 0.00, 0.00, 0.00
Hobbiton.cod.ie
  2:19pm  up 7 days, 20:56,  1 user,  load average: 0.05, 0.02, 0.00-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008574

**Label:** `benign`

<pre>
pictures i had computer problems today , which snarf &#x27; d all the addresses that i have previous e - mailed you folks . none of those previous http address are valid any more . so , look to http : / / 24 . 27 . 98 . 30 / pictures / index . htm to find a table of contents of july pictures . i &#x27; ll try to keep this updated , as new pictures are posted . thanks , ram tackett , ( mailto : rtackett @ abacustech . net ) owner , abacus technologies 17611 loring lane , spring , tx 77388 - 5746 ( 281 ) 651 - 7106 ; fax ( 281 ) 528 - 8636 web : http : / / www . abacustech . net - ram tackett ( e - mail ) . vcf
</pre>

## Record 008575

**Label:** `benign`

<pre>
re : sorry . chonawee , this was perfectly all right . as a matter of fact i expect and encourage the members of the group to disagree with me ( or anybody else ) on any subject . i am never offended by it and take it as a manifestation of ability to think independently and having the courage of one &#x27; s convictions . nobody has the monopoly on truth and nobody knows everything . the only way we can learn and avoid costly errors ( to ourselves and the company ) is by having open communication . in enron , facts are friendly . by the way , it was an excellent presentation . vince chonawee supatgiat @ enron 01 / 04 / 2001 03 : 10 pm to : vince j kaminski / hou / ect @ ect cc : subject : sorry . hi vince , i am sorry for correcting on the revenue of the different auctions . vickrey 1961 showed that all 4 kinds of auctions would yield the same expected revenue to the auctioneer . ( dutch , english , first price - sealed bid , and second - price sealed bid . ) in fact , the selling price is equal to the valuation of the second highest bidder . for example , in vickrey auction , everyone bids at his own valuation . hence , the winner pays the valuation of the second highest bidder . in english auction , the second highest valuation bidder will stop competing if the price is above his valuation . hence , the winner also gets the item at the price of the second highest valuation bidder . thank you for attending the meeting and giving many helpful contributions . - chonawee
</pre>

## Record 008576

**Label:** `benign`

<pre>

Oooops!Doesn&#x27;t work at all. Got this on startup and on any attempt to change folder (which fail)/Anderscan&#x27;t read &quot;flist(seqcount,lists/exmh,unseen)&quot;: no such element in array
    (reading value of variable to increment)
    invoked from within
&quot;incr flist(seqcount,$folder,$seq) $delta&quot;
    (procedure &quot;Seq_Del&quot; line 16)
    invoked from within
&quot;Seq_Del $exmh(folder) $mhProfile(unseen-sequence) $msgid&quot;
    (procedure &quot;MsgSeen&quot; line 7)
    invoked from within
&quot;MsgSeen $msgid&quot;
    (procedure &quot;MsgShow&quot; line 12)
    invoked from within
&quot;MsgShow $msgid&quot;
    (procedure &quot;MsgChange&quot; line 17)
    invoked from within
&quot;MsgChange 73 show&quot;
    invoked from within
&quot;time [list MsgChange $msgid $show&quot;
    (procedure &quot;Msg_Change&quot; line 3)
    invoked from within
&quot;Msg_Change $msg(id) $show&quot;
    (procedure &quot;Msg_Show&quot; line 7)
    invoked from within
&quot;Msg_Show cur&quot;
    (&quot;eval&quot; body line 1)
    invoked from within
&quot;eval $msgShowProc&quot;
    (procedure &quot;FolderChange&quot; line 55)
    invoked from within
&quot;FolderChange lists/exmh {Msg_Show cur}&quot;
    invoked from within
&quot;time [list  FolderChange $folder $msgShowProc&quot;
    (procedure &quot;Folder_Change&quot; line 3)
    invoked from within
&quot;Folder_Change $exmh(folder)&quot;
    (procedure &quot;Exmh&quot; line 101)
    invoked from within
&quot;Exmh&quot;
    (&quot;after&quot; script)_______________________________________________
Exmh-workers mailing list
Exmh-workers@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-workers
</pre>

## Record 008577

**Label:** `benign`

<pre>
re : re - re ( as in the short bus ) nefarious is . . . . . 1 . flagrantly wicked or impious 2 . bill williams iii - - - - - original message - - - - - from : williams iii , bill sent : friday , august 03 , 2001 11 : 14 am to : symes , kate subject : re - re ( as in the short bus ) pedantic is . . . 1 : of , relating to , or being a pedant 2 : narrowly , stodgily , and often ostentatiously learned 3 : unimaginative , pedestrian - - - - - original message - - - - - from : symes , kate sent : friday , august 03 , 2001 11 : 03 am to : williams iii , bill subject : jargon is . . . . 2 : the technical terminology or characteristic idiom of a special activity or group 3 : obscure and often pretentious language marked by circumlocutions and long words bottom of form 0
</pre>

## Record 008578

**Label:** `benign`

<pre>
On Thu, Aug 08, 2002 at 11:51:18AM -0600, Scott Wunsch mentioned:
&gt; On Thu, 08-Aug-2002 at 11:31:01 +0100, John P. Looney wrote:
&gt; &gt;  I&#x27;ve installed Redhat 7.3 on a raq3&#x27;s disk. But fscked if I can get the
&gt; &gt; kernel in /boot/vmlinuz-2.4.18-3 to boot. It&#x27;s insisting pulling the
&gt; &gt; kernel from ... somewhere else. The old cobalt kernel.
&gt; http://www.gurulabs.com/rgh-cobalt-howto/index.html
&gt; 
&gt; The Cobalt systems have some neat firmware boot code that will read the
&gt; ext2 filesystem and find the kernel itself... if you put it exactly where
&gt; they expect it. Alas, I&#x27;ve been following that howto, and it doesn&#x27;t seem to work. It
could be because i&#x27;m using ext3 for the rootfs though.Kate
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 008579

**Label:** `benign`

<pre>
information break * * * * * information break * * * * * if you missed this popular presentation last year , here is your chance to see it this year . global trends : 2000 to 2050 speaker : amy oberg manager , competitive intelligence and future foresight enron energy services six trends to be discussed : more young , more old what time is it anyway ? masterful manipulators water , water everywhere ? energy ain &#x27; t what it used to be in a state of fusion when : wednesday , feb . 16 , 2000 , 11 : 30 a . m . to 12 : 30 p . m . where : eb 5 c 2 to make a reservation , call 3 - 1941 and select option 1 . ( lunch will not be provided , but you are welcome to bring your own . )
</pre>

## Record 008580

**Label:** `benign`

<pre>
Ananova:Â  
Newspaper&#x27;s readers complain over &#x27;let&#x27;s have sex&#x27; picture captionReaders of an African newspaper have complained after a picture caption
about jewellery contained the words &quot;let&#x27;s have sex&quot;.
The mix-up highlights the problems caused by the wide range of languages
spoken in Namibia.
Callers to the Namibian were angered by the use of the word tulumweni, which
translates roughly as &quot;let&#x27;s have intercourse&quot; in the Oshiwambo language.
It was used in a caption concerning people in the Caprivi who use rings from
the femidon - female condom - as jewellery.
According to the The Namibian , an activist involved in care for Aids/HIV
patients spelt the word tulumweni for the journalist.
He intended it to mean &quot;you will see for yourselves&quot; in the Siyeyi tongue.
One caller said the complainants &quot;should be considerate of other people&#x27;s
languages. It is very clear that the picture was taken in the Caprivi ...And
that the word is from Siyeyi. It is not Oshiwambo&quot;.
Others indicated that various words might have different meanings in various
Namibian languages, such as omakende, an Oshiwambo word for glasses which in
Siyeyi means testicles.
Another word with a double-meaning is tulikunde, which in Oshiwambo
translates as let&#x27;s talk, but which in Sisubiya translates as let&#x27;s have
intercourse.
The Herero word for a hat is ekoli, which is an Oshiwambo word for a vagina.
Story filed: 12:37 Tuesday 8th October 2002------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
4 DVDs Free +s&amp;p Join Now
http://us.click.yahoo.com/pt6YBB/NXiEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 008581

**Label:** `benign`

<pre>
upcoming discretionary var limit changes per discussion with ted murphy and rick buy , the following policy limit changes are anticipated . note : these are subject to change given market volatility . ees - $ 2 mm discretionary var expiring on 12 / 22 / 00 - - - - - - - - - - - - - - - - - - - - - - - - &gt; extended through 1 / 5 / 01 aggregate var limit of $ 140 mm - $ 40 mm expiring on 12 / 22 / 00 - - - - - - - - - - &gt; expires after 12 / 22 / 00 - reduced to permanent aggregate var limit of $ 100 mm na gas - $ 35 mm discretionary var expiring on 12 / 22 / 00 - - - - - - - - - - - - - - - - - - &gt; expires after 12 / 22 / 00 ( with reduction in aggregate var limit to $ 100 mm ) uk power - $ 5 mm discretionary var expiring on 12 / 22 / 00 - - - - - - - - - - - - - - - - &gt; expires after 12 / 22 / 00 ( with reduction in aggregate var limit to $ 100 mm ) na gas - $ 15 mm discretionary var expiring on 12 / 22 / 00 - - - - - - - - - - - - - - - - - &gt; extend $ 10 mm through 1 / 5 / 01 - - - - - - - - - - - - - - - - - &gt; reallocate $ 5 mm to uk power through 1 / 5 / 01 . therefore , the following var limits are / will be in place : now - 12 / 22 / 00 12 / 23 / 00 - 1 / 5 / 01 1 / 6 / 01 ees $ 7 mm $ 7 mm $ 5 mm na gas $ 110 mm $ 70 mm $ 60 mm uk power $ 20 . 3 mm $ 20 . 3 mm $ 15 . 3 mm aggregate var limit $ 140 mm $ 100 mm $ 83 mm vlady / frank - ted told lavorato the na gas information on friday . vlady / minal - nothing to my knowledge has been communicated to ees yet . you can check with ted to see if he did already . oliver , please communicate the anticipated limit changes for uk power to the commercial and risk management / energy ops people who need to know . if an extension is needed in the discretionary var , at this point an analysis and presentation will be required to justify the extension to get rick buy and ted murphy to approve . feel free to call me with any questions . i &#x27; m out on vacation this week , but can be reached at home or on my cell phone . happy holidays , cassandra . home 936 321 2185 cell 713 858 2618
</pre>

## Record 008582

**Label:** `benign`

<pre>
re : october wellhead julie , the camden and north central contracts are new packages of gas that have yet to come on - line . once production commences , i will request that a spot deal be put in place . bob , please create and enter into sitara a ticket based on the following information : counterparty meter volume price period heatherloch municipal utility district 6879 500 mmbtu / d 100 % if / hsc less $ 0 . 12 10 / 1 - 10 / 31 julie , please confirm . thanks , vlt x 3 - 6353 julie meyers 09 / 28 / 2000 10 : 52 am to : daren j farmer / hou / ect @ ect cc : robert cotten / hou / ect @ ect , vance l taylor / hou / ect @ ect subject : re : october wellhead the heatherlock deal had a single transaction agreement attached to it . when the contract ended the deal ended . the other two i believe we just need a email from vance or donald setting up a spot ticket . vance could you look into that ? do i have the wrong contract attached ? or is there a new contract . for camden &amp; north central , are those just going to be spot tickets ? julie daren j farmer 09 / 28 / 2000 07 : 41 am to : robert cotten / hou / ect @ ect , julie meyers / hou / ect @ ect cc : subject : october wellhead i have rolled or input the following deals for october . crosstex 138553 2 duke 418429 139 hesco 394798 500 swift 418431 322 tri - union 418432 700 vintage 403367 300 whiteoak 418434 96 whiting 418436 100 so , i am showing that the only deals we have outstanding for oct are : camden / 9858 3000 heatherlock / 6879 544 ( previous deal # 133010 ) north central / 5228 3000 julie - please check these deals for the correct contract / terms . also , please look into heatherlock . vance is noming gas for this deal . however , the deal ticket does not have an evergreen flag . when i tried to roll another month , i got a message that another contract was needed . thanks . d
</pre>

## Record 008583

**Label:** `benign`

<pre>
epe marketing availability marketing personnel will again be taking call on weekends and holidays . the 5808 extension will be forwarded to epe &#x27; s prescheduling personnel and unit commitment plans will be developed over the weekend . please call me at 915 - 543 - 4335 or pete serrano at 915 - 543 - 2045 if questions arise . please share this with other personnel as appropriate .
</pre>

## Record 008584

**Label:** `benign`

<pre>
dates for your evening event hope this helps i am out of town on the 20 / 21 of april so not able to make it friday or saturday the 27 th / 28 th of april are fine saturday the 5 th is ok ( not the prime choice as frank &#x27; s flight gets in from the offsite at 6 pm that night unless he changes it or comes straight to your house - which i am willing to make him do ) we are out of the weekend of the 11 th and 12 th and ok any other time in may beth
</pre>

## Record 008585

**Label:** `benign`

<pre>
fw : - - - - - original message - - - - - from : koenig , mark sent : tue 9 / 11 / 2001 7 : 59 pm to : kean , steven j . cc : palmer , mark a . ( pr ) ; whalley , greg ; rieker , paula subject : re : steve - i would prefer a simple release stating we are &quot; open for business &quot; tomorrow . the &quot; appeal for calm &quot; infers a crisis . mek - - - - - original message - - - - - from : kean , steven j . sent : tue 9 / 11 / 2001 7 : 19 pm to : denne , karen ; koenig , mark ; palmer , mark a . ( pr ) ; palmer , mark a . ( pr ) ; kean , steven j . cc : whalley , greg ; derrick jr . , james subject : see draft release for first thing in the am . enron appeals for calm in us natural gas and power markets enron appealed today for calm in us natural gas and power markets . enron will be available to buy and sell natural gas and power both over the phone and through its online platform enrononline . &quot; we see no reason for gas and power markets to panic in the aftermath of yesterday &#x27; s tragedies , &quot; said greg whalley , president and chief operating officer . &quot; these are domestic commodities and the physical infrastructure is secure and operating . &quot; enrononline will be open for gas and power transactions from 7 : 00 am to 12 : 00 noon , cdt to enable market participants to make purchases and sales and adjust their positions as necessary . [ boilerplate ]
</pre>

## Record 008586

**Label:** `benign`

<pre>
EFFector       Vol. 15, No. 25        August 16, 2002     ren@eff.orgA Publication of the Electronic Frontier Foundation     ISSN 1062-9424
In the 225th Issue of EFFector:    * Judge Grants Consumer Voice in ReplayTV Lawsuit
    * Musician Disputes Industry&#x27;s Stance on Music Sharing
    * Shake Your Money Maker; EFF Is Throwing a Party Next Thursday!
    * Join the Fun at EFF&#x27;s VIP Party with Wil Wheaton!
    * Court Hearing Set in DeCSS Publication Jurisdiction Case
    * Deep Links: Lawrence Lessig&#x27;s Second-to-Last Speech on Copyright
    * Deep Links: The &quot;Total Information Awareness System,&quot; or, How 
      to Build a Police State
    * Deep Links: Can the Digital Hub Survive Hollywood?
    * AdministriviaFor more information on EFF activities &amp; alerts: http://www.eff.org/To join EFF or make an additional donation:
  http://www.eff.org/support/
EFF is a member-supported nonprofit. Please sign up as a member today!
* Judge Grants Consumer Voice in ReplayTV Lawsuit  Hollywood Tries to Skip Over Consumers&#x27; ConcernsLos Angeles - Judge Florence Cooper today granted five ReplayTV owners
a voice in the court debate over their rights to record television
programs and to skip commercials using digital video recorders (DVRs).
The federal court denied the entertainment industry motion to dismiss
the ReplayTV owners&#x27; lawsuit and agreed to combine the consumer
lawsuit with an entertainment industry lawsuit filed last fall to ban
ReplayTV DVRs.&quot;We&#x27;re pleased the court has recognized that the debate about digital
video recorders must include the customers who purchase and use the
devices,&quot; said Electronic Frontier Foundation (EFF) Intellectual
Property Attorney Robin Gross.&quot;[T]he issue of whether the Newmark Plaintiffs&#x27; use of the ReplayTV
DVRs&#x27; send-show and commercial-skipping features constitutes fair use
will most likely figure prominently in both the ReplayTV action and
the Newmark action,&quot; wrote Judge Cooper in her opinion.Responding to the entertainment industry&#x27;s lawsuit against DVR
manufacturers, EFF petitioned the court on behalf of the five ReplayTV
owners to declare legal their use of the digital devices also known as
personal video recorders (PVRs). EFF seeks to ensure that the legal
debate over DVRs will include consumers&#x27; concerns along with those of
the entertainment and consumer electronics industries.The entertainment industry claims that commercial skipping infringes
copyright and digital recording aids piracy.&quot;I&#x27;m not a crook if I skip commercials or share a news interview of
myself with my mom using the SendShow feature rather than sending her
a videotape,&quot; said Craig Newmark, founder of craigslist.org and a
ReplayTV owner. &quot;I shouldn&#x27;t have to worry about getting prosecuted,
but the Turner Broadcasting CEO tells us that taking a bathroom break
is criminal. We even have Senators urging Attorney General Ashcroft to
prosecute people who share files.&quot;Along with Newmark, ReplayTV customers filing the lawsuit with legal
representation by the EFF are: Keith Ogden, owner of a financial
broker firm in San Francisco; Shawn Hughes, a small business owner in
Georgia; Seattle journalist Glenn Fleishman; and southern Californian
video engineer Phil Wright.Links:For this release:
http://www.eff.org/IP/Video/Newmark_v_Turner/20020816_eff_pr.htmlCourt order denying dismissal and combining the ReplayTV cases:
http://www.eff.org/IP/Video/Newmark_v_Turner/20020816_consolidation_granted.htmlFor more information on the ReplayTV customers&#x27; suit:
http://www.eff.org/IP/Video/Newmark_v_Turner/For more information on the entertainment industry&#x27;s suit:
http://www.eff.org/IP/Video/Paramount_v_ReplayTV/EFF Fair Use FAQ:
http://www.eff.org/IP/eff_fair_use_faq.html- end -
* Musician Disputes Industry&#x27;s Stance on Music Sharing  Janis Ian Urges Artists Speak Out, Support Free DownloadsSan Francisco - Grammy-winning songwriter and recording artist Janis
Ian today challenged the music industry by celebrating peer-to-peer
(P2P) music sharing as a boon to musicians.Ian, who is in the San Francisco Bay Area as part of her current
concert tour, recently published &quot;The Internet Debacle,&quot; a pointed
critique of the music industry&#x27;s disregard for musicians and consumers
who want to distribute and acquire music online. The Electronic
Frontier Foundation (EFF) applauds Ian&#x27;s actions and hopes that others
will see the Internet as an aid, not a threat, to musicians.In the article, Ian assails the major record labels&#x27; argument that P2P
file-sharing is harming artists.&quot;Free Internet downloads are good for the music industry and its
artists,&quot; explains Ian. &quot;Every act that can&#x27;t get signed to a major,
for whatever reason, can reach literally millions of new listeners,
enticing them to buy the CD and come to the concerts.&quot;She adds that during the heyday of Napster she saw a marked increase
in CD sales from her website. She attacks technological and political
measures meant to harm consumers by restricting their right to copy
and back up their legally purchased music.Ian will play on August 17 in San Rafael, CA.During her 17 album career, Ian has earned nine Grammy nominations and
three awards. Her best known songs include 1967&#x27;s &quot;Society&#x27;s Child&quot;
and 1975&#x27;s &quot;At Seventeen.&quot; More recently, her 1993 album &quot;Breaking
Silence&quot; was nominated for a Grammy Award as Contemporary Folk Album
of the Year. Her songs have been recorded by artists ranging from
Bette Midler to Cher, from Glen Campbell to Vanilla Fudge, and from
Joan Baez to Etta James.
Links:For this release:
http://www.eff.org/IP/P2P/20020815_eff_pr.htmlJanis Ian&#x27;s &quot;Internet Debacle&quot; article:
http://www.janisian.com/article-internet_debacle.htmlJanis Ian&#x27;s follow-up article:
http://www.janisian.com/article-fallout.htmlJanis Ian&#x27;s tour information:
http://www.janisian.com/tourinfo.html- end -
* EFF CAFE 2002 - a Benefit for EFF&#x27;s Campaign for Audiovisual 
  Free Expression  Support Free Expression and See Barney-Wheaton Deathmatch  Thursday, August 22nd, 2002/ 9pm - afterhoursSan Francisco - Join the hottest DJs of the electronic dance music
scene, celebrity boxers, and the foremost cyberspace activists as we
party to protect the future of music. The Electronic Frontier
Foundation presents CAFE 2002 - a Benefit for EFF&#x27;s Campaign for
Audio-Visual Free Expression at 9 p.m. on Thursday, August 22nd, 2002
at the DNA Lounge in San Francisco. Admission is on a sliding scale
and begins at $10.The night features world-class DJs, live acts, and producers from all
parts of the fast-growing electronic music community and a special
treat: celebrity boxing with Wil Wheaton and Barney the purple
dinosaur! Wil Wheaton, of Star Trek: The Next Generation and Stand By
Me fame, will take on Barney in a celebrity boxing matchup for the
history books. All proceeds from the event will directly benefit EFF&#x27;s
CAFE project, helping to preserve your freedom to express yourself in
innovative ways.For more information, see:
http://www.eff.org/cafeOr contact:
Katina Bishop
Director of Education and Offline Activism
Electronic Frontier Foundation
415-436-9333 x101
katina@eff.org- end -
* Join the Fun at EFF&#x27;s VIP Party with Wil Wheaton!Did you love/hate him on Star Trek: The Next Generation? Did you
laugh/cringe in sympathy at the leeches scene in Stand By Me? Need one
last signature to round out your autograph collection of childhood
movie stars?Do we even need to ask how you feel about Barney the purple dinosaur?RSVP quickly for the Electronic Frontier Foundation&#x27;s (EFF) VIP Party
with Wil Wheaton immediately preceding CAFE 2002: a Benefit for EFF&#x27;s
Campaign for Audio-Visual Free Expression.Join Wheaton and the foremost cyberspace activists for drinks in the
upstairs room of the DNA Lounge, San Francisco&#x27;s leading dance club.
Enjoy free drinks, good company, and excellent music. Take the battle
against Barney and his legal thugs into your own hands with a swing at
EFF&#x27;s ferocious Barney pinata.Former technology entrepeneur and cypherpunk Sameer Parekh, now an
electronic musician and event promoter, will play a mix of fresh
minimal techno and electro for your aural edification.All proceeds from the event will directly benefit EFF&#x27;s CAFE project,
helping to preserve your freedom to express yourself in innovative
ways. Tickets are $50 (includes cost of CAFE 2002 and two drinks).When: August 22, 2002 at 8:00 p.m.
Where: The DNA Lounge 375 Eleventh Street, San Francisco, CA 94103
21+ w/ID, NO EXCEPTIONSTo reserve your ticket, contact:
Katina Bishop
EFF Education Director
415-436-9333 x101
katina@eff.org- end -
* Court Hearing Set in DeCSS Publication Jurisdiction CaseOn September 5, 2002, the California Supreme Court will hear oral
arguments about whether a California court has jurisdiction over
Matthew Pavlovich, an Indiana college student who is a resident of
Texas, for his hosting of an Internet mailing list. Pavlovich
maintained the mailing list for the LiVid programming group, which
provides a unified development and user resource center for video and
DVD-related work for the Linux operating system. One of the group&#x27;s
projects was to create a DVD player for computer systems that run
Linux. As part of that effort, DeCSS, a program that decrypts the copy
protection on DVDs, was published on the group&#x27;s mailing list. The
entertainment industry has sued Pavlovich in California court, and
last year a California appellate court ruled Pavlovich was within the
state court&#x27;s jurisdiction since he published information that relates
to the entertainment industry, which is based in California.EFF and Pavlovich&#x27;s legal team argue that Pavlovich is outside of
California&#x27;s jurisdiction since he was a college student in Indiana
with no contacts to California when DeCSS was published on the LiVid
list. The hearing on September 5 will take place in San Francisco.
Links:For more info on the case:
http://www.eff.org/IP/DVDCCA_case/- end -
Deep Links
Deep Links is a new department in the EFFector featuring noteworthy
news items, victories and threats from around the Internet.* Lawrence Lessig&#x27;s Second-to-Last Speech on CopyrightLawrence Lessig gave one of his last public speeches on copyright at
the O&#x27;Reilly Open Source Conference. He will be taking time off of the
speaking circuit to prepare for the Eldred v. Archroft case, which he
is arguing before the Supreme Court this fall. Copies of the speech
are available in many formats here:
http://randomfoo.net/oscon/2002/lessig/- end -* The &quot;Total Information Awareness System&quot;A colorful diagram of John Poindexter&#x27;s scary plan to eliminate
terrorists.
http://www.darpa.mil/iao/TIASystems.htm- end -* Can the Digital Hub Survive Hollywood?Cory Doctorow on how innovation and technology suffer at the hands of
the content industry.
http://www.tidbits.com/database-cache/tbart06901.html- end -
* AdministriviaEFFector is published by:The Electronic Frontier Foundation
454 Shotwell Street
San Francisco CA 94110-1914 USA
+1 415 436 9333 (voice)
+1 415 436 9993 (fax)
  http://www.eff.org/Editor:
Ren Bucholz, Activist
  ren@eff.orgTo Join EFF online, or make an additional donation, go to:
  http://www.eff.org/support/Membership &amp; donation queries: membership@eff.org
General EFF, legal, policy or online resources queries: ask@eff.orgReproduction of this publication in electronic media is encouraged.
Signed articles do not necessarily represent the views of EFF. To
reproduce signed articles individually, please contact the authors for
their express permission. Press releases and EFF announcements &amp;
articles may be reproduced individually at will.To change your address, plese visit http://action.eff.org/subscribe/.
&gt;&gt;From there, you can update all your information. If you have already
subscribed to the EFF Action Center, please visit
http://action.eff.org/action/login.asp.(Please ask ren@eff.org to manually remove you from the list if this
does not work for you for some reason.)Back issues are available at:
  http://www.eff.org/effectorTo get the latest issue, send any message to
effector-reflector@eff.org (or er@eff.org), and it will be mailed to
you automatically. You can also get it via the Web at:
  http://www.eff.org/pub/EFF/Newsletters/EFFector/current. html
++++++++++++++++++++++++
You received this message because eff-all@eff.org is a member of the 
mailing list originating from alerts@action.eff.org. To unsubscribe 
from all mailing lists originating from alerts@action.eff.org, send an 
email to alerts@action.eff.org with &#x27;Remove&#x27; as the only text in the 
subject line.
</pre>

## Record 008587

**Label:** `benign`

<pre>
credit exposure model bill , attached are the spreadsheet for the credit exposure model and the xll file . we have performed some tests and the numbers looked reasonable . however , more extensive testing using realistic data is needed . we would like to pass the model to you so you can have someone check it more extensively and compare the model with what you are using . also , please kindly inform me of any suggestions to improve the model as well as any problems you may find . i can be reached at 31631 . best , alex
</pre>

## Record 008588

**Label:** `benign`

<pre>

As far as I know, there are ide add-in cards that support hot-plugging of
drives, not too sure if this feature is availabe on the cheaper
promise/highpoint controllers, but it is definitely available on the
higher-end (true ide-raid) cards.Cathal.On Fri, 16 Aug 2002, Ciaran Johnston wrote:&gt; Vincent Cunniffe said:
&gt; &gt; I run several co-located servers, and the solution I have adopted is
&gt; &gt; IDE drives. They&#x27;re cheap, fast, and you don&#x27;t have to keep buying
&gt; &gt; media for them. Combine it with a removable HD caddy from Peats or
&gt; &gt; Maplins, and you have a complete onsite/offsite backup solution with 4
&gt; &gt; entire generations of data for about â‚¬250 (2 * 80GB/5400 drives and a
&gt; &gt; caddy for the server).
&gt; &gt;
&gt; &gt; You do need 60 seconds of downtime to replace the drive, but that&#x27;s
&gt; &gt; pretty trivial if done once per month.
&gt;
&gt; Hmmm... this does sound interesting. I think it may be the way to go... I&#x27;d
&gt; still be interested in hearing people&#x27;s opinions on the tape drives I
&gt; mentioned, though, esp. wrt. this solution. I know knocking a drive around
&gt; doesn&#x27;t do it any good.
&gt;
&gt; /Ciaran.
&gt;
&gt;
&gt;
&gt;
&gt;
&gt;-- 
Cathal Ferris.			pio@skynet.ie
+353 87 9852077			www.csn.ul.ie/~pio
---
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 008589

**Label:** `benign`

<pre>
For almost a year, we&#x27;ve been working on a new effort that we&#x27;re
finally ready to show you. We&#x27;re proud to introduce our new Apparel
and Accessories store with over 400 major clothing brands (including
Gap, Old Navy, Nordstrom, Lands&#x27; End, Target, Eddie Bauer, Foot
Locker, and many more).Our goal is to provide complete apparel selection and offer it the
Amazon wayï¿½-with easy navigation, a single shopping cart, your
shipping and payment information already on file, etc. Of course, none
of this would be possible without our many apparel store partners
(we&#x27;re thankful to have such an amazing group of companies working
with us).We released a beta version of the Apparel store about a week ago, and
much to our surprise, tens of thousands of clothing and accessory
items have already been ordered. Through the first few days of our
beta, customers have ordered:* 14,487 shirts (Polo Ralph Lauren button-downs to DKNY blouses)* 1,843 jackets (Old Navy fleece to Polartec windbreakers)* 2,712 sweaters (Eddie Bauer V-necks to Liz Claiborne cardigans)* 140 swimsuits (Tommy Bahama to Speedo)* 9,408 pants (Gap khakis to Guess jeans)* 485 skirts (Nordstrom suede to Spiegel leather)* 1,461 sleepwear items (Marshall Field&#x27;s satin robes to Lands&#x27; End
  flannel pajamas)* 3,254 pairs of shoes (Nike Air Max to Nine West boots)* 1,870 pairs of socks (Cole Haan cashmere-blend to OshKosh B&#x27;Gosh
  cotton)* 2,805 accessories (handbags, watches, scarves, etc.)* 3,287 pairs of underwear (Jockey briefs to Hugo Boss boxers). We all
  need clean underwear, right?We hope you&#x27;ll check it out. You&#x27;ll get a $30 promotional certificate
when you spend $50 or more in the new Apparel store (see details
below). We&#x27;d especially appreciate any feedback you have (please
reply to this email to share your thoughts).http://www.amazon.com/apparelSincerely,Jeff Bezos
Founder &amp; CEO
Amazon.com----------------------------------------------------------------------
To receive your $30 Amazon.com promotional certificate, click through
to:http://www.amazon.com/appareland see the prominent link for the $30 offer. All details are there.
  
We hope you enjoyed receiving this message. However, if you&#x27;d rather
not receive future e-mails announcing new store launches, please click
the Your Account button in the top right corner of any page on the
Amazon.com Web site. In the Personal Information box under the Account
Settings heading, click the &quot;Update your communication preferences&quot;
link.Please note that this message was sent to the following e-mail
address: yyyy@netnoteinc.com

</pre>

## Record 008590

**Label:** `benign`

<pre>
the &quot; hacek &quot; &quot; hacek &quot; is the diminutive of the czech word &quot; hak &quot; , meaning hook . if i &#x27; m not mistaken , a lot of czechs attribute the innovation to the religious and linguistic reformer jan hus ( 1369 ? - 1415 ) . my sources , however , have him introducing a dot over the letters to indicate palatalization rather than a hacek . one of my czech pedagogical grammars claims haceks were appearing in czech manuscripts in the late 13th century , while another explains that the language &#x27;s diacritical conventions stabilized around the end of the 16th century , and that publications of the church of the czech brethren used haceks rather than hus &#x27;s dots . any of those who introduced the hacek could , in my uneducated opinion , have seen haceks in hebrew manuscripts like those described in alice faber &#x27;s recent posting , but we do n&#x27;t know that . by the way , i &#x27; ve recently seen haceks used in phonological renderings of swiss german in journals from berne dating around 1920 ( &quot; beitraege zur schweizerdeutschen grammatik &quot; ) . last year i also saw in the czech press one or two essays by czech jounalists stationed overseas who complained about the peculiarity of haceks ( e . g . , they &#x27; re not found on most international typewriter keyboards ) and how it would make their lives easier if the czechs would adopt some more &quot; ordinary &quot; way of rendering the sounds in question . i very much doubt , however , that their opinion is much shared by their colleagues and compatriots . james kirchner
</pre>

## Record 008591

**Label:** `benign`

<pre>
cuny &#x27; 98 conference below you will find information regarding registration and hotel reservations for the 11th annual cuny conference on human sentence processing . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * please preregister and make your hotel reservations immediately . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * the deadline for both preregistration and hotel reservations is february 27th , but you are encouraged to do both now . the conference rate at the hotel is not unconditionally guaranteed through the reservation deadline - - it is only guaranteed as long as the hotel occupancy is below a certain rate , and some days are already filling up . the normal midweek rate is about $ 50 / night higher than the conference rate , so you should reserve now . please also take the time now to preregister - - it will help us keep costs down ( making more funds available for student travel ) if we can get an accurate estimate of attendance . _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ registration and hotel information for the 11th annual cuny conference on human sentence processing hosted by rutgers , the state university of new jersey conference sponsors : national science foundation city university of new york university of pennsylvania university of rochester ohio state university university of southern california * * * * * february 27th is the conference pre - registration * * * * * and hotel reservation deadline ! conference pre - registration a form for preregistration is below and is also available on our website . to preregister , please fill out the form and return it with a check ( made out to rutgers university ) , as indicated on the form . we &#x27; re sorry , but we cannot accept credit cards . as the fees for on-site registration are substantially higher , we encourage you to register by the february 27th deadline to receive preregistration rates . if you are the first author on a paper or a poster , you will automatically receive the pre-registration rate if you return the registration form via email by february 27 , 1998 . you can then pay your registration fee at the conference . also , if you are attending from outside of the us , you will automatically receive the preregistration rate if you email the form back to us by february 27 . you can then pay the registration fee at the conference ; payment must be in us dollars . student presenters who wish to apply for reimbursement must save all receipts and fill out a reimbursement request form at the conference . hotel reservations we have a special rate of single - $ 119 / night , double / triple / quad - $ 135 / night at the conference hotel , the hyatt regency - new brunswick , nj . you must make your reservation by february 27 , by calling the hotel directly ( 732 ) 873-1234 or ( 800 ) 233-1234 . ask for the special rate for the cuny98 conference . for more info , see our web page : http : / / ruccs . rutgers . edu / cuny98 please print out and mail this form with your check ( made out to rutgers university ) to the address below : _ _ _ _ _ 8 &lt; _ _ _ _ _ _ _ _ _ _ _ 8 &lt; _ _ _ _ _ _ _ _ _ _ _ _ 8 &lt; _ _ _ _ _ _ _ _ _ _ _ 8 &lt; _ _ _ _ _ _ _ _ _ _ 8 &lt; _ _ _ _ _ _ _ _ _ registration form for 11th annual cuny conference on human sentence processing march 19-21 , 1998 new brunswick , new jersey hosted by rutgers , the state university of new jersey name : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ mailing address : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ telephone : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ email : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ are you first author on a paper or poster ? yes _ _ _ no _ _ _ are you a non - us participant ? yes _ _ _ no _ _ _ are you a student ? yes _ _ _ no _ _ _ if a student , will you be requesting aid ? yes _ _ _ no _ _ _ fees registration covers the conference program , coffee breaks ( all days ) , continental breakfasts ( fri / sat ) , evening poster receptions ( thurs / fri ) . all registration forms postmarked by february 27 are eligible for the pre-registration rates . first authors and / or non - us participants can email this this form back to be guaranteed the pre-registration rate , and then pay at the conference . checks should be in us dollars and drawn on a us bank . pre - registration ( by februrary 27 ) late registration non - students $ 75 $ 95 students $ 25 $ 45 please return this form and your payment to : cuny98 rutgers center for cognitive science rutgers university , busch campus psychology building addition new brunswick , nj 08903 usa
</pre>

## Record 008592

**Label:** `benign`

<pre>
holiday gift thank you so much for your thoughtfulness . . . . this basket is absolutely beautiful . . . . . thanks again for your thoughtfulness and for thinking of me . . . . . . you have a wonderful holiday . . . . . . kay
</pre>

## Record 008593

**Label:** `benign`

<pre>
start date : 12 / 17 / 01 ; hourahead hour : 21 ; start date : 12 / 17 / 01 ; hourahead hour : 21 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2001121721 . txt
</pre>

## Record 008594

**Label:** `benign`

<pre>
new books : historical linguistics historical linguistics anna giacalone ramat and paolo ramat , eds . the indo-european languages not since 1937 has a classic reference work appeared for indo - european . this new work , however , steps forth to fill a major gap in this rapidly changing field by making full use of the recent achievements in linguistic theory . useful as both an introductory survey and a reference for advanced students and scholars , the volume provides insight into the variations in the way indo - european is studied while at the same time presenting a unified overview of indo - european . the only work available which combines the historical understanding of indo - european with a survey of its various sub-groups , this volume will be useful to a broad range of readers including students of historical linguistics and comparative philology , modern language students interested in the background on the languages they are studying , and anyone interested in the processes of language change and evolution . routledge language family descriptions routledge : 1998 : 552 pp cl : 0 415 06449 x : # c0977 : $ 160 . 00 : 95 . 00 for more information on these and other titles from : routledge london * new york in north america : www . routledge-ny . com elsewhere : www . routledge . com
</pre>

## Record 008595

**Label:** `benign`

<pre>
hpl nom for august 11 , 2000 oops , i sent you the wrong nom . . . here is the correct hpl nom for august 11 , 2000 . . sorry . . . . ( see attached file : hplo 811 . xls ) - hplo 811 . xls
</pre>

## Record 008596

**Label:** `benign`

<pre>
Amis-v or there is another prefs file that SA is using. I had a heck of a time
figuring out where to find my site wide file because of my configuration.If your using spamd and you want your users to have some control using
user_prefs then check their ~/spamassassin file.
If your using spamd and you have a site wide only policy then make sure that
spamd is started with the -x option.
If you used the -x option then the only place that it should get the rules from
would be from the local.cf in the /etc/mail/spamassassin directory. Assuming a
default install.Theo Van Dinter wrote:
&gt; 
&gt; On Wed, Jul 24, 2002 at 10:18:28AM -0500, Stewart, John wrote:
&gt; &gt; X-Virus-Scanned: by amavisd-new amavisd-new-20020630
&gt; &gt; X-Spam-Status: No, hits=6.5 tagged_above=5.1 required=6.9 tests=PLING,
&gt; &gt; MONEY_BACK, CLICK_BELOW, POR
&gt; &gt; N_14, CLICK_HERE_LINK, FREQ_SPAM_PHRASE
&gt; &gt; X-Razor-id: d92173a8dfc60567e55efcf6bf264fd7f7a7369a
&gt; &gt;
&gt; &gt; Doesn&#x27;t hits=6.5 mean that it should be tagged as spam? Why the
&gt; &gt; X-Spam-Status of no then?
&gt; 
&gt; required is 6.9, it only scored 6.5, so it&#x27;s not spam according to SA.
&gt; 
&gt; &gt; Why is required=6.9 if I have required_hits at 5 in the local.cf? Where the
&gt; &gt; heck does that number come from?
&gt; &gt;
&gt; &gt; Also, what is tagged_above=? I cannot find any information about it on the
&gt; &gt; SpamAssassin site.
&gt; 
&gt; Good questions...  &quot;tagged_above&quot; doesn&#x27;t appear anywhere in SA (at
&gt; least according to `find`).  I would guess it&#x27;s amavis doing some
&gt; hacking around.
&gt; 
&gt; --
&gt; Randomly Generated Tagline:
&gt; D&#x27;oh!  English!  Who needs that?  I&#x27;m never going to England. Come on,
&gt;  let&#x27;s smoke.
&gt; 
&gt;                 -- Homer Simpson, talking Barney into cutting class
&gt;                    The Way We Was
&gt; 
&gt; -------------------------------------------------------
&gt; This sf.net email is sponsored by:ThinkGeek
&gt; Welcome to geek heaven.
&gt; http://thinkgeek.com/sf
&gt; _______________________________________________
&gt; Spamassassin-talk mailing list
&gt; Spamassassin-talk@lists.sourceforge.net
&gt; https://lists.sourceforge.net/lists/listinfo/spamassassin-talk-- 
========================
Kevin W. Gagel
Network Administrator
College of New Caledonia
gagel@cnc.bc.ca
postmaster@cnc.bc.ca
(250)562-2131 loc. 448
========================--------------------------------
The College of New Caledonia    
Visit us at http://www.cnc.bc.ca
--------------------------------
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk

</pre>

## Record 008597

**Label:** `benign`

<pre>
Hello Chris,Oh I don&#x27;t know, Time-lag synchrocity?Or mutual shared experience over time?
:)Its like 930 am..I can&#x27;t function yet.  Lord knows its 630 where you
are.I say this should be a FoRK Posit.
CO&gt; Scary.  I was just listening to the radio (stream, from KUOW), and heard
CO&gt; the story just moments ago.CO&gt; We&#x27;re on opposite sides of the continent, yet we appear to have just had a
CO&gt; shared experience.  There should be a name for that...CO&gt; Cheers -CO&gt;         /ccoCO&gt; On Sat, 21 Sep 2002 bitbitch@magnesium.net wrote:
&gt;&gt; 
&gt;&gt;   So they have Aaron Schwartz on NPR&#x27;s Weekend Edition talking
&gt;&gt;   about Warchalking.   I&#x27;ll agree, its funny, his voice is squeaky and
&gt;&gt;   I&#x27;m jealous that he got on radio and I didn&#x27;t...
-- 
Best regards,
 bitbitch                            mailto:bitbitch@magnesium.net

</pre>

## Record 008598

**Label:** `benign`

<pre>
re : union gas - doehrman # 1 the new sitara ticket # is 165331
</pre>

## Record 008599

**Label:** `benign`

<pre>
conference announcement / call for papers : celtic linguistics * * * * * * celtic linguistics conference * * * * * second posting and call for papers a conference on the formal linguistics of the celtic languages will be held in university college dublin on june 22-23 1995 . invited speakers include jim mccloskey ( university of california at santa cruz ) , ian roberts ( university of north wales , bangor ) , david adger ( university of york ) and james scobbie ( queen margaret college , edinburgh ) . abstracts are invited for 45 - minute talks ( 30 + 15 ) on all aspects of theoretically-oriented research on the celtic languages . please submit 4 copies of a 1 - page abstract ( 3 anonymous and one camera - ready copy with name , affiliation etc . ) to the address below . abstracts must be received by february 28th , 1995 [ please note extended deadline ] . the conference will be held on the belfield campus ( approximately 5 km from the city centre ) . accommodation will be available on campus . expressions of interest and requests for further information should be sent to either of the following addresses : chiosain @ ollamh . ucd . ie acquaviv @ ccvax . ucd . ie or to celtic linguistics conference department of linguistics university college dublin belfield , dublin 4 ireland
</pre>

## Record 008600

**Label:** `benign`

<pre>
re : keyex customer invitation list here &#x27; s tw &#x27; s info . call me if you have questions . thanks kevin hyatt 713 - 853 - 5559
</pre>

