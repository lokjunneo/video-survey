import type { FormType } from "@/constants/FormTypes";
import type { QuestionDataFormat } from "./questiondataformat";

export interface SurveyDataFormat {
    vidUrl: string,
    vidDesc: string,
    formType?: FormType // should be treated as normal form by default
    qns: QuestionDataFormat[]
}


/** TODO: Replace with a real MD parser? */

function parseInlineMD(input: string) {
  // match multiple syntaxes:
  // - bold: **...**
  // - italic: __...__
  // - underline: ~~...~~
  // - weak: %%...%%
  const regex = /(\*\*(.*?)\*\*|__(.*?)__|~~(.*?)~~|%%(.*?)%%)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={lastIndex}>{input.slice(lastIndex, match.index)}</span>);
    }

    if (match[2]) {
      parts.push(<b key={match.index}>{match[2]}</b>);
    } else if (match[3]) {
      parts.push(<i key={match.index}>{match[3]}</i>);
    } else if (match[4]) {
      parts.push(<u key={match.index}>{match[4]}</u>);
    } else if (match[5]) {
      parts.push(
        <span key={match.index} className="text-gray-500">
          {match[5]}
        </span>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    parts.push(<span key={lastIndex}>{input.slice(lastIndex)}</span>);
  }

  return parts;
}

function parseLine(line: string, key: number) {
  let className = "";
  let content = line;

  if (line.trimStart().startsWith(">")) {
    content = line.replace(">", "").trimStart();
    className = "border-l-4 pl-4 text-gray-500";
  }

  return (
    <div key={key} className={className}>
      {parseInlineMD(content)}
    </div>
  );
}

export function parseFakeMD(text: string) {
  const lines = text.split("\n");
  return <>{lines.map((line, i) => parseLine(line, i))}</>;
}