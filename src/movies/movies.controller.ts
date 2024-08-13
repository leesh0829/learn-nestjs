import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}
  
  @Get()
  getAll(): Movie[] {
    //return 'This will return all movies'; 
    return this.MoviesService.getAll();
  }

  /*@Get('search')
  search(@Query("year") seachingYear: string) {
    return `We are searching for a movie made after: ${seachingYear}`;
  }*/

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    //return `This will return one movie with the id: ${movieId}`;
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {

    return this.MoviesService.create(movieData);
    //console.log(movieData);
    //return movieData;
  }

  @Delete()
  remove(@Param('id') movieId: number) {
    //return `This will delete a movie with the id: ${movieId}`;
    return this.MoviesService.deleteOne(movieId)
  }

  //@Put() //모든 정보가 업데이트
  //@Patch //일부분만 업데이트 할땐
  @Patch('/:id')
  Patch(@Param('id') movieId: number, @Body() updateData) {
    //return `This will Update a movie with the id: ${movieId}`;
    // return {
    //   updateMovie: movieId,
    //   ...updateData,
    // };
    return this.MoviesService.update(movieId, updateData);
  }
}
