<template>
  <div class="min-h-screen bg-[var(--background)]">
    <!-- Navigation Header -->
    <header class="border-b border-[var(--border)] bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center gap-8">
            <div class="flex items-center gap-2">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white font-bold text-lg">
                V
              </div>
              <span class="text-xl font-semibold text-[var(--foreground)]">VolleyCoach</span>
            </div>
            <nav class="hidden md:flex items-center gap-6">
              <UButton variant="ghost" color="gray" class="text-[var(--foreground)]">
                <Icon name="i-heroicons-chart-bar" class="mr-2" />
                Dashboard
              </UButton>
              <UButton variant="ghost" color="gray" class="text-[var(--muted-foreground)]">
                <Icon name="i-heroicons-users" class="mr-2" />
                Players
              </UButton>
              <UButton variant="ghost" color="gray" class="text-[var(--muted-foreground)]">
                <Icon name="i-heroicons-calendar" class="mr-2" />
                Trainings
              </UButton>
              <UButton variant="ghost" color="gray" class="text-[var(--muted-foreground)]">
                <Icon name="i-heroicons-trophy" class="mr-2" />
                Tournaments
              </UButton>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-[var(--foreground)] mb-2">
          Volleyball Coach Dashboard
        </h1>
        <p class="text-lg text-[var(--muted-foreground)]">
          Manage your team, track progress, and organize tournaments
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Players Card -->
        <UCard class="bg-white border border-[var(--border)]">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-[var(--muted-foreground)] mb-2">Total Players</p>
              <p class="text-3xl font-bold text-[var(--foreground)] mb-1">8</p>
              <p class="text-sm text-[var(--muted-foreground)]">2 Gold, 4 Silver, 2 Bronze</p>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <Icon name="i-heroicons-users" class="h-6 w-6 text-red-600" />
            </div>
          </div>
        </UCard>

        <!-- Average Skill Card -->
        <UCard class="bg-white border border-[var(--border)]">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-[var(--muted-foreground)] mb-2">Average Skill</p>
              <p class="text-3xl font-bold text-[var(--foreground)] mb-1">6.6</p>
              <p class="text-sm text-[var(--muted-foreground)]">Team overall rating</p>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <Icon name="i-heroicons-arrow-trending-up" class="h-6 w-6 text-red-600" />
            </div>
          </div>
        </UCard>

        <!-- Recent Trainings Card -->
        <UCard class="bg-white border border-[var(--border)]">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-[var(--muted-foreground)] mb-2">Recent Trainings</p>
              <p class="text-3xl font-bold text-[var(--foreground)] mb-1">2</p>
              <p class="text-sm text-[var(--muted-foreground)]">Last 7 days</p>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <Icon name="i-heroicons-calendar" class="h-6 w-6 text-red-600" />
            </div>
          </div>
        </UCard>

        <!-- Active Streak Card -->
        <UCard class="bg-white border border-[var(--border)]">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-[var(--muted-foreground)] mb-2">Active Streak</p>
              <p class="text-3xl font-bold text-[var(--foreground)] mb-1">5 days</p>
              <p class="text-sm text-[var(--muted-foreground)]">Current training streak</p>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
              <Icon name="i-heroicons-fire" class="h-6 w-6 text-red-600" />
            </div>
          </div>
        </UCard>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Players Section (2/3 width) -->
        <div class="lg:col-span-2">
          <UCard class="bg-white border border-[var(--border)]">
            <template #header>
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold text-[var(--foreground)]">Players</h2>
                  <p class="text-sm text-[var(--muted-foreground)]">8 of 8 players</p>
                </div>
                <UButton color="red" class="bg-red-600 hover:bg-red-700">
                  <Icon name="i-heroicons-plus" class="mr-1" />
                  Add Player
                </UButton>
              </div>
            </template>

            <!-- Search and Filters -->
            <div class="mb-6">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                  <UInput
                    icon="i-heroicons-magnifying-glass"
                    placeholder="Search players..."
                    class="w-full"
                  />
                </div>
                <div class="flex gap-2">
                  <UButton variant="solid" color="red" size="sm">All</UButton>
                  <UButton variant="ghost" color="gray" size="sm">
                    <span class="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                    Gold
                  </UButton>
                  <UButton variant="ghost" color="gray" size="sm">
                    <span class="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                    Silver
                  </UButton>
                  <UButton variant="ghost" color="gray" size="sm">
                    <span class="inline-block w-2 h-2 rounded-full bg-orange-600 mr-2"></span>
                    Bronze
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Player Cards -->
            <div class="space-y-4">
              <!-- Player 1: Sarah Johnson -->
              <div class="rounded-lg border border-[var(--border)] bg-red-50 p-4">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red-200 text-red-700 font-bold text-lg">
                      SJ
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="font-semibold text-[var(--foreground)]">Sarah Johnson</h3>
                        <UBadge color="yellow" variant="solid" size="xs">GOLD</UBadge>
                      </div>
                      <p class="text-sm text-[var(--muted-foreground)]">
                        Outside Hitter • 180cm • ⭐ 7.8 overall
                      </p>
                    </div>
                  </div>
                  <UButton variant="ghost" color="gray" icon="i-heroicons-ellipsis-vertical" size="sm" />
                </div>

                <!-- Skills -->
                <div class="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Serving</span>
                      <span class="font-medium text-[var(--foreground)]">9/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 90%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Spiking</span>
                      <span class="font-medium text-[var(--foreground)]">9/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 90%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Passing</span>
                      <span class="font-medium text-[var(--foreground)]">8/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 80%"></div>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div class="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-calendar" class="h-3 w-3" />
                    52 trainings
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-fire" class="h-3 w-3" />
                    5 day streak
                  </span>
                </div>
              </div>

              <!-- Player 2: Emma Martinez -->
              <div class="rounded-lg border border-[var(--border)] bg-white p-4">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-bold text-lg">
                      EM
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="font-semibold text-[var(--foreground)]">Emma Martinez</h3>
                        <UBadge color="gray" variant="solid" size="xs">SILVER</UBadge>
                      </div>
                      <p class="text-sm text-[var(--muted-foreground)]">
                        Setter • 175cm • ⭐ 6.5 overall
                      </p>
                    </div>
                  </div>
                  <UButton variant="ghost" color="gray" icon="i-heroicons-ellipsis-vertical" size="sm" />
                </div>

                <!-- Skills -->
                <div class="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Setting</span>
                      <span class="font-medium text-[var(--foreground)]">8/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 80%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Passing</span>
                      <span class="font-medium text-[var(--foreground)]">7/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 70%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="text-[var(--muted-foreground)]">Serving</span>
                      <span class="font-medium text-[var(--foreground)]">6/10</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-red-600" style="width: 60%"></div>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div class="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-calendar" class="h-3 w-3" />
                    38 trainings
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-fire" class="h-3 w-3" />
                    3 day streak
                  </span>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Recent Activity Sidebar (1/3 width) -->
        <div class="lg:col-span-1">
          <UCard class="bg-white border border-[var(--border)]">
            <template #header>
              <h2 class="text-xl font-bold text-[var(--foreground)]">Recent Activity</h2>
            </template>

            <div class="space-y-4">
              <!-- Activity 1 -->
              <div class="border-l-2 border-red-600 pl-4">
                <div class="flex items-start gap-3 mb-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded bg-red-50">
                    <Icon name="i-heroicons-calendar" class="h-4 w-4 text-red-600" />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-[var(--foreground)] text-sm">Training Session</h4>
                    <p class="text-xs text-[var(--muted-foreground)]">Oct 6</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-2">
                  <UBadge color="gray" variant="soft" size="xs">serving</UBadge>
                  <UBadge color="gray" variant="soft" size="xs">passing</UBadge>
                  <UBadge color="gray" variant="soft" size="xs">tactics</UBadge>
                </div>
                <div class="flex items-center gap-3 text-xs text-[var(--muted-foreground)] mb-2">
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-users" class="h-3 w-3" />
                    5 players
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-clock" class="h-3 w-3" />
                    120 min
                  </span>
                </div>
                <p class="text-xs text-[var(--muted-foreground)]">
                  Focused on serve-receive rotations. Team showed great energy.
                </p>
              </div>

              <!-- Activity 2 -->
              <div class="border-l-2 border-red-600 pl-4">
                <div class="flex items-start gap-3 mb-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded bg-red-50">
                    <Icon name="i-heroicons-calendar" class="h-4 w-4 text-red-600" />
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-[var(--foreground)] text-sm">Training Session</h4>
                    <p class="text-xs text-[var(--muted-foreground)]">Oct 4</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-2">
                  <UBadge color="gray" variant="soft" size="xs">blocking</UBadge>
                  <UBadge color="gray" variant="soft" size="xs">spiking</UBadge>
                </div>
                <div class="flex items-center gap-3 text-xs text-[var(--muted-foreground)] mb-2">
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-users" class="h-3 w-3" />
                    4 players
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="i-heroicons-clock" class="h-3 w-3" />
                    90 min
                  </span>
                </div>
                <p class="text-xs text-[var(--muted-foreground)]">
                  Offensive drills. Focused on timing and approach angles.
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Dashboard page
</script>
