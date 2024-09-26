/*
 * 解析markdown文本
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-20 16:25:03
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { Marked } from 'marked';
import highlight from 'highlight.js';
import { markedHighlight } from 'marked-highlight';

// https://marked.js.org/using_advanced#highlight
const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext';
        return highlight.highlight(code, { language }).value;
    }
  }),
  {
    gfm: true,
    breaks: true,
    pedantic: false,
  }
);

export default marked;
