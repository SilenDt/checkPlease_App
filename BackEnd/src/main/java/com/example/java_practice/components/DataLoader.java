package com.example.java_practice.components;
import com.example.java_practice.models.*;
import com.example.java_practice.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader  implements  ApplicationRunner{

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JobTypeRepository jobTitleRepository;

    @Autowired
    TipOutTypeRepository tipOutTypeRepository;

//    @Autowired
//    BenefitRepository benefitRepository;

    public DataLoader () {}

    public void run(ApplicationArguments args){
        reviewRepository.deleteAll();
        userRepository.deleteAll();
        companyRepository.deleteAll();
        jobTitleRepository.deleteAll();
        tipOutTypeRepository.deleteAll();

        JobType server = new JobType("Server", 10);
        jobTitleRepository.save(server);
        JobType bartender = new JobType("Bartender", 10);
        jobTitleRepository.save(bartender);
        JobType cook = new JobType("Cook", 12);
        jobTitleRepository.save(cook);
        JobType dishwasher = new JobType("Dishwasher", 7);
        jobTitleRepository.save(dishwasher);
        JobType busser = new JobType("Busser", 7);
        jobTitleRepository.save(busser);



        User user1 = new User("gdhd747474747474","David", "Smith", "Edinburgh", "TGI Fridays", "Edinburgh", "davie@email.com", bartender);
        userRepository.save(user1);
        User user2 = new User("gdhdhjjd8848484848","Jane","Lee", "Stirling", "Burger King", "Stirling","jane@email.com", server);
        userRepository.save(user2);
        User user3 = new User("gdhdhjjd8848484999","Sam","Smith", "London", "LongHorn", "London","samsmith@email.com", busser);
        userRepository.save(user3);
        User user4 = new User("gdhdhjjd8812344999","Girl","Sue", "London", "papaJohns", "Glasgow","girl@email.com", busser);
        userRepository.save(user4);
        User user5 = new User("abjdhjjd8812344999","Betsy","Boopy", "Glasgow","polloLoco", "Glasgow","betsy@email.com", server);
        userRepository.save(user5);



        Company tgiFridays = new Company("TGI Fridays", "New York", "TGI Fridays is an American classic, known for its fast casual eats, from burgers and sandwiches to steaks and seafood", 5, "https://1000logos.net/wp-content/uploads/2020/09/TGI-Fridays-Logo-2004.jpg");
        companyRepository.save(tgiFridays);
        Company burgerKing = new Company("Burger King", "New York", "Fast-food burgers and fries", 3, "https://1000logos.net/wp-content/uploads/2016/10/Burger-King-logo-tumb.jpg");
        companyRepository.save(burgerKing);
        Company bonefishGrill = new Company("Bonefish Grill", "New York", "Bonefish Grill specializes in market-fresh fish from around the world, savory wood-grilled specialties and hand-crafted cocktails. The Bonefish experience is based on the premise of simplicity, consistency and a strong commitment to being incredible.", 3, "https://1000logos.net/wp-content/uploads/2020/07/Bonefish-Grill-Logo-tumb.jpg");
        companyRepository.save(bonefishGrill);
        Company hardRock = new Company("Hard Rock Cafe", "Boulder", "Rock ’n’ roll-themed chain with a high-energy vibe serving burgers & American classics. Chill out and enjoy your food surrounded by classic rock 'n' roll memorabilia", 5, "https://1000logos.net/wp-content/uploads/2021/12/Hard-Rock-Cafe-logo-tumb.jpg");
        companyRepository.save(hardRock);
        Company hooters = new Company("Hooters", "Boulder", "Menu includes hamburgers and other sandwiches, steaks, seafood entrees, appetizers, and our specialty, chicken wings. All served by our famous Hooter Girls", 2, "https://1000logos.net/wp-content/uploads/2022/01/Hooters-Logo-tumb.png");
        companyRepository.save(hooters);
        Company papaJohns = new Company("Papa John's", "Boulder", "Better ingredients, better pizza. A laid back atmosphere with a team that's here to meet all your pizza needs. Whether you like your crust original, thin, stuffed, or even our vegan butternut squash option, and all the toppings you can think of", 4, "https://1000logos.net/wp-content/uploads/2018/02/Papa-Johns-Logo-tumb.png");
        companyRepository.save(papaJohns);
        Company longHorn = new Company("LongHorn Steakhouse", "Springfield", "Fresh, never-frozen steaks grilled by our experts, with just the right seasoning, and no shortcuts. LongHorn Steakhouse has a Texan theme, with each restaurant decorated with oil paintings, photos, and selected Western memorabilia", 2, "https://1000logos.net/wp-content/uploads/2022/11/LongHorn-Steakhouse-Logo-tumb.png");
        companyRepository.save(longHorn);
        Company polloLoco = new Company("El Pollo Loco", "Springfield", "Famous citrus-marinated, fire-grilled chicken. Cooked slow. Served fast. Always cut-to-order", 4, "https://1000logos.net/wp-content/uploads/2020/09/El-Pollo-Loco-Logo-tumb.jpg");
        companyRepository.save(polloLoco);
        Company quiznos = new Company("Quiznos", "Springfield", "Quiznos is a chain designed for busy people who are looking for a high quality, freshly prepared alternative to traditional fast-food. Quiznos is the pioneer of the toasted sandwich, offering creative sandwiches and salads using premium ingredients", 3, "https://1000logos.net/wp-content/uploads/2020/09/Quiznos-Logo-tumb.jpg");
        companyRepository.save(quiznos);
        Company redLobster = new Company("Red Lobster", "San Francisco", "American casual dining restaurant chain specialising in sustainably-caught seafood and fish", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiBXeK9bFEfd86V4GeMSjAMWLm9-9Rzqjyw&usqp=CAU");
        companyRepository.save(redLobster);



        TipOutType totalTips = new TipOutType("A percentage of your total tips");
        tipOutTypeRepository.save(totalTips);
        TipOutType totalSales = new TipOutType("A percentage of your total sales");
        tipOutTypeRepository.save(totalSales);
        TipOutType fixedAmount = new TipOutType("A fixed amount");
        tipOutTypeRepository.save(fixedAmount);
        TipOutType discretion = new TipOutType("At your own discretion");
        tipOutTypeRepository.save(discretion);
        TipOutType na = new TipOutType("I do not tip out");
        tipOutTypeRepository.save(na);


        Review review1 = new Review("3-12-2023", "You get fed on your shift, which is nice", "The uniforms are so uncomfortable, and NOT good looking", tgiFridays, user1, cook, "yes", totalSales, 2.15, "n/a", 3.5);
        reviewRepository.save(review1);
        Review review2 = new Review("1-10-2023", "Decent tips", "Management are an absolute joke", burgerKing, user1, busser, "yes", discretion, 3.50, "", 5.0);
        reviewRepository.save(review2);
        Review review3 = new Review("2-17-2023", "Fries every day", "You come home absolutely stinkin' of fry", burgerKing, user2, dishwasher, "yes", totalTips, 7.25, "", 4.0);
        reviewRepository.save(review3);
        Review review4 = new Review("01-11-2020", "All the tacos you can eat", "no tips", polloLoco, user1, server, "no", na, 9.50, "fun environment, but not easy to get days off", 3.7);
        reviewRepository.save(review4);
        Review review5 = new Review("05-06-2022", "shifts are short", "scraping food off plates is really hard", bonefishGrill, user1, dishwasher, "no", na, 11.25, "not the best place to work but not the worst", 4.2);
        reviewRepository.save(review5);
        Review review6 = new Review("03-03-2032", "staff is really friendly", "management is hard to get along with", quiznos, user2, busser, "no", na, 8.50, "heavy lifting involved, everyone goes out after and hangs out", 4.5);
        reviewRepository.save(review6);
        Review review7 = new Review("01-28-2023", "really good tips", "really gross customers and low hourly pay", hooters, user1, server, "yes", totalSales, 2.15, "theres a lot to put up with but you can make good money", 4.0);
        reviewRepository.save(review7);
        Review review8 = new Review("08-30-2022", "we get breaks and bonuses", "corporate run restaurant so not much freedom to come up with your own recipes or specials. you have to stick with whats given to you", tgiFridays, user1, cook, "no", na, 13.25, "be ready to sweat if you take a job here", 4.0);
        reviewRepository.save(review8);
        Review review9 = new Review("1-10-2023", "Plenty of nice regulars, decent tips", "music is awful, gets to you after a while", tgiFridays, user2, server, "yes", totalSales, 3.0, "n/a", 4.0);
        reviewRepository.save(review9);
        Review review10 = new Review("03-10-2023", "Great staff team, really good atmosphere", " back of house were always super pushy about tipping out ", tgiFridays, user3, server, "yes", totalSales, 2.60, "n/a", 3.5);
        reviewRepository.save(review10);
        Review review11 = new Review("03-17-2023", "Easy work and generally got left to get on with it", "long shifts were a real drag when it was quiet", hooters, user4, busser, "no", na, 3.0, "n/a", 2.5);
        reviewRepository.save(review11);
        Review review12 = new Review("06-30-2022", "Had a great manager that actually seemed to care", "Pretty poor wage and never seemed to do that well on tips", tgiFridays, user5, server, "yes", totalSales, 2.40, "n/a", 3.0);
        reviewRepository.save(review12);
        Review review13 = new Review("10-25-2022", "Fun team to work with", "awful manager, sleazier than the customers", hooters, user2, busser, "no", na, 2.80, "wonder if they ever did fix the drains", 2.5);
        reviewRepository.save(review13);
        Review review14 = new Review("11-22-2022", "Customers were pretty generous", "back of house stank, something weird with the drains that they never sorted", hooters, user4, busser, "no", na, 2.85, "na", 3.5);
        reviewRepository.save(review14);
        Review review15 = new Review("05-10-2022", "not much but pay was decent", "hard graft, weekends were relentless", bonefishGrill, user3, dishwasher, "no", na, 9.25, "na", 4.2);
        reviewRepository.save(review15);



    }
}
