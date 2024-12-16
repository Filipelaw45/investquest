import { create } from 'zustand';

interface AlertTrade {
	dialogOpen: boolean;
	setDialogOpen: (open: boolean) => void;
}

export const useAlertTrade = create<AlertTrade>((set) => ({
	dialogOpen: false,
	setDialogOpen: (open) => set({
		dialogOpen: open,
	}),
}));
