package edu.nus.microservice.auth_manager;

import edu.nus.microservice.auth_manager.config.RSAKeyRecord;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(RSAKeyRecord.class)
@SpringBootApplication
public class AuthManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthManagerApplication.class, args);
	}

}
