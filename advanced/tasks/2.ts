enum TypesOfMedia {
	VIDEO = "video",
	AUDIO = "audio",
};

enum FormatsOfMedia {
	MP4 = ".mp4",
	MOV = ".mov",
	MKV = ".mkv",
	FLV = ".flv",
	WEBM = ".webM",
}

interface MediaData {
	name: string;
	type: TypesOfMedia.VIDEO;
	format: FormatsOfMedia.WEBM;
	subtitles?: string;
	marks?: unknown;
}

function playMedia(
	{ name, type, format, subtitles, marks }: MediaData = {
		name: "example",
		type: TypesOfMedia.VIDEO,
		format: FormatsOfMedia.WEBM,
	}
): string {
	let marksLog: string;

	if (Array.isArray(marks)) {
		marksLog = marks.join(", ").trim();
	} else if (marks === "string") {
		marksLog = marks;
	} else {
		marksLog = "Unsupported type of marks";
	}

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

	return "Media started";
}

playMedia({
	name: "WoW",
	format: FormatsOfMedia.WEBM,
	type: TypesOfMedia.VIDEO,
	subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"],
});
