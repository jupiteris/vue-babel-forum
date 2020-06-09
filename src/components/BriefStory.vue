<template>
	<b-col lg="2" md="4" sm="6" xs="12" class="briefDiv">
		<b-card
			v-if="story.id === 'about'"
			id="about"
			v-bind:title="story.title"
			tag="article"
			class="mb-2"
			@click="handleMoveReader(story.id)"
		>
			<div class="textDiv">
				<b-card-text>
					{{ story.raw }}
					<p @click="handleMoveCode()">
						Codebook
					</p>
				</b-card-text>
			</div>
		</b-card>
		<b-card
			v-else
			v-bind:title="story.title"
			tag="article"
			class="mb-2"
			@click="handleMoveReader(story.id)"
		>
			<div class="textDiv">
				<b-card-text>{{ story.raw }}</b-card-text>
			</div>
		</b-card>
	</b-col>
</template>

<script>
export default {
	name: 'BriefStory',
	props: {
		story: Object,
	},
	methods: {
		handleMoveReader(id) {
			// route to the About page
			if (id === 'about') {
				window.location.href = '#/about';
			}
			// navigate to the BBU custom reader page by id
			else {
				window.open('https://read.babelbetween.us/#/t/' + id, '_blank');
			}
		},
		handleMoveCode() {
			event.stopPropagation();
			event.preventDefault();
			window.open('https://codes.bbu.world/', '_blank');
		},
	},
	mounted() {},
};
</script>

<style scoped>
.briefDiv {
	padding: 20px;
}
.card-body:hover {
	cursor: pointer;
}
.card {
	border: 0px;
	height: 208px;
	max-width: unset;
	background: #fdfdfd;
}
.card-body {
	padding: 0px;
	text-align: left;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	background: #fdfdfd;
}
.card-title {
	font-size: 20px;
	font-weight: bold;
}
.textDiv {
	margin-bottom: 5px;
	overflow: hidden;
}
.card-text {
	font-size: 14px;
	white-space: pre-line;
}
#about .card-title {
	font-size: 26px;
	white-space: pre;
}
#about .card-text {
	font-size: 20px;
	font-weight: bold;
}
#about p {
	margin-top: 10px;
}
@media (max-width: 540px) {
	#about {
		height: 140px;
	}
	#about .card-title {
		white-space: nowrap;
	}
	.briefDiv {
		padding: 10px;
	}
	.card {
		height: 150px;
	}
}
</style>
