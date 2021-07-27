import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Order } from '../entities/order.entity';
import { ProductsService } from '../../products/services/products.service';
export declare class UsersService {
    private productsService;
    private counterId;
    private users;
    constructor(productsService: ProductsService);
    findAll(): User[];
    findOne(id: number): User;
    create(data: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, changes: UpdateUserDto): User;
    remove(id: number): boolean;
    getOrdersByUser(id: number): Order;
}
