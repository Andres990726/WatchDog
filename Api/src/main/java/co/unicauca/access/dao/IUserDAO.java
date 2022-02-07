package co.unicauca.access.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.domain.model.User;

@Repository
public interface IUserDAO extends CrudRepository<User, Integer> {

	@Transactional(readOnly=true)
	public Optional<User> findByUsername(String username);
}
