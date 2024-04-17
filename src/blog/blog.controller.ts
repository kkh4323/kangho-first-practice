import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // 블로그 전체 데이터 가져오기
  @Get()
  async getBlogs() {
    return await this.blogService.getBlogDatas();
  }

  // 블로그 상세 데이터 가져오기
  @Get('/:id')
  async getBlogById(@Param('id') id: string) {
    return await this.blogService.getBlogById(id);
  }

  // 블로그 데이터 등록
  @Post('/create')
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    return await this.blogService.createBlog(createBlogDto);
  }
}
