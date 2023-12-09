// friends.component.ts
import { Component } from '@angular/core';

interface Friend {
  name: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  friendsList: Friend[] = [
    { name: 'Vincent', avatarUrl: 'https://media.licdn.com/dms/image/D4E03AQE7IJ-DDnu8zg/profile-displayphoto-shrink_800_800/0/1670872974167?e=2147483647&v=beta&t=D615FwEExnmuchmEweE2qmdiAQPJdTDbNlDqiCYufgk' },
    { name: 'François', avatarUrl: 'https://media.licdn.com/dms/image/C5103AQH6BXJKOoebTw/profile-displayphoto-shrink_800_800/0/1517469632186?e=2147483647&v=beta&t=LdknuYrFmw_PMsEZDzzrA9KPXQ5nLCc9Q-quZ1oae6E' },
    { name: 'Eric', avatarUrl: 'https://149448277.v2.pressablecdn.com/wp-content/uploads/2018/09/owen-rees-dwf.jpg' }
  ];

  newFriend: Friend = { name: '', avatarUrl: '' };

  addFriend() {
    this.friendsList.push({ ...this.newFriend });
    this.newFriend = { name: '', avatarUrl: '' };
  }

  removeFriend(friendToRemove: Friend) {
    const index = this.friendsList.indexOf(friendToRemove);
    if (index !== -1) {
      this.friendsList.splice(index, 1);
    }
  }
}

