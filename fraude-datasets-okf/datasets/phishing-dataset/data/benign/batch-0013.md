---
type: DatasetPartition
title: Benign samples - batch 0013
dataset: Phishing Text Dataset
label: benign
record_count: 200
record_start: 2401
record_end: 2600
---

# Benign samples — batch 0013

## Record 002401

**Label:** `benign`

<pre>
eix / eme bond sale fyi . tuesday june 26 6 : 32 pm et sources : edison reworking bond sale by jonathan stempel new york ( reuters ) - edison international ( nyse : eix - news ) , in a last - ditch bid to stay solvent , is restructuring a $ 1 . 2 billion junk bond sale because investors are afraid of getting caught in a second big california utility bankruptcy , bond market analysts and investors said on tuesday . edison , the parent of cash - strapped utility southern california edison ( news - web sites ) , is considering trimming its bond sale and adding a bank term loan , the analysts and investors said . rosemead , california - based edison needs cash this week as it struggles with california &#x27; s power crisis , analysts said . the company is trying to rid itself of debt maturing this year , including a fully drawn down $ 618 million bank credit line expiring saturday . the seven - year secured notes being sold by mission energy holding co . have not found enough buyers despite carrying yields as high as 13 . 5 percent , analysts said . that &#x27; s more than four percentage points above the recent 9 . 33 percent yield on a typical junk - rated electric utility bond , according to merrill lynch &amp; co . ` ` we were hearing it was significantly undersubscribed around midday when the deal was scheduled to price , so the assumption is it will resurface in another form , probably much cheaper and restructured , &#x27; &#x27; said john atkins , a corporate bond analyst at ideaglobal . com , a new york - based research firm . in the utility &#x27; s semi - weekly conference call with holders of defaulted socal edison debt , chief financial officer jim scilacci said tuesday afternoon there is ` ` virtually nothing the company can say &#x27; &#x27; about the private bond sale . goldman sachs &amp; co . , which sources said is arranging the bond sale , also declined to comment . edison said earlier this month it intended to use bond sale proceeds to pay down the bank credit line , as well as $ 250 million of notes due july 18 and $ 350 million due nov . 1 . mission energy holding , which edison created specifically to raise cash , was designed to be shielded from any bankruptcy of socal edison , edison or edison mission energy . some investors have said they are concerned the shield may not prove strong enough . moody &#x27; s investors service rated mission energy holding &#x27; s notes ` ` ba 2 , &#x27; &#x27; its second highest junk grade . standard &amp; poor &#x27; s , rated them ` ` bb - minus , &#x27; &#x27; one notch lower . socal edison , which has defaulted on $ 931 million of bonds and commercial paper , ran up more than $ 5 . 4 billion of debt because california &#x27; s utility deregulation blocked it from recouping its soaring wholesale power costs . it agreed in april with gov . gray davis ( news - web sites - news ) , filed for bankruptcy protection on april 6 . shares of edison closed tuesday on the new york stock exchange ( news - web sites ) at $ 11 . 24 , down 33 cents . they have fallen 28 percent this year .
</pre>

## Record 002402

**Label:** `benign`

<pre>
So then, Tim Peters  is all like:&gt; [Guido]
&gt; &gt;   ...
&gt; &gt;   I don&#x27;t know how big that pickle would be, maybe loading it each time
&gt; &gt;   is fine.  Or maybe marshalling.)
&gt; 
&gt; My tests train on about 7,000 msgs, and a binary pickle of the database is
&gt; approaching 10 million bytes.My paltry 3000-message training set makes a 6.3MB (where 1MB=1e6 bytes)
pickle.  hammie.py, which I just checked in, will optionally let you
write stuff out to a dbm file.  With that same message base, the dbm
file weighs in at a hefty 21.4MB.  It also takes longer to write:  Using a database:
   real    8m24.741s
   user    6m19.410s
   sys     1m33.650s  Using a pickle:
   real    1m39.824s
   user    1m36.400s
   sys     0m2.160sThis is on a PIII at 551.257MHz (I don&#x27;t know what it&#x27;s *supposed* to
be, 551.257 is what /proc/cpuinfo says).For comparison, SpamOracle (currently the gold standard in my mind, at
least for speed) on the same data blazes along:   real    0m29.592s
   user    0m28.050s
   sys     0m1.180sIts data file, which appears to be a marshalled hash, is 448KB.
However, it&#x27;s compiled O&#x27;Caml and it uses a much simpler tokenizing
algorithm written with a lexical analyzer (ocamllex), so we&#x27;ll never be
able to outperform it.  It&#x27;s something to keep in mind, though.I don&#x27;t have statistics yet for scanning unknown messages.  (Actually, I
do, and the database blows the pickle out of the water, but it scores
every word with 0.00, so I&#x27;m not sure that&#x27;s a fair test. ;)  In any
case, 21MB per user is probably too large, and 10MB is questionable.  On the other hand, my pickle compressed very well with gzip, shrinking
down to 1.8MB.Neale

</pre>

## Record 002403

**Label:** `benign`

<pre>
fw : a / s line agreement louise , - hello i have attached the draft of the indemnity anne sent to aep last week . this is still under discussion as aep has not yet commented on this draft . we expect to get their initial comments tomorrow after aep arrives and meets with their counsel . the a / s line resolution is now the critical path item and the note below is a discussion of the current status of the a / s line and where we want to end up with aep - - - - - original message - - - - - from : koehler , anne sent : friday , may 25 , 2001 3 : 29 pm to : michael waller cc : dkpenrod @ aep . com ; douglas eyberg ; gmprescott @ aep . com ; jwseidensticker @ aep . com ; gray , barbara ; redmond , brian ; chriscollins @ velaw . com subject : re : a / s line agreement and entex performance guarantee mike : attached hereto are ( i ) form of letter agreement regarding the handling of archived files and ( ii ) draft of a second amendment to the purchase and sale agreement reflecting the parties agreement regarding the a / s line . please review and call with any questions or comments . anne c . koehler sr . counsel , ena eb 3839 713 - 853 - 3448 &quot; michael waller &quot; 05 / 25 / 2001 01 : 01 pm to : anne . c . koehler @ enron . com cc : dkpenrod @ aep . com , gmprescott @ aep . com , jwseidensticker @ aep . com , &quot; douglas eyberg &quot; subject : re : a / s line agreement and entex performance guarantee anne : thanks for the prompt response . i have some concerns about the performance guaranty . the guaranty document covers three specific contracts ( referred to as &quot; transaction agreements &quot; ) , but those contracts are not identified in the performance guaranty by contract number . i have reviewed schedule 4 . 13 and think i have identified the three contracts as # 96019120 , # 9604582 and # 96002879 , and i note that all of these contracts are also listed as &quot; newco contracts on schedule 4 . 13 . however , the parties to these three contracts as listed in schedule 4 . 13 doesn &#x27; t match the designation of the parties in the performance guaranty . obviously the three contracts have &quot; changed hands &quot; on both sides , i . e . , seller and buyer . since the performance agreement is an existing obligation of hpl , there must be a set of records that clearly traces and memorializes the changes in the guaranteed obligations , and we must see that set of records before aep can finally determine how to address the performance agreement . obviously aep doesn &#x27; t want to create any unnecessary problems with entex as the beneficiary of the guaranty , but i want to be sure that this arrangement doesn &#x27; t need some attention in connection with the closing . if you can make the relevant records available i &#x27; ll very promptly review them and we can then decide if anything needs to be done before the closing . thanks for your help . mike michael r . waller leboeuf , lamb , greene &amp; macrae 1000 louisiana street , suite 1400 houston , texas 77002 e - mail address : mwaller @ llgm . com ( 713 ) 287 - 2015 this e - mail , including attachments , contains information that is confidential and may be protected by the attorney / client or other privileges . this e - mail , including attachments , constitutes non - public information intended to be conveyed only to the designated recipient ( s ) . if you are not an intended recipient , please delete this e - mail , including attachments , and notify me . the unauthorized use , dissemination , distribution or reproduction of this e - mail , including attachments , is prohibited and may be unlawful .
</pre>

## Record 002404

**Label:** `benign`

<pre>
Hi, I wanted to know if I could post a request for rpm on the list, or if I had
to contact Mathias directly ?
Thanks...-- 
Antoine Jacoutot
Linux - Redhat 7.3 Valhalla
ajacoutot@linuxfr.dyndns.org
http://linuxfr.dyndns.org
http://windowsfr.dyndns.org_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list
</pre>

## Record 002405

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-3,8483157,1440/
Date: Not suppliedContrary to popular belief, a new study shows women receive the same mental 
health boost from marriage as men

</pre>

## Record 002406

**Label:** `benign`

<pre>
Rohit Khare wrote:
&gt; 
&gt; Why am I so passionate about decentralization? Because I believe some of
&gt; today?s most profound problems with networked applications are caused by
&gt; centralization.
&gt; 
&gt; Generically, a centralized political or economic system permits only one
&gt; answer to a question, while decentralization permits many separate
&gt; agents to hold different opinions of the same matter. In the specific
&gt; context of software, centralized variables can only contain one valid
&gt; value at a time. That limits us to only representing information A)
&gt; according to the beliefs of a single agency, and B) that changes more
&gt; slowly than it takes to propagate. Nevertheless, centralization is the
&gt; basis for today?s most popular architectural style for developing
&gt; network applications: client-server interaction using request-response
&gt; communication protocols.I think the ability to maintain an inconsistent database
is key to decentralization. Databases enforce consistenty with every transaction.
Bounded transactions, like an ATM, enforce consistency
  by have some play with time and value
Most people keep inconsistent data in their heads, it&#x27;s
  called congnitive dissonance theory
Most businesses keep inconsistent data, documents, tationale
  and ideas to support their work activities, it&#x27;s called real life.I don&#x27;t think it matters so much where it&#x27;s located, i.e.
decentralization. I think that decentralization is the workaround
from technical limitations.  The fallout being that the only way
inconsistent information spaces can be maintained is by 
protecting them through a set of trust barriers and boundaries. 
The local information when combined with the technical
troubles of providing &quot;just enough&quot; forced synchronization
to remote information provide workable data consistenty, i.e.
enforcing local constraints or ignoring global ones when
concerns are more immedidate.  Tolerating temporary, irreconcilable deviations is how
people cope, otherwise you&#x27;d be like Nick Gatsby unnecessarily
pre-occupied with a spot of shaving cream on McKee&#x27;s neck
who thinks that if he can just wipe that spot off that the
whole world would be a little more perfect and everything,
including his pre-occupation with Daisy, would consistently
be in its proper place.Greg

</pre>

## Record 002407

**Label:** `benign`

<pre>
enron mentions enron bonds subject to market jitters , not buyout talk capital markets report - 11 / 05 / 01 market views enron takeover rumors with skepticism dow jones news service - 11 / 05 / 01 no excuses for this enron board realmoney . com - 11 / 05 / 01 this market deserves your well - placed optimism realmoney . com - 11 / 05 / 01 enron bonds subject to market jitters , not buyout talk by michael c . barr of dow jones newswires 11 / 05 / 2001 capital markets report ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) new york - ( dow jones ) - reports over the weekend that embattled enron corp . ( ene ) might be the object of a takeover bid failed to move the company &#x27; s bonds monday . on sunday , the independent in london reported that royal dutch petroleum co . ( rd ) planned to mount an $ 11 billion offering for the company . and barron &#x27; s stated that there was speculation that enron might attract takeover interest from either royal dutch or warren buffet &#x27; s berkshire hathaway inc . ( brka ) . enron &#x27; s bonds are quoted in dollar prices and not in terms of a spread in relation to treasury bond issues . a $ 74 bid and a $ 77 offer was quoted as the market for enron &#x27; s 7 - 7 / 8 % bonds of 2003 monday morning , similar to friday &#x27; s levels . &quot; the company &#x27; s bonds were quoted in the low - to mid - 70 s on friday and the rumors have not shown up in that pricing , &quot; said wayne schmidt , portfolio manager , advantus capital management , st . paul , minn . &quot; market perception and not takeover rumors impact the pricing of the bonds , &quot; said eric bergson , portfolio manager , northern trust global investments , chicago . even an enron bond with a very short time to maturity is not trading at par , traders said . the 6 . 45 % coupon bond due on november 15 , 2001 , less than two weeks away , was bid at a dollar price of 99 . &quot; some investors don &#x27; t want to own anything with a downside risk , &quot; said harold rivkin , principal , h . rivkin &amp; co . , a distressed debt brokerage firm , princeton , n . j . the bonds could lose a lot of value in that time frame , with little upside potential gain , he added . there is &quot; very little liquidity in the company &#x27; s bonds , &quot; said rivkin . enron &#x27; s bonds will follow the company &#x27; s stock movements , he added . enron closed monday at $ 11 . 03 , down $ 0 . 27 from friday &#x27; s close of $ 11 . 30 . enron officials weren &#x27; t immediately available to comment . crisis of investor confidence the houston - based energy services company has faced a crisis of investor confidence since it reported a $ 618 million third quarter loss and a $ 1 . 2 billion reduction in shareholder equity last month . and last wednesday , the company said that the securities and exchange commission had elevated to a formal investigation its inquiry into enron &#x27; s financial dealings with partnerships headed by its former chief financial officer , andrew fastow . the ratings agencies have reacted to the company &#x27; s liquidity problems brought about by the loss in investor confidence . fitch downgraded enron &#x27; s senior unsecured debt monday to triple - b - minus , from triple - b - plus . it &#x27; s now just a notch away from junk bond status . last week , standard &amp; poor &#x27; s corp . lowered the credit rating to triple - b , while moody &#x27; s investors service lowered the rating to baa 2 . shell may have interest , but royal dutch shell may have an interest in enron , say analysts . &quot; shell has a very sophisticated trading operations and has been looking to expand in north america and latin america , &quot; said tina vital , equity analyst , standard 201 - 938 - 2008 ; michael . barr @ dowjones . com copyright ? 2000 dow jones &amp; company , inc . all rights reserved . market views enron takeover rumors with skepticism by christina cheddar of dow jones newswires 11 / 05 / 2001 dow jones news service ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) new york - ( dow jones ) - with each day shedding light on new revelations about enron corp . &#x27; s ( ene ) financial dealings , it is difficult to put odds on the company as a takeover target . but speculation has been persistent that royal dutch / shell group may use enron &#x27; s weakened position to launch either a friendly or hostile takeover . over the weekend , the british newspaper , the independent , fanned the flames of speculation again by saying that shell was expected to offer $ 11 billion for the houston energy trader . a shell spokesman wasn &#x27; t immediately available . surely , enron &#x27; s thousands of miles of pipeline assets would provide a company such as the anglo - dutch oil giant with a great advantage in the u . s . natural gas market , where shell has maintained it wants to increase its presence . however , a great deal of study would be needed to uncover the potential liabilities lurking in the company &#x27; s financial structure . enroll has used a web of off - balance sheet financing vehicles to fund its growing business and preserve its credit rating thereby lowering its borrowing costs . some have also alleged the company used the structure to shift losses off its balance sheet . several arbitrageur traders said it is unlikely a conservative company such as shell would want to make an acquisition while a securities and exchange commission investigation is pending . as for enron &#x27; s core franchise - its energy marketing and trading business - it could be easily argued that the most valuable asset there is enron &#x27; s staff . as a result , it would help if deal were friendly because such a transaction could protect against the attrition sometimes associated with hostile transactions . shell has been growing its own position in the wholesale energy marketing and trading sector through its coral energy unit , and the acquisition of enron could give it instant clout in the market . also , shell &#x27; s strong balance sheet would provide the market will necessary assurance of creditworthiness . traders and those who follow corporate mergers and acquisitions agreed it would be better for any prospective buyer to wait it out until the situation calmed and more details of enron &#x27; s business are uncovered . a growth - fund manager , who requested anonymity , also said it is important to know where the rumors are coming from given the decline in enron &#x27; s stock price . he speculated that some hedge fund managers might be attempting to use the rumor to stir up interest in the battered stock . enron shares recently traded at $ 11 . 14 , down 16 cents , or 1 . 4 % . the stock began the day in positive territory , and traded as high as $ 12 . 20 intraday . the stock has declined more than 60 % since the company in mid - october posted a third - quarter charge of more than $ 1 billion . the company also later disclosed an additional $ 1 . 2 billion reduction in shareholders &#x27; equity caused by the early termination of controversial outside partnerships run by its former chief financial officer andy fastow . in the weeks that followed the disclosure , enron &#x27; s credit rating was downgraded by moody &#x27; s investor service , standard 201 - 938 - 5166 ; christina . cheddar @ dowjones . com copyright ? 2000 dow jones they are very smart and very wise to the ways of wall street , main street and the oil patch . norman blake is a gent i met years ago at usfg , before he sold it at a huge profit . this man has recently served as ceo of comdisco , a leasing company that is not only comfortable with debt and financing , it is wallowing in it . blake has general electric training . this man can smell things that are not so right from miles away . where was he in all of this ? stuck in comdisco hell ? ronnie chan is a longtime kingpin in hong kong , a place where financial originality is always on display . chan certainly would have understood how unseemly all of these 17 partnerships would have appeared . he &#x27; s seen everything over in kong . john duncan is an energy investment guy , a director of eott energy , and a seasoned pro who knows oil and gas financing and accounting . again , very sophisticated . wendy gramm regulated derivatives . she was the chairman of the cftc and a director of the chicago mercantile exchange . how could she not have spotted this obvious conflict and probed what these partnerships entailed ? that was part of her old job . robert jaedicke was a professor of accounting at stanford business school , where he was also dean . this guy wrote the book on this stuff and really should have seen it coming . ( i am skipping ken lay , the ceo . ) charles lemaistre and john mendelsohn , two execs from the university of texas m . d . anderson cancer center , can &#x27; t be expected to catch this stuff , and therefore gets a pass from me . paulo ferraz pereira is a former president and chief executive officer of the state bank of rio de janeiro . that &#x27; s probably put him in more than his fair share of difficult financial situations . how could he not raise a word about it ? frank savage serves as chairman of alliance capital management international , perhaps the most sophisticated company in the world of money management . i am sure savage never saw a situation as bad as enron &#x27; s looking through his own company &#x27; s portfolio of investments . jeffrey skilling , the man who resigned as ceo , needs to be heard from . we know that he is a director of the houston branch of the federal reserve bank of dallas , a sinecure that slouches and undervigilant execs don &#x27; t get hold . what did he know and when did he know it ? john wakeham , lord wakeham to everybody , is perhaps the most financially sophisticated brit to serve in parliament . he managed a large private practice as a chartered accountant . he &#x27; s big and powerful and smart . herbert winokur is a longtime financial hand who also has run investment partnerships and used to serve as a director of penn central , a place that saw more than its share of ups and downs and tricky financial situations . in short , this is the most sophisticated , hands - on group of folks i have come across . i can &#x27; t believe they checked off on this stuff . i have to believe they didn &#x27; t know , or if they knew of the partnerships , i believe they had no idea what they were doing . i want so badly to presume that these partnerships were simply set up to take down a lot of debt and not hurt enron &#x27; s credit rating with the agencies - - not that that &#x27; s such an ethical setup . but at least it makes me think that the board might have been confused or not focused because it would have seemed unimportant , as they might not have known how big and how extended the partnerships were . still , let &#x27; s not fool ourselves . this was a powerhouse , fantastic , upright board of people who know a thing or two . i can &#x27; t believe they let this stuff occur . i think they knew nothing . which is pretty terrible in its own right . this market deserves your well - placed optimism by james j . cramer &gt; realmoney . com 11 / 05 / 2001 10 : 32 am est url : &gt; d ? j ? vu circa 1991 . that &#x27; s what i keep thinking about . i recall that time vividly . bank of boston , chase , chemical , citibank , they all started rallying . we bears would call each other and joke about it . we would say that it was a ridiculous move , that it should be shorted and shorted aggressively , because there was no way that any of these banks would make it . heck , bank of boston was teetering on insolvency . citibank was technically bankrupt already . the jim grants of the world ( more powerful now than they were then because he didn &#x27; t have as many years of being dead wrong but erudite under his belt ) would be alerting everyone to the absurdity of the common stocks of the banks rallying . i would call the analysts , and they wouldn &#x27; t know anything either - - the ones who liked the banks all the way down , who still liked them and who had no credibility at all . the ones who hated them didn &#x27; t want to get off the winning horses . they didn &#x27; t know that the race was over and that a new one had begun . or , to put it the brutal way that i now know was right : no one with a brain was long any of these . turns out , of course , that brains were one of those commodities that was wildly overvalued at the bottom . what you had to do was check your skepticism and embrace optimism , because at certain points in history optimists get it right . that &#x27; s how i feel about this market . i think the time to be skeptical was before all of the damage occurred . i think we will look back at this period and say the following : the great bear market started in march 2000 and was continuing to run rampant until sept . 11 , the crisis that triggered a massive influx of liquidity and lower interest rates that turned things around . most of the brains at the time were thinking that nothing really could change and that we were going to slide into a japanese recession or that no turn would ever come . they were wrong , just like they were in 1991 . we get so caught up in the &quot; is cisco bottoming ? &quot; or &quot; is intel breaking out ? &quot; minutiae that we forget that the market has been pretty good for some time now , pretty good since that crescendo selloff two months ago . you would think that we &#x27; d have converted more bears to bulls by now , but like in 1991 , it didn &#x27; t happen until well into the turn . don &#x27; t confuse my optimism with some cold hard realities . i think that , for example , xo communications is going to fail , and when it does , there will be the requisite selloff and setbacks to tech . i think that mcleod is going to fail and we will see the same . there are a ton of companies that won &#x27; t get through this period , just like there were a ton of banks and savings and loans that failed long after the turn came in 1991 . and i reserve the right to hate individual stocks . i can &#x27; t get my arms around how ford comes back ; i don &#x27; t understand the enron fiasco at all . i am not even sure that qwest can staunch the bleeding . but that doesn &#x27; t make me bearish . understand that i am strictly a pavlovian creature . had i not lived through the giant financial short squeezes of late 1990 and early 1991 , had i not personally been &quot; bought in &quot; on a half - dozen banks i was shorting and had i not later on seen those banks get big bids from super - regionals not long after i , too , would be suspicious and want to bet against the market . i can &#x27; t , though , because my capacity for loss remembrance is so much greater than my ability to remember my wins that the pattern stays in my head like a hot stove that i don &#x27; t want to get burned by again . believe me , i am a cold - blooded individual about these things . if i thought the short side was the right side here , i would be all over it . we have had a huge bounce off the bottom ; there would be nothing &quot; unpatriotic &quot; about saying &quot; get out now . &quot; but i don &#x27; t think that &#x27; s right . i think this market &#x27; s going to keep working here . if it doesn &#x27; t , people will email me and harangue me and make fun of me , and i will say , c &#x27; est la vie , i took a stand ; it was wrong . taking stands , however , is what it is all about . knowing your context and making money with that context is what i do and have done for 20 years . if you don &#x27; t have a context , if you don &#x27; t have a view , there &#x27; s only one thing to do : give your money to others who do . random musings : glenn curtis &#x27; s era of value newsletter has been making me money . when something makes me money i talk about it . check it out here . curtis and gary b . smith both are doing some terrific things . understand , i get all of the newsletters out there . i see the hype that a navallier or a murphy puts out and i want to puke . this stuff is nothing like that , nothing at all . it is honest , candid and doesn &#x27; t guarantee that you will shoot the lights out , like those who you know can &#x27; t . . . on my radio show , it &#x27; s mutual fund monday , where we will fix your 401 ( k ) ) . call me at 1 - 800 - 862 - 8686 from 3 p . m . to 4 p . m . et .
</pre>

## Record 002408

**Label:** `benign`

<pre>
http://media.guardian.co.uk/broadcast/comment/0,7493,781769,00.htmlHamza&#x27;s horrid - but we must tolerate himRod Liddle
Wednesday August 28, 2002
The GuardianSheikh Abu Hamza al-Masri, our maddest of mad mullahs and a cartoon bogeyman
to scare the kiddies, spent a quiet and contemplative bank holiday playing
with his own children in Victoria Park, Hackney.
I&#x27;ve often wondered what incendiary Islamic fundamentalist clerics do on
statutory public holidays. Head for the beach and maybe swing by B&amp;Q on the
way home, I had hoped. I had this beguiling vision of Hamza paddling in the
sea, an ice-cream cone in his one good hand, the waves tickling his shins,
and the sheikh mentally preparing to fix those pesky shelves in the kitchen
for once, instead of planning the extermination of Zionism and America and
maybe me and you, too.
But B&amp;Q and a day at the seaside is probably beyond Hamza&#x27;s budget since the
Bank of England froze his assets, so Victoria Park had to do. But he sounded
happy enough when I spoke to him, with the babble of tiny, cheerful, Islamic
proto-warriors in the background.
You must know Hamza; he&#x27;s the imam designed, it would seem, by the Daily
Mail&#x27;s cartoonist Mac. Large metal hook in place of a left hand. One eye
covered by a patch, the other a baleful, watchful, milky-white. We don&#x27;t
mock the disabled any more these days, unless it&#x27;s someone like Hamza whom
we don&#x27;t like; then, if you&#x27;ll excuse the inapt phraseology, the gloves come
off. So Hamza is known (with that vaulting imagination typical of the
British right) as &quot;Captain Hook&quot;, in articles which usually call for his
arrest, or extradition to the US, or deportation back home to Egypt or maybe
off to Pakistan or Afghanistan, where he fought the Russians for years and
thus sustained his disabilities - anywhere, really; just out of here. And if
we can&#x27;t lock him up or chuck him out of the country, maybe we can force him
to shut up.
Because we don&#x27;t like Hamza very much. We weren&#x27;t that fond of him before
September 11, but afterwards, in that nervy, paranoid few months when we all
thought the sky might fall in, our disapprobation turned into political
persecution.
And now the Daily Mirror is agitating again for his arrest because they&#x27;ve
got hold of secret videos of the man behaving in an even more inflammatory
manner, urging warfare on and looting of enemies of Islam. All out of
context, and a very long time ago, says the imam, not unduly bothered. But
perhaps he should be, because our reputation for broad-mindedness and
tolerance towards people like Hamza was thinning even before the Mirror&#x27;s
scoop.
Hamza preaches, or preached, at the scary Finsbury Park Mosque - so, earlier
this year, the Charity Commissioners banned him from doing so because of his
allegedly inflammatory remarks. I didn&#x27;t know Charity Commissioners were
meant to do stuff like that.
He has had his passport seized and not returned; his assets have been
frozen. He is tailed by the police every now and then, and his access to the
media is restricted by internal policing within broadcasting corporations
and the press. And this last point is because, we tell ourselves, endlessly
- repeating the mantra over and over again, and fervently wishing it to be
true - Hamza is not &quot;representative&quot; of British Muslims, as if British
Muslims were a simple, homogenous thing with a single voice that one could
turn to every now and then for explanation. And perhaps succour.
The trouble is, in the first month or so after the twin towers attack he was
revealed to be rather more &quot;representative&quot; than the list of those
government-approved Muslim spokesmen who were - uncomfortably, I suspect -
dragooned briefly into statements of support for the war against terrorism
and a blanket condemnation of the Taliban.
An opinion poll commissioned by Radio 4&#x27;s Today programme revealed that an
overwhelming majority of British Muslims were against George Bush&#x27;s crusade.
One in six were, to put it mildly, ambivalent about the attack on the US
(the remainder condemned the attack unequivocally). A large majority thought
the war against terrorism was a war against Islam.
Which is what Hamza said, repeatedly. But it was something that, at the
time, we didn&#x27;t want to hear. Now, if you quiz the man on present policy at
home and abroad he comes across - superficially, at least - as someone from
the liberal left. No war against Iraq; Britain to become independent of US
foreign policy and attempt rapprochement with Arab states; stronger action
against Israel; mistrust of global capitalism; redistribution of wealth.
Nor is he particularly anti-semitic, so far as I can tell, although I don&#x27;t
suppose he will be holidaying in Eilat this year. In yesterday&#x27;s Guardian,
the chief rabbi expressed a willingness to talk to Hamza and was grateful
for the sheikh&#x27;s message of condolence when a London synagogue was attacked.
Which is not to say that Hamza is a peaceable Jeffersonian democrat who has
been wilfully misrepresented: he is, without question, rather more
inflammatory in private sermons to his own people than he is in public. His
ideology is an arid and uncompromising interpretation of Islam: he would be
happy, in a truly Islamic society, to stone women to death for adultery, for
example. You and I would find many - perhaps most - of his views utterly
repellent.
And that&#x27;s the point. Because Hamza is the true test of our apparent desire
to be multicultural. Multiculturalism is not, surely, the cheerful
appropriation of bits of inoffensive minority cultural behaviour by the
ruling hegemony. That is a sort of syncopated monoculturalism.
Multiculturalism is, rather, the ability of society to tolerate views that
are antithetical to the dominant culture - and maybe learn from them.
The FBI has been investigating Hamza, but, of course, has found nothing
remotely incriminating. The real reason for his vilification and persecution
is simply the pungency of his views.
It is often said that we should shut him up or arrest him because his
rhetoric increases hostility against the Muslim population generally. This
is a perfectly noble argument, but it does not wash.
You don&#x27;t defuse a difficult situation by pretending it doesn&#x27;t exist. And
if British Muslims - maybe a minority, maybe not - feel a growing sense of
unease or mystification at the direction of western foreign policy, it is
not because they have been led in that direction by Hamza. Shutting the man
up, therefore, won&#x27;t make a difference.
It is rather as Louis MacNeice had it:
The glass is falling hour by hour, the glass will fall for ever.
But if you break the bloody glass, you won&#x27;t hold up the weather.
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
4 DVDs Free +s&amp;p Join Now
http://us.click.yahoo.com/pt6YBB/NXiEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002409

**Label:** `benign`

<pre>
Hi,
this is my first problem with one of the freshrpms rpms ...
I just upgrade mplayer and now I get$ mplayer 
mplayer: error while loading shared libraries: libdvdnav.so.1: cannot open shared object file: No such file or directoryI guess Matthias has forgotten libdvdnav dependency.-- 
They told me I needed WIN95 or better
So I chose Linux!_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002410

**Label:** `benign`

<pre>
am a (tv)twm user. when I snarf text into my mouse cut buffer, and then attempt to inject it into the exmh input windows for comp/repl, the &#x27;point&#x27; is often an apparently random place in the text pane, not where I think I have current flashing cursor. I usually wipe out any of To:/Subject:/ with the text. Its often not even beginning of line denoted, ie its an unexplicable number of char spaces in to the text where it inserts, What am I doing wrong in either X, WM, shell, EXMH which is causing this?cheers -George_______________________________________________ Exmh-users mailing list Exmh-users@redhat.com https://listman.redhat.com/mailman/listinfo/exmh-users
</pre>

## Record 002411

**Label:** `benign`

<pre>
singapore query on behalf of a friend who has been offered a teaching position at the national university of singapore , i &#x27;d like to ask 2 questions . 1 . does anyone have experience living in singapore or teaching at nus ? 2 . if so , could you tell me about your experience ? insights , suggestions , or special considerations would be welcome . please address a reply to jherman @ epas . utoronto . ca thanks .
</pre>

## Record 002412

**Label:** `benign`

<pre>
enron / hpl actuals for december 13 , 2000 teco tap 37 . 500 / hpl gas daily ls hpl lsk ic 30 . 000 / enron
</pre>

## Record 002413

**Label:** `benign`

<pre>
les temps du passe francais et leur enseignement atelier international les temps du passe francais et leur enseignement 24 et 25 mars 1999 aston university ( birmingham , angleterre ) les formes du passe constituent un ecueil pour l &#x27; apprentissage du francais langue etrangere ; meme les apprenants des niveaux les plus eleves echouent a matriser leur emploi . si le manque d &#x27; equivalence forme a forme entre les temps des langues constitue une difficulte evidente , la complexite semantique et distributionnelle des tiroirs francais ne doit pas etre negligee . grammairiens et linguistes se sont efforces de fournir des descriptions des tiroirs du passe mais leur travail , comme celui des didacticiens , s &#x27; est revele inegal . cet atelier international a pour but de faire le point sur les problemes d &#x27; analyse que posent les temps du passe en francais . l &#x27; atelier invitera a la reflexion critique sur les descriptions existantes des temps et leur enseignement . seront envisagees la structuration du systeme et la constitution des tiroirs du point de vue synchronique , evolutif ou contrastif , a partir de corpus de differentes varietes de francais . on considerera en parallele l &#x27; enseignement de ces notions a des apprenants du francais langue etrangere et maternelle dans les diverscontextes de l &#x27; acquisition : en classe , par voie electronique , aux etapes de production ou de revision , par exemple . un certain nombre de specialistes internationaux ont deja confirme leur participation a la suite d &#x27; un premier appel de communication , et le resume de leur contribution est accessible a l &#x27; adresse internet suivante : http : / / www . les . aston . ac . uk / aticonf . html les chercheurs interesses a contribuer a l &#x27; atelier doivent envoyer une proposition de communication consistant en un resume anonyme de 250 mots et en une fiche indiquant le titre de la presentation , le nom de l &#x27; auteur , son affiliation et ses coordonnees ( adresse , telephone , telecopieur , courriel ) . elles devront parvenir avant le 1er fevrier 1999 a : emmanuelle labeau et pierre larrivee school of languages and european studies aston university aston triangle birmingham b4 7et royaume uni telecopie : ( 0 ) 121 359 3653 e . labeau @ aston . ac . uk p . larrivee @ aston . ac . uk veuillez de plus noter que nous suggererons aux contributeurs retenus de remettre une version ecrite de leur contribution avant l &#x27; atelier pour circulation entre ses participants au debut du mois de mars 1999 . a ce titre , les propositions de communication par affichage seront considerees . les contributions a l &#x27; atelier seront reunies pour publication .
</pre>

## Record 002414

**Label:** `benign`

<pre>
re : meter 0980438 - acock production ? ? ? ? ? ? vance , thank you for the information . that explains the deal . what we need now , to correctly book these volumes and clear any current issues in volume management and / or settlements which would date back to the inception of the deal . this will also ensure that your book is correct for this deal . i think that bob cotten is the one to correct / add the deal , and then tom acton and myself will need to make requests of volume mgmt . to kick - off the re - booking process . thank you for your time , mary ext . 35251
</pre>

## Record 002415

**Label:** `benign`

<pre>
accuracy of historical reconstruction in writing in linguist 5 . 1393 on another topic , martinha @ fub46 . zedat . fu-berlin . de ( martin haspelmath ) says : ) it is true that latin syntax could hardly be reconstructed from ) modern romance languages , but neither could latin morphology , and ) even the view of latin phonology that we would get from romance is ) very distorted . our reconstruction of protolanguage grammar is ) always imperfect . . . in looking at historical reconstruction done for s . american languages ( largely phonological ) , i &#x27; ve often wondered about this . just how much could we trust the reconstructions that we did ? one of my rules of thumb for those languages was that if an item was longer than one syllable , it was suspect as being polymorphemic , and if it was longer than two syllables it was almost certainly polymorphemic . the problem is that most attempts at reconstruction ignored this areal phenomenon ( sometimes because the data was simply unavailable ) . from what i know of romance languages , i would say polysyllabic morphemes are more common there . if anything , that should make it easier to reconstruct latin , since you have more to work with . ( of course , the morphology of romance languages is much better known than that of the languages of s . america , which also helps ! ) so if latin would be very imperfectly reconstructed , what hope is there for native american languages ? has anyone ever attempted , as an exercise in the comparative method , reconstruction of latin from the romance languages , then compared the results with the real thing ? or reconstruction of any other attested language from its descendents ?
</pre>

## Record 002416

**Label:** `benign`

<pre>
vince kaminski &#x27; s itinerary - week of 9 / 30 - 10 / 7 / 00 professor martin : attached is vince &#x27; s itinerary . let me know if you need anything else . - - - - - - - - - - - - - - - - - - - - - - forwarded by shirley crenshaw / hou / ect on 09 / 27 / 2000 11 : 24 am - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski 09 / 27 / 2000 10 : 45 am to : &quot; john d . martin &quot; @ enron cc : shirley crenshaw / hou / ect @ ect , vince j kaminski / hou / ect @ ect subject : re : hello vince john , i shall be in paris and london next week . we can schedule a call sometimes next week . i shall ask my assistant to send you my itinerary . a late call ( paris time ) would work for me . the time difference is 6 hours . this would mean a call sometimes around 3 - 4 p . m . our time . please , indicate which day works best for you . vince &quot; john d . martin &quot; on 09 / 27 / 2000 09 : 45 : 50 am to : vince . j . kaminski @ enron . com cc : subject : re : hello vince vince , good morning . unfortunately i &#x27; ll be in milwaukee visiting harley - davidson about a book revision project both thursday and friday . how about early next week . i appreciate your patience with me . when you suggested a time last week i was &quot; unprepared &quot; and embarassed to call and expose my ignorance . since then i have re - read the enron gas services case and have a pretty good feel for how you guys have melded the physical and financial sides of the business . the other theme that i have heard many enron speakers use is the &quot; de - regulation &quot; of markets . this certainly played a factor in the power business and presumeably was behind the water business . if you &#x27; ll let me know when it &#x27; s convenient to call next week i &#x27; ll have some notes put together . i &#x27; m teaching a class for a colleague on monday so anytime after that is great . thanks and hope you had a pleasant trip . john p . s . i saw that the univ of new orleans has an energy finance endowed chair for a financial economist open . if you ever decide to move back to the life of poverty of an academic i would love to recommend you for such a post . at 08 : 26 am 9 / 27 / 00 - 0500 , you wrote : &gt; &gt; john , &gt; &gt; what about thursday , 10 : 30 a . m . ? i have just come back from europe &gt; last night and i am trying to organize my schedule for the next few days . &gt; &gt; my phone number is 713 853 3848 . &gt; &gt; &gt; vince &gt; &gt; &gt; &gt; &gt; &gt; &gt; &quot; john d . martin &quot; on 09 / 22 / 2000 01 : 57 : 47 pm &gt; &gt; to : vkamins @ enron . com &gt; cc : &gt; subject : hello vince &gt; &gt; &gt; vince , &gt; &gt; can i call you tuesday morning about our writing project ? i have to be in &gt; austin for a dental appointment on monday at noon and that will probably &gt; wipe out the day . give me a time and number where i can reach you . &gt; &gt; john &gt; &gt; &gt; john d . martin &gt; carr p . collins chair in finance &gt; finance department &gt; baylor university &gt; po box 98004 &gt; waco , tx 76798 &gt; 254 - 710 - 4473 ( office ) &gt; 254 - 710 - 1092 ( fax ) &gt; j _ martin @ baylor . edu &gt; web : http : / / hsb . baylor . edu / html / martinj / home . html &gt; &gt; &gt; &gt; john d . martin carr p . collins chair in finance finance department baylor university po box 98004 waco , tx 76798 254 - 710 - 4473 ( office ) 254 - 710 - 1092 ( fax ) j _ martin @ baylor . edu web : http : / / hsb . baylor . edu / html / martinj / home . html
</pre>

## Record 002417

**Label:** `benign`

<pre>
sum : representing retroflex summary : representing retroflex at the beginning of the month i posted a query that asked for information on an alternative way of representing retroflexed segments as dorsalized coronals instead of [ - anterior ] . warm thanks to those who responded : philip hamilton phamilto @ epas . utoronto . ca richard desrochers desrochr @ ere . umontreal . ca wechsler wechsler @ world . std . com suzanne urbanczyk suzanne @ oitunix . oit . umass . edu mark verhijde mark . verhyde @ let . ruu . nl stig eliasson stig . eliasson @ ling . uu . se here is a list of annotated references followed by contributors &#x27; excerpts on the following topics : 1 . against dorsalization 2 . origins of coronal domination of retroflex : sanskrit evidence 3 . phonetic features of retroflex blevins 1994 . course notes from the 1994 australian linguistic institute . cho , y . 1990 . parameters of consonantal assimilation . phd thesis stanford about sanskrit retroflexed elements . the claim made here is that retroflexation equals the formation of segments that contain two place nodes , cor and dor , i . e . what some have defined as a &quot; complex &quot; place . interestingly , in assuming retroflexed segments as having two place nodes , some neutralization effects at right word edges fall out quite naturally . ( verhijde ) dixon no title given . 1980 . languages of australia assumes a feature [ + retroflex ] , as does hamilton &#x27;s 1993 toronto paper . eliasson , stig 1986 . sandhi in peninsular scandinavian . in : henning andersen ( ed . ) , sandhi phenomena in the languages of europe , 271-300 . berlin : mouton de gruyter . postalveolarization or retroflexion is a most important sandhi process in swedish and norwegian , and the major part of the above article is devoted to that problem . ( eliasson ) gnanadesikan , amalia no title given . nels 24 1993 . the feature geometry of coronal subplaces . university of massachusetts occasional papers in linguistics 1993 she argues against the feature [ anterior ] for defining coronals . i believe that retroflexes are represented as [ - distributed ] [ + back ] where [ back ] is dorsal . ( urbanczyk ) hamilton , philip 1993 . no title given escol 93 paper on coronal articulation 1993 . no title given toronto working papers in linguistics 1993 . keating , patricia 1991 . coronal places of articulation in the special status of coronals , paradis and prunet , eds . phonetic clues on coronal articulations prince &amp; smolensky 1993 : 179 , citing kirchner &#x27;s university of maryland ma thesis . 1 . against dorsalization hamilton : i am currently working on a paper where i argue against dorsalisation more fully , based on a variety of evidence : retroflexes are transparent to + back vowel harmony ; all of the evidence for interaction between retroflexes and back vowels is from very low level phonetic facts ( there are no lexical alternations backing front vowels : / rti / going to [ rtu ] ) and there is never _ neutralisation _ of a lexical back / front contrast conditioned by retroflexes , all that is attested is that front vowels have backed allophones when beside a retroflex ; retroflexes are based represented with a feature dependent on an apical node , since the lack of heteroganic apical clusters may be elegantly expressed with an ocp constraint on adjacent apical nodes . 2 . origins of coronal domination of retroflex : sanskrit wechsler : the presently-orthodox account of retroflection being dominated by the coronal node receives a lot of its support from the sankrit &quot; rnati &quot; rule . in this rule , if i recall it correctly , n - &gt; rn anywhere to the right of a retroflex consonant , but intervening non-nasal alveolars block the rule . this kind of interaction between retroflection and the coronal node appears in other places as well ; the one i &#x27; ve studied is in warlpiri , where historically there was a rule that partially unretroflexed a retroflex stop unless it was closely followed by another retroflex . there are other reasons why you might want to avoid involvement with the dorsal tier - - all the vowels live there , and you would have to explain why they are transparent to assimilations involving anteriority . a 3 . phonetic origins desrocher : ladefoged ( 1974 [ 1971 ] : preliminaries . . . ) speaks of retroflexes ( rxs ) as apical postalveolar and gives the example of ewe . he adds : &quot; in some south asian languages the retroflex consonant involve only the tip of the tongue and the back of the alveolar ridge , whereas in others there is contact between a large part of the underside of the tongue tip and much of the forward part of the hard palate &quot; and elsewhere , he speaks of the &quot; extremely retroflex sounds which occur in some indo - aryan languages &quot; ( hindi , gujerati , penjabi , and so on , i guess ) and when characterizing everything with the spe features , describes rxs as [ - ant , + cor , + high , - back , - low , - dist ] . spe refers to zwicky ( 1965 , his dissert . ) as describing convincingly sanskrit s . as [ - ant ] ( actually , [ - comp ] ) and spe seems to favor the natural class apicals + rxs [ - dist ] as opposed to laminals + non - rxs [ + dist ] . they refer for these matters to ladefoged 1964 a phonetic study of w - afr languages , and maintain that distinction between dentals and rxs support a [ dist ] feature . malmberg ( 1974 , manuel de phonetique generale ) writes that rxs are produced with the tongue markedly curved backwards towards the hard palate , but his diagram , as ladefoged &#x27;s , indicates that this the very front of the palate , or the back of the ridge , that is touched by the apex , and mentions south - italians dialects and of course , india . hockett 1958 makes an interesting comment : he says that the same acoustical effect than in the rx in &quot; bird &quot; is achieved by some english speakers not by curling back the tip , but by a &quot; peculiar contour of the central part of the tongue , the tip being held behind the lowe teeth &quot; . further comments , corrections , and questions welcome - - beau
</pre>

## Record 002418

**Label:** `benign`

<pre>
On Fri, 6 Sep 2002, Eugen Leitl wrote:&gt; On Thu, 5 Sep 2002 bitbitch@magnesium.net wrote:
&gt; 
&gt; &gt; If guys still have silly antequated ideas about &#x27;women&#x27;s role&#x27; then
&gt; &gt; their opportunities for finding women _will_ be scarce.  
&gt; 
&gt; What is silly and antiquated depends a lot on which country you live in.It also depends on what the fad is or what is in style.  (:&gt; I don&#x27;t have statistics on the love half life, but it seems long-term 
&gt; relationships use something else for glue.
&gt; 
&gt; Clearly our non-silly non-antiquated ideas about relationships have
&gt; resulted in mostly short-duration relationships and single-parented,
&gt; dysfunctional kids (not enough of them too boot, so to keep our
&gt; demographics from completely keeling over we&#x27;re importing them from places
&gt; with mostly silly and antiquated ideas).Actualy our silly antiquated ideas about relationships and love have 
resulted in the bleedings of many upon many a page (and musical  instrumnet, 
and canvas)  What&#x27;s the problem if we dash a little Mrs. Dash on them?  (:  
Or cayenne.  Or ginger. (mm ask me about ginger root play).  And let me tell you this: just because a child happens to be 
single-parented (what a word), does not mean that child is dysfunctional 
or lives in a dysfunctional home.  The govt/media/church has tried to make 
it look like there is a disintegration, when in fact, there is a coming 
together of other family members and friends to raise children.  It&#x27;s not 
decaying -- it&#x27;s changing.  Nothing wrong with change.
&gt; At least from the viewpoint of demographics sustainability and
&gt; counterpressure to gerontocracy and resulting innovatiophobia we&#x27;re doing
&gt; something wrong.
&gt; 
&gt; Maybe we should really go dirty Tleilaxu all the way.
&gt; Maybe y&#x27;all should buy m-w some more bandwidth.
C
-- 
&quot;I don&#x27;t take no stocks in mathematics, anyway&quot; --Huckleberry Finn

</pre>

## Record 002419

**Label:** `benign`

<pre>
enron mentions enron taps $ 3 billion from bank lines in pre - emptive move to ensure liquidity - - - firm will pay debt , keep cash cushion the wall street journal , 10 / 26 / 01 deals &amp; deal makers : enron officials sell shares amid stock - price slump the wall street journal , 10 / 26 / 01 enron &#x27; s financial troubles reverberate to bonds with poor liquidity and credit - rating concerns the wall street journal , 10 / 26 / 01 most analysts remain plugged in to enron the wall street journal , 10 / 26 / 01 enron draws down $ 3 bln in credit to boost investor confidence bloomberg , 10 / 26 / 01 enron liked by analysts despite complicated dealings , wsj says bloomberg , 10 / 26 / 01 enron draws down $ 3 billion from its credit lines , wsj reports bloomberg , 10 / 26 / 01 action by enron halts stock &#x27; s fall houston chronicle , 10 / 26 / 01 corporate us on track for bailout the guardian , 10 / 26 / 01 harvey pitt &#x27; s s . e . c . : from guard dog to friendly puppy ? the new york times , 10 / 26 / 01 enron draws down at least 1 bln usd from credit lines to boost mkt confidence afx news , 10 / 26 / 01 the five dumbest things on wall street this week thestreet . com , 10 / 26 / 01 stocks post gains after a rough morning the washington post , 10 / 26 / 01 sudhakar will head enron probe panel the times of india , 10 / 26 / 01 enron taps $ 3 billion from bank lines in pre - emptive move to ensure liquidity dow jones business news , 10 / 25 / 01 enron chief executive resigns from board of i 2 technologies associated press newswires , 10 / 25 / 01 as enron &#x27; s woes unnerve investors about energy sector , analysts say its problems are isolated associated press newswires , 10 / 25 / 01 enron &#x27; s credit outlook downgraded to negative by s no calif pwr contract talks dow jones energy service , 10 / 25 / 01 spector , roseman &amp; kodroff , p . c . files class action suit against enron corporation pr newswire , 10 / 25 / 01 tgs q 3 net profit up 22 pct yr - on - yr on higher ngl sales , transport revenues afx news , 10 / 25 / 01 enron draws down credit facility dow jones news service , 10 / 25 / 01 enron employees watch options devalue as shares fall ( correct ) bloomberg , 10 / 25 / 01 enron taps $ 3 billion from bank lines in pre - emptive move to ensure liquidity - - - firm will pay debt , keep cash cushion by wall street journal staff reporters john r . emshwiller , rebecca smith and jathon sapsford 10 / 26 / 2001 the wall street journal cl ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) enron corp . drew down about $ 3 billion , the bulk of its available bank credit lines , in a bid to restore confidence in its financial strength and liquidity . enron will use part of the money to offer to redeem about $ 1 . 85 billion of outstanding commercial paper - - short - term corporate ious - - according to a person familiar with the matter , with the remainder providing the energy concern with a cash cushion . some observers believe the move is a pre - emptive step by enron to ensure that it had adequate liquidity should its access to bank lines be interrupted . the person also said enron was talking to its banks about a new , multibillion - dollar credit line . enron insists its business operation and financial condition remain strong . but , &quot; when the market is reacting as irrationally as it has been the last few days , we thought that cash was better than a commitment from a bank , &quot; said an enron spokesman . in a statement , the company &#x27; s new chief financial officer , jeff mcmahon , said that by drawing down the bank lines , &quot; we are making it clear that enron has the support of its banks and more than adequate liquidity to assure our customers that we can fulfill our commitments . &quot; the move underscored the tumultuous conditions that have been sweeping over the houston energy - trading concern in the past 10 days . enron is the nation &#x27; s largest energy trader and is a principal in nearly one - quarter of all electricity and natural - gas trades . yesterday , for example , enron was involved in about $ 4 billion of deals through its enrononline unit . since early last week , enron &#x27; s share price has plummeted 50 % . last week , it reported a $ 618 million third - quarter loss and a reduction in shareholder equity of $ 1 . 2 billion . it also disclosed that the securities and exchange commission is conducting an inquiry into billions of dollars of transactions it did with entities connected to its former chief financial officer , andrew s . fastow , who was replaced wednesday . the draw - down of the credit facilities came as one rating agency , fitch , put enron on review for a possible downgrade , while another , standard it takes time to sell assets , particularly in today &#x27; s slower economy . the company also is suffering from a string of disclosure controversies that have damaged its credibility , particularly in connection with its dealings with mr . fastow , the former chief financial officer . internal documents related to one of the fastow partnerships disclose that enron also did as much as hundreds of millions of dollars of business with an entity connected to another company official , who has since left enron . while enron disclosed its fastow - related transactions in sec filings , a computerized search of the sec &#x27; s database of public filings produced no reference to this other employee - related entity known as chewco . chewco was established in 1997 &quot; with approximately $ 400 million in capital commitments &quot; to buy an interest in enron assets , according to one of the partnerships documents . the document didn &#x27; t further specify what assets were purchased , and it didn &#x27; t disclose the financial impact of the transactions for either chewco or enron . chewco was being run by michael kopper , a managing director in enron &#x27; s global equity markets group , according to the document . enron , which has maintained that its complex financial transactions with employee - related entities were legal and properly disclosed , didn &#x27; t have any comment regarding its dealings with chewco . mr . kopper , who enron says left the company this year to focus on helping to run the fastow - related partnerships , didn &#x27; t return phone calls . a person at his office in houston yesterday said mr . kopper was traveling . in response to questions about chewco , an enron spokesman would say only that &quot; michael kopper was never an executive officer of enron . &quot; mr . fastow repeatedly has declined interview requests . he severed his relationships with the partnerships in july . this statement is an apparent reference to sec disclosure regulations regarding related - party transactions . under sec rule s - k , a company has to report any transaction that exceeds $ 60 , 000 and involves &quot; any director or executive officer . &quot; by contrast , mr . fastow , as cfo , would have fallen into that category , but mr . kopper , as managing director of a business unit , presumably wouldn &#x27; t have . however , reporting guidance issued by the financial accounting standards board seems to have a broader definition , one that might include mr . kopper . according to fas statement 57 , a related - party transaction involves a &quot; material &quot; piece of business between the company and a member of management . the statement defines management as directors , top officers , vice presidents in charge of major business units and &quot; other persons who perform similar policy - making functions . persons without formal titles may also be members of management . &quot; copyright ? 2000 dow jones &amp; company , inc . all rights reserved . deals &amp; deal makers : enron officials sell shares amid stock - price slump by theo francis and cassell bryan - low staff reporters of the wall street journal 10 / 26 / 2001 the wall street journal cl 4 ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) officials at enron corp . , whose unusual transactions with its chief financial officer are under regulatory scrutiny , have steadily sold sizable amounts of their holdings of company stock as the share price has fallen this year . corporate officials had sold 1 . 8 million shares valued at about $ 106 million through july , as the stock fell to less than $ 45 a share from $ 83 at the start of the year . since july , the stock has plummeted an additional 63 % to $ 16 . 35 , including a 50 % plunge since the beginning of last week . kenneth lay , chief executive of the houston energy - trading company , cashed in shares for $ 25 . 7 million so far this year , usually in transactions paired with options exercises . he sold 429 , 614 shares , leaving him with some 2 . 8 million shares as of july , the latest data available on his sales , according to thomson financial / lancer analytics . the dollar amount for his 2001 sales is approaching the total for all mr . lay &#x27; s sales of enron shares for 2000 , which reached $ 30 . 7 million . in 1999 , he sold shares for a total of $ 26 million . in houston , an enron spokeswoman declined to comment on the figures , saying the company doesn &#x27; t keep a running tally of stockholdings by corporate officials . enron also wouldn &#x27; t comment on the number of options held by company insiders and called the sales &quot; a personal decision . &quot; many sales by enron insiders were concurrent with options exercises or sales followed soon after option exercises . strong selling by company officers and directors amid share - price declines should raise red flags for investors , says jonathan moreland , research director of insiderinsights . com , who uses insider - trading data to zero in on investment ideas . among other insiders selling during the year , kenneth rice , former chairman and ceo of enron &#x27; s broadband unit , sold shares for $ 23 . 7 million . mr . rice has sold 456 , 966 shares of the 1 . 5 million shares he was listed as owning in enron &#x27; s march proxy filing . former enron chief executive jeffrey skilling - - who resigned in august - - sold 160 , 000 shares for $ 9 . 8 million during the year . in march , mr . skilling owned 1 . 9 million shares . messrs . rice and skilling couldn &#x27; t be reached to comment . overall , enron &#x27; s insiders were busier selling shares last year , when they sold 5 . 8 million shares for about $ 449 million . during 1999 , insiders sold 3 . 4 million shares for $ 123 . 1 million . since december 1999 , only one enron executive has reported buying company shares . the buyer was andrew fastow , who was ousted during the week as enron &#x27; s chief financial officer after the company disclosed it was under a securities and exchange commission investigation into financial ties between the company and mr . fastow . mr . fastow reported purchasing 10 , 000 enron shares in august at $ 36 . 98 each , or a total of $ 369 , 800 . today , those shares are valued at $ 163 , 500 , based on enron &#x27; s stock price of $ 16 . 35 in 4 p . m . new york stock exchange composite trading . after the purchase , mr . fastow owned 110 , 586 shares , thomson financial / lancer analytics says . enron said mr . fastow wasn &#x27; t available to comment . on monday , a new york law firm filed suit in u . s . district court in houston , alleging that enron misrepresented its performance by failing to disclose problems with its broadband division and failing to properly write down the value of investments in limited partnerships managed by mr . fastow . the suit , which seeks class - action status , also says enron insiders sold $ 73 million of their own enron holdings during parts of 2000 and 2001 . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . credit markets enron &#x27; s financial troubles reverberate to bonds with poor liquidity and credit - rating concerns by jathon sapsford and suzanne mcgee staff reporters of the wall street journal 10 / 26 / 2001 the wall street journal cl 5 ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) new york - - enron corp . &#x27; s bonds have held up better than its battered stock amid escalating financial woes at the energy - trading powerhouse . not for long , some bond traders say . in trading yesterday , the houston company &#x27; s five - year bond , a $ 250 million issue due in july 2006 carrying a coupon of 6 . 4 % , was quoted at 82 cents on the dollar , down from a bid of 88 late wednesday , and representing a 16 % drop during the past two weeks . that is far less than the 50 % decline in enron &#x27; s stock price since the oct . 16 disclosure of a $ 1 . 01 billion charge linked to soured investments , resulting in a $ 618 million third - quarter loss . but the fall in the bond &#x27; s price translates to a yield of 7 . 7 percentage points above bellwether u . s . government bonds , which is a widening from about three percentage points two weeks ago . although enron still is an investment - grade credit , that kind of &quot; spread &quot; is more characteristic of a junk bond with a credit rating of single b or lower . enron sought to assure the markets that its finances were sound , disclosing late yesterday that it drew down more than $ 1 billion on its bank credit lines to shore up its finances . yet even as enron was tapping its lifeline , investors were finding it difficult to trade big blocks of enron bonds . yesterday &#x27; s 82 bid , for instance , was for a block of less than $ 2 million in bonds , a small percentage of a typical trade . fueling the uncertainty surrounding enron were fears that credit - rating concerns will lower ratings on enron debt after it recently conceded a slew of troubles , including losses , a securities and exchange commission investigation , and the sudden resignation of its chief financial officer . &quot; even at these levels , there &#x27; s very little buying interest , &quot; said harold rivkin , a principal at distressed - debt trader h . rivkin &amp; co . in princeton , n . j . in one sign of the ripple effects , the price investors pay to protect themselves from losses on enron debt was surging . the cost of a &quot; default swap &quot; - - in which an investor pays another investor to take a chunk of debt at face value in the event of default - - rose to 10 % of the size of the credit being insured . that was up from 8 % a day earlier , and more than holders of lucent technologies inc . debt had to pay at the height of that technology company &#x27; s troubles earlier during the year . even with its woes , enron remains an investment - grade company . most credit - rating agencies rate enron &#x27; s senior unsecured debt at several notches above the noninvestment - grade level . yet fitch said yesterday it put enron &#x27; s credit rating on watch for a possible downgrade , following a similar move by moody &#x27; s investors service last week . ( standard &amp; poor &#x27; s , a division of mcgraw hill cos . , stopped short of putting the company on its creditwatch list , opting instead to revise its long - term ratings outlook to &quot; negative , &quot; citing concerns about the company &#x27; s financial flexibility . ) meanwhile , the weak bond prices are a sign that the markets are bracing for the worst . &quot; these are investment - grade bonds that are migrating toward distressed levels , &quot; said glenn reynolds , an analyst at credit sights inc . , an independent fixed - income research firm in new york . &quot; they aren &#x27; t distressed yet , but they are headed in that direction . &quot; if enron &#x27; s credit ratings fall , it would have implications far beyond the company &#x27; s ability to raise money . for an energy trader , a credit downgrade sends a signal to other participants in crucial markets about its ability to make good on its commitments . enron makes markets in a variety of commodities . though it is best known for trading electricity and natural gas , the company also is a huge force in the markets for other commodities such as lumber , metals , bandwidth capacity and steel . as a market maker matching buyers and sellers , enron handles about a quarter of all the trading in the nation &#x27; s energy and gas markets . enron &#x27; s credit - worthiness is hugely important . the better its credit rating , the cheaper it can hedge , or offset , its positions in all these commodities markets through derivatives and pass on savings to customers . without that credit rating , the cost of this high - margin , high - volume business starts to rise . a derivative is an instrument whose value is linked to , or derived from , that of an underlying security or asset , such as a stock , bond or commodity . &quot; even if the company does retain its investment - grade rating , the perception that this might be at risk will start to affect their core businesses , &quot; said mr . reynolds at credit sights inc . &quot; any prudent risk [ manager ] at enron &#x27; s counterparties &quot; - - any institution on the other end of a financial agreement with enron - - &quot; is going to be examining their exposure to enron , and looking for ways to minimize it or offset it , &quot; mr . reynolds said . to be sure , enron , despite its recent woes , remains a strong company , credit analysts said . &quot; i don &#x27; t think anyone &#x27; s seriously thinking that this is a company that would ever default , &quot; mr . reynolds said . &quot; so far , our research shows that their counterparties and their banks are sticking with them , &quot; said ron barone , managing director of standard &amp; poor &#x27; s utility energy project finance group . &quot; no one has cut credit lines or asked for additional collateral that we have identified . and customers have publicly stated that it &#x27; s business as usual . &quot; yet analysts say the arrival of distressed - debt traders on the scene could make life more difficult for enron and its management . traders expect enron &#x27; s new chief financial officer jeffrey mcmahon and chairman kenneth lay to make the rounds of wall street next week , meeting with rating agencies , debt - trading desks , big bond holders and banks , including j . p . morgan chase &amp; co . and citigroup inc . treasurys treasurys rallied on optimism that the federal reserve may cut interest rates more than previously expected after a spate of economic reports that documented how weak the economy was after the sept . 11 terrorist attacks . prices also gained as the market finished digesting the week &#x27; s flood of treasury , corporate and agency debt issues . at 4 p . m . edt , the benchmark 10 - year treasury note was up 13 / 32 point , or $ 4 . 0625 per $ 1 , 000 face value , at 103 20 / 32 . its yield fell to 4 . 537 % from 4 . 588 % wednesday , as yields move inversely to prices . the 30 - year treasury bond &#x27; s price was up 22 / 32 point at 101 11 / 32 to yield 5 . 284 % , down from 5 . 330 % wednesday . fed policy makers are slated to meet on nov . 6 . also providing support for longer maturities , the treasury department made another repurchase of issues outstanding . it received offers for $ 5 . 04 billion in callable 30 - year bonds , of which it accepted $ 1 billion . the offer - to - cover ratio , an indication of demand , was 5 . 04 . treasury buyback par par high wtd avg coupon mat amt amt accept accept % date offer accept price price 7 . 125 02 / 23 807 0 n / a n / a 11 . 750 02 / 10 235 0 n / a n / a 10 . 000 05 / 10 490 0 n / a n / a 12 . 750 11 / 10 471 0 n / a n / a 13 . 875 05 / 11 104 0 n / a n / a 14 . 000 11 / 11 203 0 n / a n / a 10 . 375 11 / 12 587 0 n / a n / a 12 . 000 08 / 13 974 0 n / a n / a 13 . 250 05 / 14 473 0 n / a n / a 12 . 500 08 / 14 725 39 3152 . 20 152 . 19 11 . 750 11 / 14 7826 0 7148 . 25 148 . 13 amounts in millions , prices in decimals . * amount outstanding after operation . calculated using amounts reported on announcement . corporate bonds motorola inc . &#x27; s offering of three - year mandatory convertible securities , expected late yesterday was boosted from a planned $ 875 million and could total as much as $ 1 . 15 billion ( proceeds ) if investors exercise their overallotment option . the securities were expected to have a dividend of between 6 . 75 % and 7 % and a conversion premium of 20 % to 22 % . earlier indications were a dividend of 7 % to 7 . 5 % and a conversion premium of 18 % to 22 % . the deal was to come through goldman sachs , j . p . morgan chase and salomon smith barney . separately , lsi logic corp . repriced an offering of $ 450 million of five - year convertible subordinated notes , lowering the price to 99 from par , people familiar with the rule 144 a private placement said . the notes have a 4 % coupon and a 41 % conversion premium and now offer a yield - to - maturity of 4 . 22 % . they were quoted lower at 98 1 / 2 early yesterday , a sign that the deal wasn &#x27; t well - received after being brought overnight by lehman brothers . - - - john parry and tom barkley contributed to this article . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . heard on the street most analysts remain plugged in to enron by susanne craig and jonathan weil staff reporters of the wall street journal 10 / 26 / 2001 the wall street journal cl ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) enron : rarely have so many analysts liked a stock they concede they know so little about . in recent years , wall street researchers have been overwhelmingly - - critics would say blindly - - enthusiastic about enron , even as they acknowledge not always understanding the complex financial transactions that accounted for its soaring profits . now , enron is reporting steep losses from some of its most complicated transactions , which many on wall street still can &#x27; t figure out . in a research note wednesday , goldman sachs analyst david fleischer conceded that scant corporate disclosure at the houston energy trader makes it difficult to value the company . the company &#x27; s &quot; lack of disclosure and transparency , &quot; he says , is &quot; a longstanding enron hallmark . &quot; so is this a stock to avoid , in his view ? hardly . goldman on wednesday did bump enron off its &quot; u . s . select list , &quot; which consists of a few dozen top stock picks - - but mr . fleischer continued to keep the stock on the firm &#x27; s larger but prestigious &quot; recommended list &quot; of 200 or so favored stocks , where it has been since he joined goldman in 1993 . &quot; just because i can &#x27; t be specific in being able to create a simple model . . . doesn &#x27; t mean that you write off that industry and say ` i can &#x27; t analyze it &#x27; or ` i can &#x27; t figure it out , &#x27; &quot; says mr . fleischer , who owns an undisclosed number of enron shares . &quot; if that were the case , there would be an awful lot of industries we couldn &#x27; t follow . &quot; enron &#x27; s shares have dropped about 50 % since last week . &quot; every sell - side analyst we spoke to early in 2001 admitted that this was a black box , &quot; says jim chanos , principal of kynikos associates in new york , who has been selling enron stock short - - trading it with an eye to profiting from its fall - - throughout this year . &quot; it was really a trust - me story , when all the evidence was mounting that there was reason to question that level of trust . &quot; true , no stock picker is immune from bad calls . and wall street analysts long have been criticized for their overwhelmingly bullish bias , particularly on stocks in hot sectors with lots of investment - banking deals to be had . but enron stands apart , precisely because so many of the analysts still recommending the stock have acknowledged that the company &#x27; s disclosure practices are lacking . which raises the question : how can an analyst recommend that others purchase a stock when key information about the company &#x27; s operations is so often either unavailable or indecipherable ? concerns about the way that enron runs its business aren &#x27; t new . many of the issues now plaguing enron &#x27; s stock were first raised more than a year ago by bearish hedge - fund managers and independent accounting experts . yet time and again , wall street analysts dismissed as unimportant many of the lingering questions about the company &#x27; s various partnership transactions . besides those partnerships , enron also has been dogged by concerns about the secretive valuation techniques it uses to record its assets and earnings . through it all , most analysts have stuck by this onetime stock - market darling , publicly dismissing questions about the firm &#x27; s accounting practices and level of disclosure . as of yesterday , of the 17 analysts who following the stock , 10 had a &quot; strong buy &quot; or equivalent rating on the stock , according to thomson financial / first call . five others rated the stock a &quot; buy , &quot; though not strongly . only prudential securities , which downgraded the stock this week , has a &quot; sell &quot; rating on enron . the bullish treatment is the latest and one of the most high - profile examples of wall street taking a glass half - full stance , despite what in retrospect seems to be ample warning that a less - enthusiastic approach was warranted . over the past year in the wake of the nasdaq composite index &#x27; s general collapse , analysts have been widely assailed for a lack of independence - - particularly those who , like goldman &#x27; s mr . fleischer , own shares in the companies they cover . regulators have raised concerns that analysts have compromised themselves to help their firms land lucrative investment - banking fees and other revenue . enron has spread the wealth across many wall street firms . for instance , for one $ 865 million equity offering in 1999 led by ` credit suisse first boston , enron retained seven co - managers , including donaldson lufkin &amp; jenrette , lehman brothers and merrill lynch . &quot; enron is a big company , and i don &#x27; t think you &#x27; re going to find a firm that hasn &#x27; t been involved , &quot; says credit suisse first boston analyst curt launer , who still rates the stock a &quot; strong buy &quot; with a $ 40 price target . &quot; they pay a lot of investment - banking fees to wall street . &quot; he adds , &quot; we do our analysis every day based on the information we have . are we here strictly to defend companies ? that &#x27; s ludicrous . we &#x27; re here to provide information to investors . . . . yes , i have the wrong recommendation on the stock . i don &#x27; t think my analysis has been as wrong as the stock has performed . &quot; mr . fleischer , whose firm also has served as an investment banker to enron , calls his holding &quot; a meaningful investment &quot; that is &quot; not small . &quot; but he disputes any suggestion that his objectivity is compromised . mr . fleischer says his clients &quot; are happy to know &quot; he has a stake in enron , because it shows he puts his money where his mouth is . in his research note wednesday , mr . fleischer called for complete disclosures of enron &#x27; s off - balance sheet partnerships . despite the resulting difficulty he acknowledged facing in developing financial models for the company , he wrote that he and many other investors historically &quot; have given enron the benefit of doubt because of its strong growth in earnings &quot; and position as an industry leader . &quot; there &#x27; s not information to really model this and be able to predict accurately where revenues are going to come from and where they &#x27; re going to make their money , but every quarter they do , &quot; he says . &quot; it &#x27; s hard to get inside to know all the transactions , but they do deliver . &quot; csfb &#x27; s mr . launer also has been a longtime defender of the company , occasionally issuing research reports to rebut critical stories about enron in the financial press . on monday , he wrote that he expects questions about enron &#x27; s partnerships and accounting disclosures to continue , but that he remains &quot; confident in the businesses and operating growth prospects for [ enron ] and an ultimate recovery in the share price . &quot; &quot; i know i &#x27; m wrong on the stock , &quot; mr . launer says . but he says that at these prices , he isn &#x27; t ready to throw in the towel because he figures that even in a worst - case scenario - - under which he envisions enron having to issue as much as $ 2 billion worth of shares , diluting current holders - - the stock doesn &#x27; t have much further to fall . clearly , messrs . launer and flesicher aren &#x27; t alone . &quot; even in relative terms , analysts remain very bullish on this stock , &quot; says chuck hill , director of research at thomson financial / first call . the average rating for a stock on wall street is 2 . 2 , or slightly shy of a &quot; buy &quot; rating . enron scores a 1 . 6 . &quot; this may turn into a classic case of locking the barn door after the bad news is out , &quot; mr . hill says . in downgrading the stock this week , prudential analyst carol coale bumped it to &quot; sell &quot; from &quot; buy , &quot; with a brief stop at &quot; hold . &quot; while she is the only analyst to recommend investors sell the stock , she openly concedes her recent downgrades come &quot; too little , too late . &quot; ms . coale says enron has been difficult to cover for years . she says the company &#x27; s disclosure practices fall far short of ideal , and senior executives are often evasive , even when presented with direct questions . for instance , she says three weeks ago she asked enron management if the company was under investigation by the securities and exchange commission . they said &quot; no , &quot; she says . in light of the company &#x27; s acknowledgment this week of an sec &quot; inquiry , &quot; she asked enron about the previous denial . &quot; they told me it is an inquiry , not an investigation , &quot; she says . an enron spokeswoman says the company learned of the sec &#x27; s inquiry only last wednesday . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron draws down $ 3 bln in credit to boost investor confidence 2001 - 10 - 26 08 : 52 ( new york ) enron draws down $ 3 bln in credit to boost investor confidence houston , oct . 26 ( bloomberg ) - - enron corp . , whose stock has fallen on concern about the largest energy trader &#x27; s transactions with affiliates , drew down $ 3 billion in credit to restore confidence in its financial strength . the houston - based company will use about $ 2 . 2 billion to pay off commercial paper obligations and keep the rest as cash , spokesman mark palmer said . ` ` nothing instils confidence like cash , &#x27; &#x27; he said . enron &#x27; s shares have dropped 52 percent in the past 10 days as investors worry that the company &#x27; s credit rating will be cut after $ 1 . 01 billion in third - quarter losses from failed investments . enron needs good credit to raise cash daily to keep trading partners from demanding collateral and to settle transactions . investors say they are worried about $ 3 . 3 billion in liabilities from affiliates formed to buy and sell enron assets . enron ousted chief financial officer andrew fastow on wednesday amid a securities and exchange commission inquiry into partnerships he ran that cost the company $ 35 million . jeff mcmahon , head of enron &#x27; s industrial markets group , was named cfo in a bid to restore investor confidence , chairman and chief executive officer kenneth lay said in a statement . enron shares fell 6 cents to $ 16 . 35 yesterday . - - mark johnson in the princeton newsroom ( 609 ) 750 - 4662 , or at enron liked by analysts despite complicated dealings , wsj says 2001 - 10 - 26 06 : 12 ( new york ) houston , oct . 26 ( bloomberg ) - - enron corp . is liked by many wall street analysts despite lingering questions about the power trading company &#x27; s complicated partnership transactions and the techniques used to record earnings , the wall street journal reported in its ` ` heard on the street &#x27; &#x27; column . goldman sachs group inc . analyst david fleischer , who owns an undisclosed number of enron shares , said that even though inadequate corporate disclosure makes it difficult to value the company , that doesn &#x27; t mean he will write off the industry or not analyze enron . of the 17 analysts who follow the stock , 10 had a ` ` strong buy &#x27; &#x27; or equivalent rating , according to thomson financial / first call , the paper said . five rated it ` ` buy &#x27; &#x27; and one had a ` ` sell &#x27; &#x27; on enron . most analysts have stuck by the company , publicly dismissing questions about enron &#x27; s accounting practices and level of disclosure , the journal said . the securities and exchange commission is inquiring about partnerships run by former chief financial officer andrew fastow . enron draws down $ 3 billion from its credit lines , wsj reports 2001 - 10 - 26 00 : 28 ( new york ) new york , oct . 26 ( bloomberg ) - - enron corp . drew down about $ 3 billion of its available credit , the bulk of its bank credit lines , to restore confidence in the financial strength of the company , the wall street journal reported . the energy trading company , whose shares have fallen 52 percent since oct . 16 , will use part of the money to redeem about $ 1 . 85 billion short - term commercial debt , the wall street journal reported , citing an unidentified person familiar with the matter . enron is talking to banks about a new , multi - billion line of credit , the paper reported , citing the unidentified person . the steps are seen as an effort by the energy trader to ensure that it has adequate liquidity in case its access to bank credit is disrupted , the paper said . enron said in a statement distributed by pr newswire that it drew on its credit lines to provide more than $ 1 billion in cash liquidity . the steps come a day after chief financial officer andrew fastow resigned amid a securities and exchange commission probe of partnerships he ran . - - william selway in the san francisco newsroom at ( 415 ) 743 - 3511 , oct . 25 , 2001 , 11 : 22 pm houston chronicle action by enron halts stock &#x27; s fall but credit ratings are being reviewed by laura goldberg copyright 2001 houston chronicle the recent freefall of enron corp . &#x27; s stock price stabilized thursday , a day after the world &#x27; s largest energy trader replaced its chief financial officer . enron , under a cloud for a number of reasons , including an securities and exchange commission inquiry , also made two announcements thursday night aimed at reassuring the financial community . in the announcements , enron said it had drawn more than $ 1 billion from its lines of credit and said that energy - trading business done through enrononline on thursday was above average levels . houston - based enron banked the money and has no plans to spend it , a spokeswoman said . &quot; we are making it clear that enron has the full support of its banks and more than adequate liquidity to assure our customers that we can fulfill our commitments in the ordinary course of business , &quot; jeff mcmahon , who took over wednesday as chief financial officer , said in a written statement . enron said it recorded more than 8 , 300 transactions through enrononline on thursday . ken lay , chairman and chief executive officer , said : &quot; enron continues to be the market - maker of choice in wholesale and gas power markets , our customers continue to put their confidence in us , and our core businesses are strong and performing well . &quot; earlier thursday , two credit rating agencies took actions regarding enron &#x27; s ratings , which j . p . morgan securities analyst anatol feygin described as &quot; just more negative sentiment . &quot; at one point in thursday morning trading on the new york stock exchange , shares in enron were up more than $ 1 . 50 , but they closed down 6 cents at $ 16 . 35 . as recently as oct . 16 , the stock closed at $ 33 . 84 . before the market closed , international credit - rating agency fitch put enron , which currently holds investment - grade credit ratings , on review for a possible downgrade . then after the market closed , standard &amp; poor &#x27; s took two steps : it affirmed enron &#x27; s current ratings , but it also revised its long - term ratings outlook to negative . moody &#x27; s investors service put all of enron &#x27; s long - term debt on review for potential downgrade last week . enron , which noted that losing its investment - grade rating would take downgrades of three notches , said thursday it will do everything in its power to defend its current rating . in the sec inquiry , federal securities regulators are reviewing transactions between enron and two private investment partnerships formerly run by andrew fastow , who was removed as enron &#x27; s chief financial officer wednesday . enron removed fastow as part of its bid to repair its damaged credibility . wall street is also questioning certain of enron &#x27; s financing vehicles and is wondering whether the company will face hits to its balance sheet in the months ahead . s &amp; p said it was concerned that the sizable drop in enron &#x27; s market capitalization has negatively affected its financial flexibility and could hurt the company &#x27; s plans to rebuild its balance sheet . but it also noted that the &quot; fundamental strength &quot; of enron &#x27; s energy marketing and trading business has remained steady . unless enron &#x27; s rebuilds confidence among investors and business partners , fitch said , it could &quot; impair enron &#x27; s financial flexibility and access to capital markets , &quot; which would hurt its ability to conduct business . carol coale , an analyst at prudential securities in houston , said the actions by s source : world reporter ( tm ) battered corporate america will receive an immediate dollars 25 bn ( pounds 18 bn ) tax rebate under a dollars 100 bn eocnomic stimulation package just approved by the republican - controlled house of representatives . the controversial package , worth an estimated dollars 212 bn over three years , includes dollars 70 bn for companies next year alone . it was approved by the house late on wednesday by 216 votes to 214 , but faces significant amendment in the senate , which is now under democrat control . it has reopened a wide ideological rift between republicans , who favour corporate and individual tax cuts to reboot an economy mired in recession , and democrats - who , in a reprise of the roosevelt &quot; new deal &quot; , prefer to see increased public spending on unemployment and infrastructure projects . liberal lobby groups such as the citizens for tax justice and the center on budget and policy priorities claim the bill would hand back dollars 6 . 3 bn to the 14 biggest corporations - which , they say , are renowned for paying little or no tax . the most hotly contested measure is the repeal of the corporate alternative minimum tax , or amt , introduced in 1986 to make sure firms could not avoid all tax payments . this , strongly supported by president bush , would be made retroactive so that all amt payments would be refunded . the lobby groups and the non - partisan congressional research service calculate that this would give a dollars 1 . 4 bn boost to computer group ibm alone , while general motors would get back dollars 833 m and general electric dollars 671 m . others to benefit include txu , the texas - based utility that is the us &#x27; s third largest energy supplier , which would would be given dollars 608 m . united airlines , the us &#x27; s second largest carrier - which is warning of bankruptcy - would receive dollars 371 m , and enron , the energy trading group forced to sack its finance director this week , would be given dollars 254 m . democrat leaders in the senate are determined to erase this measure and dislike other proposals to boost firms , which include a 30 % tax break for capital investment over three years worth dollars 39 . 3 bn this year alone . they say these amount to a &quot; giant corporate giveaway &quot; . mr bush and other republican leaders argue these fiscal concessions would help companies making hundreds of thousands redundant avoid further lay - offs and invest more , prompting an economic recovery that , at best , is likely to start in the new year . &quot; businesses are america &#x27; s employers . they &#x27; re the hardware store , the diner down the street , the gas station on the corner . they &#x27; re not the enemy of working families , &quot; the author of the plan , representative bill thomas of california , said . democrats are especially incensed with the alleged paucity of the package &#x27; s provisions for the growing numbers of jobless , arguing that much of the dollars 12 bn foreseen would not go to individuals but into the reserves of states . * a fresh round of global trade talks is essential to revitalise the world economy after the terrorist attacks on the us , trade secretary patricia hewitt said yesterday , writes charlotte denny as a new report predicted that global trade growth will collapse this year , ms hewitt warned that the world must not retreat into protectionism or isolationism in the wake of the attacks . wto trade ministers are gathering in doha , qatar , in two weeks &#x27; time to discuss launching a new round of talks , the first since the collapse of their meeting in seattle , nearly two years ago . full coverage of the downturn at www . guardian . co . uk / recession / copyright ? 2000 dow jones section c harvey pitt &#x27; s s . e . c . : from guard dog to friendly puppy ? by floyd norris 10 / 26 / 2001 the new york times page 1 , column 2 c . 2001 new york times company can the new , friendlier securities and exchange commission enforce the laws and assure investors that corporate financial reports are trustworthy ? harvey l . pitt , the new s . e . c . chairman , set out this week to show that he is not like his predecessor , arthur levitt . in a speech to the american institute of certified public accountants - - an organization whose senior leadership led a bitter and ultimately unsuccessful fight against mr . levitt &#x27; s reform efforts - - mr . pitt praised his listeners and took a few swipes at his predecessor . from now on , he promised , &#x27; &#x27; the commission will make sound decisions , in a respectful , affirmative way , not in a demeaning , demanding or demonizing way . &#x27; &#x27; he spoke favorably of &#x27; &#x27; pro forma &#x27; &#x27; earnings reports , in ways that no doubt heartened accountants who have worked so hard to find ways to make even the worst profit figures look pretty . there was no mention of mr . levitt &#x27; s concerns about improper management of earnings . on the heels of mr . pitt &#x27; s speech , the s . e . c . used a minor enforcement action to herald a policy of not cracking down on companies that come forward to report their own errors . the decision itself was reasonable , although one could wonder if top management did something wrong in failing to detect a fraud that went on for years . but the way the s . e . c . trumpeted it raised questions about whether the agency is turning into a friendly puppy rather than a guard dog . &#x27; &#x27; is this amnesty for financial fraud ? &#x27; &#x27; jane adams , the accounting analyst at credit suisse first boston and a former s . e . c . staff member , asked in a report to clients . she was not sure of the answer . in an interview yesterday , mr . pitt dismissed such worries . &#x27; &#x27; no one is going to get away with anything , &#x27; &#x27; he said . &#x27; &#x27; what we are trying to do is create an environment where people feel comfortable &#x27; &#x27; and can talk to the s . e . c . &#x27; &#x27; without feeling we are looking for a big splash . &#x27; &#x27; a major embarrassment for accountants is having the s . e . c . force a client to restate its numbers . mr . pitt and his chief accountant , robert herdman , are sending signals that fewer such demands will be made . &#x27; &#x27; i am very much in favor of a vigorous enforcement program , &#x27; &#x27; mr . pitt said in the interview , &#x27; &#x27; but i am not in favor of having investors barraged by conflicting statements and restatements . &#x27; &#x27; mr . pitt talks of companies &#x27; &#x27; getting it right the first time , &#x27; &#x27; which would certainly be nice . but there is a risk that companies will become more aggressive in their accounting , figuring there will be no real penalty , like a restatement , if they are caught . that would make life harder for auditors who try to resist misleading accounting . in trying to sound comforting to the accountants &#x27; group - - an organization that , as he noted , he had represented as a lawyer for two decades - - mr . pitt has done little to reassure investors of his independence . the proof , of course , will come in the performance . fortunately , the mess at enron gives the s . e . c . a golden opportunity to counter the puppy image . it will take time for the commission to determine if the company &#x27; s accounting was proper . but there need be no delay in forcing enron to clearly explain - - rather than obfuscate as it has so far - - the strange deals it made with partnerships run by the executive just ousted as chief financial officer . &#x27; &#x27; this could , &#x27; &#x27; a former s . e . c . staff member said , &#x27; &#x27; focus the issue on whether companies can make completely correct but totally misleading disclosures . &#x27; &#x27; and it would indicate that this watchdog still has a bite . photo : harvey l . pitt copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron draws down at least 1 bln usd from credit lines to boost mkt confidence 10 / 26 / 2001 afx news ( c ) 2001 by afp - extel news ltd houston ( afx ) - enron corp said it drew on committed lines of credit to provide cash liquidity in excess of 1 bln usd as part of moves to restore market confidence in the company . &quot; we are making it clear that enron has the support of its banks and more than adequate liquidity to assure our customers that we can fulfill our commitments in the ordinary course of business , &quot; said newly appointed chief financial officer jeff mcmahon . &quot; this is an important step in our plan to restore investor confidence in enron . additionally , we will update investors over the next several days regarding our plans to maintain our long - term credit rating . &quot; according to the wall street journal , enron drew down about 3 bln usd and will use part of the money to offer to redeem about 1 . 85 bln usd of outstanding commercial paper , with the remainder providing the energy concern with a cash cushion . the newspaper cited a person familiar with the matter . it quoted observers as saying the move may be is a pre - emptive step by enron to ensure that it had adequate liquidity should its access to bank lines be interrupted . the source also said enron is talking to its banks about a new , multi - billion - dollar credit line . jms for more information and to contact afx : www . afxnews . com and www . afxpress . com copyright ? 2000 dow jones let &#x27; s have a comfortable war sure , we &#x27; re at war with a band of cave - dwelling outlaws hell bent on our annihilation . but would all freedom - loving americans please go out and buy some dvd players ? maybe even a nice new car ? that was basically the message from the treasury department , on news that congress had voted for the creation of war bonds to finance antiterrorism efforts and rebuilding following the attacks . officials at treasury applauded the sentiment , then politely suggested it would be even better for the economy if americans just went to stores and bought stuff . &quot; the economy is perhaps our greatest asset as we move forward in these efforts to fight the war on global terrorists , &quot; says betsy holahan , a department spokesperson . &quot; war bonds are an additional way for americans to show their patriotism . &quot; for the record , we don &#x27; t think an issue of war bonds would be dumb , just superfluous . after all , nothing &#x27; s stopped americans from buying generic savings bonds - - or better yet , treasuries - - all of which finance spending by the federal government . in the meantime , it &#x27; s a little dislocating to hear politicians talk up war bonds - - which most people associate with hardship and sacrifice - - at the same time top economic gurus are practically begging people to shop . war bonds notwithstanding , we &#x27; re a long way off from the era of ration books . 3 . enron again last week , we noted the extent of alarm about enron &#x27; s ( ene : nyse - news - commentary ) revelation that its shareholder equity had dropped $ 1 . 2 billion , following some unusual and possibly inappropriate high - level transactions . following that disclosure , besieged cfo andrew fastow has finally left the company on what &#x27; s delicately termed a &quot; leave of absence . &quot; in july , fastow exited a limited partnership , from which he had reportedly reaped large profits , after shareholders and analysts objected to his involvement . concerns about those dealings and others had increased in the wake of the disclosure about the charge to equity until even management acknowledged fastow would have to go as a prerequisite to restoring investor confidence . but that won &#x27; t be an easy task , given the resentment about enron &#x27; s disinclination to explain its problems . one analyst called fastow &#x27; s departure &quot; unsettling , &quot; noting that management had given the cfo its endorsement only the day before . sounding a note of exasperation , analysts at j . p . morgan chase , banc of america securities and prudential all downgraded the stock . and there could be more trouble to come : the securities and exchange commission has issued enron a letter of inquiry related to some of its transactions . 4 . gold diggers it &#x27; s understandable that investors felt panicky in september . unfortunately , some reacted by shoving their hard - earned money into gold funds . according to financial research corp . , which tracks fund flows , the specialty precious - metals category was the best - selling equity category during september , with net inflows of $ 101 million . granted , that &#x27; s not a huge sum in the mutual fund world . by comparison , during the same month , large growth funds saw net redemptions of $ 7 . 4 billion . but the fact that so many people are jumping into precious metals is noteworthy , given that gold funds have performed so badly for so long . sure , under the bizarre circumstances of late , they &#x27; ve enjoyed somewhat of a pop . according to morningstar , the average precious - metals fund is up 10 . 08 % year to date . but over the past five years , the same category lost an embarrassing 14 . 68 % . by comparison , even large - cap growth funds - - everybody &#x27; s favorite whipping boy - - managed to post a positive return . in the same period , they were up 7 . 13 % . moreover , circumstances that would seem to be the most favorable in decades - - a combination of attacks on the u . s . government and war - - still don &#x27; t seem to have boosted gold prices significantly . despite an initial surge in prices after the terrorist attacks , they &#x27; re again approaching their pre - sept . 11 levels . it &#x27; s too early to say , but it &#x27; s likely the gold bugs will confront disappointment once again . 5 . amazon amazes once again amazon ( amzn : nasdaq - news - commentary ) still maintains it will become profitable by the fourth quarter . well , at least it will post a pro forma operating profit . ok , so maybe that wouldn &#x27; t include amazon &#x27; s service on $ 2 . 17 billion in long - term debt or extraordinary charges . in fact , a pro forma operating profit is basically just an accounting concept that would lend a fuzzy , meaningless aura of minor triumph . the company still hasn &#x27; t said when it will turn an economic profit . for that matter , even the fourth - quarter prediction is iffy . after announcing the company expected to turn the pro forma operating profit , cfo warren jenson added the humble qualifier , &quot; there are no guarantees . &quot; amazon simultaneously lowered its forecast for fourth - quarter revenue , predicting that sales would be somewhere between flat and up by 10 % compared with a year ago . third - quarter trends weren &#x27; t encouraging . though sales overall were up slightly in the third quarter from a year ago , revenue from the company &#x27; s core books and music business actually fell 12 % . at least the company has made progress in cutting costs : a spokesperson says pro forma operating expenses have decreased by 20 % over the past year . incidentally , in the wake of amazon &#x27; s earnings report , two analysts made the belated decision to cut their ratings on the stock , which has fallen 93 % from its high back in december 1999 . merrill lynch analyst henry blodget and sg cowen analyst scott reamer downgraded the stock to &quot; neutral &quot; from previous buy ratings . &quot; we thought there might be upside to our estimates , &quot; noted blodget . &quot; there wasn &#x27; t . &quot; financial stocks post gains after a rough morning associated press 10 / 26 / 2001 the washington post final eo 3 copyright 2001 , the washington post co . all rights reserved new york , oct . 25 - - selected buying of technology and energy shares pulled the stock market higher today , reversing a morning slide triggered by a pair of grim economic reports . shares of semiconductor makers and equipment manufacturers did particularly well , as did energy traders , led by a surprisingly strong performance from williams cos . , a tulsa - based energy firm that had an 83 percent jump in third - quarter net earnings . the dow jones industrial average closed rose at 9448 . 78 , up 103 . 16 , reversing an earlier deficit of 167 points . the nasdaq composite index rose 36 . 29 , to 1767 . 83 , and the standard the american stock exchange index rose 5 . 10 , to 828 . 67 ; and the russell index of 2 , 000 small stocks rose 8 . 31 , to 435 . 96 . * advancing issues outnumbered declining ones by 9 to 7 on the nyse , where trading volume rose to 1 . 38 billion shares , from 1 . 35 billion on wednesday . on the nasdaq , advancers outnumbered decliners by more than 3 to 2 and volume totaled 2 . 2 billion , up from 1 . 84 billion . * the price of the treasury &#x27; s 10 - year note rose $ 4 . 38 per $ 1 , 000 invested , and its yield fell to 4 . 54 percent , from 4 . 59 percent late wednesday . * the dollar rose against the japanese yen and the euro . in late new york trading , a dollar bought 122 . 87 yen , up from 122 . 76 yen late wednesday , and a euro bought 89 . 25 cents , down from 89 . 42 cents . * light , sweet crude oil for december delivery settled at $ 22 . 01 a barrel , up 32 cents , on the new york mercantile exchange . * gold for current delivery rose to $ 277 . 80 a troy ounce , from $ 275 . 90 on wednesday , on the new york mercantile exchange &#x27; s commodity exchange . http : / / www . washingtonpost . com copyright ? 2000 dow jones source : world reporter ( tm ) mumbai : retired supreme court judge sudhakar kurdukar will head the judicial panel set up by the maharashtra government to investigate into the controversial enron deal . an announcement in this regard was made by chief minister vilasrao deshmukh at a press conference held at mantralaya on wednesday . the ruling democratic front ( df ) coalition had differences over the appointment of the judge , with the nationalist congress party ( ncp ) demanding that a retired judge of the bombay high court head the judicial panel . the congress and the left front partners in the df , however , insisted on a supreme court judge . the issue was hotly debated in the coordination committee of the df . the ncp members in the df finally left the decision to mr deshmukh . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron taps $ 3 billion from bank lines in pre - emptive move to ensure liquidity 10 / 25 / 2001 dow jones business news ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) embattled enron corp . drew down about $ 3 billion , the bulk of its available bank credit lines , in a bid to restore confidence in its financial strength and liquidity , friday &#x27; s wall street journal reported . enron ( ene ) will use part of the money to offer to redeem around $ 1 . 85 billion in outstanding commercial paper - - short - term corporate ious - - according to a person familiar with the matter , with the remainder used to provide a cash cushion . this person also said that enron was talking to its banks about a new multibillion - dollar credit line . some observers thought the moves were a pre - emptive step by enron to ensure that it had adequate liquidity should its access to bank lines be interrupted . enron insists its business operation and financial condition remain strong . but &quot; when the market is reacting as irrationally as it has been the last few days , we thought that cash was better than a commitment from a bank , &quot; said an enron spokesman . in a prepared statement , the company &#x27; s new chief financial officer , jeff mcmahon , said that by drawing down the bank lines , &quot; we are making it clear that enron has the support of its banks and more than adequate liquidity to assure our customers that we can fulfill our commitments . &quot; the move underscored the tumultuous conditions that have been sweeping over the houston energy - trading firm in the past 10 days . enron is the nation &#x27; s largest energy trader and is a principal in nearly one - quarter of all electricity and natural - gas trades . thursday , for example , enron was involved in about $ 4 billion worth of deals through its enrononline unit . since early last week , enron &#x27; s share price has plummeted 50 % . it has reported a $ 618 million third - quarter loss and a reduction in shareholder equity of $ 1 . 2 billion . it also disclosed that the securities and exchange commission is conducting an inquiry into billions of dollars of transactions it did with entities run by its former chief financial officer , andrew s . fastow , who was replaced wednesday . the draw - down of the credit facilities came as a major rating agency , fitch , put enron on review for a possible downgrade while standard &amp; poors changed enron &#x27; s credit outlook to negative from stable . moody &#x27; s investors service has already said it is looking at a possible downgrade . in order to fall below investment grade , enron &#x27; s credit rating would have to fall several notches . if that were to happen , however , a host of bad consequences could follow . together with the sharp decline in its stock price , a noninvestment grade rating would throw the company into default on obligations involving billions of dollars of borrowings . in that event , enron could be forced to issue millions of shares of stock to holders of that debt , diluting the value of existing shares . as of 4 p . m . in new york stock exchange composite trading , enron shares were down six cents at $ 16 . 35 . copyright ( c ) 2001 dow jones &amp; company , inc . all rights reserved . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron chief executive resigns from board of i 2 technologies 10 / 25 / 2001 associated press newswires copyright 2001 . the associated press . all rights reserved . dallas ( ap ) - kenneth lay , the chairman and chief executive of embattled enron corp . , has resigned from the board of software company i 2 technologies . &quot; this is a very painful decision , &quot; lay said in a statement issued thursday by dallas - based i 2 technologies . &quot; but now that i am again taking on the ceo responsibilities at enron , i must reduce my outside activities . &quot; lay resumed the chief executive &#x27; s job at enron in august after jeff skilling surprised investors by leaving the houston - based energy company . enron officials did not immediately return calls from the associated press . in the past week , enron has been rocked by questions surrounding partnerships that did business with enron while they were managed by the company &#x27; s chief financial officer . the official was replaced on tuesday . enron &#x27; s stock price has fallen nearly 50 percent since interest in the partnerships intensified , and the company acknowledged that the u . s . securities and exchange commission was investigating the arrangements i 2 makes software to help companies manage their supply chains , and its clients include texas instruments , ford motor co . and dell computer corp . i 2 stock plunged nearly 25 percent on oct . 17 after the company reported a $ 5 . 53 billion third - quarter loss and said it would cut 1 , 000 jobs , about one - fifth of the work force . lay joined the board in october 2000 . no replacement was announced . in trading thursday , i 2 shares rose 24 cents to $ 4 . 95 , and enron shares fell 6 cents to $ 16 . 35 . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . as enron &#x27; s woes unnerve investors about energy sector , analysts say its problems are isolated by brad foss ap business writer 10 / 25 / 2001 associated press newswires copyright 2001 . the associated press . all rights reserved . new york ( ap ) - as it grew over the past decade into the country &#x27; s largest natural gas and power marketing company , enron corp . became the de facto barometer of health within the energy trading sector . wall street buoyed the stock prices of enron &#x27; s competitors based in part on the huge success of the houston - based company &#x27; s business model . now , executives and industry analysts hope to prevent enron &#x27; s internal tumult and free - falling stock price from undermining investors &#x27; confidence in the sector . they say the houston - based company &#x27; s problems should be viewed in isolation and not as a broader indicator of the marketplace . &quot; the marketplace for natural gas and power trading is as vibrant as it was yesterday , a week ago or a month ago , &quot; said jim donnell , president of duke energy north america , a division of duke energy corp . that generates and trades power . that opinion appeared to gain acceptance on thursday as shares of dynegy inc . , el paso corp . and duke energy corp . rebounded from losses on wednesday , when enron &#x27; s latest woes appeared to spill over into the stock prices of its rivals . enron &#x27; s stock has fallen about 50 percent in the past week ( and nearly 80 percent since january ) and analysts said its recovery is not expected anytime soon . the latest troubles began oct . 16 when enron reported third quarter earnings , and a longtime concern among wall street analysts that executives were not entirely forthcoming only got worse . first came reports that some of the company &#x27; s losses stemmed from partnerships managed by enron &#x27; s chief financial officer at the time , andrew fastow . that raised concerns about a potential conflict of interest and touched off an inquiry by the securities and exchange commission . then on wednesday , one day after enron chairman kenneth lay defended fastow , the company ousted him and said he would take a leave of absence . &quot; they created an environment in which their credibility was put to the test and they didn &#x27; t come through with flying colors , &quot; said christopher ellinghaus , an analyst at williams capital group in new york . enron shares have been falling all year for reasons new and old , which have little to do with the company &#x27; s wholesale energy business , which accounts for roughly 80 percent of profits . analysts insist wholesale energy marketing can be profitable even in the face of an economic downturn and falling natural gas and electricity prices . &quot; even though ( enron ) shot themselves in the foot , the basic business is still sound and not likely to disappear , &quot; ellinghaus said . ubs warburg analyst ronald barone echoed that sentiment . &quot; the collateral damage to the rest of the space - dynegy and el paso - is overdone , &quot; barone said . on thursday , williams companies inc . of tulsa , okla . , reported net income of $ 760 million and reliant resources inc . of houston reported $ 133 million in profits . &quot; it &#x27; s business as usual , &quot; said dynegy spokesman steve stengel . not for enron , whose stock price began a steady descent 10 months ago when its nascent high - speed internet unit failed to live up to the hype . the downward momentum was further propelled by difficulties collecting money from power customers in india and the surprise departure in august of then - chief executive jeff skilling was considered another bad sign . on oct . 16 , enron reported a net loss of $ 638 million in the third quarter , taking a one - time charge of $ 1 . 01 billion attributed to investment losses , troubled assets and unit restructurings . excluding the charge , enron earned $ 393 million on $ 47 . 6 billion in revenues for the three months ending sept . 30 . ellinghaus said the stocks of enron &#x27; s competitors were brought down wednesday because of &quot; dire &quot; speculation that enron &#x27; s troubles might be so bad that it could have difficulty paying hundreds of millions of dollars worth of receivables to companies such as duke and dynegy . &quot; all i &#x27; m hearing is doomsday type stuff and doomsday is not reality , &quot; ellinghaus said . enron did not return calls seeking comment thursday . donnell of duke energy said the charlotte , n . c . - based company is paying close attention to the enron situation and that there has been no indication of receivables not being paid . &quot; they continue to be one of the best functioning companies as it relates to credit , &quot; he said . &quot; they &#x27; ve never missed a deadline . &quot; ap graphic energy stocks copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron &#x27; s credit outlook downgraded to negative by s &amp; p ( updatel ) 2001 - 10 - 25 18 : 59 ( new york ) enron &#x27; s credit outlook downgraded to negative by s &amp; p ( updatel ) ( adds analyst comment in fourth paragraph . ) houston , oct . 25 ( bloomberg ) - - enron corp . &#x27; s long - term credit ratings outlook was changed to negative from stable by standard &amp; poor &#x27; s after the largest energy trader &#x27; s shares fell 49 percent in the past week . s &amp; p affirmed the houston - based company &#x27; s ratings of ` ` bbb + / a 2 , &#x27; &#x27; which are investment grade . the ratings company cited lost market capitalization and the possibility that enron won &#x27; t generate enough money from selling assets outside the main trading business to repay debt . s &amp; p did say that ` ` the strategic direction of the company is likely to become more credit - positive in the wake of recent management changes . &#x27; &#x27; enron reported $ 1 . 01 billion in losses from investments outside the principal business of trading commodities such as electricity and natural gas . chief financial officer andrew fastow resigned yesterday as the u . s . securities and exchange commission asks for information about related - party transactions he conducted . ` ` the s &amp; p write up was very positive , &#x27; &#x27; said dorothea matthews , an analyst at creditsights inc . , a research firm . ` ` it seems that the ratings company went out of its way to tray and calm things down . &#x27; &#x27; shares of enron fell 6 cents to $ 16 . 35 . - - russell hubbard in the princeton newsroom , 609 - 750 - 4651 or enron &#x27; s trading partners say it &#x27; s business as usual ( update 2 ) 2001 - 10 - 25 19 : 38 ( new york ) enron &#x27; s trading partners say it &#x27; s business as usual ( update 2 ) ( adds new enron cfo in 14 th paragraph . ) houston , oct . 25 ( bloomberg ) - - concerns enron corp . will run short on cash haven &#x27; t prevented commodities traders from doing business with the largest energy broker , customers say . the company handles about 25 percent of u . s . power and natural - gas trading , said john kilduff , vice president of energy risk management for fimat usa . it &#x27; s also a leader in complex derivatives that allow others to hedge against the risk of fluctuating commodities prices . enron &#x27; s credit rating is on watch for possible downgrade at moody &#x27; s investors service , and standard &amp; poor &#x27; s lowered enron &#x27; s long - term credit outlook to negative after $ 1 . 01 billion in third - quarter losses from some soured investments . the company needs good credit to raise cash every day to keep trading partners from demanding collateral and to settle transactions . so far , there are no signs that houston - based enron is handling less business , kilduff said . ` ` if they were unable to perform , it would be a major problem , &#x27; &#x27; he said . ` ` it could get like long - term capital if things really broke down because the numbers are that big . &#x27; &#x27; long - term capital management , a private investment fund for the wealthy , incurred massive losses making bond trades during the 1998 russian currency crisis . the fund &#x27; s portfolio plunged . more than a dozen banks bailed out the fund at a cost of $ 3 . 6 billion to avoid a collapse . needs cash daily enron trades electricity , natural gas , coal and other commodities worldwide , as well as complex financial instruments to hedge against price swings in the goods . ` ` as of now , enron is active in the markets , &#x27; &#x27; kilduff said . ` ` no one is cutting trading lines that i can see , or demanding different terms than before . &#x27; &#x27; companies that trade as heavily as enron require cash every day to settle positions , said kilduff , whose company swaps natural gas and other energy investments with enron . some days , fimat will bet that natural - gas prices will fall , while enron bets that they will rise . natural gas usually does one or the other every day , and someone pays the difference . ` ` the liquidity of your trading partners is a risk factor , &#x27; &#x27; kilduff said . ` ` someone is paying someone else every day . &#x27; &#x27; enron said on a conference call tuesday that it has enough money to operate normally , and can fall back on $ 3 . 4 billion in bank credit lines if necessary . the company is determined to protect the credit rating , enron has said . ` ` we aren &#x27; t even going to entertain worst - case scenarios at this point , &#x27; &#x27; said enron spokeswoman karen denne . investor questions enron , based in houston , ousted chief financial officer andrew fastow yesterday , two days after the u . s . securities and exchange commission began asking questions about partnerships he ran that invested in company shares . those trades cost enron $ 35 million . jeff mcmahon , head of enron &#x27; s industrial markets unit , replaced fastow , who went on leave of absence . enron shares have fallen 49 percent in the past week . they fell 6 cents to $ 16 . 35 today . based on bloomberg composite ratings , most of enron &#x27; s long - term debt is rated at bbb 2 and bbbl , two or three levels above investment grade . fitch , standard &amp; poor &#x27; s and moody &#x27; s all rate the company &#x27; s debt at investment grade . the company also faces questions from investors about $ 3 . 3 billion in potential liabilities from affiliated companies formed to buy and sell enron assets such as power plants . the affiliates owe payments to bond investors and plan to meet them by selling assets . enron doesn &#x27; t know if the sale proceeds will cover the debt . the company would have to make good on any shortfall . little time enron asked citicorp inc . on tuesday to arrange a $ 750 million loan to ensure access to credit if the company gets shut out of the money markets . enron had about $ 1 . 85 billion of commercial paper , or short - term unsecured debt , outstanding as of tuesday , traders said . the company , which has a $ 3 billion program , has had difficulty finding buyers for new commercial paper sales since the sec investigation was announced , the traders said . today , enron offered two - week commercial paper at a 3 percent yield , 10 to 15 basis points above comparably rated companies . ` ` there appears to be enough liquidity to give them enough time to get their house in order , &#x27; &#x27; said jon kyle cartwright , senior energy credit analyst at raymond james in dry seasons , when the dams can &#x27; t operate as well , enron pays the district . ` ` if enron &#x27; s credit went bad , or they folded up , that agreement wouldn &#x27; t get picked up by someone else , &#x27; &#x27; tracy said . enron also helps many u . s . utilities protect themselves from electricity and natural gas price fluctuations in the same way it helps the sacramento utility district hedge against too little rainfall . any impairment on enron &#x27; s part to continue doing so would trickle down to main street utilities , tracy said . ` ` utilities would start reserving more on their balance sheets for price swings , &#x27; &#x27; tracy said . - - russell hubbard in the princeton newsroom at 609 - 750 - 4651 , or at enron broadband begins closing london , singapore offices by erwin seba of dow jones newswires 10 / 25 / 2001 dow jones energy service ( copyright ( c ) 2001 , dow jones 713 - 547 - 9214 ; erwin . seba @ dowjones . com copyright ? 2000 dow jones no calif pwr contract talks 10 / 25 / 2001 dow jones energy service ( copyright ( c ) 2001 , dow jones 201 - 938 - 4604 ; mark . golden @ dowjones . com copyright ? 2000 dow jones &amp; company , inc . all rights reserved . spector , roseman &amp; kodroff , p . c . files class action suit against enron corporation 10 / 25 / 2001 pr newswire ( copyright ( c ) 2001 , pr newswire ) philadelphia , oct . 25 / prnewswire / - - the law firm of spector , roseman ( ii ) that the company &#x27; s operating results were materially overstated as result of the company failing to timely write - down the value of its investments with certain limited partnerships which were managed by the company &#x27; s chief financial officer ; and ( iii ) that enron was failing to write - down impaired assets on a timely basis in accordance with gaap . on october 16 , 2001 , enron surprised the market by announcing that the company was taking non - recurring charges of $ 1 . 01 billion after - tax , or ( $ 1 . 11 ) loss per diluted share , in the third quarter of 2001 , the period ending september 30 , 2001 . subsequently , enron revealed that a material portion of the charge related to the unwinding of investments with certain limited partnerships which were controlled by enron &#x27; s chief financial officer and that the company would be eliminating more than $ 1 billion in shareholder equity as a result of its unwinding of the investments . as this news began to be assimilated by the market , the price of enron common stock dropped significantly . during the class period , enron insiders disposed of over $ 73 million of their personally held enron common stock to unsuspecting investors . if you purchased enron securities during the class period , you may , no later than december 21 , 2001 , move to be appointed as a lead plaintiff in this class action . a lead plaintiff is a representative , chosen by the court , that acts on behalf of other class members in directing the litigation . the private securities litigation reform act of 1995 directs courts to assume that the class member ( s ) with the &quot; largest financial interest &quot; in the outcome of the case will best serve the class in this capacity . courts have discretion in determining which class member ( s ) have the &quot; largest financial interest , &quot; and have appointed lead plaintiffs with substantial losses in both absolute terms and as a percentage of their net worth . if you have sustained substantial losses in enron securities during the class period , please contact spector , roseman &amp; kodroff , p . c . at classaction @ srk - law . com for a more thorough explanation of the lead plaintiff selection process . if you have relatively small losses , your ability to participate in any recovery will be protected by the lead plaintiff ( s ) , and you need take no affirmative steps at this time . if you wish to discuss this action or have any questions concerning this notice or your rights or interests , please contact plaintiff &#x27; s counsel robert m . roseman toll - free at 888 - 844 - 5862 or via e - mail at classaction @ srk - law . com . for more detailed information about the firm please visit its website at http : / / www . spectorandroseman . com . spector , roseman &amp; kodroff , p . c . , located in philadelphia , pennsylvania and san diego , california , concentrates its practice in complex litigation including actions dealing with securities laws , antitrust , contract and commercial claims . the firm is active in major litigation pending in federal and state courts throughout the united states . the firm &#x27; s reputation for excellence has been recognized on repeated occasions by courts which have appointed the firm as lead counsel in numerous major class actions involving violations of the federal securities laws and the federal antitrust laws , and consumer fraud . as a result of the efforts of the firm , and its members , hundreds of millions of dollars have been recovered on behalf of thousands of defrauded shareholders and companies . make your opinion count - click here / contact : robert roseman of spector , roseman &amp; kodroff , p . c . , + 1 - 888 - 844 - 5862 / 19 : 00 edt copyright ? 2000 dow jones &amp; company , inc . all rights reserved . tgs q 3 net profit up 22 pct yr - on - yr on higher ngl sales , transport revenues 10 / 25 / 2001 afx news ( c ) 2001 by afp - extel news ltd buenos aires ( afx ) - perez companc sa and enron corp pipeline joint venture , transportadora de gas del sur sa , said its net profit in the three months to september rose 22 pct year - on - year to 37 mln pesos on the back of strong growth in sales of natural gas liquids ( ngl ) and increased revenue from transport . total revenue grew 24 pct year - on - year to 147 mln pesos , as &quot; tgs continues to grow its revenues in all of its business segments , &quot; ceo eduardo ojea quintana said . ngl sales surged 86 pct year - on - year to 31 . 1 mln pesos , after a partial takeover of the cerri complex &#x27; s production at bahia blanca , although volumes declined as a result of the start - up of the mega project at the beginning of 2001 , ojea quintana said . gas transport revenue rose 11 pct year - on - year to 109 . 6 mln pesos as average gas transportation contracted capacity rose 6 pct to 62 . 5 mln cubic metres daily , following a capacity expansion completed in june . however , he also noted &quot; important challenges , mostly associated with the relevant regulatory issues that remain unresolved , as well as the deep economic crisis that argentina is currently undergoing . &quot; &quot; these negative factors have adversely affected our investment plans for the current year and for 2002 , &quot; ojea quintana added . lac / zr for more information and to contact afx : www . afxnews . com and www . afxpress . com copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron draws down credit facility 10 / 25 / 2001 dow jones news service ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) houston - ( dow jones ) - enron corp . ( ene ) drew on committed lines of credit to provide cash liquidity of more than $ 1 billion . in a press release thursday , the energy company said it has &quot; more than adequate &quot; liquidity to fulfill business commitments . enron said the credit action is a step to restore investor confidence , and it plans to update investors in several days regarding plans to maintain its long - term credit rating . earlier thursday , standard dow jones newswires ; 201 - 938 - 5388 copyright ? 2000 dow jones &amp; company , inc . all rights reserved . enron employees watch options devalue as shares fall ( correct ) 2001 - 10 - 25 18 : 41 ( new york ) enron employees watch options devalue as shares fall ( correct ) ( company corrects structure of standard compensation package in second paragraph . ) houston , oct . 25 ( bloomberg ) - - enron corp . prided itself on sharing the wealth with employees when the company was posting record profits last year . now , from the boardroom to the mailroom , employees are sharing the pain . enron , the largest energy trader , grants stock options to the bulk of its 20 , 000 employees . under enron &#x27; s standard compensation package , most employees get stock options equal to 5 percent of their annual base salary , spokeswoman meredith philipp said . employees held 46 . 8 million exercisable options as of the end of 2000 , all at average prices above the company &#x27; s current share price . the stock has dropped 80 percent this year . ` ` virtually every option is under water right now , &#x27; &#x27; enron spokeswoman karen denne said . enron &#x27; s board sets the strike price for the options in december or january . employees can &#x27; t cash the options in and make a profit unless the stock is trading above the strike price . at the end of 2000 , enron shares were trading at $ 83 . 13 . in december , the board set a strike price of about $ 80 . shares of houston - based enron fell 6 cents to $ 16 . 35 today . they have lost 37 percent of their value so far this week . enron said monday that the securities and exchange commission was asking questions about partnerships run by andrew fastow , who was ousted as enron &#x27; s chief financial officer yesterday . one partnership cost the company $ 35 million , and enron bought back 62 million shares from a partnership at a cost of $ 1 . 2 billion . enron named jeff mcmahon , head of its industrial markets group , as cfo late yesterday . unvested options another 96 . 1 million options granted to enron employees hadn &#x27; t vested as of the end of last year . about 15 . 4 million of them , or 16 percent , were at prices ranging from $ 6 . 88 to $ 20 a share . the rest vest at levels well above the current share price . experts who have watched the devaluation of stock options in other industries , such as technology and telecommunications , say it becomes demoralizing for workers to watch share prices fall below their options . ` ` it looks bad , &#x27; &#x27; said mark edwards , chairman of iquantic buck , a mellon financial corp . unit that provides compensation consulting . ` ` employees look at ( the stock price ) every day , and it &#x27; s a continued disincentive to them . &#x27; &#x27; while denne said enron doesn &#x27; t have any plans to reprice its employees &#x27; options , the company did issue a one - time stock option grant at $ 36 . 88 in august , when ken lay resumed his former role as the company &#x27; s chief executive . lay , who had held the job for 15 years , turned the position over to jeffrey skilling in february . skilling quit in august , citing family reasons . the august grant , which was equivalent to 5 percent of employees &#x27; base salary , didn &#x27; t require a vesting period , but was exercisable immediately . enron &#x27; s shares haven &#x27; t closed above $ 36 . 88 since aug . 29 . - - margot habiby in the dallas newsroom ( 214 ) 954 - 9452 , or
</pre>

## Record 002420

**Label:** `benign`

<pre>
iv for rama gatiganti rm fifth floor se 5001 interview schedule 16 . 30 - 17 . 00 vince kaminski &amp; anjam ahmad 17 . 00 - 17 . 30 ben parsons 17 . 30 - 18 . 00 stephen leppard
</pre>

## Record 002421

**Label:** `benign`

<pre>
CDale URLed thusly:
&gt;http://www.news.harvard.edu/gazette/2000/10.19/01_monogamy.html&gt;The assumption that females of all species tend to be less promiscuous
&gt;than males simply does not fit the facts, Hrdy contended.Well, DUH!!!It is perfectly obvious that (heterosexual) promiscuity is exactly,
precisely identical between males and females.Of course the shapes of the distributions may differ.
R

</pre>

## Record 002422

**Label:** `benign`

<pre>
human sense disambiguation last year i sent out a request to the linguist list asking the following . . . &gt; i am doing some research into word sense disambiguation applied to &gt; information retrieval . recently i was reading a paper that said , &gt; &gt; &quot; a number of researchers in text processing have observed that people can &gt; consistently determine the sense of a word simply by examining the half &gt; dozen or so words just before and after the word in focus . &quot; &gt; &gt; but then the paper does n&#x27;t seem to directly reference any papers mentioning &gt; this . i would really like to track down these papers , does anyone have a &gt; reference for them ? someone has just contacted me asking for a summary of the answers . i guess i should &#x27; ve done this ages ago . still , better late than never . i got many replies but not all that many references that were what i needed . here are four references that are probably worth a look . the first two i &#x27; ve found and they are spot on . the others i havn &#x27; t seen . thanks to everyone who replied , it was a great help . y . choueka and s . luisgnan , &quot; disambiguation by short contexts &quot; , &quot; computers and the humanities &quot; , 19 ( 3 ) , pp147 - 157 , 1985 miller , g . a . , &quot; annual review of psychology &quot; , communication , vol 5 , pp401 - 420 , 1954 ( this contains a summary of work carried out by abraham kaplan ) graeme hirst , &quot; semantic interpretation and the resolution of ambiguity &quot; , studies in natural language processing , cambridge university press , 1987 , uk kathleen dahlgren : &quot; naive semantics for natural language understanding &quot; , boston : kluwer , 1988 . + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - + | mail : mark sanderson , department of computing science , | | the university , glasgow g12 8qq , scotland , uk . | + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - + | e - mail : sanderso @ dcs . glasgow . ac . uk | | tel : + 44 ( 0 ) 41 339 8855 x6292 &lt; - - - - * * * new number * * * | | fax : + 44 ( 0 ) 41 330 4913 | + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - + | &quot; i &#x27; m gonna get you in my tent tent tent tent tent | | so we can both experiment ment ment ment ment &quot; | + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
</pre>

## Record 002423

**Label:** `benign`

<pre>
distributing and accessing linguistic resources * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * distributing and accessing linguistic resources * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * may 27th , this workshop is part of first international conference on language resources and evaluation at the university of granada , may 26th to 30th 1998 ( see http : / / ceres . ugr . es / ~ rubio / elra . html for details and how to register ) . the workshop will discuss ways to increase the efficacy of linguistic resource distribution and programmatic access , and work towards the definition of a new method for these tasks based on distributed processing and object-oriented modelling with deployment on the www . organizers : yorick wilks , wim peters , hamish cunningham , remi zajac papers the following papers will be presented in order of enumeration . after each 15 minute presentation there will be 5 minutes for discussion . distributed thesaurus storage and access in a cultural domain application s . boutsis , b . georgantopoulos , s . piperidis institute for language and speech processing , athens a new model for language resource access and distribution w . peters , h . cunningham , y . wilks , c . mccauley university of sheffield reuse and integration of nlp components in the calypso architecture r . zajac new mexico state university corpus - based research using the internet h . brugman , a . russel , p . wittenburg max planck institute for psycholinguistics , nijmegen the cue corpus access tool o . mason university of birmingham linguistic research utilizing the edr electronic dictionary as a linguistic resource t . ogino edr , japan posters the following posters will be on display during the workshop , and presentations are planned during the breaks : tractor : telri research archive of computational tools and resources r . krishnamurthy university of birmingham web - surfing the lexicon d . cabrero , m . vilares , l . docampo , s . sotelo ramon pineiro research centre / universities of coruna and santiago exploring distributed mt o . streiter , a . schmidt - wigger , u . reuther , c . pease iai saarbruecken a proposal for an on - line lexical database p . cassidy micra , inc . panel discussion : the final part of the workshop will consist of a panel discussion on : distributing and accessing linguistic resources the panel participants are : khalid choukri , eduard hovy , judith klavans , yorick wilks , and antonio zampolli . workshop scope and aims - - - - - - - - - - - - - - - - - - - - - - in general the reuse of of nlp data resources ( such as lexicons or corpora ) has exceeded that of algorithmic resources ( such as lemmatisers or parsers ) . however , there are still two barriers to data resource reuse : 1 ) each resource has its own representation syntax and corresponding programmatic access mode ( e . g . sql for celex , c or prolog for wordnet , sgml for the bnc ) ; 2 ) resources must generally be installed locally to be usable ( and of course precisely how this happens , what operating systems are supported etc . varies from case to case ) . the consequences of 1 ) are that although resources share some structure in common ( lexicons are organised around words , for example ) this commonality is wasted when it comes to using a new resource ( the developer has to learn everything afresh each time ) and that work which seeks to investigate or exploit commonalities between resources ( e . g . to link several lexicons to an ontology ) has to first build a layer of access routines on top of each resources . so , for example , if we wish to do task-based evaluation of lexicons by measuring the relative performance of an information extraction system with different instantiations of lexical resource , we might end up writing code to translate several different resources into sql or sgml . the consequence of 2 ) is that there is no way to &quot; try before you buy &quot; : no way to examine a data resource for its suitability for your needs before licencing it . correspondingly there is no way for a resource provider to expose limitted access to their products for advertising purposes , or gain revenue through piecemeal supply of sections of a resource . this workshop will discuss ways to overcome these barriers . the proposers will discuss a new method for distributing and accessing language resources involving the development of a common programmatic model of the various resources types , implemented in corba idl and / or java , along with a distributed server for non-local access . this model is being designed as part of the gate project ( general architecture for text engineering : http : / / www . dcs . shef . ac . uk / research / groups / nlp / gate / ) and goes under the provisional title of an active creole server . ( creole : collection of reusable objects for language engineering . currently creole supports only algortihmic objects , but will be extended to data objects . ) a common model of language data resources would be a set of inheritance hierarchies making up a forest or set of graphs . at the top of the hierarchies would be very general abstractions from resources ( e . g . lexicons are about words ) ; at the leaves would be data items that were specific to individual resources . programmatic access would be available at all levels , allowing the developer to select an appropriate level of commonality for each application . note that although an exciting element of the work could be to provide algorithms to dynamically merge common resources what we &#x27; re suggesting initially is not to develop anything substantively new , but simply to improve access to existing resources . this is not a new standards initiative , but a way to build on previous initiatives . of course , the production of a common model that fully expressed all the subtleties of all resources would be a large undertaking , but we believe that it can be done incrementally , with useful results at each stage . early versions will stop decomposing the object structure of resources at a fairly high level , leaving the developer to handle the data structures native to the resources at the leaves of the forest . there should still be a substantial benefit in uniform access to higher level strucures . program committee - - - - - - - - - - - - - - - - yorick wilks hamish cunningham wim peters remi zajac roberta catizone paola velardi maria teresa pazienza roberto basili bran boguraev sergei nirenburg james pustejowsky ralph grishman christiane fellbaum
</pre>

## Record 002424

**Label:** `benign`

<pre>
listing of possible recruits here is a revised summary of the 13 candidates i sent to tony vasut . i believe he has made initial contact with each of them . if you decide you would like to talk to them , please don &#x27; t mention my name , as some of them are former clients of mine , used to work with me , or still work with my husband ( i think you get the picture - i &#x27; ve been gone from pwc less than a month ) . however , i would be pleased to talk to you about any of the people mentioned below . i have categorized them into 5 categories - senior level , it / risk , mid level , junior level , and admin assistants . i have not spoken to the majority of these people about giving our recruiting department their name ( see note above ) , with the exception of mark smith , dave simpson , and connie shugart . all of these people have indicated great interest in coming to enron . again , please call me with any questions , or need of further info . my extension is 39123 . best regards shona senior level risk people andy dunn until 3 weeks ago he was a director in the pwc risk management practice . due to a falling out between andy and the partners ( not client related ) , he left the firm . he is extremely well respected by both the audit and the non - audit personnel , and his leaving came as an unexpected surprise . i have worked with him on a number of occasions and would highly recommend him to enron . the downside to andy is that he lives in denver , is used to travelling a lot , but , at the last time we spoke ( a few months ago ) , is not interested in leaving denver . his cell phone ( if still in use ) is 303 807 0040 . mark ( allan ) smith mark is in the pwc energy risk management practice in houston . we worked very closely together throughout 1999 on projects for coral energy and equiva trading . prior to working at pwc , mark was at bp for 15 years where he had many different roles ( he worked as a crude trader , products trader , he worked in the risk management department , in the refinery itself as an engineer ) . mark was excellent to work with . clients are extremely impressed with his knowledge and background . i would highly recommend him for a leadership role at enron . i spoke to him and he is interested in pursuing opportunities at enron . his direct number is 713 356 4233 . his cell phone number is 713 412 3890 . it / risk people shawn lafferty , alan beaton , &amp; carolyn johnson these people are all senior managers in kpmg &#x27; s information risk management department and are all looking for opportunities outside kpmg . they all have 8 + years work experience in the it field . kpmg &#x27; s main number is 713 319 2000 . mid level risk people marilyn chee she currently works for equiva trading , manager in - charge of accounting for derivatives . her role has expanded to encompass fas 133 and all mtm accounting entries . she liases with all book heads ( crude and all products ) . in the past , she worked in the texaco internal audit department . she was my main contact at equiva when i was their auditor . she is extremely diligent and very professional . i enjoyed working with her greatly and have to say she was one of the best people i have worked with in the capacity of a client / professional relationship . marilyn has a lot of responsibilities at the alliance and is extremely well respected . she has had a difficult year as she is doing a job that should be done by 3 + people . she has mentioned to me that she is not happy about the fact that her load continues to increase , and has even mentioned finding another job . however , due to the fact that she is so well respected where she is , she may be difficult to recruit ( 713 277 6280 ) . if you contact her i would not want my name associated with it due to the pwc / alliance relationship . scott barnes scott is an audit manager at pwc . he has worked in energy for his career , which he spent in houston and moscow and new york . he has worked as an audit manager , a special projects manager for the managing partner of the houston office , a manager in the capital markets group ( the group responsible for helping non - us companies prepare to register and list with the sec ) , and the transaction support group ( the group that is resposnible for performing due diligence procedures for pwc clients ) . he is looking for opportunities outside pwc . the pwc general line is 713 356 4000 . keith considine he is currently a senior accountant at pwc . he is the best senior pwc houston has , as well as probably one of the best people i have ever worked with ( the top of his class ) . although he only has 4 years of work experience ( all at pwc ) , he performs in a manager capacity . he worked for me on the coral energy audit engagement and received an excellent evaluation from both myself and the partners ( we all agreed that he is one of the best people any of us have seen or worked with ) . he is currently working on a project at one of pwc &#x27; s clients to standardize their mid office processes . he definitely does not see himself as a long time employee of pwc , but is currently planning on staying there until he is promoted to manager . i actually recommended him for a promotion to manager at july 1 this year , but due to capacity issues , i don &#x27; t expect that the promotion will be approved . his number is 713 356 5617 . junior level risk people robin manspeaker currently works as a scheduler at equiva trading . she has been there about a year and a half . before that , she worked at novarco in white plains ( a subsidiary of marc rich ) . she was there about 3 years . i do not know where she was before that . i have worked with her during my audits of marc rich . she seemed very well versed in her knowledge of her job and processes surrounding it . i do not have her number , but you can call shell information at 713 241 6161 and they will transfer you . dave simpson analyst at koch energy in houston , has a degree in accounting and has work experience of about 2 years . he is very interested in leaving koch . i know him on a person basis , but have not worked with him . he is a good guy and very likeable . his phone number is 713 544 7649 robert hernandez is someone who may be able to fill an open position at enron south america . last year , robert worked for me at ( pwc ) on the external audit of coral energy . he was a great worker and very good at his job . he speaks fluent spanish as well as fluent english . before working at pwc , robert worked in the gas trading industry in the mid / back office . i &#x27; m not sure of all of his responsibilities , but i do know he was involved in gas actualizations . in total , i think he has about 4 years of work experience . he left pwc in march to take a position with heins in their internal audit department . i have not spoken to him since he left , but do know he paid a recruiter to find him this position . i do not know if he is happy at his current company or not . i do not know his number , but he can surely be found by using the general line . i looked it up for you and came up with two - 713 785 1494 , 713 225 0565 . admin assistants connie shugart she is currently working at pwc as an administrative assistant . she is also involved in recruiting experienced personnel for pwc &#x27; s audit and internal audit service lines . she is very interested in enron and has asked me a few times to get her a contact here . i have not worked directly with her but due to her close proximity to my office i talked to her a number of times and was very impressed . ( 713 356 4000 - general pwc number ) . i have spoken to her about giving her name to tony and she is very excited about coming over and interviewing . she really wants to work for enron ! ellen robertson she is an administrative assistant who is looking to leave pwc . i have never worked with her , but she did come to ask me my opinion on how she should go about finding other work . ( 713 356 4000 pwc general line ) .
</pre>

## Record 002425

**Label:** `benign`

<pre>
the national forum on corporate finance andrew fastow enron co . hi andy i don &#x27; t recall sending the above attachment . if so , please pardon my redundancy . attached is some registration details for the upcoming corporate finance conference here at rice . when you get a moment , if you could have someone on your staff return it that would be great . each topic is followed by &quot; panel &quot; discussion . we have you slated to serve on the panel dealing with &quot; equity dilution from option compensation &quot; and will feature work by david yermack from nyu . stu gillan from tiaa / cref will be serving on the panel with you along with john blahnik from delphi automotive . please call me direct if i can be of any help or assistance . dave ikenberry - registation details regarding . doc * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * prof . david ikenberry jones graduate school of management rice university 713 - 348 - 5385
</pre>

## Record 002426

**Label:** `benign`

<pre>
re : regrouping of enw budget discussions wes and team had preset the meeting schedule and topics to be covered in each . the outline that i sent you with the changes for the remainder of this week is simply our best attempt at fitting coordinating topics around people availability and the meeting schedule that had already been set . the schedule that we have been working with that wes provided did not allocate two hours for the friday meeting . if you had set aside two hours , that had not been communicated to us . there were only two one - hour meeting slots on that schedule . one for enw from 1 - 2 and one for research from 3 - 4 . i have a major conflict on friday - i committed months ago to attend a meeting that ken lay asked to be involved in that is in the woodlands that runs through the evening hours . . only because beth perlman is out on thursday for a religious holiday , i decided to &quot; skip out &quot; from this meeting to be here on friday afternoon to discuss the operations and it development budgets together . in order to minimize my time away from the woodlands meeting , i orchestrated the time swap with vince kaminiski so that we could have our enw meeting at 3 : 00 . i will talk with you later today and fill you in on the commitment for ken lay . maybe we can work together for a scheduling solution that works for both of us . i would appreciate your help on that , louise . scheduling issues aside , wes suggested that we also review with you the ees budget that enw has prepared . our approach so far has been to determine the appropriate and necessary spend for 2002 for expense and capital for all of the services that enw provides to support the ees business . we have done this without regard to who will cover which expenses - ees or ea . that is a separate issue from understanding the services that need to be provided and our best estimate at costs . we are prepared , however , with a suggested split on the costs for discussion purposes . i have assumed that the decision on cost sharing or allocation would be made between the offices of the chair for ees and enw . if you would like to cover all of enw &#x27; s budgets together , both for ees and ea , then it would make more sense to set a longer block of time ( maybe 3 hours ? ) . i will bring my schedule to our meeting at 11 : 00 today to cover the canadian budget and we can work out a schedule that works for both of us . we will be prepared to discuss pricing per transaction , but will hold that until the end of our meetings when we have been able to review with you the components of costs and the detail of capital projects . our review of costs and projects in effect will serve as our &quot; scope of engagement &quot; discussion . a service provider would never quote a firm price until agreement had been reached on the scope of the engagement . we will have a straw man for discussion on that . - - sally - - - - - original message - - - - - from : kitchen , louise sent : wednesday , september 26 , 2001 8 : 23 am to : beck , sally cc : piper , greg ; pickering , mark ; colwell , wes ; killen , faith ; roper , kerry ; schoppe , tammie ; valdez , christina subject : re : regrouping of enw budget discussions i am expecting an all in cost for this service - what do we achieve in separation . i had allocated two hours on friday to do this from lpm until 3 pm . are you not intending an all in cost ( per transaction ) of it and operations ? if you believe that the outline below works then go ahead , do we just have the total number debate on fridy - if so let &#x27; s start at 2 pm . thanks louise - - - - - original message - - - - - from : beck , sally sent : tuesday , september 25 , 2001 7 : 36 pm to : kitchen , louise cc : piper , greg ; pickering , mark ; colwell , wes ; killen , faith ; roper , kerry ; schoppe , tammie ; valdez , christina subject : regrouping of enw budget discussions louise , to make our enw budget discussions most meaningful , we felt that coupling discussions of the operations and it development budgets will make the most sense . to insure that we have the appropriate attendees in our enw 2002 plan meetings and to schedule these meetings around thursday as a religious holiday , i have worked with wes colwell and made a trade with vince kaminski to make all of this happen . there is no change to your calendar in terms of date , time or location of meetings . we have simply realigned topics and attendees as follows : date time location revised group revised attendees wed , 9 / 26 11 - noon eb 3314 canada support ( unchanged ) wes colwell , faith killen , louise kitchen , sally beck , rob milnthrop , bob hall ( added - responsible for ea operations , including calgary ) thurs , 9 / 27 1 : 30 - 2 : 30 eb 3316 enw : eol &amp; infrastructure wes colwell . faith killen , louise kitchen , sally beck , mark pickering , jenny rub , greg piper , kerry roper , brad richter ( added - eol ) , jay webb ( added - eol ) fri , 9 / 28 1 - 2 pm eb 3316 research wes colwell , faith killen , louise kitchen , vince kaminiski ( no changes ) 3 - 4 pm eb 3314 enw : operations &amp; it dev . wes colwell , faith killen , louise kitchen , sally beck , beth perlman , mark pickering , greg piper , kerry roper , bob hall ( added - ea operations ) i look forward to reviewing details with you in each of these meetings . - - sally
</pre>

## Record 002427

**Label:** `benign`

<pre>
prob of default for e rating 7 as of 2 / 3 / 00 vincent , i got the e - rating and default probabilities for promigas from the credit group . could you plug in these numbers to the loan guarantee model ? promigas is rated as bb . zimin - - - - - - - - - - - - - - - - - - - - - - forwarded by zimin lu / hou / ect on 02 / 04 / 2000 08 : 41 am - - - - - - - - - - - - - - - - - - - - - - - - - - - tanya rohauer 02 / 04 / 2000 07 : 27 am to : zimin lu / hou / ect @ ect cc : subject : prob of default for e rating 7 as of 2 / 3 / 00
</pre>

## Record 002428

**Label:** `benign`

<pre>
materials to learn luganda i &#x27; m inquiring for a somewhat linguistically savvy undergraduate who will be spending this june - november in kampala : what is there available in the way of books , a / v materials , courses , whatever for learning luganda ? thanks . george huttar huttar @ sil . org
</pre>

## Record 002429

**Label:** `benign`

<pre>
pacling 99 : first call for papers - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - this call for paper is also available at http : / / www . lpaig . uwaterloo . ca / ~ b2hui / pacling / additional information and updates will be posted to the website as they become available . ( please direct your questions to bowen hui at b2hui @ uwaterloo . ca . ) - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - pacling pacific association for computational linguistics university of waterloo waterloo , ontario , canada n2l 3g1 august 25-28 , 1999 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - cooperative hosts = = = = = = = = = = = = = = = = = o canadian society for computational studies of intelligence ( cscsi ) / societe canadienne pour l &#x27; etude de l &#x27; intelligence par ordinateur ( sceio ) o university of waterloo , canada o the technical group on natural language understanding and communication of institute of electronics , information , and communication engineers of japan o the technical group on thought and language of institute of electronics , information , and communication engineers of japan history and aims = = = = = = = = = = = = = = = = pacling ( pacific association for computational linguistics ) has grown out of the very successful japan - australia joint symposia on natural language processing held in november 1989 in melbourne , australia and in october in iizuka , japan in 1991 . the first three meetings of the retitled pacling , a name designed to express the wider membership , took place in vancouver , canada in 1993 , in brisbane , australia in 1995 , and in ohme , tokyo , japan in 1997 . pacling &#x27; 99 will be a low-profile , high-quality , workshop-oriented meeting whose aim is to promote friendly scientific relations among pacific rim countries , with emphasis on interdisciplinary scientific exchange demonstrating openness towards good research falling outside current dominant ` ` schools of thought &#x27; &#x27; , and on technological transfer within the pacific region . the conference represents a unique forum for scientific and technological exchange , being smaller than acl , coling , or applied nlp , and also more regional with extensive representation from the pacific . topics = = = = = = original papers are invited on any topic in computational linguistics ( and closely related areas ) including , but not limited to , the following : o phonology , phonetics , morphology , syntax , semantics , pragmatics o dialogues , spoken languages , corpora o text and message understanding and generation o language translation and translation aids o language learning and learning aids o question-answering systems and interfaces to ( multimedia ) o databases , language and input / output devices o natural-language - based software . submissions = = = = = = = = = = = authors should prepare extended abstracts , in english , not more than 3000 words including references . the title page must include : author &#x27;s name , postal address , e-mail address ( if possible ) , telephone and facsimile numbers ; a brief 100-200 word summary ; and some key words for classifying the submission . papers that are being submitted to other conferences , whether verbatim or in essence , must reflect this fact after key words . if a paper appears at another conference , it must be withdrawn from pacling &#x27; 99 . papers that violate these requirements are subject to rejection without review . authors of a selection of representative papers which the program committee identifies will be invited to revise their papers and submit to a special issue of computational intelligence : an international journal based on pacling &#x27; 99 . please send four copies of each submission to : nick cercone department of computer science william davis comp . research centre university of waterloo waterloo , ontario n2l 3g1 canada telephone : ( 519 ) 888-4567 ext . 3292 facsimile : ( 519 ) 885-1208 e - mail : ncercone @ uwaterloo . ca * or * kiyoshi kogure ntt communication science laboratories 2 - 4 , hikari - dai , seika - cho , soraku - gun , kyoto 619-023 japan telephone : + 81 744 93 5250 fascimile : + 81 744 93 5285 e - mail : kogure @ cslab . kecl . ntt . co . jp important dates = = = = = = = = = = = = = = = submission deadline : february 21 , 1999 notification of acceptance : may 1 , 1999 camera - ready copy due : june 18 , 1999 organizing committee = = = = = = = = = = = = = = = = = = = = president : naoyuki okada ( kyushu institute of technology , japan ) members : naoyuki okada ( kyushu institute of technology , japan ) christian matthiessen ( macquarie university , australia ) nick cercone ( university of waterloo , canada ) charles fillmore ( university of california , berkeley , usa ) conference committee = = = = = = = = = = = = = = = = = = = = chair : nick cercone ( university of waterloo , canada ) program coordinators : nick cercone ( university of waterloo , canada ) kiyoshi kogure ( ntt , japan ) members : francis bond ( ntt , japan ) sandra carberry ( university of delaware , u . s . a . ) robin cohen ( university of waterloo , canada ) veronica dahl ( simon fraser university , canada ) robert dale ( macquarie university , australia ) hercules dalianis ( royal inst . of technology , dsv-kth , sweden ) chrysanne dimarco ( university of waterloo , canada ) mike dent ( open text corp . , canada ) kohji dohsaka ( ntt , japan ) randy goebel ( university of alberta , canada ) graeme hirst ( university of toronto , canada ) satoru ikehara ( tottori university , japan ) kentaro inui ( kyushu institute of technology , japan ) shun ishizaki ( keio university , japan ) pierre isabelle ( university of montreal , canada ; xrce , france ) julia johnson ( university of regina , canada ) richard kittredge ( university of montreal , canada ) guy lapalme ( university of montreal , canada ) dekang lin ( university of manitoba , canada ) charles ling ( university of western ontario , canada ) stan matwin ( university of ottawa , canada ) robert mercer ( university of western ontario , canada ) johanna moore ( university of edinburgh , uk ) gordon mccalla ( univ . of saskatchewan , canada ) paul mcfetridge ( simon fraser university , canada ) paul mc kevitt ( aalborg university , denmark ) jun - ichi nakamura ( university of kyoto , japan ) minako o&#x27;hagan ( victoria univ . of wellington , new zealand ) kyonghee paik ( keio university , japan ) t . pattabhiraman ( seagate software , canada ) emmanuel planas ( universiti joseph fourier de grenoble , france ) fred popowich ( simon fraser university , canada ) gary promhouse ( open text corp . , canada ) hiroshi sakaki ( meisei university , japan ) l . k . schubert ( university of rochester , usa ) akira shimazu ( ntt , japan ) booncharoen sirinaovakul ( king mongkut &#x27;s university of technology , thailand ) tomek strzalkowski ( general electric , usa ) ryoichi sugimura ( matsushita , japan ) roland sussex ( university of queensland , australia ) masami suzuki ( kdd , japan ) yoichi tomiura ( kyushu university , japan ) hiroaki tsurumaru ( university of nagasaki , japan ) peter van beek ( university of alberta , canada ) ning zhong ( yamaguchi university , japan ) ingrid zukerman ( monash university , australia ) speakers : to be announced
</pre>

## Record 002430

**Label:** `benign`

<pre>
re : in confidence steve , rac will be a bit unhappy about it . i think that bjorn will object to it . let me talk to you tomorrow over the phone and discuss it . the question is how to present it to rac in a such a way that rodrigo will not be put in a bad light . vince steven leppard 11 / 06 / 2000 06 : 37 am to : vince j kaminski / hou / ect @ ect cc : subject : in confidence hi vince i &#x27; ve had a chat with rodrigo lamas , who is a bit unhappy in his current role in rac ( he wants to be a bit more proactive , and finds the inertia frustrating ) . i would be very interested in bringing him into research with responsibility for var / risk mgt , which is where his professional experience lies . he also has a phd in optimization from imperial college london which i &#x27; m sure we can make use of . there will obviously be some political issues involving such a move only 4 months into his career at enron , and if you &#x27; re able then i &#x27; m sure he &#x27; d appreciate a chat with you . we &#x27; re awaiting your response before rodrigo mentions this to anyone else . steve
</pre>

## Record 002431

**Label:** `benign`

<pre>
re : sorry i forgot the attachment . aimee lannou 02 / 05 / 2001 02 : 22 pm to : julie meyers / hou / ect @ ect cc : subject : do you have the feb . buyback and swing deal spreadsheet ? aimee
</pre>

## Record 002432

**Label:** `benign`

<pre>

&gt; On Thu, 22 Aug 2002, John P. Looney wrote:
&gt; &gt;  Sun&#x27;s hardware in general is more reliable,
&gt; ROFL. not in our experience.Well at least our Caps-Lock keys work:peter@staunton.ie said:
&gt; Another problem. I have a Dell branded keyboard and if I hit Caps-Lock
&gt; twice, the whole machine crashes (in Linux, not Windows) - even the on/
&gt; off switch is inactive, leaving me to reach for the power cable
&gt; instead.:-Pbauwolf@indigo.ie said:
&gt; as if he wanted Solaris 9 for x86, he&#x27;d be waiting a bit
erm... it runs Solaris x86 as standard...Cheers,
~Al-- 
Expressed in this posting are my opinions.  They are in no way related
to opinions held by my employer, Sun Microsystems.
Statements on Sun products included here are not gospel and may
be fiction rather than truth.-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 002433

**Label:** `benign`

<pre>
enron in action 06 . 26 . 00 ivolunteeri st . joseph hospital is looking for volunteers during the neonatal intensive care unit reunion . the reunion will give the staff , former patients and their families a chance to visit and allows the staff to view first - hand the success stories of their patients . volunteers are asked to assist with registration , set - up and decorations , games , snacks , photos , distribution of baseball caps and clean - up . your act of kindness will free - up the nursing staff so they can interact with the families . to be a part of this special day , please contact sue at 713 - 756 - 4009 . ihappeningsi schedule your appointment now ! enron blood drive on july 20 from 7 a . m . - 4 p . m . in eb - 5 c 2 . call 713 - 853 - 6100 to schedule an appointment . join one of houston &#x27; s leading dragonfly experts , bob honig of entrix , inc . ( an environmental consulting firm ) , as he is teaches us about these amazing insects . he will be the guest speaker at the wild @ work brown bag lunch on june 30 , 2000 ( friday ) in eb 5 c 2 from 11 : 30 to 12 : 30 . please rsvp to teresa nava at 713 - 646 - 7668 . register now for early bird power shopping , a new event at the 20 th annual nutcracker market on saturday , november 11 , 2000 at the astrohall . the nutcracker market , november 9 - 12 is the houston &#x27; s ballet &#x27; s largest fundraiser , and hosts more than 285 merchants from around the country , offering endless choices for the shopper . visit the community relations web site at http : / / home . enron . com / cr / and check out the benefits of being an early bird shopper . iworkperksi too much to do ? not enough hours to do it ? ceridian lifeworks * time squeeze audiotape / cd gives you up - to - date ideas and valuable advice on time management from expert mary loverde . call 800 . 635 . 0606 to talk with a ceridian lifeworks * consultant or visit the web site at isave the datei july 13 - foundation for financial literacy workshop . topic : use it but don &#x27; t abuse it : credit . for a complete listing of workshops , visit http : / / home . enron . com / efcu /
</pre>

## Record 002434

**Label:** `benign`

<pre>
Once upon a time, Brian wrote :&gt;     I was thinkinf about an addition of another file: apt-repositories.
&gt;     Stick it on apt.freshmeat.net (the center of the apt universe, IMHO)
&gt;     and every time a new repository is added, the RPM can be rebuilt. 
&gt;     Heck, if I could get out of my depression, I could make the whole
&gt;     submission process automated....even making the RPM...Well, I already keep a list of known apt repositories on
http://freshrpms.net/apt/ although I haven&#x27;t added the ones that were
talked about lately (actually I&#x27;ve been very busy over the week-end and I&#x27;m
sick right now...).You could make the whole submission automated, even making the rpm?http://rpmforge.net/ needs *you*!
Matthias-- 
Matthias Saou                                World Trade Center
-------------                                Edificio Norte 4 Planta
System and Network Engineer                  08039 Barcelona, Spain
Electronic Group Interactive                 Phone : +34 936 00 23 23_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002435

**Label:** `benign`

<pre>
re : qs : kinship terms sebastian adorjan dyhr &#x27;s question prompts me to put the following question to the list at large : does there exist in any language a word which means purely &quot; the other parent of one &#x27;s child &quot; in the strictly biological sense ( i . e . no legal , social , etc overtones ) ? formally , b is a &#x27;s x if a and b are the two parents of a child . what is x ? ( there is no lack for the parents &#x27; relation to the child : in english even &quot; sire &quot; and &quot; dam &quot; are usable for humans - just ! ) . nb : ad - hoc contrivances like &quot; co-parent &quot; earn no marks ! ted . ( ted . harding @ nessie . mcc . ac . uk )
</pre>

## Record 002436

**Label:** `benign`

<pre>
request book information earlier this morning i was on the phone with a friend of mine living in south america . as we were talking in spanish , he said : &quot; si voy a la liberi &#x27; a , comprare &#x27; el libro &quot; which can be rendered into english as &quot; if i go to the bookstore , i will purchase it &quot; . i found this expression a bit unusual so i asked him saying that he really meant to say &quot; si fuese a la libreri &#x27; a , comprari &#x27; a el libro &quot; or &quot; if i were to go to the bookstore , i would buy it &quot; to which he said to me , &quot; ah , the subjunctive is dead in spanish ! &quot; . weather this is a matter of subjunctive discussion or not , is something to be left for another time . nevertheless , he mentioned in the course of our conversation that there is a book ( a spanish translation of a french original ) titled something like &quot; la muerte del subjuntivo &quot; or &quot; the demise / death of the subjunctive &quot; . does any one know of this book ? or books which may deal with similar content ? any and all help will be appreciated . joseph m kozono &lt; kozonoj @ gunet . georgetown . edu &gt;
</pre>

## Record 002437

**Label:** `benign`

<pre>
Today&#x27;s Headlines from The Register
-----------------------------------    To unsubscribe from this daily news update, see the instructions at
    the end of this message.Software    Bill Gates spams the world on Trustworthy Computing
    Integrity? He&#x27;s heard of it too...
        http://www.theregister.co.uk/content/4/26292.html    ElcomSoft rubbishes eBook security ahead of Sklyarov case
    Shot across the bows
        http://www.theregister.co.uk/content/4/26291.html    Capitalist tool Forbes tools up for Linux
    Insurgents win glossy special report accolade
        http://www.theregister.co.uk/content/4/26289.html    China to build own version of Windows 98
    Compatible with Office 2000 and Word, says here
        http://www.theregister.co.uk/content/4/26278.htmlPersonal Hardware    Dan sold - but not as going concern
    New owner buys assets
        http://www.theregister.co.uk/content/54/26287.htmlSemiconductors    Inventor of Risc chips dies
    John Cocke RIP
        http://www.theregister.co.uk/content/3/26293.htmlInternet    JPEG guardians vow to defend free images
    All your compression tech belongs to ï¿½ er,  somebody in Texas
        http://www.theregister.co.uk/content/6/26296.html    KPNQwest employees abandon posts
    Network on cruise control
        http://www.theregister.co.uk/content/6/26295.html    BT broadband barometer shows faulty readings
    Open wide
        http://www.theregister.co.uk/content/6/26286.html    Dutch judge tears up bulk mail ban
    Be a good boy and eat your spam
        http://www.theregister.co.uk/content/6/26283.html    WorldCom to face bankruptcy on Monday?
    So it seems
        http://www.theregister.co.uk/content/6/26280.html    Easynet buys ex-Energis German ops
    Subject to approvals...
        http://www.theregister.co.uk/content/6/26279.html    Time Warner takes over AOL
    Grownups back in charge
        http://www.theregister.co.uk/content/6/26276.htmlNet Security    Face recognition fails in Boston airport
    The patriotic scam goes on
        http://www.theregister.co.uk/content/55/26298.html    New thomas.greene spam circulating
    Filter me!
        http://www.theregister.co.uk/content/55/26294.html    ElcomSoft rubbishes eBook security ahead of Sklyarov case
    Shot across the bows
        http://www.theregister.co.uk/content/55/26291.html    The Devil is in the Detail
    The SCREWTAPE Letters
        http://www.theregister.co.uk/content/55/26284.htmlBusiness    Ericsson axes 5,000 jobs
    Posts worse than expected losses
        http://www.theregister.co.uk/content/7/26282.html    Sun goes back into black
    Back in the black as US sales increase 20%
        http://www.theregister.co.uk/content/7/26281.html    MS licensing deadline boosts popularity of WinXP
    Funny that...
        http://www.theregister.co.uk/content/7/26277.html    Time Warner takes over AOL
    Grownups back in charge
        http://www.theregister.co.uk/content/7/26276.htmlBroadband    Satellite broadband for cars goes live in UK
    Unfortunately, there&#x27;s just the teensiest problem...
        http://www.theregister.co.uk/content/22/26288.html    BT broadband barometer shows faulty readings
    Open wide
        http://www.theregister.co.uk/content/22/26286.htmlThe Mac Channel    Apple must raise prices - Now!
    Letters Jobs, you&#x27;re too cheap
        http://www.theregister.co.uk/content/39/26297.htmlChannel Flannel    Dan sold - but not as going concern
    New owner buys assets
        http://www.theregister.co.uk/content/51/26287.htmlThe Register and its contents are copyright 2002 Situation Publishing.
All rights reserved.    Tel:     +44 (0)20 7499 2264.
    Fax:     +44 (0)20 7493 5922.
    E-Mail:  press.releases@theregister.co.ukTo unsubscribe from these daily updates, visit the following URL.  Make
sure that you enter exactly the same e-mail address as you used to join
this service.    http://list.theregister.co.uk/cgi-bin/unsub.cgi

</pre>

## Record 002438

**Label:** `benign`

<pre>
conv / div of dialects , reading , sept 17-19 the draft programme for the european science foundation conference on &#x27; the convergence and divergence of dialects in a changing europe &#x27; can be found at http : / / www . linguistics . rdg . ac . uk / research / seminars / dialect / index . html the conference call with registration form is also to be found there . paul kerswill
</pre>

## Record 002439

**Label:** `benign`

<pre>
fw : creditex , loanx , enron introductions louise : do you have any interest in attending this ? buy and kopper are scheduled to attend . wednesday , 10 : 45 am . - - - - - original message - - - - - from : &quot; michael rushmore &quot; @ enron sent : monday , april 23 , 2001 11 : 01 am to : fastow , andrew s . cc : sunil hirani ; dik blewitt subject : creditex , loanx , enron introductions hello andy . it &#x27; s been a long time since we talked , but i trust that things are well with you and lea . the reason for my email is that my business partners sunil hirani and dik blewitt are going to be in houston visiting with ken lay at 10 : 30 a . m . on wednesday . i think that you would find their business ( trading credit risk ) to be of interest , and i know they would like to meet you . would you have any time on your calendar for lunch or for an introduction during the afternoon ? briefly , sunil is the co - founder of creditex , a the credit derivatives trading platform that the market has adopted as the e - market for credit derivatives . dik is chief strategic officer of creditex . my relationship with dik and sunil comes from our shared interest in trading syndicated loans . creditex and i have co - founded loanx , inc . , to do for the loan market what creditex has done for the credit derivatives market . sorry for the out - of - the blue email , but i look forward to catching up with you in the future . i &#x27; ve copied sunil and dik to facilitate any schedule coordination that might be possible . my best to lea . mike michael . rushmore @ loanx . com 312 - 282 - 7777 ( cell ) loanx , inc . 125 s . wacker ste 1150 chicago , il 60606
</pre>

## Record 002440

**Label:** `benign`

<pre>
use Perl Daily NewsletterIn this issue:
    * This Week on perl5-porters (16-22 September 2002)
    * The Great Perl Monger Cull Of 2002+--------------------------------------------------------------------+
| This Week on perl5-porters (16-22 September 2002)                  |
|   posted by rafael on Monday September 23, @07:58 (summaries)      |
|   http://use.perl.org/article.pl?sid=02/09/23/125230               |
+--------------------------------------------------------------------+That&#x27;s on a week like this that you realize that lots of porters are
European (and managed to free themselves for YAPC::Europe.) Or were they,
on the contrary, too busy in the big blue room ? On the other hand, the
number of bug reports stayed at its habitual average level.This story continues at:
    http://use.perl.org/article.pl?sid=02/09/23/125230Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/23/125230
+--------------------------------------------------------------------+
| The Great Perl Monger Cull Of 2002                                 |
|   posted by ziggy on Monday September 23, @16:38 (news)            |
|   http://use.perl.org/article.pl?sid=02/09/23/2041201              |
+--------------------------------------------------------------------+[0]davorg writes &quot;If you take a look at [1]list of local groups on the
[2]Perl Mongers web site, you&#x27;ll see that it&#x27;s just got a good deal
shorter. Over the last month or so, I&#x27;ve been making strenuous efforts to
contact all of the groups we had listed to see which ones were still
active. What you see is the result of this exercise. Almost half of the
groups have been removed because they haven&#x27;t responded to my emails.If your local group still exists but is no longer listed, then that means
that I don&#x27;t have an update to date contact for your group. Please [3]let
me know if that&#x27;s the case.&quot;Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/09/23/2041201Links:
    0. mailto:dave@dave.org.uk
    1. http://www.pm.org/groups/
    2. http://www.pm.org/
    3. mailto:user_groups@pm.orgCopyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.

</pre>

## Record 002441

**Label:** `benign`

<pre>
re : visit to houston - - - - - - - - - - - - - - - - - - - - - - forwarded by stinson gibner / hou / ect on 02 / 13 / 2001 04 : 37 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - stinson gibner 02 / 13 / 2001 04 : 36 pm to : nick bambos @ enron cc : subject : re : visit to houston nick , friday , march 9 seems to be better for jim fallon . we are tentatively setting meeting with him , paul racicot , and probably arshak sarkissian who is heading the ip trading effort . let me know if you would like to give a presentation so we can reserve a room and send invitations . it will be fun to see you and giuseppe again . i am looking forward to your visit . regards , stinson nick bambos on 02 / 09 / 2001 11 : 33 : 33 am to : stinson . gibner @ enron . com cc : gappy @ stanford . edu , cope @ csli . stanford . edu subject : re : visit to houston hi stinson , eventually , the team here ( giuseppe , eric , myself ) has converged to two possible dates to propose for a visit : 1 ) friday , march 2 2 ) friday , march 9 how do these look on your side ? we &#x27; ll structure the agenda immediately after we fix the date . i look forward to seeing you again . best , nick stinson . gibner @ enron . com wrote : &gt; &gt; nick , &gt; &gt; i hope things are going well and you are not staying too busy . we should &gt; start planning for your next trip to houston , as i &#x27; m sure your schedule &gt; will be getting full very soon . perhaps you could give the people in &gt; enron broadband an overview of the areas of interest within your research &gt; group . i &#x27; m sure we could also benefit from you views of how the current &gt; technology is evolving . &gt; &gt; are there certain dates which would potentially work for you ? please let &gt; me know by email or give me a call at 713 853 4748 . &gt; &gt; looking forward to talking with you . &gt; &gt; - - stinson
</pre>

## Record 002442

**Label:** `benign`

<pre>
summary points - cdwr attached please find some notes for the 3 / 26 4 : 00 pm cst meeting .
</pre>

## Record 002443

**Label:** `benign`

<pre>
re : 6 . 1049 , sum : e - mail citation on occasion i have heard or read papers , usually on discourse , that use as data excerpts from the conversation or interview books by studs terkel ( such as _ working _ or _ the good war _ ) . as a resident of chicago , i have the opportunity to hear studs terkel &#x27;s daily radio program broadcast on wfmt . once in a while , i have happened to read a passage in one of the books within a few days of hearing the same interview in a broadcast , and i have noticed that the published version does not correspond exactly to what is on the tape . that is , studs terkel edits the material for style before it goes into print . i had the opportunity to confirm this in a brief conversation with studs terkel on saturday afternoon , 29 july 1995 . ( he &#x27;s a lot haler than any 85 - year-old could expect to be . ) first , when i told him his works were being used as data by linguists , he was immensely pleased , and he said , &quot; you &#x27; ve made my day &quot; ; but he also confirmed that he edits the words of his subjects before he publishes them , and gave me his blessing to announce this to linguists who may be interested . the conversations in terkel &#x27;s books give every impression of being the genuine words of the people who speak them - - and they would certainly recognize themselves in the excerpts - - but studs terkel is a very accomplished literary artist , and does n&#x27;t want his work to be acclaimed as the ipsissima verba of his workers , his soldiers , or any of his other subjects . i &#x27; m sure he &#x27;d like to receive copies of papers that cite his writings ; you could send them to him c / o wfmt , 303 e . wacker drive , chicago , il 60601 . - peter t . daniels , pdaniels @ press-gopher . uchicago . edu
</pre>

## Record 002444

**Label:** `benign`

<pre>
Are there any mailing lists (non-newsgroups) for C++ and C Beginners
and Advanced programmers?Links are welcomed!-- 
Note: When you reply to this message, please include the mailing
      list/newsgroup address and my email address in To:.*********************************************************************
Signed,
SoloCDM-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002445

**Label:** `benign`

<pre>
Why am I so passionate about decentralization? Because I believe some of 
todayâ€™s most profound problems with networked applications are caused by 
centralization.Generically, a centralized political or economic system permits only one 
answer to a question, while decentralization permits many separate 
agents to hold different opinions of the same matter. In the specific 
context of software, centralized variables can only contain one valid 
value at a time. That limits us to only representing information A) 
according to the beliefs of a single agency, and B) that changes more 
slowly than it takes to propagate. Nevertheless, centralization is the 
basis for todayâ€™s most popular architectural style for developing 
network applications: client-server interaction using request-response 
communication protocols.I believe these are profound limitations, which we are already 
encountering in practice. Spam, for example, is in the eye of the 
beholder, yet our email protocols and tools do not acknowledge the 
separate interests of senders and receivers. Slamming, for another, 
unfairly advantages the bidder with the lowest-latency connection to a 
centralized auction server. Sharing ad-hoc wireless networks is yet a 
third example of decentralized resource allocation. Furthermore, as 
abstract as centralization-induced failures might seem today, these 
limits will _not_ improve as the cost of computing, storage, and 
communication bandwidth continue to plummet. Instead, the speed of light 
and human independence constitute _fundamental_ limits to centralized 
information representation, and hence centralized software architecture.

</pre>

## Record 002446

**Label:** `benign`

<pre>
surplus industrial supply could relieve mexico &#x27; s summer power shortage - cera insight see attached file . - - - - - original message - - - - - from : cera webmaster [ mailto : webmaster @ cera . com ] sent : thursday , august 02 , 2001 9 : 02 pm to : cera clients subject : surplus industrial supply could relieve mexico &#x27; s summer power shortage - cera insight title : mexican power markets : cfe looks to industrial generators for excess power , but many questions remain url ( s ) : surplus industrial supply could relieve mexico &#x27; s summer power shortage power plants being built under the comision reguladora de energia &#x27; s ( cfe ) independent power producer program will not be available until the end of the year , leaving a very tight market during the summer peak demand season . president vicente fox recently announced that the cfe would increase the capacity that industrial generators could sell back to the national grid . the initiative was met with resistance by many members of mexico &#x27; s congress , however , and has been suspended pending judicial review . the success of the program will depend on three factors : * is there enough surplus capacity available where it is needed ? * is the cfe willing to offer an attractive price ? * will the courts allow it to happen ? * * end * * follow above url for complete insight ( 8 printed pages ) . e - mail category : insight cera knowledge area ( s ) : mexico gas &amp; power to make changes to your cera . com profile go to : forgot your username and password ? go to : this electronic message and attachments , if any , contain information from cambridge energy research associates , inc . ( cera ) which is confidential and may be privileged . unauthorized disclosure , copying , distribution or use of the contents of this message or any attachments , in whole or in part , is strictly prohibited . terms of use : questions / comments : webmaster @ cera . com copyright 2001 . cambridge energy research associates
</pre>

## Record 002447

**Label:** `benign`

<pre>
citi spoke with rick stuckey who advised me that a group of seven of them will be arriving today . they would like to heave specific discussions regarding the pro forma as well as enrononline technology starting monday morning . rick also adivsed me that they are amending the original term sheet that they disucssed with greg saturday night . i will keep you posted .
</pre>

## Record 002448

**Label:** `benign`

<pre>
revised customer list attached is the revised list with changes you requested . i spoke with frank vickers about a few of the entries to ensure they were not duplicates with regards to cities and their departs . he advised that we would consider them two customers . example : talahassee , city of talahassee electric this would greatly assist with sorting the information . after your review i can send back to the gas teams and ask them to populate some of the missing data if you wish . regards , tammy
</pre>

## Record 002449

**Label:** `benign`

<pre>
98 - 6892 overflow can you please extend sitara deal ticket 16888 to the 15 th ? 14 dec . flowed on this day . thanks - jackie -
</pre>

## Record 002450

**Label:** `benign`

<pre>
available for review : kpelle dictionary , phonology the books listed below are in the linguist office and now available for review . if you are interested in reviewing a book ( or leading a discussion of the book ) ; please contact our book review editor , andrew carnie , ph . d . , at : carnie @ linguistlist . org please include in your request message a brief statement about your research interests , background , affiliation and other information that might be valuable to help us select a suitable reviewer . do not include an electronic cv or a url linking to a personal homepage . these will be ignored . please also send a surface mail address for us to send the book to . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * kpelle dictionary kpelle - english dictionary with english - kpelle glossary elizabeth grace winkler ( indiana university - bloomington ) iulc publications . 1997 this dictionary of kpelle as spoken in bong county , liberia was prepared with the assistance of clara jimmy - samba , a native speaker of the language . kpelle is part of the mande branch of the western sudanic subgroup of the niger congo family and is representative of mande languages in many ways , including the absence of noun class markers and the presence of five tonal melodies . as kplelle is not a written language , dictionary entries ( over 1 , 100 ) are given in phonetic transcription . also included are comments on the sound system and grammar of kpelle . phonology ncholas j . kibre ( 1997 ) a model of mutation in welsh . iulc publications . bloomington . in light of recent advances in several areas of linguistics , kibre examines the phenomenon o finitial consonant mutation in welsh , arguing that mutation should be considered part of the phonological representation of morphemes . several sets of mixed mutation types are accounted for within the framework of lexical phonology , particularly through an appeal to the elsewhere condition . several &quot; structural &quot; mutations are accounted for in terms of mutation-triggering but segmentally empty particles . the analysis concludes with an outline of a mixed model incorporating rules into an ot framework which offers advantages over the traditional generative approach .
</pre>

## Record 002451

**Label:** `benign`

<pre>
wayne tow &#x27; s resume kathy / greg / john - do we need the skills described in the attached resume on the project team or in the permanent support group or in the esupply group ? there are no personal recommendations associated this resume . vince - thanks for keeping us in mind ! - - - - - - - - - - - - - - - - - - - - - - forwarded by melissa becker / corp / enron on 02 / 01 / 2000 01 : 58 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - vince j kaminski @ ect 01 / 31 / 2000 09 : 04 am to : melissa becker / corp / enron @ enron cc : subject : wayne tow &#x27; s resume melissa , please , take a look at this resume . any interest ? i got it from a headhunter ( i don &#x27; t know her , it was a cold call on her part and she did not make a good impression ) . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 01 / 31 / 2000 09 : 01 am - - - - - - - - - - - - - - - - - - - - - - - - - - - leewells @ swbell . net on 01 / 25 / 2000 05 : 34 : 57 pm please respond to leewells @ swbell . net to : vince j kaminski / hou / ect @ ect cc : subject : wayne tow &#x27; s resume hi there mr . kaminski ! it was a pleasure to speak with you today . i look forward to lunch one day soon at brennans . wayne tow is a brilliant man , he worked for many years for a man i know well . this man says , wayne is as good as it get , and he could do anything that is assigned to him , and do it at a level in which he was always amazed . he loves the e - commerce area , and this is what he wants to do thank you , vince . lee wells - wayne 2 . doc
</pre>

## Record 002452

**Label:** `benign`

<pre>
&gt;That Goddess Chick wrote:
&gt;&gt;
&gt;&gt;  &gt;Thanks Fel.  Got no scanner.  My photo is in that group of 100 obsessive
&gt;&gt;  &gt;compulsive clipsters in FT, 1996 or 1997.
&gt;&gt;  &gt;
&gt;&gt;  &gt;Terry
&gt;&gt;
&gt;&gt;  Great, and right now all my pre &#x27;98s are in Washington state, in a
&gt;&gt;  cardboard box in a shed in the back of Sydde&#x27;s garage. Probably mice
&gt;&gt;  nests by now. :-(  Put a scanner on your Christmas list right above
&gt;&gt;  world peace!
&gt;&gt;  --
&gt;&gt;
&gt;&gt;  Fel
&gt;&gt;  NEW!! Cafe Forteana is back: 
&gt;&gt;http://www.frogstone.net/Cafe/CafeForteana.html
&gt;
&gt;Maybe a kind soul with access to that issue and a scanner could scan it and
&gt;forward to you.
&gt;
&gt;Terry
&gt;I would appreciate that very much as I won&#x27;t be getting back to 
Washington until December.
-- 
Fel
NEW!! Cafe Forteana is back: http://www.frogstone.net/Cafe/CafeForteana.html
http://www.frogstone.net
Weird Page: http://my.athenet.net/~felinda/WeirdPage.html[Non-text portions of this message have been removed]
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
Sell a Home with Ease!
http://us.click.yahoo.com/SrPZMC/kTmEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002453

**Label:** `benign`

<pre>
iris mack vince : i received a phone call yesterday afternoon from iris , with a special request of you . she says that she will have to break her lease when she comes to houston . she will have a three - month period during which she will have to pay rent ( march , april and may ) , at the monthly rate of $ 1 , 175 . she is asking if we would be willing to pay $ 3 , 525 to compensate her for this extra expense . i have a phone call in to the relocation department to find out how much cash iris will be receiving from us under the normal relocation benefits , and will let you know as soon as i hear from them . i would imagine that it is a fairly substantial amount , since she is moving from california and since our relocation benefit is very generous . molly
</pre>

## Record 002454

**Label:** `benign`

<pre>
raptor position reports for 12 / 28 / 00 attached are the latest available daily position report files for the 4 raptor vehicles which include spreadsheets detailing what is hedged within each vehicle . one thing that i forgot to mention in our meeting yesterday is that there is considerable indecision as to whether or not raptor 4 will be included in the cross - guarantees , so we will need to have a value with or without raptor 4 . i will send a follow - up e - mail with the latest drafts available for the cross guarantees . let me know as questions arise . thanks again . ron - - - - - forwarded by ron baker / corp / enron on 01 / 03 / 2001 09 : 25 am - - - - - gordon mckillop 12 / 29 / 2000 12 : 26 pm to : ben f glisan / hou / ect @ ect , andrew s fastow / hou / ect @ ect , richard causey / corp / enron @ enron , rick buy / hou / ect @ ect , greg whalley / hou / ect @ ect cc : barry schnapper / corp / enron @ enron , andrea v reed / hou / ect @ ect , ryan siurek / corp / enron @ enron , kevin d jordan / corp / enron @ enron , michael kopper / hou / ect @ ect , chris loehr / hou / ect @ ect , anne yaeger / hou / ect @ ect , rodney faldyn / corp / enron @ enron , ron baker / corp / enron @ enron , amy . flores @ ljminvestments . com , l &#x27; sheryl hudson / hou / ect @ ect , wes colwell / hou / ect @ ect , kevin howard / enron communications @ enron communications , david port / market risk / corp / enron @ enron , jordan mintz / hou / ect @ ect , maria lebeau / hou / ect @ ect , michael s galvan / hou / ect @ ect , david maxwell / hou / ect @ ect , susie ayala / hou / ect @ ect , hope vargas / hou / ect @ ect , bob butts / gpgfin / enron @ enron subject : raptor position reports for 12 / 28 / 00
</pre>

## Record 002455

**Label:** `benign`

<pre>
begin forwarded text To: rah@philodox.com Subject: Internet Defamation Suit Ends With Defense Verdict Date: Mon, 5 Aug 2002 10:08:41 -0400 (EDT) From: SomebodyInternet Defamation Suit Ends With Defense Verdicthttp://www.law.com/servlet/ContentServer?pagename=OpenMarket/Xcelerate/View&amp;c=LawArticle&amp;cid=1028320303259&amp;t=LawArticleTechJohn Council Texas Lawyer 08-05-2002In one of the first trials in the country to address Internet defamation, a Dallas County, Texas, jury last week rejected a $700 million suit by an Internet company that claimed it was harmed by negative electronic messages posted by an employee of a competing company.ZixIt, a Dallas Internet company, filed ZixIt Corp. v. Visa International, et al. in 1999, alleging it was harmed by Paul Guthrie, then a vice president with Visa. ZixIt alleged in its suit that Guthrie posted more than 400 anonymous messages, many of them negative, about ZixIt on the Yahoo Finance ZixIt Internet message board, causing ZixIt&#x27;s stock price to drop.The suit also alleged that the postings destroyed the company&#x27;s ability to market its ZixCharge Internet transaction authorization system, which allows consumers to make purchases without revealing their credit card numbers to merchants. Visa has a similar Internet payment system.ZixIt alleged that the postings caused its stock price to plummet. Had the product been successful, the company believed it would have been worth more than $1 billion, according to lawyers involved in the case.On July 31, a jury in Judge Merrill Hartman&#x27;s 192nd District Court found that ZixIt&#x27;s product was not harmed by the postings.Neal Manne and Kenneth McNeil, lawyers from Houston&#x27;s Susman Godfrey who represented ZixIt at trial, did not return calls for comment by press time.&quot;The company hasn&#x27;t made any decision about an appeal,&quot; says Cindy Lawrence, a ZixIt spokeswoman. &quot;The outcome of the lawsuit doesn&#x27;t have any effect on our future products and services in e-messaging.&quot;GETTING GRADEDVisa&#x27;s lawyers alleged that Guthrie acted on his own and had a right to free speech, and that Guthrie&#x27;s Internet postings had no effect on ZixIt&#x27;s stock. Guthrie has since left Visa, lawyers for the company say. Guthrie was not a defendant in the case. However, his interests in the case were represented by Todd Noonan, an attorney in Sacramento, Calif.&#x27;s Stevens &amp; O&#x27;Connell. Noonan was recovering from surgery last week and was unavailable for comment.&quot;I think people believe whether you succeed or fail [is] because of what you do and not what other people do to you. Internet companies didn&#x27;t succeed for all sorts of reasons,&quot; says Jeff Tillotson, a partner in Dallas&#x27; Lynn, Tillotson &amp; Pinker, who defended Visa at trial.ZixIt&#x27;s case was a hard sell to the jury, especially with the reality of the economy, Tillotson says.&quot;Everyone knows that the stock market has fallen and the trouble with Internet companies. I think the jury took that into account,&quot; Tillotson says.There were lessons to be learned from the Internet defamation trial, says Mike Lynn, who also represented Visa at trial. Even though message boards are considered a protected form of free speech, that freedom won&#x27;t prevent a company from being dragged into court if its employee blasts another company on the Internet, Lynn says.&quot;A company can be responsible for what an employee posts on a message board,&quot; Lynn says. &quot;The courts have said you&#x27;re entitled to go to a jury to determine whether there are damages as a result of that. The law is very odd, not mature, [and] damage theories are not mature.&quot;The nature of the case also added an interesting twist to the trial, Tillotson says. Many of those who posted messages on the board attended the trial and posted comments about the daily proceedings throughout the three-week trial, he says.&quot;It was apparent to everyone that many of the people who posted on these message boards were watching the trial,&quot; Tillotson says. &quot;It really was wild. The lawyers felt like they were being graded.&quot;-- --- end forwarded text -- ----------------- R. A. Hettinga The Internet Bearer Underwriting Corporation 44 Farquhar Street, Boston, MA 02131 USA &quot;... however it may deserve respect for its usefulness and antiquity, [predicting the end of the world] has not been found agreeable to experience.&quot; -- Edward Gibbon, &#x27;Decline and Fall of the Roman Empire&#x27; http://xent.com/mailman/listinfo/fork
</pre>

## Record 002456

**Label:** `benign`

<pre>
available for review : syntax , optimality , acquisition the books listed below are in the linguist office and now available for review . if you are interested in reviewing a book ( or leading a discussion of the book ) ; please contact our book review editor , andrew carnie , at : carnie @ linguistlist . org please include in your request message a brief statement about your research interests , background , affiliation and other information that might be valuable to help us select a suitable reviewer . please do * not * simply point to an online cv or website , such messages will be ignored . syntax beerman , leblanc and van riemsdijk . 1997 . rightward movement . john benjamins . philadephia syntax , semantics and acquisition : crain and thornton . 1998 . investigations in universal grammar . a guide to experiments on the acquisition of syntax and semantics . mit press . cambridge . optimality and syntax barbosa , fox , hagstrom , mcginnis and pesetsky eds . 1998 . optimality and competition in syntax . mit press . cambridge .
</pre>

## Record 002457

**Label:** `benign`

<pre>
contact name for executing gisb agreement darren i called this afternoon but you were out . i hope all is well with you with respect to the recent events . would you please call me regarding the following two matters . 1 ) i am looking for a contact name and number for the person at enron that can help us get a gisb agreement in place . our company went through a large bank financing and we are going to be conducting commercial operations under the entity known as anp funding i , llc . therefore , we would like to set up a gisb agreement between enron and anp funding i , llc . becky kalmick works with me and she is responsible for executing the gisb agreement . would you please let me know who we can speak with regarding the agreement . also , would you please give your contact heads up as to what we want to do . please note that i am dealing with mary cook in your company regarding the execution of an isda agreement . becky kalmick work 713 - 613 - 4376 email bkalmick @ anpower . com 2 ) i would like to talk with you about the hays power plant that connected to oasis pipe line and el paso texas pipeline . we have firm transport on oasis from either waha , katy or mid - state . thanks trey 713 - 613 - 4396
</pre>

## Record 002458

**Label:** `benign`

<pre>
montana volumes - &#x27; 00 - &#x27; 01 real time volumes traded with mpc for 2000 - 01 : 2000 ( complete year ) purchases - 170 , 198 mwh sales - 6 , 739 transmission - 2 , 725 total - 179 , 662 mwh 2001 ( year - to - date ) purchases - 127 , 112 mwh sales - 856 transmission - 1 , 741 total - 129 , 709
</pre>

## Record 002459

**Label:** `benign`

<pre>

ZDNet AnchorDesk NewsletterTUESDAY, JULY 16, 2002
Why we&#x27;re changing our publishing schedule
Dear Reader,As of Monday, July 15, AnchorDesk is being published on Mondays, Wednesdays, and Fridays, instead of five days a week. The AnchorDesk Weekly newsletter will continued to be published every FridayWhy are we doing this? There are several reasons, but the most important one is giving me a chance do more than just sit behind a desk typing all day in order to meet deadlines.  I&#x27;ve been writing five columns a week for 18 months now, and I&#x27;d be lying to you if I didn&#x27;t admit to being more than a little tired.  Also, I&#x27;ve been on such a short leash that I haven&#x27;t been able to travel or meet as many people as I&#x27;d like. This new schedule means I&#x27;ll have more time to get out, learn more, see more products, and discover new issues or trends. So it should result in a more interesting and useful AnchorDesk for you.Having additional time also means I will be able to work on several projects I&#x27;ve been assigned, including one that could bear fruit at the Consumer Electronics Show next January. More about that soon, once all the details are nailed down.For now, the new schedule is being called a &quot;test,&quot; which means it could turn out to be temporary--or maybe not. We&#x27;ll run it through the end of the summer and see how it works. I appreciate your continued support of AnchorDesk. While the column will be less frequent, I will still be on CNET Radio every weekday at noon PT (or on-demand streaming anytime) and hope you will join me there.Sincerely,
David Coursey
Executive Editor
AnchorDesk
   
Sign up for more free newsletters from ZDNetThe e-mail address for your subscription isÂ qqqqqqqqqq-zdnet@spamassassin.taint.orgUnsubscribeÂ | 
        Â Manage 
        My SubscriptionsÂ |Â FAQÂ | 
        Â Advertise
Home |eBusiness | Security | Networking | Applications | Platforms | Hardware | Careers
        Copyright 2002 CNET Networks, Inc. All rights reserved. ZDNet is a registered service mark of CNET Networks, Inc.          

</pre>

## Record 002460

**Label:** `benign`

<pre>
proposed payment changes from dave forster for eol louise - i spoke with dave last night and he would like to propose the following changes . stephanie sever from $ 6 , 500 to $ 7 , 000 christopher walker from $ 2 , 000 to $ 4 , 000 ( jennifer denny highly recommends , contributions not reflected in mid - year rating ) fraisy george from $ 2 , 479 to $ 3 , 000 ( used to be in call center , nature of job changed and has increased responsibility from mid - year ) adam johnson from $ 2 , 000 to $ 6 , 000 ( jennifer denny highly recommends , would take him over anyone else at his level , feels should be compensated for his contributions ) please let me know your thoughts . amy
</pre>

## Record 002461

**Label:** `benign`

<pre>
At 13:06 06/08/2002, John P. Looney wrote:
&gt;[snip]
&gt;  There is a nice need &#x27;add_install_client&#x27; script that you feed the
&gt;archtecture, ethernet address &amp; ip to, and it&#x27;ll setup everything from
&gt;RARP to Bootparams for you. Very simple.Yep, very handy and easy enough.&gt;  This script takes a -d option, to boot via DHCP also. On the negative
&gt;side, Sun&#x27;s terminal handling leaves a lot to be desired - it won&#x27;t work
&gt;properly on a Wyse 120+ for instance, no matter what emulation mode the
&gt;Wyse is trying to do.True, SUN&#x27;s terminal handling isn&#x27;t the best in the world.&gt;  To do PC netbooting properly, you need an motherbard with a PXE BIOS.
&gt;Then you are flying.OR a network card with a BootRom installed, and BIOS support to boot of the 
network.&gt;  Heh, how hard would it be to get a PC with an OpenBoot prom ?You could burn a PROM yourself, if you&#x27;d wish. I believe that the netboot 
project would have a PROM you could download and burn, having the needed 
h/w of course.. ;)//Anders//
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002462

**Label:** `benign`

<pre>
URL: http://scriptingnews.userland.com/backissues/2002/09/23#When:12:45:28PM
Date: Mon, 23 Sep 2002 19:45:28 GMTJeremy Zawodny[1] who works at Yahoo Finance offers an RSS 0.91 feed for every 
stock. It&#x27;s a beta feature. Here&#x27;s the feed for Microsoft[2] and one for 
Marimba[3]. Thanks to Jon Udell[4] for the pointer. Nice. Jon also notes that 
Microsoft doesn&#x27;t show up too strong in the weblog world and describes[5] a 
conversation with John Montgomery about this. What a small world. John and I 
got to know each other when we did the work on SOAP in the late 90s, and weblog 
software is one of the major reasons we were interested in SOAP. So close, but 
so far. But it&#x27;s never too late![1] http://jeremy.zawodny.com/blog/archives/000187.html
[2] http://rss.finance.yahoo.com/rss/get?ticker=MSFT
[3] http://rss.finance.yahoo.com/rss/get?ticker=MRBA
[4] http://weblog.infoworld.com/udell/2002/09/23.html#a422
[5] http://weblog.infoworld.com/udell/2002/09/23.html#a421

</pre>

## Record 002463

**Label:** `benign`

<pre>
* both . . . and i discovered in a class yesterday that most of my younger undergraduates rejected both as a correlative conjunction , as in ( 1 ) , while allowing either . . . or without any complaints at all . ( 1 ) a john both drinks wine and smokes cigars . b john drinks both wine and beer . they were both clear and unanimous . has anyone else found this ? is it a change , or has both . . . and always been the kind of thing you only learned by reading lots of books ( which our youngsters do n&#x27;t do ) ? dick hudson dept of phonetics and linguistics , university college london , gower street , london wc1e 6bt uclyrah @ ucl . ac . uk
</pre>

## Record 002464

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8404725,1717/
Date: 2002-09-30T19:18:23+01:00(Some Guy)

</pre>

## Record 002465

**Label:** `benign`

<pre>
On Wed, 21 Aug 2002 12:42:17 BST, Kiall Mac Innes said:
&gt;Hi i have a phillips head skrew thats holding a circut board together i need
&gt;to take it out ASAP and nothing will work, the threads on the skrew are
&gt;almost completly gone, its is a very small skrew that i have to use a
&gt;percision skrewdriver set to remove the skrews any help would be
&gt;appreaciated...Get a very, *very* small set of drill bits.  Start drilling right
through the center of the head, at a slow speed so you don&#x27;t pop
off and through the board!  Once you have a bit of an indent in,
increase the speed a little bit.If you&#x27;ve made a deepish indent, and the head doesn&#x27;t pop off, use
the next largest drill bit you have.  Repeat until happy.Eventually the head should just pop off, allowing you to lift the
board off over the shaft of the screw... then ye can take out the
rest fairly easily with a pliers or whatnot.-- 
	Niall-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 002466

**Label:** `benign`

<pre>
fw : victoria storey &#x27; s baby - - - - - original message - - - - - from : hillier , bob sent : wednesday , may 02 , 2001 7 : 46 am to : webb , jay subject : fw : victoria storey &#x27; s baby fyi . . . . . bbh - - - - - original message - - - - - from : wu , barbara sent : tuesday , may 01 , 2001 3 : 56 pm to : hillier , bob ; bowling , chris ; nguyen , mai ; cummins , douglas ; gonzales , francis ; harrell , dan ; burks , andrew ; sablatura , james ; lim , kenneth ; moen , steve subject : victoria storey &#x27; s baby vicki called me today to announce that her baby boy has arrived ! cameron james storey 4 : 29 am - april 28 th 7 lbs . - 19 inches vicki looks forward to going home today , as she and cameron are doing well .
</pre>

## Record 002467

**Label:** `benign`

<pre>
URL: http://jeremy.zawodny.com/blog/archives/000215.html
Date: 2002-10-02T17:02:15-08:00This talk is not supposed to be technical or marketing, but more of a ramble. 
We&#x27;ll see. :-) &quot;Living above the Curve&quot; BB is a strange company, as they&#x27;ve 
been Mac-only are have been in business for over 10 years....

</pre>

## Record 002468

**Label:** `benign`

<pre>
re : 5 . 1462 comparative method a couple of remarks on recent exchange on comparative method : 1 ) as far as importance of morphology is concerned i believe that alexis is right ( sorry , karl ! ) . it is important , but i think that it would be impossible to insist that only morphological prallels like latin est , sunt and german ist , sind cited by karl teeter can prove relationship . old church slavic has the parallel forms iest # and so ~ t # , perfectly agreeing with karl teeter &#x27;s latin and german . however , in modern russian the present of copula dissapeared ( we can still recognize forms like iest &#x27; and sut &#x27; , but they sound bitterly archaic ) : on student ( he [ is ] student ) , oni studenty ( they [ are ] stu - dents ) . let us imagine the situation when the only surviving slavic language is russian and we just do not have old church slavonic materials . does the lack of the paradigm make russian less &quot; indoeuropean &quot; than latin or german , or does it make impossible the proof of its ie nature ? i think that the answer is in the negative . second , alexis is certainly right when he says that a refusal to admit lexical evidence will make impossible to prove that mandarin is related to cantonese or that vietnamese is related to khasi . even worse , we won&#x27;t be able to state that beijing mandarin is related to xi &#x27; an mandarin , or that hanoi vietnamese is related to saigon vietnamese , as nothing resembling est , sunt / ist , sind can be found in these closely related dialects . moreover , we would have to dismantle the families of north and north east asia as well , since their agglutinative morphology also does not exhibit anything of the kind ie does . therefore , continuing this claim logically to its end , we will have to state that there are around 50 unrelated languages in japan alone , because we have no possibility to prove the genetic relationship of various japanese dialects and subdialects , since they do not have a grammar like ie . there are cases when proof of genetic relationship is based mostly on grammar , but there are cases when it rests solely on lexical items , as well as there are lucky cases like ie when one can demonstrate the relatedness on the basis of both grammar and lexicon . absolutization of any of this cases may lead us to dismissal of pretty well established language families . the cases like &quot; proto _ english - french &quot; can actually be easily controlled by using basic voca - bulary in lexical comparisons : no matter how many romance words were borrowed b yenglish , its basic vocabulary is still germanic , which can be easily demon - strated , contrary to those who try to label the very idea of basic vocabulary as &quot; semantic primitive &quot; . 2 ) geoffrey pullum writes : ) i wonder if it would not be a good idea to hear something - - from the defenders of wide-ranging and large-time - depth comparison , prefererably - - concerning what would count as evidence against a genetic relationship ? the same things as in case of lower-level comparisons : either lack of regular phonetic correspondences , or lack of enough number of cognates , representing basic vocabulary items and / or basic morphological markers , established on the basis of these regular correspondences . this is why i , not being amerindianist myself , cannot believe in amerind : greenberg did not present any correspondences at all , and his whole method of &quot; mass comparisons &quot; is in direct violation of traditional and conservative comparative methodology . therefore , i would side with greenberg opponents on this matter . but i believe that it is absolutely unfair to put illich - svitych in one company with greenberg and ruhlen , as geoffrey pullum does in his posting . illich - svitych work starts with charts of phonetic correspondences , which do work regularly throughout his 3 - volume work , and is , therefore , in sharp contrast with greenberg &#x27;s &quot; mass comparisons &quot; . the whole work , at least in the areas i can judge of ( altaic and uralic ) is done with painstaiking care and accuracy , reflecting the state of the art , contemporary to the time when his work was done ( sixties ) . may be the opponents of long-range compa - rison should at last familiarize themselves with works of illich - svitych , dolgopol &#x27;s kii and others , which as i believe represent a successful long-range comparative work ( though it does not necessarily mean that i agree with all illich - svitych &#x27;s proposals : many things remain to be done ) , rather then to repeat the groundless allegations in illich - svitych address , and come forward with some concrete arguments against his work , rather than general statements that illich - svitych &#x27;s work is like greenberg &#x27;s or that there is a ceiling to the comparative method . sincerely , sasha vovin avvovin @ miamiu . acs . muohio . edu
</pre>

## Record 002469

**Label:** `benign`

<pre>
new book please create the following books to be used in sitara and tagg . let me know if i forgot any information . dave
</pre>

## Record 002470

**Label:** `benign`

<pre>
williams energy marketing i have a request from the ena settlements group . williams energy is billing the hpl purchase deals on the ena invoice . the accountant at williams says , that by the request of the hpl trader , the deals are to be billed to ena . we would like to have the texas deals billed directly to hpl . if you do not have a problem with this , can you ask your counterpart at williams to split the deals between hpl and ena ? it would make the payment process much easier . thanks , megan x 5 - 7480
</pre>

## Record 002471

**Label:** `benign`

<pre>
germanic and romance modals second call for papers international conference of the linguistic society of belgium modal verbs in germanic and romance languages 11 - 12 december 1998 university of antwerp - uia ( campus wilrijk ) organizers : patrick dendale ( universities of metz and antwerp ) and johan van der auwera ( university of antwerp ) send a one-page abstract to : patrick dendale university of antwerp ( uia ) romaanse universiteitsplein 1 b - 2610 wilrijk belgium deadline : august 15 , 1998 for further information contact patrick dendale johan van der auwera tel + 32 ( 0 ) 3 820 . 28 . 13 tel + 32 ( 0 ) 3 820 . 27 . 76 fax + 32 ( 0 ) 3 820 . 28 . 23 fax + 32 ( 0 ) 3 820 . 27 . 62 pdendale @ uia . ua . ac . be auwera @ uia . ua . ac . be or consult the conference &#x27;s homepage http : / / rom-www . uia . ac . be / u / pdendale / colleng . html
</pre>

## Record 002472

**Label:** `benign`

<pre>
re : i &#x27; ll check my billing ! thanks for the warning ! warm regards , and thanks for the book , darrell darrell duffie mail gsb stanford ca 94305 - 5015 usa phone 650 723 1976 fax 650 725 7979 email duffie @ stanford . edu web http : / / www . stanford . edu / ~ duffie /
</pre>

## Record 002473

**Label:** `benign`

<pre>
northeast spring membership mixer february 4 , 2002 nesa members : attached is our northeast spring membership mixer to be held at macmenamin &#x27; s south street seaport - nyc ! &gt; &gt; other great upcoming events : feb . 20 , 2002 - storage ecomonics brown bag mar . 12 - 13 , 2002 - nominations thru allocation technical training mar . 18 , 2002 - charity golf tournament please visit our website www . nesanet . org for more information or you can call us direct ( 713 ) 856 - 6525 . thanks ! lana moore director or education nesa
</pre>

## Record 002474

**Label:** `benign`

<pre>
telephone interview with the enron research group good morning richard : your resume was forwarded to vince kaminski and the research group and they would like to conduct a telephone interview with you at your convenience . please give me some dates and times that you would be available and i will coordinate the schedule . also , the telephone number you wish to be contacted at . the telephone interview will be last approximately an hour and the interviewers would be : vince kaminski managing director , research stinson gibner vice president , research vasant shanbhogue vice president , research thanks richard and we look forward to hearing from you . regards , shirley crenshaw administrative coordinator enron research group 713 - 853 - 5290 email : shirley . crenshaw @ enron . com
</pre>

## Record 002475

**Label:** `benign`

<pre>
re : trademarks for newco i am not sure . detmering has the latest draft and i think discussions are still going on big focus is transition greg piper
</pre>

## Record 002476

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-2,8655709,215/
Date: 2002-10-08T03:30:57+01:00*UK latest: *Support for military action against Iraq among British voters has 
fallen to 32%, the lowest level recorded while the Guardian/ICM survey has been 
running.

</pre>

## Record 002477

**Label:** `benign`

<pre>
message 3 ps : attached with the flyer of the conference . - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - quentin kerr , email : qkerr @ maths . uq . edu . au room : 67 - 622 tel : ( 07 ) 33461428 department of mathematics , the university of queensland - engy . pdf
</pre>

## Record 002478

**Label:** `benign`

<pre>
acquisition of reflexive verbs this is an enquiry on behalf of an ma student . can anyone provide me with references concerning the acquisition of reflexive verbs in either english or french ? the student herself is bilingual , so publications in either language will be useful . all suggestions gratefully received . sue blackwell school of english , university of birmingham , u . k .
</pre>

## Record 002479

**Label:** `benign`

<pre>
revised agenda for management committee offsite among other changes , please note the time changes for this evening . thanks , joannie 3 - 1769
</pre>

## Record 002480

**Label:** `benign`

<pre>
re : remote offices thank you . i will ensure we get with don miller . laura - - - - - original message - - - - - from : kitchen , louise sent : thu 1 / 3 / 2002 12 : 46 pm to : luce , laura ; shepperd , tammy r . cc : shively , hunter s . subject : re : remote offices i do not understand the netco / newco comments . clearly at this point enron the estate should maintain the space until it is sold to a new buyer . that would be a don miller / fallon final call - but i think its a no brainer . - - - - - original message - - - - - from : luce , laura sent : thursday , january 03 , 2002 10 : 01 am to : kitchen , louise ; shepperd , tammy r . cc : shively , hunter s . subject : fw : remote offices under commitments to pec , enron has commited to provide office , computers , trading systems , etc . if this is changing , i need to know quickly . i have been provided indications from several outside counterparties , some divisions within newco and i thought netco as holding interest in purchasing the chicago business . due to the obvious indication of value for the joint venture with pec , i believe it imperative that the business / office be operational until march , 2002 , at a minimum . please advise . laura luce - - - - - original message - - - - - from : shepperd , tammy r . sent : thu 1 / 3 / 2002 9 : 20 am to : luce , laura cc : subject : fw : remote offices laura , i understand that the metals group has asked to keep the chicago office open until mar 31 to wind things down . do you have any new information on ena &#x27; s chicago folks at this time ? we may ask for a 60 day extension under bankruptcy orders to terminate the lease . thanks , tammy - - - - - original message - - - - - from : kitchen , louise sent : wednesday , december 19 , 2001 6 : 23 pm to : shepperd , tammy r . ; colwell , wes cc : mccarthy , lance ; corey , paula ; helton , susan ; miller , don ( asset mktg ) subject : re : remote offices ok please check with don miller too . netco does not want san francisco going forward and probably not chicago . - - - - - original message - - - - - from : shepperd , tammy r . sent : wednesday , december 19 , 2001 4 : 25 pm to : colwell , wes ; kitchen , louise cc : mccarthy , lance ; corey , paula ; helton , susan subject : remote offices we have asked epsc to pay the following leases for the month of january based on feedback from ena commercial leadership . my understanding is that we may still reject these leases under the bankruptcy if we do so by feb 2 . i will revisit the status of these leases with you before february rents are to be paid . calgary portland san francisco chicago denver i have also been contacted by paula corey , who is working on the enterprise strategy for the retrieval and disposition of remote office contents in the event any of these offices are closed . i will keep you posted on the recommendations . regards , tammy
</pre>

## Record 002481

**Label:** `benign`

<pre>

&gt; Or you could let me write one for you? Mind you ...... I know an
&gt; awful lot about you! ;-))Oh, that could be interesting!&gt;
&gt; Yes, I like that starlet look, but I think you should come out from
&gt; behind that bike too and let us see what you are wearing.  looks
&gt; pretty innerestin&#x27;That bike is all that&#x27;s between me and my modesty.  The other photos are not
for public consumption. :-)&gt; FelHelen of Troy
------------------------ Yahoo! Groups Sponsor ---------------------~--&gt;
Sell a Home for Top $
http://us.click.yahoo.com/RrPZMC/jTmEAA/MVfIAA/7gSolB/TM
---------------------------------------------------------------------~-&gt;To unsubscribe from this group, send an email to:
forteana-unsubscribe@egroups.com Your use of Yahoo! Groups is subject to http://docs.yahoo.com/info/terms/ 
</pre>

## Record 002482

**Label:** `benign`

<pre>
defs may 2001 daren : please enter a demand fee on deal 157278 for may 2001 in the amount of $ 369 . 69 . we need to bill defs for the remaining excess and over delivery charges . also , i was going back over my calc sheets and i found an error in oct 2000 . please enter a demand fee for $ 647 . 35 on deal 157278 for oct 2000 . thanks , megan
</pre>

## Record 002483

**Label:** `benign`

<pre>
re : deal models thanks for the note - - that helps to put it into perspective . unfortunately , since sally is out this week , i had not seen this note . james has all of the marginal cost information , which can be used to work from - i still believe that the approach we discussed in our meeting before lunch today is the right one . we need to create some customer profiles which include the number of transactions at each level and for each of the potential services to calculate some potential cost base scenarios - - - from which we can gross up to a potential revenue number . rahil - - i would like to discuss the next steps , and who we put on point ( specifically ) for each task . beth - - - - - original message - - - - - from : eichmann , marc sent : friday , march 16 , 2001 12 : 19 pm to : apollo , beth cc : jafry , rahil ; scribner , james subject : fw : deal models here is the message i received from greg , which i just told you and rahil about today . i would really like to use rahil &#x27; s expertise at eol to try to size the potential market going forward . on the other side , i would appreciate getting feedback about the marginal per transaction cost at different volume levels as presented in the document we discussed this morning . i will be available to help in any way needed . thanks in advance for your help marc - - - - - original message - - - - - from : piper , greg sent : thursday , march 15 , 2001 2 : 59 pm to : eichmann , marc cc : zipper , andy ; gros , thomas d . ; beck , sally ; raghavan , suresh ; bartlett , jeff ; shelby , rex subject : deal models we need to finalize the 4 models that have a high , low and expected case for our businesses . they are commoditylogic , dealbench , transactionhub and mid / back office . dealbench should be built as an asp as discussed , commoditylogic as an asp , transactionhub as we have discussed and back office as you are working with sally . we first need to agree on all the assumptions for revenue that lead to each case suggested above for each business . we then need to agree on 5 to 10 years of expenses so we can reach an operating margin we agree upon . we then finally need to look at them and see what capital investment might be needed to go in to each one and then finally build a pretax income statement and pretax cash flow statement for each business . the goal is to determine , within a range , the present value of each business , based on certain assumptions , and then to determine what they are worth as a company . i know we are part way there on all of these initiatives , but i want this all finished as follows : transactionhub - friday afternoon the 16 th . commoditylogic - tuesday afternoon the 19 th dealbench - wednesday afternoon the 17 th mid / back office - friday the 23 rd remember , we are trying to get a range that is approximately right that we can all believe . your thoughts ? gp
</pre>

## Record 002484

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-0,8613663,159/
Date: 2002-10-06T18:12:57+01:00In our final round-up from the GDC Europe 2002, we review the confernece 
sessions and the ECTS expo, noting the spiraling increase in game complexity.

</pre>

## Record 002485

**Label:** `benign`

<pre>
I&#x27;m listed as a developer on SF and have the spambayes CVS module checked
out using my SF username, but I&#x27;m unable to write to the repository.  CVS
complains:    % cvs add unheader.py
    cvs [server aborted]: &quot;add&quot; requires write access to the repositoryAny thoughts?Skip

</pre>

## Record 002486

**Label:** `benign`

<pre>
toc : journal of african languages and linguistics ( jall ) 19 : 1 ( 1998 ) journal of african languages and linguistics volume 19 : 1 ( 1998 ) mouton de gruyter * berlin * new york marie k . huffman and thomas j . hinnebusch . . . . . . the phonetic nature of ` voiceless &#x27; nasals in pokomo : implications for sound change e . kweku osam . . . . . . . . . . . . . complementation in akan book reviews philip baker . . . . . . . . . . . . . . creoles , pidgins , varietes vehiculaires . proces et genese , by gabriel manessy herman m . batibo . . . . . . . . . . topics in african linguistics , by salikoko s . mufwene and lioba moshi ( eds . ) bruce connell . . . . . . . . . . . . . historical perspectives on chamba daka , by raymond boyd jan daeleman . . . . . . . . . . . . . . luba sprichwoerter . uebersetzte , erweiterte und ueberarbeitete ausgabe einer anonymen sammlung aus zaire , and tonrelationen in luba-sprich - woertern . reimformen auf suprasegmentaler ebene bei den baluba und beena-luluwa in zaire , by hans - ingolf weier jean l . doneux . . . . . . . . . . . . a grammar of kisi , a southern atlantic language , by g . tucker childs margo a . e . fransen . . . . . . . . discourse features of ten languages of west-central africa , by stephen h . levinson ( ed . ) kamanda kola . . . . . . . . . . . . . . la langue mondo : esquisse grammaticale , textes et dictionnaire , by andre vallaeys christa koenig . . . . . . . . . . . . perspektiven afrikanistischer forschung . beitraege zur linguistik , ethnologie , geschichte , philosophie und literatur . x . afrikanistentag , by thomas bearth , wilhelm j . g . moehlig , beat sottas and edgar suter ( eds . ) dieke rietkerk . . . . . . . . . . . . talk , thought and thing - the emic road towards conscious knowledge , by kenneth l . pike vincent de rooji . . . . . . . . . . codeswitching in gambia : eine soziolinguistische untersuchung von mandinka , wolof und englisch in kontakt , by delia haust recent publications in african linguistics _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ mouton de gruyter walter de gruyter , inc . postfach 30 34 21 200 saw mill river road d-10728 berlin hawthorne , ny 10532 germany usa fax : + 49 ( 0 ) 30 26005-351 fax : + 1 914 747-1326 email : mouton @ degruyter . de publications by de gruyter can also be ordered via world wide web : http : / / www . degruyter . com
</pre>

## Record 002487

**Label:** `benign`

<pre>
re : guest access to enrononline ed , i am glad i got it resolved . hope you will like the system . vince ekrapels on 02 / 18 / 2000 03 : 43 : 54 pm to : donna greif / hou / ect @ ect cc : vince j kaminski / hou / ect @ ect subject : re : guest access to enrononline dear donna , thanks for your help , and to vince as well . i &#x27; ll access the site next week , when i &#x27; m back from a holiday weekend . ed krapels - - - - - original message - - - - - from : donna greif [ mailto : donna . greif @ enron . com ] sent : friday , february 18 , 2000 10 : 53 am to : ekrapels @ esaibos . com subject : guest access to enrononline attention : esai ed krapels thank you for your interest in enrononline . as requested , following is a guest password that will allow you temporary view only access to enrononline . please note , the user id and password are case sensitive . guest user id : ena 61296 guest password : tr 84 byl 3 in order to apply for transaction status with enrononline , your company needs to complete a password application and registration form for a master user account . each master user will be able to grant various levels of access for additional users . to obtain a password application and registration form , you can visit our website at www . enrononline . com and select the ? how to register ? link , or call our helpdesk at 713 / 853 - help ( 4357 ) . we hope you will find that enrononline provides an easy and more efficient way to do business with enron . we look forward to transacting with you online . sincerely , donna corrigan greif enrononline helpdesk 713 / 853 - help ( 4357 ) - attl . htm
</pre>

## Record 002488

**Label:** `benign`

<pre>
fw : 2 / 22 / 01 mgmt summary &amp; hot list find attached the egm management summary and hot list as of 2 / 22 . please contact me if you have any questions / comments . thanks , jeff - - - - - original message - - - - - from : anderson , patricia sent : friday , february 23 , 2001 3 : 13 pm to : smith , jeff e . subject : 2 / 22 / 01 mgmt summary &amp; hot list for distribution thanks , patricia ( 5 - 7434 )
</pre>

## Record 002489

**Label:** `benign`

<pre>
free trial : europe and asia energy information ! dear colleague : energy argus has just launched two new bi - monthly publications that focus on the european and asian energy markets - argus power europe and argus asia gas &amp; power . and - we &#x27; d like to offer you a free no - obligation trial to both ! why argus power europe and argus asia gas * new developments - who &#x27; s building what and when - and what equipment they need ; * price trends and analysis ; * analysis of the differences in the european markets - from the nordic market &#x27; s complex structure and the dominant uk and german markets to the eu expansion &#x27; s impact on new markets in the czech republic , hungary and poland . * much , much more ! argus asia gas sign up today ! to start your free , no - obligation trial to one or both newsletters , just reply to this email and let us know which one ( s ) you &#x27; d like to receive ! mailto : rlippock @ energyargus . com . if you would rather not receive argus promotions please follow instructions at the bottom of this message . energy argus 1700 k street nw suite 1202 washington dc 20006 tel : 202 - 775 - 0240 fax : 202 - 872 - 8045 mailto : rlippock @ energyargus . com http : / / www . energyargus . com if you would prefer not to receive further messages from this sender : 1 . click on the reply button . 2 . replace the subject field with the word remove . 3 . click the send button . you will receive one additional e - mail message confirming your removal .
</pre>

## Record 002490

**Label:** `benign`

<pre>
Once upon a time, Chris wrote :&gt; On Tue, 2002-10-08 at 10:36, Matthias Saou wrote:
&gt; &gt; Hi there,
&gt; &gt; 
&gt; &gt; Two new things today :
&gt; &gt; 
&gt; &gt; 1) I&#x27;ve had to install a Red Hat Linux 6.2 server because of an old
&gt; &gt; proprietary IVR software that doesn&#x27;t work on newer releases :-( So
&gt; &gt; I&#x27;ve recompiled both the latest apt and openssh packages for it, and
&gt; &gt; they are now available with a complete &quot;os, updates &amp; freshrpms&quot; apt
&gt; &gt; repository at apt.freshrpms.net, for those who might be interested.
&gt; 
&gt; Gack. Did you try 7.3 with the compat-glibc first? Or does it require an
&gt; antique kernel?It requires a 2.2 kernel, plus antique just-about-everything :-/ Real crap!Matthias-- 
Clean custom Red Hat Linux rpm packages : http://freshrpms.net/
Red Hat Linux release 7.3 (Valhalla) running Linux kernel 2.4.18-10acpi
Load : 0.00 0.03 0.00_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002491

**Label:** `benign`

<pre>
use Perl Daily NewsletterIn this issue:
    * .NET and Perl, Working Together+--------------------------------------------------------------------+
| .NET and Perl, Working Together                                    |
|   posted by pudge on Tuesday August 27, @09:17 (links)             |
|   http://use.perl.org/article.pl?sid=02/08/27/1317253              |
+--------------------------------------------------------------------+[0]jonasbn writes &quot;DevX has brought an article on the subject of [1]Perl
and .NET and porting existing code. The teaser: Learn how CPAN Perl
modules can be made automatically available to the .NET framework. The
technique involves providing small PerlNET mediators between Perl and
.NET and knowing when, where, and how to modify.&quot;Discuss this story at:
    http://use.perl.org/comments.pl?sid=02/08/27/1317253Links:
    0. mailto:jonasbn@io.dk
    1. http://www.devx.com/dotnet/articles/ym81502/ym81502-1.aspCopyright 1997-2002 pudge.  All rights reserved.
======================================================================You have received this message because you subscribed to it
on use Perl.  To stop receiving this and other
messages from use Perl, or to add more messages
or change your preferences, please go to your user page.	http://use.perl.org/my/messages/You can log in and change your preferences from there.
</pre>

## Record 002492

**Label:** `benign`

<pre>
12 th nom going back to 70 into midcon - - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 10 / 10 / 2000 03 : 38 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - royal _ b _ edmondson @ reliantenergy . com on 10 / 10 / 2000 03 : 25 : 55 pm to : janet . h . wallis @ enron . com , ami _ chokshi @ enron . com cc : subject : 12 th nom going back to 70 into midcon ( see attached file : hpl - oct . xls ) - hpl - oct . xls
</pre>

## Record 002493

**Label:** `benign`

<pre>
pg &amp; e texas 11 / 00 never mind . they are now changing their price to 6 . 23 . thanks . - - - - - - - - - - - - - - - - - - - - - - forwarded by megan parker / corp / enron on 01 / 22 / 2001 02 : 58 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - from : megan parker 01 / 22 / 2001 02 : 50 pm to : daren j farmer / hou / ect @ ect cc : subject : pg &amp; e texas 11 / 00 just a heads up . . . you might be getting a call from pg &amp; e regarding the price difference on deal 510422 . their trader is staying with 6 . 26 . megan
</pre>

## Record 002494

**Label:** `benign`

<pre>
URL: http://www.newsisfree.com/click/-1,8622117,215/
Date: 2002-10-07T03:52:59+01:00French ship burns off Yemen.

</pre>

## Record 002495

**Label:** `benign`

<pre>

Hi all,I have 3 or 4 email addresses (which get used for different
reasons), and I&#x27;d prefer not to mix them up. So I was wondering
if anyone knows of a way that I can have mail (apart from list
mail, which I have already sorted) which arrives to a certain
e-mail address have the From: header in the reply automatically
set to the address it came to.For example, say I have a company, and sales@company.com,
info@company.com and tech@company.com arrive in the same mailbox.
I don&#x27;t want to reply to sales@company.com mails with the From:
set to dave@company.com, I would like the mail to come from
sales@company.com.Is there any way to do this? Bearing in mind that mail can arrive
with my email in the To or Cc fields (and Bcc?), and it might be
buried in a couple of dozen other recipients...Cheers,
Dave.-- 
       David Neary,
    Marseille, France
  E-Mail: bolsh@gimp.org-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002496

**Label:** `benign`

<pre>
re : it commercial coordination budget we &#x27; re on it based on tommy &#x27; s last email . thanks , brian brian redmond office : 713 - 853 - 1839 fax : 713 - 646 - 3234
</pre>

## Record 002497

**Label:** `benign`

<pre>
has anyone had a problem with Yast2 not being able to
mount a source medium for installing new packages, on
suse 8.0?it finds the directory containing the source, so the
installation program gets as far as selecting
packages, and formatting, but then says it can&#x27;t mount
the source directory?http://digital.yahoo.com.au - Yahoo! Digital How To
- Get the best out of your PC!-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002498

**Label:** `benign`

<pre>
there &#x27; s still time to check your pulse it  , s not too late to tell us what you think about your work experience at enron and enron transportation services , and what we can do to help make it better . to date , nearly 27 % of all ets employees have completed the pulse survey . for those of you who have completed the survey , thank you for taking the time to tell us what  , s on your mind . we  , d still like to hear from those employees who have not completed the survey . between now and friday , oct . 27 , please access the pulse survey via survey . enron . com to share your enron work experiences . it would be great to get 100 % participation from ets employees . your survey responses are confidential and your comments can bring improvements to ets . thanks , in advance , for your participation in the pulse .
</pre>

## Record 002499

**Label:** `benign`

<pre>
hpl nom for january 16 , 2001 ( see attached file : hplnol 16 . xls ) - hplnol 16 . xls
</pre>

## Record 002500

**Label:** `benign`

<pre>

Just cvs up&#x27;ed and nowadays Catch-up Unseen is __extremely__ slow on 
large (&gt;100 msgs) unseen sequences. Anybody else having this problem?/A_______________________________________________
Exmh-workers mailing list
Exmh-workers@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-workers
</pre>

## Record 002501

**Label:** `benign`

<pre>
re : nom / actual volume for april 17 th we agree &quot; eileen ponton &quot; on 04 / 18 / 2001 10 : 48 : 19 am to : david avila / lsp / enserch / us @ tu , charlie stone / texas utilities @ tu , melissa jones / texas utilities @ tu , hpl . scheduling @ enron . com , liz . bellamy @ enron . com cc : subject : nom / actual volume for april 17 th nom mcf mmbtu 50 , 000 48 , 264 49 , 568 btu = 1 . 027
</pre>

## Record 002502

**Label:** `benign`

<pre>
journal langues ( call ) - revue langues ( appel ) appel a communications = = = = = = = = = = = = = = = = = = = = = = la revue langues vient de publier son premier numro . le second sortira en dcembre 1998 . nous lanons maintenant un appel communications pour le troisime numro . c &#x27; est une publication trimestrielle ( quatre numros par an ) . cette publication , principalement francophone et lance sous l &#x27; gide de l &#x27; aupel - uref , a pour but de favoriser le dialogue entre tous les individus qui travaillent avec ou sur la langue , chercheurs , enseignants de langue , etc . elle publiera donc des articles sur des sujets varis , relevant de toutes les disciplines ou sous-disciplines o la langue a sa place : linguistique ( phonologie , morphologie , lexicologie , syntaxe , smantique , pragmatique ) , socio-linguistique ( aspects sociaux et culturels de la pratique linguistique , variations linguistiques , crolistique ) , linguistique applique ( enseignement d &#x27; une langue seconde , apprentissage de la lecture ) , psycholinguistique , ingnierie de la langue ( interprtation automatique , traduction automatique , dialogue homme-machine , gnration , parole , traitement de l &#x27; information , gestion des corpus ) . cette liste n &#x27; est pas limitative . la revue langues s &#x27; accompagnera d &#x27; un serveur web accessible en ligne o un ou plusieurs articles par numro de la revue seront disponibles , ainsi que certains services , annonces de colloques , tables des matires de revues , annonces de la publication d &#x27; ouvrages ou de thses , etc . elle s &#x27; accompagnera galement d &#x27; une liste lectronique de discussion , principalement centre sur les articles parus dans la revue , mais permettant aussi l &#x27; change sur d &#x27; autres thmes . la soumission d &#x27; articles en anglais est possible . les articles en anglais qui ont une double valuation positive seront traduits . appel a communication pour le n3 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - les chercheurs travaillant dans les domaines mentionns plus haut ou dans des domaines connexes sont invits soumettre des articles de 20 pages ( 30 000 signes ) maximum sur le sujet de leur choix avant le 1 dcembre 1998 . les auteurs sont pris de respecter les instructions aux auteurs , disponibles sur le web l &#x27; adresse http : / / www . john-libbey - eurotext . fr ou auprs de catherine lavau ( ( 33 ) 01 46 73 06 65 , fax : ( 33 ) 01 47 46 81 06 ou ( 33 ) 01 40 84 09 99 ) . les illustrations ou tableaux sont bienvenus . informations importantes - - - - - - - - - - - - - - - - - - - - - - - n3 taille des articles : 20 pages ( 30 000 signes ) format lectronique : word 6 ou infrieur ou ascii ( pour les autres formats , nous consulter ) date limite de rception des articles : 1 dcembre 1998 rponse : 31 dcembre 1998 articles dfinitifs fournir pour le : 31 janvier 1998 adresses lectroniques : &lt; isabelle . blanchard @ loria . fr &gt; adresse postale : isabelle blanchard revue langues loria-cnrs , bp 239 54506 vandoeuvre - les - nancy france tel : ( 33 ) 03 83 59 20 26 fax : ( 33 ) 03 83 41 30 79 la soumission lectronique de rsums ou d &#x27; articles est possible aux adresses indiques ci-dessus . rdacteurs en chef : anne reboul , laurent romary - - - - - - - - - - - - - - - - - - - - call for papers = = = = = = = = = = = = = = = the journal langues has just issued its first volume . the second one will be out in december 1998 . we are now calling for papers for the third issue . langues will issue four volumes a year . this publication , which will mainly publish papers in french and which is partly financed by aupelf-uref , aims to facilitate the dialogue between all the people who work on or with language , researchers , teachers of french , etc . it will thus publish papers on various subjects having to do with all the domains or disciplines related to language : linguistics ( phonology , morphology , lexical semantics , syntax , semantics , pragmatics ) , sociolinguistics ( social and cultural aspects of language and language use , linguistic variations , creole studies ) , applied linguistics ( teaching french as a second language , learning to read ) , psycholinguistics , language engineering ( automatic understanding , automatic translation , man-machine dialogue , production , speech analysis , information retrieval , corpus processing ) . this is not an exhaustive list . langues will be accompanied by an online web server where one or more paper ( s ) per volume will be accessible , as well as some services , conference announcements , tables of contents for other scientific journals , new publications , theses , etc . it will also be accompanied by an electronic mailing list , which will encourage discussions about papers published in the journal and will allow exchanges on other subjects as well . the submission of papers in english is possible . papers in english with two positive evaluations will be translated in french . call for papers n 3 - - - - - - - - - - - - - - - - - - - papers of 20 pages ( 30 000 characters ) at most in the domains mentioned above or in related domains can be submitted before the 1rst of december 1998 . papers in french should respect the instructions to authors which are available on the web at http : / / www . john-libbey - eurotext . fr or which can be obtained through catherine lavau ( ( 33 ) 01 46 73 06 65 , fax : ( 33 ) 01 47 46 81 06 or ( 33 ) 01 40 84 09 99 ) . illustrations or schemas are welcome . main informations - - - - - - - - - - - - - - - - n3 papers size : 20 pages ( 30 000 characters ) electronic format : word 6 or lower , or ascii ( for other formats , please contact us ) deadline for paper reception : 1 december 1998 notification of acceptance : 31 december 1998 final version due on : 31 january 1999 email addresses : &lt; isabelle . blanchard @ loria . fr &gt; snail mail address : isabelle blanchard langues loria-cnrs bp 239 54506 vandoeuvre - les - nancy france tel : ( 33 ) 03 83 59 20 26 fax : ( 33 ) 03 83 41 30 79 submission of abstracts or papers by email is possible at the adresses indicated above . editors : anne reboul , laurent romary - - - - - - - - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = bonhomme @ loria . fr | office : b . 228 http : / / www . loria . fr / ~ bonhomme | phone : 03 83 59 30 52 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - * serveur silfide : http : / / www . loria . fr / projets / silfide * projet aquarelle : http : / / aqua . inria . fr = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
</pre>

## Record 002503

**Label:** `benign`

<pre>
re : kwi user group vince sorry to hear you cannot make it . . . you would obviously have been the big catch ! ! in terms of a london based replacement , who did you have in mind and what sort of subject could they cover ? david - - - - - original message - - - - - from : vince . j . kaminski @ enron . com [ mailto : vince . j . kaminski @ enron . com ] sent : 24 april 2001 23 : 22 to : djw @ kwi . com cc : vince . j . kaminski @ enron . com ; shirley . crenshaw @ enron . com subject : re : kwi user group david , i regret to inform you i am unable to attend the conference due to previous commitments . would you consider a speakers form our london office ? vince david warwick on 04 / 24 / 2001 09 : 47 : 31 am to : &quot; &#x27; vince . j . kaminski @ enron . com &#x27; &quot; cc : subject : re : kwi user group vince any further thoughts on this ? david - - - - - original message - - - - - from : vince . j . kaminski @ enron . com [ mailto : vince . j . kaminski @ enron . com ] sent : 13 april 2001 21 : 44 to : djw @ kwi . com cc : vince . j . kaminski @ enron . com ; vkaminski @ aol . com subject : re : kwi user group david , thanks for the invitation . i shall check my schedule on monday and will get back to you regarding the conference . i hope you will a very happy easter . vince david warwick on 04 / 12 / 2001 04 : 04 : 32 pm to : &quot; &#x27; vince . j . kaminski @ enron . com &#x27; &quot; cc : subject : kwi user group dear vince please may i reintroduce myself . we met last year at the sydney eprm conference which my company kwi sponsored . i chaired the session at which you spoke . as you may remember , my company , kwi are one of the world &#x27; s leading provider of systems ( kw 3000 ) and consultancy for energy , trading and risk management . we have over 60 clients worldwide including many of the world &#x27; s leading energy companies ( not enron unfortunately ) : north america - tva - ontario power - cinergy - bonneville power europe - enel - atel - electrabel - edf nordic - vattenfall - fortum - sydkraft - statkraft - birka energi - norsk hydro each year we stage a &quot; kwi users forum &quot; - a 2 - day event attended by leading trading and risk staff from our clients . last year there were about 100 delegates . the agenda primarily focusses on issues surrounding risk management for the energy sector . the agenda comprises keynote presentations on burning risk issues from industry leading energy speakers and practical workshops focussed around using our software . this years event is at a luxury hotel in the wonderful spanish city of barcelona and runs from the evening of sunday september 9 th to tuesday september 11 th . the main conference dinner is on the monday evening and is always a memorable event . this year it is in a leading barcelona restaurant preceded by a bus tour of the city with a stop for pre - dinner drinks . i would like to invite you to make the opening keynote address , the highlight of the conference . the subject could be : * a general energy risk related topic * a general insight into the secret of enron &#x27; s continued success in the energy markets * your thoughts on the future development on energy markets ( and other commodity related - bandwidth etc . ) worldwide obviously , we would cover all your delagate costs including accomodation , food and drink . what &#x27; s in it for you ? many of our users are some the energy sectors leading risk thinkers and i &#x27; m sure you would enjoy meeting them and exchanging views . please let me know if you are able to accept the invitation . best regards david warwick - marketing dierctor and co - founder
</pre>

## Record 002504

**Label:** `benign`

<pre>
summary of responses to psycholinguistics query in linguist 8 . 981 , i posted the following query : &gt; if an ambiguous word has a strongly dominant sense , &gt; is that sense most likely to be the one actually selected in neutral &gt; contexts ? of course the intuitive answer seems obivously to be &quot; yes , &quot; &gt; but i have n&#x27;t found any formal studies affirming this , as most studies &gt; do not explicitly relate dominance bias or strength of activation with &gt; the processes of sense selection . &gt; two more general questions : have the findings of tabossi &gt; pretty much spelled an end to a purely modularist view of lexial &gt; processing ? &gt; and finally , to what extent are connectionist explanations of lexical &gt; processing like kawamoto &#x27;s ( see below ) gaining credence among &gt; psycholinguists ? the sole respondent was james fidelholtz , who , although he could n&#x27;t directly address my questions , pointed out a very useful compilation of sense-frequencies for common english words : michael west , _ a general service list of english words _ ( 1953 ) , longman . thanks , dave = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - david wharton department of classical studies 237 mciver building the university of north carolina at greensboro greensboro , nc 27412-5001 email : whartond @ uncg . edu tel . ( 910 ) 334-5214 = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -
</pre>

## Record 002505

**Label:** `benign`

<pre>
CNET Virus &amp; Security Newsletter		Â Â 
July 17, 2002
						--Robert VamosiSenior Associate EditorCNET Software and Internet Services
Â Dear Readers,
So far, 2002 has been a year marked with variations on earlier
worms. If you update your antivirus software on a regular basis,
these new versions of Frethem and Yaha shouldn&#x27;t be a nuisance.
But if you haven&#x27;t updated in a while, these variants--plus the
continuing threat of Klez.h--should motivate you. In security
news, a flaw in certain versions of PGP encryption could affect
Outlook users. Read on to learn whether you&#x27;re vulnerable.
 
						Â 
Frethem.k worm wants to give you a password
 An e-mail message that promises to reveal secret information with
a password is yet another variant from the pesky Frethem worm
family. Frethem.k, technically known as w32.frethem.k@mm, also
called Frethem.l by some vendors, uses its own SMTP engine to
send e-mail using addresses obtained from infected systems. This
worm does not carry a destructive payload. Mac and Linux users
are not affected.Yaha.e screensaver worm spreading
 The Yaha.e mass-mailing worm masquerades as a friendly
screensaver, proving that users worldwide are still opening
attached files from total strangers. Yaha.e (w32.yaha.e@mm, also
known as Lentin.e, Yaha.f, and Yaha.g) is a successful variant of
a worm first seen around Valentine&#x27;s Day this year. Thankfully,
this worm does not affect Mac, Linux, or Unix users.
Leaky PGP Outlook plug-in 
PGP 7.03 and 7.04, widely used plug-ins for Microsoft&#x27;s Outlook
e-mail client, inadvertently weakens security and leaves the mail
program open to attack. Fortunately, there is a patch available.
Digital photography starter kitThis guide to digital photos will show you the best products to take your images from snap to finish.
	â€¢ Panasonic&#x27;s littlest Lumix
	â€¢ Minolta&quot;s 4-megapixel Dimage F100Most popular products
Digital cameras
	1. Canon PowerShot G2
	2. Canon PowerShot S30
	3. Canon PowerShot S40
	4. Canon PowerShot A40
	5. Sony Cyber Shot DSC-F707
 See all most popular camerasÂ 
SearchÂ Â In SoftwareAll CNETÂ Â Â Â The Web
Â Â 
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

## Record 002506

**Label:** `benign`

<pre>
re : daren , just call me mike . how about thursday , the 17 th at 1 : 00 . let &#x27; s plan on 1 hour . can you locate a conference room ? mike - - - - - original message - - - - - from : daren j farmer [ mailto : dfarmer @ ect . enron . com ] sent : friday , february 04 , 2000 5 : 23 pm to : mam @ teamlead . com subject : michael ( or mike . . what do you like to be called ? ) , my schedule is open thursday afternoon 1 - 5 pm and friday 1 - 4 pm . let me know the what works best for you . earlier in the afternoon is usually best for me . daren
</pre>

## Record 002507

**Label:** `benign`

<pre>
start date : 2 / 2 / 02 ; hourahead hour : 15 ; start date : 2 / 2 / 02 ; hourahead hour : 15 ; no ancillary schedules awarded . no variances detected . log messages : parsing file - - &gt; &gt; o : \ portland \ westdesk \ california scheduling \ iso final schedules \ 2002020215 . txt
</pre>

## Record 002508

**Label:** `benign`

<pre>
re : zakup ksiazki &quot; inzynieria finansowa &quot; w wnt pani grazyno , dziekuje bardzo za wiadomosc . autor ksiazki przeslal mi egzemplarz . na pewno skorzystam z okazji , by kupic inne ksiazki pani wydawnictwa . any web - site i can access ? w . kaminski &quot; wydawnictwa naukowo - techniczne &quot; on 03 / 01 / 2001 09 : 57 : 19 am to : cc : subject : zakup ksiazki &quot; inzynieria finansowa &quot; w wnt uprzejmie informuje , ze do dnia dzisiejszego nie wplynely pieniadze na zamowiona ksiazke , wobec czego uwazam to za rezygnacje z zakupu . serdecznie pozdrawiam . grazyna piesniewska
</pre>

## Record 002509

**Label:** `benign`

<pre>
re : agenda for houston visit mike , sounds good . christian mike a roberts @ ect 21 / 12 / 2000 09 : 26 am to : christian werner / enron _ development @ enron _ development cc : vince j kaminski / hou / ect @ ect , paul quilkey / enron _ development @ enron _ development , mark tawney / hou / ect @ ect subject : re : agenda for houston visit christian , just finished meeting with pual , vince &amp; mark new plan : let &#x27; s plan on your coming to houston march 12 th - april 2 nd ( after our summer / winters respectively but . . let &#x27; s proceed with the project without pause : 1 . please send up the software that needs to be installed along with operating system requirements 2 . please copy me on forecasting provided to sydney office on a daily basis if we work on these two fronts , it will optimize your time here and permit transotion to cover your forecasting there thanks - - - mike
</pre>

## Record 002510

**Label:** `benign`

<pre>
&gt;There is a hot dispute about the original size of the indigenous
&gt;population, but the evidence for a high density in the Mexican area is
&gt;sound.  It was up here in the North or in the Amazon where I&#x27;m a little
&gt;more suspicious of very high upward revisions.Right, there was definitely a relatively high density in Mexico, and
much less elsewhere.  Population estimates vary wildly and about all
your average skeptic can do is take geometric means to get ballpark
figures.  While Central America may have had 20 or 30 million, vast
areas of South America were uninhabited and other places very
sparsely e.g., the plains Indians in what is now the U.S. may have
been 2 million or so.There are those who claim that the Mexican population declined from
20 something million to circa 8 or 10 million in the 16th century,
certainly, in part due to infectious diseases new and old, and other
factors, and was probably in decline before contact.  Others claim it
declined from 80-ish million to 3 or 4 million and somehow deduce 95%
mortality from imported diseases, and have a pretty clear agenda which
makes me (for one) take their claims with a large grain of salt.About all that is certain is that anyone alive in 1500 was dead in 1600,
in the Americas or elsewhere.R
http://xent.com/mailman/listinfo/fork
</pre>

## Record 002511

**Label:** `benign`

<pre>
technical training with the houston energy expo ! nesa / hea technical training in conjunction with the houston energy expo march 20 &amp; 22 , 2001 at the hyatt regency hotel - downtown houston energy expo is at the george r . brown convention center ! $ 545 . 00 ( nesa / hea member price ) or $ 795 ( non - member price ) gets you into the technical training course of your choice , march 20 - 21 , enex trade show on wednesday , march 21 and the trade show and pipeline and transmission updates on thursday , march 22 ! the attached prospectus is in a pdf file and you will need adobe acrobat to view it . you can download acrobat reader 4 . 0 from our web site at www . nesanet . org . once you have had the opportunity to review the attached technical training 2001 information please feel free to contact me at nesa / hea headquarters with any questions you may have . i look forward to seeing you all there ! lana moore director of education national energy services association / houston energy association ( 713 ) 856 - 6525 phone ( 713 ) 856 - 6199 fax lana . moore @ nesanet . org &gt; - nesa _ trainingsched 2001 . pdf
</pre>

## Record 002512

**Label:** `benign`

<pre>
enron mentions sec seeks information on enron dealings with partnerships recently run by fastow the wall street journal , 10 / 23 / 01 where did the value go at enron ? new york times , 10 / 23 / 01 front page - first section : sec probes enron over financial dealings financial times ; oct 23 , 2001 companies oct 23 , 2001 enron discloses sec inquiry the washington post , oct 23 , 2001 enron suffers after unclear disclosure , new york times says bloomberg , 10 / 23 / 01 sec asks enron for investing data houston chronicle , 10 / 23 / 01 minnesota mining and gm climb in a rally that builds late in day the wall street journal , 10 / 23 / 01 world stock markets : wall st bargain hunters counter earnings gloom americas financial times ; oct 23 , 2001 milberg weiss announces class action suit against enron corp . business wire , 10 / 22 / 01 enron to host conference call tues 9 : 30 am edt dow jones news service , 10 / 22 / 01 janus had biggest enron stake at end of 2 nd - quarter ( updatel ) bloomberg , 10 / 22 / 01 enron says sec asks about related - party transactions ( update 9 ) bloomberg , 10 / 22 / 01 trusts keeping enron off balance thestreet . com , 10 / 22 / 01 why enron &#x27; s writedown unnerves some investors thestreet . com , 10 / 22 / 01 sec seeks information on enron dealings with partnerships recently run by fastow by rebecca smith and john r . emshwiller staff reporters of the wall street journal 10 / 23 / 2001 the wall street journal a 3 ( copyright ( c ) 2001 , dow jones &amp; company , inc . ) enron corp . said it has been contacted by the securities and exchange commission seeking information on the energy giant &#x27; s controversial dealings with partnerships that were set up and run until recently by its chief financial officer , andrew s . fastow . following enron &#x27; s announcement yesterday morning of the sec inquiry , the company &#x27; s stock took another big slide , falling more than 20 % in new york stock exchange trading . as of 4 p . m . , enron shares were trading at $ 20 . 65 , off $ 5 . 40 , knocking about $ 4 billion off enron &#x27; s market capitalization . volume topped the big board &#x27; s most - active list at about 36 million shares . a week ago , enron stock was trading at about $ 33 a share . subsequently , the company announced a $ 1 . 01 billion third - quarter write - off that produced a $ 618 million loss . analysts also voiced concerns yesterday about possible other bad news lurking amid enron &#x27; s vast and extremely complex operations . the company has dealings with a number of related entities . under certain circumstances , if enron &#x27; s credit rating and stock price fall far enough , the company would be obligated to issue tens of millions of additional shares to these entities , diluting the holdings of current shareholders . enron has previously acknowledged the provisions but said its business is strong and it feels confident that there will be no defaults . in a statement , enron chairman and chief executive kenneth lay said the company &quot; will cooperate fully &quot; with the sec inquiry and &quot; look ( s ) forward to the opportunity to put any concern about these transactions to rest . &quot; enron has consistently said that it believes its dealings with the fastow - related partnerships were proper and properly disclosed . the company has said it put billions of dollars of assets and stock into partnership - related transactions as a way to hedge against fluctuating market conditions . the sec inquiry came from the agency &#x27; s fort worth , texas , regional office . according to a person familiar with the matter , this would indicate that the inquiry comes from the sec &#x27; s enforcement arm , as opposed to its corporate - finance section . the participation of the enforcement branch would indicate that the agency is looking into whether there were possible violations of securities law . however , enforcement - branch inquiries often don &#x27; t produce any allegations of wrongdoing . it also appears that the sec hasn &#x27; t yet taken the step of launching a formal investigation , which would be a sign that the agency believes securities laws might have been violated . the sec declined to comment . certainly , there have been questions and concerns about those partnership transactions , which contributed to a $ 1 . 2 billion reduction in shareholder equity last week as part of enron &#x27; s efforts to unwind the deals . mr . fastow , who has declined repeated interview requests , resigned from the partnerships , known as ljm cayman lp and ljm 2 co - investment lp , in late july in the face of rising conflict - of - interest concerns by wall street analysts and major company investors . since then , internal partnership documents have shown that mr . fastow and perhaps a handful of enron associates made millions of dollars last year in fees and capital increases as general partner of the ljm 2 , the larger of the two partnerships . mr . fastow &#x27; s partnership arrangement caused some unhappiness inside enron , according to people familiar with the matter . for instance , these people say , sometime after the creation of the partnerships in 1999 , enron treasurer jeffrey mcmahon went to company president jeffrey skilling and complained about potential conflicts of interest posed by mr . fastow &#x27; s activities . mr . skilling didn &#x27; t share mr . mcmahon &#x27; s concern , these people say , and mr . mcmahon requested and received reassignment to another post . mr . skilling resigned as enron president and chief executive in mid - august , citing personal reasons and the fall in enron &#x27; s stock price , which peaked at about $ 90 a share last year . mr . mcmahon and mr . skilling haven &#x27; t responded to repeated interview requests . investors are also concerned about potential problems arising in enron &#x27; s dealings with other related entities . in some cases , enron could be required to issue large amounts of stock to noteholders in some of the entities if certain so - called double trigger provisions occur . for example , last july enron helped create the marlin water trust ii , which sold $ 915 million in notes that are due july 15 , 2003 . however , enron can be considered in default , in advance of that date , if its stock price falls below $ 34 . 13 for three trading days and its senior debt is downgraded to below investment grade by either moody &#x27; s investors service or standard &amp; poor &#x27; s . currently , enron debt is still investment - grade at both ratings agencies and would have to be lowered by several notches to fall into a noninvestment grade category . last week , moody &#x27; s put enron on review for a possible downgrade . however , observers believe that even if moody &#x27; s lowers enron &#x27; s rating , the company will still be investment - grade . copyright ? 2000 dow jones &amp; company , inc . all rights reserved . october 23 , 2001 where did the value go at enron ? by floyd norris new york times what really went on in some of the most opaque transactions with insiders ever seen ? wall street has been puzzling over that since enron ( news / quote senior columnist thestreet . com 10 / 22 / 2001 07 : 15 am edt url : enron is trying to improve disclosure to investors , but its decision to reduce equity by $ 1 . 2 billion in the third quarter has created dismay and confusion in the market . the action was disclosed in a dubiously discreet manner . more important , investors are struggling to pinpoint how the shrinkage will affect enron &#x27; s balance sheet , profits and earnings guidance . enron didn &#x27; t provide answers to questions submitted on the equity reduction . enron doesn &#x27; t include a balance sheet in its earnings release , so the equity decrease couldn &#x27; t be spotted in numbers supplied tuesday . and even though enron did break out $ 1 billion in earnings charges in its release , the company didn &#x27; t feel it necessary to mention the equity write down anywhere in the text . instead , the public first heard about it on a tuesday conference call . ceo kenneth lay said enron had shrunk its equity as a result of terminating a so - called &quot; structured finance arrangement . &quot; the wall street journal later reported that enron &#x27; s counter - party in this transaction was an investment partnership called ljm 2 co - investment , which has set up and run by enron &#x27; s finance chief , andrew fastow . this is what lay said on the tuesday call about the equity move : &quot; in connection with the early termination , shareholders &#x27; equity will be reduced approximately $ 1 . 2 billion , with a corresponding significant reduction in the number of diluted shares outstanding . &quot; according to the journal , lay then said wednesday on another call that enron had repurchased 55 million shares . enron &#x27; s supporters count lay &#x27; s mention of a reduction in the share count as bullish , because it should boost earnings per share numbers in the future . but there are two possible problems with this theory . first , enron affirmed its previous earnings guidance that it expects to make $ 2 . 15 per share in operating earnings next year . critically , the company did not say whether its guidance was given using a share count without the 55 million shares or not . if the forecast does assume the exclusion of the 55 million shares , the company should have upped its 2002 per - share earnings forecast by around 6 % , since that &#x27; s the amount by which the share count will be reduced . enron needs to say what share count it &#x27; s using in its guidance . second , it &#x27; s almost impossible to determine where these shares were ever recorded , casting a certain amount of doubt on lay &#x27; s assertion that the share count will come down . why question the ceo ? well , in its 2000 annual report , enron included some disclosure of the 55 million shares connected with ljm 2 . it reads : &quot; at december 31 , 2000 , enron had derivative instruments . . . on 54 . 8 million shares of enron common stock . &quot; the derivative instruments appear to be types of options , or agreements that give the counterparty the right to buy or sell stock at agreed prices . but these derivatives - linked shares don &#x27; t show up where they should in the annual report : in the table that breaks out the difference between the basic and diluted share counts . the line item in this table that shows options - related shares totals only 43 million shares , which is close to the amount of employee pay options that qualified for inclusion . therefore , that number almost certainly doesn &#x27; t include the 55 million ljm 2 - related shares . the fact is , at least some of the 55 million derivatives - linked shares should be included if the derivatives were like normal options . that &#x27; s because the ljm 2 derivatives appear to have been &quot; in the money &quot; , or profitable for the holders . typically , all in - the - money options - based stock has to be included in the diluted share count . and these ljm 2 derivatives did appear to have that status at the end of 2000 . back then , enron stock was trading around $ 80 , way above the average $ 68 level at which these derivatives made money for ljm 2 . maybe these weren &#x27; t simple options and had other conditions attached that excluded them from the diluted share count . that &#x27; s what disclosure elsewhere in the annual report appears to imply . alternatively , the options were embedded somewhere else in the share count table or equity disclosure , though it &#x27; s hard think where . presumably , investors will get a full explanation in enron &#x27; s quarterly financial results filing with the securities and exchange commission , due by the middle of november .
</pre>

## Record 002513

**Label:** `benign`

<pre>
home page - new - risk solutions ( http : / / www . marshweb . com / home / ho mepg . nsf / alldo &gt; dear vincent , hope all is well across the atlantic . you may have seen this already but thought i would pass it on just in case . also socgen just pulled off a weather deal for a japanease company looking to protect against wind damage on their flower crop . weather is definatly picking up on this side too with more interest every day . hope all is well , damian goodburn office - 44 20 7847 1829 mobile - 07971 825 309 - home page - new - risk solutions . htm
</pre>

## Record 002514

**Label:** `benign`

<pre>
On Mon, 2002-08-12 at 06:32, Matthias Saou wrote:
&gt; Once upon a time, Yen wrote :
&gt; 
&gt; &gt; How do I install / add an additional service port to the system which
&gt; &gt; can be access via Microsoft ODBC driver?
&gt; 
&gt; I honestly have no idea, and this is probably not the best list to expect
&gt; an answer as it is supposed to discuss rpm packages/packaging matters.
&gt; 
&gt; If you&#x27;re using Red Hat Linux 7.3, you should try this list :
&gt; https://listman.redhat.com/mailman/listinfo/valhalla-listI had to take a stab at answering that for a paying customer yesterday.
I _think_ you need to install postgreql-odbc and its&#x27; dependencies. Then
probably a bit of configuration to open a port to the network. But
Matthias is right, this is not the right place for this question.To bring things back on topic, I was practicing my &quot;rpmbuild&#x27;n skillz&quot;
and made an rpm with some simple software tools to drive my DVD+RW
burner. No GUI frontend, but it works just fine from the command line. I
even used it to burn a bootable DVD version of Red Hat 7.3.ftp://people.redhat.com/ckloiber/dvd+rw-tools-0.1.src.rpm-- 
Chris Kloiber_______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002515

**Label:** `benign`

<pre>
Sean O&#x27;Donnell wrote:
&gt; Doesnt answer your question, but theres a very simple reason i 
 &gt; develop a lot on mysql, it runs on windows and linux, a lot of
 &gt; clients only have windows servers, and last time i checked
 &gt; you can only run postgresql on windows with a lot of fecking
&gt; around with cygwin. give postgres a decent standalone windows 
 &gt; build and i reckon you would see a lot of defections.This is pertinent: http://lwn.net/Articles/17067/PÃ¡draig.-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002516

**Label:** `benign`

<pre>
Â Apparently the NY Mets couldn&#x27;t find a way to compromise with some of the team&#x27;s most dedicated fans. A sad day for New York baseball. What would Mookie say??Â 
Salon: &quot;Listen&#x27;s $10-per-month Rhapsody service has a fantastic interface, and, since it has content from all five labels, you can find much of what you&#x27;d like on it. You can listen to any song as often as you&#x27;d like -- an option that gives a taste of what a perfect subscription service would feel like. The only trouble is, Listen won&#x27;t let you burn -- and, as one file trader asked, &#x27;Who wants to be stuck listening to shit at their computer?&#x27;&quot; Â 
Martin Schwimmer, a trademark attorney and Mets fan, weighs in on Bryan Hoch&#x27;s MetsOnline situation.Â 
Joel Klein, Microsoft&#x27;s chief prosecutor in the Clinton Administration, is named chancellor of New York&#x27;s public school system.Â 
It&#x27;s been one week since Salon&#x27;s blogs booted up. Scott Rosenberg posts a progress report. Â 
FarrFeed: &quot;I love this stuff.&quot;Â 
I know this isn&#x27;t big news for most of you, but I&#x27;m no longer the first Dave on Google. Maybe someday I will be, again. :-(Â 
Well, yesterday I went for my 30-day post op review (it was actually 38 days after I was discharged) and there was good news and bad news. The good news is that I&#x27;m healing quickly. My body is very strong and doing really well. My blood pressure is great. Heart rate is great. Cholesterol needs work and I have to lose a bunch of weight, and of course I can&#x27;t smoke. Now the bad news. I have to be a saint for the rest of my life. I knew this day was coming. As I start to feel better, I want to relax. That ain&#x27;t going to happen. Oy. Here&#x27;s my old theme song. &quot;Don&#x27;t ask me to be Mister Clean, cause baby I don&#x27;t know how.&quot; I need a new song. Oh mama. Â 
Ed Cone&#x27;s got the blogging bug: &quot;I filed my N&amp;R column about the bad proposed corporate hacking bill. It will run on Sunday -- it&#x27;s an early deadline no matter what, but after blogging for a few months it&#x27;s almost painful to wait so long. I feel like just posting it now, or scooping myself with the best parts....but patience is a virtue.&quot; Hehe.Â 
Historian Stephen Ambrose, who is interviewed on the PBS News Hour today: &quot;You can do whatever the hell you want. Who&#x27;s going to criticize you? And if they do, what the hell do you care?&quot; Â 
Radio Free Blogistan: Blogger vs Radio.Â 
Reuters: &quot;Stocks briefly extended their losses in late morning trading on Tuesday, biting into Monday&#x27;s monster rally.&quot;Â 
Thanks to Glenn Reynolds for the link to metsonline.net. As a Mets fan since 1962, I think it&#x27;s great that sites like this exist and are flourishing. Like Bryan Hoch, the webmaster, I also run websites as a labor of love, and know there isn&#x27;t generally a whole lot of money left over after you pay for bandwidth. I totally believe Hoch, a college student, when he says he isn&#x27;t making money. The site clearly disclaims that it is not representative of the Mets or Major League Baseball. If you go deeper you see that Hoch contributed his time for free to help the Mets improve their own site, before all sites were taken over by MLB in 2001 (what a bad idea, why can&#x27;t teams differentiate themselves based on the quality of their community sites). Now of course there&#x27;s another side to it, so let&#x27;s keep an open mind. But to the owners of the Mets, please remember, it&#x27;s the fans that make it work, and it&#x27;s pretty clear that this website is from the fans, for the fans and the team, and that&#x27;s a good thing.Â 
Postscript: I&#x27;ve been emailing with Bryan, and asked if the local NY press has taken up his cause. He says: &quot;Not yet. You can help by calling any one of the major metro papers (Post, Daily News, Times, Newsday).&quot; More.. Ernie the Attorney is looking into this. &quot;LSU Law School is suing one of its students for trademark infringement over a website that he maintains. The site is called lsulaw.com, and it includes a school calendar, law-related links and comments by Douglas Dorhauer, some of them critical of the law school.&quot;Â 
Bret Fausett, yesterday: &quot;It&#x27;s hard to imagine a more complete win than what ICANN Director Karl Auerbach received today from Los Angeles Superior Court Judge Dzintra Janavs.&quot;Â 
James Jarrett wonders where is his blog flow?Â 
Mark Crane writes: &quot;Woke up early the other morning, and started listening to a BBC special on the Silicon Valley. Suddenly I heard the voice of Dave Winer, and he sounded like this mellow California hippy-geek. You should do a DaveNet that is just a stream of you reading the essay.  Hearing the Dave voice totally changed my perceptions of the Dave Winer experience.&quot; It&#x27;s true, I have a pretty soft voice. I laugh a lot too. Many people are surprised. Â 
OSCON, last week, has done its job and stirred the embers of the Great Open Source Debate of the 1990s. I found myself writing in an email yesterday: &quot;Very little really usable software has come from people who are willing to work for $0. (I chose my words carefully, infrastructure is another matter entirely.)  Further, it&#x27;s weird to say, as Richard Stallman does, that by coercing programmers to work for $0 that that&#x27;s freedom. To me it seems obvious that that&#x27;s slavery.&quot; Â 
Washington Post: &quot;Operated for years by Internet addressing giant VeriSign Inc., dot-org is slated to get a new landlord in October when VeriSign relinquishes its hold on the domain.&quot;Â 
Two years ago on this day: &quot;The best standard is the one with the most users.&quot;Â 
Ponder yesterday&#x27;s riddle. Then click on the solution. Â 

</pre>

## Record 002517

**Label:** `benign`

<pre>
basis blowout fyi - here are the past three business days of enron online perm - california basis changes for september &amp; october . ( this may be useful with the aps contract issue ) : sept oct friday 8 / 19 . 68 . 72 monday 8 / 21 . 94 . 89 tuesday 8 / 22 1 . 21 1 . 15
</pre>

## Record 002518

**Label:** `benign`

<pre>
re : thursday night &#x27; s dinner ( and friday also ) hello all : bad news ! most of the really nice restaurants in breckenridge close on the 22 nd of april . we may have to have all the dinners at the hotel . do you have any other suggestions ? i will check with scott yeager &#x27; s wife again today to see if she perhaps knows of another good restaurant that may be open , but the owner of pierre &#x27; s told me most of them close and open again for the summer season in may . thanks ! shirley sheryl lara @ enron communications 03 / 28 / 2000 06 : 29 pm to : ravi thuraisingham / enron communications @ enron communications cc : shirley crenshaw / hou / ect @ ect , shirley subject : re : final list of invited participants to offsite meeting ravi : can you answer shirley &#x27; s question . are you planning to have the entire group go to dinner , or just senior management ? please let us know your plan . sheryl - - - - - forwarded by sheryl lara / enron communications on 03 / 28 / 00 07 : 24 pm - - - - - shirley crenshaw @ ect 03 / 28 / 00 03 : 15 pm to : sheryl lara / enron communications @ enron communications @ enron cc : subject : re : final list of invited participants to offsite meeting sheryl : i am going to call pierre &#x27; s restaurant and make reservations for thursday night - will everyone on the list be attending or just part ? thanks ! sheryl lara @ enron communications 03 / 28 / 2000 03 : 09 pm to : shirley crenshaw / hou / ect @ ect , ravi thuraisingham / enron communications @ enron communications cc : subject : final list of invited participants to offsite meeting here it is ! ! ! the final list of participants .
</pre>

## Record 002519

**Label:** `benign`

<pre>
eol and enpower data for september 26 th eol deals from : 9 / 1 / 2001 to : 9 / 26 / 2001 ` enpower from : 9 / 1 / 2001 to : 9 / 26 / 2001 desk total deals total mwh desk total deals total mwh epmi long term california 484 9 , 632 , 525 epmi long term california 98 4 , 273 , 805 epmi long term northwest 358 5 , 573 , 000 epmi long term northwest 413 15 , 115 , 061 epmi long term southwest 427 6 , 818 , 380 epmi long term southwest 277 22 , 328 , 990 epmi short term california 2 , 237 1 , 979 , 159 epmi short term california 639 1 , 660 , 125 epmi short term northwest 1 , 202 828 , 800 epmi short term northwest 572 623 , 409 epmi short term southwest 1 , 710 1 , 420 , 050 epmi short term southwest 843 2 , 400 , 648 real time 1 , 112 27 , 900 real time 642 70 , 882 grand total 7 , 530 26 , 279 , 814 grand total 3 , 484 46 , 472 , 920 eol deals from : 9 / 26 / 2001 to : 9 / 26 / 2001 enpower from : 9 / 26 / 2001 to : 9 / 26 / 2001 desk total deals total mwh desk total deals total mwh epmi long term california 30 568 , 800 epmi long term california 4 99 , 600 epmi long term northwest 17 236 , 400 epmi long term northwest 34 1 , 328 , 096 epmi long term southwest 12 251 , 225 epmi long term southwest 33 4 , 538 , 580 epmi short term california 173 363 , 575 epmi short term california 49 202 , 368 epmi short term northwest 101 66 , 800 epmi short term northwest 42 106 , 856 epmi short term southwest 89 170 , 450 epmi short term southwest 47 177 , 150 real time 66 1 , 675 real time 45 4 , 457 grand total 488 1 , 658 , 925 grand total 254 6 , 457 , 107 ice volumes from : 9 / 26 / 2001 to : 9 / 26 / 2001 delivery point total mwh epmi mwh price mid c ( op , next day ) 400 0 $ 16 . 75 mid c ( p , next day ) 2 , 400 800 $ 20 . 50 mid c ( p , oct - 01 ) 10 , 800 0 $ 23 . 50 mid c ( p , nov - 01 ) 30 , 000 10 , 000 $ 29 . 92 mid c ( p , jan - 02 ) 10 , 400 0 $ 37 . 25 mid c ( p , ql 02 ) 30 , 400 0 $ 32 . 25 np - 15 ( p , next day ) 800 800 $ 25 . 00 np - 15 ( p , nov - 01 ) 20 , 000 10 , 000 $ 29 . 88 palo ( p , next day ) 9 , 600 0 $ 26 . 89 palo ( op , next day ) 800 800 $ 15 . 07 palo ( op , oct - 01 ) 7 , 825 0 $ 17 . 00 palo ( p , oct - 01 ) 172 , 800 10 , 800 $ 26 . 11 palo ( p , nov - 01 ) 50 , 000 10 , 000 $ 25 . 80 palo ( p , dec - 01 ) 20 , 000 0 $ 30 . 75 palo ( p , jan - 02 ) 20 , 800 0 $ 30 . 50 palo ( p , ql 02 ) 30 , 400 0 $ 29 . 50 palo ( p , q 4 02 ) 30 , 800 0 $ 33 . 00 sp - 15 ( op , next day ) 1 , 200 0 $ 16 . 58 sp - 15 ( p , next day ) 6 , 400 800 $ 25 . 03 sp - 15 ( p , oct - 01 ) 21 , 600 0 $ 25 . 05 sp - 15 ( p , nov - 01 ) 10 , 000 10 , 000 $ 27 . 50 sp - 15 ( p , dec - 01 ) 20 , 000 0 $ 32 . 88 sp - 15 ( p , jan - 02 ) 10 , 400 0 $ 33 . 00 sp - 15 ( p , ql 02 ) 30 , 400 0 $ 33 . 00 grand total 548 , 225 54 , 000 $ 642 . 71
</pre>

## Record 002520

**Label:** `benign`

<pre>
I won&#x27;t be reading email until Sunday night or so.  Good luck with
2.40 and don&#x27;t do anything I wouldn&#x27;t do.  ;-)- Dan
</pre>

## Record 002521

**Label:** `benign`

<pre>
re : tuesday interview hi vince , thanks for replying to my email . the scheduled interview with howard will go ahead tomorrow , i have written to shirley to request a convenient time for you and we will arrange for howard to come back in for a video conference with you . regards rachel vince j kaminski @ ect 16 / 02 / 2001 23 : 42 to : rachel quirke / eu / enron @ enron cc : vince j kaminski / hou / ect @ ect , shirley crenshaw / hou / ect @ ect subject : tuesday interview rachel , i would like very much to interview howard but i am in philadelphia on tuesday . vince
</pre>

## Record 002522

**Label:** `benign`

<pre>
workshop on morphological case workshop announcement dear colleagues , we are happy to announce the programme of the workshop &quot; effects of morphological case , to be held at the utrecht institute of linguistics ots , utrecht university , 28-29 august 1998 . organizers : helen de hoop , olaf koeneman , iris mulders , and fred weerman invited speakers : paul kiparsky , joan maling , alec marantz the aim of this workshop is to bring together theoretical and empirical considerations on the effects of morphological case beyond its mere phonological characteristics . issues for discussion involve the implications of morphological case for abstract case theory , the difference between structural and inherent case , agreement , word order phenomena , grammaticalization processes , discourse theory , and semantics . 1 . programme friday , august 28th : 9 . 00 opening remarks 9 . 30 invited speaker : paul kiparsky ( stanford university ) ` cases as complementizers &#x27; 10 . 30 denis bouchard ( university of montreal ) ` fixed positions , functional markers and the concept of &quot; universal &quot; &#x27; 11 . 15 break 11 . 30 inghild flaate &amp; kristin m . eide ( norwegian university of science and technology ) ` interpretive effects of morphological case : norwegian and german predicatives &#x27; 12 . 15 marjon helmantel ( leiden university ) ` on the relation between structural position and morphological case : adpositions in german &#x27; 13 . 00 lunch break 14 . 15 stephen wechsler &amp; larisa zlatic ( university of texas ) ` case realization in serbo - croatian &#x27; 15 . 00 lynn nichols ( harvard university ) ` non - uniform effects of morphological case &#x27; 15 . 45 break 16 . 00 carson t . schutze ( ucla ) ` on the nature of default case &#x27; 16 . 45 josef bayer , markus bader &amp; michael meng ( friedrich - schiller university jena ) ` morphological underspecification meets oblique case : syntactic and processing effects in german &#x27; saturday , august 29th 9 . 15 invited speaker : alec marantz ( mit ) ` in defense of &quot; spell-out &quot; : why morphological case should indeed only have an indirect , reflective relation to the syntax &#x27; 10 . 15 amanda seidl ( university of pennsylvania ) ` non - segmental morphological case : the case of consonant mutation in kpa mende &#x27; 11 . 00 break 11 . 15 miriam butt ( university of konstanz ) &amp; tracy holloway king ( ( nltt / istl ) ` licensing semantic case &#x27; 12 . 00 dieter wunderlich ( heinrich heine university , duesseldorf ) ` on the interaction of structural and semantic case &#x27; 12 . 45 lunch break 14 . 00 angela ralli ( university of patras ) &amp; manuel espanol - echevarria ( ucla ) ` feature mismatch in dislocated constituents &#x27; 14 . 45 eric haeberli ( university of geneva ) ` deriving effects of morphological case by eliminating abstract case &#x27; 15 . 30 break 15 . 45 david lightfoot ( university of maryland ) ` middle english split genitives and the loss of case &#x27; 16 . 30 invited speaker : joan maling ( brandeis university ) ` morphological case is not ( always ) to blame &#x27; alternate : sandra joppen ( heinrich heine university , duesseldorf ) ` structural arguments with semantic case : the case of causees and recipients in 4 - place verbs &#x27; 2 . registration registration at the site will cost 60 dutch guilders . if you preregister , you only pay 50 guilders and you will receive the workshop booklet in advance . please use the following form for preregistration : name : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ address : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ city and zipcode : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ( state : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ) country : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ i wish to pay by : 0 eurocheck 0 eurocard 0 mastercard 0 visa credit card details : cardnumber : expiry date : transaction date : name and address as registered by credit card company ( if different from above ) : please send by email-reply or by regular mail to : utrecht university utrecht institute of linguistics trans 10 3512 jk utrecht the netherlands 3 . hotel information some of the speakers will stay at hotel de biltsche hoek in de bilt , which is approx . 15 minutes from the city centre by bus . tel # 31302205811 , fax # 31302202812 . single : f 112 , 50 , double f 135 , - ( breakfast included ) . here is the list of accommodation information in utrecht . please note that actual bookings are the participant &#x27;s own responsibility . hotel smits * * * * , vredenburg 14 , tel # 31302331232 , fax # 31302328451 single : 180 . - , double for single : 195 . - , double 247 . - ( breakfast included ) . city centre , app . 5 minutes walk to congress site . maliehotel * * * * , maliestraat 2 , tel # 31302316424 , fax # 31302340661 single with shower / bath 150 . - / 160 . - ; double shower / bath 185 . - / 195 . - ( breakfast included ) . eastern part of town , nice quiet residental area , app . 20 minutes walk to congress site . hotel mitland * * * * , ari ? nslaan 1 , tel # 31302715824 , fax # 31302719003 single 140 . - , double 180 . - on the north-eastern outskirts of town , quiet environment , bus stop close by . tulip inn utrecht centre * * * , janskerkhof 10 , tel # 31302313169 , fax # 31302310148 single ( shower or bath ) 195 . - , double ( shower or bath ) 250 . - ( buffet breakfast included ) . city center , app . 5 minutes walk to congress site . early reservations reccommended ! hotel ibis * * * , bizetlaan 1 , tel # 31302910366 , fax # 31302942066 single / double 140 . - , breakfast 18 . - per person . west of city centre , regular buses or tram to centre city , app . 15 minutes walk to congress site . hotel de admiraal * * , admiraal van gentstraat 11 , tel # 31302758500 , fax # 31302758501 single : 135 . - , double 155 . - ( breakfast included ) . north - east of city centre , quiet residential area , app . 25 minutes walk tocongress site . hotel bunschoten * * , balijelaan 1 , tel # 31302941420 , fax # 31302961934 single : 125 . - , double 145 . - ( breakfast included ) . south - west of city centre , app . 25 minutes walk to congress site . ouwi hotel * * , fc donderstraat 12 , tel # 31302716303 , fax # 31302714619 single ( shower ) 102 . - , double ( shower ) 122 . - ( breakfast included ) . north - east of city centre , quiet residential area , app . 20 minutes walk to congress site . parkhotel eijtinger * , tolsteegsingel 34 , tel # 31302516712 , fax # 31302516712 single / double 95 . - southern edge of city centre , on canal , app . 15 minutes walk to congress site . if you need more information , do not hesitate to contact olaf koeneman ( koeneman @ let . ruu . nl ) . * * * * * * * * * * * * * * * * * * * * * * olaf koeneman * * utrecht institute of linguistics ots * * trans 10 ( room 2 . 20 ) , 3512 jk utrecht * * tel . + 31 30 253 8304 * * email : koeneman @ let . ruu . nl * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 002523

**Label:** `benign`

<pre>
oneok westex transmission interconnect , ward county , tx we have finalized negotiations with oneok westex on the new 200 , 000 mmbtu / d interconnect with tw in ward county , tx . the final agreement has been emailed to them for their signature . tw &#x27; s costs are approximately $ 28 , 000 including the gross up for tax purposes which is fully reimbursable from oneok . the meter is a high - capacity ultrasonic meter which will take gas from the oneok red river system and deliver it into tw south of wt - 2 . the poi is # 78161 . oneok says they are ready to flow ; i have not heard yet from our field whether or not tw is ready . let me know if you have questions . kevin hyatt
</pre>

## Record 002524

**Label:** `benign`

<pre>
problem is clearly because the info isn&#x27;t syncing between the servers. If I run the check against honor which is where it was reported then the check is positive. If I run the check against apt or fire, it&#x27;s negative.-----Original Message----- From: Rose, Bobby Sent: Wednesday, August 07, 2002 9:05 AM To: mail@vipul.net Cc: ML-razor-users Subject: RE: [Razor-users] What&#x27;s wrong with the Razor servers now? It&#x27;s still doing it. I reported a message as spam 10 minutes ago and the check keeps coming back false. What&#x27;s funny is that message that I&#x27;m testing with it the sample-spam.txt message from SpamAssassin and I know it&#x27;s been reported before.-----Original Message----- From: Vipul Ved Prakash [mailto:mail@vipul.net] Sent: Wednesday, August 07, 2002 3:45 AM To: Rose, Bobby Cc: ML-razor-users Subject: Re: [Razor-users] What&#x27;s wrong with the Razor servers now? Hi,We were rolling out changes to TeS and catalogue servers over the last two days. Any glitches you might have experienced would have been due to the upgrades. The upgrades are now complete, and things are back to normal. Several new features in TeS will provide better accuracy, specially with regards to false-positives.cheers, vipul.On Tue, Aug 06, 2002 at 06:54:04PM -0400, Rose, Bobby wrote: &gt; I&#x27;m still seeing this. It reports to honor.cloudmark.com but checks &gt; against apt.cloudmark.com. What is the sync delay between these &gt; boxes? &gt; &gt; -----Original Message----- &gt; From: Rose, Bobby &gt; Sent: Monday, August 05, 2002 2:05 PM &gt; To: ML-razor-users &gt; Subject: [Razor-users] What&#x27;s wrong with the Razor servers now? &gt; &gt; &gt; I noticed a low count of razor&#x27;d spam messages. So after digging, if I&gt; razor-report a message the diags say that it was accepted but if I &gt; turn around and run a check on the exact same message that was &gt; reported, then it doesn&#x27;t find the sig and as such isn&#x27;t spam. &gt; &gt; &gt; ------------------------------------------------------- &gt; This sf.net email is sponsored by:ThinkGeek &gt; Welcome to geek heaven. &gt; http://thinkgeek.com/sf &gt; _______________________________________________ &gt; Razor-users mailing list &gt; Razor-users@lists.sourceforge.net &gt; https://lists.sourceforge.net/lists/listinfo/razor-users &gt; &gt; &gt; ------------------------------------------------------- &gt; This sf.net email is sponsored by:ThinkGeek &gt; Welcome to geek heaven. &gt; http://thinkgeek.com/sf &gt; _______________________________________________ &gt; Razor-users mailing list &gt; Razor-users@lists.sourceforge.net &gt; https://lists.sourceforge.net/lists/listinfo/razor-users-- Vipul Ved Prakash | &quot;The future is here, it&#x27;s just not Software Design Artist | widely distributed.&quot; http://vipul.net/ | -- William Gibson------------------------------------------------------- This sf.net email is sponsored by:ThinkGeek Welcome to geek heaven. http://thinkgeek.com/sf _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users ------------------------------------------------------- This sf.net email is sponsored by:ThinkGeek Welcome to geek heaven. http://thinkgeek.com/sf _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 002525

**Label:** `benign`

<pre>
mid - year 2000 performance feedback note : you will receive this message each time you are selected as a reviewer . you have been selected to participate in the mid - year 2000 performance management process by providing meaningful feedback on specific employee ( s ) that have been identified for you . your feedback plays an important role in the performance management process , and your participation is very critical to the success of enron &#x27; s performance management goals . please provide feedback on the employee ( s ) listed below by accessing the performance management system ( pep ) and completing an online feedback form as described in the &quot; performance management quick reference guide &quot; . you may begin your feedback input immediately . please have all feedback forms completed by the date noted below . if you have any questions regarding pep or your responsibility in the process , please call the pep help desk at the following numbers : in the u . s . : 1 - 713 - 853 - 4777 , option 4 in europe : 44 - 207 - 783 - 4040 , option 4 in canada : 1 - 403 - 974 - 6724 ( canada employees only ) or e - mail your questions to : perfmgmt @ enron . com thank you for your participation in this important process . the following list of employees is a cumulative list of all feedback requests , by operating company , that have an &quot; open &quot; feedback status . an employee &#x27; s name will no longer appear once you have completed the feedback form and select the &quot; submit &quot; button in pep . review group : enron feedback due date : jun 16 , 2000 employee name supervisor name date selected - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ahmad , anjam dale surbey may 22 , 2000 zipter , rudi c theodore r murphy may 25 , 2000
</pre>

## Record 002526

**Label:** `benign`

<pre>

 _   _ _____ _  __ &lt;*the* weekly high-tech sarcastic update for the uk&gt;
| \ | |_   _| |/ / _ __   __2002-07-19_ o join! mail an empty message to
|  \| | | | | &#x27; / | &#x27;_ \ / _ \ \ /\ / / o ntknow-subscribe@lists.ntk.net
| |\  | | | | . \ | | | | (_) \ v  v /  o website (+ archive) lives at:
|_| \_| |_| |_|\_\|_| |_|\___/ \_/\_/   o     http://www.ntk.net/
        &quot;Until we secure our cyber infrastructure, a few keystrokes and
         an Internet connection is all one needs to disable the economy
         and endanger lives...&quot;
                                              - Lamar Smith, US Senator
                             http://www.msnbc.com/news/780923.asp?cp1=1         &gt; DISABLE ECONOMY
         &gt; You cannot do that here.
         &gt; EXAMINE CYBER INFRASTRUCTURE
         &gt; Access Denied.
         &gt; HIT ECONOMY WITH STICK
                                                 &gt;&gt; HARD NEWS &lt;&lt;
                               life-long pursuits         On July 17th, 2001, DMITRY SKLYAROV, coder for the Russian
         software house ELCOMSOFT, was arrested while visiting the
         US. His crime: writing code that exposed flaws in Adobe&#x27;s
         e-book security, in contravention of the USA&#x27;s exciting new
         DMCA. In the next year, thanks to widespread protests, Adobe
         withdrew their call to prosecute the Russian hacker and
         Dmitry was freed. Elcomsoft is still in the dock for
         breaching Adobe&#x27;s copy restriction routines. If the aim of
         the prosecution was to cow them into keeping quiet about
         security problems, it doesn&#x27;t appear to have worked. On July
         12th, 2002, ELCOMSOFT posted to Bugtraq a flaw in Adobe&#x27;s
         e-book security. Namely, that in Adobe&#x27;s &quot;lending library&quot;
         web app for the Adobe Content Server, you can borrow a book
         for over twenty years (instead of three days) just by
         changing a hidden Web form value. The library site is just a
         demonstration app, so it&#x27;s not a serious problem, but it
         does give Elcomsoft room for a catty little addendum. &quot;Some
         time ago&quot;, they write &quot;we have found much more serious
         problem with another Adobe software and reported it to the
         vendor; however, there was no response at all, and so we
         decided not to waste our time reporting this one (about the
         library) to Adobe&quot;. How much reaction do they want?
         Salt sown in the soil of Moscow and the Volga canal aflame?
         http://lists.insecure.org/bugtraq/2002/Jul/0133.html
                           - don&#x27;t plan any trips to Disneyland, Vlad
         http://librarydemo.adobe.com/library/
                          - fixed, it looks, by stubbing out the code
         http://lists.insecure.org/bugtraq/2002/Jul/0193.html
- now, for real chutzpah, post a Symantec exploit on the newly 0wn3d BugTraq         We&#x27;ll tread cautiously with this one, as it involves Vast
         Ageless Corporations Who Have Retained Counsel Living Where
         Their Glowing Eyesockets Used To Be. Just days before we
         read on Slashdot that zombie company FORGENT is demanding
         patent license fees for users of JPEG, we&#x27;re contacted by
         someone who has received a similiarly threatening letter -
         this time, from the rather more established Lucent
         Technologies. The message reads: &quot;After some market research
         it has come to our attention that some of your company&#x27;s
         products may employ the JBIG/JPEG Standard. Therefore,
         Lucent Technologies GRL LLC, Lucent&#x27;s licensing agent, is
         contacting your company regarding your interest in obtaining
         a license for patents.&quot; What follows is the usual demand for
         fees, dire threats if compliance is thwarted, requests that
         the guards seize the criminals and throw them in Patent
         Dungeon, etc. Now, Lucent&#x27;s patents don&#x27;t seem to be
         breached by a JPEG implementaton (although it&#x27;s known that
         JBIG is patent-encumbered; hence JBIG-2). So why does Lucent
         bring up JPEG at all? A curious wording for sure, and we&#x27;d
         be interested to see if anyone else has been contacted in
         these terms. Mail us at tips@spesh.com if you have.
         http://slashdot.org/article.pl?sid=02/07/18/157217
       - best use of porn collection in slashdot post modded funny +5
http://www.ghostscript.com/pipermail/gs-devel/2002-February/001203.html
                                          - JBIG encumbered, JBIG2 no         Oh, is it time again already for Esquire&#x27;s 50 Sharpest Men
         2002? Joy! Hidden among the usual suspects - which include
         Richard Dawkins (&quot;scientist&quot;), Kevin Warwick (&quot;scientist&quot;),
         Kevin Eldon (&quot;comedian&quot; - and KING OF HOBBIES), is one 
         Charlie Brooker (listed here as a &quot;TV Go Home&quot;). Merely 
         appearing in the list seems to have prompted the reclusive,
         unsmiling, and often violent comedian to hurredly post a 
         TVGoHome update from his pile of cardboard boxes near Soho,
         which is all to the good. But does he really deserve the title?
         What *is* sharpness? &quot;In case your are [sic] in any doubt&quot;, 
         the site explains, &quot;sharpness is, above all, an attitude&quot;. Now
         the dictionary says it&#x27;s also &quot;having a bitter taste&quot;, and
         &quot;harshness of manner&quot;, and given that Hank, the Angry
         Drunken Dwarf is both unlisted and dead, we think Brooker&#x27;s
         a show-in for the Web protest/mess-with-publisher&#x27;s-heads
         vote. We urge you to vote now, express the will of the
         people, and win some vile perfume or a horrible watch.
         http://www.esquire.co.uk/esquire50.htm
           - warning: torturous and unnecessarilly prolonged web form
         http://www.thebee.com/bweb/iinfo106.htm
- Hank: another exciting Net meme you missed because you go out too much
                                &gt;&gt; ANTI-NEWS &lt;&lt;
                             berating the obvious         when oh when will the public tire of PUERILE GOOGLE TYPOS?: 
         http://www.google.com/search?q=overcocking , &quot;addtition&quot;, 
         &quot;t-shits&quot;, &quot;eductation&quot;, and (via prudish spellcheckers?): 
         http://www.google.com/search?q=%22public+lice%22 ... don&#x27;t buy: 
     http://www.ebuyer.com/customer/products/index.html?product_uid=26497
         ... bringing a whole new meaning to &quot;colour naming systems&quot;: 
         http://www.ntk.net/2002/07/19/dohhue.gif ... might explain its 
         bewildered state: http://www.ntk.net/2002/07/19/dohpot.gif ... 
         http://www.contactnet.ro/solutiixxi/index.php?lim=e vs &quot;On our 
         children&#x27;s game-place, they can romp after hug-desire!!&quot;: 
         http://www.tourismus-tirol.com/scharnitz/risserhof/indexe.html 
         ... self-fulfilling: http://www.ntk.net/2002/07/19/dohdig.gif 
         ... and when VIM met the PALM platform, the &quot;Related E-Books&quot; 
         were MOIDER: http://www.ntk.net/2002/07/19/dohvim.gif ... 
                               &gt;&gt; EVENT QUEUE &lt;&lt;
                         goto&#x27;s considered non-harmful         Yes, we have concerns about encountering Slashdot readers &quot;au 
         naturel&quot; without any kind of intervening moderation system. 
         And yet, at the same time, we cannot look away. 7pm local 
         time, Thu 2002-07-25 marks the world&#x27;s first SLASHDOT MEETUP 
         EVENT (check local listings for details, free), attracting - 
         at time of writing - an impressive 91 interested signups for 
         the London gathering (19 for Manchester, Leeds 17, Glasgow 11, 
         Birmingham 9, Liverpool 6, and so on). Usual warnings about 
         meeting your online &quot;friends&quot; are, we imagine, more than 
         usually applicable here - especially as no-one can work out 
         what the organisers are getting out of it. Spamming lists? 
         Kickbacks from the democratically selected venues? Or valuable 
         demographic info like the fact that &quot;Elijah Wood&quot; is currently 
         more popular in hobbit-friendly Glasgow than U2, Tori Amos, or 
         Duran Duran? 
         http://slashdot.meetup.com/
                                  - #goth girls for bearded sysadmins
         http://www.defcon.org/
                            - plus Defcon in Vegas in two weeks&#x27; time
                                &gt;&gt; TRACKING &lt;&lt;
               sufficiently advanced technology : the gathering         Once again that silly 5K Web competition thing gets the
         headlines. And once again, we must rub its fatty, fatty chin
         against the honed shard of flint that is the 2002 1K
         MINIGAME 8-BIT CODING COMPETITION until it&#x27;s shaved meek.
         1024 bytes is all you (must have) wrote: to enter, arrange
         them to form a working game on any 8-bit micro you choose.
         In response to complaints from last year, &quot;middle class BBC
         Micro Fauntleroys&quot; will be permitted, says last year&#x27;s
         judge, Matt Westcott. More weakness is shown by permitting
         Atari 2600s, which have 2K cartridges, to enter (you must
         fill the last 1K with zeros), and also the TI99/4A which as
         everyone knows has sixteen bits. We do hope this doesn&#x27;t end
         in Zork virtual machines or Postscript or something.
         http://www.ffd2.com/minigame/
                   - &quot;The competition will never be &#x27;fair&#x27;&quot; - BETTER!
         http://entries.the5k.org/946/wolf5k.html
                                                  - oh, the decadence
         http://www.igf.com/submit.htm
- $20,000 prize money; probably not accepting Oric Forth games this year
                                &gt;&gt; MEMEPOOL &lt;&lt;
                ceci n&#x27;est pas une http://www.gagpipe.com/         &quot;Now That&#x27;s What I Call Copyright Infringement, Vols 1,2,3&quot;: 
         http://pod-135.dolphin-server.co.uk/~boom/thecd/boom.php ... 
         http://news.bbc.co.uk/hi/english/uk/2131236.stm - a case for: 
         http://news.bbc.co.uk/hi/english/uk/newsid_1490000/1490957.stm ?
         ... forget offshore accounting - what&#x27;s to stop them going back 
         in time with the proceeds and killing all the investors&#x27; 
         grandfathers?: http://www.timetravelfund.com/ ... telnet 
         econet: http://www.heyrick.co.uk/econet/misc/tcpip.html ... 
         ... you know, wouldn&#x27;t a simple 404 attract less attention?: 
         http://www.ttfn.com/ ... Transformers! Terrorists in disguise! 
         http://www.tsa.gov/workingwithtsa/aircraft_prohibit.shtm ... 
         obligatory filk Pie cover: http://home.mchsi.com/~jeffwadler/ 
         ... they laughed when I sat down at the VT100 terminal: 
         http://www.prodikeys.com/ ... and kept laughing, thanks to: 
         http://www.colorpilot.com/sound.html ...
                                &gt;&gt; GEEK MEDIA &lt;&lt;
                   what, *another* http://www.tvgohome.com/ ?         TV&gt;&gt; now that kids are taking over from teachers in RULE THE 
         SCHOOL (5pm, Fri, BBC1) and redecorating their homes in HOME 
         ON THEIR OWN (7pm, Sat, ITV), we can&#x27;t wait for the concept 
         gameshows where they fly planes, run pubs and perform 
         lifesaving surgery... Wired UK&#x27;s Hari Kunzru reappears on 
         NEWSNIGHT REVIEW (11pm, Fri, BBC2)... and if you like James 
         &quot;Copland&quot; Mangold&#x27;s sensitive character study of an overweight 
         man HEAVY (1.05am, Fri, BBC2), the IMDB also recommends Eddie 
         Murphy&#x27;s &quot;The Nutty Professor&quot;... The Beach Boys&#x27; &quot;Pet Sounds&quot; 
         is the subject of ART THAT SHOOK THE WORLD (7.20pm, Sat, 
         BBC2), even though it doesn&#x27;t have &quot;Good Vibrations&quot; on it... 
         Meg Ryan experiments with setting a romantic comedy during the 
         Gulf War, and where one of the protagonists is dead, in 
         COURAGE UNDER FIRE (9.15pm, Sat, BBC1)... but we&#x27;d skip that - 
         along with laboured Tim Burton homage MARS ATTACKS! (10.35pm, 
         Sat, ITV) - in favour of Ensign Ro and Kevin Spacey - together 
         at last! - in top-notch low-budget office horror SWIMMING WITH 
         SHARKS (10.50pm, Sat, C5)... Radha &quot;Pitch Black&quot; Mitchell 
         shows up in Aussie relo-drama LOVE AND OTHER CATASTROPHES 
         (1.05am, Sat, BBC2)... Matt &quot;Max Headroom&quot; Frewer fails to 
         halt the downward slide of the &quot;National Lampoon&quot; franchise in 
         Washington excursion NATIONAL LAMPOON&#x27;S SENIOR TRIP (12.30am, 
         Sat, ITV), compared to acknowledged classics like NATIONAL 
         LAMPOON&#x27;S VACATION (9pm, Tue, C5)... the final of JUNKYARD 
         WARS (8pm, Mon, C4) offers a taste of where these shows are 
         going when the teams must build full-size remote-controlled 
         &quot;combat cars&quot;... while a &quot;I Preferred The Terrorism Of The 
         1980s&quot; special recreates the SAS - EMBASSY SIEGE (9pm, Thu, 
         BBC2) - if only everything was as simple as pseudo-&#x27;70s 
         supernatural action comedy GOOD VS EVIL (9pm, Wed, Sci-Fi)... 
         
         FILM&gt;&gt; David Cronenberg explains why the &quot;Friday The 13th&quot; 
         machete murderer is so hard to kill, shortly before he goes up 
         against two of the chicks from &quot;Gene Roddenberry&#x27;s Andromeda&quot; 
         in undemanding self-referential &quot;Alien&quot;-alike JASON X 
         ( http://www.cndb.com/movie.html?title=Jason+X+%282001%29 : 
         [Lexa &quot;Andromeda&quot; Doig] [is] flat on her back on a table 
         recuperating, and the camera shows her boobs; [Lisa &quot;Beka 
         Valentine&quot;] Ryder plays a robot who wants to be more of a 
         woman [...] her nipples fall off for a little comic relief)... 
         while the director of &quot;Candyman&quot; and UK hacker classic &quot;Smart 
         Money&quot; digital-videos drug-fuelled Hollywood self-excoriation 
         IVANS XTC ( http://www.cndb.com/movie.html?title=ivans+xtc : 
         [Lisa Enos], who also wrote the screenplay and whose first 
         film this is, appears in a few full frontal scenes a little 
         more than a third of the way through)... otherwise it&#x27;s star-
         packed CGI talking animal interspecies romance STUART LITTLE 2 
         (imdb: sequel/ anthropomorphic/ based-on-novel/ bird/ mouse/ 
         part-computer-animation/ soccer)... or odd-sounding Oirish 
         period frolic THE ABDUCTION CLUB ( http://www.bbfc.co.uk/ : 
         Cuts required to sight of 2 men hanging by necks in execution 
         scene, on grounds of potentially harmful imitable technique, 
         [in accordance with] category standards and Video Recordings 
         Act 1984)... 
         
         CONFECTIONERY THEORY&gt;&gt; as tastebuds acclimatise to the 
         acquired tang of DIET COKE LEMON, reader WAYNE WILLIAMS has 
         been forced to look further afield for his acidic thrills, 
         proclaiming the &quot;Citrus&quot; version of ROWNTREE&#x27;S FRUITSOME 
         CEREAL BARS &quot;pretty tasty, a bit like a lemon meringue pie in 
         a bar&quot;. Frankly we preferred the &quot;Tropical&quot; and &quot;Red Berry&quot; 
         variants, though neither as much as the various ALPEN BARS 
         with &quot;yoghurt&quot; or &quot;chocolate&quot; style toppings - and all for 
         just twice the fat of ordinary breakfast cereal! In other 
         most-important-meal-of-the-day news, those eggy &quot;breakfast 
         pizza&quot; CHICAGO TOWN SCRAMBLES [NTK 2002-04-12] are delicious 
         (particularly with tomato ketchup), and have been flying off 
         the shelves in a 2-pack for 99p deal in selected branches of 
         Sainsbury&#x27;s... as predicted in NTK 2001-08-10, KFC have taken 
         advantage of MCDONALD&#x27;S weakness in the KITKAT MCFLURRY arena, 
         and rolled out their identically-sized rival AVALANCHE (also 
         99p) with a freakish selection of toppings including chocolate 
         sauce, Cadbury&#x27;s Flake, M&amp;M&#x27;s and Starburst Joosters. In a 
         non-ice-cream-related incident, CHARLOTTE LATIMER was the 
         first to contact us with a sighting of STARBURST &quot;straight-
         out-of-the-1993-naming-dept&quot; FLIPSTERS HARD CANDY (from 
         30p/pack): &quot;pretty nice hard candies (peach, apple, raspberry 
         and forest fruits) with a yucky plastic-looking splodge on one 
         side that purports to offer some kind of creaminess (we 
         guess)&quot;, but still no news yet of the brand&#x27;s other mutant 
         offspring: teardrop-shaped FRUITINESSE (from 49p), non-fish-
         flavoured gummy SEA MONSTERS (from 99p/bag), and STARBURST 
         CAKE BARS (UKP1.05 for pack of 5)... and finally, MIKE WALSH 
         of Finland remained nonplussed with last month&#x27;s UK sighting 
         of an imported South African NESTLE SMARTIES IN MILKYBAR 
         CHOCOLATE, maintaining he bought a White &quot;Ritter Sport&quot; bar 
         with Smarties in, &quot;in a branch of the (German) Spar chain in 
         Tenerife in January&quot;, and was generally disappointed by its 
         usability: &quot;Smarties kept falling out&quot;, he complains. But 
         Nestle is innovating over here as well, with the imminent 
         arrival of WONKA XPLODER and GOLDEN CRUNCHER biscuits (79p/ 
         pack of 6) - replacing underperforming former NTK &quot;Taste 
         Abominations&quot; WONKA OOMPA sweets - and its first new chocolate 
         launch in 5 years, solid-looking would-be Dairy Milk-killer 
         NESTLE DOUBLE CREAM (40p, available from July 29)... 
                               &gt;&gt; SMALL PRINT &lt;&lt;       Need to Know is a useful and interesting UK digest of things that
         happened last week or might happen next week. You can read it
       on Friday afternoon or print it out then take it home if you have
     nothing better to do. It is compiled by NTK from stuff they get sent.
                       Registered at the Post Office as
                                   &#x27;&quot;funny&quot;&#x27;
                         http://www.net-watch.org/1.htm               
                                 NEED TO KNOW
            THEY STOLE OUR REVOLUTION. NOW WE&#x27;RE STEALING IT BACK.
                         Archive - http://www.ntk.net/
              Unsubscribe? Mail ntknow-unsubscribe@lists.ntk.net
                Subscribe? Mail ntknow-subscribe@lists.ntk.net
 NTK now is supported by UNFORTU.NET, and by you: http://www.geekstyle.co.uk/                          (K) 2002 Special Projects.
             Copying is fine, but include URL: http://www.ntk.net/                    Tips, news and gossip to tips@spesh.com
             All communication is for publication, unless you beg.
              Press releases from naive PR people to pr@spesh.com
     Remember: Your work email may be monitored if sending sensitive material.
       Sending &gt;500KB attachments is forbidden by the Geneva Convention.
              Your country may be at risk if you fail to comply.
</pre>

## Record 002527

**Label:** `benign`

<pre>
phonology &amp; phonetics burquest , donald a . and david l . payne ; phonological analysis : a functional approach : pb . : isbn : 0-88312 - 608 - 7 ; viii , 179 pp . ; $ 19 . 00 . summer institute of linguistics . burquest and payne have produced an introductory textbook oriented primarily to students interested in previously unstudied or little studied languages and who need a practical guide on how to carry out their investigation . it gives a broad base of exposure to the kind of phonological phenomena found in a range of languages . internet : academic . books @ sil . org textbook , phonology note : [ price correction for the book below ] watt , david l . e . the phonology and semology of intonation in english : an instrumental and systemic perspective . 1994 . 192 pp . 6x9 book . prepaid us $ 22 . 00 + 3 . 50 p&amp;h ( us ) / 5 . 00 ( can ) / 5 . 50 ( other ) . iulc publications , 720 e . atwater ave . , bloomington in 47401 . &lt; iulc . indiana . edu &gt; watt presents an extensive study of intonation and its meaning potential from a systemic functional perspective , advancing halliday &#x27;s description of intonation . includes over 250 instrumentally derived illustrations of examples from original tape recordings , cited examples , and recordings of casual conversations . ( a previous posting to the list contained an incorrect price for the book . we regret any inconvenience . ) syntax harms , phillip l . ; epena pedee syntax : studies in the languages of colombia 4 ; pb . : isbn : 0-88312 - 276 - 6 ; xiv , 213 pp . $ 27 . 00 . summer institute of linguistics and university of texas arlington . the author describes the major grammatical structures of the language from morphology through discourse , with an introductory phonological sketch . epena pedee is an ergative-absolutive language , but one in which the subject has an important role , in that it manifests number agreement with the verb . internet : academic . books @ sil . org syntax , colombia wiering , elizabeth and marinus wiering ; the doyayo language : selected studies ; pb . : isbn : 0-88312 - 620 - 6 ; x , 299 pp . $ 28 . 00 summer institute of linguistics and university of texas arlington . doyayo is the language of about 15 , 000 people in northern cameroon . using a descriptive linguistic approach , the wierings cover phonology , structure of indicative verbs , some major systactic structures on levels from morpheme through discourse , and some features of folktales . internet : academic . books @ sil . org syntax , phonology , cameroon cope , pamela ; introductory grammar : a stratificational approach ; pb . ; isbn : 1-55671 - 001 - 1 ; ix , 113 pp . ; $ 12 . 00 . summer institute of linguistics . cope presents a clear exposition of stratificational grammar , intended primarily for beginning linguistic students . internet : academic . books @ sil . org textbook , syntax semantics berman , stephen r . ( university of massachusetts , amherst ) ; on the semantics and logical form of wh - clauses , pb . xiii + 279 pp . ph . d . dissertation , 1991 . $ 16 + s / h ( $ 3 domestic , $ 4 foreign surface ) . graduate linguistic student association ( glsa ) , university of massachusetts , amherst . this dissertation proposes a semantically dichotomous analysis of wh-clauses as denoting either questions or quantified propositions , depending on syntactic context ( in certain cases additionally influenced by lexical properties ) . behavior under quantificational adverbs provides the primary diagnostic tool and motivates analysing wh-phrases as inherently nonquantified open sentences , following the heim / kamp treatment of indefinites . restrictions on wh-phrase quantifiability , which it is argued interacts with presupposition , motivate the semantic dichotomy . additionally , the quantified interpretation is argued not to involve inherent exhaustiveness . contact glsa @ linguist . umass . edu for more info .
</pre>

## Record 002528

**Label:** `benign`

<pre>
&lt;!--
 body      { BACKGROUND-IMAGE: url(http://images.lockergnome.com/images/issue/top-right.gif); scrollbar-3dlight-color: #DEE8EC; scrollbar-arrow-color: #000000; scrollbar-base-color: #007C7A; scrollbar-darkshadow-color: #507686; scrollbar-face-color: #A9C4CF; scrollbar-highlight-color: #DEE8EC; scrollbar-shadow-color: #507686 }
 a:link    { COLOR: #0000FF; TEXT-DECORATION: underline; font-weight: normal }
 a:visited { COLOR: #000000; TEXT-DECORATION: underline; font-weight: normal }
 a:active  { color: #000000; TEXT-DECORATION: none }
 a:hover   { color: #26343A; TEXT-DECORATION: none }
 p.title   { BACKGROUND: #A9C4CF; BORDER-BOTTOM: #507686 4px solid; BORDER-LEFT: #DEE8EC 4px solid; BORDER-RIGHT: #507686 4px solid; BORDER-TOP: #DEE8EC 4px solid; COLOR: #26343A; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 14pt; FONT-WEIGHT: normal }
 p.news    { BACKGROUND: #A9C4CF; BORDER-BOTTOM: #507686 4px solid; BORDER-LEFT: #DEE8EC 4px solid; BORDER-RIGHT: #507686 4px solid; BORDER-TOP: #DEE8EC 4px solid; COLOR: #26343A; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 18pt; FONT-WEIGHT: normal }
 p.sidebar { BACKGROUND: #A9C4CF; BORDER-BOTTOM: #507686 3px solid; BORDER-LEFT: #DEE8EC 3px solid; BORDER-RIGHT: #507686 3px solid; BORDER-TOP: #DEE8EC 3px solid; COLOR: #26343A; FONT-FAMILY: Comic Sans MS, Trebuchet MS, Helvetica, Arial; FONT-SIZE: 10pt; FONT-WEIGHT: bold; TEXT-ALIGN: center }
 .url      { font-size: 8pt; font-family: Verdana, Tahoma, Arial }
--&gt;
20020717 Lockergnome Digital Media
Â 07.17.2002 MediaREPORT
GET WINDOWS XP TIPS: Months after the release of Windows XP Professional and Home editions, people are still learning the nuances of Microsoft&#x27;s newest operating system. Whether you&#x27;ve been using it for a while or are planning to upgrade to the new OS soon, this ebook is right up your alley. 
GET YOUR COPY 
of Lockergnome&#x27;s Top 50 Windows XP tips now!    This is of course belated, as I&#x27;m sending it on the 18th, but Happy Birthday to Lori!One thing about MacWorld should excite mp3 junkies -- the iPod just got 
even bigger, with a 20GB version and Apple officially endorses Windows 
compatibility. Actually, the good news is, the 5GB and 10GB versions 
came down in price. Hearing that the only &quot;officially&quot; functional 
Windows player is MusicMatch Jukebox Plus is a serious downer, in my 
opinion. Sure, MusicMatch is a decent player, but with plenty of great 
free players on the market, why do we want to purchase a software 
player in addition to the $299+ hardware unit?At first glance, it looks like Apple is only paying lipservice to true 
Windows compatibility. I&#x27;ve seen no mention of any additional 
functionality, besides song management via one media playing utility. Mediafour&#x27;s 
XPlay remains a 
better option, in my opinion. In addition to allowing you to use an 
iPod with almost any media player made for Windows, it assists with 
contact management, via Outlook vCards, in addition to making the 
iPod an additional drive on your PC. At a mere $10 more than MusicMatch 
Jukebox Plus, XPlay blows the doors off Apple&#x27;s officially endorsed player.Lori and I made the five and a half hour drive to St. Louis for this year&#x27;s 
SIC without a hitch. I just missed a 
face-to-face introduction to John Lal, of 
winferno.com, although I&#x27;m sure 
we&#x27;ll meet tomorrow. John&#x27;s the guy behind the 
free copy of Research-Desk 
for all Gnomedex attendees. Shortly after arrival, I enjoyed dinner with 
the eSellerate gang, with a 
discussion about GnomeTomes and 
what the future holds.Every time I travel, I&#x27;m reminded just how slow dialup really is. Fortunately, my 
Crosspaths.net connection allows me 
to send mail via my Lockergnome account, unlike most of the national dialup 
services. Crosspaths is technically an Iowa ISP, although the have points of 
presence in almost every major city in the country. If you&#x27;re a dialup user, 
you may want to take a look at their offerings, regardless of where you live. Lori 
has used their DSL service for two years now, and they&#x27;ve been nothing short of 
outstanding in dealing with customer service queries. 
Jake LudingtonÂ Â Â Â Â Â Â Â Â GnomePRODUCER
PNG Files Do Not Show Transparency in Internet Explorer (Q294714)
http://support.microsoft.com/default.aspx?scid=kb;en-us;Q294714This originally appeared in last weeks Webmaster Weekly, but due to its graphical nature, its worth inclusion here as well:&quot;If you browse to a Web page that contains an image that has a transparent 
background in Portable Network Graphics (PNG) format, the image background 
may appear to be gray rather than transparent.&quot;Fortunately, Microsoft explains a solution for this problem. Personally, I 
haven&#x27;t encountered this PNG display error, but for those of you 
simplementing PNGs on your sites, you&#x27;ll want to review the solution.
Â GnomeFEATURE
Glitschka.com
http://www.glitschka.comFlash animations,  downloadable icons, artistic doodles, and details about 
the artist himself are available from this site. You&#x27;re guaranteed to find 
something entertaining here, and if you need a logo designed, Von Robert 
Glitschka might even take you on as a client. The portfolio is extensive, 
including stock images and even some icons by the artist&#x27;s seven year old 
daughter. A must read is the anatomy of an illustration section, which lays 
down artistic opinion, straight from Glitschka&#x27;s mouth on how to make a 
funny creation. The entertainment is accessible accross both Windows and Mac 
platforms, with icons available in both Mac and PC versions.
  Â GnomeSKIN
Skin 2 for Winamp 3.x by nnicPosted on  7/17/02 10:43PM  -- Â Â  
[Download]Â --Â [Zoom]
Â --Â [Visit DeskMod]
Get your copy of SkinStudio XPÂ GnomeAUDIO
Fight Cloud
http://www.fightcloud.com
  
Unknown artists across a variety of genres offer free mp3 downloads of 
selected tracks, with an option to purchase songs on CD for the price 
of shipping and handling. All CDs are professionally mastered works, 
so you&#x27;re getting label quality releases, without the jacked-up retail 
price tag. The mp3s let you decide if the album is worth you $4.95. 
The only thing I find odd about this site is their proclamation of 
paying artists 50% of distribution profits, which I have to assume is 
50% of zero, since the CDs are free. The artist selection contains 
some solid releases by talented artists, regardless. 
 CHRIS TEACHES THE BASICS: If you&#x27;ve got friends or family who want to learn more about their PC, from a guy who makes things nice and easy, check out the VHS release of Computer Basics in the GnomeStore. Chris teams with TechTV cohort, Kate Botello, to lead novices on a journey through their computer. From basic interactions, to installing apps, to using the Internet and e-mail, Chris and Kate have all the basics covered. Help out a friend and  get them a copy today.    
Â GnomePLUGIN
BBE Sonic Maximizer [3.22MB] W9X/W2K/XP $129
http://www.bbesound.com/products/maxim/directxplugin.aspFrom home recordings to downloaded mp3s, this DirectX plug-in brings back 
the clarity to your audio files. Bring back the live feel that gets lost 
in the recording process, add depth to bass lines, and bring vocals to 
the front of your audio mix where they belong. Compensate for frequency 
phase shifting, giving your audio a kick in the pants. This is one post 
production tool you need in your digital arsenal. Also available as a VST 
for Mac OS.
Â GnomeDVD
Click for DetailsWho&#x27;s Afraid of Virginia Woolf? (NR) 1966
Adapted Play - 131min
Reviewer&#x27;s Tilt (10)
 Before directing Catch-22 and The Graduate, Mike Nichols made his big screen debut directing this adroit adaptation of Edward Albee&#x27;s play &quot;Who&#x27;s afraid of Virginia Woolf?&quot;  Nominated for thirteen, and winner of five, Academy Awards, this dark tale centers on history professor George (Richard Burton), and his wife Martha (Elizabeth Taylor), daughter of the college president.  At first George and Martha appear to be the average Ozzie and Harriet, an aging, well-adjusted, educated couple, comfortable with their lives and their love.  George and Martha quickly shatter this illusion, as they return from a faculty cocktail party, to exchange a caustic barrage of verbal barbs.  Just as quickly, however, the couple turns witty and civil when the young new biology professor Nick (George Segal) and his shy, but pretty wife Honey (Sandy Dennis) stop by for a nightcap. Unfortunately for Nick and Honey, the sardonic exchange does not disappear, it merely changed guise.  Soon Nick and Honey find themselves helpless pawns in the elder couple&#x27;s sick-witted exchange.  Throughout the remainder of the movie, George and Martha dance their finely choreographed, oft-rehearsed dance of despise. The two alternate the lead, alternately dishing out and enabling the abuse, but they never miss a step.  Thankfully, writer Albee&#x27;s sublime play translates to the big screen almost unadulterated. Taylor and Burton deliver his lines with great force and impeccable timing.  At one point George proposes &quot;Now that we&#x27;re through with Humiliate the Host...and we don&#x27;t want to play Hump the Hostess yet...how about a little round of Get the Guests?&quot;  This provides some idea of the precarious twist of uncomfortable wit that drives the action from start to finish. Albee&#x27;s stellar writing notwithstanding, the real star of this film is Taylor and Burton&#x27;s alchemy, converting Albee&#x27;s words into cinematic gold.  Ok, I will grant you that playing a pair of aging, drunk, selfish lovers may not have been much of a stretch.  Both actors, however, deliver their lines with the chilling reality of a serial killer describing his most gratifying slaying.  Often unpleasant and disturbing, this film never allows you to relax or look away.   Simultaneously seamlessly smooth, and ingeniously rocky this is not a &quot;feel good&quot; movie. &quot;Who&#x27;s Afraid of Virginia Woolf?&quot; is, however, a memorable film that will stick with you for years to come. 
Region 1 Encoding (US and Canada only)
Format: Black and White, Widescreen Anamorphic, Closed Captioned
Sound: (Dolby Digital 5.1)
Production NotesReview by Brett TroutÂ GnomeWALLPAPER
purple flower for WallPapers by tatoshPosted on 7/17/2002 12:35:01 AM  -- Â Â  [Download]
Â --Â [Zoom]
Â --Â [Visit WinCustomize]
http://www.lockergnome.com/issues/digitalmedia/20020717.html
Your subscribed e-mail address is: [qqqqqqqqqq-lg@spamassassin.taint.org] - To unsubscribe or change your delivery address, please visit the subscription management page. For further information, please refer to the GnomeCREDITS in the sidebar.
LOCKERGNOME
Â Geekathon 2002Â Latest Windows Daily
Â Latest Digital Media
Â Latest Tech Specialist
Â Latest Penguin Shell
Â Latest Apple Core
Â Latest Web Weekly
Â Latest Bits &amp; Bytes
Â Latest Audio ShowÂ The GnomeSHOPPERÂ Microsoft Office Tips
Â PC Productivity Tips
Â Cool Internet Tips
Â Windows 2000 Tips
Â Windows XP Tips
Â Top 50 Fun Sites
Â Must-Know Tech Terms
Â Top 50 Useful Sites
Â Top 75 Tech Sites
Â Top 50 PenguinCORE
Â Top 50 PenguinTWEAKS
Â Recommend Us!
Â Advertise With Us
Â High-Tech Job Search
Â Chat With Gnomies
Â Watch The Webcams
Â Computer Power UserÂ Submit Your Opinion
Â Read Past Issues
Â Download X-Setup
Â About Lockergnome
Â Our Privacy Policy
Â View More Options
Â Get Chris&#x27;s BookÂ General Feedback
Â E-mail the Editor
Â Jake&#x27;s BlogÂ Our XML / RSS Feed
Â Syndicate Our Tips
Â Link To LockergnomeCLICK HERE TO ZOOMÂ GNOMESPECIALS
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
Question: which group is 250,000+ strong and always looking for stuff to make their personal and professional lives run smoother?  Â GNOMEMUSICColdplay Takes a Bigger BiteIf you miss Coldplay&#x27;s quick little club tour this August, don&#x27;t worry, youï¿½ll get a second chance to see them in...
Dave Matthews Gives Us &#x27;Busted Stuff&#x27;The Dave Matthews Band is breaking things up with their new album Busted Stuff; it hit stores shelves yesterday. The...
Strokes Leave Weezer HangingStrokes fans who are heading to the Weezer tour to catch the Strokes opening will be disappointed. The Strokes were...
Jaz-O Sez Jay-Z is a FraudThe rap between rappers Jaz-O and Jay-Z is nothin but diss...otherwise known as a falling out. Jaz-O was Jay-Z&#x27;s...
Booze, Drugs in Aaliyah&#x27;s PilotThe pilot who was at the controls of a small plane that crashed and killed singer and actress Aaliyah had cocaine...
McGraw&#x27;s Uncle Charged With MurderCountry singer Tim McGraw&#x27;s uncle has been charged with shooting and killing a neighbor in Vallejo, California. One... Â 
GNOMECREDITSÂ©2002, Lockergnome LLC. ISSN: 1095-3965. All Rights Reserved. Please read our Terms of Service. Our Web site is hosted by DigitalDaze. Domain registered at DNS Central.
Â Â Search Past Issues:
Â 
</pre>

## Record 002529

**Label:** `benign`

<pre>
language resources &amp; evaluation workshop workshop announcement and call for papers linguistic coreference workshop 26 may 1998 , morning session held in conjunction with the first international conference on language resources and evaluation granada , spain ( 28-30 may 1998 ) workshop aims it is essential , for a natural language processing system , to instantiate each object , process , attribute , and property correctly , so that all references to the same item be recognized as such and an inventory of all distinct items be accurate at all times . this problem is far from being resolved . there are both linguistic and computational reasons for this deficiency . first , there is no satisfactory microtheory of linguistic coreference . secondly and consequently , there is no satisfactory application of such a microtheory to nlp . a microtheory of coreference in natural language includes in its scope all the phenomena that satisfy the following condition : an object / entity , an event , an attribute , a property or its value , an attitude , or any combination of the above is referred to more than once in a natural-language text , and the understanding of the text depends on the correct interpretation of the two or more referring expressions as designating the same object , event , etc . a linguistic microtheory of coreference for a language consists of the following elements : - a complete range of covered phenomena in the language ; - a taxonomy of the range ; - a typology of the range ; - a list of rules forming the various types of coreference ; - a list of rules interpreting the various types of coreference . there has been a considerable amount of work on a few selected types of coreference , focusing almost exclusively on object coreference . thus , significant work has been done in theoretical linguistics on anaphora and cataphora , subsuming , for the large part , earlier work on deixis . a small minority of authors have tried to extend their studies of anaphora beyond mere syntax . in the cognitive-linguistics and philosophy-of - language traditions , interesting work has been done relating anaphora and deixis to ambiguity resolution and discourse structure . at the same time , an effort in comparative-contrastive linguistics has led some writers to examining the data of more than one language at a time , still emphasizing entity or object reference . in computational linguistics , the problem of coreference took early on the form of pronoun antecedent resolution , and this particular task , somewhat broadened to include a few other types of anaphora , still remains in the center of the problem . the most sustained effort in the computational treatment of coreference has been mounted within the tipster / muc - 6 initiative . while it has been recognized since quite early in the game that coreference resolution is based in large part on world knowledge , most of the work done on the matter computationally and theoretically ignores and avoids world knowledge . the muc - 6 initiative makes such an orientation quite explicit : the work should be based on such simpler resources as part-of - speech tagging , simple noun phrase recognition , basic semantic category information like , gender , number , and [ to a limited extent ] full parse trees . such an approach - - trying to explore and maximize everything that can be done simply and cheaply towards the resolution of a complex program - - is perfectly legitimate as long as it is realized that a considerable part of the problem remains unsolved , and it is indeed realized fully well within the muc - 6 initiative . one persistent problem throughout the existing computational ventures into coreference has been the lack of a consistent theoretical approach to it . the result is that coreference phenomena are treated as self-obvious , and most of them are overlooked , especially if they are not explicit pronoun-antecedent or other equally evident anaphora cases . what is needed for a full , accurate , and reliable approach to coreference can be summarized , somewhat schematically , as involving the following steps : 1 . understanding fully the range of the phenomenon and of the rules that govern it ( theory ) ; 2 . determining the extent of machine-tractable information in the rules ; 3 . taking stock of all the rules that can be computed ; 4 . developing the appropriate heuristics for the computable rules ; 5 . computing the rules . workshop agenda the workshop will be held during the morning session of 26 may 1998 and will include a joint address by the organizing committee ( listed above ) , followed by 5 - 8 individual presentations in two 90-120 - minute blocks , with a break provided midway through . call for papers the workshop solicits papers addressing any one or more of the points addressed above as well as any other pertinent issues . papers based on a diversity of languages are encouraged , both one language at a time and , especially , comparative / contrastive studies . also strongly encouraged are papers which extend the study of coreference beyond entity / object reference , across document boundaries , and / or into non-text media . format for submission paper submissions should consist of an extended abstract of approximately 800 words , along with a brief description of the proposed presentation structure ( e . g . , paper , paper plus demo , etc . ) . each submission should include a separate title page , providing the following information : the title to be printed in the conference program ; names and affiliations of all authors ; the full address of the primary author ( or alternate contact person ) , including phone , fax , email ; and required audio-visual equipment . papers may be submitted by sending three hardcopies or one softcopy ( in tex , ascii , or post-script format ) to the appropriate address as listed below : dr . victor raskin chair , interdepartmental program in linguistics heavilon hall purdue university west lafayette , in 47907 usa vraskin @ purdue . edu submissions must be received no later than 1 march 1998 for a 15 march notification of paper acceptance . ( full versions of all accepted papers are requested no later than 15 april 1998 for inclusion in the conference proceedings . ) workshop organizing committee dr . sara j . shelton ( contact person ) us department of defense 9800 savage road , r525 ft meade , md 20755 usa sjshelt @ afterlife . ncsc . mil 301-688 - 0301 ( voice ) 301-688 - 0338 ( fax ) dr . eduard hovy information sciences institute university of southern california 4676 admirality way marina del rey , ca 90292-669 usa hovy @ isi . edu 310-822 - 1511 , ext . 731 ( voice ) dr . victor raskin interdepartmental program in linguistics heavilon hall purdue university west lafayette , in 47907 usa vraskin @ purdue . edu 765-494 - 3782 ( voice ) 765-494 - 3780 ( fax )
</pre>

## Record 002530

**Label:** `benign`

<pre>
summer intern : paulo oliveira vince : here is the information that i have on paulo . he would be slated to work for the summer with april hodgeson and matt harris on how streaming media products may add value to advertising or some related area . actually , he would also be a good fit for helping to think ways to analyze our enron on - line data . i have asked if he can send a resume . in the mean time , most of his relevant information is attached below . - - stinson - - - - - - - - - - - - - - - - - - - - - - forwarded by stinson gibner / hou / ect on 02 / 17 / 2000 11 : 14 am - - - - - - - - - - - - - - - - - - - - - - - - - - - paulo rocha e oliveira on 02 / 10 / 2000 12 : 04 : 56 pm to : &quot; stinson gibner &quot; cc : subject : re : trip to houston stinson , thank you for your e - mail . my phone number is ( 617 ) 492 - 9551 . i graduated from princeton university in 1996 ( mathematics ) , and came straight to mit for a ph . d . in operations management at the sloan schoolof management . in my first three years i took all the required coursework in mathematics , optimization , stochastic processes , etc . , as well as a number of courses in psychology ( at mit and harvard ) . i am working with prof . gabriel bitran , and i am interested in the mathematical modeling of service operations . in particular , i am interested in the interaction between customers and companies ( hence the interest in psychology ) . the ( tentative ) title of my phd thesis is &quot; pricing substitute products on the internet &quot; , and i am sending you the summary which i sent to tom gros a few weeks ago that will give you an idea of what this research is about . thanks again , and i &#x27; m looking forward to meeting you and your research group next week . paulo pricing substitute products on the internet objective : to develop new tools to decide pricing policies for goods and services sold on the internet . motivation : this research is motivated by the fact that traditional choice and optimization models are not appropriate for internet - related businesses . the technological innovations associated with the internet brought about an overload of information which inevitably affects the ways in which consumers make choices . furthermore , companies have a great deal of influence on how much information consumers can have access to . the problem of pricing substitute products is an important strategic issue faced by internet companies . consumers usually search for generic products ( e . g . vcrs or computers ) without knowing exactly what they will buy . companies can show different products and different prices to each consumer . this type of flexibility was not available until the internet came about . the problem of pricing substitute products is not unique to the internet . the methodology developed by this research should be transferable to a number of other settings , such as pricing services . services are unique , and there are many cases where customers will only buy one of many services offered by a given company . our model will help companies decide which services to offer to which customers and how much to charge for these services . research strategy : our research strategy is to divide the pricing problem into two components which can be combined to generate optimal pricing strategies . these components are choice models and optimization models . choice models : choice models describe how customers make choices . the management literature draws on two main sources for these models : psychology and economics . the common approach in psychology models is to use what are called heuristic elimination methods . these methods consist of the elimination of options based on the sequential elimination of features until only one choice remains . these methods tend to be very context - specific and do not lend themselves very easily to mathematical analysis . economists focus on utility - maximing models that are significantly more mathematically tractable than psychological models . the most common economic model of choice is the logit model . the problem with these types of models is that they are not very accurate reflections of how consumer make choices on the internet . the first step in our research will be to develop choice models that capture the interactions going on between customers and companies on the internet . optimization : traditionally , the optimization problem consists of maximizing revenue over a certain planning horizon . on the internet , the problem of maximizing revenue still exists , but there is also a need to learn about customers . short term profit is based on sales , but long term profit is based on how well you know your customers and are able to retain them . the optimization problem must therefore include a short term component ( sales ) and a long term component ( learning ) .
</pre>

## Record 002531

**Label:** `benign`

<pre>
new books on pragmatics john benjamins publishing would like to call your attention to the following new title in the field of pragmatics : function and structure in honor of susumo kuno akio kamio &amp; ken - ichi takami ( eds . ) this collection of papers on functional syntax shows the development of a specific stream of functional linguistics initiated by susumu kuno of harvard university . inspired by prague school linguists such as jan firbas and vilem mathesius , kuno developed a more comprehensive and theory-oriented approach and lined it with the american formalist approach of generative grammar . his approach is thus a unique combination of functionalism and formalism that constantly urges the promotions of interactions between these two major trends in linguistics . the papers in this collection coherently deal with functional aspects of linguistics from a wide variety of perspectives such as theoretical , applicational , experimental and diachronic aspects incorporating the functional concept advocated by kuno . &lt; br &gt; contributions by : noriko akatsuka ; jacqueline guillemin - flescher ; akio kamio and margaret thomas ; becky kennedy ; kiri lee ; use men et . al . ; ken - ichi takami ; etsuko tomoda ; aiko utsugi ; gregory ward ; john whitman . 1998 . ca 360 pp . pragmatics and beyond new series 59 . us / canada : hb : 1 55619 822 1 price : usd 89 . 00 rest of the world : hb : 90 272 5073 1 price : nlg 178 , bernadette martinez - keck publicity / marketing tel : ( 215 ) 836-1200 fax : ( 215 ) 836-1204 e-mail : bernie @ benjamins . com john benjamins north america po box 27519 philadelphia pa 19118-0519 check out the john benjamins web site : http : / / www . benjamins . com /
</pre>

## Record 002532

**Label:** `benign`

<pre>
fw : hello hello ! just to update - we &#x27; ve extended the auction deadline to 7 august to give people more time to get comfortable with the contract on the back of transco delaying their 6 month auctions . we are still refining the curve analysis - so i &#x27; ll get in touch when we &#x27; ve got it together . hope all is well with you - say hello to marcus . p - - - - - original message - - - - - from : crilly , peter sent : 27 june 2001 19 : 32 to : kitchen , louise subject : re : hello hello ! congratulations on your new arrival - hope you are all well . got married on 26 may and got sunshine in dublin on the day ! we are running the virtual entry capacity as an auction bids due in on 9 july ( may be extended if transco delay their auction ) 5 year minimum term any terminal we have right to refuse gas at the beach on payment of compensation chosen by customer in the bid . we are still running analysis to produce beach curves based but current thinking is that current market inefficiency is inflating the price ( we are currently buying day ahead interruptible fergus capacity at 0 . 3 p and buying gas as it turns firm on the day at nbp - 7 p ) our aim is to take out the conservative guys in our auction so the transco auctions should be less ridiculous ( summer max price was 12 p but the average was 6 p , with wide spreads in each auction round we have modelled with transcost to verify transco &#x27; s view that fergus can be expanded by 50 % for 1 p / th lrmc also we have some other risk management angles we intend to pursue if we end up with a large position offer underwriting on incremental investment by transco code modifications to increase capacity auctioned build a pipeline ! it would be great to get your views on it - shall i give you a call when we &#x27; ve pulled together the curve analysis ? peter - - - - - original message - - - - - from : kitchen , louise sent : 26 june 2001 16 : 48 to : crilly , peter subject : hello how are things with you ? hope all is well - are you married now ? just a quick one - you have scared me with the entry point trading thing . if you ever want to talk it through give me a ring . louise
</pre>

## Record 002533

**Label:** `benign`

<pre>
re : swaps monitor research . vince , i reviewed all information available on the web site . there is a template that shows what kind of data swapsmonitor provides on commodities , but unfortunately this template is a blank one and no example of the table given . to receive any actual data we have to subscribe to their service ( $ 200 - single delivery , $ 300 - annual subscription ) . below is the template that given for commodity derivatives : the data in this database is derived from audited financial statements , regulatory filings , reports to shareholders . i will be glad to write a summary report . sincerely , elena vince j kaminski @ ect 10 / 12 / 2000 03 : 47 pm to : elena chilkina / corp / enron @ enron cc : vince j kaminski / hou / ect @ ect , mike a roberts / hou / ect @ ect subject : swaps monitor research . elena , please , review the energy related info in this database ( if any ) and talk to me about it . i would like to do some research in this area and ask you to write a summary report . nothing urgent . vince - - - - - - - - - - - - - - - - - - - - - - forwarded by vince j kaminski / hou / ect on 10 / 12 / 2000 03 : 52 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - andrei osonenko on 10 / 11 / 2000 04 : 26 : 38 pm to : ( recipient list suppressed ) cc : subject : swaps monitor research . we have today published information about the otc derivative activities of the largest dutch dealers . this research is contained in the attached pdf file . through our web site , swapsmonitor . com , you can obtain additional information about otc derivatives dealers , including rankings and a database of outstandings going back to 1994 . as an e - mail subscriber to our research , you will automatically receive all free research at the same time it is placed on our web site . if you wish to remove your name from the e - mailing list , please use the reply feature of your e - mail application and type the word &quot; remove &quot; in the subject line . regards , - dutch _ dealers . pdf andrei osonenko research department
</pre>

## Record 002534

**Label:** `benign`

<pre>
On Thu, 1 Aug 2002 17:10:48 +0100, John Hinsley  wrote:&gt; No, the problem is that what plip expects is GL/glut.h (amongst other things) 
&gt; which were there in 7.2 but have vanished in 7.3.     Yeah, I know what you mean.  Here&#x27;s the trick:    Remove the Nvidia drivers. Yeah, I know it&#x27;s a pain...
    Load BOTH mesa, mesa-demos and basically everything that comes in the mesa rpm.   
    THEN load NVidia; it&#x27;ll know what to do.    ...but it seems like I had to do this on 7.2, too.------------------------------------------------------------------------
Brian FahrlÃ¤nder              Linux Zealot, Conservative, and Technomad
Evansville, IN                    My Voyage: http://www.CounterMoon.com
ICQ  5119262
------------------------------------------------------------------------
I don&#x27;t want to hear news from Isreal until the news contains the words
&quot;Bullet&quot;, &quot;Brain&quot;, and &quot;Arafat&quot;._______________________________________________
RPM-List mailing list 
http://lists.freshrpms.net/mailman/listinfo/rpm-list

</pre>

## Record 002535

**Label:** `benign`

<pre>
need word lists hi ! i have a program that generates bizarre poetry with an accompanying file of words . i am looking for word lists out on the net . lists of nouns , adjectives , verbs , adverbs , conjunctions , etc . also , if you know of any word lists by topic : computer , science , drama , art , agric-sci , plz let me know where these are on the net . thanks ! gloria mcmillan * - - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - - - * gmcmillan @ east . pima . edu http : / / pimacc . pima . edu / ~ gmcmillan / index . html virtual classroom : diversity university moo telnet &gt; 128 . 18 . 101 . 106 8888 login as : co guest type : @ go # 2673 * - - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - * - - - - - - - - - - - - - - - - - *
</pre>

## Record 002536

**Label:** `benign`

<pre>
2nd acm international conference on digital libraries - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - acm dl &#x27; 97 * * * * * * * * * * 2nd acm international conference on digital libraries * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * preliminary program doubletree hotel , philadelphia , pa july 23-26 , 1997 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * reminder : early registration closes june 13 ! * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * acm dl &#x27; 97 will immediately precede sigir &#x27; 97 in philadelphia . the acm dl series is sponsored by acm through sigir and siglink . acm dl &#x27; 97 acm digital libraries is an international conference which is building a community of individuals from diverse fields to study research and development in digital libraries . the collection , access and use of electronic information in a variety of formats requires solutions to problems ranging from the technical to the social , incorporating knowledge and experience from many fields . individuals with an interest in library and information science , digital information technology , education , information policy and economics , information seeking behavior and other fields contributing to digital library development are invited to attend . conference highlights include : wednesday * tutorials * opening reception thursday * keynote address by jim reimer , ibm senior technical staff member * technical sessions * panel on museum and gallery applications of digital libraries * d - lib panel on interoperability * banquet cruise friday * plenary address by pamela samuelson , u . of california berkeley * technical sessions * d - lib panel on interoperability * poster and demonstration showcase and reception saturday * technical sessions * workshops sunday * tour to brandywine valley steering committee edward fox ( chair ) , virginia tech robert b . allen , bellcore william arms , cnri nicholas belkin , rutgers university richard furuta , texas a&amp;m university gary marchionini , university of maryland edie rasmussen , university of pittsburgh conference information is available from the dl &#x27; 97 website or via email : http : / / www . sis . pitt . edu / ~ diglib97 / or diglib97 @ sis . pitt . edu * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 002537

**Label:** `benign`

<pre>
URL: http://jeremy.zawodny.com/blog/archives/000213.html
Date: 2002-10-02T10:09:11-08:00Which was the better UI? Mac OS 9? Mac OS X? Windows? Nobody can agree. Tim 
O&#x27;Reilly didn&#x27;t like Mac OS 9. He gets OS X. Traditional Mac users are a bit 
annoyed by OS X. They think it&#x27;s a...

</pre>

## Record 002538

**Label:** `benign`

<pre>
fw : [ fwd : fw : drawing by a school age child in pa ( fwd ) ] thought you guys might like to see this . tom - - - - - original message - - - - - from : &quot; lyne martin &quot; @ enron [ mailto : imceanotes - + 22 lyne + 20 martin + 22 + 20 + 3 clynemartin + 40 msn + 2 ecom + 3 e + 40 enron @ enron . com ] sent : friday , september 21 , 2001 1 : 42 pm to : margaret bassani ; martin , thomas a . ; tammy lanasa ; stacy ewing ; ken mary martin ; wendy lijewski subject : fw : [ fwd : fw : drawing by a school age child in pa ( fwd ) ] - - - - - original message - - - - - from : susan carlock sent : friday , september 21 , 2001 9 : 55 am to : tracy and steve schultz ; tom and lyne martin ; sara and mark hanson ; phil and isabel o &#x27; brien ; jack and bonnie babcock ; elaine morelock ; alan carlock subject : fw : [ fwd : fw : drawing by a school age child in pa ( fwd ) ] this is just an amazing piece of art work by a school aged child . - - - - - original message - - - - - from : denise kelly [ mailto : dkelly @ us . hynix . com ] sent : thursday , september 20 , 2001 2 : 44 pm to : carl kelley ( e - mail ) ; carol moree ( e - mail ) ; mark michelle knapp ( e - mail ) ; nanette woosley ( e - mail ) ; rhonda wood ( e - mail ) ; tina carter ( e - mail ) ; tish sweeney ( e - mail ) subject : fw : [ fwd : fw : drawing by a school age child in pa ( fwd ) ] - - - - - original message - - - - - from : becky dunn sent : thursday , september 20 , 2001 12 : 25 pm to : cindy missana ( e - mail ) ; christine reyner ( e - mail ) ; tina braska ; denise kelly ; sandy reza ( e - mail ) subject : fw : [ fwd : fw : drawing by a school age child in pa ( fwd ) ] - healing . gif
</pre>

## Record 002539

**Label:** `benign`

<pre>
summer job position dear ms . beck , a couple weeks ago i sent you a letter and resume regarding the possibility of a summer internship . as i know how easy it is for things to get lost in email , i am sending them again . the letter follows and the resume is attached . if this job position will not work out or if i should contact someone else , please let me know . i will also try to call you to follow - up within the next two days . thanks you for your time . sincerely , natalie carnes * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * dear ms . beck , i am writing to you to express my interest in working for enron . i have long been interested in a career in business , and i would love the opportunity to explore business in enron this summer . as i have worked with the harvard entrepreneurs club ( hec ) and various entrepreneurs association around the country to spearhead the effort to form a national collegiate entrepreneurs organization , i have learned a great deal about how organizations work and how to make them effective . this theme of entrepreneurship has spilled over into my other activities as well . i am coordinating the first annual fundraising banquet for christian impact to help us raise money for outreach events . i am also co - leading the first mission trip comprised of harvard students this summer . because this effort is taking me to latin america for the first half of the summer , i will be in houston from mid - july to mid - september . if there is a position available at enron , i would enjoy working for it while i am here . i am excited about the opportunity to learn more about the business world . the combination of resourcefulness , rigorous logic , and creativity called for in the business sphere intrigues me . the integration of global and analytical thinking also piques my interest . i have attached my resume for you to review , i will be in houston from march 27 - 31 if you would like to interview me . thank you for your consideration . i look forward to hearing from you ! sincerely , natalie carnes - resume 4 . doc
</pre>

## Record 002540

**Label:** `benign`

<pre>
all, I posted the below question to this list so I thought I&#x27;d update you all. Thanks for your suggestions.Well, I&#x27;d decided to bite the bullet and spend big on a new case and CPU fan.I bought a lian-li aluminum case. It was expensive as cases go (stgÂ£133.86) but I decided, it&#x27;s a good basis to build any future PC on. It has 4 x 51/4&quot; drive bays and 6 x 3Â½&quot; drive bays so I should be ok for future upgrades etc. I have to say it was worth it. Its a pleasure to work on. It has a slide out tray to mount the Mother Board on, both sides come off, the drive bays come out...all without using a screwdriver (thumb screws). Even the edges inside the case are smooth so no banging your hands off shape edges etc. There are 4 fans inside the case, which can be set to 3 different speeds. There are 4 usb ports on the front of the box too. The box is big and has loads of room inside. Oh... and it looks very cool :-)However there are 2 things to look out for. On the Maplins website it says* Up to three 80mm case fans can be fitted! * ATX Power supply sold separatelyIn fact the case came with 4 fans and a power supply, which is great but I ordered 2 fans and a power supply separately. Also the case was a slightly different model to one advertised, as I got the USB model. It does say (Product may vary in design and specification from that show) but I missed that :-)I also bought a Flower Cooler Kit which is completely silent. Very nice. (thanks Mike)So now I can code-in-peace...Justin &gt; -----Original Message----- &gt; From: ilug-admin@linux.ie [mailto:ilug-admin@linux.ie]On Behalf Of &gt; Justin MacCarthy &gt; Sent: Monday, August 12, 2002 12:56 PM &gt; To: Ilug@Linux.Ie &gt; Subject: [ILUG] PC Cases &gt; &gt; &gt; Hi all, I have a Linux box at home that makes a god awful amount of noise. &gt; Its a Athlon XP 1900+ with a CoolerMaster fan. Are they particularly &gt; noisy? I think its the case/psu fan. It was a pretty cheap case. So what &gt; I&#x27;m looking for a quieter case/fan/power supply. I know you can get really &gt; quiet cases if you want to spend, but I&#x27;m looking for something in the &gt; middle ground, available in Dublin. &gt; &gt; Anyone recommend anything ? Thanks &gt; &gt; Justin &gt; &gt; &gt; -- &gt; Irish Linux Users&#x27; Group: ilug@linux.ie &gt; http://www.linux.ie/mailman/listinfo/ilug for (un)subscription &gt; information. &gt; List maintainer: listmaster@linux.ie &gt; &gt; &gt; -- Irish Linux Users&#x27; Group: ilug@linux.ie http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information. List maintainer: listmaster@linux.ie
</pre>

## Record 002541

**Label:** `benign`

<pre>
think that this and other articles confuse Socialism with Bureaucracy. Libertarianism as implemented in North America is not exactly the shining pinnacle of economic efficiency.Just try starting a telephone company in the US or (even worse) Canada. It can take a year or more to get the blessing of our own &quot;Permit Rajs&quot; at the FCC, PUC, and PTTs (or, in the decidedly more socialist leaning Canada, Industry Canada and the CRTC).Yet, despite all of this intense regulation and paper pushing, as well as regulatory scrutiny by the FTC, SEC, and IRS, the executives of Telecom Companies have managed to bilk the investment community for what looks to be tens of billions of dollars. They finished their routine with the a quadruple lutz -- laying off hundreds of thousands of workers when it all came crashing down.So.. tell me again.. how are we better off?-Ian. On Tuesday, August 20, 2002, at 12:09 PM, John Hall wrote:The Mystery of Capital: Why Capitalism Triumphs in the West and Fails Everywhere Else -- by Hernando De Soto Is something I&#x27;m reading now.My impression is that France is not anywhere near the &quot;Permit Raj&quot; nightmare that India is (and became). Nor has its market been closed like India&#x27;s has.But De Soto&#x27;s work is perhaps just as important or more so. He hasn&#x27;t dealt specifically with India, but I recall examples from Peru, Philippines, and Egypt. In Lima, his team took over a year (I think it was 2) working 8 hr days to legally register a 1 person company. In the Philippines, getting legal title can take 20 years. In Egypt, about 80% of the population in Cairo lives in places where they are officially illegal.India hasn&#x27;t been helped by its socialism. Socialism has certainly helped strangle the country in permits. But perhaps De Soto is right that the real crippling thing is keeping most of the people out of the legal, official property system.Putting most of the people in the property system was something the west only finished about 100 years ago, or Japan did 50 years ago. It wasn&#x27;t easy, but we live in a society that doesn&#x27;t even remember we did it. -----Original Message----- From: fork-admin@xent.com [mailto:fork-admin@xent.com] On Behalf Of Robert Harley Sent: Tuesday, August 20, 2002 11:24 AM To: fork@spamassassin.taint.org Subject: Re: The Curse of India&#x27;s SocialismRAH quoted: Indians are not poor because there are too many of them; they are poor because there are too many regulations and too much government intervention -- even today, a decade after reforms were begun. India&#x27;s greatest problems arise from a political culture guided by socialist instincts on the one hand and an imbedded legal obligation on the other hand.Nice theory and all, but s/India/France/g and the statements hold just as true, yet France is #12 in the UN&#x27;s HDI ranking, not #124. Since all parties must stand for socialism, no party espouses classical liberalismI&#x27;m not convinced that that classical liberalism is a good solution for countries in real difficulty. See Joseph Stiglitz (Nobel for Economics) on the FMI&#x27;s failed remedies. Of course googling on &quot;Stiglitz FMI&quot; only brings up links in Spanish and French. I guess that variety of spin is non grata in many anglo circles. http://xent.com/mailman/listinfo/forkhttp://xent.com/mailman/listinfo/fork
</pre>

## Record 002542

**Label:** `benign`

<pre>
distance learning programs i am currently serving in the u . s . air force and would like to pursue a ma and or phd in linguistics . i was wondering if anybody on this list knows of any programs available for distance learning that can lead to either of the aforementioned degrees ? also , if it can be accomplished over the internet or some other medium ( video , etc . ) . thank you beforehand for any material or information you might be able to send to me ! thomas loyd
</pre>

## Record 002543

**Label:** `benign`

<pre>
And of course I forget the link that I did find.http://www.constitutioncenter.org/sections/news/8b4.aspNeither NPR nor the first amendment foundation seem to have the
article I was looking for declaring the study.Even if its half true, its still frightening.It makes me want to pass out CATO bibles...-- 
Best regards,
 bitbitch                            mailto:bitbitch@magnesium.net

</pre>

## Record 002544

**Label:** `benign`

<pre>
&lt; &gt;
&gt; I downloaded a driver from the nVidia website and installed it using RPM.
&gt; Then I ran Sax2 (as was recommended in some postings I found on the net),
but
&gt; it still doesn&#x27;t feature my video card in the available list. What next?
hmmm.Peter.Open a terminal and as root type
lsmod
you want to find a module called
NVdriver.If it isn&#x27;t loaded then load it.
#insmod NVdriver.o
Oh and ensure you have this module loaded on boot.... else when you reboot
you might be in for a nasty surprise.Once the kernel module is loaded#vim /etc/X11/XF86Configin the section marked
Driver I have &quot;NeoMagic&quot;
you need to have
Driver &quot;nvidia&quot;Here is part of my XF86ConfigAlso note that using the card you are using you &#x27;should&#x27; be able to safely
use the FbBpp 32 option .Section &quot;Module&quot;
 Load  &quot;extmod&quot;
 Load  &quot;xie&quot;
 Load  &quot;pex5&quot;
 Load  &quot;glx&quot;
 SubSection &quot;dri&quot;    #You don&#x27;t need to load this Peter.
  Option     &quot;Mode&quot; &quot;666&quot;
 EndSubSection
 Load  &quot;dbe&quot;
 Load  &quot;record&quot;
 Load  &quot;xtrap&quot;
 Load  &quot;speedo&quot;
 Load  &quot;type1&quot;
EndSection#Plus the Modelines for your monitor should be singfinicantly different.Section &quot;Monitor&quot;
 Identifier   &quot;Monitor0&quot;
 VendorName   &quot;Monitor Vendor&quot;
 ModelName    &quot;Monitor Model&quot;
 HorizSync    28.00-35.00
 VertRefresh  43.00-72.00
        Modeline &quot;800x600&quot; 36 800 824 896 1024 600 601 603 625
 Modeline &quot;1024x768&quot; 49 1024 1032 1176 1344 768 771 777 806
EndSectionSection &quot;Device&quot; Identifier  &quot;Card0&quot;
 Driver      &quot;neomagic&quot; #Change this to &quot;nvidia&quot;... making sure the modules
are in the correct path
 VendorName  &quot;Neomagic&quot; # &quot;Nvidia&quot;
 BoardName   &quot;NM2160&quot;
 BusID       &quot;PCI:0:18:0&quot;
EndSectionSection &quot;Screen&quot;
 Identifier &quot;Screen0&quot;
 Device     &quot;Card0&quot;
 Monitor    &quot;Monitor0&quot;
 DefaultDepth 24
 SubSection &quot;Display&quot;
  Depth     1
 EndSubSection
 SubSection &quot;Display&quot;
  Depth     4
 EndSubSection
 SubSection &quot;Display&quot;
  Depth     8
 EndSubSection
 SubSection &quot;Display&quot;
  Depth     15
 EndSubSection
 SubSection &quot;Display&quot;
  Depth     16
 EndSubSection
 SubSection &quot;Display&quot;
  Depth     24
  #FbBpp   32 #Ie you should be able lto uncomment this line
  Modes   &quot;1024x768&quot; &quot;800x600&quot; &quot;640x480&quot; # And add in higher resulutions as
desired.
 EndSubSection
EndSection
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 002545

**Label:** `benign`

<pre>
Original Message ----- From: To: Sent: Friday, August 23, 2002 3:05 PM Subject: Razor-users digest, Vol 1 #346 - 8 msgs &gt; Subject: RE: [Razor-users] Razor with sendmail &gt; Date: Fri, 23 Aug 2002 15:03:05 -0400 &gt; From: &quot;Rose, Bobby&quot; &gt; To: &quot;Julian Bond&quot; , &gt; &gt; &gt; If you didn&#x27;t add it when compile would be one way. Another would be to &gt; grep your sendmail.cf for the word Milter. &gt; &gt; &gt; &gt; &quot;Bort, Paul&quot; wrote: &gt; &gt;If your sendmail has been compiled with Milter support, you can add=20 &gt; &gt;SMRazor easily. We&#x27;ve been using it for a while without problems.=20 &gt; &gt;Others on the list have mentioned it as well. &gt; &gt; &gt; &gt;http://www.sapros.com/smrazor/ &gt; &gt; Is there an easy way to tell if Milter is compiled in? &gt;To see all the options compiled into (and version of) sendmail, try the following line:echo \$Z | /path/to/sendmail -bt -d0Sven------------------------------------------------------- This sf.net email is sponsored by: OSDN - Tired of that same old cell phone? Get a new here for FREE! https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390 _______________________________________________ Razor-users mailing list Razor-users@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 002546

**Label:** `benign`

<pre>
re : prior month adjustments for whourly book questions - 617161 - $ 900 debit due to volume change should have offsetting $ 900 credit for volume change to deal 617156 664447 - $ 1575 debit due to term change should have offsetting $ 1575 credit for term change to deal 664444 666388 - $ 3500 debit due to price change should have offsetting $ 2500 credit for price change to deal 666386 $ 1000 of the debit is stated as a &quot; misc . price change found in carp to unify &quot; - what is this ? 630335 - $ 315 credit due to zeroed out purchase deal should have $ 315 debit for tranny deal 648312 which replaced this and offsetting $ 675 credit for sale annuity 630336 662547 - $ 1265 debit due to volume change added deals 761052 purchase side left entirely under stwhourly - should have been split according to the books it &#x27; s being sold under please let me know if you have any questions . thanks , kate - - - - - original message - - - - - from : chang , fran sent : thursday , august 30 , 2001 6 : 46 pm to : williams iii , bill ; symes , kate subject : prior month adjustments for whouly book bill and kate : attached please find the prior month adjustment items we got from settlements for whourly book . the total p &amp; l impact is - $ 82 , 555 . 76 . please note that this is still preliminary and please review and verify them ( * i will do the same ) . i am sending them to you just to give you a heads up . in some of the items settlements didn &#x27; t put the deal number under explanation . i have sent out an email to them so we can know what those adjustments are for . at this time of the month settlements are usually overwhelmed by questions and requests so they might not get back to us before risk needs to finalize the dpr on next tuesday morning for 8 / 31 . if you feel uncomfortable taking any one of the items in your 8 / 31 &#x27; s p symes , kate subject : prior month adjustments for wbom book bill and kate : attached please find the prior month adjusment items we just got from settlements for wbom book . the total impact is - $ 198 . 13 . i have verified them and believe they are all valid . please take a look and let me know if you have any questions . if you don &#x27; t disagree , you shall expect to see those amounts recognized in your final p &amp; l for 8 / 31 / 01 next tuesday morning . &gt; at this moment i am looking at the items we got for whourly book . i will let you know at the latest sometime friday ( 8 / 31 ) afternoon when i pulled them together . thanks , fran x 7973
</pre>

## Record 002547

**Label:** `benign`

<pre>
Gary Lawrence Murphy cynicizes:
&gt; Hmmm, just as I thought.  In other words, it has no practical uses
&gt; whatsoever ;) Tourism is the world&#x27;s largest industry. Using this
to preview your travels, or figure out where you are,
would be very valuable.Online gaming continues to grow. Screw &quot;Britannia&quot;, 
real-life Britain would be a fun world to wander/
conquer/explore virtually, in role-playing or real-
time-strategy games.And of course, as James Rogers points out, it&#x27;s an
ideal display substrate for all sorts of other 
overlaid data. Maps are great, photrealistic 3-D
maps of everywhere which can have many other static 
and dynamic datasets overlaid are spectacular. (Combining those last two thoughts: consider the
static world map, in faded colors, with patches
here-and-there covered by live webcams, stitched
over the static info in bright colors... it&#x27;d be
like the &quot;fog of war&quot; view in games like Warcraft,
over the real world.)- Gordon

</pre>

## Record 002548

**Label:** `benign`

<pre>
    Date:        Fri, 13 Sep 2002 11:26:30 +1000
    From:        Tony Nugent 
    Message-ID:  &lt;200209130126.g8D1QUf21470@hobbit.linuxworks.com.au.nospam&gt;  | I can cut&#x27;n&#x27;paste from exmh&#x27;s message display window into spawned
  | gvim processes, but not into anything else.That&#x27;s odd.  I cut &amp; paste between all kinds of windows (exmh into
mozilla, xterm, another wish script of mine I use for DNS tasks (but
that one I guess is to be expected) netscape (when I used to use it,
but I suppose it and mozilla are the same codebase, approx) - in fact
I can&#x27;t thing of anything it fails for, that I have noticed.What is an example of an &quot;anything else&quot; that it fails for for you?kre_______________________________________________
Exmh-users mailing list
Exmh-users@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-users

</pre>

## Record 002549

**Label:** `benign`

<pre>
re : gtv weekly status update louise , the design members will get a room for some of tonight and the entire day tomorrow and work through to get it down on paper , but it will be a best estimate by the time they finish and not completely definative , as that can only really happen at the end of an elaboration / design phase . . . . there is no way that they could commit to a design decision for these big - ticket items in such a short space of time without compromising the quality of those decisions . i believe you can get a draft on you desk by the end of tomorrow , but can &#x27; t guarantee that it can be reviewed in that time and signed , unless we acknowledge that this is an inception document and not an elaboration document . ( an inception document states intent to kick off the project , while an elaboration document fleshes out the details and a design is produced ) . the team are trying hard to accomodate this request and i hope you will understand if they don &#x27; t quite make it by eob friday . regards steve ps : i &#x27; ll be out of the office tomorrow at the hospital , but i can be reached on 713 - 598 - 0732 or by e - mail : steve @ thestockfamily . com - - - - - original message - - - - - from : kitchen , louise sent : thursday , april 19 , 2001 5 : 54 pm to : stock , stephen subject : re : gtv weekly status update i am expecting a signed document - the phase ii document was not worthwhile . geof listed out the information / areas that he wanted to see included in it , so i asked for them to be included . it sounds as though geof and your guys need to sit down and work through it today or tomorrow . from : stephen stock / enron @ enronxgate on 04 / 19 / 2001 03 : 47 pm to : louise kitchen / hou / ect @ ect cc : subject : re : gtv weekly status update hi louise , i tried to call a moment ago , but unfortunately you were engaged in a meeting . i wanted to let you know that the message from you below has caused some concern with my team , as they are struggling to see how they can accomplish this to your satisfaction by end of this week , and geoff storey himself was wondering how we could even get to transport valuation in erms in that time frame . they are heading for a draft by the end of the week , but feel extremely uncomfortable about committing to timing and full scope untill they have had more time to work through it . could you please let me know if you are expecting a signed document at the end of this week ? . . . . . . or can i let them issue a draft to be firmed up next week instead ? best regards steve - - - - - original message - - - - - from : kitchen , louise sent : tuesday , april 17 , 2001 1 : 50 pm to : wei , zhiyong ; storey , geoff cc : bibi , philippe a . ; perlman , beth ; stock , stephen subject : re : gtv weekly status update i &#x27; m a bit confused - i think that the current document distributed for circulation is too small . i would suggest this be abandonned and a next draft produced which includes the following . single deal entry revisions options reports transport valuation in erms eol reporting tools ( possible ) i would like to see phase ii include the items above and an inception document re - issued this week . thanks louise from : zhiyong wei / enron @ enronxgate on 04 / 16 / 2001 06 : 30 pm to : louise kitchen / hou / ect @ ect , geoff storey / hou / ect @ ect , philippe a bibi / enron @ enronxgate , beth perlman / enron @ enronxgate , stephen stock / enron @ enronxgate , colleen sullivan / hou / ect @ ect cc : subject : gtv weekly status update please find below the gtv project status update for this week . please see the attached file for the project timeline update in microsoft project . gtv status meeting attendees : zhiyong wei , karima husain , francis lim , jeremy wong , bill fortney , nayan dattani , dave nommensen , russ severson , narasim kasaru , mike swaim , george grant , chuck ames , geof storey . accomplishments : ? incorporating physical deal positions in tds : o changes to cpr reader process and its unit testing have been completed . o changes for the view aggregation and its unit testing have been completed . o a new task has been added due to the requirement of loading prior - day curves into position manager ( please see the attached project timeline . ) o changes for position manager are in progress ( please see the attached project timeline . ) ? single point of deal entry for term deals : o single point of deal entry is now ready for user acceptance testing . ? gas daily deals : o changes to erms portcalc application for the gas daily deals are complete and ready for testing . o changes to tds deal valuation are in progress and on schedule ( please see the attached project timeline . ) o a new task has been added to flag fixed - price positions ( please see the attached project timeline . ) ? live feeds for gas daily / intra - month curves : o released to production plans for the week ending 4 / 20 / 01 : ? continue it development of phase i items . ? obtain sign - off for gtv - ii , phase 2 issues and timeline . ? commence it development of phase 2 issues . issues : incompatibility of tibco version 5 . x and 6 . x . the single point of deal entry is done using tibco 6 . x . some users are still using tibco 5 . x . upgrading to either tibco 6 . x or windows 2000 is needed . &gt; thanks zhiyong
</pre>

## Record 002550

**Label:** `benign`

<pre>
hpl nom for october 26 , 2000 ( see attached file : hplnl 026 . xls ) - hplnl 026 . xls
</pre>

## Record 002551

**Label:** `benign`

<pre>
enron mentions congressional panels to probe enron &#x27; s accounting , trading bloomberg , 11 / 29 / 01 nymex tells members enron trades must be approved ( update 2 ) bloomberg , 11 / 29 / 01 dynegy ceo says he &#x27; d rather have enron pipeline than $ 1 . 5 bln bloomberg , 11 / 29 / 01 italian banks fall on concern about enron exposure ( update 2 ) bloomberg , 11 / 29 / 01 argentine analysts , perez companc comment on tgs after enron bloomberg , 11 / 29 / 01 duke , williams among companies facing enron losses ( update 2 ) bloomberg , 11 / 29 / 01 enron &#x27; s problems aren &#x27; t industry problems , felsinger tells cnbc bloomberg , 11 / 29 / 01 california &#x27; s senator dunn comments on possible enron bankruptcy bloomberg , 11 / 29 / 01 cibc says it is owed $ 215 million by cash - strapped trader enron bloomberg , 11 / 29 / 01 intelligent asset &#x27; author bernstein comments on 401 ( k ) plans bloomberg , 11 / 29 / 01 enron corp . has fourth - busiest day for a u . s . stock : table bloomberg , 11 / 29 / 01 enron corp . is poised to file largest - ever bankruptcy ( update 3 ) bloomberg , 11 / 29 / 01 congressional panels to probe enron &#x27; s accounting , trading 2001 - 11 - 29 15 : 59 ( new york ) congressional panels to probe enron &#x27; s accounting , trading washington , nov . 29 ( bloomberg ) - - senate and house committees will investigate the collapse of enron corp and consider new regulations for electricity and natural - gas trading . enron , the largest energy trader , is expected to file for chapter 11 protection after the collapse of a planned merger with dynegy inc . the house energy committee will hold hearings as early as next month to scrutinize the accounting practices and earnings reports of enron , said ken johnson , a panel spokesman . the senate energy committee may begin looking in january at more federal oversight of trading . ` ` when you have such a spectacular event as the collapse of a company that controlled 50 percent of the natural - gas and electricity trading , we &#x27; re going to have some thoughts on that , &#x27; &#x27; said bill wicker , a spokesman for the senate energy committee . enron &#x27; s importance in energy trading and questions about its accounting practices require an investigation , said senate majority leader tom daschle of south dakota . ` ` i don &#x27; t know that anybody knows yet just how this happened and how it happened so quickly , &#x27; &#x27; he told reporters on capitol hill . ` ` it raises some very serious questions . &#x27; &#x27; the unraveling of enron , which is saddled with $ 15 billion in publicly held debt , began in october . shareholders &#x27; equity was reduced by $ 1 . 2 billion because of the way the company accounted for outside partnerships it created . the announcement prompted lawsuits and an investigation by the u . s . securities and exchange commission . nymex tells members enron trades must be approved ( update 2 ) 2001 - 11 - 29 15 : 16 ( new york ) nymex tells members enron trades must be approved ( update 2 ) ( adds analyst quote in fourth paragraph , enron share price in sixth paragraph . ) new york , nov . 29 ( bloomberg ) - - new york mercantile exchange president j . robert collins told brokers on the largest energy exchange &#x27; s trading floor that they could not accept orders from enron corp . unless they receive written authorization from an exchange clearing member . the order is effective immediately and will ` ` remain in effect until further notice from the exchange , &#x27; &#x27; according to a fax collins sent today to member firms . a copy of the fax was obtained by bloomberg news . exchange officials did not immediately return phone calls . enron &#x27; s worsening financial condition has made many clearing members , which back trades on the exchange for a fee , wary of taking on additional business from enron . the nymex order aims to alert independent floor brokers that clearing members who once freely accepted enron trades may no longer be so willing , analysts said . nymex is ` ` reminding everyone that it &#x27; s not business as usual when it comes to enron , &#x27; &#x27; said tim evans , senior energy analyst at ifr pegasus in new york , a unit of thomson corp . ` ` for enron , it mean slower order execution - - as if they don &#x27; t have enough handicaps already . &#x27; &#x27; enron may be forced to file for bankruptcy to liquidate assets to pay off some of its $ 15 billion in publicly held debt , analyst said . enron shares fell 24 cents to 37 cents in afternoon trading . that &#x27; s down from about $ 80 at the beginning of this year . covering enron debts under exchange rules , clearing members would be forced to cover enron &#x27; s obligations if the firm defaulted on its positions . many energy traders , including rivals mirant corp . and aquila inc . , already have reduced the number of trades they &#x27; re doing with enron in the over - the - counter markets , which involve direct trades between companies that don &#x27; t carry the financial guarantees of regulated commodity exchanges . the new york exchange yesterday said it will raise margins on its natural gas and crude oil futures contracts at the close of trading today . margins are deposits traders must make with the exchange when buying or selling futures contracts to ensure obligations will be met . while the exchange gave no reason for the increase , the decision followed a day of wide changes in natural gas prices . the swings began after dynegy inc . abandoned plans to purchase enron , once the biggest gas trader . dynegy ceo says he &#x27; d rather have enron pipeline than $ 1 . 5 bln 2001 - 11 - 29 14 : 56 ( new york ) dynegy ceo says he &#x27; d rather have enron pipeline than $ 1 . 5 bln houston , nov . 29 , ( bloomberg ) - - dynegy inc . chairman chuck watson said he would rather take over an enron pipeline than get back the $ 1 . 5 billion investment that entitles dynegy to the line . watson said dynegy expects to take over operation of the 16 , 500 - mile northern natural pipeline system by dec . 19 . chevrontexaco corp . , which owns 26 percent of dynegy , gave enron $ 1 . 5 billion to help the cash - strapped company stay in business . the investment , part of dynegy &#x27; s plan to buy enron , was backed by the northern natural system . dynegy backed out of the merger yesterday , and said it would exercise its right to take over the line . watson said he hopes that northern natural employees will continue to operate the pipeline after dynegy takes ownership . italian banks fall on concern about enron exposure ( update 2 ) 2001 - 11 - 29 14 : 20 ( new york ) italian banks fall on concern about enron exposure ( update 2 ) ( closes shares in second paragraph ; adds analyst comment from eighth , estimates of exposure in 10 th . ) milan , nov . 29 ( bloomberg ) - - intesabci spa and unicredito italiano spa shares fell on investors &#x27; concern that italian banks may not recoup money lent to units of enron corp . if the largest u . s . energy trader goes bankrupt . intesabci , italy &#x27; s biggest bank , fell 2 . 4 percent to 2 . 75 euros while unicredito , the no . 2 lender , lost 1 . 9 percent to 4 . 24 euros . banca nazionale del lavoro spa , the nation &#x27; s sixth - largest bank , dropped 1 . 4 percent to 2 . 55 . ` ` the theme of the day is to sell banks because they are exposed to enron , &#x27; &#x27; said daniele savare , who helps manage 120 million euros ( $ 106 million ) at bipielle asset management . ` ` in some cases , the reaction may be a bit overdone . &#x27; &#x27; dynegy inc . yesterday abandoned its proposed merger with enron , leaving the houston - based company burdened with debt and the likelihood of insolvency . some analysts said bankruptcy is inevitable and may come as early as today . a bankruptcy filing by enron , which reported more than $ 61 billion in assets , would be the biggest chapter 11 reorganization in history . ` ` i &#x27; ve heard intesa is the most exposed , to the tune of between 400 billion and 500 billion lire ( $ 183 million - $ 229 million ) , &#x27; &#x27; said gianluca ferrari , who helps manage 260 million euros in stocks at banca valsabbina in brescia . gabrio gelmi , an intesa spokesman , confirmed enron is a client of the bank , though he declined to comment on the size of its exposure . luigi ferrari , a spokesman at san paolo - imi spa , said the exposure of italy &#x27; s no . 3 bank was ` ` limited and under control . &#x27; &#x27; he declined to give an amount . diversified officials at unicredito , banca nazionale del lavoro and banca di roma spa were not immediately available for comment . ` ` it doesn &#x27; t make sense to attribute the declines today purely to the enron exposure , &#x27; &#x27; said luca comi , head of research at eptasim . ` ` if it &#x27; s just one company that &#x27; s in trouble , banks are sufficiently diversified that the impact is very limited . &#x27; &#x27; comi said san paolo had told him enron had borrowed 80 million euros as part of a 120 million - euro credit line . of the loan , 50 million euros is guaranteed by enron assets , the analyst said . san paolo shares fell 1 percent to 12 . 41 euros . other banks have higher exposure to enron , such as 168 million euros for intesa , banca nazionale del lavoro &#x27; s 142 million euros and 122 million euros at unicredito , investors said , citing analysts &#x27; reports . argentine analysts , perez companc comment on tgs after enron 2001 - 11 - 29 15 : 55 ( new york ) buenos aires , nov . 29 ( bloomberg ) - - eugenia benitez , an energy analyst at allaria ledesma &amp; cia , esteban marx , an analyst at banco comafi , gustavo neffa , an analyst at bbva banco frances sa and mario grandinetti , head of perez companc &#x27; s institutional relations , comment on the future of gas distributor transportadora de gas del sur sa . enron corp . , which together with perez companc owns 70 percent of tgs , may file for bankruptcy protection in the biggest bankruptcy reorganization in history . the move may force the largest u . s . energy trader to liquidate assets to pay some of its $ 15 billion in publicly held debt . eugenia benitez : ` ` the natural buyer is perez companc . there &#x27; s definitely the possibility of reaching a deal that would make perez the only controlling shareholder of tgs . ` ` we would need to see how much tgs debt perez has . its debt profile is relevant . ` ` the acquisition would be another step in perez &#x27; strategy of integrating all its operations in one holding . &#x27; &#x27; esteban marx : ` ` perez is the natural candidate , but i &#x27; m not sure now is the right time for perez to pour money into tgs , unless it can get it really cheap . &#x27; &#x27; gustavo neffa : ` ` the only company that could make the sort of investment to by the tgs stake is perez companc , but its a huge investment given that tgs &#x27; assets are worth about $ 1 billion . ` ` but it would definitely be the likely buyer . &#x27; &#x27; grandinetti : ` ` we &#x27; re not permitted to buy enron &#x27; s stake in tgs because of rules that prevent us having a majority stake . ` ` if the law is modified , then yes we would consider it . but there are also economic issues to consider . &#x27; &#x27; duke , williams among companies facing enron losses ( update 2 ) 2001 - 11 - 29 16 : 23 ( new york ) duke , williams among companies facing enron losses ( update 2 ) ( updates total in second paragraph , adds closing stock price in ninth paragraph and analyst comment in paragraph 12 th and 20 th paragraphs . ) houston , nov . 29 ( bloomberg ) - - duke energy corp . , j . p . morgan chase &amp; co . , williams cos . and a dozen other companies together may lose more than $ 1 . 1 billion from the collapse of enron corp . electricity and natural gas companies said enron owed them about $ 660 million as of yesterday , when dynegy inc . abandoned a merger that deprived enron of cash it needs to avoid insolvency . j . p . morgan , the bank that was enron &#x27; s adviser on the failed buyout , said it is owed $ 500 million for unsecured loans . losses may grow as companies tally their exposure from transactions with houston - based enron , the largest energy trader , with revenue last year of $ 100 billion . enron also manages power supply for companies such as j . c . penney co . and eli lilly &amp; co . , and owns pipelines and a fiber - optic telecommunications network . some companies ` ` have positions that they &#x27; re not owning up to , &#x27; &#x27; said peter fusaro , president of global change associates inc . , an energy research firm . ` ` enron had long - term deals on the books , and these may take years to sort out . how could they not have big exposure ? &#x27; &#x27; enron is poised to file the largest bankruptcy reorganization in history . the company is saddled with more than $ 15 billion in debt and had less than $ 2 billion in cash as of last week . it must pay $ 690 million to lenders by mid - december and is responsible for another $ 3 . 9 billion in debt owed by affiliated partnerships . the company &#x27; s credit - rating was downgraded to junk status yesterday . ` ` considering enron &#x27; s size and clout , there are very few companies in the energy business or electric utility companies that have not done business with them , &#x27; &#x27; said jon cartwright , a fixed - income analyst at raymond &amp; james associates . ` ` i don &#x27; t believe that everyone could have gotten out of their exposure . &#x27; &#x27; limited payments enron said yesterday it will continue payments necessary to maintain its trading and other core energy businesses , while suspending all others . it also resumed limited trading on its enrononline internet market , after shutting down most of yesterday . the new york mercantile exchange , the largest energy market , tightened trading restrictions on enron in a move that members said was made to limit the risk from any new business with the company . shares of enron fell 25 cents to 36 cents , compared with $ 70 a year ago . if enron is unable to pay all it owes , duke and williams said they would lose no more than $ 100 million each . duke , the largest u . s . utility owner , didn &#x27; t stop trading with enron until yesterday , and warned that its earnings may be affected . ` ` we are closely monitoring this unfortunate situation to determine if a provision against earnings is appropriate , &#x27; &#x27; richard j . osborne , duke &#x27; s executive vice president and chief risk officer , said in a statement today ` reassure investors &#x27; energy companies that did business with enron are trying ` ` to reassure investors that they &#x27; re not going to go belly up as a result of enron &#x27; s demise , &#x27; &#x27; said gordon howald , an analyst at credit lyonnais securities inc . ` ` investors still need to be cautious about this industry , because there are a lot of unanswered questions . &#x27; &#x27; reliant resources inc . said it faces $ 80 million in losses from transactions with enron involving electricity and natural gas sales . dynegy said it faces $ 75 million in losses , though it plans to exercise its option under the buyout agreement to take the northern natural gas system in exchange for a $ 1 . 5 billion investment in enron . mirant corp . , an atlanta - based energy trader , said it would lose no more than $ 60 million . aquila inc . , american electric power co . and el paso corp . said each estimated their exposure to enron at $ 50 million . more losses centrica , the dominant u . k . natural - gas supplier , may write off contracts worth $ 43 million if enron fails , the company said in a statement . exelon corp . , owner of utilities in chicago and philadelphia , said its exposure is less than $ 20 million . dominion resources inc . , a power and gas utility said its exposure for past sales is $ 11 million . rwe , europe &#x27; s fourth - biggest utility owner , said its open trading positions with enron are ` ` much less &#x27; &#x27; than $ 8 . 9 million . st . mary land and exploration co . , a denver - based natural - gas producer , said it has hedged $ 4 . 17 million of production with enron through 2003 . western gas resources inc . said it faces $ 2 . 6 million in possible losses . nrg energy inc . announced a potential liability of $ 10 million through its energy trading with enron , and plains resources inc . said its exposure through to the end of next year was about $ 630 , 000 . companies that did business with enron ` ` relied for the most part on the rating agencies &#x27; &#x27; to determine if enron was financially sound , credit lyonnais &#x27; howald said . enron ` ` was investment grade , and they were solidly investment grade for some time . i don &#x27; t think you can fault these companies for doing business with a company that represented 20 percent &#x27; &#x27; of the market . some companies , such as calpine corp . , said they had no exposure to enron . j . p . morgan has a $ 400 million loan secured by enron &#x27; s transwestern and northern natural gas pipelines , the bank said . enron &#x27; s problems aren &#x27; t industry problems , felsinger tells cnbc 2001 - 11 - 29 16 : 33 ( new york ) san diego , nov . 29 ( bloomberg ) - - enron corp . &#x27; s problems are particular to the company and should not reflect on the energy industry , sempra energy group president donald felsinger said in an interview with financial news network cnbc . ` ` i &#x27; ve really been surprised and impressed in how well the energy industry has responded with enron &#x27; s problems , &#x27; &#x27; he said . ` ` the past month the energy players have stepped up and taken over positions that enron had , and the energy market today is working very well . &#x27; &#x27; felsinger said $ 15 million in business with enron isn &#x27; t ` ` material &#x27; &#x27; and will not affect sempra energy &#x27; s earnings this year or next year . california &#x27; s senator dunn comments on possible enron bankruptcy 2001 - 11 - 29 17 : 03 ( new york ) sacramento , california , nov . 29 ( bloomberg ) - - california state senator joseph dunn , chairman of a committee investigating possible price manipulation in the state &#x27; s wholesale power market , comments on how an enron corp . bankruptcy would affect the probe : ` ` if we assume enron files for bankruptcy , either through liquidation or reorganization , our ability to deal with the corporate entity to get documents and access to witnesses will be overseen by a bankruptcy court , which means we have to jump through additional hoops and ladders to get the information we may require . ` ` substantively , it doesn &#x27; t affect our investigation at all because the senate &#x27; s investigation is not out to get anybody . we are tying to get a very thorough understanding of why we got into the mess we are in and whether any concrete legislative fixes in the wholesale market need to be taken . ` ` enron was a critical player in setting up the market that ultimately gave rise to the market power , which in my view is the ultimate cause of the energy crisis . ` ` there are some pluses and there are some minuses if we assume that enron disappeared from the energy trading market . it would create a void that would have to be filled by other players in the wholesale market . ` ` if those other players that fill that void do not currently posses market power , that &#x27; s a good thing because the diffusion of market share , most economists will tell you , is one of the best ways to eliminate already existing market power . ` ` if enron goes into reorganization bankruptcy rather than liquidation , and they are purchased by one of the big players that currently possesses market power , then we are only going to complicate the crisis that we currently find ourselves in . &#x27; &#x27; cibc says it is owed $ 215 million by cash - strapped trader enron 2001 - 11 - 29 17 : 15 ( new york ) cibc says it is owed $ 215 million by cash - strapped trader enron toronto , nov . 29 ( bloomberg ) - - canadian imperial bank of commerce , the country &#x27; s third - biggest bank , said enron corp . owes it $ 215 million , more than half in unsecured loans , letters of credit and derivatives . cibc won &#x27; t revise its fiscal 2002 forecast on loan - loss provisions because of enron &#x27; s problems , the bank said in a statement distributed by pr newswire . cibc said monday it expected loan losses to be about 10 percent higher in the year ending oct . 31 from c $ 1 . 1 billion ( $ 695 . 8 million ) last year toronto - based cibc said it &#x27; s owed about $ 115 million in unsecured items and $ 100 million in secured loans by enron . houston - based enron , once the biggest energy trader , may face bankruptcy after dynegy inc . withdrew a bid for the cash - strapped company . enron is poised to file the largest bankruptcy reorganization in history . the company has more than $ 15 billion in debt and had less than $ 2 billion in cash as of last week . shares of cibc rose c $ 1 to c $ 54 . 15 in toronto . it released the statement after north american markets closed . enron fell 25 cents to 36 cents . ` intelligent asset &#x27; author bernstein comments on 401 ( k ) plans 2001 - 11 - 29 17 : 23 ( new york ) north bend , oregon , nov . 29 ( bloomberg ) - - william j . bernstein , author of the investment book ` ` the intelligent asset allocator , &#x27; &#x27; comments on the disadvantages of corporate pension plans that hold company stock and place the responsibility and risk of managing retirement savings with employees . his comments follow the collapse of enron corp . , whose 401 ( k ) plan held 62 percent of assets in the energy trader &#x27; s common and convertible preferred stock at the end of 2000 and restricted employees &#x27; ability to sell . as of the end of 2000 , about $ 1 . 8 trillion was invested in 401 ( k ) plans serving 42 million u . s . workers , according to cerulli associates . investors in 401 ( k ) plans lost money last year for the first time since they were introduced in 1981 as stocks fell . ` ` maybe some good will come of &#x27; &#x27; enron &#x27; s collapse in the way of national pension reform , said bernstein . ` ` it &#x27; s never , ever prudent to put your company stock in your retirement plan . the overwhelming majority of plans allow it and a large plurality of them encourage it . a fairly significant minority of plans have very large amounts of company stock . you want to diversify your risks . if your company fails , at least you have a backstop . &#x27; &#x27; bernstein said individual investors ought to consider putting their retirement savings into a combination of low - cost mutual funds that track indexes for u . s . stocks and bonds and international stocks . ` ` the average person has as much business managing their own retirement as they do taking out their own appendix , &#x27; &#x27; said bernstein , a neurologist by profession . in addition , average 401 ( k ) plan expenses of 3 . 5 percent of assets exceed the projected annual returns of 3 percent from stocks in coming years after adjusting for inflation , meaning investors are facing zero long - term real gains , bernstein said . expenses are lower with traditional corporate pension plans , known as defined benefit plans because they guarantee a certain level of retirement benefits based on pay and years of service . ` ` the way defined contribution plans are currently set up there is not adequate controls on expenses . what you &#x27; re really getting is an enormous transfer of wealth from plan participants to the financial services industry . this is an enormous social experiment that &#x27; s been foisted upon us and it &#x27; s going to be a failure , &#x27; &#x27; said bernstein . enron corp . has fourth - busiest day for a u . s . stock : table 2001 - 11 - 29 17 : 17 ( new york ) enron corp . has fourth - busiest day for a u . s . stock : table new york , nov . 29 ( bloomberg ) - - enron corp . had the fourth most - active day for a u . s . stock , with 264 . 9 million shares trading , according to preliminary figures from the new york stock exchange . enron fell 25 cents , or 41 percent , to 36 cents a share . yesterday , the stock set an all - time volume record after dynegy inc . abandoned a takeover bid , leaving the company that was once the largest energy trader without enough cash to pay its $ 15 billion in debt . the following is a list of stocks with the 10 highest one - day trading volumes in u . s . market history , according to data from the nyse and the nasdaq stock market . * t stock date volume ( in millions ) enron corp . nov . 28 , 2001 345 . 7 intel corp . sept . 22 , 2000 308 . 7 cisco systems inc . feb . 7 , 2001 281 . 6 enron nov . 29 , 2001 264 . 9 oracle corp . march 2 , 2001 224 . 0 cisco systems jan . 10 , 2001 213 . 0 jds uniphase corp . july 26 , 2000 200 . 4 cisco systems oct . 3 , 2001 196 . 5 worldcom inc . nov . 1 , 2000 195 . 5 exodus communications sept . 25 , 2001 193 . 1 * t enron corp . is poised to file largest - ever bankruptcy ( update 3 ) 2001 - 11 - 29 17 : 30 ( new york ) enron corp . is poised to file largest - ever bankruptcy ( update 3 ) ( adds investor comment in eighth paragraph . ) washington , nov . 29 ( bloomberg ) - - enron corp . is poised to file the largest bankruptcy reorganization in history after dynegy inc . scuttled plans to acquire the energy trader that is saddled with more than $ 15 billion in debt . enron , with less than $ 2 billion in cash as of last week , must pay $ 690 million to lenders by mid - december and is responsible for another $ 3 . 9 billion in debt owed by affiliated partnerships . the company &#x27; s credit - rating was downgraded to junk status yesterday . houston - based enron &#x27; s collapse was underscored by new restrictions on its operations . the new york mercantile exchange barred floor members from accepting orders from enron without special written authorization , and the company &#x27; s internet trading was reduced from about 30 commodities to just natural gas , electricity and metals . a bankruptcy filing by enron , which investors said may come within a matter of days , would top texaco inc . &#x27; s record $ 35 . 9 billion case in 1987 . creditors would be lining up to claim what &#x27; s left of the company &#x27; s more than $ 61 billion in assets . ` ` it &#x27; s a black hole , &#x27; &#x27; said gary hindes , managing director of deltec asset management llc , which has no investment in enron . ` ` until the forensic accountants can get in there and sort things out , you just don &#x27; t know what enron &#x27; s worth . &#x27; &#x27; duke energy corp . , j . p . morgan chase &amp; co . , williams cos . and a dozen other companies say they may lose more than $ 1 billion combined from enron &#x27; s collapse . electricity and natural gas companies said enron owed them almost $ 600 million as of yesterday . european administrator in london , was appointed administrator of enron &#x27; s european holding company and some of its operating companies , a step other companies have taken before filing chapter 11 papers in the u . s . ` ` if i were a betting man , enron going into chapter 11 in the next week is a bet i &#x27; d make , &#x27; &#x27; said glen hilton , who helps manage $ 125 million , including dynegy shares , for montgomery asset management . enron shares have lost more than $ 26 billion in market value in the last seven weeks . they fell 25 cents , or 41 percent , to 36 cents . the shares traded at $ 54 . 54 on june 4 . enron bonds were bid at 23 cents on the dollar in late trading , little changed from yesterday , traders said . the debt had been near full value as recently as last month . quarterly dividend the company said this morning it was evaluating whether it will pay a scheduled 12 . 5 - cent quarterly dividend on dec . 20 . enron hired the law firm weil gotshal &amp; manges llp , which has the nation &#x27; s largest bankruptcy practice , and the blackstone group lp investment banking firm . arthur newman , head of restructuring at blackstone , said his firm was retained and declined to comment further . chapter 11 would let enron officials continue to control the company while negotiating a recovery plan with creditors . a provision of u . s . bankruptcy law automatically blocks debt - collection efforts , lawsuits and other actions against the company . ` ` a chapter 11 filing can be a great thing for a cash - starved company being attacked from all sides , &#x27; &#x27; said nancy rapoport , dean of the university of houston law center . thousands affected an enron bankruptcy would affect thousands of people , including the company &#x27; s 21 , 000 employees , its customers , suppliers , investors and other creditors . the court - supervised recovery process would give enron a chance to change strategies and fix mistakes . it might take years to complete and may end in the company &#x27; s liquidation . in addition to its energy trading operation , enron operates a nationwide gas pipeline system spanning 25 , 000 miles . it also owns portland general electric , which generates and distributes power to about 725 , 000 customers in the pacific northwest . the company &#x27; s enron broadband services is building a global fiber - optic communications network . chapter 11 reorganization lets companies abandon onerous contracts and unprofitable leases . ` ` every bad business deal enron got into they &#x27; ll walk away from , &#x27; &#x27; said peter chapman , a distressed - debt investor who also publishes newsletters on high - profile bankruptcy reorganizations . recovery the goal in chapter 11 is a recovery plan that allows a company to pay creditors and come out of bankruptcy . a plan typically must be approved by a majority of creditors representing two - thirds of a company &#x27; s debts . then a company would ask a bankruptcy judge for final approval . the recovery plan divides a company &#x27; s value among various classes of creditors . under a hierarchy set by the u . s . bankruptcy code , secured creditors - - those with collateral backing their claims - - are paid ahead of unsecured creditors , such as bondholders and suppliers . financial advisers to creditors and companies in large bankruptcies say a chapter 11 recovery plan for enron would be particularly difficult to produce . ` ` you have a host of intangible assets combined with a morass of contingent liabilities creating a potential witches &#x27; brew of a bankruptcy , &#x27; &#x27; said jeff werbalowsky of houlihan lokey howard &amp; zukin , an investment banking firm that has been contacted for advice by enron bondholders . shareholders enron &#x27; s shareholders are likely to lose all of their investment in chapter 11 because they would be last in line to get paid . some recovery for enron creditors in a bankruptcy case may come from lawsuits , said russell a . belinsky , an investment banker with chanin capital partners , which also has been approached for advice by enron bondholders . ` ` there &#x27; s a lot of juicy legal issues , &#x27; &#x27; said belinsky . potential targets include enron &#x27; s accounting firm and its officers and directors . ` ` disentangling all the pieces in a reorganization is going to be a painstaking job . &#x27; &#x27; liability dynegy might face some liability for cancelling its purchase of enron . dynegy invoked terms of the buyout agreement that gave it the right to purchase an enron natural gas pipeline if the takeover fell apart . dynegy received the right to the pipeline in exchange for a $ 1 . 5 billion investment in enron by chevrontexaco corp . , which owns one - fourth of dynegy . enron might use bankruptcy to prevent dynegy from walking away from the buyout and claiming ownership to the pipeline . the dynegy acquisition , valued at $ 23 billion when it was proposed on nov . 9 , collapsed as bankers failed to raise the $ 1 . 5 billion enron needed to operate until the deal was completed . the lack of funds and a credit downgrade contributed to dynegy &#x27; s decision . bankers led by j . p . morgan chase &amp; co . vice chairman james b . lee tried for two weeks to raise the cash enron needed . investors turned them down because of heightened concern enron wouldn &#x27; t be able to pay its debts . unraveling enron &#x27; s unraveling began in october after it said shareholders &#x27; equity was reduced by $ 1 . 2 billion because of the way the company accounted for outside partnerships it created . the announcement prompted lawsuits and an investigation by the u . s . securities and exchange commission , and enron ended up restating earnings for almost five years . as shares plunged , enron &#x27; s trading partners lost confidence the company would have the cash to pay bills . trading partners such as mirant corp . either demanded more collateral to trade or restricted trading with the company . ` ` the situation is dire , &#x27; &#x27; said deltec &#x27; s hindes . ` ` no one &#x27; s going to trade with enron right now because you could wind up being an unsecured creditor tomorrow . &#x27; &#x27;
</pre>

## Record 002552

**Label:** `benign`

<pre>
hey , do you happen to know the name of the scooter place in beaverton and also about how much i can expect to pay for a pretty good 125 cc scooter ? thanks . are you leaving work early to go to seattle ?
</pre>

## Record 002553

**Label:** `benign`

<pre>
&gt; John Hall signs his message:
&gt; &gt; John Hall
&gt; &gt; 13464 95th Ave NE
&gt; &gt; Kirkland WA 98034
&gt;
&gt; Is this some new &quot;I&#x27;m not spam&quot; signal, to include a
&gt; valid mailing address?
&gt;
&gt; - GordonDear Gawd - /I/ live in Kirkland. I hope I don&#x27;t wake up one day and realize
/I/ am John Hall...I wonder if I can get GPS lat/long from street address... start a new
GeoTrashing sport or something...Hmm... that address is only a quarter-mile from my old house... and about a
block from a friend of mine. Weird...http://xent.com/mailman/listinfo/fork
</pre>

## Record 002554

**Label:** `benign`

<pre>
hey what &#x27; s up ? you playing soccer tonight ? looks like i pretty much &quot; chickened - out &quot; today . it might take me a few days to work up my courage . he doesn &#x27; t plan to review us ( there are only 3 of us ) until next week . can you believe that ? crystal hyde enron north america 121 sw salmon street portland , oregon 97204 phone : ( 503 ) 464 - 8318 fax : ( 503 ) 464 - 3740 email : crystal . hyde @ enron . com
</pre>

## Record 002555

**Label:** `benign`

<pre>
plant outage affecting &quot; meter # 8291 &quot; enron methanol please advise me if you want the 36 . 0 / day term deal bought back for days ; july 4 th &amp; july 5 th . presently , the buyback deal { # 139058 } is being allocated 35 , 261 mm for day 7 / 4 th &amp; 35 , 903 for day 7 / 5 th . daily flow for 7 / 4 th = 739 mm - &amp; - 7 / 5 th = 97 mm . the term deal of 36 . 0 mm has been bought back for july 6 th thru july 16 th .
</pre>

## Record 002556

**Label:** `benign`

<pre>
summary : half a day dear readers , many thanks to all respondents ( 51 ) who sent replies to my query about time phrases and native-speaker judgments . there were too many replies to acknowledge individually . many of you asked for a summary , so here goes . # # = strongly preferred , # = good , ? = awkward , x = bad , yuck the figures following each phrase give the number of votes cast in each category . they do n&#x27;t all add up to 51 because some respondents ( rs ) expressed only their first preference . # # # ? x 1 the family spent . . . . . . . in ipswich . a . a day and a half 24 26 0 0 b . one and a half days 1 31 7 7 c . thirty-six hours 1 29 6 9 this makes [ a ] a clear winner , but for many rs [ b ] and [ c ] are acceptable , too , depending on context . comments : a . implies enough time to socialize ; implies most of sunday spent in ipswich , leaving at noon on monday b . implies ipswich was part of a series of visits ; implies an overnight stay ; part of a list ; stilted c . military / aeronautical ; whirlwind tour ; every moment packed with feverish activity ; at a conference - one and a half days spent on syntax ; working under time pressure ; airplane layover / waystation ; ok for negative experiences ( flu / jail ) . ( i take it a &#x27; layover &#x27; is us for british &#x27;s topover &#x27; , or maybe it &#x27;s a stopover with a visit to a girlfriend ? ) 2 . it took me . . . . . . . . to write the book . a . six months 16 34 0 0 b . a half-year 0 10 9 25 c . half a year 3 44 1 1 while there is a preference for [ a ] , [ c ] is not far behind . [ b ] is problematic . comments : a . feels shorter ; not as much effort required as &#x27; half a year &#x27; b . suggests an academic half-year ; yuck , unnatural ; sounds non-native or british ( from american rs ) ; sounds american ( from british rs ) ; ok in financial contexts - a half year is either the first or second half , not an arbitrary 6 month period c . sounds longer than six months ; emphatic , with stress on &#x27; year &#x27; - 3 we &#x27; ll be leaving in . . . . . . . a . half an hour 6 44 0 0 b . a half-hour 2 24 10 11 [ a ] wins . [ b ] splits people into two roughly equal camps . comments : b . sounds formal ; awkward ; funny ; sounds normal - we &#x27; ll be leaving inna haf our ( from now ) . 4 tom worked for . . . . . . . . . in a lab a . a year and a half 13 37 1 0 b . one and a half years 0 32 6 7 c . eighteen months 3 39 6 0 while [ a ] wins , the other two are n&#x27;t so far behind . comments : a . least exact . b . more exact ; part of calculation ( eg for pension ) ; stilted ; fussy . c . most exact ; emphasizes duration ; ok for children &#x27;s ages upto two years ; ok in contexts where precision is required ; suggests tom was less involved in the job ; maybe a temporary job . using months for time greater than a year , and hours for time greater than a day makes the time seem more rushed ; half an inch is ok but not half a foot , but half a yard is ok if bying cloth even though we do n&#x27;t normally speak of half a yard . the overall impression that i get is that context and pragmatic considerations determine which lexical item will be acceptable in any given slot , and even then there is considerably more tolerance for some expressions than i would have thought possible / probable . three rs said all eleven phrases are 100 % ok . i have n&#x27;t given details of rs &#x27; background / nationality etc , since not all rs gave me details . however , about three-quarters of replies came from the usa . i hope this has been of some interest . many thanks for your response . roger maylor dept of linguistics and english language university of durham , uk
</pre>

## Record 002557

**Label:** `benign`

<pre>
re : 5 . 1205 linguistics and imperialism further to wald and grosserhode : the idea that there is a connection between linguistics and imperialism was proposed by the norwegian linguist hans vogt ( yes , the specialist on kartvelian and other things ) in a leaflet published in 1935 , &#x27; maalstrid og klassekamp &#x27; [ language debate and class struggle ] . i have a brief reference to his ideas in my article on research policy in ammon , dittmar and mattheier eds . sociolinguists . an international handbook ( berlin 1988 ) , with some more references , also to explicitly opposing views ( like geoffrey sampson &#x27;s , who does n&#x27;t refer to vogt directly , though ) . hartmut haberland
</pre>

## Record 002558

**Label:** `benign`

<pre>
conference announcement the research institute for language and speech organizes a workshop on optionality the workshop will be held in utrecht on spetember 1 - 2 , 1995 . keynote speakers will be jane grimshaw ( rutgers ) , tony kroch ( upenn ) , tanya reinhart ( tel aviv / utrecht ) and edwin williams ( princeton ) . selected papers will be presented by ken wexler ( mit ) , david adger ( york ) , martina wiltschko ( vienna ) , gereon mueller ( tuebingen ) , peter svenonius ( tromso ) , joel hoffman ( maryland ) , tor afarli ( trondheim ) , ralf vogel &amp; markus steinbach ( mpi berlin ) , joao costa ( leiden ) , hiroyuki ura ( mit ) , norvin richards ( mit ) and sergio menuzzi ( leiden ) . since the number of workshop attenders will be limited , we ask those interested in attending to preregister by sending an e-mail message to neeleman @ let . ruu . nl . the workshop fee will be 50 dutch guilders , to be paid during the in-site registration . further information will be sent out after preregistration . * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ad neeleman * * ots - trans 10 - 3512 jk utrecht - the netherlands * * + 31 30 538313 ( office ) + 31 30 949241 ( home ) * * ad . neeleman @ let . ruu . nl * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
</pre>

## Record 002559

**Label:** `benign`

<pre>
department of energy is deploying a corporate portal at facilitie s across the country star information technology brings has the tools needed to help energy companies gain knowledge . if it &#x27; s information from oasis to market prices . the events that change prices such as weather and more are always just one click away with star information technologys &#x27; powerful portal tools . our portal products are the difference between seeing and doing . hosting dynamic applications such as on - line reports , calendars , e - mail , and commerce services create a one - stop shop for users to go about almost all of their daily tasks : analyzing customer trends , checking schedules , viewing revenue - or project - related performance metrics , and buying or selling products . combining all the information relevant to users &#x27; work with the ability to act on that information enables organizations to get more done . five government agencies deploy plumtree corporate portal at hundreds of facilities - the naval air systems command ( navair ) , department of energy ( doe ) , department of defense , national institutes of health and army public affairs center are deploying a corporate portal at facilities across the country as part of ongoing governmental initiatives to maximize efficiency , develop more online content and provide private sector levels of customer service . the plumtree corporate portal integrates regulatory , enforcement and incident database reports , enterprise applications and internet services into the agencies &#x27; portals as portal gadgets ( tm ) , plug - in modules that embed components of applications and interactive internet services in a personalized portal page . the portal growth in the public sector is driven by its success applying business technology to the specific challenges of government , empowering federal agencies to simplify access to their data , reduce paperwork , benefit from the resources on the internet and share information securely with their employees , contractors and constituencies . for more information on how star information technology can help your business turn knowledge into power contact us today at 508 - 359 - 6891 ext 115 . christopher k . heisler product manager 508 - 359 - 6892 ext 115 www . starit . com cheisler @ starit . com we make knowledge power
</pre>

## Record 002560

**Label:** `benign`

<pre>
recent offsite / eco - challenge just wanted to let you know that the offsite was a first , first , first class outing . both craig b . and i appreciate being included . thanks .
</pre>

## Record 002561

**Label:** `benign`

<pre>
fw : resume for vince kaminski we just received this resume from an agency . i had just heard this morning that an economist was coming into your group , so i don &#x27; t know if you are interested or not . let me know if i can be of any help . molly - - - - - original message - - - - - from : graham , toni sent : thursday , march 08 , 2001 2 : 07 pm to : magee , molly subject : fw : resume for vince kaminski - - - - - original message - - - - - from : &quot; m eastman &quot; @ enron @ enron . com ] sent : thursday , march 08 , 2001 1 : 53 pm to : graham , toni subject : resume for vince kaminski johnathan is at 142 , 000 base + 10 - 15 % bonus . he is a phd . , certified in financial risk management , awaiting charter as cfa , and the list goes on . at kpmg his clients are financial institutions , e - commerce , internet , and high tech . he has real options valuation and various other financial and overall corporate risk valuation and analysis skills that may be of interest to vince and his group . mike eastman , cpc - president qualitec professional services , lp accounting - financial - energy risk - tax search consultants 281 - 647 - 9300 ext . 314 fax 281 - 647 - 9300 email meastman @ qualitec . com website www . qualitec . com - johnathan mun . doc
</pre>

## Record 002562

**Label:** `benign`

<pre>
been running hammie on all my incoming messages, and I noticed that multipart/alternative messages are totally hosed: they have no content, just the MIME boundaries. For instance, the following message:------------------------------8&lt;------------------------------ From: somebody To: neale@woozle.org Subject: Booga Content-type: multipart/alternative; boundary=&quot;snot&quot;This is a multi-part message in MIME format.--snot Content-type: text/plain; charset=iso-8859-1 Content-transfer-encoding: 7BITHi there. --snot Content-type: text/html; charset=iso-8859-1 Content-transfer-encoding: 7BITHi there. --snot-- ------------------------------8&lt;------------------------------Comes out like this:------------------------------8&lt;------------------------------ From: somebody To: neale@woozle.org Subject: Booga Content-type: multipart/alternative; boundary=&quot;snot&quot; X-Hammie-Disposition: No; 0.74; [unrelated gar removed]This is a multi-part message in MIME format.--snot--snot-- ------------------------------8&lt;------------------------------I&#x27;m using &quot;Python 2.3a0 (#1, Sep 9 2002, 22:56:24)&quot;.I&#x27;ve fixed it with the following patch to Tim&#x27;s tokenizer, but I have to admit that I&#x27;m baffled as to why it works. Maybe there&#x27;s some subtle interaction between generators and lists that I can&#x27;t understand. Or something. Being as I&#x27;m baffled, I don&#x27;t imagine any theory I come up with will be anywhere close to reality.In any case, be advised that (at least for me) hammie will eat multipart/alternative messages until this patch is applied. The patch seems rather bogus though, so I&#x27;m not checking it in, in the hope that there&#x27;s a better fix I just wasn&#x27;t capable of discovering :)------------------------------8&lt;------------------------------ Index: tokenizer.py =================================================================== RCS file: /cvsroot/spambayes/spambayes/tokenizer.py,v retrieving revision 1.15 diff -u -r1.15 tokenizer.py --- tokenizer.py 10 Sep 2002 18:15:49 -0000 1.15 +++ tokenizer.py 11 Sep 2002 05:01:16 -0000 @@ -1,3 +1,4 @@ +#! /usr/bin/env python &quot;&quot;&quot;Module to tokenize email messages for spam filtering.&quot;&quot;&quot; import email @@ -507,7 +508,8 @@ htmlpart = textpart = None stack = part.get_payload() while stack: - subpart = stack.pop() + subpart = stack[0] + stack = stack[1:] ctype = subpart.get_content_type() if ctype == &#x27;text/plain&#x27;: textpart = subpart ------------------------------8&lt;------------------------------
</pre>

## Record 002563

**Label:** `benign`

<pre>
ape language the latest issue of the journal of nih research ( vol 7 , no . 1 jan . 1995 pp . 50-55 ) contains a short review article by pat shipman on human evolution . on the cover , the article is referred to as &quot; fading lines between apes and humans , &quot; but actually it is titled &quot; climbing the family tree : what makes a hominid a hominid ? &quot; . the discussion on linguistic abilities might be of interest to other subscribers to the linguist list . the author discusses kanzi and sue savage - rumbaugh &#x27;s 1994 book &quot; kanzi : the ape at the brink of the human mind , &quot; [ john wiley and sons , ny ] . according to savage - rumbaugh , kanzi does have a rudimentary grammar , can use displaced referents and arbitrary symbols ( in this case , icons or &quot; lexigrams &quot; on a computer ) . s - r thinks his ability equals that of a 2 year old child . in later section , the work of derek bickerton ( &quot; language and species , &quot; 1990 [ university of chicago press ] is summarized . bickerton admits that kanzi , other apes and young children use &quot; proto-language , &quot; but not full language because of the lack if grammatical elements . most of the rest of the section on language is devoted to broca &#x27;s area and cortical specialization . - - john
</pre>

## Record 002564

**Label:** `benign`

<pre>
netco list attached is a spreadsheet louise requested regarding the netco employees by netco group . latest update is 843 employees .
</pre>

## Record 002565

**Label:** `benign`

<pre>
revised : gas logistics netco restart louise , as requested , attached is the gas logistics pipeline contract spreadsheet with responsibilities added . please let me know if you have any questions , tks - bob superty
</pre>

## Record 002566

**Label:** `benign`

<pre>
re : 3 . 370 queries : computer resources , dialect maps jane tang asks for references about &#x27; losing &#x27; grammatical intuitions . though not about linguists , a study published in the journal of psycholinguistic research ( 17 . 1 : 1-17 ) , by hiroshi nagata ( the relativity of linguistic intuition : the effect of repetition on grammaticality judgements ) , concludes that &quot; linguistic intuitions as revealed in grammaticality judgements are not absolute , but relative in that they are easily influenced by repetition and other variables , such as embedded context . &quot; randy lapolla institute of history &amp; philology academia sinica , taiwan
</pre>

## Record 002567

**Label:** `benign`

<pre>
negation : syntax , semantics and pragmatics university of salford , greater manchester , uk european studies research institute north west centre for linguistics first annual international conference negation : syntax , semantics and pragmatics ( organiser : paul rowlett , salford ) friday 30 october to sunday 1 november 1998 faraday house , research &amp; graduate college , university of salford , greater manchester , uk sponsored by : the british academy the linguistics association of great britain the french embassy in london keynote speakers william a laduasaw , ucsc , usa laurence r horn , yale , usa liliane haegeman , geneva , switzerland program ( booking form at the end of this posting ) friday 30 october 1998 8 . 45 - 9 . 15am registration and coffee 9 . 15 - 9 . 30am introduction and welcome 9 . 30-10 . 0am metalinguistic negation in focus , suengho ham , seoul university , korea 10 . 0-10 . 30am focus - induced neg-concord failures , vieri samek - lodovici , university college london , uk 10 . 30-11 . 0am the focusing negative &#x27; mhaih &#x27; in cantonese chinese : a look at contrastive and metalinguistic negation , juliet wai hong , university of texas at austin , usa 11 . 0-11 . 30am coffee 11 . 30am - 12noon compositional , inherent and frozen negation : lexicalism versus functional categories , kazuhiko fukushima , kansai gaidai university , japan 12noon - 1pm keynote lecture negation , saturation and predication , william ladusaw , university of california at santa cruz , usa 1 . 0 - 2 . 0pm lunch 2 . 0 - 2 . 30pm a minimalist approach to the syntax of multiple negation in french , hugues m . peters , university of the west indies , jamaica 2 . 30 - 3 . 0pm negation and the diachrony of features , anna roussou , university of wales , bangor , uk and ian roberts , stuttgart university , germany 3 . 0 - 3 . 30pm a lexical-functional approach to the syntax of negation in french , veronika knueppel , konstanz university , germany 3 . 30 - 4 . 0pm tea 4 . 0 - 4 . 30pm the riddle of n-words in polish : quantificational versus non-quantificational , universal versus existential , joanna blaszczak , humboldt university , berlin , germany 4 . 30 - 5 . 0pm negative polarity items in russian , asya pereltsvaig , mcgill university , montreal , canada 5 . 0 - 5 . 30pm negation in hungarian , john payne and erika chisarik , university of manchester , uk 6 . 0 - 7 . 0pm reception at blackwell &#x27;s campus bookshop saturday 31 october 1998 9 . 0 - 9 . 30am coffee 9 . 30-10 . 0am on romance sensitivity to non-veridicality , joao peres , university of lisbon , portugal 10 . 0-10 . 30am ( non - ) occurrence of sentential &#x27; no &#x27; in spanish negative sentences , javier martin - gonzalez , harvard university , usa 10 . 30-11 . 0am negation with [ - neg ] features , marie - therese vinet , sherbrooke university , quebec city , canada 11 . 0-11 . 30am coffee 11 . 30am - 12noon adverbial verb phrases and downwards monotonicity : negativity and the demorgan taxonomist &#x27;s dilemma , jay atlas , pomona college , california , usa 12noon - 1 . 0pm keynote lecture free - choice indefinites and the two &#x27; any &#x27; problem laurence r horn , yale university , usa 1 . 0 - 2 . 0pm lunch 2 . 0 - 2 . 30pm negative concord and the scope of universals , anastasia giannakidou , university of amsterdam , the netherlands 2 . 30 - 3 . 0pm procedural marking of propositional attitude in norwegian sentences with a negative &#x27; wh &#x27; - complement , thorsten fretheim , university of trondheim , norway 3 . 0 - 3 . 30pm some problems with the semantics of negation with reference to english and korean , hye - kung lee , university of cambridge , uk 3 . 30 - 4 . 0pm tea 4 . 0 - 4 . 30pm syntactic licensing of negative polarity , patrick a schindler , tuebingen university , germany 4 . 30 - 5 . 0pm the grammatical basis of polarity items , ana maria martins , university of lisbon , portugal 5 . 0 - 5 . 30pm the bi-polarity of &#x27; any &#x27; , lucia tovena , institute of scientific &amp; technological research , trento , italy and jacques jayez , ecole des hautes etudes en sciences sociales , paris , france 5 . 30 - 6 . 30pm european studies research institute wine reception 8 . 0pm conference dinner ( manchester ) sunday 1 november 1998 9 . 0 - 9 . 30am coffee 9 . 30-10 . 0am focus particles in negative polarity in hindi , sharavan vasishth , ohio state university , usa 10 . 0-10 . 30am two types of negation in bengali , gillian ramchand , oxford university , uk 10 . 30-11 . 0am the syntax of negation and ov in late middle english , richard ingham , university of reading , uk 11 . 0-11 . 30am coffee 11 . 30-12 noon blocking effects in the expression of negation , jacob hoeksema , university of groningen , the netherlands 12noon - 1pm keynote lecture verb movement , tense and negation in west flemish , liliane haegeman , university of geneva , switzerland 1 . 0 - 2 . 0pm lunch 2 . 0 - 2 . 30pm negative polarity , modality and the comparative : a parametric approach , nathalie schapansky , simon fraser university , british colombia , canada 2 . 30 - 3 . 0pm negation and the acquisition of &#x27;s trong &#x27; indefinites , irene kraemer , max planck institute for psycholinguistics , nijmegen , the netherlands 3 . 0 - 3 . 30pm head - movement in negation in english , annabel cormack and neil smith , university college london , uk 3 . 30 - 4 . 0pm tea alternates how many types of npi are there ? evidence from korean and english , chungmin lee , seoul national university , korea negative chains and operator movement , rita bhandari , suny , usa grammaticalization in progress : the development of a negative focus particle , ton van der wouden , universities of groningen &amp; leiden , the netherlands negative constituent licensing in a negative concord language , nedzad leko , university of oslo , norway welsh negation , robert d borsley , university of wales , bangor , uk and bob morris - jones , university of wales , aberystwyth , uk - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - for bookings , please print out the registration form below , fill it in and return it with full conference fee to the address given . please note closing date for bookings : 9 october 1998 . university of salford , greater manchester , uk european studies research institute north west centre for linguistics first annual international conference negation : syntax , semantics and pragmatics ( organiser : paul rowlett , salford ) friday 30 october to sunday 1 november 1998 faraday house , research &amp; graduate college , university of salford , greater manchester , uk sponsored by : the british academy the linguistics association of great britain the french embassy in london registration form to arrive before friday 9 october 1998 title : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ surname : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ first name ( s ) : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ address : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ postcode / zipcode : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ daytime telephone number : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ e - mail address : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ affiliation : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ registration fee : gbp60 . 00 ( gbp30 . 00 for students ) includes all refreshments , buffet lunches and wine reception subtotal : gbp _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ saturday 31 october 1998 conference dinner : gbp16 . 00 subtotal : gbp _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ are you vegetarian ? yes / no please provide details of any specific dietary requirements : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ total payment : gbp _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ cheques should be made payable to &#x27; the university of salford &#x27; in sterling only . alternatively , payment by credit card ( visa / mastercard ) is possible : card no . : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ expiry date : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ card holder &#x27;s name : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ billing address : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ an official receipt will be sent once registration forms , payment details or cheques have been received . please send completed registration forms ( and cheques ) to : miss wendy pickles , esri conference administrator , university of salford , crescent house , the crescent , salford , greater manchester m5 4wt , uk . telephone : + 44 ( 0 ) 161 295 5275 fax : + 44 ( 0 ) 161 295 5223 e - mail : w . pickles @ esri . salford . ac . uk closing date for registration : friday 9 october 1998
</pre>

## Record 002568

**Label:** `benign`

<pre>
epower : europe &#x27; s power derivatives . . . ( enron mention ) please find attached the following article / s : &#x27; epower : virtual exchange concentrating europe &#x27; s power derivatives liquidity &#x27; - energy &amp; power risk management kind regards , kuldeep chana
</pre>

## Record 002569

**Label:** `benign`

<pre>
sum : more discussion of human and non-human language content - length : 18462 there &#x27;s been a fair amount of discussion about language among non-humans , both publicly on linguist and privately with me , since my previous summa - ry in linguist 6-28 . i have already posted to linguist a bibliographical list , broadcast in linguist 6-195 ; here follows a summary of some of the main points that have come up in discussion . first of all , i &#x27;d like to thank the following people who posted messages to me personally : dan alford , a . k . a . moonhawk ( dalford @ s1 . csuhayward . edu ) celso alvarez - caccamo ( lxalvarz @ udc . es ) rachel lagunoff ( ihw1009 @ mvs . oac . ucla . edu ) dorothy hinshaw patent ( doropatent @ aol . com ) john e . limber ( jel @ christa . unh . edu ) alex schwartz ( alex _ schwartz @ sagepub . com ) andrew spencer ( spena @ essex . ac . uk ) mike tomasello ( tomas @ fs1 . psy . emory . edu ) bill turkel ( bill @ hivnet . ubc . ca ) george williams ( gww @ navisoft . com ) in addition to these individuals , the following people have posted items on the subject of language among nonhumans to linguist since 6-28 . i &#x27; m going to focus less on these in the following summary , on the assumption that most of you have already read what they had to say . lloyd anderson ( ecoling @ applelink . apple . com ) sherri l . condon ( slc6859 @ usl . edu ) jane a . edwards ( edwards @ cogsci . berkeley . edu ) larry gorbet ( lgorbet @ mail . unm . edu ) jacques guy ( j . guy @ trl . oz . au ) gilbert harman ( ghh @ princeton . edu ) marion kee ( marion . kee @ a . nl . cs . cmu . edu ) bob krovetz ( krovetz @ cs . umass . edu ) roger lass ( roger @ beattie . uct . ac . za ) david pesetsky ( pesetsk @ mit . edu ) benji wald ( ibeneawj @ mvs . oac . ucla . edu ) sherman wilcox ( wilcox @ alcor . unm . edu ) one major issue that came up in discussion was the methodological and ethical justification of evaluating the linguistic ability of non-humans by confronting them with the task of mastering a language belonging to homo sapiens , instead of by investigating the means by which they inter - act amongst themselves . in linguist , benji wald pointed out that chomsky himself , in a paper pub - lished in the sebeok / sebeok vol . mentioned in my bibliography in linguist 6-195 , carefully drew the distinction between &#x27; human language &#x27; , the cog - nitive system built into the * human * brain that enables us to master the various human languages that are the raw data of our studies , and &#x27; lan - guage &#x27; ( which i shall in this posting capitalize - - not to be confused with lsa &#x27;s journal ) , the set of all possible similar systems , in whatever species ( or machine ) they may manifest themselves . this phase of the dis - cussion began with the question of the relation between an ability to re - cognize one &#x27;s image in a mirror and an ability to handle pronouns of vari - ous sorts , including reflexives . ( briefly , dogs and cats are able to re - cognize their reflections as members of their own species but consistently treat them as &#x27; others &#x27; , behaving toward them as they would to strangers of their own species ; roger lass has suggested that the ability to re - cognize the reflection as &#x27;s elf &#x27; may not be evolutionarily advantageous to such predatory animals . the anthropoid apes , however , manage after a few minutes to realize that the reflection is &#x27;s elf &#x27; , at which point they switch from the &#x27;s ocial &#x27; behaviours they would normally use to make the acquaintance of strangers of their own species to using the mirror as a tool for self-inspection . but there has been no evidence presented , to my knowledge or that of anyone else on the list , that chimps , gorillas , etc . have any ability to handle anaphoric reference the way human apes do . sherri condon referred us to the work of her colleague at the univer - sity of southwestern louisiana , daniel j . povinelli , on this subject . ) but ultimately this discussion came back to a fundamental issue raised in my previous summary : even were it possible , through ingenious programme design and / or arduous effort , to teach a real human language to a chimp or a gorilla , the mere fact that the system in question would have to be &#x27; force-fed &#x27; , as it were , is evidence in itself that there is a serious difference between the cognitive systems of the two species ( human and non-human ) in question , since humans pick the stuff up with almost no training whatsoever . since much of our research programme is dedicated , more or less directly , to investigating the ability of humans to learn individual human languages &#x27; naturally &#x27; ( i . e . , with a minimum of effort ) - - at least in childhood - - this unredoubted fact places the linguistic abilities of non-humans at a significant distance from our discipline &#x27;s focus area . whether the field of linguistics ought to broaden its focus area to include non-human quasi-linguistic semiotic / communicative systems is another question , of course , that was raised in private discussion with me . speaking for myself , i am very sympathetic to the notion of embedding ( to use a very professional word ) linguistics as we now under - stand it within a broader programme of research into language , including the semiotic / communicative systems of non-human animals . supposing that such animals could accomplish the task of mastering a hu - man language ( which has so far not happened ) , this would certainly prove that the difference in species is not relevant to the nature of the lan - guage in question , much less language in general . but failure to accom - plish the task is not as probative , since it can be interpreted in either of at least two ways : ( 1 ) the animals in question are no more than &#x27; protolinguistic &#x27; ( to use bickerton &#x27;s term ) , unable to master a system of the complexity of human language - - a quantitative evaluation . ( 2 ) the animals in question are already in possession of an equivalent system of comparable complexity but of incompatible organization ( which ipso facto interferes catastrophically with the proposed task ) - - a qua - litative evaluation . which of these alternatives is correct will require a completely diffe - rent set of experiments , carefully studying the communicative behaviours natural to these animals as we linguists study the communicative beha - viours natural to humans . one of my correspondents said , &#x27; why is all this effort devoted towards teaching apes a modified version of english ? a complex and highly social species such as this has an extremely sophisticated natural communication system of its own , yet we know very little about this . . . surely , before embarking on experimental meddling of dubious methodological validity , it would be more prudent to construct a research program aimed at mapping out the cognitive abilities of the various species and more particularly , their home-grown communication systems . presumably , it &#x27;s only against the background of how apes communicate with each other in the wild that we will really be able to interpret the kinds of artificial experiments pio - neered by the gardners and others . . . when you provide the reference list it would be extremely interesting ( though a lot of hard work ) to compare the amount of research effort expended on teaching apes 2 - year old english , compared to the number of studies devoted to ethological study of ape communication . &#x27; a further , related issue was the epistemological question of how to reco - gnize behaviour in another species that is equivalent to language in hu - mans . i remarked myself at one point , &#x27; human language is not purely a communication system , and its structure is not based solely on its commu - nicative function . i use language for a variety of functions . . . it does not strike me as logically self-evident that all of these functions should be served by the same system . i can imagine a species that en - gaged in all of these behaviours but used a radically different system for each . would we be able to recognize all these different systems ? and would all of them properly fall into the field of inquiry we call &#x27; lin - guistics &#x27; ? larry gorbet , in his linguist posting , touched very well on a further as - pect of this problem , addressing in particular one of the criticisms that has been made of the results achieved by the gardners et al . &#x27; any formal element whose meaning includes displacement ( or more generally , * any * fairly abstract meaning ) will be intrinsically difficult to recognize as such , simply because the &quot; search space &quot; ( for the observable behavior that points to meaning ) is so large . the result is an * intrinsic * sample bias in semantic analysis : concrete meanings are more likely to be * disco - vered * than are more abstract ones , relative to their actual frequency of occurrence . in addition to abstract meanings in the more obvious sense , meanings which concern internal states ( e . g . &quot; emotions &quot; ) can be difficult to discern if one does n&#x27;t experience those states or similar ones . &#x27; a couple of references to the science fiction literature are relevant here , science fiction being often very useful for such &#x27; thought-experi - ments &#x27; in the einsteinian sense . h . beam piper , who while definitely not pc was brilliant , wrote a story called &#x27; naudsonce &#x27; ( pp . 57-112 in the col - lection federation , published 1981 by ace . piper suicided in 1964 , and i have no idea whether &#x27; naudsonce &#x27; was published anywhere during his life - time ) , in which an exploration party from earth discovers an extrasolar planet inhabited by an obviously sapient species which the explorers la - bel &#x27; svants &#x27; . these people are living at roughly a neolithic cultural / technological level , and there &#x27;s no question that they communicate by means of deliberately modulated sound waves transmitted through the air , so the humans immediately jump to the conclusion that they have something akin to what we call &#x27; language &#x27; , and the professional linguist they &#x27; ve brought along for just such eventualities gets to work trying to analyse the svants &#x27; &#x27; language &#x27; and establish inter-species communication . no go . turns out that although both svants and humans communicate by means of deliberately modulated , etc . , the resemblance ends there . our auditory systems ( by which i mean both the auditory centers of our brains and the neurosensory systems in our ears that serve as their input ) are designed to convert auditory impulses into a distinct sensory experience that we call &#x27; hearing &#x27; . the svants &#x27; neurosensory systems are designed to convert such impulses into something more closely approximating the sensory expe - rience that tells us about our internal states ( e . g . , feelings of hunger , thirst , satiation , heartburn , etc . ) . thus , when a human reports a feel - ing of pain or pleasure , another human apprehends the message intellectu - ally ; when a svant reports such a feeling , an equivalent feeling is di - rectly induced in the body of another svant . in order to have any hope of inter-species communication , the human explorers have to rely on two peculiar individuals : a young male svant who is as a result of a birth defect &#x27;d eaf &#x27; , but is otherwise quite intelligent and shows promise of being able to master an ideographic writing system , and his mother , who is &#x27; normal &#x27; but sticks with her son out of maternal affection , and can interpret for him to the rest of the svant community . my point in giving this rather lengthy summary is that recognition of the fundamental diffe - rence between the human and svant communicative systems constitutes a ma - jor , and very challenging , cognitive leap for the human explorers ; can we be confident that a similar cognitive leap would not be necessary for us in evaluating the cognitive behaviours of non-human apes , cetaceans , etc . ? ( piper , speaking through some of his characters , expresses scepticism that a species whose principal communication system so thoroughly bypas - ses the &#x27; higher / rational &#x27; cognitive centers can develop very far in the way of civilization . i personally do n&#x27;t share his scepticism . several of us during discussion have considered that cetaceans use sound both as their principal means of exploring the world around them , via sonar , and apparently to communicate . this suggests that a cetacean mode of commu - nication might involve &#x27; projecting &#x27; a sonar &#x27; image &#x27; of what one is talk - ing about into the listener &#x27;s brain . such projection may involve vocali - zation skill levels outside the abilities of cetaceans ; but assuming they could do it , i do n&#x27;t think such &#x27;d irect &#x27; communicative methods preclude a high level of civilization . i &#x27; m not sure they &#x27; re all that different from the ability of the chinese , or of fluent signers , to communicate highly abstract concepts by means of what is essentially visual imagery . ) those of you who have read suzette hayden elgin &#x27;s intriguing though dif - fuse novel native tongue may remember that in that novel , humans , having over the course of several decades established contact with a variety of alien species and managed to negotiate profitable trade deals with seve - ral of them in spite of the obvious language barriers ( the only reason the generally despised profession of &#x27; linguist &#x27; is allowed to survive in this crypto-fascist state ) , encounters a species that is obviously sapi - ent and obviously endowed with something in the way of a language ( if i remember correctly , it &#x27;s not made clear exactly how this is recognized ) , but that &#x27; language &#x27; is so radically different from human language in its structural organization that no human seems to be able to get the hang of it ( several people die trying ) . in both cases , we are left with the big question : what , exactly , consti - tutes language , or a &#x27; language &#x27; ? and how do we recognize one if it exists ? on the subject of the cognitive organization of the brains of non-human primates , steven pinker , on p . 350 of his recent book the language ins - tinct : how the mind creates language , discusses their equivalents of broca &#x27;s and wernicke &#x27;s areas : &#x27; the neuroanatomists al galaburda and terrence deacon have discovered areas in monkey brains that correspond in location , input-output cabling , and cellular composition to the human language areas . for example , there are homologues to wernicke &#x27;s and broca &#x27;s areas and a band of fibers connecting the two , just as in humans . the regions are not involved in producing the monkeys &#x27; calls , nor are they involved in producing their gestures . the monkey seems to use the regions corresponding to wernicke &#x27;s area and its neighbors to recognize sound sequences and to discriminate the calls of other monkeys from its own calls . the broca &#x27;s homologues are involved in control over the mus - cles of the face , mouth , tongue , and larynx , and various subregions of these homologues receive inputs from the parts of the brain dedicated to hearing , the sense of touch in the mouth , tongue , and larynx , and areas in which streams of information from all the senses converge . &#x27; for those of you who are interested , the relevant references are : deacon , t . w . 1988 . &#x27; evolution of human language circuits &#x27; in h . jerison &amp; i . jerison , eds . , intelligence and evolutionary biology . new york : springer . - - - - . 1989 . &#x27; the neural circuitry underlying primate calls and human language &#x27; human evolution 4 : 367-401 . galaburda , a . m . &amp; d . n . pandya . 1982 . &#x27; role of architectonics and con - nections in the study of primate brain evolution &#x27; in e . armstrong &amp; d . falk , eds . , primate brain evolution . new york : plenum . beyond this , there is the fact that the integration of even complex so - cial systems is not enough to account for the complexity of human lan - guage . a large number of human social situations seem to be manageable by just a few dozen different utterances ; yet we have a natural linguis - tic ability vastly in excess of that . i suspect that our ancestors may have developed that ability through some nonce mutation , and then over the subsequent millenia have gradually developed uses for it . ( for some at least tangentially relevant thoughts on this subject , see theodore zeldin &#x27;s recently published intimate history of humanity , harper - collins . ) before closing this posting , i will quote the following from dorothy hinshaw patent &#x27;s message to me , and reiterate my plea in linguist 6-28 for more user-friendliness in our interactions with people who are rea - sonably intelligent , may be well-educated , may even be fellow scientists , but just are n&#x27;t linguists . &#x27; i was very frustrated by the critics of the ape language work ; they seemed to be looking for reasons to say the work did n&#x27;t have meaning , and i think your piece summarized many of the frustrations of people like me very well . would that everyone were able to think so clearly ! what i &#x27;d like to see is a linguistic analysis - - using minimal linguistic jargon , so zoologists and psychologists could understand it , too - - of the work done with apes , dolphins , sea lions , and parrots , comparing the &quot; accom - plishments &quot; of the different species to one another and to human chil - dren . i &#x27;d like the person doing it to make the assumption , as you have , that the work does have meaning , and go from there , rather than trying to find picky reasons for discounting it because of human hubris . &#x27; let us instead adopt the attitude expressed by sherri condon : &#x27; i think we have much to learn about cognition and communication in all species , and we are fortunate that careful researchers are on the job . &#x27; of course , as is always true not * all * researchers &#x27; on the job &#x27; are &#x27; careful &#x27; , by which i understand &#x27; responsible , not wedded to their hypotheses to such an ex - tent that they are unable to wrestle appropriately with contrary evidence or alternative approaches &#x27; , but the responsible ones definitely deserve encouragement ! best , steven - - - - - - - - - - - - - - - - - - - - - dr . steven schaufele 712 west washington urbana , il 61801 217-344 - 8240 fcosws @ prairienet . org * * * * o syntagmata linguarum liberemini humanarum ! * * * * * * nihil vestris privari nisi obicibus potestis ! * * *
</pre>

## Record 002570

**Label:** `benign`

<pre>
URL: http://www.aaronsw.com/weblog/000609
Date: 2002-09-23T00:51:21-06:00I&#x27;ve received an _incredibly kind invitation_; I sure hope I can take it! I 
feel sort of bad though, because I think other people deserve it more than I 
do. Hm, the next few weeks are pretty crazy: *Thu 26:* Edward Tufte Course[1] and MSI[2] member&#x27;s night, Chicago.
*Fri 27:* OSCOM[3], Berkeley. Bookmobile launch[4], SF. _(Unlikely to attend.)_
*SatSun:* Hoshana Rabba, Shemini Atzeret, Simchat Torah. _(Jewish Holidays)_
*30-Oct3:* OSXCON[5], Santa Clara. _(Need someplace to stay. Anyone?)_
*Mon 7:* Bernstein&#x27;s oral argument in crypto export case[6], San Francisco. _
(Ditto.)_
*Tues 8:* Bookmobile[7] arrives in D.C.
*Wed 9:* Lessig&#x27;s oral argument in Eldred case[8], D.C.[1] http://www.edwardtufte.com/tufte/courses
[2] http://msichicago.org/
[3] http://www.oscom.org/conferences/berkeley2002/
[4] http://webdev.archive.org/texts/bookmobile-open_house.php
[5] http://conferences.oreillynet.com/macosx2002/
[6] http://export.cr.yp.to
[7] http://webdev.archive.org/texts/bookmobile.php
[8] http://eldred.cc/

</pre>

## Record 002571

**Label:** `benign`

<pre>
congratulations on your promotion congratulations on your promotion ! regards , eugenio
</pre>

## Record 002572

**Label:** `benign`

<pre>

Gary Lawrence Murphy said:&gt; I envy some of those posting to this list.  I&#x27;ve been in business for
&gt; 24 years and I haven&#x27;t yet had the luxury of writing every line of
&gt; code for any project. We are always coerced by budgets and time to
&gt; maximize the amount of work done elsewhere.  For consultancy, integration or open source work, sure, perl, python or
java with free use of external libs makes a lot of sense IMO.I should note that normally when I&#x27;ve used C or C++ in the past, it&#x27;s
dictated by the fact that I would be working on a commercial product,
written from the ground up, where the code you&#x27;re generating is important
IP for the company; in this case, using a third-party lib often is not an
option, or would be a PITA licensing-wise.Also, cutting out third-party dependencies can reduce the risk of &quot;oops,
there goes the company that makes that library I depend on, now to shop
around for something vaguely similar, figure out what bugs it&#x27;s got,
rewrite my code to use the new API, and hope for the best&quot;.This can be a *very* big deal, for obvious reasons ;)    Open source
knockers should note that this is not a problem when using LGPL&#x27;d libs ;)--j.
</pre>

## Record 002573

**Label:** `benign`

<pre>
&gt; Software vendors have been trying since forever to prevent software piracy.
&gt; Remember when you had to enter a specific word from a specific page of the
&gt; software manual, which was printed on dark maroon paper so that it could
&gt; not be photocopied?  Didn&#x27;t work.  Propritery encoding of DVD&#x27;s?  Didn&#x27;t
&gt; work. Software that required the use of a registration key?  Didn&#x27;t work. 
&gt; Windows XP was shipped with this supposedly revolutionary method for
&gt; stopping piracy, and what happened?  How long was it before the code was
&gt; cracked? How many keygens are there for Windows XP?  Is someone running a
&gt; pirated version of XP really going to use Windows Update to installed a
&gt; service pack which breaks their OS?  Just because M$ didn&#x27;t include the
&gt; change in their README?  Fat chance.My problem is not the same as MS&#x27;s one, I don&#x27;t have to deal with millions of 
identical copy of the same CD with propably millions of working keys.  Each 
download can be unique with a small preparation delay.  The key generator is 
a problem only if multiple keys are usable.  If the end users are teenagers, 
you&#x27;ll face a huge wall when asking to be 100% of the time online but if we 
think of something like a health care system that keep track of patients 
personnal information, the end user will be willing to take every possible 
steps to protect the system from his own employees to use illegaly.I agree with all of you that mass production CDs will not be safe from piracy 
in a near futur.  That can be seen as a collateral of mass market 
penetration.BTW thanks for all of you who provided interestiong insight.  I&#x27;m playing with 
gdb&#x27;s dissassembler now but I don&#x27;t think it&#x27;s what a typical cracker would 
use.  Any hints on UNIX cracking tools ?Thanks.-- 
Yannick Gingras
Coder for OBB : Onside Brainsick Bract
http://OpenBeatBox.org

</pre>

## Record 002574

**Label:** `benign`

<pre>
On Mon, Aug 19, 2002 at 10:17:26AM -0700, Chad Norwood wrote:
&gt;   The way Razor breaks down mail is simple.  If a mail contains MIME
&gt;   boundaries it is split on those boundaries, each MIME part is considered 
&gt;   when marking the mail as spam.This isn&#x27;t a MIME message that it is breaking down though.  The
message as sent to me is just a regular one part, non-MIME message.
The contents of the message among other things is a forwarded message
(inline not as an attachment) that happens to have MIME parts.&gt;   In 2.14, there are different &#x27;logic methods&#x27; for detecting spam.
&gt;   The default method 5 requires all non-contention parts to be spam forI see 1-4 documented in the manpage.  2 looked like a good candidate
but the manpage states that only 1, 3, and 4 are on by default.  No
mention of method 5 though that I can see.&gt;   the mail to be marked as spam.  A part is considered under
&gt;   contention if its not clear if its spam are not, and is relatively
&gt;   rare.
&gt; 
&gt;   Sounds like you are not using 2.14, or maybe you&#x27;re misinterpretingActually I am using 2.14.&gt;   the log files.  Feel free to send me the log files if you think 
&gt;   there is a bug.
&gt;   
&gt;   Also, as jordan says, if you get a legit mail marked as spam (based
&gt;   on whatever MIME stuff is going on), you should revoke it (which sends
&gt;   all parts in) so TeS can take care of business.  I have to run off to a meeting but I&#x27;ll send you a copy of the logs
and the message that triggered as SPAM when I get back.  I&#x27;ll also
revoke it along with the other 3 similar messages and the Security
Advisory that were wrongly called SPAM this morning.Thanks.-steve
-------------------------------------------------------
This sf.net email is sponsored by: OSDN - Tired of that same old
cell phone?  Get a new here for FREE!
https://www.inphonic.com/r.asp?r=sourceforge1&amp;refcode1=vs3390
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users
</pre>

## Record 002575

**Label:** `benign`

<pre>
revision # 1 - enron / hpl actuals for august 21 , 2000 correct numbers : teco tap 31 . 876 / hpl gas daily ; 44 . 374 / hpl iferc ls hpl lsk ic 20 . 000 / enron previous numbers : teco tap 76 . 250 / hpl iferc ; 20 . 000 / enron ls hpl lsk ic 20 . 000 / enron
</pre>

## Record 002576

**Label:** `benign`

<pre>
On Tue, Aug 13, 2002 at 06:54:28AM +0100, Anders Holm mentioned:
&gt; let me guess, you haven&#x27;t tried the boot parameter root=/dev/hda2 if you
&gt; are using lilo?? Ah, you see - cobalt&#x27;s don&#x27;t use lilo. They have an openboot-like prom
that looks in an ext2 partition in /dev/hda1 for a file called
/boot/vmlinux.gz - nothing else. The only way I think you can set parameters is with a &quot;set_params&quot; line. However, when I run 
    set_params root=/dev/hda2
 and then run:
    bfd /boot/vmlinux.gz It boots the old kernel, I assume from the prom. It seems to do this, if
something goes wrong - no error, just boots the default kernel. BTW, &#x27;bfd&#x27; means &#x27;boot from disk&#x27;.Kate
-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002577

**Label:** `benign`

<pre>
enron wholesale services - investment watch report attached for your information is the latest version of the watch report that rac maintains for ews . the format has been revised to a more streamlined two page report . if you have questions or comments , please call me at ext . 3 - 3905 . regards , rick c .
</pre>

## Record 002578

**Label:** `benign`

<pre>
technical training at the houston energy expo ! ! technical training in conjunction with the houston energy expo 2001 ! ! ! march 20 - 21 , 2001 hyatt regency hotel - downtown receive a free pass into the houston energy expo by signing up in march ! we are offering : fundamentals of electricity basics of risk management natural gas - wellhead to burnertip there are only 25 spots in each class , so sign up today ! go to www . nesanet . org , in educational programs each class is listed with details and a registration form . if you have any questions , please give me a call ! ! lana moore ( 713 ) 856 - 6525 fax ( 713 ) 856 - 6199
</pre>

## Record 002579

**Label:** `benign`

<pre>
More than a dozen jokes - thanks guys and girls!
(plus some anti-French abuse from the usual suspect).Well my brain doesn&#x27;t hurt so much any more, and it was well worth it.
I&#x27;ve now got an even faster method for elliptic-curve point counting,
both pratically and asymptotically.It lifts a curve over a field of degree n in time O(n^(2+1/2+eps)),
or O(n^(2+eps)) with precomputation.  Before the best methods took
O(n^(3+eps)) without precomputation, or O(n^(2+1/2+eps)) with it.
The precomputation is done once per field, not per curve, and takes
time O(n^(3+eps)).  Here eps is an arbitrarily small number, hiding
some logarithmic factors.After lifting, you compute a norm in time O(n^(2+1/3+eps)) to get the
number of points on the curve.Here&#x27;s an example over a 1009-bit field, without precomputation, using
a 1 GHz Pentium III:------------------------------------------------------------------------------
&gt; ./ecpc4 -d 1009 -j 0x123
INFO: -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
INFO: -=-=-=-=-= ECPC: Elliptic Curve Point Counting, made easy! =-=-=-=-=-
INFO: -=-=-=-=-= v4.0.0. (c) ArgoTech 2001. All rights reserved. =-=-=-=-=-
INFO: -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
[...]
INFO: Picked field polynomial 1+x^55+x^1009.
INFO: Starting ECPC on j = 0x123...
INFO: Done after 138.33 seconds.
INFO: Checking... OK OK OK OK OK OK OK OK OK OK
[...]
CURVE: 5486124068793688683255936251187209270074392635932332070112001988456197381759672947165175699536362793613284725337872111744958183862744647903224103718245568925556758419805069056847065147709058947190200192542277555125346128173135573355537502225974504428432790108988791795746287271944131683364548299056172016
[...]
INFO: 1 curve processed.
INFO: Bye!
------------------------------------------------------------------------------
L8r,
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

## Record 002580

**Label:** `benign`

<pre>
sum : german / english translation software a little while ago i posted a query about peoples &#x27;s experience with power translator ( professional ) software for german - english translation . here is my colleague &#x27;s summary of responses via this and other lists . 1 . a second hand comment that someone working in art history had found it unsatisfactory 2 . another said that the canadian government uses the power professional ( french ) programme for translation work 3 . another said that the french version gave quite comical or incomprehensible results , but this was on the basic version , not the professional . one conspicuous difficulty was with words which can have the same form as different parts of speech ( eg gerunds ) ; another was variant word order . 4 . someone said ( another second hand comment ) that it was &quot; ok for the first cut &quot; . 5 . a response from the correspondent of an owner of the basic german programme who sent some samples with commentary , showing that as long as you knew both languages and edited the text during translation the results could be satisfactory , but whether the degree of efficiency offsets the time taken to use the programme was not apparent . this correspondent referred to it as a &quot; toy &quot; . 6 . a response from an academic who worked on the ibm translation product who referred to a german computer journal which rated the ibm programme slightly better ( and cheaper ) than the power professional . the reference is _ dos die pc zeitschrift _ 8 &#x27; 95 pp128 - 132 . it is apparent that simple constructions and explicit vocabulary translate more accurately than the complex and allusive , so the satisfaction given will depend very much on the nature of the task and the needs or expectations of the user . for scanning large volumes of print to ascertain the general subject matter these programmes are probably quite satisfactory ; for accurate translations , interactive operation by a translation-competent person would seem to be necessary . i have not yet decided to buy one of these programmes : i await a sales person who is prepared to run the risk of a trial translation on text supplied by me . no satisfied user came forward . andrew carstairs - mccarthy department of linguistics , university of canterbury , private bag 4800 , christchurch , new zealand phone + 64 - 3-364 2211 ; home phone + 64 - 3-355 5108 fax + 64 - 3-364 2065 e-mail a . c-mcc @ ling . canterbury . ac . nz
</pre>

## Record 002581

**Label:** `benign`

<pre>
Ryan, Shane wrote:
&gt; hi all,
&gt; 
&gt; I&#x27;m looking to get my hands on
&gt; either Doom I or II for my PC.
&gt; Unfortunately I cannot access 
&gt; IDSoftware&#x27;s site because of
&gt; the silly web-filtering system
&gt; in place here.
&gt; 
&gt; Does anyone know where I can
&gt; buy a copy of Doom (which I will
&gt; be running on Linux...) online?
&gt; Last time I asked in Game they laughed
&gt; at me ;]
&gt; 
&gt; I would ask to swap for Linux software
&gt; but that wouldn&#x27;t be ethical or legal.
&gt; Hence the purchasing question.
&gt; 
&gt; Regards,
&gt; Shane
&gt; there was a copy of Doom 1 that came free with RedHat 5.2 - 
unfortunately, it doesn&#x27;t seem to be on the newer CDs.get the last laugh by going in, and saying that ID soft actually 
released a Linux wrapper for the game. you need to buy the CDs, though, 
then download the free wrapper.-- 
Kae Verens
http://www.contactjuggling.org/users/kverens/
http://www.contactjuggling.org/ (webmaster)
-- 
Irish Linux Users&#x27; Group Social Events: social@linux.ie
http://www.linux.ie/mailman/listinfo/social for (un)subscription information.
List maintainer: listmaster@linux.ie

</pre>

## Record 002582

**Label:** `benign`

<pre>
re : hpl discrepancy is this enerfin gas we delivered ? what are the deal numbers in sitara and how much volume are we talking about ? darren , isn &#x27; t there an oba set up in enerfin that can handle small volumes ? thanks from : meredith mitchell 12 / 12 / 2000 08 : 34 am to : victor lamadrid / hou / ect @ ect cc : subject : hpl discrepancy victor , what &#x27; s your opinion on this ? can we go back and add days to prior month deals ? do we use the same price ? if we do decide to do this , we will need to get tetco to agree to do a retro for those days as well . jackie young 12 / 11 / 2000 03 : 53 pm to : cynthia franklin / corp / enron @ enron , meredith mitchell / hou / ect @ ect cc : daren j farmer / hou / ect @ ect subject : 10 / 2000 - days 6 and 19 ( 98 - 0439 ) the above referenced days have been placed on strangers gas due to ( i guess ) the meter not being turned off in time . the day prior to each of these days that are assessed to strangers gas , the only active k is the hpl 216 . can these deals be rolled to cover these couple of days ? thanks - jackie - 3 - 9497
</pre>

## Record 002583

**Label:** `benign`

<pre>
position : hamada , japan please do n&#x27;t apply by email . english teacher . full - time , 25-30 teaching hours / week . 250 , 000yen / month . travel allowance of 200 , 000 yen . teach in the beautiful countryside with a beach nearby . teach esl to all ages but must like children . university degree required . sponsorship available . fully furnished apartment at 48 , 000yen / month . paid holidays . renewable contract . application deadline asap . position begins october 6 , 1997 . apply by mail , fax , or in person with cv / resume , contact masaharu gotoh or reymie ramirez . gotoh school of english and math . aioi-3 , hamada - shi , shimane - ken 697 . 0855-23 - 0944 ( 22-2114 ) . fax 0855-22 - 2117 .
</pre>

## Record 002584

**Label:** `benign`

<pre>
In emacs rmail what varieties of different techniques are there for
sorting your favorite correspondents from the mix?... leaving the hundreds
of spam commercials. A filter for the campus computer system puts subject
lines and headers on many of the hundreds of spam commercials
with http://spamassassin.org
-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Spamassassin-talk mailing list
Spamassassin-talk@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/spamassassin-talk

</pre>

## Record 002585

**Label:** `benign`

<pre>

On Pungenday, the 9th day of Bureaucracy, Padraig Brady confessed:
&gt; How can I repeat a string an arbitrary number
&gt; of times in bash/sed/...
&gt;
&gt; I.E. I&#x27;m missing the repeat in the following:
&gt;
&gt; STRING=&quot;&gt; &quot;
&gt; NUMBER=3
&gt; PREFIX=repeat $STRING $NUMBER
&gt; echo $PREFIX
&gt; &gt; &gt; &gt;
perl ?  STRING=&quot;&gt; &quot;
  NUMBER=3
  PREFIX=`perl -e &quot;print &#x27;$STRING&#x27; x $NUMBER;&quot;`
  echo $PREFIXI&#x27;m pretty sure the bsd &#x27;jot&#x27; utility can do this too, but I don&#x27;t
have it to hand.-kev-- 
Irish Linux Users&#x27; Group: ilug@linux.ie
http://www.linux.ie/mailman/listinfo/ilug for (un)subscription information.
List maintainer: listmaster@linux.ie
</pre>

## Record 002586

**Label:** `benign`

<pre>
Robert Harley:
&gt;It is perfectly obvious that (heterosexual) promiscuity is exactly, 
&gt;precisely identical between males and females.Yeah, assuming approximately equal populations.
But that obscures the different modes of
promiscuity. Both the person who gives sex for
money or power or companionship and the person
who uses money and power and companionship to
get sex are promiscuous, in the broadest sense
of the word. But their motives and behavior are
quite different.Langur monkeys were the example in the cited
article. &quot;Dominant males .. kill babies that
are not their own.&quot; &quot;The dominant male monkey
.. seeks to defend his harem of females.&quot; But
cozying up to the current dominant male isn&#x27;t
the best strategy for female langurs, because
&quot;dominant males are dethroned by rivals every
27 months or so.&quot; &quot;By mating with as many
extra-group males as possible, female langurs
ensure their offspring against infanticide,&quot;
by the male who is likely next to rule the
roost.Maybe it&#x27;s just me, but that doesn&#x27;t paint a
picture of carefree females engaged in joyously
promiscuous couplings. The dom cab driver who
is taking her two boy toys to New Orleans is a
better picture of that. ;-)_________________________________________________________________
Chat with friends online, try MSN Messenger: http://messenger.msn.com

</pre>

## Record 002587

**Label:** `benign`

<pre>
baytown 12 &#x27; &#x27; pigging affected meters cheryl please make sure letters are sent out this week for the baytown 12 &quot; pigging project . all producers are to be shut - in by 9 : 00 am on september 12 , 2000 . the outage is expected to last three to four days . if you have any questions please call me 36449 gary hanks - - - - - - - - - - - - - - - - - - - - - - forwarded by gary a hanks / hou / ect on 08 / 29 / 2000 04 : 17 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : gary a hanks 08 / 11 / 2000 11 : 13 am to : cheryl dudley / hou / ect @ ect , daren j farmer / hou / ect @ ect , pat clynes / corp / enron @ enron , lauri a allen / hou / ect @ ect , earl tisdale / hou / ect @ ect , melissa graves / hou / ect @ ect , george weissman / hou / ect @ ect , shawna flynn / hou / ect @ ect cc : steve hpl schneider / hou / ect @ ect , james mckay / hou / ect @ ect , jeffrey a austin / hou / ect @ ect , william d cosby / gco / enron @ enron subject : baytown 12 &#x27; &#x27; pigging affected meters the baytown 12 &quot; pigging project scheduled for august 15 has been cancelled . the work has been rescheduled and is expected to begin september 12 . the same list of meters will be shut - in early on the morning of september 12 and remain shut - in approximately three to four days . if you have any questions please call me 36449 . thanks gary hanks - - - - - - - - - - - - - - - - - - - - - - forwarded by gary a hanks / hou / ect on 08 / 08 / 2000 12 : 49 pm - - - - - - - - - - - - - - - - - - - - - - - - - - - enron north america corp . from : gary a hanks 08 / 01 / 2000 10 : 55 am to : cheryl dudley / hou / ect @ ect , daren j farmer / hou / ect @ ect , pat clynes / corp / enron @ enron , lauri a allen / hou / ect @ ect , earl tisdale / hou / ect @ ect , melissa graves / hou / ect @ ect , george weissman / hou / ect @ ect , shawna flynn / hou / ect @ ect cc : steve hpl schneider / hou / ect @ ect , james mckay / hou / ect @ ect , jeffrey a austin / hou / ect @ ect subject : baytown 12 &#x27; &#x27; pigging affected meters the meters listed in the attached email will be shut - in in order to pig the baytown 12 &quot; . the meters will be shut - in early on the morning of august 15 , and remain shut - in for approximately five to ten days . if you have any questions please call me 36449 . thanks gary hanks mgr gas control - - - - - - - - - - - - - - - - - - - - - - forwarded by gary a hanks / hou / ect on 08 / 01 / 2000 10 : 44 am - - - - - - - - - - - - - - - - - - - - - - - - - - - mike vollmering @ enron 08 / 01 / 2000 08 : 59 am to : gary a hanks / hou / ect @ ect , jill t zivley / hou / ect @ ect cc : james mckay / hou / ect @ ect , pat flavin / gco / enron @ enron , liberty team hpl / gco / enron @ enron subject : baytown 12 &#x27; &#x27; the columbus energy wiggins # 1 ( 989634 ) will be effected by the pigging project . the tap valve is installed in the mlv bypass and the bypass will be removed to blow down the line . here is a list of all the producers that will be effected . columbus energy - - - - - - - - wiggins # 1 ( 989634 ) and fig orchard ( 986764 ) sanchez o mike
</pre>

## Record 002588

**Label:** `benign`

<pre>
graduate research training program computational aspects of cognitive science nsf graduate research training program cornell university the graduate fields of computer science and cognitive studies at cornell university announce a research training program for phd students who wish to focus their studies on computational aspects of cognitive science in general , and on human computation in particular . funding for five graduate trainees is provided by the national science foundation and awarded through the cornell graduate school . program description : award recipients pursue a phd in computer science and a minor in cognitive studies . in addition to the standard computer science program , each trainee will receive a firm grounding in formal and computational approaches to language and cognition , and will bring that training to bear on interdisciplinary research problems that connect computer science with other disciplines such as linguistics , philosophy , or psychology . examples of focus areas include artificial intelligence , computational linguistics , formal models of human computation , human and automated inference , intelligent information retrieval , learning theory , robotics , user - machine interfaces , and vision . stipend : each award carries a stipend of $ 14 , 100 per year , plus tuition and fees , extendible for up to five years of study ( assuming continuation of the grant by nsf ) . eligibility : award recipients must be admitted to , and continue in good standing in , the computer science phd program at cornell university . only us citizens and permanent residents are eligible for traineeship appointments . minority applicants , women applicants , and applicants with disabilities are especially encouraged . application procedure : formal application to the nsf graduate research trainee program occurs through the cornell graduate school . applicants should apply to the phd program in computer science and indicate with their application that they wish to be considered for a traineeship in computational aspects of cognitive science . application material may be requested from : computer science department graduate office 4126 upson hall cornell university ithaca , ny 14853 phone : ( 607 ) 255-8593 email : phd @ cs . cornell . edu the application deadline for fall 1995 is january 10 , 1995 . additional information : for more information about the traineeship program , please contact : sue wurster cognitive studies program 273a uris hall cornell university ithaca , ny 14853 phone : ( 607 ) 255-6431 email : cogst @ cornell . edu sue wurster email : cogst @ cornell . edu cognitive studies phone : 607 255-6431 273a uris hall fax : 607 255-8433 hours : m 8 : 00-12 : 00 t 12 : 30 - 5 : 00 w 8 : 00-12 : 00 r 12 : 30 - 5 : 00 f 11 : 00 - 4 : 00
</pre>

## Record 002589

**Label:** `benign`

<pre>
&gt; However, cracking and reverse engineering tools are not so ubiquitous on
&gt; UNIX as they are on Windows platform for two main reasons:
&gt;
&gt; 1. The main customers of commercial Unices (Solaris, HP-UX, Aix, SCO...)
&gt; are respectable companies. They are ready to pay big bucks for software
&gt; they need: the reputation matters.
&gt;
&gt; 2. Most software for free and open source Unices like Linux and xBSD (this
&gt; software often may be used on commercial unices as well) is, well, free and
&gt; open source.Thanks to your answers, I start to see where I should head for.  What are your 
sugestions for protecting a 100% online requirement system ?-- 
Yannick Gingras
Coder for OBB : Observing Bantu-speaking Butanone
http://OpenBeatBox.org

</pre>

## Record 002590

**Label:** `benign`

<pre>
Chris Haun wrote:
&gt; A LifeGem is a certified, high quality diamond created from the carbon of 
&gt; your loved one as a memorial to their unique and wonderful life.Why wait until you&#x27;re dead? I&#x27;m sure there&#x27;s enough carbon in
the fat from your typical liposuction job to make a decent diamond.- Joehttp://xent.com/mailman/listinfo/fork
</pre>

## Record 002591

**Label:** `benign`

<pre>
atelier des doctorants de linguistique ( adl ) call for papers fifth meeting of the adl 4 - 5 december 1998 university of paris 7 - denis diderot the atelier des doctorants de linguistique ( adl ) is an organisation created and run by students . with the support of the university of paris 7 , it aims at developing exchanges between students from different theoretical backgrounds . the fifth meeting provides an opportunity for young linguists to present their works and exchange ideas through : * papers on miscellaneous areas of linguistics * workshops on interdisciplinary topics * friendly breaks providing an opportunity for informal discussions . this meeting is organised by students and is student-oriented . papers , preferably delivered in french , should deal with the following fields : computational linguistics , history of linguistics , lexicology , phonetics , phonology , pragmatics , psycholinguistics , semantics , sociolinguistics , syntax and morphology . a three-page abstract setting out the theoretical background , hypotheses , examples and results which are to be presented at the meeting should be sent by october 15th . abstracts should be submitted , ( by email in rtf-format if possible ) , to sabrina . bendjaballah @ linguist . jussieu . fr ( for macintosh ) patricia . cabredo - hofherr @ linguist . jussieu . fr ( for pc formats ) . if you send your abstact by mail please enclose three anonymous copies along with a separate listing of name , institutional affiliation , preferred mailing address , phone , e-mail address and paper title to the following address : 5emes rencontres de l &#x27; adl universite paris 7 - denis diderot ufr de linguistique - case 7003 tour centrale , piece 911 2 , place jussieu 75251 paris cedex 05 accepted speakers will be notified by the program committee in early november . the meeting will be free of charge . furthermore , we will try to arrange accommodation for speakers . for further information , join us at http : / / www . linguist . jussieu . fr / ~ leglise / adlp7 / adlp7 . htm or at cabredo @ ccr . jussieu . fr . program committee : nicolas ballier , sabrina bendjaballah , patricia cabredo hofherr , emmanuelle canut , pierre jalenques , isabelle leglise , helene le guillou de penanros ( coordination ) , tobias scheer , kim stroumza . abstract deadline : october 15th , 1998 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - appel a communications cinquiemes rencontres de l &#x27; atelier des doctorants de linguistique de l &#x27; universite paris 7 4 - 5 decembre 1998 universite de paris 7 - denis diderot structure creee et geree par des doctorants , l &#x27; atelier des doctorants de linguistique ( a . d . l . ) de paris 7 , avec le soutien de son ecole doctorale , a pour objectif de favoriser les echanges entre etudiants travaillant dans des domaines et dans des cadres theoriques differents . dans cette optique , il organise pour la cinquieme annee consecutive des rencontres , occasion pour de jeunes linguistes de presenter leurs travaux et de confronter leurs points de vues a travers : * des presentations dans des domaines varies de la linguistique * des ateliers-debats autour de themes transversaux * des pauses conviviales laissant le temps aux discussions la particularite de ces rencontres est leur caractere etudiant : organisation , comite de lecture et intervenants . les communications se situeront dans les domaines suivants : histoire des idees linguistiques , lexicologie , linguistique et informatique , morphologie , phonetique , phonologie , pragmatique linguistique , psycholinguistique , semantique , sociolinguistique et syntaxe . les etudiants interesses enverront un resume de 3 pages avant le 15 octobre 1998 , comprenant : une explicitation de leurs presupposes theoriques , les hypotheses , exemples et resultats exposes lors de la presentation . ce resume est a soumettre , si possible par email en format rtf a : sabrina . bendjaballah @ linguist . jussieu . fr ( format macintosh ) patricia . cabredo - hofherr @ linguist . jussieu . fr ( format pc ) ou a adresser , en 3 exemplaires anonymes accompagnes d &#x27; une fiche personnalisee ( nom , universite de rattachement , adresse personnelle et professionnelle , telephone , email , titre de la communication ) a l &#x27; adresse suivante : 5emes rencontres de l &#x27; adl universite paris 7 - denis diderot ufr de linguistique - case 7003 tour centrale , piece 911 2 , place jussieu 75251 paris cedex 05 l &#x27; acceptation des communications sera notifiee par le comite de lecture debut novembre . la participation a ces rencontres est gratuite . nous essaierons , de plus , de mettre en place des possibilites d &#x27; hebergement . les personnes souhaitant des renseignements complementaires peuvent nous contacter a la meme adresse ou par email , ou www : http : / / www . linguist . jussieu . fr / ~ leglise / adlp7 / adlp7 . htm organisation : nicolas ballier , sabrina bendjaballah , patricia cabredo hofherr , emmanuelle canut , pierre jalenques , isabelle leglise , helene le guillou de penanros ( coordination ) , tobias scheer , kim stroumza . date limite pour les resumes : 15 octobre 1998
</pre>

## Record 002592

**Label:** `benign`

<pre>
&gt;&gt;&gt;&gt;&gt; &quot;K&quot; == Kragen Sitaker  writes:    K&gt; Planning battle tactics; for this reason, the intelligence
    K&gt; press reports, spy satellites have had 1-meter resolution for
    K&gt; many years.The military already have these spy satellites; they are basically
Hubble pointed the other way, so I doubt they will be a big enough
customer of this service to justify a next-generation wireless
network rollout for the rest of us.    K&gt; Finding an individual vehicle in a city might occasionally be
    K&gt; possible with 1-m images and might occasionally also be worth
    K&gt; the money.My car is only just over 1.5 meters across and maybe 3 meters long, so
that means roughly six pixels total surface area.  You might find a
16-wheeler this way, but how often do people misplace a 16-wheeler
such that it is _that_ important to get old images of the terrain?
Since they can&#x27;t send up aircraft to update images in realtime every
time, how is this different from just releasing the map on DVDs?  Why
wireless?I thought of the common problem of lost prize cattle, but there again,
will there really be business-case for creating a hi-res map of
wyoming on the fly instead of just doing what they do now and hiring a
helicopter for a few hours?    K&gt; For small areas you have legitimate access to, it&#x27;s probably
    K&gt; cheaper to go there with a digital camera and a GPS and take
    K&gt; some snapshots from ground level.  Aerial photos might be
    K&gt; cheaper for large areas, areas where you&#x27;re not allowed --- or,
    K&gt; perhaps, physically able --- to go, and cases where you don&#x27;t
    K&gt; have time to send a ground guy around the whole area.I can see lower-res being useful for Geologists, but considering their
points of interest change only a few times every few million years,
there&#x27;s not much need to be wireless based on up-to-the-minute data.
I expect most geologists travel with a laptop perfectly capable of DVD
playback, and I also expect the most interesting geology is in regions
where the wireless ain&#x27;t going to go ;)I don&#x27;t mean to nit-pick, it&#x27;s just that I&#x27;m curious as to (a) the
need for this product that justifies the extreme cost and (b) how we&#x27;d
justify the ubiquitous next-generation wireless network that this
product postulates when we /still/ can&#x27;t find the killer app for 3G.-- 
Gary Lawrence Murphy  TeleDynamics Communications Inc
 Business Advantage through Community Software : http://www.teledyn.com
&quot;Computers are useless.  They can only give you answers.&quot;(Pablo Picasso)

</pre>

## Record 002593

**Label:** `benign`

<pre>
california 6 / 13 executive summary - cpuc rules that socal must pay 15 % of debt to qfs ( approximately $ 50 million ) - ruling heightens likelihood of voluntary bankruptcy filing by socal - voluntary filing further heightened by successful ring - fencing by eix parent - bankruptcy judge firm in support for qfs report 1 . socal loses cpuc ruling , but retains appeal option as you may have seen , bloomberg reported that the cpuc voted 5 - 0 to force socal to make 15 % of its payments owed to alternative energy producers in california . cpuc rules allow 30 days to appeal its rulings , leaving a window open for socal to buy more time . 2 . voluntary filing in ? with regard to a socal bankruptcy filing , the key now is how socal &#x27; s board feels about progress rather than deadlines with creditors . in other words , sources believe that a voluntary filing is more likely than an involuntary filing . a continuing lack of progress on a bailout and an increase in the number of liens filed against socal is more likely to make the socal board want to file for bankrutpcy voluntarily . the recent ring - fencing by edison international reflects their need to pay off cross - default risk and to cut ties in their bank facility between the parent company and lines of credit helds by socal . in and of outself , it does not necessarily signal an imminent filing . 3 . involuntary out ? sources indicate that the unsecured financial creditors are not considering a filing against socal . this is because the financial creditors believe that they would still be worse off in bankruptcy . sources report that in creditor discussions , there has not been talk of the debt holders not being paid . &quot; people have talked about screwing the generators and everyone else , but not the debt holders , &quot; a source commented . the qfs are unlikely to file against socal because they have fairly good contracts in place . also , they receive high capacity fees in the summer ( these fees vary seasonally and are distinct from generating fees ) . these capacity fees are calculated on a rolling , 4 - year basis and will be re - calculated next year . the qfs want this summer included in the recalculation , incentivizing them to keep their contracts in place . 4 . montali supporting qfs judge montali , by his recent rulings , is sending a signal that he is concerned for the qfs and is sensitive to their hardships . he is trying to help them through his rulings . for example , as long as qfs remain on line , those who petition can receive additional payments from pg &amp; e . over a 4 - month period , these payments equal 20 % of the qfs &#x27; pre - petition claims . this provides the qfs incentive to remain connected to pg &amp; e . 5 . ge looking to restructure generating capacity financing general electric is reportedly &quot; deeply concerned &quot; about the stability of financing generating capacity in the us . ( ge has over 70 % of the gas turbine market . ) ge is reportedly trying to keep its margins down and is not raising its prices due to concerns about instability . sources believe that a very significant percentage of generating capacity financing will have to be restrucured in five years .
</pre>

## Record 002594

**Label:** `benign`

<pre>
This is a semi-followup on my previous question. I am running razor-check
through a sendmail milter (smrazor http://www.sapros.com/smrazor/ ) and have
set up my milter timeouts to 20sec connect and 30 sec response. The problem
is that there is another timeout setting for razor-check that I am unable to
locate. My razor-agent.log is now getting filled with :check[6149]: [ 3] Timed out (15 sec) while reading from honor.cloudmark.com.So the question is, is there a razor-agent.conf file setting to increase
this timeout value? I have this problem on 2 different servers now (as
apparently ubik.cloudmark and apt.cloudmark are refusing connections) ......Sven-------------------------------------------------------
This sf.net email is sponsored by:ThinkGeek
Welcome to geek heaven.
http://thinkgeek.com/sf
_______________________________________________
Razor-users mailing list
Razor-users@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/razor-users

</pre>

## Record 002595

**Label:** `benign`

<pre>

Gotta wonder what the GPG config stuff in ~/.exmh/exmh-defaults looks 
like.  Also gotta wonder what the message headers in the offending 
message are saying to nmh/exmh.  My set-up works perfectly.  That is, 
I get a pop-up window to enter my passphrase into, and when I type it 
correctly, the message display changes from a prompt to click to 
decrypt to the message content.TTFN....On 11 September 2002 at 12:17, Brent Welch  wrote:Hmm - I&#x27;m cc&#x27;ing the exmh-workers list, because I really don&#x27;t know
much about the various PGP interfaces.  I think there has been some
talk about &quot;issues&quot; with the latest version of gpg.&gt;&gt;&gt;Hacksaw said:
 &gt; version 2.5 08/15/2002
 &gt; Linux habitrail.home.fools-errant.com 2.4.7-10smp #1 SMP Thu Sep 6 17:09:31
 &gt; EDT 2001 i686 unknown
 &gt; Tk 8.3 Tcl 8.3
 &gt; 
 &gt; It&#x27;s not clear to me this is a bug with exmh per se, but it&#x27;s
 &gt; something that manifests through exmh, so I figured asking you
 &gt; might help me track it down.
 &gt;
 &gt; When I receive a gpg encrypted message, and it asks me for a
 &gt; passphrase, it first tries to ask me via the tty under which
 &gt; exmh is running. It tells me my passphrase is incorrect every
 &gt; time, at which point exmh offers me the line in the message
 &gt; about decrypting. I click the line and it offers me the dialog
 &gt; box, and tells me the passphrase is correct, and shows me the
 &gt; decrypted message.
 &gt; 
 &gt; Any ideas on that?
 &gt; -- 
 &gt; Honour necessity.
 &gt; http://www.hacksaw.org -- http://www.privatecircus.com -- KB1FVD_______________________________________________
Exmh-workers mailing list
Exmh-workers@redhat.com
https://listman.redhat.com/mailman/listinfo/exmh-workers

</pre>

## Record 002596

**Label:** `benign`

<pre>
So then, Guido van Rossum  is all like:&gt; Maybe.  I batch messages using fetchmail (don&#x27;t ask why), and adding
&gt; .4 seconds per message for a batch of 50 (not untypical) feels like a
&gt; real wait to me...Yeesh.  Sounds like what you need is something to kick up once and score
an entire mailbox.Wait a second...  So *that&#x27;s* why you wanted -u.If you can spare the memory, you might get better performance in this
case using the pickle store, since it only has to go to disk once (but
boy, does it ever go to disk!)  I can&#x27;t think of anything obvious to
speed things up once it&#x27;s all loaded into memory, though.  That&#x27;s
profiler territory, and profiling is exactly the kind of optimization
I just said I wasn&#x27;t going to do :)Neale

</pre>

## Record 002597

**Label:** `benign`

<pre>
had conf calls with godfrey , lamb and mitchell on indian mesa 2 . i have a quick meeting with legal on interpreting the contract ambiguity re curtailment this morning and can fill you in on all those discussions shortly . bbb + / bbb - issue needs another followup today and hopefully can be put away . also , re the cashflow from canada . suspicion is approx 40 % is due from ena to ecc so it might get washed out in the consolidated ea reporting . wes &#x27; s team comparing ecc &#x27; s proj financials to what was included for ecc in the current estimate . - - - - - - - - - - - - - - - - - - - - - - - - - - sent from my blackberry wireless handheld ( www . blackberry . net )
</pre>

## Record 002598

**Label:** `benign`

<pre>
erisk iconference 4 / 11 / 2001 please save this e - mail . it contains important information about your event . thank you for registering for practical considerations in measuring economic capital , scheduled for wednesday , april 11 th , 2001 at 12 noon eastern / 5 p . m . london time . click this link to visit the erisk . com homepage : http : / / www . erisk . com erisk iconference instructions : 1 . dial 1 - 877 - 864 - 3651 ( u . s . ) or + 1 - 973 - 341 - 3037 ( international ) to listen to the audio for this program . audio is available by telephone only . 2 . when prompted , enter the confirmation code 105764 , followed by the &quot; # &quot; key . music will play until the conference begins . 3 . join the web - based portion of the program to see slides , participate in polls and ask questions . - open netscape or internet explorer 3 . 0 or higher . - enter the following web address : http : / / www . communicast . com / login 4 . fill out the form on this page and enter the following confirmation number : 105764 . 5 . click the &quot; communicast now &quot; button . in a few moments you will be placed in the erisk iconference . communicast system requirements : - communicast requires the ability to run java applets . - netscape or internet explorer browsers 3 . 0 or higher . if this is your first communicast event , you may wish to test your computer . visit http : / / www . communicast . com / login at any time and click the &quot; test &quot; button at the bottom of the page . for this conference , you may skip the last three tests relating to streaming audio . you will not need realplayer to participate in this conference . if you require further assistance , contact support @ communicast . com .
</pre>

## Record 002599

**Label:** `benign`

<pre>
pdci de - rate market notification : ( 1240 hr ) after the day - ahead market closed , pdci n - s ttc has been changed from 2327 mw to 1956 mw starting hel 3 for operating day 06 / 19 / 01 . this is due to celilo converter # 1 . etr is scheduled at 06 / 19 / 01 hel 6 . inquiries please call ( 916 ) 351 - 4409 . for hel 3 through hel 6 curtailments will be handled pro rata with no settlement impacts . please address real - time operational inquiries to the real - time scheduling desk at ( 916 ) 351 - 2493 , or ( 916 ) 351 - 4409 .
</pre>

## Record 002600

**Label:** `benign`

<pre>
copano changes - - - - - - - - - - - - - - - - - - - - - - forwarded by ami chokshi / corp / enron on 10 / 06 / 2000 10 : 37 am - - - - - - - - - - - - - - - - - - - - - - - - - - - troy _ a _ benoit @ reliantenergy . com on 10 / 06 / 2000 10 : 23 : 31 am to : &quot; ami chokshi &quot; cc : subject : copano changes ( see attached file : hpl - oct . xls ) - hpl - oct . xls
</pre>

