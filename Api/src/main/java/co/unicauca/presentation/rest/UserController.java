package co.unicauca.presentation.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.domain.service.IUserService;

@CrossOrigin("*")
@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private IUserService userService;
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody Object user) {
		userService.addUser(user);
	}
	
	@GetMapping(value = "/returnAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> returnAll(){
		return ResponseEntity.ok(userService.findAll());
	}
	
	@GetMapping(value = "/verifyUser/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> findUserName(@PathVariable("username") String username, @PathVariable("password") String password){
		return ResponseEntity.ok(userService.verifyUser(username, password));
	}
	
	@PostMapping("/updateUser")
	public void updateUser(@RequestBody Object user) {
		userService.updateUser(user);
	}
}
