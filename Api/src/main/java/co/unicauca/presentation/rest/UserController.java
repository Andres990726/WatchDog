package co.unicauca.presentation.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	public boolean addUser(@RequestBody Object user) throws Exception {
		return userService.addUser(user);
	}
	
	@GetMapping(value = "/returnAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> returnAll(){
		return ResponseEntity.ok(userService.findAll());
	}
	
	@PostMapping(value = "/verifyUser", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> findUserName(@RequestBody Object credential) throws Exception{
		return ResponseEntity.ok(userService.verifyUser(credential));
	}
	
	@PostMapping("/updateUser")
	public void updateUser(@RequestBody Object user) {
		userService.updateUser(user);
	}
}
