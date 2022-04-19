# Luna 

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=portfolio-v2-plum-two)

Luna is a super-fast, no-nonsense portfolio website built from scratch for performance. It is a complete redo of my previous portfolio [website](https://old.mayurbhoi.com).

**//TODO:** Write documentation and dependencies/frameworks used.

## Stack & Frameworks

- Node
- Next.js
- Chakra UI

## TODOs

- [ ] Add feature image to the website, readme and project repository
- [ ] Add traffic trackers
- [ ] Add colors section to the readme

## Repository Structure and Branches

Pushing features and changes follows a predefined procedure.

- `dev` - Active development happens in the branch and all the running changes are pushed to this branch. Consider this branch as the nightly builds. **Note: Builds of this branch may/may not pass tests, compile or maybe highly unstable**

- `version` - Aggregated commits are merged to this branch and represents a working version of the project. Represents a sub-version change (v1.1.2 → v1.1.3). No direct commits are to be made to this branch! **Note: Builds of this branch may/may not pass tests and work as expected but may compile just fine.**

- `master` - Release branch. Includes the code that is currently live in production and is tested fully. Represents a sub-version change (v1.1.2 → v1.2.0). No direct commits are to be made to this branch! **Note: Builds of this branch pass all the tests and are live. DO NOT MAKE ANY CHANGES DIRECTLY!**

- `hotfix-<issue>` (Optional) - Temporary branch that contains fixes to urgent issues and can be issued as a patch. Can be directly merged into master if the build passes all the tests. **Note: Delete the branch after the patch has been merged.**

## References

- devaslife
  - Website: <https://www.craftz.dog/>
  - YouTube: <https://www.youtube.com/devaslife>

Support Free and Open Source Software!
