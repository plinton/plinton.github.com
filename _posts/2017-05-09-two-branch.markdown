---
title: The Two Branch Technique
layout: post
---

Sometimes I have been working on a system in some framework or another
(Django, Angular, whatever) and need to upgrade that framework to the next
major version. In an ideal world, this would just be a matter of changing
a version number in the setup files and be done with it. Sadly, many times
the code base requires a number of updates to be ready for that new version
(or sometimes it is even worse: the code base has a number of hacks to make
it work on the current major version and needs to effectively jump two major
versions). Doing a large number of updates in one go introduces a lot of risk:
if any part is wrong or if there is a key piece that is missing the whole thing
can come crashing down.

The technique here is to make two branchs: one we will call the aspirational
branch and the other called the progressive branch. The aspirational branch
is trying to be our ideal state: just update the major version or a minimal set
of updates. So we update the version in this branch and begin running tests or
playing around with it. At this point, the expectation is that we will get a lot
of deprecation notices, failing tests and crashes. The goal of the progressive branch
is to progressively improve master to the point where we can merge our aspirational
branch. After everything begins crashing, start finding fixes that are compatible with
both versions of the framework, add them to the progressive branch and merge them to
master. Once the final changes are sufficiently small (or impossible to reconcile)
merge the aspirational branch into master and it is done!

This technique is not about making the update quick. Each merge means another code review
and deploy, which can add up to a lot more time than doing one heroic update. The point
is to safely upgrade the framework with minimal surprises.
