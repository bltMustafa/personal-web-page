
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "../styles/ProfileCard.css"

function ProfileCard() {
  return (
    <Card className="profile-card">
      <div className="profile-content">
        <div className="profile-info">
          <h1>Mustafa Bolat</h1>
          <p>Software Engineer</p>
        </div>
        <Avatar
          className="profile-avatar"
          size={200}
          src="/public/test2.jpg"
          icon={<UserOutlined />}
        />
      </div>
    </Card>
  );
}

export default ProfileCard;
