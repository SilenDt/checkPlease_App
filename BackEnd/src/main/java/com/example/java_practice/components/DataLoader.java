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

//        Benefit staffMeal = new Benefit("Staff Meal");
//        benefitRepository.save(staffMeal);
//        Benefit employeeFoodDiscount = new Benefit("Employee Food Discount");
//        benefitRepository.save(employeeFoodDiscount);
//        Benefit fofDiscount = new Benefit("Friends and Family Discount");
//        benefitRepository.save(fofDiscount);
//        Benefit health = new Benefit("Health Insurance");
//        benefitRepository.save(health);
//        Benefit tips = new Benefit("Tips");
//        benefitRepository.save(tips);
//        Benefit none = new Benefit("I do not receive benefits");
//        benefitRepository.save(none);


        Review review1 = new Review("12-12-2023", "You get fed on your shift, which is nice", "The uniforms are so uncomfortable, and NOT good looking", tgiFridays, user1, cook, "yes", totalSales, 2.15, "n/a", 3.5);
        reviewRepository.save(review1);
        Review review2 = new Review("12-12-2023", "Decent tips", "Management are an absolute joke", burgerKing, user1, busser, "yes", discretion, 3.50, "", 5.0);
        reviewRepository.save(review2);
        Review review3 = new Review("12-11-2023", "Fries every day", "You come home absolutely stinkin' of fry", burgerKing, user2, dishwasher, "yes", totalTips, 7.25, "", 4.0);
        reviewRepository.save(review3);
        Review review4 = new Review("01-11-2020", "All the tacos you can eat", "no tips", polloLoco, user1, server, "no", na, 9.50, "fun environment, but not easy to get days off", 3.7);
        Review review5 = new Review("05-06-2022", "shifts are short", "scraping food off plates is really hard", bonefishGrill, user1, dishwasher, "no", na, 11.25, "not the best place to work but not the worst", 4.2);
        Review review6 = new Review("03-03-2032", "staff is really friendly", "management is hard to get along with", quiznos, user2, busser, "no", na, 8.50, "heavy lifting involved, everyone goes out after and hangs out", 4.5);
        Review review7 = new Review("01-28-2023", "really good tips", "really gross customers and low hourly pay", hooters, user1, server, "yes", totalSales, 2.15, "theres a lot to put up with but you can make good money", 4.0);
        Review review8 = new Review("08-30-2022", "we get breaks and bonuses", "corporate run restaurant so not much freedom to come up with your own recipes or specials. you have to stick with whats given to you", tgiFridays, user1, cook, "no", na, 13.25, "be ready to sweat if you take a job here", 4.0);


    }
}
