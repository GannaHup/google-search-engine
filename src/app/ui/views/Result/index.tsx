import React, { useEffect, useState } from "react";
import {
  isOnlyWhiteSpace,
  queryString,
} from "@/app/infrastructures/misc/utils/useFormat";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/ui/stores";
import InputSearch from "@/app/ui/components/molecules/InputSearch";
import { searchContent } from "@/app/ui/stores/actions/GoogleSearchAction";
import CardResult from "../../components/molecules/CardResult";
import Icons from "@/app/ui/assets/Icons/index";

const ResultPage = () => {
  const params = queryString(window.location.search);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState(params.keyword);
  const { isLoading, allResult } = useAppSelector((state) => state.google);

  const onInputSearch = (val: string) => {
    setKeyword(val);
  };

  const onEnterInput = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?keyword=${keyword}&start=10`);
    }
  };

  const onClickSearch = () => {
    if (!isOnlyWhiteSpace(keyword)) {
      history.push(`/result?keyword=${keyword}`);
    }
  };

  useEffect(() => {
    if (params.keyword) {
      dispatch(searchContent(params.keyword));
    }
  }, [params.keyword]);

  return (
    <div className="pl-40 py-10">
      <InputSearch
        value={keyword}
        canEnter
        customClass="max-w-3xl"
        onInput={(val) => onInputSearch(val)}
        onKeyDown={() => onEnterInput()}
        onClickSearch={() => onClickSearch()}
      />
      <div className="mt-10 flex flex-col gap-5">
        {isLoading ? (
          <div className="max-w-3xl mt-14">
            <Icons name="loading-bubble" />
          </div>
        ) : (
          allResult.map((result, idx) => {
            return (
              <CardResult
                title={result.title}
                description={result.description}
                link={result.link}
                key={idx}
              />
            )
          })
        )}
      </div>
    </div>
  );
};

export default ResultPage;
