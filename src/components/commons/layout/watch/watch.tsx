import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { watchState } from "../../../../commons/store";
import * as S from "./watch.styles";

export default function WatchList() {
  const router = useRouter();
  const [watchItems] = useRecoilState(watchState);

  const onClickDetail = (event: any) => {
    router.push(`/market/${event.target.id}`);
  };

  return (
    <S.WatchList>
      <S.WatchListTitleArticle>최근 본 상품</S.WatchListTitleArticle>
      {watchItems.map((el: any) => (
        <S.WatchListArticle key={el._id} onClick={onClickDetail}>
          {el.images[0] ? (
            <S.WatchItemImg
              id={el._id}
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
          ) : (
            <S.WatchItemImg id={el._id} src={"/images/noimages.jpg"} />
          )}
        </S.WatchListArticle>
      ))}
    </S.WatchList>
  );
}
