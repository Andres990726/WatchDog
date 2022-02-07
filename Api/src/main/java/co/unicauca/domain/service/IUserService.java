package co.unicauca.domain.service;

import java.util.List;

import org.springframework.stereotype.Service;

import co.unicauca.domain.dto.UserDTO;
import co.unicauca.domain.model.User;

@Service
public interface IUserService {

	public boolean verifyUser(String username, String password);
	public List<UserDTO> findAll();
	public UserDTO findUser(int id);
	public void updateUser(Object user);
	public void deleteUser(int id);
	public void addUser(Object user);
}
