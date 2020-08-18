import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import CategoryAddition from './CategoryAddition';

@Entity('category_addition_optionals')
class CategoryAdditionOptional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  category_addition_id: string;

  @ManyToOne(() => CategoryAddition)
  @JoinColumn({ name: 'category_addition_id' })
  category_addition: CategoryAddition;

  @Column('boolean')
  blocked: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CategoryAdditionOptional;
