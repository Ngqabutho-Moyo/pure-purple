<script setup>
import Card from '@/components/Card.vue';
// const _title = 'Coding';
// const description = "Pure Purple's coding courses are designed to provide students with the skills and knowledge needed to succeed in the tech industry. The courses are divided into several categories, including Web Development, Programming Fundamentals, Data Science and Machine Learning, Mobile App Development, and Cybersecurity."
</script>

<template>
  <section class="bg-purple-100">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4">Software Development</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>Pure Purple's software development courses are designed to equip students with the skills and knowledge
              needed to design, develop, and deploy software applications. The courses cover a range of programming
              languages, frameworks, and technologies, including Java, Python, JavaScript, React, Angular, and more.
              The courses are structured to take students from the basics of programming to advanced software
              development concepts. Students learn about data structures, algorithms, object-oriented programming, and
              software design patterns. They also gain hands-on experience with industry-standard tools and
              technologies, such as Git, Jenkins, and Docker.
              Pure Purple's software development courses are taught by experienced instructors who have industry
              expertise and a passion for teaching. They provide personalized attention and guidance, helping students
              to overcome challenges and achieve their goals.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Pricing</h1>
            <div class="grid grid-cols-3 gap-3">
              <Card>
                <h1 class="text-xl font-bold">Beginner</h1>
                <p>Foundations of programming, data structures, algorithms, object-oriented programming, and basic
                  software development concepts</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Intermediate</h1>
                <p>Web development, mobile app development, cloud computing, database management, and software testing.
                </p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Advanced</h1>
                <p>Artificial intelligence, machine learning, cybersecurity, advanced software design patterns, and
                  specialized technologies like blockchain and the Internet of Things (IoT).</p>
                <p>$0.00</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
