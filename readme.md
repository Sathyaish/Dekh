### What's this?

In short, this is a bare-bones re-write of the [Jasmine](https://jasmine.github.io/) framework that I am writing just for fun. I am writing it without looking at the Jasmine source.

First, I'll write it as I think it should be, and then I'll compare notes, i.e. then I'll look at how *they* wrote it.

### No idea what you're talking. Explain it nicely.
[Jasmine](https://jasmine.github.io/) is a unit-testing framework for testing your JavaScript applications. It must have been written in JavaScript (or one of its variants -- Babel, CoffeeScript, TypeScript) I imagine but I haven't looked. Who cares, anyway?

Look, it so happened that I just saw the [Jasmine](https://jasmine.github.io/) API. .

And I thought, that's so easy to write myself I could have written it myself. So, I thought, "Hell, why shouldn't I?"

So, I am writing a completely redundant unit-testing framework that looks exactly like Jasmine, except it is not the Jasmine framework. I'm calling this thing **Dekh** in a spur of the moment. *Dekh* in Hindi means *to look*.

It's a bare bones clone -- clone as in an attempt to write it again from sratch, and not as in a `git clone`.

I'll keep adding more API as I discover their own API more.

I've also written basic manual unit test suite for testing JavaScript and I'll re-write that too to modularize that into `test fixtures` and `test methods` with a `setup` and `teardown` for each `test` and also for the entire `suite / fixture`, but first let me write this.
