import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
// import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepo: Repository<Blog>,
  ) {}

  // 전체 블로그 데이터 가져오는 로직
  async getBlogDatas() {
    return await this.blogRepo.find({});
  }

  // 상세 블로그 데이터 가져오는 로직
  async getBlogById(id: string) {
    const blog = await this.blogRepo.findOneBy({ id });
    if (!blog) throw new NotFoundException();
    return blog;
  }

  // 블로그 등록하는 로직
  async createBlog(createBlogDto: CreateBlogDto) {
    const newBlog = await this.blogRepo.create(createBlogDto);
    await this.blogRepo.save(newBlog);
    return newBlog;
  }
}
