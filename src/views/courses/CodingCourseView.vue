<script setup>
import Card from '@/components/Card.vue';
// const _title = 'Coding';
// const description = "Pure Purple's coding courses are designed to provide students with the skills and knowledge needed to succeed in the tech industry. The courses are divided into several categories, including Web Development, Programming Fundamentals, Data Science and Machine Learning, Mobile App Development, and Cybersecurity."
</script>

<template>
  <section class="bg-purple-100">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div>
            <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <h1 class="text-3xl font-bold mb-4">Coding</h1>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h1 class="text-2xl font-bold">Overview</h1>
              <p>The Web Development course teaches students how to build dynamic web applications using HTML, CSS,
                JavaScript, and popular frameworks like React and Angular. The Programming Fundamentals course covers
                the basics of programming, including data types, variables, loops, and control structures, using
                languages like Python, Java, and C++. The Data Science and Machine Learning course explores the world of
                data science and machine learning, covering topics like data analysis, visualization, and modeling using
                libraries like Pandas, NumPy, and scikit-learn.
                The Mobile App Development course teaches students how to build native mobile apps for Android and iOS
                using frameworks like React Native and Flutter. The Cybersecurity course covers the latest cybersecurity
                threats and teaches students how to protect their applications and data using best practices and
                cutting-edge tools.

              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h1 class="text-2xl font-bold">Content</h1>
              <div class="grid grid-cols-3 gap-3">
                <Card>
                  <h1 class="text-xl font-bold">Beginner</h1>
                  <p>Perfect for those new to coding, covering the basics of programming and web development</p>
                  <p>$0.00</p>
                </Card>
                <Card>
                  <h1 class="text-xl font-bold">Intermediate</h1>
                  <p>Designed for those with some coding experience, exploring more advanced topics like data
                    structures, algorithms, and machine learning</p>
                  <p>$0.00</p>
                </Card>
                <Card>
                  <h1 class="text-xl font-bold">Advanced</h1>
                  <p>Ideal for experienced coders, diving deeper into specialized topics like cloud computing, DevOps,
                    and cybersecurity</p>
                  <p>$0.00</p>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
  <aside>
    <p>Aside</p>
  </aside>
</template>

<style scoped></style>
