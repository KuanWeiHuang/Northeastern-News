import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';

const News1_CoronavirusSymptoms_Screen = ({ navigation }) => {
    //from web:https://sf.eater.com/2020/3/17/21182514/bay-area-chefs-response-shelter-in-place-takeout-delivery-covid-19-coronavirus-lockdown
    const date = "Mar 17, 2020";
    const label = "Health News";
    const titleCorona = "‘This Is Like Armageddon’: Bay Area Chefs Respond to the Region-Wide Lockdown";
    const photoAuthor = "Photo by Justin Sullivan/Getty Images";
    const content = "For more than a week now, Bay Area restaurants have been adjusting their service models, removing tables from their dining " +
        "rooms, and, in many cases, closing their doors entirely, as the region adapts to the challenges posed by the ongoing coronavirus pandemic. " +
        "Yesterday, the other hammer dropped: SF mayor London Breed and other officials across six Bay Area counties announced a shelter-in-place order " +
        "that called on residents of San Francisco, Santa Clara, San Mateo, Marin, Contra Costa and Alameda counties to stay at home for all but “essential " +
        "needs” for the next three weeks, until April 7. \n\nThe news sent shockwaves across the region and in the local restaurant industry in particular, " +
        "as the order banned restaurants from allowing customers to dine in, forcing them to either pivot to takeout- and delivery-only service or else close " +
        "their doors altogether.\n\n“This is like armageddon,” George Chen, the chef-owner of Chinatown’s massive, $20 million China Live complex, says. “It’s " +
        "like a bomb went off and we don’t feel it yet, but it’s happened.”\n\nThe one silver lining was that restaurants would still be allowed to carry on with " +
        "their takeout and delivery business, but for many restaurants, even that caveat felt like the flimsiest of life rafts. At many dining establishments, the " +
        "announcement was the impetus for massive and immediate layoffs, as chefs worked out the brutal math of what pivoting to a stripped-down, takeout-only model " +
        "would entail. At her Oakland soul food restaurant Brown Sugar Kitchen, Tanya Holland laid off all of her hourly workers, going from a staff of 50 to " +
        "just a core team of three salaried employees. In San Francisco, Chen made similarly drastic cuts at China Live, slashing a 200-employee workforce down " +
        "to around 20. Prubechu, the Mission’s Guamanian hot spot, went from a staff of 20 to just five salaried management-level employees who all took pay cuts, " +
        "co-owner Shawn Camacho said.\n\nThe chefs all said the moves were necessary to keep their businesses from going under and also to allow the laid-off workers " +
        "to apply for unemployment benefits. The hope, Chen says, is to be able to hire all of those workers back at the end of the coronavirus outbreak. " +
        "At Brown Sugar Kitchen, in addition to offering a streamlined to-go menu, Holland says she plans on offering bulk items for people stocking up their " +
        "freezers and pantries — frozen biscuits or tubs of frozen gumbo, for instance, or cornbread mix. At the new, skeletal version of Prubechu, Camacho " +
        "himself will likely be out on the roads making running food to customers, in lieu of relying on the delivery apps.\n\nHina Yakitori, NoPa’s upscale, " +
        "omakase-style chicken skewer spot, had already closed temporarily before yesterday’s announcement, but for chef and co-owner Tommy Cleary, knowing " +
        "that the shutdown was going to extend beyond a week or two set off a new wave of worries. In a text, Cleary wrote, “The whole thing is surreal. I’m " +
        "looking around for cameras like I’m on the Truman Show or some apocalyptic virus movie.” Now, he’s trying to figure out if there’s some kind of " +
        "delivery or takeout model that makes sense for his restaurant: “People depend on Hina for their livelihood, and so we have to make something happen,” " +
        "he wrote. “I wish there was an easy solution. I wish I could help everyone without worry.”\n\nIn Chinatown, whose businesses were disproportionately " +
        "impacted by the initial wave of coronavirus news, it’s been a slow several weeks ever since the end of the Lunar New Year festivities, says Eric Cheung, " +
        "co-owner of Hing Lung Meat Company, the neighborhood’s preeminent Cantonese meat market and barbecue spot, which has seen a drop in business of between " +
        "30 to 50 percent in recent weeks. But Cheung says that even as tourists have stayed away, Chinatown’s own residents have continued frequenting the local " +
        "businesses — in fact, he says, after the mayor’s announcement yesterday afternoon, the shop was hit by a wave of panic buyers stocking up on both raw and " +
        "roasted meats. “I think we’ll be okay,” Cheung tells Eater. “We are an essential business. We can keep our doors open.” Which isn’t to say he won’t adapt: " +
        "Hing Lung was already a takeout-only business, but now, for the first time, Cheung has signed up for one of the delivery apps — Uber Eats — and picked a " +
        "new name for the delivery side of the business: Go Duck Yourself.\n\nMeanwhile, for the Bay Area’s newest, buzziest restaurants, yesterday’s “shelter in " +
        "place” order — coupled with the past several days of steadily intensifying coronavirus news — had chefs feeling a sense of whiplash. Reem Assil says that " +
        "when the new Mission location of her Arab bakery, Reem’s, opened last week, right in the middle of the pandemic, it was immediately met with lines out the " +
        "door — a mixed blessing of sorts: “Having crowds right now in a time of fear of crowds does not feel very good.” Now, like everyone else, Assil is shifting " +
        "over to delivery and takeout only, with very limited hours, at both of her restaurants. For Oakland’s Sobre Mesa, an Afro-Latino tapas restaurant and " +
        "cocktail lounge that had its splashy grand opening just two weeks ago, the shift was even more dramatic: In the morning, chef-owner Nelson German had " +
        "still been planning to make a go of it with takeout supplementing a limited amount of dine-in business — but when news of the shelter-in-place order " +
        "landed in the afternoon, he decided to shut the whole operation down for the time being.\n\nAs the dust settles from yesterday’s lockdown order, " +
        "many chefs pushed for further government intervention to help save a local restaurant industry that, without some kind of major bailout, seems unlikely " +
        "to recover from the widespread closures it’s already seeing — even ones designated, optimistically, as “temporary” for now. As China Live’s George " +
        "Chen put it, “This is unprecedented. This is worse than 9/11, worse than the financial crisis, worse than pretty much anything I’ve been through.”\n\n" +
        "Chefs in various cities are pushing for things like rent abatement to help keep their businesses afloat. Nigel Jones, chef and co-owner of Kingston 11, " +
        "a prominent Jamaican restaurant in Uptown Oakland, says, “This is not an individual business problem. This is mandated to us, so we’ll be losing — all of " +
        "us.” So what help will city officials in Oakland, San Francisco, and beyond be able to offer? “Survival of the fittest is not going to work here,” " +
        "Jones says. “It’s going to destroy our community.”\n\nBrandon Jew, chef and owner of Michelin-starred Mister Jiu’s and Moongate Lounge (both now closed) " +
        "and Mamahuhu (which remains open for delivery orders, at least for now), says he’s started meeting with what he describes as a growing coalition of local" +
        " restaurant owners who are sharing resources on how best to support their employees and plan for both closure and, eventually, reopening. Some of the " +
        "conversations, Jew says, have been around things like putting pressure on the insurance companies: “My insurance, the small print, doesn’t really cover " +
        "anything that has to do with a virus,” he says, whether it in terms of paying for lost wages or for product that he’ll no longer be able to use.\n\n" +
        "“I’m super sad,” Jew told Eater SF while en route to Mister Jiu’s to meet with workers and to give each of them a small care package of the groceries " +
        "and pantry supplies the restaurant will no longer be able to serve to customers. “[Mister Jiu’s] took almost took three years to open. To have it " +
        "close like this — you don’t really think about having to close and reopen a restaurant in its lifetime like this.”"

    // AvenirNext-UltraLightItalic
    // Baskerville-Italic
    // HelveticaNeue-ThinItalic
    return (
        <View style={styles.viewStyle}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.headStyle}>{date}</Text>
                    <Text style={{ fontFamily: 'HelveticaNeue-ThinItalic', marginBottom: 10 }}>{label}</Text>
                </View>
                <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#a9a9a9', }} />
                <Text style={styles.titleStyle}>{titleCorona}</Text>
                <Text style={styles.subTitleStyle}>by Luke Tsai</Text>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/news3.png')}
                />
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', }}>
                    <Text style={styles.photoAuthorStyle}>{photoAuthor}</Text>
                </View>
                <Text style={styles.contentStyle}>{content}</Text>
            </ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.iconsViewStyle}>
                    <TouchableOpacity>
                        <Entypo name='heart-outlined' size={25} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name='bookmark-border' size={25} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='share' size={22} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headStyle: {
        fontSize: 18,
        fontFamily: 'Arial Rounded MT Bold',
        color: '#373737',
        alignContent: 'space-between',
    },
    subTitleStyle: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: '#373737',
        marginTop: 6,
        marginBottom: 11
    },
    titleStyle: {
        fontSize: 16,
        fontFamily: 'ArialHebrew-Bold',
        marginTop: 12,
        color: '#373737',
    },

    imageStyle: {
        height: 220,
        width: 375,
        borderRadius: 10,
        marginBottom: 5,
    },
    viewStyle: {
        height: 750,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    photoAuthorStyle: {
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#373737',
        marginBottom: 8,
    },
    contentStyle: {
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#373737',
        marginBottom: 13,
    },
    iconsViewStyle: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    iconStyle: {
        marginHorizontal: 5,
    }
});

export default News1_CoronavirusSymptoms_Screen;