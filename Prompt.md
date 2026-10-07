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

