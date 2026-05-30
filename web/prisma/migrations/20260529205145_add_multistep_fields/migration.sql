-- AlterTable
ALTER TABLE "waitlist_entries" ADD COLUMN     "aiAgentUsage" TEXT,
ADD COLUMN     "businessBlockers" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "businessWorkflows" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "companySize" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "earlyAccessInterest" TEXT,
ADD COLUMN     "marketingConsent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priorities" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "reasons" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "userType" TEXT,
ADD COLUMN     "wantedFeatures" TEXT[] DEFAULT ARRAY[]::TEXT[];
