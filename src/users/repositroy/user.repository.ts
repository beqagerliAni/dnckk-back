import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserRepository {
    constructor(@InjectRepository(User) private readonly UsersRepository:Repository<User>){}
    async create(createUserDto: CreateUserDto) {
        const newUser = await this.UsersRepository.create(createUserDto)
        await this.UsersRepository.save(newUser)
        const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword
        
    }
    async findByEmail(email:string){
        return this.UsersRepository
        .createQueryBuilder('user')
        .where('user.email = :email', {email: email})
        .getOne()
    }
}