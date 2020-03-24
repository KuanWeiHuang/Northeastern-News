import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';

const News2_WorkingRemotely = () => {
    //from: https://news.northeastern.edu/2020/03/12/heres-how-companies-can-help-employees-working-remotely-in-light-of-the-covid-19-pandemic/
    const title = "COMPANIES CAN HELP EMPLOYEES WORKING REMOTELY DURING THE COVID-19 PANDEMIC";
    const photoAuthor = "Photo by Ruby Wallau/Northeastern University";
    const content = "In response to the rapid spread of COVID-19, more and more companies are requiring their employees to work from home or work remotely. " +
        "And while technological advances have made remote work faster and more accessible (multinational companies no longer need to rely upon fax machines to " +
        "send information back and forth), there are still potential obstacles for which managers should account, says Northeastern professor Barbara Larson.\n\n" +
        "Larson is an executive professor of management at Northeastern whose recent research has focused on the nuances of remote work. She also was the " +
        "international finance director of a company that had several subsidiaries in China during the country’s SARS outbreak in the early 2000s—so she has " +
        "personal experience with the decisions many company executives are now grappling with.\n\n" +
        "“To me, this is very familiar, and it comes down to mitigating risk,” she says. “Obviously your employees’ health and safety and wellbeing should come first.\n\n”" +
        "Requiring employees to work remotely, as companies including Amazon, Facebook, and Google (among others) have done, does bring about some logistical " +
        "challenges though. Larson says these challenges fall into two broad categories: task-oriented and social.\n\n" +
        "One of the biggest task-oriented challenges is how to communicate and share information when employees are no longer convened in the same office, Larson says.\n\n" +
        "“What people don’t necessarily realize until they go remote is how much they’ve relied upon being able to walk down the hall and ask a quick question, " +
        "or lean over a partition to compare notes,” she says.\n\n" +
        "A related task-oriented challenge is how best to enable employees to collaborate in real-time, Larson says.\n\n" +
        "In both cases, setting up systems well in advance is the key to success, she says. Instant messaging platforms such as Microsoft Teams, Slack, or Zoom, " +
        "that allow employees to chat with each other almost instantly are one way to work around these challenges; document-sharing platforms such as Dropbox, " +
        "Microsoft Teams, and Google services are another.\n\n" + "But working from home also creates a social challenge. It separates people from their coworkers " +
        "(for companies trying to mitigate the spread of COVID-19, this is the goal)—a shift that can create a sense of isolation for some people, Larson says.\n\n" +
        "“For a lot of people, it can be emotionally taxing because you’re not getting the interaction with coworkers that you normally do,” she says. “Although, " +
        "for people who are more introverted, this can be a dream.”\n\n" +
        "To mitigate the sense of isolation, some companies that have a large population of remote workers—often tech companies in which people can easily work " +
        "on a computer from anywhere—will schedule “virtual pizza parties,” Larson says. The company will have pizza delivered to its remote employees, and " +
        "everyone will join a video call, to simulate the experience of an in-person gathering.\n\n" +
        "It’s important for companies to build in time for the type of conversations that people organically have at work—but that aren’t about work, Larson says.\n\n" +
        "“At work, you’ll talk to your coworkers about their plans for the weekend, catch up on how their kids are doing—when you’re waiting to join a conference " +
        "call and your phone is on mute, those conversations just don’t happen as much,” she says. “You can end up feeling like a cog in a machine.”\n\n"

    return (
        <View style={styles.viewStyle}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.headStyle}>March 12, 2020</Text>
                    <Text style={{ fontFamily: 'HelveticaNeue-ThinItalic', marginBottom: 10 }}>Health News</Text>
                </View>
                <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#a9a9a9', }} />
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subTitleStyle}>by Molly Callahan</Text>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/news1.jpg')}
                />
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', }}>
                    <Text style={styles.photoAuthorStyle}>{photoAuthor}</Text>
                </View>
                <View>
                    <Text style={styles.contentStyle}>{content}</Text>
                </View>
            </ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.iconsViewStyle}>
                    <TouchableOpacity>
                        <Entypo name='heart-outlined' size={25} style={{marginHorizontal:5}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name='bookmark-border' size={25} style={{marginHorizontal:5}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='share' size={22} style={{marginHorizontal:5}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 750,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    headStyle: {
        fontSize: 18,
        fontFamily: 'Arial Rounded MT Bold',
        color: '#373737',
        alignContent: 'space-between',
    },
    titleStyle: {
        fontSize: 16,
        fontFamily: 'ArialHebrew-Bold',
        marginTop: 12,
        color: '#373737',
    },
    subTitleStyle: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: '#373737',
        marginTop: 6,
        marginBottom: 11
    },
    imageStyle: {
        height: 220,
        width: 375,
        borderRadius: 10,
        marginBottom: 5,
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
});

export default News2_WorkingRemotely;