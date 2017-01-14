// namespace Glob
import Moment from 'moment';
import {plantState} from './enums'

export declare namespace GJ {
// namespace Glob

    type JournalID = string

    interface JournalEntry {
        key?: number
        name: string,
        comments: string,
        actions: Array<actions> ,
        timestamp: Moment.Moment,
        state: plantState,
        temperature: number,
        humidity: number,
        warnings: Array<string>,
        ph: number,
        journalID: JournalID,
        author?: string // To possibly be changed to user type?
        pictures?: React.Image[]
    }

    interface Journal {
        id: JournalID,
        name: string,
        startDate: Moment.Moment,
        type: "batch" | "individual",
        plantMethod: "seed" | "cutting",
        medium: "hydroponic" | "cocoqua" // ways of growing the herb
        initialComments: string,
        numberOfPlants?: number // Only if the journal is a btatch
    }

    interface GLOBAL_STATE {
        journalEntries: {[id: string]: JournalEntry},
        journals: {[id: JournalID]: Journal}
    }

    type actions =
        | "watered"
        | "topped"
        | "transplanted"
        | "changedReservoir"
        | "pruned"

}
