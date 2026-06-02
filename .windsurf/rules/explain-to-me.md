# Clarification and Questioning Guidelines

<clarification_triggers>

**When to Ask Questions (Before Implementation):**

- Ambiguous requirements or acceptance criteria
- Missing technical specifications (database schema, API endpoints, data models)
- Unclear business logic or validation rules
- Multiple valid interpretations of the request
- Security or performance implications unclear
- Integration points with existing systems not specified
- Missing environment or deployment context

**When NOT to Ask:**
- Details already provided in context or documentation
- Standard patterns clearly apply (REST API CRUD, form validation)
- Requirements are complete and unambiguous
</clarification_triggers>

<question_categories>
**Technical Specifications:**
- "What should the database schema look like for [entity]?"
- "Should this API endpoint be authenticated? What permissions?"
- "What's the expected data format for [input/output]?"
- "What validation rules should apply to [field]?"

**Business Logic:**
- "What should happen when [edge case occurs]?"
- "How should the system handle [error scenario]?"
- "What are the acceptance criteria for [feature]?"
- "Should this be synchronous or asynchronous processing?"

**Integration Context:**
- "Does this integrate with [existing system]? How?"
- "What external APIs or services are involved?"
- "Are there existing patterns/conventions I should follow?"
- "What's the data migration strategy for existing records?"

**Performance & Scale:**
- "What's the expected data volume/traffic?"
- "Are there performance requirements (response time, throughput)?"
- "Should this be optimized for reads or writes?"
</question_categories>

<effective_questioning>
**Batch Related Questions:**
Instead of asking one at a time, group related questions:

Example:
"Before implementing the user management feature, I need clarification on:
1. Authentication: JWT or session-based?
2. Roles: What role types exist? (admin, user, moderator?)
3. Permissions: RBAC or attribute-based?
4. Password policy: Length, complexity requirements?"

**Provide Context:**
"I see two approaches for [feature]:
- Option A: [description, pros, cons]
- Option B: [description, pros, cons]
Which aligns better with your requirements?"

**Confirm Assumptions:**
"Based on the request, I'm assuming:
- Users can only edit their own posts
- Deleted items should be soft-deleted (archived)
- Email notifications are required
Are these correct?"
</effective_questioning>

<when_to_proceed>
**Proceed with Implementation When:**
- All technical specifications are clear
- Business logic and edge cases are defined
- Integration points are specified
- Security and performance requirements are understood
- You can write complete acceptance criteria

**Continue Asking When:**
- Implementation approach has significant trade-offs
- Edge cases could impact user experience
- Security implications are unclear
- Multiple valid solutions exist with different costs
</when_to_proceed>

<clarification_examples>
**Vague Request:**
"Add user profiles"

**Clarify:**
- What fields should profiles include?
- Can users edit their own profiles? Others' profiles?
- Should profiles be public or private?
- Are profile pictures required? Size limits?
- Any validation rules for profile fields?

**Vague Request:**
"Make the dashboard faster"

**Clarify:**
- What specific operations are slow? (page load, queries, rendering)
- What's the current vs. target performance?
- How much data is being displayed?
- Is caching acceptable? What cache strategy?
- Are there database query optimization opportunities?
</clarification_examples>

<anti_patterns>
**Avoid:**
- Asking about standard conventions (REST endpoints, HTTP status codes)
- Questions answerable by reading provided documentation
- Unnecessarily detailed questions when requirements are clear
- Asking one question at a time when batching is more efficient
- Asking before analyzing context and existing codebase

**Instead:**
- State assumptions and confirm in batch
- Propose solutions with trade-offs for user to choose
- Analyze existing patterns before asking
- Group related questions together
</anti_patterns>
