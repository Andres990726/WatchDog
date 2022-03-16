package co.unicauca.domain.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.unicauca.access.dao.IUserDAO;
import co.unicauca.domain.dto.CredentialDTO;
import co.unicauca.domain.dto.UserDTO;
import co.unicauca.domain.model.User;
import co.unicauca.utilities.MHelpers;

@Component
public class UserService implements IUserService{

	@Autowired
	private IUserDAO userDAO;
	
	@Override
	public List<UserDTO> findAll() {
		
		List<UserDTO> usersdto= new ArrayList<>();
		Iterable<User> users=userDAO.findAll();
		
		for(User user : users) {
			UserDTO userdto =  MHelpers.modelMapper().map(user, UserDTO.class);
			usersdto.add(userdto);
		}
		return usersdto;
	}

	@Override
	public UserDTO verifyUser(Object credential) throws Exception {
		UserDTO us= new UserDTO();
		CredentialDTO objCredential= MHelpers.modelMapper().map(credential, CredentialDTO.class);
		Optional<User> user = userDAO.findByEmail(objCredential.getEmail());
		System.out.println(user.get().getEmail());
		if(user.isPresent()) {
			if(user.get().getPassword().equals(objCredential.getPassword())) {
				us= MHelpers.modelMapper().map(user.get(), UserDTO.class);
				System.out.println(us.getRole());
				return us;
			}
		}
			
		
		throw new Exception();
	}

	
	@Override
	public void deleteUser(int id) {
		userDAO.deleteById(id);
		
	}

	@Override
	public boolean addUser(Object user) throws Exception{

		User user3 = userDAO.save(MHelpers.modelMapper().map(user, User.class));
		if(user3 !=null)
			return true;
	
	throw new Exception();
	}
	public void updateUser(Object user) {
		User userAux=MHelpers.modelMapper().map(user, User.class);
		Optional<User> updateUser=userDAO.findById(userAux.getId());
		if(updateUser.isPresent()) {
			User uUser=updateUser.get();
			uUser.setRole(userAux.getRole());
			uUser.setLastname(userAux.getLastname());
			uUser.setName(userAux.getName());
			uUser.setPassword(userAux.getPassword());
			uUser.setUsername(userAux.getUsername());
			userDAO.save(uUser);
		}
	}

	@Override
	public UserDTO findUser(int id) {
		Optional<User> user= userDAO.findById(id);
		return MHelpers.modelMapper().map(user.get(), UserDTO.class);
	}
	
	
	
}
