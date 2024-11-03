package healthandwealth.fullstackhw.repository;

import healthandwealth.fullstackhw.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
