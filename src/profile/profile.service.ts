import { Injectable } from '@nestjs/common';
import { Profile } from './profile';
import { CreateProfileDto } from './create-profile.dto';

@Injectable()
export class ProfileService {
  private readonly profile: Profile[] = [];

  create(profile: CreateProfileDto): Profile {
    this.profile.push(profile);

    return profile;
  }

  getProfile(name: string): Profile {
    return this.profile.find(profile => profile.name === name);
  }
}
