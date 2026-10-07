## 기록 일시: 2026-10-07 06:56:25

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘
---

## 기록 일시: 2026-10-07 06:57:59

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go
---

## 기록 일시: 2026-10-07 07:07:32

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">
---

## 기록 일시: 2026-10-07 07:19:48

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)
---

## 기록 일시: 2026-10-07 18:56:28

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘
---

## 기록 일시: 2026-10-07 18:59:29

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)
---

## 기록 일시: 2026-10-07 19:00:45

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)
---

## 기록 일시: 2026-10-07 19:01:50

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.
---

## 기록 일시: 2026-10-07 19:03:56

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)
---

## 기록 일시: 2026-10-07 19:05:19

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)
---

## 기록 일시: 2026-10-07 19:06:58

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.
---

## 기록 일시: 2026-10-07 19:08:32

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)
---

## 기록 일시: 2026-10-07 19:09:37

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)
---

## 기록 일시: 2026-10-07 19:11:05

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.
---

## 기록 일시: 2026-10-07 19:12:54

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)
---

## 기록 일시: 2026-10-07 19:13:48

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)
---

## 기록 일시: 2026-10-07 19:14:54

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.
---

## 기록 일시: 2026-10-07 19:15:51

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)
---

## 기록 일시: 2026-10-07 19:16:44

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)
---

## 기록 일시: 2026-10-07 19:17:20

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.
---

## 기록 일시: 2026-10-07 19:26:03

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
위 순서를 참고해서 /tdd-red m5 부터 /tdd-refactor m7 까지 진행해 줘
---

## 기록 일시: 2026-10-07 19:31:26

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
위 순서를 참고해서 /tdd-red m5 부터 /tdd-refactor m7 까지 진행해 줘

### [User Prompt]
서버 실행 방법을 알려줘
---

## 기록 일시: 2026-10-07 19:41:23

### [User Prompt]
<command-message>caveman:caveman</command-message>
<command-name>/caveman:caveman</command-name>

### [User Prompt]
Base directory for this skill: C:\Users\ktgma\.claude\plugins\cache\caveman\caveman\3.1.0\skills\caveman

# caveman

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Caveman is a voice, not broken grammar. Reader pays per token and reads in a terminal. Every word earns its place. Every fact survives.

## Persistence

Every response, whole session, until user says "stop caveman" or "normal mode". Unsure if still on? It is. Confirm the switch-off in one line.

`/caveman ultra` and `/caveman wenyan` are aliases: follow the `ultracave` or `megacave` skill instead of this one. `/caveman status` reports the mode and changes nothing. Relay the hook's `Caveman mode: <mode>` value when present, otherwise `Caveman mode: unknown`. Never infer a mode from the configured default.

## Why

1. Every output token is billed and read. Filler costs twice.
2. Code, commands, paths, numbers, errors are the payload. One changed character breaks them.
3. Ceremony is expensive, grammar is cheap. "Sure, I'd be happy to help" is ten tokens. "the" is one.
4. A dropped negation costs more than every token saved. Clarity beats compression.

## Rules

### 1. Answer first

Answer, then reason, then next step. Pattern: `[thing] [action] [reason]. [next step].`

Bad: "Sure! I'd be happy to help. The issue you're experiencing is likely caused by..."
Good: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

### 2. Kill ceremony

No greeting, hedging, pleasantries, recap, or closer. No "Sure!", "Let me", "I'll now", "Hope this helps". No just/really/basically/actually/simply.

### 3. Short word

"fix" not "implement a solution for". Standard acronyms fine (DB, API, HTTP). Invented abbreviations not (cfg, impl, fn): same tokens, harder read. No arrows.

### 4. Articles optional, meaning never

Drop a/an/the when the sentence still reads in one pass. Fragments fine. Never drop not/never/no/only/except. Numbers and units exact.

Bad: "Migration drop column backup first."
Good: "Back up first. Then run migration: it drops the column."

### 5. One idea per sentence

ASD-STE100 is the floor: 20 words max, active voice, imperative for instructions, one term per thing, pronoun only with an obvious referent. Compression and clarity conflict? Clarity wins.

### 6. Payload verbatim

Code blocks unchanged. Commands, paths, API names exact. Errors quoted exact, shortest decisive line only.

### 7. Tool runs: bounded status

No text between routine calls. One line before a multi-step run, one line per phase change, one line with the result at the end. Otherwise text before a call only to clarify, warn, or disambiguate.

### 8. User's language

Compress the style, not the language. An explicit reply-language instruction wins. Never switch because of quoted text. Technical terms and errors stay verbatim. Particles and case markers are grammar, not filler.

### 9. Never perform caveman

No "caveman mode on", no "me think", no "Caveman:" prefix, no normal answer plus caveman copy. No decorative tables or emoji. Never add a word to sound caveman. Caveman phrasing not shorter than plain? Use plain.

## When to break the rules

Plain prose, then resume:

1. Security warning.
2. Irreversible action. Confirm in full sentences first.
3. Step order a fragment could scramble.
4. User confused or repeats the question.
5. Anything persisted outside chat: code, comments, commits, docs, issues, PRs, tickets, memory files, third-party messages. `/caveman-compress` exempt.
6. Harness asks for a status line or confirmation. Give it. Harness decides *when* you speak, caveman decides *how*.

## Pre-send check

1. First sentence announces what you will do? Delete.
2. Last sentence recaps or offers help? Delete.
3. Every not/never/no/only present? Every code span, path, number, error verbatim?
4. Any sentence with two readings? Make it a full sentence.

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.
</pasted_content id="1ee3">

### [User Prompt]
stop hook 에러도 확인했어. 다시한번 확인해 주고, 다음 단계로 plan.md 진행 해줘

### [User Prompt]
go

### [User Prompt]
<pasted_content id="1ee3">
코드베 이스의 @docs/menu-project-requirement.md 를 읽고 /init 을 실행해줘. 
CLAUDE.md와 PRD.md, TRD.md를 분리해서 작성해주고, 켄트벡의 증강코딩 (https://github.com/claude-code-expert/inflea
rn-docs/blob/main/example/Kentbeck-CLAUDE-ko.md 주소 참고)을 이용해서 개발할 것이므로 TDD
개발 프로세스를 CLAUDE.md에 그대로 적용해서 파일 작성해.


슬래시 명령어로 /tdd-red 를 만들어서 TDD-IMPLEMENTS.md의 하나의 프로세스 항목을 실패하는
케이스를 만들어야 하고 그 뒤
/tdd-green 으로 해당 케이스를 통과하는 구현을 개발한 뒤
/tdd-refactor 를 통해서 하드코딩되거나 소프트웨어 개발 원칙에 맞지 않는 개발 코드들을
리팩토링 해야해

이 전체 프로세스는 켄트백의 TDD 방법론에 의거해서 진행되어야 하고 각 항목은
TDD-IMPLEMENTS.md에 작성한 것을 기반으로 진행되어야 해

먼저 슬래시 명령어를 각각 만들고 @plan.md 를 읽어서 작은단위로 쪼개놓은 개발항목들을
순차적 으로 TDD-IMPLEMENTS.md에 정리해줘
</pasted_content id="1ee3">

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>T-00 개발 진행해줘</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 항목 하나, 실패하는 테스트 하나만 만든다. 구현 코드는 쓰지 않는다.

T-00 개발 진행해줘 가 있으면 그 항목 ID(예: `T-01-03`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 항목을 정한다. 상태가 `[ ]`인 첫 번째 항목이다.
   - 이전 항목이 `[R]` 또는 `[G]`로 남아 있으면 작업을 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 타입이 `SETUP`인 항목은 테스트가 없다. Red를 건너뛰고 항목을 직접 수행한 뒤 `[x]`로 바꾼다.
3. 항목의 "Red" 설명과 PRD/TRD의 해당 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 항목에 적힌 테스트 파일에 **테스트 하나만** 추가한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 테스트가 읽는 `import`가 아직 없는 모듈이어도 된다. 모듈 파일을 만들어야 한다면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 허용한다.
5. `npm test`를 실행한다. 새 테스트가 **실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. (문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.)
   - 이미 통과하면 테스트가 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 항목을 `[R]`로 바꾼다.
7. 보고한다: 항목 ID, 추가한 테스트 파일·이름, 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 한 번에 테스트 두 개 이상 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (Red 상태는 커밋하지 않는다. 테스트가 깨진 채로 커밋 금지.)

### [User Prompt]
@TDD-IMPLEMENTS.md 와 tdd-red, tdd-green, tdd-refactor를 task 단위가 아닌 마일스톤 단위로 변경해줘

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>M1</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

M1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m1</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m1 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m2</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m2 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m3</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m3 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m4</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m4 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
<command-message>tdd-red</command-message>
<command-name>/tdd-red</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-red

Kent Beck TDD의 **Red 단계**다. 마일스톤 하나의 테스트를 전부 만든다. 구현 코드는 쓰지 않는다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `CLAUDE.md`의 TDD 원칙과 `TDD-IMPLEMENTS.md`를 읽는다.
2. 대상 마일스톤을 정한다. 제목 앞 상태가 `[ ]`인 첫 번째 마일스톤이다.
   - 앞선 마일스톤이 `[x]`가 아니면 멈추고 어느 단계가 밀렸는지 알려 준다. (`/tdd-green`, `/tdd-refactor` 먼저)
   - 마일스톤에 테스트 항목이 없고 `SETUP` 항목뿐이면 Red를 건너뛴다. 항목을 직접 수행하고 `[x]`로 바꾼다.
   - 테스트와 `SETUP` 항목이 섞인 마일스톤은 테스트만 Red에서 다룬다. `SETUP` 항목은 `/tdd-green`이 수행한다.
3. 마일스톤의 모든 테스트 항목(`T-섹션-번호`)과 PRD/TRD의 요구사항 ID를 읽는다. 모호하면 구현하지 말고 사용자에게 묻는다.
4. 마일스톤에 적힌 테스트 파일에 항목의 테스트를 **목록 순서대로 전부** 작성한다.
   - 테스트 이름은 항목의 `shouldXxx`를 그대로 쓴다. 항목 하나당 테스트 하나다.
   - `node:test` + `node:assert/strict`를 쓴다. 실제 `data/menu.xlsx`, 실제 타이머 대기에 의존하지 않는다.
   - 항목의 "Red" 설명에 적힌 입력과 기대값을 그대로 단언한다. 그보다 약하게 쓰지 않는다.
   - 공용 헬퍼(예: `makeWorkbook`)가 필요하면 테스트 지원 코드로 만든다. 제품 코드는 아니다.
   - 테스트가 import하는 모듈이 없으면 **빈 껍데기(export만 있고 `throw new Error('not implemented')`)** 까지만 만든다.
5. `npm test`를 실행한다. 새 테스트는 **구현이 없어서 실패해야 한다.**
   - 실패 이유가 의도한 것인지 확인한다. 문법 오류·import 오류·오타로 실패하면 Red가 아니다. 고친다.
   - 항목 설명에 "이미 통과할 수 있음(회귀 방지)"이라고 적힌 테스트는 통과해도 된다. 그 외에 통과하는 테스트는 약한 것이다. 더 엄격하게 고친다.
   - 기존 테스트가 새로 깨지면 안 된다.
6. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[R]`로 바꾸고 상단 표의 상태도 맞춘다.
7. 보고한다: 마일스톤 ID, 테스트 파일, 작성한 테스트 수, 실패 수, 이미 통과한 테스트 목록과 이유, 대표 실패 메시지 한 줄. 다음은 `/tdd-green`이라고 알린다.

## 금지

- 구현 코드 작성 (껍데기 제외).
- 마일스톤 밖 테스트 추가.
- 실패를 확인하지 않고 `[R]` 표시.
- 커밋. (테스트가 깨진 채로 커밋하지 않는다.)

### [User Prompt]
<command-message>tdd-green</command-message>
<command-name>/tdd-green</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-green

Kent Beck TDD의 **Green 단계**다. Red로 만든 마일스톤의 테스트를 통과시키는 데 **딱 충분한** 코드만 쓴다.

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[R]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-red`를 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 마일스톤의 테스트가 **실제로 실패하는지** 확인한다. 전부 통과하면 멈추고 알린다.
3. 마일스톤의 항목 목록과 각 항목의 "Green" 설명을 읽는다.
4. **목록 순서대로 테스트 하나씩** 통과시킨다. 한 개를 통과시킨 뒤 `npm test`를 실행하고 다음으로 간다.
   - 하드코딩이 가장 단순하면 하드코딩해도 된다. 다음 테스트가 일반화를 강제한다. (Beck의 "Fake It")
   - 지금 보는 테스트가 요구하지 않는 동작은 만들지 않는다.
   - 테스트 코드는 수정하지 않는다. 테스트가 틀렸다면 멈추고 사용자에게 알린다.
   - 의존성을 새로 추가하지 않는다. (`package.json`에 이미 있는 것만 사용)
   - 이미 통과하는 테스트는 코드를 건드리지 않고 넘어간다.
5. 마일스톤에 `SETUP` 항목이 있으면(예: M7) 테스트 항목을 모두 통과시킨 뒤 그 항목을 수행한다. 수동 확인이 필요한 항목은 확인 방법을 보고에 적고 사용자에게 맡긴다.
6. 마지막에 `npm test`를 실행한다. **전체 테스트가 통과**해야 한다. 실패하면 구현을 고친다.
7. `TDD-IMPLEMENTS.md`에서 해당 마일스톤을 `[G]`로 바꾸고 상단 표의 상태도 맞춘다.
8. 보고한다: 마일스톤 ID, 만든·수정한 파일, 전체 테스트 결과(통과 수), 남아 있는 하드코딩 위치. 다음은 `/tdd-refactor`라고 알린다.

## 금지

- 테스트가 요구하지 않는 동작 추가.
- 리팩터링. (중복이 보여도 이 단계에서는 놔둔다.)
- 구조적 변경과 행위적 변경 혼합.
- 테스트가 실패한 상태로 `[G]` 표시.
- 다음 마일스톤을 위한 선행 구현.
- 커밋. (커밋은 Refactor 단계 후에 한다.)

### [User Prompt]
<command-message>tdd-refactor</command-message>
<command-name>/tdd-refactor</command-name>
<command-args>m5</command-args>

### [User Prompt]
# /tdd-refactor

Kent Beck TDD의 **Refactor 단계**다. 테스트가 모두 통과한 상태에서만 한다. **행위를 바꾸지 않는다.**

m5 가 있으면 그 마일스톤 ID(예: `M1`)를 대상으로 한다. 없으면 자동으로 고른다.

## 절차

1. `TDD-IMPLEMENTS.md`에서 제목 앞 상태가 `[G]`인 첫 마일스톤을 찾는다. 없으면 `/tdd-green`을 먼저 실행하라고 알리고 멈춘다.
2. `npm test`를 실행해 **시작 시점에 전체 통과**를 확인한다. 실패하면 리팩터링하지 않고 알린다.
3. 마일스톤이 만든 구현 파일과 테스트 파일을 읽고 아래 후보를 찾는다.
   - 하드코딩된 값, Green에서 남긴 가짜 구현(Fake It)
   - 중복 (코드 중복, 테스트 중복, 매직 넘버·매직 문자열)
   - 모호한 이름, 긴 함수, 한 함수의 여러 책임
   - 숨은 의존성 (전역 상태, 시간·파일·네트워크 직접 호출)
   - 마일스톤 항목들의 "Refactor" 설명에 적힌 후보
4. 변경은 **한 번에 하나**만 한다. 각 변경 직후 `npm test`를 실행한다.
   - 이름이 있는 리팩터링 패턴으로 설명한다. (Extract Function, Rename, Replace Magic Number with Constant, Inline 등)
   - 하나라도 실패하면 직전 변경을 되돌리고 다른 방법을 쓴다.
5. 테스트 코드의 중복·가독성도 정리 대상이다. 단, 테스트의 **검증 내용은 바꾸지 않는다.**
6. 마일스톤의 마지막 항목에 적힌 "파일 전체 점검"을 수행한다. (함수 길이, 이름, 상수, 공개 API)
7. 정리할 것이 없으면 "정리 불필요"라고 이유와 함께 보고한다. 억지로 바꾸지 않는다.
8. 마지막에 `npm test`가 전체 통과하는지 확인한다.
9. 상태를 갱신한다.
   - `TDD-IMPLEMENTS.md`: 해당 마일스톤 `[G]` → `[x]`, 상단 표도 맞춘다.
   - `plan.md`: 마일스톤에 속한 테스트 항목을 모두 `[x]`로 바꾼다. (이름이 `shouldXxx`로 같다.)
10. 보고한다: 마일스톤 ID, 적용한 리팩터링 목록(패턴 이름), 최종 테스트 결과.
11. 커밋 메시지를 **제안만** 한다. 사용자가 요청할 때만 커밋한다.
    - Red + Green(테스트와 구현)은 `behavioral: <마일스톤 요약>`
    - 리팩터링은 별도로 `structural: <정리 내용>`
    - 두 유형을 한 커밋에 섞지 않는다. 이미 섞여 있으면 어떻게 나눌지 제안한다.

## 금지

- 테스트 통과 상태가 아닐 때 리팩터링.
- 행위 변경 (새 기능, 새 분기, 출력 변경).
- 다음 마일스톤을 위한 선행 구현.
- 여러 리팩터링을 모아서 한 번에 적용.
- `[G]` 상태가 아닌 마일스톤 처리.

### [User Prompt]
위 순서를 참고해서 /tdd-red m5 부터 /tdd-refactor m7 까지 진행해 줘

### [User Prompt]
서버 실행 방법을 알려줘

### [User Prompt]
아직 구현이 되지 않은것들이 있는데 다음의 내용을 검토해서 소스 체크를 한 뒤 문제점을 분석해서 리포트 해
줘
- @design/project\ 하위의 디자인 적용이 안되어 있음
---

