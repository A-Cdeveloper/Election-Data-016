export const getVotePercentageFormatted = (
  votedCount: number,
  registeredVoters: number
) => {
  return registeredVoters > 0
    ? ((votedCount / registeredVoters) * 100).toFixed(1)
    : "0.0";
};
