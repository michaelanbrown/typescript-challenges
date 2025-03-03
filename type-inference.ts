function getTypeList(data: any[]): string[] {
    return data.map((item) => typeof item);
}