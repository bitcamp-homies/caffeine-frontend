// @ts-nocheck

import React from 'react';

const PointUsed = () => {
  return (
    <div>
        <main
		class="flex-1 bg-gray-200 dark:bg-white overflow-y-auto transition
		duration-500 ease-in-out">
		<div
			class="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out">
			<h2 class="text-4xl font-medium capitalize">expenses</h2>
			<div class="mt-1 mb-4 flex items-center justify-between">
				<span class="text-sm">
					Thumbs Point
					<strong>71.180,00kr</strong>
				</span>

				<div class="flex items-center select-none">
					<span class="hover:text-pink-500 cursor-pointer mr-3">

						<svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
							<path
								d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
						</svg>
					</span>

					<input
						class="bg-transparent focus:outline-none"
						placeholder="Search in activity" />

				</div>

				<button
					class="flex items-center focus:outline-none border
					rounded-full py-2 px-6 leading-none border-gray-500
					select-none hover:text-pink-600 hover:bg-pink-300">
					<svg class="h-5 w-5 fill-current mr-1" viewBox="0 0 24 24">
						<path
							d="M12 1L8 5h3v9h2V5h3m2 18H6a2 2 0 01-2-2V9a2 2 0
							012-2h3v2H6v12h12V9h-3V7h3a2 2 0 012 2v12a2 2 0 01-2
							2z"></path>
					</svg>
					<span>Export</span>
				</button>

				<div class="flex items-center select-none">
					<span>Filter</span>
					<button
						class="ml-3 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0
								01-1.41 0l-2.01-2.01a.989.989 0
								01-.29-.83V12h-.03L4.21 4.62a1 1 0
								01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
								.43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"></path>
						</svg>
					</button>
					<button
						class="ml-2 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
						</svg>
					</button>
					<button
						class="ml-2 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-pink-500 hover:bg-pink-300 transition
						duration-500 ease-in-out">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4
								4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21
								3.58-4 8-4z"></path>
						</svg>
					</button>
				</div>
			</div>

			<div
				class="border dark:border-gray-700 transition duration-500
				ease-in-out"></div>
			<div class="flex flex-col mt-2">
				<div class="flex flex-row mt-2">
					<div
						class="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
						<div class="flex">
							<img
								class="h-12 w-12 rounded-full object-cover"
								src="data:image/jpeg;base64,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"
								alt="infamous" />

							<div class="flex flex-col ml-6">
								<span class="text-lg font-bold">Amazon</span>
								<div class="mt-4 flex">
									<div class="flex">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											Niccolo perra
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											13 aug 2016
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											21 hours
										</span>
									</div>
								</div>

								<div class="mt-4 flex">
									<button
										class="flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-gray-500
										dark:border-gray-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2"
											viewBox="0 0 24 24">
											<path
												d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"></path>
										</svg>
										<span>Select Category</span>
									</button>

									<button
										class="flex items-center ml-4
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2
											text-blue-600"
											viewBox="0 0 576 512">
											<path
												d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
										</svg>
										<span>Add note</span>
									</button>

								</div>
							</div>
						</div>

						<div class="flex flex-col -mt-10 mr-20">
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								Refunded
							</span>
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								200 $
							</span>
							<span
								class="text-sm text-gray-700 dark:text-gray-400
								mt-2">
								300,00kr
							</span>

						</div>
					</div>

					<div
						class="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M9.47 9.65l-1.41 1.42L11
								14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
								.9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
								18V5h10z"></path>
						</svg>

					</div>
				</div>

				<div class="flex flex-row mt-2">
					<div
						class="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6">
						<div class="flex">
							<img
								class="h-12 w-12 rounded-full object-cover"
								src="data:image/jpeg;base64,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"
								alt="infamous" />

							<div class="flex flex-col ml-6">
								<span class="text-lg font-bold">Amazon</span>
								<div class="mt-4 flex">
									<div class="flex">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											Niccolo perra
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											13 aug 2016
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											21 hours
										</span>
									</div>
								</div>

								<div class="mt-4 flex">
									<button
										class="flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-gray-500
										dark:border-gray-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2"
											viewBox="0 0 24 24">
											<path
												d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"></path>
										</svg>
										<span>Select Category</span>
									</button>

									<button
										class="flex items-center ml-4
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2
											text-blue-600"
											viewBox="0 0 576 512">
											<path
												d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
										</svg>
										<span>Add note</span>
									</button>

								</div>
							</div>
						</div>

						<div class="flex flex-col -mt-10 mr-20">
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								Refunded
							</span>
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								200 $
							</span>
							<span
								class="text-sm text-gray-700 dark:text-gray-400
								mt-2">
								300,00kr
							</span>

						</div>
					</div>

					<div
						class="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M9.47 9.65l-1.41 1.42L11
								14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
								.9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
								18V5h10z"></path>
						</svg>

					</div>
				</div>
				<div class="flex flex-row mt-2">
					<div
						class="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6">

						<div class="flex">
							<img
								class="h-12 w-12 rounded-full object-cover"
								src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFhUXFxgZFhcXGBUXFRgXGBUXGBgVGBcaHSggGBonGxgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8mHyYvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA9EAABAwIEAwYFAgUEAgIDAAABAAIRAyEEEjFBBVFhEyJxgZGhBjKx0fBCwQcUUuHxFSNicoKyksIXM5P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKREAAgICAgICAAUFAAAAAAAAAAECEQMhEjEEQRNRFDJhcYEFIlKx8P/aAAwDAQACEQMRAD8A8qq4EbGPFJuw7tYkcxdWuJpPaIqBr50ykHcTpeVlFgbYDewm46XCnyHrZSgX5K3FcQ0wHG1hIIEb9OqFi8zXRlgjY6+yUdUM6QbISjyCtGVnkB1MEZbG1/f09ELB4gscCPPqEZ9LYSXSbAE2GqVqDf1TLaFZ1VAggOHkrvDMb2ZJMlcjwXFn5J00/cK8Y8rmyQ2XhIcoNstMquYQ5uo0UaLjJ5KL2JWhky14Satd5Z2rmkjUnWF1FPDGkA2o8uhpc4nroPZJfw+4cKhqOMWgCU/8R0soLQ75jlO5gIPSHW+znRQ7StmY0lmYeEJvimHgZrRpG6vOG8PDKIJJMHOImeR01CpPiHHUM2XtBmF4b3teZFkj2N0MfDrLl3SF0DCuNwHHxSblFGo8k2tlnYAayrTiPGatKnmLA023a652ExJXJl1JL76OrF+Vv6OkY1HaxcHT4hjKozMd3Zv3uz01FiZ/t4pxnGqzDTpCBVquy02uc95MXc46QABOo2UpxalxW2VhJOPJ6R2rWIwaqOnxP+WYW4p7nEEkv7PKIMQMoJNiQOatWcVoZA/tWBpaHDMQ05SM0kG4tsVOUJL0FzXoba1SAVVW+KMEwScRTP8A1OY+jZSjvjzAAT2p/wD51J/9VliyPqLJPLH7OlYFJrFyH/5IwUw0VXdcrQI595wPsou/iVh9qNWOppg2BJtmOwTfhsv+JJ5o/Z2RapBqFg8SyrTbVpnMx7Q5p5g/RGCg1WmNdmwFhapBSAQFsHlWi1GhYGI0DkADViPkWixag8hZwQixNupoTgmopGQs5qCWpyoEEtRorGR894zEjMAw2329kLtSf0gzv/hK1dyNSVKk9xmGzAJt7r6HikjxOTbJCnLsxbadOca8kq5hDpMmJEDp+FWLXQCYdYT0tt46JRrtAOsnbmfefVZMzVAKNcA92eRixvsExjaM850E77keyhTDS4zcWPKT0lHo1Rocx8ZtzE7iIIRbXYVsTweHLnZmmMsefS3n6LpGaAb7pLB0GNJANjEzp6+ZVhi5aR2WWRrmm/gpylbodRpBKdVrQ7M9rdoJExpprrZL/wAwXuLaMO/pggknKCCBM6u5fp6rmiKkkdkSd+643yuaT6uzJnD1K4NqTxM6MO4AOg6JvjF5nT8L4riadUMa2rAf3mtYf01HakTEtay//J3iuvZxFlUNfXp1WugWhzWkm5uW2vtK47FcVxNOh2z3EkADIS6bkDXbVUo4ziapnJAG7pP+Urx8lY6y8dHovH/iRjKLaYFMNqNcMuaqXZZ1LmkCJ2PTVcJhuMFlQOgVBJGQuc1pnT5AIixVXiTUq5Q4xlkCx0JmIQf9P51D/wDE/dZKC0BubOgxnxixwAZRp03h2rM1joYJPJVHFeNVKjYJ3nUpUcJGuZ3oo4vBENJ7xjogo4uSa7C55eDi3obwXFqjWBocfUpilxZ4q06uY5mZgOkx9yqbBsnUkeSZqYYG4dP1RcIKdgU5uFWX/EPiyq8tzONjmveY0H7+nJZX45Wq0WsZRc5rWkDKxx0YWzIGx3XO0aQkA3E7r0b4O+Mn0IovAcwfKJiPAHTy9EmaagrjGxsUZTdOVHJs4XxKoLYTEWvPZOb6EgSmaPwZxZ+mGeP+76bPYule6cPx1Ou3PScHDeNQYmCNtU4GLkf9Qmuoot+Fj7kzwin/AA34qTBp02ydTVbEeUmE9R/hTxEmHVMO0f8Ad59gxe2BikGpH/UMv6A/DYxHgfDG4bD0sOwktpsDQTqebj4mT5p0hTDVNoXC7btlk0lojTaitCk1qIAhROUgWVSARIUSEaFsjC0QpwsyJqNYEtQ3MTJaouasOpCb2IRYnHNQSxErGR8xtALiDsNPFGw9QCzfmg6WtF/ZAw1QEkGxO3PzWqdEib3HhcH8he3Pb2cWPUdE3VZZ0J06ASfeAj1WDICAJIEHzASWIBa0NGoAHr3neP6R5IWHLogm2yZx0qApK3aNlzpAyxsI/Zaa5xMAz06I9LVxcJMW87D86ItKhBk7b9bJuVKyahbGqFIc5gDnqm25yb/nmlGPMyfZNNrmbFQ2dFIsxQhknlJ/ZDwrMx5ae5hTrVTly84v4DQLVCoA0i8n7WTJ6JNMsmgmBY3O22y5vjuPDSTMmYH0Hlv5q4xdR1PD1an6g23MXgnyBnyXn9aqah3K0Yc/2CpcN+wzseSZJUv58xol2YQlHp4AbldHxIi8rCsxpHIKNXHEgjMLrTsK0dVE0mjZD4kD5WL4HEZbK1pmm75hfmPuq7swdFrIR8vmtPHy2jQyVouaXCmuO8eKvuGYSm0aCeZF1TcE4k091xh3I6HwV4x/6gvPzOd8Wd2Lj+ZFvh+NHB1GYlglkhldg/Uw/K8D+pu3kF6zhMQ2oxtRhzNcA5p5giQV40wCpSe0jb+4PqAuq+FPitjKWINR3cpBopMHKnT78b3dbyXO8bnHS2v9eh3KpfuehgKQC8R4x/FzFOJFBjKTdpGd/qbey47H/FOMrGa2Iqv/APLLHgGwB5BUh4E3+bRCXkRXR9QQpNXzp8P/ABzjKRY11ZxYP6rmLxPO/sV7l8I/EDcbR7QNyvBh7dQDzB3BUs/iyxK/QY5VIvJWwsCmAuYLZFSaFgCkAiBszKtZVMBSAWEsHlUHBMZFEsWCpCjmoRCbcxDLESsZHyhiKYBscwgGx3I08pWqDyHd4S3fcxv9FpjWm821/wCXpv5Kcy2ZtofIadbSvdr0c1kqhBM3Mg9bm/l/ZbaIHWUuA65Fp9PArZq2iLyg0FOh6lSDYB8T4D8Ka4e9pnPuSfPklBYOk6Q0eO/vKzDwNTZLNWhoOmN1IBcQbfmykxrjoLdUSm1t3X81qtXsALJElQ7bvQ611gOSfZMd0CY1OwVRgnlxgqwxuONNvYgiXtDja4aSRr1j3TpctEpOtg8fiQ5mQ3BF+sjRUgwzGgwEao7lsgmpZdUYKKpHLKTk9gCUF1T1U6rkm55lOKSNRCc5C7ZDe9KEKKiLTfskJTlFywRrK0+W6ao8Sqs3zDrYpNhUKjksoRl2gxk49F7/AK9ULO73QWwbC4kmCN77nkFLhz3NAHT/ACk+H8Ir1GudSpPqBkF2UTlB3I8irng9UBtok76+iilGN0WuT7Fn8Ob8+TM4nQjujqQbHzskONUWho7jWun9IAkReYtyuunxBMdSuZ4nwyqCXXI8Z8k0WafVUU7WRPKNPRes/wAJ8c1lRrLy8BpudYcb8xpc/efKz3T+aruv4QNL+IM5ND3HwDS0e5Hql8hJ43YuN1I97UwtCFILwTpZgCkAshbCwrZsBEY1QCPSVcMFOaixJMkKShUpo6i/Retl8XHwdIkpOxJ4Qij1EArxTpifIFSk5pv428dwiUqoiCPMa38ddLJvEEO7ragjr4rMbRLsoFg0RN49gvoL+yH6oEXAxeRuR+42UnQdYjUc/UJfsLwNRrEKRLrhzXdTEeo3WoNh35g0A6G99b8/T3WU6llHE1y64II0t+cghtclaDeyyw9U6Smw2TeFVUnp2i4nRTaKJj9LFMZoJjdI4nHNqOLpy3mHWI6dfIlaxIim53KB6qPAoJdPIfurYVqyGZ06Asxs6wDsdj9lOp7p/HYem4GGNmOQF/Jc2yqRaZHj9OSv0QD16kG/qEB1WVCpVnf1/shyNglYTRpwbpvDcPe4S2m9w5hriPUBCw9YsIcIkaSA6PIiE474gxJt2zh4QPpokfL0OuPsDi+GPY3MaT2iYlzXAe6A0K04W91Q/wC45z5P6nOd9SrfGcCplstlh9R6bLJ12Fxvo5YuTPD8K6q8MaCSTAjWTso4jBuYY18F0XwbxP8Al60sY0vAPzibkGI5XtI5lacmo6DjinLZ7L8JcGGFwzKUDNrUPNx18Y08l45ROSo9kHuve2B/xcQfova+B8UZiKQe3WBmHIkTHgp1OCYVznPdh6Jc/wCZxpsLnaXJiZsL9F5OPM8cpcvZ6WTEpJUeVMiRLtbxufBD4e19XEmi5jgCC5s8hG+m+i9PrfCOFdUY9rcgaCC1tg4SCJOojTwMLoaFBjQ0BjQGiGwBbw5Kj8pJaRNwPn74o+E6tAGrBLHOgGDYkExPr6L0H+C/w2aTH4p8gvGRn/XVx9QPQrv+K8Np4imaVUS0kSPDrsnaTA0BrQAAIAFgAp5PLc8fEj8aUrRMNUwFELYK4wskFtRCkEBWYCiNcgTdSlMm1tGaGhVUKlRBzKJcrz8nJKPFsVQNvcgkrZKBUN/mb6rmeiqR8kfypPyuzHw0UWNqA6geJRWudMz+eakC3fXfmvorZHihas4kmWHMdxdaw0XBcQfOfqmxWJMAec/uh4mk0nM8y7cD8ujYnH6CMpuaJ16x16hRN0DD1C3XTpPuQm8PVaSDlkA/1Az/AOJj6pWjJm8KyXAdV0NOg1ugVfTptI7ojfr5yov4iWGDcECSD+yWm1oblXZZ8fwc4XtGzYtLrc3Fuvp6qi4LVGYtO4+n+SrscVz0CwZCyC1w/Wc2s7rlWuNN/UH1/wAhNhbVpiZknTR1raY5D0XL4vDhrnCBr7bLpMLVDgCDYhL8Zw4LQ8eBt6H85ro7Oe6OZI2hReYsmA1K1zdKOgmHaDrHnIGkyfzdNs4W6zqhaymROcloLm5c006bnNc+bARuYss4VhRUzOc11TIGxSZAc8Ex45RaSATcaXIHjMQ+vWl9nGGxcBjWjKGAG4AAiEfRvZ03Aq7G5XUqcQQWl/edPM7a3iN905xfHOLiXOkm5JMknck7pfhlKGgBar0w57sxs0SZ5Tr+clCUvZ0Rh6RXYmtDS9wvoPE6ffyVXhMQWvz3JiNfRa4njBUf3ZDRZv3PUrMFTLiGtEuJgAak7JktWxJPdI9o/hbP8s6o6Ye+Gz/xmfcn0XYVsQW31C5z4doihhqVCZLW94jTO4lzo6SSrBlZxkHTW/1Xg5pcptntY41BJluzEhxseg/dWNMrksJVObVdBhMQYnUKfT2CcLWi0aURpQmFECY42ggK3KgFkpaFompZyhSsJt5oAokHLcoQfKzMig8QhK0XKBctSiGjZKVe0EyY9FKrXaLSgvqNm50spybKKJ8otnnA6rVQDUe+noogT/eylI3M/RfTHBZOmC7r6AeqIabW6+g080BzyOi23qga0EdUJsBbkNvsh1cO2O7ryWhWPgFjZ2kBEVsLh3lg0GYiB05+CFUeY1uShtIzRyRnOuBsmQjACoRoYRjUDx3iA8aHQOHI9VjqN7ID2bFZqzJlvwLE3yE21b+4/Oqvi1rgQeS4mhULXAjUaLqcHiw5odNz+QniyckVGMoZSQt8GwdKrVyVZAIsQYuNj5T6Kz4lSDhm3H0VBnLXAjUGR4hLNWqQ0HTs67GcKwOHpdq6nmOgBe7vHZov7xzVTgOIivVitSaW/pLSRVpjYB7pzjWz56ZbRS43EVHvJqGT7AcgNgrn4co78z9B/dThFxW2VnJSdJHTHC9i5zZkWIMRLXNDgY2sRZUXGJDHx+oge8/sr44+JpvbnZqATDmmNWuvHgQR0Sz+GNxJZSo1Mpc4mKgiGtBkhwlp1NzlmEskux1J9M47DYRz3BrWlzjoBcrv/hL4fNEh9QTUNgNmzt1PX8LuCwLcIDSDQHfqJ+ckcyjUsUWmVx5s8pXFdHXhwxjUntnT4RrROU3HoPBSxNSGyTc7+Co8DjjPLmm21MzXEnSYHiuBwd7O1SVFozLlYRrF/VN4PEkTBt91T4eqCB0CsKDmZbyD7EckJIKZ0lHiLYHv0Vg2oCuRwlU67C8K7wVfMM09CEj0TniVWizNRaFURKSxWY6JXF13QAAZQUrEjhtFwaii6tHnqP3VPTxbx82yJiMYD4oS7D8Oxs1u9E2m6M2qOa54Ylx/V7Lfbu/rKZRoLxl3Uru2QH1HHWVUuqO/rd6oLid3H1RoyjRb31mIQTUdz+ir8O+8T16oVaq+TDzHgjwGPnIuUvFQ00Uc5X0NHiBRUGy0Sg5lsvWowUKT3WMIGZFouE30WMAPRSp1SOqJiaBbcXHP7odIXuiYZp1wTyKZe0EJZjRFwD6LbHFuhkcj+xRTFaMfhZHd15IvC8TldldofY/3U6bwbjzCFjKUw4eaIC/aRbQqrqYUdrA+WZ8uXrZMcPrggZrGLqzoYdpB033/AMqsYciTlxOd4rh4Id5fb91ecCp5WN8z6lF45hgyiC5pBLgW+RBJ05H3CZwrB2bHDQiZgDc7BbLhlDv6DjyKRrE4aoYhusRJDZnlMSfDmu64Z8IPa0NGVjg0Zy43mJIE3iZVHg8H21ShVcLSSbWLaQbleeRJ7v8A4+Ku6WOe5xGYwYmdSY6rzvMtNR/k7vE/ut/wWPF8JTNOnLg+q2Q517t/SCdyL+UKrfhwbEDxtI80xWsUtWqQFyylydnbCPBUFoYfICA0SY62RWN7sEEGSqkYtwIAcbptmLfuQfL7KUsciqmqLqhTa0CY680N7Dm6TbXRKUK/MehR8RjSAPIX5KMcck9jckO0qgF5j1TNHHhhJDtVWVcZBAjW2qjWxDbiDYSdNEXjH5Itn8XJ/V9EB2OB1k+qrKhYBJMDwQg1rriI8/uh8SMp10Wv843ksNVrt49AqgUvHyP9lIUnbEo/GHmWLmf0u8J1SzOI7FBAeOSBXpl1yBPMGCiov2K/0LE42dChvxSqXUHDTMFKlVcSAea3EWy/NUtAIiY3/sg9sTePqFurWgxGyWfTcTJn3RoY8JFRbzDkEIuUcy9w8IM4BbdSBFkEOUg/qVjG/wCWWjhXItJ5RxVI29FjCzXVAIiQgu6NIVmzExt6hY+q07CULDRWQdQoFxVqGM8t0JzAeXQ7/nitYBBtQjRPYXEzYqDMLJjdFoYDQkxO6ZMDQ3TbtEhdDwKqwOa1wLr2ETfa2+y51lB4mCCQdLg+PJGw7qkgEADdxkgWnQCenmuvxskYyTZzZYOSotvibiBqB3bEktcWsyuBDmkjeTGhNhGmi6M8Apijh29uGOfSBbmHdN5u+YaDset4F1y7OGCu2RJdcB3eEd3NcG231XW4HD1a+Dymm1vYQzOTMiTLLcjJ8yF6GWKzJ1/2zl5rG1v9x34ZrU8GXA/77zTAcA9poNL47stkVHgDUGBMbKZxQLswpwNdZI+4VLh+BVH9xtbsj8wcJDZANnd6CPFRPxFiaX+wzDOFSYc97w0PIt3Q20b2cfKF4HneLl5qXqtHr+H5OOMGvfsu6+NYTJkSI0P2S1bFNiA4EH20XPV/itwq/wC8xjmENl1KZBygFwDrOEjpzlW9JtOqwVaTg5h3Go6OGrT0K86UZQ7R6MJRmtMNlPIeMj2Uy8jaVWFt7FFpVLpOZRRRbYfEA9FJ4cbgg9NEm4jKCCZ5H6zupUXu2P2S8kHiMuruDgXAiFp2KBm+sLddzmA6G21x5pF+LB+ZnmCiqZmqHsZiO5HNapVIZ5Kro12F8EENO83HJMPp1BbUfnJNQthWwGddj5q0puMWdsqNtU2BFgU8MU3f6IJBTLOm9wAkgnfZHwFN9WqKLGiSJknRVbK42PunOB4wNrl5cWwDf88EJdDW/QTiJNF2V40MSDKTY8EhQ4tiMztZm/qh06hmwlKurYb3RaUBNSTptKvWBnLVUHC5c490fUc1fUuFtgE1Q0m5EG0rnllpj6R8y9kVrszyR+xPNb7N3ivojwReOixMSdwsDhuPZYwJroU2uupBjSiNwwO6wNmNqLeaVE4Y7FRNJywTZbCwuGn5otFrtwhArAHRE2MEI1CoY2skWncrdOr1/wAIUNZYio7b639jdMYfiTmfOzN1iPVVpxB1j7I7MUCIj3WUmujcUzqsBxugRBacszlnuzzjmuh/1SiaFY06jRmLHPYCcwjuFzRMkXbPK55rzvtQROX6H82UCWi+hgjU7ggjwgkea6oebNdqznyeJCW0dZX4rlmlqIlp5bg+BhDq8RpuDWyJLSARYh0Wv0m3guSL6hjMZyggQfD7LMPTcCDyvEqcszloeOJIO6k9xIOmsm51/PVdl8KcZwtLDHDOAa8kuzxGYkXzzobQDpAC4+riDEFnp7ft6JU4oTefTTzXLkxqapl4TcXZ19XEAPAm3S/gpy43AJ6yucwdQm86R+fRdbw+qMluXP8AOS45YknR3RyOWyFKq8at9Lrofh1jauZjoBF2yAJ6KpY+Gf46/ZDZVi4N41CjkikWi2x7ibi0lnW3Xkqt7yLOEFZjcSSBJJReHEPmb+Oy0FSDKTbE6gGoKtMBiMzP+TdYMEjmkuIZWmAEDDVyx4cP8jcJxbL1ldp1g+Ij3Uwxv9J8iD7pd1JphzfldcfZL1qV9Ug46aTDrI8iomi3Z356JNpOx91I1Hf1FYwV9ID9X7otCRIlKGvzIJ8P7KdDEDPew5/4U3cjKkW2ErlmkwmnYxx325Kq7VpNjI8LJhhEbeSnLHTHUjxEYkotPF81JuAqkBwpyDeRH3WjgXf0OHmIXvnhkm4oIjKzNDZQPC6lu6QTsY+6h/p1XQDeNRrMLGGsrDy9VH+XG0hBHDa/9Bt1HKeakMDX2YbdR9+ixg4oHZyw0XjkUtVNWnGcETzgz+StDGlYwy57tIS1aoOUFTGN6IWJrh1/zZYxJlRkd7y/dDzNnWyerYmm+iGwO60ZTmGfPIBaW7tiTPvKe+GsfTp06rRWbh6zn0y2s6m6oDSAdnpDKxxaSS12kOywSFjUUjqoO/28luk9vP8AddRXxuFLqdUV6ZIwVai5gp1Wv7V1HENa6OzyAFz2CzrTyEhqrxzD9sXurMqYbJWFPDCk6m+m1+FqsbSL+zhpzOayWlwk5josajkv5zr7LP50aFXn+qYf+fNcnNQNGqGsylhph2FqMZh4DSBlcQ0OAI0dzVzwj4iwbKcMcKB7CmwNc6tIc3E4p7gatOg4nu1KZ+WLxNkKCcZTxrZuURuNbz+q64fEuE7KlTdUc4sbh80tJpZm4oPqPaOzD+0yDWwLXOGtivjuOYd3EsLXNZr6NOqHOINd+VvaSZa+iw6R3Wh2mq1Gs5l2ObPzfZROLZMzsvQ6Pxpg6lWu7OaDpYKVepSbXBpNquc9jWspAsDmltiCeZsiYn4u4YcPVpU+4HNxeWk6keyzPfNLPDC4EyXNymG3BiyxjhMFi6QF3gXnQp1vEaVv96P/AJfZXnw98X4fD8Pw9GHOqipUNVrQ1sNNQOGYvpkPBEiGuBHNXrPirhbTVZ2wLa1TFVM/8vVApdswNZTIy5nEGTIEW2soyxpstHI0jkWcTo6ds4nwJ/ZFp8bogBufQRcHTb7LfGamAdgsPSp4pr6uH7YQKFZva9pVzNhzgA2G8yuv+H/ifhtLD4RlWqGml2edraLokMdnNTuGTJ+Zju8dRCm8EX2yqztdI4nFccok/Pp0KLgOOUwe67W24HrC7Hh/xRgadLCtdjA4U3h1cOw1XMWgQ2iwilAYyxm5dl1uuP8AjviNDE4hjsPV7QZA2zXtg53GO9TYTYjY+KPwxSB88mxqrXL3SRFvdalBbk07Qg/nRE7u1Qeyg4l+SLDhtZ2YAGxVhVYToCVTYMSbOuIOlvquiw9aGG4SNDp6KtjYKJUsFGpUuTbdCquJsPFBqw3SBYe5J8gncNF56pWnTcBp+aqdLFNpgOe0mTt06I8X9AUl9jbnEAxH5zUaeKqETlB6zCZx+Kw1ZjX0nRUAAdTLXAGB8wNx6xPW6VA5qUk/aCmvTPI3fnutDRYsXsnkEFpYsWGC0NUzWWLEQMUO6isWIGJI9Dfy+qxYsZkRr5LdNYsQYCY1HiEav+y2sQD6N0vlQ9x4LFiISGyEsWIikqabp6rFiDCgzNW+KKdT4rFilLsrHodwe/grpv8A9j9FpYgw/Zb4DTyVfw//APc/wd9VtYlQ76GWfN/5D/1Rq+h8voFixMAY4V+rw/YJl3yDw+yxYpvsoukRPzDz/dE4n8rP+p+oWLEH2MuhUaDx/YIOK+Vnn9FpYmXYj6I8J1P/AFP1TeJ1HgFpYo5yuE//2Q=="
								alt="infamous" />

							<div class="flex flex-col ml-6">
								<span class="text-lg font-bold">Amazon</span>
								<div class="mt-4 flex">
									<div class="flex">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											Niccolo perra
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											13 aug 2016
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											21 hours
										</span>
									</div>
								</div>

								<div class="mt-4 flex">
									<button
										class="flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-gray-500
										dark:border-gray-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2"
											viewBox="0 0 24 24">
											<path
												d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"></path>
										</svg>
										<span>Select Category</span>
									</button>

									<button
										class="flex items-center ml-4
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2
											text-blue-600"
											viewBox="0 0 576 512">
											<path
												d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
										</svg>
										<span>Add note</span>
									</button>

								</div>
							</div>
						</div>

						<div class="flex flex-col -mt-10 mr-20">
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								Refunded
							</span>
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								200 $
							</span>
							<span
								class="text-sm text-gray-700 dark:text-gray-400
								mt-2">
								300,00kr
							</span>

						</div>
					</div>

					<div
						class="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M9.47 9.65l-1.41 1.42L11
								14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
								.9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
								18V5h10z"></path>
						</svg>

					</div>
				</div>
				<div class="flex flex-row mt-2">
					<div
						class="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6">
								<div class="flex">
							<img
								class="h-12 w-12 rounded-full object-cover"
								src="data:image/jpeg;base64,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"
								alt="infamous" />

							<div class="flex flex-col ml-6">
								<span class="text-lg font-bold">Amazon</span>
								<div class="mt-4 flex">
									<div class="flex">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											Niccolo perra
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											13 aug 2016
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											21 hours
										</span>
									</div>
								</div>

								<div class="mt-4 flex">
									<button
										class="flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-gray-500
										dark:border-gray-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2"
											viewBox="0 0 24 24">
											<path
												d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"></path>
										</svg>
										<span>Select Category</span>
									</button>

									<button
										class="flex items-center ml-4
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2
											text-blue-600"
											viewBox="0 0 576 512">
											<path
												d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
										</svg>
										<span>Add note</span>
									</button>

								</div>
							</div>
						</div>

						<div class="flex flex-col -mt-10 mr-20">
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								Refunded
							</span>
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								200 $
							</span>
							<span
								class="text-sm text-gray-700 dark:text-gray-400
								mt-2">
								300,00kr
							</span>

						</div>
					</div>

					<div
						class="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M9.47 9.65l-1.41 1.42L11
								14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
								.9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
								18V5h10z"></path>
						</svg>

					</div>
				</div>
				<div class="flex flex-row mt-2">
					<div
						class="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6">

						<div class="flex">
							<img
								class="h-12 w-12 rounded-full object-cover"
								src="data:image/jpeg;base64,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"
								alt="infamous" />

							<div class="flex flex-col ml-6">
								<span class="text-lg font-bold">Amazon</span>
								<div class="mt-4 flex">
									<div class="flex">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											Niccolo perra
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											13 aug 2016
										</span>
									</div>

									<div class="flex ml-6">
										<svg
											class="h-5 w-5 fill-current
											dark:text-gray-300"
											viewBox="0 0 24 24">
											<path
												d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"></path>
										</svg>
										<span
											class="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
											21 hours
										</span>
									</div>
								</div>

								<div class="mt-4 flex">
									<button
										class="flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-gray-500
										dark:border-gray-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2"
											viewBox="0 0 24 24">
											<path
												d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"></path>
										</svg>
										<span>Select Category</span>
									</button>

									<button
										class="flex items-center ml-4
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
										hover:bg-blue-400 hover:text-white
										dark-hover:text-gray-200">
										<svg
											class="h-5 w-5 fill-current mr-2
											text-blue-600"
											viewBox="0 0 576 512">
											<path
												d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
										</svg>
										<span>Add note</span>
									</button>

								</div>
							</div>
						</div>

						<div class="flex flex-col -mt-10 mr-20">
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								Refunded
							</span>
							<span
								class="font-semibold text-green-500
								dark:text-green-300">
								200 $
							</span>
							<span
								class="text-sm text-gray-700 dark:text-gray-400
								mt-2">
								300,00kr
							</span>

						</div>
					</div>

					<div
						class="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M9.47 9.65l-1.41 1.42L11
								14l5.19-5.18-1.41-1.42L11 11.18M17 3H7c-1.1 0-2
								.9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
								18V5h10z"></path>
						</svg>

					</div>
				</div>

			</div>
		</div>
	</main>
      </div>
  );
};

export default PointUsed;
