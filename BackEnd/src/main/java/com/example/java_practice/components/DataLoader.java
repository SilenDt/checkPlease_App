package com.example.java_practice.components;
import com.example.java_practice.models.Company;
import com.example.java_practice.models.JobType;
import com.example.java_practice.models.Review;
import com.example.java_practice.models.User;
import com.example.java_practice.repositories.CompanyRepository;
import com.example.java_practice.repositories.JobTypeRepository;
import com.example.java_practice.repositories.ReviewRepository;
import com.example.java_practice.repositories.UserRepository;
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

    public DataLoader (){};

    public void run(ApplicationArguments args){
        reviewRepository.deleteAll();
        userRepository.deleteAll();
        companyRepository.deleteAll();
        jobTitleRepository.deleteAll();

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

        Review review1 = new Review("12-12-2023", "Loved working there", company1, user1, cook);
        reviewRepository.save(review1);
        Review review2 = new Review("12-12-2023", "Terrible working environment", company2, user1, busser);
        reviewRepository.save(review2);
        Review review3 = new Review("12-11-2023", "Pish", company2, user2, dishwasher);
        reviewRepository.save(review3);



    }
}
