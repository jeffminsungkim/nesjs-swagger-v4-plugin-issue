import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './create-profile.dto';
import { Profile } from './profile';

@Controller()
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profile/:name')
  getProfile(@Param('name') name: string): Profile {
    return this.profileService.getProfile(name);
  }

  @Post('profile')
  createProfile(@Body() profile: CreateProfileDto): Profile {
    return this.profileService.create(profile);
  }
}
