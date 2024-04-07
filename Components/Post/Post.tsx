import styled from "styled-components/native";

const PostView = styled.View`
    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    padding: 15px;
`;

const PostImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-right: 12px;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`;

const PostDetails = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

const PostDate = styled.Text`
    font-size: 12px;
    margin-top: 2px;
    color: rgba(0,0,0, 0.4);
`;

export default Post = ({title, imageUrl, createdAt}) => {
    return (
        <PostView>
            <PostImage source={{uri: imageUrl}}/>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    )
};