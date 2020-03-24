import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';

const News3_NEU_MovingToOnlineTeaching = () => {
    //from: https://news.northeastern.edu/2020/03/13/northeastern-will-move-to-online-teaching-for-students-at-london-and-charlotte-campuses/
    const title = "NORTHEASTERN WILL MOVE TO ONLINE TEACHING FOR STUDENTS AT LONDON, VANCOUVER, AND CHARLOTTE CAMPUSES";
    const photoAuthor = "Photo by Suzanne Plunkett for Northeastern University"
    const content1 = "In accordance with the guidance of public health authorities in the United Kingdom, Canada, and North " +
        "Carolina, Northeastern University will be moving to online and remote teaching for students at its campuses in London, " +
        "Vancouver, and Charlotte. \n\n" +
        "The move to online course delivery at both campuses will begin Monday, March 16. Further decisions will be made " +
        "according to public health agency guidelines."
    const content2 = "The 220 students enrolled at NCH at Northeastern will move to online learning.\n\n" +
        "“Our key objectives during this period continue to be to safeguard the health and well-being of our students, " +
        "staff, and the broader community while continuing to deliver our educational experience and other services to our " +
        "students,” said Rob Farquharson, chief executive officer of NCH at Northeastern.\n\n"+"The college’s visa "
        +"compliance officer will contact students who are studying in the U.K. on a Tier-4 visa to provide them with guidance."+
        "Northeastern’s 80 staff and faculty members in London will be given the option to work from home or the college.\n\n"+
        "While the college will remain open to staff and students for now, all teaching, including lectures, seminars, and "+
        "tutorials, will be delivered via Zoom."
    const content3="Northeastern’s campus in Vancouver remains open for use by students and faculty, but all on-campus courses "+
    "will move to online learning. \n\n"+"“The wellbeing of you, our students, faculty, and staff, remains the critical priority "+
    "as we work towards business and educational continuity,” Steve Eccles, chief executive officer and regional dean, wrote "+
    "in a message sent on Sunday. \n\n"+"The university is also encouraging faculty and staff to work from home, wherever "+
    "possible, and for those in high-risk groups to avoid gathering in large groups."
    const content4="Courses—including laboratories—will move online for students enrolled at the university’s Charlotte campus. \n\n"+
    "Clinicals for the approximately 100 students in the Accelerated Bachelor of Science in Nursing program will remain scheduled as "+
    "usual until further notice. Faculty will be in touch directly with students whose schedules may be affected. Faculty "+
    "will also communicate directly about online exams. \n\n"+
    "“We strive to provide a safe learning environment for our students, faculty, and staff. Delivering education without "+
    "interruption is our focus,” said Cheryl Richards, chief executive officer and dean of the Charlotte campus. “However, "+
    "this week, state and local officials elevated the need for our community to help mitigate the spread of COVID-19, "+
    "and we are committed to follow that guidance. As always, we remain vigilant in doing what is necessary to keep our "+
    "campus safe.”\n\n"+"“Fortunately, with the availability of online resources and technology readiness, we are confident "+
    "that this will be a smooth transition for our campus community,” Richards said. \n\n"+
    "Northeastern acquired New College of the Humanities, a college in central London founded in 2011 by philosopher "+
    "Anthony Grayling, in February of last year, and opened the campus in Vancouver in August. The university launched "+
    "its campus in Charlotte in 2011. \n\n"+
    "They are part of Northeastern’s global university system, which also includes campuses in Seattle, Toronto, "+
    "the Bay Area, and Massachusetts campuses in Boston, Nahant, and Burlington. "+"Northeastern urges students to "+
    "contact their primary care clinicians If symptoms of COVID-19 develop at any point, regardless of recent travel "+
    "destinations, and faculty and staff to contact their appropriate healthcare providers. (Medical resources available "+
    "near each of Northeastern’s campuses can be found here.) Anyone who shows symptoms should self-isolate as soon "+
    "as possible.\n\n"+"Northeastern University updates to faculty, staff, and students will be issued via email and "+
    "posted on the dedicated COVID-19 website. "

    return (
        <View style={styles.viewStyle}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.headStyle}>March 13, 2020</Text>
                    <Text style={{ fontFamily: 'HelveticaNeue-ThinItalic', marginBottom: 10 }}>Health News</Text>
                </View>
                <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#a9a9a9', }} />
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subTitleStyle}>by Khalida Sarwari, Molly Callahan and Laura Castañón</Text>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/news2.jpg')}
                />
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', }}>
                    <Text style={styles.photoAuthorStyle}>{photoAuthor}</Text>
                </View>
                <View>
                    <Text style={styles.contentStyle}>{content1}</Text>
                    <Text style={{ fontFamily: 'Arial Rounded MT Bold' }}>London{'\n'}</Text>
                    <Text style={styles.contentStyle}>{content2}</Text>
                    <Text style={{ fontFamily: 'Arial Rounded MT Bold' }}>Vancouver{'\n'}</Text>
                    <Text style={styles.contentStyle}>{content3}</Text>
                    <Text style={{ fontFamily: 'Arial Rounded MT Bold' }}>Charlotte{'\n'}</Text>
                    <Text style={styles.contentStyle}>{content4}</Text>
                </View>
            </ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.iconsViewStyle}>
                    <TouchableOpacity>
                        <Entypo name='heart-outlined' size={25} style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name='bookmark-border' size={25} style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='share' size={22} style={{ marginHorizontal: 5 }} />
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

export default News3_NEU_MovingToOnlineTeaching;