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

    @Autowired
    BenefitRepository benefitRepository;

    public DataLoader () {}

    public void run(ApplicationArguments args){
        reviewRepository.deleteAll();
        userRepository.deleteAll();
        companyRepository.deleteAll();
        jobTitleRepository.deleteAll();
        tipOutTypeRepository.deleteAll();
        benefitRepository.deleteAll();

        JobType server = new JobType("Server");
        jobTitleRepository.save(server);
        JobType bartender = new JobType("Bartender");
        jobTitleRepository.save(bartender);
        JobType cook = new JobType("Cook");
        jobTitleRepository.save(cook);
        JobType dishwasher = new JobType("Dishwasher");
        jobTitleRepository.save(dishwasher);
        JobType busser = new JobType("Busser");
        jobTitleRepository.save(busser);


        User user1 = new User("Davie", "Edinburgh", "TGI Fridays", "Edinburgh", bartender);
        userRepository.save(user1);
        User user2 = new User("Jane", "Stirling", "Burger King", "Stirling", server);
        userRepository.save(user2);

        Company company1 = new Company("TGI Fridays", "Edinburgh", "Burgers and stuff", 5);
        companyRepository.save(company1);
        Company company2 = new Company("Burger King", "Stirling", "More Burgers and frieds", 3);
        companyRepository.save(company2);

        TipOutType totalTips = new TipOutType("A percentage of your total tips");
        tipOutTypeRepository.save(totalTips);
        TipOutType totalSales = new TipOutType("A percentage of your total sales");
        tipOutTypeRepository.save(totalSales);
        TipOutType fixedAmount = new TipOutType("A fixed amount");
        tipOutTypeRepository.save(fixedAmount);
        TipOutType discretion = new TipOutType("At your own discretion");
        tipOutTypeRepository.save(discretion);
        TipOutType na = new TipOutType("I don't tip out");
        tipOutTypeRepository.save(na);

        Benefit staffMeal = new Benefit("Staff Meal");
        benefitRepository.save(staffMeal);
        Benefit employeeFoodDiscount = new Benefit("Employee Food Discount");
        benefitRepository.save(employeeFoodDiscount);
        Benefit fofDiscount = new Benefit("Friends and Family Discount");
        benefitRepository.save(fofDiscount);
        Benefit health = new Benefit("Health Insurance");
        benefitRepository.save(health);
        Benefit tips = new Benefit("Tips");
        benefitRepository.save(tips);
        Benefit none = new Benefit("I do not receive benefits");
        benefitRepository.save(none);

        Review review1 = new Review("12-12-2023", "Loved working there", company1, user1, cook, totalSales);
        reviewRepository.save(review1);
        Review review2 = new Review("12-12-2023", "Terrible working environment", company2, user1, busser, discretion);
        reviewRepository.save(review2);
        Review review3 = new Review("12-11-2023", "Pish", company2, user2, dishwasher, totalTips);
        reviewRepository.save(review3);



    }
}
